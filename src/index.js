const section = document.querySelector(".section");

function esDispositivoMovil() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function aplicarEfectoScroll() {
  const value = window.scrollY;
  section.style.clipPath = "circle(" + value + "px at center)";
}

if (!esDispositivoMovil()) {
  window.addEventListener("scroll", aplicarEfectoScroll);
}
