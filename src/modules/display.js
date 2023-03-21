import { data } from "remark";

fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=e")
   .then(res => {
    return res.json();
   })
   .then(data =>{
    data.forEach( meal => {
      const MealType= ''
    });
   })
