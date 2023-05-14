// export const mostViewed = () => {
//   const allPosters = data.films.map(movies => movies.poster)

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return "OMG";
};

var moviesSlider = new Swiper(".movies-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//   const posters = allPosters.slice(0, 5)
//   //Usar .sort cuando logremos traer los viewed con las imágenes

//   const images = posters.map(src => {
//     const img = document.createElement("img")
//     img.src = src
//     img.classList.add("gallery__img")
//     return img
//   })

//   for (let i = 0; i <= images.length ; i++) {
//     gallery.appendChild(images[i])
//   }
// };

export const anotherExample = () => {
  return "OMG";
};
