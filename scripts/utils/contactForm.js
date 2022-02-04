/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import { trapInsideModal } from './trapFocusModal.js';

const modal = document.getElementById('contact_modal');
const openModal = document.getElementById('contactForm');
const closeModal = document.getElementById('CloseForm');
const inputs = document.getElementById('Inputs');
const errorEmail = document.getElementById('errorEmail');

const focusableElements = 'input, button, textarea, [id="CloseForm"]';
const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

// Open form's modal on click
openModal.addEventListener('click', () => {
  modal.style.display = 'block';
  firstFocusableElement.focus();
  trapInsideModal(modal, firstFocusableElement, focusableElements);
});
// Close form's modal on click
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

const infoContact = {
  firstname: '',
  lastname: '',
  mail: '',
  message: '',
};

// get input value when on change and put it in infoContact object
inputs.addEventListener('change', (e) => {
  switch (e.target.name) {
    case 'Firstname':
      infoContact.firstname = e.target.value;
      break;
    case 'Lastname':
      infoContact.lastname = e.target.value;
      break;
    case 'Email':
      infoContact.mail = e.target.value;
      break;
    case 'Message':
      infoContact.message = e.target.value;
      break;
    default:
      console.log('no informations');
  }
});

// check if email is valid or not
const validateEmail = () => {
  // eslint-disable-next-line no-useless-escape
  const validEmailAdress = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = document.getElementById('Email');
  if (validEmailAdress.test(email.value.toLowerCase())) {
    return true;
  }
  return false;
};

// Send data on click
const submitButton = document.getElementById('Submit');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  validateEmail();
  if (validateEmail() === true) {
    console.log('info', infoContact);
    if (errorEmail.classList.value !== 'hidden') {
      errorEmail.classList.add('hidden');
    }
  } else {
    console.log('wrong email');
    errorEmail.classList.remove('hidden');
  }
});
