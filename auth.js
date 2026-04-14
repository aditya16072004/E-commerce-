// Protect Pages
function checkLogin() {
let user = localStorage.getItem("loggedInUser") || sessionStorage.getItem("loggedInUser");
if (!user) {
window.location.href = "login.html";
}
}
// Show Username
function showUsername() {
let userData = JSON.parse(localStorage.getItem("loggedInUser") || sessionStorage.getItem("loggedInUser"));
if (userData) {
let usernameElement = document.getElementById("username");
if (usernameElement) {
usernameElement.innerText = "Welcome, " + userData.name;
}
}
}
