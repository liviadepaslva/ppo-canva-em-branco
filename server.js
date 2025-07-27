require('dotenv').config();
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const { PrismaClient } = require('./prisma/generated/prisma');
const prisma = new PrismaClient()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', './layouts/main');

// caminhos para arquivos ejs

app.get('/', (req, res) => {
    res.render('index', { 
      title: 'Home',
      layout: false
    });
});

app.get('/feed', (req, res) => {
    res.render('feed', { 
      title: 'Feed',
      layout: 'layouts/main', 
    });
});

app.get('/login', (req, res) => {
    res.render('login', { 
      title: 'Login',
      layout: false
    });
});

// cadastro

app.get('/cadastro', (req, res) => {
    res.render('cadastro', { 
      title: 'Cadastro' , 
      layout: false,
      mensagem: ''
     });
});

app.post('/cadastro', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Validate input and save user to the database using Prisma
    if (!username || !email || !password) {
      return res.render('cadastro', { title: 'Cadastro', mensagem: 'Por favor, preencha todos os campos.' });
    }

    // Aqui você pode adicionar o código para salvar o usuário no banco de dados usando Prisma
    // await prisma.user.create({ data: { username, email, password } });

    res.render('cadastro', { 
      title: 'Cadastro', 
      layout: false,
      mensagem: 'Cadastro realizado com sucesso!' 
    });
  } catch (error) {
    console.error(error);
    res.render('cadastro', { 
      title: 'Cadastro', 
      layout: false,
      mensagem: 'Erro ao cadastrar usuário.' 
    });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email == 'liviadepaslva@gmail.com' && password == '123456') 
    {
      // Login bem-sucedido
      res.redirect('/feed');
    } else {
      // Login falhou
      res.render('login', { 
        title: 'Login', 
        layout: false,
        mensagem: 'Email ou senha inválidos.' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});