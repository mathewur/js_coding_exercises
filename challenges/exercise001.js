function capitalize(word) {
  if (word === undefined) {
    throw new Error("word is required");
  }
  return word.substring(0, 1).toUpperCase() + word.substring(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return (
    firstName.substring(0, 1).toUpperCase() +
    "." +
    lastName.substring(0, 1).toUpperCase()
  );
}
function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}
function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // console.log(
  //   "vataddedPrice" + roundToTwo(originalPrice * (1 + vatRate / 100), 2)
  // );
  return roundToTwo(originalPrice * (1 + vatRate / 100), 2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return roundToTwo(originalPrice * (1 - reduction / 100), 2);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  var lengthOfString = str.length;
  if (str.length % 2 == 0) {
    // console.log(
    //   str +
    //     "The number is even." +
    //     str.substring(str.length / 2 - 1, str.length / 2 + 1)
    // );
    return str.substring(str.length / 2 - 1, str.length / 2 + 1);
  }

  // if the number is odd
  else {
    // console.log(
    //   str +
    //     "The number is odd." +
    //     str.substring(str.length / 2, str.length / 2 + 1)
    // );
    return str.substring(str.length / 2, str.length / 2 + 1);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  // console.log("reversed:::" + word.split("").reverse().join(""));
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  //empty array to store results
  var reversedWords = [];
  for (const word of words) {
    // add reversed word to empty array
    reversedWords.push(reverseWord(word));
    // console.log(
    //   "reversed Word::" +
    //     reverseWord(word) +
    //     "and added to  :::" +
    //     reversedWords
    // );
  }
  //console.log("final reversed Words :::" + reversedWords);
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};
