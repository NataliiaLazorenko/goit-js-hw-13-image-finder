import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

function showLargePhoto(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const largeImgSrc = event.target.dataset.source;
  basicLightbox.create(`<img src="${largeImgSrc}">`).show();
}

export default showLargePhoto;
