let tab = [
    ["img/kirikouStop.png","KirikouImgStop"],
    ["img/Kiricourt.gif","KirikouImgRun"],
  ]

    const divKirikou = document.querySelector(".kirikou")
    let imgKirikou = document.createElement('img')
    divKirikou.appendChild(imgKirikou)
    function Scroll(){
        let scrollPos = window.pageYOffset

        if(scrollPos > 0){
            imgKirikou.setAttribute('src',tab[0][0])
            imgKirikou.setAttribute('class',tab[0][1])
        }
        if(scrollPos > 80){
            imgKirikou.setAttribute('src',tab[1][0])
            imgKirikou.setAttribute('class',tab[1][1])
        }
    }
 window.addEventListener("scroll",Scroll);
