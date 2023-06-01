import data from "./data/ghibli/ghibli.js";

const allMovies = document.getElementById("allMovies");
const gallery = document.getElementById("gallery");
const text = document.getElementById("search-input");
const idDirector = document.getElementById("directores");
const select = document.getElementById("filters");

//Se llaman películas más vistas al inicio
export const mostViewed = () => {
  const allPosters = data.films.filter((movies) => movies.most_viewed);

  const images = allPosters.map(({ poster, title, description }) => {
    // creating container
    const div = document.createElement("div");
    div.classList.add("gallery__img-container");

    // creating img
    const img = document.createElement("img");
    img.classList.add("gallery__img");
    img.src = poster;
    img.alt = title;
    div.appendChild(img);

    // creating title
    const p = document.createElement("p");
    p.classList.add("gallery__title");
    p.textContent = description;
    div.appendChild(p);

    return div;
  });

  for (let i = 0; i < images.length; i++) {
    gallery.appendChild(images[i]);
  }
};
//Se llaman todas las películas en menú películas
export const movies = () => {
  //esto deja un array de string por lo que se crea una etiqueta imagen para poder insertar el poster
  const imagesMovies = data.films.map((item) => {
    const img = document.createElement("img");
    img.classList.add("posters");
    img.src = item.poster;
    img.alt = item.title;
    img.width = 100;
    img.heigth = 100;
    //return finaliza el callback
    return img;
  });
  imagesMovies.map((image) => allMovies.appendChild(image));

  allMovies.querySelectorAll(".posters").forEach((pelicula) => {
    pelicula.addEventListener("click", (e) => {
      const movieObj = data.films.find((movie) => movie.title === e.target.alt);
      console.log(movieObj);
    });
  });
};
//Optimización del despliegue de películas cada vez que se ejecute una de las funciones
const _forceRender = (valueToRender) => {
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
//Buscador de películas por componente del título
export const searchMovies = () => {
  if (!text && !text.value) return;
  const searchedMovies = data.films.filter((item) =>
    item.title.toLowerCase().includes(text.value.toLowerCase())
  );

  _forceRender(searchedMovies);
};
//Filtro de películas según el director
export const searchMoviesByDirector = () => {
  const selectedDirector = idDirector.options[idDirector.selectedIndex].value;

  const searchMoviesByDirector = data.films.filter(
    (item) => item.director === selectedDirector
  );

  _forceRender(searchMoviesByDirector);
};
//Orden de películas
export const sortByYear = () => {
  const value = select.options[select.selectedIndex].value;

  const films = data.films;

  if (value === "decendant") {
    films.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (value === "ascendant") {
    films.sort((a, b) => b.title.localeCompare(a.title));
  }

  // if (value === "year") {
  //   films.sort((a, b) => Number(a.release_date) - Number(b.release_date));
  //   console.log(Number(a.release_date) - Number(b.release_date))
  // }

  if (value === "year") {
    films.sort((a, b) => a.release_date.localeCompare(b.release_date));
  }

  if (value === "rt-score") {
    films.sort((a, b) => Number(b.rt_score) - Number(a.rt_score));
  }

  _forceRender(films);
};
