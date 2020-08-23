$(document).ready(function () {
    $('.burger-navbar').click(function () {
        $('.burger-navbar,.navbar__body').toggleClass('active')
        $('body').toggleClass('lock')
    });
});