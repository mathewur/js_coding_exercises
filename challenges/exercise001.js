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

  return roundToTwo(originalPrice * (1 + vatRate / 100), 2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return roundToTwo(originalPrice * (1 - reduction / 100), 2);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (str.length % 2 == 0) {
    return str.substring(str.length / 2 - 1, str.length / 2 + 1);
  }

  // if the number is odd
  else {
    return str.substring(str.length / 2, str.length / 2 + 1);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  //empty array to store results
  var reversedWords = [];
  for (const word of words) {
    // add reversed word to empty array
    reversedWords.push(reverseWord(word));
  }
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let linuxUsers = users.filter((user) => user.type.indexOf("Linux") > -1);

  return linuxUsers.length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // use array reduce
  return roundToTwo(scores.reduce((a, b) => a + b) / scores.length);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 == 0 && n % 5 == 0) return "fizzbuzz";
  if (n % 3 == 0) return "fizz";
  if (n % 5 == 0) return "buzz";
  else n % 3 != 0 && n % 5 != 0;
  return n;
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
