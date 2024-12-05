
const fetchNewsBtn = document.getElementById("fetchNewsBtn");
const newsContainer = document.getElementById("newsContainer");

const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=6";

const fetchNews = async () => {
  try {
    newsContainer.innerHTML = "<p>Loading...</p>";

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch news"); // throw - виклик Error штучно 
    }

    const news = await response.json();

    renderNews(news);
  } catch (error) {
    newsContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
};

const renderNews = (news) => {
  newsContainer.innerHTML = "";

  news.forEach((item) => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("newsItem");
    newsItem.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <a href="#" target="_blank">Read more</a>
    `;
    newsContainer.appendChild(newsItem);
  });
};

fetchNewsBtn.addEventListener("click", fetchNews);
