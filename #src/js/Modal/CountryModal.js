class CountryModal {
    constructor() {
        this.url = "/api/countries.php"

        this.BDKey = "country"
        this.modalName = "countryModal"
        this.labelName = "idCountry"

        this.data
        this.openModal()

    }

    get data() {
        $.ajax({
            url: `${this.url}`,
            method: 'get',
            dataType: 'json',
            async: false,
            success: function (data) {
                CountryModal.tabsModal(data)
            }
        });
    }

    static select()
    {
        $(`#form-country-select-tab`).click( function (e) {
            e.preventDefault()

            if (activeCountry !== 0)
            {
                let isDownloadTab
                let tabsInputList = $("select[data-search-list='Country'] .tabsInput")

                tabsInputList.each( (index, elem) => {
                    if ($(elem).val() === activeCountry)
                        isDownloadTab = $(elem)
                })

                if (!isDownloadTab)
                {
                    tabsInputList[tabsInputList.length - 1].remove()

                    let tab = $(`#${TableDB.country.modalName} .table__body #${activeCountry}`)
                    $("select[data-search-list='Country']").append(`
                        <option class='tabsInput' value="${activeCountry}" selected>${$(tab).attr("data-menu-title")}</option>
                    `)
                }
                else {
                    $(`select[data-search-list='Country'] .tabsInput[value=${activeCountry}]`).attr("selected", "selected")
                }

                let tabsModal = $(`#${TableDB.country.modalName}`)
                closeModal(tabsModal)

                $(".modal__title").text(TableDB.textAdd)
                $("#add-modal__submit").text("Создать")

            }
            else {
                createModal("message", "Выберите запись для вставки")
            }
        })
    }

    static tabsModal(items) {

        function showTable(item) {
            return `
                <tr class="table__body__row modal-row" id="${item.id}" data-menu-title="${item.name}">
                    <td class="table__body__col" data-id="id">
                        <img class="img-icon-td" src="img/icon/document.png" alt="">${item.id}
                    </td>
                    <td class="table__body__col" data-id="name">${item.name}</td>
                </tr>`
        }

        let modalTable = $(`#countryModal .table-modal .table__body`)
        modalTable.text("")

        items.forEach(item => modalTable.append(showTable(item)))

        let tableTab = $(`#countryModal .table__body__row`)

        tableTab.click(function (e) {
            e.stopPropagation()

            $(`#countryModal .table__body__row`).removeClass("_marked")
            $(this).addClass("_marked")
            activeCountry = $(this).attr("id")
        })

        this.select()
        this.showContent()

    }

    openModal()
    {
        $("select[data-search-list='Country']").change( function () {
            if ( $(this).val() === "0")
                createModal("countryModal", "Выберите страну")
        })
    }

    static showContent()
    {
        new Promise((resolve) => {

            setTimeout(function () {
                resolve(1);
            }, 1000)

        }).then((value) => {

            let tableTab = $(`#countryModal .table__body .table__body__row`)
            let selectList = $("select[data-search-list='Country']")
            let count = 0

            selectList
                .text("")
                .append("<option class='tabsInput' value='0' disabled selected>Выберите страну</option>")
                .append("<option class='tabsInput' value='0' id='moreTabs'>Все страны</option>")

            tableTab.each((index, elem) => {
                if (count < 4) {
                    selectList.append(`<option class='tabsInput' value="${$(elem).attr("id")}">${$(elem).attr("data-menu-title")}</option>`)
                    count++
                }

            })

        })
    }
}