document.getElementById("newsletterForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = this.querySelector('input[type="email"]');
    if (emailInput.value.trim() !== "") {
        alert("Inscrição realizada com sucesso!");
        this.reset();
    } else {
        alert("Por favor, insira um endereço de e-mail válido.");
    }
})
