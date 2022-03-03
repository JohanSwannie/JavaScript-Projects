// Write a function that takes two or more arrays and returns a new array of unique values
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
