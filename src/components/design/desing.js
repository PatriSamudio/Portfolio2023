const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener("click", () => {
    const position = i;

    const operation = position * -22;

    grande.style.transform = `translateX(${operation}%)`;

    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove("activo");
    });

    punto[i].classList.add("activo");
  });
});

const toggleBtn = document.querySelector(".toggle-btn");
const listContainer = document.querySelector(".list-container");

toggleBtn.addEventListener("click", () => {
  // when clicked show the hidden items
  listContainer.classList.toggle("flex");
});
