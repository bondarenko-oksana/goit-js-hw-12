import axios from "axios";

const API_KEY = "51708087-f8f02a96469b9e03eb4d8b8de";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  })
  .then(response => response.data);
}

