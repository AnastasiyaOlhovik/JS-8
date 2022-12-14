import { galleryItems } from './gallery-items.js';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


const galleryImg = document.querySelector(".gallery");

const imgLibrary = imgCard(galleryItems);
galleryImg.insertAdjacentHTML("beforeend", imgLibrary);

function imgCard(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>
`;
        })
        .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250, captionsData: 'alt', captionPosition: 'bottom'
});
