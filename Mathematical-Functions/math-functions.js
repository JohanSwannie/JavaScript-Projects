// Example 1 - Math.PI - simple

document.write(`<p>Example 1 Result  ---  ${Math.PI}</p>`);

// Example 1 B - Math.PI - Calculate the circumference circles

function calculateCircumference(array) {
  let messageArray = [];
  for (var i = 0; i < array.length; i++) {
    messageArray.push(`<p>The radius of circle ${i + 1} is ${2 * Math.PI * array[i]}</p>`);
  }
  return messageArray;
}

let radiusesArray = [14, 10] ;

document.write(`<p>Example 1B Result  ---  ${calculateCircumference(radiusesArray)}</p>`);

// Example 2 - Math.sqrt - Calculate the square root

function calculateSquareRoot(array) {
  let messageArray2 = [];
  for (var i = 0; i < array.length; i++) {
    messageArray2.push(`<p>The square of area ${i + 1} is ${Math.sqrt(array[i])}</p>`);
  }
  return messageArray2;
}

let squareAreaArray = [81, 300] ;

document.write(`<p>Example 2 Result  ---  ${calculateSquareRoot(squareAreaArray)}</p>`);

// Example 3 - Math.abs - return the absolute value of a number

function determineAbsoluteNumber(n1, n2) {
    return(`Absolute number is ${Math.abs(n1 + n2)}`);
}

document.write(`<p>Example 3 Result  ---  ${determineAbsoluteNumber(22.44123, 17.561191)}</p>`);

// Example 4 - Math.cbrt - return the cube root of a number

function determineCubeRoot(number) {
    return(`The cube root of ${number} is ${Math.cbrt(number)}`);
}

document.write(`<p>Example 4 Result  ---  ${determineCubeRoot(512)}</p>`);

// Example 5 - Math.ceil - rounds a number UP to the nearest integer

function determineCeil(number) {
    return(`The ceil of ${number} is ${Math.ceil(number)}`);
}

document.write(`<p>Example 5 Result  ---  ${determineCeil(29.33)}</p>`);

// Example 6 - Math.floor - rounds a number DOWN to the nearest integer

function determineFloor(number) {
    return(`The floor of ${number} is ${Math.floor(number)}`);
}

document.write(`<p>Example 6 Result  ---  ${determineFloor(17.73)}</p>`);

// Example 7 - Math.exp - returns e raised to the power of a number

function determineExp(number) {
    return(`The exponential of ${number} is ${Math.exp(number).toFixed(2)}`);
}

document.write(`<p>Example 7 Result  ---  ${determineExp(7)}</p>`);

// Example 8 - Math.imul - returns the multiplication result of 2 or more numbers

document.write(`<p>Example 8 Result --- The imul of the numbers 7 & 8  is ${Math.imul(7, 8)}</p>`);

// Example 9 - Math.min - returns the smallest number

let minArray = [18, 10, 21, 3, 27, 11, 8, 13];

document.write(`<p>Example 9 Result --- The smallest number is ${Math.min(...minArray)}</p>`);

// Example 10 - Math.max - returns the biggest number

let maxArray = [6, 18, 33, 10, 21, 43, 271, 11, 8, 13, 4, 1];

document.write(`<p>Example 10 Result --- The biggest number is ${Math.max(...maxArray)}</p>`);

// Example 11 - Math.pow - returns a number to the power of second number

document.write(`<p>Example 11 Result --- ${Math.pow(4, 4)}</p>`);

// Example 12 - Math.random - returns a random Number

document.write(`<p>Example 12 Result --- Random number is ${(Math.random() * 10).toFixed(2)}</p>`);

// Example 13 - Math.round - round a Number

document.write(`<p>Example 13 Result --- Rounded number is ${Math.round(19.55)}</p>`);

// Example 14 - Math.trunc - truncate a number by chopping off the decimals

document.write(`<p>Example 14 Result --- Truncated number is ${Math.trunc(11.165)}</p>`);
