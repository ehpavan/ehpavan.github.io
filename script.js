// Fetch and render blog list
const blogs = [
  { title: "My First Blog", file: "first-blog.md" },
  { title: "Second Blog", file: "second-blog.md" },
];

const blogList = document.getElementById("blog-list");
const blogContainer = document.getElementById("blog-container");

function renderBlogList() {
  blogs.forEach((blog) => {
    const div = document.createElement("div");
    div.className = "blog-item";
    div.textContent = blog.title;
    div.addEventListener("click", () => loadBlog(blog.file));
    blogList.appendChild(div);
  });
}

async function loadBlog(file) {
  const response = await fetch(`./blogs/${file}`);
  const text = await response.text();
  blogContainer.innerHTML = marked.parse(text);
  window.scrollTo({ top: blogContainer.offsetTop - 100, behavior: "smooth" });
}

renderBlogList();
