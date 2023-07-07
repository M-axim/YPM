class EquipmentReports extends Reports {

    constructor(url) {
        super()
        this.url = url

        this.showReports
    }

    get showReports ()
    {
        $("#down-menu-print .down-menu__list").append(`
            <a class="down-menu__line reports-button" href="#" data-reports-type="equipmentData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/profile.png" title="Экспортировать оборудование" alt="Экспортировать оборудование">
                </div>
                <div class="down-menu__text">
                    Экспортировать оборудование
                </div>
            </a>
            <a class="down-menu__line reports-button" href="#" data-reports-type="equipmentRepairsHistoryData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/search-list.png" title="Экспортировать историю ремонта оборудования" alt="Экспортировать историю ремонта оборудования">
                </div>
                <div class="down-menu__text">
                    Экспортировать историю ремонта оборудования
                </div>
            </a>
        `)

    }

}