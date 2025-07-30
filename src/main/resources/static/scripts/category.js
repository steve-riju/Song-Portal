document.addEventListener("DOMContentLoaded", () => {
  const categoryParam = new URLSearchParams(window.location.search).get("cat");
  const resultsDiv = document.getElementById("results");
  const categoryName = document.getElementById("categoryName");

  if (!categoryParam) {
    resultsDiv.innerHTML = "<p>No category selected.</p>";
    return;
  }

  categoryName.innerHTML = `Showing songs for: <strong>${decodeURIComponent(categoryParam)}</strong>`;

  fetch(`/api/songs/category?cat=${encodeURIComponent(categoryParam)}`)
    .then(res => res.json())
    .then(data => {
      resultsDiv.innerHTML = "";

      if (data.length === 0) {
        resultsDiv.innerHTML = "<p>No songs found in this category.</p>";
        return;
      }

      data.forEach(song => {
        const card = document.createElement("div");
        card.className = "song-card";
        card.setAttribute("data-song-id", song.songNo);

        card.innerHTML = `
          <div class="song-title">${song.title}</div>
          <div class="song-meta">Song No: ${song.songNo} | Category: ${song.category}</div>
          <button class="view-btn">View</button>
        `;

        // Make entire card clickable (excluding the View button)
        card.addEventListener("click", (e) => {
          if (e.target.classList.contains("view-btn")) return;
          window.location.href = `view-song.html?id=${song.songNo}`;
        });

        // Button click (optional fallback)
        card.querySelector(".view-btn").addEventListener("click", () => {
          window.location.href = `view-song.html?id=${song.songNo}`;
        });

        resultsDiv.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Category fetch error:", err);
      resultsDiv.innerHTML = "<p>Error loading songs.</p>";
    });
});

function goBack() {
  window.history.back();
}
