import "./style.css";
import displayFoods from "./modules/Api";



displayFoods();
// close modal window when clicking outside of it
const modal = document.querySelector(".meal");


const modalDetailsContent = document.querySelector(".modal-details-content");

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modalDetailsContent.parentElement.classList.remove("showModal");
  }
});