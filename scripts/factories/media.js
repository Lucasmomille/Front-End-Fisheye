/* eslint-disable import/extensions */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { Image } from '../utils/imageClass.js';
import Video from '../utils/videoClass.js';

function mediaFactory(data, photographer) {
  const container = document.querySelector('#photosContainer');
  container.innerHTML = '';
  data.forEach((e, index) => {
    if (e.image) {
      container.innerHTML += new Image(e, photographer, index).displayImage();
    } else if (e.video) {
      container.innerHTML += new Video(e, photographer).displayVideo();
    }
    return undefined;
  });
}

export { mediaFactory };
