const { PrismaClient } = require('../prisma/generated/prisma');
const prisma = new PrismaClient();
const path = require('path');
const fs = require('fs');

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

const criarPostsTeste = async (req, res) => {
    try {
        // peag todas as imagens da pasta de imagens de teste
        const imgsDir = path.join(__dirname, '../public/teste-posts-imgs');
        const files = fs.readdirSync(imgsDir).filter(f =>
            /\.(jpg|jpeg|png|gif|webp)$/i.test(f)
        );

        let count = 0;
        for (const file of files) {
            // cria post para cada imagem
            const post = await prisma.post.create({
                data: {
                    titulo: `Post de Teste ${count + 1}`,
                    conteudo: `Conteúdo de teste para imagem ${file}`,
                    categoria: 'teste',
                    autorId: req.session.usuarioId || 1 // Use a valid user ID
                }
            });

            await prisma.imagem.create({
                data: {
                    url: `/teste-posts-imgs/${file}`,
                    descricao: `Imagem de teste ${file}`,
                    ordem: 1,
                    postId: post.id
                }
            });

            count++;
        }

        res.redirect('/feed?success=teste_posts_criados');
    } catch (err) {
        console.error('Erro ao criar posts de teste:', err);
        res.redirect('/feed?error=teste_posts_falhou');
    }
};

const deletarPostsTeste = async (req, res) => {
    try {
        // Deleta todos os posts de teste
        await prisma.post.deleteMany({
            where: {
                categoria: 'teste'
            }
        });

        res.redirect('/feed?success=teste_posts_deletados');
    } catch (err) {
        console.error('Erro ao deletar posts de teste:', err);
        res.redirect('/feed?error=teste_posts_falhou');
    }
};

module.exports = { criarPostagem, mostrarFeed, criarPostsTeste, deletarPostsTeste };