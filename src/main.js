// import data from './data/ghibli/ghibli.js';
// import { mostViewed } from './data.js';
// import data from './data/rickandmorty/rickandmorty.js';

// mostViewed()

// console.log(data);

var moviesSlider = new Swiper(".movies-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 25,
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
