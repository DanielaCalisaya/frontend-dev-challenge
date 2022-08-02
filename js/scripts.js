/* FAQ accordion*/
const openAndCloseAccordion = document.querySelector(".article__container__faq");

openAndCloseAccordion.addEventListener("click", function() {
    openAndCloseAccordion.classList.toggle("active")
})


/* Slideshow with testimonies */
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slideshow__container__slide");
    let dots = document.getElementsByClassName("slideshow__container__dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" act", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " act";
    setTimeout(showSlides, 5000); // Change text every 5 seconds
}