const availableProducts = getAvailableProducts();
renderProducts(availableProducts);
console.log(availableProducts);

const body = document.querySelector('body');
const div = document.getElementsByClassName('products')[0];
const resultsDiv = document.getElementsByClassName('results')[0];
const noResultDiv = document.getElementsByClassName('noresult-container')[0];
const resetButton = document.getElementsByClassName('reset-button')[0];
const searchProductsInput = document.getElementsByClassName('search-products')[0];
const serachPriceInput = document.getElementsByClassName('max-price')[0];
const searchButton = document.getElementsByClassName('search-button')[0];
const ul = document.getElementsByClassName('products-list')[0];

function update(element, elementToAdd) {
  element.innerHTML = elementToAdd;
}

function renderProducts(products) {
  products.forEach((product) => {
    const ul = document.getElementsByClassName('products-list')[0];
    const ul2 = document.createElement('ul');
    const titleLi = document.createElement('li');
    const title = document.createElement('h5');
    title.innerHTML = `Product: ${product.name}`;
    titleLi.appendChild(title);
    ul2.appendChild(titleLi);
    const price = document.createElement('li');
    price.innerHTML = `Price: $${product.price}`;
    ul2.appendChild(price);
    const rating = document.createElement('li');
    rating.innerHTML = `Rating: ${product.rating}`;
    ul2.appendChild(rating);
    ul.appendChild(ul2);
  });
}

function showError() {
  update(ul, '');
  update(noResultDiv, '');
  const noResult = document.createElement('h5');
  noResult.innerHTML = `No result`;
  noResultDiv.appendChild(noResult);
}

function resetFilter() {
  update(ul, '');
  update(noResultDiv, '');
  renderProducts(availableProducts);
}

function filterProducts() {
  const inputText = searchProductsInput.value.trim().toLowerCase();
  if (inputText.length > 0) {
    const areProductsExist = availableProducts.some((product) => product.name.toLowerCase().includes(inputText));
    areProductsExist ? renderProducts2(inputText) : showError();
  }
}

function renderProducts2(inputText) {
  update(ul, '');
  update(noResultDiv, '');
  const li = availableProducts
    .filter((product) => product.name.toLowerCase().includes(inputText))
    .map((product) => {
      return `<ul> <li><h5>Product: ${product.name}</h5></li> <li>Price: $${product.price}</li> <li>Rating: ${product.rating}</li> </ul>`;
    })
    .join(' ');
  ul.innerHTML = li;
  console.log(li);
}

function filterPrice() {
  const input2Text = serachPriceInput.value.trim();
  if (input2Text.length > 0) {
    renderPrice(input2Text);
  } 
  else {
    update(ul, '');
    update(noResultDiv, '');
    renderProducts(availableProducts);
  }
}

function renderPrice(price) {
  update(ul, '');
  update(noResultDiv, '');
  const li = availableProducts
    .filter((product) => product.price <= price)
    .map((product) => {
      return `<ul> <li><h5>Product: ${product.name}</h5></li> <li>Price: $${product.price}</li> <li>Rating: ${product.rating}</li> </ul>`;
    })
    .join(' ');
  ul.innerHTML = li;
}

resetButton.onclick = resetFilter;
searchProductsInput.onkeyup = filterProducts;
serachPriceInput.onkeyup = filterPrice;
