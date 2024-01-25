// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const mensagensSorte = [
    "A vida trará grandes surpresas para você!",
    "Seja ousado e tudo será possível.",
    "Sua persistência será recompensada.",
    "Acredite nos seus sonhos.",
    "A sorte acompanha os corajosos."
];

// funções
function abrirBiscoito() {    
    toggleScreen();

    // Escolhe uma mensagem aleatória
    const mensagemSorte = mensagensSorte[Math.floor(Math.random() * mensagensSorte.length)];

    // Exibe a mensagem e esconde o botão
    mensagemBiscoito.textContent = mensagemSorte;
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")

    const mensagensSorte = [
        "A vida trará grandes surpresas para você!",
        "Seja ousado e tudo será possível.",
        "Sua persistência será recompensada.",
        "Acredite nos seus sonhos.",
        "A sorte acompanha os corajosos."
    ];
}

function handleResetClick() {
    toggleScreen();    
}