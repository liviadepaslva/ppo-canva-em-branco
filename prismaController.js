const { PrismaClient } = require('./prisma/generated/prisma');
const prisma = new PrismaClient()
const dotenv = require('dotenv');
dotenv.config();

const loginUsuario = async (req, res) => {
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
};
module.exports = { loginUsuario };