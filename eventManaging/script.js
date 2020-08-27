window.onload = timeout;
const body=document.getElementById("body")
function timeout() {    
    
    window.setTimeout("redirect()", 9000)
}


function redirect() {
    var splash = document.querySelector(".splash-container");
//    body.style.overflow="visible"
  //  body.style.padding=10+"px"
    //body.style.margin=8+"px"
    //console.log(splash)
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