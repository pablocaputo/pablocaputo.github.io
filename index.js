let btn = document.getElementById("boton");
let datos = document.getElementById("datos")
btn.addEventListener("click",oculto)
function oculto(){
    if (datos.classList.contains("oculto")) {
        datos.classList.remove("oculto");
        btn.textContent = "Ver Menos";
    }
    else {
        datos.classList.add("oculto");
        btn.textContent = "Ver Más";
    }
}