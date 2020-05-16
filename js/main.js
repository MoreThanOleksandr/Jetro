$(function () {
   
    $('.main__slider-inner').slick({
        infinite: true,
        arrows: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/previous-arrow.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/next-arrow.svg" alt="">',
        asNavFor: '.side__slider-inner',
    });

    $('.side__slider-inner').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.main__slider-inner',
        responsive:[
            {
                breakpoint: 980,
                settings:"unslick"
            },
        ]
    });

    $('.header__menu-btn').on('click', function () {
        $('.header__menu > ul').slideToggle();
    });
});