function validateForm(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const interests = document.querySelectorAll('input[name="interests"]:checked');
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
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }
    if (interests.length === 0) {
      alert('Please select at least one interest.');
      return false;
    }
    window.location.href="Landling.html"
    return true;
}