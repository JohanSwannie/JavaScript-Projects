// Fibonacci Algorithm - Iterative Solution

function iterativeFibonacci(n) {
  let fibonacciArray = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
  }
  return fibonacciArray[n];
}

document.write(`<p style="color: #FFF; text-align: center">${iterativeFibonacci(9)}</p></br>`);

// Fibonacci Algorithm - Recursive Solution

const theBody = document.getElementById('theBody');

const h2Another = document.createElement('h2');
h2Another.textContent = 'Fibonacci Algorithm - Recursion';
theBody.appendChild(h2Another);

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
