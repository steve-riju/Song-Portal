
const verses = [
  '"The Lord is my shepherd; I shall not want." – Psalm 23:1',
  '"Bless the LORD, O my soul, and all that is within me, bless his holy name!" – Psalm 103:1',
  '"I will sing to the Lord all my life." – Psalm 104:33',
  '"He put a new song in my mouth, a hymn of praise to our God." – Psalm 40:3',
  '"Sing to the Lord, all the earth; proclaim his salvation day after day." – 1 Chronicles 16:23'
];

let verseIndex = 0;
const verseEl = document.getElementById('rotatingVerse');

function updateVerse() {
  verseEl.style.opacity = 0;
  setTimeout(() => {
    verseEl.textContent = verses[verseIndex];
    verseEl.style.opacity = 1;
    verseIndex = (verseIndex + 1) % verses.length;
  }, 500);
}

updateVerse(); // initial
setInterval(updateVerse, 7000); // rotate every 7 seconds