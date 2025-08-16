import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = form.querySelector("[name='search-text']");

form.addEventListener("submit", event => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.error({
      message: "Please enter a search term",
      position: "topRight"
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight"
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        message: "An error occurred while fetching images",
        position: "topRight"
      });
      console.error(error);
    })
    .finally(() => {
      hideLoader();
      form.reset()
    });
});