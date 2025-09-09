// Load friends from localStorage
let friends = JSON.parse(localStorage.getItem("friends")) || [];

// Fake list of "existing" users
let existingUsers = ["Henry", "Sarah", "Mike", "Anna", "Chris"];

function searchUser() {
  const input = document.getElementById("searchUser");
  const name = input.value.trim();
  const resultDiv = document.getElementById("searchResult");

  if (!name) {
    resultDiv.innerHTML = "<p>Please enter a username.</p>";
    return;
  }

  if (existingUsers.includes(name)) {
    resultDiv.innerHTML = `
      <p>User <strong>${name}</strong> found!</p>
      <button onclick="addFriend('${name}')">Add Friend</button>
    `;
  } else {
    resultDiv.innerHTML = `<p>User <strong>${name}</strong> not found.</p>`;
  }
}

function addFriend(name) {
  if (!friends.includes(name)) {
    friends.push(name);
    localStorage.setItem("friends", JSON.stringify(friends));
    displayFriends();
    document.getElementById("searchResult").innerHTML = `<p>${name} has been added!</p>`;
  } else {
    document.getElementById("searchResult").innerHTML = `<p>${name} is already your friend.</p>`;
  }
}

function displayFriends() {
  const list = document.getElementById("friendsList");
  list.innerHTML = "";
  friends.forEach(friend => {
    const li = document.createElement("li");
    li.textContent = friend;
    list.appendChild(li);
  });
}

// Load friends when the page opens
displayFriends();
