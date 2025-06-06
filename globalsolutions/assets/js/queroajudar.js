document.querySelector('.form-container form').addEventListener('submit', function (e) {
    e.preventDefault();

    const toastElement = document.getElementById('toastNotificacao');
    const toast = new bootstrap.Toast(toastElement);
    toast.show();

    this.reset();
});
