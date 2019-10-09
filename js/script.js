const parallax = document.querySelectorAll('.parallax')
const sun=document.querySelector("#sunbox")
let parallaxfactor=0


function Scroll(){
    let scrollPos = window.pageXOffset
    for(let i=0; i<parallax.length; i++){
      parallax[i].style.transform="translateX("+scrollPos/parallax[i].dataset.speed+"px)"
      parallaxfactor+=1
    }
    sun.style.transform = "rotate("+scrollPos/26+"deg)";
}
window.addEventListener("scroll",Scroll);
