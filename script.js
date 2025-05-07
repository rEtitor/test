const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

// Redireciona para a página "sim.html" ao clicar no botão "SIM"
yesButton.addEventListener('click', () => {
    window.location.href = 'sim.html';
});

// Move o botão "NÃO" para uma posição aleatória ao clicar
noButton.addEventListener('click', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});