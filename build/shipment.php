<!doctype html>
<!-- Оболочка документа, указываем язык содержимого -->
<html lang="ru">
<!-- Заголовок страницы, контейнер для других важных данных -->
<head>
    <?php include "pages-blocks/head-block.php"?>
    <!-- Заголовок страницы в браузере -->
    <title>Акты отгрузки</title>
</head>
<!-- Отображаемое тело страницы -->
<body class="body" id="body">
<!-- wrapper -->
<div class="wrapper">
    <?php include "pages-blocks/header.php"?>

    <main class="main">
        <div class="main__body _container">

            <div class="main__top top-main">

                <div class="top-main__view">
                    <h2 class="top-main__title" data-header="top-main__header">Акты отгрузки</h2>
                </div>

            </div>

            <?php include "pages-blocks/shipment.php"?>

            <div class="main__footer">
                <div class="main__footer__body">

                    <div class="top-main__action action">

                        <div class="action__block action__left">
                            <button type="submit" class="action__btn action__btn-menu btn pd-12" data-downMenuName="down-menu-print">
                                <img src="img/icon/printing.png" title="Распечатать определенный отчет" alt="Распечатать определенный отчет">
                                <div class="down-menu reports _hidden" id="down-menu-print">
                                    <div class="down-menu__list"></div>
                                </div>
                            </button>
                        </div>
                        <div class="action__block action__right">
                            <form action="" class="field-search" id="field-search">
                                <input type="text" placeholder="Поиск по ФИО:" class="field-search__field" data-search-tag="fullName">
                                <input type="reset" value="X" class="field-search__reset">
                            </form>
                            <button type="button" class="action__btn btn pd-12" id="form-search">
                                <img src="img/icon/search.png" title="Применить критерии" alt="Применить критерии">
                            </button>
                            <button type="button" class="action__btn action__setting-btn action__btn-menu btn pd-10" id="setting-button" data-downMenuName="down-menu-setting">
                                <img src="img/icon/more.png" title="Раскрыть список дополнительных настроек" alt="Раскрыть список дополнительных настроек">
                                <div class="down-menu settings _hidden" id="down-menu-setting">
                                    <div class="down-menu__list">
                                        <a class="down-menu__line" id="extended-search-setting" href="#">
                                            <div class="down-menu__icon btn pd-5">
                                                <img src="img/icon/extended-search.png" title="Расширенные настройки поиска" alt="Расширенные настройки поиска">
                                            </div>
                                            <div class="down-menu__text">
                                                Расширенные настройки поиска
                                            </div>
                                        </a>
                                        <a class="down-menu__line" id="about-info" href="#">
                                            <div class="down-menu__icon btn pd-5">
                                                <img src="img/icon/about.png" title="О программе" alt="О программе">
                                            </div>
                                            <div class="down-menu__text">
                                                О программе
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </button>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </main>
</div>
<!-- scripts -->
<?php include "pages-blocks/scripts.php"?>

