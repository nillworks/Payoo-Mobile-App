const loginButton = document.getElementById('login-btn');

loginButton.addEventListener('click', () => {
  // mobile number get And pin Number get
  const numberInput = document.getElementById('number_input');
  const pinInput = document.getElementById('pin_input');

  // match pin and mobile number user login
  if (numberInput.value === '01612475642' && Number(pinInput.value) === 1234) {
    alert('Login Success');
    window.location.assign('../Html/home.html');
  } else {
    alert('Login Failed');
  }
});
