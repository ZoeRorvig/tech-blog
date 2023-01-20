const loginFormHandler = async function(event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-input-login');
  const passwordEl = document.querySelector('#password-input-login');

  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
    console.log(response);
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to login');
  }
};

document
  .querySelector('#login-btn')
  .addEventListener('click', loginFormHandler);
