// Array Constructor with keyword Array
let staffMembers = new Array(10);                         // 10 items undefined staff members array
let groceryList = new Array('sugar', 'blueberries');     // 2 items defined groceries
console.log('groceryList = ', groceryList);

// Array Constructor with literal notation

let golfScores = [71, 69, 74, 78, 70, 67, 72];          // 7 items defined golf scores
console.log('golfScores = ', golfScores);

// Array Constructor with the from keyword
let scoreDecreaser = Array.from(golfScores, a => a - 3);
console.log('scoreDecreaser = ', scoreDecreaser);
let scoreDecreaser2 = golfScores.reduce((a, b) => a + b, 0);
console.log('scoreDecreaser2 = ', scoreDecreaser2);

// Array Constructor with the of keyword

let carTypes = Array.of('Mazda', 'Ford', 'BMW');        // 3 items defines car types
console.log('carTypes = ', carTypes);

// Array Constructor with copyWithin

let classNumberSequence = [15, 7, 11, 13, 5];
let newClassNumberSequence = classNumberSequence.copyWithin(0, 3, 4);
console.log('newClassNumberSequence = ', newClassNumberSequence);

// Array Constructor with fill

let basterA = [1, 10, 19, 8, 14];
let basterB = [1, 10, 19, 8, 14];
let basterC = [1, 10, 19, 8, 14];
console.log(`basterA is now ${basterA.fill(9)}`);
console.log(`basterA is now ${basterB.fill(9, 3)}`);
console.log(`basterA is now ${basterC.fill(9, 2, 4)}`);

// creates a new array with all sub-array elements concatenated
// into it recursively up to the specified depth

let firstArray = [10, 13, 21, [25, 14]];

console.log('The first array flattened now looks like this - ', firstArray.flat());

const secondArray = [19, 4, 16, [[[22, 33]]]];

console.log('The second array flattened now looks like this - ', secondArray.flat());

// Iterate through the values by using the entries function

let iteratorA = classNumberSequence.entries();
let newArray = [];
for (var i = 0; i < classNumberSequence.length; i++) {
     newArray.push(iteratorA.next().value);
}
console.log(newArray);

// Iterate through the array to determine only the keys

let itemsK = ['Pd', 'Se', 'K7', 'Dt', 'Uv'];
let itemsKey = itemsK.keys();
for (let key of itemsKey) {
  console.log(`The current key is ${key}`);
}

let items2K = [
  { name: 'Jannie',
    age: 23
  },
  { name: 'Peter',
    age: 27
  }
];

for (var i = 0; i < items2K.length; i++) {
  console.log(`the name of the person is ${items2K[i].name}`);
  console.log(`the age of the person is ${items2K[i].age}`);
}

console.log(items2K[0].name);
let items2Key = items2K.keys();
for (let key of items2Key) {
  console.log(`The current key2 is ${key}`);
}

// Iterate through an array to determine the values

let gasesList = ['air', 'helium', 'nitrogen', 'freon', 'hydrogen', 'propane', 'oxygen'];
let gasesListValues = gasesList.values();
for (let item of gasesListValues) {
  console.log(`The current value is ${item}`);
}

// Iterate through the values by using the forEach method

let weatherFigures = [19, 11, 21, 18, 25, 16, 12, 10, 14, 26, 22];
let cntr99 = 0;
weatherFigures.forEach(item => (console.log('weather item is ', item), cntr99 ++));
console.log(`Johannes, die counter is nou ${cntr99}`);
// Iterate through the values of an array by using the for of

let lettersA = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];
let concatterB = '';
let cntr = 0;
for (var item of lettersA) {
    if (cntr === 5) {
      concatterB += ',';
      cntr = 0;
    }
    concatterB += item;
    cntr ++;
}
console.log('concatterB = ' , concatterB);
let lettersB = [];
lettersB = concatterB.split(',');
console.log(`lettersB = ${lettersB} with a length of ${lettersB.length}`);

// Concatenating arrays

let array1 = [12, 18, 23];
let array2 = [19, 10, 7];
let array3 = array1.concat(array2);
console.log(`The items ${array1} and ${array2} are now combined to form ${array3}`);

// Check if every item meets the required criteria - if it does, it will return true else it will return false

let itemA = ['Joe', 'Mary', 'Louis', 'Janette', 'John', 'Sarelseemonster'];
console.log('Is every name a shorter length than 10 - ', itemA.every(item => item.length < 10));

// Check if some items meets the required criteria - if it does, it will return true else it will return false

let testNumbers = [15, 17, 18, 24, 29, 33, 41] ;
console.log(`Is the modulus of some of these numbers eaqual to zero - ${testNumbers.some(numb => numb % 2 === 0)}`);

// Filter values from an array

