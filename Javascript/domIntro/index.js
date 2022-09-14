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
 <div>
 <ul>
 <li>Smokes a lot of trees</li>
 </ul>
 </div>
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
