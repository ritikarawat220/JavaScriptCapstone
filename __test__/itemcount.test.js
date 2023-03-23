

describe("items count", () => {
    
    const data = [
      {
        strMeal: "Eton Mess",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg",
        idMeal: "52791",
      },
      {
        strMeal: "Eccles Cakes",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/wtqrqw1511639627.jpg",
        idMeal: "52888",
      },
      {
        strMeal: "English Breakfast",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg",
         
        idMeal: "52895",
      },
      {
        strMeal: "Escovitch Fish",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
        idMeal: "52944",
      },
      {
        strMeal: "Egg Drop Soup",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1529446137.jpg",
        idMeal: "52955",
      },
      {
        strMeal: "Egyptian Fatteh",
        strMealThumb:"https://www.themealdb.com/images/media/meals/rlwcc51598734603.jpg",
        idMeal: "53031",
      },
    ];
  
    const count =(data.length);
  
    test("Number of items are 6", () => {
      expect(count).toBe(data.length);
    });
  });