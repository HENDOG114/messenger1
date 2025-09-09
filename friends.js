const friendInput = document.getElementById('friendInput');
const addFriendBtn = document.getElementById('addFriendBtn');
const friendList = document.getElementById('friendList');
const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

let friends = {};
let currentFriend = null;

addFriendBtn.addEventListener('click', () => {
  const name = friendInput.value.trim();
  if (name && !friends[name]) {
    friends[name] = [];
    const li = document.createElement('li');
    li.textContent = name;
    li.addEventListener('click', () => selectFriend(name, li));
    friendList.appendChild(li);
    friendInput.value = '';
  }
});

function selectFriend(name, element) {
  currentFriend = name;
  [...friendList.children].forEach(li => li.classList.remove('active'));
  element.classList.add('active');
  renderMessages();
}

sendBtn.addEventListener('click', () => {
  const msg = messageInput.value.trim();
  if (msg && currentFriend) {
    friends[currentFriend].push(msg);
    messageInput.value = '';
    renderMessages();
	const signupSection = document.getElementById('signupSection');
const newUsernameInput = document.getElementById('newUsernameInput');
const signupBtn = document.getElementById('signupBtn');

const mainApp = document.getElementById('mainApp');
const welcomeMsg = document.getElementById('welcomeMsg');

const friendInput = document.getElementById('friendInput');
const addFriendBtn = document.getElementById('addFriendBtn');
const friendList = document.getElementById('friendList');
const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

let registeredUsers = {};
let currentUser = null;
let friends = {};
let currentFriend = null;

// Sign-Up Logic
signupBtn.addEventListener('click', () => {
  const username = newUsernameInput.value.trim();
  if (!username) {
    alert("Username can't be empty.");
    return;
  }
  if (registeredUsers[username]) {
    alert("Username already taken. Try another.");
    return;
  }

  registeredUsers[username] = true;
  currentUser = username;
  signupSection.classList.add('hidden');
  mainApp.classList.remove('hidden');
  welcomeMsg.textContent = `Welcome, ${currentUser}!`;
});

// Friend Management
addFriendBtn.addEventListener('click', () => {
  const name = friendInput.value.trim();
  if (name && !friends[name]) {
    friends[name] = [];
    const li = document.createElement('li');
    li.textContent = name;
    li.addEventListener('click', () => selectFriend(name, li));
    friendList.appendChild(li);
    friendInput.value = '';
  }
});

function selectFriend(name, element) {
  currentFriend = name;
  [...friendList.children].forEach(li => li.classList.remove('active'));
  element.classList.add('active');
  renderMessages();
}

// Messaging
sendBtn.addEventListener('click', () => {
  const msg = messageInput.value.trim();
  if (msg && currentFriend) {
    const formattedMsg = `${currentUser}: ${msg}`;
    friends[currentFriend].push(formattedMsg);
    messageInput.value = '';
    renderMessages();
  }
});

function renderMessages() {
  chatBox.innerHTML = '';
  if (currentFriend) {
    friends[currentFriend].forEach(msg => {
      const p = document.createElement('p');
      p.textContent = msg;
      chatBox.appendChild(p);
    });
  }
}

  }
});

function renderMessages() {
  chatBox.innerHTML = '';
  if (currentFriend) {
    friends[currentFriend].forEach(msg => {
      const p = document.createElement('p');
      p.textContent = msg;
      chatBox.appendChild(p);
    });
  }
}
