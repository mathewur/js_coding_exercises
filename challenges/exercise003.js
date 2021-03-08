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
  var subjectTotalArray = people.map((student) => student.subjects.length);
  //console.log("subjectTotalArray" + subjectTotalArray.reduce((a, b) => a + b));
  return subjectTotalArray.reduce((a, b) => a + b);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  //creates an array of all ingredients
  let allIngredients = menu.map((menuItem) => menuItem.ingredients);
  // true if ingredient found in list of all
  return allIngredients.some((ing) => ing.indexOf(ingredient) > -1);
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let arr1Dupes = arr1.filter((num1) => arr2.includes(num1));
  //console.log("arr1Dupes" + Array.from(new Set(arr1Dupes.sort())));
  return Array.from(new Set(arr1Dupes.sort()));
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
