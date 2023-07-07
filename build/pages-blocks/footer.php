<div class="main__footer">
    <div class="main__footer__body">

        <div class="top-main__action action">

            <div class="action__block action__left">
                <button type="submit" class="action__btn btn pd-12" id="form-add">
                    <img src="img/icon/add.png" title="Создать новый документ" alt="Создать новый документ">
                </button>
                <button type="submit" class="action__btn btn pd-12" id="form-edit">
                    <img src="img/icon/edit.png" title="Редактировать документ" alt="Редактировать документ">
                </button>
                <button type="submit" class="action__btn btn pd-12" id="form-copied">
                    <img src="img/icon/copy.png" title="Создать новый документ на основе выбранного" alt="Создать новый документ на основе выбранного">
                </button>
                <button type="submit" class="action__btn action__btn-menu btn pd-12" data-downMenuName="down-menu-print">
                    <img src="img/icon/printing.png" title="Распечатать определенный отчет" alt="Распечатать определенный отчет">
                    <div class="down-menu reports _hidden" id="down-menu-print">
                        <div class="down-menu__list"></div>
                    </div>
                </button>
                <button type="submit" class="action__btn action__btn-menu btn pd-10 _hidden" data-downMenuName="down-menu-tabs">
                    <img src="img/icon/folder-setting.png" title="Работа с вкладками" alt="Работа с вкладками">
                    <div class="down-menu reports _hidden" id="down-menu-tabs">
                        <div class="down-menu__list"></div>
                    </div>
                </button>

                <button type="submit" class="action__btn btn pd-12" id="form-delete">
                    <img src="img/icon/delete.png" title="Удалить выбранный документ" alt="Удалить выбранный документ">
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