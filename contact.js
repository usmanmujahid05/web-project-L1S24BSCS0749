const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
function validateForm() {

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return false;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email.";
        formMessage.style.color = "red";
        return false;
    }

    formMessage.textContent = "All fields are valid!";
    formMessage.style.color = "#a3e635";

    return true;
}

contactForm.addEventListener("input", function() {
    validateForm();
});

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (validateForm()) {

        formMessage.textContent =
            "Thank you! Your message has been submitted.";

        formMessage.style.color = "#a3e635";

        contactForm.reset();
    }

});
