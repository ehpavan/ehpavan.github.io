// Blog Grid with date and reading time
const blogs = [
  { title: "Building Secure APIs", file: "first-blog.md", date: "2025-10-17" },
  { title: "Web Recon 101", file: "second-blog.md", date: "2025-10-18" },
  { title: "Advanced SQL Injection Notes", file: "third-blog.md", date: "2025-10-19" }
];

const blogList = document.getElementById("blog-list");

// Estimate reading time
function estimateReadingTime(text) {
  const wordsPerMinute = 200; // avg reading speed
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

blogs.forEach(async (b) => {
  try {
    const res = await fetch(b.file);
    const content = await res.text();
    const minutes = estimateReadingTime(content);

    const dateObj = new Date(b.date);
    const formattedDate = dateObj.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <a href="blog.html?file=${b.file}" target="_blank">
        <h2>${b.title}</h2>
      </a>
      <p class="meta">
        📅 ${formattedDate} · ⏱️ ${minutes} min read
      </p>
    `;
    blogList.appendChild(card);
  } catch (err) {
    console.error("Failed to load blog:", b.file, err);
  }
});
