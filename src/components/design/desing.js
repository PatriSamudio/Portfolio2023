const toggleBtn = document.querySelector(".toggle-btn");
const listContainer = document.querySelector(".list-container");

toggleBtn.addEventListener("click", () => {
  listContainer.classList.toggle("flex");
});
