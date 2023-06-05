import data from "./data/ghibli/ghibli.js";

const allMovies = document.getElementById("allMovies");
const gallery = document.getElementById("gallery");

//Se llaman películas más vistas al inicio
export const mostViewed = () => {
  console.log("Hola, mundo")
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
}

// allMovies.querySelectorAll(".posters").forEach((pelicula) => {
//   pelicula.addEventListener("click", (e) => {
//     const movieObj = data.films.find((movie) => movie.title === e.target.alt);
//     console.log(movieObj);
//   });
// });


