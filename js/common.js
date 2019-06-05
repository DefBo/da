var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("da-slider__item");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}

function showNav() {
    document.body.classList.add('_show-nav');
}

function hideNav() {
    document.body.classList.remove('_show-nav');
}

function toggleItemActive(item) {
    item.classList.toggle("_active");
}

function showFavorite() {
    document.body.classList.toggle('_show-fav');
    // item.classList.toggle("_active");
}

function showModal() {
    document.body.classList.add('_popup-open');
}

function hideModal() {
    document.body.classList.remove('_popup-open');
}

function switchToLightTheme() {
    document.body.classList.toggle('_light-theme');
}