document.getElementById("addSongForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const author = formData.get("author")?.trim();
  const songNo = parseInt(formData.get("songNo"));

  let lyricsMalayalam = formData.get("lyricsMalayalam")?.trim() || "";
  let lyricsManglish = formData.get("lyricsManglish")?.trim() || "";

  // Append author if not already present
  if (author && !lyricsMalayalam.includes(`--- ${author}`)) {
    lyricsMalayalam += `\n--- ${author}`;
  }
  if (author && lyricsManglish && !lyricsManglish.includes(`--- ${author}`)) {
    lyricsManglish += `\n--- ${author}`;
  }

  const songData = {
    title: formData.get("title"),
    songNo: songNo,
    category: formData.get("category"),
    lyricsMalayalam: lyricsMalayalam,
    lyricsManglish: lyricsManglish,
    author: author || ""
  };

  fetch("/api/songs/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songData),
  })
    .then(async (res) => {
      const body = await res.json();
      if (!res.ok) {
        const msg = body?.error || "Failed to add song.";
        throw new Error(msg);
      }
      return body;
    })
    .then(() => {
      const status = document.getElementById("statusMessage");
      status.innerText = "✅ Song added successfully!";
      status.style.color = "green";
      e.target.reset();
    })
    .catch((err) => {
      const status = document.getElementById("statusMessage");
      status.innerText = "❌ " + err.message;
      status.style.color = "red";
    });
});

function goBack() {
  window.history.back();
}
