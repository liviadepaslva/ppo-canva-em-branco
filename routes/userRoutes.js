const express = require('express');
const router = express.Router();
const { loginUsuario , cadastrarUsuario } = require('../controllers/userController');

router.post('/login', loginUsuario);
router.post('/cadastrar', cadastrarUsuario);

module.exports = router;