/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-useless-path-segments */
import { getPhotographers, getPhotos, compareLikes, compareTitle, sumLikes } from './../utils/functions.js';
import { openLightBox, slideImage } from '../utils/lightBox.js';
import { mediaFactory } from './../factories/media.js';
import { header } from './../component/header.js';
import { incrementLikes } from '../utils/likes.js';

const filters = document.getElementById('filters');

// accessibility with keypress enter
document.addEventListener('keydown', (e) => {
  const eventClick = new Event('click');
  if (e.key === 'Enter') {
    e.preventDefault();
    e.target.dispatchEvent(eventClick);
  }
});

function photographerProperty(photographers, photographerId) { // get photographer with their id
  // eslint-disable-next-line max-len
  return photographers.find((elt) => elt.id === parseInt(photographerId, 10));
}

function photographerName(photographer) { // get photographer firstname
  return photographer.name.split(' ')[0];
}

function displayPhoto(photosOfPhotographer, name) { // display media with their factory and call
  const filterByLike = photosOfPhotographer.sort(compareLikes);
  mediaFactory(filterByLike, name);

  filters.addEventListener('change', () => { // on change with select to order by popularity or title, reload media ordered
    const option = filters.options[filters.selectedIndex].text;
    if (option === 'Titre') {
      mediaFactory(photosOfPhotographer.sort(compareTitle), name);
    } else if (option === 'Popularité') {
      mediaFactory(photosOfPhotographer.sort(compareLikes), name);
    }
    openLightBox();
    incrementLikes();
  });
  openLightBox();
  slideImage();
  incrementLikes();
}

async function init() { // on load get photographer's data and load their media
  const photographerId = new URL(window.location.href).searchParams.get('id');
  // Get photographer's datas
  const photographers = await getPhotographers();
  const photos = await getPhotos();
  const photographer = photographerProperty(photographers, photographerId);
  const firstname = photographerName(photographer);
  const photosOfPhotographer = photos.filter((photo) => photo.photographerId === parseInt(photographerId, 10));
  const totalLikes = sumLikes(photosOfPhotographer);

  header(photographer, totalLikes);
  displayPhoto(photosOfPhotographer, firstname);
}
init();
