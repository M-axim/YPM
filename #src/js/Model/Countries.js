class Countries extends Essence {

    constructor(textAdd, textEdit, title, url) {
        super(textAdd, textEdit, title, url);
        this.reports = new CountriesReports("/api/countriesReports.php")
        this.forms = new CountriesForm(url)
        new ContextMenu()
    }
}
