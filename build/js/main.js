"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mainTable = $(".main__table");
var searchLine = $(".field-search__field");
var TableDB;
var activeSpecialization = 0;
var activeCategory = 0;
var activeClient = 0;
var activeBrand = 0;
var activeCountry = 0;
var activeStaff = 0;
var activeTypeRepair = 0;
var activeEquipment = 0;
var activeTab = 0;
var zIndex = 102; // Interface

var Essence = /*#__PURE__*/function () {
  function Essence(textAdd, textEdit, title, url) {
    _classCallCheck(this, Essence);

    this.textAdd = textAdd;
    this.textEdit = textEdit;
    this.title = title;
    this.url = url;
  }

  _createClass(Essence, [{
    key: "groups",
    value: function groups(id) {}
  }, {
    key: "row",
    value: function row(id) {
      $.ajax({
        url: "".concat(this.url, "?id=").concat(id),
        method: 'get',
        dataType: 'json',
        success: function success(data) {
          TableDB.forms.showTable(data);
        }
      });
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      if (id != null) {
        $.ajax({
          url: "".concat(this.url, "?id=").concat(id),
          method: 'delete',
          dataType: 'json',
          async: false,
          success: function success(data) {
            createModal("message", data.message);
            showTable();
          },
          error: function error(_error) {
            createModal("message", _error.responseJSON.message);
          }
        });
      } else createModal("message", "Выберите запись");
    }
  }, {
    key: "new",
    value: function _new(formData) {
      $.ajax({
        url: "".concat(this.url),
        method: 'post',
        async: false,
        processData: false,
        contentType: false,
        data: formData,
        success: function success(data) {
          createModal("message", data.message);
          $(newForm).trigger("reset");
        },
        error: function error(_error2) {
          createModal("message", _error2.responseJSON.message);
        }
      });
    }
  }, {
    key: "edit",
    value: function edit(formData) {
      $.ajax({
        url: "".concat(this.url),
        method: "patch",
        async: false,
        data: JSON.stringify(formData),
        processData: false,
        success: function success(data) {
          createModal("message", data.message);
        },
        error: function error(_error3) {
          console.log(_error3);
          createModal("message", _error3.responseJSON.message);
        }
      });
    }
  }, {
    key: "rows",
    get: function get() {
      $.ajax({
        url: "".concat(this.url),
        method: 'get',
        dataType: 'json',
        success: function success(data) {
          TableDB.forms.showTable(data);
        }
      });
    }
  }]);

  return Essence;
}();

var Reports = /*#__PURE__*/function () {
  function Reports(url) {
    _classCallCheck(this, Reports);

    this.url = url;
  }

  _createClass(Reports, [{
    key: "dataReport",
    value: function dataReport(reportsSetting) {
      $.ajax({
        url: this.url,
        method: 'post',
        async: false,
        processData: false,
        contentType: false,
        data: reportsSetting,
        success: function success(response) {
          var blob;
          if (reportsSetting.get("exportType") === "export_cvs") blob = new Blob([response], {
            type: 'text/csv'
          });else blob = new Blob([response], {
            type: 'application/vnd.ms-excel'
          });
          var downloadUrl = URL.createObjectURL(blob);
          var a = document.createElement("a");
          a.href = downloadUrl;
          if (reportsSetting.get("exportType") === "export_cvs") a.download = "Отчет.csv";else a.download = "Отчет.xls";
          document.body.appendChild(a);
          a.click();
        },
        error: function error(_error4) {}
      });
    }
  }, {
    key: "showReports",
    get: function get() {}
  }]);

  return Reports;
}();

