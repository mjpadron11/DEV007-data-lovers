Const movies = document.getElementById("movies");
// const allMovies = document.getElementById("all-movies")

export const mostViewed = () => {
  const allPosters = data.films.filter((movies) => movies.most_viewed);

  const images = allPosters.map((item) => {
    const img = document.createElement("img");
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.classList.add("movies__img-container");
    img.classList.add("movies__img");
    p.classList.add("movies__title");
    img.src = item.poster;
    p.textContent = item.description;

    div.appendChild(img);
    div.appendChild(p);
    return div;
  });

  for (let i = 0; i <= images.length; i++) {
    gallery.appendChild(images[i]);
  }}

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