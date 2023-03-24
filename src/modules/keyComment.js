// import displayFoods from './Api.js';


const url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const commentKey = "oVkHOTfBlO1iBwGU9e4E";

const sendComment = async (comment) => {
  const commentUrl = `${url}${commentKey}/comments`;
  const response = await fetch(commentUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });
  const result = await response.json();
  return result;
};

const getComments = async (mealID) => {
  const commentUrl = `${url}${commentKey}/comments?item_id=${mealID}`;
  const response = await fetch(commentUrl);
  const comments = await response.json();
  return comments;
};


export { getComments , sendComment };
