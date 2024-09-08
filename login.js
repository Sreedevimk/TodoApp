document.getElementById('log').addEventListener('click', function() {
    // Get user input values
    var username = document.getElementById('name').value;
    var password = document.getElementById('pass').value;
    
    // Validate the credentials
    if (username === 'admin' && password === '12345') {
        // Redirect to another page (e.g., dashboard.html)
        window.location.href = 'index2.html'; // Change 'dashboard.html' to the desired URL
    } else {
        document.getElementById('message').textContent = 'Invalid username or password';
    }
})