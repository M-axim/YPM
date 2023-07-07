<div class="main__table" data-table-name="equipment">

    <table class="table main-table table-group table-equipment">

        <thead class="table__header bg-grey">
            <tr class="table__header__row">
                <th class="table__header__col" data-search-tag="Equipment.id">Код оборудования</th>
                <th class="table__header__col" data-search-tag="Equipment.name">Название оборудования</th>
                <th class="table__header__col" data-search-tag="Brand.name">Модель оборудования</th>
                <th class="table__header__col" data-search-tag="Country.name">Страна производитель</th>
                <th class="table__header__col" data-search-tag="Equipment.year">Год выпуска</th>
                <th class="table__header__col" data-search-tag="Category.name">Категория оборудования</th>
                <th class="table__header__col" data-search-tag="Client.name">Владелец</th>
            </tr>
        </thead>

        <tbody class="table__body">
        </tbody>
    </table>

    <div id="brandModal" class="modal h-350">
        <p class="modal__title no-flex-auto" id="modal__title">Настройки групп</p>

        <div class="modal__action">
            <button type="button" class="modal__btn pd-5 mr-0" id="form-brand-select-tab">Выбрать</button>
        </div>

        <div class="modal__body">

            <table class="table table-modal w-full">

                <thead class="table__header bg-grey">
                <tr class="table__header__row">
                    <th class="table__header__col" data-search-tag="id">Код</th>
                    <th class="table__header__col" data-search-tag="name">Название</th>
                </tr>
                </thead>

                <tbody class="table__body">
                </tbody>

            </table>
        </div>

        <span id="modal__close" class="modal__close">ₓ</span>
    </div>

    <div id="countryModal" class="modal h-350">
        <p class="modal__title no-flex-auto" id="modal__title">Настройки групп</p>

        <div class="modal__action">
            <button type="button" class="modal__btn pd-5 mr-0" id="form-country-select-tab">Выбрать</button>
        </div>

        <div class="modal__body">

            <table class="table table-modal w-full">

                <thead class="table__header bg-grey">
                <tr class="table__header__row">
                    <th class="table__header__col" data-search-tag="id">Код</th>
                    <th class="table__header__col" data-search-tag="name">Название</th>
                </tr>
                </thead>

                <tbody class="table__body">
                </tbody>

            </table>
        </div>

        <span id="modal__close" class="modal__close">ₓ</span>
    </div>

    <div id="categoryModal" class="modal h-350">
        <p class="modal__title no-flex-auto" id="modal__title">Настройки групп</p>

        <div class="modal__action">
            <button type="button" class="modal__btn pd-5 mr-0" id="form-category-select-tab">Выбрать</button>
        </div>

        <div class="modal__body">

            <table class="table table-modal w-full">

                <thead class="table__header bg-grey">
                <tr class="table__header__row">
                    <th class="table__header__col" data-search-tag="id">Код</th>
                    <th class="table__header__col" data-search-tag="name">Название</th>
                </tr>
                </thead>

                <tbody class="table__body">
                </tbody>

            </table>
        </div>

        <span id="modal__close" class="modal__close">ₓ</span>
    </div>

    <div id="clientModal" class="modal h-350">
        <p class="modal__title no-flex-auto" id="modal__title">Настройки групп</p>

        <div class="modal__action">
            <button type="button" class="modal__btn pd-5 mr-0" id="form-client-select-tab">Выбрать</button>
        </div>

        <div class="modal__body">

            <table class="table table-modal w-full">

                <thead class="table__header bg-grey">
                <tr class="table__header__row">
                    <th class="table__header__col" data-search-tag="id">Код</th>
                    <th class="table__header__col" data-search-tag="name">Название</th>
                </tr>
                </thead>

                <tbody class="table__body">
                </tbody>

            </table>
        </div>

        <span id="modal__close" class="modal__close">ₓ</span>
    </div>

    <div id="overlay"></div>
</div>