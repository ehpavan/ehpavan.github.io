const blogList = document.getElementById('blog-list');
const blogs = [
  { title: "Building Secure APIs", file: "new-blog.md" },
  { title: "Web Recon 101", file: "second-blog.md" },
  { title: "Advanced SQL Injection Notes", file: "third-blog.md" }
];

blogs.forEach(b => {
  const card = document.createElement('div');
  card.className = 'blog-card';
  card.innerHTML = `<a href="${b.file}" target="_blank">${b.title}</a>`;
  blogList.appendChild(card);
});

