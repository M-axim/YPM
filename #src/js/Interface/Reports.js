class Reports {

    constructor(url) {
        this.url = url
    }

    get showReports () {}

    dataReport(reportsSetting)
    {
        $.ajax({
            url: this.url,
            method: 'post',
            async: false,
            processData: false,
            contentType: false,
            data: reportsSetting,
            success: function (response) {

                let blob

                if (reportsSetting.get("exportType") === "export_cvs")
                    blob = new Blob([response], { type: 'text/csv' })
                else
                    blob = new Blob([response], { type: 'application/vnd.ms-excel' })

                let downloadUrl = URL.createObjectURL(blob)
                let a = document.createElement("a")
                a.href = downloadUrl

                if (reportsSetting.get("exportType") === "export_cvs")
                    a.download = "Отчет.csv"
                else
                    a.download = "Отчет.xls"

                document.body.appendChild(a)
                a.click()
            },
            error: function (error) {
            }
        });
    }

}