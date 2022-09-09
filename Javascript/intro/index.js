// console.log("Nico es un crack! pero me gusta mas el portuges de brazil!");

// Data types in JS

// Tenemos 2 tipos de datos en este tipo de lenguaje

// Tenemos Datos primitivos y no primitivos. En pocas palabras los datos primitivos representan un valor y los datos no primitivos los podemos entender como composiciones de datos primitivos, que vendrian siendo lo que en JS llamamos "OBJETOS o ARRAYS"

// Segun MDN los datos primitivos son tipos de datos que no estan compuestos por un objeto, array y no tenga algun metodo.

// En JS tenemos estos 6 tipos de datos primitivos:

//     - numeros
//     - strings
//     - Booleanos
//     - null
//     - undefined
//     - symbolos(añadidos en el 2015 con la actualizacion del ECMA)

//  Aunque ustedes no sepan que significa inmutable, tengo que hacer un emfasis en esta palabra en relacion a estos tiposDeDatos que tenemos en JS.Ya que al ser inmutables, no pueden ser alterados.

// Numeros como dataTypes
// const age = 31;
// const price = 12.99;
// const age = 31 - se representan "integers"
// const price = 12.99 - se representan "floating points"

// Tenemos otra asignacion de dataTypes con los numeros que se llama = NaN - "Not a Number"

const aGoodHipHopGroup = "The Wu Tang Clan";
const whosThis = aGoodHipHopGroup / 2;
// console.log(whosThis);

// NUMBERS
// Expresiones Numericas
// Operadores matematicos :) - back 2 basics en el colegio :)

// + addition
// - subtraction
// * multiplication
// / division
// ** exponencial - avanzado
// console.log(4 + 4);
// console.log(4 - 4);
// console.log(4 * 4);
// console.log(4 / 4);
// console.log(4 ** 4);
// console.log(4 % 2);

// Operadores numericos de asignacion
let aleixsAge = 25;
// Manera sin operador de asignacion
const aleixsNewAge = aleixsAge + 1;
// Manera con operador de asignacion
aleixsAge += 1;

// console.log(aleixsNewAge);
// console.log(aleixsAge);

// STRINGS
// Operaciones con Strings
// Ya sabemos que los strings son caracteres que conforman o palabras, oraciones badicamente puede ser entendible como texto.

// const diego = "Wu Tang Connoisseur";
// console.log("Diego es un");

// Arrays
// Ya sabemos que los arrays basicamente son contenedores de tipos de datos primitivos

// const diegosBio = ["Venezuela", 31, true, "Me encanta tocar guitarra"];
// console.log(diegosBio);

// Template Literals

// templateLiterals sin mas ni menoss, nos dejan embediar expressiones dentro de nuestro codigo.
const diego = "Wu Tang Connoisseur";
// console.log(`Diego es un ${diego}`);

const aGreatSingerWhoDiedtooYoung = "Jim Morrison";
// console.log(
//   `${aGreatSingerWhoDiedtooYoung} was an mazing singer belonging to the band the doors and unfortunately he died and a young age of ${
//     28 - 1
//   } years`
// );

// Objetos
// Concepto segun MDN:
// Los objetos en JavaScript, como en tantos otros lenguajes de programación, se pueden comparar con objetos de la vida real. El concepto de Objetos en JavaScript se puede entender con objetos tangibles de la vida real.

// En JavaScript, un objeto es un entidad independiente con propiedades y tipos. Compáralo con una taza, por ejemplo. Una taza es un objeto con propiedades. Una taza tiene un color, un diseño, un peso, un material del que está hecha, etc. Del mismo modo, los objetos de JavaScript pueden tener propiedades que definan sus características

const myFavoriteMusicalGroups = {
  rockNRoll: "Led Zeppelin",
  hipHop: "A Tribe Called Quest",
  electronic: "Moby",
  spanishMusic: "Joaquin Sabina",
};

console.log(
  `${myFavoriteMusicalGroups.rockNRoll} is the greatest rock n roll band of all times`
);

const rockArgentino = `
1. Seru giran
2. Sui Generis 
3. Fito Paez 
4. Pappos Blues
5. Soda Stereo
6. Charly Garcia
7. Luis Ablerto Spinneta
8. Patricio Rey, y los reconditos de ricotta
9. Billy Bond y la pesada del rock 
`;
console.log(rockArgentino);

const catalunya = {
  comida: ["Calçots", "Kebabs", "cervezaBeer"],
  atletas: ["xavi", "busquets", "messi"],
  capital: "Barcelona",
};

