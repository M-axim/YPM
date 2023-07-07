class Modal {

    constructor(modalForm, title) {
        this.modalForm = modalForm
        this.title = title
    }

    createModal(modalForm, title = null) {

        let modal = $(`#${modalForm}`)

        zIndex = zIndex < 102 ? 102 : ++zIndex

        let modalTitle = title !== null ? title : TableDB.textAdd
        $(`#${modalForm} .modal__title`).text(modalTitle)

        if (modal.attr("id") === "message")
        {

            modal
                .css("display", "flex")
                .css("z-index", zIndex)
                .animate({ opacity: 1 }, 198)
            $("body").css("overflow-y", "hidden")

            $(`#${modalForm} .modal__close-btn`).one("click",function () {
                closeModal(modal)
            })

            let elem = $(".modal__progress")
            let width = 1
            let id = setInterval(frame, 20)
            function frame() {
                if (width >= 100) {
                    clearInterval(id)
                } else {
                    elem.css("width", ++width + "%")
                }
            }

            setTimeout(function() {
                --zIndex
                modal.animate({ opacity: 0 }, 198, function () {
                    $(this).css("display", "none")
                    modal.find(".modal__title").text(TableDB.textAdd)
                    modal.find("#add-modal__submit").text("Создать")
                    $(this).css("z-index", zIndex)

                    if (zIndex <= 102)
                    {
                        $("body").css("overflow-y", "visible")
                    }
                })
            }, 2000)

        }
        else
        {

            $("#overlay").fadeIn(297, function () {
                modal
                    .css("display", "flex")
                    .css("z-index", zIndex)
                    .animate({ opacity: 1 }, 198)
                $("body").css("overflow-y", "hidden")
            })

            $(`#${modalForm} .modal__close-btn, #${modalForm} .modal__close, #overlay`).one("click",function () {
                closeModal(modal)
                TableDB.forms.setFormTypeAdd(newForm)
            });

        }

    }

}