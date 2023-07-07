class CountriesReports extends Reports {

    constructor(url) {
        super()
        this.url = url

        this.showReports
    }

    get showReports ()
    {
        $("#down-menu-print .down-menu__list").append(`
            <a class="down-menu__line reports-button" href="#" data-reports-type="CountriesData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/profile.png" title="Сформировать информацию о стране" alt="Сформировать информацию о стране">
                </div>
                <div class="down-menu__text">
                    Вывести информацию о стране
                </div>
            </a>
            <a class="down-menu__line reports-button" href="#" data-reports-type="CountriesEquipmentData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/search-list.png" title="Сформировать список оборудования в данной стране" alt="Сформировать список оборудования в данной стране">
                </div>
                <div class="down-menu__text">
                    Сформировать список оборудования в данной стране
                </div>
            </a>
        `)
    }

}
