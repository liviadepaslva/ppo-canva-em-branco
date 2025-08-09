const express = require('express');
const router = express.Router();
const { criarPostagem, mostrarFeed } = require('../controllers/postController');
const upload = require('../controllers/multerController');

// middleware para verificar autenticação/login

const requerAutenticacao = (req, res, next) => {
    console.log('req.session:', req.session); // Debug session object
    try {
        if (req.session.usuarioAutenticado) {
            next();
        } else {
            console.log('Acesso negado: Usuário não autenticado');
            res.redirect('/login');
        }
    } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        res.redirect('/login');
    }
};

// rotas protegidas
router.get('/feed', requerAutenticacao, mostrarFeed);
router.post('/criar-post', requerAutenticacao, upload.single('imagem'), criarPostagem);

// router.get('/feed',  mostrarFeed);
// router.post('/criar-post', upload.single('imagem'), criarPostagem);

module.exports = router;