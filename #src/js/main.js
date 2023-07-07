"use strict";

let mainTable = $(".main__table")
let searchLine = $(".field-search__field")
let TableDB;
let activeSpecialization = 0
let activeCategory = 0
let activeClient = 0
let activeBrand = 0
let activeCountry = 0
let activeStaff = 0
let activeTypeRepair = 0
let activeEquipment = 0
let activeTab = 0
let zIndex = 102

// Interface
//='Interface/Essence.js'
//='Interface/Reports.js'
//='Interface/Form.js'

// Tabs
//='Tabs/Group.js'

// Reports
//='Reports/ClientReports.js'
//='Reports/CountriesReports.js'
//='Reports/StaffReports.js'
//='Reports/JobReports.js'
//='Reports/TypeRepairReports.js'
//='Reports/CategoryReports.js'
//='Reports/EquipmentReports.js'
//='Reports/BrandReports.js'
//='Reports/RepairsReports.js'
//='Reports/ShipmentReports.js'

// Modal
//='Modal/JobTitleModal.js'
//='Modal/BrandModal.js'
//='Modal/CountryModal.js'
//='Modal/CategoryModal.js'
//='Modal/ClientModal.js'
//='Modal/StaffModal.js'
//='Modal/TypeRepairModal.js
//='Modal/EquipmentModal.js

// Form
//='Form/ClientForm.js'
//='Form/CountriesForm.js'
//='Form/StaffForm.js'
//='Form/JobForm.js'
//='Form/TypeRepairForm.js'
//='Form/CategoryForm.js'
//='Form/EquipmentForm.js'
//='Form/BrandForm.js'
//='Form/RepairsForm.js'
//='Form/ShipmentForm.js'

// Classes
//='Model/Client.js'
//='Model/Countries.js'
//='Model/Staff.js'
//='Model/Job.js'
//='Model/TypeRepair.js'
//='Model/Category.js'
//='Model/Equipment.js'
//='Model/Brand.js'
//='Model/Repairs.js'
//='Model/About.js'
//='Model/Shipment.js'
//='Model/ContextMenu.js'

let tableName = $(".main__table").attr("data-table-name")
let pageTitle = $("#title")
let mainTitle = $(".top-main__title")
let searchListSetting

initPage()

let addTabBtn = $("#form-add-tab")
let settingTabBtn = $("#form-setting-tab")

let addBtn = $("#form-add")
let editBtn = $("#form-edit")
let copiedBtn = $("#form-copied")
let deleteBtn = $("#form-delete")

let searchBtn = $("#form-search")
let extendedSearchBtn = $("#extended-search-setting")
let aboutBtn = $("#about-info")
let fieldSearchReset = $(".field-search__reset")

let reportsType = $(".reports-type")
let reportsBtn = $(".reports-button")

let tableTab

let modalSearchItem = $(".modal__search-item")

let table = $(".table")
let searchForm = $("#field-search")
let extendedSearchForm = $("#extended-search-form")
let reportsForm = $("#reports-form")

let tapped = false
let activeRow = null
let newForm
let newGroup

function activeHeaderLink() {
    $(".menu__link").click(function (e) {

        if (!e.target.classList.contains("menu__link_active"))
        {
            let labelActiveLink = $(".menu__link_active")
            labelActiveLink.parent().find("._active").removeClass("_active")
            labelActiveLink.removeClass("menu__link_active")

            $(this).addClass("menu__link_active")
            $(this).parent().find(".menu__sublist").addClass("_active")
        }

    })
}

jQuery(function () {
    jQuery('.menu__icon').click(function (event) {
        jQuery('.menu__icon, .menu__body').toggleClass('active');
        jQuery('body').toggleClass('lock');
    });
    jQuery('.menu__label').click(function (event) {
        jQuery('.menu__icon, .menu__body').removeClass('active');
        jQuery('body').removeClass('lock');
    })
});

function ibg(){

    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}

ibg();

// JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

function GetNameTable(tableName) {
    switch (tableName) { // http://medicine/build/api/patients.php /api/patients.php
        case "client":
            TableDB = new Client("Создание клиента", "Редактирование клиента", "Информация о клиенте", "/api/client.php")
            break
        case "countries":
            TableDB = new Countries("Создание страны", "Редактирование страны", "Информация о стране", "/api/countries.php")
            break
        case "staff":
            TableDB = new Staff("Создание сотрудника", "Редактирование сотрудника", "Информация об персонале", "/api/staff.php")
            break
        case "job":
            TableDB = new Job("Создание должности", "Редактирование должности", "Информация об должностях", "/api/job.php")
            break
        case "typeRepair":
            TableDB = new TypeRepair("Создать новый вид ремонта", "Редактирование вида ремонта", "Виды ремонта", "/api/typeRepair.php")
            break
        case "category":
            TableDB = new Category("Создать категорию", "Редактирование категории", "Категории оборудований", "/api/category.php")
            break
        case "equipment":
            TableDB = new Equipment("Создать оборудование", "Редактирование оборудования", "Оборудования", "/api/equipment.php")
            break
        case "brand":
            TableDB = new Brand("Создать модель", "Редактирование модели", "Модель", "/api/brand.php")
            break
        case "repairs":
            TableDB = new Repairs("Создать ремонтную запись", "Редактирование ремонтной записи", "Ремонтная запись", "/api/repairs.php")
            break
        case "shipment":
            TableDB = new Shipment("Создать акт отгрузки", "Редактировать акт отгрузки", "Акт отгрузки", "/api/shipment.php")
            break
    }
}

