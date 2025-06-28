document.addEventListener("DOMContentLoaded", () => {
  fetchTotalSongs();
  fetchRecentSongs();
});

function fetchTotalSongs() {
  fetch("/api/songs/total")
    .then(response => response.json())
    .then(data => {
      document.getElementById("totalSongs").innerText = data.total || 0;
    })
    .catch(err => {
      console.error("Error fetching total songs:", err);
      document.getElementById("totalSongs").innerText = "Error";
    });
}

function fetchRecentSongs() {
  fetch("/api/songs/recent?limit=5")
    .then(response => response.json())
    .then(songs => {
      const tbody = document.getElementById("recentSongsTable");
      tbody.innerHTML = ""; // Clear loading row

      if (songs.length === 0) {
        tbody.innerHTML = "<tr><td colspan='5'>No recent songs found.</td></tr>";
        return;
      }

      songs.forEach(song => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${song.songNo}</td>
          <td>${song.title}</td>
          <td>${song.category}</td>
          <td>${song.author || "-"}</td>
          <td>${new Date(song.createdAt).toLocaleDateString()}</td>
        `;

        tbody.appendChild(row);
      });
    })
    .catch(err => {
      console.error("Error fetching recent songs:", err);
      const tbody = document.getElementById("recentSongsTable");
      tbody.innerHTML = "<tr><td colspan='5'>Error loading songs.</td></tr>";
    });
}


