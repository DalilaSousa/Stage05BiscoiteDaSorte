// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortune-Cookie")
const btnReset = document.querySelector("#btnReset")

const mensagensSorte = [
    "A vida trará grandes surpresas para você!",
    "Seja ousado e tudo será possível.",
    "Sua persistência será recompensada.",
    "Acredite nos seus sonhos.",
    "A sorte acompanha os corajosos."
];

fortuneCookie.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen2.classList.contains('hide')){
        handleTryClick()
    } else if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
        }
    }
)

function handleTryClick(event) {
    toggleScreen();
    abrirBiscoito();
}

// funções
function abrirBiscoito() {    
    let allFortunes = mensagensSorte.length
    let randomNumber = Math.floor(Math.random() * allFortunes)  
    screen2.querySelector("h2").innerText = `${mensagensSorte[randomNumber]}`
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleResetClick() {
    toggleScreen();    
}