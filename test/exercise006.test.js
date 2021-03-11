const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} = require("../challenges/exercise006");

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

describe("isItPrime", () => {
  test("returns true for a prime 1,3,5,7...", () => {
    expect(isItPrime(1)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(11)).toBe(true);
  });

  test("returns false for non prime", () => {
    expect(isItPrime(2)).toBe(false);
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(10)).toBe(false);
    expect(isItPrime(25)).toBe(false);
  });
  test("returns false 0 ", () => {
    expect(isItPrime(0)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("returns marix of n size with fill e.g 3 foo 2 pot", () => {
    expect(createMatrix(3, 5)).toEqual([
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5],
    ]);

    expect(createMatrix(2, "pot")).toEqual([
      ["pot", "pot"],
      ["pot", "pot"],
    ]);
    expect(createMatrix(1, 7)).toEqual([[7]]);
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
  });
});

describe("areWeCovered", () => {
  test("returns true if day is on the rota of 3 or more employees ", () => {
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          {
            name: "Maya",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
        ],
        "Tuesday"
      )
    ).toBe(true);
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Tuesday", "Saturday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          {
            name: "Coco",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          {
            name: "Maya",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
        ],
        "Saturday"
      )
    ).toBe(true);
  });
  test("returns false if day is on rota of less than 3 employees ie 2 , 1 or empty", () => {
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          {
            name: "Maya",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
        ],
        "Wednesday"
      )
    ).toBe(false);
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Tuesday", "Saturday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          {
            name: "Coco",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          {
            name: "Maya",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
        ],
        "Friday"
      )
    ).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
  });
});
