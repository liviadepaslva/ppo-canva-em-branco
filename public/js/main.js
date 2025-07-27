document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.nav-btn');
  const secoes = document.querySelectorAll('main > div');

  if (!botoes.length || !secoes.length) {
    console.warn('Botões ou seções não encontrados!');
    return;
  }

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const secaoAlvo = botao.dataset.section;
      const secao = document.querySelector(`.${secaoAlvo}`);

      if (!secao) {
        console.warn(`Seção ".${secaoAlvo}" não encontrada!`);
        return;
      }

      // Remove a classe 'ativo' de todos os botões e seções
      botoes.forEach(b => b.classList.remove('ativo'));
      secoes.forEach(s => s.classList.remove('ativo'));

      // Ativa o botão e a seção correta
      botao.classList.add('ativo');
      secao.classList.add('ativo');
    });
  });
});

let lastScrollTop = 0;
const menu = document.getElementById('categorias'); // Certifique-se que o menu tem id="categorias"

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Descendo
        menu.classList.add('hidden'); // Adiciona a classe 'hidden' para sumir
    } else {
        // Subindo
        menu.classList.remove('hidden'); // Remove a classe 'hidden' para aparecer
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
});