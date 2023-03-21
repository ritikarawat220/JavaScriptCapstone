import "./style.css";
import fetchFucntion from "./modules/Api";

import { getComments } from "./modules/keyComment.js";

const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const commentKey = "0rbHxJDKrB4PJ7lv391q";

const userName = document.getElementById("input-name");
const comment = document.getElementById("comment-text");
const submit = document.querySelector(".comment-submit");

fetchFucntion();
getComments();

// post the comments
const postComment = async (id) => {
  const result = await fetch(`${url}${commentKey}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      item_id: id,
      username: userName.value,
      comment: comment.value,
    }),
  });

  result();
};

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