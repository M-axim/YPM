class ClientForm extends Forms{

    constructor(url) {
        super()
        this.url = url
    }

    showTable (items)
    {
        let table = $(".table-client .table__body");
        table.text("")
        items.forEach(item => {
            table.append(`                    
                    <tr class="table__body__row" id="${item.id}" data-equipment-list-id="${item.equipmentList}">
                        <td class="table__body__col" data-id="id">
                            <img class="img-icon-td" src="img/icon/document.png" alt="">${item.id}
                        </td>
                        <td class="table__body__col" data-id="name">${item.name}</td>
                        <td class="table__body__col" data-id="address">${item.address}</td>
                    </tr>`)
        })
    }

    formLabel ()
    {
        return `<label for="name" class="modal__label">*Название организации:
                    <input type="text" name="name" id="name" class="modal__line">
                </label>
                <label for="address" class="modal__label">*Адрес организации:
                    <input type="text" name="address" id="address" class="modal__line">
                </label>`
    }

    newRecordsForm()
    {
        mainTable.append(`
        <div id="modal" class="modal h-300">
            <p class="modal__title" id="modal__title" data-modal-title="patient">Создание организации</p>    
            <form action="" method="post" class="modal__form" id="newForm" data-form-type="add">
                    ${this.formLabel()}
                    
                    <div class="modal__body h-150">
                        <table class="table table-client-equipment-modal">
            
                            <thead class="table__header bg-grey">
                                <tr class="table__header__row">
                                    <th class="table__header__col">Код оборудования</th>
                                    <th class="table__header__col">Название оборудования</th>
                                    <th class="table__header__col">Год выпуска</th>
                                    <th class="table__header__col">Производитель</th>
                                    <th class="table__header__col">Модель оборудования</th>
                                    <th class="table__header__col">Категория оборудования</th>
                                </tr>
                            </thead>
            
                            <tbody class="table__body">
                            </tbody>
    
                        </table>
                </div>
                    
                <div class="modal__action">
                    <button type="reset" class="modal__btn pd-5" id="add-modal__reset">Очистить</button>
                    <button type="submit" class="modal__btn pd-5" id="add-modal__submit">Создать</button>
                </div>
             </form>
            <span id="modal__close" class="modal__close">ₓ</span>
        </div>`)
    }

    createCopiedModal (modal) {

        let activeTableRow = $("._marked")

        if (activeTableRow.length > 0)
        {
            createModal(modal, "Редактирование записи")
            TableDB.forms.setFormTypeEdit(newForm)
            let jobId = 0

            $("._marked .table__body__col").each(( item, element ) => {

                let attrId = $(element).attr("data-id")

                $(`#${modal} #${attrId}`).val(element.innerHTML)
            })

            TableDB.equipments(activeRow)

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
