const userApi = "/api/users";

function fetchUsers() {
  fetch(userApi)
    .then(res => res.json())
    .then(data => renderUsers(data))
    .catch(() => showStatus("❌ Error loading users", false));
}

function searchUsers() {
  const q = document.getElementById("searchInput").value.trim();
  fetch(`${userApi}/search?q=${encodeURIComponent(q)}`)
    .then(res => res.json())
    .then(data => renderUsers(data))
    .catch(() => showStatus("❌ Search failed", false));
}

function renderUsers(users) {
  const table = document.getElementById("userTable");
  if (!users.length) {
    table.innerHTML = `<tr><td colspan="4">No users found.</td></tr>`;
    return;
  }

  table.innerHTML = "";
  users.forEach(user => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td>
        <button onclick="editUser(${user.id})">Edit</button>
        <button onclick="confirmDelete(${user.id})">Delete</button>
      </td>
    `;
    table.appendChild(row);
  });
}

function openAddModal() {
  document.getElementById("userForm").reset();
  document.querySelector("#modalTitle").innerText = "Add User";
  document.getElementById("userModal").style.display = "block";
}

function closeModal() {
  document.getElementById("userModal").style.display = "none";
}

document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;

  const id = form.id.value.trim();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const role = form.role.value;

  const user = {
    id: id || null,
    name: name,
    email: email,
    role: role,
    username: email,         // Set username as email
    password: email          // Set default password as email
  };

  const isUpdate = !!id;
  const method = isUpdate ? "PUT" : "POST";
  const url = isUpdate ? `${userApi}/update` : `${userApi}/create`;

  fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(res => {
      if (!res.ok) throw new Error("Failed to save user");
      return res.json();
    })
    .then(() => {
      showStatus("✅ User saved successfully");
      closeModal();
      fetchUsers();
    })
    .catch(() => showStatus("❌ Failed to save user", false));
});

function editUser(id) {
  fetch(`${userApi}/${id}`)
    .then(res => res.json())
    .then(user => {
      const form = document.getElementById("userForm");
      form.id.value = user.id;
      form.name.value = user.name;
      form.email.value = user.email;
      form.role.value = user.role;
      document.querySelector("#modalTitle").innerText = "Edit User";
      document.getElementById("userModal").style.display = "block";
    })
    .catch(() => showStatus("❌ Failed to load user", false));
}

function confirmDelete(id) {
  if (confirm("Are you sure you want to delete this user?")) {
    fetch(`${userApi}/delete/${id}`, { method: "DELETE" })
      .then(res => {
        if (!res.ok) throw new Error();
        showStatus("✅ User deleted");
        fetchUsers();
      })
      .catch(() => showStatus("❌ Failed to delete user", false));
  }
}

function showStatus(message, isSuccess = true) {
  const status = document.getElementById("statusMessage");
  status.innerText = message;
  status.style.color = isSuccess ? "green" : "red";
  setTimeout(() => (status.innerText = ""), 3000);
}

window.onload = fetchUsers;

function goBack() {
  window.history.back();
}