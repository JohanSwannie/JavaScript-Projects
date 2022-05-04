// Convert string to Number

// Use Number for conversion

let number1 = '171';
console.log(typeof(number1));                      // Reult --> string
let convNumber1 = Number(number1);
console.log(typeof(convNumber1));                  // Result --> number
number1 = number1 + 9;
console.log(number1);                                 // Result --> '1719'
convNumber1 += 27;
console.log(convNumber1);                             // Result --> 198

// Use the unary operator for conversion

let number2 = '31';
let convNumber2 = +number2;
console.log(typeof(convNumber2));

// Use parseInt for conversion

let number3 = '94';
let convNumber3 = parseInt(number3);
console.log(`Coverted number 3 is now ${convNumber3} and has a type of ${typeof(convNumber3)}`);

// Use parseFloat for conversion

let number4 = '56.23';
let convNumber4 = parseFloat(number4);
console.log(`Converted number 4 is now ${convNumber4} and has a type of ${typeof(convNumber4)}`);

// Use subtraction, multiplication and division for conversion

let number5 = '1257';
number5 -= 1;
console.log(`number 5 is now ${number5} and has a type of ${typeof(number5)}`);
number5 *= 2;
console.log(`number 5 is now ${number5} and has a type of ${typeof(number5)}`);
number5 /= 2;
console.log(`number 5 is now ${number5} and has a type of ${typeof(number5)}`);

// Use Math.floor(). Math.ceil() and Math.round() for conversion

let number6 = '24.93';
let convNumber6 = Math.floor(number6);
console.log(`Converted number 6 is now ${convNumber6} and has a type of ${typeof(convNumber6)}`);

let number7 = '38.48';
let convNumber7 = Math.ceil(number7);
console.log(`Converted number 7 is now ${convNumber7} and has a type of ${typeof(convNumber7)}`);

let number8 = '71.53';
let convNumber8 = Math.round(number8);
console.log(`Converted number 8 is now ${convNumber8} and has a type of ${typeof(convNumber8)}`);
