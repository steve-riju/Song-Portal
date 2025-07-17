let currentLanguage = "malayalam";
let lyricsMalayalam = [];
let lyricsManglish = [];
let currentSongNo = null;

document.addEventListener("DOMContentLoaded", () => {
  const id = new URLSearchParams(window.location.search).get("id");
  if (!id) {
    document.getElementById("lyricsContainer").innerText = "No song ID provided.";
    return;
  }

  const savedLang = localStorage.getItem("preferredLanguage");
  if (savedLang) {
    currentLanguage = savedLang;
    document.getElementById("langBtn").innerText =
      savedLang === "malayalam" ? "Switch to English" : "Switch to Malayalam";
  }

  fetch(`/api/songs/by-songno/${id}`)
    .then(res => res.json())
    .then(song => {
      console.log("Fetched song:", song);

      if (!song || !song.lyricsMalayalam || !song.lyricsManglish) {
        document.getElementById("lyricsContainer").innerText = "Song found but lyrics are missing.";
        return;
      }

      currentSongNo = parseInt(song.songNo);
      document.getElementById("songTitle").innerText = song.title;
      document.getElementById("songMeta").innerText = `Song No: ${song.songNo} | Category: ${song.category}`;

      lyricsMalayalam = (song.lyricsMalayalam || "").split("\n");
      lyricsManglish = (song.lyricsManglish || "").split("\n");

      updateLyrics();

      // Disable Prev button if first song
      if (currentSongNo <= 1) {
        document.querySelector('button[onclick="prevSong()"]').disabled = true;
      }
    })
    .catch(err => {
      console.error(err);
      document.getElementById("lyricsContainer").innerText = "Error loading song.";
    });
});

function updateLyrics() {
  const lyrics = currentLanguage === "malayalam" ? lyricsMalayalam : lyricsManglish;
  const langAttr = currentLanguage === "malayalam" ? "ml" : "en";
  const container = document.getElementById("lyricsContainer");

  container.innerHTML = formatLyrics(lyrics);
  container.setAttribute("lang", langAttr);
}

function switchLanguage() {
  currentLanguage = currentLanguage === "malayalam" ? "manglish" : "malayalam";
  localStorage.setItem("preferredLanguage", currentLanguage);
  document.getElementById("langBtn").innerText =
    currentLanguage === "malayalam" ? "Switch to English" : "Switch to Malayalam";
  updateLyrics();
}

function togglePresentation() {
  document.body.classList.toggle("presentation-mode");
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn("Fullscreen failed:", err);
    });
  } else {
    document.exitFullscreen();
  }
}

function changeFontSize(change) {
  const lyrics = document.getElementById("lyricsContainer");
  const currentSize = parseFloat(window.getComputedStyle(lyrics).fontSize);
  lyrics.style.fontSize = (currentSize + change) + "px";
}

function formatLyrics(lines) {
  if (!Array.isArray(lines)) return "<p>Invalid lyrics format</p>";
  const output = [];
  let isChorus = false;
  let chorusBuffer = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("[Chorus]")) {
      isChorus = true;
      chorusBuffer.push(line.replace("[Chorus]", "").trim());
    } else if (isChorus && (/^\d+\./.test(line) || line.startsWith("---") || line === "")) {
      if (chorusBuffer.length > 0) {
        output.push(`
          <div class="chorus">
            <strong>Chorus:</strong>
            <p>${chorusBuffer.join("<br>")}</p>
          </div>
        `);
        chorusBuffer = [];
      }
      isChorus = false;

      if (/^\d+\./.test(line)) {
        output.push(`
          <div class="stanza">
            <strong>${line.split('.')[0]}.</strong>
            <p>${line.slice(2).trim()}</p>
          </div>
        `);
      } else if (line.startsWith("---")) {
        output.push(`<div class="author">${line.replace("---", "").trim()}</div>`);
      } else if (line !== "") {
        output.push(`<p>${line}</p>`);
      }
    } else if (isChorus) {
      chorusBuffer.push(line);
    } else if (/^\d+\./.test(line)) {
      output.push(`
        <div class="stanza">
          <strong>${line.split('.')[0]}.</strong>
          <p>${line.slice(2).trim()}</p>
        </div>
      `);
    } else if (line.startsWith("---")) {
      output.push(`<div class="author">${line.replace("---", "").trim()}</div>`);
    } else if (line !== "") {
      output.push(`<p>${line}</p>`);
    }
  }

  if (chorusBuffer.length > 0) {
    output.push(`
      <div class="chorus">
        <strong>Chorus:</strong>
        <p>${chorusBuffer.join("<br>")}</p>
      </div>
    `);
  }

  return output.join("");
}

// Navigation Controls
function nextSong() {
  if (currentSongNo != null) {
    const nextNo = currentSongNo + 1;
    window.location.href = `view-song.html?id=${nextNo}`;
  }
}

function prevSong() {
  if (currentSongNo != null && currentSongNo > 1) {
    const prevNo = currentSongNo - 1;
    window.location.href = `view-song.html?id=${prevNo}`;
  }
}

function goBack() {
  window.history.back();
}

// Auto Scroll
let autoScrollActive = false;
let scrollSpeed = 0.4;
let animationFrameId = null;

const speedSlider = document.getElementById("speedSlider");
const speedDisplay = document.getElementById("speedValue");

speedSlider.addEventListener("input", () => {
  scrollSpeed = parseFloat(speedSlider.value);
  speedDisplay.innerText = scrollSpeed;
});

function smoothScroll() {
  window.scrollBy(0, scrollSpeed);
  animationFrameId = requestAnimationFrame(smoothScroll);
}

function toggleAutoScroll() {
  autoScrollActive = !autoScrollActive;

  if (autoScrollActive) {
    smoothScroll();
  } else {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

// Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "m" || e.key === "M") switchLanguage();
  else if (e.key === "f" || e.key === "F") togglePresentation();
  else if (e.key === "+") changeFontSize(2);
  else if (e.key === "-") changeFontSize(-2);
  else if (e.key === "s" || e.key === "S") toggleAutoScroll();
  else if (e.key === "ArrowRight") nextSong();
  else if (e.key === "ArrowLeft") prevSong();
});
