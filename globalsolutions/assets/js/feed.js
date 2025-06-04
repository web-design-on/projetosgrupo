function criarCard(nome, localizacao, depoimento, imgPerfil, imgPost) {
    const dataCriacao = new Date();
    const dataFormatada = dataCriacao.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).replace(',', ' às');

    const card = $(`
        <div class="card">
            <div class="d-flex align-items-center gap-3 user-info">
                <img src="${imgPerfil}" alt="${nome}">
                <div>
                    <p class="mb-0 name">${nome}</p>
                    <p class="mb-0 location">${localizacao}</p>
                </div>
            </div>
            <p class="mb-0">${depoimento}</p>
            <img src="${imgPost}" class="${imgPost == '' ? 'd-none' : ''}" alt="Post de ${nome}">
            <p class="date">${dataFormatada}</p>
            <div class="d-flex align-items-center gap-3 mt-3">
                <button class="btn btn-primary">Confirmar</button>
                <button class="btn btn-highlight">Negar</button>
            </div>
        </div>
    `);

    $('#feed').append(card);
}

$(document).ready(function () {
    criarCard('Natali Schers', 'Ribeirão Pires, SP', 'Saí aqui da estação e tá tudo alagado, sem condições de passar, tentem outro caminho!', 'https://github.com/natali-schers.png', 'https://i0.wp.com/diariodostrilhos.com/wp-content/uploads/2021/12/image-9.png?resize=1200%2C537&ssl=1');
    criarCard('Sarah Maranhão', 'Francisco Morato, SP', 'Aqui ao redor da estação tá tudo alagado. Não venham pra cá!!! Estou parada aqui numa rua esperando a água abaixar, fazer o que né...', 'https://github.com/smaranha.png', '');
    criarCard('Stephanie Cruz', 'Suzano, SP', 'Galera, tem um incêndio rolando no centro, tem muita fumaça por todo lado... Quem tiver parentes por lá, sugiro entrar em contato para garantir que estão bem 🙏', 'https://github.com/Web-D-on.png', 'https://static.poder360.com.br/2024/06/Incendio-Vila-Andrade-SP-25-junho-2024-848x477.png');
    criarCard('Pedro Fernandes', 'Santo André, SP', 'Santo André amanheceu completamente alagada... Espero que estejam todos bem, a situação por aqui está assustadora', 'https://github.com/Pedroedgard.png', '');
    criarCard('Rebeca Soares', 'Osasco, SP', 'Gente, que situação! Várias casas desaparecendo com a chuva aqui em Osasco 😢', 'https://github.com/Rebeca-Soares.png', 'https://sbtnews.sbt.com.br/_next/image?url=https%3A%2F%2Fsbt-news-assets-prod.s3.sa-east-1.amazonaws.com%2Fdeslizamento_terra_osasco_1_04b30a040e.jpg&w=400&q=90');
});