function validateForm() {
  console.log("entered");
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const usernameRegex = /^[A-Za-z]{1,7}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,10}$/;
  if (!usernameRegex.test(username)) {
    alert('Username must contain only letters and be up to 7 characters long.');
    return false;
  }
  if (!passwordRegex.test(password)) {
    alert('Password must be between 6 to 10 characters long and contain at least one uppercase letter, one lowercase letter, one special character, and one digit.');
    return false;
  }
    // If validation passes, navigate to Landing.html
    document.getElementById('loginForm').action = 'landing1.html';
    document.getElementById('loginForm').method = 'GET';
  return true;
}

  