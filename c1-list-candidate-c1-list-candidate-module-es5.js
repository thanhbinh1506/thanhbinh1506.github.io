function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["c1-list-candidate-c1-list-candidate-module"], {
  /***/
  "./src/app/home-page/content/c1-list-candidate/c1-list-candidate.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/home-page/content/c1-list-candidate/c1-list-candidate.component.ts ***!
    \************************************************************************************/

  /*! exports provided: C1ListCandidateComponent */

  /***/
  function srcAppHomePageContentC1ListCandidateC1ListCandidateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "C1ListCandidateComponent", function () {
      return C1ListCandidateComponent;
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function C1ListCandidateComponent_option_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r87 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r87.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r87.name);
      }
    }

    function C1ListCandidateComponent_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r88 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r88.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r88.name);
      }
    }

    function C1ListCandidateComponent_option_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r89 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r89.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r89.viewValue);
      }
    }

    function C1ListCandidateComponent_option_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r90 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r90.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r90.viewValue);
      }
    }

    function C1ListCandidateComponent_option_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r91 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r91.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r91.viewValue);
      }
    }

    function C1ListCandidateComponent_option_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r92 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r92.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r92.viewValue);
      }
    }

    function C1ListCandidateComponent_div_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function C1ListCandidateComponent_div_52_Template_p_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95);

          var item_r93 = ctx.$implicit;

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r94.onDetailCandidateClick(item_r93.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "3 ph\xFAt tr\u01B0\u1EDBc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "3 n\u0103m");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r93 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r93.positionapply, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r93.fullname, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0110\xE0 N\u1EB5ng: ", item_r93.address, "");
      }
    }

    function C1ListCandidateComponent_a_77_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r96 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r96.banner, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "active": a0
      };
    };

    var C1ListCandidateComponent = /*#__PURE__*/function () {
      function C1ListCandidateComponent(api, activatedRoute, router) {
        _classCallCheck(this, C1ListCandidateComponent);

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
          viewValue: "Tất cả kinh nghiệm"
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
        this.listCandidate = []; //  binding search
        // career search

        this.career = '0'; // city search

        this.city = '0'; // salary search

        this.salary = 'none'; // exp search

        this.exp = 'none'; // typeofwork search

        this.typeofwork = 'none'; // sex search

        this.sex = 'none'; // pageination

        this.page = 1;
        this.limit = 2;
      }

      _createClass(C1ListCandidateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // get Career
          this.getCareer(); // get City

          this.getCity();
          this.activatedRoute.params.subscribe(function (params) {
            console.log(params);

            _this.onFilterCandidate();
          }); // get Banner Ads

          this.getBannerAds();
        }
      }, {
        key: "changePage",
        value: function changePage(page) {
          this.page = page;
          this.onFilterCandidate();
        }
        /**
         * on Filter Job-bliw
         */

      }, {
        key: "onFilterCandidate",
        value: function onFilterCandidate() {
          var _this2 = this;

          var param = {
            career: this.career,
            city: this.city,
            salary: this.salary,
            exp: this.exp,
            typeofwork: this.typeofwork,
            sex: this.sex,
            keyword: this.keyword,
            offset: (this.page - 1) * this.limit,
            limit: 2
          };
          this.subscription.push(this.api.excuteAllByWhat(param, '24').subscribe(function (data) {
            // set data for listCandidate
            if (data.length > 0) {
              console.log("tada<<<<<<", data);
              data[0].salary = data[0]['salary'] / 1000000;
              _this2.listCandidate = data;
            }
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
              _this3.listCareer = [];
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
              // set data for listBannerAds	
              _this5.listBannerAds = data;
              console.log('listbanner', _this5.listBannerAds);
            }
          }));
        }
      }, {
        key: "onDetailCandidateClick",
        value: function onDetailCandidateClick(idcandidate) {
          var url = '/c2-detail-candidate/' + idcandidate;
          this.router.navigate([url]);
          console.log(url);
        }
      }]);

      return C1ListCandidateComponent;
    }();

    C1ListCandidateComponent.ɵfac = function C1ListCandidateComponent_Factory(t) {
      return new (t || C1ListCandidateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    C1ListCandidateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: C1ListCandidateComponent,
      selectors: [["app-c1-list-candidate"]],
      decls: 364,
      vars: 20,
      consts: [[1, "block-find-advance"], [1, "container"], [1, "block-title"], [1, "title-left"], [1, "text", 3, "click"], [1, "line"], [1, "row", "find-advance", "pt-3"], [1, "col-md-12", "relative", "title-search"], [1, "form-group"], [1, "far", "fa-building"], ["type", "email", "id", "exampleFormControlInput1", "placeholder", "Nh\u1EADp ti\xEAu \u0111\u1EC1 h\u1ED3 s\u01A1, v\u1ECB tr\xED, \u0111\u1ECBa \u0111i\u1EC3m l\xE0m vi\u1EC7c...", 1, "form-control"], [1, "col-md-2", "col-6"], [1, "form-group", "select-custom"], [1, "fas", "fa-list-ul"], ["id", "exampleFormControlSelect1", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "fas", "fa-map-marker-alt"], [1, "far", "fa-clock"], [1, "far", "fa-address-card"], [1, "fas", "fa-laptop-house"], ["id", "exampleFormControlSelect1", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "content"], [1, "row"], [1, "col-md-9"], [1, "wp-inner-content"], [1, "title-total"], [1, "mb-0"], ["class", "list-job", 4, "ngFor", "ngForOf"], [1, "pagination"], [1, "page-item"], ["href", "#", 1, "page-link"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "click"], [1, "col-md-3"], [1, "sidebar"], ["href", "", "class", "d-block mb-3", 4, "ngFor", "ngForOf"], [1, "job-related"], [1, "text"], [1, "col-md-12"], ["id", "job-seen-slide", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "row", "list-job"], [1, "col-md-4"], [1, "job-item", "d-flex"], ["href", "", "target", "_blank", 1, "thumb-img", "d-block"], ["src", "https://findwork.ghouse.com.vn/wp-content/uploads/2020/04/vus-logo.png", "alt", "", 1, "img-fluid", "d-block"], [1, "desc-job"], ["href", "", "title", "Nh\xE2n vi\xEAn Sale Online", 1, "position"], ["src", "../../../../assets/img/hot_new.png", "alt", "", 1, "hot-new"], [1, "name-company"], [1, "location"], [1, "info-detail", "d-flex"], [1, "salary"], [1, "date"], [1, "carousel-item"], ["href", "#job-seen-slide", "data-slide", "prev", 1, "carousel-control-prev"], [1, "carousel-control-prev-icon"], ["href", "#job-seen-slide", "data-slide", "next", 1, "carousel-control-next"], [1, "carousel-control-next-icon"], [1, "carousel-indicators"], ["data-target", "#job-seen-slide", "data-slide-to", "0", 1, "active"], ["data-target", "#job-seen-slide", "data-slide-to", "1"], [3, "value"], [1, "list-job"], [1, "img-title", "d-flex"], [1, "name-company", 3, "click"], [1, "address"], [1, "salary-lock", "d-flex"], [1, "fas", "fa-briefcase"], ["href", "", 1, "d-block", "mb-3"], ["alt", "", 1, "img-fluid", 3, "src"]],
      template: function C1ListCandidateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function C1ListCandidateComponent_Template_span_click_4_listener() {
            return ctx.onFilterCandidate();
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, C1ListCandidateComponent_option_16_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, C1ListCandidateComponent_option_21_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, C1ListCandidateComponent_option_26_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, C1ListCandidateComponent_option_31_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, C1ListCandidateComponent_option_36_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function C1ListCandidateComponent_Template_select_ngModelChange_40_listener($event) {
            return ctx.sex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, C1ListCandidateComponent_option_41_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "252");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u1EE9ng vi\xEAn ph\xF9 h\u1EE3p ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, C1ListCandidateComponent_div_52_Template, 24, 3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Tr\u01B0\u1EDBc page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Tr\u01B0\u1EDBc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function C1ListCandidateComponent_Template_a_click_61_listener() {
            return ctx.changePage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function C1ListCandidateComponent_Template_a_click_64_listener() {
            return ctx.changePage(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function C1ListCandidateComponent_Template_a_click_67_listener() {
            return ctx.changePage(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Sau");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sau page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, C1ListCandidateComponent_a_77_Template, 2, 1, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Vi\u1EC7c l\xE0m \u0111\xE3 xem ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Nh\xE2n Vi\xEAn Kinh Doanh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "C\xF4ng ty TNHH MTV T\xFA Ph\u1EA1m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "\u0110\xE0 N\u1EB5ng: Ng\u0169 H\xE0nh S\u01A1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "10 - 100 Tri\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "15/10/2929");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "ol", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "li", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "li", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listCareer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listCity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.expYears);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.salaries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.typeOfWork);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sex)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sexs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listCandidate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx.page == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.page == 2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx.page == 3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listBannerAds);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
      styles: [".title-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 25px;\n  color: #6c757d;\n  color: 18px;\n}\n.title-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  height: 45px;\n}\n.block-title[_ngcontent-%COMP%]   .title-left[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-weight: 700;\n  font-size: 19px;\n  border-left: 5px solid #22924c;\n  padding: 0 10px;\n  line-height: 29px;\n  margin-bottom: 15px;\n  padding-right: 0;\n  position: relative;\n  margin-bottom: 0px;\n}\n.block-title[_ngcontent-%COMP%]   .title-left[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  background-color: #d7d7d7;\n  bottom: 0;\n  height: 1px;\n  margin-bottom: auto;\n  margin-left: 10px;\n  margin-top: auto;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.block-find-advance[_ngcontent-%COMP%] {\n  margin: 30px 0 15px;\n}\n.block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .select-custom[_ngcontent-%COMP%] {\n  position: relative;\n}\n.block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .select-custom[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  height: 40px;\n}\n.block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .select-custom[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 11px;\n  color: #6c757d;\n}\n.block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%] {\n  padding-right: 0px;\n}\n.block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid #c4c4c4;\n  margin: 0;\n  padding: 10px 15px;\n  border-radius: 4px;\n  width: 65%;\n  background: #22924c;\n  color: #fff;\n  height: 40px;\n}\n.block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n.content[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .title-total[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #9ed6b3a1;\n  border: 1px solid #22924c87;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .title-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff0000;\n  font-weight: 900;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #eee;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n@media (max-width: 575px) {\n  .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .img-title[_ngcontent-%COMP%] {\n  flex-basis: 60%;\n}\n@media (max-width: 575px) {\n  .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .img-title[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%] {\n  width: 85px;\n  height: 60px;\n  margin-right: 10px;\n}\n@media (max-width: 575px) {\n  .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 60px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%]   a.position[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  margin-bottom: 0;\n  color: #444;\n  cursor: pointer;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%]   img.hot-new[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 12px;\n  margin-left: 5px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%]   .name-company[_ngcontent-%COMP%] {\n  color: #43a047 !important;\n  font-weight: 400;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 0px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  margin-top: 5px;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n@media (max-width: 575px) {\n  .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    margin-top: 10px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  color: #484848;\n  font-size: 15px;\n  flex-basis: 100%;\n  margin-top: 5px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #484848;\n  padding-right: 5px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .salary-lock[_ngcontent-%COMP%]   .salary[_ngcontent-%COMP%] {\n  color: #484848;\n  font-size: 15px;\n  flex-basis: 40%;\n}\n@media (max-width: 575px) {\n  .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .salary-lock[_ngcontent-%COMP%]   .salary[_ngcontent-%COMP%] {\n    flex-basis: 60%;\n  }\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .salary-lock[_ngcontent-%COMP%]   .salary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #484848;\n  padding-right: 5px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .salary-lock[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #484848;\n  font-size: 15px;\n  flex-basis: 60%;\n  margin-left: 10px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .salary-lock[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #484848;\n  padding-right: 5px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n@media (max-width: 575px) {\n  .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background-color: white;\n  color: green;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: green;\n  border-color: green;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:focus, .content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover {\n  color: green;\n  background-color: #eee;\n  border-color: #ddd;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: white;\n  background-color: green;\n  border: solid 1px green;\n}\n.content[_ngcontent-%COMP%]   .wp-inner-content[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background-color: green;\n  border: solid 1px green;\n}\n.job-related[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #eee;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%] {\n  width: 85px;\n  max-height: 93px;\n  margin-right: 10px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 93px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%]   a.position[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  margin-bottom: 0;\n  color: #444;\n  cursor: pointer;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%]   img.hot-new[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 12px;\n  margin-left: 5px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .desc-job[_ngcontent-%COMP%]   .name-company[_ngcontent-%COMP%] {\n  color: #43a047 !important;\n  font-weight: 400;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 0px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  color: #484848;\n  font-size: 15px;\n  flex-basis: 100%;\n  margin-top: 3px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #484848;\n  padding-right: 5px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .info-detail[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .info-detail[_ngcontent-%COMP%]   .salary[_ngcontent-%COMP%] {\n  color: #484848;\n  font-size: 15px;\n  flex-basis: 60%;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .info-detail[_ngcontent-%COMP%]   .salary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #484848;\n  padding-right: 5px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .info-detail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #484848;\n  font-size: 15px;\n  flex-basis: 60%;\n  margin-left: 10px;\n}\n.job-related[_ngcontent-%COMP%]   .list-job[_ngcontent-%COMP%]   .job-item[_ngcontent-%COMP%]   .info-detail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #484848;\n  padding-right: 5px;\n}\n.job-related[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\n  bottom: -45px;\n}\n.job-related[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #e3dcdc;\n}\n.job-related[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n@media (max-width: 575px) {\n  .block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%] {\n    padding-right: 15px;\n  }\n  .block-find-advance[_ngcontent-%COMP%]   .find-advance[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2NvbnRlbnQvYzEtbGlzdC1jYW5kaWRhdGUvRTpcXGZlLXVzZXItam9icy9zcmNcXGFwcFxcaG9tZS1wYWdlXFxjb250ZW50XFxjMS1saXN0LWNhbmRpZGF0ZVxcYzEtbGlzdC1jYW5kaWRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9jb250ZW50L2MxLWxpc3QtY2FuZGlkYXRlL2MxLWxpc3QtY2FuZGlkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDRFI7QURHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0RSO0FES0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNGUjtBRElRO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUNGWjtBRE1BO0VBQ0ksbUJBQUE7QUNISjtBREtRO0VBQ0ksa0JBQUE7QUNIWjtBRElZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDRmhCO0FESVk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0ZoQjtBREtRO0VBQ0ksa0JBQUE7QUNIWjtBRE1ZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0poQjtBREtnQjtFQUNJLGtCQUFBO0FDSHBCO0FEU0E7RUFDSSxtQkFBQTtBQ05KO0FEUVE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQ05aO0FET1k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNMaEI7QURTWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNQaEI7QURRZ0I7RUFMSjtJQU1RLGVBQUE7RUNMbEI7QUFDRjtBRE1nQjtFQUNJLHVDQUFBO0FDSnBCO0FETWdCO0VBQ0ksZUFBQTtBQ0pwQjtBREtvQjtFQUZKO0lBR1EsZ0JBQUE7RUNGdEI7QUFDRjtBRElnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNGcEI7QURHb0I7RUFKSjtJQUtRLFlBQUE7SUFDQSxZQUFBO0VDQXRCO0FBQ0Y7QURDb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNDeEI7QURHb0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRHhCO0FER29CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0R4QjtBREdvQjtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRHhCO0FESWdCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0FDRnBCO0FER29CO0VBSko7SUFLUSxpQkFBQTtJQUNBLGdCQUFBO0VDQXRCO0FBQ0Y7QURDb0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0N4QjtBREF3QjtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0U1QjtBREV3QjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0E1QjtBREM0QjtFQUpKO0lBS1EsZUFBQTtFQ0U5QjtBQUNGO0FERDRCO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDR2hDO0FEQXdCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFNUI7QURENEI7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNHaEM7QURHWTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7QUNEaEI7QURJUTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRlo7QURHWTtFQUpKO0lBS1EsbUJBQUE7RUNBZDtBQUNGO0FERVE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUNBWjtBREdRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtBQ0RaO0FESVE7Ozs7RUFJSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0ZaO0FES1E7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQ0haO0FETVE7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0FDSlo7QURXQTtFQUNJLG1CQUFBO0FDVEo7QURVSTtFQUNJLGdCQUFBO0FDUlI7QURTUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNQWjtBRFFZO0VBQ0ksdUNBQUE7QUNOaEI7QURRWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTmhCO0FEUWdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDTnBCO0FEU1k7RUFDSSxtQkFBQTtVQUFBLFlBQUE7QUNQaEI7QURRZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDTnBCO0FEUWdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ05wQjtBRFFnQjtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTnBCO0FEU1k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1BoQjtBRFFnQjtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ05wQjtBRFNZO0VBQ0ksZ0JBQUE7QUNQaEI7QURRZ0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNOcEI7QURPb0I7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNMeEI7QURRZ0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ05wQjtBRE9vQjtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0x4QjtBRFdJO0VBQ0ksYUFBQTtBQ1RSO0FEVVE7RUFDSSx5QkFBQTtBQ1JaO0FEVVE7RUFDSSxzQkFBQTtBQ1JaO0FEYUE7RUFHWTtJQUNJLG1CQUFBO0VDWmQ7RURlYztJQUNJLFdBQUE7RUNibEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9jb250ZW50L2MxLWxpc3QtY2FuZGlkYXRlL2MxLWxpc3QtY2FuZGlkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLW1haW46ICMyMjkyNGM7XHJcbi50aXRsZS1zZWFyY2gge1xyXG4gICAgaSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICAgIGNvbG9yOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB9XHJcbn1cclxuLmJsb2NrLXRpdGxlIHtcclxuICAgIC50aXRsZS1sZWZ0IHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgICRjb2xvci1tYWluO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjlweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuXHJcbiAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2Q3O1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYmxvY2stZmluZC1hZHZhbmNlIHtcclxuICAgIG1hcmdpbjogMzBweCAwIDE1cHg7XHJcbiAgICAuZmluZC1hZHZhbmNlIHtcclxuICAgICAgICAuc2VsZWN0LWN1c3RvbSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTJweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sLW1kLTIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tc2VhcmNoIHtcclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjkyNGM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgLndwLWlubmVyLWNvbnRlbnQge1xyXG4gICAgICAgIC50aXRsZS10b3RhbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5ZWQ2YjNhMTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyOTI0Yzg3O1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubGlzdC1qb2Ige1xyXG4gICAgICAgICAgICAuam9iLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltZy10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aHVtYi1pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kZXNjLWpvYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYS5wb3NpdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLmhvdC1uZXcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubmFtZS1jb21wYW55IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0M2EwNDcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5sb2NhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ4NDg0ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2FsYXJ5LWxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2FsYXJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogNDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ4NDg0ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmpvYi1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2luYXRpb24gPiBsaSA+IGEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhZ2luYXRpb24gPiBsaSA+IGE6Zm9jdXMsXHJcbiAgICAgICAgLnBhZ2luYXRpb24gPiBsaSA+IGE6aG92ZXIsXHJcbiAgICAgICAgLnBhZ2luYXRpb24gPiBsaSA+IHNwYW46Zm9jdXMsXHJcbiAgICAgICAgLnBhZ2luYXRpb24gPiBsaSA+IHNwYW46aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2RkZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCBncmVlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IGE6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNpZGViYXIge1xyXG4gICAgfVxyXG59XHJcbi8vIGpvYi1yZWxhdGVkXHJcbi5qb2ItcmVsYXRlZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgLmxpc3Qtam9iIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIC5qb2ItaXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRodW1iLWltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODVweDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDkzcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzYy1qb2Ige1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgYS5wb3NpdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWcuaG90LW5ldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmFtZS1jb21wYW55IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzYTA0NyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvY2F0aW9uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5mby1kZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIC5zYWxhcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICAgIGJvdHRvbTogLTQ1cHg7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkY2RjO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gcmVzcG9uc2l2ZVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC5ibG9jay1maW5kLWFkdmFuY2Uge1xyXG4gICAgICAgIC5maW5kLWFkdmFuY2Uge1xyXG4gICAgICAgICAgICAuY29sLW1kLTIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi50aXRsZS1zZWFyY2ggaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAyNXB4O1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgY29sb3I6IDE4cHg7XG59XG4udGl0bGUtc2VhcmNoIGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5ibG9jay10aXRsZSAudGl0bGUtbGVmdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMjI5MjRjO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5ibG9jay10aXRsZSAudGl0bGUtbGVmdCAubGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2Q3ZDc7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ibG9jay1maW5kLWFkdmFuY2Uge1xuICBtYXJnaW46IDMwcHggMCAxNXB4O1xufVxuLmJsb2NrLWZpbmQtYWR2YW5jZSAuZmluZC1hZHZhbmNlIC5zZWxlY3QtY3VzdG9tIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJsb2NrLWZpbmQtYWR2YW5jZSAuZmluZC1hZHZhbmNlIC5zZWxlY3QtY3VzdG9tIHNlbGVjdCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmJsb2NrLWZpbmQtYWR2YW5jZSAuZmluZC1hZHZhbmNlIC5zZWxlY3QtY3VzdG9tIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogMTFweDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG4uYmxvY2stZmluZC1hZHZhbmNlIC5maW5kLWFkdmFuY2UgLmNvbC1tZC0yIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLmJsb2NrLWZpbmQtYWR2YW5jZSAuZmluZC1hZHZhbmNlIC5idG4tc2VhcmNoIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDY1JTtcbiAgYmFja2dyb3VuZDogIzIyOTI0YztcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNDBweDtcbn1cbi5ibG9jay1maW5kLWFkdmFuY2UgLmZpbmQtYWR2YW5jZSAuYnRuLXNlYXJjaCBidXR0b24gaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLnRpdGxlLXRvdGFsIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzllZDZiM2ExO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjI5MjRjODc7XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAudGl0bGUtdG90YWwgc3BhbiB7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cbi5jb250ZW50IC53cC1pbm5lci1jb250ZW50IC5saXN0LWpvYiAuam9iLWl0ZW06aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIC5pbWctdGl0bGUge1xuICBmbGV4LWJhc2lzOiA2MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSAuaW1nLXRpdGxlIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICB9XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIC50aHVtYi1pbWcge1xuICB3aWR0aDogODVweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSAudGh1bWItaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIC50aHVtYi1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5jb250ZW50IC53cC1pbm5lci1jb250ZW50IC5saXN0LWpvYiAuam9iLWl0ZW0gLmRlc2Mtam9iIGEucG9zaXRpb24ge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjNDQ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIC5kZXNjLWpvYiBpbWcuaG90LW5ldyB7XG4gIHdpZHRoOiAzMXB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIC5kZXNjLWpvYiAubmFtZS1jb21wYW55IHtcbiAgY29sb3I6ICM0M2EwNDcgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5jb250ZW50IC53cC1pbm5lci1jb250ZW50IC5saXN0LWpvYiAuam9iLWl0ZW0gLmFkZHJlc3Mge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSAuYWRkcmVzcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSAuYWRkcmVzcyAubG9jYXRpb24ge1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIC5hZGRyZXNzIC5sb2NhdGlvbiBpIHtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5jb250ZW50IC53cC1pbm5lci1jb250ZW50IC5saXN0LWpvYiAuam9iLWl0ZW0gLmFkZHJlc3MgLnNhbGFyeS1sb2NrIC5zYWxhcnkge1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmbGV4LWJhc2lzOiA0MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSAuYWRkcmVzcyAuc2FsYXJ5LWxvY2sgLnNhbGFyeSB7XG4gICAgZmxleC1iYXNpczogNjAlO1xuICB9XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtIC5hZGRyZXNzIC5zYWxhcnktbG9jayAuc2FsYXJ5IGkge1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSAuYWRkcmVzcyAuc2FsYXJ5LWxvY2sgLmRhdGUge1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmbGV4LWJhc2lzOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLmxpc3Qtam9iIC5qb2ItaXRlbSAuYWRkcmVzcyAuc2FsYXJ5LWxvY2sgLmRhdGUgaSB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAubGlzdC1qb2IgLmpvYi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLnBhZ2luYXRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5jb250ZW50IC53cC1pbm5lci1jb250ZW50IC5wYWdpbmF0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAucGFnaW5hdGlvbiA+IGxpID4gYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogZ3JlZW47XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XG59XG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAucGFnaW5hdGlvbiA+IGxpID4gYTpmb2N1cyxcbi5jb250ZW50IC53cC1pbm5lci1jb250ZW50IC5wYWdpbmF0aW9uID4gbGkgPiBhOmhvdmVyLFxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLnBhZ2luYXRpb24gPiBsaSA+IHNwYW46Zm9jdXMsXG4uY29udGVudCAud3AtaW5uZXItY29udGVudCAucGFnaW5hdGlvbiA+IGxpID4gc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiBncmVlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGJvcmRlcjogc29saWQgMXB4IGdyZWVuO1xufVxuLmNvbnRlbnQgLndwLWlubmVyLWNvbnRlbnQgLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXI6IHNvbGlkIDFweCBncmVlbjtcbn1cbi5qb2ItcmVsYXRlZCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uam9iLXJlbGF0ZWQgLmxpc3Qtam9iIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmpvYi1yZWxhdGVkIC5saXN0LWpvYiAuam9iLWl0ZW06aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uam9iLXJlbGF0ZWQgLmxpc3Qtam9iIC5qb2ItaXRlbSAudGh1bWItaW1nIHtcbiAgd2lkdGg6IDg1cHg7XG4gIG1heC1oZWlnaHQ6IDkzcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC50aHVtYi1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTNweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5kZXNjLWpvYiB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5kZXNjLWpvYiBhLnBvc2l0aW9uIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogIzQ0NDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmpvYi1yZWxhdGVkIC5saXN0LWpvYiAuam9iLWl0ZW0gLmRlc2Mtam9iIGltZy5ob3QtbmV3IHtcbiAgd2lkdGg6IDMxcHg7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5kZXNjLWpvYiAubmFtZS1jb21wYW55IHtcbiAgY29sb3I6ICM0M2EwNDcgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5sb2NhdGlvbiB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5sb2NhdGlvbiBpIHtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5pbmZvLWRldGFpbCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4uam9iLXJlbGF0ZWQgLmxpc3Qtam9iIC5qb2ItaXRlbSAuaW5mby1kZXRhaWwgLnNhbGFyeSB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZsZXgtYmFzaXM6IDYwJTtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5pbmZvLWRldGFpbCAuc2FsYXJ5IGkge1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLmpvYi1yZWxhdGVkIC5saXN0LWpvYiAuam9iLWl0ZW0gLmluZm8tZGV0YWlsIC5kYXRlIHtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZmxleC1iYXNpczogNjAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5qb2ItcmVsYXRlZCAubGlzdC1qb2IgLmpvYi1pdGVtIC5pbmZvLWRldGFpbCAuZGF0ZSBpIHtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5qb2ItcmVsYXRlZCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIGJvdHRvbTogLTQ1cHg7XG59XG4uam9iLXJlbGF0ZWQgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkY2RjO1xufVxuLmpvYi1yZWxhdGVkIC5jYXJvdXNlbC1pbmRpY2F0b3JzIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmJsb2NrLWZpbmQtYWR2YW5jZSAuZmluZC1hZHZhbmNlIC5jb2wtbWQtMiB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxuICAuYmxvY2stZmluZC1hZHZhbmNlIC5maW5kLWFkdmFuY2UgLmJ0bi1zZWFyY2ggYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C1ListCandidateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-c1-list-candidate',
          templateUrl: './c1-list-candidate.component.html',
          styleUrls: ['./c1-list-candidate.component.scss']
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
  "./src/app/home-page/content/c1-list-candidate/c1-list-candidate.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/home-page/content/c1-list-candidate/c1-list-candidate.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: C1ListCandidateModule */

  /***/
  function srcAppHomePageContentC1ListCandidateC1ListCandidateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "C1ListCandidateModule", function () {
      return C1ListCandidateModule;
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


    var _c1_list_candidate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./c1-list-candidate.component */
    "./src/app/home-page/content/c1-list-candidate/c1-list-candidate.component.ts");

    var C1ListCandidateModule = function C1ListCandidateModule() {
      _classCallCheck(this, C1ListCandidateModule);
    };

    C1ListCandidateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: C1ListCandidateModule
    });
    C1ListCandidateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function C1ListCandidateModule_Factory(t) {
        return new (t || C1ListCandidateModule)();
      },
      imports: [[_nguniversal_common__WEBPACK_IMPORTED_MODULE_2__["TransferHttpCacheModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: _c1_list_candidate_component__WEBPACK_IMPORTED_MODULE_5__["C1ListCandidateComponent"],
        children: []
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](C1ListCandidateModule, {
        declarations: [_c1_list_candidate_component__WEBPACK_IMPORTED_MODULE_5__["C1ListCandidateComponent"]],
        imports: [_nguniversal_common__WEBPACK_IMPORTED_MODULE_2__["TransferHttpCacheModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C1ListCandidateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_c1_list_candidate_component__WEBPACK_IMPORTED_MODULE_5__["C1ListCandidateComponent"]],
          imports: [_nguniversal_common__WEBPACK_IMPORTED_MODULE_2__["TransferHttpCacheModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
            path: '',
            component: _c1_list_candidate_component__WEBPACK_IMPORTED_MODULE_5__["C1ListCandidateComponent"],
            children: []
          }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=c1-list-candidate-c1-list-candidate-module-es5.js.map