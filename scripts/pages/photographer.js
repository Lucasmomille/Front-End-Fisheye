/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
// Mettre le code JavaScript lié à la page photographer.html
// eslint-disable-next-line import/extensions
import { getPhotographers, getPhotos } from './../utils/functions.js';

function displayData(photographers, photographerId) {
  // eslint-disable-next-line max-len
  const photographerSelect = photographers.find((photographer) => photographer.id === parseInt(photographerId, 10));
  console.log('photograph', photographerSelect);
}

function displayPhoto(photos, photographerId) {
// eslint-disable-next-line max-len
  const photoOfPhotographer = photos.find((photo) => photo.photographerId === parseInt(photographerId, 10));
  console.log('photo', photoOfPhotographer);
}

async function init() {
  const photographerId = new URL(window.location.href).searchParams.get('id');
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  const photos = await getPhotos();
  console.log('photo1', photographers);
  console.log('photo2', photos);
  displayData(photographers, photographerId);
  displayPhoto(photos, photographerId);
}
init();
