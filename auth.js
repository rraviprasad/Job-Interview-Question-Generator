// auth.js - client-side authentication helper

function isLoggedIn() {
  return !!localStorage.getItem('currentUser');
}

function logout() {
  localStorage.removeItem('currentUser');
  // Redirect to home after logout
  location.href = 'index.html';
}

function requireAuth() {
  if (!isLoggedIn()) {
    // If not logged in, redirect to login page
    location.href = 'login.html';
  }
}

function updateNav() {
  const rightMenu = document.getElementById('authLinks');
  if (!rightMenu) return;
  rightMenu.innerHTML = '';
  if (isLoggedIn()) {
    const logoutLink = document.createElement('a');
    logoutLink.href = '#';
    logoutLink.textContent = 'Logout';
    logoutLink.onclick = function (e) {
      e.preventDefault();
      logout();
    };
    rightMenu.appendChild(logoutLink);
  } else {
    const loginLink = document.createElement('a');
    loginLink.href = 'login.html';
    loginLink.textContent = 'Login';
    const registerLink = document.createElement('a');
    registerLink.href = 'register.html';
    registerLink.textContent = 'Register';
    rightMenu.appendChild(loginLink);
    rightMenu.appendChild(document.createTextNode(' '));
    rightMenu.appendChild(registerLink);
  }
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', updateNav);
