function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    message.innerHTML = '';
    if (username.length < 3) {
      message.innerHTML = '<p>Username must be at least 3 characters long.</p>';
      return false;
    }
    if (password.length < 6) {
      message.innerHTML = '<p>Password must be at least 6 characters long.</p>';
      return false;
    }
    return true;
  }
  