var Forms = /*#__PURE__*/function () {
  function Forms(url) {
    _classCallCheck(this, Forms);

    this.url = url;
    this.uploadForms();
  }

  _createClass(Forms, [{
    key: "getFormData",
    value: function getFormData(form) {
      return new FormData(form.get(0));
    }
  }, {
    key: "setFormTypeAdd",
    value: function setFormTypeAdd(formName) {
      formName.attr("data-form-type", "add");
    }
  }, {
    key: "setFormTypeEdit",
    value: function setFormTypeEdit(formName) {
      formName.attr("data-form-type", "edit");
    }
  }, {
    key: "setFormTypeAddGroup",
    value: function setFormTypeAddGroup(formName) {
      formName.attr("data-form-type", "addGroup");
    }
  }, {
    key: "setFormTypeEditGroup",
    value: function setFormTypeEditGroup(formName) {
      formName.attr("data-form-type", "editGroup");
    }
  }, {
    key: "showTable",
    value: function showTable(items) {}
  }, {
    key: "search",
    value: function search(searchSettings) {
      var param = "";
      var searchLength = Object.keys(searchSettings).length;
      var i = 1;

      for (var _i = 0, _Object$entries = Object.entries(searchSettings); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (i < searchLength) param += key + "=" + "\"".concat(value.replace(/"/g, "'"), "\"&");else param += key + "=" + "\"".concat(value.replace(/"/g, "'"), "\"");
        i++;
      }

      $.ajax({
        url: "".concat(this.url, "?").concat(param),
        //url: `/api/patients.php?${param}`,
        method: 'get',
        dataType: 'json',
        success: function success(patients) {
          TableDB.forms.showTable(patients);
        }
      });
    }
  }, {
    key: "extendedSearchForm",
    value: function extendedSearchForm() {
      mainTable.append("\n        <div id=\"extended-search-modal\" class=\"modal h-350\">\n            <p class=\"modal__title\" data-modal-title=\"error\">\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E\u0438\u0441\u043A\u0430</p>\n            <form action=\"\" method=\"post\" class=\"modal__form\" id=\"extended-search-form\">\n\n            <p class=\"modal__subtitle\">\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0431\u044B\u0441\u0442\u0440\u043E\u0433\u043E \u043F\u043E\u0438\u0441\u043A\u0430</p>\n            <label for=\"current-search-field\" class=\"modal__label modal__label-full modal__label-search\">*\u041E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u043E\u0438\u0441\u043A \u043F\u043E:\n                <div class=\"modal__search-list\" id=\"current-search-field\"></div>\n            </label>\n\n            <p class=\"modal__subtitle mb-4\">\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A</p>\n                    ".concat(this.formLabel(), "\n            <div class=\"modal__action\">\n                <button type=\"reset\" class=\"modal__btn pd-5\" id=\"search-form-default\">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</button>\n                <button type=\"submit\" class=\"modal__btn pd-5\" id=\"search-form-entry\">\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C</button>\n            </div>\n        </form>\n        <span id=\"modal__close\" class=\"modal__close\">\u2093</span>\n        </div>\n        "));
    }
  }, {
    key: "createCopiedModal",
    value: function createCopiedModal(modal) {
      var activeTableRow = $("._marked");

      if (activeTableRow.length > 0) {
        createModal(modal);
        TableDB.forms.setFormTypeEdit(newForm);
        $("._marked .table__body__col").each(function (item, element) {
          var attrId = $(element).attr("data-id");
          $("#".concat(modal, " #").concat(attrId)).val(element.innerHTML);
        });
      } else {
        createModal("message", "Выберите запись");
      }
    }
  }, {
    key: "errorForm",
    value: function errorForm() {
      mainTable.append("\n        <div id=\"message\" class=\"modal modal-message\">\n            <p class=\"modal__title\" data-modal-type=\"message\">\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u0430 \u043C\u043E\u0434\u0435\u043B\u044C</p>\n            <button class=\"modal__close-btn\">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>\n            <span class=\"modal__progress\"></span>\n        </div>\n        ");
    }
  }, {
    key: "reportsForm",
    value: function reportsForm() {
      mainTable.append("\n        <div id=\"reports\" class=\"modal h-250\">\n            <p class=\"modal__title\" data-modal-title=\"reports\">\u0412 \u043A\u0430\u043A\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u0432\u044B\u0432\u0435\u0441\u0442\u0438 \u043E\u0442\u0447\u0435\u0442</p>\n            <form action=\"\" method=\"post\" class=\"modal__form d-flex\" id=\"reports-form\">\n                <div class=\"modal__label w-50\">\n                    <button type=\"submit\" name=\"export_cvs\" class=\"action__btn btn btn__big pd-12 reports-type\">\n                        <img class=\"reports__img\" src=\"img/icon/csv.png\" title=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 csv\" alt=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 csv\">\n                        <figcaption>\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 csv</figcaption>\n                    </button>\n                </div>\n                <div class=\"modal__label w-50\">\n                    <button type=\"submit\" name=\"export_xls\" class=\"action__btn btn btn__big pd-12 reports-type\">\n                        <img class=\"reports__img\" src=\"img/icon/xls.png\" title=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 xls\" alt=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 xls\">\n                        <figcaption>\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 xls</figcaption>\n                    </button>\n                </div>\n            </form>\n            <button class=\"modal__close-btn\">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>\n        </div>\n        ");
    }
  }, {
    key: "newRecordsForm",
    value: function newRecordsForm() {
      mainTable.append("\n        <div id=\"modal\" class=\"modal h-200\">\n            <p class=\"modal__title\" id=\"modal__title\"></p>    \n            <form action=\"\" method=\"post\" class=\"modal__form table-service\" id=\"newForm\" data-form-type=\"add\">\n                ".concat(this.formLabel(), "\n                <div class=\"modal__action\">\n                    <button type=\"reset\" class=\"modal__btn pd-5\" id=\"add-doctor-modal__reset\">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</button>\n                    <button type=\"submit\" class=\"modal__btn pd-5\" id=\"add-modal__submit\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>\n                </div>\n             </form>\n            <span id=\"modal__close\" class=\"modal__close\">\u2093</span>\n        </div>"));
    }
  }, {
    key: "uploadForms",
    value: function uploadForms() {}
  }, {
    key: "checkData",
    value: function checkData() {
      $(this).find("input").each(function (item, elem) {
        removeError($(elem));

        if ($(elem).val() === "") {
          showError("Поле не может быть пустым", $(elem));
          return 0;
        }
      });
    }
  }, {
    key: "submitLogic",
    value: function submitLogic() {
      var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var formType;
      group.submit(function (event) {
        event.preventDefault();

        if (TableDB.forms.checkData()) {
          var formData = TableDB.forms.getFormData($(this));
          formType = $(this).attr("data-form-type");
          formData.append("formType", formType);

          if (formType === "add" || formType === "addGroup") {
            TableDB["new"](formData);
          } else if (formType === "edit" || formType === "editGroup") {
            var formObject = {};

            var _iterator = _createForOfIteratorHelper(formData.entries()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var pair = _step.value;
                if (pair[1].trim() !== "") formObject[pair[0]] = pair[1];
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            formObject["formType"] = formType;
            if (formType === "edit") formObject["id"] = activeRow;else {
              formObject["id"] = activeTab;
            }
            TableDB.edit(formObject);
          }

          closeModal($("#modal"));
        }

        if (formType === "editGroup") {
          var modal = $("#group-modal");
          closeModal(modal);
          $("#groupName").val("");
          TableDB.group.showGroups();
        }

        showTable();
      });
    }
  }, {
    key: "groupSubmit",
    value: function groupSubmit() {}
  }]);

  return Forms;
}(); // Tabs


var Group = /*#__PURE__*/function () {
  function Group(url) {
    _classCallCheck(this, Group);

    this.url = url;
    $(".action__btn._hidden").removeClass("_hidden");
    this.showTabsSetting;
    this.groupForm;
    this.showGroups();
    this.selectGroup();
  }

  _createClass(Group, [{
    key: "showGroups",
    value: function showGroups() {
      this.groups(0);
      $(".tab-action-edit-btn").click(function (e) {
        e.preventDefault();
        activeTab = this.id;
        createCopiedGroupModal("group-modal", activeTab);
        TableDB.forms.setFormTypeEditGroup(newGroup);
      });
      $(".tab-action-delete-btn").click(function (e) {
        e.preventDefault();
        activeTab = this.id;
        TableDB.group.deleteGroup(activeTab);
      });
      this.openModal();
    }
  }, {
    key: "groups",
    value: function groups(id) {
      $.ajax({
        url: "".concat(this.url, "?group=").concat(id),
        method: 'get',
        dataType: 'json',
        async: false,
        success: function success(tabs) {
          Group.tabsModal(tabs);
        }
      });
    }
  }, {
    key: "openModal",
    value: function openModal() {
      $("#listGroup").change(function () {
        if ($("#listGroup option:selected").text() === "Все вкладки") createModal("tabsModal", "Управление вкладками");
      });
    }
  }, {
    key: "deleteGroup",
    value: function deleteGroup(id) {
      if (id != null) {
        $.ajax({
          url: "".concat(this.url, "?group=").concat(id),
          //url: `/api/patients.php?id=${id}`,
          method: 'delete',
          dataType: 'json',
          async: false,
          success: function success(data) {
            createModal("message", data.message);
            showTable();
            TableDB.group.showGroups();
          },
          error: function error(_error5) {
            createModal("message", _error5.responseText);
          }
        });
      } else {
        createModal("message", "Выберите группу");
      }
    }
  }, {
    key: "selectGroup",
    value: function selectGroup() {
      $("#form-select-tab").click(function (e) {
        if (activeTab !== 0) {
          var isDownloadTab;
          var tabsInputList = $("#listGroup .tabsInput");
          tabsInputList.each(function (index, elem) {
            if ($(elem).val() === activeTab) isDownloadTab = $(elem);
          });

          if (!isDownloadTab) {
            tabsInputList[2].remove();
            var tab = $(".table__tab[data-modal-menu-id=".concat(activeTab, "]"));
            $("#listGroup").append("\n                    <option class='tabsInput' value=\"".concat(activeTab, "\" selected>").concat($(tab).attr("data-modal-menu-title"), "</option>\n                    "));
          } else {
            $("#listGroup .tabsInput[value=".concat(activeTab, "]")).attr("selected", "selected");
          }

          var tabsModal = $("#tabsModal");
          closeModal(tabsModal);
          $(".modal__title").text(TableDB.textAdd);
          $("#add-modal__submit").text("Создать");
        } else {
          createModal("message", "Выберите группу");
        }
      });
    }
  }, {
    key: "createCopiedGroupModal",
    value: function createCopiedGroupModal(modal, id) {
      createModal("group-modal", "Изменение группы");
      var activeTab = $(".table__tab[data-modal-menu-id=".concat(id, "]"));
      var titleActiveTab = activeTab.attr("data-modal-menu-title");
      $("#listGroups").text("").append("\n            <option class='tabsInput' value=\"".concat(id, "\">").concat(activeTab.attr("data-modal-menu-title"), "</option>\n        "));
      $("#groupName").val(titleActiveTab);
      TableDB.forms.setFormTypeEditGroup(newForm);
    }
  }, {
    key: "showGroup",
    value: function showGroup() {
      new Promise(function (resolve) {
        setTimeout(function () {
          resolve(1);
        }, 1000);
      }).then(function (value) {
        var tableTab = $(".main .main__table .table-group .table__tab");
        tableTab.click(function (e) {
          $("#menu-id-".concat($(this).attr("data-menu-id"))).toggleClass("menu-open");
          $(".table[data-table-down-id=".concat($(this).attr("data-menu-id"), "]")).toggleClass("bg-aquamarine");
        });
        var count = 0;
        $("#listGroup").text("").append("<option class='tabsInput' value='0' selected>Нет родителя</option>").append("<option class='tabsInput' value='0' id='moreTabs'>Все вкладки</option>");
        tableTab.each(function (index, elem) {
          if (count < 4) {
            $("#listGroup").append("<option class='tabsInput' value=\"".concat($(elem).attr("data-menu-id"), "\">").concat($(elem).attr("data-menu-title"), "</option>"));
            count++;
          }
        });
      });
    }
  }, {
    key: "showTabsSetting",
    get: function get() {
      $("#down-menu-tabs .down-menu__list").append("\n            <a class=\"down-menu__line tabs-button\" href=\"#\" id=\"form-setting-tab\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/folder-setting.png\" title=\"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0433\u0440\u0443\u043F\u043F\" alt=\"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0433\u0440\u0443\u043F\u043F\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0433\u0440\u0443\u043F\u043F\n                </div>\n            </a>\n        ");
    }
  }, {
    key: "groupForm",
    get: function get() {
      $(".main__table").append("\n        <div id=\"group-modal\" class=\"modal h-250\">\n            <p class=\"modal__title\" id=\"modal__title\">\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0432\u043A\u043B\u0430\u0434\u043A\u0438</p>\n            <form action=\"\" method=\"post\" class=\"modal__form\" id=\"newGroup\" data-form-type=\"add\">\n                <label for=\"groupName\" class=\"modal__label\">*\u0418\u043C\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0438:\n                    <input type=\"text\" name=\"groupName\" id=\"groupName\" class=\"modal__line\">\n                </label>\n                <label for=\"listGroups\" class=\"modal__label\">*\u0413\u0440\u0443\u043F\u043F\u0430:\n                    <select name=\"listGroups\" id=\"listGroups\" class=\"modal__line\">\n                    </select>\n                </label>\n                <div class=\"modal__action\">\n                    <button type=\"reset\" class=\"modal__btn pd-5\" id=\"add-modal__reset\">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</button>\n                    <button type=\"submit\" class=\"modal__btn pd-5\" id=\"add-modal__submit\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>\n                </div>\n            </form>\n            <span id=\"modal__close\" class=\"modal__close\">\u2093</span>\n        </div>\n        ");
    }
  }], [{
    key: "tabsModal",
    value: function tabsModal(tabs) {
      function setCheckTab(tableTab, targetTabId) {
        tableTab.find("input").prop("checked", false);
        $("input[data-tab-check-id=".concat(targetTabId, "]")).prop('checked', true);
        activeTab = targetTabId;
      }

      var modalTable = $("#tabsModal .table-modal .table__body");
      modalTable.text("");

      function getPdSize(relative) {
        return relative === undefined ? "" : "pd-size";
      }

      function downTable(item) {
        var pdSize = "";
        if (item.pid !== "0") pdSize = getPdSize(item.pid);
        return "\n                <tr class=\"table__body__tab\" id=\"modal-tab-".concat(item.id, "\">\n                    <td colspan=\"3\">\n                        <table class=\"table _services ").concat(pdSize, "\" data-modal-table-down-id=\"").concat(item.id, "\" data-modal-table-relative=\"").concat(item.pid, "\">\n\n                            <thead class=\"table__header table__tab\" data-modal-menu-title=\"").concat(item.title, "\" data-modal-menu-id=\"").concat(item.id, "\">\n                                <tr class=\"table__header__row table__tab__row\" id=\"modal-table-").concat(item.id, "\">\n                                    <th class=\"table__header__col col-tab menu-icon menu-icon-top border-none\">\n                                        <img class=\"img-icon-td\" src=\"img/icon/folder-label.png\" alt=\"\">").concat(item.title, "\n                                        \n                                    <div class=\"table__tabs__action tab-action\">\n                                        <label for=\"tab-action-edit\" class=\"tab-action-item\">\n                                            <input type=\"checkbox\" name=\"tab-edit\" id=\"tab-action-edit\" data-tab-check-id=\"").concat(item.id, "\">\n                                        </label>\n                                        <button type=\"submit\" class=\"tab-action-item tab-action-btn tab-action-edit-btn btn\" id=\"").concat(item.id, "\">\n                                            <img src=\"img/icon/edit.png\" title=\"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443\" alt=\"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443\">\n                                        </button>\n                                        <button type=\"submit\" class=\"tab-action-item tab-action-btn tab-action-delete-btn btn\" id=\"").concat(item.id, "\">\n                                            <img src=\"img/icon/folder-delete.png\" title=\"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443\" alt=\"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443\">\n                                        </button>\n                                    </div>\n                                        \n                                    </th>\n                                </tr>\n                            </thead>\n\n                            <tbody class=\"table__body table__menu\" id=\"modal-menu-id-").concat(item.id, "\"></tbody>\n                        </table>\n                    </td>\n                </tr>");
      }

      tabs.forEach(function (item) {
        if (item.id !== "0") {
          if (item.pid === "0") modalTable.append(downTable(item));else $("#tabsModal #modal-menu-id-".concat(item.pid)).append(downTable(item));
        }
      });
      var tableTab = $("#tabsModal .table__tab");
      tableTab.click(function (e) {
        e.stopPropagation();
        var targetTabId = $(this).attr("data-modal-menu-id");
        var targetTab = $("#modal-menu-id-".concat(targetTabId));

        if (e.target.tagName !== "IMG") {
          targetTab.toggleClass("menu-open");
          setCheckTab(tableTab, targetTabId);
        }
      });
    }
  }]);

  return Group;
}(); // Reports


var ClientReports = /*#__PURE__*/function (_Reports) {
  _inherits(ClientReports, _Reports);

  var _super = _createSuper(ClientReports);

  function ClientReports(url) {
    var _this;

    _classCallCheck(this, ClientReports);

    _this = _super.call(this);
    _this.url = url;
    _this.showReports;
    return _this;
  }

  _createClass(ClientReports, [{
    key: "showReports",
    get: function get() {
      $("#down-menu-print .down-menu__list").append("\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"clientData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/profile.png\" title=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438\" alt=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438\n                </div>\n            </a>\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"clientEquipmentData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/search-list.png\" title=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F\" alt=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F                \n                </div>\n            </a>\n        ");
    }
  }]);

  return ClientReports;
}(Reports);

var CountriesReports = /*#__PURE__*/function (_Reports2) {
  _inherits(CountriesReports, _Reports2);

  var _super2 = _createSuper(CountriesReports);

  function CountriesReports(url) {
    var _this2;

    _classCallCheck(this, CountriesReports);

    _this2 = _super2.call(this);
    _this2.url = url;
    _this2.showReports;
    return _this2;
  }

  _createClass(CountriesReports, [{
    key: "showReports",
    get: function get() {
      $("#down-menu-print .down-menu__list").append("\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"CountriesData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/profile.png\" title=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0441\u0442\u0440\u0430\u043D\u0435\" alt=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0441\u0442\u0440\u0430\u043D\u0435\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0441\u0442\u0440\u0430\u043D\u0435\n                </div>\n            </a>\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"CountriesEquipmentData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/search-list.png\" title=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0435\" alt=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0435\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0435\n                </div>\n            </a>\n        ");
    }
  }]);

  return CountriesReports;
}(Reports);

var StaffReports = /*#__PURE__*/function (_Reports3) {
  _inherits(StaffReports, _Reports3);

  var _super3 = _createSuper(StaffReports);

  function StaffReports(url) {
    var _this3;

    _classCallCheck(this, StaffReports);

    _this3 = _super3.call(this);
    _this3.url = url;
    _this3.showReports;
    return _this3;
  }

  _createClass(StaffReports, [{
    key: "showReports",
    get: function get() {
      $("#down-menu-print .down-menu__list").append("\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"StaffData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/profile.png\" title=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0435\" alt=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0435\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0435\n                </div>\n            </a>\n        ");
    }
  }]);

  return StaffReports;
}(Reports);

var JobReports = /*#__PURE__*/function (_Reports4) {
  _inherits(JobReports, _Reports4);

  var _super4 = _createSuper(JobReports);

  function JobReports(url) {
    var _this4;

    _classCallCheck(this, JobReports);

    _this4 = _super4.call(this);
    _this4.url = url;
    _this4.showReports;
    return _this4;
  }

  _createClass(JobReports, [{
    key: "showReports",
    get: function get() {
      $("#down-menu-print .down-menu__list").append("\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"JobData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/profile.png\" title=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438\" alt=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438\n                </div>\n            </a>\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"StaffData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/search-list.png\" title=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C\u044E\" alt=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C\u044E\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C\u044E\n                </div>\n            </a>\n        ");
    }
  }]);

  return JobReports;
}(Reports);

var TypeRepairReports = /*#__PURE__*/function (_Reports5) {
  _inherits(TypeRepairReports, _Reports5);

  var _super5 = _createSuper(TypeRepairReports);

  function TypeRepairReports(url) {
    var _this5;

    _classCallCheck(this, TypeRepairReports);

    _this5 = _super5.call(this);
    _this5.url = url;
    _this5.showReports;
    return _this5;
  }

  _createClass(TypeRepairReports, [{
    key: "showReports",
    get: function get() {
      $("#down-menu-print .down-menu__list").append("\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"TypeRepairData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/profile.png\" title=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0438\u043F \u0440\u0435\u043C\u043E\u043D\u0442\u0430\" alt=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0438\u043F \u0440\u0435\u043C\u043E\u043D\u0442\u0430\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0438\u043F \u0440\u0435\u043C\u043E\u043D\u0442\u0430\n                </div>\n            </a>\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"ListTypeRepair\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/search-list.png\" title=\"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u0438\u0434\u0430 \u0440\u0435\u043C\u043E\u043D\u0442\u0430\" alt=\"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u0438\u0434\u0430 \u0440\u0435\u043C\u043E\u043D\u0442\u0430\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u0438\u0434\u0430 \u0440\u0435\u043C\u043E\u043D\u0442\u0430\n                </div>\n            </a>\n        ");
    }
  }]);

  return TypeRepairReports;
}(Reports);

var CategoryReports = /*#__PURE__*/function (_Reports6) {
  _inherits(CategoryReports, _Reports6);

  var _super6 = _createSuper(CategoryReports);

  function CategoryReports(url) {
    var _this6;

    _classCallCheck(this, CategoryReports);

    _this6 = _super6.call(this);
    _this6.url = url;
    _this6.showReports;
    return _this6;
  }

  _createClass(CategoryReports, [{
    key: "showReports",
    get: function get() {
      $("#down-menu-print .down-menu__list").append("\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"categoryData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/profile.png\" title=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E\" alt=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E\n                </div>\n            </a>\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"categoryEquipmentData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/search-list.png\" title=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0435\u0439\" alt=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0435\u0439\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0435\u0439\n                </div>\n            </a>\n        ");
    }
  }]);

  return CategoryReports;
}(Reports);

var EquipmentReports = /*#__PURE__*/function (_Reports7) {
  _inherits(EquipmentReports, _Reports7);

  var _super7 = _createSuper(EquipmentReports);

  function EquipmentReports(url) {
    var _this7;

    _classCallCheck(this, EquipmentReports);

    _this7 = _super7.call(this);
    _this7.url = url;
    _this7.showReports;
    return _this7;
  }

  _createClass(EquipmentReports, [{
    key: "showReports",
    get: function get() {
      $("#down-menu-print .down-menu__list").append("\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"equipmentData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/profile.png\" title=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435\" alt=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435\n                </div>\n            </a>\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"equipmentRepairsHistoryData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/search-list.png\" title=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F\" alt=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F\n                </div>\n            </a>\n        ");
    }
  }]);

  return EquipmentReports;
}(Reports);

var BrandReports = /*#__PURE__*/function (_Reports8) {
  _inherits(BrandReports, _Reports8);

  var _super8 = _createSuper(BrandReports);

  function BrandReports(url) {
    var _this8;

    _classCallCheck(this, BrandReports);

    _this8 = _super8.call(this);
    _this8.url = url;
    _this8.showReports;
    return _this8;
  }

  _createClass(BrandReports, [{
    key: "showReports",
    get: function get() {
      $("#down-menu-print .down-menu__list").append("\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"brandData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/profile.png\" title=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C\" alt=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C\n                </div>\n            </a>\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"brandEquipmentData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/search-list.png\" title=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u044C\u044E\" alt=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u044C\u044E\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u044C\u044E\n                </div>\n            </a>\n        ");
    }
  }]);

  return BrandReports;
}(Reports);

var RepairsReports = /*#__PURE__*/function (_Reports9) {
  _inherits(RepairsReports, _Reports9);

  var _super9 = _createSuper(RepairsReports);

  function RepairsReports(url) {
    var _this9;

    _classCallCheck(this, RepairsReports);

    _this9 = _super9.call(this);
    _this9.url = url;
    _this9.showReports;
    return _this9;
  }

  _createClass(RepairsReports, [{
    key: "showReports",
    get: function get() {
      $("#down-menu-print .down-menu__list").append("\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"repairsData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/profile.png\" title=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0447\u0435\u0442\" alt=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0447\u0435\u0442\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0447\u0435\u0442\n                </div>\n            </a>\n            <a class=\"down-menu__line reports-button\" href=\"#\" id=\"shipment-btn\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/delivery.png\" title=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0430\u043A\u0442 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438\" alt=\"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0430\u043A\u0442 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438\">\n                </div>\n                <div class=\"down-menu__text\">\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0430\u043A\u0442 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438</div>\n            </a>\n        ");
    }
  }]);

  return RepairsReports;
}(Reports);

var ShipmentReports = /*#__PURE__*/function (_Reports10) {
  _inherits(ShipmentReports, _Reports10);

  var _super10 = _createSuper(ShipmentReports);

  function ShipmentReports(url) {
    var _this10;

    _classCallCheck(this, ShipmentReports);

    _this10 = _super10.call(this);
    _this10.url = url;
    _this10.showReports;
    return _this10;
  }

  _createClass(ShipmentReports, [{
    key: "showReports",
    get: function get() {
      $("#down-menu-print .down-menu__list").append("\n            <a class=\"down-menu__line reports-button\" href=\"#\" data-reports-type=\"ShipmentData\">\n                <div class=\"down-menu__icon btn pd-5\">\n                    <img src=\"img/icon/profile.png\" title=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0430\u043A\u0442 \u0440\u0435\u043C\u043E\u043D\u0442\u0430\" alt=\"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0430\u043A\u0442 \u0440\u0435\u043C\u043E\u043D\u0442\u0430\">\n                </div>\n                <div class=\"down-menu__text\">\n                    \u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0430\u043A\u0442 \u0440\u0435\u043C\u043E\u043D\u0442\u0430\n                </div>\n            </a>\n        ");
    }
  }]);

  return ShipmentReports;
}(Reports); // Modal


var JobTitleModal = /*#__PURE__*/function () {
  function JobTitleModal() {
    _classCallCheck(this, JobTitleModal);

    this.url = "/api/job.php";
    this.data;
    this.openModal();
  }

  _createClass(JobTitleModal, [{
    key: "openModal",
    value: function openModal() {
      var selectList = $("select[data-search-list=\"JobTitle\"]");
      selectList.change(function () {
        if ($(this).val() === "0") createModal("jobModal", "Выбор должности");
      });
    }
  }, {
    key: "data",
    get: function get() {
      $.ajax({
        url: "".concat(this.url),
        method: 'get',
        dataType: 'json',
        async: false,
        success: function success(data) {
          JobTitleModal.tabsModal(data);
        }
      });
    }
  }], [{
    key: "select",
    value: function select() {
      $("#form-job-select-tab").click(function (e) {
        e.preventDefault();

        if (activeSpecialization !== 0) {
          var isDownloadTab;
          var tabsInputList = $("select[data-search-list=\"JobTitle\"] .tabsInput");
          tabsInputList.each(function (index, elem) {
            if ($(elem).val() === activeSpecialization) isDownloadTab = $(elem);
          });

          if (!isDownloadTab) {
            tabsInputList[tabsInputList.length - 1].remove();
            var tab = $("#jobModal .table__body #".concat(activeSpecialization));
            $("select[data-search-list=\"JobTitle\"]").append("\n                        <option class='tabsInput' value=\"".concat(activeSpecialization, "\" selected>").concat($(tab).attr("data-menu-title"), "</option>\n                    "));
          } else {
            $("select[data-search-list=\"JobTitle\"] .tabsInput[value=".concat(activeSpecialization, "]")).attr("selected", "selected");
          }

          var tabsModal = $("#jobModal");
          closeModal(tabsModal);
          $(".modal__title").text(TableDB.textAdd);
          $("#add-modal__submit").text("Создать");
        } else {
          createModal("message", "Выберите запись для вставки");
        }
      });
    }
  }, {
    key: "tabsModal",
    value: function tabsModal(items) {
      function showTable(item) {
        return "\n                <tr class=\"table__body__row modal-row\" id=\"".concat(item.id, "\" data-menu-title=\"").concat(item.name, "\">\n                    <td class=\"table__body__col\" data-id=\"id\">\n                        <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                    </td>\n                    <td class=\"table__body__col\" data-id=\"name\">").concat(item.name, "</td>\n                </tr>");
      }

      var modalTable = $("#jobModal .table-modal .table__body");
      modalTable.text("");
      items.forEach(function (item) {
        return modalTable.append(showTable(item));
      });
      var tableTab = $("#jobModal .table__body__row");
      tableTab.click(function (e) {
        e.stopPropagation();
        $("#jobModal .table__body__row").removeClass("_marked");
        $(this).addClass("_marked");
        activeSpecialization = $(this).attr("id");
      });
      this.select();
      this.showContent();
    }
  }, {
    key: "showContent",
    value: function showContent() {
      new Promise(function (resolve) {
        setTimeout(function () {
          resolve(1);
        }, 1000);
      }).then(function (value) {
        var tableTab = $("#jobModal .table__body .table__body__row");
        var selectList = $("select[data-search-list=\"JobTitle\"]");
        var count = 0;
        selectList.text("").append("<option class='tabsInput' value='0' disabled selected>Выберите должность</option>").append("<option class='tabsInput' value='0' id='moreTabs'>Все должности</option>");
        tableTab.each(function (index, elem) {
          if (count < 4) {
            selectList.append("<option class='tabsInput' value=\"".concat($(elem).attr("id"), "\">").concat($(elem).attr("data-menu-title"), "</option>"));
            count++;
          }
        });
      });
    }
  }]);

  return JobTitleModal;
}();

var BrandModal = /*#__PURE__*/function () {
  function BrandModal() {
    _classCallCheck(this, BrandModal);

    this.url = "/api/brand.php";
    this.BDKey = "brand";
    this.modalName = "brandModal";
    this.labelName = "idBrand";
    this.data;
    this.openModal();
  }

  _createClass(BrandModal, [{
    key: "openModal",
    value: function openModal() {
      $("select[data-search-list='Brand']").change(function () {
        if ($(this).val() === "0") createModal("brandModal", "Выберите бренд");
      });
    }
  }, {
    key: "data",
    get: function get() {
      $.ajax({
        url: "".concat(this.url),
        method: 'get',
        dataType: 'json',
        async: false,
        success: function success(data) {
          BrandModal.tabsModal(data);
        }
      });
    }
  }], [{
    key: "select",
    value: function select() {
      $("#form-brand-select-tab").click(function (e) {
        e.preventDefault();

        if (activeBrand !== 0) {
          var isDownloadTab;
          var tabsInputList = $("select[data-search-list='Brand'] .tabsInput");
          tabsInputList.each(function (index, elem) {
            if ($(elem).val() === activeBrand) isDownloadTab = $(elem);
          });

          if (!isDownloadTab) {
            tabsInputList[tabsInputList.length - 1].remove();
            var tab = $("#".concat(TableDB.brand.modalName, " .table__body #").concat(activeBrand));
            $("select[data-search-list='Brand']").append("\n                        <option class='tabsInput' value=\"".concat(activeBrand, "\" selected>").concat($(tab).attr("data-menu-title"), "</option>\n                    "));
          } else {
            $("select[data-search-list='Brand'] .tabsInput[value=".concat(activeBrand, "]")).attr("selected", "selected");
          }

          var tabsModal = $("#".concat(TableDB.brand.modalName));
          closeModal(tabsModal);
          $(".modal__title").text(TableDB.textAdd);
          $("#add-modal__submit").text("Создать");
        } else {
          createModal("message", "Выберите запись для вставки");
        }
      });
    }
  }, {
    key: "tabsModal",
    value: function tabsModal(items) {
      function showTable(item) {
        return "\n                <tr class=\"table__body__row modal-row\" id=\"".concat(item.id, "\" data-menu-title=\"").concat(item.name, "\">\n                    <td class=\"table__body__col\" data-id=\"id\">\n                        <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                    </td>\n                    <td class=\"table__body__col\" data-id=\"name\">").concat(item.name, "</td>\n                </tr>");
      }

      var modalTable = $("#brandModal .table-modal .table__body");
      modalTable.text("");
      items.forEach(function (item) {
        return modalTable.append(showTable(item));
      });
      var tableTab = $("#brandModal .table__body__row");
      tableTab.click(function (e) {
        e.stopPropagation();
        $("#brandModal .table__body__row").removeClass("_marked");
        $(this).addClass("_marked");
        activeBrand = $(this).attr("id");
      });
      this.select();
      this.showContent();
    }
  }, {
    key: "showContent",
    value: function showContent() {
      new Promise(function (resolve) {
        setTimeout(function () {
          resolve(1);
        }, 1000);
      }).then(function (value) {
        var tableTab = $("#brandModal .table__body .table__body__row");
        var selectList = $("select[data-search-list='Brand']");
        var count = 0;
        selectList.text("").append("<option class='tabsInput' value='0' disabled selected>Выберите бренд</option>").append("<option class='tabsInput' value='0' id='moreTabs'>Все бренды</option>");
        tableTab.each(function (index, elem) {
          if (count < 4) {
            selectList.append("<option class='tabsInput' value=\"".concat($(elem).attr("id"), "\">").concat($(elem).attr("data-menu-title"), "</option>"));
            count++;
          }
        });
      });
    }
  }]);

  return BrandModal;
}();

var CountryModal = /*#__PURE__*/function () {
  function CountryModal() {
    _classCallCheck(this, CountryModal);

    this.url = "/api/countries.php";
    this.BDKey = "country";
    this.modalName = "countryModal";
    this.labelName = "idCountry";
    this.data;
    this.openModal();
  }

  _createClass(CountryModal, [{
    key: "openModal",
    value: function openModal() {
      $("select[data-search-list='Country']").change(function () {
        if ($(this).val() === "0") createModal("countryModal", "Выберите страну");
      });
    }
  }, {
    key: "data",
    get: function get() {
      $.ajax({
        url: "".concat(this.url),
        method: 'get',
        dataType: 'json',
        async: false,
        success: function success(data) {
          CountryModal.tabsModal(data);
        }
      });
    }
  }], [{
    key: "select",
    value: function select() {
      $("#form-country-select-tab").click(function (e) {
        e.preventDefault();

        if (activeCountry !== 0) {
          var isDownloadTab;
          var tabsInputList = $("select[data-search-list='Country'] .tabsInput");
          tabsInputList.each(function (index, elem) {
            if ($(elem).val() === activeCountry) isDownloadTab = $(elem);
          });

          if (!isDownloadTab) {
            tabsInputList[tabsInputList.length - 1].remove();
            var tab = $("#".concat(TableDB.country.modalName, " .table__body #").concat(activeCountry));
            $("select[data-search-list='Country']").append("\n                        <option class='tabsInput' value=\"".concat(activeCountry, "\" selected>").concat($(tab).attr("data-menu-title"), "</option>\n                    "));
          } else {
            $("select[data-search-list='Country'] .tabsInput[value=".concat(activeCountry, "]")).attr("selected", "selected");
          }

          var tabsModal = $("#".concat(TableDB.country.modalName));
          closeModal(tabsModal);
          $(".modal__title").text(TableDB.textAdd);
          $("#add-modal__submit").text("Создать");
        } else {
          createModal("message", "Выберите запись для вставки");
        }
      });
    }
  }, {
    key: "tabsModal",
    value: function tabsModal(items) {
      function showTable(item) {
        return "\n                <tr class=\"table__body__row modal-row\" id=\"".concat(item.id, "\" data-menu-title=\"").concat(item.name, "\">\n                    <td class=\"table__body__col\" data-id=\"id\">\n                        <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                    </td>\n                    <td class=\"table__body__col\" data-id=\"name\">").concat(item.name, "</td>\n                </tr>");
      }

      var modalTable = $("#countryModal .table-modal .table__body");
      modalTable.text("");
      items.forEach(function (item) {
        return modalTable.append(showTable(item));
      });
      var tableTab = $("#countryModal .table__body__row");
      tableTab.click(function (e) {
        e.stopPropagation();
        $("#countryModal .table__body__row").removeClass("_marked");
        $(this).addClass("_marked");
        activeCountry = $(this).attr("id");
      });
      this.select();
      this.showContent();
    }
  }, {
    key: "showContent",
    value: function showContent() {
      new Promise(function (resolve) {
        setTimeout(function () {
          resolve(1);
        }, 1000);
      }).then(function (value) {
        var tableTab = $("#countryModal .table__body .table__body__row");
        var selectList = $("select[data-search-list='Country']");
        var count = 0;
        selectList.text("").append("<option class='tabsInput' value='0' disabled selected>Выберите страну</option>").append("<option class='tabsInput' value='0' id='moreTabs'>Все страны</option>");
        tableTab.each(function (index, elem) {
          if (count < 4) {
            selectList.append("<option class='tabsInput' value=\"".concat($(elem).attr("id"), "\">").concat($(elem).attr("data-menu-title"), "</option>"));
            count++;
          }
        });
      });
    }
  }]);

  return CountryModal;
}();

var CategoryModal = /*#__PURE__*/function () {
  function CategoryModal() {
    _classCallCheck(this, CategoryModal);

    this.url = "/api/category.php";
    this.BDKey = "category";
    this.modalName = "categoryModal";
    this.labelName = "select[data-search-list='Category']";
    this.data;
    this.openModal();
  }

  _createClass(CategoryModal, [{
    key: "openModal",
    value: function openModal() {
      $("select[data-search-list='Category']").change(function () {
        if ($(this).val() === "0") createModal("categoryModal", "Выбор категории");
      });
    }
  }, {
    key: "data",
    get: function get() {
      $.ajax({
        url: "".concat(this.url),
        method: 'get',
        dataType: 'json',
        async: false,
        success: function success(data) {
          CategoryModal.tabsModal(data);
        }
      });
    }
  }], [{
    key: "select",
    value: function select() {
      $("#form-category-select-tab").click(function (e) {
        e.preventDefault();

        if (activeCategory !== 0) {
          var isDownloadTab;
          var tabsInputList = $("select[data-search-list='Category'] .tabsInput");
          tabsInputList.each(function (index, elem) {
            if ($(elem).val() === activeCategory) isDownloadTab = $(elem);
          });

          if (!isDownloadTab) {
            tabsInputList[tabsInputList.length - 1].remove();
            var tab = $("#".concat(TableDB.category.modalName, " .table__body #").concat(activeCategory));
            $("select[data-search-list='Category']").append("\n                        <option class='tabsInput' value=\"".concat(activeCategory, "\" selected>").concat($(tab).attr("data-menu-title"), "</option>\n                    "));
          } else {
            $("select[data-search-list='Category'] .tabsInput[value=".concat(activeCategory, "]")).attr("selected", "selected");
          }

          var tabsModal = $("#".concat(TableDB.category.modalName));
          closeModal(tabsModal);
          $(".modal__title").text(TableDB.textAdd);
          $("#add-modal__submit").text("Создать");
        } else {
          createModal("message", "Выберите запись для вставки");
        }
      });
    }
  }, {
    key: "tabsModal",
    value: function tabsModal(items) {
      function showTable(item) {
        if (item.tab) {
          return "\n                <tr class=\"table__body__row modal-row\" id=\"".concat(item.id, "\" data-menu-title=\"").concat(item.name, "\">\n                    <td class=\"table__body__col\" data-id=\"id\">\n                        <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                    </td>\n                    <td class=\"table__body__col\" data-id=\"name\">").concat(item.name, "</td>\n                </tr>");
        }
      }

      var modalTable = $("#categoryModal .table-modal .table__body");
      modalTable.text("");
      items.forEach(function (item) {
        return modalTable.append(showTable(item));
      });
      var tableTab = $("#categoryModal .table__body__row");
      tableTab.click(function (e) {
        e.stopPropagation();
        $("#categoryModal .table__body__row").removeClass("_marked");
        $(this).addClass("_marked");
        activeCategory = $(this).attr("id");
      });
      this.select();
      this.showContent();
    }
  }, {
    key: "showContent",
    value: function showContent() {
      new Promise(function (resolve) {
        setTimeout(function () {
          resolve(1);
        }, 1000);
      }).then(function (value) {
        var tableTab = $("#".concat(TableDB.category.modalName, " .table__body .table__body__row"));
        var selectList = $("select[data-search-list='Category']");
        var count = 0;
        selectList.text("").append("<option class='tabsInput' value='0' disabled selected>Выберите категорию</option>").append("<option class='tabsInput' value='0' id='moreTabs'>Все категории</option>");
        tableTab.each(function (index, elem) {
          if (count < 4) {
            selectList.append("<option class='tabsInput' value=\"".concat($(elem).attr("id"), "\">").concat($(elem).attr("data-menu-title"), "</option>"));
            count++;
          }
        });
      });
    }
  }]);

  return CategoryModal;
}();

var ClientModal = /*#__PURE__*/function () {
  function ClientModal() {
    _classCallCheck(this, ClientModal);

    this.url = "/api/client.php";
    this.data;
    this.openModal();
  }

  _createClass(ClientModal, [{
    key: "openModal",
    value: function openModal() {
      $("select[data-search-list=\"Client\"]").change(function () {
        if ($(this).val() === "0") {
          createModal("clientModal", "Выбор клиента");
        } else {
          TableDB.equipment.equipmentClient($(this).val());
        }
      });
    }
  }, {
    key: "data",
    get: function get() {
      $.ajax({
        url: "".concat(this.url),
        method: 'get',
        dataType: 'json',
        async: false,
        success: function success(data) {
          ClientModal.tabsModal(data);
        }
      });
    }
  }], [{
    key: "select",
    value: function select() {
      $("#form-client-select-tab").click(function (e) {
        e.preventDefault();

        if (activeClient !== 0) {
          var isDownloadTab;
          var tabsInputList = $("select[data-search-list=\"Client\"] .tabsInput");
          tabsInputList.each(function (index, elem) {
            if ($(elem).val() === activeClient) isDownloadTab = $(elem);
          });

          if (!isDownloadTab) {
            tabsInputList[tabsInputList.length - 1].remove();
            var tab = $("#clientModal .table__body #".concat(activeClient));
            $("select[data-search-list=\"Client\"]").append("\n                        <option class='tabsInput' value=\"".concat(activeClient, "\" selected>").concat($(tab).attr("data-menu-title"), "</option>\n                    "));
          } else {
            $("select[data-search-list=\"Client\"] .tabsInput[value=".concat(activeClient, "]")).attr("selected", "selected");
          }

          var tabsModal = $("#clientModal");
          closeModal(tabsModal);
          $(".modal__title").text(TableDB.textAdd);
          $("#add-modal__submit").text("Создать");
          TableDB.equipment.equipmentClient(activeClient);
        } else {
          createModal("message", "Выберите запись для вставки");
        }
      });
    }
  }, {
    key: "tabsModal",
    value: function tabsModal(items) {
      function showTable(item) {
        return "\n                <tr class=\"table__body__row modal-row\" id=\"".concat(item.id, "\" data-menu-title=\"").concat(item.name, "\">\n                    <td class=\"table__body__col\" data-id=\"id\">\n                        <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                    </td>\n                    <td class=\"table__body__col\" data-id=\"name\">").concat(item.name, "</td>\n                </tr>");
      }

      var modalTable = $("#clientModal .table-modal .table__body");
      modalTable.text("");
      items.forEach(function (item) {
        return modalTable.append(showTable(item));
      });
      var tableTab = $("#clientModal .table__body__row");
      tableTab.click(function (e) {
        e.stopPropagation();
        $("#clientModal .table__body__row").removeClass("_marked");
        $(this).addClass("_marked");
        activeClient = $(this).attr("id");
      });
      this.select();
      this.showContent();
    }
  }, {
    key: "showContent",
    value: function showContent() {
      new Promise(function (resolve) {
        setTimeout(function () {
          resolve(1);
        }, 1000);
      }).then(function (value) {
        var tableTab = $("#clientModal .table__body .table__body__row");
        var selectList = $("select[data-search-list=\"Client\"]");
        var count = 0;
        selectList.text("").append("<option class='tabsInput' value='0' disabled selected>Выберите клиента</option>").append("<option class='tabsInput' value='0' id='moreTabs'>Все клиенты</option>");
        tableTab.each(function (index, elem) {
          if (count < 4) {
            selectList.append("<option class='tabsInput' value=\"".concat($(elem).attr("id"), "\">").concat($(elem).attr("data-menu-title"), "</option>"));
            count++;
          }
        });
      });
    }
  }]);

  return ClientModal;
}();

var StaffModal = /*#__PURE__*/function () {
  function StaffModal() {
    _classCallCheck(this, StaffModal);

    this.url = "/api/staff.php";
    this.data;
    this.openModal();
  }

  _createClass(StaffModal, [{
    key: "openModal",
    value: function openModal() {
      $("select[data-search-list='Staff']").change(function () {
        if ($(this).val() === "0") createModal("staffModal", "Выбор специалиста");
      });
    }
  }, {
    key: "data",
    get: function get() {
      $.ajax({
        url: "".concat(this.url),
        method: 'get',
        dataType: 'json',
        async: false,
        success: function success(data) {
          StaffModal.tabsModal(data);
        }
      });
    }
  }], [{
    key: "select",
    value: function select() {
      $("#form-staff-select-tab").click(function (e) {
        e.preventDefault();

        if (activeStaff !== 0) {
          var isDownloadTab;
          var tabsInputList = $("select[data-search-list='Staff'] .tabsInput");
          tabsInputList.each(function (index, elem) {
            if ($(elem).val() === activeStaff) isDownloadTab = $(elem);
          });

          if (!isDownloadTab) {
            tabsInputList[tabsInputList.length - 1].remove();
            var tab = $("#staffModal .table__body #".concat(activeStaff));
            $("select[data-search-list='Staff']").append("\n                        <option class='tabsInput' value=\"".concat(activeStaff, "\" selected>").concat($(tab).attr("data-menu-title"), "</option>\n                    "));
          } else {
            $("select[data-search-list='Staff'] .tabsInput[value=".concat(activeStaff, "]")).attr("selected", "selected");
          }

          var tabsModal = $("#staffModal");
          closeModal(tabsModal);
          $(".modal__title").text(TableDB.textAdd);
          $("#add-modal__submit").text("Создать");
        } else {
          createModal("message", "Выберите запись для вставки");
        }
      });
    }
  }, {
    key: "tabsModal",
    value: function tabsModal(items) {
      function showTable(item) {
        return "\n                <tr class=\"table__body__row modal-row\" id=\"".concat(item.id, "\" data-menu-title=\"").concat(item.fullName, "\">\n                    <td class=\"table__body__col\" data-id=\"id\">\n                        <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                    </td>\n                    <td class=\"table__body__col\" data-id=\"name\">").concat(item.fullName, "</td>\n                    <td class=\"table__body__col\" data-id=\"name\">").concat(item.JobTitleName, "</td>\n                </tr>");
      }

      var modalTable = $("#staffModal .table-modal .table__body");
      modalTable.text("");
      items.forEach(function (item) {
        return modalTable.append(showTable(item));
      });
      var tableTab = $("#staffModal .table__body__row");
      tableTab.click(function (e) {
        e.stopPropagation();
        $("#staffModal .table__body__row").removeClass("_marked");
        $(this).addClass("_marked");
        activeStaff = $(this).attr("id");
      });
      this.select();
      this.showContent();
    }
  }, {
    key: "showContent",
    value: function showContent() {
      new Promise(function (resolve) {
        setTimeout(function () {
          resolve(1);
        }, 1000);
      }).then(function (value) {
        var tableTab = $("#staffModal .table__body .table__body__row");
        var selectList = $("select[data-search-list='Staff']");
        var count = 0;
        selectList.text("").append("<option class='tabsInput' value='0' disabled selected>Выберите специалиста</option>").append("<option class='tabsInput' value='0' id='moreTabs'>Все специалисты</option>");
        tableTab.each(function (index, elem) {
          if (count < 4) {
            selectList.append("<option class='tabsInput' value=\"".concat($(elem).attr("id"), "\">").concat($(elem).attr("data-menu-title"), "</option>"));
            count++;
          }
        });
      });
    }
  }]);

  return StaffModal;
}();

var TypeRepairModal = /*#__PURE__*/function () {
  function TypeRepairModal() {
    _classCallCheck(this, TypeRepairModal);

    this.url = "/api/typeRepair.php";
    this.data;
    this.openModal();
  }

  _createClass(TypeRepairModal, [{
    key: "openModal",
    value: function openModal() {
      $("select[data-search-list='TypeRepair']").change(function () {
        if ($(this).val() === "0") createModal("typeRepairModal", "Выбор типа ремонта");else $("#price").val($("#typeRepair_id option[value=".concat($(this).val(), "]")).attr("data-price"));
      });
    }
  }, {
    key: "data",
    get: function get() {
      $.ajax({
        url: "".concat(this.url),
        method: 'get',
        dataType: 'json',
        async: false,
        success: function success(data) {
          TypeRepairModal.tabsModal(data);
        }
      });
    }
  }], [{
    key: "select",
    value: function select() {
      $("#form-typeRepair-select-tab").click(function (e) {
        e.preventDefault();

        if (activeTypeRepair !== 0) {
          var isDownloadTab;
          var tabsInputList = $("select[data-search-list='TypeRepair'] .tabsInput");
          tabsInputList.each(function (index, elem) {
            if ($(elem).val() === activeTypeRepair) isDownloadTab = $(elem);
          });

          if (!isDownloadTab) {
            tabsInputList[tabsInputList.length - 1].remove();
            var tab = $("#typeRepairModal .table__body #".concat(activeTypeRepair));
            $("select[data-search-list='TypeRepair']").append("\n                        <option class='tabsInput' value=\"".concat(activeTypeRepair, "\" selected>").concat($(tab).attr("data-menu-title"), "</option>\n                    "));
          } else {
            $("select[data-search-list='TypeRepair'] .tabsInput[value=".concat(activeTypeRepair, "]")).attr("selected", "selected");
          }

          var tabsModal = $("#typeRepairModal");
          closeModal(tabsModal);
          $("#price").val($("#typeRepairModal #".concat(activeTypeRepair)).attr("data-price"));
          $(".modal__title").text(TableDB.textAdd);
          $("#add-modal__submit").text("Создать");
        } else {
          createModal("message", "Выберите запись для вставки");
        }
      });
    }
  }, {
    key: "tabsModal",
    value: function tabsModal(items) {
      function showTable(item) {
        if (item.id) {
          return "\n                <tr class=\"table__body__row modal-row\" id=\"".concat(item.id, "\" data-menu-title=\"").concat(item.name, "\" data-price=\"").concat(item.price, "\">\n                    <td class=\"table__body__col\" data-id=\"id\">\n                        <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                    </td>\n                    <td class=\"table__body__col\" data-id=\"name\">").concat(item.name, "</td>\n                </tr>");
        }
      }

      var modalTable = $("#typeRepairModal .table-modal .table__body");
      modalTable.text("");
      items.forEach(function (item) {
        return modalTable.append(showTable(item));
      });
      var tableTab = $("#typeRepairModal .table__body__row");
      tableTab.click(function (e) {
        e.stopPropagation();
        $("#typeRepairModal .table__body__row").removeClass("_marked");
        $(this).addClass("_marked");
        activeTypeRepair = $(this).attr("id");
      });
      this.select();
      this.showContent();
    }
  }, {
    key: "showContent",
    value: function showContent() {
      new Promise(function (resolve) {
        setTimeout(function () {
          resolve(1);
        }, 1000);
      }).then(function (value) {
        var tableTab = $("#typeRepairModal .table__body .table__body__row");
        var selectList = $("select[data-search-list='TypeRepair']");
        var count = 0;
        selectList.text("").append("<option class='tabsInput' value='0' disabled selected>Выберите тип ремонта</option>").append("<option class='tabsInput' value='0' id='moreTabs'>Все типы ремонта</option>");
        tableTab.each(function (index, elem) {
          if (count < 4) {
            selectList.append("<option class='tabsInput' value=\"".concat($(elem).attr("id"), "\" data-price=\"").concat($(elem).attr("data-price"), "\">").concat($(elem).attr("data-menu-title"), "</option>"));
            count++;
          }
        });
      });
    }
  }]);

  return TypeRepairModal;
}();

var EquipmentModal = /*#__PURE__*/function () {
  function EquipmentModal() {
    _classCallCheck(this, EquipmentModal);

    this.url = "/api/equipment.php";
    this.data;
    this.openModal();
  }

  _createClass(EquipmentModal, [{
    key: "equipmentClient",
    value: function equipmentClient(clientId) {
      $.ajax({
        url: "".concat(this.url, "?client.id = ").concat(clientId),
        method: 'get',
        dataType: 'json',
        async: false,
        success: function success(data) {
          EquipmentModal.tabsModal(data);
        }
      });
    }
  }, {
    key: "openModal",
    value: function openModal() {
      $("select[data-search-list='Equipment']").change(function () {
        if ($(this).val() === "0") createModal("equipmentModal", "Выбор оборудования");
      });
    }
  }, {
    key: "data",
    get: function get() {
      $.ajax({
        url: "".concat(this.url),
        method: 'get',
        dataType: 'json',
        async: false,
        success: function success(data) {
          EquipmentModal.tabsModal(data);
        }
      });
    }
  }], [{
    key: "select",
    value: function select() {
      $("#form-equipment-select-tab").click(function (e) {
        e.preventDefault();

        if (activeEquipment !== 0) {
          var isDownloadTab;
          var tabsInputList = $("select[data-search-list='Equipment'] .tabsInput");
          tabsInputList.each(function (index, elem) {
            if ($(elem).val() === activeEquipment) isDownloadTab = $(elem);
          });

          if (!isDownloadTab) {
            tabsInputList[tabsInputList.length - 1].remove();
            var tab = $("#equipmentModal .table__body #".concat(activeEquipment));
            $("select[data-search-list='Equipment']").append("\n                        <option class='tabsInput' value=\"".concat(activeEquipment, "\" selected>").concat($(tab).attr("data-menu-title"), "</option>\n                    "));
          } else {
            $("select[data-search-list='Equipment'] .tabsInput[value=".concat(activeEquipment, "]")).attr("selected", "selected");
          }

          var tabsModal = $("#equipmentModal");
          closeModal(tabsModal);
          $(".modal__title").text(TableDB.textAdd);
          $("#add-modal__submit").text("Создать");
        } else {
          createModal("message", "Выберите запись для вставки");
        }
      });
    }
  }, {
    key: "tabsModal",
    value: function tabsModal(items) {
      function showTable(item) {
        if (item.id) {
          return "\n                <tr class=\"table__body__row modal-row\" id=\"".concat(item.id, "\" data-menu-title=\"").concat(item.name, "\">\n                    <td class=\"table__body__col\" data-id=\"id\">\n                        <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                    </td>\n                    <td class=\"table__body__col\" data-id=\"name\">").concat(item.name, "</td>\n                </tr>");
        }
      }

      var modalTable = $("#equipmentModal .table-modal .table__body");
      modalTable.text("");
      items.forEach(function (item) {
        return modalTable.append(showTable(item));
      });
      var tableTab = $("#equipmentModal .table__body__row");
      tableTab.click(function (e) {
        e.stopPropagation();
        $("#equipmentModal .table__body__row").removeClass("_marked");
        $(this).addClass("_marked");
        activeEquipment = $(this).attr("id");
      });
      this.select();
      this.showContent();
    }
  }, {
    key: "showContent",
    value: function showContent() {
      new Promise(function (resolve) {
        setTimeout(function () {
          resolve(1);
        }, 1000);
      }).then(function (value) {
        var tableTab = $("#equipmentModal .table__body .table__body__row");
        var selectList = $("select[data-search-list='Equipment']");
        var count = 0;
        selectList.text("").append("<option class='tabsInput' value='0' disabled selected>Выберите оборудование</option>").append("<option class='tabsInput' value='0' id='moreTabs'>Все оборудование</option>");
        tableTab.each(function (index, elem) {
          if (count < 4) {
            selectList.append("<option class='tabsInput' value=\"".concat($(elem).attr("id"), "\">").concat($(elem).attr("data-menu-title"), "</option>"));
            count++;
          }
        });
      });
    }
  }]);

  return EquipmentModal;
}(); // Form


var ClientForm = /*#__PURE__*/function (_Forms) {
  _inherits(ClientForm, _Forms);

  var _super11 = _createSuper(ClientForm);

  function ClientForm(url) {
    var _this11;

    _classCallCheck(this, ClientForm);

    _this11 = _super11.call(this);
    _this11.url = url;
    return _this11;
  }

  _createClass(ClientForm, [{
    key: "showTable",
    value: function showTable(items) {
      var table = $(".table-client .table__body");
      table.text("");
      items.forEach(function (item) {
        table.append("                    \n                    <tr class=\"table__body__row\" id=\"".concat(item.id, "\" data-equipment-list-id=\"").concat(item.equipmentList, "\">\n                        <td class=\"table__body__col\" data-id=\"id\">\n                            <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                        </td>\n                        <td class=\"table__body__col\" data-id=\"name\">").concat(item.name, "</td>\n                        <td class=\"table__body__col\" data-id=\"address\">").concat(item.address, "</td>\n                    </tr>"));
      });
    }
  }, {
    key: "formLabel",
    value: function formLabel() {
      return "<label for=\"name\" class=\"modal__label\">*\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438:\n                    <input type=\"text\" name=\"name\" id=\"name\" class=\"modal__line\">\n                </label>\n                <label for=\"address\" class=\"modal__label\">*\u0410\u0434\u0440\u0435\u0441 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438:\n                    <input type=\"text\" name=\"address\" id=\"address\" class=\"modal__line\">\n                </label>";
    }
  }, {
    key: "newRecordsForm",
    value: function newRecordsForm() {
      mainTable.append("\n        <div id=\"modal\" class=\"modal h-300\">\n            <p class=\"modal__title\" id=\"modal__title\" data-modal-title=\"patient\">\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438</p>    \n            <form action=\"\" method=\"post\" class=\"modal__form\" id=\"newForm\" data-form-type=\"add\">\n                    ".concat(this.formLabel(), "\n                    \n                    <div class=\"modal__body h-150\">\n                        <table class=\"table table-client-equipment-modal\">\n            \n                            <thead class=\"table__header bg-grey\">\n                                <tr class=\"table__header__row\">\n                                    <th class=\"table__header__col\">\u041A\u043E\u0434 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F</th>\n                                    <th class=\"table__header__col\">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F</th>\n                                    <th class=\"table__header__col\">\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430</th>\n                                    <th class=\"table__header__col\">\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C</th>\n                                    <th class=\"table__header__col\">\u041C\u043E\u0434\u0435\u043B\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F</th>\n                                    <th class=\"table__header__col\">\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F</th>\n                                </tr>\n                            </thead>\n            \n                            <tbody class=\"table__body\">\n                            </tbody>\n    \n                        </table>\n                </div>\n                    \n                <div class=\"modal__action\">\n                    <button type=\"reset\" class=\"modal__btn pd-5\" id=\"add-modal__reset\">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</button>\n                    <button type=\"submit\" class=\"modal__btn pd-5\" id=\"add-modal__submit\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>\n                </div>\n             </form>\n            <span id=\"modal__close\" class=\"modal__close\">\u2093</span>\n        </div>"));
    }
  }, {
    key: "createCopiedModal",
    value: function createCopiedModal(modal) {
      var activeTableRow = $("._marked");

      if (activeTableRow.length > 0) {
        createModal(modal, "Редактирование записи");
        TableDB.forms.setFormTypeEdit(newForm);
        var jobId = 0;
        $("._marked .table__body__col").each(function (item, element) {
          var attrId = $(element).attr("data-id");
          $("#".concat(modal, " #").concat(attrId)).val(element.innerHTML);
        });
        TableDB.equipments(activeRow);
      } else {
        createModal("message", "Выберите запись");
      }
    }
  }, {
    key: "uploadForms",
    value: function uploadForms() {
      this.newRecordsForm();
      this.reportsForm();
      this.errorForm();
      this.extendedSearchForm();
    }
  }, {
    key: "modalSubmit",
    value: function modalSubmit() {
      TableDB.forms.submitLogic(newForm);
    }
  }]);

  return ClientForm;
}(Forms);

var CountriesForm = /*#__PURE__*/function (_Forms2) {
  _inherits(CountriesForm, _Forms2);

  var _super12 = _createSuper(CountriesForm);

  function CountriesForm(url) {
    var _this12;

    _classCallCheck(this, CountriesForm);

    _this12 = _super12.call(this);
    _this12.url = url;
    return _this12;
  }

  _createClass(CountriesForm, [{
    key: "showTable",
    value: function showTable(items) {
      var table = $(".table__body");
      table.text("");
      items.forEach(function (item) {
        table.append("                    \n                    <tr class=\"table__body__row\" id=\"".concat(item.id, "\">\n                        <td class=\"table__body__col\" data-id=\"id\">\n                            <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                        </td>\n                        <td class=\"table__body__col\" data-id=\"name\">").concat(item.name, "</td>\n                    </tr>"));
      });
    }
  }, {
    key: "formLabel",
    value: function formLabel() {
      return "<label for=\"name\" class=\"modal__label modal__label-full\">*\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u044B:\n                    <input type=\"text\" name=\"name\" id=\"name\" pattern=\"^[\u0410-\u042F\u0430-\u044F\u0401\u0451\\s]+$\" class=\"modal__line\">\n                </label>";
    }
  }, {
    key: "newRecordsForm",
    value: function newRecordsForm() {
      mainTable.append("\n        <div id=\"modal\" class=\"modal h-200\">\n            <p class=\"modal__title\" id=\"modal__title\" data-modal-title=\"patient\">\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438</p>    \n            <form action=\"\" method=\"post\" class=\"modal__form\" id=\"newForm\" data-form-type=\"add\">\n                    ".concat(this.formLabel(), "\n                <div class=\"modal__action\">\n                    <button type=\"reset\" class=\"modal__btn pd-5\" id=\"add-modal__reset\">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</button>\n                    <button type=\"submit\" class=\"modal__btn pd-5\" id=\"add-modal__submit\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>\n                </div>\n             </form>\n            <span id=\"modal__close\" class=\"modal__close\">\u2093</span>\n        </div>"));
    }
  }, {
    key: "uploadForms",
    value: function uploadForms() {
      this.newRecordsForm();
      this.reportsForm();
      this.errorForm();
      this.extendedSearchForm();
    }
  }, {
    key: "modalSubmit",
    value: function modalSubmit() {
      TableDB.forms.submitLogic(newForm);
    }
  }]);

  return CountriesForm;
}(Forms);

var StaffForm = /*#__PURE__*/function (_Forms3) {
  _inherits(StaffForm, _Forms3);

  var _super13 = _createSuper(StaffForm);

  function StaffForm(url) {
    var _this13;

    _classCallCheck(this, StaffForm);

    _this13 = _super13.call(this);
    _this13.url = url;
    return _this13;
  }

  _createClass(StaffForm, [{
    key: "showTable",
    value: function showTable(items) {
      var table = $(".table-staff .table__body");
      table.text("");
      items.forEach(function (item) {
        table.append("                    \n                    <tr class=\"table__body__row\" id=\"".concat(item.id, "\">\n                        <td class=\"table__body__col\" data-id=\"id\">\n                            <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                        </td>\n                        <td class=\"table__body__col\" data-id=\"fullName\">").concat(item.fullName, "</td>\n                        <td class=\"table__body__col\" data-id=\"JobTitleId\" data-jobTitle-id=\"").concat(item.JobTitleId, "\">").concat(item.JobTitleName, "</td>\n                        <td class=\"table__body__col\" data-id=\"tel\">").concat(item.tel, "</td>\n                    </tr>"));
      });
    }
  }, {
    key: "formLabel",
    value: function formLabel() {
      return "<label for=\"fullName\" class=\"modal__label\">*\u0424\u0418\u041E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430:\n                    <input type=\"text\" name=\"fullName\" id=\"fullName\" class=\"modal__line\">\n                </label>\n                <label for=\"JobTitleId\" class=\"modal__label\">*\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C:\n                    <select name=\"JobTitleId\" id=\"JobTitleId\" data-search-list=\"JobTitle\" class=\"modal__line\"></select>\n                </label>\n                <label for=\"tel\" class=\"modal__label\">*\u0422\u0435\u043B\u0435\u0444\u043E\u043D:\n                    <input type=\"tel\" name=\"tel\" placeholder=\"79995552525\" id=\"tel\" minlength=\"11\" maxlength=\"11\" class=\"modal__line\">\n                </label>";
    }
  }, {
    key: "createCopiedModal",
    value: function createCopiedModal(modal) {
      var activeTableRow = $("._marked");

      if (activeTableRow.length > 0) {
        createModal(modal);
        TableDB.forms.setFormTypeEdit(newForm);
        $("._marked .table__body__col").each(function (item, element) {
          var attrId = $(element).attr("data-id");
          $("#".concat(modal, " #").concat(attrId)).val(element.innerHTML);
          $("#JobTitleId .tabsInput[value=\"".concat($(element).attr("data-jobtitle-id"), "\"]")).prop("selected", true);
        });
      } else {
        createModal("message", "Выберите запись");
      }
    }
  }, {
    key: "uploadForms",
    value: function uploadForms() {
      this.newRecordsForm();
      this.reportsForm();
      this.errorForm();
      this.extendedSearchForm();
    }
  }, {
    key: "modalSubmit",
    value: function modalSubmit() {
      TableDB.forms.submitLogic(newForm);
    }
  }]);

  return StaffForm;
}(Forms);

var JobForm = /*#__PURE__*/function (_Forms4) {
  _inherits(JobForm, _Forms4);

  var _super14 = _createSuper(JobForm);

  function JobForm(url) {
    var _this14;

    _classCallCheck(this, JobForm);

    _this14 = _super14.call(this);
    _this14.url = url;
    return _this14;
  }

  _createClass(JobForm, [{
    key: "showTable",
    value: function showTable(items) {
      var table = $(".table__body");
      table.text("");
      items.forEach(function (item) {
        table.append("                    \n                    <tr class=\"table__body__row\" id=\"".concat(item.id, "\">\n                        <td class=\"table__body__col\" data-id=\"id\">\n                            <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                        </td>\n                        <td class=\"table__body__col\" data-id=\"name\">").concat(item.name, "</td>\n                        <td class=\"table__body__col\" data-id=\"salary\">").concat(item.salary, "</td>\n                    </tr>"));
      });
    }
  }, {
    key: "formLabel",
    value: function formLabel() {
      return "<label for=\"name\" class=\"modal__label\">*\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438:\n                    <input type=\"text\" name=\"name\" id=\"name\" class=\"modal__line\">\n                </label>\n                <label for=\"salary\" class=\"modal__label\">*\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430:\n                    <input type=\"number\" name=\"salary\" id=\"salary\" class=\"modal__line\">\n                </label>";
    }
  }, {
    key: "newRecordsForm",
    value: function newRecordsForm() {
      mainTable.append("\n        <div id=\"modal\" class=\"modal h-200\">\n            <p class=\"modal__title\" id=\"modal__title\" data-modal-title=\"patient\">\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438</p>    \n            <form action=\"\" method=\"post\" class=\"modal__form\" id=\"newForm\" data-form-type=\"add\">\n                    ".concat(this.formLabel(), "\n                <div class=\"modal__action\">\n                    <button type=\"reset\" class=\"modal__btn pd-5\" id=\"add-modal__reset\">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</button>\n                    <button type=\"submit\" class=\"modal__btn pd-5\" id=\"add-modal__submit\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>\n                </div>\n             </form>\n            <span id=\"modal__close\" class=\"modal__close\">\u2093</span>\n        </div>"));
    }
  }, {
    key: "uploadForms",
    value: function uploadForms() {
      this.newRecordsForm();
      this.reportsForm();
      this.errorForm();
      this.extendedSearchForm();
    }
    /*    submitLogic(group = null)
        {
            newForm.submit(function (event) {
                event.preventDefault()
    
                let submit = true
    
                $(this).find("input").each( (item, elem) => {
                    removeError($(elem))
                    if ($(elem).val() === "")
                    {
                        showError("Поле не может быть пустым", $(elem))
                        submit = false
                    }
                })
    
                if (submit) {
                    let formData = TableDB.forms.getFormData($(this))
    
                    let formType = $(this).attr("data-form-type")
    
                    if (formType === "add")
                    {
                        TableDB.new(formData)
                    }
                    else if (formType === "edit")
                    {
                        let formObject = {}
    
                        for(let pair of formData.entries())
                        {
                            if (pair[1].trim() !== "")
                                formObject[pair[0]] = pair[1]
                        }
    
                        formObject["id"] = activeRow
    
                        TableDB.edit(formObject)
                    }
    
                    showTable()
                }
    
            })
        }*/

  }, {
    key: "modalSubmit",
    value: function modalSubmit() {
      TableDB.forms.submitLogic(newForm);
    }
  }]);

  return JobForm;
}(Forms);

var TypeRepairForm = /*#__PURE__*/function (_Forms5) {
  _inherits(TypeRepairForm, _Forms5);

  var _super15 = _createSuper(TypeRepairForm);

  function TypeRepairForm(url) {
    var _this15;

    _classCallCheck(this, TypeRepairForm);

    _this15 = _super15.call(this);
    _this15.url = url;
    return _this15;
  }

  _createClass(TypeRepairForm, [{
    key: "showTable",
    value: function showTable(items) {
      function getPdSize(relative) {
        return relative === undefined || relative === "0" ? "" : "pd-size";
      }

      function rows(item) {
        if (item.id === null) return "";
        return "<tr class=\"table__body__row\" id=\"".concat(item.id, "\" data-service-list-id=\"").concat(item.tab, "\">\n                        <td class=\"table__body__col\" data-id=\"id\">\n                            <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                           </td>\n                        <td class=\"table__body__col\" data-id=\"name\">").concat(item.name, "</td>\n                        <td class=\"table__body__col\" data-id=\"price\">").concat(item.price, "</td>\n                    </tr>");
      }

      function downTable(item) {
        var pdSize = "";
        if (item.pid !== "0") pdSize = getPdSize(item.pid);
        return "<tr class=\"table__body__tab\" id=\"tab-".concat(item.tabsId, "\">\n                    <td colspan=\"3\">\n                        <table class=\"table _services ").concat(pdSize, "\" data-table-down-id=\"").concat(item.tabsId, "\" data-table-relative=\"").concat(item.pid, "\">\n\n                            <thead class=\"table__header table__tab\" data-menu-title=\"").concat(item.title, "\" data-menu-id=\"").concat(item.tabsId, "\">\n                                <tr class=\"table__header__row\" id=\"table-").concat(item.tabsId, "\">\n                                    <th class=\"table__header__col col-tab menu-icon menu-icon-top\" colspan=\"3\">\n                                        <img class=\"img-icon-td\" src=\"img/icon/folder-label.png\" alt=\"\">").concat(item.title, "\n                                    </th>\n                                </tr>\n                            </thead>\n\n                            <tbody class=\"table__body table__menu\" id=\"menu-id-").concat(item.tabsId, "\"></tbody>\n                        </table>\n                    </td>");
      }

      var table = $(".table-typeRepair .table__body");
      table.text("");
      items.forEach(function (item) {
        if (item.tab !== "0") {
          var tab = $("#tab-".concat(item.tab));

          if (tab.length) {
            $(rows(item)).prependTo($("#menu-id-".concat(item.tab)));
          } else {
            if (item.pid === "0") table.append(downTable(item));else $(downTable(item)).prependTo($("#menu-id-".concat(item.pid)));
          }
        } else {
          table.append(rows(item));
        }
      });
      TableDB.group.showGroup();
    }
  }, {
    key: "formLabel",
    value: function formLabel() {
      return "<label for=\"name\" class=\"modal__label\">*\u0412\u0438\u0434 \u0440\u0435\u043C\u043E\u043D\u0442\u0430:\n                    <input type=\"text\" name=\"name\" id=\"name\" class=\"modal__line\">\n                </label>\n                <label for=\"price\" class=\"modal__label\">*\u0426\u0435\u043D\u0430:\n                    <input type=\"number\" name=\"price\" id=\"price\" class=\"modal__line\">\n                </label>\n                <label for=\"listGroup\" class=\"modal__label\">*\u0413\u0440\u0443\u043F\u043F\u0430:\n                    <select name=\"listGroup\" id=\"listGroup\" class=\"modal__line\">\n                    </select>\n                </label>";
    }
  }, {
    key: "uploadForms",
    value: function uploadForms() {
      this.newRecordsForm();
      this.reportsForm();
      this.errorForm();
      this.extendedSearchForm();
    }
  }, {
    key: "modalSubmit",
    value: function modalSubmit() {
      TableDB.forms.submitLogic(newForm);
      TableDB.forms.submitLogic(newGroup);
    }
  }]);

  return TypeRepairForm;
}(Forms);

var CategoryForm = /*#__PURE__*/function (_Forms6) {
  _inherits(CategoryForm, _Forms6);

  var _super16 = _createSuper(CategoryForm);

  function CategoryForm(url) {
    var _this16;

    _classCallCheck(this, CategoryForm);

    _this16 = _super16.call(this);
    _this16.url = url;
    return _this16;
  }

  _createClass(CategoryForm, [{
    key: "showTable",
    value: function showTable(items) {
      function getPdSize(relative) {
        return relative === undefined || relative === "0" ? "" : "pd-size";
      }

      function rows(item) {
        if (item.id === null) return "";
        return "<tr class=\"table__body__row\" id=\"".concat(item.id, "\" data-service-list-id=\"").concat(item.tab, "\">\n                        <td class=\"table__body__col\" data-id=\"id\">\n                            <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                           </td>\n                        <td class=\"table__body__col\" data-id=\"name\">").concat(item.name, "</td>\n                    </tr>");
      }

      function downTable(item) {
        var pdSize = "";
        if (item.pid !== "0") pdSize = getPdSize(item.pid);
        return "<tr class=\"table__body__tab\" id=\"tab-".concat(item.tabsId, "\">\n                    <td colspan=\"2\">\n                        <table class=\"table _services ").concat(pdSize, "\" data-table-down-id=\"").concat(item.tabsId, "\" data-table-relative=\"").concat(item.pid, "\">\n\n                            <thead class=\"table__header table__tab\" data-menu-title=\"").concat(item.title, "\" data-menu-id=\"").concat(item.tabsId, "\">\n                                <tr class=\"table__header__row\" id=\"table-").concat(item.tabsId, "\">\n                                    <th class=\"table__header__col col-tab menu-icon menu-icon-top\" colspan=\"2\">\n                                        <img class=\"img-icon-td\" src=\"img/icon/folder-label.png\" alt=\"\">").concat(item.title, "\n                                    </th>\n                                </tr>\n                            </thead>\n\n                            <tbody class=\"table__body table__menu\" id=\"menu-id-").concat(item.tabsId, "\"></tbody>\n                        </table>\n                    </td>");
      }

      var table = $(".table-category .table__body");
      table.text("");
      items.forEach(function (item) {
        if (item.tab !== "0") {
          var tab = $("#tab-".concat(item.tab));

          if (tab.length) {
            $(rows(item)).prependTo($("#menu-id-".concat(item.tab)));
          } else {
            if (item.pid === "0") table.append(downTable(item));else $(downTable(item)).prependTo($("#menu-id-".concat(item.pid)));
          }
        } else {
          table.append(rows(item));
        }
      });
      TableDB.group.showGroup();
    }
  }, {
    key: "formLabel",
    value: function formLabel() {
      return "<label for=\"name\" class=\"modal__label\">*\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:\n                    <input type=\"text\" name=\"name\" id=\"name\" class=\"modal__line\">\n                </label>\n                <label for=\"listGroup\" class=\"modal__label\">*\u0413\u0440\u0443\u043F\u043F\u0430:\n                    <select name=\"listGroup\" id=\"listGroup\" class=\"modal__line\">\n                    </select>\n                </label>";
    }
  }, {
    key: "newRecordsForm",
    value: function newRecordsForm() {
      mainTable.append("\n        <div id=\"modal\" class=\"modal h-200\">\n            <p class=\"modal__title\" id=\"modal__title\" data-modal-title=\"patient\">\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F</p>    \n            <form action=\"\" method=\"post\" class=\"modal__form table-service\" id=\"newForm\" data-form-type=\"add\">\n                ".concat(this.formLabel(), "\n                <div class=\"modal__action\">\n                    <button type=\"reset\" class=\"modal__btn pd-5\" id=\"add-doctor-modal__reset\">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</button>\n                    <button type=\"submit\" class=\"modal__btn pd-5\" id=\"add-modal__submit\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>\n                </div>\n             </form>\n            <span id=\"modal__close\" class=\"modal__close\">\u2093</span>\n        </div>"));
    }
  }, {
    key: "uploadForms",
    value: function uploadForms() {
      this.newRecordsForm();
      this.reportsForm();
      this.errorForm();
      this.extendedSearchForm();
    }
  }, {
    key: "modalSubmit",
    value: function modalSubmit() {
      TableDB.forms.submitLogic(newForm);
      TableDB.forms.submitLogic(newGroup);
    }
  }]);

  return CategoryForm;
}(Forms);

var EquipmentForm = /*#__PURE__*/function (_Forms7) {
  _inherits(EquipmentForm, _Forms7);

  var _super17 = _createSuper(EquipmentForm);

  function EquipmentForm(url) {
    var _this17;

    _classCallCheck(this, EquipmentForm);

    _this17 = _super17.call(this);
    _this17.url = url;
    return _this17;
  }

  _createClass(EquipmentForm, [{
    key: "showTable",
    value: function showTable(items) {
      var table = $(".table-equipment .table__body");
      table.text("");
      items.forEach(function (item) {
        table.append("                    \n                    <tr class=\"table__body__row\" id=\"".concat(item.id, "\">\n                        <td class=\"table__body__col\" data-id=\"id\">\n                            <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                           </td>\n                        <td class=\"table__body__col\" data-id=\"name\">").concat(item.name, "</td>\n                        <td class=\"table__body__col\" data-id=\"brand\" data-brand-id=\"").concat(item.brand, "\">").concat(item.brandName, "</td>\n                        <td class=\"table__body__col\" data-id=\"country\" data-country-id=\"").concat(item.country, "\">").concat(item.countryName, "</td>\n                        <td class=\"table__body__col\" data-id=\"year\">").concat(item.year, "</td>\n                        <td class=\"table__body__col\" data-id=\"category\" data-category-id=\"").concat(item.category, "\">").concat(item.categoryName, "</td>\n                        <td class=\"table__body__col\" data-id=\"organization\" data-organization-id=\"").concat(item.organization, "\">").concat(item.organizationName, "</td>\n                    </tr>"));
      });
    }
  }, {
    key: "createCopiedModal",
    value: function createCopiedModal(modal) {
      var activeTableRow = $("._marked");

      if (activeTableRow.length > 0) {
        createModal(modal);
        TableDB.forms.setFormTypeEdit(newForm);
        $("._marked .table__body__col").each(function (item, element) {
          var attrId = $(element).attr("data-id");
          $("#".concat(modal, " #").concat(attrId)).val(element.innerHTML);
          $("#JobTitleId .tabsInput[value=\"".concat($(element).attr("data-jobtitle-id"), "\"]")).prop("selected", true);
          $("#brand .tabsInput[value=\"".concat($(element).attr("data-brand-id"), "\"]")).prop("selected", true);
          $("#country .tabsInput[value=\"".concat($(element).attr("data-country-id"), "\"]")).prop("selected", true);
          $("#category .tabsInput[value=\"".concat($(element).attr("data-category-id"), "\"]")).prop("selected", true);
          $("#organization .tabsInput[value=\"".concat($(element).attr("data-organization-id"), "\"]")).prop("selected", true);
        });
      } else {
        createModal("message", "Выберите запись");
      }
    }
  }, {
    key: "formLabel",
    value: function formLabel() {
      return "<label for=\"name\" class=\"modal__label\">*\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F:\n                    <input type=\"text\" name=\"name\" id=\"name\" class=\"modal__line\">\n                </label>\n                <label for=\"brand\" class=\"modal__label\">*\u041C\u043E\u0434\u0435\u043B\u044C:\n                    <select name=\"brand\" id=\"brand\" data-search-list=\"Brand\" class=\"modal__line\">\n                    </select>\n                </label>\n                <label for=\"country\" class=\"modal__label\">*\u0421\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C:\n                    <select name=\"country\" id=\"country\" data-search-list=\"Country\" class=\"modal__line\">\n                    </select>\n                </label>\n                <label for=\"year\" class=\"modal__label\">*\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430:\n                    <input type=\"datetime-local\" name=\"year\" id=\"year\" class=\"modal__line\">\n                </label>\n                <label for=\"category\" class=\"modal__label\">*\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F:\n                    <select name=\"category\" id=\"category\" data-search-list=\"Category\" class=\"modal__line\">\n                    </select>\n                </label>\n                <label for=\"organization\" class=\"modal__label\">*\u041A\u043B\u0438\u0435\u043D\u0442:\n                    <select name=\"organization\" id=\"organization\" data-search-list=\"Client\" class=\"modal__line\">\n                    </select>\n                </label>";
    }
  }, {
    key: "uploadForms",
    value: function uploadForms() {
      this.newRecordsForm();
      this.reportsForm();
      this.errorForm();
      this.extendedSearchForm();
    }
  }, {
    key: "modalSubmit",
    value: function modalSubmit() {
      TableDB.forms.submitLogic(newForm);
    }
  }]);

  return EquipmentForm;
}(Forms);

var BrandForm = /*#__PURE__*/function (_Forms8) {
  _inherits(BrandForm, _Forms8);

  var _super18 = _createSuper(BrandForm);

  function BrandForm(url) {
    var _this18;

    _classCallCheck(this, BrandForm);

    _this18 = _super18.call(this);
    _this18.url = url;
    return _this18;
  }

  _createClass(BrandForm, [{
    key: "showTable",
    value: function showTable(items) {
      var table = $(".table__body");
      table.text("");
      items.forEach(function (item) {
        table.append("                    \n                    <tr class=\"table__body__row\" id=\"".concat(item.id, "\">\n                        <td class=\"table__body__col\" data-id=\"id\">\n                            <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                        </td>\n                        <td class=\"table__body__col\" data-id=\"name\">").concat(item.name, "</td>\n                    </tr>"));
      });
    }
  }, {
    key: "formLabel",
    value: function formLabel() {
      return "<label for=\"name\" class=\"modal__label modal__label-full\">*\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u043E\u0434\u0435\u043B\u0438:\n                    <input type=\"text\" name=\"name\" id=\"name\" class=\"modal__line\">\n                </label>";
    }
  }, {
    key: "newRecordsForm",
    value: function newRecordsForm() {
      mainTable.append("\n        <div id=\"modal\" class=\"modal h-200\">\n            <p class=\"modal__title\" id=\"modal__title\" data-modal-title=\"patient\">\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043C\u043E\u0434\u0435\u043B\u0438</p>    \n            <form action=\"\" method=\"post\" class=\"modal__form\" id=\"newForm\" data-form-type=\"add\">\n                    ".concat(this.formLabel(), "\n                <div class=\"modal__action\">\n                    <button type=\"reset\" class=\"modal__btn pd-5\" id=\"add-modal__reset\">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</button>\n                    <button type=\"submit\" class=\"modal__btn pd-5\" id=\"add-modal__submit\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>\n                </div>\n             </form>\n            <span id=\"modal__close\" class=\"modal__close\">\u2093</span>\n        </div>"));
    }
  }, {
    key: "uploadForms",
    value: function uploadForms() {
      this.newRecordsForm();
      this.reportsForm();
      this.errorForm();
      this.extendedSearchForm();
    }
  }, {
    key: "modalSubmit",
    value: function modalSubmit() {
      TableDB.forms.submitLogic(newForm);
    }
  }]);

  return BrandForm;
}(Forms);

var RepairsForm = /*#__PURE__*/function (_Forms9) {
  _inherits(RepairsForm, _Forms9);

  var _super19 = _createSuper(RepairsForm);

  function RepairsForm(url) {
    var _this19;

    _classCallCheck(this, RepairsForm);

    _this19 = _super19.call(this);
    _this19.url = url;
    return _this19;
  }

  _createClass(RepairsForm, [{
    key: "showTable",
    value: function showTable(items) {
      var table = $(".table-repairs .table__body");
      table.text("");
      items.forEach(function (item) {
        if (item.date_end === null) item.date_end = "Не указано";
        table.append("                    \n                    <tr class=\"table__body__row\" id=\"".concat(item.id, "\">\n                        <td class=\"table__body__col\" data-id=\"id\">\n                            <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                           </td>\n                        <td class=\"table__body__col\" data-id=\"date_start\">").concat(item.date_start, "</td>\n                        <td class=\"table__body__col\" data-id=\"client\" data-client-id=\"").concat(item.client_id, "\">").concat(item.client_name, "</td>\n                        <td class=\"table__body__col\" data-id=\"equipment_id\" data-equipment-id=\"").concat(item.equipment_id, "\">").concat(item.equipment_name, "</td>\n                        <td class=\"table__body__col\" data-id=\"typeRepair\" data-typeRepair-id=\"").concat(item.typeRepair_id, "\">").concat(item.typeRepair_name, "</td>\n                        <td class=\"table__body__col\" data-id=\"organization\" data-staff-id=\"").concat(item.staff_id, "\">").concat(item.staff_name, "</td>\n                        <td class=\"table__body__col\" data-id=\"date_end\">").concat(item.date_end, "</td>\n                        <td class=\"table__body__col\" data-id=\"price\">").concat(item.price, "</td>\n                    </tr>"));
      });
    }
  }, {
    key: "createCopiedModal",
    value: function createCopiedModal(modal) {
      var activeTableRow = $("._marked");

      if (activeTableRow.length > 0) {
        createModal(modal);
        TableDB.forms.setFormTypeEdit(newForm);
        $("._marked .table__body__col").each(function (item, element) {
          var attrId = $(element).attr("data-id");
          $("#".concat(modal, " #").concat(attrId)).val(element.innerHTML);
          $("#client_id .tabsInput[value=\"".concat($(element).attr("data-client-id"), "\"]")).prop("selected", true);
          $("#staff_id .tabsInput[value=\"".concat($(element).attr("data-staff-id"), "\"]")).prop("selected", true);
          $("#typeRepair_id .tabsInput[value=\"".concat($(element).attr("data-typeRepair-id"), "\"]")).prop("selected", true);
          $("#equipment_id .tabsInput[value=\"".concat($(element).attr("data-equipment-id"), "\"]")).prop("selected", true);
        });
      } else {
        createModal("message", "Выберите запись");
      }
    }
  }, {
    key: "formLabel",
    value: function formLabel() {
      return "<label for=\"date_start\" class=\"modal__label\">*\u041D\u0430\u0447\u0430\u043B\u043E \u0440\u0435\u043C\u043E\u043D\u0442\u0430:\n                    <input type=\"datetime-local\" name=\"date_start\" id=\"date_start\" class=\"modal__line\">\n                </label>\n                <label for=\"client_id\" class=\"modal__label\">*\u041A\u043B\u0438\u0435\u043D\u0442:\n                    <select name=\"client_id\" id=\"client_id\" data-search-list=\"Client\" class=\"modal__line\">\n                    </select>\n                </label>\n                <label for=\"equipment_id\" class=\"modal__label\">*\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435:\n                    <select name=\"equipment_id\" id=\"equipment_id\" data-search-list=\"Equipment\" class=\"modal__line\">\n                    </select>\n                </label>\n                <label for=\"typeRepair_id\" class=\"modal__label\">*\u0412\u0438\u0434 \u0440\u0435\u043C\u043E\u043D\u0442\u0430:\n                    <select name=\"typeRepair_id\" id=\"typeRepair_id\" data-search-list=\"TypeRepair\" class=\"modal__line\">\n                    </select>\n                </label>\n                <label for=\"price\" class=\"modal__label\">*\u0426\u0435\u043D\u0430:\n                    <input type=\"number\" name=\"price\" id=\"price\" readonly class=\"modal__line\">\n                </label>\n                <label for=\"staff_id\" class=\"modal__label\">*\u041C\u0430\u0441\u0442\u0435\u0440:\n                    <select name=\"staff_id\" id=\"staff_id\" data-search-list=\"Staff\" class=\"modal__line\">\n                    </select>\n                </label>\n                <label for=\"date_end\" class=\"modal__label\">*\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0440\u0435\u043C\u043E\u043D\u0442\u0430:\n                    <input type=\"datetime-local\" name=\"date_end\" id=\"date_end\" class=\"modal__line\">\n                </label>";
    }
  }, {
    key: "checkData",
    value: function checkData() {
      var formData = TableDB.forms.getFormData($(newForm));
      $(this).find("input").each(function (item, elem) {
        removeError($(elem));

        if ($(elem).val() === "" && $(elem).id !== "date_end") {
          showError("Поле не может быть пустым", $(elem));
          return 0;
        }
      });

      if (formData.get("date_start") >= formData.get("date_end") && formData.get("date_end")) {
        createModal("message", "Неверная дата");
        return 0;
      }

      return 1;
    }
  }, {
    key: "shipmentForm",
    value: function shipmentForm() {
      mainTable.append("\n            <div id=\"newShipmentForm\" class=\"modal h-200\">\n                <form action=\"\" method=\"post\" class=\"modal__form\" id=\"newShipment\">\n                <label for=\"address\" class=\"modal__label modal__label-full\">*\u0410\u0434\u0440\u0435\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438:\n                    <input type=\"text\" name=\"address\" id=\"address\" class=\"modal__line\">\n                </label>\n                <div class=\"modal__action\">\n                    <button type=\"reset\" class=\"modal__btn pd-5\" id=\"add-doctor-modal__reset\">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</button>\n                    <button type=\"submit\" class=\"modal__btn pd-5\" id=\"add-modal__submit\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>\n                </div>\n            </form>\n            <span id=\"modal__close\" class=\"modal__close\">\u2093</span>\n        </div>\n        ");
      this.shipmentData();
    }
  }, {
    key: "shipmentData",
    value: function shipmentData() {
      $("#newShipment").submit(function (event) {
        event.preventDefault();
        var formData = TableDB.forms.getFormData($(this));
        formData.append("id", activeRow);
        TableDB.newShipment(formData);
        closeModal($("#newShipmentForm"));
      });
    }
  }, {
    key: "uploadForms",
    value: function uploadForms() {
      this.newRecordsForm();
      this.reportsForm();
      this.errorForm();
      this.extendedSearchForm();
      this.shipmentForm();
    }
  }, {
    key: "modalSubmit",
    value: function modalSubmit() {
      TableDB.forms.submitLogic(newForm);
    }
  }]);

  return RepairsForm;
}(Forms);

var ShipmentForm = /*#__PURE__*/function (_Forms10) {
  _inherits(ShipmentForm, _Forms10);

  var _super20 = _createSuper(ShipmentForm);

  function ShipmentForm(url) {
    var _this20;

    _classCallCheck(this, ShipmentForm);

    _this20 = _super20.call(this);
    _this20.url = url;
    return _this20;
  }

  _createClass(ShipmentForm, [{
    key: "showTable",
    value: function showTable(items) {
      var table = $(".table-shipment .table__body");
      table.text("");
      items.forEach(function (item) {
        table.append("                    \n                    <tr class=\"table__body__row\" id=\"".concat(item.id, "\">\n                        <td class=\"table__body__col\" data-id=\"id\">\n                            <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                        </td>\n                        <td class=\"table__body__col\" data-id=\"client\" data-client-id=\"").concat(item.client_id, "\">").concat(item.client_name, "</td>\n                        <td class=\"table__body__col\" data-id=\"equipment\" data-equipment-id=\"").concat(item.equipment_id, "\">").concat(item.equipment_name, "</td>\n                        <td class=\"table__body__col\" data-id=\"category\" data-category-id=\"").concat(item.idCategory, "\">").concat(item.category_name, "</td>\n                        <td class=\"table__body__col\" data-id=\"typeRepair\" data-typeRepair-id=\"").concat(item.typeRepair_id, "\">").concat(item.typeRepair_name, "</td>\n                        <td class=\"table__body__col\" data-id=\"date_end\">").concat(item.date_end, "</td>\n                        <td class=\"table__body__col\" data-id=\"address\">").concat(item.address, "</td>\n                    </tr>"));
      });
    }
  }, {
    key: "createCopiedModal",
    value: function createCopiedModal(modal) {}
  }, {
    key: "formLabel",
    value: function formLabel() {
      return "<label for=\"idClient\" class=\"modal__label\">*\u041A\u043B\u0438\u0435\u043D\u0442:\n                    <select name=\"idClient\" id=\"idClient\" data-search-list=\"Client\" class=\"modal__line\">\n                    </select>\n                </label>\n                <label for=\"idEquipment\" class=\"modal__label\">*\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435:\n                    <select name=\"idEquipment\" id=\"idEquipment\" data-search-list=\"Equipment\" class=\"modal__line\">\n                    </select>\n                </label>\n                <label for=\"idCategory\" class=\"modal__label\">*\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F:\n                    <select name=\"idCategory\" id=\"idCategory\" data-search-list=\"Category\" class=\"modal__line\">\n                    </select>\n                </label>\n                <label for=\"idTypeRepair\" class=\"modal__label\">*\u0412\u0438\u0434 \u0440\u0435\u043C\u043E\u043D\u0442\u0430:\n                    <select name=\"idTypeRepair\" id=\"idTypeRepair\" data-search-list=\"TypeRepair\" class=\"modal__line\">\n                    </select>\n                </label>\n                <label for=\"date\" class=\"modal__label\">*\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F:\n                    <input type=\"datetime-local\" name=\"shipment.date\" id=\"date\" class=\"modal__line\">\n                </label>\n                <label for=\"address\" class=\"modal__label\">*\u0410\u0434\u0440\u0435\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438:\n                    <input type=\"text\" name=\"shipment.address\" id=\"address\" class=\"modal__line\">                \n                </label>";
    }
  }, {
    key: "newRecordsForm",
    value: function newRecordsForm() {}
  }, {
    key: "uploadForms",
    value: function uploadForms() {
      this.newRecordsForm();
      this.reportsForm();
      this.errorForm();
      this.extendedSearchForm();
    }
  }, {
    key: "modalSubmit",
    value: function modalSubmit() {
      TableDB.forms.submitLogic(newForm);
    }
  }]);

  return ShipmentForm;
}(Forms); // Classes


var Client = /*#__PURE__*/function (_Essence) {
  _inherits(Client, _Essence);

  var _super21 = _createSuper(Client);

  function Client(textAdd, textEdit, title, url) {
    var _this21;

    _classCallCheck(this, Client);

    _this21 = _super21.call(this, textAdd, textEdit, title, url);
    _this21.reports = new ClientReports("/api/clientReports.php");
    _this21.forms = new ClientForm(url);
    new ContextMenu();
    return _this21;
  }

  _createClass(Client, [{
    key: "equipments",
    value: function equipments(id) {
      console.log(id);
      $.ajax({
        url: "".concat(this.url, "?clientId=").concat(id),
        method: 'get',
        dataType: 'json',
        success: function success(items) {
          var modalRowBody = $(".table-client-equipment-modal .table__body");
          modalRowBody.text("");
          items.forEach(function (item) {
            modalRowBody.append("\n                    <tr class=\"table__body__row modal-row\" data-id=\"".concat(item.id, "\">\n                        <td class=\"table__body__col\" data-id=\"id\">\n                            <img class=\"img-icon-td\" src=\"img/icon/document.png\" alt=\"\">").concat(item.id, "\n                        </td>\n                        <td class=\"table__body__col\" data-id=\"name\">").concat(item.name, "</td>\n                        <td class=\"table__body__col\" data-id=\"year\">").concat(item.year, "</td>\n                        <td class=\"table__body__col\" data-id=\"countryName\">").concat(item.countryName, "</td>\n                        <td class=\"table__body__col\" data-id=\"categoryName\">").concat(item.categoryName, "</td>\n                        <td class=\"table__body__col\" data-id=\"brandName\">").concat(item.brandName, "</td>\n                    </tr>"));
          });
        }
      });
    }
  }]);

  return Client;
}(Essence);

var Countries = /*#__PURE__*/function (_Essence2) {
  _inherits(Countries, _Essence2);

  var _super22 = _createSuper(Countries);

  function Countries(textAdd, textEdit, title, url) {
    var _this22;

    _classCallCheck(this, Countries);

    _this22 = _super22.call(this, textAdd, textEdit, title, url);
    _this22.reports = new CountriesReports("/api/countriesReports.php");
    _this22.forms = new CountriesForm(url);
    new ContextMenu();
    return _this22;
  }

  return Countries;
}(Essence);

var Staff = /*#__PURE__*/function (_Essence3) {
  _inherits(Staff, _Essence3);

  var _super23 = _createSuper(Staff);

  function Staff(textAdd, textEdit, title, url) {
    var _this23;

    _classCallCheck(this, Staff);

    _this23 = _super23.call(this, textAdd, textEdit, title, url);
    _this23.reports = new StaffReports("/api/staffReports.php");
    _this23.forms = new StaffForm(url);
    _this23.job = new JobTitleModal();
    new ContextMenu();
    return _this23;
  }

  return Staff;
}(Essence);

var Job = /*#__PURE__*/function (_Essence4) {
  _inherits(Job, _Essence4);

  var _super24 = _createSuper(Job);

  function Job(textAdd, textEdit, title, url) {
    var _this24;

    _classCallCheck(this, Job);

    _this24 = _super24.call(this, textAdd, textEdit, title, url);
    _this24.reports = new JobReports("/api/jobReports.php");
    _this24.forms = new JobForm(url);
    new ContextMenu();
    return _this24;
  }

  return Job;
}(Essence);

var TypeRepair = /*#__PURE__*/function (_Essence5) {
  _inherits(TypeRepair, _Essence5);

  var _super25 = _createSuper(TypeRepair);

  function TypeRepair(textAdd, textEdit, title, url) {
    var _this25;

    _classCallCheck(this, TypeRepair);

    _this25 = _super25.call(this, textAdd, textEdit, title, url);
    _this25.reports = new TypeRepairReports("/api/typeRepairReports.php");
    _this25.forms = new TypeRepairForm(url);
    _this25.group = new Group(url);
    new ContextMenu();
    return _this25;
  }

  return TypeRepair;
}(Essence);

var Category = /*#__PURE__*/function (_Essence6) {
  _inherits(Category, _Essence6);

  var _super26 = _createSuper(Category);

  function Category(textAdd, textEdit, title, url) {
    var _this26;

    _classCallCheck(this, Category);

    _this26 = _super26.call(this, textAdd, textEdit, title, url);
    _this26.reports = new CategoryReports("/api/categoryReports.php");
    _this26.forms = new CategoryForm(url);
    _this26.group = new Group(url);
    new ContextMenu();
    return _this26;
  }

  return Category;
}(Essence);

var Equipment = /*#__PURE__*/function (_Essence7) {
  _inherits(Equipment, _Essence7);

  var _super27 = _createSuper(Equipment);

  function Equipment(textAdd, textEdit, title, url) {
    var _this27;

    _classCallCheck(this, Equipment);

    _this27 = _super27.call(this, textAdd, textEdit, title, url);
    _this27.reports = new EquipmentReports("/api/equipmentReports.php");
    _this27.forms = new EquipmentForm(url);
    _this27.brand = new BrandModal();
    _this27.country = new CountryModal();
    _this27.category = new CategoryModal();
    _this27.client = new ClientModal();
    new ContextMenu();
    return _this27;
  }

  return Equipment;
}(Essence);

var Brand = /*#__PURE__*/function (_Essence8) {
  _inherits(Brand, _Essence8);

  var _super28 = _createSuper(Brand);

  function Brand(textAdd, textEdit, title, url) {
    var _this28;

    _classCallCheck(this, Brand);

    _this28 = _super28.call(this, textAdd, textEdit, title, url);
    _this28.reports = new BrandReports("/api/brandReports.php");
    _this28.forms = new BrandForm(url);
    new ContextMenu();
    return _this28;
  }

  return Brand;
}(Essence);

var Repairs = /*#__PURE__*/function (_Essence9) {
  _inherits(Repairs, _Essence9);

  var _super29 = _createSuper(Repairs);

  function Repairs(textAdd, textEdit, title, url) {
    var _this29;

    _classCallCheck(this, Repairs);

    _this29 = _super29.call(this, textAdd, textEdit, title, url);
    _this29.reports = new RepairsReports("/api/repairsReports.php");
    _this29.forms = new RepairsForm(url);
    _this29.client = new ClientModal();
    _this29.staff = new StaffModal();
    _this29.typeRepair = new TypeRepairModal();
    _this29.equipment = new EquipmentModal();
    new ContextMenu();
    return _this29;
  }

  _createClass(Repairs, [{
    key: "newShipment",
    value: function newShipment(formData) {
      $.ajax({
        url: "".concat(this.url, "?shipment=true"),
        method: 'post',
        async: false,
        processData: false,
        contentType: false,
        data: formData,
        success: function success(data) {
          createModal("message", data.message);
          $(newForm).trigger("reset");
        },
        error: function error(_error6) {
          createModal("message", _error6.responseJSON.message);
        }
      });
    }
  }]);

  return Repairs;
}(Essence);

var About = /*#__PURE__*/function () {
  function About() {
    _classCallCheck(this, About);

    this.aboutModal;
  }

  _createClass(About, [{
    key: "aboutModal",
    get: function get() {
      mainTable.append("<div id=\"about\" class=\"modal h-350 about\">\n        <p class=\"modal__title no-flex-auto\" id=\"modal__title\" data-modal-title=\"job\">\u041E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435</p>\n\n        <div class=\"modal__body\">\n\n            <div class=\"about__text\">\n                \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \"'\u0423\u0420\u041C' \u0423\u0447\u0435\u0442 \u0437\u0430 \u0440\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u0443\u0435\u043C\u044B\u043C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435\u043C\" \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0434\u043B\u044F \u0443\u0447\u0435\u0442\u0430 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u044B\u0445 \u0446\u0435\u043D\u0442\u0440\u0430\u0445\n            </div>\n\n            <div class=\"about__subtitle\">\n                <span class=\"bold-weight\">\u041E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B:</span>\n            </div>\n\n            <div class=\"about__text\">\n                <p class=\"about__text\">\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438</p>\n                <p class=\"about__text\">\u0424\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0442\u0447\u0435\u0442\u043E\u0432</p>\n                <p class=\"about__text\">\u0423\u0447\u0435\u0442 \u0437\u0430 \u0440\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u0443\u0435\u043C\u044B\u043C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435\u043C</p>\n                <p class=\"about__text\">\u0412\u044B\u0432\u043E\u0434 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 excel</p>\n                <p class=\"about__text\">\u0421\u0432\u043E\u0435 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043D\u043E\u0435 \u043C\u0435\u043D\u044E</p>\n            </div>\n\n            <div class=\"about__version\"><span class=\"bold-weight d-block\">\u0412\u0435\u0440\u0441\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B:</span>1.0-29.05.2023</div>\n\n            <div class=\"about__subtitle\">\n                <span class=\"bold-weight\">\u041D\u0430\u0434 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438:</span>\n            </div>\n\n            <div class=\"about__author\">\n                <p class=\"about__text\"><span class=\"bold-weight d-block\">\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442:</span> \u0411\u043E\u0435\u0432 \u041C\u0430\u043A\u0441\u0438\u043C \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u0438\u0447</p>\n                <p class=\"about__text\"><span class=\"bold-weight d-block\">ux/ui-\u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440:</span> \u0413\u043E\u043B\u043E\u0432\u043A\u043E \u0412\u0438\u043A\u0442\u043E\u0440\u0438\u044F \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u043D\u0430</p>\n            </div>\n\n        </div>\n\n    </div>");
    }
  }]);

  return About;
}();

var Shipment = /*#__PURE__*/function (_Essence10) {
  _inherits(Shipment, _Essence10);

  var _super30 = _createSuper(Shipment);

  function Shipment(textAdd, textEdit, title, url) {
    var _this30;

    _classCallCheck(this, Shipment);

    _this30 = _super30.call(this, textAdd, textEdit, title, url);
    _this30.reports = new ShipmentReports("/api/shipmentReports.php");
    _this30.forms = new ShipmentForm(url);
    _this30.client = new ClientModal();
    _this30.category = new CategoryModal();
    _this30.typeRepair = new TypeRepairModal();
    _this30.equipment = new EquipmentModal();
    return _this30;
  }

  _createClass(Shipment, [{
    key: "delete",
    value: function _delete(id) {}
  }, {
    key: "edit",
    value: function edit(id) {}
  }, {
    key: "new",
    value: function _new(formData) {}
  }]);

  return Shipment;
}(Essence);

var ContextMenu = /*#__PURE__*/function () {
  function ContextMenu() {
    _classCallCheck(this, ContextMenu);

    this.init();
  }

  _createClass(ContextMenu, [{
    key: "init",
    value: function init() {
      $(".main__table").mousedown(function (event) {
        document.oncontextmenu = function () {
          return false;
        };

        var isMenuLink = event.target.classList.contains("context-menu__link");

        if (event.which === 3 && $("#overlay").css("display") !== "flex") {
          ContextMenu.deleteContextMenu();
          setMarkedClick(event);
          var left = event.pageX;
          var top = event.pageY;
          if (left <= 221) left = event.pageX + 10;
          if (left >= $(window).width() - 221) left = $(window).width() - 221;
          if (top >= $(window).height() - 151) top = $(window).height() - 161;
          $('<div/>', {
            "class": 'context-menu'
          }).css({
            left: left + 'px',
            top: top + 'px'
          }).appendTo('body').append($('<ul class="context-menu__list"/>').append('<li class="context-menu__line"><a class="context-menu__link" id="context-form-delete" href="#">Удалить запись</a></li>').append('<li class="context-menu__line"><a class="context-menu__link" id="context-form-new" href="#">Создать запись</a></li>').append('<li class="context-menu__line"><a class="context-menu__link" id="context-form-copy" href="#">Создать копию записи</a></li>').append('<li class="context-menu__line"><a class="context-menu__link" id="context-form-edit" href="#">Изменить запись</a></li>')).show('fast');
        } else {
          if (!isMenuLink) {
            ContextMenu.deleteContextMenu();
          }
        }

        $("#context-form-delete").click(function (e) {
          e.preventDefault();
          TableDB["delete"](activeRow);
          ContextMenu.deleteContextMenu();
        });
        $("#context-form-copy").click(function (e) {
          e.preventDefault();
          TableDB.forms.createCopiedModal("modal");
          ContextMenu.deleteContextMenu();
        });
        $("#context-form-edit").click(function (e) {
          e.preventDefault();
          onEditClick("modal");
          ContextMenu.deleteContextMenu();
        });
        $("#context-form-new").click(function (e) {
          e.preventDefault();
          createModal("modal");
          ContextMenu.deleteContextMenu();
        });
      });
    }
  }], [{
    key: "deleteContextMenu",
    value: function deleteContextMenu() {
      $('*').removeClass('selected-html-element');
      $('.context-menu').remove();
    }
  }]);

  return ContextMenu;
}();

var tableName = $(".main__table").attr("data-table-name");
var pageTitle = $("#title");
var mainTitle = $(".top-main__title");
var searchListSetting;
initPage();
var addTabBtn = $("#form-add-tab");
var settingTabBtn = $("#form-setting-tab");
var addBtn = $("#form-add");
var editBtn = $("#form-edit");
var copiedBtn = $("#form-copied");
var deleteBtn = $("#form-delete");
var searchBtn = $("#form-search");
var extendedSearchBtn = $("#extended-search-setting");
var aboutBtn = $("#about-info");
var fieldSearchReset = $(".field-search__reset");
var reportsType = $(".reports-type");
var reportsBtn = $(".reports-button");
var tableTab;
var modalSearchItem = $(".modal__search-item");
var table = $(".table");
var searchForm = $("#field-search");
var extendedSearchForm = $("#extended-search-form");
var reportsForm = $("#reports-form");
var tapped = false;
var activeRow = null;
var newForm;
var newGroup;

function activeHeaderLink() {
  $(".menu__link").click(function (e) {
    if (!e.target.classList.contains("menu__link_active")) {
      var labelActiveLink = $(".menu__link_active");
      labelActiveLink.parent().find("._active").removeClass("_active");
      labelActiveLink.removeClass("menu__link_active");
      $(this).addClass("menu__link_active");
      $(this).parent().find(".menu__sublist").addClass("_active");
    }
  });
}

jQuery(function () {
  jQuery('.menu__icon').click(function (event) {
    jQuery('.menu__icon, .menu__body').toggleClass('active');
    jQuery('body').toggleClass('lock');
  });
  jQuery('.menu__label').click(function (event) {
    jQuery('.menu__icon, .menu__body').removeClass('active');
    jQuery('body').removeClass('lock');
  });
});

function ibg() {
  var ibg = document.querySelectorAll(".ibg");

  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg(); // JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP

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
  switch (tableName) {
    // http://medicine/build/api/patients.php /api/patients.php
    case "client":
      TableDB = new Client("Создание клиента", "Редактирование клиента", "Информация о клиенте", "/api/client.php");
      break;

    case "countries":
      TableDB = new Countries("Создание страны", "Редактирование страны", "Информация о стране", "/api/countries.php");
      break;

    case "staff":
      TableDB = new Staff("Создание сотрудника", "Редактирование сотрудника", "Информация об персонале", "/api/staff.php");
      break;

    case "job":
      TableDB = new Job("Создание должности", "Редактирование должности", "Информация об должностях", "/api/job.php");
      break;

    case "typeRepair":
      TableDB = new TypeRepair("Создать новый вид ремонта", "Редактирование вида ремонта", "Виды ремонта", "/api/typeRepair.php");
      break;

    case "category":
      TableDB = new Category("Создать категорию", "Редактирование категории", "Категории оборудований", "/api/category.php");
      break;

    case "equipment":
      TableDB = new Equipment("Создать оборудование", "Редактирование оборудования", "Оборудования", "/api/equipment.php");
      break;

    case "brand":
      TableDB = new Brand("Создать модель", "Редактирование модели", "Модель", "/api/brand.php");
      break;

    case "repairs":
      TableDB = new Repairs("Создать ремонтную запись", "Редактирование ремонтной записи", "Ремонтная запись", "/api/repairs.php");
      break;

    case "shipment":
      TableDB = new Shipment("Создать акт отгрузки", "Редактировать акт отгрузки", "Акт отгрузки", "/api/shipment.php");
      break;
  }
}

function closeModal(modal) {
  --zIndex;
  modal.animate({
    opacity: 0
  }, 198, function () {
    $(this).css("display", "none");
    modal.find(".modal__title").text(TableDB.textAdd);
    modal.find("#add-modal__submit").text("Создать");
    $(this).css("z-index", zIndex);

    if (zIndex <= 102) {
      //$("#overlay").fadeOut(297)
      $("body").css("overflow-y", "visible");
    }
  });
  $(".table__tab").find("input").prop("checked", false);
  activeTab = 0;
}

function createModal(modalForm) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var modal = $("#".concat(modalForm));

  if (modal) {
    zIndex = zIndex < 102 ? 102 : ++zIndex;
    var modalTitle = title !== null ? title : TableDB.textAdd;
    $("#".concat(modalForm, " .modal__title")).text(modalTitle);

    if (modal.attr("id") === "message") {
      var frame = function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
          elem.css("width", ++width + "%");
        }
      };

      modal.css("display", "flex").css("z-index", zIndex).animate({
        opacity: 1
      }, 198);
      $("body").css("overflow-y", "hidden");
      $("#".concat(modalForm, " .modal__close-btn")).one("click", function () {
        closeModal(modal);
      });
      var elem = $(".modal__progress");
      var width = 1;
      var id = setInterval(frame, 20);
      setTimeout(function () {
        --zIndex;
        modal.animate({
          opacity: 0
        }, 198, function () {
          $(this).css("display", "none");
          modal.find(".modal__title").text(TableDB.textAdd);
          modal.find("#add-modal__submit").text("Создать");
          $(this).css("z-index", zIndex);

          if (zIndex <= 102) {
            $("body").css("overflow-y", "visible");
          }
        });
      }, 2000);
    } else {
      modal.css("display", "flex").css("z-index", zIndex).animate({
        opacity: 1
      }, 198);
      $("body").css("overflow-y", "hidden");
      $("#".concat(modalForm, " .modal__close-btn, #").concat(modalForm, " .modal__close, #overlay")).one("click", function () {
        closeModal(modal);
        TableDB.forms.setFormTypeAdd(newForm);
      });
    }
  }
}

