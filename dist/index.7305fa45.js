const searchForm = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.getElementById('load-more');
let currentPage = 1;
let query = '';
let isLoading = false;
searchForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    query = e.target.query.value.trim();
    currentPage = 1;
    gallery.innerHTML = '';
    await loadImages(query, currentPage);
});
loadMoreButton.addEventListener('click', async ()=>{
    currentPage += 1;
    await loadImages(query, currentPage);
});
async function loadImages(query, page) {
    if (isLoading) return;
    isLoading = true;
    try {
        const images = await apiService.fetchImages(query, page);
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

//# sourceMappingURL=index.7305fa45.js.map
