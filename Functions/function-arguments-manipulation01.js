// Arguments Optional - Create a function that sums two arguments together. If only one
// argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether() {
  const allArgs = Array.from(arguments)
  var a = allArgs[0];
  var b = allArgs[1];
  if (allArgs.length === 2 && typeof(a) === 'number' && typeof(b) === 'number') {
    return a + b;
  } else if (arguments.length === 1 && typeof(a) === 'number') {
    let x;
    x = function(e) {
      while (typeof(e) === 'number') {
        return a + e;
      }
    };
    return x;
  } else
    return undefined;
}
console.log(addTogether(2));
