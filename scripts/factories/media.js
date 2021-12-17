/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
function mediaFactory(data, photographer) {
  const container = document.querySelector('#photosContainer');
  console.log('name', photographer);
  container.innerHTML = '';
  data.forEach((e) => {
    if (e.image) {
      container.innerHTML += (
        `
          <div class="w-full">
            <div>
              <img src="assets/photographers/work/${photographer}/${e.image}" alt="photo of ${e.title}" class="object-cover w-full h-96">
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

export { mediaFactory };
