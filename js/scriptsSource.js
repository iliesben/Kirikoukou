// Kirikou annimation

const sun = document.querySelector("#sunbox")

let tab = ["../img/kirikouStop.png", "KirikouImgStop rellax"]

let imgKirikouRun = document.querySelector(".KirikouImgRun")

const divKirikou = document.querySelector(".kirikou")
let imgKirikouStop = document.createElement("img")
divKirikou.appendChild(imgKirikouStop)

imgKirikouRun.style.display = "none"
imgKirikouStop.setAttribute("src", tab[0])
imgKirikouStop.setAttribute("class", tab[1])


let scrollTimer = -1
let lastScroll = 0

function Scroll(){
  let scrollPos = window.pageXOffset

  if (scrollPos > lastScroll){
    console.log('D')
    imgKirikouRun.style.display="block"
    imgKirikouRun.style.transform="scaleX(1)"
    imgKirikouStop.removeAttribute("src",tab[0])
    imgKirikouStop.removeAttribute("class",tab[1])

  } else {
   console.log('G')
   imgKirikouRun.style.display="block"
   imgKirikouRun.style.transform="scaleX(-1)"
   imgKirikouStop.removeAttribute("src",tab[0])
   imgKirikouStop.removeAttribute("class",tab[1])
}

lastScroll = scrollPos <= 0 ? 0 : scrollPos


  if (scrollTimer != -1)
  clearTimeout(scrollTimer)

      scrollTimer = window.setTimeout("scrollFinished()", 100)

        if(scrollPos > 3800){

            myVar = setTimeout(function() {
                window.location = "../pages/karaba.html"
            },
        800)
        imgKirikouRun.classList.add('KirikouImgRunForUnivers')


        }
        sun.style.transform = "rotate("+scrollPos/26+"deg)"
   }

   function scrollFinished() {
    let scrollX = window.pageXOffset
    if (scrollX < 3799){
    imgKirikouRun.style.display="none"
    imgKirikouStop.setAttribute("src",tab[0])
    imgKirikouStop.setAttribute("class",tab[1])
  }
}


window.addEventListener("scroll",Scroll)


//Menu work


let menuWatcher = document.querySelector(".menuImg")
let menuLink = document.querySelector(".menuLink")
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
menuWatcher.addEventListener("click", Menu)
menuLink.addEventListener("click", Menu)

// Eyes Flow cursor

let balls = document.querySelectorAll(".ball")

document.addEventListener("mousemove", function(event) {
    const x = event.clientX / window.innerWidth
    const y = event.clientY / window.innerHeight
    let colors = ["0px", "9px"]
    const angle = Math.atan2(y, 1 - x)

    const distance = Math.hypot(window.innerWidth - event.clientX, event.clientY)
    const radius = Math.min(distance / 70, 10)

    const eyeX = Math.sin(angle - Math.PI * 0.5) * radius
    const eyeY = Math.cos(angle - Math.PI * 0.5) * radius

    balls[0].style.transform = 'translate(' + eyeX + 'px, ' + eyeY + 'px)'
    balls[1].style.transform = 'translate(' + eyeX + 'px, ' + eyeY + 'px)'



     setTimeout(
        function(){

            balls[0].style.height = '0px'
            balls[1].style.height = '0px'
            balls[0].style.transition = "height 50ms"
            balls[1].style.transition = "height 50ms"
        }, 1000
    )
    setTimeout(
        function(){
            balls[0].style.height = '9px'
            balls[1].style.height = '9px'
            balls[0].style.transition = "height 50ms"
            balls[1].style.transition = "height 50ms"
        }, 1100
    )

})
