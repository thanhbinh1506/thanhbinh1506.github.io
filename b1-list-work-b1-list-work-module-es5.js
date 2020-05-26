function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["b1-list-work-b1-list-work-module"], {
  /***/
  "./src/app/home-page/content/b1-list-work/b1-list-work.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/home-page/content/b1-list-work/b1-list-work.component.ts ***!
    \**************************************************************************/

  /*! exports provided: B1ListWorkComponent */

  /***/
  function srcAppHomePageContentB1ListWorkB1ListWorkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "B1ListWorkComponent", function () {
      return B1ListWorkComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function B1ListWorkComponent_option_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r62 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r62.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r62.name);
      }
    }

    function B1ListWorkComponent_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r63 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r63.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r63.name);
      }
    }

    function B1ListWorkComponent_option_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r64 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r64.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r64.viewValue);
      }
    }

    function B1ListWorkComponent_option_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r65 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r65.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r65.viewValue);
      }
    }

    function B1ListWorkComponent_option_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r66 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r66.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r66.viewValue);
      }
    }

    function B1ListWorkComponent_option_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r67 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r67.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r67.viewValue);
      }
    }

    function B1ListWorkComponent_div_53_Template(rf, ctx) {
      if (rf & 1) {
        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function B1ListWorkComponent_div_53_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var job_r68 = ctx.$implicit;

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r69.onDetailJobClick(job_r68.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var job_r68 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", job_r68.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", job_r68.position);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", job_r68.position, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r68.companyname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", job_r68.salary, " tri\u1EC7u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r68.postdate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0110\xE0 N\u1EB5ng: ", job_r68.addresswork, "");
      }
    }

    function B1ListWorkComponent_a_78_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r71 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r71.banner, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function B1ListWorkComponent_div_90_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function B1ListWorkComponent_div_90_div_1_div_1_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

          var colSlide_r76 = ctx.$implicit;

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r77.onDetailJobClick(colSlide_r76.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var colSlide_r76 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", colSlide_r76.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", colSlide_r76.position);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", colSlide_r76.position, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](colSlide_r76.companyname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0110\xE0 N\u1EB5ng: ", colSlide_r76.addresswork, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", colSlide_r76.salary, " tri\u1EC7u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 7, colSlide_r76.postdate, "dd/MM/yyyy"));
      }
    }

    function B1ListWorkComponent_div_90_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, B1ListWorkComponent_div_90_div_1_div_1_Template, 23, 10, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowSlide_r74 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rowSlide_r74);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function B1ListWorkComponent_div_90_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, B1ListWorkComponent_div_90_div_1_Template, 2, 1, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slideItem_r72 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, slideItem_r72.active));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", slideItem_r72.rowSlide);
      }
    }

    var _c1 = function _c1() {
      return {
        standalone: true
      };
    };

    var B1ListWorkComponent = /*#__PURE__*/function () {
      function B1ListWorkComponent(api, activatedRoute, router) {
        _classCallCheck(this, B1ListWorkComponent);

        this.api = api;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.subscription = []; // data for comboBox

        this.typeOfWork = [{
          value: '0',
          viewValue: 'Loại hình'
        }, {
          value: '1',
          viewValue: 'Toàn thời gian cố định'
        }, {
          value: '2',
          viewValue: 'Toàn thời gian tạm thời'
        }, {
          value: '3',
          viewValue: 'Bán thòi gian cố định'
        }, {
          value: '4',
          viewValue: 'Bán thòi gian tạm thời'
        }, {
          value: '5',
          viewValue: 'Theo hợp đồng / tư vấn'
        }, {
          value: '6',
          viewValue: 'Thực tập'
        }, {
          value: '7',
          viewValue: 'Khác'
        }];
        this.expYears = [{
          value: "none",
          viewValue: "Kinh nghiệm"
        }, {
          value: '1',
          viewValue: 'Chưa có kinh nghiệm'
        }, {
          value: '2',
          viewValue: 'Dưới 1 năm'
        }, {
          value: '3',
          viewValue: '1 năm'
        }, {
          value: '4',
          viewValue: '2 năm'
        }, {
          value: '5',
          viewValue: '3 năm'
        }, {
          value: '6',
          viewValue: '4 năm'
        }, {
          value: '7',
          viewValue: '5 năm'
        }, {
          value: '8',
          viewValue: 'Trên 5 năm'
        }];
        this.sexs = [{
          value: "0",
          viewValue: "Nam"
        }, {
          value: "1",
          viewValue: "Nữ"
        }, {
          value: "none",
          viewValue: "Giới tính"
        }];
        this.salaries = [{
          value: "none",
          viewValue: "Mức lương"
        }, {
          value: "1",
          viewValue: "1-3 triệu"
        }, {
          value: "2",
          viewValue: "3-5 triệu"
        }, {
          value: "3",
          viewValue: "5-7 triệu"
        }, {
          value: "4",
          viewValue: "7-10 triệu"
        }, {
          value: "5",
          viewValue: "10-12 triệu"
        }, {
          value: "6",
          viewValue: "12-15 triệu"
        }, {
          value: "7",
          viewValue: "15-20 triệu"
        }, {
          value: "8",
          viewValue: "20-25 triệu"
        }, {
          value: "9",
          viewValue: "25-30 triệu"
        }, {
          value: "10",
          viewValue: "30 triệu trở lên"
        }];
        this.listJobNew = []; //  binding search
        // career search

        this.career = '0'; // city search

        this.city = '0'; // salary search

        this.salary = 'none'; // exp search

        this.exp = 'none'; // typeofwork search

        this.typeofwork = 'none'; // sex search

        this.sex = 'none';
      }

      _createClass(B1ListWorkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // get Career
          this.getCareer(); // get City

          this.getCity(); //listHotNew

          this.getJobNew();
          this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this.career = params['career'];
            _this.city = params['city'];
            _this.salary = params['salary'];
            _this.exp = params['exp'];
            _this.typeofwork = params['typeofwork'];
            _this.sex = params['sex'];
            _this.keyword = params['keyword'];
          }); // on Filter Job

          this.onFilterJob(); // get Banner Ads

          this.getBannerAds();
        }
        /**
         * on Filter Job
         */

      }, {
        key: "onFilterJob",
        value: function onFilterJob() {
          var _this2 = this;

          var param = {
            career: this.career,
            city: this.city,
            salary: this.salary,
            exp: this.exp,
            typeofwork: this.typeofwork,
            sex: this.sex,
            keyword: this.keyword
          };
          this.subscription.push(this.api.excuteAllByWhat(param, '13').subscribe(function (data) {
            // set data for listJob
            console.log("tada<<<<<<", data);
            data[0].salary = data[0]['salary'] / 1000000;
            _this2.listJob = data;
          }));
        }
        /**
        * get Career
        */

      }, {
        key: "getCareer",
        value: function getCareer() {
          var _this3 = this;

          var param = {};
          this.subscription.push(this.api.excuteAllByWhat(param, '130').subscribe(function (data) {
            if (data.length > 0) {
              var temp = [{
                id: "0",
                name: "Ngành nghề"
              }];
              data.forEach(function (item) {
                temp.push(item);
              }); // set data for listCareer	

              _this3.listCareer = temp;
            } else {
              _this3.listCareer = 0;
            }
          }));
        }
        /**
        * get City
        */

      }, {
        key: "getCity",
        value: function getCity() {
          var _this4 = this;

          var param = {};
          this.subscription.push(this.api.excuteAllByWhat(param, '200').subscribe(function (data) {
            if (data.length > 0) {
              var temp = [{
                id: "0",
                name: "Địa điểm"
              }];
              data.forEach(function (item) {
                temp.push(item);
              }); // set data for city	

              _this4.listCity = temp;
            }
          }));
        }
        /**
        * get Banner Ads
        */

      }, {
        key: "getBannerAds",
        value: function getBannerAds() {
          var _this5 = this;

          var param = {};
          this.subscription.push(this.api.excuteAllByWhat(param, '69').subscribe(function (data) {
            if (data.length > 0) {
              // set data for city	
              _this5.listBannerAds = data;
              console.log('listbanner', _this5.listBannerAds);
            }
          }));
        }
        /**
        * get Job New
        */

      }, {
        key: "getJobNew",
        value: function getJobNew() {
          var _this6 = this;

          var param = {};
          this.subscription.push(this.api.excuteAllByWhat(param, '18').subscribe(function (data) {
            if (data.length > 0) {
              // set data for list jog hot	
              var colSlide = [];
              var processList = [{
                rowSlide: [colSlide = [data[0], data[1], data[2], data[3], data[4], data[5]]],
                active: true
              }, {
                rowSlide: [colSlide = [data[6], data[7], data[8], data[9], data[10], data[11]]],
                active: false
              }];
              _this6.listJobNew = processList;
              console.log(_this6.listJobNew);
            }
          }));
        }
      }, {
        key: "onDetailJobClick",
        value: function onDetailJobClick(idjob) {
          var url = '/b2-detail-work/' + idjob;
          this.router.navigate([url]);
          console.log(url);
        }
      }]);

      return B1ListWorkComponent;
    }();

    B1ListWorkComponent.ɵfac = function B1ListWorkComponent_Factory(t) {
      return new (t || B1ListWorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    B1ListWorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: B1ListWorkComponent,
      selectors: [["app-b1-list-work"]],
      decls: 384,
      vars: 17,
      consts: [[1, "block-find-advance"], [1, "container"], [1, "block-title"], [1, "title-left"], [1, "text", 3, "click"], [1, "line"], [1, "row", "find-advance", "pt-3"], [1, "col-md-12", "relative", "title-search"], [1, "form-group"], [1, "far", "fa-building"], ["type", "email", "id", "exampleFormControlInput1", "placeholder", "Nh\u1EADp ti\xEAu \u0111\u1EC1 h\u1ED3 s\u01A1, v\u1ECB tr\xED, \u0111\u1ECBa \u0111i\u1EC3m l\xE0m vi\u1EC7c...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-2", "col-6"], [1, "form-group", "select-custom"], [1, "fas", "fa-list-ul"], ["id", "exampleFormControlSelect1", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "fas", "fa-map-marker-alt"], [1, "far", "fa-clock"], ["id", "exampleFormControlSelect1", 1, "form-control"], [1, "far", "fa-address-card"], [1, "fas", "fa-laptop-house"], ["id", "exampleFormControlSelect1", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "content"], [1, "row"], [1, "col-md-9"], [1, "wp-inner-content"], [1, "title-total"], [1, "mb-0"], [1, "list-job"], ["class", "job-item d-flex", 4, "ngFor", "ngForOf"], [1, "pagination"], [1, "page-item"], ["href", "#", 1, "page-link"], [1, "page-item", "active"], [1, "col-md-3"], [1, "sidebar"], ["href", "", "class", "d-block mb-3", 4, "ngFor", "ngForOf"], [1, "job-related"], [1, "text"], [1, "col-md-12"], ["id", "job-hot-slide", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-inner"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#job-hot-slide", "data-slide", "prev", 1, "carousel-control-prev"], [1, "carousel-control-prev-icon"], ["href", "#job-hot-slide", "data-slide", "next", 1, "carousel-control-next"], [1, "carousel-control-next-icon"], [1, "carousel-indicators"], ["data-target", "#job-hot-slide", "data-slide-to", "0", 1, "active"], ["data-target", "#job-hot-slide", "data-slide-to", "1"], ["id", "job-seen-slide", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-item", "active"], [1, "row", "list-job"], [1, "col-md-4"], [1, "job-item", "d-flex"], ["href", "", "target", "_blank", 1, "thumb-img", "d-block"], ["src", "https://findwork.ghouse.com.vn/wp-content/uploads/2020/04/vus-logo.png", "alt", "", 1, "img-fluid", "d-block"], [1, "desc-job"], ["href", "", "title", "Nh\xE2n vi\xEAn Sale Online", 1, "position"], ["src", "../../../../assets/img/hot_new.png", "alt", "", 1, "hot-new"], [1, "name-company"], [1, "location"], [1, "info-detail", "d-flex"], [1, "salary"], [1, "date"], [1, "carousel-item"], ["href", "#job-seen-slide", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#job-seen-slide", "data-slide", "next", 1, "carousel-control-next"], ["data-target", "#job-seen-slide", "data-slide-to", "0", 1, "active"], ["data-target", "#job-seen-slide", "data-slide-to", "1"], [3, "value"], [1, "img-title", "d-flex"], ["alt", "", 1, "img-fluid", "d-block", 3, "src"], [1, "position", 3, "title", "click"], [1, "address"], [1, "salary-lock", "d-flex"], [1, "fas", "fa-coins"], ["href", "", 1, "d-block", "mb-3"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "carousel-item", 3, "ngClass"], ["class", "row list-job", 4, "ngFor", "ngForOf"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "thumb-img", "d-block"]],
      template: function B1ListWorkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function B1ListWorkComponent_Template_span_click_4_listener() {
            return ctx.onFilterJob();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " T\xECm ki\u1EBFm n\xE2ng cao ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function B1ListWorkComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.keyword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function B1ListWorkComponent_Template_select_ngModelChange_15_listener($event) {
            return ctx.career = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, B1ListWorkComponent_option_16_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function B1ListWorkComponent_Template_select_ngModelChange_20_listener($event) {
            return ctx.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, B1ListWorkComponent_option_21_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, B1ListWorkComponent_option_26_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function B1ListWorkComponent_Template_select_ngModelChange_30_listener($event) {
            return ctx.salary = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, B1ListWorkComponent_option_31_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function B1ListWorkComponent_Template_select_ngModelChange_35_listener($event) {
            return ctx.typeofwork = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, B1ListWorkComponent_option_36_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function B1ListWorkComponent_Template_select_ngModelChange_40_listener($event) {
            return ctx.sex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, B1ListWorkComponent_option_41_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "252");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " vi\u1EC7c l\xE0m ph\xF9 h\u1EE3p ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, B1ListWorkComponent_div_53_Template, 24, 7, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Tr\u01B0\u1EDBc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Sau");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, B1ListWorkComponent_a_78_Template, 2, 1, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Vi\u1EC7c l\xE0m m\u1EDBi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, B1ListWorkComponent_div_90_Template, 2, 4, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "ol", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "li", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "li", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Vi\u1EC7c l\xE0m \u0111\xE3 xem ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "ol", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "li", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.keyword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.career);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listCareer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listCity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.expYears);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.salary);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.salaries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeofwork);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.typeOfWork);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sex)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sexs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listJob);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listBannerAds);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listJobNew);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".title-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 25px;\n  color: #6c757d;\n  color: 18px;\n}\n.title-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  height: 45px;\n}\n.block-title[_ngcontent-%COMP%]   .title-left[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-weight: 700;\n  font-size: 19px;\n  border-left: 5px solid #22924c;\n  padding: 0 10px;\n  line-height: 29px;\n  margin-bottom: 15px;\n  padding-right: 0;\n  position: relative;\n  margin-bottom: 0px;\n}\n.block-title[_ngcontent-%COMP%]   .title-left[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  background-color: #d7d7d7;\n  bottom: 0;\n  height: 1px;\n  margin-bottom: auto;\n  margin-left: 10px;\n  margin-top: auto;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.block-find-advance[_ngcontent-%COMP%] {\n  margin: 30px 0 15px;\n}\n.block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .select-custom[_ngcontent-%COMP%] {\n  position: relative;\n}\n.block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .select-custom[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  height: 40px;\n}\n.block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .select-custom[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 11px;\n  color: #6c757d;\n}\n.block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%] {\n  padding-right: 0px;\n}\n.block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid #c4c4c4;\n  margin: 0;\n  padding: 10px 15px;\n  border-radius: 4px;\n  width: 65%;\n  background: #22924c;\n  color: #fff;\n  height: 40px;\n}\n.block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n.content[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .title-total[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #9ed6b3a1;\n  border: 1px solid #22924c87;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .title-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff0000;\n  font-weight: 900;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #eee;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n@media (max-width: 575px) {\n  .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .img-title[_ngcontent-%COMP%] {\n  flex-basis: 60%;\n}\n@media (max-width: 575px) {\n  .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .img-title[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%] {\n  width: 85px;\n  height: 60px;\n  margin-right: 10px;\n}\n@media (max-width: 575px) {\n  .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 60px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%]   a.position[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  margin-bottom: 0;\n  color: #444;\n  cursor: pointer;\n}\n@media (max-width: 575px) {\n  .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%]   a.position[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%]   img.hot-new[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 12px;\n  margin-left: 5px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%]   .name-company[_ngcontent-%COMP%] {\n  color: #43a047 !important;\n  font-weight: 400;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 0px;\n}\n@media (max-width: 575px) {\n  .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%]   .name-company[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  margin-top: 5px;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n@media (max-width: 575px) {\n  .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    margin-top: 10px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  color: #484848;\n  font-size: 15px;\n  flex-basis: 100%;\n  margin-top: 5px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #484848;\n  padding-right: 5px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .salary-lock[_ngcontent-%COMP%]   .salary[_ngcontent-%COMP%] {\n  color: #484848;\n  font-size: 15px;\n  flex-basis: 40%;\n}\n@media (max-width: 575px) {\n  .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .salary-lock[_ngcontent-%COMP%]   .salary[_ngcontent-%COMP%] {\n    flex-basis: 60%;\n  }\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .salary-lock[_ngcontent-%COMP%]   .salary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #484848;\n  padding-right: 5px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .salary-lock[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #484848;\n  font-size: 15px;\n  flex-basis: 60%;\n  margin-left: 10px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .salary-lock[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #484848;\n  padding-right: 5px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n@media (max-width: 575px) {\n  .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background-color: white;\n  color: green;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: green;\n  border-color: green;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:focus, .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover {\n  color: green;\n  background-color: #eee;\n  border-color: #ddd;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: white;\n  background-color: green;\n  border: solid 1px green;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background-color: green;\n  border: solid 1px green;\n}\n.job-related[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #eee;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%] {\n  width: 85px;\n  max-height: 93px;\n  margin-right: 10px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 93px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%]   a.position[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  margin-bottom: 0;\n  color: #444;\n  cursor: pointer;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%]   img.hot-new[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 12px;\n  margin-left: 5px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%]   .name-company[_ngcontent-%COMP%] {\n  color: #43a047 !important;\n  font-weight: 400;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 0px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  color: #484848;\n  font-size: 15px;\n  flex-basis: 100%;\n  margin-top: 3px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #484848;\n  padding-right: 5px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .info-detail[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .info-detail[_ngcontent-%COMP%]   .salary[_ngcontent-%COMP%] {\n  color: #484848;\n  font-size: 15px;\n  flex-basis: 60%;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .info-detail[_ngcontent-%COMP%]   .salary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #484848;\n  padding-right: 5px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .info-detail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #484848;\n  font-size: 15px;\n  flex-basis: 60%;\n  margin-left: 10px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .info-detail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #484848;\n  padding-right: 5px;\n}\n.job-related[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\n  bottom: -45px;\n}\n.job-related[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #e3dcdc;\n}\n.job-related[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n@media (max-width: 575px) {\n  .block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%] {\n    padding-right: 15px;\n  }\n  .block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2NvbnRlbnQvYjEtbGlzdC13b3JrL0U6XFxmZS11c2VyLWpvYnMvc3JjXFxhcHBcXGhvbWUtcGFnZVxcY29udGVudFxcYjEtbGlzdC13b3JrXFxiMS1saXN0LXdvcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9jb250ZW50L2IxLWxpc3Qtd29yay9iMS1saXN0LXdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNEUjtBREdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDRFI7QURLSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FESVE7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ0ZaO0FETUE7RUFDSSxtQkFBQTtBQ0hKO0FES1E7RUFDSSxrQkFBQTtBQ0haO0FESVk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNGaEI7QURJWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDRmhCO0FES1E7RUFDSSxrQkFBQTtBQ0haO0FETVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSmhCO0FES2dCO0VBQ0ksa0JBQUE7QUNIcEI7QURTQTtFQUNJLG1CQUFBO0FDTko7QURRUTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDTlo7QURPWTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0xoQjtBRFNZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1BoQjtBRFFnQjtFQUxKO0lBTVEsZUFBQTtFQ0xsQjtBQUNGO0FETWdCO0VBQ0ksdUNBQUE7QUNKcEI7QURNZ0I7RUFDSSxlQUFBO0FDSnBCO0FES29CO0VBRko7SUFHUSxnQkFBQTtFQ0Z0QjtBQUNGO0FESWdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZwQjtBREdvQjtFQUpKO0lBS1EsWUFBQTtJQUNBLFlBQUE7RUNBdEI7QUFDRjtBRENvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ0N4QjtBREdvQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNEeEI7QURFd0I7RUFOSjtJQU9RLGVBQUE7RUNDMUI7QUFDRjtBRENvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDeEI7QURDb0I7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0N4QjtBREF3QjtFQU5KO0lBT1EsZUFBQTtFQ0cxQjtBQUNGO0FEQWdCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0FDRXBCO0FERG9CO0VBSko7SUFLUSxpQkFBQTtJQUNBLGdCQUFBO0VDSXRCO0FBQ0Y7QURIb0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0t4QjtBREp3QjtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ001QjtBREZ3QjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0k1QjtBREg0QjtFQUpKO0lBS1EsZUFBQTtFQ005QjtBQUNGO0FETDRCO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDT2hDO0FESndCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNNNUI7QURMNEI7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNPaEM7QUREWTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7QUNHaEI7QURBUTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRVo7QUREWTtFQUpKO0lBS1EsbUJBQUE7RUNJZDtBQUNGO0FERlE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUNJWjtBRERRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtBQ0daO0FEQVE7Ozs7RUFJSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0VaO0FEQ1E7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQ0NaO0FERVE7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0FDQVo7QURPQTtFQUNJLG1CQUFBO0FDTEo7QURNSTtFQUNJLGdCQUFBO0FDSlI7QURLUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNIWjtBRElZO0VBQ0ksdUNBQUE7QUNGaEI7QURJWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRmhCO0FER2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDRHBCO0FESVk7RUFDSSxtQkFBQTtVQUFBLFlBQUE7QUNGaEI7QURHZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRHBCO0FER2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RwQjtBREdnQjtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRHBCO0FESVk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZoQjtBREdnQjtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0RwQjtBRElZO0VBQ0ksZ0JBQUE7QUNGaEI7QURHZ0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNEcEI7QURFb0I7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNBeEI7QURHZ0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0RwQjtBREVvQjtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0F4QjtBRE1JO0VBQ0ksYUFBQTtBQ0pSO0FES1E7RUFDSSx5QkFBQTtBQ0haO0FES1E7RUFDSSxzQkFBQTtBQ0haO0FEUUE7RUFHWTtJQUNJLG1CQUFBO0VDUGQ7RURVYztJQUNJLFdBQUE7RUNSbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9jb250ZW50L2IxLWxpc3Qtd29yay9iMS1saXN0LXdvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItbWFpbjogIzIyOTI0YztcclxuLnRpdGxlLXNlYXJjaCB7XHJcbiAgICBpIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgIGxlZnQ6IDI1cHg7XHJcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgY29sb3I6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgIH1cclxufVxyXG4uYmxvY2stdGl0bGUge1xyXG4gICAgLnRpdGxlLWxlZnQge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkY29sb3ItbWFpbjtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcblxyXG4gICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDdkNztcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJsb2NrLWZpbmQtYWR2YW5jZSB7XHJcbiAgICBtYXJnaW46IDMwcHggMCAxNXB4O1xyXG4gICAgLmZpbmQtYWR2YW5jZSB7XHJcbiAgICAgICAgLnNlbGVjdC1jdXN0b20ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbC1tZC0yIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjI5MjRjO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIC53cC1pbm5lci1jb250ZW50IHtcclxuICAgICAgICAudGl0bGUtdG90YWwge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOWVkNmIzYTE7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMjkyNGM4NztcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpc3Qtam9iIHtcclxuICAgICAgICAgICAgLmpvYi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWctdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGh1bWItaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGVzYy1qb2Ige1xyXG4gICAgICAgICAgICAgICAgICAgIGEucG9zaXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGltZy5ob3QtbmV3IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUtY29tcGFueSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDNhMDQ3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFkZHJlc3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubG9jYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ4NDg0ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNhbGFyeS1sb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNhbGFyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ4NDg0ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ4NDg0ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5qb2ItaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdpbmF0aW9uID4gbGkgPiBhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYWdpbmF0aW9uID4gbGkgPiBhOmZvY3VzLFxyXG4gICAgICAgIC5wYWdpbmF0aW9uID4gbGkgPiBhOmhvdmVyLFxyXG4gICAgICAgIC5wYWdpbmF0aW9uID4gbGkgPiBzcGFuOmZvY3VzLFxyXG4gICAgICAgIC5wYWdpbmF0aW9uID4gbGkgPiBzcGFuOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNkZGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBhIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JlZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBhOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IGdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zaWRlYmFyIHtcclxuICAgIH1cclxufVxyXG4vLyBqb2ItcmVsYXRlZFxyXG4uam9iLXJlbGF0ZWQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIC5saXN0LWpvYiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAuam9iLWl0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aHVtYi1pbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA5M3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzYy1qb2Ige1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgYS5wb3NpdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWcuaG90LW5ldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmFtZS1jb21wYW55IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzYTA0NyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvY2F0aW9uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5mby1kZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIC5zYWxhcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICAgIGJvdHRvbTogLTQ1cHg7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkY2RjO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gcmVzcG9uc2l2ZVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC5ibG9jay1maW5kLWFkdmFuY2Uge1xyXG4gICAgICAgIC5maW5kLWFkdmFuY2Uge1xyXG4gICAgICAgICAgICAuY29sLW1kLTIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi50aXRsZS1zZWFyY2ggaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAyNXB4O1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgY29sb3I6IDE4cHg7XG59XG4udGl0bGUtc2VhcmNoIGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5ibG9jay10aXRsZSAudGl0bGUtbGVmdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMjI5MjRjO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5ibG9jay10aXRsZSAudGl0bGUtbGVmdCAubGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2Q3ZDc7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ibG9jay1maW5kLWFkdmFuY2Uge1xuICBtYXJnaW46IDMwcHggMCAxNXB4O1xufVxuLmJsb2NrLWZpbmQtYWR2YW5jZSAuZmluZC1hZHZhbmNlIC5zZWxlY3QtY3VzdG9tIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJsb2NrLWZpbmQtYWR2YW5jZSAuZmluZC1hZHZhbmNlIC5zZWxlY3QtY3VzdG9tIHNlbGVjdCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmJsb2NrLWZpbmQtYWR2YW5jZSAuZmluZC1hZHZhbmNlIC5zZWxlY3QtY3VzdG9tIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogMTFweDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG4uYmxvY2stZmluZC1hZHZhbmNlIC5maW5kLWFkdmFuY2UgLmNvbC1tZC0yIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLmJsb2NrLWZpbmQtYWR2YW5jZSAuZmluZC1hZHZhbmNlIC5idG4tc2VhcmNoIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDY1JTtcbiAgYmFja2dyb3VuZDogIzIyOTI0YztcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNDBweDtcbn1cbi5ibG9jay1maW5kLWFkdmFuY2UgLmZpbmQtYWR2YW5jZSAuYnRuLXNlYXJjaCBidXR0b24gaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLnRpdGxlLXRvdGFsIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzllZDZiM2ExO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjI5MjRjODc7XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAudGl0bGUtdG90YWwgc3BhbiB7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cbi5jb250ZW50IC53cC1pbm5lci1jb250ZW50IC5saXN0LWpvYiAuam9iLWl0ZW06aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIC5pbWctdGl0bGUge1xuICBmbGV4LWJhc2lzOiA2MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSAuaW1nLXRpdGxlIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICB9XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIC50aHVtYi1pbWcge1xuICB3aWR0aDogODVweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSAudGh1bWItaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIC50aHVtYi1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5jb250ZW50IC53cC1pbm5lci1jb250ZW50IC5saXN0LWpvYiAuam9iLWl0ZW0gLmRlc2Mtam9iIGEucG9zaXRpb24ge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjNDQ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSAuZGVzYy1qb2IgYS5wb3NpdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIC5kZXNjLWpvYiBpbWcuaG90LW5ldyB7XG4gIHdpZHRoOiAzMXB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIC5kZXNjLWpvYiAubmFtZS1jb21wYW55IHtcbiAgY29sb3I6ICM0M2EwNDcgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIC5kZXNjLWpvYiAubmFtZS1jb21wYW55IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cbi5jb250ZW50IC53cC1pbm5lci1jb250ZW50IC5saXN0LWpvYiAuam9iLWl0ZW0gLmFkZHJlc3Mge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSAuYWRkcmVzcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSAuYWRkcmVzcyAubG9jYXRpb24ge1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIC5hZGRyZXNzIC5sb2NhdGlvbiBpIHtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5jb250ZW50IC53cC1pbm5lci1jb250ZW50IC5saXN0LWpvYiAuam9iLWl0ZW0gLmFkZHJlc3MgLnNhbGFyeS1sb2NrIC5zYWxhcnkge1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmbGV4LWJhc2lzOiA0MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSAuYWRkcmVzcyAuc2FsYXJ5LWxvY2sgLnNhbGFyeSB7XG4gICAgZmxleC1iYXNpczogNjAlO1xuICB9XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIC5hZGRyZXNzIC5zYWxhcnktbG9jayAuc2FsYXJ5IGkge1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSAuYWRkcmVzcyAuc2FsYXJ5LWxvY2sgLmRhdGUge1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmbGV4LWJhc2lzOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSAuYWRkcmVzcyAuc2FsYXJ5LWxvY2sgLmRhdGUgaSB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLnBhZ2luYXRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5jb250ZW50IC53cC1pbm5lci1jb250ZW50IC5wYWdpbmF0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAucGFnaW5hdGlvbiA+IGxpID4gYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogZ3JlZW47XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAucGFnaW5hdGlvbiA+IGxpID4gYTpmb2N1cyxcbi5jb250ZW50IC53cC1pbm5lci1jb250ZW50IC5wYWdpbmF0aW9uID4gbGkgPiBhOmhvdmVyLFxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLnBhZ2luYXRpb24gPiBsaSA+IHNwYW46Zm9jdXMsXG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAucGFnaW5hdGlvbiA+IGxpID4gc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiBncmVlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGJvcmRlcjogc29saWQgMXB4IGdyZWVuO1xufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXI6IHNvbGlkIDFweCBncmVlbjtcbn1cbi5qb2ItcmVsYXRlZCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uam9iLXJlbGF0ZWQgLmxpc3Qtam9iIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmpvYi1yZWxhdGVkIC5saXN0LWpvYiAuam9iLWl0ZW06aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uam9iLXJlbGF0ZWQgLmxpc3Qtam9iIC5qb2ItaXRlbSAudGh1bWItaW1nIHtcbiAgd2lkdGg6IDg1cHg7XG4gIG1heC1oZWlnaHQ6IDkzcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC50aHVtYi1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTNweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5kZXNjLWpvYiB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5kZXNjLWpvYiBhLnBvc2l0aW9uIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogIzQ0NDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmpvYi1yZWxhdGVkIC5saXN0LWpvYiAuam9iLWl0ZW0gLmRlc2Mtam9iIGltZy5ob3QtbmV3IHtcbiAgd2lkdGg6IDMxcHg7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5kZXNjLWpvYiAubmFtZS1jb21wYW55IHtcbiAgY29sb3I6ICM0M2EwNDcgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5sb2NhdGlvbiB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5sb2NhdGlvbiBpIHtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5pbmZvLWRldGFpbCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4uam9iLXJlbGF0ZWQgLmxpc3Qtam9iIC5qb2ItaXRlbSAuaW5mby1kZXRhaWwgLnNhbGFyeSB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZsZXgtYmFzaXM6IDYwJTtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5pbmZvLWRldGFpbCAuc2FsYXJ5IGkge1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLmpvYi1yZWxhdGVkIC5saXN0LWpvYiAuam9iLWl0ZW0gLmluZm8tZGV0YWlsIC5kYXRlIHtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZmxleC1iYXNpczogNjAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5pbmZvLWRldGFpbCAuZGF0ZSBpIHtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5qb2ItcmVsYXRlZCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIGJvdHRvbTogLTQ1cHg7XG59XG4uam9iLXJlbGF0ZWQgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkY2RjO1xufVxuLmpvYi1yZWxhdGVkIC5jYXJvdXNlbC1pbmRpY2F0b3JzIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmJsb2NrLWZpbmQtYWR2YW5jZSAuZmluZC1hZHZhbmNlIC5jb2wtbWQtMiB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxuICAuYmxvY2stZmluZC1hZHZhbmNlIC5maW5kLWFkdmFuY2UgLmJ0bi1zZWFyY2ggYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](B1ListWorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-b1-list-work',
          templateUrl: './b1-list-work.component.html',
          styleUrls: ['./b1-list-work.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_common_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-page/content/b1-list-work/b1-list-work.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/home-page/content/b1-list-work/b1-list-work.module.ts ***!
    \***********************************************************************/

  /*! exports provided: B1ListWorkModule */

  /***/
  function srcAppHomePageContentB1ListWorkB1ListWorkModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "B1ListWorkModule", function () {
      return B1ListWorkModule;
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


    var _b1_list_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./b1-list-work.component */
    "./src/app/home-page/content/b1-list-work/b1-list-work.component.ts");

    var B1ListWorkModule = function B1ListWorkModule() {
      _classCallCheck(this, B1ListWorkModule);
    };

    B1ListWorkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: B1ListWorkModule
    });
    B1ListWorkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function B1ListWorkModule_Factory(t) {
        return new (t || B1ListWorkModule)();
      },
      imports: [[_nguniversal_common__WEBPACK_IMPORTED_MODULE_2__["TransferHttpCacheModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: _b1_list_work_component__WEBPACK_IMPORTED_MODULE_5__["B1ListWorkComponent"],
        children: []
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](B1ListWorkModule, {
        declarations: [_b1_list_work_component__WEBPACK_IMPORTED_MODULE_5__["B1ListWorkComponent"]],
        imports: [_nguniversal_common__WEBPACK_IMPORTED_MODULE_2__["TransferHttpCacheModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](B1ListWorkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_b1_list_work_component__WEBPACK_IMPORTED_MODULE_5__["B1ListWorkComponent"]],
          imports: [_nguniversal_common__WEBPACK_IMPORTED_MODULE_2__["TransferHttpCacheModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
            path: '',
            component: _b1_list_work_component__WEBPACK_IMPORTED_MODULE_5__["B1ListWorkComponent"],
            children: []
          }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=b1-list-work-b1-list-work-module-es5.js.map