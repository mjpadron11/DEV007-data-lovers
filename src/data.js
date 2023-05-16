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

// export const Movies = () => {
//   const posters = data.films.map(movies => movies.posters)

//   const allMovies1 = posters.slice(0, 21)

//   const imagesPosters = allMovies1.map( src => {
//     const img = document.createElement("img")
//     img.src = src
//     img.classList.add("gallery__img")
//     return img
//   })

//   for (let i = 0; i <= imagesPosters.length ; i++) {
//     allMovies.appendChild(allMovies[i])
//   }
// }


