/* eslint-disable quotes */
/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
const lightBox = document.getElementById('LightBox');
let currentIndex = 0;

function openLightBox(images) {
  const carousel = document.getElementById('Carousel');
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
      lightBox.classList.remove('hidden');
      const imgSrc = this.querySelector('img').src;
      const imgAlt = this.querySelector('img').alt;
      carousel.insertAdjacentHTML('beforeend', `<img src="${imgSrc}" alt="${imgAlt}" id="LightBoxImg" class="max-w-full z-20 object-cover">`);
      currentIndex = i;
      // console.log('image', image[i + 1]);
    };
  }
}

const closeLightBox = document.getElementById('CloseLightBox');

closeLightBox.addEventListener('click', () => {
  const carousel = document.getElementById('Carousel');
  carousel.removeChild(carousel.lastChild);
  lightBox.classList.add('hidden');
});

function slideImage(images) {
  const carousel = document.getElementById('Carousel');
  document.getElementById('arrowLeft').addEventListener('click', () => {
    carousel.removeChild(carousel.lastChild);
    console.log('carousel', images);
    if (images[currentIndex - 1].firstElementChild.tagName === 'VIDEO') {
      console.log('video it is');
      const videoSrc = images[currentIndex - 1].querySelector('video').firstElementChild.src;
      const videoAlt = images[currentIndex - 1].querySelector('video').firstElementChild.alt;
      carousel.insertAdjacentHTML(
        'beforeend',
        `<video controls width="1150" class="object-cover max-w-full z-20 mx-auto">
          <source src="${videoSrc}"
            alt="${videoAlt}" 
            type="video/mp4"
          >
          Sorry, your browser doesn't support embedded videos.
        </video>`,
      );
      currentIndex -= 1;
    } else {
      const imgSrc = images[currentIndex - 1].querySelector('img').src;
      const imgAlt = images[currentIndex - 1].querySelector('img').alt;
      carousel.insertAdjacentHTML('beforeend', `<img src="${imgSrc}" alt="${imgAlt}" id="LightBoxImg" class="max-w-full z-20 object-cover">`);
      currentIndex -= 1;
    }
  });
  document.getElementById('arrowRight').addEventListener('click', () => {
    carousel.removeChild(carousel.lastChild);
    if (images[currentIndex + 1].firstElementChild.tagName === 'VIDEO') {
      console.log('video it is');
      const videoSrc = images[currentIndex + 1].querySelector('video').firstElementChild.src;
      const videoAlt = images[currentIndex + 1].querySelector('video').firstElementChild.alt;
      carousel.insertAdjacentHTML(
        'beforeend',
        `<video controls width="1150" class="object-cover max-w-full z-20 mx-auto">
          <source src="${videoSrc}"
            alt="${videoAlt}" 
            type="video/mp4"
          >
          Sorry, your browser doesn't support embedded videos.
        </video>`,
      );
      currentIndex += 1;
    } else {
      const imgSrc = images[currentIndex + 1].querySelector('img').src;
      const imgAlt = images[currentIndex + 1].querySelector('img').alt;
      carousel.insertAdjacentHTML('beforeend', `<img src="${imgSrc}" alt="${imgAlt}" id="LightBoxImg" class="max-w-full z-20 object-cover">`);
      // console.log('img', images[currentIndex += 1]);
      currentIndex += 1;
    }
  });
}

export { openLightBox, slideImage };
// set src img
// open

// close loghtbox
