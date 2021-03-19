const {
  sumDigits,
  createRange,
  getScreentimeAlertList
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

describe("getScreentimeAlertList", () => {
  test(" users with more than 100 mins ", () => {
    expect(getScreentimeAlertList(  [
         {
             username: "beth_1234",
             name: "Beth Smith",
             screenTime: [
                              { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                          { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                         { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                         { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                         ]
     },
    {
       username: "sam_j_1989",
       name: "Sam Jones",
       screenTime: [
                      { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                  ]
      }
  ],"2019-05-02")).toEqual(["beth_1234"]);

    expect(getScreentimeAlertList(  [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
          { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
          { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
          { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
        ]
      },      {
        username: "urmila79",
        name: "Urmila Mathew",
        screenTime: [
          { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
          { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
          { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
          { date: "2021-05-04", usage: { twitter: 0, instagram: 100, facebook: 61} },
        ]
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
        ]
      },
    ],"2019-05-02")).toEqual(["beth_1234","urmila79"]);

  });
  test(" users with less than or equal to 100 mins ", () => {
    expect(getScreentimeAlertList(  [

      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
        ]
      }
    ],"2019-06-11")).toEqual([]);

    expect(getScreentimeAlertList(  [
         {
        username: "urmila79",
        name: "Urmila Mathew",
        screenTime: [
          { date: "2019-05-01", usage: { twitter: 0, instagram: 22, facebook: 40} },
          { date: "2019-05-02", usage: { twitter: 0, instagram: 40, facebook: 31} },
          { date: "2019-05-03", usage: { twitter: 0, instagram: 15, facebook: 19} },
          { date: "2021-05-04", usage: { twitter: 0, instagram: 0, facebook: 61} },
        ]
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
        ]
      }
    ],"2019-06-11")).toEqual([]);

  });
});
