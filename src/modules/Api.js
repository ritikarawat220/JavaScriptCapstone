import  fetchLikes  from "./like.js";
import getMealInfo from "./mealinfo.js";



const foodItemsDiv = document.getElementById("list-meal");

// event listeners
foodItemsDiv.addEventListener("click", getMealInfo);

const displayFoods = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=e")
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      data.meals.forEach((meal) => {
        html += `
      <div class="meal-item" data-id = "${meal.idMeal}"> 
        <div class = "meal-img">     
          <img src='${meal.strMealThumb}'>
        </div>
        <div class = "meal-name">
        <div class="like-div">
          <p>${meal.strMeal}</p>
          <li class="like"><button class="like-btn"><i class="fa-regular fa-heart"></i></button></li>
          </div>
          <span class="like-count">0 Likes</span>
          <button class = "comment">Comment</button>
        </div>
      </div>
      `;
      });

      foodItemsDiv.innerHTML = html;
      const likeButtons = document.querySelectorAll(".like-btn");
      likeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const mealId = btn.closest(".meal-item").getAttribute("data-id");
          fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes/${mealId}/`, { method: "POST" })
            .then(response => response.json())
            .then(object => {
              let likes=0;
              likes++;
              const likeCounter = btn.closest(".meal-item").querySelector(".like-count");
              likeCounter.innerHTML= `${likes} Like`;
              fetchLikes(object,btn);
              btn.style.backgroundColor="red";
              likeButtons.classList.add("liked");
            });
        });
      });
      
      
    });
};

export default displayFoods;
