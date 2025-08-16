import axios from "axios";

const API_KEY = "51708087-f8f02a96469b9e03eb4d8b8de";
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: PER_PAGE,
      page: page,
    },
  })
  return response.data;
}

