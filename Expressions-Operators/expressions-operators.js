// Expressions & Operators

// Assignment Operators - Addition - subtraction - multiplication - division - modulus(remainder)

let number1 = 10;
console.log(`number1 is now ${number1 += 10}`); // Result --> 20
console.log(`number1 is now ${number1 -= 10}`); // Result --> 10
console.log(`number1 is now ${number1 *= 10}`); // Result --> 100
console.log(`number1 is now ${number1 /= 10}`); // Result --> 10
console.log(`number1 is now ${number1 %= 10}`); // Result --> 0

// Assignment Operators - Exponentiation - Left Shift - Right Shift - Bitwise AND - Bitwise OR - Bitwise XOR

let number2 = 2;
console.log(`number2 is now ${number2 **= 3}`); // Result --> 8
console.log(`number2 is now ${number2 <<= 3}`); // Result --> 64
console.log(`number2 is now ${number2 >>= 3}`); // Result --> 8
console.log(`number2 is now ${number2 &= 3}`); // Result --> 0
console.log(`number2 is now ${number2 |= 3}`); // Result --> 3
console.log(`number2 is now ${number2 ^= 3}`); // Result --> 0

// Assignment Operators - Logical AND - Logical OR - Logical Nullish

let number3 = 0;
console.log(`number3 is now ${number3 &&= 1}`); // Result --> 0
let number4 = 4;
console.log(`number4 is now ${number4 ||= 1}`); // Result --> 4
let number5 = 7;
console.log(`number5 is now ${number5 ??= 3}`); // Result --> 7

// Assigning to properties

let firstObj = {};
firstObj.i = 27;
console.log(firstObj.i); // Result --> 27
console.log(firstObj); // Result --> {i:27}
let key = 'j';
firstObj[key] = 58;
console.log(firstObj[key]); // Result --> 58
console.log(firstObj); // Result --> {i:27, j:58}

// Destructuring

let values = [1, 2, 3, 10, true, 'Hallo ', 'Everyone'];
let [variable1, variable2, variable3, variable4, variable5, variable6, variable7] = values;
console.log(variable3);
let calcResult = variable2 * variable3 + variable1;
console.log(calcResult);
let stringResult = variable6 + variable7;
console.log(stringResult);

// Comparison Operators

let a1 = 19;
let b1 = 17;
let c1 = 16;
let d1 = 19;

if (a1 === b1) {
  console.log('a1 is equal to b1');
} else if (a1 === c1) {
  console.log('a1 is equal to c1');
} else if (b1 === c1) {
  console.log('b1 is equal to c1');
} else {
  console.log('a1, b1 and c1 all has different values');
}

if (a1 !== b1) {
  console.log('a1 is not equal to b1');
}

if (b1 > c1) {
  console.log('b1 is greater than c1');
}

if (c1 < a1) {
  console.log('c1 is smaller than a1');
}

if (a1 >= d1) {
console.log('a1 might be equal to d1 or greater than d1');
}
if (b1 <= d1) {
console.log('b1 might be equal to d1 or smaller than d1');
}

// Arithmetic Operators

let number20 = 3;
let number21 = 17;
let number22 = 4;
let number23 = 40;
let number24 = 3;
number20 ++;                          // Add 1 to number20
number20 --;                          // Subtract 1 from number20
number22 = number20 + number21;       // add the values of number20 and number21 to the current value of number22
number20 = number20 - number21;       // Subtract the value of number21 from the current value in number20
number23 = number23 % number20;       // Divide 40 by the value in number20 to get the remainder
number20 = number24 ** number20;      // number20 now equals number24 to the power of the value in number20

// Bitwise Operators

// Bitwise AND

let x = 9;                            // Interprets to 1001 binary
let y = 7;                            // Interprets to 0111 binary
console.log(x & y);                   // Binary Result --> 0001 because only the last 1 match - decimal result also 1

let i = 14;                           // Interprets to 1110 binary
let j = 8;                            // Interprets to 1000 binary
console.log(i & j);                   // Binary Result ---> 1000 - decimal result 8

// Bitwise OR

let n1 = 18;                          // Interprets to 0001 0010 binary
let m1 = 27;                          // Interprets to 0001 1011 binary
console.log(n1 | m1);                 // Binary Result ---> 0001 1011 - all match and unmatched 1's - decimal result 27

// Bitwise XOR

let n2 = 17;                          // Interprets to 0001 0001 binary
let m2 = 13;                          // Interprets to 0000 1101 binary
console.log(n2 ^ m2);                 // Binary Result 0001 1100 - only unmatched 1's - decimal result 28

// Bitwise NOT

let e = 7;                            // Interprets to 0000 0000 0000 0000 0000 0000 0000 0111 binary
let f = -3;                           // Interprets to 1111 1111 1111 1111 1111 1111 1111 1101 binary
console.log(~e);                      // Result ---> -8
console.log(~f);                      // Result ---> -2

// Left Shift

let n3 = 7;                           // Interprets to 0111 binary
let m3 = 2;                           // Interprets to 0010 binary
console.log(n3 << m3);                // Binary Result --> 0001 1100 - decimal result 28

// Right Shift

let n4 = 76;                          // Interprets to 0100 1100 binary
let m4 = 5;                           // Interprets to 0000 0101 Binary
console.log(n4 >> m4);                // Binary Result ---> 0000 0010 - decimal result 2

// Logical Operators

// Logical AND

let n5 = 18;
let m5 = 29;

console.log(n5 < 20 && m5 < 20);       // Result ---> false
console.log(n5 > 15 && m5 > 15);       // Result ---> true

// Logical OR

console.log(n5 > 20 || m5 > 20);       // Result ---> true
console.log(n5 >= 30 || m5 > 30);      // Result ---> false

// Logical NOT

console.log(!(n5 > 10 && m5 > 10));    // Result ---> false
console.log(!(n5 >=30 || m5 > 30));    // Result ---> true

// String Operator

let string22 = 'We enjoyed the afternoon by walking on the beach';
string22 += ' and then we relaxed the evening with a nice coffee';
console.log(string22);

// Ternary Operator

let u1 = 29;
u1 === 29 ? console.log('u1 is equal to 29') : console.log('u1 is NOT equal to 29');

// Relational Operator

let array30 = ['Brown', 'Yellow', 'Red', 'Orange', 'Blue', 'Purple'];
console.log(5 in array30);

let object10 = { type: 'number', model: 1990 };
console.log('type' in object10);
