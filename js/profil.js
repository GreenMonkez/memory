const users = JSON.parse(localStorage.getItem("userData")) ?? [];
const userEmail = JSON.parse(localStorage.getItem("activeUser")) ?? [];
const user = users.find(user => user.email === userEmail) ?? [];
const userName = user['name'] ?? [];
document.getElementById('name').value = userName;
document.getElementById('email').value = userEmail;
document.getElementById('name').readOnly = true;
document.getElementById('email').readOnly = true;
