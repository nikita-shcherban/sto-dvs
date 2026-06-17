import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';

const formSearch = document.querySelector('.form');

formSearch.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements['search-text'].value.trim();

  if (!searchQuery) {
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchQuery)
    .then(response => {
      if (response.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(response.hits);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
          message:
            'Sorry, an error occurred. Please try again!',
          position: 'topRight',
        });
    })
    .finally(() => {
      hideLoader();
      formSearch.reset();
    });
}
