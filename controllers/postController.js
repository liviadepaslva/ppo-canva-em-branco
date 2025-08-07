const { PrismaClient } = require('../prisma/generated/prisma');
const prisma = new PrismaClient();

const criarPostagem = async (req, res) => {
    const { titulo, conteudo, categoria } = req.body;
    
    try {
        // Check if user is authenticated
        if (!req.session.isAuthenticated) {
            console.log('User not authenticated, redirecting to login');
            return res.redirect('/login');
        }

        console.log('Creating post with data:', { titulo, categoria, hasFile: !!req.file });
        console.log('User ID from session:', req.session.userId);

        // Validation
        if (!titulo || !categoria) {
            console.warn('Required fields missing');
            return res.redirect('/feed?error=missing_fields');
        }

        if (!conteudo && !req.file) {
            console.warn('No content or image provided');
            return res.redirect('/feed?error=no_content');
        }

        // First, check if user exists
        const user = await prisma.usuario.findUnique({
            where: { id: req.session.userId }
        });

        if (!user) {
            console.error('User not found in database');
            return res.redirect('/login');
        }

        // Create post using session user ID
        const post = await prisma.publicacao.create({
            data: {
                titulo,
                conteudo: conteudo || '',
                categoria,
                autorId: req.session.userId // Use direct ID instead of connect
            }
        });

        console.log('Post created with ID:', post.id);

        // Create image if uploaded
        if (req.file) {
            await prisma.imagem.create({
                data: {
                    url: `/uploads/${req.file.filename}`,
                    descricao: titulo,
                    ordem: 1,
                    publicacaoId: post.id // Use direct ID instead of connect
                }
            });
            console.log('Image added to post');
        }

        console.log('Post created successfully!');
        res.redirect('/feed?success=post_created');

    } catch (error) {
        console.error('Error creating post:', error);
        console.error('Error details:', error.message);
        console.error('Error code:', error.code);
        res.redirect('/feed?error=creation_failed');
    }
};

const mostrarFeed = async (req, res) => {
    try {
        console.log('Loading feed for user:', req.session.userId);
        
        // Check if user is authenticated
        if (!req.session.isAuthenticated) {
            console.log('User not authenticated, redirecting to login');
            return res.redirect('/login');
        }

        // Test database connection first
        await prisma.$connect();
        console.log('Database connected successfully');

        // Simple query first to test
        const postCount = await prisma.publicacao.count();
        console.log('Total posts in database:', postCount);

        // Get feed posts with minimal relations first
        const feedPosts = await prisma.publicacao.findMany({
            include: {
                autor: {
                    select: {
                        id: true,
                        nomeUsuario: true
                    }
                },
                imagens: true
            },
            orderBy: {
                criadoEm: 'desc'
            },
            take: 20 // Limit to 20 posts
        });
        
        console.log('Posts loaded:', feedPosts.length);
        
        res.render('feed', { 
            title: 'Feed',
            layout: 'layouts/main', 
            posts: feedPosts,
            success: req.query.success,
            error: req.query.error
        });

    } catch (error) {
        console.error('Error loading feed:', error);
        console.error('Error message:', error.message);
        console.error('Error code:', error.code);
        
        // Try to render with empty posts instead of crashing
        res.render('feed', { 
            title: 'Feed',
            layout: 'layouts/main', 
            posts: [],
            error: 'Erro ao carregar o feed. Tente novamente.'
        });
    }
};

module.exports = { criarPostagem, mostrarFeed };