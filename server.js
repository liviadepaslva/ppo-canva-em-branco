require('dotenv').config();
const express = require('express');
const path = require('path');
const { PrismaClient } = require('./prisma/generated/prisma');
const prisma = new PrismaClient()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// caminhos para arquivos ejs

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/feed', (req, res) => {
    res.render('feed', { title: 'Feed' });
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro', { title: 'Cadastro' });
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});