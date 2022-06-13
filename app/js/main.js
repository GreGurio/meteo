$(function() {

    //Main Menu Icon
    $('.main__menu-icon').on('click', function() {
        $('.main__menu-icon').toggleClass('main__menu-icon--active');
        $('.main__menu').toggleClass('main__menu--active');
    });
    $('.main__mini-viget-wrapper').on('click', function () {
        if (!$(this).parent().hasClass('main__mini-viget--active')) {
            $(this).parent().addClass('main__mini-viget--active');
        }
    });
    $('.main__mini-viget-close').on('click', function() {
        $(this).parent().removeClass('main__mini-viget--active');
    });
    $('.table-btn').on('click', function() {
        $('.main__table-wrapper').toggleClass('main__table--active');
        $('.main__chart').toggleClass('main__chart--table');
    });
    $('.more-wind-info').on('click', function() {
        $('.main__container').toggleClass('more-wind-info--active');
    });
    $('.more-wind-info-back').on('click', function() {
        $('.main__container').removeClass('more-wind-info--active');
    });
    $('.main__heating-info-items').on('click',function() {
        $('.main__container').addClass('more-heating-info--active');
    });
    $('.more-heating-info-back').on('click', function () {
        $('.main__container').removeClass('more-heating-info--active');
    });
    
})