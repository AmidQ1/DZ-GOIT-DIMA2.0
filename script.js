// Масив зображень
const galleryItems = [
    {
      preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg',
      description: 'Tulips',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg',
      description: 'Forest Path',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg',
      description: 'Winter Forest',
    },
  ];
  
  const gallery = document.querySelector('.js-gallery');
  const galleryMarkup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join('');
  gallery.innerHTML = galleryMarkup;
  
  
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox__image');
  const closeButton = document.querySelector('[data-action="close-lightbox"]');
  const overlay = document.querySelector('.lightbox__overlay');
  
  
  gallery.addEventListener('click', (event) => {
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG') return;
  
    lightbox.classList.add('is-open');
    lightboxImage.src = event.target.dataset.source;
    lightboxImage.alt = event.target.alt;
  });
  
  
  const closeModal = () => {
    lightbox.classList.remove('is-open');
    lightboxImage.src = '';
    lightboxImage.alt = '';
  };
  
  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  
 
  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeModal();
    }
  });
  