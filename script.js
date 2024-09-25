const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

function moveNoButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();
    const yesRect = yesButton.getBoundingClientRect();

    let newX, newY;

    do {
        // Calculate random position within the container boundaries
        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        newX = Math.random() * maxX;
        newY = Math.random() * maxY;

    } while (
        newX < yesRect.right && newX + buttonRect.width > yesRect.left &&
        newY < yesRect.bottom && newY + buttonRect.height > yesRect.top
    );

    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

noButton.addEventListener("mouseover", moveNoButton);

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
    popup.classList.add('fade-in');
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.style.display = "none";
