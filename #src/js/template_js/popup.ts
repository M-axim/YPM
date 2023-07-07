if (window.matchMedia("(max-width: 992px)").matches) {
    const popupLinks = document.querySelectorAll('.popup-link'); //Links popups
    const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll(".lock-padding"); //выбираем фиксированные объекты

    let unlock = true; // чтоб не было 2-ых нажатий

    const timeout = 800; // длительность анимации в стилях для попапа

    if (popupLinks.length > 0) {
        for (let i = 0; i < popupLinks.length; i++) {
            const popupLink = popupLinks[i];
            popupLink.addEventListener("click", function (e) {
                const popupName = popupLink.getAttribute('href').replace('#', ''); //replace '#' убираем решетку
                const curentPopup = document.getElementById(popupName);
                popupOpen(curentPopup);
                e.preventDefault();
            });
        }
    }

    const popupCloseIcon = document.querySelectorAll('.close-popup');
    if (popupCloseIcon.length > 0) {
        for (let i = 0; i < popupCloseIcon.length; i++) {
            const el = popupCloseIcon[i];
            el.addEventListener('click', function (e) {
                popupClose(el.closest('.popup'));
                e.preventDefault();
            });
        }
    }

    function popupOpen(curentPopup) {
        if (curentPopup && unlock) {
            const popupActive = document.querySelector('.popup.open');
            if (popupActive) {
                popupClose(popupActive, false);
            } else {
                bodyLock();
            }
            curentPopup.classList.add('open');
            curentPopup.addEventListener('click', function (e) {
                if (!e.target.closest('.popup__content')) {
                    popupClose(e.target.closest('.popup'));
                }
            });
        }
    }

    function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
            popupActive.classList.remove('open');
            if (doUnlock) {
                bodyUnlock();
            }
        }
    }

    function bodyLock() {
        const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

        if (lockPadding.length > 0) {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = lockPaddingValue; // задаем отступ справа для фиксированных объетов с классом lock-padding
            }
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    function bodyUnlock() {
        setTimeout(function () {
            if (lockPadding.length > 0) {
                for (let i = 0; i < lockPadding.length; i++) {
                    const el = lockPadding[i];
                    el.style.paddingRight = '0px';
                }
            }
            body.style.paddingRight = '0px';
            body.classList.remove('lock');
        }, timeout);
    }

    document.addEventListener('keydown', function (e) { // закрытие popup по кнопке Escape
        if (e.which === 27) {
            const popupActive = document.querySelector('.popup.open');
            popupClose(popupActive);
        }
    });

    (function () {
        //проверяем поддержк
        if (!Element.prototype.closest) {
            // Реализуем
            Element.prototype.closest = function (css) {
                var node = this;
                while (node) {
                    if (node.matches(css)) return node;
                    else node = node.parentElement;
                }
                return null;
            };
        }
    })();
    (function () {
        //проверяем поддержку
        if (!Element.prototype.matches) {
            // определяем свойство
            Element.prototype.matches = Element.prototype.matchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector;
        }
    })();
}

$('.top-product__item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<button class='arrow-left arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button class='arrow-right arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
});

jQuery(function () {
    if (window.matchMedia("(min-width: 1023px)").matches) {
        $(".popup-link img").blowup({
            "round" : false,
            "border" : "none",
            "scale" : '1.5',
            "width" : "250",
            "height" : '250'
        });
    }
})

const starsBlocks = document.querySelectorAll('.star');

for (let i = 0; i < starsBlocks.length; i++) { // выводим каждый элемент по отдельности
    let star = starsBlocks[i]; // записываем их в одну переменную
    Rating(star);
}

function Rating(star) {
    star.addEventListener('click', function (e) {
        const starRating = star.getAttribute('data-rating');
        e.preventDefault();
        const stars = document.querySelectorAll('.fa-star');
        for (let i = 0; i < starRating; i++) {
            const starsActive = document.querySelectorAll('.star-active').length;
            stars[i].classList.add('star-active');
        }
    })
}

const addReview = document.querySelector('.info-top__add-review a');
const showReview = document.querySelector('.info-top__review span');
let currentReviews = 0;
showReview.innerHTML = currentReviews;

addReview.addEventListener('click', function (e) {
    e.preventDefault();
    currentReviews++;
    showReview.innerHTML = currentReviews;
});

$('.Button').parent().mousedown(function(event){
    event.stopPropagation();
    event.preventDefault();
    return false;
});

$(document).ready(function() {

    $('.up').click(function () {
        const $input = $('.amount input');
        if ($input.val() < 9)
            $input.val(parseInt($input.val()) + 1);
    });

    $('.down').click(function () {
        const $input = $('.amount input');
        if ($input.val() > 1)
            $input.val(parseInt($input.val()) - 1);
    });
});

$(document).ready(function () {
    $('.product-tabs__link').click(function () {
        if (true) {
            $('.product-tabs__link').not($(this)).removeClass('product-tabs__link_active');
        }
        $(this).addClass('product-tabs__link_active');
    });
    defProductTabsLink()
});

function defProductTabsLink () {
    let tabsLinks = $('.product-tabs__link')
        [0].classList.add('product-tabs__link_active');
}

jQuery(function () {
    let showTabsName = $('[data-tabs_name]');
    showTabsName.on('click', function (event) {
        event.preventDefault();

        let nameTab = $(this).data('tabs_name');
        $('[data-tab]').each(function () {
            let tabs = $(this).data('tab');
            if (tabs !== nameTab)
                $(this).addClass('_tabs-hidden');
            else
                $(this).removeClass('_tabs-hidden');
        })
    })
    defTab(showTabsName);
});

function defTab(showTabsName) {
    const _this = showTabsName;
    const defTabsName = _this.data('tabs_name');
    $('[data-tab]').each(function () {
        let defTabs = $(this).data('tab');
        if (defTabs === defTabsName)
            $(this).removeClass('_tabs-hidden');
    })
}