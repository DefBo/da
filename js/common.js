// Slider functions

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
// Slider functions end

// Show/Hide navigation menu
function showNav() {
    document.body.classList.add('_show-nav');
}

function hideNav() {
    document.body.classList.remove('_show-nav');
}
// Show/Hide navigation menu end


// Toggle class _active by clicking on item
function toggleItemActive(item) {
    item.classList.toggle("_active");
}


// Show/hide "Add more from favorites" block in modal
function showFavorite() {
    document.body.classList.toggle('_show-fav');
}

// Show modal
function showModal() {
    document.body.classList.add('_popup-open');
}

// Hide modal
function hideModal() {
    document.body.classList.remove('_popup-open');
}

// Switch to light theme
function switchToLightTheme() {
    document.body.classList.toggle('_light-theme');
}