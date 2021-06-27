const filterBtn = document.querySelector(".titleAndFilters .filter-btn");
const filterBar = document.querySelector(".titleAndFilters .filter-bar");
const closeBtn = filterBar.querySelector(".btn-box .close");
const applyBtn = filterBar.querySelector(".apply-btn");
const optionBtns = filterBar.querySelectorAll(".option");

filterBtn.addEventListener("click", () => {
  filterBar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  filterBar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (
    e.target.className !== "filter-btn" &&
    e.target.className !== "filter-bar active" &&
    e.target.className !== "filters" &&
    e.target.className !== "btn-box" &&
    e.target.className !== "btn reset" &&
    e.target.parentNode.className !== "filters"
  ) {
    filterBar.classList.remove("active");
  }
});

optionBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  })
);
