// Get the elements
const passwordInput = document.getElementById('passwordInput');
const revealBtn = document.getElementById('revealBtn');
const hiddenText = document.getElementById('hiddenText');

// Add event listener to the button
revealBtn.addEventListener('click', function() {
    if (passwordInput.value === 'password123') {
        hiddenText.style.display = 'block'; // Show the text
    } else {
        hiddenText.style.display = 'none'; // Hide the text
    }
});
