const colors = ["#FFFFFF"];
const numBalls = 40;
const balls = [];

// Function to get a random number within a range
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a ball element
function createBall() {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    const ballSize = getRandom(100, 30); // Random size between 10 and 20 pixels
    ball.style.width = `${ballSize}px`;
    ball.style.height = `${ballSize}px`;

    // Calculate the maximum left and top positions considering ball size
    const maxLeft = window.innerWidth;
    const maxTop = window.innerHeight;

    ball.style.left = `${getRandom(0, maxLeft)}px`;
    ball.style.top = `${getRandom(0, maxTop)}px`;

    document.body.append(ball);
    balls.push(ball);
}

// Function to create all balls
function createBalls() {
    for (let i = 0; i < numBalls; i++) {
        createBall();
    }
}

// Function to animate balls
function animateBalls() {
    balls.forEach(ball => {
        const toX = getRandom(-20, window.innerWidth / 2);
        const toY = getRandom(-20, window.innerHeight / 2);

        const maxTranslateX = toX < 0 ? -toX : window.innerWidth;
        const maxTranslateY = window.innerHeight;

        ball.animate(
            [
                { transform: "translate(0, 0)" },
                { transform: `translate(${Math.min(maxTranslateX, toX)}px, ${Math.min(maxTranslateY, toY)}px)` }
            ],
            {
                duration: (Math.random() + 0.5) * 1000, // Faster animation
                direction: "alternate",
                fill: "both",
                iterations: Infinity,
                easing: "ease-in-out"
            }
        );
    });
}

function removeBalls() {
    balls.forEach(ball => ball.remove());
    balls.length = 0; // Clear the balls array
}

// Event listener for window resize
window.addEventListener('resize', () => {
    removeBalls();
    createBalls();
});

// Initialize
createBalls();
animateBalls();
