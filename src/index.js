import "./style.css";
import fetchFucntion from "./modules/Api";
import fetchLikes from "./modules/like.js";
fetchFucntion();
fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes")
  .then(response => response.json())
  .then(object =>{
    fetchLikes(object);
  })
  .catch(error => console.log(error));

