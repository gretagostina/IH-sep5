// String Methods - Class

// Access String Characters
// You can access the characters in a string in two ways.

const marc = "Puigcerda";
// One way is to treat strings as an array. For example,
console.log(marc[4]);

// Another way is to use the method charAt(). For example,
console.log(marc.charAt(5));

// JavaScript Strings are immutable
// In JavaScript, strings are immutable. That means the characters of a string cannot be changed.
let a = "hello";
a = "Hello motto!";
console.log(a);

// JavaScript is Case-Sensitive
// JavaScript is case-sensitive. That means in JavaScript, the lowercase and uppercase letters are treated as different values.

const word1 = "a";
const word2 = "A";
console.log(word1 === word2);

// JavaScript Multiline Strings
// To use a multiline string, you can either use the + operator or the \ operator.
// OLD SCHOOL WAY
const message1 =
  "Este es un mensaje super largo " +
  "Me gusta mucho tocar guitarra " +
  "Aunque a veces me duelan los dedos, vale la pena!";
console.log(message1);

const message2 =
  "Este es un mensaje super largo  Me gusta mucho tocar guitarra  Aunque a veces me duelan los dedos, vale la pena! ";
console.log(message2);

// NEW SCHOOL - ES6 Approach

const rockArgentino = `
 1. Seru giran
 2. Sui Generis
 3. Fito Paez
 4. Pappos Blues
 5. Soda Stereo
 6. Charly Garcia
 7. Luis Ablerto Spinneta
 8. Patricio Rey, y los reconditos de ricotta
 9. Billy B ond y la pesada del rock
 `;
console.log(rockArgentino);

// Length property method
// The length property returns the length of a string
const myName = "Diego Zito";
console.log(myName.length);

// Creating new strings  properties!
const greetings = "Hello Ironhackers!";
const greetings2 = new String("Hello Ironhackers!");

console.log(`${greetings} is the same as ${greetings2}`);

// typeOf Method
console.log(typeof greetings);
console.log(typeof greetings2);
// Note: It is recommended to avoid using string objects. Using string objects slows down the program.

// string() method
// This is a function that is used to convert various data types to strings.
const aleixAge = 25;
console.log(typeof aleixAge);
const aleixAgeAsString = String(aleixAge);
console.log(typeof aleixAgeAsString);

// Escape Character
// You can use the backslash escape character \ to include special characters in a string.
// const jarkoTheMan = '\'Jarko\' is the freaking man! '
const jarkoTheMan = "'Jarko' is the freaking man! ";
console.log(jarkoTheMan);

// \"  - incluye double quote
// \\ - icluye un backslash
// \n - salto de linea
// \r - carriage retrun
// \v - vertical tab
// \t - horisontal tab

// concat() - concat method
const text1 = "I love";
const text2 = "to play";
const text3 = " guitar after a hard day at work";

const resultFromTextWithoutLiterals = text1.concat("", text2, "  ", text3);
console.log(resultFromTextWithoutLiterals);
const resultFromTextUsingLiterals = text1.concat(` ${text2} ${text3}`);
console.log(resultFromTextUsingLiterals);

// toUpperCase()
// The toUpperCase() method converts a string to uppercase letters
// The toUpperCase() method does not change the original string.

let mySuperCoolVenezuelanBand = "los amigos invisibles";
console.log(mySuperCoolVenezuelanBand.toUpperCase());

// toLowerCase()
//The toLowerCase() method converts a string to lowercase letters.
// The toLowerCase() method does not change the original string.
let myFavoriteAtlantaHoipHopGroup = "OUTKAST";
console.log(myFavoriteAtlantaHoipHopGroup.toLowerCase());
console.log(myFavoriteAtlantaHoipHopGroup.toLocaleLowerCase());

// trim();
//The trim() method removes whitespace from both sides of a string.
//The trim() method does not change the original string
const alberto =
  "                    A Alberto le gusta montar patines!          ";
console.log(alberto);
console.log(alberto.trim());

//split()
// The split() method splits a string into an array of substrings.
// The split() method returns the new array.
// The split() method does not change the original string.
let bestDjs = "I think that one of the best dj's currently is MAceo Plex";
const dj = bestDjs.split(" ", 3);
console.log(dj);

// slice()
// Slice String Method
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: the start position, and the end position (end not included).

let myFruits = "Apple, Banana, Kiwi";
let usingSliceMethod = myFruits.slice(7, 13);
// console.log(usingSliceMethod);

// Using Slice with negative values
let str = "Apple, Banana, Kiwi";
let usingSliceMethodWithNegativeValues = str.slice(-12, -6);
let usingSliceWithOnlyOneParamaeter = str.slice(7);
// console.log(usingSliceMethodWithNegativeValues);
// console.log(usingSliceWithOnlyOneParamaeter);

// Using subsTring method
// substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().
let myfruits2 = "Apple, Banana, Kiwi";
let usingSubString = myfruits2.substring(7, 13);
// console.log(usingSubString);

// substr() - Method
// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.
let stringStr = "Apple, Banana, Kiwi";
let usingSubstr = stringStr.substr(7, 6);
// console.log(usingSubstr);

// replace()
// The replace() method replaces a specified value with another value in a string
const spanishBands =
  "I really love listening to amazing spanish & amazing catalan music!";
let newSpanishBandsWithReplace = spanishBands.replace("amazing", "Wonderful");
console.log(spanishBands);
console.log(newSpanishBandsWithReplace);
