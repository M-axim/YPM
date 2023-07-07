// фильтр

jQuery(function () {
    let filter = $('[data-filter]');
    filter.on('click', function (event) {
        event.preventDefault();

        let cat = $(this).data('filter'); // создаем переменную с названием категории фильтра при нажатии и называем ее cat

        if (cat == 'all') { // если cat равно all(то есть показать все товары то удаляем класс hide)
            $('[data-cat]').removeClass('hide');
        } else {
            $("[data-cat]").each(function () { // иначе перебираем карточки у которых есть дата-cat
                let cards = $(this).data('cat'); // в переменную cards записывем все карточки со значением data-cat

                if (cards != cat) {
                    $(this).addClass('hide'); // если текущая карточка не равна значению cat у filter,то добавляем этим карточка класс hide
                } else {
                    $(this).removeClass('hide'); // тоже самое но уже наоборот
                }
            });
        }
    })
});