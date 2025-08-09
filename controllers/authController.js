const { PrismaClient } = require('../prisma/generated/prisma');
const prisma = new PrismaClient();

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.redirect('/login?error=missing_fields');
    }

    try {
        const usuario = await prisma.usuario.findUnique({
            where: { email: email }
        });
        
        if (!usuario) {
            return res.redirect('/login?error=email_not_found');
        }

        if (usuario.senhaHash !== senha) {
            return res.redirect('/login?error=wrong_password');
        }

        // guarda dados na sessão
        req.session.usuarioId = usuario.id;
        req.session.usuarioEmail = usuario.email;
        req.session.usuarioNome = usuario.nomeUsuario;
        req.session.usuarioAutenticado = true;

        console.log('Usuário autenticado:', usuario.nomeUsuario);
        console.log('req.session:', req.session); // Debug session object
        req.session.usuarioId = usuario.id;
        res.redirect('/feed');

    } catch (error) {
        console.error('Erro de login:', error);
        res.redirect('/login?error=login_failed');
    }
};

const cadastrarUsuario = async (req, res) => {
    const { nomeUsuario, email, confirmar_email, senha, confirmar_senha } = req.body;
    
    try {
        // valida os campos
        if (!nomeUsuario || !email || !confirmar_email || !senha || !confirmar_senha) {
            return res.redirect('/cadastro?error=missing_fields');
        }

        if (email !== confirmar_email) {
            return res.redirect('/cadastro?error=email_mismatch');
        }

        if (senha !== confirmar_senha) {
            return res.redirect('/cadastro?error=password_mismatch');
        }

        // verifica se o usuário já existe
        const usuarioExistente = await prisma.usuario.findFirst({
            where: {
                OR: [
                    { email: email },
                    { nomeUsuario: nomeUsuario }
                ]
            }
        });

        if (usuarioExistente) {
            return res.redirect('/cadastro?error=user_exists');
        }

        // cadastro no banco de dados
        const novoUsuario = await prisma.usuario.create({
            data: {
                nomeUsuario: nomeUsuario,
                email: email,
                senhaHash: senha
            }
        });

        console.log('Usuário criado com sucesso:', novoUsuario.nomeUsuario);

        // envia para a página de login
        
        res.redirect('/login');

    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.redirect('/cadastro?error=registration_failed');
    }
};

const logoutUsuario = (req, res) => {
    req.session.destroy((err) => { // destroi a sessão
        if (err) {
            console.error('Erro para destruir a sessão:', err);
        }
        
        console.log('Sessão destruída com sucesso!');
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
};

// verifica se o usuário está autenticado
const requerAutenticacao = (req, res, next) => {
    if (req.session.usuarioAutenticado) {
        next();
    } else {
        res.redirect('/login');
    }
};

// middleware para passar dados do usuário para as views
const enviarDadosUsuario = (req, res) => {
    // se tiver autenticado, coloca objeto com info
    res.locals.usuario = req.session.usuarioAutenticado ? {
        id: req.session.usuarioId,
        email: req.session.usuarioEmail,
        nomeUsuario: req.session.usuarioNome
    } : null;
    res.redirect('/login');
};

module.exports = { 
    loginUsuario, 
    cadastrarUsuario, 
    logoutUsuario, 
    requerAutenticacao, 
    enviarDadosUsuario 
};