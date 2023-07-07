class RepairsReports extends Reports {

    constructor(url) {
        super()
        this.url = url

        this.showReports
    }

    get showReports ()
    {
        $("#down-menu-print .down-menu__list").append(`
            <a class="down-menu__line reports-button" href="#" data-reports-type="repairsData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/profile.png" title="Сформировать отчет" alt="Сформировать отчет">
                </div>
                <div class="down-menu__text">
                    Сформировать отчет
                </div>
            </a>
            <a class="down-menu__line reports-button" href="#" id="shipment-btn">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/delivery.png" title="Сформировать акт отгрузки" alt="Сформировать акт отгрузки">
                </div>
                <div class="down-menu__text">Сформировать акт отгрузки</div>
            </a>
        `)

    }

}