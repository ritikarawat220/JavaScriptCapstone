
fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes/${meal.idMeal}/")
    .then(response => response.json())
    .then(object =>{
        fetchLikes(object);
    });

    function fetchLikes(object){
      const likesDiv= document.querySelector(".like-div");
      const boredomActivity=document.createElement("p");
      boredomActivity.innerHTML= object.activity;
      const likebtn= document.querySelector(".like-btn");
      const likeCount= document.querySelector(".like-count");

      let likes = 0;
      function incrementLikes(){
        likes++;
        if(likes===1){
        likeCount.innerHTML= `${likes} Like`;
        }else{
            likeCount.innerHTML= `${likes} Likes`;
        }
        likebtn.classList.add("liked");
      }
      
      likebtn.addEventListener("click", incrementLikes);
      boredomActivity.appendChild(likebtn);
      boredomActivity.appendChild(likeCount);
      likesDiv.appendChild(boredomActivity);

    }
    export default fetchLikes;
