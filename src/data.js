import data from "./data/ghibli/ghibli.js";
const gallery = document.getElementById("gallery");
const allMovies = document.getElementById("allMovies");

export const mostViewed = () => {
  const allPosters = data.films.filter((movies) => movies.most_viewed);

  const images = allPosters.map((item) => {
    const img = document.createElement("img");
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.classList.add("gallery__img-container");
    img.classList.add("gallery__img");
    p.classList.add("gallery__title");
    img.src = item.poster;
    p.textContent = item.description;

    div.appendChild(img);
    div.appendChild(p);
    return div;
  });

  for (let i = 0; i <= images.length; i++) {
    gallery.appendChild(images[i]);
  }
};

export const movies = () => {
  //esto deja un array de string por lo que se crea una etiqueta imagen para poder insertar el poster
  const imagesMovies = data.films.map((item) => {
    const img = document.createElement("img");
    img.classList.add("posters");
    img.src = item.poster;
    img.width = 100;
    img.heigth = 100;
    //return finaliza el callback
    return img;
  });
  imagesMovies.map((image) => allMovies.appendChild(image));
};

export const searchMovies = () => {
  let text = document.getElementById("search-input").value;

  let filteredMovies = data.films.filter((item) =>
    item.title.toLowerCase().startsWith(text.toLowerCase())
  );

  const imagesMovies = filteredMovies.map((item) => {
    const img = document.createElement("img");
    img.classList.add("posters");
    img.src = item.poster;
    img.width = 100;
    img.heigth = 100;
    //return finaliza el callback
    return img;
  });
  allMovies.innerHTML = "";
  imagesMovies.map((image) => allMovies.appendChild(image));
};

export const carrusel = () => {
  const big = document.querySelector(".big");
  const point = document.querySelectorAll(".point");

  // Cuando CLICK en punto
  // Saber la posición de ese punto
  // Aplicar un transform translateX al grande
  // QUITAR la clase activo de TODOS puntos
  // AÑADIR la clase activo al punto que hemos hecho CLICK

  // Recorrer TODOS los punto
  point.forEach((cadaPoint, i) => {
    // Asignamos un CLICK a cadaPunto
    point[i].addEventListener("click", () => {
      // Guardar la posición de ese PUNTO
      let posicion = i;
      // Calculando el espacio que debe DESPLAZARSE el GRANDE
      let operacion = posicion * -20;

      // MOVEMOS el grand
      big.style.transform = `translateX(${operacion}%)`;

      // Recorremos TODOS los punto
      point.forEach((cadaPoint, i) => {
        // Quitamos la clase ACTIVO a TODOS los punto
        point[i].classList.remove("activo");
      });
      // Añadir la clase activo en el punto que hemos hecho CLICK
      point[i].classList.add("activo");
    });
  });
};

// let allPosters = data.films.sort((movies) => movies.rt_score);
// allPosters = allPosters.slice(0, 5);

// for (let i = 0; i <= images.length ; i++) {
//   allMovies.appendChild(images[i])
// }

// export const showMovies = () => {
//   data.forEach(movie => {
//     const movieDiv = document.createElement("div");
//     const movieTitle = document.createElement("h2");
//     const movieImage = document.createElement("img");

//     movieTitle.textContent = movie.title;
//     movieImage.src = movie.poster;

//     movieDiv.appendChild(movieTitle);
//     movieDiv.appendChild(movieImage);

//     allMovies.appendChild(movieDiv)
//   })
// }
