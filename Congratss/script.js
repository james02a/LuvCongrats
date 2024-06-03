document.addEventListener("DOMContentLoaded", () => {
    const confettiContainer = document.getElementById('confetti-container');

    function createConfettiPiece() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;

        confettiContainer.appendChild(confetti);

        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }

    function getRandomColor() {
        const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function generateConfetti() {
        for (let i = 0; i < 100; i++) {
            setTimeout(createConfettiPiece, i * 100);
        }
    }

    generateConfetti();
    setInterval(generateConfetti, 5000);
});
