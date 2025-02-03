const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format!');
        return;
    }

    alert('Form submitted successfully!');
});

const playButton = document.getElementById('playButton');
playButton.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    const resultMessage = randomNumber > 5
        ? `You win! Random number: ${randomNumber}`
        : `You lose. Random number: ${randomNumber}`;
    
    alert(resultMessage);
});





document.getElementById('addPointsButton').addEventListener('click', function() {
    let balance = parseInt(localStorage.getItem('balance')); 

    balance += 50;

    localStorage.setItem('balance', balance);

    document.getElementById('balance').textContent = balance;

    alert("You have received 50 points! 🎉");
});

