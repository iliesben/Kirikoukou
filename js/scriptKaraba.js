const sun=document.querySelector("#sunbox")

let tab = ["../img/kirikouStop.png","KirikouImgStop rellax"]

let imgKirikouRun = document.querySelector('.KirikouImgRun')

const divKirikou = document.querySelector(".kirikou")
let imgKirikouStop = document.createElement('img')
divKirikou.appendChild(imgKirikouStop)

imgKirikouRun.style.display='none'
imgKirikouStop.setAttribute('src',tab[0])
imgKirikouStop.setAttribute('class',tab[1])


function Scroll(){
    let scrollPos = window.pageXOffset

    if(scrollPos > 0 && scrollPos < 19){
        imgKirikouRun.style.display='none'
        imgKirikouStop.setAttribute('src',tab[0])
        imgKirikouStop.setAttribute('class',tab[1])
        console.log('1')
    }
    if(scrollPos > 20 && scrollPos < 3999){
        imgKirikouRun.style.display='block'
        imgKirikouStop.removeAttribute('src',tab[0])
        imgKirikouStop.removeAttribute('class',tab[1])
        console.log('2')
    }
    if(scrollPos > 4000){
        console.log('3')
        window.location = "../pages/boutique.html"
    }
    sun.style.transform = "rotate("+scrollPos/26+"deg)";
    console.log(scrollPos)

}
window.addEventListener("scroll",Scroll);



let menuWatcher = document.querySelector('.menuImg')
let MenuNav = document.querySelector('.menuUl')
let i = 0

function Menu(){
    if(i==0)
    {
      console.log('0')
      MenuNav.style.transform='translateX(0px)'
      i++
    }
    else if(i==1)
    {
      console.log('1')
      MenuNav.style.transform='translateX(200px)'
      i--
    }

}
MenuNav.addEventListener("click", Menu)

