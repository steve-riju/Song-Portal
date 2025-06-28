const songApi = "/api/songs"; // Adjust this if your actual endpoint differs
const songsPerPage = 25;
let currentPage = 1;
let allSongs = [];

function fetchSongs() {
  fetch(songApi)
    .then(res => res.json())
    .then(data => {
      allSongs = data;
      renderSongs();
    })
    .catch(() => {
      document.getElementById("songsTable").innerHTML = "<tr><td colspan='4'>❌ Failed to load songs.</td></tr>";
    });
}

function renderSongs() {
  const start = (currentPage - 1) * songsPerPage;
  const end = start + songsPerPage;
  const pageSongs = allSongs.slice(start, end);

  const table = document.getElementById("songsTable");
  if (!pageSongs.length) {
    table.innerHTML = "<tr><td colspan='4'>No songs to display.</td></tr>";
    return;
  }

  table.innerHTML = "";
  pageSongs.forEach(song => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${song.songNo}</td>
      <td>${song.title}</td>
      <td>${song.author || '-'}</td>
      <td>${song.category || '-'}</td>
    `;
    table.appendChild(row);
  });

  document.getElementById("pageInfo").innerText = `Page ${currentPage} of ${Math.ceil(allSongs.length / songsPerPage)}`;
}

function nextPage() {
  if ((currentPage * songsPerPage) < allSongs.length) {
    currentPage++;
    renderSongs();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderSongs();
  }
}

window.onload = fetchSongs;

function goBack() {
  window.history.back();
}
