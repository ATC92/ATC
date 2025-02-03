// Función para generar un pétalo con imagen
function crearPetalo() {
    const petalo = document.createElement("div");
    petalo.classList.add("petalo");

    // Posicionamos el pétalo en una posición aleatoria desde la parte superior
    const posX = Math.random() * window.innerWidth; // Ancho aleatorio
    petalo.style.left = `${posX}px`;

    // Opcionalmente, puedes hacer que la animación sea aleatoria
    petalo.style.animationDuration = `${Math.random() * 5 + 3}s`; // Duración aleatoria entre 3 y 8 segundos
    petalo.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio

    document.body.appendChild(petalo);

    // Eliminar el pétalo después de que termine la animación
    setTimeout(() => {
        petalo.remove();
    }, 8000); // Después de 8 segundos, eliminamos el pétalo
}

// Conjunto de imágenes de flores
const imagenesFlores = [
    'resources/Rosa.png', // Cambia esta URL por la imagen 1
    'resources/Allium.png', // Cambia esta URL por la imagen 2
    'resources/Pink_Tulip.png', // Cambia esta URL por la imagen 3
    'resources/Red_Tulip.png',  // Cambia esta URL por la imagen 4
    'resources/Diente_de_leon.png',  // Cambia esta URL por la imagen 4
    'resources/Margarita.png',  // Cambia esta URL por la imagen 4
    'resources/Orquidia_Azul.png',  // Cambia esta URL por la imagen 4
    'resources/Girasol.png',  // Cambia esta URL por la imagen 4
    'resources/Orange_Tulip.png'  // Cambia esta URL por la imagen 4
];

// Función para generar flores con imágenes aleatorias
function crearFlores() {
    const flor = document.createElement("div");
    flor.classList.add("flor");

    // Seleccionar una imagen aleatoria
    const imagenAleatoria = imagenesFlores[Math.floor(Math.random() * imagenesFlores.length)];
    flor.style.backgroundImage = `url(${imagenAleatoria})`;

    // Posicionar las flores aleatoriamente en el eje X
    const posX = Math.random() * window.innerWidth;  // Posición aleatoria horizontal
    flor.style.left = `${posX}px`;

    // Opcionalmente, puedes ajustar la animación para que cada flor tenga una duración diferente
    flor.style.animationDuration = `${Math.random() * 5 + 3}s`; // Duración aleatoria entre 3 y 8 segundos
    flor.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio

    // Añadir la flor al contenedor de flores
    const florContainer = document.querySelector('.flor-container');
    florContainer.appendChild(flor);

    document.body.appendChild(flor);

    // Eliminar la flor después de la animación para no sobrecargar la página
    setTimeout(() => {
        flor.remove();
    }, 8000); // Elimina la flor después de 8 segundos
}

window.onload = function() {
    setTimeout(function() {
        document.getElementById("buttonYes").classList.add("show");
        document.getElementById("buttonNo").classList.add("show");
    }, 2500); // Los botones aparecerán después de 3 segundos

    // Referencia al botón "No"
    const buttonNo = document.getElementById("buttonNo");

    // Función para ocultar el botón "No" de inmediato
    function hideButton() {
        buttonNo.style.display = "none"; // Desaparece instantáneamente
        setTimeout(showButton, 3000); // Espera 3 segundos antes de reaparecer
    }

    // Función para mostrar el botón "No" después de 3 segundos
    function showButton() {
        buttonNo.style.display = "inline-block"; // Lo hace reaparecer
    }

    // Detecta cuando el mouse entra al área del botón "No"
    buttonNo.addEventListener("mouseenter", hideButton);
};


// Crear pétalos a intervalos
setInterval(crearPetalo, 200); // Cada 200ms crea un nuevo pétalo

// Crear flores a intervalos
setInterval(crearFlores, 400); // Cada 1000ms crea una nueva flor

