class BrandForm extends Forms{

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
                    </tr>`)
        })
    }

    formLabel ()
    {
        return `<label for="name" class="modal__label modal__label-full">*Название модели:
                    <input type="text" name="name" id="name" class="modal__line">
                </label>`
    }

    newRecordsForm()
    {
        mainTable.append(`
        <div id="modal" class="modal h-200">
            <p class="modal__title" id="modal__title" data-modal-title="patient">Создание модели</p>    
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

    modalSubmit()
    {
        TableDB.forms.submitLogic(newForm)
    }

}
