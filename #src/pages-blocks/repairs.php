<div class="main__table" data-table-name="repairs">

    <table class="table main-table table-repairs">

        <thead class="table__header bg-grey">
            <tr class="table__header__row">
                <th class="table__header__col" data-search-tag="Repairs.id">Код ремонта</th>
                <th class="table__header__col" data-search-tag="Repairs.date_start">Начало ремонта</th>
                <th class="table__header__col" data-search-tag="client.name">Клиент</th>
                <th class="table__header__col" data-search-tag="Equipment.name">Оборудование</th>
                <th class="table__header__col" data-search-tag="TypeRepairs.name">Вид ремонта</th>
                <th class="table__header__col" data-search-tag="Staff.fullName">Мастер</th>
                <th class="table__header__col" data-search-tag="Repairs.date_end">Дата окончания ремонта</th>
                <th class="table__header__col" data-search-tag="Repairs.price">Стоимость</th>
            </tr>
        </thead>

        <tbody class="table__body">
        </tbody>
    </table>

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

    <div id="staffModal" class="modal h-350">
        <p class="modal__title no-flex-auto" id="modal__title">Настройки групп</p>

        <div class="modal__action">
            <button type="button" class="modal__btn pd-5 mr-0" id="form-staff-select-tab">Выбрать</button>
        </div>

        <div class="modal__body">

            <table class="table table-modal w-full">

                <thead class="table__header bg-grey">
                    <tr class="table__header__row">
                        <th class="table__header__col" data-search-tag="id">Код сотрудника</th>
                        <th class="table__header__col" data-search-tag="fullName">ФИО сотрудника</th>
                        <th class="table__header__col" data-search-tag="fullName">Должность</th>
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