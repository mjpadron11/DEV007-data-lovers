import { sortYear } from "../src/functions.js";
import { searchMovies } from "../src/functions.js";
import { searchMoviesByDirector } from "../src/functions.js";
//Botón de orden
describe("sortYear", () => {
  it("es una función", () => {
    expect(typeof sortYear).toBe("function");
  });
  it("debería filtar según la selección del botón y arrojar el título del índice indicado", () => {
    expect(sortYear("year")[0].title).toContain("Castle in the Sky");
    expect(sortYear("decendant")[0].title).toContain("Whisper of the Heart");
    expect(sortYear("ascendant")[0].title).toContain("Castle in the Sky");
    expect(sortYear("rt-score")[0].title).toContain("Only Yesterday");
  });
});
//Botón buscador
describe("searchMovies", () => {
  it("es una función", () => {
    expect(typeof searchMovies).toBe("function");
  });
  it("debería filtar título de palabra completa", () => {
    const movies = searchMovies("totoro");
    expect(movies.map((movie) => movie.title)).toContain("My Neighbor Totoro");
  });
  it("debería filtar título por parte de la palabra", () => {
    const movies = searchMovies("to");
    expect(movies.map((movie) => movie.title)).toContain("My Neighbor Totoro");
  });
  it("debería filtar título con caracteres que no existen en los title y devolver un array vacío", () => {
    const movies = searchMovies("titi");
    expect(movies.map((movie) => movie.title)).toEqual([]);
  });
  it("debería filtar título con caracteres independiete que estén en mayúscula Mayúscula", () => {
    const movies = searchMovies("TOTORO");
    expect(movies.map((movie) => movie.title)).toContain("My Neighbor Totoro");
  });
  //Falta cubrir línea 26
  // it("debería detectar título con valor vacío en el botón y retornar sin ejecutar la función", () => {
  //   const movies = searchMovies("");
  //   expect(movies.map((movie) => movie.title)).toEqual([]);
  // });
});
//Botón filtro de directores
describe("searchMoviesByDirector", () => {
  it("es una función", () => {
    expect(typeof searchMoviesByDirector).toBe("function");
  });
  it("debería filtar por director y dar la cantidad de películas", () => {
    const movies = searchMoviesByDirector("Gorō Miyazaki");
    expect(movies).toHaveLength(2);
    expect(movies.map((movie) => movie.director)).toContain("Gorō Miyazaki");
  });
  it("debería filtar por director, entrada vacía no arroja ninguna película de vuelta", () => {
    const movies = searchMoviesByDirector("");
    expect(movies).toHaveLength(0);
  });
});
