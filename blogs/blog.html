const blogs = [
  { title: "Building Secure APIs", file: "first-blog.md", date: "2025-10-17" },
  { title: "Web Recon 101", file: "second-blog.md", date: "2025-10-18" },
  { title: "Advanced SQL Injection Notes", file: "third-blog.md", date: "2025-10-19" }
];

const blogList = document.getElementById("blog-list");

// Function to estimate reading time
function estimateReadingTime(text) {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

blogs.forEach(async (b) => {
  const res = await fetch(b.file);
  const content = await res.text();
  const minutes = estimateReadingTime(content);

  const dateObj = new Date(b.date);
  const formattedDate = dateObj.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

  const card = document.createElement("div");
  card.className = "blog-card";
  card.innerHTML = `
    <h2><a href="blog.html?file=${b.file}" target="_blank">${b.title}</a></h2>
    <div class="meta">
      <img src="https://cdn.simpleicons.org/calendar/ffffff" alt="Date Icon"> ${formattedDate}
      <img src="https://cdn.simpleicons.org/clock/ffffff" alt="Reading Time Icon"> ${minutes} min read
    </div>
  `;
  blogList.appendChild(card);
});
