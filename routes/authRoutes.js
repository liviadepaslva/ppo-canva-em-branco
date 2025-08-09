const express = require('express');
const router = express.Router();
const { loginUsuario, cadastrarUsuario, logoutUsuario } = require('../controllers/authController');

router.get('/login', (req, res) => {
    res.render('login', { 
        title: 'Login',
        layout: false,
        error: req.query.error, // mostra mensagens de sucesso ou erros passadas na url
        success: req.query.success
    });
});

router.get('/cadastro', (req, res) => {
    res.render('cadastro', { 
        title: 'Cadastro',
        layout: false,
        error: req.query.error
    });
});

router.post('/login', loginUsuario);
router.post('/cadastro', cadastrarUsuario);

router.post('/logout', logoutUsuario);

module.exports = router;