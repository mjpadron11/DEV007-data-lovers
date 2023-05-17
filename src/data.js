import data from './data/ghibli/ghibli.js';
const gallery = document.getElementById("gallery");
const allMovies = document.getElementById("all-movies")

export const mostViewed = () => {
  const allPosters = data.films.filter(movies => movies.most_viewed)

  const images = allPosters.map(item => {
    const img = document.createElement("img")
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.classList.add('gallery__img-container');
    img.classList.add("gallery__img")
    p.classList.add("gallery__title")
    img.src = item.poster
    p.textContent = item.description

    div.appendChild(img);
    div.appendChild(p);
    return div;
  })

  for (let i = 0; i <= images.length ; i++) {
    gallery.appendChild(images[i])
  }

  for (let i = 0; i <= images.length ; i++) {
    allMovies.appendChild(images[i])
  }

}


export const showMovies = () => {
  data.forEach(movie => {
    const movieDiv = document.createElement("div");
    const movieTitle = document.createElement("h2");
    const movieImage = document.createElement("img");

    
    movieTitle.textContent = movie.title;
    movieImage.src = movie.poster;

    movieDiv.appendChild(movieTitle);
    movieDiv.appendChild(movieImage);

    allMovies.appendChild(movieDiv)
  })
}