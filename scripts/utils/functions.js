async function getPhotographers() { // get photographers' info
  const response = await fetch('./../scripts/data/photographers.json');
  const data = await response.json();
  return data.photographers;
}

async function getPhotos() { // get photographers' media
  const response = await fetch('./../scripts/data/photographers.json');
  const data = await response.json();
  return data.media;
}
// order by likes
function compareLikes(a, b) {
  return b.likes - a.likes;
}
// order by title
function compareTitle(a, b) {
  if (!a.title && a.video) {
    if (a.video < b.title) {
      return -1;
    }
    if (a.video > b.title) {
      return 1;
    }
  } else if (b.video && !b.title) {
    if (a.title < b.video) {
      return -1;
    }
    if (a.title > b.video) {
      return 1;
    }
  } else {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
  }
  return 0;
}

function filterPhotos(photos, input) { // trigger order whith input
  if (input === 'Titre') {
    photos.sort(compareTitle);
  } else if (input === 'Popularité') {
    photos.sort(compareLikes);
  } else {
    return photos;
  }
  return photos;
}

function sumLikes(photos) { // sum likes of each media
  const likesArray = photos.map((photo) => photo.likes);
  return likesArray.reduce((total, like) => total + like, 0);
}

function displayImageLightBox(src, alt) { // create html for img element for lightbox
  return `
    <figure class="max-w-full z-20">
      <img src="${src}" alt="${alt}" id="LightBoxImg" class="max-w-full z-20 object-cover">
      <figcaption class="w-6/12 mx-auto">${alt}</figcaption>
    </figure>
  `;
}

function displayVideoLightBox(src, alt) { // create html for video element for lightbox
  return `
  <div class="w-full mx-auto z-20">
    <video controls width="1150" class="object-cover max-w-full z-20 mx-auto">
      <source src="${src}"
        alt="${alt}" 
        type="video/mp4"
      >
      Sorry, your browser doesn't support embedded videos.
    </video>
    <p class="w-6/12 mx-auto">${alt}</p>
  </div>`;
}

export {
  getPhotographers, getPhotos, filterPhotos, compareLikes, compareTitle, sumLikes, displayImageLightBox, displayVideoLightBox,
};
