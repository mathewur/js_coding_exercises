const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let isLastIndex = nums.indexOf(n) === nums.length - 1;
  let isNotInArray = nums.indexOf(n) < 0;

  return isLastIndex || isNotInArray ? null : nums[nums.indexOf(n) + 1];
};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  let sum = 0;
  for (let i = 0, length = str.length; i < length; i++) {
    sum += Number(str[i]);
  }
  return {
    0: str.length - sum,
    1: sum,
  };
};

const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split("").reverse().join(""));
};

const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.flat().reduce((a, b) => a + b);
};

//returns an array with the first and last items swapped
const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {
    return arr;
  }
  let arrLast = arr[arr.length - 1];
  let arrFirst = arr[0];
  arr.splice(0, 1, arrLast);
  arr.splice(arr.length - 1, 1, arrFirst);
  return arr;
};
//returns true if any of the properties of an object contain the specified string
const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let hayStackValues = Object.values(haystack);
  return (
    hayStackValues.findIndex((hayItem) =>
      hayItem.toString().toLowerCase().includes(searchTerm.toLowerCase())
    ) >= 0
  );
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  let wordFreqs = {};
  let strNospecialChars = str.replace(/[^a-zA-Z ]/g, "");

  let wordArray = strNospecialChars.split(" ");
  wordArray.forEach(function (word) {
    let wordLowerCase = word.toLowerCase();
    if (wordFreqs[wordLowerCase] === undefined) {
      wordFreqs[wordLowerCase] = 1;
    } else {
      ++wordFreqs[wordLowerCase];
    }
  });
  return wordFreqs;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};
