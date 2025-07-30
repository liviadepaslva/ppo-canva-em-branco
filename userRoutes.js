const express = require('express');


const router = express.Router();
const { loginUsuario } = require('./prismaController');
const { a } = require('./prismaController');

router.post('/login', loginUsuario);

module.exports = router;
