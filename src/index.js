// const section = document.querySelector(".section");

// window.addEventListener("scroll", function () {
//   const value = window.scrollY;
//   section.style.clipPath = "circle(" + value + "px at center)";
// });

const section = document.querySelector(".section");

function esDispositivoMovil() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function aplicarEfectoScroll() {
  const value = window.scrollY;
  section.style.clipPath = "circle(" + value + "px at center)";
}

// Verificar si se trata de un dispositivo móvil antes de agregar el evento de desplazamiento
if (!esDispositivoMovil()) {
  window.addEventListener("scroll", aplicarEfectoScroll);
}
