function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city.indexOf("Manchester") > -1;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // console.log(
  //   "sheep map " + arr.filter((animal) => animal.indexOf("sheep") > -1)
  // );
  return arr.filter((animal) => animal.indexOf("sheep") > -1).length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  //console.log("person postcode" + person.address.postCode);
  const isPostCodeM = person.address.postCode.substring(0, 1).indexOf("M") > -1;
  const isCityManchester = person.address.city.indexOf("Manchester") > -1;

  return isPostCodeM && isCityManchester;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode,
};