let footballTeam = ['John', 'Pete', 'Luke', 'Joe', 'Anderson', 'Billy', 'Shaun', 'Nigel',
                    'Barnie', 'Arnie', 'Charles', 'Ernest', 'Fred', 'Oscar', 'Gasby'];
let newFootballTeam = footballTeam.filter(person => person[0] != 'B');
console.log('The new football team members are ', newFootballTeam);

// Sort values with the sort method

let dataEntriesA = [19, 14, 20, 7, 5, 11, 16, 4, 40, 33, 3, 9];
console.log(`The sorted values for dataEntriesA is now ${dataEntriesA.sort((a, b) => a - b)}`);
let dataEntriesB = ['John', 'Mary', 'Louis', 'Deborah', 'Julie', 'Richard'];
console.log(`The sorted values for dataEntriesB is now ${dataEntriesB.sort()}`);

// Changing the current values of an existing array with mapping

let employeeDetails = [
  { name: 'Billy Brown',
    position: 'Network Specialist',
    ages: [33, [[52, 14], 20]]
  },
  { name: 'Gilliam Devonport',
    position: 'Fron-End Developer',
    ages: [27, [[18, 31], 15]]
  },
  { name: 'Lucy Malone',
    position: 'Receptionist',
    ages: [24, [[29, 17], 23]]
  },
  { name: 'John Chapman',
    position: 'CEO',
    ages: [54, [[33, 41], 45]]
  }
];

console.log(`Names and Ages of Employees are ${employeeDetails.map(person => `${person.name} is ${person.ages[1][0][0]} years old `)}`);

let mathExamPoints = [22, 19, 16, 15, 21, 24, 18];
console.log(`The test of 25 points results in the follwing percentages ${mathExamPoints.map(point => (point * 4))}`);
console.log(`The array change now with only values with certain modulus criteria applies ${mathExamPoints.map(point => point % 2 === 0 ? point + 1: point -1)}`);

// Use toLocaleString to return a string that represents the elements of an array

let unconvertedArray = [12, 'hello', true, 'fantastic my friend'];
let convertedString = unconvertedArray.toLocaleString();
console.log(`The converted string now looks like this - ${convertedString}`);

// Use toString method to convert an array to a string

let liquidList = ['water', 'milk', 'gasoline', 'coffee'];
let liquidString = liquidList.toString();
console.log(`The Liquid String is ${liquidString}`);

// Check if an item with a certain value is included in the array

let colorArray = ['red', 'darkgreen', 'palegreen', 'orange', 'yellow', 'crimson', 'navy'];
console.log('Is the color yellow included in the array? - ', colorArray.includes('yellow'));
if (colorArray.includes('crimson')) {
  console.log('Absolutely is crimson part of the array colorArray');
}

// Find a specific first item as a result of of a query in an array

let personNames = ['Jonathan', 'Charlotte', 'Melissa', 'Peter', 'Joe', 'Barnie', 'Lat', 'Luke', 'Nonna'];
console.log('First person with a name shorter than 4 characters is ', personNames.find(person => person.length < 4));

// Check if it is a valid array

let nosenseValue = 8;
console.log('Is scoreDecreaser a valid array -- ' + Array.isArray(scoreDecreaser));
console.log('Is nosenseValue a valid array -- ' + Array.isArray(nosenseValue));

// Display the length of Arrays

console.log('The length of carTypes array is ', carTypes.length);

// Display elements of an array seperately

carTypes.forEach((item , index)=> console.log(`Item ${index + 1} = ${item}`));

// Use findIndex to determine at what index a specific item is

let shirtValues = [75.55, 39.15, 85, 65.25, 99, 75.45, 73, 45, 79.99, 110, 71];
let indexLocation = shirtValues.findIndex(item => item === 79.99);
console.log('The shirt with a value of 79.99 is at index ', indexLocation);

// Use indexOf to determine at what index a specific item is

let itemsX = [12, 10, 29, 21, 17, 33, 14, 11, 20, 36, 3, 26, 40];
let itemToFind = 11;
console.log(`Johannes, the number 11 is at index ${itemsX.indexOf(itemToFind)}`);

// Use lastIndexOf to determine at what last index a specific item is

let listOfItems = ['Shirt', 'Trousers', 'Jersey', 'Socks', 'Shoes', 'Jersey',
                   'Hat', 'Pants', 'Jocks', 'Lases', 'Tie'];
console.log(`The last Jersey in the list is at index ${listOfItems.lastIndexOf('Jersey')}`);

// Use at to find the value of an item at a certain index

let indexN = 0;
for (var i = 0; i < shirtValues.length; i++) {
  console.log(`By using an index of ${indexN}, we find the value of ${shirtValues.at(indexN)}`);
  indexN ++;
}
// Joining elements in an array together in certain ways

