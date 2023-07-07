class Client extends Essence {

    constructor(textAdd, textEdit, title, url) {
        super(textAdd, textEdit, title, url);
        this.reports = new ClientReports("/api/clientReports.php")
        this.forms = new ClientForm(url)
        new ContextMenu()
    }

    equipments(id)
    {
        console.log(id)
        $.ajax({
            url: `${this.url}?clientId=${id}`,
            method: 'get',
            dataType: 'json',
            success: function(items){
                let modalRowBody = $(".table-client-equipment-modal .table__body")

                modalRowBody.text("")

                items.forEach(item => {

                    modalRowBody.append(`
                    <tr class="table__body__row modal-row" data-id="${item.id}">
                        <td class="table__body__col" data-id="id">
                            <img class="img-icon-td" src="img/icon/document.png" alt="">${item.id}
                        </td>
                        <td class="table__body__col" data-id="name">${item.name}</td>
                        <td class="table__body__col" data-id="year">${item.year}</td>
                        <td class="table__body__col" data-id="countryName">${item.countryName}</td>
                        <td class="table__body__col" data-id="categoryName">${item.categoryName}</td>
                        <td class="table__body__col" data-id="brandName">${item.brandName}</td>
                    </tr>`)

                })
            }
        });
    }
}
