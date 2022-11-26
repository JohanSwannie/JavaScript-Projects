// Declaring Strings

const string1 = "Peter walked down the hill";
const string2 = new String('I am a new string');

// charAt()

let string3 = "The man and the cat sleep";
console.log(string3.charAt(16));
console.log(string3[4]);

// Comparing Strings

let string4 = 'a';
let string5 = 'b';
console.log(`${string4 < string5}`);

// String primitives and String objects

let string6 = 'We are on holiday';
let string7 = new String(string6);

console.log(typeof string6);                 // Logs "string"
console.log(typeof string7);                // Logs "object"

let string8 = '2 + 2';                         // creates a string primitive
let string9 = new String('2 + 2');             // creates a String object
console.log(eval(string8));                   // returns the number 4
console.log(eval(string9));                   // returns the string "2 + 2"

// Convert string object to a string primitive  valueOf

console.log(eval(string9.valueOf()));       // returns the number 4

// Long Literal Strings

let longString1 = "The man walks down to the river to do some fishing." +
" He discovered an old boat against te riverbank." +
" He then descided to look at the boat a bit closer.";
console.log(longString1);
let longstring2 = "We know that it may take a long time before we will be able \
to speak a foreign language well enough to be comfortable with it \
- the reason for that is that all languages have their complexities and difficulties.";
console.log(longstring2);

// Determine the length of a string1

let string10 = "With regards to his legacy - he is a champion bread baker";
console.log(string10.length);

// returns a character in a string at a specified index

let string11 = "John decided to spend the day with his family";
let index1 = 16;
console.log(string11.at(index1));

// Returns a nonnegative integer Number that is the code point value of the UTF-16 encoded code point starting at the specified pos.

const icons = '☃★♲';
console.log(icons.codePointAt(1));

// String Concatenation

// Simple Concatenation Example

let string12 = 'John walk to work everyday ';
let string13 = ', but Mary take the bus.';
let extraText = ' ......... ';

let string14 = string12.concat(string13);
console.log(string14);
let string15 = string12.concat(extraText + string13);
console.log(string15);

// The includes Method

let string16 = "The old man sits on a bench in the beautiful park";
let string17 = "beautiful";

console.log(`The word "${string17}" ${string16.includes(string17) ? `appears` : `does not appear`} in string 16`);

// The endsWith Method - return either true or false

let string18 = 'The good, the bad and the ugly';

console.log(string18.endsWith('ugly', 30));      // 30 indicates the length of the string and is optional

// The startsWith Method - return either true or false

let string18b = 'We ought to know these things';
console.log(string18b.length);

console.log(string18b.startsWith('We o'));

// The indexOf & lastIndexOf Methods

let string19 = 'The lady walks down to the river and then walks to the vineyard';

console.log(`The first place where the word walks appears in string19 is at index ${string19.indexOf('walks')}`);

console.log(`The last place where the word walks appears in string19 is at index ${string19.lastIndexOf('walks')}`);

// The match & matchAll Methods - regular Expressions

let string20 = 'Peter Brown is family of Mary Black';
let regularExpression1 = /[A-Z]/g;
let singleValue = "M";
let showMatches1 = string20.match(regularExpression1);
let showMatches2 = string20.match(singleValue);

console.log(`Mathes1 are : ${showMatches1}`);
console.log(`Mathes2 are : ${showMatches2}`);

let regularExpression2 = /M(a)(ry(\d?))/g;
let string21 = 'Mary1Mary2';

let array1 = [...string21.matchAll(regularExpression2)];

console.log(array1);

// The padEnd Method

let string22 = 'We all need love';
let string23 = 'The only solution for this problem is to live healthy';
console.log(string22.padEnd(31, '-->'));
console.log(string23.padEnd(54, '*'));

// The padStart Method

//Example 1

let string24 = 'He is the man';
console.log(string24.padStart(16, '!'));

// Example 2 with some credit card magic

let string25 = '0012543278907654';
let string26 = string25.slice(-4);
let string27 = string26.padStart(string25.length, '*');
console.log(string27);

// The repeat Method

let string28 = 'Hip Hip Hooray! ';
console.log(`All together now : ${string28.repeat(3)}`);

// The replace Method

// Example 1 - Substring to New Substring - Normal way

let string29 = 'Those who have chosen to run, may now walk - if you have chosen to walk, you may sit now.';

console.log(string29.replace('Those', 'Everyone'));

// Example 2 - Regular Expression(Substring) to New Substring - Normal way

let regularExpression3 = /chosen/gi;
console.log(string29.replace(regularExpression3, 'made the choice'));

//Example 3 -Substring to New Substring via a replacement Function

let string30 = 'When you run, you feel the pain - when you you walk, you feel more comfort.';

function replaceSubstring() {
  return 'experience';
}

console.log(string30.replace('feel', replaceSubstring));

// Example 4 - Regular Expresssion(Substring) to New Substring via a replacement function

let regularExpression4 = /feel/gi;
console.log(string30.replace(regularExpression4, replaceSubstring));

// The replaceAll Method

let string31 = 'When the family returns, he runs and he jumps and he shouts for joy.';
console.log(string31.replaceAll(' he ', ' she '));

// The search Method - will return the index where the specified substring/characters or character was found
// If not found it will return -1

// Example 1
let string32 = 'What shall we do with the drunken sailor, early in the morning/?';

console.log(string32.search('drunken'));

// Example 2 - Search for any character that is not a word character or whitespace
//
let regularExpression5 = /[^\w\s]/g;

console.log(string32.search(regularExpression5));

// The slice Method

let string33 = "The ultimate goal is to achieve success through complete team work and collaboration";

console.log(string33.slice(40));        // Result ==> 'through complete team work and collaboration'
console.log(string33.slice(4, 17));     // Result ==> 'ultimate goal'
console.log(string33.slice(-13));       // Result ==> 'collaboration'
console.log(string33.slice(-27, -18));  // Result ==> 'team work'

// The split Method

let string34 = "We definitely need to step up our efforts";

let subString34 = string34.split(' ');
console.log(subString34[4]);            // Result ==> 'step'

let subCharacter34 = string34.split('');
console.log(subCharacter34[22]);        // Result ==> 's'

// The substring Method

let string35 = 'Yesterday is gone, tomorrow is still ahead';

console.log(string35.substring(19));       // Result ==> 'tomorrow is still ahead'
console.log(string35.substring(0, 9));     // Result ==> 'Yesterday'

// The toLowerCase Method

let string36 = 'The Man and the WOMAN are BOTH now worKING at the SamE COMpany';
console.log(string36.toLowerCase());

// The to UpperCase Method

let string37 = 'Hence the success of the Compnay, we all now Benefit from that';
console.log(string37.toUpperCase());

// The toString Method

let string38 = new String('This is actually an object and not a string');

let string39 = string38.toString();

// The trim method - trim whitespaces from the start and the end of a string

let string40 = "   That's the way to do it    ";
console.log(string40.trim());

// The trimStart Method

let string41 = "    We all need to take some rest";
console.log(string41.trimStart());

// The trimEnd Method

let string42 = "There will be some leave left for you     ";
console.log(string42.trimEnd());

// The valueOf Method - returns the primitive value of a string object

let string43 = new String('Here I am, a string object, but still having a primitive value');
console.log(string43.valueOf());
