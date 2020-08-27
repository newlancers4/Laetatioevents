window.onload = timeout;
const body = document.getElementById("body")
function timeout() {
    window.setTimeout("redirect()", 9000)
}

function redirect() {
    var splash = document.querySelector(".splash-container");
    splash.remove()
}
window.onscroll = function () { myFunction() };

var menu = document.querySelector(".topnav");
var sticky = menu.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        menu.classList.add("sticky")
    } else {
        menu.classList.remove("sticky");
    }
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}