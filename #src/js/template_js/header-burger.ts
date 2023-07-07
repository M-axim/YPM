jQuery(function () {
    jQuery('.menu__icon').click(function (event) {
        jQuery('.menu__icon, .menu__body').toggleClass('active');
        jQuery('body').toggleClass('lock');
    });
    jQuery('.menu__label').click(function (event) {
        jQuery('.menu__icon, .menu__body').removeClass('active');
        jQuery('body').removeClass('lock');
    })
});