const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    event.preventDefault();
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    event.preventDefault();
    container.classList.remove("active");
});