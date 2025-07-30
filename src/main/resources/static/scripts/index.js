document.getElementById("searchForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const query = document.getElementById("searchInput").value.trim();
      if (query) {
        window.location.href = `songs/search.html?q=${encodeURIComponent(query)}`;
      }
    });

    document.getElementById("searchBtn").addEventListener("click", () => {
      const query = document.getElementById("searchInput").value.trim();
      if (query) {
        window.location.href = `songs/search.html?q=${encodeURIComponent(query)}`;
      }
    });

    document.querySelectorAll(".category-btn").forEach(button => {
      button.addEventListener("click", () => {
        const category = button.innerText.trim();
        window.location.href = `songs/category.html?cat=${encodeURIComponent(category)}`;
      });
    });

    document.querySelectorAll(".alpha-btn").forEach(button => {
      button.addEventListener("click", () => {
        const alpha = button.innerText.trim();
        window.location.href = `songs/alpha-index.html?alpha=${encodeURIComponent(alpha)}`;
      });
    });
    