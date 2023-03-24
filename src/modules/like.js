const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(async (btn) => {
  btn.addEventListener("click", async () => {
    const mealId = btn.closest(".meal-item").getAttribute("data-id");
    
    // Send a like request to the API
    await sendLike(mealId);
    
    // Get the updated number of likes for the meal from the API
    const likes = await getLike(mealId);
    
    // Update the number of likes displayed on the webpage
    const likeCounter = btn.closest(".meal-item").querySelector(".like-count");
    if (likes === 1) {
      likeCounter.innerHTML = `${likes} Like`;
    } else {
      likeCounter.innerHTML = `${likes} Likes`;
    }
    
    // Change the color of the like button to red
    btn.style.backgroundColor = "red";
  });
});

// Send a like request to the API
const sendLike = async (mealId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes/${mealId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({like:1}),
  });
  const likeSent = response.text();
  return likeSent;
};

// Get the number of likes for a meal from the API
const getLike = async (mealId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes/${mealId}`);
  const likes = await response.json();
  return likes;
};

// Get the number of comments for a meal from the API
const getComment = async (mealId) => {
  const response = await fetch(`${commentsUrl}?item_id=${mealId}`);
  const comments = await response.json();
  return comments.length;
};

    

// fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes/${meal.idMeal}/")
//     .then(response => response.json())
//     .then(object =>{
//         fetchLikes(object);
//     });
//     function fetchLikes(object, btn) {
//       const likeDiv = btn.closest(".like-div");
//       const likeCount = likeDiv.querySelector(".like-count");
//       let likes = parseInt(likeCount.innerHTML);
//       likes++;
//       if (likes === 1) {
//         likeCount.innerHTML = `${likes} Like`;
//       } else {
//         likeCount.innerHTML = `${likes} Likes`;
//       }
//       btn.style.backgroundColor = "red";

// }
//     export default fetchLikes;
