document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('languageSelect');
    const aboutTitle = document.getElementById('aboutTitle');
    const aboutIntro = document.getElementById('aboutIntro');
    const aboutSkills = document.getElementById('aboutSkills');
    const technologiesTitle = document.getElementById('technologiesTitle');
    const footer = document.getElementById('footer');

    // Função para carregar o conteúdo do JSON de acordo com o idioma selecionado
    function loadContent(language) {
        fetch(`${language}_about.json`)
            .then(response => response.json())
            .then(data => {
                aboutTitle.innerHTML = data.aboutTitle;
                aboutIntro.innerHTML = data.aboutIntro;
                aboutSkills.innerHTML = data.aboutSkills;
                technologiesTitle.innerHTML = data.technologiesTitle;
                footer.innerHTML = data.footer;
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
