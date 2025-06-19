document.addEventListener("DOMContentLoaded", () => {
    // Para cada container de avaliação
    document.querySelectorAll('.rating').forEach(ratingEl => {
        const gameId = ratingEl.dataset.gameId;
        const savedRating = parseInt(localStorage.getItem(`rating-${gameId}`)) || 0;

        renderStars(ratingEl, savedRating);

        ratingEl.addEventListener('click', (e) => {
            if (!e.target.classList.contains('star')) return;

            const value = parseInt(e.target.dataset.value);
            localStorage.setItem(`rating-${gameId}`, value);
            renderStars(ratingEl, value);
        });
    });

    function renderStars(container, rating) {
        container.innerHTML = '';
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.textContent = '★';
            star.classList.add('star');
            star.dataset.value = i;
            if (i <= rating) star.classList.add('selected');
            container.appendChild(star);
        }
    }
})