const API_KEY = '47434367-ced2ef229dfccd49a84088601';
const BASE_URL = 'https://pixabay.com/api/';
const search = document.getElementById('search');
const gallery = document.querySelector('.gallery');
const loadButton = document.getElementById('load');
let currentPage = 1;
let query = '';
let isLoading = false;
search.addEventListener('submit', async (e)=>{
    e.preventDefault();
    query = e.target.query.value.trim();
    currentPage = 1;
    gallery.innerHTML = '';
    await imag(query, currentPage);
});
loadButton.addEventListener('click', async ()=>{
    currentPage += 1;
    await imag(query, currentPage);
});
async function imag(query, page) {
    if (isLoading) return;
    isLoading = true;
    try {
        const response = await fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`);
        const data = await response.json();
        const images = data.hits;
        renderImages(images);
        scrollToNewImages();
    } catch (error) {
        console.error(error);
    } finally{
        isLoading = false;
    }
}
function renderImages(images) {
    const markup = images.map(({ webformatURL, largeImageURL, likes, views, comments, downloads })=>`
      <li class="photo-card">
        <img src="${webformatURL}" alt="" data-large="${largeImageURL}" />
        <div class="stats">
          <p class="stats-item"><i class="material-icons">thumb_up</i>${likes}</p>
          <p class="stats-item"><i class="material-icons">visibility</i>${views}</p>
          <p class="stats-item"><i class="material-icons">comment</i>${comments}</p>
          <p class="stats-item"><i class="material-icons">cloud_download</i>${downloads}</p>
        </div>
      </li>`).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
}
function scrollToNewImages() {
    const lastImage = gallery.lastElementChild;
    lastImage.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
    });
}

//# sourceMappingURL=index.c36f364e.js.map
