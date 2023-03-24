
import getMealInfo from "./mealinfo.js";


const foodItemsDiv = document.getElementById("list-meal");

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
    localStorage.setItem(`meal-${mealId}-likes`, likes);
    const userLikes = JSON.parse(localStorage.getItem("user-likes")) || {};
    userLikes[mealId] = true;
    localStorage.setItem("user-likes", JSON.stringify(userLikes));
  } catch (error) {
    console.error(error);
  }
  const currentLikes = localStorage.getItem(`meal-${mealId}-likes`);
  likes = currentLikes ? parseInt(currentLikes) + 1 : 1;
  localStorage.setItem(`meal-${mealId}-likes`, likes);
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
    localStorage.setItem(`meal-${mealId}-likes`, likes);
    const userLikes = JSON.parse(localStorage.getItem("user-likes")) || {};
    const currentUserLikes = userLikes[mealId];
    if (currentUserLikes) {
      // eslint-disable-next-line no-const-assign
      likes++;
    }

    return likes;
  } catch (error) {
    console.error(error);
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