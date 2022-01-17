export default class Video {
  constructor(media, photographer) {
    this.video = media.video;
    this.likes = media.likes;
    this.photographer = photographer;
  }

  displayVideo() {
    const videoTitle = this.video.replace(/_/g, ' ');
    return `
    <div class="w-full">
      <div class="box-image rounded-md overflow-hidden">
        <video controls width="250" class="object-cover w-full h-96">
          <source src="assets/photographers/work/${this.photographer}/${this.video}"
            alt="${videoTitle}" 
            type="video/mp4"
          >
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <div class="flex justify-between mt-1">
        <p>${videoTitle}</p>
        <div class="flex">
          <span>
            ${this.likes} 
          </span>
          <span class="svg cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" aria-label="likes">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  `;
  }

  /* displayLightBox() {
        return `
          <img src="" alt="" id="LightBoxImg" class="max-w-full z-20 object-cover">
        `
      } */
}
