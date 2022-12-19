// Iterative Solution

function amountOfPermutations1(word1) {
  let total = 1;
  for (var i = 1; i <= word1.length; i++) {
    total *= i;
  }
  return total;
}

const display1 = document.getElementById('iteration');
display1.innerHTML = `The word <b><u>Notification</u></b> has ${amountOfPermutations1('Notification')} permutations`;

// Recursive Solution

function amountOfPermutations2(word2) {
  if (word2.length === 1) {
    return 1;
  }
  return word2.length * amountOfPermutations2(word2.slice(1));
}

const display2 = document.getElementById('recursion');
display2.innerHTML = `The word <b><u>Notification</u></b> has ${amountOfPermutations2('Notification')} permutations`;
