function sayHello(name, age, location, currentLocation, computer) {
  return `Hola mi nombre es ${name}, tengo ${age} años. 
  Naci en ${location}, pero acutalmente me encuentro viviendo en ${currentLocation} y mi maquina es una hermosa ${computer}
    `;
}
console.log(
  sayHello(
    "Diego Zito",
    "31",
    "Valencia, Venezuela",
    "Barcelona, España, Catalunya",
    "Macbook pro!"
  )
);

// Multiple Returns within a function
function printName(name) {
  if (name.length === 0) {
    return "Please provide a valid name!";
  }
  return `Name is the current ${name}`;
}

console.log(printName("Bogdan"));

// Multiple return inside an object
function getUserInfo(firstName, lastName) {
  const userInfo = {
    firstName: firstName,
    lastName: lastName,
  };
  return userInfo;
}
//  using the return method in order to retrieve the information from the function, if return method is not used you cannot run the function yet, you will get an undefinied printed on your console.

console.log(getUserInfo("Marc", "Gonzalez"));
