'use strict';

const BASE_URL_CRUD_API2 = `https://crudcrud.com/api/${API_KEY_CRUD_API}`;

let user = null;

const loginButton = document.getElementsByClassName('login-button')[0];
const password = document.getElementsByClassName('password')[0];
const email = document.getElementsByClassName('email')[0];

const signInButton = document.getElementsByClassName('sign-in-button')[0];
const newPassword = document.getElementsByClassName('new-password')[0];
const newEmail = document.getElementsByClassName('new-email')[0];

const screenshotSection = document.getElementsByClassName('screenshot-section')[0];
const signSection = document.getElementsByClassName('sign-section')[0];

const saveUser = () => {
  const newUser = {
    password: newPassword.value,
    email: newEmail.value,
  };
  createUser(newUser);
  alert('user created');
};

const createUser = (newUser) => {
  return fetch(`${BASE_URL_CRUD_API2}/users`, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const getAllUsers = async () => {
  const response = await fetch(`${BASE_URL_CRUD_API2}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

/**
 *
 * @returns {Promise <object | undefined>}
 */
const checkIfUserExists = async () => {
  const allUsers = await getAllUsers();
  const foundUser = allUsers.find((user) => {
    return email.value === user.email;
  });

  return foundUser;
};

/**
 /* If the email and password matches the one user we created 
    we show the applications else we show an error message. 
 * @param {object} user 
 * @returns {boolean}
 */
const checkPassword = (user) => {
  return user.password === password.value;
};

const startLogin = async () => {
  const foundUser = await checkIfUserExists();
  if (foundUser === undefined) {
    alert('user not found');
    return;
  }

  const isPasswordValid = checkPassword(foundUser)

  if (isPasswordValid === false) {
    alert('password is not valid');
    return
  }

  user = foundUser

  signSection.style.display = 'none';
  screenshotSection.style.display = 'block';
  
};



signInButton.onclick = saveUser;
loginButton.onclick = startLogin;
