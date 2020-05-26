function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["f3-register-company-f3-register-company-module"], {
  /***/
  "./src/app/home-page/content/f3-register-company/f3-register-company.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/home-page/content/f3-register-company/f3-register-company.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: F3RegisterCompanyComponent */

  /***/
  function srcAppHomePageContentF3RegisterCompanyF3RegisterCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F3RegisterCompanyComponent", function () {
      return F3RegisterCompanyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_common_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/common/api-service/api.service */
    "./src/app/common/api-service/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function F3RegisterCompanyComponent_option_108_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var personalscale_r142 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", personalscale_r142.value == 0)("value", personalscale_r142.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", personalscale_r142.viewValue, " ");
      }
    }

    function F3RegisterCompanyComponent_option_119_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r143 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", city_r143.id == 0)("value", city_r143.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r143.name, " ");
      }
    }

    var F3RegisterCompanyComponent = /*#__PURE__*/function () {
      function F3RegisterCompanyComponent(api) {
        _classCallCheck(this, F3RegisterCompanyComponent);

        this.api = api;
        this.subscription = []; // data source for combobox level

        this.personalscales = [{
          value: '0',
          viewValue: 'Quy mô công ty'
        }, {
          value: '1',
          viewValue: 'Dưới 20 người'
        }, {
          value: '2',
          viewValue: '20 - 150 người'
        }, {
          value: '3',
          viewValue: '150 - 300 người'
        }, {
          value: '4',
          viewValue: 'Trên 300 người'
        }]; // website

        this.cityId = ''; //data combobox city

        this.citys = [];
      }
      /**
        * ngOnDestroy
        */


      _createClass(F3RegisterCompanyComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.forEach(function (item) {
            item.unsubscribe();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadDataCity();
        }
        /**
         * load Data City
         */

      }, {
        key: "loadDataCity",
        value: function loadDataCity() {
          var _this = this;

          var param = {};
          this.subscription.push(this.api.excuteAllByWhat(param, '147').subscribe(function (data) {
            if (data.length > 0) {
              var temp = [{
                id: "0",
                name: "Tỉnh/Thành phố"
              }];
              data.forEach(function (item) {
                temp.push(item);
              });
              _this.citys = temp; // set first select citys combobox

              _this.cityId = _this.citys[0].id;
            }

            console.log('city', _this.citys);
          }));
        }
      }]);

      return F3RegisterCompanyComponent;
    }();

    F3RegisterCompanyComponent.ɵfac = function F3RegisterCompanyComponent_Factory(t) {
      return new (t || F3RegisterCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    F3RegisterCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: F3RegisterCompanyComponent,
      selectors: [["app-f3-register-company"]],
      decls: 130,
      vars: 2,
      consts: [[1, "main", 2, "background-image", "url('../../../../assets/img/body-bg.jpg')", "margin-bottom", "25px"], [1, "container"], [1, "row"], [1, "col-sm-6", "mt-4", "mb-4", "col-f2login"], [1, "box-text", "mb-4", "text-white"], [1, "mr-4"], [1, "far", "fa-newspaper", "mr-2"], [1, "fas", "fa-search", "mr-2"], [1, "col-md-12", "mb-4"], [1, "round", "stat", "ml-n"], [1, "pl-15", "pr-15"], [1, "round", "stat"], [1, "box-info", "ml-4"], [1, "far", "fa-check-circle"], [1, "col-md-12"], [1, "hotline"], [1, "well"], [1, "col-md-6", "text-center"], [1, "text-white"], ["href", "tel:024710 88688", 1, "number"], ["src", "../../../../assets/img/phone-icon.gif", 1, "img-register"], [1, "col-sm-6", "mt-4", "mb-4"], [1, "d-flex", "justify-content-center", "h-100"], [1, "card"], [1, "card-header"], [1, "card-body", "card-from"], [1, "input-group", "form-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-envelope"], ["type", "text", "placeholder", "Email", 1, "form-control"], [1, "fas", "fa-key"], ["type", "password", "placeholder", "M\u1EADt kh\u1EA9u", 1, "form-control"], [1, "fas", "fa-user"], ["type", "text", "placeholder", "T\xEAn ng\u01B0\u1EDDi li\xEAn h\u1EC7", 1, "form-control"], [1, "fas", "fa-phone-alt"], ["type", "text", "placeholder", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i li\xEAn h\u1EC7", 1, "form-control"], [1, "fas", "fa-building"], ["type", "text", "placeholder", "T\xEAn c\xF4ng ty", 1, "form-control"], [1, "fas", "fa-users"], [1, "custom-select", 2, "width", "100%"], [3, "disabled", "value", 4, "ngFor", "ngForOf"], [1, "fas", "fa-map-marker-alt"], ["type", "text", "placeholder", "\u0110\u1ECBa ch\u1EC9 c\xF4ng ty", 1, "form-control"], [1, "fas", "fa-city"], [1, "row", "align-items-center", "remember", "mb-2"], ["type", "checkbox"], [1, "form-group", "text-center"], ["type", "submit", "value", "\u0110\u0103ng k\xFD", 1, "btn", "login_btn"], [1, "card-footer"], [1, "d-flex", "justify-content-center", "links"], ["routerLink", "/f2-login-company"], [3, "disabled", "value"]],
      template: function F3RegisterCompanyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0110\u0103ng tin mi\u1EC5n ph\xED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "L\u1ECDc h\u1ED3 s\u01A1 \u1EE9ng vi\xEAn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "+4M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u1EE8ng vi\xEAn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+700K");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nh\xE0 tuy\u1EC3n d\u1EE5ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "+1.6M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Vi\u1EC7c l\xE0m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "+14M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "L\u01B0\u1EE3t \u1EE9ng tuy\u1EC3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\xA0+4,000,000 \u1EE9ng vi\xEAn ti\u1EBFp c\u1EADn th\xF4ng tin tuy\u1EC3n d\u1EE5ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\xA0H\u01A1n 20 h\u1ED3 s\u01A1 \u1EE9ng tuy\u1EC3n cho 1 vi\u1EC7c l\xE0m \u0111\u0103ng tuy\u1EC3n t\u1EA1i MyWork");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\xA0T\u0103ng hi\u1EC7u qu\u1EA3 4 - 5 l\u1EA7n so v\u1EDBi c\xE1c ph\u01B0\u01A1ng th\u1EE9c tuy\u1EC3n d\u1EE5ng kh\xE1c");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\xA0+2,000 l\u01B0\u1EE3t xem trung b\xECnh cho 1 vi\u1EC7c l\xE0m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Hotline t\u01B0 v\u1EA5n d\xE0nh cho Nh\xE0 tuy\u1EC3n d\u1EE5ng ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Mi\u1EC1n B\u1EAFc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "(024) 710 88688");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Mi\u1EC1n Nam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "(028) 710 88688");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u0110\u0103ng k\xFD t\xE0i kho\u1EA3n nh\xE0 tuy\u1EC3n d\u1EE5ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "T\xE0i kho\u1EA3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Th\xF4ng tin c\xF4ng ty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, F3RegisterCompanyComponent_option_108_Template, 2, 3, "option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, F3RegisterCompanyComponent_option_119_Template, 2, 3, "option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\u0110\u1ED3ng \xFD v\u1EDBi th\u1ECFa thu\u1EADn s\u1EED d\u1EE5ng c\u1EE7a MyWork ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " B\u1EA1n \u0111\xE3 c\xF3 t\xE0i kho\u1EA3n?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\u0110\u0103ng nh\u1EADp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.personalscales);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.citys);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      styles: ["main[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.8;\n  color: #fff;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  font-weight: 400;\n  margin: 0px;\n}\n\n.box-text[_ngcontent-%COMP%] {\n  display: -webkit-inline-flex;\n}\n\n.box-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 26px;\n}\n\n.col-box[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n\n.card-from[_ngcontent-%COMP%] {\n  padding: 0px 1.25rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 400px;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin-left: 10px;\n  color: #22924c;\n}\n\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: white;\n  cursor: pointer;\n}\n\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 135%;\n}\n\n.social_icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: -11px;\n}\n\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 45px;\n  background-color: #22924c;\n  color: #fff;\n  border: 0 !important;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: 0 0 0 0 !important;\n  box-shadow: 0 0 0 0 !important;\n}\n\n.remember[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-left: 15px;\n  margin-right: 5px;\n}\n\n.login_btn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #22924c;\n  width: 100px;\n}\n\n.login_btn[_ngcontent-%COMP%]:hover {\n  color: black;\n  background-color: white;\n}\n\n.links[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n\n.box-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.box-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.round.stat[_ngcontent-%COMP%] {\n  width: 103px;\n  height: 103px;\n  margin: auto;\n  display: inline-block;\n  border-radius: 50%;\n  margin: 0 12px;\n  color: #fff;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.27843);\n  vertical-align: top;\n}\n\n.round.stat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.round.stat[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.number[_ngcontent-%COMP%] {\n  color: #f39c12;\n  font-size: 16px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.well[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  margin-top: 20px;\n  background-color: transparent;\n  border: 1px solid #fff;\n  box-shadow: none;\n  text-align: center;\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n}\n\n.img-register[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #eeeeee69;\n  padding: 0px 10px;\n  margin-bottom: 15px;\n  border-radius: 3px;\n}\n\nlegend[_ngcontent-%COMP%] {\n  display: inline;\n  width: auto;\n  padding: 0 5px;\n  font-size: 15px;\n  line-height: inherit;\n  border: 0;\n  border-bottom: none;\n  font-weight: 400;\n  margin-bottom: 5px;\n  color: #fff;\n}\n\n@media (max-width: 480px) {\n  .remember[_ngcontent-%COMP%] {\n    font-size: 90%;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .col-f2login[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .round.stat[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n\n  .well[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n\n  .box-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 125%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2NvbnRlbnQvZjMtcmVnaXN0ZXItY29tcGFueS9FOlxcZmUtdXNlci1qb2JzL3NyY1xcYXBwXFxob21lLXBhZ2VcXGNvbnRlbnRcXGYzLXJlZ2lzdGVyLWNvbXBhbnlcXGYzLXJlZ2lzdGVyLWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9jb250ZW50L2YzLXJlZ2lzdGVyLWNvbXBhbnkvZjMtcmVnaXN0ZXItY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLDRCQUFBO0FDRUo7O0FEREk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0dSOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QUREQTtFQUNJLG9CQUFBO0FDSUo7O0FEREE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQ0lKOztBRERBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0lKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNJSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDSUo7O0FEREE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDSUo7O0FEREE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNJSjs7QUREQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7QUNJSjs7QUREQTtFQUNJLFlBQUE7QUNJSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0lKOztBRERBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0lKOztBRERBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FDSUo7O0FEREE7RUFDSSxZQUFBO0FDSUo7O0FEREE7RUFDSSxnQkFBQTtBQ0lKOztBRENJO0VBQ0ksV0FBQTtBQ0VSOztBREFJO0VBQ0ksV0FBQTtBQ0VSOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtBQ01KOztBREpBO0VBQ0ksMkJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDUUo7O0FETkE7RUFDSTtJQUNJLGNBQUE7RUNTTjtBQUNGOztBRE5BO0VBQ0k7SUFDSSxrQkFBQTtFQ1FOOztFRE5FO0lBQ0ksbUJBQUE7RUNTTjs7RURQRTtJQUNJLGlCQUFBO0VDVU47O0VEUkU7SUFDSSxhQUFBO0VDV047O0VEUk07SUFDSSxlQUFBO0VDV1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9jb250ZW50L2YzLXJlZ2lzdGVyLWNvbXBhbnkvZjMtcmVnaXN0ZXItY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5ib3gtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xyXG4gICAgaDMge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIH1cclxufVxyXG4uY29sLWJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcbi5jYXJkLWZyb217XHJcbiAgICBwYWRkaW5nOiAwcHggMS4yNXJlbTtcclxuXHJcbn1cclxuLmNhcmQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNvY2lhbF9pY29uIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogIzIyOTI0YztcclxufVxyXG5cclxuLnNvY2lhbF9pY29uIHNwYW46aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgaDMge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMzUlO1xyXG59XHJcblxyXG4uc29jaWFsX2ljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IC0xMXB4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFuIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyOTI0YztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDAgMCAwIDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlbWVtYmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnJlbWVtYmVyIGlucHV0IHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmxvZ2luX2J0biB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjkyNGM7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbl9idG46aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saW5rcyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saW5rcyBhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4uYm94LWluZm8ge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb3VuZC5zdGF0IHtcclxuICAgIHdpZHRoOiAxMDNweDtcclxuICAgIGhlaWdodDogMTAzcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgMTJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC4yNzg0Myk7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbi5yb3VuZC5zdGF0IHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5yb3VuZC5zdGF0IGg0IHtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxufVxyXG4ubnVtYmVyIHtcclxuICAgIGNvbG9yOiAjZjM5YzEyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ud2VsbCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxOXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uaW1nLXJlZ2lzdGVye1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTY5O1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyBcclxufVxyXG5sZWdlbmR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnJlbWVtYmVyIHtcclxuICAgICAgICBmb250LXNpemU6IDkwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgLmNvbC1mMmxvZ2lue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5yb3VuZC5zdGF0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLndlbGx7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHhcclxuICAgIH1cclxuICAgIC5ib3gtdGV4dHsgXHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaGVhZGVye1xyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEyNSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm1haW4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmJveC10ZXh0IHtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbn1cbi5ib3gtdGV4dCBoMyB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5jb2wtYm94IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLmNhcmQtZnJvbSB7XG4gIHBhZGRpbmc6IDBweCAxLjI1cmVtO1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcbn1cblxuLnNvY2lhbF9pY29uIHNwYW4ge1xuICBmb250LXNpemU6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogIzIyOTI0Yztcbn1cblxuLnNvY2lhbF9pY29uIHNwYW46aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtaGVhZGVyIGgzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzNSU7XG59XG5cbi5zb2NpYWxfaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogLTExcHg7XG59XG5cbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW4ge1xuICB3aWR0aDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyOTI0YztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDAgMCAwIDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xufVxuXG4ucmVtZW1iZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yZW1lbWJlciBpbnB1dCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmxvZ2luX2J0biB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI5MjRjO1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5sb2dpbl9idG46aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubGlua3Mge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5saW5rcyBhIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmJveC1pbmZvIGgxIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYm94LWluZm8gcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucm91bmQuc3RhdCB7XG4gIHdpZHRoOiAxMDNweDtcbiAgaGVpZ2h0OiAxMDNweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNzg0Myk7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5yb3VuZC5zdGF0IHAge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5yb3VuZC5zdGF0IGg0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLm51bWJlciB7XG4gIGNvbG9yOiAjZjM5YzEyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlbGwge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbWctcmVnaXN0ZXIge1xuICB3aWR0aDogNTBweDtcbn1cblxuZmllbGRzZXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlNjk7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbmxlZ2VuZCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucmVtZW1iZXIge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29sLWYybG9naW4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5yb3VuZC5zdGF0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgLndlbGwge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG5cbiAgLmJveC10ZXh0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNhcmQtaGVhZGVyIGgzIHtcbiAgICBmb250LXNpemU6IDEyNSU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](F3RegisterCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-f3-register-company',
          templateUrl: './f3-register-company.component.html',
          styleUrls: ['./f3-register-company.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_common_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-page/content/f3-register-company/f3-register-company.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/home-page/content/f3-register-company/f3-register-company.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: F3RegisterCompanyModule */

  /***/
  function srcAppHomePageContentF3RegisterCompanyF3RegisterCompanyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F3RegisterCompanyModule", function () {
      return F3RegisterCompanyModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nguniversal_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nguniversal/common */
    "./node_modules/@nguniversal/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _f3_register_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./f3-register-company.component */
    "./src/app/home-page/content/f3-register-company/f3-register-company.component.ts");

    var F3RegisterCompanyModule = function F3RegisterCompanyModule() {
      _classCallCheck(this, F3RegisterCompanyModule);
    };

    F3RegisterCompanyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: F3RegisterCompanyModule
    });
    F3RegisterCompanyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function F3RegisterCompanyModule_Factory(t) {
        return new (t || F3RegisterCompanyModule)();
      },
      imports: [[_nguniversal_common__WEBPACK_IMPORTED_MODULE_2__["TransferHttpCacheModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: _f3_register_company_component__WEBPACK_IMPORTED_MODULE_5__["F3RegisterCompanyComponent"],
        children: []
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](F3RegisterCompanyModule, {
        declarations: [_f3_register_company_component__WEBPACK_IMPORTED_MODULE_5__["F3RegisterCompanyComponent"]],
        imports: [_nguniversal_common__WEBPACK_IMPORTED_MODULE_2__["TransferHttpCacheModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](F3RegisterCompanyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_f3_register_company_component__WEBPACK_IMPORTED_MODULE_5__["F3RegisterCompanyComponent"]],
          imports: [_nguniversal_common__WEBPACK_IMPORTED_MODULE_2__["TransferHttpCacheModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
            path: '',
            component: _f3_register_company_component__WEBPACK_IMPORTED_MODULE_5__["F3RegisterCompanyComponent"],
            children: []
          }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=f3-register-company-f3-register-company-module-es5.js.map