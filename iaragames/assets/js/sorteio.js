document.addEventListener("DOMContentLoaded", function () {
    const modalElement = document.getElementById('modalSorteio');

    if (localStorage.getItem('cupomResgatado') == null) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    } else {
        modalElement.remove();
    }
});

document.getElementById('sortear').addEventListener('click', function () {
    const cupons = [
        'DESCONTO10',
        'PROMO20',
        'OFERTA30',
        'SUPER40',
        'MEGA50'
    ];

    const cupomSorteado = cupons[Math.floor(Math.random() * cupons.length)];

    const paragrafo = document.getElementById('sorteioTxt');
    paragrafo.textContent = 'Parabéns! Seu cupom de desconto é:';
    paragrafo.classList.add('fw-bold', 'text-center');

    const cupom = document.getElementById('cupom');
    cupom.textContent = cupomSorteado;
    cupom.classList.add('text-success', 'fw-bold', 'text-center', 'fs-4');
    cupom.classList.remove('d-none');

    const botaoSorteio = document.getElementById('sortear');
    botaoSorteio.remove();

    const botaoFechar = document.getElementById('fechar');
    botaoFechar.remove();

    const botaoResgatar = document.getElementById('resgatar');
    botaoResgatar.classList.remove('d-none');

    localStorage.setItem('cupomResgatado', cupomSorteado);
});

document.getElementById('resgatar').addEventListener('click', function () {
    const cupom = document.getElementById('cupom');

    navigator.clipboard.writeText(cupom.textContent);

    const toastElement = document.getElementById('toastNotificacao');
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
});