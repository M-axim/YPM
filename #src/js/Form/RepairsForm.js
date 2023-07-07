class RepairsForm extends Forms {

    constructor(url) {
        super()
        this.url = url
    }

    showTable(items) {

        let table = $(".table-repairs .table__body");
        table.text("")
        items.forEach(item => {
            if (item.date_end === null)
                item.date_end = "Не указано"

            table.append(`                    
                    <tr class="table__body__row" id="${item.id}">
                        <td class="table__body__col" data-id="id">
                            <img class="img-icon-td" src="img/icon/document.png" alt="">${item.id}
                           </td>
                        <td class="table__body__col" data-id="date_start">${item.date_start}</td>
                        <td class="table__body__col" data-id="client" data-client-id="${item.client_id}">${item.client_name}</td>
                        <td class="table__body__col" data-id="equipment_id" data-equipment-id="${item.equipment_id}">${item.equipment_name}</td>
                        <td class="table__body__col" data-id="typeRepair" data-typeRepair-id="${item.typeRepair_id}">${item.typeRepair_name}</td>
                        <td class="table__body__col" data-id="organization" data-staff-id="${item.staff_id}">${item.staff_name}</td>
                        <td class="table__body__col" data-id="date_end">${item.date_end}</td>
                        <td class="table__body__col" data-id="price">${item.price}</td>
                    </tr>`)
        })
    }

    createCopiedModal (modal) {
        let activeTableRow = $("._marked")

        if (activeTableRow.length > 0)
        {
            createModal(modal)
            TableDB.forms.setFormTypeEdit(newForm)

            $("._marked .table__body__col").each(( item, element ) => {

                let attrId = $(element).attr("data-id")

                $(`#${modal} #${attrId}`).val(element.innerHTML)

                $(`#client_id .tabsInput[value="${$(element).attr("data-client-id")}"]`).prop("selected", true)
                $(`#staff_id .tabsInput[value="${$(element).attr("data-staff-id")}"]`).prop("selected", true)
                $(`#typeRepair_id .tabsInput[value="${$(element).attr("data-typeRepair-id")}"]`).prop("selected", true)
                $(`#equipment_id .tabsInput[value="${$(element).attr("data-equipment-id")}"]`).prop("selected", true)
            })

        }
        else {
            createModal("message", "Выберите запись")
        }

    }

    formLabel() {
        return `<label for="date_start" class="modal__label">*Начало ремонта:
                    <input type="datetime-local" name="date_start" id="date_start" class="modal__line">
                </label>
                <label for="client_id" class="modal__label">*Клиент:
                    <select name="client_id" id="client_id" data-search-list="Client" class="modal__line">
                    </select>
                </label>
                <label for="equipment_id" class="modal__label">*Оборудование:
                    <select name="equipment_id" id="equipment_id" data-search-list="Equipment" class="modal__line">
                    </select>
                </label>
                <label for="typeRepair_id" class="modal__label">*Вид ремонта:
                    <select name="typeRepair_id" id="typeRepair_id" data-search-list="TypeRepair" class="modal__line">
                    </select>
                </label>
                <label for="price" class="modal__label">*Цена:
                    <input type="number" name="price" id="price" readonly class="modal__line">
                </label>
                <label for="staff_id" class="modal__label">*Мастер:
                    <select name="staff_id" id="staff_id" data-search-list="Staff" class="modal__line">
                    </select>
                </label>
                <label for="date_end" class="modal__label">*Дата окончания ремонта:
                    <input type="datetime-local" name="date_end" id="date_end" class="modal__line">
                </label>`
    }

    checkData() {
        let formData = TableDB.forms.getFormData($(newForm))

        $(this).find("input").each((item, elem) => {
            removeError($(elem))
            if ($(elem).val() === "" && $(elem).id !== "date_end") {
                showError("Поле не может быть пустым", $(elem))
                return 0
            }
        })

        if (formData.get("date_start") >= formData.get("date_end") && formData.get("date_end"))
        {
            createModal("message", "Неверная дата")
            return 0
        }
        return 1

    }

    shipmentForm()
    {
        mainTable.append(`
            <div id="newShipmentForm" class="modal h-200">
                <form action="" method="post" class="modal__form" id="newShipment">
                <label for="address" class="modal__label modal__label-full">*Адрес отправки:
                    <input type="text" name="address" id="address" class="modal__line">
                </label>
                <div class="modal__action">
                    <button type="reset" class="modal__btn pd-5" id="add-doctor-modal__reset">Очистить</button>
                    <button type="submit" class="modal__btn pd-5" id="add-modal__submit">Создать</button>
                </div>
            </form>
            <span id="modal__close" class="modal__close">ₓ</span>
        </div>
        `)

        this.shipmentData()

    }

    shipmentData()
    {
        $("#newShipment").submit(function (event) {
            event.preventDefault()
            let formData = TableDB.forms.getFormData($(this))
            formData.append("id", activeRow)
            TableDB.newShipment(formData)
            closeModal($("#newShipmentForm"))
        })
    }

    uploadForms() {
        this.newRecordsForm()
        this.reportsForm()
        this.errorForm()
        this.extendedSearchForm()
        this.shipmentForm()
    }

    modalSubmit()
    {
        TableDB.forms.submitLogic(newForm)
    }

}
