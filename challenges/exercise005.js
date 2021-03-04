const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let isLastIndex = nums.indexOf(n) === nums.length - 1;
  let isNotInArray = nums.indexOf(n) < 0;

  //console.log("isLastIndex"+isLastIndex);
  return isLastIndex || isNotInArray ? null : nums[nums.indexOf(n) + 1];
};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  var sum = 0;

  for (var i = 0, length = str.length; i < length; i++) {
    sum += Number(str[i]);
  }

  return {
    1: str.length - sum,
    0: sum,
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

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  console.log("before pop arr" + arr);
  let arrbefore = arr;
  let arrLast = arr.pop(); // removes last element and changes arr
  let arrFirst = arr.shift(); // removes first element and changes arr
  console.log("arrayLastElement" + arrLast + " has popped out " + arr);
  arr.splice(0, 0, arrLast);
  arr.push(arrFirst);

  console.log("after add arr" + arr);
  return arrbefore.length < 2 ? arrbefore : arr;
};

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
  // Your code here!
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
