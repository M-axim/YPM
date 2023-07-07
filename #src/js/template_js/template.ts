// хак для svg
$(document).click(function (e) {
    if ($(window).width() > 1025) {

        let target = e.target;
        let formJPG: HTMLElement = document.querySelector('i');
        let form: HTMLElement = document.getElementById('search_form');

        if (target === formJPG) {
            $(".form-search").toggleClass("_active")
                .css("transition-duration", ".8s");
            $(".header__nav li a:last-of-type")
                .css("margin-right", "220px")
                .css("transition-duration", ".7s");
        } else if (target === form) {
            return true

        } else if (target != formJPG) {
            $(".form-search").removeClass("_active")
                .css("transition-duration", "1.2s");
            $(".header__nav li a:last-of-type")
                .css("margin-right", "40px")
                .css("transition-duration", ".9s");
        }
    }
});