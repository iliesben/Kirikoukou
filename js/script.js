const sun=document.querySelector("#sunbox")


function Scroll(){
    let scrollPos = window.pageXOffset
    sun.style.transform = "rotate("+scrollPos/26+"deg)";
}
window.addEventListener("scroll",Scroll);
