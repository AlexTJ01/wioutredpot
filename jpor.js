JavaScript (script.js)

// A simple script to demonstrate interaction
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.backgroundColor = '#f0f0f0';
        });

        card.addEventListener('mouseout', () => {
            card.style.backgroundColor = '#fff';
        });
    });
});

