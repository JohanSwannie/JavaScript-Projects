// EXAMPLE 1
console.log('EXAMPLE 1');
console.log('_________');

// retrieve the values of name and age from user object

const user = { name: 'John Doe', age: 34 };

const {name, age} = user;

console.log(`name = ${name} and age = ${age}`);

// EXAMPLE 2
console.log('EXAMPLE 2');
console.log('_________');

// assign the values in today and tomorrow to the new object entries highToday and highTomorrow

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// EXAMPLE 3
console.log('EXAMPLE 3');
console.log('_________');

// assign the values in low and high to the new object entries lowToday and highToday  (objects within objects)

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const {today: {low: lowToday, high: highToday2}} = LOCAL_FORECAST;

// EXAMPLE 4
console.log('EXAMPLE 4');
console.log('_________');

// x, y and z will take up first 3 positions of array

const [x, y, z] = [1, 2, 3, 4, 5, 6];
console.log(x, y, z);

// e and f take up first 2 positions of array and g will take up only the fifth position due to extra comma's

const [e, f,,, g] = [1, 2, 3, 4, 5, 6];
console.log(e, f, g);

// Change positions of a and b

let a = 8, b = 6;
[a, b] = [b, a];
console.log(`a is now ${a} and b is now ${b}`);

// EXAMPLE 5
console.log("EXAMPLE 5");
console.log("_________");

// remove first 2 values from an array

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const  [i, j, ...arr] = list;
  return arr;
}
console.log(removeFirstTwo(source));

// EXAMPLE 6
console.log("EXAMPLE 6");
console.log("________");

// Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0;
