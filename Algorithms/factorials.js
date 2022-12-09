// Factorials Algorithm - Iterative Solution

function getFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    for (let i = num - 1; i >= 1; i--) {
        num = num * i;
    }

    return num;
}

const factorialArray1 = [11, 4, 19, 9, 5];

for (var j = 0; j < factorialArray1.length; j++) {
  document.write(`<p style="color: #FFF; text-align: center">The Factorial of ${factorialArray1[j]} = ${getFactorial(factorialArray1[j])} </p> </br>`);
}

// Factorials Algorithm - Recursive Solution

function recursiveFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    return num * recursiveFactorial(num - 1);
}

const factorialArray2 = [7, 3];

const theBody = document.getElementById('theBody');

const h2Another = document.createElement('h2');
h2Another.textContent = 'Factorials Algorithm - Recursion';
theBody.appendChild(h2Another);

for (var k = 0; k < factorialArray2.length; k++) {
  document.write(`<p style="color: #FFF; text-align: center">The Factorials of ${factorialArray2[k]} = ${recursiveFactorial(factorialArray2[k])} </p> </br> </br>`);
}
