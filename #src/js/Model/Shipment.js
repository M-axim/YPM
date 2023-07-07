class Shipment extends Essence {

    constructor(textAdd, textEdit, title, url) {
        super(textAdd, textEdit, title, url)
        this.reports = new ShipmentReports("/api/shipmentReports.php")
        this.forms = new ShipmentForm(url)
        this.client = new ClientModal()
        this.category = new CategoryModal()
        this.typeRepair = new TypeRepairModal()
        this.equipment = new EquipmentModal()
    }

    delete(id) {}
    edit(id) {}
    new(formData) {}
}