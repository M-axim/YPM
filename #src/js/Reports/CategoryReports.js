class CategoryReports extends Reports {

    constructor(url) {
        super()
        this.url = url

        this.showReports
    }

    get showReports ()
    {
        $("#down-menu-print .down-menu__list").append(`
            <a class="down-menu__line reports-button" href="#" data-reports-type="categoryData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/profile.png" title="Экспортировать категорию" alt="Экспортировать категорию">
                </div>
                <div class="down-menu__text">
                    Экспортировать категорию
                </div>
            </a>
            <a class="down-menu__line reports-button" href="#" data-reports-type="categoryEquipmentData">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/search-list.png" title="Экспортировать оборудования с выбранной категорией" alt="Экспортировать оборудования с выбранной категорией">
                </div>
                <div class="down-menu__text">
                    Экспортировать оборудования с выбранной категорией
                </div>
            </a>
        `)

    }

}