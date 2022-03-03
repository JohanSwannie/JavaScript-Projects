// from a passed array and list of values, remove those values from the array

function destroyer(arr) {
  const allArguments = Array.from(arguments);
  console.log(allArguments)
  let checkList = allArguments.slice(1);
  return allArguments[0].filter(item => !checkList.includes(item));
}

console.log(destroyer([1, 2, 3, 4, 'Yes', true, 1, 2, 3], 2, 3, 'No', true));
