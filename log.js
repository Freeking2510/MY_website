// Select the form
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting automatically

    // Get the input values
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();

    // Check if fields are empty
    if (!username || !password) {
        displayError("Please fill in all fields.");
        return;
    }

    // Validation logic
    if (username === "admin" && password === "12345") {
        // Redirect to Freeking.html in the Freeking folder
        window.location.href = "../index.html";
    } else {
        // Display an error message
        displayError("Invalid username or password. Please try again.");
    }
});

// Function to display error messages
function displayError(message) {
    const errorContainer = document.querySelector(".error-message");
    if (errorContainer) {
        errorContainer.textContent = message;
        errorContainer.style.display = "block";
    } else {
        alert(message); // Fallback to alert if no error container exists
    }
}
