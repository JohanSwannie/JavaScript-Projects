// Pig Latin - - If a word begins with a consonant, take the first consonant or
// consonant cluster, move it to the end of the word, and add ay to it. If a word begins with a
// vowel, just add way at the end.

function translatePigLatin(str) {
  let vowels = ['a', 'A', 'e', 'E', 'o', 'O', 'i', 'I', 'u', 'U']
  let buildW = ''
  let cntr = 0
  let arr = str.split('')
  if (vowels.includes(arr[0])) {
    arr.push('way')
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (vowels.includes(arr[i])) {
        break
      } else {
        buildW += arr[i]
        cntr++
      }
    }
    buildW += 'ay'
    arr.splice(0, cntr)
    arr.push(buildW)
  }
  str = arr.join('')
  return str;  
}

console.log(translatePigLatin("crwqonsonant"));
