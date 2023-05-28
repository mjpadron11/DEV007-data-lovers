import { mostViewed, searchMoviesByDirector } from "../src/data";

describe("mostViewed", () => {
  it("is a function", () => {
    expect(typeof mostViewed).toBe("function");
  });

  it("returns `example`", () => {
    expect(example()).toBe("example");
  });
});

describe("anotherExample", () => {
  it("is a function", () => {
    expect(typeof anotherExample).toBe("function");
  });

  it("returns `anotherExample`", () => {
    expect(anotherExample()).toBe("OMG");
  });
});
