// Given a number, write a function to add the sum of all prime numbers up to the
// given number. An additional array is created and sorted to show the prime numbers

function checkPrime(number) {
  let number2 = number
  let total = 0
  let primeArr = []
  if (number < 2) {
    return total
  }
  let primeFlag = true
  for (i = number; i > 1; i--) {
    for (j = 2; j < number2; j++) {
      if (i % j === 0) {
        primeFlag = false;
      }
    }
    if (primeFlag) {
      total += number2
      primeArr.push(number2)
    } else {
      primeFlag = true
    }
    number2 --
  }
  primeArr.sort((a, b) => a - b)
  console.log(primeArr)
  return(total)
}

console.log(checkPrime(100));
