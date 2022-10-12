let menu = document.getElementById("menu")
let boton = document.getElementById("m-b")
let click = false;

function clickMenu(){
    animBoton();
    click ? menu.classList.add("hide") : menu.classList.remove("hide")
    click = !click
}
function animBoton(){
    boton.classList.add("anim")
    setTimeout(() => boton.classList.remove("anim"), 400)
}
