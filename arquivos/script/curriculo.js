document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('languageSelect');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const areaTitle = document.getElementById('areaTitle');
    const areaDescription = document.getElementById('areaDescription');
    const experienceTitle = document.getElementById('experienceTitle');
    const experienceDescription = document.getElementById('experienceDescription');
    const educationTitle = document.getElementById('educationTitle');
    const education1 = document.getElementById('education1');
    const education2 = document.getElementById('education2');
    const coursesTitle = document.getElementById('coursesTitle');
    const course1 = document.getElementById('course1');
    const course2 = document.getElementById('course2');
    const course3 = document.getElementById('course3');
    const skillsTitle = document.getElementById('skillsTitle');
    const skill1 = document.getElementById('skill1');
    const skill2 = document.getElementById('skill2');
    const skill3 = document.getElementById('skill3');
    const skill4 = document.getElementById('skill4');
    const skill5 = document.getElementById('skill5');
    const skill6 = document.getElementById('skill6');
    const skill7 = document.getElementById('skill7');
    const skill8 = document.getElementById('skill8');
    const skill9 = document.getElementById('skill9');
    const footer = document.getElementById('footer');

    // Função para carregar o conteúdo do JSON de acordo com o idioma selecionado
    function loadContent(language) {
        fetch(`${language}_resume.json`)
            .then(response => response.json())
            .then(data => {
                name.innerHTML = data.name;
                email.innerHTML = data.email;
                areaTitle.innerHTML = data.areaTitle;
                areaDescription.innerHTML = data.areaDescription;
                experienceTitle.innerHTML = data.experienceTitle;
                experienceDescription.innerHTML = data.experienceDescription;
                educationTitle.innerHTML = data.educationTitle;
                education1.innerHTML = data.education1;
                education2.innerHTML = data.education2;
                coursesTitle.innerHTML = data.coursesTitle;
                course1.innerHTML = data.course1;
                course2.innerHTML = data.course2;
                course3.innerHTML = data.course3;
                skillsTitle.innerHTML = data.skillsTitle;
                skill1.innerHTML = data.skill1;
                skill2.innerHTML = data.skill2;
                skill3.innerHTML = data.skill3;
                skill4.innerHTML = data.skill4;
                skill5.innerHTML = data.skill5;
                skill6.innerHTML = data.skill6;
                skill7.innerHTML = data.skill7;
                skill8.innerHTML = data.skill8;
                skill9.innerHTML = data.skill9;
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
