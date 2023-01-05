function linearSearch(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return `value of ${value} is found in index ${i}`;
    }
  }
}

let array1 = ['yes', true, 17.33, 'Phillip', 73, false, 'Georgetown', 'Sydney'];

document.write(`<p style="color: #FFF; font-size: 28px; text-align: center">${linearSearch(array1, 17.33)}</p>`);
