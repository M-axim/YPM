class Job extends Essence {

    constructor(textAdd, textEdit, title, url) {
        super(textAdd, textEdit, title, url);
        this.reports = new JobReports("/api/jobReports.php")
        this.forms = new JobForm(url)
        new ContextMenu()
    }
}
