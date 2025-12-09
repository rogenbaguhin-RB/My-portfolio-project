const credentials = {
    username: "rogenbaguhin",
    password: "251-01325"
};

// Login functionality
const loginForm = document.getElementById("loginForm");
if(loginForm){
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if(username === credentials.username && password === credentials.password){
            // Store login state
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("username", username);
            // Redirect to portfolio page
            window.location.href = "portfolio.html";
        } else {
            document.getElementById("error").textContent = "Invalid username or password!";
        }
    });
}

// Portfolio page functionality
const userSpan = document.getElementById("user");
const logoutBtn = document.getElementById("logoutBtn");

// Check if user is logged in
if(userSpan){
    if(localStorage.getItem("loggedIn")){
        userSpan.textContent = localStorage.getItem("username");
    } else {
        // Redirect to login if not logged in
        window.location.href = "index.html";
    }
}

// Logout functionality
if(logoutBtn){
    logoutBtn.addEventListener("click", function(){
        // Ask user to confirm logout
        const confirmed = confirm("Are you sure you want to log out?");
        if(!confirmed) return; // If user cancels, do nothing

        // Remove login state
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("username");

        // Show a friendly confirmation message
        alert("You have successfully logged out.");

        // Redirect to login page
        window.location.href = "index.html";
    });
}

