// ----------------------------------------
// mostrar dados do perfil
// ----------------------------------------

const mostrarDadosPerfil = document.getElementById('mostrar-dados-perfil');
const dadosPerfil = document.getElementById('dados-perfil');

if (mostrarDadosPerfil && dadosPerfil) {
    mostrarDadosPerfil.addEventListener('click', () => {
        dadosPerfil.classList.toggle('ativo');
    });
}

// ----------------------------------------
// index
// ----------------------------------------


const botoes = document.querySelectorAll('.nav-btn');
const secoes = document.querySelectorAll('main > div');

if (botoes.length && secoes.length) {
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const secaoAlvo = botao.dataset.section;
            const secao = document.querySelector(`.${secaoAlvo}`);
            if (secao) {
                botoes.forEach(b => b.classList.remove('ativo'));
                secoes.forEach(s => s.classList.remove('ativo'));
                botao.classList.add('ativo');
                secao.classList.add('ativo');
            }
        });
    });
}


// ----------------------------------------
// mostrar formulário p/ criar posts
// ----------------------------------------

const overlayCriarPostagem = document.getElementById('form-overlay');

function mostrarCriarPostagem () {
    const formCriarPostagem = document.getElementById('form-criar-postagem');

    formCriarPostagem.classList.toggle('ativo');
    overlayCriarPostagem.classList.toggle('ativo');
}

overlayCriarPostagem.addEventListener('click', mostrarCriarPostagem);

const btnMostrarCriarPostagem = document.getElementById('btn-criar-postagem');
const btnFecharForm = document.getElementById('btn-fechar-criar-post');
const btnCancelar = document.getElementById('btn-cancelar');

if (btnMostrarCriarPostagem) {
    btnMostrarCriarPostagem.addEventListener('click', mostrarCriarPostagem);
}
if (btnFecharForm) {
    btnFecharForm.addEventListener('click', mostrarCriarPostagem);
}
if (btnCancelar) {
    btnCancelar.addEventListener('click', mostrarCriarPostagem);
}

