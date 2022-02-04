/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-useless-path-segments
import { getPhotographers } from './../utils/functions.js';
import { photographerFactory } from '../factories/photographer.js';

function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() { // On load display data
  // Get photographer's data
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
