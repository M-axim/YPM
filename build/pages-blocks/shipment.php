<div class="main__table" data-table-name="shipment">

    <table class="table main-table table-shipment">

        <thead class="table__header bg-grey">
        <tr class="table__header__row">
            <th class="table__header__col" data-search-tag="shipment.id">Номер акта</th>
            <th class="table__header__col" data-search-tag="Client.name">Клиент</th>
            <th class="table__header__col" data-search-tag="Equipment.name">Оборудование</th>
            <th class="table__header__col" data-search-tag="Category.name">Категория оборудования</th>
            <th class="table__header__col" data-search-tag="TypeRepairs.name">Вид ремонта</th>
            <th class="table__header__col" data-search-tag="shipment.date_end">Дата окончания ремонта</th>
            <th class="table__header__col" data-search-tag="shipment.address">Адрес доставки</th>
        </tr>
        </thead>

        <tbody class="table__body">
        </tbody>
    </table>

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

    <div id="typeRepairModal" class="modal h-350">
        <p class="modal__title no-flex-auto" id="modal__title">Настройки групп</p>

        <div class="modal__action">
            <button type="button" class="modal__btn pd-5 mr-0" id="form-typeRepair-select-tab">Выбрать</button>
        </div>

        <div class="modal__body">

            <table class="table table-modal w-full">

                <thead class="table__header bg-grey">
                <tr class="table__header__row">
                    <th class="table__header__col" data-search-tag="id">Код вида ремонта</th>
                    <th class="table__header__col" data-search-tag="name">Вид ремонта</th>
                </tr>
                </thead>

                <tbody class="table__body">
                </tbody>

            </table>
        </div>

        <span id="modal__close" class="modal__close">ₓ</span>
    </div>

    <div id="equipmentModal" class="modal h-350">
        <p class="modal__title no-flex-auto" id="modal__title">Настройки групп</p>

        <div class="modal__action">
            <button type="button" class="modal__btn pd-5 mr-0" id="form-equipment-select-tab">Выбрать</button>
        </div>

        <div class="modal__body">

            <table class="table table-modal w-full">

                <thead class="table__header bg-grey">
                <tr class="table__header__row">
                    <th class="table__header__col" data-search-tag="id">Код оборудования</th>
                    <th class="table__header__col" data-search-tag="name">Название оборудования</th>
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