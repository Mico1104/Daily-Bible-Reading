let signinBtn = document.getElementById('signinBtn');
let signupBtn = document.getElementById('signupBtn');
let title = document.querySelector('.title');
let nameField = document.getElementById('nameField');
let phonenumberField = document.getElementById('phone-numberField');

signinBtn.addEventListener('click', () => {
  nameField.style.maxHeight = '0';
  phone-numberField.style.maxHeight = '0';
  title.innerHTML = 'Sign in';
});