let elementsJ = ['Dining Table', 'Office Chair', 'Coffee Table', 'Sofa'];
console.log(`Items in elementsJ joined as the are - ${elementsJ.join()}`);
console.log(`Items in elementsJ joined with nothing in between them - ${elementsJ.join('')}`);
console.log(`Items in elementsJ joined with a hyphen - ${elementsJ.join('-')}`);
console.log(`Items in elementsJ joined neatly - ${elementsJ.join('-')}`);

// Remove an element/item at the end of an array with pop

let animalSpecies = ['cat', 'dog', 'possum', 'antelope', 'elephant', 'hippopotamus', 'crocodile' ];
animalSpecies.pop();
console.log(`Animal species left after popping are ${animalSpecies}`);

// Adding an element or elements to an array with push

let characteristics = ['kind', 'friendly', 'helpful', 'patient'];
characteristics.push('loving');
console.log(`List of all characteristics are now ${characteristics}`);
characteristics.push('peaceful', 'joyful', 'pleasant');
console.log(`List of all characteristics are now ${characteristics}`);

// Using the reduce method to add values together in an array

let profitsApril = [21.99, 118.67, 109.91, 3189.43, 10.05, 615.33, 2107.17];
let initVal = 0;
console.log(`Profits for the month of April 2022 is ${profitsApril.reduce((prevVal, currVal) => prevVal + currVal, initVal)}`);

// The reduceRight() method applies a function against an accumulator and each value of the array
// (from right-to-left) to reduce it to a single value.

let totalList = [[19, 3], [15, 10], [17, 20], [8, 5]];
let newList1 = totalList.reduceRight((accumulator, currVal) => accumulator + currVal, 0);
let newList2 = totalList.reduceRight((accumulator, currVal) => accumulator.concat(currVal));
console.log(newList1);
console.log(newList2);

// Reversing an array

let forwardArray = ['seven', 'eight', 'nine', 'ten'];
let reversedArray = forwardArray.reverse();
console.log('The reversed array is now ', reversedArray);

// Remove the 1st item of an array with shift

let flowerArray = ['Rose', 'Lilly', 'Daisy', 'Tulip', 'Carnation', 'Orchid'];
flowerArray.shift();
console.log('The Flower array now have the following elements ', flowerArray);

// Add an item or items to the beginning of an array with unshift

let solidsList = ['brick', 'wood', 'sand', 'steel', 'rock', 'apple'];
solidsList.unshift('ice', 'butter');
console.log(`The solids List consist of the following items - ${solidsList}`);

// Returns a portion of an array with the slice method

let metalArray = ['iron', 'copper', 'gold', 'nickel', 'zinc'];
let mediumMetalArray = metalArray.slice(1);  // kept all items from index 1 onwards
console.log('The mediumMetallArray items are ', mediumMetalArray);
let smallMetalArray = metalArray.slice(2, 4); //kept all items from index 2 and 3
console.log('The smallMetallArray items are ', smallMetalArray);
let verySmallMetalArray = metalArray.slice(-1); //kept only the item in the last index
console.log('The verySmallMetallArray items are ', verySmallMetalArray);

// Remove and replace or insert items in an array with the splice method

let largeArray1 = ['Pb', 'Cr', 'Ly', 'Wi', 'Ke', 'Mq', 'Yz', 'Hr', 'Ls'];
let largeArray2 = ['Pb', 'Cr', 'Ly', 'Wi', 'Ke', 'Mq', 'Yz', 'Hr', 'Ls'];
let largeArray3 = ['Pb', 'Cr', 'Ly', 'Wi', 'Ke', 'Mq', 'Yz', 'Hr', 'Ls'];
largeArray1.splice(1); // removed all elements from index 1 onwards
console.log('New values in large Array1 is now ', largeArray1);
largeArray2.splice(2, 0, 'Go'); // inserted an item at index 2
console.log('New values in large Array2 is now ', largeArray2);
largeArray3.splice(4, 3, 'Dc'); // replace 3 elements at index 4('Ke', 'Mq', 'Yz') with new item 'Dc'
console.log('New values in large Array3 is now ', largeArray3);


//Looping through objects

const object = {a: 1, b: 2, c: 3};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

Object.entries(object).forEach(
    ([key, value]) => console.log(`The key is ${key} and the value is ${value}`));

// Array Destructuring

let [One, Two, Three] = ['first', 'second', 'third'];
console.log(`The value at the variable called Two, will be '${Two}'`);

let [, , , , , , seven] = ['Peter', 'Jane', 'Dorothy', 'Zack', 'Joe', 'Mary', 'Luke'];
console.log(`The 7th item in the list is '${seven}'`);

let [, , three, , five, six, , , nine] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`The third item in the list is ${three}`);
console.log(`The fifth item in the list is ${five}`);
console.log(`The sixth item in the list is ${six}`);
console.log(`The nineth item in the list is ${nine}`);
