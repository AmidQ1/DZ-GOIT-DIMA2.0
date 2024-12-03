function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((response) => response.json())
    .then((posts) => {
      const output = document.getElementById("output");
      output.innerHTML =
        `<h2>All Posts After Creation</h2>` +
        posts
          .map((post) => (
            `
            <p>
              <b>${post.id}:</b> ${post.title}
            </p>
            `
          ))
          .join("");
    })
    .catch((error) => console.log("Error:", error));
}

const newPost = {
  title: "New Post Title",
  body: "This is the body of the new post.",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify(newPost),
})
  .then((response) => response.json())
  .then((post) => {
    console.log("Post created:", post);
    loadPosts();
  })
  .catch((error) => console.log("Error:", error));
