var head = document.getElementsByTagName("head")[0];
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "https://unpkg.com/akar-icons-fonts/src/css/akar-icons.css";
head.appendChild(link);

var scene = $("#scene");
var parallaxInstance = new Parallax(scene);


function validateForm() {
  //  Check the format of the email and user name
  var email = document.getElementById('exampleInputEmail1').value;
  var username = document.getElementById('exampleInputUsername1').value;

  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidUsername(username) {
    var usernameRegex = /^[a-zA-Z0-9_]+$/;
    return usernameRegex.test(username);
  }

  if (!isValidEmail(email)) {
    alert('Invalid email format');
    return;
  }

  if (!isValidUsername(username)) {
    alert('Invalid username format');
    return;
  }

  //  Show password strength meter
  var password = document.getElementById('exampleInputPassword1').value;
  var strengthMeter = document.getElementById('password-strength-meter');
  strengthMeter.innerHTML = calculatePasswordStrength(password);

  // Compare passwords for confirmation
  var confirmPassword = document.getElementById('exampleInputPasswordConfirmation1').value;
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  alert('Form submitted successfully!');
}

function checkPasswordStrength() {
  var password = document.getElementById('exampleInputPassword1').value;
  var strengthMeter = document.getElementById('password-strength-meter');

  var strength = 0;

  if (password.length >= 8 && password.length <=16) {
    strength += 30;
  // }else if (password.length<8 && password.length>0){
  //   alert('password is too short')
  // }else if (password.length>16){
  //   alert ('password is too long')
  }else if(password.length==0){
    strength=0;
  }

  if (/[A-Z]/.test(password)) {
    strength += 20;
  }

  if (/[a-z]/.test(password)) {
    strength += 20;
  }

  if (/\d/.test(password)) {
    strength += 20;
  }

  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    strength += 5;
  }

  if (!/(password|12345|qwerty)/i.test(password)) {
    strength += 5;
  }

  strengthMeter.textContent = 'Password Strength: ' + strength + '%';
  strengthMeter.style.color = getColorForStrength(strength);
}

function getColorForStrength(strength) {
  if (strength >= 70) {
    return 'green';
  } else if (strength >= 40) {
    return 'orange';
  } else {
    return 'red';
  }
}
