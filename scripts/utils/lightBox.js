import { displayImageLightBox, displayVideoLightBox } from './functions.js';
import { trapInsideModal } from './trapFocusModal.js';
/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */

const lightBox = document.getElementById('LightBox');
const carousel = document.getElementById('Carousel');
const closeLightBox = document.getElementById('CloseLightBox');
let currentIndex = 0;

function openLightBox() { // open lightbox on click
  const images = document.querySelectorAll('.box-image');
  const focusableElements = '[tabindex]:not([tabindex="-1"])';
  const firstFocusableElement = carousel.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

  for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
      lightBox.classList.remove('hidden');
      firstFocusableElement.focus();
      trapInsideModal(carousel, firstFocusableElement, focusableElements); // trap the focus inside modal
      // if video
      if (this.firstElementChild.tagName === 'VIDEO') {
        const videoSrc = this.querySelector('video').firstElementChild.src;
        const videoAlt = this.querySelector('video').firstElementChild.getAttribute('alt');
        carousel.insertAdjacentHTML('beforeend', displayVideoLightBox(videoSrc, videoAlt)); // if video dispatch video's function
      } else {
        const imgSrc = this.querySelector('img').src;
        const imgAlt = this.querySelector('img').alt;
        carousel.insertAdjacentHTML('beforeend', displayImageLightBox(imgSrc, imgAlt));// if image dispatch image's function
      }
      currentIndex = i;
    };
  }
}

closeLightBox.addEventListener('click', () => { // close lightbox on click
  carousel.removeChild(carousel.lastElementChild);
  lightBox.classList.add('hidden');
});

function getSrcVideo(mediaIndex) { // get the src attribute of video on html page to put it in lightbox
  const videoSrc = mediaIndex.querySelector('video').firstElementChild.src;
  const videoAlt = mediaIndex.querySelector('video').firstElementChild.getAttribute('alt');
  carousel.insertAdjacentHTML('beforeend', displayVideoLightBox(videoSrc, videoAlt));
}

function getSrcImage(mediaIndex) { // get the src attribute of image on html page to put it in lightbox
  const imgSrc = mediaIndex.querySelector('img').src;
  const imgAlt = mediaIndex.querySelector('img').alt;
  carousel.insertAdjacentHTML('beforeend', displayImageLightBox(imgSrc, imgAlt));
}
function previousMedia(medias) { // get the previous media in the same order of photographer's page
  carousel.removeChild(carousel.lastElementChild);
  // if first media is reach and previous one is video
  if (medias[currentIndex] === medias[0] && medias[medias.length - 1].firstElementChild.tagName === 'VIDEO') {
    getSrcVideo(medias[medias.length - 1]);
    currentIndex = medias.length - 1;
  // if first media is reach and previous one is image
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
}

function nextMedia(medias) { // get the next media in the same order of photographer's page
  carousel.removeChild(carousel.lastElementChild);
  // if last media is reach and next one is video
  if (medias[currentIndex] === medias[medias.length - 1] && medias[0].firstElementChild.tagName === 'VIDEO') {
    getSrcVideo(medias[0]);
    currentIndex = 0;
  // if last media is reach and next one is image
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
}
function slideImage() { // dispatch previous and next media's function on click or on keyup
  const medias = document.querySelectorAll('.box-image');
  const arrowLeft = document.getElementById('btnPrevious');
  const arrowRight = document.getElementById('btnNext');

  // move to previous media
  arrowLeft.addEventListener('click', () => {
    previousMedia(medias);
  });
  document.addEventListener('keyup', (e) => {
    const isLeftArrow = e.key === 'ArrowLeft' || e.key === 'Left';
    if (isLeftArrow) {
      arrowLeft.focus();
      previousMedia(medias);
    }
  });

  // move to next media
  arrowRight.addEventListener('click', () => {
    nextMedia(medias);
  });
  document.addEventListener('keyup', (e) => {
    const isRightArrow = e.key === 'ArrowRight' || e.key === 'Right';
    if (isRightArrow) {
      arrowRight.focus();
      nextMedia(medias);
    }
  });
}
export { openLightBox, slideImage };
