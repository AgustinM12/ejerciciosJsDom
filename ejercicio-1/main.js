const btnCambiarColor = document.getElementById("btnCambiarColor");
const texto = document.getElementById("texto");

btnCambiarColor.addEventListener("click", cambiarColor);

function cambiarColor() {
    /* LE QUITA O AGREGA LA CLASE ".naranja" A LA CONSTANTE "texto", TRAIDA POR SU ID DEL HTML */
    texto.classList.toggle("naranja")
}