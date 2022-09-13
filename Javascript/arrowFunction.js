// Arrow Functions

// - It provides more concise syntax for writing function expressions by removing the "function" and "return" keywords.It
// - Arrow functions are defined using the fat arrow(=> ) Notification - Unlike ordinary functions, arrow functions do not have their own "this" keyword.
// - The value of this inside an arrow function is always bound to the value of this in the closest on - arrow function.
// - Arroe functons are not hoisted.They must be defined before they are used.

// Example:
// Old School
var sum1 = function (a, b) {
  return a + b;
};
console.log(sum1(2, 3));

//ES6 - New School
const sum2 = (a, b) => {
  console.log(sum2(2, 3));
};

const printName = (name) => {
  console.log(`Name is ${name}.`);
};
printName("Ana");

function printName2(name) {
  return `Name is ${name}.`;
}
console.log("Hello, I am after the return statement.");

printName2("Yo"); // => Name is Yo.
