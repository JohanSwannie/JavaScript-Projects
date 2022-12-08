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
  document.write(`<span style="color: #FFF">The Factorial of ${factorialArray1[j]} = ${getFactorial(factorialArray1[j])} </span> </br> </br>`);
}

// Factorials Algorithm - Recursive Solution

function recursiveFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    return num * recursiveFactorial(num - 1);
}

const factorialArray2 = [7, 3];

for (var k = 0; k < factorialArray2.length; k++) {
  document.write(`<span style="color: #FFF">The Factorial of ${factorialArray2[k]} = ${getFactorial(factorialArray2[k])} </span> </br> </br>`);
}
