class About {
    constructor() {
        this.aboutModal
    }

    get aboutModal()
    {
        mainTable.append(`<div id="about" class="modal h-350 about">
        <p class="modal__title no-flex-auto" id="modal__title" data-modal-title="job">О программе</p>

        <div class="modal__body">

            <div class="about__text">
                Программа "'УРМ' Учет за ремонтируемым оборудованием" создана для учета процесса ремонта оборудования в сервисных центрах
            </div>

            <div class="about__subtitle">
                <span class="bold-weight">Особенности программы:</span>
            </div>

            <div class="about__text">
                <p class="about__text">Работа с данными</p>
                <p class="about__text">Формирование отчетов</p>
                <p class="about__text">Учет за ремонтируемым оборудованием</p>
                <p class="about__text">Вывод данных в excel</p>
                <p class="about__text">Свое контекстное меню</p>
            </div>

            <div class="about__version"><span class="bold-weight d-block">Версия программы:</span>1.0-29.05.2023</div>

            <div class="about__subtitle">
                <span class="bold-weight">Над программой работали:</span>
            </div>

            <div class="about__author">
                <p class="about__text"><span class="bold-weight d-block">Главный программист:</span> Боев Максим Михайлович</p>
                <p class="about__text"><span class="bold-weight d-block">ux/ui-дизайнер:</span> Головко Виктория Сергеевна</p>
            </div>

        </div>

    </div>`)
    }

}