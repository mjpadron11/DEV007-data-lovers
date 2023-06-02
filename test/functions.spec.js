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
});
describe("searchMovies", () => {
  it("is a function", () => {
    expect(typeof searchMovies).toBe("function");
  });
});
