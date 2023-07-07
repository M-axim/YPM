class TypeRepairModal {
    constructor() {
        this.url = "/api/typeRepair.php"

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
                TypeRepairModal.tabsModal(data)
            }
        });
    }

    static select()
    {
        $("#form-typeRepair-select-tab").click( function (e) {
            e.preventDefault()

            if (activeTypeRepair !== 0)
            {
                let isDownloadTab
                let tabsInputList = $("select[data-search-list='TypeRepair'] .tabsInput")

                tabsInputList.each( (index, elem) => {
                    if ($(elem).val() === activeTypeRepair)
                        isDownloadTab = $(elem)
                })

                if (!isDownloadTab)
                {
                    tabsInputList[tabsInputList.length - 1].remove()

                    let tab = $(`#typeRepairModal .table__body #${activeTypeRepair}`)
                    $("select[data-search-list='TypeRepair']").append(`
                        <option class='tabsInput' value="${activeTypeRepair}" selected>${$(tab).attr("data-menu-title")}</option>
                    `)
                }
                else {
                    $(`select[data-search-list='TypeRepair'] .tabsInput[value=${activeTypeRepair}]`).attr("selected", "selected")
                }

                let tabsModal = $("#typeRepairModal")
                closeModal(tabsModal)

                $("#price").val(($(`#typeRepairModal #${activeTypeRepair}`).attr("data-price")))

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
            if (item.id)
            {
                return `
                <tr class="table__body__row modal-row" id="${item.id}" data-menu-title="${item.name}" data-price="${item.price}">
                    <td class="table__body__col" data-id="id">
                        <img class="img-icon-td" src="img/icon/document.png" alt="">${item.id}
                    </td>
                    <td class="table__body__col" data-id="name">${item.name}</td>
                </tr>`
            }

        }

        let modalTable = $("#typeRepairModal .table-modal .table__body")
        modalTable.text("")

        items.forEach(item => modalTable.append(showTable(item)))

        let tableTab = $("#typeRepairModal .table__body__row")

        tableTab.click(function (e) {
            e.stopPropagation()

            $("#typeRepairModal .table__body__row").removeClass("_marked")
            $(this).addClass("_marked")
            activeTypeRepair = $(this).attr("id")
        })

        this.select()
        this.showContent()

    }

    openModal()
    {
        $("select[data-search-list='TypeRepair']").change( function () {
            if ($(this).val() === "0")
                createModal("typeRepairModal", "Выбор типа ремонта")
            else
                $("#price").val($(`#typeRepair_id option[value=${$(this).val()}]`).attr("data-price"))
        })
    }

    static showContent()
    {
        new Promise((resolve) => {

            setTimeout(function () {
                resolve(1);
            }, 1000)

        }).then((value) => {

            let tableTab = $("#typeRepairModal .table__body .table__body__row")
            let selectList = $("select[data-search-list='TypeRepair']")
            let count = 0

            selectList
                .text("")
                .append("<option class='tabsInput' value='0' disabled selected>Выберите тип ремонта</option>")
                .append("<option class='tabsInput' value='0' id='moreTabs'>Все типы ремонта</option>")

            tableTab.each((index, elem) => {
                if (count < 4) {
                    selectList.append(`<option class='tabsInput' value="${$(elem).attr("id")}" data-price="${$(elem).attr("data-price")}">${$(elem).attr("data-menu-title")}</option>`)
                    count++
                }

            })

        })
    }

}