const apiUrl = "https://fsd6ahsiu7.execute-api.us-east-1.amazonaws.com/post";


document.getElementById("postForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const postData = {
    author: document.getElementById("postAuthor").value,
    message: document.getElementById("postContent").value
  };

  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData)
  });

  document.getElementById("postContent").value = "";
  loadPosts();
});

async function loadPosts() {
  const res = await fetch(apiUrl);
  const data = await res.json();
  const postsContainer = document.getElementById("postsContainer");
  postsContainer.innerHTML = "";

  data.posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <div class="post-author">${post.author}</div>
      <div class="post-message">${post.message}</div>
      <div class="post-date">${new Date(post.timestamp).toLocaleString()}</div>
    `;
    postsContainer.appendChild(div);
  });
}

loadPosts();