function closeModal (modal)
{
    --zIndex
    modal.animate({ opacity: 0 }, 198, function () {
        $(this).css("display", "none")
        modal.find(".modal__title").text(TableDB.textAdd)
        modal.find("#add-modal__submit").text("Создать")
        $(this).css("z-index", zIndex)

        if (zIndex <= 102)
        {
            //$("#overlay").fadeOut(297)
            $("body").css("overflow-y", "visible")
        }
    })

    $(".table__tab").find("input").prop("checked", false)
    activeTab = 0
}

function createModal(modalForm, title = null) {

    let modal = $(`#${modalForm}`)

    if (modal)
    {
        zIndex = zIndex < 102 ? 102 : ++zIndex

        let modalTitle = title !== null ? title : TableDB.textAdd
        $(`#${modalForm} .modal__title`).text(modalTitle)

        if (modal.attr("id") === "message")
        {

            modal
                .css("display", "flex")
                .css("z-index", zIndex)
                .animate({ opacity: 1 }, 198)
            $("body").css("overflow-y", "hidden")

            $(`#${modalForm} .modal__close-btn`).one("click",function () {
                closeModal(modal)
            })

            let elem = $(".modal__progress")
            let width = 1
            let id = setInterval(frame, 20)
            function frame() {
                if (width >= 100) {
                    clearInterval(id)
                } else {
                    elem.css("width", ++width + "%")
                }
            }

            setTimeout(function() {
                --zIndex
                modal.animate({ opacity: 0 }, 198, function () {
                    $(this).css("display", "none")
                    modal.find(".modal__title").text(TableDB.textAdd)
                    modal.find("#add-modal__submit").text("Создать")
                    $(this).css("z-index", zIndex)

                    if (zIndex <= 102)
                    {
                        $("body").css("overflow-y", "visible")
                    }
                })
            }, 2000)

        }
        else
        {

            modal
                .css("display", "flex")
                .css("z-index", zIndex)
                .animate({ opacity: 1 }, 198)
            $("body").css("overflow-y", "hidden")

            $(`#${modalForm} .modal__close-btn, #${modalForm} .modal__close, #overlay`).one("click",function () {
                closeModal(modal)
                TableDB.forms.setFormTypeAdd(newForm)
            });

        }
    }

}

function createCopiedGroupModal (modal, id)
{
    TableDB.group.createCopiedGroupModal(modal, id)
}

function showDropDownMenu() {
    $(".action__btn-menu").click(function (e) {
        let downMenu = $(`#${$(this).attr("data-downMenuName")}`)

        if (downMenu.hasClass("_hidden")) {
            $(".down-menu").not("._hidden").addClass("_hidden")
            downMenu.removeClass("_hidden")
        }
        else {
            downMenu.addClass("_hidden")
        }
    })
}

if(window.matchMedia("(max-width: 993px)").matches){
    $(".action__left").append($("#setting-button").css("opacity", 1))
}

function showTable()
{
    if (searchLine.val().trim() === "")
    {
        TableDB.rows
    }
    else
        findSearchData()
}

function initPage() {

    new About()

    GetNameTable(tableName)

    mainTitle.text(TableDB.title)
    pageTitle.text(TableDB.title)

    newForm = $("#newForm")
    newGroup = $("#newGroup")
    searchListSetting = $(".modal__search-list")

    TableDB.forms.modalSubmit();

    showDropDownMenu()
    showTable()
    getListSearchItem()

}

newGroup.submit( (e) => {
    e.preventDefault()
})

deleteBtn.click( (e) => {
    e.preventDefault()
    TableDB.delete(activeRow)
})

function findSearchData() {
    if (searchLine.val().trim() === "")
        createModal("message", "Поле для поиска не может быть пустым")
    else {
        let searchSettings = {}
        let searchAttr = searchLine.attr("data-search-tag")
        searchSettings[searchAttr] = searchLine.val()

        TableDB.forms.search(searchSettings)
    }
}

searchBtn.click( (e) => {
    e.preventDefault()
    findSearchData()
})

