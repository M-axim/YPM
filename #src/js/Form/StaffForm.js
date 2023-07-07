class StaffForm extends Forms{

    constructor(url) {
        super()
        this.url = url
    }

    showTable (items)
    {
        let table = $(".table-staff .table__body");
        table.text("")
        items.forEach(item => {
            table.append(`                    
                    <tr class="table__body__row" id="${item.id}">
                        <td class="table__body__col" data-id="id">
                            <img class="img-icon-td" src="img/icon/document.png" alt="">${item.id}
                        </td>
                        <td class="table__body__col" data-id="fullName">${item.fullName}</td>
                        <td class="table__body__col" data-id="JobTitleId" data-jobTitle-id="${item.JobTitleId}">${item.JobTitleName}</td>
                        <td class="table__body__col" data-id="tel">${item.tel}</td>
                    </tr>`)
        })
    }

    formLabel ()
    {
        return `<label for="fullName" class="modal__label">*ФИО сотрудника:
                    <input type="text" name="fullName" id="fullName" class="modal__line">
                </label>
                <label for="JobTitleId" class="modal__label">*Должность:
                    <select name="JobTitleId" id="JobTitleId" data-search-list="JobTitle" class="modal__line"></select>
                </label>
                <label for="tel" class="modal__label">*Телефон:
                    <input type="tel" name="tel" placeholder="79995552525" id="tel" minlength="11" maxlength="11" class="modal__line">
                </label>`
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
            })

        }
        else {
            createModal("message", "Выберите запись")
        }

    }

    uploadForms ()
    {
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
