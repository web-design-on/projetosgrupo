
const dataLancamento = new Date("2025-07-01T00:00:00").getTime(); // ajuste a data conforme o lançamento do jogo.

const intervalo = setInterval(() => {
    const agora = new Date().getTime();
    const diferenca = dataLancamento - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias.toString().padStart(2, '0');
    document.getElementById("horas").innerText = horas.toString().padStart(2, '0');
    document.getElementById("minutos").innerText = minutos.toString().padStart(2, '0');
    document.getElementById("segundos").innerText = segundos.toString().padStart(2, '0');

    if (diferenca < 0) {
        clearInterval(intervalo);
        document.querySelector(".countdown-section").innerHTML = "<h2 class='text-success'>Já está disponível!</h2>";
    }
}, 1000);

