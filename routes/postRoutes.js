const express = require('express');
const router = express.Router();
const { criarPostagem, mostrarFeed } = require('../controllers/postController');
const upload = require('../controllers/multerController');

router.get('/feed', mostrarFeed);
router.post('/feed', upload.single('imagem'), criarPostagem);

module.exports = router;