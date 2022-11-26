// Steamroller - Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  var arr2 = [];
  arr.forEach(e => {
    if (Array.isArray(e)) {
      arr2 = arr2.concat(steamrollArray(e));
    } else {
      arr2.push(e);
    }
  });
  return arr2;
}

steamrollArray([
  [1, [2],
    [3, [
      [4]
    ]]
  ]
]);
