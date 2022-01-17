/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
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

inputs.addEventListener('change', function (e) {
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

const submitButton = document.getElementById('Submit');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('info', infoContact);
});
