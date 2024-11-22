document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    console.log('JavaScript loaded.'); // Vérifie que le script est chargé

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            console.log(`Link clicked: ${targetSection}`); // Debug : Affiche la section cible

            // Masquer toutes les sections
            sections.forEach(section => {
                section.classList.remove('active');
                console.log(`Section hidden: ${section.id}`); // Debug : Vérifie les sections masquées
            });

            // Afficher la section ciblée
            const sectionToShow = document.getElementById(targetSection);
            if (sectionToShow) {
                sectionToShow.classList.add('active');
                console.log(`Section shown: ${targetSection}`); // Debug : Vérifie la section affichée
            } else {
                console.error(`No section found with ID: ${targetSection}`); // Debug : Alerte si l'ID est introuvable
            }
        });
    });
});

