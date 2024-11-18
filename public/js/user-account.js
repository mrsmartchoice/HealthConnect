const formContainer = document.querySelector('.form-container');
const logLink = document.querySelector('.log-link');
const regLink = document.querySelector('.reg-link');
const userProfile = document.querySelector('.user-icon');
const closeIcon = document.querySelector('.close-icon');

regLink.addEventListener('click', () => {
    formContainer.classList.add('active');
});

logLink.addEventListener('click', () => {
    formContainer.classList.remove('active');
});

userProfile.addEventListener('click', () => {
    formContainer.classList.add('active-popup');
});
closeIcon.addEventListener('click', () => {
    formContainer.classList.remove('active-popup');
});