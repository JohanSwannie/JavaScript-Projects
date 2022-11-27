let obj1 = {
  year: 2017,
  month: 'October',
  day: 18,
  hour: 1,
  minutes: 23,
  seconds: 12
};

function callFunc(a, b, c, d, e, f) {
  this.year += a;
  this.month = b;
  this.day += c;
  this.hour += d;
  this.minutes += e;
  this.seconds += f;
  for (var value in obj1) {
    if (obj1.hasOwnProperty(value)) {
      const pippie = document.createElement('p');
      pippie.innerHTML = `The ${value} is now ${obj1[value]}`;
      pappie.appendChild(pippie);
    }
  }
}

const pappie = document.querySelector('.container');

callFunc.call(obj1, 5, 'November', 9, 5, 22, 19);
