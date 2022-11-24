const spiritAnimals = ['cat', 'dog', 'pig', 'shark', 'eagle', 'unicorn', 'goblin'];

const body = document.querySelector('body');
const div = document.getElementById('main-div');
const secondDiv = document.getElementById('second-div');
const input = document.getElementById('input');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const infoDiv = document.getElementById('info-container');
const errorDiv = document.getElementById('error-container');
submitButton.onclick = addText;
resetButton.onclick = toResetText;

function update(element, textToAdd) {
  element.textContent = textToAdd;
}

function addText() {
  const inputText = input.value.trim();
  update(infoDiv, '')
  if (inputText.length === 0 && errorDiv.textContent.length === 0) {
    showError();
  }
  if (inputText.length !== 0) {
    update(errorDiv, '')
    setContent();
  }
}

function showError() {
  const error = document.createElement('h5');
  error.innerHTML = `invalid input`;
  errorDiv.appendChild(error);
}

function setContent() {
  const usersName = document.createElement('h5');
  update(usersName, input.value);
  input.value = '';
  infoDiv.appendChild(usersName);
  generateSpiritAnimal();
}

function toResetText() {
  update(infoDiv, '');
  update(errorDiv, '');
}

function generateSpiritAnimal() {
  const randomAnimal = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
  const text = document.createElement('h5');
  text.innerHTML = `your spirit animal is ${randomAnimal}`;
  infoDiv.appendChild(text);
}
