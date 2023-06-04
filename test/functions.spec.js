import { sortYear } from "../src/functions.js";
import { searchMovies } from "../src/functions.js";
import { searchMoviesByDirector } from "../src/functions.js";

describe("sortYear", () => {
  it("is a function", () => {
    expect(typeof sortYear).toBe("function");
  });
});

describe("searchMoviesByDirector", () => {
  it("is a function", () => {
    expect(typeof searchMoviesByDirector).toBe("function");
  });
  it("debería filtar por director", () => {
    const movies = searchMoviesByDirector("Gorō Miyazaki");
    expect(movies).toHaveLength(2);
    expect(movies.map((movie) => movie.director)).toContain("Gorō Miyazaki");
  });
  it("debería filtar por director", () => {
    const movies = searchMoviesByDirector("");
    expect(movies).toHaveLength(0);
    expect(movies.map((movie) => movie.director)).toContain("Hayao Miyazaki");
  });
});

describe("searchMovies", () => {
  it("debería filtar título de palabra completa", () => {
    const movies = searchMovies("totoro");
    expect(movies.map((movie) => movie.title)).toContain("My Neighbor Totoro");
  });
  it("debería filtar título por parte de la palabra", () => {
    const movies = searchMovies("to");
    expect(movies.map((movie) => movie.title)).toContain("My Neighbor Totoro");
  });
  it("debería filtar título con caracteres que no existen en los title", () => {
    const movies = searchMovies("titi");
    expect(movies.map((movie) => movie.title)).toEqual([]);
  });
  it("debería filtar título con caracteres en Mayúscula", () => {
    const movies = searchMovies("TOTORO");
    expect(movies.map((movie) => movie.title)).toContain("My Neighbor Totoro");
  });
  // it("debería filtar título con valor vacío en el botón", () => {
  //   const movies = searchMovies(null);
  //   expect(movies.map((movie) => movie.title)).toContain([]);
  // });
});

describe("sortYear", () => {
  it("debería filtar por selección del botón ", () => {
    expect(sortYear("year")[0].title).toContain("Castle in the Sky");
    expect(sortYear("decendant")[0].title).toContain("Whisper of the Heart");
    expect(sortYear("ascendant")[0].title).toContain("Castle in the Sky");
    expect(sortYear("rt-score")[0].title).toContain("Only Yesterday");
  });
});

describe("searchMovies", () => {
  it("is a function", () => {
    expect(typeof searchMovies).toBe("function");
  });
});
