function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["b2-detail-work-b2-detail-work-module"], {
  /***/
  "./src/app/home-page/content/b2-detail-work/b2-detail-work.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/home-page/content/b2-detail-work/b2-detail-work.component.ts ***!
    \******************************************************************************/

  /*! exports provided: B2DetailWorkComponent */

  /***/
  function srcAppHomePageContentB2DetailWorkB2DetailWorkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "B2DetailWorkComponent", function () {
      return B2DetailWorkComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var B2DetailWorkComponent = /*#__PURE__*/function () {
      function B2DetailWorkComponent(api, router, activatedRoute) {
        _classCallCheck(this, B2DetailWorkComponent);

        this.api = api;
        this.router = router;
        this.activatedRoute = activatedRoute;
        /** for table */

        this.subscription = [];
        this.job = [];
        this.totalJobOfCompany = [];
      }

      _createClass(B2DetailWorkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.params.subscribe(function (params) {
            _this.idjob = params['idjob'];
          });
          this.onLoadDataJob();
          this.onLoadTotalJobOfCompany();
        }
        /**
         * on Load Data Job
         */

      }, {
        key: "onLoadDataJob",
        value: function onLoadDataJob() {
          var _this2 = this;

          var param = {
            "id": this.idjob
          };
          this.subscription.push(this.api.excuteAllByWhat(param, '15').subscribe(function (data) {
            if (data.length > 0) {
              _this2.job = data[0];
              _this2.job.salary = _this2.job.salary / 1000000;
              console.log(_this2.job);
            }
          }));
        }
        /**
         * on LoadTotal Job Of Company
         */

      }, {
        key: "onLoadTotalJobOfCompany",
        value: function onLoadTotalJobOfCompany() {
          var _this3 = this;

          var param = {
            "id": this.idjob
          };
          this.subscription.push(this.api.excuteAllByWhat(param, '16').subscribe(function (data) {
            if (data.length > 0) {
              _this3.totalJobOfCompany = data[0]['totaljob'];
            }
          }));
        }
        /**
         * Get Name Gender By Gender Number
         * @param genderNumber
         */

      }, {
        key: "convertSexNumberToSexName",
        value: function convertSexNumberToSexName(genderNumber) {
          switch (genderNumber) {
            case '0':
              {
                return 'Nam';
              }

            case '1':
              {
                return 'Nữ';
              }

            case '3':
              {
                return 'Không yêu cầu';
              }
          }
        }
        /**
         * convert Type Of Work Number To Type Of Work Name
         * @param typeOfWorkNumber
         */

      }, {
        key: "convertTOWNumberToTOWName",
        value: function convertTOWNumberToTOWName(typeOfWorkNumber) {
          switch (typeOfWorkNumber) {
            case '1':
              {
                return 'Toàn thời gian cố định';
              }

            case '2':
              {
                return 'Bán thời gian cố định';
              }

            case '3':
              {
                return 'Toàn thời gian tạm thời';
              }

            case '4':
              {
                return 'Bán thòi gian tạm thời';
              }

            case '5':
              {
                return 'Theo hợp đồng / tư vấn';
              }

            case '6':
              {
                return 'Thực tập';
              }

            case '7':
              {
                return 'Khác';
              }
          }
        }
        /**
         * convertExpYeasNumberToExpYeasName
         * @param expYears
         */

      }, {
        key: "convertExpYeasNumberToExpYeasName",
        value: function convertExpYeasNumberToExpYeasName(expYears) {
          switch (expYears) {
            case '1':
              {
                return 'Chưa có kinh nghiệm';
              }

            case '2':
              {
                return 'Dưới 1 năm';
              }

            case '3':
              {
                return '1 năm';
              }

            case '4':
              {
                return '2 năm';
              }

            case '5':
              {
                return '3 năm';
              }

            case '6':
              {
                return '4 năm';
              }

            case '7':
              {
                return '5 năm';
              }

            case '8':
              {
                return 'Trên 5 năm';
              }
          }
        }
      }]);

      return B2DetailWorkComponent;
    }();

    B2DetailWorkComponent.ɵfac = function B2DetailWorkComponent_Factory(t) {
      return new (t || B2DetailWorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    B2DetailWorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: B2DetailWorkComponent,
      selectors: [["app-b2-detail-work"]],
      decls: 224,
      vars: 36,
      consts: [[1, "wp-inner"], [1, "block-breadcrumb"], [1, "container"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "header-detail"], [1, "detail-inner"], [1, "row"], [1, "col-md-9", "detail-left"], [1, "col-md-3", "logo"], ["href", "", 1, "thumb-logo", "d-block"], [1, "img-fluid", 3, "src", "alt"], [1, "col-md-9", "info-job"], [1, "title"], ["href", ""], [1, "far", "fa-building"], [1, "desc"], ["type", "button", 1, "btn", "btn-primary", "btn-sm"], [1, "salary"], [1, "post-at"], [1, "block-btn"], ["type", "button", 1, "btn", "btn-outline-secondary"], [1, "far", "fa-heart"], [1, "fas", "fa-id-badge"], [1, "col-md-3"], [1, "sidebar"], ["type", "button", 1, "btn", "btn-lg"], [1, "fas", "fa-file-signature"], [1, "info"], [1, "body-detail"], [1, "row", "body-detail-inner"], [1, "col-md-8"], [1, "body-detail-content"], [1, "block-title"], [1, "title-left"], [1, "text", 3, "click"], [1, "line"], [1, "row", "info-fast"], [1, "col-md-6"], [1, "fas", "fa-briefcase"], [1, "fas", "fa-laptop-house"], [1, "fas", "fa-venus-mars"], [1, "far", "fa-clock"], [1, "far", "fa-id-card"], [1, "fas", "fa-users"], [1, "col-12"], [1, "fas", "fa-globe"], [1, "block-desc"], [1, "text"], [1, "row", "desc-job", "pb-2"], [1, "block-require"], [1, "row", "require-job"], [1, "row", "desc-job"], [1, "info-contact"], [1, "row", "mt-3"], [1, "col-md-3", "col-6", "title-info"], [1, "col-md-9", "col-6"], [1, "col-md-12", "text-center"], [1, "far", "fa-comment-dots"], [1, "col-md-4", "body-detail-sidebar"], [1, "content-company-info"], [1, "thumb-logo"], ["alt", "", 1, "img-fluid", 3, "src"], ["href", "", 1, "name", "d-block"], [1, "address"], [1, "fas", "fa-map-marker-alt"], [1, "block-btn", "text-center", "mt-2", "mb-3"], ["href", "", "title", "Xem th\xEAm v\u1EC1 c\xF4ng ty abc xyz", 1, "d-inline-block"], [1, "far", "fa-share-square"], [1, "row", "info-more"], [1, "col-md-2"], [1, "col-md-4", "md-offset-1", "col-5", "total-job", "mr-md-2"], [1, "number"], [1, "col-md-4", "col-5", "confirm"], ["src", "https://mywork.com.vn/_nuxt/img/taikhoanxacthuc.14305b0.png", "alt", ""], [1, "map-company"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.157911381231!2d108.22072771416902!3d16.005293145401115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421a10ed15ea33%3A0x8dad050a02aae05d!2zMTgzIFF1w6FjaCBUaOG7iyBUcmFuZywgSG_DoCBYdcOibiwgQ-G6qW0gTOG7hywgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1589760857899!5m2!1sen!2s", "width", "100%", "height", "450", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 2, "border", "0"]],
      template: function B2DetailWorkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Trang ch\u1EE7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tuy\u1EC3n d\u1EE5ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0110\u1ECBa \u0111i\u1EC3m tuy\u1EC3n d\u1EE5ng: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "M\u1EE9c l\u01B0\u01A1ng: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "H\u1EA1n n\u1ED9p h\u1ED3 s\u01A1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "L\u01B0u c\xF4ng vi\u1EC7c");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u1EE8ng tuy\u1EC3n ngay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Tin x\xE1c th\u1EF1c");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "L\u01B0\u1EE3t xem: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Ng\xE0y \u0111\u0103ng: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function B2DetailWorkComponent_Template_span_click_72_listener() {
            return ctx.onLoadDataJob();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Th\xF4ng tin tuy\u1EC3n d\u1EE5ng nhanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Ch\u1EE9c v\u1EE5: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Nh\xE2n vi\xEAn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Lo\u1EA1i h\xECnh c\xF4ng vi\u1EC7c: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Y\xEAu c\u1EA7u gi\u1EDBi t\xEDnh: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Kinh nghi\u1EC7m: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Y\xEAu c\u1EA7u b\u1EB1ng c\u1EA5p: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Trung h\u1ECDc tr\u1EDF l\xEAn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "S\u1ED1 l\u01B0\u1EE3ng c\u1EA7n tuy\u1EC3n: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "10 \u1EE9ng vi\xEAn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Ng\xE0nh ngh\u1EC1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h3", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " M\xF4 t\u1EA3 c\xF4ng vi\u1EC7c ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h3", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Y\xEAu c\u1EA7u c\xF4ng vi\u1EC7c ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h3", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Quy\u1EC1n l\u1EE3i \u0111\u01B0\u1EE3c h\u01B0\u1EDFng ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h3", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " H\u1ED3 s\u01A1 bao g\u1ED3m ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h3", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Th\xF4ng tin tuy\u1EC3n d\u1EE5ng nhanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Ng\u01B0\u1EDDi li\xEAn h\u1EC7:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\u0110\u1ECBa ch\u1EC9 c\xF4ng ty:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "H\u1EA1n n\u1ED9p h\u1ED3 s\u01A1:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](178, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "G\u1EEDi tin nh\u1EAFn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\u1EE8ng tuy\u1EC3n ngay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\u0110\u1ECBa ch\u1EC9:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Quy m\xF4 nh\xE2n s\u1EF1:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "G\u1EEDi tin nh\u1EAFn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "i", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " Vi\u1EC7c l\xE0m ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "iframe", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.position);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.job.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.job.logo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.position);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.companyname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.addressworkmain);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.job.salary, " tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](42, 27, ctx.job.deadlineapply, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.numberview);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](64, 30, ctx.job.postdate, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.convertTOWNumberToTOWName(ctx.job.typeofwork));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.convertSexNumberToSexName(ctx.job.sex));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.convertExpYeasNumberToExpYeasName(ctx.job.exprience));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.careermain);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.job.descriptionwork, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.job.requirementwork, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.job.benefit, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.job.requirementdocument, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.personalcontact);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.personalemail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.addresscompany);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](178, 33, ctx.job.deadlineapply, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.job.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.companyname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.addresscompany);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.personalscale);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalJobOfCompany, " ");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: [".wp-inner[_ngcontent-%COMP%] {\n  background: #eff3f6;\n}\n\n.block-breadcrumb[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  background: none;\n  margin-bottom: 0px;\n}\n\n.block-breadcrumb[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #22924c;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  margin-bottom: 20px;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding-right: 0px;\n}\n\n@media (max-width: 575px) {\n  .header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    padding-right: 15px;\n  }\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .thumb-logo[_ngcontent-%COMP%] {\n  width: 166px;\n  height: 166px;\n  margin-bottom: 5px;\n  padding: 2px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  border: 1px solid #eee;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 5px;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .thumb-logo[_ngcontent-%COMP%]:hover {\n  border: 1px solid #6be197;\n  opacity: 0.6;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .thumb-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n@media (max-width: 575px) {\n  .header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .thumb-logo[_ngcontent-%COMP%] {\n    margin: 0 auto 10px;\n  }\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n\n@media (max-width: 575px) {\n  .header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%] {\n    padding-left: 15px;\n  }\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n@media (max-width: 575px) {\n  .header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 0px;\n  text-transform: capitalize;\n  cursor: pointer;\n}\n\n@media (max-width: 575px) {\n  .header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n    text-align: center;\n    margin-bottom: 7px;\n  }\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #22924c;\n  display: block;\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n@media (max-width: 575px) {\n  .header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 5px;\n  font-size: 14px;\n  color: #353535;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: rgba(18, 167, 0, 0.1);\n  border-color: rgba(146, 237, 0, 0.2);\n  color: #22924c;\n  height: 20px;\n  line-height: 13px;\n  margin-right: 4px;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .salary[_ngcontent-%COMP%] {\n  color: #fc205c;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .post-at[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #353535;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .block-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  background: #fff;\n  border: 1px solid #bfcbd9;\n  color: #1f2d3d;\n  margin-right: 10px;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .block-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child:hover {\n  border: 1px solid #22924c;\n  color: #22924c;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .block-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child   i[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .block-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  background: #ff9a00;\n  border: 1px solid #e59212;\n  color: #ffffff;\n  margin-right: 10px;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .block-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child:hover {\n  border: 1px solid #ff9a00;\n  color: #ff9a00;\n  background: #ffffff;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%]   .info-job[_ngcontent-%COMP%]   .block-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child   i[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #e93e3e;\n  color: #fff;\n  margin-bottom: 20px;\n}\n\n@media (max-width: 575px) {\n  .header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    height: 40px;\n    line-height: 25px;\n  }\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n\n.header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n@media (max-width: 575px) {\n  .header-detail[_ngcontent-%COMP%]   .detail-inner[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n}\n\n.block-title[_ngcontent-%COMP%]   .title-left[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-weight: 700;\n  font-size: 19px;\n  border-left: 5px solid #22924c;\n  padding: 0 10px;\n  line-height: 29px;\n  margin-bottom: 15px;\n  padding-right: 0;\n  position: relative;\n  margin-bottom: 0px;\n}\n\n.block-title[_ngcontent-%COMP%]   .title-left[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  background-color: #d7d7d7;\n  bottom: 0;\n  height: 1px;\n  margin-bottom: auto;\n  margin-left: 10px;\n  margin-top: auto;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-content[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  margin-bottom: 20px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-content[_ngcontent-%COMP%]   .info-fast[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  border-bottom: dotted 1px #ebebeb;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-content[_ngcontent-%COMP%]   .info-fast[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n  color: #1f1f1f;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-content[_ngcontent-%COMP%]   .info-fast[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  color: #22924c;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-content[_ngcontent-%COMP%]   .info-fast[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1f1f1f;\n  font-weight: 400;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-content[_ngcontent-%COMP%]   .info-fast[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 24px;\n  padding: 3px 8px;\n  background: #f0f0f0;\n  color: #267d79;\n  margin-right: 7px;\n  line-height: 18px;\n  border-radius: 2px;\n  text-decoration: none !important;\n  border: 1px solid #e6e6e6;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-content[_ngcontent-%COMP%]   .block-desc[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-content[_ngcontent-%COMP%]   .block-desc[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .info-contact[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  padding-bottom: 20px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  margin-bottom: 20px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .info-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 13px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .info-contact[_ngcontent-%COMP%]   .title-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  line-height: 24px;\n  font-size: 15px;\n  margin-bottom: 10px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .info-contact[_ngcontent-%COMP%]   .block-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  background: #fff;\n  border: 1px solid #bfcbd9;\n  color: #1f2d3d;\n  margin-right: 10px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .info-contact[_ngcontent-%COMP%]   .block-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child:hover {\n  border: 1px solid #22924c;\n  color: #22924c;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .info-contact[_ngcontent-%COMP%]   .block-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child   i[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .info-contact[_ngcontent-%COMP%]   .block-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  background: #ff9a00;\n  border: 1px solid #e59212;\n  color: #ffffff;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .info-contact[_ngcontent-%COMP%]   .block-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child:hover {\n  border: 1px solid #ff9a00;\n  color: #ff9a00;\n  background: #ffffff;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .info-contact[_ngcontent-%COMP%]   .block-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child   i[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 3px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  margin-bottom: 20px;\n  padding: 0 10px;\n  padding-bottom: 30px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .thumb-logo[_ngcontent-%COMP%] {\n  width: 256px;\n  min-height: 180px;\n  margin-bottom: 5px;\n  margin: auto;\n  text-align: center;\n  padding-top: 40px;\n  padding-bottom: 20px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .thumb-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: content;\n     object-fit: content;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  line-height: 30px;\n  font-size: 17px;\n  text-align: center;\n  color: #22924c;\n  margin-bottom: 10px;\n}\n\n@media (max-width: 575px) {\n  .body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  padding: 4px 0;\n  cursor: pointer;\n  text-align: center;\n  font-size: 15px;\n  margin-bottom: 0px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  color: #403b3b;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  font-weight: bold;\n  color: #353535;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .block-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  background: #fff;\n  border: 1px solid #bfcbd9;\n  color: #1f2d3d;\n  margin-right: 10px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .block-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child:hover {\n  border: 1px solid #22924c;\n  color: #22924c;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .block-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child   i[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .info-more[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n@media (max-width: 575px) {\n  .body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .info-more[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .info-more[_ngcontent-%COMP%]   .total-job[_ngcontent-%COMP%] {\n  border: 1px solid #22924c;\n  border-radius: 3px;\n  padding: 0;\n}\n\n@media (max-width: 575px) {\n  .body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .info-more[_ngcontent-%COMP%]   .total-job[_ngcontent-%COMP%] {\n    margin-right: 45px;\n  }\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .info-more[_ngcontent-%COMP%]   .total-job[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 10px 20px;\n  background: #22924c;\n  color: #fff;\n  font-size: 18px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .info-more[_ngcontent-%COMP%]   .total-job[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  color: #22924c;\n  font-size: 40px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .content-company-info[_ngcontent-%COMP%]   .info-more[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%] {\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  padding-top: 15px;\n}\n\n.body-detail[_ngcontent-%COMP%]   .body-detail-inner[_ngcontent-%COMP%]   .body-detail-sidebar[_ngcontent-%COMP%]   .map-company[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 3px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  margin-bottom: 20px;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2NvbnRlbnQvYjItZGV0YWlsLXdvcmsvRTpcXGZlLXVzZXItam9icy9zcmNcXGFwcFxcaG9tZS1wYWdlXFxjb250ZW50XFxiMi1kZXRhaWwtd29ya1xcYjItZGV0YWlsLXdvcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9jb250ZW50L2IyLWRldGFpbC13b3JrL2IyLWRldGFpbC13b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7QUNBSjs7QURHSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURFWTtFQUNJLGNBVkg7QUNVYjs7QURNSTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLHlDQUFBO0VBQ0EsbUJBQUE7QUNIUjs7QURJUTtFQUNJLGdCQUFBO0FDRlo7O0FER1k7RUFDSSxrQkFBQTtBQ0RoQjs7QURFZ0I7RUFGSjtJQUdRLG1CQUFBO0VDQ2xCO0FBQ0Y7O0FEQWdCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtFQUVBLG1CQUFBO0VBQ0Esd0JBQUE7RUFFQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNFcEI7O0FERG9CO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDR3hCOztBRERvQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDR3hCOztBRERvQjtFQTFCSjtJQTJCUSxtQkFBQTtFQ0l0QjtBQUNGOztBRERZO0VBQ0ksaUJBQUE7QUNHaEI7O0FERmdCO0VBRko7SUFHUSxrQkFBQTtFQ0tsQjtBQUNGOztBREpnQjtFQUNJLG1CQUFBO0FDTXBCOztBRExvQjtFQUZKO0lBR1Esa0JBQUE7RUNRdEI7QUFDRjs7QURQb0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ1N4Qjs7QURSd0I7RUFOSjtJQU9RLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDVzFCO0FBQ0Y7O0FEVG9CO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ1d4Qjs7QURWd0I7RUFOSjtJQU9RLGVBQUE7RUNhMUI7QUFDRjs7QURad0I7RUFDSSxtQkFBQTtBQ2M1Qjs7QURWZ0I7RUFDSSxtQkFBQTtBQ1lwQjs7QURYb0I7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNheEI7O0FEWndCO0VBQ0ksdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ2M1Qjs7QURad0I7RUFDSSxjQUFBO0FDYzVCOztBRFp3QjtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ2M1Qjs7QURUb0I7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDV3hCOztBRFZ3QjtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ1k1Qjs7QURWd0I7RUFDSSxrQkFBQTtBQ1k1Qjs7QURUb0I7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDV3hCOztBRFZ3QjtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDWTVCOztBRFZ3QjtFQUNJLGtCQUFBO0FDWTVCOztBRE5RO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ1FaOztBRFBZO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNTaEI7O0FEUmdCO0VBSko7SUFLUSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQ1dsQjtBQUNGOztBRFZnQjtFQUNJLGtCQUFBO0FDWXBCOztBRFJnQjtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNVcEI7O0FEVG9CO0VBQ0ksZ0JBQUE7QUNXeEI7O0FETlE7RUFsS0o7SUFtS1EsZUFBQTtFQ1NWO0FBQ0Y7O0FETEk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNRUjs7QUROUTtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDUVo7O0FERlE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0FDS1o7O0FESlk7RUFDSSxnQkFBQTtFQUNBLGlDQUFBO0FDTWhCOztBRExnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNPcEI7O0FETm9CO0VBQ0ksa0JBQUE7RUFDQSxjQWxPWDtBQzBPYjs7QUROb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUXhCOztBRE5vQjtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUNReEI7O0FESlk7RUFDSSxnQkFBQTtBQ01oQjs7QURMZ0I7RUFDSSxpQkFBQTtBQ09wQjs7QURIUTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtBQ0taOztBREpZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNNaEI7O0FESGdCO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0twQjs7QUREZ0I7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDR3BCOztBREZvQjtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0l4Qjs7QURGb0I7RUFDSSxrQkFBQTtBQ0l4Qjs7QUREZ0I7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0dwQjs7QURGb0I7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0l4Qjs7QURGb0I7RUFDSSxrQkFBQTtBQ0l4Qjs7QURFWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDQWhCOztBRENnQjtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0NwQjs7QURDb0I7RUFDSSxzQkFBQTtLQUFBLG1CQUFBO0FDQ3hCOztBREVnQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDQXBCOztBRENvQjtFQU5KO0lBT1Esa0JBQUE7RUNFdEI7QUFDRjs7QURBZ0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRXBCOztBRERvQjtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0d4Qjs7QUREb0I7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0d4Qjs7QUREb0I7RUFDSSxlQUFBO0FDR3hCOztBRENvQjtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDeEI7O0FEQXdCO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDRTVCOztBREF3QjtFQUNJLGtCQUFBO0FDRTVCOztBREVnQjtFQUNJLGtCQUFBO0FDQXBCOztBRENvQjtFQUZKO0lBR1EsWUFBQTtFQ0V0QjtBQUNGOztBRERvQjtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDR3hCOztBREZ3QjtFQUpKO0lBS1Esa0JBQUE7RUNLMUI7QUFDRjs7QURKd0I7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkE5WGY7RUErWGUsV0FBQTtFQUNBLGVBQUE7QUNNNUI7O0FESndCO0VBQ0ksY0FuWWY7RUFvWWUsZUFBQTtBQ001Qjs7QURIb0I7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDS3hCOztBRERZO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDR2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2NvbnRlbnQvYjItZGV0YWlsLXdvcmsvYjItZGV0YWlsLXdvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItbWFpbjogIzIyOTI0YztcclxuLndwLWlubmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmYzZjY7XHJcbn1cclxuLmJsb2NrLWJyZWFkY3J1bWIge1xyXG4gICAgLmJyZWFkY3J1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIC5icmVhZGNydW1iLWl0ZW0ge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbWFpbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uaGVhZGVyLWRldGFpbCB7XHJcbiAgICAuZGV0YWlsLWlubmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC5kZXRhaWwtbGVmdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGh1bWItbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTY2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2YmUxOTc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbmZvLWpvYiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyOTI0YztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kZXNjIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzNTM1MzU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4LCAxNjcsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMTQ2LCAyMzcsIDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyOTI0YztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNhbGFyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZjMjA1YztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucG9zdC1hdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzNTM1MzU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYmxvY2stYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b246Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZjYmQ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFmMmQzZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMjkyNGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyOTI0YztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBidXR0b246bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjlhMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNTkyMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmOWEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY5YTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOTNlM2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJsb2NrLXRpdGxlIHtcclxuICAgIC50aXRsZS1sZWZ0IHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGNvbG9yLW1haW47XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cclxuICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2Q3ZDc7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5ib2R5LWRldGFpbCB7XHJcbiAgICAuYm9keS1kZXRhaWwtaW5uZXIge1xyXG4gICAgICAgIC5ib2R5LWRldGFpbC1jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAuaW5mby1mYXN0IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBkb3R0ZWQgMXB4ICNlYmViZWI7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFmMWYxZjtcclxuICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLW1haW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMWYxZjFmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjY3ZDc5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ibG9jay1kZXNjIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAuZGVzYy1qb2Ige1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmZvLWNvbnRhY3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZS1pbmZvIHtcclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJsb2NrLWJ0biB7XHJcbiAgICAgICAgICAgICAgICBidXR0b246Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmY2JkOTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFmMmQzZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMjkyNGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjI5MjRjO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5YTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNTkyMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjlhMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY5YTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm9keS1kZXRhaWwtc2lkZWJhciB7XHJcbiAgICAgICAgICAgIC5jb250ZW50LWNvbXBhbnktaW5mbyB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAudGh1bWItbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjI5MjRjO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDAzYjNiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzUzNTM1O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ibG9jay1idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmNiZDk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMWYyZDNkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyOTI0YztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjI5MjRjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmluZm8tbW9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50b3RhbC1qb2Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbWFpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLW1haW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubnVtYmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbWFpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29uZmlybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hcC1jb21wYW55IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi53cC1pbm5lciB7XG4gIGJhY2tncm91bmQ6ICNlZmYzZjY7XG59XG5cbi5ibG9jay1icmVhZGNydW1iIC5icmVhZGNydW1iIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmJsb2NrLWJyZWFkY3J1bWIgLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbSBhIHtcbiAgY29sb3I6ICMyMjkyNGM7XG59XG5cbi5oZWFkZXItZGV0YWlsIC5kZXRhaWwtaW5uZXIge1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaGVhZGVyLWRldGFpbCAuZGV0YWlsLWlubmVyIC5kZXRhaWwtbGVmdCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaGVhZGVyLWRldGFpbCAuZGV0YWlsLWlubmVyIC5kZXRhaWwtbGVmdCAubG9nbyB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuaGVhZGVyLWRldGFpbCAuZGV0YWlsLWlubmVyIC5kZXRhaWwtbGVmdCAubG9nbyB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxufVxuLmhlYWRlci1kZXRhaWwgLmRldGFpbC1pbm5lciAuZGV0YWlsLWxlZnQgLmxvZ28gLnRodW1iLWxvZ28ge1xuICB3aWR0aDogMTY2cHg7XG4gIGhlaWdodDogMTY2cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZzogMnB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uaGVhZGVyLWRldGFpbCAuZGV0YWlsLWlubmVyIC5kZXRhaWwtbGVmdCAubG9nbyAudGh1bWItbG9nbzpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2YmUxOTc7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5oZWFkZXItZGV0YWlsIC5kZXRhaWwtaW5uZXIgLmRldGFpbC1sZWZ0IC5sb2dvIC50aHVtYi1sb2dvIGltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmhlYWRlci1kZXRhaWwgLmRldGFpbC1pbm5lciAuZGV0YWlsLWxlZnQgLmxvZ28gLnRodW1iLWxvZ28ge1xuICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gIH1cbn1cbi5oZWFkZXItZGV0YWlsIC5kZXRhaWwtaW5uZXIgLmRldGFpbC1sZWZ0IC5pbmZvLWpvYiB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5oZWFkZXItZGV0YWlsIC5kZXRhaWwtaW5uZXIgLmRldGFpbC1sZWZ0IC5pbmZvLWpvYiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG59XG4uaGVhZGVyLWRldGFpbCAuZGV0YWlsLWlubmVyIC5kZXRhaWwtbGVmdCAuaW5mby1qb2IgLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuaGVhZGVyLWRldGFpbCAuZGV0YWlsLWlubmVyIC5kZXRhaWwtbGVmdCAuaW5mby1qb2IgLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5oZWFkZXItZGV0YWlsIC5kZXRhaWwtaW5uZXIgLmRldGFpbC1sZWZ0IC5pbmZvLWpvYiAudGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5oZWFkZXItZGV0YWlsIC5kZXRhaWwtaW5uZXIgLmRldGFpbC1sZWZ0IC5pbmZvLWpvYiAudGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cbn1cbi5oZWFkZXItZGV0YWlsIC5kZXRhaWwtaW5uZXIgLmRldGFpbC1sZWZ0IC5pbmZvLWpvYiAudGl0bGUgYSB7XG4gIGNvbG9yOiAjMjI5MjRjO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuaGVhZGVyLWRldGFpbCAuZGV0YWlsLWlubmVyIC5kZXRhaWwtbGVmdCAuaW5mby1qb2IgLnRpdGxlIGEge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuLmhlYWRlci1kZXRhaWwgLmRldGFpbC1pbm5lciAuZGV0YWlsLWxlZnQgLmluZm8tam9iIC50aXRsZSBhIGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmhlYWRlci1kZXRhaWwgLmRldGFpbC1pbm5lciAuZGV0YWlsLWxlZnQgLmluZm8tam9iIC5kZXNjIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5oZWFkZXItZGV0YWlsIC5kZXRhaWwtaW5uZXIgLmRldGFpbC1sZWZ0IC5pbmZvLWpvYiAuZGVzYyBwIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzUzNTM1O1xufVxuLmhlYWRlci1kZXRhaWwgLmRldGFpbC1pbm5lciAuZGV0YWlsLWxlZnQgLmluZm8tam9iIC5kZXNjIHAgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOCwgMTY3LCAwLCAwLjEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMTQ2LCAyMzcsIDAsIDAuMik7XG4gIGNvbG9yOiAjMjI5MjRjO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5oZWFkZXItZGV0YWlsIC5kZXRhaWwtaW5uZXIgLmRldGFpbC1sZWZ0IC5pbmZvLWpvYiAuZGVzYyBwIC5zYWxhcnkge1xuICBjb2xvcjogI2ZjMjA1Yztcbn1cbi5oZWFkZXItZGV0YWlsIC5kZXRhaWwtaW5uZXIgLmRldGFpbC1sZWZ0IC5pbmZvLWpvYiAuZGVzYyBwIC5wb3N0LWF0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNTM1MzU7XG59XG4uaGVhZGVyLWRldGFpbCAuZGV0YWlsLWlubmVyIC5kZXRhaWwtbGVmdCAuaW5mby1qb2IgLmJsb2NrLWJ0biBidXR0b246Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZjYmQ5O1xuICBjb2xvcjogIzFmMmQzZDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmhlYWRlci1kZXRhaWwgLmRldGFpbC1pbm5lciAuZGV0YWlsLWxlZnQgLmluZm8tam9iIC5ibG9jay1idG4gYnV0dG9uOmZpcnN0LWNoaWxkOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIyOTI0YztcbiAgY29sb3I6ICMyMjkyNGM7XG59XG4uaGVhZGVyLWRldGFpbCAuZGV0YWlsLWlubmVyIC5kZXRhaWwtbGVmdCAuaW5mby1qb2IgLmJsb2NrLWJ0biBidXR0b246Zmlyc3QtY2hpbGQgaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5oZWFkZXItZGV0YWlsIC5kZXRhaWwtaW5uZXIgLmRldGFpbC1sZWZ0IC5pbmZvLWpvYiAuYmxvY2stYnRuIGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogI2ZmOWEwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1OTIxMjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5oZWFkZXItZGV0YWlsIC5kZXRhaWwtaW5uZXIgLmRldGFpbC1sZWZ0IC5pbmZvLWpvYiAuYmxvY2stYnRuIGJ1dHRvbjpsYXN0LWNoaWxkOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmOWEwMDtcbiAgY29sb3I6ICNmZjlhMDA7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4uaGVhZGVyLWRldGFpbCAuZGV0YWlsLWlubmVyIC5kZXRhaWwtbGVmdCAuaW5mby1qb2IgLmJsb2NrLWJ0biBidXR0b246bGFzdC1jaGlsZCBpIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLmhlYWRlci1kZXRhaWwgLmRldGFpbC1pbm5lciAuc2lkZWJhciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZWFkZXItZGV0YWlsIC5kZXRhaWwtaW5uZXIgLnNpZGViYXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5M2UzZTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmhlYWRlci1kZXRhaWwgLmRldGFpbC1pbm5lciAuc2lkZWJhciBidXR0b24ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB9XG59XG4uaGVhZGVyLWRldGFpbCAuZGV0YWlsLWlubmVyIC5zaWRlYmFyIGJ1dHRvbiBpIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLmhlYWRlci1kZXRhaWwgLmRldGFpbC1pbm5lciAuc2lkZWJhciAuaW5mbyBwIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmhlYWRlci1kZXRhaWwgLmRldGFpbC1pbm5lciAuc2lkZWJhciAuaW5mbyBwIHNwYW4ge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5oZWFkZXItZGV0YWlsIC5kZXRhaWwtaW5uZXIge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxufVxuXG4uYmxvY2stdGl0bGUgLnRpdGxlLWxlZnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzIyOTI0YztcbiAgcGFkZGluZzogMCAxMHB4O1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uYmxvY2stdGl0bGUgLnRpdGxlLWxlZnQgLmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2Q3O1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9keS1kZXRhaWwgLmJvZHktZGV0YWlsLWlubmVyIC5ib2R5LWRldGFpbC1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJvZHktZGV0YWlsIC5ib2R5LWRldGFpbC1pbm5lciAuYm9keS1kZXRhaWwtY29udGVudCAuaW5mby1mYXN0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogZG90dGVkIDFweCAjZWJlYmViO1xufVxuLmJvZHktZGV0YWlsIC5ib2R5LWRldGFpbC1pbm5lciAuYm9keS1kZXRhaWwtY29udGVudCAuaW5mby1mYXN0IHAge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMWYxZjFmO1xufVxuLmJvZHktZGV0YWlsIC5ib2R5LWRldGFpbC1pbm5lciAuYm9keS1kZXRhaWwtY29udGVudCAuaW5mby1mYXN0IHAgaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgY29sb3I6ICMyMjkyNGM7XG59XG4uYm9keS1kZXRhaWwgLmJvZHktZGV0YWlsLWlubmVyIC5ib2R5LWRldGFpbC1jb250ZW50IC5pbmZvLWZhc3QgcCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzFmMWYxZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5ib2R5LWRldGFpbCAuYm9keS1kZXRhaWwtaW5uZXIgLmJvZHktZGV0YWlsLWNvbnRlbnQgLmluZm8tZmFzdCBwIGJ1dHRvbiB7XG4gIGhlaWdodDogMjRweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgY29sb3I6ICMyNjdkNzk7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbn1cbi5ib2R5LWRldGFpbCAuYm9keS1kZXRhaWwtaW5uZXIgLmJvZHktZGV0YWlsLWNvbnRlbnQgLmJsb2NrLWRlc2Mge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmJvZHktZGV0YWlsIC5ib2R5LWRldGFpbC1pbm5lciAuYm9keS1kZXRhaWwtY29udGVudCAuYmxvY2stZGVzYyAuZGVzYy1qb2Ige1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5ib2R5LWRldGFpbCAuYm9keS1kZXRhaWwtaW5uZXIgLmluZm8tY29udGFjdCB7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uYm9keS1kZXRhaWwgLmJvZHktZGV0YWlsLWlubmVyIC5pbmZvLWNvbnRhY3QgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cbi5ib2R5LWRldGFpbCAuYm9keS1kZXRhaWwtaW5uZXIgLmluZm8tY29udGFjdCAudGl0bGUtaW5mbyBwIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5ib2R5LWRldGFpbCAuYm9keS1kZXRhaWwtaW5uZXIgLmluZm8tY29udGFjdCAuYmxvY2stYnRuIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmNiZDk7XG4gIGNvbG9yOiAjMWYyZDNkO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uYm9keS1kZXRhaWwgLmJvZHktZGV0YWlsLWlubmVyIC5pbmZvLWNvbnRhY3QgLmJsb2NrLWJ0biBidXR0b246Zmlyc3QtY2hpbGQ6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjI5MjRjO1xuICBjb2xvcjogIzIyOTI0Yztcbn1cbi5ib2R5LWRldGFpbCAuYm9keS1kZXRhaWwtaW5uZXIgLmluZm8tY29udGFjdCAuYmxvY2stYnRuIGJ1dHRvbjpmaXJzdC1jaGlsZCBpIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLmJvZHktZGV0YWlsIC5ib2R5LWRldGFpbC1pbm5lciAuaW5mby1jb250YWN0IC5ibG9jay1idG4gYnV0dG9uOmxhc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiAjZmY5YTAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTU5MjEyO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5ib2R5LWRldGFpbCAuYm9keS1kZXRhaWwtaW5uZXIgLmluZm8tY29udGFjdCAuYmxvY2stYnRuIGJ1dHRvbjpsYXN0LWNoaWxkOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmOWEwMDtcbiAgY29sb3I6ICNmZjlhMDA7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4uYm9keS1kZXRhaWwgLmJvZHktZGV0YWlsLWlubmVyIC5pbmZvLWNvbnRhY3QgLmJsb2NrLWJ0biBidXR0b246bGFzdC1jaGlsZCBpIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLmJvZHktZGV0YWlsIC5ib2R5LWRldGFpbC1pbm5lciAuYm9keS1kZXRhaWwtc2lkZWJhciAuY29udGVudC1jb21wYW55LWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLmJvZHktZGV0YWlsIC5ib2R5LWRldGFpbC1pbm5lciAuYm9keS1kZXRhaWwtc2lkZWJhciAuY29udGVudC1jb21wYW55LWluZm8gLnRodW1iLWxvZ28ge1xuICB3aWR0aDogMjU2cHg7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uYm9keS1kZXRhaWwgLmJvZHktZGV0YWlsLWlubmVyIC5ib2R5LWRldGFpbC1zaWRlYmFyIC5jb250ZW50LWNvbXBhbnktaW5mbyAudGh1bWItbG9nbyBpbWcge1xuICBvYmplY3QtZml0OiBjb250ZW50O1xufVxuLmJvZHktZGV0YWlsIC5ib2R5LWRldGFpbC1pbm5lciAuYm9keS1kZXRhaWwtc2lkZWJhciAuY29udGVudC1jb21wYW55LWluZm8gLm5hbWUge1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMjI5MjRjO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5ib2R5LWRldGFpbCAuYm9keS1kZXRhaWwtaW5uZXIgLmJvZHktZGV0YWlsLXNpZGViYXIgLmNvbnRlbnQtY29tcGFueS1pbmZvIC5uYW1lIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cbi5ib2R5LWRldGFpbCAuYm9keS1kZXRhaWwtaW5uZXIgLmJvZHktZGV0YWlsLXNpZGViYXIgLmNvbnRlbnQtY29tcGFueS1pbmZvIC5hZGRyZXNzIHtcbiAgcGFkZGluZzogNHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5ib2R5LWRldGFpbCAuYm9keS1kZXRhaWwtaW5uZXIgLmJvZHktZGV0YWlsLXNpZGViYXIgLmNvbnRlbnQtY29tcGFueS1pbmZvIC5hZGRyZXNzIGkge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjNDAzYjNiO1xufVxuLmJvZHktZGV0YWlsIC5ib2R5LWRldGFpbC1pbm5lciAuYm9keS1kZXRhaWwtc2lkZWJhciAuY29udGVudC1jb21wYW55LWluZm8gLmFkZHJlc3MgbGFiZWwge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzM1MzUzNTtcbn1cbi5ib2R5LWRldGFpbCAuYm9keS1kZXRhaWwtaW5uZXIgLmJvZHktZGV0YWlsLXNpZGViYXIgLmNvbnRlbnQtY29tcGFueS1pbmZvIC5hZGRyZXNzIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uYm9keS1kZXRhaWwgLmJvZHktZGV0YWlsLWlubmVyIC5ib2R5LWRldGFpbC1zaWRlYmFyIC5jb250ZW50LWNvbXBhbnktaW5mbyAuYmxvY2stYnRuIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmNiZDk7XG4gIGNvbG9yOiAjMWYyZDNkO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uYm9keS1kZXRhaWwgLmJvZHktZGV0YWlsLWlubmVyIC5ib2R5LWRldGFpbC1zaWRlYmFyIC5jb250ZW50LWNvbXBhbnktaW5mbyAuYmxvY2stYnRuIGJ1dHRvbjpmaXJzdC1jaGlsZDpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMjkyNGM7XG4gIGNvbG9yOiAjMjI5MjRjO1xufVxuLmJvZHktZGV0YWlsIC5ib2R5LWRldGFpbC1pbm5lciAuYm9keS1kZXRhaWwtc2lkZWJhciAuY29udGVudC1jb21wYW55LWluZm8gLmJsb2NrLWJ0biBidXR0b246Zmlyc3QtY2hpbGQgaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5ib2R5LWRldGFpbCAuYm9keS1kZXRhaWwtaW5uZXIgLmJvZHktZGV0YWlsLXNpZGViYXIgLmNvbnRlbnQtY29tcGFueS1pbmZvIC5pbmZvLW1vcmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmJvZHktZGV0YWlsIC5ib2R5LWRldGFpbC1pbm5lciAuYm9keS1kZXRhaWwtc2lkZWJhciAuY29udGVudC1jb21wYW55LWluZm8gLmluZm8tbW9yZSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG4uYm9keS1kZXRhaWwgLmJvZHktZGV0YWlsLWlubmVyIC5ib2R5LWRldGFpbC1zaWRlYmFyIC5jb250ZW50LWNvbXBhbnktaW5mbyAuaW5mby1tb3JlIC50b3RhbC1qb2Ige1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjI5MjRjO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmJvZHktZGV0YWlsIC5ib2R5LWRldGFpbC1pbm5lciAuYm9keS1kZXRhaWwtc2lkZWJhciAuY29udGVudC1jb21wYW55LWluZm8gLmluZm8tbW9yZSAudG90YWwtam9iIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XG4gIH1cbn1cbi5ib2R5LWRldGFpbCAuYm9keS1kZXRhaWwtaW5uZXIgLmJvZHktZGV0YWlsLXNpZGViYXIgLmNvbnRlbnQtY29tcGFueS1pbmZvIC5pbmZvLW1vcmUgLnRvdGFsLWpvYiAudGl0bGUge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZDogIzIyOTI0YztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5ib2R5LWRldGFpbCAuYm9keS1kZXRhaWwtaW5uZXIgLmJvZHktZGV0YWlsLXNpZGViYXIgLmNvbnRlbnQtY29tcGFueS1pbmZvIC5pbmZvLW1vcmUgLnRvdGFsLWpvYiAubnVtYmVyIHtcbiAgY29sb3I6ICMyMjkyNGM7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5ib2R5LWRldGFpbCAuYm9keS1kZXRhaWwtaW5uZXIgLmJvZHktZGV0YWlsLXNpZGViYXIgLmNvbnRlbnQtY29tcGFueS1pbmZvIC5pbmZvLW1vcmUgLmNvbmZpcm0ge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uYm9keS1kZXRhaWwgLmJvZHktZGV0YWlsLWlubmVyIC5ib2R5LWRldGFpbC1zaWRlYmFyIC5tYXAtY29tcGFueSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](B2DetailWorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-b2-detail-work',
          templateUrl: './b2-detail-work.component.html',
          styleUrls: ['./b2-detail-work.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_common_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-page/content/b2-detail-work/b2-detail-work.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/home-page/content/b2-detail-work/b2-detail-work.module.ts ***!
    \***************************************************************************/

  /*! exports provided: B2DetailWorkModule */

  /***/
  function srcAppHomePageContentB2DetailWorkB2DetailWorkModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "B2DetailWorkModule", function () {
      return B2DetailWorkModule;
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


    var _b2_detail_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./b2-detail-work.component */
    "./src/app/home-page/content/b2-detail-work/b2-detail-work.component.ts");

    var B2DetailWorkModule = function B2DetailWorkModule() {
      _classCallCheck(this, B2DetailWorkModule);
    };

    B2DetailWorkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: B2DetailWorkModule
    });
    B2DetailWorkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function B2DetailWorkModule_Factory(t) {
        return new (t || B2DetailWorkModule)();
      },
      imports: [[_nguniversal_common__WEBPACK_IMPORTED_MODULE_2__["TransferHttpCacheModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: _b2_detail_work_component__WEBPACK_IMPORTED_MODULE_5__["B2DetailWorkComponent"],
        children: []
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](B2DetailWorkModule, {
        declarations: [_b2_detail_work_component__WEBPACK_IMPORTED_MODULE_5__["B2DetailWorkComponent"]],
        imports: [_nguniversal_common__WEBPACK_IMPORTED_MODULE_2__["TransferHttpCacheModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](B2DetailWorkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_b2_detail_work_component__WEBPACK_IMPORTED_MODULE_5__["B2DetailWorkComponent"]],
          imports: [_nguniversal_common__WEBPACK_IMPORTED_MODULE_2__["TransferHttpCacheModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
            path: '',
            component: _b2_detail_work_component__WEBPACK_IMPORTED_MODULE_5__["B2DetailWorkComponent"],
            children: []
          }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=b2-detail-work-b2-detail-work-module-es5.js.map