document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;

  const credentials = {
    username: form.username.value.trim(),
    password: form.password.value.trim()
  };

  fetch("/api/users/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials)
  })
    .then(res => {
      if (!res.ok) throw new Error("Invalid login");
      return res.json();
    })
    .then(data => {
      // Save token or session details if needed
      localStorage.setItem("adminUser", JSON.stringify(data));
      window.location.href = "dashboard.html";
    })
    .catch(() => {
      showStatus("❌ Invalid username or password", false);
    });
});

function showStatus(msg, error = true) {
  const status = document.getElementById("statusMessage");
  status.innerText = msg;
  status.style.color = error ? "red" : "green";
}

function goBack() {
  window.history.back();
}