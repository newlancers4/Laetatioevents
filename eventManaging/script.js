window.onload = timeout;
const body = document.getElementById("body")
function timeout() {
    var addr = window.location.href
    var splash = document.getElementById("splash-container");
    var body = document.getElementById("body")
    if (addr.includes("?splash")) {
        splash.remove()
        body.style.animation = "none"
        body.style.padding = 10 + "px"
        body.style.margin = 8 + "px"
        body.style.overflow = "visible"
        body.style.background = "f1f1f1"

        return;

    }
    else
        window.setTimeout("redirect()", 9000)
}

function redirect() {
    var splash = document.querySelector(".splash-container");
    splash.style.display="none"
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

function toPage(id) {
    switch (id) {
        case "bd":
            location.href = "./balloonDecorations.html"
            break;
        case "ld":
            location.href = "./lightingDecorations.html"
            break;
        case "hw":
            location.href = "./homeWeddings.html"
            break;
        case "td":
            location.href = "./themedDecorations.html"
            break;

        case "sp":
            location.href = "./surprises.html"
            break;
        case "pr":
            location.href ="./index.html?splash"
        default:
            break;
    }
}