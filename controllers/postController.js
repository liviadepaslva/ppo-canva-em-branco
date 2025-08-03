const { PrismaClient } = require('../prisma/generated/prisma');
const prisma = new PrismaClient();

const criarPostagem = async (req, res) => {
    const { titulo, conteudo, categoria } = req.body;
    try {
        // validação dos campos do formulário
        if (!titulo || !categoria) {
            console.warn('Campos obrigatórios não preenchidos');
            return res.redirect('/feed');
        }

        if (!conteudo && !req.file) {
            console.warn('Insira um conteúdo ou uma imagem');
            return res.redirect('/feed');
        }

        // cria uma postagem no banco de dados
        const post = await prisma.post.create({
            data: {
                titulo,
                conteudo: conteudo || '',
                categoria,
                autor: {
                    connect: { id: 1 }
                }
            }
        });

        // se houver uma imagem, cria a entrada na tabela de imagens
        if (req.file) {
            await prisma.imagem.create({
                data: {
                    url: `/uploads/${req.file.filename}`,
                    descricao: titulo,
                    ordem: 1,
                    publicacao: {
                        connect: { id: post.id }
                    }
                }
            });
        }

        console.log('Postagem criada com sucesso!');
    } catch (error) {
        console.error(error);
    }
    res.redirect('/feed');
};

const mostrarFeed = async (req, res) => {
    try {
        const feedPublicacoes = await prisma.publicacao.findMany({
            include: {
                imagens: true,
                autor: true,
                comentarios: true,
                curtidas: true
            }
        });
        
        console.log('Feed publications:', JSON.stringify(feedPublicacoes, null, 2));
        
        res.render('feed', { 
            title: 'Feed',
            layout: 'layouts/main', 
            publicacoes: feedPublicacoes
        });
    } catch (error) {
        console.error('Error loading feed:', error);
        res.status(500).send('Error loading feed');
    }
};

module.exports = { criarPostagem, mostrarFeed };