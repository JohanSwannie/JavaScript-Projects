const pre01 = document.getElementById('pre01');
const pre02 = document.getElementById('pre02');

let array1 = ['Chris', 'Johan', 'Richard', 'Julie', 'Christelle', 'Karen', 'Natasha', 'Sherene',
  'Pieter', 'Madelein', 'Jarquez', 'Petra', 'Estelle', 'Amanda', 'Sanet', 'Ida',
  'Andries', 'Max', 'Andre', 'Poepies', 'Gallas', 'Christine', 'Roxanne', 'Maruchka',
  'Renier', 'Adriaan', 'Angelique', 'Kara', 'Elani', 'Sorah', 'Zanian', 'Zenobia'
];

let cntr = 0;

function arrayManipulator(arr1) {
  for (let name of arr1) {
    pre01.innerHTML += ` - ${name}`;
    cntr++;
    if (cntr === 15) {
      let cbr = document.createElement('br');
      pre01.appendChild(cbr);
      cntr = 0;
    }
  }
  pre01.innerHTML += ` - Length of array is: ${array1.length}`;
}

array1.push('Zelda');
arrayManipulator(array1);

let namesBt10 = array1.filter(thatOne => thatOne.length > 8);

let RoxanneIndex = array1.findIndex(indexy => indexy === 'Roxanne');
let finA = array1.find(fndH => fndH.length < 4);

pre02.innerHTML += ` - Names with more than 7 characters are: ${namesBt10}`;
pre02.innerHTML += ` - Roxanne is located in index ${RoxanneIndex}`;
pre02.innerHTML += ` - The name ${finA} is smaller than 4 digits`;

let array2 = [19, 'yes', 'hello', 'broadcast', 29.21, true];
let allBurn = [ 'true', true, false, undefined, 19.93];

array2.splice(2, 1);
console.log(array2);
const array3 = array2.slice(2, 5);
console.log(array3);

// 4 Ways to get last character in a string
// 1)
function confirmEnding(str, target) {
  if (str.charAt(str.length-1) === 'n') {
    return true;
  } else {
    return false;
  }
}
console.log(confirmEnding2("Bastian", "n"));
// 2)
function confirmEnding2(str, target) {
  if (str.substring(str.length - target.length ) === 'n') {
    return true;
  } else {
    return false;
  }
}
console.log(confirmEnding2("Bastian", "n"));
// 3)
let stringyW = 'Johannes van die plaas';
var lastChar = stringyW.slice(-1);
console.log(lastChar);
// 4) Here the target is more than 1 character
function confirmEnding(str, target) {
  let anotherString;
  anotherString = str.substring(str.length - target.length);
  return anotherString === target;
}

console.log(confirmEnding("Bastian", "ian"));
// Test for substrings
let johStr = "Waatlemoenpampoenskilletjie";
let showStr = "skilletjie";
let newStr = johStr.substring(johStr.length - showStr.length);
newStr = showStr;
console.log(newStr);

// Truncate a string with the num parameter and make it that much shorter and build onto it

function truncateString(str, num) {
  let arr1;
  let arr2;
  if (str.length > num) {
    arr1 = str.split('');
    arr2 = arr1.slice(0, -num);
    arr2.push('...');
    str = arr2.join("").toString();
    return str;
  } else {
    return 'String shorter than truncation number';
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 18));

// Truncate a string with the num parameter and make it exactly that length and build onto it

function truncateString2(str, num) {
  let arr1;
  let arr2;
  if (str.length > num) {
    arr1 = str.split('');
    arr2 = arr1.slice(0, num);
    arr2.push('...');
    str = arr2.join("").toString();
    return str;
  } else {
    return 'String shorter than truncation number ' + str;
  }
}

console.log(truncateString2("A-tisket a-tasket A green and yellow basket", 11));

// Change the firts letter of each word to uppercase

function titleCase(str) {
  return str.replace(/(?:^|\s)\S/g, function(u) { return u.toUpperCase(); });
}

console.log(titleCase("I'm a little tea pot"));
