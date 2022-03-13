// EXAMPLE 1 - TESTING PART OF A STRING  FOR A SINGLE PATTERN - CASE SENSITIVE
console.log("EXAMPLE 1")
let myString = "Hello, World!";
let myRegex = /Hello/;
let result1 = myRegex.test(myString);
console.log(result1);
console.log("_________________________________________________________________________________________________________")

// EXAMPLE 2 - TESTING PART OF A STRING  FOR MULTIPLE PATTERNS USING THE OR(|) OPERATOR
console.log("EXAMPLE 2")
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result2 = petRegex.test(petString);
console.log(result2);
console.log("_________________________________________________________________________________________________________")

// EXAMPLE 3 - TESTING PART OF A STRING  AND IGNORE CASES USING THE I TAG
console.log("EXAMPLE 3")
let anotherString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result3 = fccRegex.test(anotherString);
console.log(result3);
console.log("_________________________________________________________________________________________________________")

// EXAMPLE 4 - TESTING PART OF A STRING USING THE MATCH METHOD
console.log("EXAMPLE 4")
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result4 = extractStr.match(codingRegex);
console.log(result4);
console.log("_________________________________________________________________________________________________________")

// EXAMPLE 5 - TESTING REPEATS IN A STRING USING THE G TAG - HERE WE ALSO USE THE I TAG FOR CASE INSENSITIVITY
console.log("EXAMPLE 5")
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result5 = twinkleStar.match(starRegex);
console.log(result5);
console.log("_________________________________________________________________________________________________________")

// EXAMPLE 6 - TESTING PATTERNS IN A STRING USING THE WILDCARD PERIOD
console.log("EXAMPLE 6")
let exampleStr = "Let's have fun and run in the sun while eating a bun";
let unRegex = /.un/;
let result6 = unRegex.test(exampleStr);
let result7 = exampleStr.match(unRegex);
console.log(result6);
console.log(result7);
console.log("_________________________________________________________________________________________________________")

// EXAMPLE 7 - TESTING for Match Single Character with Multiple Possibilities USING SQUARE BRACKETS
console.log("EXAMPLE 7")
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result8 = quoteSample.match(vowelRegex);
console.log(result8)
console.log("_________________________________________________________________________________________________________")

// EXAMPLE 8 - TESTING FOR A RANGE OF ALPHABETIC CHARACTERS IN A SET - AND THEN CONCATENATE THEM WITH WHATEVER YOU WANT
console.log("EXAMPLE 8")
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
console.log(catStr.match(bgRegex));
console.log(batStr.match(bgRegex));
console.log(matStr.match(bgRegex));

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result9 = quoteSample2.match(alphabetRegex);
console.log(result9);

// YOU CAN ALSO TEST A RANGE OF NUMBERS USING SQUARE BRACKETS

let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let aRegex = /[2-6]/g;
let result10 = quoteSample3.match(aRegex);
console.log(result10);

// THEN YOU CAN ALSO COMBINE LETTERS AND NUMBERS TOGETHER IN YOUR SEARCH

let quoteSample4 = "Blueberry 3.141592653s are delicious.";
let bRegex = /[h-s2-6]/gi;
let result11 = quoteSample4.match(bRegex);
console.log(result11);
console.log("_________________________________________________________________________________________________________")

// EXAMPLE 9 - USE NEGATED CHARACTER SETS TO EXLUDE CHARACTERS YOU DON'T WANT RO SEARCH FOR BY USING THE CARET CHARACTER (^)
console.log("EXAMPLE 9")
let quoteSample5 = "3 blind mice.";
let cRegex = /[^aeiou0-9]/gi;
let result12 = quoteSample5.match(cRegex);
console.log(result12);
console.log("_________________________________________________________________________________________________________")

// EXAMPLE 10 - USE THE + SIGN TO FIND CONSECUTIVE CHARACTER REPEATS for 1 or more
console.log("EXAMPLE 10")
let difficultSpelling = "Mississippi";
let dRegex = /s+/gi;
let result13 = difficultSpelling.match(dRegex);
console.log(result13);
console.log("_________________________________________________________________________________________________________")

// EXAMPLE 11 - USE THE * SIGN TO FIND CHARACTERS THAT OCCUR ZERO OR MORE TIMES
console.log("EXAMPLE 11")
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));
console.log("_________________________________________________________________________________________________________")

