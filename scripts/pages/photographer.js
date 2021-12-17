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
import { getPhotographers, getPhotos, compareLikes, compareTitle } from './../utils/functions.js';
import { mediaFactory } from './../factories/media.js';

const filters = document.getElementById('filters');

function chooseFilter(name) {
  filters.addEventListener('change', () => {
    const option = filters.options[filters.selectedIndex].text;
    console.log('option', option);
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

function displayPhoto(photos, photographerId, name) {
  const photoOfPhotographer = photos.filter((photo) => photo.photographerId === parseInt(photographerId, 10));
  const filterByLike = photoOfPhotographer.sort(compareLikes);
  // const filterByTitle = photoOfPhotographer.sort(compareTitle);
  // mediaFactory(filterByLike, name);
  filters.addEventListener('change', () => {
    const option = filters.options[filters.selectedIndex].text;
    if (option === 'Titre') {
      mediaFactory(photoOfPhotographer.sort(compareTitle), name);
      console.log('option1', option);
    } else if (option === 'Popularité') {
      console.log('optionpop', option);
      mediaFactory(filterByLike, name);
    }
  });
}

async function init() {
  const photographerId = new URL(window.location.href).searchParams.get('id');
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  const photos = await getPhotos();
  const photographer = photographerProperty(photographers, photographerId);
  const firstname = photographerName(photographer);

  const imgPhotographer = document.getElementById('Photographer');
  imgPhotographer.setAttribute('src', `assets/photographers/id/${photographer.portrait}`);
  imgPhotographer.setAttribute('alt', `photo de ${photographer.name}`);
  console.log('test', filters);
  // chooseFilter();
  displayPhoto(photos, photographerId, firstname);
}
init();
