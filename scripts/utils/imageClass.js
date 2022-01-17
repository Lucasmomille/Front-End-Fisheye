/* eslint-disable import/prefer-default-export */
class Image {
  constructor(media, photographer, index) {
    this.title = media.title;
    this.image = media.image;
    this.likes = media.likes;
    this.photographer = photographer;
    this.index = index;
  }

  displayImage() {
    return `
        <div class="w-full">
          <div class="cursor-pointer box-image rounded-md overflow-hidden" id="${this.index}">
            <img src="assets/photographers/work/${this.photographer}/${this.image}" alt="${this.title}" class="object-cover w-full h-96">
          </div>
          <div class="flex justify-between mt-1">
            <p>${this.title}</p>
            <div class="flex">
              <span class="likes">
                ${this.likes} 
              </span>
              <span class="svg cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      `;
  }
}

export { Image };
