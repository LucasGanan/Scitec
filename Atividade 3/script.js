const imagens = document.querySelectorAll(".galeria img");
const btnEsquerda = document.getElementById("esquerda");
const btnDireita = document.getElementById("direita");

let indiceAtual = 0;

btnDireita.addEventListener("click", () => {
    imagens[indiceAtual].classList.remove("ativa");

    indiceAtual++;

    if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }

    imagens[indiceAtual].classList.add("ativa");
});

btnEsquerda.addEventListener("click", () => {
    imagens[indiceAtual].classList.remove("ativa");

    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    }

    imagens[indiceAtual].classList.add("ativa");
});