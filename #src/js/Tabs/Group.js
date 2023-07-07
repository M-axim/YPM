class Group {

    constructor(url) {
        this.url = url

        $(".action__btn._hidden").removeClass("_hidden")

        this.showTabsSetting
        this.groupForm
        this.showGroups()
        this.selectGroup()
    }

    get showTabsSetting ()
    {
        $("#down-menu-tabs .down-menu__list").append(`
            <a class="down-menu__line tabs-button" href="#" id="form-setting-tab">
                <div class="down-menu__icon btn pd-5">
                    <img src="img/icon/folder-setting.png" title="Настройки групп" alt="Настройки групп">
                </div>
                <div class="down-menu__text">
                    Настройки групп
                </div>
            </a>
        `)

    }

    get groupForm()
    {
        $(".main__table").append(`
        <div id="group-modal" class="modal h-250">
            <p class="modal__title" id="modal__title">Создание вкладки</p>
            <form action="" method="post" class="modal__form" id="newGroup" data-form-type="add">
                <label for="groupName" class="modal__label">*Имя вкладки:
                    <input type="text" name="groupName" id="groupName" class="modal__line">
                </label>
                <label for="listGroups" class="modal__label">*Группа:
                    <select name="listGroups" id="listGroups" class="modal__line">
                    </select>
                </label>
                <div class="modal__action">
                    <button type="reset" class="modal__btn pd-5" id="add-modal__reset">Очистить</button>
                    <button type="submit" class="modal__btn pd-5" id="add-modal__submit">Создать</button>
                </div>
            </form>
            <span id="modal__close" class="modal__close">ₓ</span>
        </div>
        `)
    }

    showGroups()
    {
        this.groups(0)

        $(".tab-action-edit-btn").click(function (e) {
            e.preventDefault()
            activeTab = this.id
            createCopiedGroupModal("group-modal", activeTab)
            TableDB.forms.setFormTypeEditGroup(newGroup)
        })

        $(".tab-action-delete-btn").click(function (e) {
            e.preventDefault()
            activeTab = this.id
            TableDB.group.deleteGroup(activeTab)
        })

        this.openModal()

    }

    groups (id)
    {
        $.ajax({
            url: `${this.url}?group=${id}`,
            method: 'get',
            dataType: 'json',
            async: false,
            success: function(tabs){
                Group.tabsModal(tabs)
            }
        });
    }

    openModal()
    {
        $("#listGroup").change( function () {
            if ($("#listGroup option:selected").text() === "Все вкладки")
                createModal("tabsModal", "Управление вкладками")
        })
    }

    deleteGroup (id)
    {
        if (id != null)
        {
            $.ajax({
                url: `${this.url}?group=${id}`,
                //url: `/api/patients.php?id=${id}`,
                method: 'delete',
                dataType: 'json',
                async: false,
                success: function (data) {
                    createModal("message", data.message)
                    showTable()
                    TableDB.group.showGroups()
                },
                error: function (error) {
                    createModal("message", error.responseText)
                }
            });
        }
        else {
            createModal("message", "Выберите группу")
        }
    }

    selectGroup()
    {
        $("#form-select-tab").click( (e) => {

            if (activeTab !== 0)
            {
                let isDownloadTab
                let tabsInputList = $("#listGroup .tabsInput")

                tabsInputList.each( (index, elem) => {
                    if ($(elem).val() === activeTab)
                        isDownloadTab = $(elem)
                })

                if (!isDownloadTab)
                {
                    tabsInputList[2].remove()

                    let tab = $(`.table__tab[data-modal-menu-id=${activeTab}]`)
                    $("#listGroup").append(`
                    <option class='tabsInput' value="${activeTab}" selected>${$(tab).attr("data-modal-menu-title")}</option>
                    `)
                }
                else {
                    $(`#listGroup .tabsInput[value=${activeTab}]`).attr("selected", "selected")
                }

                let tabsModal = $("#tabsModal")
                closeModal(tabsModal)

                $(".modal__title").text(TableDB.textAdd)
                $("#add-modal__submit").text("Создать")

            }
            else {
                createModal("message", "Выберите группу")
            }
        })
    }

    static tabsModal (tabs)
    {
        function setCheckTab(tableTab, targetTabId) {
            tableTab.find("input").prop("checked", false)

            $(`input[data-tab-check-id=${targetTabId}]`).prop('checked', true)
            activeTab = targetTabId
        }


        let modalTable = $("#tabsModal .table-modal .table__body")
        modalTable.text("")

        function getPdSize(relative)
        {
            return relative === undefined ? "" : "pd-size"
        }

        function downTable (item)
        {
            let pdSize = ""
            if (item.pid !== "0")
                pdSize = getPdSize(item.pid)

            return `
                <tr class="table__body__tab" id="modal-tab-${item.id}">
                    <td colspan="3">
                        <table class="table _services ${pdSize}" data-modal-table-down-id="${item.id}" data-modal-table-relative="${item.pid}">

                            <thead class="table__header table__tab" data-modal-menu-title="${item.title}" data-modal-menu-id="${item.id}">
                                <tr class="table__header__row table__tab__row" id="modal-table-${item.id}">
                                    <th class="table__header__col col-tab menu-icon menu-icon-top border-none">
                                        <img class="img-icon-td" src="img/icon/folder-label.png" alt="">${item.title}
                                        
                                    <div class="table__tabs__action tab-action">
                                        <label for="tab-action-edit" class="tab-action-item">
                                            <input type="checkbox" name="tab-edit" id="tab-action-edit" data-tab-check-id="${item.id}">
                                        </label>
                                        <button type="submit" class="tab-action-item tab-action-btn tab-action-edit-btn btn" id="${item.id}">
                                            <img src="img/icon/edit.png" title="Изменить группу" alt="Изменить группу">
                                        </button>
                                        <button type="submit" class="tab-action-item tab-action-btn tab-action-delete-btn btn" id="${item.id}">
                                            <img src="img/icon/folder-delete.png" title="Удалить группу" alt="Удалить группу">
                                        </button>
                                    </div>
                                        
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="table__body table__menu" id="modal-menu-id-${item.id}"></tbody>
                        </table>
                    </td>
                </tr>`
        }

        tabs.forEach(item => {

            if (item.id !== "0")
            {
                if (item.pid === "0")
                    modalTable.append(downTable(item))
                else
                    $(`#tabsModal #modal-menu-id-${item.pid}`).append(downTable(item))

            }

        })

        let tableTab = $("#tabsModal .table__tab")

        tableTab.click(function (e) {
            e.stopPropagation()
            let targetTabId = $(this).attr("data-modal-menu-id")
            let targetTab = $(`#modal-menu-id-${targetTabId}`)

            if (e.target.tagName !== "IMG")
            {
                targetTab.toggleClass("menu-open")
                setCheckTab(tableTab, targetTabId)
            }

        })

    }

    createCopiedGroupModal(modal, id) {
        createModal("group-modal", "Изменение группы")

        let activeTab = $(`.table__tab[data-modal-menu-id=${id}]`)
        let titleActiveTab = activeTab.attr("data-modal-menu-title")

        $("#listGroups").text("").append(`
            <option class='tabsInput' value="${id}">${activeTab.attr("data-modal-menu-title")}</option>
        `)

        $("#groupName").val(titleActiveTab)

        TableDB.forms.setFormTypeEditGroup(newForm)
    }

    showGroup()
    {
        new Promise((resolve) => {

            setTimeout(function () {
                resolve(1);
            }, 1000)

        }).then((value) => {

            let tableTab = $(".main .main__table .table-group .table__tab")

            tableTab.click(function (e) {
                $(`#menu-id-${$(this).attr("data-menu-id")}`).toggleClass("menu-open")
                $(`.table[data-table-down-id=${$(this).attr("data-menu-id")}]`).toggleClass("bg-aquamarine")
            })

            let count = 0

            $("#listGroup")
                .text("")
                .append("<option class='tabsInput' value='0' selected>Нет родителя</option>")
                .append("<option class='tabsInput' value='0' id='moreTabs'>Все вкладки</option>")

            tableTab.each((index, elem) => {
                if (count < 4) {
                    $("#listGroup").append(`<option class='tabsInput' value="${$(elem).attr("data-menu-id")}">${$(elem).attr("data-menu-title")}</option>`)
                    count++
                }

            })

        })
    }

}