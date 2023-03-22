// import displayFoods from './Api.js';

const url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const commentKey = "0rbHxJDKrB4PJ7lv391q";


const getComments = async (id) => {
  const result = await fetch(`${url}${commentKey}/comments?item_id=${id}`);
  const dataResult = await result.json();
  return dataResult;
};

// render the comments on the page

/* function renderComments(data) {
  const content = document.querySelector(".show-comments");
  content.innerHTML += `<p class="comm">${data.creation_date} - ${data.username} - ${data.comment}</p>`;
} */



export { getComments };
