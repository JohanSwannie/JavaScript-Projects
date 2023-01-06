// Fibonacci Algorithm - Iterative Solution

function iterativeFibonacci(n) {
  let fibonacciArray = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
  }
  return fibonacciArray[n];
}

document.write(`<p style="color: #FFF; text-align: center">The fibonacci of the number 9 is ${iterativeFibonacci(9)}</p></br>`);

function iterativeFibonacci2(num){
  var a = 1, b = 0, temp;

  while (num >= 1){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

document.write(`<p style="color: #FFF; text-align: center">The fibonacci of the number 14 is ${iterativeFibonacci2(14)}</p></br>`);

// Fibonacci Algorithm - Recursive Solution 

const theBody = document.getElementById('theBody');

const h2Another = document.createElement('h2');
h2Another.textContent = 'Fibonacci Algorithm - Recursion';
theBody.appendChild(h2Another);
const h3Another = document.createElement('h3');
h3Another.textContent = 'Steps of the fibonacci sequence for the numbers 1 to 14';
theBody.appendChild(h3Another);

function recursiveFibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
  }
}

const numberToCheck = 14;

for (let i = 0; i <= numberToCheck; i++) {
  document.write(`<p style="color: #FFF; text-align: center">${recursiveFibonacci(i)}</p></br>`);
}
