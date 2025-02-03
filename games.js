if (localStorage.getItem('balance') === null) {
    localStorage.setItem('balance', 100);
}

let balance = parseInt(localStorage.getItem('balance'));
document.getElementById('balance').textContent = balance;

const slotSymbols = ['🍒', '🍉', '🍋', '🍊', '🍓', '🍇', '🍊', '🍍', '🍒'];

document.getElementById('spinSlotButton').addEventListener('click', function() {
    playSlotGame();
});

function playSlotGame() {
    const slot1 = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
    const slot2 = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
    const slot3 = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];

    document.getElementById('slot1').textContent = slot1;
    document.getElementById('slot2').textContent = slot2;
    document.getElementById('slot3').textContent = slot3;

    let resultMessage = document.getElementById('slotResult');
    resultMessage.innerHTML = `${slot1} ${slot2} ${slot3}`;

    if (slot1 === slot2 && slot2 === slot3) {
        balance += 10;
        resultMessage.textContent = "You won 10 points! 🎰";
    } else {
        balance -= 5;
        resultMessage.textContent = "You lost 5 points. 😞";
    }

    if (balance < 0) {
        balance = 0;
    }

    updateBalance();
}

function updateBalance() {
    localStorage.setItem('balance', balance);
    document.getElementById('balance').textContent = balance;
}

const betRedButton = document.getElementById('betRedButton');
const betBlackButton = document.getElementById('betBlackButton');

betRedButton.addEventListener('click', function() {
    playRoulette('red');
});

betBlackButton.addEventListener('click', function() {
    playRoulette('black');
});

function playRoulette(betColor) {
    const result = Math.floor(Math.random() * 37);

    const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
    const blackNumbers = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

    let resultColor = 'green';

    if (result === 0) {
        resultColor = 'green';
    } else if (redNumbers.includes(result)) {
        resultColor = 'red';
    } else if (blackNumbers.includes(result)) {
        resultColor = 'black';
    }

    animateBall(result, resultColor);

    const resultMessage = `The ball landed on ${result} (${resultColor}).`;
    document.getElementById('roulette-result').textContent = resultMessage;

    if (resultColor === betColor) {
        balance += 10;
        alert("You won 10 points! 🎉");
    } else {
        balance -= 5;
        alert("You lost 5 points. 😞");
    }

    if (balance < 0) {
        balance = 0;
    }

    updateBalance();
}

function animateBall(result, resultColor) {
    const ball = document.createElement('div');
    ball.classList.add('roulette-ball');
    document.getElementById('roulette-table').appendChild(ball);

    const existingBall = document.querySelector('.roulette-ball');
    if (existingBall) {
        existingBall.remove();
    }

    const tile = document.getElementById(`tile${result}`);
    const tileRect = tile.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();

    ball.style.position = 'absolute';
    ball.style.left = `${tileRect.left + (tileRect.width / 2) - (ballRect.width / 2)}px`;
    ball.style.top = '-50px';

    ball.style.transition = 'top 2s ease-in-out, left 2s ease-in-out';

    setTimeout(() => {
        ball.style.top = `${tileRect.top + (tileRect.height / 2) - (ballRect.height / 2)}px`;
    }, 10);
}

document.getElementById('addPointsButton').addEventListener('click', function() {
    let balance = parseInt(localStorage.getItem('balance'));

    balance += 50;

    localStorage.setItem('balance', balance);

    document.getElementById('balance').textContent = balance;

    alert("You have received 50 points! 🎉");
});
