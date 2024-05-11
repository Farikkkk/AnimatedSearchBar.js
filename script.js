const searchEl = document.querySelector(".search-img ");
const searchBar = document.querySelector(".search-bar-container");

searchEl.addEventListener("click", () => {
  if (!searchBar.classList.contains("active")) {
    searchBar.classList.add("active");
  } else {
    searchBar.classList.remove("active");
  }
});
