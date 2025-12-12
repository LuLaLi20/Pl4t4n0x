document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Animación al hacer scroll (Fade In) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // --- 2. Efecto Glitch simple en el título (Opcional) ---
    const title = document.querySelector('.neon-title');
    
    setInterval(() => {
        // Añade una clase glitch aleatoriamente
        if(Math.random() > 0.95) {
            title.style.textShadow = '2px 2px 0px #ff0000, -2px -2px 0px #0000ff';
            setTimeout(() => {
                title.style.textShadow = '0 0 5px #fff, 0 0 20px #FFD700';
            }, 100);
        }
    }, 1000);

    // --- 3. Menú Móvil (Opcional si decides activarlo) ---
    // Si quieres que el botón de hamburguesa funcione:
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#0f0f0f';
            navLinks.style.padding = '20px';
        });
    }
});
