
const registerForm = document.getElementById("registerForm");
const registerMessage = document.getElementById("registerMessage");

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    registerMessage.textContent =
        "Registration successful! Welcome to IRONCORE FITNESS.";

    registerMessage.style.color = "#a3e635";

    registerForm.reset();
});
