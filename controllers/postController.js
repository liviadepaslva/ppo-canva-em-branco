const { PrismaClient } = require('../prisma/generated/prisma');
const prisma = new PrismaClient();

const criarPostagem = async (req, res) => {
    const { titulo, conteudo, categoria } = req.body;

    try {
        console.log('Criando postagem com os dados:', { titulo, categoria, hasFile: !!req.file });
        console.log('User ID from session:', req.session.usuarioId);
        console.log('req.file:', req.file);

        // validação dos campos preenchidos
        if (!titulo || !categoria) {
            console.warn('Campos obrigatórios não preenchidos');
            return res.redirect('/feed?error=missing_fields');
        }

        if (!conteudo && !req.file) {
            console.warn('Nenhum conteúdo ou imagem fornecida');
            return res.redirect('/feed?error=no_content');
        }

        // insere dados no banco
        const post = await prisma.post.create({
            data: {
                titulo,
                conteudo: conteudo || '',
                categoria,
                autorId: req.session.usuarioId // usa o id do usuário da sessão
            }
        });

        // insere imagem caso houver
        if (req.file) {
            await prisma.imagem.create({
                data: {
                    url: `/uploads/${req.file.filename}`,
                    descricao: titulo,
                    ordem: 1,
                    postId: post.id
                }
            });
        }

        console.log('Post criado com sucesso!');
        res.redirect('/feed?success=post_criado');

    } catch (error) {
        console.error('Erro criando postagem:', error);
        res.redirect('/feed?error=falha_na_criacao_post');
    }
};

const mostrarFeed = async (req, res) => {
    try {
        // testa conexão com o banco de dados primeiro
        await prisma.$connect();
        console.log('Banco de dados conectado com sucesso! ;)');

        // vê quantos post tem
        const numPosts = await prisma.post.count();
        console.log('Total posts in database:', numPosts);

        const feedPosts = await prisma.post.findMany({
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
            take: 20 // limita a 20 posts por vez
        });
        
        console.log('Posts carregados:', feedPosts.length);
        
        res.render('feed', { 
            title: 'Feed',
            layout: 'layouts/main', 
            posts: feedPosts,
            success: req.query.success,
            error: req.query.error
        });

    } catch (error) {
        console.error('Erro ao carregar feed:', error);
        
        // renderiza o feed com mensagem de erro e sem posts ao invés de crashar
        res.render('feed', { 
            title: 'Feed',
            layout: 'layouts/main', 
            posts: [],
            error: 'Erro ao carregar o feed. Tente novamente.'
        });
    }
};

module.exports = { criarPostagem, mostrarFeed };