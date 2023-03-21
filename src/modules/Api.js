const fetchFucntion = () => {
    const displayFoods = (foods) => {
      const foodItemsDiv = document.getElementById("list-meal");
      const mealSection =document.querySelector(".meal");
  
      foods.meals.forEach((meal) => {
        const foodDiv = document.createElement("div");
        foodDiv.className = "meal";
        const foodInfo = `
        <p>${meal.strMeal}</p>
        <img src='${meal.strMealThumb}'>
        <p>${meal.strCategory}</p>
        <button class="comment">Comment</button>
        `;
        foodDiv.innerHTML = foodInfo;
        foodItemsDiv.appendChild(foodDiv);
        mealSection.appendChild(foodItemsDiv);
      });
    };
  
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=e")
      .then((res) => res.json())
      .then((data) => displayFoods(data));
  };
  
  /* fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=e')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error)); */
  
  export default fetchFucntion;