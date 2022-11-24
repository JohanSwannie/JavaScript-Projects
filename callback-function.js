function map(funker, array1, array2, array3, array4) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    result.push(funker(array1[i], array2[i], array3[i], array4[i]));
  }
  return result;
}

const funker = function(n1, n2, n3, n4) {
  return ((n1 * n2 * n3 * n4) / 13).toFixed();
};

let numbers1 = [5, 12, 15, 18, 21];
let numbers2 = [7, 17, 18, 21, 24];
let numbers3 = [10, 20, 21, 26, 28];
let numbers4 = [15, 23, 25, 30, 33];
let endResult = map(funker, numbers1, numbers2, numbers3, numbers4);

const diffy = document.querySelector('.container');

for (var i = 0; i < endResult.length; i++) {
  const puffy = document.createElement('p');
  puffy.innerHTML = `Month ${i+1} : ${endResult[i]}`;
  diffy.appendChild(puffy);
}
