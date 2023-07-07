class JobForm extends Forms{

    constructor(url) {
        super()
        this.url = url
    }

    showTable (items)
    {
        let table = $(".table__body");
        table.text("")
        items.forEach(item => {
            table.append(`                    
                    <tr class="table__body__row" id="${item.id}">
                        <td class="table__body__col" data-id="id">
                            <img class="img-icon-td" src="img/icon/document.png" alt="">${item.id}
                        </td>
                        <td class="table__body__col" data-id="name">${item.name}</td>
                        <td class="table__body__col" data-id="salary">${item.salary}</td>
                    </tr>`)
        })
    }

    formLabel ()
    {
        return `<label for="name" class="modal__label">*Название должности:
                    <input type="text" name="name" id="name" class="modal__line">
                </label>
                <label for="salary" class="modal__label">*Зарплата:
                    <input type="number" name="salary" id="salary" class="modal__line">
                </label>`
    }

    newRecordsForm()
    {
        mainTable.append(`
        <div id="modal" class="modal h-200">
            <p class="modal__title" id="modal__title" data-modal-title="patient">Создание должности</p>    
            <form action="" method="post" class="modal__form" id="newForm" data-form-type="add">
                    ${this.formLabel()}
                <div class="modal__action">
                    <button type="reset" class="modal__btn pd-5" id="add-modal__reset">Очистить</button>
                    <button type="submit" class="modal__btn pd-5" id="add-modal__submit">Создать</button>
                </div>
             </form>
            <span id="modal__close" class="modal__close">ₓ</span>
        </div>`)
    }

    uploadForms ()
    {
        this.newRecordsForm()
        this.reportsForm()
        this.errorForm()
        this.extendedSearchForm()
    }

/*    submitLogic(group = null)
    {
        newForm.submit(function (event) {
            event.preventDefault()

            let submit = true

            $(this).find("input").each( (item, elem) => {
                removeError($(elem))
                if ($(elem).val() === "")
                {
                    showError("Поле не может быть пустым", $(elem))
                    submit = false
                }
            })

            if (submit) {
                let formData = TableDB.forms.getFormData($(this))

                let formType = $(this).attr("data-form-type")

                if (formType === "add")
                {
                    TableDB.new(formData)
                }
                else if (formType === "edit")
                {
                    let formObject = {}

                    for(let pair of formData.entries())
                    {
                        if (pair[1].trim() !== "")
                            formObject[pair[0]] = pair[1]
                    }

                    formObject["id"] = activeRow

                    TableDB.edit(formObject)
                }

                showTable()
            }

        })
    }*/

    modalSubmit()
    {
        TableDB.forms.submitLogic(newForm)
    }

}
