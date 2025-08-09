require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public'))); // serve arquivos estáticos da pasta 'public'
app.use(express.json()); // quando recebe um json, converte para um obj javascript
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('public/uploads')) // serve arquivos estáticos da pasta 'public/uploads'


// configuração do ejs
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// configura a sessão
const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false, // só gera caso usuário faça login
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 // um dia
  }
}));

// middleware para deixar os dados do usuário disponível em todas as views
app.use((req, res, next) => {
  res.locals.user = req.session.usuarioAutenticado ? {
    id: req.session.usuarioId,
    email: req.session.usuarioEmail,
    nomeUsuario: req.session.usuarioNome
  } : null;
  res.locals.usuarioAutenticado = req.session.usuarioAutenticado || false;
  next();
});

// importa as rotas
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

app.use('/', authRoutes);
app.use('/', postRoutes);

// rotas

app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home',
        layout: false
    });
});

app.get('/teste-css', (req, res) => {
    res.render('teste-css', { 
        title: 'Teste CSS',
        layout: 'layouts/main'
    });
});


// ---------------------------------
// debug do banco de dados e sessão
// ---------------------------------

// app.get('/debug-db', async (req, res) => {
//     try {
//         const { PrismaClient } = require('./prisma/generated/prisma');
//         const testPrisma = new PrismaClient();
        
//         // Test connection
//         await testPrisma.$connect();
        
//         // Get schema info
//         const publicacoes = await testPrisma.publicacao.findMany({
//             take: 1
//         });
        
//         const usuarios = await testPrisma.usuario.findMany({
//             take: 1
//         });
        
//         await testPrisma.$disconnect();
        
//         res.json({
//             status: 'success',
//             publicacoes: publicacoes,
//             usuarios: usuarios,
//             message: 'Database accessible'
//         });
        
//     } catch (error) {
//         console.error('Database debug error:', error);
//         res.json({
//             status: 'error',
//             message: error.message,
//             code: error.code
//         });
//     }
// });

// app.get('/debug-session', (req, res) => {
//     res.json({
//         session: req.session,
//         usuarioAutenticado: req.session.usuarioAutenticado,
//         usuarioId: req.session.usuarioId
//     });
// });



app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});