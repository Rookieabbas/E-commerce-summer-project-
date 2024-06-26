document.addEventListener('DOMContentLoaded', function () {
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const errorElement = document.getElementById('error');

    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailForm.addEventListener('submit', function (event) {
        // Clear previous error message
        errorElement.textContent = '';

        // Prevent the form from submitting
        event.preventDefault();

        // Get the value of the email input
        const email = emailInput.value;

        // Validate the email format
        if (!emailRegex.test(email)) {
            errorElement.textContent = 'Please enter a valid email address.';
        } else {
            // Proceed with form submission or further processing
            reDirectToHomePage()
            // You can submit the form here if needed
            // emailForm.submit();
        }
    });
    function reDirectToHomePage() {
        window.location.href = "index.html"
    }
})