/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
function mediaFactory(data, photographer) {
  const container = document.querySelector('#photosContainer');
  container.innerHTML = '';
  data.forEach((e, index) => {
    const likes = e.likes;
    if (e.image) {
      container.innerHTML += (
        `
          <div class="w-full">
            <div class="cursor-pointer box-image" id="${index}">
              <img src="assets/photographers/work/${photographer}/${e.image}" alt="photo of ${e.title}" class="object-cover w-full h-96">
            </div>
            <div class="flex justify-between">
              <p>${e.title}</p>
              <div class="flex">
                <span>
                  ${likes} 
                </span>
                <span class="svg fill-yellow-700 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
            `
      );
    } else if (e.video) {
      const videoTitle = e.video.replace(/_/g, ' ');
      console.log('test', videoTitle);
      container.innerHTML += (
        `
          <div class="w-full">
            <div>
              <video controls width="250" class="object-cover w-full h-96">
                <source src="assets/photographers/work/${photographer}/${e.video}"
                        alt="video of the photographer" 
                        type="video/mp4"
                >
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
            <div class="flex justify-between">
              <p>${videoTitle}</p>
              <div class="flex">
                <span>
                  ${likes} 
                </span>
                <span class="svg fill-yellow-700 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        `
      );
    }
    return undefined;
  });
}

function header(photographer, totalLikes) {
  const photographerInfo = document.getElementById('PhotographerInfo');
  const imgPhotographer = document.getElementById('PhotographerImg');
  const pricePhotographer = document.getElementById('PriceContainer');
  photographerInfo.innerHTML = (
    `
			<h1 class="text-5xl mb-2 h1-photographer">${photographer.name}</h1>
			<p>
				<span class="text-xl mb-2">${photographer.city}, ${photographer.country}</span> <br>
				<span class="">${photographer.tagline}</span>
			</p>
		`
  );
  imgPhotographer.innerHTML = (
    `
		  <img src="assets/photographers/id/${photographer.portrait}" alt="portrait de ${photographer.name} class="img object-cover""></img>
	  `
  );
  pricePhotographer.innerHTML = (
    `
      <span>${totalLikes} ic</span>
      <span>${photographer.price}€/jour</span>
    `
  );
}

export { mediaFactory, header };
