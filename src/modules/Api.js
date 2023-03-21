import getMealInfo from './mealinfo.js';

const foodItemsDiv = document.getElementById("list-meal");

// event listeners
foodItemsDiv.addEventListener('click', getMealInfo);

const displayFoods = () => {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=e')
    .then((res) => res.json())
    .then((data) => {
      let html = '';
      data.meals.forEach((meal) => {
        html += `
      <div class="meal-item" data-id = "${meal.idMeal}"> 
        <div class = "meal-img">     
          <img src='${meal.strMealThumb}'>
        </div>
        <div class = "meal-name">
          <p>${meal.strMeal}</p>
          <p>Category: ${meal.strCategory}</p>
          <button class = "comment">Comment</button>
        </div>
      </div>
      `;
      });
      foodItemsDiv.innerHTML = html;
    });
};

export default displayFoods;
