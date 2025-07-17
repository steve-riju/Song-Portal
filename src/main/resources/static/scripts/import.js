document.getElementById("importForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const fileInput = this.querySelector('input[type="file"]');
  const file = fileInput.files[0];
  const statusMessage = document.getElementById("statusMessage");

  if (!file) {
    statusMessage.textContent = "⚠️ Please select a file first.";
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("/api/import/sql", {
      method: "POST",
      body: formData
    });
    const text = await response.text();
    statusMessage.textContent = text;	
    statusMessage.style.color = response.ok ? "green" : "red";
	if (response.ok){
	setTimeout(() => {
		      statusMessage.textContent = '';
		    }, 3000);
			}
  } catch (error) {
    statusMessage.textContent = "❌ Upload failed: " + error.message;
    statusMessage.style.color = "red";
  }
});
