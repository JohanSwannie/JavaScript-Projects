const getAverageAge = function() {
  const todaysDate = new Date();
  let currentYear = todaysDate.getFullYear();
  const pappie = document.querySelector('.container');
  let array1 = []
  let bornDate = 0;
  for (var i = 0; i < arguments.length; i++) {
    for (var value in arguments[i]) {
      if (arguments[i].hasOwnProperty(value)) {
        bornDate = currentYear - ((arguments[i])[value]);
        const pippie = document.createElement('p');
        pippie.innerHTML = `${value} is ${((arguments[i])[value])} years old and was born in ${bornDate}`;
        pappie.appendChild(pippie);
        array1.push(`${((arguments[i])[value])}`)
      }
      bornDate = 0;
    }
  }
  let allAges = 0;
  let averageAges = 0;
  for (var i = 0; i < array1.length; i++) {
    allAges = allAges + parseInt(array1[i]);
  }
  averageAges = allAges / arguments.length;
  const pippie2 = document.createElement('p');
  pippie2.innerHTML = `The Average Ages of all Persons is ${averageAges}`;
  pappie.appendChild(pippie2);
};

let Jason = {'Jason': 23};
let Jennifer = {'Jennifer': 27};
let Mary = {'Mary': 21};
let Luke = {'Luke': 30};
let Josh = {'Josh': 33};
let Danny = {'Danny': 25};
getAverageAge(Jason, Jennifer, Mary, Luke, Josh, Danny);
