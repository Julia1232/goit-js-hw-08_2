
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector('.gallery');

function makeGallery(items) {
    return items
        .map(el => `<div class="gallery__item">
    <a class="gallery__link" href='${el.original}'>
    <img 
    class="gallery__image"
    src = '${el.preview}' 
    data-source='${el.original}' 
    alt = '${el.description}' >
   </a>
   </div>`)
        .join(" ");
}

const addGallaryMarkup = makeGallery(galleryItems);
gallery.innerHTML = addGallaryMarkup;

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});