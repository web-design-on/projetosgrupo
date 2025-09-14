document.getElementById("filtroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const esporte = document.getElementById("esporte").value;
    const cidade = document.getElementById("cidade").value;
    const bairro = document.getElementById("bairro").value;
    const estilo = document.getElementById("estilo").value;
    const data = document.getElementById("data").value;

    const cards = document.querySelectorAll(".card-evento");

    cards.forEach((card) => {
    let mostrar = true;

    if (esporte && card.dataset.esporte !== esporte) mostrar = false;
    if (cidade && card.dataset.cidade !== cidade) mostrar = false;
    if (bairro && card.dataset.bairro !== bairro) mostrar = false;
    if (estilo && card.dataset.estilo !== estilo) mostrar = false;
    if (data && card.dataset.data !== data) mostrar = false;

    card.style.display = mostrar ? "block" : "none";
    });
});