// CONDITIONALS

// Operadores de comparación
// > --mayor que
// < --menor que
//   >= --mayor o igual que
//   <= --menor o igual que
//   == --si el valor es igual
//   === tiene que ser el mismo valor no puede haber ningun tipo de variacion.
// != -- lo que no sea / lo opuesto

console.log(catalunya.comida[0]);

// const movieDiscountAge = parseInt(
//   prompt(
//     "Yo yo yo, welcome to my dope movie theather! Please tell me your age!"
//   )
// );
// if (movieDiscountAge <= 14) {
//   console.log("Ostia, usted tiene un descuento de niños!");
// } else if (movieDiscountAge >= 65) {
//   console.log(
//     "Señ@r, usted esta muy viejo pa esto, pero se merece su descuento :)"
//   );
// } else {
//   console.log("Disculpe pero usted no tiene ningun tipo de descuento");
// }

// const drinkingAge = parseInt(
//   prompt("Do you wanna drink something tonight? How old is you? ")
// );
// if (drinkingAge >= 70) {
//   console.log(
//     `Yo yo yo get your drink on tonight oldpPerson but watch out with them drinks!`
//   );
// } else if (drinkingAge >= 18) {
//   console.log(`Yo yo yo get your drink on tonight!`);
// } else if (drinkingAge < 18) {
//   console.log(`Yo yo yo go home youngBlood!`);
// } else {
//   console.log(`Yo party on wayne!`);
// }

// Facil ? esto es facil
// Condionales Adinados

// const number1 = parseInt(prompt("First Number"));
// const number2 = parseInt(prompt("Second Number"));

// if (number1 === number2) {
//   console.log("Yo yo yo, this numbers be equal yo!");
// } else {
//   if (number1 > number2) {
//     console.log("Yo number 1 is definetly bigger than number 2 yo,!");
//   } else {
//     console.log("Yo number 2 is definetly bigger than number 1 yo,!");
//   }
// }

// const characterName = prompt(
//   "Yo tell me your favorite character of GOT aka joc de trons!"
// );
// let house = "";
// if (characterName === "Khal Drogo") {
//   house = "Dothraki Houselhold";
// } else if (characterName === "Daenerys") {
//   house = "Targaryen";
// } else if (
//   characterName === "John Snow" ||
//   characterName === "Sansa" ||
//   characterName === "Ned" ||
//   characterName === "Arya" ||
//   characterName === "Rob"
// ) {
//   house = "Stark";
// } else if (
//   characterName === "Cersei" ||
//   characterName === "Jaime" ||
//   characterName === "Tyryon"
// ) {
//   house = "Loj Lannisters!";
// } else {
//   house = "Wu Tang Clan";
// }

// console.log(
//   `Your favorite characters from GOT aka joc de trons is from the house ${house}`
// );

// SWITCH STATEMENTS
// const characterName2 = prompt(
//   "Yo tell me your favorite character of GOT aka joc de trons!"
// );
// let house2 = "";

// switch (characterName2) {
//   case "Khal Drogo":
//     house2 = "Dothraki Houselhold";
//     break;
//   case "Daenerys":
//     house2 = "Targaryen";
//     break;
//   case "John Snow":
//   case "Sansa":
//   case "Ned":
//   case "Arya":
//   case "Rob":
//     house2 = "Stark";
//     break;
//   case "Cersei":
//   case "Jaime":
//   case "Tyryon":
//     house2 = "Loj Lannisters!";
//     break;
//   default:
//     house2 = "Wu Tang Clan";
// }

// console.log(
//   `Your favorite characters from GOT aka joc de trons using a SWITCH Statement is from the house ${house2}`
// );

// LOOPS o BUCLES

// while statement
// let myNumber = 0;
// while (myNumber <= 100) {
//   console.log(myNumber);
//   myNumber++;
// }

// Do- while Statements
// let myAge = 31;
// do {
//   console.log(myAge);
//   myAge--;
// } while (myAge >= -6);

// For Loop

// Decreasing Numbers
// for (let anyNumber = 50; anyNumber >= 0; anyNumber--) {
//   console.log(`The current number being looped is ${anyNumber}`);
// }

// Increasing Numbers
// for (let anyNumber = 0; anyNumber <= 50; anyNumber++) {
//   console.log(`The current number being looped is ${anyNumber}`);
// }

const jarkoLand = "Malaga";
console.log(jarkoLand.length);
