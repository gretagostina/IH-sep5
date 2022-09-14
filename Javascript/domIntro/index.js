// Verificar que estamos conectados al archivo html ?
console.log("Lets learn about Hip Hop");

// TO GET THE ELEMENTS USING IDS FROM DOM YOU CAN USE "getElementById"
let tupacDiv = document.getElementById("tupac");
console.log(tupacDiv);

// Adding text to any element using js  using innerHTML
tupacDiv.innerHTML =
  "My name is Tupac Shakur and I was born in Compton, California";

// Adding html to any element using innerHTML
let snoopDoggDiv = document.getElementById("snoopDogg");
snoopDoggDiv.innerHTML = `
 <h1>Snoop Dogg</h1>
 <p>Calvin Cordozar Broadus Jr., known professionally as Snoop Dogg, is an American rapper, media personality, and actor. His fame dates to 1992 when he featured on Dr. Dre's debut solo single, "Deep Cover", and then on Dre's debut solo album, The Chronic.</p>
 <img class="samane" src="https://cdns-images.dzcdn.net/images/artist/a423dd42b7394eeacc882be8ac633eee/500x500.jpg" alt="">
`;

// TO GET THE ELEMENTS USING CLASSES FROM DOM YOU CAN USE "getElementByClassName"

let biggieDiv = document.getElementsByClassName("biggie");
console.log(biggieDiv);

// TO GET THE ELEMENTS USING HTML TAGS FROM DOM YOU CAN USE "getElementsByTagName"
let divs = document.getElementsByTagName("div");
console.log(divs);

// To GET ELEMENTS NOT USING A DESCRIPTIVE KEYWORD, WE USE THE querySelector KEYWORD TO SELECT ANYTHING FROM THE DOM.
// IF WE HAVE MORE THAN ONE INSTANCE OF AN ELEMENT, CLASS THIS SELECTOR WILL PICK THE 1ST ELEMENT OR CLASS OF THE INSTANCE.
let biggiesDiv = document.querySelector(".biggie");
console.log(biggiesDiv);

// TO GET ALL OR A LIST OF SPECIFIED ELEMENTS THAT YOU WANT TO POINT TO WE CAN USE THE QUERYSELECTOR "querySelectorAll"

let hipHopDivs = document.querySelectorAll("#tupac, .outkast, .atcq, .biggie");
console.log(hipHopDivs);

// how to get the composition of a class using js
console.log(biggiesDiv.className);
console.log(biggiesDiv.classList);

// Changing classes using js
let atcquest = document.querySelector(".atcq");
atcquest.className = "new-york";

//Changing styles of a specific element
let h1 = document.querySelector("h1");
console.log(h1);
h1.style.color = "red";

let divChange = document.querySelector(".divExample h1");
divChange.textContent = "My class is extremely cold!";

divChange.setAttribute("class", "barcelonaa");
// divChange.style.backgroundColor = "red";

// Selecting specific elements using bracketNotation within DOM manipulation
const titles = document.querySelector(".cityList li");

const even = document.querySelectorAll("li:nth-child(even)");
const odd = document.querySelectorAll("li:nth-child(odd)");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].className = "bg-blue-500";
//   even[i].className = "bg-red-500";
// }

let inputInfo = document.querySelector("input");
inputInfo.value = "En barcelona nos gusta mucho los calçots";
inputInfo.style.width = "300px";
// Transversing Through the DOM - AKA MOVING AROUND THE DOM

let myH1 = document.querySelector("h1");

// parent Node
// console.log(myH1.parentNode);
// myH1.parentNode.style.backgroundColor = "red";
console.log(myH1.parentNode.parentNode);

//parentElement
myH1.parentElement.style.backgroundColor = "#f4f4f4";
console.log(myH1.parentElement.parentElement);

//childNodes
let divTest = document.querySelector(".divTest");
console.log(divTest.childNodes);

//Children
divTest.children[1].style.color = "red";

//FirstChild
console.log(divTest.firstChild);

//FirstElementChild
console.log(divTest.firstElementChild);
divTest.firstElementChild.textContent =
  "Believe in yo god damn self! cause nobody else will!";

//lastChild
console.log(divTest.lastChild);

//lastelementChild
console.log(divTest.lastElementChild);

//nextSibling
let aleix = document.querySelector(".aleix");
console.log(aleix.nextSibling);

//nextElementSibling
aleix.nextElementSibling.style.color = "green";

//previousElementSibling
aleix.previousElementSibling.style.color = "blue";

// .
// .
// .
// .

// CREATING ELEMENTS through DOM

//createElement
// create div
let newDiv = document.createElement("div");
//attach class
newDiv.className = "deLaSoul";
//atttach id
newDiv.id = "bigPun";
// attach an attribute
newDiv.setAttribute("title", "This is a hip hop div");
// create  a text node
const newText = document.createTextNode("I really love hip hop from the 90's");

//Add text to the newly created div through the property apppendChild
newDiv.appendChild(newText);

let divToUse = document.querySelector(".aleix");
let text = document.querySelector(".divText .bogdan");

divToUse.insertBefore(newDiv, text);

// .
// .
// .
// .
// Checking out DOM Properties and Methods
let test = document.querySelector(".barcelona");

// Returns a NamedNodeMap of an element’s attributes
// console.log(test.attributes);

//	Returns a collection of an element’s child nodes (including text and comment nodes)
// console.log(test.childNodes);

//Returns a collection of an element’s child element (excluding text and comment nodes)
// console.log(test.children);

//Returns an array with the class name(s) of an element
// console.log(test.classList);

// Returns the height of an element, including padding
// console.log(test.clientHeight);

//Returns the specified attribute value of an element node
// console.log(test.getAttribute);

//	Returns the specified attribute node
// console.log(test.getAttributeNode);

//Returns the last child node of an element
// console.log(test.lastChild);

// Returns the last child element of an element
// console.log(test.lastElementChild);

// console.dir(document);
