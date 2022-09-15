// ITERATION 1
function updateSubtotal(product) {
  // Steps 1 & 2
  const price = product.querySelector('.price span').innerHTML;
  // podemos usar innerText en ves de usar innerHTML :)
  const quantity = product.querySelector('.quantity input').value;

  //Step 3
  //No precavida
  // const subtotal = price * quantity
  // Precavida
  const subTotal = Number(price * quantity);

  //Step 4
  const subtotalElement = product.querySelector('.subtotal span');

  //Step 5
  subtotalElement.innerText = subTotal;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productList = document.querySelectorAll('.product');

  let total = 0;
  productList.forEach((product) => {
    total += updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here

  // Destructuring the variable and the innertext property on to 2 lines of code
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerText = total;

  // Another apporach more vulnerable for cyberAttacks, read the link.
  // totalValue.innerHTML = total;

  // Without using any type of variable, just pointing directly into the document selector and applying the innerText within the same listenerCount, less visbile(we are using variables to provide a textual reference and to be able to reUse the selector on any other function or event within our code)
  // document.querySelector('#total-value span').innerText = total;
}

// reasons debating why innerHTML is riskier than innerText
// link https://www.educba.com/innertext-vs-innerhtml/

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const removeChild = target.parentNode.parentNode;
  console.log(removeChild);

  const parent = removeChild.parentNode;
  console.log(parent);

  parent.removeChild(removeChild);

  calculateAll();
}

// ITERATION 5

// function createProduct() {
//   //... your code goes here

//   const name = document.querySelectorAll('.create-product input')[0].value;

//   console.log(name);

//   const price = document.querySelectorAll('.create-product input')[1].value;
//   console.log(price);

//   createNewProductRow(name, price);
//   clearInputFields();
// }

// function clearInputFields() {
//   [...document.querySelectorAll('.create-product input')].forEach(
//     (wuTangArgument) => {
//       wuTangArgument.value = '';
//     }
//   );
// }

// function createNewProductRow(name, price) {
//   const cart = document.querySelector('tbody');

//   const trProduct = document.createElement('tr');
//   trProduct.className = 'product';

//   const tdName = document.createElement('td');
//   const nameSpan = document.createElement('span');
//   tdName.className = 'name';
//   nameSpan.innerText = name;
//   tdName.appendChild(nameSpan);

//   const tdPrice = document.createElement('td');
//   tdPrice.className = 'price';
//   tdPrice.innerText = '€';
//   const tdPriceContent = document.createElement('span');
//   tdPriceContent.innerText = price;
//   tdPrice.appendChild(tdPriceContent);

//   const tdQuantity = document.createElement('td');
//   tdQuantity.className = 'quantity';
//   const quantityInput = document.createElement('input');
//   quantityInput.type = 'number';
//   quantityInput.value = 0;
//   quantityInput.placeholder = 'Qauntity';
//   quantityInput.min = 0;
//   tdQuantity.appendChild(quantityInput);

//   const tdSubtotal = document.createElement('td');
//   tdSubtotal.className = 'subtotal';
//   tdSubtotal.innerText = '€';
//   const subtotalSpan = document.createElement('span');
//   subtotalSpan.innerText = 0;
//   tdSubtotal.appendChild(subtotalSpan);

//   const tdAction = document.createElement('td');
//   tdAction.className = 'action';
//   const buttonAction = document.createElement('button');
//   buttonAction.className = 'btn btn-remove';
//   buttonAction.innerText = 'Remove';
//   buttonAction.addEventListener('click', removeProduct);
//   tdAction.appendChild(buttonAction);

//   trProduct.appendChild(tdName);
//   trProduct.appendChild(tdPrice);
//   trProduct.appendChild(tdQuantity);
//   trProduct.appendChild(tdSubtotal);
//   trProduct.appendChild(tdAction);

//   cart.appendChild(trProduct);
// }

// function createProduct() {
//   const productName = document.querySelector('.product-name');
//   const productPrice = document.querySelector('.product-price');

//   const addToList = document.querySelector('tbody');
//   addToList.innerHTML += `
//       <tr class="product">
//       <td class="name">
//         <span>${productName.value}</span>
//       </td>
//       <td class="price">$<span>${productPrice.value}</span></td>
//       <td class="quantity">
//         <input type="number" value="0" min="0" placeholder="Quantity" />
//       </td>
//       <td class="subtotal">$<span>0</span></td>
//       <td class="action">
//         <button class="btn btn-remove">Remove</button>
//       </td>
//     </tr>
//   `;

//   //clearing the input fields
//   productName.value = '';
//   productPrice.value = 0;
// }

// ABDEL's Solution
// function createProduct() {
//   const newName = document.querySelector(
//     '.create-product input[type="text"]'
//   ).value;

//   const newPrice = document.querySelector(
//     '.create-product input[type="number"]'
//   ).value;

//   const parent = document.getElementsByTagName('tbody')[0];

//   const newNameProductRow = document.createElement('tr');
//   newNameProductRow.className = 'product';

//   const rowTemplate = `<td class="name">
//   <span>${newName}</span>
//   </td>
//   <td class="price">$<span>${newPrice}</span></td>
//   <td class="quantity">
//   <input type="number" value="0" min="0" placeholder="Quantity" />
//   </td>
//   <td class="subtotal">$<span>0</span></td>
//   <td class="action">
//   <button class="btn btn-remove">Remove</button>
//   </td>`;

//   parent.appendChild(newNameProductRow);

//   newNameProductRow.innerHTML = rowTemplate;

//   const removeEl = document.getElementsByClassName('btn-remove');
//   for (let i = 0; i < removeEl.length; i++) {
//     removeEl[i].addEventListener('click', removeProduct);
//   }

//   document.querySelector('.create-product input[type="text"]').value = '';
//   document.querySelector('.create-product input[type="number"]').value = 0;
// }

// PABLO'S Solution
function createProduct() {
  let productName = document.querySelector(
    ".create-product input[type='text']"
  );
  let productPrice = document.querySelector(
    ".create-product input[type='number']"
  );
  const table = document.querySelector('tbody');
  if (productPrice.value != '' && productName.value != '') {
    table.innerHTML += `
        <tr class= "product">
            <td class="name">
                <span>${productName.value}</span>
            </td>
            <td class="price">$<span>${productPrice.value}</span></td>
            <td class="quantity">
                <input class="amount" type="number" value="0" min="0" placeholder="Quantity" />
            </td>
            <td class="subtotal">$<span>0</span></td>
            <td class="action">
                <button class="btn btn-remove">Remove</button>
            </td>
        </tr>`;
    removeBtn = document.querySelectorAll('.btn-remove');
    [...removeBtn].map((elem) =>
      elem.addEventListener('click', function (e) {
        removeProduct(e);
      })
    );
    productName.value = '';
    productPrice.value = '';
  } else {
    alert('You must enter a price and a product');
  }
}

// Pablo's Event Listener - Independent of window method below
const createBtn = document.querySelector('#create');
createBtn.addEventListener('click', function (e) {
  createProduct(e);
});

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  // delete product from row
  document.querySelectorAll('.btn-remove').forEach((productButton) => {
    productButton.addEventListener('click', removeProduct);
  });

  // Create Product onto the row
  // document.querySelector('#create').addEventListener('click', createProduct);

  // delete product from row using a variable
  // const removeProductVariable = document.querySelectorAll('btn-remove');
  // removeProductVariable.forEach((productButton) => {
  //   productButton.addEventListener('click'), removeProduct;
  // });

  // reCalulating prices - judit's, Marc's & Juan's
  // const buttonRemove = document.querySelectorAll('.btn-remove');
  // buttonRemove.forEach((button) => {
  //   button.addEventListener('click', removeProduct);
  //   button.addEventListener('click', calculateAll);
  // });

  // ABDEL's Solution
  // const addSingleProduct = document.getElementById('create');
  // addSingleProduct.addEventListener('click', createProduct);
});
