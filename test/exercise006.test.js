const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
} = require("../challenges/exercise006");

//describe is jest specific !!
describe("sumMultiples", () => {
  test("sum of any numbers which are a multiple of 3 or 5 from list", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    //checking decimals
    expect(sumMultiples([5, 3.0, 7, 8, 1, 10.0])).toBe(18);
    expect(sumMultiples([5])).toBe(5);
    expect(sumMultiples([3, 5, 10, 30, 65, 23, 40, 1])).toBe(153);
  });

  test("if no multiples, returns 0", () => {
    expect(sumMultiples([1, 2, 7, 8, 1, 4])).toBe(0);
  });

  test("if the array is empty returns 0", () => {
    expect(sumMultiples([])).toBe(0);
  });
});

describe("getComplementaryDNA", () => {
  test("check T replaces A, and C replaces  G in valid DNA  ie only contains C G T A", () => {
    expect(getComplementaryDNA("CGTACGTA")).toBe("GCATGCAT");
  });
  test("lower case check T replaces A, and C replaces  G in valid DNA  ie only contains C G T A", () => {
    expect(getComplementaryDNA("cgTACGTa")).toBe("GCATGCAT");
  });
});

describe("isValidDNA", () => {
  test("returns true for a string which only contains C, G, T or A", () => {
    expect(isValidDNA("CGTACGTA")).toBe(true);
  });

  test("lower case returns true for a string which only contains C, G, T or A", () => {
    expect(isValidDNA("CgTAcGTA")).toBe(true);
  });
  test("returns false for a string which contains some C, G, T or A", () => {
    expect(isValidDNA("CGxpxpM")).toBe(false);
    expect(isValidDNA("ATXPXPM")).toBe(false);
    expect(isValidDNA("ac00t52&")).toBe(false);
  });
  test("returns false for a string which does not contain C, G, T or A", () => {
    expect(isValidDNA("xpxpM")).toBe(false);
    expect(isValidDNA("XPXPM")).toBe(false);
    expect(isValidDNA("00t52&")).toBe(false);
  });
  test("returns false for an empty string", () => {
    expect(isValidDNA("")).toBe(false);
  });
});
