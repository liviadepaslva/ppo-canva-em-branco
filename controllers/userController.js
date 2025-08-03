const { PrismaClient } = require('../prisma/generated/prisma');
const prisma = new PrismaClient();

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body;
    
    try {
        if (!email || !senha) {
            return res.render('login', { 
                title: 'Login',
                layout: false,
                mensagem: 'Por favor, preencha todos os campos.' 
            });
        }

        const usuario = await prisma.usuario.findUnique({
            where: { email: email }
        });
        
        if (!usuario) {
            return res.render('login', { 
                title: 'Login',
                layout: false,
                mensagem: 'E-mail não cadastrado.' 
            });
        }

        if (usuario.senhaHash !== senha) {
            return res.render('login', { 
                title: 'Login',
                layout: false,
                mensagem: 'Senha incorreta.' 
            });
        }

        res.redirect('/feed');

    } catch (error) {
        console.error('Login error:', error);
        res.render('login', { 
            title: 'Login',
            layout: false,
            mensagem: 'Erro ao realizar login.' 
        });
    }
};

const cadastrarUsuario = async (req, res) => {
    const { nomeUsuario, email, confirmar_email, senha, confirmar_senha } = req.body;
    
    try {
        // Validation
        if (!nomeUsuario || !email || !confirmar_email || !senha || !confirmar_senha) {
            return res.render('cadastro', { 
                title: 'Cadastro', 
                layout: false,
                mensagem: 'Por favor, preencha todos os campos.' 
            });
        }

        if (email !== confirmar_email) {
            return res.render('cadastro', { 
                title: 'Cadastro', 
                layout: false,
                mensagem: 'Os emails inseridos não são iguais.' 
            });
        }

        if (senha !== confirmar_senha) {
            return res.render('cadastro', { 
                title: 'Cadastro', 
                layout: false,
                mensagem: 'As senhas inseridas não são iguais.' 
            });
        }

        // Check if user already exists
        const usuarioExistente = await prisma.usuario.findFirst({
            where: {
                OR: [
                    { email: email },
                    { nomeUsuario: nomeUsuario }
                ]
            }
        });

        if (usuarioExistente) {
            return res.render('cadastro', { 
                title: 'Cadastro', 
                layout: false,
                mensagem: 'Email ou nome de usuário já cadastrado.' 
            });
        }

        // Create new user
        await prisma.usuario.create({
            data: {
                nomeUsuario: nomeUsuario,
                email: email,
                senhaHash: senha
            }
        });

        res.render('cadastro', { 
            title: 'Cadastro', 
            layout: false,
            mensagem: 'Cadastro realizado com sucesso!' 
        });

    } catch (error) {
        console.error('Cadastro error:', error);
        res.render('cadastro', { 
            title: 'Cadastro', 
            layout: false,
            mensagem: 'Erro ao cadastrar usuário.' 
        });
    }
};

module.exports = { loginUsuario, cadastrarUsuario };