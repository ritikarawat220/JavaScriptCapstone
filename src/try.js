import callingLikes from "./likes";
const involvmentApi = async () => {
  try {
    const holder = document.getElementById("moviz");
    holder.addEventListener("click", async (e) => {
      if (e.target.classList.contains("fa-heart-o")) {
        const itemId = e.target.dataset.itemid;
        const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/smiwv0zCAderK76mG4qH/likes/${itemId}`;
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ like: 1 }),
        });
        const data = await response.text();
        if (response.status === 404) {
          // Item not found, create new like record
          const newUrl =
            "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/smiwv0zCAderK76mG4qH/likes";
          const newResponse = await fetch(newUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ item_id: itemId, like: 1 }),
          });
          const newData = await newResponse.text();
        }
        // Reload the page after submitting the like
        await callingLikes();
        window.location.reload();
      }
    });
  } catch (error) {
    console.error(error);
  }
};
export default involvmentApi;