class TypeRepair extends Essence {

    constructor(textAdd, textEdit, title, url) {
        super(textAdd, textEdit, title, url)
        this.reports = new TypeRepairReports("/api/typeRepairReports.php")
        this.forms = new TypeRepairForm(url)
        this.group = new Group(url)
        new ContextMenu()
    }
}