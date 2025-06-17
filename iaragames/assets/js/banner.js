const frases = document.querySelectorAll(".frase");
let indiceAtual = 0;

setInterval(() => {
    frases[indiceAtual].classList.remove("mostrar");

    indiceAtual = (indiceAtual + 1) % frases.length;

    frases[indiceAtual].classList.add("mostrar");
}, 4000);