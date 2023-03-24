user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = index.html;
}

function send() {
msg = document.getElementById("msg").value;
firebase.databse().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value = "";
}