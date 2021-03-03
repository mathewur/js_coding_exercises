function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // return array of squares
  let squares = nums.map((num) => Math.pow(num, 2));
  // console.log("array of nums and its squares" +nums+ squares);
  return squares;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var exercise001 = require("./exercise001");
  var capitalizedWordsExcludesFirst = words
    .slice(1, words.length)
    .map((word) => exercise001.capitalize(word));
  // console.log(
  //   "camelcase::" + words.slice(0, 1) + capitalizedWordsExcludesFirst.join("")
  // );
  return words.slice(0, 1) + capitalizedWordsExcludesFirst.join("");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
