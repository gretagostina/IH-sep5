//To simplify, any time a variable is declared outside of a function, it belongs to the global scope and can be accessed (used) in the whole window. If we declare a variable inside the function, then the variable belongs to the functional or local scope.

let myName = "Diego";

console.log(myName);

// Function Level Scoping

// function anything() {
//   let mixedSum = "Hello Ironhackers";
//   return mixedSum;
// }

// Block Level Scoping
// function anything(array) {
//   let mixedSum = "Hello Ironhackers";
//   for (let i = 0; i < array; i++) {
//     let students = "Ironhackers";
//     return students;
//   }
//   return mixedSum;
// }

// console.log(anything());

// function myCoolfunction() {}

// let school = "it sucks";
// const team = "Miami Heat";

// console.log(trifecta);
// console.log(trifecta2);

// let trifecta = "Bogdan, Marc y Andreu ";
// var trifecta2 = "Bogdan, Marc y Andreu ";

// SHADOWING
let a = 1;
let b = 2;

function inner() {
  a = 4; // reassigned
  b = 3; // declared in an inner scope
}

console.log(inner());

console.log(a);
console.log(b);
