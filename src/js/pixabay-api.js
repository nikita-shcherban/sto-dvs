import axios from 'axios';

const PIXABAY_URL = 'https://pixabay.com/api';
const MY_KEY = '47550347-a44441999a35f73cd42751acc';

export function getImagesByQuery(query) {
  return axios
    .get(PIXABAY_URL, {
      params: {
        key: MY_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(response => response.data);
}
