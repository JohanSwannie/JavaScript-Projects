// JAVASCRIPT PROJECT 1 - Palindrome Checker - Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case,
// and spacing. Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn
// everything into the same case (lower or upper case) in order to check for palindromes. We'll pass strings with varying
// formats, such as racecar, RaceCar, and race CAR among others. We'll also pass strings with special symbols, such as
// 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function checkIfPalindrome(str) {
  const REGEX1 = /[^0-9a-z]/gi
  let str2 = str.replace(REGEX1, '');
  let arr = str2.split('')
  let str3 = arr.join('').toLowerCase()
  arr.reverse()
  let str4 = arr.join('').toLowerCase()
  if (str3 === str4) {
    return true
  } else {
    return false
  }
}

console.log(`Is the string a palindrome - ${checkIfPalindrome('racecar')}`);
