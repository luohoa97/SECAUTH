// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const container = document.querySelector('.container');
    const card = document.querySelector('.glassmorphic-card');

    // Get form data
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Send data to server
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Login successful!') {
            alert('Welcome!');
            card.classList.add('zoom-active');
            setTimeout(() => {
                card.style.display = 'none';
            }, 3000);
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
