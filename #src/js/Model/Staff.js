class Staff extends Essence {

    constructor(textAdd, textEdit, title, url) {
        super(textAdd, textEdit, title, url);
        this.reports = new StaffReports("/api/staffReports.php")
        this.forms = new StaffForm(url)
        this.job = new JobTitleModal()
        new ContextMenu()
    }
}
