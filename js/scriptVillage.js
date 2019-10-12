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

  let scrollTimer = -1
  let lastScrollTop = 0

  function Scroll(){
    
    let scrollPos = window.pageXOffset || document.documentElement.scrollTop
    

    if (scrollPos > lastScrollTop){
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

  lastScrollTop = scrollPos <= 0 ? 0 : scrollPos

    if (scrollTimer != -1)
    clearTimeout(scrollTimer)

        scrollTimer = window.setTimeout("scrollFinished()", 100)
      
      if(scrollPos > 4000){

            myVar = setTimeout(function() {
              window.location = "../pages/source.html"
            },
          800)
        imgKirikouRun.classList.add('KirikouImgRunForUnivers')

      }
      sun.style.transform = "rotate("+scrollPos/26+"deg)"
    }

    function scrollFinished() {
      let scrollX = window.pageXOffset
      if (scrollX < 3999){
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
let colors = ["black", "#d0cfce"]


document.addEventListener("mousemove", function(event) {
  const x = event.clientX / window.innerWidth
  const y = event.clientY / window.innerHeight
  const angle = Math.atan2(y, 1 - x)

  const distance = Math.hypot(window.innerWidth - event.clientX, event.clientY)
  const radius = Math.min(distance / 70, 10)

  const eyeX = Math.sin(angle - Math.PI * 0.5) * radius
  const eyeY = Math.cos(angle - Math.PI * 0.5) * radius

  balls[0].style.transform = 'translate(' + eyeX + 'px, ' + eyeY + 'px)'
  balls[1].style.transform = 'translate(' + eyeX + 'px, ' + eyeY + 'px)'


   setInterval(
      function(){ 
          let temp = Math.floor(Math.random()*colors.length)
          balls[0].style.background = colors[temp]
          balls[1].style.background = colors[temp]
          balls[0].style.transition = "background 0.5s"
          balls[1].style.transition = "background 0.5s"
      }, 2000
  )
})
