<div class="main__table" data-table-name="typeRepair">

    <table class="table main-table table-group table-typeRepair">

        <thead class="table__header bg-grey">
            <tr class="table__header__row">
                <th class="table__header__col" data-search-tag="typeRepairs.id">Код работы</th>
                <th class="table__header__col" data-search-tag="typeRepairs.name">Название</th>
                <th class="table__header__col" data-search-tag="typeRepairs.price">Цена</th>
            </tr>
        </thead>

        <tbody class="table__body">
        </tbody>
    </table>

    <div id="tabsModal" class="modal h-350">
        <p class="modal__title no-flex-auto" id="modal__title">Настройки групп</p>

        <div class="modal__action">
            <button type="button" class="modal__btn pd-5" id="form-select-tab">Выбрать</button>
            <button type="button" class="modal__btn pd-5" id="form-add-tab">Создать группу</button>
        </div>

        <div class="modal__body">

            <table class="table table-modal">

                <tbody class="table__body">
                </tbody>

            </table>
        </div>

        <span id="modal__close" class="modal__close">ₓ</span>
    </div>

    <div id="overlay"></div>
</div>