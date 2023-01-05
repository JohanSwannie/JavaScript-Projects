function binarySearch(array, value) {
  let indexStart = 0;
  let indexEnd = array.length - 1;
  while (indexStart < indexEnd) {
    let indexCenter = Math.floor((indexStart + indexEnd) / 2);
    if (value === array[indexCenter]) {
      return `The value ${value} is found at index ${indexCenter}`;
    }
    if (value > array[indexCenter]) {
      indexStart = indexCenter + 1;
    } else {
      indexEnd = indexCenter -1;
    }
  }
  return `The value ${value} is not found in the array`;
}

let array1 = [29.55, 1.3, 35.65, 7.65, 17.33, 84, 10.43, 19.88, 41.75, 12.44, 51, 1.89];

let array2 = array1.sort((a, b) => a - b);

document.write(`<p style="color: #FFF; font-size: 28px; text-align: center">${binarySearch(array2, 10.43)}</p>`);
