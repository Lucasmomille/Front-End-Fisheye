/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
// Mettre le code JavaScript lié à la page photographer.html
// eslint-disable-next-line import/extensions
import { getPhotographers, getPhotos, compareLikes, compareTitle, sumLikes } from './../utils/functions.js';
import { openLightBox } from '../utils/lightBox.js';
import { mediaFactory } from './../factories/media.js';
import { header } from './../component/header.js';

const filters = document.getElementById('filters');

function chooseFilter(name) {
  filters.addEventListener('change', () => {
    const option = filters.options[filters.selectedIndex].text;
    if (option === 'Titre') {
      mediaFactory();
    }
  });
}

function photographerProperty(photographers, photographerId) {
  // eslint-disable-next-line max-len
  return photographers.find((elt) => elt.id === parseInt(photographerId, 10));
}

function photographerName(photographer) {
  // eslint-disable-next-line max-len
  return photographer.name.split(' ')[0];
  // console.log('photograph', photographerSelect);
}

function displayPhoto(photosOfPhotographer, name) {
  const filterByLike = photosOfPhotographer.sort(compareLikes);
  mediaFactory(filterByLike, name);
  const imageBox = document.querySelectorAll('.box-image');
  openLightBox(imageBox);

  filters.addEventListener('change', () => {
    const option = filters.options[filters.selectedIndex].text;
    if (option === 'Titre') {
      mediaFactory(photosOfPhotographer.sort(compareTitle), name);
    } else if (option === 'Popularité') {
      mediaFactory(photosOfPhotographer.sort(compareLikes), name);
    }
  });
}

async function init() {
  const photographerId = new URL(window.location.href).searchParams.get('id');
  // Get photographer's dataS
  const photographers = await getPhotographers();
  const photos = await getPhotos();
  const photographer = photographerProperty(photographers, photographerId);
  const firstname = photographerName(photographer);
  const photosOfPhotographer = photos.filter((photo) => photo.photographerId === parseInt(photographerId, 10));
  const totalLikes = sumLikes(photosOfPhotographer);
  header(photographer, totalLikes);
  // chooseFilter();
  displayPhoto(photosOfPhotographer, firstname);
}
init();
