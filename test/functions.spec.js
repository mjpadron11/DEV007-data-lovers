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
    expect(movies.map(movie => movie.director)).toContain("Gorō Miyazaki");
  });
});

describe("searchMovies", () => {
  it("debería filtar título", () => {
    const movies = searchMovies("totoro");
    expect(movies.map(movie => movie.title)).toContain("My Neighbor Totoro");
  });
});

describe("sortYear", () => {
  it("debería filtar por año", () => {
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
