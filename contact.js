function validateContactForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorMessage = document.getElementById("contact-error-message");

    if (!name || !email || !message) {
        errorMessage.textContent = "All fields are required!";
        errorMessage.style.display = "block";
        return false;
    }

    return true;
}
