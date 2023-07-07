class JobTitleModal {
    constructor() {
        this.url = "/api/job.php"

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
                JobTitleModal.tabsModal(data)
            }
        });
    }

    static select()
    {
        $("#form-job-select-tab").click( function (e) {
            e.preventDefault()

            if (activeSpecialization !== 0)
            {
                let isDownloadTab
                let tabsInputList = $("select[data-search-list=\"JobTitle\"] .tabsInput")

                tabsInputList.each( (index, elem) => {
                    if ($(elem).val() === activeSpecialization)
                        isDownloadTab = $(elem)
                })

                if (!isDownloadTab)
                {
                    tabsInputList[tabsInputList.length - 1].remove()

                    let tab = $(`#jobModal .table__body #${activeSpecialization}`)
                    $("select[data-search-list=\"JobTitle\"]").append(`
                        <option class='tabsInput' value="${activeSpecialization}" selected>${$(tab).attr("data-menu-title")}</option>
                    `)
                }
                else {
                    $(`select[data-search-list=\"JobTitle\"] .tabsInput[value=${activeSpecialization}]`).attr("selected", "selected")
                }

                let tabsModal = $("#jobModal")
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

        let modalTable = $("#jobModal .table-modal .table__body")
        modalTable.text("")

        items.forEach(item => modalTable.append(showTable(item)))

        let tableTab = $("#jobModal .table__body__row")

        tableTab.click(function (e) {
            e.stopPropagation()

            $("#jobModal .table__body__row").removeClass("_marked")
            $(this).addClass("_marked")
            activeSpecialization = $(this).attr("id")
        })

        this.select()
        this.showContent()

    }

    openModal()
    {
        let selectList = $("select[data-search-list=\"JobTitle\"]")
        selectList.change( function () {
            if ($(this).val() === "0")
                createModal("jobModal", "Выбор должности")
        })
    }

    static showContent()
    {
        new Promise((resolve) => {

            setTimeout(function () {
                resolve(1);
            }, 1000)

        }).then((value) => {

            let tableTab = $("#jobModal .table__body .table__body__row")
            let selectList = $("select[data-search-list=\"JobTitle\"]")
            let count = 0

            selectList
                .text("")
                .append("<option class='tabsInput' value='0' disabled selected>Выберите должность</option>")
                .append("<option class='tabsInput' value='0' id='moreTabs'>Все должности</option>")

            tableTab.each((index, elem) => {
                if (count < 4) {
                    selectList.append(`<option class='tabsInput' value="${$(elem).attr("id")}">${$(elem).attr("data-menu-title")}</option>`)
                    count++
                }

            })

        })
    }

}