function getListSearchItem() {

    $(".main-table .table__header__col").each((item, elem) => {
        let searchTag = $(elem).attr("data-search-tag")

        searchListSetting.append(`
            <button class="modal__search-item" data-search-item-tag="${searchTag}">${$(elem).text()}</button>
        `)

        $(".modal__search-item").first().addClass("modal__search-item_active")
    })
    changeSearchSettingLabel()

}

$(document).ready(function () {
    addBtn.click((e) => {
        TableDB.forms.setFormTypeAdd(newForm)
        createModal("modal")
    })
    copiedBtn.click( () => {TableDB.forms.createCopiedModal("modal")})
    editBtn.click(() => {onEditClick("modal")})
    table.click((e) => {click(e,"modal")})
    extendedSearchBtn.click((e) => {createModal("extended-search-modal")})
    aboutBtn.click((e) => {createModal("about", "О программе")})
    fieldSearchReset.click( (e) => {showTable()})
    $("#add-doctor-modal__reset").click( (e) => {showTable()})

    activeHeaderLink()

    addTabBtn.click((e) => {
        createModal("group-modal", "Создание группы")

        if (activeTab)
        {
            let tab = $(`.table__tab[data-modal-menu-id=${activeTab}]`)
            $("#listGroups").text("").append(`
                <option class='tabsInput' value="${activeTab}">${$(tab).attr("data-modal-menu-title")}</option>
            `)
        }
        else {
            $("#listGroups").text("").append(`
                <option class='tabsInput' value="0">Нет родителей</option>
            `)
        }

        TableDB.forms.setFormTypeAddGroup(newGroup)
    })

    settingTabBtn.click ( (e) => {
        createModal("tabsModal", "Управление вкладками")
    })

    new Promise( (resolve) => {

        setTimeout(function () {
            resolve(1);
        }, 1000)

    }) .then( (value) => {
    })

});

modalSearchItem.click ( function (e)
{
    e.preventDefault()
    $(".modal__search-item_active").removeClass("modal__search-item_active")
    $(this).addClass("modal__search-item_active")

    changeSearchSettingLabel()

})

reportsBtn.click(function (e) {

    if (activeRow)
    {
        if (this.id)
        {
            createModal("newShipmentForm", "Акт отгрузки")
        }
        else {
            $("#reports").attr("data-type", $(this).attr("data-reports-type"))
            createModal("reports", "Вывести отчет")
        }
    }
    else
        createModal("message", "Выберите запись")
})

extendedSearchForm.submit( (e) => {
    e.preventDefault()

    let formData = TableDB.forms.getFormData($(extendedSearchForm))

    let searchSetting = {}
    for(let pair of formData.entries())
    {
        if (pair[1].trim() !== "")
            searchSetting[pair[0]] = pair[1]
    }

    if (!$.isEmptyObject(searchSetting))
        TableDB.forms.search(searchSetting)

})

function changeSearchSettingLabel()
{
    let selectOption = $(".modal__search-item_active")

    let selectOptionText = selectOption.text()
    let selectOptionAttr = selectOption.attr("data-search-item-tag")

    searchLine.attr("placeholder", `Поиск по ${selectOptionText}`)
    searchLine.attr("data-search-tag", `${selectOptionAttr}`)
}

searchForm.submit( (e) => {
    e.preventDefault()
    findSearchData()
})

function removeError (object)
{
    let parent = object.parent()
    let error = parent.children(".modal__error")
    if (error) error.remove()
}

reportsType.click(function (e) {
    e.preventDefault()
    let formData = new FormData()

    formData.append("id", `${activeRow}`)
    formData.append("exportType", `${$(this).attr("name")}`)
    formData.append("reportType", `${$("#reports").attr("data-type")}`)

    TableDB.reports.dataReport(formData)
})

function showError(message, object) {
    const labelError = document.createElement("p")
    labelError.classList.add("modal__error")
    labelError.textContent = message
    object.parent().append(labelError)
}

function setMarkedClick(e) {
    let target = e.target.parentNode

    if (!target.classList.contains("table__header__row") && e.which !== 3)
    {
        if (!target.classList.contains("main__table") && !target.classList.contains("modal-row") && !target.classList.contains("table__header__row"))
        {
            $("._marked").removeClass("_marked")

            if (target.tagName === 'TR') {
                $(`#${target.id}`).toggleClass("_marked")
                activeRow = target.id
            }
        }

    }

}

function click(e, modal) {
    e.preventDefault()
    e.stopPropagation()

    setMarkedClick(e)
    if (tapped === false) {
        tapped = setTimeout(function() {
            tapped = false
        },250)
    } else {
        clearTimeout(tapped)
        tapped = false
        onEditClick(modal)
    }
}

function onEditClick(modal) {
    $("#modal__title").text(TableDB.textEdit)
    $("#add-modal__submit").text("Изменить")
    TableDB.forms.createCopiedModal(modal)
    TableDB.forms.setFormTypeEdit(newForm)
}

