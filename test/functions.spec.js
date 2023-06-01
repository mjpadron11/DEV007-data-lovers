import { mostViewed } from "../src/data.js";
import { allMovies } from "../src/data.js";

describe("allMovies", () => {
  it("debería ser un objeto", () => {
    expect(typeof allMovies).toBe("object");
  });
});

describe("mostView", () => {
  it("is a function", () => {
    expect(typeof mostViewed).toBe("function");
  });

  //   it("returns `example`", () => {
  //     expect(example()).toBe("example");
  //   });
  // });

  // describe("anotherExample", () => {
  //   it("is a function", () => {
  //     expect(typeof anotherExample).toBe("function");
  //   });

  //   it("returns `anotherExample`", () => {
  //     expect(anotherExample()).toBe("OMG");
  //   });
});
