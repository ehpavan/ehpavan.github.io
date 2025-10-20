// Blog list with title, date, and file
const blogs = [
  { title: "Building Secure APIs", file: "first-blog.md", date: "2025-10-17" },
  { title: "Web Recon 101", file: "second-blog.md", date: "2025-10-18" },
  { title: "Advanced SQL Injection Notes", file: "third-blog.md", date: "2025-10-19" },
  { title: "Hacking the Internet, The Untold Story Of a Hero", file: "fourth-blog.md", date: "2025-10-20" },
  { title: "ZeroClyne Vision — Building Continuous Security", file: "fifth-blog.md", date: "2025-10-25" } // new blog
];

const blogList = document.getElementById("blog-list");

// Estimate reading time
function estimateReadingTime(text) {
  const wordsPerMinute = 200;
  return Math.ceil(text.trim().split(/\s+/).length / wordsPerMinute);
}

async function loadBlogs() {
  try {
    // Sort blogs by date (newest first) using Date.parse()
    blogs.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

    // Hide list before rendering
    blogList.style.opacity = "0";
    blogList.style.transform = "translateY(20px)";

    for (const b of blogs) {
      const res = await fetch(`./${b.file}`);
      if (!res.ok) {
        console.warn(`Blog file not found: ${b.file}`);
        continue;
      }
      const content = await res.text();
      const minutes = estimateReadingTime(content);

      const dateObj = new Date(b.date);
      const formattedDate = dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      const card = document.createElement("div");
      card.className = "blog-card";
      card.innerHTML = `
        <a href="blog.html?file=${b.file}">
          <h2>${b.title}</h2>
        </a>
        <p class="meta">${formattedDate} · ${minutes} min read</p>
      `;

      blogList.appendChild(card);
    }

    // Smooth fade + slide animation
    requestAnimationFrame(() => {
      blogList.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      blogList.style.opacity = "1";
      blogList.style.transform = "translateY(0)";
    });

  } catch (err) {
    console.error("Error loading blogs:", err);
  }
}

// Initialize blogs on DOM load
document.addEventListener("DOMContentLoaded", loadBlogs);
