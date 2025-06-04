$(document).ready(function () {
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('darkmode');
        $('.btn-theme')
            .addClass('btn-highlight')
            .removeClass('btn-primary')
            .find('i')
            .removeClass('bi-moon-stars')
            .addClass('bi-sun-fill');
            $('#logo').attr('src', './assets/img/logo_white.svg');
    }

    $('.btn-theme').on('click', function () {
        $('body').toggleClass('darkmode');
        $(this)
            .toggleClass('btn-primary btn-highlight')
            .find('i')
            .toggleClass('bi-moon-stars bi-sun-fill');  

        const isDark = $('body').hasClass('darkmode');

        $('#logo').attr('src', isDark ? './assets/img/logo_white.svg' : './assets/img/logo.svg');

        localStorage.setItem('theme', isDark ? 'dark' : 'light');       
    });
});