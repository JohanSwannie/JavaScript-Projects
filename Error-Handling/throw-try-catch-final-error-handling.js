const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');

function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw  ("This will not work out well Mate");
  } else {
    throw  ("Absolutely SpotOn Mate - and the result is " + (width * height));
  }
}

try {
  getRectArea(12, '13');
} catch (e) {
  p1.innerHTML = e;
}

function nameEvaluation(name) {
  if (name[0] === 'A') {
    throw 'This name is one of the first in the Alphabet due to the letter ' + name[0];
  } else {
    throw 'This name is further down the alphabet due to the letter ' + name[0];
  }
}

try {
  nameEvaluation('Gansie');
} catch (e) {
  p2.innerHTML = e;
}


function stringLengthEvaluation(string) {
  if (string.length > 40) {
    throw "The string is very long and comprise of " + string.length + " characters";
  } else if (string.length > 32) {
    throw "The string is long and comprise of " + string.length + " characters";
  } else if (string.length > 20) {
    throw "The string is of medium length and comprise of " + string.length + " characters";
  } else if (string.length > 10) {
    throw "String is of normal length and comprise of " + string.length + " characters";
  } else {
    throw "This is a short string of " + string.length + " characters";
  }
}

try {
  stringLengthEvaluation('Peter Peter Pumpkin Eater jump over the Moon');
} catch (e) {
  p3.innerHTML = e;
} finally {
  p4.innerHTML = "All Evaluations now Completed";
}
