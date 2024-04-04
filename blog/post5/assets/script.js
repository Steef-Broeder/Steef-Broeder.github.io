const characters = "-ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.?!@#$%^&*()_+=<>/';:~";

document.querySelector("h1").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.dataset.value.split("")
            .map((letter, index) => {
                if (event.target.dataset.value[index] === " ") return " ";
                if (characters.indexOf(event.target.dataset.value[index]) <= iterations) {
                    return event.target.dataset.value[index]
                }
                return characters[iterations];
            })
            .join("");

        if (iterations >= characters.length) {
            clearInterval(interval);
        }
        iterations += 1;

    }, 50);


    
}