const loginsec = document.querySelector('.login-section');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const signupbtn = document.querySelector('.signup-btn');

registerlink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    loginsec.classList.add('active');
});

loginlink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    loginsec.classList.remove('active');
});

signupbtn.addEventListener('click', () => {
    loginsec.classList.add('active');
});
