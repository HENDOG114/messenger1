let username = "";
let messages = JSON.parse(localStorage.getItem("groupMessages")) || [];

function enterChat() {
  const input = document.getElementById("usernameInput");
  username = input.value.trim();
  if (!username) {
    alert("Enter a username!");
    return;
  }

  document.getElementById("loginDiv").style.display = "none";
  document.getElementById("chatDiv").style.display = "block";
  displayMessages();
}

function sendMessage() {
  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if (!text) return;

  const messageObj = { sender: username, text: text };
  messages.push(messageObj);
  localStorage.setItem("groupMessages", JSON.stringify(messages));
  displayMessage(messageObj);
  input.value = "";
}

function displayMessages() {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML = "";
  messages.forEach(msg => displayMessage(msg));
}

function displayMessage(msg) {
  const messagesDiv = document.getElementById("messages");
  const div = document.createElement("div");
  div.className = "message";
  div.classList.add(msg.sender === username ? "user" : "other");
  div.textContent = msg.sender + ": " + msg.text;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

