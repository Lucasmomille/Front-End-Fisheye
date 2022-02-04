/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
function incrementLikes() { // increment or decrement like on click
  const likeButton = document.getElementsByClassName('svg');
  const totalLikes = document.getElementById('TotalLikes');
  for (let i = 0; i < likeButton.length; i++) {
    likeButton[i].onclick = function () {
      let numberOfLikes = +this.parentElement.children[0].innerText;
      let numberTotalLikes = +totalLikes.innerText;
      if (!this.dataset.liked || this.dataset.liked === 'false') { // if no dataset liked or it's false, increment and set on true
        numberOfLikes += 1;
        numberTotalLikes += 1;
        this.dataset.liked = true;
      } else { // else, decrement and set it on false
        numberOfLikes -= 1;
        numberTotalLikes -= 1;
        this.dataset.liked = false;
      }
      this.parentElement.children[0].innerText = numberOfLikes; // update number of likes under media and in the total
      totalLikes.innerText = numberTotalLikes;
    };
  }
}

export { incrementLikes };
