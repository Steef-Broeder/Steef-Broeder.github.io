// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a floating ball
function createFloatingBall() {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    const diameter = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
    ball.style.width = `${getRandomNumber(diameter - 50, diameter + 50)}px`; // Random width
    ball.style.height = ball.style.width; // Make it circular
    ball.style.background = 'rgba(255, 255, 255, 0.3)'; // Set the background color to white with 50% transparency
    ball.style.left = `${getRandomNumber(0 - diameter, window.innerWidth + diameter)}px`; // Random horizontal position
    ball.style.top = `${getRandomNumber(0 - diameter, window.innerHeight + diameter)}px`; // Random vertical position
    ball.style.boxShadow = '0 0 10px 10px rgba(255, 255, 255, 0.3)';

    document.getElementById('ball-container').appendChild(ball);

    // Move the ball
    moveBall(ball, diameter / 2);
}

// Function to move the ball
function moveBall(ball, r) {
    const angle = getRandomNumber(0, Math.PI * 2); // Random angle
    const speed = getRandomNumber(0.1, 1);
    const radius = r;
    let dx = Math.cos(angle) * speed; // Horizontal speed component
    let dy = Math.sin(angle) * speed; // Vertical speed component

    function updatePosition() {
        const rect = ball.getBoundingClientRect();
        if (rect.left <= 0 - radius*2) {
            dx = Math.abs(dx); // Make direction positive if ball hits left edge
        }
        if (rect.right >= window.innerWidth + radius*2) {
            dx = -Math.abs(dx); // Make direction negative if ball hits right edge
        }
        if (rect.top <= 0 - radius*2) {
            dy = Math.abs(dy); // Make direction positive if ball hits left edge
        }
        if (rect.bottom >= window.innerHeight + radius*2) {
            dy = -Math.abs(dy); // Make direction negative if ball hits right edge
        }

        ball.style.left = `${rect.left + dx}px`;
        ball.style.top = `${rect.top + dy}px`;

        requestAnimationFrame(updatePosition);
    }

    updatePosition();
}

// Function to create initial balls
function createInitialBalls() {
    for (let i = 0; i < 4; i++) {
        createFloatingBall();
    }
}

// Function to remove all balls
function removeBalls() {
    const ballContainer = document.getElementById('ball-container');
    while (ballContainer.firstChild) {
        ballContainer.removeChild(ballContainer.firstChild);
    }
}

// Function to reset balls
function resetBalls() {
    removeBalls();
    createInitialBalls();
}

// Call the resetBalls function when the reset button is pressed
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetBalls);

// Call the createInitialBalls function when the page loads
createInitialBalls();
