import './styles.css';
import refs from './js/refs';
import updatePhotosMarkup from './js/update-photos-markup';
import apiService from './js/apiService';

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', fetchPhotos);

function searchFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  clearGalleryContainer();
  apiService.resetPage();
  fetchPhotos();
  form.reset();
}

function fetchPhotos() {
  refs.loadMoreBtn.classList.add('is-hidden');

  apiService.fetchPhotos().then(hits => {
    updatePhotosMarkup(hits);
    refs.loadMoreBtn.classList.remove('is-hidden');
    scrollPage();
  });
}

function clearGalleryContainer() {
  refs.photosGallery.innerHTML = '';
}

function scrollPage() {
  scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
}
