
    fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes")
    .then(response => response.jason())
    .then(object =>{
        fetchLikes(object);
    });

    function fetchLikes(object){
      const likesDiv= document.querySelector(".like-div");
      const boredomActivity=document.querySelector(".like");
      boredomActivity.innerHTML= object.activity;
      const likebtn= document.querySelector(".like-btn");
      const likeCount= document.querySelector(".like-count");

      let likes = 0;
      function incrementLikes(){
        likes++;
        likeCount.innerHTML= likes;
      }
      

    }
