const apiBase = '/api/songs';

function searchSongs() {
  const query = document.getElementById('searchInput').value.trim();
  const table = document.getElementById('songsTable');
  const status = document.getElementById('statusMessage');
  table.innerHTML = "<tr><td colspan='5'>Searching...</td></tr>";
  status.innerHTML = "";

  fetch(`${apiBase}/search?q=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      if (data.length === 0) {
        table.innerHTML = "<tr><td colspan='5'>No songs found.</td></tr>";
        return;
      }

      table.innerHTML = "";
      data.forEach(song => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${song.songNo}</td>
          <td>${song.title}</td>
          <td>${song.category}</td>
          <td>${song.author || '-'}</td>
          <td class="actions">
            <button class="btn" onclick="viewSong(${song.songNo})">View</button>
            <button class="btn" onclick="openEditModal(${song.songNo})">Edit</button>
            <button class="btn" onclick="confirmDelete(this, ${song.songNo})">Delete</button>
          </td>
        `;
        table.appendChild(row);
      });
    })
    .catch(() => {
      table.innerHTML = "<tr><td colspan='5'>Error fetching songs.</td></tr>";
    });
}

function viewSong(songNo) {
  window.location.href = `/songs/view-song.html?id=${songNo}`;
}

function openEditModal(songNo) {
  fetch(`${apiBase}/by-songno/${songNo}`)
    .then(res => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then(song => {
      const form = document.getElementById('editSongForm');
      form.id.value = song.songNo;
      form.title.value = song.title || '';
      form.category.value = song.category || '';
      form.lyricsMalayalam.value = song.lyricsMalayalam || '';
      form.lyricsManglish.value = song.lyricsManglish || '';
      form.author.value = song.author || '';
      document.getElementById('editModal').style.display = 'block';
    })
    .catch(() => {
      showStatus("❌ Failed to load song for editing.", false);
    });
}

function closeModal() {
  document.getElementById('editModal').style.display = 'none';
}

document.getElementById('editSongForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const songNo = form.id.value;

  let lyricsMalayalam = form.lyricsMalayalam.value.trim();
  let lyricsManglish = form.lyricsManglish.value.trim();
  const author = form.author.value.trim();

  // ✅ Smart author tag handling
  if (author) {
    const lines = lyricsMalayalam.trim().split('\n');
    const lastLine = lines[lines.length - 1].trim();

    if (lastLine.startsWith('---')) {
      const existingAuthor = lastLine.replace(/^---/, '').trim();
      if (existingAuthor !== author) {
        // Replace old author with new one
        lines[lines.length - 1] = `---${author}`;
      }
      // else: author is same, do nothing
    } else {
      // No author tag at the end, so append
      lines.push(`---${author}`);
    }

    lyricsMalayalam = lines.join('\n');

    const linesManglish = lyricsManglish.trim().split('\n');
    const lastLineManglish = linesManglish[linesManglish.length - 1].trim();

    if (lastLineManglish.startsWith('---')) {
      const existingAuthor = lastLineManglish.replace(/^---/, '').trim();
      if (existingAuthor !== author) {
        // Replace old author with new one
        linesManglish[linesManglish.length - 1] = `---${author}`;

      }
      // else: author is same, do nothing
    } else {
      // No author tag at the end, so append
      linesManglish.push(`---${author}`);
    }
    lyricsManglish = linesManglish.join('\n');
    console.log("Updated lyricsManglish: " + lyricsManglish);
  }


  const songData = {
    title: form.title.value.trim(),
    category: form.category.value.trim(),
    lyricsMalayalam: lyricsMalayalam,
    lyricsManglish: lyricsManglish,
    author: author,
  };

  fetch(`${apiBase}/update/${songNo}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(songData)
  })
    .then(res => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then(() => {
      showStatus("✅ Song updated successfully!");
      closeModal();
      searchSongs();
    })
    .catch(() => {
      showStatus("❌ Failed to update song.", false);
    });
});

function confirmDelete(button, songNo) {
  const row = button.closest('tr');
  row.innerHTML = `
    <td colspan="5">
      Are you sure you want to delete this song?
      <button class="btn" onclick="deleteSong(${songNo})">Yes</button>
      <button class="btn" onclick="searchSongs()">No</button>
    </td>
  `;
}

function deleteSong(songNo) {
  fetch(`${apiBase}/delete/${songNo}`, { method: 'DELETE' })
    .then(res => {
      if (!res.ok) throw new Error();
      showStatus("✅ Song deleted!");
      searchSongs();
    })
    .catch(() => {
      showStatus("❌ Failed to delete song.", false);
    });
}

function goBack() {
  window.history.back();
}

// ✅ Status helper
function showStatus(message, isSuccess = true) {
  const status = document.getElementById('statusMessage');
  status.innerText = message;
  status.style.color = isSuccess ? 'green' : 'red';
  setTimeout(() => {
    status.innerText = '';
  }, 3000);
}
