//Looping through and array with a for loop


let array1 = [1, true, 'John', 'Lucy', false, 22];
let array2 = [];

for (var i = 0; i < array1.length; i++) {
  if (typeof array1[i] === "number") {
    array2.push(array1[i]);
  }
}
console.log(`array2 = ${array2}`);

// Do While Looping

let x = 9;
let array3 = [];

do {
  x *= 2;
  array3.push(x);
} while (x < 2000);

console.log(`array3 = ${array3}`);

// While Looping Example 1 without Labels or Breaks

let y = 100;
let array4 = [];

while (y > 10) {
  y /= 2;
  array4.push(y);
}

console.log(`array4 = ${array4}`);

// While Looping Example 2 with Labels and Breaks

let a = 0;
let b = 0;
labelBreakAllLoops: while (true) {
  a += 2;
  b += 3;
  while (true) {
    b += 1;
    if (b > 20 && x > 10) {
      console.log('all loops broken');
      break labelBreakAllLoops;
    } else if (b > 15) {
      console.log('Only inner loop broken');
      break;
    }
  }
}

// While looping with Continue

let j = 0;
let n = 0;
while (j < 5) {
  j++;
  if (j === 3) {
    continue;
  }
  n += j;
  console.log(n);
}

// While Looping with Labelling & Continue

let l = 0;
let m = 10;
checklandm:
  while (l < 4) {
    console.log(l);
    l += 1;
    checkm:
      while (m > 4) {
        console.log(m);
        m -= 1;
        if ((m % 2) === 0) {
          continue checkm;
        }
        console.log(m + ' is odd.');
      }
    console.log('l = ' + l);
    console.log('m = ' + m);
  }

// For in Statement for looping over enumerable properties of Objects

let cars = {
  model: 'Ford',
  year: 1998,
  price: 5950
};

for (let item in cars) {
  if (cars.hasOwnProperty(item)) {
    console.log(`${item}: ${cars[item]}`);
  }
}

// For of Statement looping over all the items in an array

let array6 = [1, 19, 12, true, 'yes', 21, 'Hannah', false];

for (let value of array6) {
  if (typeof value === 'boolean') {
    console.log(value);
  }
}
