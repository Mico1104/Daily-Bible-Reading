const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');
const title = document.querySelector('.title');
const nameField = document.getElementById('nameField');
const phonenumberField = document.getElementById('phone-numberField');
const inputGroup = document.querySelector('.input-group');

signinBtn.addEventListener('click', () => {
  nameField.style.maxHeight = '0';
  phonenumberField.style.maxHeight = '0';
  title.innerHTML = 'Sign in';
  title.style.marginBottom = '0';
  signupBtn.classList.add('disable');
  signinBtn.classList.remove('disable');
  inputGroup.classList.remove('input-group');
  
});

signupBtn.addEventListener('click', () => {
  nameField.style.maxHeight = '65px';
  phonenumberField.style.maxHeight = '65px';
  title.innerHTML = 'Sign up';
  title.style.marginBottom = '10px';
  signupBtn.classList.remove('disable');
  signinBtn.classList.add('disable');
  inputGroup.classList.add('input-group');
});