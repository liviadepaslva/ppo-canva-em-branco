// document.addEventListener('DOMContentLoaded', () => {
//     // Profile dropdown functionality
//     const mostrarDadosPerfil = document.getElementById('mostrar-dados-perfil');
//     const dadosPerfil = document.getElementById('dados-perfil');

//     if (mostrarDadosPerfil && dadosPerfil) {
//         mostrarDadosPerfil.addEventListener('click', () => {
//             dadosPerfil.classList.toggle('mostrar');
//         });
//     }

//     // Navigation functionality for index page
//     const botoes = document.querySelectorAll('.nav-btn');
//     const secoes = document.querySelectorAll('main > div');

//     if (botoes.length && secoes.length) {
//         botoes.forEach(botao => {
//             botao.addEventListener('click', () => {
//                 const secaoAlvo = botao.dataset.section;
//                 const secao = document.querySelector(`.${secaoAlvo}`);

//                 if (secao) {
//                     botoes.forEach(b => b.classList.remove('ativo'));
//                     secoes.forEach(s => s.classList.remove('ativo'));
//                     botao.classList.add('ativo');
//                     secao.classList.add('ativo');
//                 }
//             });
//         });
//     }

//     // Form modal functionality for criar postagem
//     const btnCriarPostagem = document.getElementById('btn-criar-postagem');
//     const formCriarPostagem = document.getElementById('criar-postagem');
//     const formOverlay = document.getElementById('form-overlay');
//     const btnFecharForm = document.getElementById('btn-fechar-criar-post');
//     const btnCancelar = document.getElementById('btn-cancelar');

//     function mostrarFormulario() {
//         if (formCriarPostagem && formOverlay) {
//             formOverlay.style.display = 'flex';
//             formCriarPostagem.style.display = 'block';
//             formOverlay.offsetHeight;
//             formOverlay.classList.add('show');
//             formCriarPostagem.classList.add('show');
//             document.body.style.overflow = 'hidden';
//             const firstInput = formCriarPostagem.querySelector('input[type="text"]');
//             if (firstInput) {
//                 setTimeout(() => firstInput.focus(), 300);
//             }
//         }
//     }

//     function esconderFormulario() {
//         if (formCriarPostagem && formOverlay) {
//             formOverlay.classList.remove('show');
//             formCriarPostagem.classList.remove('show');
//             setTimeout(() => {
//                 formOverlay.style.display = 'none';
//                 formCriarPostagem.style.display = 'none';
//                 formCriarPostagem.reset();
//                 document.body.style.overflow = 'auto';
//             }, 300);
//         }
//     }

//     if (btnCriarPostagem) {
//         btnCriarPostagem.addEventListener('click', mostrarFormulario);
//     }
//     if (btnFecharForm) {
//         btnFecharForm.addEventListener('click', esconderFormulario);
//     }
//     if (btnCancelar) {
//         btnCancelar.addEventListener('click', esconderFormulario);
//     }
//     if (formOverlay) {
//         formOverlay.addEventListener('click', (e) => {
//             if (e.target === formOverlay) {
//                 esconderFormulario();
//             }
//         });
//     }
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape' && formCriarPostagem && formCriarPostagem.classList.contains('show')) {
//             esconderFormulario();
//         }
//     });

//     // Form validation for criar postagem (one image only, no preview)
//     if (formCriarPostagem) {
//         formCriarPostagem.addEventListener('submit', (e) => {
//             const titulo = document.getElementById('titulo').value.trim();
//             const categoria = document.getElementById('categoria').value;
//             const conteudo = document.getElementById('conteudo').value.trim();
//             const imagem = document.getElementById('imagem').files[0];

//             if (!titulo) {
//                 e.preventDefault();
//                 alert('Por favor, digite um título para sua postagem.');
//                 return;
//             }
//             if (!categoria) {
//                 e.preventDefault();
//                 alert('Por favor, selecione uma categoria.');
//                 return;
//             }
//             if (!conteudo && !imagem) {
//                 e.preventDefault();
//                 alert('Por favor, adicione um conteúdo ou uma imagem.');
//                 return;
//             }
//         });
//     }

//     // Handle "Create First Post" button
//     const btnFirstPost = document.getElementById('btn-first-post');
//     if (btnFirstPost) {
//         btnFirstPost.addEventListener('click', () => {
//             const btnCriarPostagem = document.getElementById('btn-criar-postagem');
//             if (btnCriarPostagem) {
//                 btnCriarPostagem.click();
//             }
//         });
//     }

