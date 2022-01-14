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
  const carousel = document.getElementById('Carousel');
  const lightBox = document.getElementById('LightBox');
  carousel.removeChild(carousel.lastChild);
  lightBox.classList.add('hidden');
}
