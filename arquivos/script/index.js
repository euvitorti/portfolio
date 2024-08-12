document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('languageSelect');
    const greeting = document.getElementById('greeting');
    const intro = document.getElementById('intro');
    const social = document.getElementById('social');
    const footer = document.getElementById('footer');

    // Função para carregar o conteúdo do JSON de acordo com o idioma selecionado
    function loadContent(language) {
        fetch(`${language}_index.json`)
            .then(response => response.json())
            .then(data => {
                greeting.textContent = data.greeting;
                intro.textContent = data.intro;
                social.textContent = data.social;
                footer.textContent = data.footer;
            })
            .catch(error => console.error('Erro ao carregar JSON:', error));
    }

    // Event listener para mudança no select de idiomas
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = languageSelect.value;
        loadContent(selectedLanguage);
    });

    // Carregar o conteúdo inicial de acordo com o idioma padrão (português)
    loadContent(languageSelect.value);
});
