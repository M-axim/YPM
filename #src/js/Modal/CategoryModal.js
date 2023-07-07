class CategoryModal {
    constructor() {
        this.url = "/api/category.php"

        this.BDKey = "category"
        this.modalName = "categoryModal"
        this.labelName = "select[data-search-list='Category']"

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
                CategoryModal.tabsModal(data)
            }
        });
    }

    static select()
    {
        $(`#form-category-select-tab`).click( function (e) {
            e.preventDefault()

            if (activeCategory !== 0)
            {
                let isDownloadTab
                let tabsInputList = $("select[data-search-list='Category'] .tabsInput")

                tabsInputList.each( (index, elem) => {
                    if ($(elem).val() === activeCategory)
                        isDownloadTab = $(elem)
                })

                if (!isDownloadTab)
                {
                    tabsInputList[tabsInputList.length - 1].remove()

                    let tab = $(`#${TableDB.category.modalName} .table__body #${activeCategory}`)
                    $("select[data-search-list='Category']").append(`
                        <option class='tabsInput' value="${activeCategory}" selected>${$(tab).attr("data-menu-title")}</option>
                    `)
                }
                else {
                    $(`select[data-search-list='Category'] .tabsInput[value=${activeCategory}]`).attr("selected", "selected")
                }

                let tabsModal = $(`#${TableDB.category.modalName}`)
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
            if (item.tab)
            {
                return `
                <tr class="table__body__row modal-row" id="${item.id}" data-menu-title="${item.name}">
                    <td class="table__body__col" data-id="id">
                        <img class="img-icon-td" src="img/icon/document.png" alt="">${item.id}
                    </td>
                    <td class="table__body__col" data-id="name">${item.name}</td>
                </tr>`
            }
        }

        let modalTable = $(`#categoryModal .table-modal .table__body`)
        modalTable.text("")

        items.forEach(item => modalTable.append(showTable(item)))

        let tableTab = $(`#categoryModal .table__body__row`)

        tableTab.click(function (e) {
            e.stopPropagation()

            $(`#categoryModal .table__body__row`).removeClass("_marked")
            $(this).addClass("_marked")
            activeCategory = $(this).attr("id")
        })

        this.select()
        this.showContent()

    }

    openModal()
    {
        $("select[data-search-list='Category']").change( function () {
            if ($(this).val() === "0")
                createModal("categoryModal", "Выбор категории")
        })
    }

    static showContent()
    {
        new Promise((resolve) => {

            setTimeout(function () {
                resolve(1);
            }, 1000)

        }).then((value) => {

            let tableTab = $(`#${TableDB.category.modalName} .table__body .table__body__row`)
            let selectList = $("select[data-search-list='Category']")
            let count = 0

            selectList
                .text("")
                .append("<option class='tabsInput' value='0' disabled selected>Выберите категорию</option>")
                .append("<option class='tabsInput' value='0' id='moreTabs'>Все категории</option>")

            tableTab.each((index, elem) => {
                if (count < 4) {
                    selectList.append(`<option class='tabsInput' value="${$(elem).attr("id")}">${$(elem).attr("data-menu-title")}</option>`)
                    count++
                }

            })

        })
    }
}