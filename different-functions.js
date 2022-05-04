// Function Declarations

//Example 1

function addThemUp(a, b, c = 12) {
  return a + b + c;
}

console.log(addThemUp(17, 82));

// Example 2

function addMoreToFarm(farm) {
  farm.wildgame = 625;
  farm.tractors = 14;
  farm.barns = 7;
  farm.name = "Riverdale";
}

let farm = {
  cattle: 218,
  sheep: 181,
  chickens: 813,
  pigs: 38
};

addMoreToFarm(farm);
console.log(farm);

// Function Expressions

// Example 1

const calculation = function(number1, number2) {
  return number1 * number2;
};

console.log(calculation(19, 6));

// Example 2

function map(func, array1) {
  let result = [];
  for (let i = 0; i != array1.length; i++)
    result.push(func(array1[i]));
  return result;
}
const func = function(n) {
  return (n * n * n) / 10;
};

let numbers = [1, 2, 5, 8, 11];
let endResult = map(func, numbers);
console.log(endResult);

// Function Scope

let num1 = 21;
let num2 = 16;

function adding() {
  return num1 + num2;
}

console.log(adding());


function adding2() {
  num1 = 12;
  num2 = 11;

  function adding3() {
    return num1 + num2;
  }
  return adding3();
}

console.log(adding2());

// Recursive Functions - functions calling itself

function determineV(v, cntr) {
  cntr++;
  if (v > 32) {
    console.log(cntr);
    return;
  }
  determineV(v + 10, cntr);
}

determineV(1, 0);

// Nested Functions & Closures

// Example 1

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41

// Example 2

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

console.log(outside(3)(5)); // returns 8

// Multi Nested Functions

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)

// Closures

let createPet = (name) => {
  let sex;

  return {
    setName: (newName) => {
      name = newName;
    },

    getName: () => {
      return name;
    },

    getSex: () => {
      return sex;
    },

    setSex: (newSex) => {
      if (typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
          newSex.toLowerCase() === 'female')) {
        sex = newSex;
      }
    }
  };
};

let pet = createPet('Vivie');
pet.getName(); // Vivie

pet.setName('Oliver');
pet.setSex('male');
pet.getSex(); // male
pet.getName(); // Oliver

// Using arguments in Functions

const workItOut = function() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
};

let Billy = 12;
workItOut(Billy, 'John', 'Mary');

// Using Rest Parameters in Functions

function calculateIt(f, ...rest) {
  return rest.map(r => f * r);
}

console.log(calculateIt(15, 19, 4, 10));

// Binding objects to Functions

let obj1 = {
  name: 'Mary',
  surname: 'Brown'
};

let obj2 = {
  name: 'John',
  surname: 'Parker'
};

 function newFunc() {
  console.log(`The name of the person is ${this.name} ${this.surname}`);
}

let firstFunc = newFunc.bind(obj1);
let secondFunc = newFunc.bind(obj2);

firstFunc();
secondFunc();

// Using the Apply method in Functions


function separateThem() {
  console.log(`${this.name} ${this.surname}`);
  let total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(separateThem.apply({name: 'Lance', surname: 'Klusner'}, [12, 19, 8, 31]));

// Using the Call method in Functions

let obj7 = {
  year: 1999,
  month: 'April',
  day: 18,
  hour: 17,
  minutes: 23
};

function callFunc(x) {
  return this.hour + x;
}

console.log(`The new hour is now ${callFunc.call(obj7, 5)}`);

// IIFE - Immediately Invoked Function Expression - a Self-Executing Anonymous Function

// Simple form

(function () {
  console.log('This is a very short IIFE');
})();
