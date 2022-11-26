// Out of 2 arrays with several values each, create a new array with values unique to each array

// Short Way

function diffArray1(arr1, arr2) {
  let bigArray1 = [];
  bigArray1 = arr1.concat(arr2);
  const potter = bigArray1.filter(val => (arr1.indexOf(val) === -1 || arr2.indexOf(val) === -1));
  return potter
}

console.log(diffArray1([1, 8, 'Kos', 2, 77, 91, 3, 5], [1, 'Jos', 2, 77, 3, 'Kos', 4, 5]));

// Long Way

function diffArray2(arr3, arr4) {
  let bigArray2 = [];
  bigArray2 = arr3.concat(arr4);
  function compareValues(value) {
    if (arr3.indexOf(value) === -1 || arr4.indexOf(value) === -1) {
      return value;
    }
  }
  return bigArray2.filter(compareValues);
}

console.log(diffArray2([1, 8, 2, 3, 5, 'Blikkies'], [1, 2, 77, 3, 'Lekker kos', 4, 5]));
