import "./style.css";
import fetchFucntion from "./modules/Api";
import { getComments , postComment } from "./modules/keyComment.js";


/* const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const commentKey = "oVkHOTfBlO1iBwGU9e4E"; */

const userName = document.getElementById("input-name");
const comment = document.getElementById("comment-text");
const submit = document.querySelector(".comment-submit");

fetchFucntion();
getComments();
postComment();


const clearInput = () => {
  userName.value = "";
  comment.value = "";
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  postComment();
  clearInput();
  console.log("heloooo");
});