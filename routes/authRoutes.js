const express = require('express');
const router = express.Router();
const { 
    loginUsuario, 
    cadastrarUsuario, 
    logoutUsuario 
} = require('../controllers/authController');

// Debug middleware
router.use((req, res, next) => {
    console.log(`Auth Route: ${req.method} ${req.path}`);
    if (req.method === 'POST') {
        console.log('Body:', req.body);
    }
    next();
});

// Public routes
router.get('/login', (req, res) => {
    // Redirect if already logged in
    if (req.session.isAuthenticated) {
        return res.redirect('/feed');
    }
    
    res.render('login', { 
        title: 'Login',
        layout: false,
        mensagem: ''
    });
});

router.get('/cadastro', (req, res) => {
    // Redirect if already logged in
    if (req.session.isAuthenticated) {
        return res.redirect('/feed');
    }
    
    res.render('cadastro', { 
        title: 'Cadastro',
        layout: false,
        mensagem: ''
    });
});

router.post('/login', loginUsuario);
router.post('/cadastro', cadastrarUsuario); // Make sure this matches your form action

// Add GET route for logout as well
router.get('/logout', logoutUsuario);
router.post('/logout', logoutUsuario);

module.exports = router;