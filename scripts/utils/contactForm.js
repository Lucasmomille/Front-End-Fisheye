/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
}

const inputs = document.getElementById('Inputs');
const infoContact = {
  firstname: '',
  lastname: '',
  mail: '',
  message: '',
};

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

const validateEmail = () => {
  // eslint-disable-next-line no-useless-escape
  const validEmailAdress = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = document.getElementById('EmailInput');
  if (validEmailAdress.test(email.value.toLowerCase())) {
    return true;
  }
  return false;
};

const submitButton = document.getElementById('Submit');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  validateEmail();
  if (validateEmail() === true) {
    console.log('info', infoContact);
  } else {
    console.log('wrong email');
  }
});
