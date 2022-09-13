// Array Methods

// Que es un Array ?

// Un Array es un tipo de dato NO-PRIMITIVO
// Deducir que es una aglomeracion de datos primitivos
// Es una coleccion de elementos o datos. Los arrays es guardar data y nosotros usamos esa data para nuestro beneficio, sea pintar, editar o manipular dicha data.

const myProperty = [
  100,
  true,
  "WuTang",
  ["Diego", "Jarko", "Aleix"],
  {
    sport: "skating",
    genre: "rock n roll",
  },
];

//  La posicion de un elemento dentro del array se le conoce como "INDEX".
// Empezamos a contar el index de los array en su posicion inicial que seria el 0

// ES6 - Version Moderna - Declaricion de Arrays
const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
// console.log(salad);

//  Como seleccionar algun elemento especifico del array ?

// Bracket Notation
// console.log(
//   `Selecting an item of the array using bracket Notation: ${salad[4]}`
// );

// Como verificar la longitud del array? - usamos el methodo "Length"
// console.log(salad.length);

// Podemos usar mates y el length para buscar una camobinacion o algun resultado e especifico ?
// const myCoolConstant = salad.length;
// console.log(salad[myCoolConstant - 4]);

// LOOPS
// for
// while
// forEach
// map
// do while
// for in
// for of

const animals = ["dog", "cat", "parrot", "cow", "cheetah", "horse"];

// FOR LOOP
// for (let i = 0; i < animals.length; i++) {
//   //   console.log(animals[i]);
//   console.log("Hello World");
// }

// WHILE LOOP
// let i = 0;
// while (i < animals.length) {
//   console.log(animals[i].toUpperCase());
//   i++;
// }

// forEach()
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
// animals.forEach((animal) => {
//   console.log(animal);
// });

// Map()
//map() creates a new array from calling a function for every array element.
//map() calls a function once for each element in an array.
//map() does not execute the function for empty elements.
//map() does not change the original array.

// const newAnimals = animals.map((estoyPerdido) => {
//   const estoyPerdidoStorage = estoyPerdido;
//   console.log(estoyPerdidoStorage);
//   return estoyPerdidoStorage;
// });

// console.log(newAnimals);

// DO WHILE
// The do...while statements combo defines a code block to be executed once, and repeated as long as a condition is true.
// The do...while is used when you want to run a code block at least one time.
// let index = 0;
// do {
//   console.log(animals[index]);
//   index++;
// } while (index < animals.length);

// FOR OF
//The JavaScript for of statement loops through the values of an iterable object.
//It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists and much more....

// for (marianoHinchaLasPalabaras of animals) {
//     console.log(
//       `Looping an array using a simple for of loop :) ${marianoHinchaLasPalabaras.toUpperCase()}`
//     );

//   const andreu = marianoHinchaLasPalabaras;
//   console.log(andreu);
//   return andreu;
// }

// FOR IN
const animals2 = {
  1: "Dog",
  2: "Cat",
  3: "Parrot",
  4: "Cow",
  5: "Cheetah",
  6: "Horse",
};

// for (let key in animals2) {
//   console.log(animals2[key]);
// }

// MORE ARRAY METHODS

// push()
// The push() method adds new items to the end of an array.
// The push() method changes the length of the array.
// The push() method returns the new length.

salad.push("🍪");
// console.log(salad);

// unshif()
//The unshift() method adds new elements to the beginning of an array.
//The unshift() method overwrites the original array.

salad.unshift("👐");
// console.log(salad);

// pop()
//The pop() method removes (pops) the last element of an array.
//The pop() method changes the original array.
//The pop() method returns the removed element.

salad.pop();

// shift()
//The shift() method removes the first item of an array.
//The shift() method changes the original array.
//The shift() method returns the shifted element.
salad.shift();
console.log(salad);

// slice()
//The slice() method returns selected elements in an array, as a new array.
//The slice() method selects from a given start, up to a (not inclusive) given end.
//The slice() method does not change the original array.

const saladCopy = salad.slice();
console.log(
  `This is a copy of the whole salad array that we have above ${saladCopy}`
);

