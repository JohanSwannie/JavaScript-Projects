// 2 numbers is passed in an array - call a function that will return the sum of the
// numbers added up between those numbers with those numbers included. The highest of the 2 numbers
// can be the first or second number in the array

function sumAll(arr) {
  let end = 0
  let sum = 0
  let add = arr[0]
  let zeroFlag = 0
  if (arr[0] < arr[1]) {
     end = arr[1] - (arr[0] - 2)
  } else {
    end = arr[0] - (arr[1] - 2)
    zeroFlag = 1
  }
  for (let i = 1; i < end; i++) {
    sum += add
    zeroFlag === 0 ? add++ : add--
  }
  return sum
}

console.log(sumAll([19, 12]));
