class EquipmentModal {
    constructor() {
        this.url = "/api/equipment.php"

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
                EquipmentModal.tabsModal(data)
            }
        });
    }

    equipmentClient(clientId) {
        $.ajax({
            url: `${this.url}?client.id = ${clientId}`,
            method: 'get',
            dataType: 'json',
            async: false,
            success: function (data) {
                EquipmentModal.tabsModal(data)
            }
        });
    }

    static select()
    {
        $("#form-equipment-select-tab").click( function (e) {
            e.preventDefault()

            if (activeEquipment !== 0)
            {
                let isDownloadTab
                let tabsInputList = $("select[data-search-list='Equipment'] .tabsInput")

                tabsInputList.each( (index, elem) => {
                    if ($(elem).val() === activeEquipment)
                        isDownloadTab = $(elem)
                })

                if (!isDownloadTab)
                {
                    tabsInputList[tabsInputList.length - 1].remove()

                    let tab = $(`#equipmentModal .table__body #${activeEquipment}`)
                    $("select[data-search-list='Equipment']").append(`
                        <option class='tabsInput' value="${activeEquipment}" selected>${$(tab).attr("data-menu-title")}</option>
                    `)
                }
                else {
                    $(`select[data-search-list='Equipment'] .tabsInput[value=${activeEquipment}]`).attr("selected", "selected")
                }

                let tabsModal = $("#equipmentModal")
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
            if (item.id)
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

        let modalTable = $("#equipmentModal .table-modal .table__body")
        modalTable.text("")

        items.forEach(item => modalTable.append(showTable(item)))

        let tableTab = $("#equipmentModal .table__body__row")

        tableTab.click(function (e) {
            e.stopPropagation()

            $("#equipmentModal .table__body__row").removeClass("_marked")
            $(this).addClass("_marked")
            activeEquipment = $(this).attr("id")
        })

        this.select()
        this.showContent()

    }

    openModal()
    {
        $("select[data-search-list='Equipment']").change( function () {
            if ($(this).val() === "0")
                createModal("equipmentModal", "Выбор оборудования")
        })
    }

    static showContent()
    {
        new Promise((resolve) => {

            setTimeout(function () {
                resolve(1);
            }, 1000)

        }).then((value) => {

            let tableTab = $("#equipmentModal .table__body .table__body__row")
            let selectList = $("select[data-search-list='Equipment']")
            let count = 0

            selectList
                .text("")
                .append("<option class='tabsInput' value='0' disabled selected>Выберите оборудование</option>")
                .append("<option class='tabsInput' value='0' id='moreTabs'>Все оборудование</option>")

            tableTab.each((index, elem) => {
                if (count < 4) {
                    selectList.append(`<option class='tabsInput' value="${$(elem).attr("id")}">${$(elem).attr("data-menu-title")}</option>`)
                    count++
                }

            })

        })
    }

}