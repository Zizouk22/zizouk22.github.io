// Défilement animé vers les sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animation au survol des compétences
document.querySelectorAll('#competences li').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#00ff00';
        this.style.color = '#121212';
    });
    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#2a2a2a';
        this.style.color = '#e0e0e0';
    });
});

// Effet de fondu pour les sections au chargement
window.addEventListener('load', function() {
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '1';
    });
});
