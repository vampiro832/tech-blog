const signUpForm = async (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    signUp(); // Call the sign-up function

    function signUp() {
        // Retrieve user input
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '' || email === '' || password === '') {
            alert('fill out all fields');
            return;
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        } else {
            alert('Failed to log in');
        }
    };
};

document
    .querySelector('#signupForm')
    .addEventListener('click', signUpForm);