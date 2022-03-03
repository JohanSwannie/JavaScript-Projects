// String with random integers(numbers) separated by 1 space - return 2 numbers(highest and lowest) separated by 1 space
// SHORT WAY

function determineLowestHighest(str) {
  let arr1 = str.split(' ')
  arr1.sort((a, b) => a - b)
  let arr2 = []
  arr2.push(arr1[arr1.length - 1])
  arr2.push(arr1[0])
  let str2 = arr2.join(' ').toString()
  return str2
}
let strToPass = '12 38 14 20 19 7 91 16 10 31 15 22 58 3 29 83 77 17 9 33'
console.log(`Determine Highest and Lowest numbers the Short way(${determineLowestHighest(strToPass)}) - `)

// LONG WAY

function determineLowestHighest2(str3) {
  let arr3 = str3.split(' ')
  let arr4 = []
  for (let i = 0; i < arr3.length; i++) {
    arr4.push(parseInt(arr3[i]))
  }
  let arr5 = []
  let highest = 0
  let lowest = 1000
  for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] > highest) {
      highest = arr4[i]
    }
  }
  arr5.push(highest)
  for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] < lowest) {
      lowest = arr4[i]
    }
  }
  arr5.push(lowest)
  let str4 = arr5.join(' ').toString()
  return str4
}
let strToPass2 = '12 38 14 20 19 7 91 16 10 31 15 22 58 3 29 83 77 17 9 33'
console.log(`Determine Highest and Lowest numbers the Long way(${determineLowestHighest2(strToPass2)})`)
