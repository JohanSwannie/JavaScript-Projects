// Return a string splitted by uppercase and spaces and join the word with hyphens

function spinalCase(str) {
  str = str.trim().split(/[\s_]+|(?=[A-Z])/).join("-").toLowerCase();
  return str;
}

console.log(spinalCase('There is 12 egss in the BasketAnd 5Stones inTheUpperShed'));
