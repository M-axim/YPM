class ClientReports extends Reports {

    constructor(url) {
        super()
        this.url = url

        this.showReports
    }

    get showReports ()
    {
        $("#down-menu-print .down-menu__list").append(`
            <a class="down-menu__line reports-button" href="#" data-reports-type="clientData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/profile.png" title="Сформировать информацию об организации" alt="Сформировать информацию об организации">
                </div>
                <div class="down-menu__text">
                    Сформировать информацию об организации
                </div>
            </a>
            <a class="down-menu__line reports-button" href="#" data-reports-type="clientEquipmentData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/search-list.png" title="Сформировать список оборудования" alt="Сформировать список оборудования">
                </div>
                <div class="down-menu__text">
                    Сформировать список оборудования                
                </div>
            </a>
        `)
    }

}
