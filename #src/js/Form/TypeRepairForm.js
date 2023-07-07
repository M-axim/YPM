class TypeRepairForm extends Forms {

    constructor(url) {
        super()
        this.url = url
    }

    showTable(items) {

        function getPdSize(relative) {
            return relative === undefined || relative === "0" ? "" : "pd-size"
        }

        function rows(item) {
            if (item.id === null)
                return ""

            return `<tr class="table__body__row" id="${item.id}" data-service-list-id="${item.tab}">
                        <td class="table__body__col" data-id="id">
                            <img class="img-icon-td" src="img/icon/document.png" alt="">${item.id}
                           </td>
                        <td class="table__body__col" data-id="name">${item.name}</td>
                        <td class="table__body__col" data-id="price">${item.price}</td>
                    </tr>`
        }

        function downTable(item) {
            let pdSize = ""
            if (item.pid !== "0")
                pdSize = getPdSize(item.pid)

            return `<tr class="table__body__tab" id="tab-${item.tabsId}">
                    <td colspan="3">
                        <table class="table _services ${pdSize}" data-table-down-id="${item.tabsId}" data-table-relative="${item.pid}">

                            <thead class="table__header table__tab" data-menu-title="${item.title}" data-menu-id="${item.tabsId}">
                                <tr class="table__header__row" id="table-${item.tabsId}">
                                    <th class="table__header__col col-tab menu-icon menu-icon-top" colspan="3">
                                        <img class="img-icon-td" src="img/icon/folder-label.png" alt="">${item.title}
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="table__body table__menu" id="menu-id-${item.tabsId}"></tbody>
                        </table>
                    </td>`
        }

        let table = $(".table-typeRepair .table__body");

        table.text("")
        items.forEach(item => {

            if (item.tab !== "0") {
                let tab = $(`#tab-${item.tab}`)

                if (tab.length) {
                    $(rows(item)).prependTo($(`#menu-id-${item.tab}`))
                } else {
                    if (item.pid === "0")
                        table.append(downTable(item))
                    else
                        $(downTable(item)).prependTo($(`#menu-id-${item.pid}`))
                }

            } else {
                table.append(rows(item))
            }

        })
        TableDB.group.showGroup()
    }

    formLabel() {
        return `<label for="name" class="modal__label">*Вид ремонта:
                    <input type="text" name="name" id="name" class="modal__line">
                </label>
                <label for="price" class="modal__label">*Цена:
                    <input type="number" name="price" id="price" class="modal__line">
                </label>
                <label for="listGroup" class="modal__label">*Группа:
                    <select name="listGroup" id="listGroup" class="modal__line">
                    </select>
                </label>`
    }

    uploadForms() {
        this.newRecordsForm()
        this.reportsForm()
        this.errorForm()
        this.extendedSearchForm()
    }

    modalSubmit()
    {
        TableDB.forms.submitLogic(newForm)
        TableDB.forms.submitLogic(newGroup)
    }

}
