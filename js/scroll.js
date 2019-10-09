let tab = ["img/kirikouStop.png","KirikouImgStop"]

let imgKirikouRun = document.querySelector('.KirikouImgRun')
const sun=document.querySelector("#sunbox")

const divKirikou = document.querySelector(".kirikou")
let imgKirikouStop = document.createElement('img')
divKirikou.appendChild(imgKirikouStop)

imgKirikouRun.style.display='none'

    function Scroll(){
        let scrollPos = window.pageYOffset
        // console.log(scrollPos)
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
        let sunrotation = scrollPos/36
        sun.style.transform = "rotate("+sunrotation+"deg)";
    }
 window.addEventListener("scroll",Scroll);
