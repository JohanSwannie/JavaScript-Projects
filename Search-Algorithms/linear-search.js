function linearSearch(linny, value) {
  for (var i = 0; i < linny.length; i++) {
    if (value === linny[i]) {
      return `value of ${value} is found in index ${i}`;
    }
  }
}

let linearSearchArray = ['yes', true, 17.33, 'Phillip', 73, false, 'Georgetown', 'Sydney'];

document.write(`<p style="color: #FFF; font-size: 28px; text-align: center">${linearSearch(linearSearchArray, 17.33)}</p>`);
