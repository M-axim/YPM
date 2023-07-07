class TypeRepairReports extends Reports {

    constructor(url) {
        super()
        this.url = url

        this.showReports
    }

    get showReports ()
    {
        $("#down-menu-print .down-menu__list").append(`
            <a class="down-menu__line reports-button" href="#" data-reports-type="TypeRepairData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/profile.png" title="Экспортировать тип ремонта" alt="Экспортировать тип ремонта">
                </div>
                <div class="down-menu__text">
                    Экспортировать тип ремонта
                </div>
            </a>
            <a class="down-menu__line reports-button" href="#" data-reports-type="ListTypeRepair">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/search-list.png" title="История вида ремонта" alt="История вида ремонта">
                </div>
                <div class="down-menu__text">
                    История вида ремонта
                </div>
            </a>
        `)

    }
}