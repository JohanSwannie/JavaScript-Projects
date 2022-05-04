// *** MAPS ***

// Create a new map

const tasks = new Map();

// Add properties to the map using set

tasks.set(08.30, 'Pray');
tasks.set(09.00, 'Breakfast');
tasks.set(09.30, 'Go for a walk');
tasks.set(10.30, 'Mow the lawn');
tasks.set(12.00, 'Wash the car');
tasks.set(13.00, 'Lunch');
tasks.set(14.00, 'Buy groceries');
tasks.set(16.30, 'Go to gym');
tasks.set(19.00, 'Dinner');

console.log(tasks);

// Retrieving items from the map using get

let myTaskNoon = tasks.get(12.00);
console.log(`What am I doing at noon - ${myTaskNoon}`);

// Check if an item exists in the map using has

let hasThirteen = tasks.has(13.00);
console.log(`Does my tasks has a time of 13.00 - ${hasThirteen}`);

// Checking the size of the map using size

let taskSize = tasks.size;
console.log(`My daily tasks consist out of ${taskSize} items`);

// Accessing Map via keys and values

let taskKeys = tasks.keys();
let taskOneKey = taskKeys.next().value;
console.log(`The first key of task 1 in my tasks is ${taskOneKey}`);

let taskValues = tasks.values();
let tasksValue1 = taskValues.next().value;
let tasksValue2 = taskValues.next().value;
console.log(`The values of my first task is ${tasksValue1}`);
console.log(`The value of my second task is ${tasksValue2}`);

// Accessing Map via entries (Keys and values together)

let allEntries = tasks.entries();
let entry1 = allEntries.next().value;
console.log(`The second entry on my tasks lists is ${allEntries.next().value}`);

// Iterate over a map using forEach

tasks.forEach((value, key) => {
  console.log(`The key is ${key} and the value is ${value}`);
});

// Deleting items from the map using delete

console.log(`Map length of my tasks before deleting one item is ${tasks.size}`);
console.log(`Did I successfully delete item 3 on my task map - ${tasks.delete(09.30)}`);
console.log(`Map length of my tasks after deleting one item is ${tasks.size}`);

// Clearing all items from the map using Clear

tasks.clear();
console.log(`Map length of my tasks after clearing all items is ${tasks.size}`);

// *** SETS ***

// Create a set

const empIds = new Set();

// Adding items to a set

empIds.add('A91783F')
      .add('A81542F')
      .add('A92376F')
      .add('A81542F')
      .add('A88674F')
      .add('A91032F')
      .add('A87417F');

console.log(empIds);

// Check if an item exists in a set

console.log(`Is the ID "A91783F" present in teh empIds set - ${empIds.has('A91783F')}`);

// Determine the size od a set

console.log(`The size of the empIds set is ${empIds.size}`);

// Iterate over the values of a set using values

let empIdsItems = empIds.values();
console.log(`The first value in empIds is ${empIdsItems.next().value}`);

// Iterate over the values of a set using entries

let empIdsElements = empIds.entries();
console.log(`The first value in empIds is ${empIdsElements.next().value}`);

// Iterate over the values of a set using forEach

empIds.forEach(value => {
  console.log(`The value is ${value}`);
});

// Delete entries from a set

console.log(`The size of the empIds set before deleting an entry is ${empIds.size}`);
empIds.delete('A87417F');
console.log(`The size of the empIds set after deleting an entry is ${empIds.size}`);

// Clearing all entries froma  set

empIds.clear();
console.log(`The size of the empIds set after clearing all entries is ${empIds.size}`);
