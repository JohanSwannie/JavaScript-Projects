// Roman Numeral Converter - Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  const naturalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let romanN = ''
  while (num !== 0) {
    const idxFnd = naturalNumbers.findIndex(number => num >= number)
    romanN += romanNumerals[idxFnd]
    num -= naturalNumbers[idxFnd]
  }
  return romanN
}

console.log(convertToRoman(1296));
