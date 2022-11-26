// Reverse an string, then make it lowercase and then make the first letter of every word uppercase

function reverseHomPappie(str) {
  let str2 =  str.trim().split('').reverse().join('').toLowerCase()
  let array1 = str2.split(' ')
  let array2 = []
  for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i].slice(array1[i][0], array1[i].length - 1))
   }
   let strReplacer = ''
   for (let j = 0; j < array2.length; j++) {
     strReplacer = array2[j]
     strReplacer += array1[j].charAt(array1[j].length - 1).toUpperCase()
     array2.splice(j, 1, strReplacer)
     strReplacer = ''
   }
   let str3 = array2.join(' ')
   return str3
 }

console.log('Hier is dit  ' + reverseHomPappie('jaNNie se tAnnie'))
