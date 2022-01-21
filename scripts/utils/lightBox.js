/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */
import { displayImageLightBox, displayVideoLightBox } from './functions.js';

const lightBox = document.getElementById('LightBox');
const carousel = document.getElementById('Carousel');
let currentIndex = 0;

function openLightBox() {
  const images = document.querySelectorAll('.box-image');
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
  carousel.removeChild(carousel.lastElementChild);
  lightBox.classList.add('hidden');
});

function getSrcVideo(mediaIndex) {
  const videoSrc = mediaIndex.querySelector('video').firstElementChild.src;
  const videoAlt = mediaIndex.querySelector('video').firstElementChild.getAttribute('alt');
  carousel.insertAdjacentHTML('beforeend', displayVideoLightBox(videoSrc, videoAlt));
}

function getSrcImage(mediaIndex) {
  const imgSrc = mediaIndex.querySelector('img').src;
  const imgAlt = mediaIndex.querySelector('img').alt;
  carousel.insertAdjacentHTML('beforeend', displayImageLightBox(imgSrc, imgAlt));
}

function slideImage() {
  document.getElementById('btnPrevious').addEventListener('click', () => {
    const medias = document.querySelectorAll('.box-image');
    carousel.removeChild(carousel.lastElementChild);
    if (medias[currentIndex] === medias[0] && medias[medias.length - 1].firstElementChild.tagName === 'VIDEO') {
      getSrcVideo(medias[medias.length - 1]);
      currentIndex = medias.length - 1;
    } else if (medias[currentIndex] === medias[0] && medias[medias.length - 1].firstElementChild.tagName === 'IMG') {
      getSrcImage(medias[medias.length - 1]);
      currentIndex = medias.length - 1;
    } else if (medias[currentIndex - 1].firstElementChild.tagName === 'VIDEO') {
      getSrcVideo(medias[currentIndex - 1]);
      currentIndex -= 1;
    } else {
      getSrcImage(medias[currentIndex - 1]);
      currentIndex -= 1;
    }
  });
  document.getElementById('btnNext').addEventListener('click', () => {
    const medias = document.querySelectorAll('.box-image');
    carousel.removeChild(carousel.lastElementChild);
    if (medias[currentIndex] === medias[medias.length - 1] && medias[0].firstElementChild.tagName === 'VIDEO') {
      getSrcVideo(medias[0]);
      currentIndex = 0;
    } else if (medias[currentIndex] === medias[medias.length - 1] && medias[0].firstElementChild.tagName === 'IMG') {
      getSrcImage(medias[0]);
      currentIndex = 0;
    } else if (medias[currentIndex + 1].firstElementChild.tagName === 'VIDEO') {
      getSrcVideo(medias[currentIndex + 1]);
      currentIndex += 1;
    } else {
      getSrcImage(medias[currentIndex + 1]);
      currentIndex += 1;
    }
  });
}
export { openLightBox, slideImage };
