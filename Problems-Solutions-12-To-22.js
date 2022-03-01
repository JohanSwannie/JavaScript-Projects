// PROBLEM 12 - Pig Latin - - If a word begins with a consonant, take the first consonant or
// consonant cluster, move it to the end of the word, and add ay to it. If a word begins with a
// vowel, just add way at the end.

function translatePigLatin(str) {
  let vowels = ['a', 'A', 'e', 'E', 'o', 'O', 'i', 'I', 'u', 'U']
  let buildW = ''
  let cntr = 0
  let arr = str.split('')
  if (vowels.includes(arr[0])) {
    arr.push('way')
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (vowels.includes(arr[i])) {
        break
      } else {
        buildW += arr[i]
        cntr++
      }
    }
    buildW += 'ay'
    arr.splice(0, cntr)
    arr.push(buildW)
  }
  str = arr.join('')
  return str;
}

console.log(translatePigLatin("crwqonsonant"));

// Problem 13 - Perform a search and replace on the sentence using the arguments provided
// and return the new sentence. First argument is the sentence to perform the search and
// replace on. Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are
// replacing it. For example if you mean to replace the word Book with the word dog,
// it should be replaced as Dog

function myReplace(str, before, after) {
  let arr = str.split(' ')
  let arr2 = after.split('')
  let indexW = arr.indexOf(before)
  let regexU = /^[A-Z]/
  let caseChange = 'n'
  let afterU
  let newStr
  if (regexU.test(arr[indexW])) {
    afterU = after[0].toUpperCase()
    caseChange = 'y'
  }
  if (regexU.test(after)) {
    afterU = after[0].toLowerCase()
    caseChange = 'y'
  }
  if (caseChange === "y") {
    arr2.shift()
    arr2.unshift(afterU)
    let replStr = arr2.join('')
    newStr = str.replace(before, replStr)
  } else {
    newStr = str.replace(before, after)
  }
  return newStr;
}

console.log(myReplace("A quick brown fox bumped over the lazy dog", "bumped", "Leaped"));

// PROBLEM 14 - The DNA strand is missing the pairing element. Take each character, get its pair, and return the
// results as a 2d array. Base pairs are a pair of AT and CG. Match the missing element to the provided
// character. Return the provided character as the first element in each array. For example, for the input
// GCG, return [["G", "C"], ["C","G"], ["G", "C"]] The character and its pair are paired up in an array,
// and all the arrays are grouped into one encapsulating array.

// Solution A

function pairElement1(str) {
  let arr1 = str.split('')
  let arr2 = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === 'A') {
      arr2.push(['A', 'T'])
    } else if (arr1[i] === 'T') {
      arr2.push(['T', 'A'])
    } else if (arr1[i] === 'C') {
      arr2.push(['C', 'G'])
    } else if (arr1[i] === 'G') {
      arr2.push(['G', 'C'])
    }
  }
  return arr2;
}

console.log(pairElement1("ATCGA"));

// Solution B

function pairElement2(str) {
  let arr = str.split('');
  let arr1 = arr.map(item => {
    switch(item) {
      case 'A':
      return ['A', 'T'];
      case 'T':
      return ['T', 'A'];
      case 'C':
      return ['C', 'G'];
      case 'G':
      return ['G', 'C'];
    }
  })
  return arr1;
}

console.log(pairElement2('AATCGGC'));

// PROBLEM 15 - String passed has letters in sequence of Alphabet but a letter is missing
// in the sequence. Write a function that detect the missing letter and return it

function fearNotLetter(str) {
  let arr1 = str.split('')
  let alphaBet = 'abcdefghijklmnopqrstuvwxyz'
  let arr2 = alphaBet.split('')
  let slicer1 = arr2.indexOf(arr1[0])
  let slicer2 = slicer1 + arr1.length + 1
  let arr3 = arr2.slice(slicer1, slicer2)
  let missingLetter = undefined
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] !== arr1[i]) {
      missingLetter = arr3[i]
      break
    }
  }

  return missingLetter;
}

console.log(fearNotLetter("klmop"))

