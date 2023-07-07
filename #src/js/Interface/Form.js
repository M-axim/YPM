class Forms {

    constructor (url) {
        this.url = url
        this.uploadForms()
    }

    getFormData (form) { return new FormData(form.get(0)) }

    setFormTypeAdd (formName) { formName.attr("data-form-type", "add") }

    setFormTypeEdit (formName) { formName.attr("data-form-type", "edit") }

    setFormTypeAddGroup (formName) { formName.attr("data-form-type", "addGroup") }

    setFormTypeEditGroup (formName) { formName.attr("data-form-type", "editGroup") }

    showTable (items) {}

    search (searchSettings)
    {
        let param = ""

        let searchLength = Object.keys(searchSettings).length
        let i = 1

        for (const [key, value] of Object.entries(searchSettings)) {
            if (i < searchLength)
                param += key + "=" + `"${value.replace(/"/g,"'")}"&`
            else
                param += key + "=" + `"${value.replace(/"/g,"'")}"`
            i++
        }
        $.ajax({
            url: `${this.url}?${param}`,
            //url: `/api/patients.php?${param}`,
            method: 'get',
            dataType: 'json',
            success: function(patients) {
                TableDB.forms.showTable(patients)
            }
        });
    }

    extendedSearchForm()
    {
        mainTable.append(`
        <div id="extended-search-modal" class="modal h-350">
            <p class="modal__title" data-modal-title="error">Расширенные настройки поиска</p>
            <form action="" method="post" class="modal__form" id="extended-search-form">

            <p class="modal__subtitle">Настройка быстрого поиска</p>
            <label for="current-search-field" class="modal__label modal__label-full modal__label-search">*Осуществлять быстрый поиск по:
                <div class="modal__search-list" id="current-search-field"></div>
            </label>

            <p class="modal__subtitle mb-4">Множественный поиск</p>
                    ${this.formLabel()}
            <div class="modal__action">
                <button type="reset" class="modal__btn pd-5" id="search-form-default">Очистить</button>
                <button type="submit" class="modal__btn pd-5" id="search-form-entry">Применить</button>
            </div>
        </form>
        <span id="modal__close" class="modal__close">ₓ</span>
        </div>
        `)
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
            })
        }
        else {
            createModal("message", "Выберите запись")
        }

    }

    errorForm()
    {
        mainTable.append(`
        <div id="message" class="modal modal-message">
            <p class="modal__title" data-modal-type="message">Не выбрана модель</p>
            <button class="modal__close-btn">Закрыть</button>
            <span class="modal__progress"></span>
        </div>
        `)
    }

    reportsForm()
    {
        mainTable.append(`
        <div id="reports" class="modal h-250">
            <p class="modal__title" data-modal-title="reports">В каком формате вывести отчет</p>
            <form action="" method="post" class="modal__form d-flex" id="reports-form">
                <div class="modal__label w-50">
                    <button type="submit" name="export_cvs" class="action__btn btn btn__big pd-12 reports-type">
                        <img class="reports__img" src="img/icon/csv.png" title="Экспортировать в csv" alt="Экспортировать в csv">
                        <figcaption>Экспортировать в csv</figcaption>
                    </button>
                </div>
                <div class="modal__label w-50">
                    <button type="submit" name="export_xls" class="action__btn btn btn__big pd-12 reports-type">
                        <img class="reports__img" src="img/icon/xls.png" title="Экспортировать в xls" alt="Экспортировать в xls">
                        <figcaption>Экспортировать в xls</figcaption>
                    </button>
                </div>
            </form>
            <button class="modal__close-btn">Закрыть</button>
        </div>
        `)
    }

    newRecordsForm() {
        mainTable.append(`
        <div id="modal" class="modal h-200">
            <p class="modal__title" id="modal__title"></p>    
            <form action="" method="post" class="modal__form table-service" id="newForm" data-form-type="add">
                ${this.formLabel()}
                <div class="modal__action">
                    <button type="reset" class="modal__btn pd-5" id="add-doctor-modal__reset">Очистить</button>
                    <button type="submit" class="modal__btn pd-5" id="add-modal__submit">Создать</button>
                </div>
             </form>
            <span id="modal__close" class="modal__close">ₓ</span>
        </div>`)
    }

    uploadForms () {}

    checkData()
    {
        $(this).find("input").each((item, elem) => {
            removeError($(elem))
            if ($(elem).val() === "") {
                showError("Поле не может быть пустым", $(elem))
                return 0
            }
        })
    }

    submitLogic(group = null)
    {
        let formType

        group.submit(function (event) {
            event.preventDefault()

            if (TableDB.forms.checkData()) {
                let formData = TableDB.forms.getFormData($(this))

                formType = $(this).attr("data-form-type")

                formData.append("formType", formType)

                if (formType === "add" || formType === "addGroup") {
                    TableDB.new(formData)
                }
                else if (formType === "edit" || formType === "editGroup") {
                    let formObject = {}

                    for (let pair of formData.entries()) {
                        if (pair[1].trim() !== "")
                            formObject[pair[0]] = pair[1]
                    }

                    formObject["formType"] = formType

                    if (formType === "edit")
                        formObject["id"] = activeRow
                    else {
                        formObject["id"] = activeTab
                    }

                    TableDB.edit(formObject)
                }
                closeModal($("#modal"))
            }
            if (formType === "editGroup") {
                let modal = $("#group-modal")
                closeModal(modal)
                $("#groupName").val("")
                TableDB.group.showGroups()
            }
            showTable()
        })
    }

    groupSubmit() {}

}