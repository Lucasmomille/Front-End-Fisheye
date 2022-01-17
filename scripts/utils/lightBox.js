/* eslint-disable import/extensions */
/* eslint-disable quotes */
/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import { displayImageLightBox, displayVideoLightBox } from "./functions.js";

const lightBox = document.getElementById('LightBox');
let currentIndex = 0;

function openLightBox(images) {
  const carousel = document.getElementById('Carousel');
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
      lightBox.classList.remove('hidden');
      const imgSrc = this.querySelector('img').src;
      const imgAlt = this.querySelector('img').alt;
      carousel.insertAdjacentHTML('beforeend', displayImageLightBox(imgSrc, imgAlt));
      currentIndex = i;
    };
  }
}

const closeLightBox = document.getElementById('CloseLightBox');

closeLightBox.addEventListener('click', () => {
  const carousel = document.getElementById('Carousel');
  carousel.removeChild(carousel.lastElementChild);
  lightBox.classList.add('hidden');
});

function slideImage(images) {
  const carousel = document.getElementById('Carousel');
  document.getElementById('arrowLeft').addEventListener('click', () => {
    carousel.removeChild(carousel.lastElementChild);
    if (images[currentIndex - 1].firstElementChild.tagName === 'VIDEO') {
      console.log('video it is');
      const videoSrc = images[currentIndex - 1].querySelector('video').firstElementChild.src;
      const videoAlt = images[currentIndex - 1].querySelector('video').firstElementChild.getAttribute('alt');
      carousel.insertAdjacentHTML('beforeend', displayVideoLightBox(videoSrc, videoAlt));
      currentIndex -= 1;
    } else {
      const imgSrc = images[currentIndex - 1].querySelector('img').src;
      const imgAlt = images[currentIndex - 1].querySelector('img').alt;
      carousel.insertAdjacentHTML('beforeend', displayImageLightBox(imgSrc, imgAlt));
      currentIndex -= 1;
    }
  });
  document.getElementById('arrowRight').addEventListener('click', () => {
    carousel.removeChild(carousel.lastElementChild);
    if (images[currentIndex + 1].firstElementChild.tagName === 'VIDEO') {
      console.log('video it is');
      const videoSrc = images[currentIndex + 1].querySelector('video').firstElementChild.src;
      const videoAlt = images[currentIndex + 1].querySelector('video').firstElementChild.getAttribute('alt');
      carousel.insertAdjacentHTML('beforeend', displayVideoLightBox(videoSrc, videoAlt));
      currentIndex += 1;
    } else {
      const imgSrc = images[currentIndex + 1].querySelector('img').src;
      const imgAlt = images[currentIndex + 1].querySelector('img').alt;
      carousel.insertAdjacentHTML('beforeend', displayImageLightBox(imgSrc, imgAlt));
      // console.log('img', images[currentIndex += 1]);
      currentIndex += 1;
    }
  });
}

export { openLightBox, slideImage };
// set src img
// open

// close loghtbox