const saladCopy2 = console.log(`SALAD COPY 2  ${salad.slice(1, 5)}`);

const saladCopy3 = console.log(
  `This is a specified copy of the salad array starting from position 1 and ending in position 5 ${salad.slice(
    0,
    5
  )}`
);

// splice()
// The splice() method can be used to add new items to an array:
// The first parameter (1) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Badalona") define the new elements to be added.
// The splice() method returns an array with the deleted items:

const catalanCities = [
  "Barcelona",
  "Igualada",
  "Puigcerda",
  "Girona",
  "Cassà de la Selva",
];
catalanCities.splice(1, 0, "Badalona");
console.log(catalanCities);

// toString()
//The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(salad.toString());

//join()
//The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
console.log(salad.join(` 👐 `));

// delete ()
// Array elements can be deleted using the JavaScript operator delete.
// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.

const myFavoriteBands = [
  "LEd Zeppelin",
  "The Doors",
  "Lou Reed",
  "Oasis",
  "Los Caballeros del Zodiaco",
];
delete myFavoriteBands[1];
console.log(myFavoriteBands);

// concat();
// This method creates a new array by merging (concatenating) existing arrays
// The concat() method can take any number of array arguments

const spanishTeams = ["Real Madrid", "Fc Barcelona", "Cornella FC"];
const argentianTeams = [
  "Boca Juniors",
  "River Plate",
  "Estudiantes",
  "Newels Old Boys",
];

const qatar2022 = spanishTeams.concat(argentianTeams);
// console.log(`Watar 2022 will consist of the following teams ${qatar2022}`);

const newTeam = qatar2022.concat("Carabobo FC");
console.log(newTeam);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

// sort()
// The sort() method sorts an array alphabetically

const divisas = [
  "U.S Dollar",
  "Euro",
  "Yen",
  "Bolivar",
  "Peso Argentino",
  "Pesetas",
];

const numeros = [10, 50, 400, 300, 2, 4, 89];
console.log(numeros.sort());

// reverse()
// The reverse() method reverses the elements in an array.
console.log(divisas.reverse());
console.log(divisas.sort().reverse());
// You can use it to sort an array in descending order:

// DESTRUCTURACION DE ELEMENTOS VIA JS
// NEW School approach -  ES6
let [tomatoes, mushroom, broccoli] = ["🍅", "🍄", "🥦"];

console.log(tomatoes);
console.log(mushroom);
console.log(broccoli);

// OLD School approach - prios ES6
let vegetables = ["🍅", "🍄", "🥦"];
console.log(vegetables[2]);

//Usando destructuracion - vamos a asignar algun valor cualquiera a una variable
// let output = ["🍅", "🍄"] -- OUTPUT SIN USAR Destructuring

let [tomate, champiñon = "🍄"] = ["🍅"];
console.log(`Using destructuring and adding an element to the array ${tomate}`);

let [city, favoriteSport = "Futbol"] = ["puigcerda"];

console.log(favoriteSport);

// NESTED ARRAYS  - ARRAYS ANIDADOS
// En js podemos tener arrays anidados, esto significa que podemos tener n array dentro de un array, este tipo de anidacion es infinita.
let fruits = ["🍈", "🍍", "🍌", "🍉", ["🍅", "🍄", "🥕"]];

console.log(`Using a short way ${fruits[4][1]}`);

// SPREAD OPERATOR
// spreadOperator def: El operador spread(...) nos deja crear una copia de nuestro array o objeto rapidamente

const westCoastRappers = ["SnopDogg", "J Cole", "Kendrick Lamar"];

// copiando using el spread operator
const newRappersArray = [...westCoastRappers];
console.log(newRappersArray);

//Usando el spread con variables dentro de objetos
const myFavoriteMusic = {
  rock: "Soda Stereo",
  classical: "Stravinsky",
  hipHop: "A tribe called quest",
};
const myCopyOfFavoriteMusic = { ...myFavoriteMusic };
console.log(myCopyOfFavoriteMusic);
