
import getMealInfo from "./mealinfo.js";
import fetchLikes from "./like.js";


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

      const updateLikes = async (btn, likes) => {
        const mealItem = btn.closest(".meal-item");
        const likeCounter = mealItem.querySelector(".like-count");
        const mealId = mealItem.getAttribute("data-id");
        try {
          const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes?item_id=${mealId}`);
          const likesText = await response.text();
          if (likesText.startsWith("Created")) {
            likes++;
          } else {
            const likesJson = JSON.parse(likesText);
            likes = likesJson.length;
          }
        } catch (error) {
          console.error(error);
        }
        if (likes === 1) {
          likeCounter.innerHTML = `${likes} Like`;
        } else {
          likeCounter.innerHTML = `${likes} Likes`;
        }
        btn.style.backgroundColor = "";
  btn.addEventListener("click", () => {
    likes += 1;
    if (likes === 1) {
      likeCounter.innerHTML = `${likes} Like`;
    } else {
      likeCounter.innerHTML = `${likes} Likes`;
    }
    btn.style.backgroundColor = "red";
  });
};
      
      
      

      const fetchLikes = async (mealId) => {
        const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes?item_id=${mealId}`;
        const response = await fetch(likesUrl);
        try {
          const likesJson = await response.json();
          return likesJson.length;
        } catch (error) {
          console.error(error);
          return 0;
        }
      };
      

likeButtons.forEach((btn) => {
  const mealId = btn.closest(".meal-item").getAttribute("data-id");
  fetchLikes(mealId).then((likes) => {
    updateLikes(btn, likes);
  });
  btn.addEventListener("click", () => {
    fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes", {
      method: "POST",
      body: JSON.stringify({
        item_id: mealId,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      .then((text) => {
        if (text.startsWith("Created")) {
          // The API returned a non-JSON response
          return like++;
        } else {
          const object = JSON.parse(text);
          return object.likes.length;
        }
      })
      .then((likes) => {
        updateLikes(btn, likes);
      })
      .catch((error) => console.log(error));
      btn.style.backgroundColor = "red";
  });
  
});

//       const likeButtons = document.querySelectorAll(".like-btn");
//       const updateLikes = (btn, likes) => {
//         const likeCounter = btn.closest(".meal-item").querySelector(".like-count");
//         const currentLikes = parseInt(likeCounter.innerHTML.split(" ")[0]);
//         const newLikes = currentLikes + 1;
//         if (newLikes === 1) {
//           likeCounter.innerHTML = `${newLikes} Like`;
//         } else {
//           likeCounter.innerHTML = `${newLikes} Likes`;
//         }
//         btn.style.backgroundColor = "red";
//       };
      
// // const updateLikes = (btn, likes) => {
// //   const likeCounter = btn.closest(".meal-item").querySelector(".like-count");
// //   if (likes === 1) {
// //     likeCounter.innerHTML = `${likes} Like`;
// //   } else {
// //     likeCounter.innerHTML = `${likes} Likes`;
// //   }
// //   btn.style.backgroundColor = "red";
// // };

// const fetchLikes = async (mealId) => {
//   const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes?item_id=${mealId}`;
//   const response = await fetch(likesUrl);
//   const likes = await response.json();
//   return likes.length;
// };


// const fetchLikes = async (mealId) => {
//   const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes?item_id=${mealId}`;
//   const response = await fetch(likesUrl);
//   const likes = await response.json();
//   return likes.length;
// };

// likeButtons.forEach((btn) => {
//   const mealId = btn.closest(".meal-item").getAttribute("data-id");
//   fetchLikes(mealId).then((likes) => {
//     updateLikes(btn, likes);
//   });
//   btn.addEventListener("click", () => {
//     fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes", {
//       method: "POST",
//       body: JSON.stringify({
//         item_id: mealId,
//       }),
//       headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then((object) => {
//         fetchLikes(mealId).then((likes) => {
//           updateLikes(btn, likes);
//         });
//       });
//   });
// });

    //   const likeButtons = document.querySelectorAll(".like-btn");
    //   likeButtons.forEach((btn) => {
    //     btn.addEventListener("click", () => {
    //       const mealId = btn.closest(".meal-item").getAttribute("data-id");
    //       fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes/${mealId}`, {method: "POST",
    //       body: JSON.stringify({ 
           
    //         item_id: "item1"
    //       }),
    //       headers: {
    //         "Content-Type": "application/json; charset=UTF-8",
    //       }})
    //         .then((response) => response.json())
    //         .then((object) => {
    //           const likeCounter = btn.closest(".meal-item").querySelector(".like-count");
    //           let likes = parseInt(likeCounter.innerHTML);
    //           likes++;
    //           if (likes === 1) {
    //             likeCounter.innerHTML = `${likes} Like`;
    //           } else {
    //             likeCounter.innerHTML = `${likes} Likes`;
    //           }
    //           btn.style.backgroundColor = "red";
    //           fetchLikes(object);
    //     });
    //     const getlikes = async (mealId) => {
    //       const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes/${mealId}`;
    //       const response = await fetch(likesUrl);
    //       const likes = await response.json();
    //       return likes;
        
    //     }; 
    //   });  
    // });
});
};


export default displayFoods;