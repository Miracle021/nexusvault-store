function loginUser() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const hashedPass = CryptoJS.SHA512(pass).toString();

  const validUser = "admin";
  const validHash = CryptoJS.SHA512("1234").toString(); // default pass: 1234

  if (user === validUser && hashedPass === validHash) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials.");
  }
  return false;
}
