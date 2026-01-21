// auth.js - client-side authentication helper

function isLoggedIn() {
    return !!localStorage.getItem('currentUser');
}

function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

function logout() {
    localStorage.removeItem('currentUser');
    // Redirect to home after logout
    window.location.href = 'index.html';
}

function requireAuth() {
    if (!isLoggedIn()) {
        // If not logged in, redirect to login page
        window.location.href = 'login.html';
    }
}

function checkAutoRedirect() {
    // If user is on login/register and logged in, send them to home or dashboard
    const path = window.location.pathname;
    if (isLoggedIn() && (path.includes('login.html') || path.includes('register.html'))) {
        window.location.href = 'index.html';
    }
}

function updateNav() {
    const navContent = document.getElementById('navContent');
    if (!navContent) return;

    const loggedIn = isLoggedIn();
    const user = getCurrentUser();

    let html = `
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="job-interview.html">Interview Prep</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </div>
        <div class="nav-auth">
    `;

    if (loggedIn) {
        html += `
            <span style="margin-right: 15px; font-weight: 500; color: var(--text-muted)">Hi, ${user.email.split('@')[0]}</span>
            <a href="#" onclick="logout(); return false;" class="btn-logout">Logout</a>
        `;
    } else {
        html += `
            <a href="login.html" class="btn-nav-login">Login</a>
            <a href="register.html" class="btn-nav-signup">Sign Up</a>
        `;
    }

    html += `</div>`;
    navContent.innerHTML = html;
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    updateNav();
    checkAutoRedirect();
});
