/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
function incrementLikes() {
  const likeButton = document.getElementsByClassName('svg');
  const totalLikes = document.getElementById('TotalLikes');
  for (let i = 0; i < likeButton.length; i++) {
    likeButton[i].onclick = function () {
      let numberOfLikes = +this.parentElement.children[0].innerText;
      let numberTotalLikes = +totalLikes.innerText;

      numberOfLikes += 1;
      this.parentElement.children[0].innerText = numberOfLikes;

      numberTotalLikes += 1;
      totalLikes.innerText = numberTotalLikes;
    };
  }
}

export { incrementLikes };
