const jogosExtras = [
    {
        nome: "DEATHBOUND",
        modo: "Singleplayer",
        plataforma: "Windows",
        genero: "RPG, Ação, Aventura, Indie"
    },
    {
        nome: "DIESEL LEGACY",
        modo: "Singleplayer e Multiplayer",
        plataforma: "Windows, macOS",
        genero: "Ação, Indie, Luta"
    },
    {
        nome: "MARS 2120",
        modo: "Singleplayer",
        plataforma: "PS4, PS5",
        genero: "Ação, Sci-fi, Aventura"
    },
    {
        nome: "MOMODORA",
        modo: "Singleplayer",
        plataforma: "Windows",
        genero: "Ação, Aventura, Indie"
    },
    {
        nome: "MULLET MADJACK",
        modo: "Singleplayer",
        plataforma: "Windows",
        genero: "FPS, Arcade, Ação, Indie"
    },
    {
        nome: "DANDARA",
        modo: "Singleplayer",
        plataforma: "Windows, macOS",
        genero: "Metroidvania, Ação, Indie"
    },
    {
        nome: "BLAZING CHROME",
        modo: "Singleplayer",
        plataforma: "Windows",
        genero: "Ação, Indie"
    },
    {
        nome: "HORIZON CHASE",
        modo: "Singleplayer",
        plataforma: "Windows, macOS",
        genero: "Ação, Casual, Indie, Corrida, Esportes"
    },
    {
        nome: "CHROMA SQUAD",
        modo: "Singleplayer",
        plataforma: "Windows, macOS",
        genero: "Metroidvania"
    },
    {
        nome: "STARLIT ADVENTURES",
        modo: "Singleplayer",
        plataforma: "PS4, PS5",
        genero: "Aventura"
    },
    {
        nome: "UNSIGHTED",
        modo: "Singleplayer",
        plataforma: "Windows",
        genero: "Ação, Aventura, Indie, RPG"
    },
    {
        nome: "NO PLACE FOR BRAVERY",
        modo: "Singleplayer",
        plataforma: "Windows",
        genero: "Ação, Aventura, Indie, RPG"
    },
    {
        nome: "FOBIA: ST. DINFNA HOTEL",
        modo: "Singleplayer",
        plataforma: "Windows",
        genero: "Indie"
    },
    {
        nome: "KNIGHTS OF PEN AND PAPER",
        modo: "Singleplayer",
        plataforma: "Windows, macOS",
        genero: "Indie, RPG"
    },
];

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const nome = card.querySelector('h5')?.innerText.trim().toUpperCase();
    const dados = jogosExtras.find(jogo => jogo.nome === nome);

    if (dados) {
        const info = document.createElement('div');
        info.className = 'card-hover-info bg-white text-dark rounded p-2 border shadow-sm position-absolute start-100 top-0 ms-2 small font-poppins';
        info.innerHTML = `
            <p class="mb-1">🎮 ${dados.modo}</p>
            <p class="mb-1">💻 ${dados.plataforma}</p>
            <p class="mb-0">🧩 ${dados.genero}</p>
        `;
        card.appendChild(info);
    }
});