class StaffReports extends Reports {

    constructor(url) {
        super()
        this.url = url

        this.showReports
    }

    get showReports ()
    {
        $("#down-menu-print .down-menu__list").append(`
            <a class="down-menu__line reports-button" href="#" data-reports-type="StaffData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/profile.png" title="Сформировать информацию об сотруднике" alt="Сформировать информацию об сотруднике">
                </div>
                <div class="down-menu__text">
                    Вывести информацию об сотруднике
                </div>
            </a>
        `)
    }

}
