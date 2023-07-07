class ShipmentForm extends Forms {

    constructor(url) {
        super()
        this.url = url
    }

    showTable(items) {

        let table = $(".table-shipment .table__body");
        table.text("")
        items.forEach(item => {

            table.append(`                    
                    <tr class="table__body__row" id="${item.id}">
                        <td class="table__body__col" data-id="id">
                            <img class="img-icon-td" src="img/icon/document.png" alt="">${item.id}
                        </td>
                        <td class="table__body__col" data-id="client" data-client-id="${item.client_id}">${item.client_name}</td>
                        <td class="table__body__col" data-id="equipment" data-equipment-id="${item.equipment_id}">${item.equipment_name}</td>
                        <td class="table__body__col" data-id="category" data-category-id="${item.idCategory}">${item.category_name}</td>
                        <td class="table__body__col" data-id="typeRepair" data-typeRepair-id="${item.typeRepair_id}">${item.typeRepair_name}</td>
                        <td class="table__body__col" data-id="date_end">${item.date_end}</td>
                        <td class="table__body__col" data-id="address">${item.address}</td>
                    </tr>`)
        })
    }

    createCopiedModal (modal) {}

    formLabel() {
        return `<label for="idClient" class="modal__label">*Клиент:
                    <select name="idClient" id="idClient" data-search-list="Client" class="modal__line">
                    </select>
                </label>
                <label for="idEquipment" class="modal__label">*Оборудование:
                    <select name="idEquipment" id="idEquipment" data-search-list="Equipment" class="modal__line">
                    </select>
                </label>
                <label for="idCategory" class="modal__label">*Категория оборудования:
                    <select name="idCategory" id="idCategory" data-search-list="Category" class="modal__line">
                    </select>
                </label>
                <label for="idTypeRepair" class="modal__label">*Вид ремонта:
                    <select name="idTypeRepair" id="idTypeRepair" data-search-list="TypeRepair" class="modal__line">
                    </select>
                </label>
                <label for="date" class="modal__label">*Дата окончания:
                    <input type="datetime-local" name="shipment.date" id="date" class="modal__line">
                </label>
                <label for="address" class="modal__label">*Адрес отправки:
                    <input type="text" name="shipment.address" id="address" class="modal__line">                
                </label>`
    }

    newRecordsForm() {}

    uploadForms() {
        this.newRecordsForm()
        this.reportsForm()
        this.errorForm()
        this.extendedSearchForm()
    }

    modalSubmit()
    {
        TableDB.forms.submitLogic(newForm)
    }

}