function createCopiedGroupModal(modal, id) {
  TableDB.group.createCopiedGroupModal(modal, id);
}

function showDropDownMenu() {
  $(".action__btn-menu").click(function (e) {
    var downMenu = $("#".concat($(this).attr("data-downMenuName")));

    if (downMenu.hasClass("_hidden")) {
      $(".down-menu").not("._hidden").addClass("_hidden");
      downMenu.removeClass("_hidden");
    } else {
      downMenu.addClass("_hidden");
    }
  });
}

if (window.matchMedia("(max-width: 993px)").matches) {
  $(".action__left").append($("#setting-button").css("opacity", 1));
}

function showTable() {
  if (searchLine.val().trim() === "") {
    TableDB.rows;
  } else findSearchData();
}

function initPage() {
  new About();
  GetNameTable(tableName);
  mainTitle.text(TableDB.title);
  pageTitle.text(TableDB.title);
  newForm = $("#newForm");
  newGroup = $("#newGroup");
  searchListSetting = $(".modal__search-list");
  TableDB.forms.modalSubmit();
  showDropDownMenu();
  showTable();
  getListSearchItem();
}

newGroup.submit(function (e) {
  e.preventDefault();
});
deleteBtn.click(function (e) {
  e.preventDefault();
  TableDB["delete"](activeRow);
});

