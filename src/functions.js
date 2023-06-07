import data from "./data/ghibli/ghibli.js";

export const sortYear = (value) => {
  const films = data.films.slice();

  if (value === "decendant") {
    films.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (value === "ascendant") {
    films.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (value === "year") {
    films.sort((a, b) => a.release_date.localeCompare(b.release_date));
  }

  if (value === "rt-score") {
    films.sort((a, b) => Number(b.rt_score) - Number(a.rt_score));
  }
  return films;
};

export const searchMovies = (text) => {
  if (!text) {
    return;
  }

  const searchedMovies = data.films.filter((item) =>
    item.title.toLowerCase().includes(text.toLowerCase())
  );
  return searchedMovies;
};
export const searchMoviesByDirector = (selectedDirector) => {
  const filterDirector = data.films.filter(
    (item) => item.director === selectedDirector
  );
  return filterDirector;
};
