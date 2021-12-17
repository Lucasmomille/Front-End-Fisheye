async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  const response = await fetch('./../scripts/data/photographers.json');
  const data = await response.json();
  // et bien retourner le tableau photographers seulement une fois
  return data.photographers;
}

async function getPhotos() {
  // Penser à remplacer par les données récupérées dans le json
  const response = await fetch('./../scripts/data/photographers.json');
  const data = await response.json();
  // et bien retourner le tableau photographers seulement une fois
  return data.media;
}

function compareLikes(a, b) {
  return a.likes - b.likes;
}
function compareTitle(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}
function filterPhotos(photos, input) {
  if (input === 'Titre') {
    photos.sort(compareTitle);
  } else if (input === 'Popularité') {
    photos.sort(compareLikes);
  } else {
    return photos;
  }
  return photos;
}
/* function chooseFilter(select) {
  const option = select.options[select.selectedIndex].text;
  console.log('option', option);
} */
export {
  getPhotographers, getPhotos, filterPhotos, compareLikes, compareTitle,
};
