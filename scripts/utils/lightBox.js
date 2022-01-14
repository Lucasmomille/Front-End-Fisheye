/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
const lightBox = document.getElementById('LightBox');
const lightBoxImg = document.getElementById('LightBoxImg');
let currentIndex = 0;

function openLightBox(images) {
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
      lightBox.classList.remove('hidden');
      const imgSrc = this.querySelector('img').src;
      const imgAlt = this.querySelector('img').alt;
      lightBoxImg.src = imgSrc;
      lightBoxImg.alt = imgAlt;
      currentIndex = i;
      // console.log('image', image[i + 1]);
    };
  }
}
function slideImage(images) {
  document.getElementById('arrowLeft').addEventListener('click', () => {
    const imgSrc = images[currentIndex - 1].querySelector('img').src;
    const imgAlt = images[currentIndex - 1].querySelector('img').alt;
    lightBoxImg.src = imgSrc;
    lightBoxImg.alt = imgAlt;
    currentIndex -= 1;
  });
  document.getElementById('arrowRight').addEventListener('click', () => {
    const imgSrc = images[currentIndex + 1].querySelector('img').src;
    const imgAlt = images[currentIndex + 1].querySelector('img').alt;
    lightBoxImg.src = imgSrc;
    lightBoxImg.alt = imgAlt;
    // console.log('img', images[currentIndex += 1]);
    currentIndex += 1;
  });
}

export { openLightBox, slideImage };
// set src img
// open

// close loghtbox
