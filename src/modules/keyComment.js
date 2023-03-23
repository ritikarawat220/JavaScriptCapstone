// import displayFoods from './Api.js';


const url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const commentKey = "0rbHxJDKrB4PJ7lv391q";

const getComments = async (id) => {
const result = await fetch(`${url}${commentKey}/comments?item_id=${id}`);
const dataResult = await result.json();
return dataResult;
};

const postComment = async (id, name, comment) => {
await fetch(`${url}${commentKey}/comments`, {
method: "POST",
body: JSON.stringify({
item_id: id,
username: name,
comment: comment,
}),
headers: {
"Content-type": "application/json; charset=UTF-8",
},
});
};

export { getComments , postComment };
