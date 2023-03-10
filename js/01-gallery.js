import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const mockupCard = (galleryMockupCardCreate(galleryItems));
galleryContainer.insertAdjacentHTML("beforeend", mockupCard);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function galleryMockupCardCreate (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
          return `<div class="gallery__item">
               <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
                </a>
                </div>`})
    .join('');
    
}

function onGalleryContainerClick(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const bigImageUrl = event.target.dataset.source;
    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${bigImageUrl}">
	`);
    instance.show();
}
