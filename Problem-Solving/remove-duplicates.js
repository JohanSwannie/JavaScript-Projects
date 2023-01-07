// 4 ways to remove duplicates from an array

const bigBoss = document.querySelector('.container');

let h1Heading = document.createElement('h1');
h1Heading.textContent = "4 Ways to remove duplicates from arrays";
bigBoss.appendChild(h1Heading);

// Example1

let example1Array = [17, 8, 12, 17, 19, 22, 7, 8, 10, 17, 19];

let example1Array2 = [...new Set(example1Array)];

document.write(`<p>Example 1 Result  ---  ${example1Array2}</p>`)

// Example2

let x = {};

for (var i of example1Array) {
  x[i] = true;
}

let y = Object.keys(x);

document.write(`<p>Example 2 Result  ---  ${y}</p>`);

// Example 3

let example3Array = [17, 8, 12, 17, 19, 22, 7, 8, 10, 17, 19];

let example3Array2 = [];

for (var i = 0; i < example3Array.length; i++) {
    if (example3Array2.indexOf(example3Array[i]) === -1)  {
      example3Array2.push(example3Array[i]);
    }
}

document.write(`<p>Example 3 Result  ---  ${example3Array2}</p>`);

// Example4

let example4Array = [17, 8, 12, 17, 19, 22, 7, 8, 10, 17, 19];

example4Array.sort((j, k) => j - k);

let example4Array2 = [];

let saveValue;

for (var i = 0; i < example4Array.length; i++) {
    if (example4Array[i] !== saveValue) {
      example4Array2.push(example4Array[i]);
      saveValue = example4Array[i];
    }
}

document.write(`<p>Example 4 Result  ---  ${example4Array2}</p>`);
