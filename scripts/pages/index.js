/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
/* eslint-disable consistent-return */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-useless-path-segments
import { getPhotographers } from './../utils/functions.js';

function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
