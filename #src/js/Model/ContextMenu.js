class ContextMenu {
    constructor() {
        this.init()
    }

    static deleteContextMenu()
    {
        $('*').removeClass('selected-html-element')
        $('.context-menu').remove()
    }

    init()
    {
        $(".main__table").mousedown(function(event) {
            document.oncontextmenu = function() {return false}
            let isMenuLink = event.target.classList.contains("context-menu__link")

            if (event.which === 3 && $("#overlay").css("display") !== "flex")
            {
                ContextMenu.deleteContextMenu()
                setMarkedClick(event)

                let left = event.pageX
                let top = event.pageY

                if (left <= 221)
                    left = event.pageX + 10

                if (left >= $(window).width() - 221)
                    left = $(window).width() - 221

                if (top >= $(window).height() - 151)
                    top = $(window).height() - 161

                $('<div/>', {
                    class: 'context-menu'
                })
                    .css({
                        left: left+'px',
                        top: top+'px'
                    })
                    .appendTo('body')
                    .append(
                        $('<ul class="context-menu__list"/>')
                            .append('<li class="context-menu__line"><a class="context-menu__link" id="context-form-delete" href="#">Удалить запись</a></li>')
                            .append('<li class="context-menu__line"><a class="context-menu__link" id="context-form-new" href="#">Создать запись</a></li>')
                            .append('<li class="context-menu__line"><a class="context-menu__link" id="context-form-copy" href="#">Создать копию записи</a></li>')
                            .append('<li class="context-menu__line"><a class="context-menu__link" id="context-form-edit" href="#">Изменить запись</a></li>')
                    )
                    .show('fast')

            }
            else
            {
                if (!isMenuLink)
                {
                    ContextMenu.deleteContextMenu()
                }
            }
            $("#context-form-delete").click( (e) => {
                e.preventDefault()
                TableDB.delete(activeRow)
                ContextMenu.deleteContextMenu()
            })

            $("#context-form-copy").click( (e) => {
                e.preventDefault()
                TableDB.forms.createCopiedModal("modal")
                ContextMenu.deleteContextMenu()
            })

            $("#context-form-edit").click( (e) => {
                e.preventDefault()
                onEditClick("modal")
                ContextMenu.deleteContextMenu()
            })

            $("#context-form-new").click( (e) => {
                e.preventDefault()
                createModal("modal")
                ContextMenu.deleteContextMenu()
            })

        });
    }

}