class Essence {

    constructor(textAdd, textEdit, title, url) {
        this.textAdd = textAdd
        this.textEdit = textEdit
        this.title = title
        this.url = url
    }

    get rows ()
    {
        $.ajax({
            url: `${this.url}`,
            method: 'get',
            dataType: 'json',
            success: function(data){
                TableDB.forms.showTable(data)
            }
        });
    }

    groups(id) {
    }

    row (id)
    {
        $.ajax({
            url: `${this.url}?id=${id}`,
            method: 'get',
            dataType: 'json',
            success: function(data){
                TableDB.forms.showTable(data)
            }
        });
    }

    delete (id)
    {
        if (id != null)
        {
            $.ajax({
                url: `${this.url}?id=${id}`,
                method: 'delete',
                dataType: 'json',
                async: false,
                success: function (data) {
                    createModal("message", data.message)
                    showTable()
                },
                error: function (error) {
                    createModal("message", error.responseJSON.message)
                }
            });
        }
        else
            createModal("message", "Выберите запись")
    }

    new(formData) {
        $.ajax({
            url: `${this.url}`,
            method: 'post',
            async: false,
            processData: false,
            contentType: false,
            data: formData,
            success: function (data) {
                createModal("message", data.message)
                $(newForm).trigger("reset")
            },
            error: function (error) {
                createModal("message", error.responseJSON.message)
            }
        });
    }

    edit(formData) {
        $.ajax({
            url: `${this.url}`,
            method: "patch",
            async: false,
            data: JSON.stringify(formData),
            processData: false,
            success: function (data) {
                createModal("message", data.message)
            },
            error: function (error) {
                console.log(error)
                createModal("message", error.responseJSON.message)
            }
        });
    }

}
