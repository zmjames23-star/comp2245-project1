
// Get the signup form and its fields
const signupForm = document.querySelector("#signup-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const frequencyInput = document.querySelector("#frequency");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const frequencyError = document.querySelector("#frequency-error");

const formMessage = document.querySelector("#form-message");

// Check the form when it is submitted
signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear any previous success message
    formMessage.textContent = "";
    formMessage.classList.remove("success");

    // Get the values entered by the user
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const frequency = frequencyInput.value.trim();

    let hasErrors = false;
    let firstInvalidField = null;

    // Check the name
    if (name === "") {
        nameError.textContent = "Enter your name.";
        nameInput.setAttribute("aria-invalid", "true");
        hasErrors = true;
        firstInvalidField = firstInvalidField || nameInput;
    } else {
        nameError.textContent = "";
        nameInput.removeAttribute("aria-invalid");
    }

    // Check the email
    if (email === "") {
        emailError.textContent = "Enter your email address.";
        emailInput.setAttribute("aria-invalid", "true");
        hasErrors = true;
        firstInvalidField = firstInvalidField || emailInput;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Enter an email address like name@example.com.";
        emailInput.setAttribute("aria-invalid", "true");
        hasErrors = true;
        firstInvalidField = firstInvalidField || emailInput;
    } else {
        emailError.textContent = "";
        emailInput.removeAttribute("aria-invalid");
    }

    // Check the email frequency
    if (frequency === "") {
        frequencyError.textContent = "Choose how often we should email you.";
        frequencyInput.setAttribute("aria-invalid", "true");
        hasErrors = true;
        firstInvalidField = firstInvalidField || frequencyInput;
    } else {
        frequencyError.textContent = "";
        frequencyInput.removeAttribute("aria-invalid");
    }

    // If there are errors, focus the first field with an error
    if (hasErrors) {
        firstInvalidField.focus();
        return;
    }

    // Display a thank-you message
    formMessage.textContent = `Thank you, ${name}! You're on the mailing list.`;
    formMessage.classList.add("success");

    // Clear the form
    signupForm.reset();
});

