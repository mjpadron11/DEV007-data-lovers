import { carrusel, mostViewed } from "./data.js";
import { movies } from "./data.js";
import { searchMovies } from "./data.js";

const gallery = document.getElementById("gallery");
if (gallery) window.addEventListener("load", mostViewed);

const allMovies = document.getElementById("allMovies");
if (allMovies) window.addEventListener("load", movies);

const searchInput = document.getElementById("search-input");
if (searchInput) {
  searchInput.addEventListener("change", searchMovies);
}

// showMovies();
