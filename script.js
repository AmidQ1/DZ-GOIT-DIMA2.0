const API_KEY = "47434367-ced2ef229dfccd49a84088601";
let page = 1;
const perPage = 3;
const loadBtn = document.getElementById("load-btn");
const imageContainer = document.getElementById("image-container");

async function fetchImages() {
  const url = `https://pixabay.com/api/?key=${API_KEY}&category=editorial&editor_choice=true&per_page=${perPage}&page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  displayImages(data.hits);
}

function displayImages(images) {
  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.webformatURL;
    imgElement.alt = image.tags;
    imageContainer.appendChild(imgElement);
  });
}

loadBtn.addEventListener("click", () => {
  page++;
  fetchImages();
});

fetchImages();
