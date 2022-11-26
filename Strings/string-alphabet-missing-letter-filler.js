// String passed has letters in sequence of Alphabet but a letter is missing
// in the sequence. Write a function that detect the missing letter and return it

function fearNotLetter(str) {
  let arr1 = str.split('')
  let alphaBet = 'abcdefghijklmnopqrstuvwxyz'
  let arr2 = alphaBet.split('')
  let slicer1 = arr2.indexOf(arr1[0])
  let slicer2 = slicer1 + arr1.length + 1
  let arr3 = arr2.slice(slicer1, slicer2)
  let missingLetter = undefined
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] !== arr1[i]) {
      missingLetter = arr3[i]
      break
    }
  }

  return missingLetter;
}

console.log(fearNotLetter("klmop"))
