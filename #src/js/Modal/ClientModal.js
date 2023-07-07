class ClientModal {
    constructor() {
        this.url = "/api/client.php"

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
                ClientModal.tabsModal(data)
            }
        });
    }

    static select()
    {
        $("#form-client-select-tab").click( function (e) {
            e.preventDefault()

            if (activeClient !== 0)
            {
                let isDownloadTab
                let tabsInputList = $("select[data-search-list=\"Client\"] .tabsInput")

                tabsInputList.each( (index, elem) => {
                    if ($(elem).val() === activeClient)
                        isDownloadTab = $(elem)
                })

                if (!isDownloadTab)
                {
                    tabsInputList[tabsInputList.length - 1].remove()

                    let tab = $(`#clientModal .table__body #${activeClient}`)
                    $("select[data-search-list=\"Client\"]").append(`
                        <option class='tabsInput' value="${activeClient}" selected>${$(tab).attr("data-menu-title")}</option>
                    `)
                }
                else {
                    $(`select[data-search-list=\"Client\"] .tabsInput[value=${activeClient}]`).attr("selected", "selected")
                }

                let tabsModal = $("#clientModal")
                closeModal(tabsModal)

                $(".modal__title").text(TableDB.textAdd)
                $("#add-modal__submit").text("Создать")
                TableDB.equipment.equipmentClient(activeClient)
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

        let modalTable = $("#clientModal .table-modal .table__body")
        modalTable.text("")

        items.forEach(item => modalTable.append(showTable(item)))

        let tableTab = $("#clientModal .table__body__row")

        tableTab.click(function (e) {
            e.stopPropagation()

            $("#clientModal .table__body__row").removeClass("_marked")
            $(this).addClass("_marked")
            activeClient = $(this).attr("id")
        })

        this.select()
        this.showContent()

    }

    openModal()
    {
        $("select[data-search-list=\"Client\"]").change( function () {
            if ($(this).val() === "0")
            {
                createModal("clientModal", "Выбор клиента")
            }
            else {
                TableDB.equipment.equipmentClient($(this).val())
            }
        })
    }

    static showContent()
    {
        new Promise((resolve) => {

            setTimeout(function () {
                resolve(1);
            }, 1000)

        }).then((value) => {

            let tableTab = $("#clientModal .table__body .table__body__row")
            let selectList = $("select[data-search-list=\"Client\"]")
            let count = 0

            selectList
                .text("")
                .append("<option class='tabsInput' value='0' disabled selected>Выберите клиента</option>")
                .append("<option class='tabsInput' value='0' id='moreTabs'>Все клиенты</option>")

            tableTab.each((index, elem) => {
                if (count < 4) {
                    selectList.append(`<option class='tabsInput' value="${$(elem).attr("id")}">${$(elem).attr("data-menu-title")}</option>`)
                    count++
                }

            })

        })
    }

}