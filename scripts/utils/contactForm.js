/* eslint-disable no-unused-vars */
function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
}

function closeLightBox() {
  const lightBox = document.getElementById('LightBox');
  lightBox.classList.add('hidden');
}

// know index of array filter
// if left -1 if right +1
// see what happen if 0 or last
