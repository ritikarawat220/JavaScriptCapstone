import mealInfoModal from "./mealInfoModel.js";

const modalDetailsContent = document.querySelector(".modal-details-content");
const recipeCloseBtn = document.getElementById("modal-close-btn");

recipeCloseBtn.addEventListener("click", () => {
  modalDetailsContent.parentElement.classList.remove("showModal");
});

// get the meal
function getMealInfo(e) {
  e.preventDefault();
  if (e.target.classList.contains("comment")) {
    const mealItem = e.target.parentElement.parentElement;
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`,
    )
      .then((response) => response.json())
      .then((data) => mealInfoModal(data.meals));
  }
}

// create a modal

export default getMealInfo;
