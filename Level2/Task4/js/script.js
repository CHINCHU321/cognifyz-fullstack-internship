const form = document.getElementById('myForm');
const messages = document.getElementById('messages');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const confirmPassword = form.confirmPassword.value.trim();

    // Validate password strength
    if (password.length < 8) {
        messages.innerHTML = 'Password must be at least 8 characters long.';
        return;
    }

    // Validate password match
    if (password !== confirmPassword) {
        messages.innerHTML = 'Passwords do not match.';
        return;
    }

    // If all validation passes, display success message
    messages.innerHTML = 'Form submitted successfully!';
});

