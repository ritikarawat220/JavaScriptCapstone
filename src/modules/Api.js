const fetchFucntion = () => {
    const displayFoods = (foods) => {
      const foodItemsDiv = document.getElementById('food-items');
  
      foods.meals.forEach((meal) => {
        const foodDiv = document.createElement('div');
  
        foodDiv.className = 'meal';
        const foodInfo = `
        <p>${meal.strMeal}</p>
        <img src='${meal.strMealThumb}'>
        <p>${meal.strCategory}</p>
        `;
        foodDiv.innerHTML = foodInfo;
        foodItemsDiv.appendChild(foodDiv);
      });
    };
  
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=e')
      .then((res) => res.json())
      .then((data) => displayFoods(data));
  };
  
  /* fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=e')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error)); */
  
  export default fetchFucntion;