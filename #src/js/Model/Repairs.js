class Repairs extends Essence {

    constructor(textAdd, textEdit, title, url) {
        super(textAdd, textEdit, title, url)
        this.reports = new RepairsReports("/api/repairsReports.php")
        this.forms = new RepairsForm(url)
        this.client = new ClientModal()
        this.staff = new StaffModal()
        this.typeRepair = new TypeRepairModal()
        this.equipment = new EquipmentModal()
        new ContextMenu()
    }

    newShipment(formData)
    {
        $.ajax({
            url: `${this.url}?shipment=true`,
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
        })
    }

}