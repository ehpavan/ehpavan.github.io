// Blog Grid
const blogs = [
  { title: "Building Secure APIs", file: "first-blog.md", date: "2025-10-17" },
  { title: "Web Recon 101", file: "second-blog.md", date: "2025-10-18" },
  { title: "Advanced SQL Injection Notes", file: "third-blog.md", date: "2025-10-19" }
];

const blogList = document.getElementById("blog-list");

// Estimate reading time
function estimateReadingTime(text) {
  const wordsPerMinute = 200;
  return Math.ceil(text.trim().split(/\s+/).length / wordsPerMinute);
}

blogs.forEach(async (b) => {
  try {
    const res = await fetch(b.file);
    const content = await res.text();
    const minutes = estimateReadingTime(content);

    const dateObj = new Date(b.date);
    const formattedDate = dateObj.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});

    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <a href="blog.html?file=${b.file}" target="_blank">
        <h2>${b.title}</h2>
      </a>
      <p class="meta">
        <img src="images/date-range-svgrepo-com.svg" alt="Date Icon"> ${formattedDate} &nbsp; 
        <img src="images/time-svgrepo-com.svg" alt="Time Icon"> ${minutes} min read
      </p>
    `;
    blogList.appendChild(card);
  } catch(err) {
    console.error(err);
  }
});
