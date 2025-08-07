document.addEventListener('DOMContentLoaded', () => {
    // Profile dropdown functionality
    const mostrarDadosPerfil = document.getElementById('mostrar-dados-perfil');
    const dadosPerfil = document.getElementById('dados-perfil');

    if (mostrarDadosPerfil && dadosPerfil) {
        mostrarDadosPerfil.addEventListener('click', () => {
            dadosPerfil.classList.toggle('mostrar');
        });
    }

    // Navigation functionality for index page
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

    // Enhanced form toggle functionality
    const btnCriarPostagem = document.getElementById('btn-criar-postagem');
    const formCriarPostagem = document.getElementById('criar-postagem');
    const formOverlay = document.getElementById('form-overlay');
    const btnFecharForm = document.getElementById('btn-fechar-criar-post');
    const btnCancelar = document.getElementById('btn-cancelar');

    function mostrarFormulario() {
        if (formCriarPostagem && formOverlay) {
            // Show overlay first
            formOverlay.style.display = 'flex';
            formCriarPostagem.style.display = 'block';
            
            // Force a reflow
            formOverlay.offsetHeight;
            
            // Add show classes for animation
            formOverlay.classList.add('show');
            formCriarPostagem.classList.add('show');
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            
            // Focus on first input
            const firstInput = formCriarPostagem.querySelector('input[type="text"]');
            if (firstInput) {
                setTimeout(() => firstInput.focus(), 300);
            }
        }
    }

    function esconderFormulario() {
        if (formCriarPostagem && formOverlay) {
            // Remove show classes for animation
            formOverlay.classList.remove('show');
            formCriarPostagem.classList.remove('show');
            
            // Hide elements after animation
            setTimeout(() => {
                formOverlay.style.display = 'none';
                formCriarPostagem.style.display = 'none';
                
                // Reset form
                formCriarPostagem.reset();
                
                // Restore body scroll
                document.body.style.overflow = 'auto';
            }, 300);
        }
    }

    // Event listeners
    if (btnCriarPostagem) {
        btnCriarPostagem.addEventListener('click', mostrarFormulario);
    }

    if (btnFecharForm) {
        btnFecharForm.addEventListener('click', esconderFormulario);
    }

    if (btnCancelar) {
        btnCancelar.addEventListener('click', esconderFormulario);
    }

    if (formOverlay) {
        formOverlay.addEventListener('click', (e) => {
            // Only close if clicking the overlay itself, not its children
            if (e.target === formOverlay) {
                esconderFormulario();
            }
        });
    }

    // Close with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && formCriarPostagem && formCriarPostagem.classList.contains('show')) {
            esconderFormulario();
        }
    });

    // Form validation and submission
    if (formCriarPostagem) {
        formCriarPostagem.addEventListener('submit', (e) => {
            const titulo = document.getElementById('titulo').value.trim();
            const categoria = document.getElementById('categoria').value;
            const conteudo = document.getElementById('conteudo').value.trim();
            const imagem = document.getElementById('imagem').files[0];

            // Basic validation
            if (!titulo) {
                e.preventDefault();
                alert('Por favor, digite um título para sua postagem.');
                return;
            }

            if (!categoria) {
                e.preventDefault();
                alert('Por favor, selecione uma categoria.');
                return;
            }

            if (!conteudo && !imagem) {
                e.preventDefault();
                alert('Por favor, adicione um conteúdo ou uma imagem.');
                return;
            }

            // Show loading state
            formCriarPostagem.classList.add('loading');
            const submitBtn = formCriarPostagem.querySelector('.btn-primary');
            if (submitBtn) {
                submitBtn.textContent = 'Criando...';
            }
        });
    }

    // File input preview functionality
    const imagemInput = document.getElementById('imagem');
    if (imagemInput) {
        imagemInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                // Remove existing preview
                const existingPreview = formCriarPostagem.querySelector('.image-preview');
                if (existingPreview) {
                    existingPreview.remove();
                }

                // Create preview
                const reader = new FileReader();
                reader.onload = (e) => {
                    const preview = document.createElement('div');
                    preview.className = 'image-preview';
                    preview.innerHTML = `
                        <img src="${e.target.result}" alt="Preview" style="max-width: 200px; max-height: 200px; border-radius: 8px; margin-top: 10px;">
                        <button type="button" onclick="this.parentElement.remove(); document.getElementById('imagem').value = '';" style="margin-left: 10px; background: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Remover</button>
                    `;
                    imagemInput.parentElement.appendChild(preview);
                };
                reader.readAsDataURL(file);
            }
        });
    }
});

// Add this to your existing main.js file
document.addEventListener('DOMContentLoaded', () => {
    // ... your existing code ...

    // Handle "Create First Post" button
    const btnFirstPost = document.getElementById('btn-first-post');
    if (btnFirstPost) {
        btnFirstPost.addEventListener('click', () => {
            const btnCriarPostagem = document.getElementById('btn-criar-postagem');
            if (btnCriarPostagem) {
                btnCriarPostagem.click();
            }
        });
    }

    // Auto-hide alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.animation = 'slideUp 0.3s ease-out forwards';
            setTimeout(() => {
                alert.remove();
            }, 300);
        }, 5000);
    });
});