// EXAMPLE 12 - USE THE CARET CHARACTER (^) OUTSIDE SQUARE BRACKETS TO SEARCH FOR A LETTER OR WORD/S IN THE BEGINNING OF A STRING
console.log("EXAMPLE 12")
let rickyAndCal = "Cal and Ricky both like racing.";
let eRegex = /^Cal and/;
let result14 = eRegex.test(rickyAndCal);
console.log(result14);
console.log("_________________________________________________________________________________________________________")

// EXAMPLE 13 - USE THE DOLLAR CHARACTER ($) OUTSIDE SQUARE BRACKETS TO SEARCH FOR A LETTER OR WORD/S AT THE END OF A STRING
console.log("EXAMPLE 13")
let caboose = "The last car on a train is the caboose";
let fRegex = /is the caboose$/;
let result15 = fRegex.test(caboose);
console.log(result15);
console.log("_________________________________________________________________________________________________________")

// EXAMPLE 14A - USE THE SHORTHAND CHARACTER CLASS \w TO COUNT ALL CHARACTERS WITH VALUES A-Z, a-z, 0-9 and underscore
console.log("EXAMPLE 14")
let quoteSample6 = "The five boxing wizards jump 2 times over the 3 bushes.";
let alphabetRegexV2 = /\w/g;
let result16 = quoteSample6.match(alphabetRegexV2).length;
console.log(result16);
// EXAMPLE 14B - USE THE SHORTHAND CHARACTER CLASS \W+ TO COUNT ALL THE WORDS WITH VALUES A-Z, a-z, 0-9 and underscore
let alphabetRegexV2B = /\w+/g;
let result17 = quoteSample6.match(alphabetRegexV2B).length;
console.log(result17);
console.log("_________________________________________________________________________________________________________")

