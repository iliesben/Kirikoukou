// index page

let container = document.getElementById("container"),
    imageBackGround = document.getElementById("imageBackGround"),
    imageTextKirikou = document.getElementById("imageTextKirikou"),
    main = document.querySelector("main"),
    body = document.querySelector("body")

let windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;


function moveBackgound(e) {

    let mouseXposition = e.clientX,
        mouseYposition = e.clientY;

    let calculatedX = mouseXposition / (windowWidth / 5);
    let calculatedY = mouseYposition / (windowHeight / 5);

    imageBackGround.style.transform = "translate(-" + calculatedX.toString() + "%, -" + calculatedY.toString() + "%)";
    imageTextKirikou.style.transform = "translate(" + calculatedX.toString() + "%, " + calculatedY.toString() + "%)";
}

container.addEventListener("mousemove", moveBackgound)


container.addEventListener("click", function() {

    myVar = setTimeout(function() {
            window.location = "../Kirikoukou/pages/village.html"
        },
        2000);

    container.classList.add("backGroundAnnimation")

});