<div class="main__table" data-table-name="staff">

    <table class="table main-table table-staff">

        <thead class="table__header bg-grey">
            <tr class="table__header__row">
                <th class="table__header__col" data-search-tag="staff.id">Номер работника</th>
                <th class="table__header__col" data-search-tag="staff.fullName">ФИО</th>
                <th class="table__header__col" data-search-tag="JobTitle.name">Должность</th>
                <th class="table__header__col" data-search-tag="staff.tel">Телефон</th>
            </tr>
        </thead>

        <tbody class="table__body">
        </tbody>
    </table>

    <div id="jobModal" class="modal h-350">
        <p class="modal__title no-flex-auto" id="modal__title">Настройки групп</p>

        <div class="modal__action">
            <button type="button" class="modal__btn pd-5 mr-0" id="form-job-select-tab">Выбрать</button>
        </div>

        <div class="modal__body">

            <table class="table table-modal w-full">

                <thead class="table__header bg-grey">
                    <tr class="table__header__row">
                        <th class="table__header__col" data-search-tag="id">Код должности</th>
                        <th class="table__header__col" data-search-tag="name">Название должности</th>
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