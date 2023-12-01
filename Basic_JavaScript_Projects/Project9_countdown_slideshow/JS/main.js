// Thumbnail image controls
function currentSlide(n) {
    mySlidesFade((slideIndex = n)); // Use mySlidesFade instead of showSlides
}

// Show slides function
function mySlidesFade(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Next/previous controls
function plusSlides(n) {
    mySlidesFade((slideIndex += n)); // Use mySlidesFade instead of showSlides
}