function clearConsole() {
  console.clear()
  console.log(typeof "");
  console.log(typeof 0);
  console.log(typeof []);
  console.log(typeof {});
  // EXAMPLE 15 - USE THE SHORTHAND CHARACTER CLASS \W TO COUNT ALL CHARACTERS EXCEPT FOR VALUES A-Z, a-z, 0-9 and underscore
  console.log("EXAMPLE 15")
  let quoteSample7 = "The five boxing wizards jump quickly.";
  let nonAlphabetRegex = /\W/g;
  let result18 = quoteSample7.match(nonAlphabetRegex).length;
  console.log(result18);
  console.log("_________________________________________________________________________________________________________")

  // EXAMPLE 16 - USE THE SHORTHAND CHARACTER CLASS \d TO COUNT ALL numerical digits
  console.log("EXAMPLE 16")
  let movieName = "2001: A Space Odyssey";
  let numRegex = /\d/g;
  let result19 = movieName.match(numRegex).length;
  console.log(result19);
  console.log("_________________________________________________________________________________________________________")

  // EXAMPLE 17 - USE THE SHORTHAND CHARACTER CLASS \D TO COUNT ALL NON numerical digits
  console.log("EXAMPLE 17")
  let movieName2 = "2001: A Space Odyssey";
  let numRegex2 = /\D/g;
  let result20 = movieName2.match(numRegex2).length;
  console.log(result20);
  console.log("_________________________________________________________________________________________________________")

  // EXAMPLE 18 - USE .*? TO EXCLUDE CHARACTERS IN BETWEEN
  console.log("EXAMPLE 18")
  let movieName3 = "<p>Winter is coming</p>";
  let htmlRegex2 = /<.*?>/;
  let result21 = movieName3.match(htmlRegex2);
  console.log(result21);
  console.log("_________________________________________________________________________________________________________")

  // EXAMPLE 19 - TEST THE ENTRY FOR A USERNAME TAKING INTO CONCIDERATION THE FOLLOWING CRITERIA
  // You need to check all the usernames in a database. Here are some simple rules that users have to
  // follow when creating their username.
  // 1) Usernames can only use alpha-numeric characters.
  // 2) The only numbers in the username have to be at the end. There can be zero or more of them at
  //    the end. Username cannot start with the number.
  // 3) Username letters can be lowercase and uppercase.
  // 4) Usernames have to be at least two characters long. A two-character username can only use
  //    alphabet letters as characters.
  console.log("EXAMPLE 19")
  let username = "JackOfAllTrades";
  let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
  let result22 = userCheck.test(username);
  console.log(result22);
  console.log("_________________________________________________________________________________________________________")

  // EXAMPLE 20 - USE THE SHORTHAND CHARACTERS CLASS \s TO LOOK FOR WHITESPACES BUT ALSO FOR CARRIAGE RETURN, TAB, FORM FEED AND
  // NEW LINE CHARACTERS - CHARACTER CLASS [ \r\t\f\n\v]
  console.log("EXAMPLE 20")
  let sample = "Whitespace is important in separating words";
  let countWhiteSpace = /\s/g;
  let result23 = sample.match(countWhiteSpace);
  console.log(result23);
  console.log("_________________________________________________________________________________________________________")

  // EXAMPLE 21 - USE THE SHORTHAND CHARACTERS CLASS \S TO LOOK FOR ALL CHARACTERS EXCEPT FOR WHITESPACES, CARRIAGE RETURN,
  // TAB, FORM FEED AND NEW LINE CHARACTERS - CHARACTER CLASS [^ \r\t\f\n\v]
  console.log("EXAMPLE 21")
  let sample2 = "Whitespace is important in separating words";
  let countWhiteSpace2 = /\S/g;
  let result24 = sample2.match(countWhiteSpace2);
  console.log(result24);
  console.log("_________________________________________________________________________________________________________")

  // EXAMPLE 22 - USE CURLY BRACKETS TO CHECK THE QUANTITY OF CERTAIN CHARACTERS IN A STRING
  console.log("EXAMPLE 22")
  let ohStr = "halllllllo";
  let ohRegex = /hal{7,10}o/; // Amount of Lower and upper numbers matching
  let result25 = ohRegex.test(ohStr);
  console.log(result25);
  let ohRegex2 = /hal{3,}o/; // Amount of Only the Lower numbers matching
  let result26 = ohRegex2.test(ohStr);
  console.log(result26);
  let ohRegex3 = /hal{7}o/; // Amount of the Exact numbers matching
  let result27 = ohRegex3.test(ohStr);
  console.log(result27);
  console.log("_________________________________________________________________________________________________________")

  // EXAMPLE 23 - checks for zero or one of the preceding element.
  console.log("EXAMPLE 23")
  let favWord = "favorite";
  let favRegex = /favou?r/;
  let result28 = favRegex.test(favWord);
  console.log(result28);
  console.log("_________________________________________________________________________________________________________")

  // EXAMPLE 24 - Test for Positive and Negative Lookahead by using ?=... and ?!...
  console.log("EXAMPLE 24")
  let sampleWord = "astronaut";
  let pwRegex = /(?=.{6})(?=.*\d{2})/;
  let result29 = pwRegex.test(sampleWord);
  console.log(result29);
  console.log("_________________________________________________________________________________________________________")

  // EXAMPLE 25 - Check For Mixed Grouping of Characters
  console.log("EXAMPLE 25")
  let hString = "Eleanor Roosevelt";
  let hRegex = /(Franklin|Eleanor).*Roosevelt/;
  let result30 = hRegex.test(hString);
  console.log(result30);
  console.log("_________________________________________________________________________________________________________")

  // EXAMPLE 26 - Reuse Patterns Using Capture Groups
  console.log("EXAMPLE 26")
  let repeatNum = "42 42 42";
  let reRegex = /^(\d+)\s\1\s\1$/;
  let result31 = reRegex.test(repeatNum);
  console.log(result31);
  console.log("_________________________________________________________________________________________________________")

  // EXAMPLE 27 - Use Capture Groups to Search and Replac
  console.log("EXAMPLE 27")
  let str = "one two three";
  let fixRegex = /(\w+) (\w+) (\w+)/g;
  let replaceText = "$3 $2 $1";
  let result32 = str.replace(fixRegex, replaceText);
  console.log(result32);
  console.log("_________________________________________________________________________________________________________")

  // EXAMPLE 28 - Remove Whitespace from Start and End
  console.log("EXAMPLE 28")
  let hello = "   Hello, World!  ";
  let wsRegex = /^(\s+)(.+[^\s])(\s+)$/;
  let result33 = hello.replace(wsRegex, '$2');
  console.log(result33);
  console.log("_________________________________________________________________________________________________________")
}
