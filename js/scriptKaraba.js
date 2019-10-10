// Kirikou annimation

const sun=document.querySelector("#sunbox")

let tab = ["../img/kirikouStop.png","KirikouImgStop rellax"]

let imgKirikouRun = document.querySelector(".KirikouImgRun")

const divKirikou = document.querySelector(".kirikou")
let imgKirikouStop = document.createElement("img")
divKirikou.appendChild(imgKirikouStop)

imgKirikouRun.style.display="none"
imgKirikouStop.setAttribute("src",tab[0])
imgKirikouStop.setAttribute("class",tab[1])


function Scroll(){
  let scrollPos = window.pageXOffset

  if(scrollPos > 0 && scrollPos < 19){
    imgKirikouRun.style.display="none"
    imgKirikouStop.setAttribute("src",tab[0])
    imgKirikouStop.setAttribute("class",tab[1])
  }
  if(scrollPos > 20 && scrollPos < 3999){
    imgKirikouRun.style.display="block"
    imgKirikouStop.removeAttribute("src",tab[0])
    imgKirikouStop.removeAttribute("class",tab[1])
  }
  if(scrollPos > 4000){
    window.location = "../pages/boutique.html"
  }
  sun.style.transform = "rotate("+scrollPos/26+"deg)";
}
window.addEventListener("scroll",Scroll);

//Menu work

let menuWatcher = document.querySelector(".menuImg")
let menuOpen = document.querySelector(".menuUl")
let i = 0

function Menu(){
  if(i==0)
  {
    menuOpen.style.transform="translateX(0px)"
    i++
  }
  else if(i==1)
  {
    menuOpen.style.transform="translateX(200px)"
    i--
  }

}
menuOpen.addEventListener("click", Menu)

// Eyes Flow cursor

let balls = document.getElementsByClassName("ball");

document.addEventListener("mousemove", function(event)
{
  const x = event.clientX / window.innerWidth
  const y = event.clientY / window.innerHeight
  const angle = Math.atan2(y, 1 - x)

  const distance = Math.hypot(window.innerWidth - event.clientX, event.clientY)
  const radius = Math.min(distance / 70, 10)

  const eyeX = Math.sin(angle - Math.PI * 0.5) * radius
  const eyeY = Math.cos(angle - Math.PI * 0.5) * radius

  balls[0].style.transform = 'translate(' + eyeX + 'px, ' + eyeY + 'px)';
  balls[1].style.transform = 'translate(' + eyeX + 'px, ' + eyeY + 'px)';
})
