import data from './data/ghibli/ghibli.js';
const gallery = document.getElementById("gallery");

export const mostViewed = () => {
  const allPosters = data.films.filter(movies => movies.most_viewed)


  const images = allPosters.map(item => {
    const img = document.createElement("img")
    img.src = item.poster
    img.classList.add("gallery__img")
    return img
  })

  for (let i = 0; i <= images.length ; i++) {
    gallery.appendChild(images[i])
  }
}
