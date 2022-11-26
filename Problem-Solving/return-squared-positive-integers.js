// From an array return only the sqaured value of positive integers(exclude all floats)

const squareList = arr => {
  const squaredArr = arr.filter(item1 => (item1 > 0 && item1 % 1 === 0))
  .map(item2 => item2 * item2)
  return squaredArr;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
