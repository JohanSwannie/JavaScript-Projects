// Smallest Common Multiple - Find the smallest common multiple of the provided
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
