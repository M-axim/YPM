class BrandReports extends Reports {

    constructor(url) {
        super()
        this.url = url

        this.showReports
    }

    get showReports ()
    {
        $("#down-menu-print .down-menu__list").append(`
            <a class="down-menu__line reports-button" href="#" data-reports-type="brandData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/profile.png" title="Экспортировать модель" alt="Экспортировать модель">
                </div>
                <div class="down-menu__text">
                    Экспортировать модель
                </div>
            </a>
            <a class="down-menu__line reports-button" href="#" data-reports-type="brandEquipmentData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/search-list.png" title="Экспортировать оборудования с выбранной моделью" alt="Экспортировать оборудования с выбранной моделью">
                </div>
                <div class="down-menu__text">
                    Экспортировать оборудования с выбранной моделью
                </div>
            </a>
        `)
    }

}
