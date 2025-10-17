const blogList = document.getElementById("blog-list");
const blogContent = document.getElementById("blog-content");

const blogs = [
  { title: "Breaking Into Web Security", file: "blogs/first_blog.md" },
  { title: "How I Build Tools That Think Like Hackers", file: "blogs/tools_blog.md" },
];

blogs.forEach((blog) => {
  const div = document.createElement("div");
  div.className = "blog-item";
  div.textContent = blog.title;
  div.onclick = () => loadBlog(blog.file);
  blogList.appendChild(div);
});

function loadBlog(file) {
  fetch(file)
    .then((res) => res.text())
    .then((text) => {
      blogContent.innerHTML = marked.parse(text);
      blogContent.style.display = "block";
      window.scrollTo({ top: blogContent.offsetTop - 80, behavior: "smooth" });
    });
}
