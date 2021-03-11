const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example", () => {
    expect(sumDigits(1234)).toEqual(10);
    expect(sumDigits(4563789)).toEqual(42);
    expect(sumDigits(10000)).toEqual(1);
    expect(sumDigits(10001)).toEqual(2);
    expect(sumDigits(100000000000000000001)).toEqual(2);
  });

  test("if 0, returns 0", () => {
    expect(sumDigits(0)).toEqual(0);
  });
});

describe("createRange", () => {
  test(" range of numbers as an array", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(2, 12, 4)).toEqual([2, 6, 10]);
  });

  test("no step assumes 1 ", () => {
    expect(createRange(2, 7)).toEqual([2, 3, 4, 5, 6, 7]);
  });
});
