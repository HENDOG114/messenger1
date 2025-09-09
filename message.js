let username1 = "";
let username2 = "";

function startChat() {
  const u1 = document.getElementById("username1").value.trim();
  const u2 = document.getElementById("username2").value.trim();

  if (u1 === "" || u2 === "") {
    alert("Both usernames are required!");
    return;
  }

  username1 = u1;
  username2 = u2;

  document.getElementById("setup").style.display = "none";
  document.getElementById("chat").style.display = "flex";
}

function sendMessage(user) {
  const messagesDiv = document.getElementById("messages");
  const messageDiv = document.createElement("div");

  let input, username, cssClass;

  if (user === 1) {
    input = document.getElementById("message1");
    username = username1;
    cssClass = "user1";
  } else {
    input = document.getElementById("message2");
    username = username2;
    cssClass = "user2";
  }

  const msgText = input.value.trim();
  if (msgText === "") return;

  messageDiv.classList.add("message", cssClass);
  messageDiv.textContent = username + ": " + msgText;

  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  input.value = "";
}
