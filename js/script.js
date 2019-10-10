const sun=document.querySelector("#sunbox")

let tab = ["../img/kirikouStop.png","KirikouImgStop"]

let imgKirikouRun = document.querySelector('.KirikouImgRun')

const divKirikou = document.querySelector(".kirikou")
let imgKirikouStop = document.createElement('img')
divKirikou.appendChild(imgKirikouStop)

imgKirikouRun.style.display='none'

function Scroll(){
    let scrollPos = window.pageXOffset

    if(scrollPos > 0){
        imgKirikouRun.style.display='none'
        imgKirikouStop.setAttribute('src',tab[0])
        imgKirikouStop.setAttribute('class',tab[1])
    }
    if(scrollPos > 80){
        imgKirikouRun.style.display='block'
        imgKirikouStop.removeAttribute('src',tab[0])
        imgKirikouStop.removeAttribute('class',tab[1])
    }
    if(scrollPos != scrollPos){
        imgKirikouRun.style.display='none'
    }

    sun.style.transform = "rotate("+scrollPos/26+"deg)";
}
window.addEventListener("scroll",Scroll);
