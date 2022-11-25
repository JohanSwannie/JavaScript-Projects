function calculateAmounts(first, ...rest) {
  const mammie = document.querySelector('.container');
  const array1 = [];
  for (var i = 0; i < rest.length; i++) {
    array1.push(first * rest[i]);
  }
  for (var i = 0; i < array1.length; i++) {
    const pippie = document.createElement('p');
    pippie.innerHTML = `Amount ${i + 1} is ${array1[i]} dollars`;
    mammie.appendChild(pippie);
  }
}

calculateAmounts(15, 19, 4, 10, 109, 128, 149, 188, 211);
