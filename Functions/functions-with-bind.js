let obj1 = {
  name: 'Girtie',
  surname: 'Brown',
  age: 46,
  position: 'Senior Payroll Officer'
};

let obj2 = {
  name: 'Mary',
  surname: 'Ballantine',
  age: 32,
  position: 'Venue Manager'
};

let obj3 = {
  name: 'Kaleigh',
  surname: 'Conway',
  age: 28,
  position: 'Professional Artist'
};

let obj4 = {
  name: 'John',
  surname: 'Quinton',
  age: 37,
  position: 'Software Developer'
};

 function newFunc() {
   array1.push(`${this.name} ${this.surname} is ${this.age} years old and is a ${this.position}`);
}

const pappie = document.querySelector('.container');

let firstFunc = newFunc.bind(obj1);
let secondFunc = newFunc.bind(obj2);
let thirdFunc = newFunc.bind(obj3);
let fourthFunc = newFunc.bind(obj4);

const array1 = [];

firstFunc();
secondFunc();
thirdFunc();
fourthFunc();

for (var i = 0; i < array1.length; i++) {
  const pippie = document.createElement('p');
  pippie.style.fontSize = '25px';
  pippie.innerHTML = array1[i];
  pappie.appendChild(pippie);
}
