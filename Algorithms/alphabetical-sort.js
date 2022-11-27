// Sort a given array with alphabetics in alphabetical order

function alphabeticalOrder(arr) {
  const arrSort = arr.sort((a, b) => a === b ? 0 : a < b ? -1 : 1)
  return arrSort  
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