// PROBLEM 16 - Write a function that takes two or more arrays and returns a new array of unique values
// in the order of the original provided arrays. In other words, all values present from all arrays should
// be included in their original order, but with no duplicates in the final array. The unique numbers should
// be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
  let arr2 = arr;
  let set1 = new Set(arr2)
  let arr3 = Array.from(set1)
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].forEach(value => {
      if (arr3.indexOf(value) < 0) {
        arr3.push(value);
      }
    });
  }
  return arr3;
}

console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));

// PROBLEM 17 -  Check a string and replace all ('&' with '&amp;') & ('<' with '&lt;') & ('>' with '&gt;')
// ('"' with '&quot;') & ("'" with '&apos;')

const LIST = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
};

function convertHTML(str) {
  return str.replace(/[&<>"']/g, function(item) {
    return LIST[item];
  });
}
console.log(convertHTML('Dolce & "Gabbana" & nooit & nie'));

// PROBLEM 18 - Sum All Odd Fibonacci Numbers - Given a positive integer num, return the sum of all odd
// Fibonacci numbers that are less than or equal to num. The first two numbers in the Fibonacci sequence
// are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first
// six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8. For example, sumFibs(10) should return
// 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let  numb1 = 0;
  let numb2 = 1;
  let tmpNumb;
  let total = 0;

  while (numb1 <= num){
    tmpNumb = numb1;
    numb1 += numb2;
    numb2 = tmpNumb;

    if (numb2 % 2 !== 0) {
          total += numb2;
    }

  }

  return total;
}

console.log(sumFibs(1000));

// PROBLEM 19 - Given a number, write a function to add the sum of all prime numbers up to the
// given number. An additional array is created and sorted to show the prime numbers

function checkPrime(number) {
  let number2 = number
  let total = 0
  let primeArr = []
  if (number < 2) {
    return total
  }
  let primeFlag = true
  for (i = number; i > 1; i--) {
    for (j = 2; j < number2; j++) {
      if (i % j === 0) {
        primeFlag = false;
      }
    }
    if (primeFlag) {
      total += number2
      primeArr.push(number2)
    } else {
      primeFlag = true
    }
    number2 --
  }
  primeArr.sort((a, b) => a - b)
  console.log(primeArr)
  return(total)
}

console.log(checkPrime(100));

// PROBLEM 20 - Smallest Common Multiple - Find the smallest common multiple of the provided
// parameters that can be evenly divided by both, as well as by all sequential numbers in the
// range between these parameters. The range will be an array of two numbers that will not
// necessarily be in numerical order. For example, if given 1 and 3, find the smallest common
// multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3.
// The answer here would be 6.

function smallestCommons(arr) {
  arr.sort((a, b) => b - a);
  let arr2 = [];
  for (let i = arr[0]; i >= arr[1]; i--) {
    arr2.push(i);
  }
  let rValue = 0;
  let lValue = 1;
  let j;
  do {
    rValue = arr2[0] * lValue * arr2[1];
    for (j = 2; j < arr2.length; j++) {
      if (rValue % arr2[j] !== 0) {
        break;
      }
    }
    lValue++;
  } while (j !== arr2.length);
  return rValue;
}

console.log(smallestCommons([12,5]));

// PROBLEM 21 - Drop it - Given the array arr, iterate through and remove each element starting
// from the first element (the 0 index) until the function func returns true when the iterated
// element is passed through it. Then return the rest of the array once the condition is satisfied,
// otherwise, arr should be returned as an empty array.

const dropElements = (arr, func) => {
  const fIdx = arr.findIndex(func);
  return fIdx >= 0 ? arr.slice(fIdx) : []
}

dropElements([1, 2, 3], function(n) {return n < 3; });

// PROBLEM 22 - Steamroller - Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  var arr2 = [];
  arr.forEach(e => {
    if (Array.isArray(e)) {
      arr2 = arr2.concat(steamrollArray(e));
    } else {
      arr2.push(e);
    }
  });
  return arr2;
}

steamrollArray([
  [1, [2],
    [3, [
      [4]
    ]]
  ]
]);
