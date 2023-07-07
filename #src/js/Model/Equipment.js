class Equipment extends Essence {

    constructor(textAdd, textEdit, title, url) {
        super(textAdd, textEdit, title, url)
        this.reports = new EquipmentReports("/api/equipmentReports.php")
        this.forms = new EquipmentForm(url)
        this.brand = new BrandModal()
        this.country = new CountryModal()
        this.category = new CategoryModal()
        this.client = new ClientModal()
        new ContextMenu()
    }
}