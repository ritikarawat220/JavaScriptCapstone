
fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes/${meal.idMeal}/")
    .then(response => response.json())
    .then(object =>{
        fetchLikes(object);
    });
    function fetchLikes(object, btn) {
      const likeDiv = btn.closest(".like-div");
      const likeCount = likeDiv.querySelector(".like-count");
      let likes = parseInt(likeCount.innerHTML);
      likes++;
      if (likes === 1) {
        likeCount.innerHTML = `${likes} Like`;
      } else {
        likeCount.innerHTML = `${likes} Likes`;
      }
      btn.style.backgroundColor = "red";

}
    export default fetchLikes;
