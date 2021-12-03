// eslint-disable-next-line no-unused-vars
function photographerFactory(data) {
  const {
    name, portrait, alt, city, tagline, country, price, id,
  } = data;

  const picture = `assets/photographers/id/${portrait}`;
  const altDescription = `${alt} ${name}`;
  const href = `photographer.html?id=${id}`;

  function getUserCardDOM() {
    const article = document.createElement('article');
    const containerImg = document.createElement('div');
    const containerLegend = document.createElement('div');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const link = document.createElement('a');
    const photographerLocation = document.createElement('p');
    const photographerLine = document.createElement('p');
    const photographerPrice = document.createElement('p');

    img.setAttribute('src', picture);
    img.setAttribute('alt', altDescription);
    link.setAttribute('href', href);

    h2.textContent = name;
    photographerLocation.textContent = `${city}, ${country}`;
    photographerPrice.textContent = `${price}€/jour`;
    photographerLine.textContent = tagline;

    article.append(link, containerLegend);
    link.append(containerImg, h2);
    containerImg.appendChild(img);
    containerLegend.append(photographerLocation, photographerLine, photographerPrice);

    article.classList.add('flex', 'flex-col', 'justify-center', 'align-center');
    containerImg.classList.add('overflow-hidden', 'rounded-full', 'container-img');
    img.classList.add('object-cover', 'img');
    containerLegend.classList.add('text-center');
    photographerLine.classList.add('font-bold');
    photographerPrice.classList.add('text-gray-400');

    return (article);
  }
  return { name, picture, getUserCardDOM };
}
