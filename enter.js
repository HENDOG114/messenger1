function enterUsername() {
  const input = document.getElementById("myUsername");
  const username = input.value.trim();

  if (!username) {
    alert("Please enter a username!");
    return;
  }

  // Save the username in localStorage so the messenger can access it
  localStorage.setItem("username", username);

  // Redirect to the messenger page
  window.location.href = "player.html";
}

// Optional: allow pressing Enter key to submit
document.getElementById("myUsername").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    enterUsername();
  }
});
