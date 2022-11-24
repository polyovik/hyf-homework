console.log('Script loaded');

const products = getAvailableProducts();
console.log(products);

const body = document.querySelector('body');
const div = document.getElementsByClassName('products')[0];
const resultsDiv = document.getElementsByClassName('results')[0];
const input = document.querySelector('input');
const searchButton = document.getElementsByClassName('search-button')[0];
const ul = document.getElementsByClassName('products-list')[0];

function update(element, elementToAdd) {
  element.innerHTML = elementToAdd;
}

function renderProducts(products) {
  products.forEach((product) => {
    const title = document.createElement('h5');
    title.innerHTML = `Product: ${product.name}`;
    ul.appendChild(title);
    const price = document.createElement('li');
    price.innerHTML = `Price: $${product.price}`;
    ul.appendChild(price);
    const rating = document.createElement('li');
    rating.innerHTML = `Rating: ${product.rating}`;
    ul.appendChild(rating);
  });
}



const availableProduct = getAvailableProducts();
renderProducts(availableProduct);
console.log(availableProduct);
