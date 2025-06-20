const carrossel = document.querySelector('.carrossel');
document.querySelector('.btn-proximo').addEventListener('click', () => {
    carrossel.scrollBy({ left: 300, behavior: 'smooth' });
});

document.querySelector('.btn-anterior').addEventListener('click', () => {
    carrossel.scrollBy({ left: -300, behavior: 'smooth' });
});