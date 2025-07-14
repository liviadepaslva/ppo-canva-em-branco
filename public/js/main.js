function navigateToSection(sectionName) {
    // Esconde todas as seções
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class de todos os botões
    navButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Mostra a seção alvo
    const targetSection = document.getElementById(`${sectionName}`);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionName;
        
        // Adiciona active class ao botão correspondente
        const activeButton = document.querySelector(`[data-section="${sectionName}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        
        // Scroll para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Atualiza URL sem recarregar a página
        updateURL(sectionName);
    }
}