$(document).ready(function () {
    if ($('.slider__body').length > 0) {
        $('.slider__body').slick({
            dots: true,
            arrows: false,
            accessibility: false,
            slidesToShow: 1,
            autoplayspeed: 3000,
            adaptiveHeight: true,
            nextArrow: `<button type="button" class="slick-next"></button>`,
            prevArrow: `<button type="button" class="slick-next"></button>`,
            responsive: [{
                breakpoint: 768,
                settings: {}
            }]
        })
    }
})