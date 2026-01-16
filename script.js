/**
 * VlimGaming Portfolio Logic
 * Handles theming and basic UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const yearSpan = document.getElementById('year');

    // Set current year in footer
    yearSpan.textContent = new Date().getFullYear();

    // Theme Management
    const savedTheme = localStorage.getItem('vlim-theme') || 'theme-red';
    body.className = savedTheme;

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('theme-red')) {
            body.classList.replace('theme-red', 'theme-blue');
            localStorage.setItem('vlim-theme', 'theme-blue');
        } else {
            body.classList.replace('theme-blue', 'theme-red');
            localStorage.setItem('vlim-theme', 'theme-red');
        }
    });

    // Smooth scroll reveal animation (simplified)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply reveal effect to cards
    document.querySelectorAll('.skill-card, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
