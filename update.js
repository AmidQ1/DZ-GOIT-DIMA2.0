const updatedPost = {
    title: "Updated Post Title"
};

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(updatedPost)
})
.then(response => response.json())
.then(post => console.log("Post updated:", post))
.catch(error => console.log("Error:", error));
