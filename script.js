document.addEventListener('DOMContentLoaded', function() {
    // Показ сообщения после анимации открытки
    setTimeout(function() {
        document.getElementById('message').style.display = 'block';
    }, 3000); // Задержка в 3 секунды, совпадающая с длительностью анимации открытки
});

function expandHeart() {
    const heart = document.getElementById('heart');
    const heartText = document.getElementById('heart-text');
    
    heartText.style.display = 'block';
    
    // Увеличение сердца
    heart.style.animation = 'none';
    heart.offsetHeight; /* Перезапускаем анимацию */
    heart.style.animation = 'heartAnimation 2s forwards';
    
    // Показ сообщения "Я тебя люблю" после 9 кликов
    let clickCount = 0;
    heart.addEventListener('click', function() {
        clickCount++;
        if (clickCount >= 9) {
            heartText.innerHTML = 'Я тебя люблю';
            heart.style.transform = 'scale(10)';
        }
    });
}
