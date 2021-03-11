function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // return array of squares
  let squares = nums.map((num) => Math.pow(num, 2));
  return squares;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let exercise001 = require("./exercise001");
  let capitalizedWordsExcludesFirst = words
    .slice(1, words.length)
    .map((word) => exercise001.capitalize(word));

  return words.slice(0, 1) + capitalizedWordsExcludesFirst.join("");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subjectTotalArray = people.map((student) => student.subjects.length);
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
  return Array.from(new Set(arr1Dupes.sort()));
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
