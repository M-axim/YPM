jQuery(document).ready(function () {
    let marginTop: number = 90;
    if (window.matchMedia("(max-width: 992px)").matches) {
        marginTop = 60;
    }

    jQuery('a[href^="#"]').click(function (e) {
        e.preventDefault();
        let target = jQuery(this).attr('href');
        jQuery('html, body').animate({
            scrollTop: jQuery(target).offset().top - marginTop
        }, 500)
        jQuery('.menu__icon, .menu__body, .header').removeClass('active');
        jQuery('body').removeClass('lock');
    });
});