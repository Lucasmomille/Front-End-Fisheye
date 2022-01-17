/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
function header(photographer, totalLikes) {
  const photographerInfo = document.getElementById('PhotographerInfo');
  const imgPhotographer = document.getElementById('PhotographerImg');
  const pricePhotographer = document.getElementById('PriceContainer');
  const contactName = document.getElementById('ContactTitle');
  photographerInfo.innerHTML = (
    `
			<h1 class="text-5xl mb-2 photographer__h1">${photographer.name}</h1>
			<p>
				<span class="text-xl mb-2 photographer__location">${photographer.city}, ${photographer.country}</span> <br>
				<span class="">${photographer.tagline}</span>
			</p>
		`
  );
  imgPhotographer.innerHTML = (
    `
		  <img src="assets/photographers/id/${photographer.portrait}" alt="portrait de ${photographer.name}" class="img object-cover"></img>
	  `
  );
  pricePhotographer.innerHTML = (
    `
      <span id="TotalLikes">${totalLikes}</span>
      <span class="fill-black mr-2 ml-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </span>
      <span>${photographer.price}€&nbsp;/&nbsp;jour</span>
    `
  );
  contactName.innerHTML = (
    `
    Contactez-moi ${photographer.name}
    `
  );
}

export { header };
