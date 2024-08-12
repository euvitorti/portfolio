document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('languageSelect');
    const title = document.querySelector('h1');
    const course1 = document.getElementById('course1');
    const course2 = document.getElementById('course2');
    const course3 = document.getElementById('course3');
    const course4 = document.getElementById('course4');
    const course5 = document.getElementById('course5');

    // Função para carregar o conteúdo do JSON de acordo com o idioma selecionado
    function loadContent(language) {
        fetch(`${language}_courses.json`)
            .then(response => response.json())
            .then(data => {
                title.innerHTML = data.title;
                course1.innerHTML = data.course1;
                course2.innerHTML = data.course2;
                course3.innerHTML = data.course3;
                course4.innerHTML = data.course4;
                course5.innerHTML = data.course5;
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
