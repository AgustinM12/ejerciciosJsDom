let form = document.getElementById("form");

//SE DEFINE UN OBJETO CON LAS 4 OPERACIONES
const operaciones = {
    suma: 1,
    resta: 2,
    multiplicacion: 3,
    division: 4,
};
//SE LE AGREGA UN EVENTO AL PRESIONAR EL BOTON SUBMIT
form.addEventListener("submit", (e) => {
    // previene la acción predeterminada del evento de envío de formulario "submit". No se recargará la página ni se enviaran los datos al servidor.
    e.preventDefault();

    //se almacenan los datos del formulario que son ingresados por el usuario que son traidos del html
    let form = new FormData(e.target);

    let num1 = Number(form.get("num1"));
    let num2 = Number(form.get("num2"));

    let operacion = Number(form.get("operacion"));

    let respuesta = document.getElementById("respuesta");

    //SEGUN LA OPERACION ELEGIDA EN EL SELECTOR HTML SE EJECUTAN UNA DE LAS 4 OPERACIONES 
    switch (operacion) {
        case operaciones.suma:
            respuesta.innerHTML = Number(num1) + Number(num2);
            break;
        case operaciones.resta:
            respuesta.innerHTML = Number(num1) - Number(num2);
            break;
        case operaciones.multiplicacion:
            respuesta.innerHTML = Number(num1) * Number(num2);
            break;
        case operaciones.division:
            respuesta.innerHTML = (Number(num1) / Number(num2)).toFixed(2);
            break;
        default:
            respuesta.innerHTML = "Error";
    }
});
