/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
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

export { header };
