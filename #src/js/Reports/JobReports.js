class JobReports extends Reports {

    constructor(url) {
        super()
        this.url = url

        this.showReports
    }

    get showReports ()
    {
        $("#down-menu-print .down-menu__list").append(`
            <a class="down-menu__line reports-button" href="#" data-reports-type="JobData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/profile.png" title="Сформировать информацию об должности" alt="Сформировать информацию об должности">
                </div>
                <div class="down-menu__text">
                    Сформировать информацию об должности
                </div>
            </a>
            <a class="down-menu__line reports-button" href="#" data-reports-type="StaffData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/search-list.png" title="Экспортировать сотрудников с выбранной должностью" alt="Экспортировать сотрудников с выбранной должностью">
                </div>
                <div class="down-menu__text">
                    Экспортировать сотрудников с выбранной должностью
                </div>
            </a>
        `)
    }

}
