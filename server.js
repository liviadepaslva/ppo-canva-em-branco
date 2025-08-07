require('dotenv').config();
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Session configuration
const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET || 'seuSegredoSuperSecreto',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true in production with HTTPS
    maxAge: 1000 * 60 * 60 // 1 hour
  }
}));

// GLOBAL middleware - makes user data available to ALL views
app.use((req, res, next) => {
  res.locals.user = req.session.isAuthenticated ? {
    id: req.session.userId,
    email: req.session.userEmail,
    nomeUsuario: req.session.userName
  } : null;
  res.locals.isAuthenticated = req.session.isAuthenticated || false;
  next();
});

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Add this temporary test route to debug the database
app.get('/debug-db', async (req, res) => {
    try {
        const { PrismaClient } = require('./prisma/generated/prisma');
        const testPrisma = new PrismaClient();
        
        // Test connection
        await testPrisma.$connect();
        
        // Get schema info
        const publicacoes = await testPrisma.publicacao.findMany({
            take: 1
        });
        
        const usuarios = await testPrisma.usuario.findMany({
            take: 1
        });
        
        await testPrisma.$disconnect();
        
        res.json({
            status: 'success',
            publicacoes: publicacoes,
            usuarios: usuarios,
            message: 'Database accessible'
        });
        
    } catch (error) {
        console.error('Database debug error:', error);
        res.json({
            status: 'error',
            message: error.message,
            code: error.code
        });
    }
});

app.get('/debug-session', (req, res) => {
    res.json({
        session: req.session,
        isAuthenticated: req.session.isAuthenticated,
        userId: req.session.userId
    });
});

// Routes
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

// Add route for criar-post page
app.get('/criar-post', (req, res) => {
    // Check if user is authenticated
    if (!req.session.isAuthenticated) {
        return res.redirect('/login');
    }
    
    res.render('criar-post', { 
        title: 'Criar Postagem',
        layout: 'layouts/main'
    });
});

// Use route modules
app.use('/', authRoutes);
app.use('/', postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});