function findSearchData() {
  if (searchLine.val().trim() === "") createModal("message", "Поле для поиска не может быть пустым");else {
    var searchSettings = {};
    var searchAttr = searchLine.attr("data-search-tag");
    searchSettings[searchAttr] = searchLine.val();
    TableDB.forms.search(searchSettings);
  }
}

searchBtn.click(function (e) {
  e.preventDefault();
  findSearchData();
});

function getListSearchItem() {
  $(".main-table .table__header__col").each(function (item, elem) {
    var searchTag = $(elem).attr("data-search-tag");
    searchListSetting.append("\n            <button class=\"modal__search-item\" data-search-item-tag=\"".concat(searchTag, "\">").concat($(elem).text(), "</button>\n        "));
    $(".modal__search-item").first().addClass("modal__search-item_active");
  });
  changeSearchSettingLabel();
}

$(document).ready(function () {
  addBtn.click(function (e) {
    TableDB.forms.setFormTypeAdd(newForm);
    createModal("modal");
  });
  copiedBtn.click(function () {
    TableDB.forms.createCopiedModal("modal");
  });
  editBtn.click(function () {
    onEditClick("modal");
  });
  table.click(function (e) {
    click(e, "modal");
  });
  extendedSearchBtn.click(function (e) {
    createModal("extended-search-modal");
  });
  aboutBtn.click(function (e) {
    createModal("about", "О программе");
  });
  fieldSearchReset.click(function (e) {
    showTable();
  });
  $("#add-doctor-modal__reset").click(function (e) {
    showTable();
  });
  activeHeaderLink();
  addTabBtn.click(function (e) {
    createModal("group-modal", "Создание группы");

    if (activeTab) {
      var tab = $(".table__tab[data-modal-menu-id=".concat(activeTab, "]"));
      $("#listGroups").text("").append("\n                <option class='tabsInput' value=\"".concat(activeTab, "\">").concat($(tab).attr("data-modal-menu-title"), "</option>\n            "));
    } else {
      $("#listGroups").text("").append("\n                <option class='tabsInput' value=\"0\">\u041D\u0435\u0442 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439</option>\n            ");
    }

    TableDB.forms.setFormTypeAddGroup(newGroup);
  });
  settingTabBtn.click(function (e) {
    createModal("tabsModal", "Управление вкладками");
  });
  new Promise(function (resolve) {
    setTimeout(function () {
      resolve(1);
    }, 1000);
  }).then(function (value) {});
});
modalSearchItem.click(function (e) {
  e.preventDefault();
  $(".modal__search-item_active").removeClass("modal__search-item_active");
  $(this).addClass("modal__search-item_active");
  changeSearchSettingLabel();
});
reportsBtn.click(function (e) {
  if (activeRow) {
    if (this.id) {
      createModal("newShipmentForm", "Акт отгрузки");
    } else {
      $("#reports").attr("data-type", $(this).attr("data-reports-type"));
      createModal("reports", "Вывести отчет");
    }
  } else createModal("message", "Выберите запись");
});
extendedSearchForm.submit(function (e) {
  e.preventDefault();
  var formData = TableDB.forms.getFormData($(extendedSearchForm));
  var searchSetting = {};

  var _iterator2 = _createForOfIteratorHelper(formData.entries()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var pair = _step2.value;
      if (pair[1].trim() !== "") searchSetting[pair[0]] = pair[1];
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  if (!$.isEmptyObject(searchSetting)) TableDB.forms.search(searchSetting);
});

function changeSearchSettingLabel() {
  var selectOption = $(".modal__search-item_active");
  var selectOptionText = selectOption.text();
  var selectOptionAttr = selectOption.attr("data-search-item-tag");
  searchLine.attr("placeholder", "\u041F\u043E\u0438\u0441\u043A \u043F\u043E ".concat(selectOptionText));
  searchLine.attr("data-search-tag", "".concat(selectOptionAttr));
}

searchForm.submit(function (e) {
  e.preventDefault();
  findSearchData();
});

function removeError(object) {
  var parent = object.parent();
  var error = parent.children(".modal__error");
  if (error) error.remove();
}

reportsType.click(function (e) {
  e.preventDefault();
  var formData = new FormData();
  formData.append("id", "".concat(activeRow));
  formData.append("exportType", "".concat($(this).attr("name")));
  formData.append("reportType", "".concat($("#reports").attr("data-type")));
  TableDB.reports.dataReport(formData);
});

function showError(message, object) {
  var labelError = document.createElement("p");
  labelError.classList.add("modal__error");
  labelError.textContent = message;
  object.parent().append(labelError);
}

function setMarkedClick(e) {
  var target = e.target.parentNode;

  if (!target.classList.contains("table__header__row") && e.which !== 3) {
    if (!target.classList.contains("main__table") && !target.classList.contains("modal-row") && !target.classList.contains("table__header__row")) {
      $("._marked").removeClass("_marked");

      if (target.tagName === 'TR') {
        $("#".concat(target.id)).toggleClass("_marked");
        activeRow = target.id;
      }
    }
  }
}

function click(e, modal) {
  e.preventDefault();
  e.stopPropagation();
  setMarkedClick(e);

  if (tapped === false) {
    tapped = setTimeout(function () {
      tapped = false;
    }, 250);
  } else {
    clearTimeout(tapped);
    tapped = false;
    onEditClick(modal);
  }
}

function onEditClick(modal) {
  $("#modal__title").text(TableDB.textEdit);
  $("#add-modal__submit").text("Изменить");
  TableDB.forms.createCopiedModal(modal);
  TableDB.forms.setFormTypeEdit(newForm);
}