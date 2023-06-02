import { mostViewed } from "./data.js";
import { movies } from "./data.js";
import { searchMovies } from "./data.js";
import { searchMoviesByDirector } from "./data.js";
import { sortByYear } from "./data.js";
const gallery = document.getElementById("gallery");
const allMovies = document.getElementById("allMovies");
const searchInput = document.getElementById("search-input");
const selectDirector = document.getElementById("directores");
const filters = document.getElementById("filters");
<<<<<<< HEAD
=======
const text = document.getElementById("search-input");
const hamburguer = document.getElementById("hamburguerbtn");
const aside = document.getElementById("aside");

export const forceRender = (valueToRender) => {
  if (!valueToRender && valueToRender.length) return;

  const imagesMovies = valueToRender.map((item) => {
    const img = document.createElement("img");
    img.classList.add("posters");
    img.src = item.poster;
    img.width = 100;
    img.heigth = 100;
    return img;
  });
  allMovies.innerHTML = "";
  imagesMovies.map((image) => allMovies.appendChild(image));
};

const sortByYear = () => {
  const value = filters.options[filters.selectedIndex].value;
  const moviesSorted = sortYear(value);
  forceRender(moviesSorted);
};

const director = () => {
  const selectedDirector =
    selectDirector.options[selectDirector.selectedIndex].value;
  const moviesByDirector = searchMoviesByDirector(selectedDirector);
  forceRender(moviesByDirector);
};

const searchBar = () => {
  const searched = text.value;
  const searchByTitle = searchMovies(searched);
  forceRender(searchByTitle);
};
>>>>>>> b3c30c7a2d25b798a6ad183c9b8af47185477f23

if (gallery) window.addEventListener("load", mostViewed);

if (allMovies) window.addEventListener("load", movies);

if (searchInput) {
  searchInput.addEventListener("input", searchMovies);
}
if (selectDirector) {
  selectDirector.addEventListener("change", searchMoviesByDirector);
}

filters && filters.addEventListener("change", sortByYear);

<<<<<<< HEAD
// showMovies();
=======
hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  aside.classList.toggle("active");
});

document.getElementsByClassName("aside").forEach(
  (n) => n.addEventListener("click"),
  () => {
    hamburguer.classList.remove("active");
    aside.classList.remove("active");
  }
);
>>>>>>> b3c30c7a2d25b798a6ad183c9b8af47185477f23
