let tab = ["img/kirikouStop.png","KirikouImgStop"]

let imgKirikouRun = document.querySelector('.KirikouImgRun')

const divKirikou = document.querySelector(".kirikou")
let imgKirikouStop = document.createElement('img')
divKirikou.appendChild(imgKirikouStop)

imgKirikouRun.style.display='none'

    function Scroll(){
        let scrollPos = window.pageYOffset

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
    }
 window.addEventListener("scroll",Scroll);
