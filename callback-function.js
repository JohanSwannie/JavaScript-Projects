function map(funker, array1) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    result.push(funker(array1[i]));
  }
  return result;
}

const funker = function(n) {
  return ((n * n * n * n) / 13).toFixed();
};

let numbers = [5, 12, 15, 18, 21];
let endResult = map(funker, numbers);

const diffy = document.querySelector('.container');

for (var i = 0; i < endResult.length; i++) {
  const puffy = document.createElement('p');
  puffy.innerHTML = `Day ${i+1} : ${endResult[i]}`;
  diffy.appendChild(puffy);
}
