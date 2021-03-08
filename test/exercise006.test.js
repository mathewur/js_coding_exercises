const { sumMultiples } = require("../challenges/exercise006");

//describe is jest specific !!
describe("sumMultiples", () => {
  test("sum of any numbers which are a multiple of 3 or 5 from list", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([5])).toBe(5);
    expect(sumMultiples([3, 5, 10, 30, 65, 23, 40, 1])).toBe(153);
  });

  test("if no multiples, returns 0", () => {
    expect(sumMultiples([1, 2, 7, 8, 1, 4])).toBe(0);
  });

  test("if the array is empty returns 0", () => {
    expect(sumMultiples([])).toBe(0);
  });

  test("if the array is null , return null", () => {
    expect(sumMultiples(null)).toBe(null);
  });
});
