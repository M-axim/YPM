class ShipmentReports extends Reports {

    constructor(url) {
        super()
        this.url = url

        this.showReports
    }

    get showReports ()
    {
        $("#down-menu-print .down-menu__list").append(`
            <a class="down-menu__line reports-button" href="#" data-reports-type="ShipmentData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/profile.png" title="Экспортировать акт ремонта" alt="Экспортировать акт ремонта">
                </div>
                <div class="down-menu__text">
                    Экспортировать акт ремонта
                </div>
            </a>
        `)

    }
}