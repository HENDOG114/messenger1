let myUsername = localStorage.getItem("username") || "Me";
let friends = JSON.parse(localStorage.getItem("friends")) || [];
let chats = JSON.parse(localStorage.getItem("chats")) || {}; // { friend: [messages] }
let currentFriend = null;

// Load friends in sidebar
function loadFriends() {
  const list = document.getElementById("friendsList");
  list.innerHTML = "";

  if (friends.length === 0) {
    list.innerHTML = "<li>No friends added</li>";
    return;
  }

  friends.forEach(friend => {
    const li = document.createElement("li");
    li.textContent = friend;
    li.onclick = () => openChat(friend);
    list.appendChild(li);
  });
}

// Open chat with a friend
function openChat(friend) {
  currentFriend = friend;
  document.getElementById("chatWith").textContent = "Chatting with " + friend;
  document.getElementById("messages").innerHTML = "";

  if (!chats[friend]) chats[friend] = [];

  chats[friend].forEach(msg => {
    displayMessage(msg.text, msg.sender === myUsername ? "user" : "friend");
  });
}

// Send a message
function sendMessage() {
  if (!currentFriend) {
    alert("Select a friend to chat with!");
    return;
  }

  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if (!text) return;

  // Save message
  if (!chats[currentFriend]) chats[currentFriend] = [];
  chats[currentFriend].push({ sender: myUsername, text: text });
  localStorage.setItem("chats", JSON.stringify(chats));

  // Display
  displayMessage(text, "user");

  input.value = "";
  document.getElementById("messages").scrollTop =
    document.getElementById("messages").scrollHeight;
}

// Display message in chat window
function displayMessage(text, type) {
  const messagesDiv = document.getElementById("messages");
  const msg = document.createElement("div");
  msg.className = "message " + type;
  msg.textContent = text;
  messagesDiv.appendChild(msg);
}

// Run on page load
loadFriends();
