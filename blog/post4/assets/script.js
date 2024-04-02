const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.dataset.value.split("")
        .map((letter, index) => {
            if (event.target.dataset.value[index] === " ") return " "; // Corrected condition for space
            if (index < iterations) {
                return event.target.dataset.value[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");

        if (iterations > event.target.dataset.value.length) {
            clearInterval(interval);
        } 

        iterations += 1/3;
    }, 30);
}
