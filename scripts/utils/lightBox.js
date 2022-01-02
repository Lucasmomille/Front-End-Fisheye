/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
const lightBox = document.getElementById('LightBox');
const lightBoxImg = document.getElementById('LightBoxImg');

function openLightBox(image) {
  for (let i = 0; i < image.length; i++) {
    image[i].onclick = function () {
      lightBox.classList.remove('hidden');
      const imgSrc = this.querySelector('img').src;
      lightBoxImg.src = imgSrc;
    };
  }
}

export { openLightBox };
// set src img
// open

// close loghtbox
