// Use a callback function to return values of calculations from an array

const valuesArray = [8, 10, 5, 18, 13, 27]

let operations = [5, 4, 2, 8, 2]

Array.prototype.valuesFilter = function(cb) {
  let newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i]))
  }
  console.log('new array is [' + newArray + ']')
}

const arithmOperation = valuesArray.valuesFilter(function(item) {
  let passArray = []
  let item2 = item
  for (i = 0; i < operations.length; i++) {
    item2 += operations[i]
  }
  passArray.push(item2)
  let passArray2 = []
  let item3 = item
  for (i = 0; i < operations.length; i++) {
    item3 *= operations[i]
  }
  passArray2.push(item3)
  let passArray3
  passArray3 = passArray.concat(passArray2)
  return passArray3
})
