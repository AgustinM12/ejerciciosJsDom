// SE DEFINE UN ARRAY CON OBJETOS DENTRO
const tiers = [
    {
        titulo: "Tier 1: Chun-li",
        descripcion: "Su velocidad, movimientos de patadas rápidos le permiten controlar el espacio. También tiene un excelente juego de pies que la convierte en una amenaza constante.",
        imagen: "https://www.arcade-fighter.com/images/street-fighter-3-third-strike-fight-for-the%20future/street-fighter-3-third-strike-chun-li-portrait.jpg",
    },

    {
        titulo: "Tier 2: Yun",
        descripcion: "Su velocidad, movilidad y daño alto hacen que sea una fuerza formidable,  lo que le permite dominar el juego neutral y mantener a sus oponentes a la defensiva.",
        imagen: "https://www.arcade-fighter.com/images/street-fighter-3-third-strike-fight-for-the%20future/street-fighter-3-third-strike-yun-portrait.jpg",
    },

    {
        titulo: "Tier 3: Ken",
        descripcion: "Combina una amplia gama de herramientas, incluyendo ataques rápidos, movimientos especiales versátiles y opciones de mix-up.",
        imagen: "https://www.arcade-fighter.com/images/street-fighter-3-third-strike-fight-for-the%20future/street-fighter-3-third-strike-ken-portrait.jpg",
    },

    {
        titulo: "Tier 4: Makoto",
        descripcion: "Su poder de golpeo es extremadamente alto, lo que la convierte en una amenaza letal a corta distancia. Tiene una gran variedad de opciones de mix-up y un potente agarre.",
        imagen: "https://www.arcade-fighter.com/images/street-fighter-3-third-strike-fight-for-the%20future/street-fighter-3-third-strike-makoto-portrait.jpg",
    },

    {
        titulo: "Tier 5: Dudley",
        descripcion: "Su estilo de lucha se centra en los golpes de boxeo y su capacidad para cerrar la distancia rápidamente. Tiene ataques rápidos, un buen daño y una amplia gama de opciones de presión.",
        imagen: "https://www.arcade-fighter.com/images/street-fighter-3-third-strike-fight-for-the%20future/street-fighter-3-third-strike-dudley-portrait.jpg",
    },
]
// SE CREA UNA NUEVA CONSTANTE TRAYENDO EL ID "contenedor" QUE POSEE EL main EN EL HTML
const contenedor = document.getElementById("contenedor");
// SE CONCATENAN LOS OBJETOS DEL ARRAY tiers A LA CONSTANTE CONTENEDOR QUE VIENE DEL HTML
contenedor.innerHTML += tiers
    //DEVUELVE UN NUEVO ARREGLO CON LA MISMA LOGITUD QUE tiers PERO CON LAS TARJETAS Y AGREGANDO LOS OBJETOS A DICHAS TARJETAS
    .map((tiers) => {
        return `
            <div class ="card my-card d-flex" style = "max-width: 18rem;" >
                <img src="${tiers.imagen}" class="card-img-top my-img " height=250px width=250px alt="${tiers.titulo}">
                    <div class="card-body ">
                        <h5>${tiers.titulo}</h5>
                        <p>${tiers.descripcion}</p>
                    </div>
                </div>
        `;
    })
    //recorre el arreglo y concatena cada elemento en una cadena, separándolos con el delimitador especificado. El resultado es una única cadena que contiene todos los elementos del arreglo.
    .join("");
