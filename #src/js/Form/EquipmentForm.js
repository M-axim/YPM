class EquipmentForm extends Forms {

    constructor(url) {
        super()
        this.url = url
    }

    showTable(items) {

        let table = $(".table-equipment .table__body");
        table.text("")
        items.forEach(item => {
            table.append(`                    
                    <tr class="table__body__row" id="${item.id}">
                        <td class="table__body__col" data-id="id">
                            <img class="img-icon-td" src="img/icon/document.png" alt="">${item.id}
                           </td>
                        <td class="table__body__col" data-id="name">${item.name}</td>
                        <td class="table__body__col" data-id="brand" data-brand-id="${item.brand}">${item.brandName}</td>
                        <td class="table__body__col" data-id="country" data-country-id="${item.country}">${item.countryName}</td>
                        <td class="table__body__col" data-id="year">${item.year}</td>
                        <td class="table__body__col" data-id="category" data-category-id="${item.category}">${item.categoryName}</td>
                        <td class="table__body__col" data-id="organization" data-organization-id="${item.organization}">${item.organizationName}</td>
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

                $(`#JobTitleId .tabsInput[value="${$(element).attr("data-jobtitle-id")}"]`).prop("selected", true)
                $(`#brand .tabsInput[value="${$(element).attr("data-brand-id")}"]`).prop("selected", true)
                $(`#country .tabsInput[value="${$(element).attr("data-country-id")}"]`).prop("selected", true)
                $(`#category .tabsInput[value="${$(element).attr("data-category-id")}"]`).prop("selected", true)
                $(`#organization .tabsInput[value="${$(element).attr("data-organization-id")}"]`).prop("selected", true)

            })

        }
        else {
            createModal("message", "Выберите запись")
        }

    }

    formLabel() {
        return `<label for="name" class="modal__label">*Название Оборудования:
                    <input type="text" name="name" id="name" class="modal__line">
                </label>
                <label for="brand" class="modal__label">*Модель:
                    <select name="brand" id="brand" data-search-list="Brand" class="modal__line">
                    </select>
                </label>
                <label for="country" class="modal__label">*Страна производитель:
                    <select name="country" id="country" data-search-list="Country" class="modal__line">
                    </select>
                </label>
                <label for="year" class="modal__label">*Год выпуска:
                    <input type="datetime-local" name="year" id="year" class="modal__line">
                </label>
                <label for="category" class="modal__label">*Категория оборудования:
                    <select name="category" id="category" data-search-list="Category" class="modal__line">
                    </select>
                </label>
                <label for="organization" class="modal__label">*Клиент:
                    <select name="organization" id="organization" data-search-list="Client" class="modal__line">
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
    }

}
