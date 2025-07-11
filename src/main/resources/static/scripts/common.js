function logout() {
  localStorage.removeItem("adminUser");
  window.location.href = "../index.html";
}

window.onload = function () {
  const admin = localStorage.getItem("adminUser");
  if (!admin) {
    window.location.href = "admin-login.html";
  }
};
