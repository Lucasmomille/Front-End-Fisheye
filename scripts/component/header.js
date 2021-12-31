/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
function header(photographer) {
  const photographerInfo = document.getElementById('PhotographerInfo');
  const imgPhotographer = document.getElementById('PhotographerImg');
  photographerInfo.innerHTML = (
    `
			<h1>${photographer.name}</h1>
			<p>
				<span>${photographer.city}, ${photographer.country}</span> <br>
				<span>${photographer.tagline}</span>
			</p>
		`
  );
  imgPhotographer.innerHTML = (
    `
		<img src="assets/photographers/id/${photographer.portrait}" alt="portrait de ${photographer.name}"></img>
	`
  );
}

export { header };
