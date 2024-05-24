// Selecciona el elemento con la clase "title"
var textWrapper = document.querySelector(".title");

// Reemplaza cada carácter no espaciado con un elemento <span> que tiene la clase "letter"
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

// Inicia una secuencia de animaciones usando Anime.js
anime.timeline().add({
  // Selecciona todos los elementos con la clase "letter" dentro de ".title"
  targets: ".title .letter",
  // Realiza una animación de desplazamiento vertical de 100 a 0
  translateY: [100, 0],
  // No hay cambio en la profundidad de los elementos
  translateZ: 0,
  // Cambia la opacidad de 0 a 1
  opacity: [0, 1],
  // Usa una función de aceleración llamada "easeOutExpo"
  easing: "easeOutExpo",
  // La duración de la animación es de 2000 milisegundos (2 segundos)
  duration: 2000,
  // Cada elemento espera un tiempo determinado antes de comenzar su animación
  delay: (el, i) => 4800 + 40 * i,
});

// Utiliza TweenMax para animar la clase "box"
TweenMax.to(".box", 2.4, {
  // Desplaza el elemento hacia arriba (-100% de su altura original)
  y: "-100%",
  // Usa una función de aceleración llamada "Expo.easeInOut"
  ease: Expo.easeInOut,
  // Espera 1 segundo antes de comenzar la animación
  delay: 1,
});

// Utiliza TweenMax para animar todos los elementos "img"
TweenMax.from("img", 4, {
  // Escala la imagen a un 200% de su tamaño original
  scale: "2",
  // Usa una función de aceleración llamada "Expo.easeInOut"
  ease: Expo.easeInOut,
  // No hay espera antes de comenzar la animación
  delay: 0,
});

// Utiliza TweenMax para animar el elemento con la clase "wrapper-img"
TweenMax.to(".wrapper-img", 2.4, {
  // Cambia el ancho a 400 y la altura a 500
  width: "400",
  height: "500",
  // Usa una función de aceleración llamada "Expo.easeInOut"
  ease: Expo.easeInOut,
  // Espera 3.6 segundos antes de comenzar la animación
  delay: 3.6,
});

// Utiliza TweenMax para animar el elemento con la clase "img"
TweenMax.from(".img", 0.4, {
  // Cambia la opacidad de 0 a 1
  opacity: 0,
  // Usa una función de aceleración llamada "Expo.easeInOut"
  ease: Expo.easeInOut,
  // Espera 3.4 segundos antes de comenzar la animación
  delay: 3.4,
});

// Utiliza TweenMax para animar el elemento con la clase "left"
TweenMax.to(".left", 2, {
  // Desplaza el elemento hacia la izquierda (-400 píxeles) y rota -10 grados
  x: "-400",
  rotation: -10,
  // Usa una función de aceleración llamada "Expo.easeInOut"
  ease: Expo.easeInOut,
  // Espera 3.8 segundos antes de comenzar la animación
  delay: 3.8,
});

// Utiliza TweenMax para animar el elemento con la clase "right"
TweenMax.to(".right", 2, {
  // Desplaza el elemento hacia la derecha (100 píxeles) y rota 10 grados
  x: "100",
  rotation: 10,
  // Usa una función de aceleración llamada "Expo.easeInOut"
  ease: Expo.easeInOut,
  // Espera 3.8 segundos antes de comenzar la animación
  delay: 3.8,
});

// Utiliza TweenMax para animar elementos con las clases "menu" y "hero-container"
TweenMax.staggerFrom(
  ".menu > div, .hero-container > div",
  2,
  {
    opacity: 0,
    y: 30,
    // Usa una función de aceleración llamada "Expo.easeInOut"
    ease: Expo.easeInOut,
    // Espera 4.2 segundos antes de comenzar la animación
    delay: 4.2,
  },
  0.1
);

//CURSOR 

Splitting();

let cursor = document.querySelector('.cursor'),
    cursorText = cursor.querySelectorAll('.char');

let radius = 70

function init() {
    rounded(radius);
    window.addEventListener('mousemove', cursorMove);
}

window.addEventListener("load", function () {
    init();
})

function rounded(radius) {
    for (let i = 0; i < cursorText.length; i++) {
        let rotation = i * (360 / cursorText.length);
        gsap.set(cursorText[i], {
            transformOrigin: `0px ${radius}px`,
            x: radius,
            rotate: rotation
        });
        gsap.set(cursor, {
            transformOrigin: "center center",
            rotation: 0,
            width: radius * 2,
            height: radius * 2
        })
    }

    let rotate = gsap.timeline({
        repeat: -1
    })
    rotate.to(cursor, {
        rotation: 360,
        duration: 5,
        ease: "none"
    })
}

function cursorMove(e) {
    var mouseX = e.clientX,
        mouseY = e.clientY
    var tl = gsap.timeline();
    tl.to(cursor, {
        duration: 1,
        x: mouseX - radius,
        y: mouseY - radius,
        ease: Expo.ease
    })
}