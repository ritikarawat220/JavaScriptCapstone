
import getMealInfo from "./mealinfo.js";


const foodItemsDiv = document.getElementById("list-meal");

// event listeners
foodItemsDiv.addEventListener("click", getMealInfo);

const displayFoods = () => {
  const likesData = JSON.parse(localStorage.getItem("likesData")) || {};
  
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=e")
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      data.meals.forEach((meal) => {
        const likes = likesData[meal.idMeal] || 0;
        html += `
          <div class="meal-item" data-id="${meal.idMeal}"> 
            <div class="meal-img">     
              <img src="${meal.strMealThumb}">
            </div>
            <div class="meal-name">
              <div class="like-div">
                <p>${meal.strMeal}</p>
                <li class="like"><button class="like-btn"><i class="fa-regular fa-heart"></i></button></li>
              </div>
              <span class="like-count">${likes} Likes</span>
              <button class="comment">Comment</button>
            </div>
          </div>
        `;
      });

      foodItemsDiv.innerHTML = html;
      const likeButtons = document.querySelectorAll(".like-btn");
const API_URL = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B";

const updateLikes = async (mealItem, likes, btn) => {
  const likeCounter = mealItem.querySelector(".like-count");
  const mealId = mealItem.getAttribute("data-id");

  try {
    // Send request to API to update like count
    const response = await fetch(`${API_URL}/likes`, {
      method: "POST",
      body: JSON.stringify({
        item_id: mealId,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();
    likes = data.likes.length;

    // Update local storage with latest like count
    localStorage.setItem(`meal-${mealId}-likes`, likes);

    // Update local storage with current user's like
    const userLikes = JSON.parse(localStorage.getItem("user-likes")) || {};
    userLikes[mealId] = true;
    localStorage.setItem("user-likes", JSON.stringify(userLikes));
  } catch (error) {
    console.error(error);
  }

  // Get current like count from local storage and add 1 to it
  const currentLikes = localStorage.getItem(`meal-${mealId}-likes`);
  likes = currentLikes ? parseInt(currentLikes) + 1 : 1;

  // Update local storage with new like count
  localStorage.setItem(`meal-${mealId}-likes`, likes);

  // Update UI with new like count
  if (likes === 1) {
    likeCounter.innerHTML = `${likes} Like`;
  } else {
    likeCounter.innerHTML = `${likes} Likes`;
  }
  btn.style.backgroundColor = "red";
};

const fetchLikes = async (mealId) => {
  try {
    const response = await fetch(`${API_URL}/likes?item_id=${mealId}`);
    const data = await response.json();
    const likes = data.likes.length;

    // Update local storage with latest like count
    localStorage.setItem(`meal-${mealId}-likes`, likes);

    // Update like count with current user's like
    const userLikes = JSON.parse(localStorage.getItem("user-likes")) || {};
    const currentUserLikes = userLikes[mealId];
    if (currentUserLikes) {
      likes++;
    }

    return likes;
  } catch (error) {
    console.error(error);

    // If API request fails, return like count from local storage
    const likes = localStorage.getItem(`meal-${mealId}-likes`);
    return likes ? parseInt(likes) : 0;
  }
};

likeButtons.forEach((btn) => {
  const mealItem = btn.closest(".meal-item");
  const mealId = mealItem.getAttribute("data-id");
  fetchLikes(mealId).then((likes) => {
    updateLikes(mealItem, likes, btn);

    // Add event listener to button
    btn.addEventListener("click", () => {
      updateLikes(mealItem, likes, btn);
    });
  });
});
});
};


export default displayFoods;