/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
function mediaFactory(data, photographer) {
  const container = document.querySelector('#photosContainer');
  container.innerHTML = '';
  data.forEach((e) => {
    if (e.image) {
      container.innerHTML += (
        `
          <div class="w-full">
            <div>
              <a href="#" class="cursor-pointer">
                <img src="assets/photographers/work/${photographer}/${e.image}" alt="photo of ${e.title}" class="object-cover w-full h-96">
              </a>
            </div>
            <div class="flex justify-between">
              <p>${e.title}</p>
              <div>${e.likes}</div>
            </div>
          </div>
            `
      );
    } else if (e.video) {
      container.innerHTML += (
        `
          <div class="w-full">
            <div>
              <video controls width="250" class="object-cover w-full h-96">
          
              <source src="assets/photographers/work/${photographer}/${e.video}"
                      alt="video of the photographer" 
                      type="video/mp4">
          
              Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        `
      );
    }
    return undefined;
  });
}

function header(photographer) {
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
      <span></span>
      <span>${photographer.price}€/jour</span>
    `
  );
}

export { mediaFactory, header };
