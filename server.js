require('dotenv').config();
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const multer = require('multer');
const { PrismaClient } = require('./prisma/generated/prisma');
const prisma = new PrismaClient()

const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./userRoutes');

app.use(express.json());
app.use('/', userRoutes);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/') // Make sure this directory exists
  },
  filename: function (req, file, cb) {
    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    // Only allow image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

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

app.get('/teste-css', (req, res) => {
  res.render('teste-css', { 
    title: 'Teste CSS',
    layout: 'layouts/main'
  });
});

app.get('/feed', async (req, res) => {
  const feedPublicacoes = await prisma.publicacao.findMany({
    include: {
      imagens: true,
      autor: true,
      comentarios: true,
      curtidas: true
    }
  });
  
  // Debug: Check what data is being fetched
  console.log('Feed publications:', JSON.stringify(feedPublicacoes, null, 2));
  
  res.render('feed', { 
    title: 'Feed',
    layout: 'layouts/main', 
    publicacoes: feedPublicacoes
  });
});

// página de login

app.get('/login', (req, res) => {
    res.render('login', { 
      title: 'Login',
      layout: false,
      mensagem: ''
    });
});

app.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  try {
    if (!email || !senha) {
      return res.render('login', { 
        title: 'Login',
        layout: false,
        mensagem: 'Por favor, preencha todos os campos.' 
      });
    }
    // Verifica se o usuário existe
    const usuario = await prisma.usuario.findUnique({
      where: { email: email }
    });
    if (!usuario) {
      return res.render('login', { 
        title: 'Login',
        layout: false,
        mensagem: 'E-mail não cadastrado.' 
      });
    }
    // Verifica se a senha está correta
    if (usuario.senhaHash !== senha) {
      return res.render('login', { 
        title: 'Login',
        layout: false,
        mensagem: 'Senha incorreta.' 
      });
    }
    // Se tudo estiver correto, redireciona para o feed
    res.redirect('/feed');

  } catch (error) {
    console.error(error);
    res.render('login', { 
      title: 'Login',
      layout: false,
      mensagem: 'Erro ao realizar login.' 
    });
  }
});

// página de cadastro

app.get('/cadastro', (req, res) => {
  res.render('cadastro', { 
    title: 'Cadastro', 
    layout: false,
    mensagem: ''
  });
});

app.post('/cadastro', async (req, res) => {
  const { nomeUsuario, email, confirmar_email, senha, confirmar_senha } = req.body;
  try {
    // validação dos campos
    if (!nomeUsuario || !email || !confirmar_email || !senha || !confirmar_senha) {
      return res.render('cadastro', { 
        title: 'Cadastro', 
        layout: false,
        mensagem: 'Por favor, preencha todos os campos.' 
      });
    }
    // confirmaração de email e senha
    else if (email !== confirmar_email) {
      return res.render('cadastro', { 
        title: 'Cadastro', 
        layout: false,
        mensagem: 'Os emails inseridos não são iguais.' 
      });
    }
    else if (senha !== confirmar_senha) {
      return res.render('cadastro', { 
        title: 'Cadastro', 
        layout: false,
        mensagem: 'As senhas inseridas não são iguais.' 
      });
    }
    // Verifica se o email já está cadastrado
    const usuárioExistente = await prisma.usuario.findUnique({
      where: { 
        email: email,
        nomeUsuario: nomeUsuario
       }
    });

    if (usuárioExistente) {
      return res.render('cadastro', { 
        title: 'Cadastro', 
        layout: false,
        mensagem: 'Email já cadastrado.' 
      });
    }
    else {
      // Cria o usuario no banco de dados
      await prisma.usuario.create({
        data: {
          nomeUsuario: nomeUsuario,
          email: email,
          senhaHash: senha
        }
      });

      res.render('cadastro', { 
        title: 'Cadastro', 
        layout: false,
        mensagem: 'Cadastro realizado com sucesso!' 
      });
  }} catch (error) {
      console.error(error);
      res.render('cadastro', { 
        title: 'Cadastro', 
        layout: false,
        mensagem: 'Erro ao cadastrar usuario.' 
      });
    }
});

// página de criação de postagem
app.post('/feed', upload.single('imagem'), async (req, res) => {
  const { titulo, conteudo, categoria } = req.body;
  try {
    // Validação dos campos
    if (!titulo || (!conteudo && !req.file) || !categoria) {
      console.warn('Campos obrigatórios não preenchidos.');
      return res.redirect('/feed');
    }

    // Criação da postagem no banco de dados
    const novaPublicacao = await prisma.publicacao.create({
      data: {
        titulo: titulo,
        conteudo: conteudo || '',
        categoria: categoria,
        autor: {
          connect: { id: 1 }
        }
      }
    });

    // Se houver uma imagem (arquivo), criar o registro na tabela imagens
    if (req.file) {
      await prisma.imagem.create({
        data: {
          url: `/uploads/${req.file.filename}`, // Store relative path
          descricao: titulo,
          ordem: 1,
          publicacao: {
            connect: { id: novaPublicacao.id }
          }
        }
      });
    }

    console.log('Postagem criada com sucesso!');
  } catch (error) {
    console.error(error);
  }
  res.redirect('/feed');
});





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});