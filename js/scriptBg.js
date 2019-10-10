// first page

let container = document.getElementById('container'),
    image = document.getElementById('image'),
    image2 = document.getElementById('image2'),
    main = document.querySelector('main'),
    body = document.querySelector('body')

let windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;


function moveBackgound(e) {
  //getting mopuse x and y position

  let mouseXposition = e.clientX,
      mouseYposition = e.clientY;
  
// we dont have to use window's width and height to calculate this, u can just replace it with any number you want , prefered to be more than 900 based on pic's width and height
  
  // the more u increase the number devided by width and height the less friction u have ,
  // and the less u decrease the devided by width and height  the more friction u have, but be carefull bcs the pic may go out of the body
  let calculatedX = mouseXposition / (windowWidth / 5);
  let calculatedY = mouseYposition / (windowHeight / 5);

  //OR USE THIS
  
  // the more u increase the number the less friction u have ,
  // and the less u decrease the number the more friction u have, but be carefull bcs the pic may go out of the body
  // let calculatedX = mouseXposition / 200;
  // let calculatedY = mouseYposition / 200;

  image.style.transform = "translate(-" + calculatedX.toString() + "%, -" + calculatedY.toString() + "%)";  
  image2.style.transform = "translate(" + calculatedX.toString() + "%, " + calculatedY.toString() + "%)"; 
}

container.addEventListener("mousemove", moveBackgound)


container.addEventListener("click", function(){

        myVar = setTimeout(function(){ 
            window.location = "../Kirikoukou/pages/index.html"
         }, 
            4000);
    
        container.classList.add('agrand')

    
});