// parameter1 = array with objects + parameter2 just objects - return all occurences
// of paramters 1 that  have similar key value pairs as parameter2

function whatIsInAName(collection, source) {
  let arr = [];
  let checkKeys = Object.keys(source);
  arr = collection.filter(item => checkKeys.every(key => item.hasOwnProperty(key)  && item[key] === source[key]));
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Juliet" },
                              { first: "Mercutio", last: null },
                              { first: "Tybalt", last: "Capulet", final: 'Oops' }],
                              { last: "Capulet" }));

