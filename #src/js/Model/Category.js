class Category extends Essence {

    constructor(textAdd, textEdit, title, url) {
        super(textAdd, textEdit, title, url)
        this.reports = new CategoryReports("/api/categoryReports.php")
        this.forms = new CategoryForm(url)
        this.group = new Group(url)
        new ContextMenu()
    }
}