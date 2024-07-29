// reviews.js
let step = 0;
const slide = document.querySelector('.review-slide');

function nextReview() {
    const reviewItems = document.querySelectorAll('.review-item');
    const itemWidth = reviewItems[0].clientWidth;
    const visibleItems = Math.floor(slide.clientWidth / itemWidth);
    const maxStep = (reviewItems.length - visibleItems) * itemWidth;

    if (step < maxStep) {
        step += itemWidth;
        slide.style.transform = `translateX(-${step}px)`;
    }
}

function prevReview() {
    const reviewItems = document.querySelectorAll('.review-item');
    const itemWidth = reviewItems[0].clientWidth;

    if (step > 0) {
        step -= itemWidth;
        slide.style.transform = `translateX(-${step}px)`;
    }
}

// Para hacer que las reseñas se muevan automáticamente cada cierto tiempo
setInterval(nextReview, 3000); // Cambia las reseñas cada 3 segundos
