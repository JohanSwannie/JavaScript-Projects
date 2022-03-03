// The DNA strand is missing the pairing element. Take each character, get its pair, and return the
// results as a 2d array. Base pairs are a pair of AT and CG. Match the missing element to the provided
// character. Return the provided character as the first element in each array. For example, for the input
// GCG, return [["G", "C"], ["C","G"], ["G", "C"]] The character and its pair are paired up in an array,
// and all the arrays are grouped into one encapsulating array.

// Solution A

function pairElement1(str) {
  let arr1 = str.split('')
  let arr2 = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === 'A') {
      arr2.push(['A', 'T'])
    } else if (arr1[i] === 'T') {
      arr2.push(['T', 'A'])
    } else if (arr1[i] === 'C') {
      arr2.push(['C', 'G'])
    } else if (arr1[i] === 'G') {
      arr2.push(['G', 'C'])
    }
  }
  return arr2;
}

console.log(pairElement1("ATCGA"));

// Solution B

function pairElement2(str) {
  let arr = str.split('');
  let arr1 = arr.map(item => {
    switch(item) {
      case 'A':
      return ['A', 'T'];
      case 'T':
      return ['T', 'A'];
      case 'C':
      return ['C', 'G'];
      case 'G':
      return ['G', 'C'];
    }
  })
  return arr1;
}

console.log(pairElement2('AATCGGC'));
