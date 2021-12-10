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

function filterPhotos(photos, input) {
  if (input === 'title') {
    photos.sort();
  } else if (input === 'famous') {
    // photos.filter((photo) => {
    //   photo.likes
    // });
    photos.filter((photo) => (photo.like.sort()));
  } else {
    return photos;
  }
  return photos;
}
export { getPhotographers, getPhotos, filterPhotos };
