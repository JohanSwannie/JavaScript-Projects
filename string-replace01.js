// Perform a search and replace on the sentence using the arguments provided
// and return the new sentence. First argument is the sentence to perform the search and
// replace on. Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are
// replacing it. For example if you mean to replace the word Book with the word dog,
// it should be replaced as Dog

function myReplace(str, before, after) {
  let arr = str.split(' ')
  let arr2 = after.split('')
  let indexW = arr.indexOf(before)
  let regexU = /^[A-Z]/
  let caseChange = 'n'
  let afterU
  let newStr
  if (regexU.test(arr[indexW])) {
    afterU = after[0].toUpperCase()
    caseChange = 'y'
  }
  if (regexU.test(after)) {
    afterU = after[0].toLowerCase()
    caseChange = 'y'
  }
  if (caseChange === "y") {
    arr2.shift()
    arr2.unshift(afterU)
    let replStr = arr2.join('')
    newStr = str.replace(before, replStr)
  } else {
    newStr = str.replace(before, after)
  }
  return newStr;
}

console.log(myReplace("A quick brown fox bumped over the lazy dog", "bumped", "Leaped"));
