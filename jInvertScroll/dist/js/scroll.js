// Animation kiri
function Scroll(){
let ypos = window.pageYOffset
let kiri = document.querySelector('.kiri')
let koko = document.querySelector('.kiri img')
console.log(ypos)

 if (ypos > 100 ) {
    kiri.classList.add("kiriAnim")
}
if (ypos > 2000 ) {
    kiri.classList.add("kiriAnim2")
}
if (ypos > 3000 ) {
    koko.classList.add("kiriAnim3")
}
}
window.addEventListener("scroll",Scroll);
