import { mostViewed } from "./data.js";
import { movies } from "./data.js";
import { searchMovies } from "./data.js";
import { searchMoviesByDirector } from "./data.js";
import { sortByYear } from "./data.js";
const gallery = document.getElementById("gallery");
const allMovies = document.getElementById("allMovies");
const searchInput = document.getElementById("search-input");
const selectDirector = document.getElementById("directores");
const filters = document.getElementById("filters")

if (gallery) window.addEventListener("load", mostViewed);

if (allMovies) window.addEventListener("load", movies);

if (searchInput) {
  searchInput.addEventListener("input", searchMovies);
}
if (selectDirector) {
  selectDirector.addEventListener("change", searchMoviesByDirector);
}

filters && filters.addEventListener("change", sortByYear)


// showMovies();
