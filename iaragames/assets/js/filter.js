document.getElementById('filterBtn').addEventListener('click', function() {
    const price = document.getElementById('price').value;
    const platform = document.getElementById('platform').value;
    const mode = document.getElementById('mode').value;
    const games = document.querySelectorAll('.card');

    games.forEach(game => {
        const itemModes = (game.getAttribute("data-mode") || "").split(" ");
        const itemPlatforms = (game.getAttribute("data-platform") || "").split(" ");
        const itemPrices = (game.getAttribute("data-price") || "").split(" ");

        const modeMatches = itemModes.includes(mode) || mode == "todos";
        const platformMatches = itemPlatforms.includes(platform) || platform == "todas";
        const priceMatches = itemPrices.includes(price) || price == "todos";

        game.style.display = (modeMatches && platformMatches && priceMatches) ? "block" : "none";
    });
})