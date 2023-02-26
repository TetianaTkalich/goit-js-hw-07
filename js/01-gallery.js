import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");
galleryRef.addEventListener("click", function (event) { 
  event.preventDefault();
  if (event.target.nodeName === 'IMG'){
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="320" height="280">`);

    instance.show();

    galleryRef.addEventListener("keydown", function (event) {
      if (event.code === "Escape") { 
        instance.close();
      }
    })
  }
})

const newItemsString = galleryItems.map(({ description, original, preview }) => {
  return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `;
}).join('');
galleryRef.innerHTML = newItemsString;

