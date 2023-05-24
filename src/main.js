import { mostViewed } from "./data.js";
import { movies } from "./data.js";
import { searchMovies } from "./data.js";
const moviesButton = document.getElementById("allMoviesButton")
const gallery = document.getElementById("gallery");
const allMovies = document.getElementById("allMovies");
const searchInput = document.getElementById("search-input");
const landing = document.getElementById("landing")

if (gallery) window.addEventListener("load", mostViewed);

if (allMovies) window.addEventListener("load", movies);

if (searchInput) {
  searchInput.addEventListener("change", searchMovies);
}

moviesButton.addEventListener("click", () => {
  landing.style.display = "none";
  allMovies.style.display = "flex";
})