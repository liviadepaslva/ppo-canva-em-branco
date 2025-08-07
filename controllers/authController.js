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

        // Store user data in session
        req.session.userId = usuario.id;
        req.session.userEmail = usuario.email;
        req.session.userName = usuario.nomeUsuario;
        req.session.isAuthenticated = true;

        console.log('Login successful for user:', usuario.nomeUsuario);
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
    
    console.log('=== REGISTRATION DEBUG ===');
    console.log('Received data:', { nomeUsuario, email, confirmar_email, senha: '***', confirmar_senha: '***' });
    
    try {
        // Validation
        if (!nomeUsuario || !email || !confirmar_email || !senha || !confirmar_senha) {
            console.log('Validation failed: Missing required fields');
            return res.render('cadastro', { 
                title: 'Cadastro', 
                layout: false,
                mensagem: 'Por favor, preencha todos os campos.' 
            });
        }

        if (email !== confirmar_email) {
            console.log('Validation failed: Email confirmation mismatch');
            return res.render('cadastro', { 
                title: 'Cadastro', 
                layout: false,
                mensagem: 'Os emails inseridos não são iguais.' 
            });
        }

        if (senha !== confirmar_senha) {
            console.log('Validation failed: Password confirmation mismatch');
            return res.render('cadastro', { 
                title: 'Cadastro', 
                layout: false,
                mensagem: 'As senhas inseridas não são iguais.' 
            });
        }

        // Check if user already exists
        console.log('Checking for existing user...');
        const usuarioExistente = await prisma.usuario.findFirst({
            where: {
                OR: [
                    { email: email },
                    { nomeUsuario: nomeUsuario }
                ]
            }
        });

        if (usuarioExistente) {
            console.log('User already exists:', usuarioExistente.email || usuarioExistente.nomeUsuario);
            return res.render('cadastro', { 
                title: 'Cadastro', 
                layout: false,
                mensagem: 'Email ou nome de usuário já cadastrado.' 
            });
        }

        // Create new user
        console.log('Creating new user...');
        const novoUsuario = await prisma.usuario.create({
            data: {
                nomeUsuario: nomeUsuario,
                email: email,
                senhaHash: senha // Note: In production, hash this password!
            }
        });

        console.log('User created successfully:', novoUsuario.id);

        // Auto-login after successful registration
        req.session.userId = novoUsuario.id;
        req.session.userEmail = novoUsuario.email;
        req.session.userName = novoUsuario.nomeUsuario;
        req.session.isAuthenticated = true;

        console.log('User logged in automatically');
        console.log('=== REGISTRATION SUCCESS ===');
        
        res.redirect('/feed');

    } catch (error) {
        console.error('=== REGISTRATION ERROR ===');
        console.error('Full error:', error);
        console.error('Error message:', error.message);
        console.error('Error code:', error.code);
        console.error('==========================');
        
        res.render('cadastro', { 
            title: 'Cadastro', 
            layout: false,
            mensagem: 'Erro ao cadastrar usuário: ' + error.message 
        });
    }
};

const logoutUsuario = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.redirect('/feed');
        }
        
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
};

// Middleware to check if user is authenticated
const requireAuth = (req, res, next) => {
    if (req.session.isAuthenticated) {
        next();
    } else {
        res.redirect('/login');
    }
};

// Middleware to pass user data to views
const passUserToViews = (req, res, next) => {
    res.locals.user = req.session.isAuthenticated ? {
        id: req.session.userId,
        email: req.session.userEmail,
        nomeUsuario: req.session.userName
    } : null;
    res.locals.isAuthenticated = req.session.isAuthenticated || false;
    next();
};

module.exports = { 
    loginUsuario, 
    cadastrarUsuario, 
    logoutUsuario, 
    requireAuth, 
    passUserToViews 
};