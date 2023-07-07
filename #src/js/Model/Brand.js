class Brand extends Essence {

    constructor(textAdd, textEdit, title, url) {
        super(textAdd, textEdit, title, url);
        this.reports = new BrandReports("/api/brandReports.php")
        this.forms = new BrandForm(url)
        new ContextMenu()

    }
}
