// Défilement fluide
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Bouton CTA défile vers compétences
document.querySelector('.cta').addEventListener('click', () => {
    document.getElementById('competences').scrollIntoView({ behavior: 'smooth' });
});

// Animation des compétences au survol
document.querySelectorAll('.categorie li').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#0f0';
        item.style.color = '#000';
        item.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '#333';
        item.style.color = '#0f0';
        item.style.transform = 'scale(1)';
    });
});

// Ajout d'articles dans le blog
document.getElementById('submit-blog').addEventListener('click', () => {
    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;
    if (title && content) {
        const article = document.createElement('article');
        article.innerHTML = `
            <h3>🖥️ ${title}</h3>
            <p>📅 ${new Date().toLocaleDateString()}</p>
            <p>${content}</p>
            <a href="#">➡️ Lire</a>
        `;
        document.querySelector('.blog-container').prepend(article);
        document.getElementById('blog-title').value = '';
        document.getElementById('blog-content').value = '';
        article.style.animation = 'fadeInUp 1s ease-out';
    } else {
        alert('Ajoute un titre et du contenu, hacker !');
    }
});

// Animation d'entrée des sections
window.addEventListener('load', () => {
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '1';
    });
});

// Effet de glitch sur le texte du header au survol
document.querySelector('header h1').addEventListener('mouseover', function() {
    this.style.animation = 'glitchText 0.5s infinite';
});
document.querySelector('header h1').addEventListener('mouseout', function() {
    this.style.animation = 'none';
});

// Gestion du formulaire de contact (simulation)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('💾 Message envoyé dans le cyber-espace !');
    e.target.reset();
});
