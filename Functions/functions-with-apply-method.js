function separateThem() {
  const pippie = document.createElement('p');
  pippie.innerHTML = `${this.name} ${this.surname} is a ${this.age} year old ${this.position}`;
  pappie.appendChild(pippie);
  let total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

const pappie = document.querySelector('.container');

function applyThemAll(sportFigureList, popularArray) {
  for (var i = 0; i < sportFigureList.length; i++) {
    const pippie2 = document.createElement('p');
    pippie2.innerHTML = ' Score out of 100 for this sports figure is ' + separateThem.apply(sportFigureList[i], popularArray[i]);
    pappie.appendChild(pippie2);
  }
}

listOfSportsFigures = [
  {name: 'Lionel', surname: 'Messi', age: 32, position: 'Soccer Player'},
  {name: 'Luke', surname: 'Hoggard', age: 37, position: 'Golf Player'},
  {name: 'Hussain', surname: 'Bolt', age: 33, position: 'Short Distance Athlete'},
  {name: 'Naas', surname: 'Botha', age: 32, position: 'Rugby Player'},
  {name: 'Roger', surname: 'Federer', age: 39, position: 'Tennis Player'},
  {name: 'Bruce', surname: 'Fordyce', age: 32, position: 'Marathon Athlete'}
];

popularityArray = [[5, 19, 8, 34, 31], [4, 16, 8, 30, 31], [3, 15, 8, 32, 31],
                   [1, 13, 8, 34, 29], [4, 10, 8, 31, 25], [5, 21, 2, 29, 27]];


applyThemAll(listOfSportsFigures, popularityArray);
