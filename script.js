const cards = document.querySelectorAll(
'.card,.project-card,.info-card,.featured-project'
);

cards.forEach(card => {

card.addEventListener('mouseenter', () => {
card.style.transform = 'translateY(-6px)';
card.style.transition = '.3s';
});

card.addEventListener('mouseleave', () => {
card.style.transform = 'translateY(0)';
});

});