let menu = document.getElementById("menu")
let boton = document.getElementById("m-b")
let fondo = document.getElementById("f-menu")
let click = false;
let idOld = "m-1"

function clickMenu(){
    animBoton();
    click ? fondo.classList.add("hideF") : fondo.classList.remove("hideF")
    click ? menu.classList.add("hide") : menu.classList.remove("hide")
    click = !click
}
function animBoton(){
    boton.classList.add("anim")
    setTimeout(() => boton.classList.remove("anim"), 400)
}
function hoverMenu(id){
    clickMenu();
    hover(id)
}
function hover(id){
    document.getElementById(idOld).classList.remove("select")
    document.getElementById(id).classList.add("select")
    idOld = id;
}
function scrollPos(){
    for (let index = 1; index < 6; index++) {
        //const element = array[index];
        let altura = window.innerHeight * (index - 1)
        let altura2 = window.innerHeight * index  
        console.log(altura)
        if(window.scrollY >= altura && window.screenY < index ){
            hover(`m-${index}`)
        }
        
    }
}
fondo.addEventListener("click", () => clickMenu())


