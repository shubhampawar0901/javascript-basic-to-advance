// Create regex for password with the following validations.

// Length of password at least of 8 characters

// contain at least one special character

// contain at least one alphabet (a-z) character

let form = document.querySelector('.testForm');

let inputPassword = document.querySelector('.inputPass');

let requiredPasswordPattern = /^(?=.*[a-zA-Z])(?=.*^[a-zA-Z0-9]).{8}$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let password = inputPassword.value;

  let result = requiredPasswordPattern.test(password);

  if (result == true) {
    console.log('Your password validated successfully');
  } else {
    console.log('try again with new password');
  }
});