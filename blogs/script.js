const blogs = [
  { title: "My First Blog", file: "first-blog.md" },
  { title: "Second Blog", file: "second-blog.md" }
];

const grid = document.getElementById("blog-grid");
const content = document.getElementById("blog-content");

blogs.forEach(b => {
  const card = document.createElement("div");
  card.className = "blog-card";
  card.innerHTML = `<h3>${b.title}</h3>`;
  card.addEventListener("click", () => loadBlog(b.file));
  grid.appendChild(card);
});

async function loadBlog(file) {
  const res = await fetch(file);
  const md = await res.text();
  content.innerHTML = marked.parse(md);
  content.scrollIntoView({ behavior:"smooth" });
}
