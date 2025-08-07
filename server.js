require('dotenv').config();
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

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

app.get('/login', (req, res) => {
    res.render('login', { 
        title: 'Login',
        layout: false,
        mensagem: ''
    });
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro', { 
        title: 'Cadastro',
        layout: false,
        mensagem: ''
    });
});

app.get('/feed', (req, res) => {
    res.render('feed', { 
        title: 'Feed',
        layout: 'layouts/main',
        posts: [] // Inicialmente vazio, será preenchido pelo controller
    });
});

app.get('/criar-post', (req, res) => {
    res.render('criar-post', {
        title: 'Criar Postagem',
        layout: 'layouts/main'
    });
});

// rotas
app.use('/', userRoutes);
app.use('/', postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});