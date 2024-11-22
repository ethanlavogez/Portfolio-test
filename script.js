document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');

            // Masquer toutes les sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Afficher la section ciblée
            const sectionToShow = document.getElementById(targetSection);
            if (sectionToShow) {
                sectionToShow.classList.add('active');
            }
        });
    });
});
