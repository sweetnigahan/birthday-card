document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('card');
    const cardFront = document.querySelector('.card-front');
    const boxLid = document.querySelector('.box-lid');
    const box = document.querySelector('.box');

    // Swipe to open card
    card.addEventListener('click', () => {
        cardFront.style.transform = 'translateX(-100%)';
        card.querySelector('.card-back').style.transform = 'translateX(0)';
    });

    // Open box
    boxLid.addEventListener('click', () => {
        box.classList.toggle('open');
    });
});
