$('.header-menu-mobile').on('click', function() {
    $(this).toggleClass('active').next().toggleClass('active');
});

let slider = document.querySelectorAll('.main-slider-item');

let currentSliderItem = 0;
let sliderInterval = setInterval(nextSlide, 3000);

let playing = true;
let nextButton = document.querySelector('#next');
let previousButton = document.querySelector('#previous');

function nextSlide() {
    goToSlide(currentSliderItem + 1);
}

function prevSlide() {
    goToSlide(currentSliderItem - 1);
}

nextButton.addEventListener('click', () => {
    clearInterval(sliderInterval);
    nextSlide();
    sliderInterval = setInterval(nextSlide, 3000);
});

previousButton.addEventListener('click', () => {
    clearInterval(sliderInterval);
    prevSlide();
    sliderInterval = setInterval(nextSlide, 3000);
});

function goToSlide(n) {
    slider[currentSliderItem].className = 'main-slider-item';
    currentSliderItem = (slider.length + n) % slider.length;
    slider[currentSliderItem].className = 'main-slider-item active';
}