//     // Auto-hide alerts after 5 seconds
//     const alerts = document.querySelectorAll('.alert');
//     alerts.forEach(alert => {
//         setTimeout(() => {
//             alert.style.animation = 'slideUp 0.3s ease-out forwards';
//             setTimeout(() => {
//                 alert.remove();
//             }, 300);
//         }, 5000);
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const imagemInput = document.getElementById('imagem');
//     const previewList = document.getElementById('image-preview-list');
//     let imagensSelecionadas = [];

//     function atualizarPreviews() {
//         previewList.innerHTML = '';
//         imagensSelecionadas.forEach((file, idx) => {
//             const reader = new FileReader();
//             reader.onload = function (ev) {
//                 const previewDiv = document.createElement('div');
//                 previewDiv.style.display = 'inline-block';
//                 previewDiv.style.position = 'relative';
//                 previewDiv.style.margin = '8px';

//                 const img = document.createElement('img');
//                 img.src = ev.target.result;
//                 img.style.maxWidth = '120px';
//                 img.style.maxHeight = '120px';
//                 img.style.borderRadius = '8px';

//                 const btnRemover = document.createElement('button');
//                 btnRemover.type = 'button';
//                 btnRemover.textContent = 'Remover';
//                 btnRemover.style.position = 'absolute';
//                 btnRemover.style.top = '4px';
//                 btnRemover.style.right = '4px';
//                 btnRemover.style.background = 'var(--cor-alerta, #d0021b)';
//                 btnRemover.style.color = '#fff';
//                 btnRemover.style.border = 'none';
//                 btnRemover.style.borderRadius = '4px';
//                 btnRemover.style.padding = '2px 8px';
//                 btnRemover.style.cursor = 'pointer';
//                 btnRemover.style.fontSize = '0.8rem';

//                 btnRemover.addEventListener('click', function () {
//                     imagensSelecionadas.splice(idx, 1);
//                     atualizarPreviews();
//                 });

//                 previewDiv.appendChild(img);
//                 previewDiv.appendChild(btnRemover);
//                 previewList.appendChild(previewDiv);
//             };
//             reader.readAsDataURL(file);
//         });
//     }

//     if (imagemInput && previewList) {
//         imagemInput.addEventListener('change', function (e) {
//             Array.from(e.target.files).forEach(file => {
//                 if (file.type.startsWith('image/')) {
//                     imagensSelecionadas.push(file);
//                 }
//             });
//             atualizarPreviews();

//         });
//     }

//     // On form submit, you need to send imagensSelecionadas via AJAX/FormData if you want to keep removals/additions.
//     // Otherwise, the default file input will only send the last selection.
// });

// function fecharNavBarForm() {
//     const formCriarPostagem = document.getElementById('form-criar-postagem');
//     const formOverlay = document.getElementById('form-overlay');
//     if (formCriarPostagem && formOverlay) {
//         formCriarPostagem.classList.remove('active', 'show');
//         formCriarPostagem.style.display = 'none';
//         formOverlay.classList.remove('active', 'show');
//         formOverlay.style.display = 'none';
//         document.body.style.overflow = 'auto';
//         formCriarPostagem.reset();
//         // Limpa previews de imagens se necessário
//         const previewList = document.getElementById('image-preview-list');
//         if (previewList) previewList.innerHTML = '';
//     }
// }

// function fecharDadosPerfil() {
//     const dadosPerfil = document.getElementById('dados-perfil');
//     if (dadosPerfil) {
//         dadosPerfil.classList.remove('mostrar');
//     }
// }

// // Event listeners para fechar com botão ou overlay
// document.addEventListener('DOMContentLoaded', function () {
//     // Fechar formulário de postagem
//     const btnFecharForm = document.getElementById('btn-fechar-criar-post');
//     if (btnFecharForm) {
//         btnFecharForm.addEventListener('click', function (e) {
//             e.preventDefault();
//             fecharNavBarForm();
//         });
//     }

//     // Fechar ao clicar no overlay
//     const formOverlay = document.getElementById('form-overlay');
//     if (formOverlay) {
//         formOverlay.addEventListener('click', function (e) {
//             if (e.target === formOverlay) {
//                 fecharNavBarForm();
//             }
//         });
//     }

//     // Fechar dados do perfil ao clicar fora
//     document.addEventListener('click', function (e) {
//         const dadosPerfil = document.getElementById('dados-perfil');
//         const mostrarBtn = document.getElementById('mostrar-dados-perfil');
//         if (
//             dadosPerfil &&
//             dadosPerfil.classList.contains('mostrar') &&
//             !dadosPerfil.contains(e.target) &&
//             e.target !== mostrarBtn
//         ) {
//             fecharDadosPerfil();
//         }
//     });

//     // Fechar dados do perfil com ESC
//     document.addEventListener('keydown', function (e) {
//         if (e.key === 'Escape') {
//             fecharNavBarForm();
//             fecharDadosPerfil();
//         }
//     });
// });