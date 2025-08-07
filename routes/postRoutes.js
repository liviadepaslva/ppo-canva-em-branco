const express = require('express');
const router = express.Router();
const { criarPostagem, mostrarFeed } = require('../controllers/postController');
const upload = require('../controllers/multerController');

// rotas para feed e postagens
router.get('/feed', mostrarFeed);
router.post('/criar-post', upload.single('imagem'), criarPostagem);

module.exports = router;