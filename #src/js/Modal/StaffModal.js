class StaffModal {
    constructor() {
        this.url = "/api/staff.php"

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
                StaffModal.tabsModal(data)
            }
        });
    }

    static select()
    {
        $("#form-staff-select-tab").click( function (e) {
            e.preventDefault()

            if (activeStaff !== 0)
            {
                let isDownloadTab
                let tabsInputList = $("select[data-search-list='Staff'] .tabsInput")

                tabsInputList.each( (index, elem) => {
                    if ($(elem).val() === activeStaff)
                        isDownloadTab = $(elem)
                })

                if (!isDownloadTab)
                {
                    tabsInputList[tabsInputList.length - 1].remove()

                    let tab = $(`#staffModal .table__body #${activeStaff}`)
                    $("select[data-search-list='Staff']").append(`
                        <option class='tabsInput' value="${activeStaff}" selected>${$(tab).attr("data-menu-title")}</option>
                    `)
                }
                else {
                    $(`select[data-search-list='Staff'] .tabsInput[value=${activeStaff}]`).attr("selected", "selected")
                }

                let tabsModal = $("#staffModal")
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
                <tr class="table__body__row modal-row" id="${item.id}" data-menu-title="${item.fullName}">
                    <td class="table__body__col" data-id="id">
                        <img class="img-icon-td" src="img/icon/document.png" alt="">${item.id}
                    </td>
                    <td class="table__body__col" data-id="name">${item.fullName}</td>
                    <td class="table__body__col" data-id="name">${item.JobTitleName}</td>
                </tr>`
        }

        let modalTable = $("#staffModal .table-modal .table__body")
        modalTable.text("")

        items.forEach(item => modalTable.append(showTable(item)))

        let tableTab = $("#staffModal .table__body__row")

        tableTab.click(function (e) {
            e.stopPropagation()

            $("#staffModal .table__body__row").removeClass("_marked")
            $(this).addClass("_marked")
            activeStaff = $(this).attr("id")
        })

        this.select()
        this.showContent()

    }

    openModal()
    {
        $("select[data-search-list='Staff']").change( function () {
            if ($(this).val() === "0")
                createModal("staffModal", "Выбор специалиста")
        })
    }

    static showContent()
    {
        new Promise((resolve) => {

            setTimeout(function () {
                resolve(1);
            }, 1000)

        }).then((value) => {

            let tableTab = $("#staffModal .table__body .table__body__row")
            let selectList = $("select[data-search-list='Staff']")
            let count = 0

            selectList
                .text("")
                .append("<option class='tabsInput' value='0' disabled selected>Выберите специалиста</option>")
                .append("<option class='tabsInput' value='0' id='moreTabs'>Все специалисты</option>")

            tableTab.each((index, elem) => {
                if (count < 4) {
                    selectList.append(`<option class='tabsInput' value="${$(elem).attr("id")}">${$(elem).attr("data-menu-title")}</option>`)
                    count++
                }

            })

        })
    }

}