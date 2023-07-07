class BrandModal {
    constructor() {
        this.url = "/api/brand.php"

        this.BDKey = "brand"
        this.modalName = "brandModal"
        this.labelName = "idBrand"

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
                BrandModal.tabsModal(data)
            }
        });
    }


    static select()
    {
        $(`#form-brand-select-tab`).click( function (e) {
            e.preventDefault()

            if (activeBrand !== 0)
            {
                let isDownloadTab
                let tabsInputList = $("select[data-search-list='Brand'] .tabsInput")

                tabsInputList.each( (index, elem) => {
                    if ($(elem).val() === activeBrand)
                        isDownloadTab = $(elem)
                })

                if (!isDownloadTab)
                {
                    tabsInputList[tabsInputList.length - 1].remove()

                    let tab = $(`#${TableDB.brand.modalName} .table__body #${activeBrand}`)
                    $("select[data-search-list='Brand']").append(`
                        <option class='tabsInput' value="${activeBrand}" selected>${$(tab).attr("data-menu-title")}</option>
                    `)
                }
                else {
                    $(`select[data-search-list='Brand'] .tabsInput[value=${activeBrand}]`).attr("selected", "selected")
                }

                let tabsModal = $(`#${TableDB.brand.modalName}`)
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

        let modalTable = $(`#brandModal .table-modal .table__body`)
        modalTable.text("")

        items.forEach(item => modalTable.append(showTable(item)))

        let tableTab = $(`#brandModal .table__body__row`)

        tableTab.click(function (e) {
            e.stopPropagation()

            $(`#brandModal .table__body__row`).removeClass("_marked")
            $(this).addClass("_marked")
            activeBrand = $(this).attr("id")
        })

        this.select()
        this.showContent()

    }

    openModal()
    {
        $("select[data-search-list='Brand']").change( function () {
            if ( $(this).val() === "0")
                createModal("brandModal", "Выберите бренд")
        })
    }

    static showContent()
    {
        new Promise((resolve) => {

            setTimeout(function () {
                resolve(1);
            }, 1000)

        }).then((value) => {

            let tableTab = $("#brandModal .table__body .table__body__row")
            let selectList = $("select[data-search-list='Brand']")
            let count = 0

            selectList
                .text("")
                .append("<option class='tabsInput' value='0' disabled selected>Выберите бренд</option>")
                .append("<option class='tabsInput' value='0' id='moreTabs'>Все бренды</option>")

            tableTab.each((index, elem) => {
                if (count < 4) {
                    selectList.append(`<option class='tabsInput' value="${$(elem).attr("id")}">${$(elem).attr("data-menu-title")}</option>`)
                    count++
                }

            })

        })
    }
}