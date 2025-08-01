document.addEventListener("DOMContentLoaded", () => {
  const queryParam = new URLSearchParams(window.location.search).get("q");
  const resultsDiv = document.getElementById("results");
  const queryText = document.getElementById("searchQueryText");

  if (!queryParam) {
    resultsDiv.innerHTML = "<p>No search query provided.</p>";
    return;
  }

  queryText.innerHTML = `Showing results for: <strong>${decodeURIComponent(queryParam)}</strong>`;

  fetch(`/api/songs/search?q=${encodeURIComponent(queryParam)}`)
    .then(res => res.json())
    .then(data => {
      resultsDiv.innerHTML = "";

      if (data.length === 0) {
        resultsDiv.innerHTML = "<p>No songs found.</p>";
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

        // Entire card is clickable
        card.addEventListener("click", (e) => {
          // Prevent navigation if button inside was clicked
          if (e.target.classList.contains("view-btn")) return;
          window.location.href = `view-song.html?id=${song.songNo}`;
        });

        // Button works normally
        card.querySelector(".view-btn").addEventListener("click", () => {
          window.location.href = `view-song.html?id=${song.songNo}`;
        });

        resultsDiv.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Search error:", err);
      resultsDiv.innerHTML = "<p>Error loading results.</p>";
    });
});

function goBack() {
  window.history.back();
}
