function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-content-module"], {
  /***/
  "./src/app/home-page/content/content.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/home-page/content/content.component.ts ***!
    \********************************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppHomePageContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ContentComponent = /*#__PURE__*/function () {
      function ContentComponent() {
        _classCallCheck(this, ContentComponent);
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContentComponent;
    }();

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)();
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["app-content"]],
      decls: 1,
      vars: 0,
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".display-none[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2NvbnRlbnQvRTpcXGZlLXVzZXItam9icy9zcmNcXGFwcFxcaG9tZS1wYWdlXFxjb250ZW50XFxjb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2UvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIiwiLmRpc3BsYXktbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-content',
          templateUrl: './content.component.html',
          styleUrls: ['./content.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-page/content/content.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home-page/content/content.module.ts ***!
    \*****************************************************/

  /*! exports provided: ContentModule */

  /***/
  function srcAppHomePageContentContentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentModule", function () {
      return ContentModule;
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


    var _content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./content.component */
    "./src/app/home-page/content/content.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nguniversal_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nguniversal/common */
    "./node_modules/@nguniversal/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_api_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../common/api-service/api.service */
    "./src/app/common/api-service/api.service.ts");

    var ContentModule = function ContentModule() {
      _classCallCheck(this, ContentModule);
    };

    ContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContentModule
    });
    ContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ContentModule_Factory(t) {
        return new (t || ContentModule)();
      },
      providers: [_common_api_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]],
      imports: [[_nguniversal_common__WEBPACK_IMPORTED_MODULE_4__["TransferHttpCacheModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: _content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | a1-home-a1-home-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("a1-home-a1-home-module")]).then(__webpack_require__.bind(null,
            /*! ./a1-home/a1-home.module */
            "./src/app/home-page/content/a1-home/a1-home.module.ts")).then(function (m) {
              return m.A1HomeModule;
            });
          }
        }, {
          path: 'a1-home',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | a1-home-a1-home-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("a1-home-a1-home-module")]).then(__webpack_require__.bind(null,
            /*! ./a1-home/a1-home.module */
            "./src/app/home-page/content/a1-home/a1-home.module.ts")).then(function (m) {
              return m.A1HomeModule;
            });
          }
        }, {
          path: 'b1-list-work/:career/:city/:salary/:exp/:typeofwork/:sex/:keyword',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | b1-list-work-b1-list-work-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("b1-list-work-b1-list-work-module")]).then(__webpack_require__.bind(null,
            /*! ./b1-list-work/b1-list-work.module */
            "./src/app/home-page/content/b1-list-work/b1-list-work.module.ts")).then(function (m) {
              return m.B1ListWorkModule;
            });
          }
        }, {
          path: 'b2-detail-work/:idjob',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | b2-detail-work-b2-detail-work-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("b2-detail-work-b2-detail-work-module")]).then(__webpack_require__.bind(null,
            /*! ./b2-detail-work/b2-detail-work.module */
            "./src/app/home-page/content/b2-detail-work/b2-detail-work.module.ts")).then(function (m) {
              return m.B2DetailWorkModule;
            });
          }
        }, {
          path: 'c1-list-candidate/:career/:city/:salary/:exp/:typeofwork/:sex/:keyword',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | c1-list-candidate-c1-list-candidate-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("c1-list-candidate-c1-list-candidate-module")]).then(__webpack_require__.bind(null,
            /*! ./c1-list-candidate/c1-list-candidate.module */
            "./src/app/home-page/content/c1-list-candidate/c1-list-candidate.module.ts")).then(function (m) {
              return m.C1ListCandidateModule;
            });
          }
        }, {
          path: 'c2-detail-candidate/:idcandidate',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | c2-detail-candidate-c2-detail-candidate-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("c2-detail-candidate-c2-detail-candidate-module")]).then(__webpack_require__.bind(null,
            /*! ./c2-detail-candidate/c2-detail-candidate.module */
            "./src/app/home-page/content/c2-detail-candidate/c2-detail-candidate.module.ts")).then(function (m) {
              return m.C2DetailCandidateModule;
            });
          }
        }, {
          path: 'd1-list-company/:career/:city/:keyword',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | d1-list-company-d1-list-company-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("d1-list-company-d1-list-company-module")]).then(__webpack_require__.bind(null,
            /*! ./d1-list-company/d1-list-company.module */
            "./src/app/home-page/content/d1-list-company/d1-list-company.module.ts")).then(function (m) {
              return m.D1ListCompanyModule;
            });
          }
        }, {
          path: 'd2-detail-company/:idcompany',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | d2-detail-company-d2-detail-company-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("d2-detail-company-d2-detail-company-module")]).then(__webpack_require__.bind(null,
            /*! ./d2-detail-company/d2-detail-company.module */
            "./src/app/home-page/content/d2-detail-company/d2-detail-company.module.ts")).then(function (m) {
              return m.D2DetailCompanyModule;
            });
          }
        }, {
          path: 'e1-coaching',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | e1-coaching-e1-coaching-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("e1-coaching-e1-coaching-module")]).then(__webpack_require__.bind(null,
            /*! ./e1-coaching/e1-coaching.module */
            "./src/app/home-page/content/e1-coaching/e1-coaching.module.ts")).then(function (m) {
              return m.E1CoachingModule;
            });
          }
        }, {
          path: 'e2-list-coaching',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | e2-list-coaching-e2-list-coaching-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("e2-list-coaching-e2-list-coaching-module")]).then(__webpack_require__.bind(null,
            /*! ./e2-list-coaching/e2-list-coaching.module */
            "./src/app/home-page/content/e2-list-coaching/e2-list-coaching.module.ts")).then(function (m) {
              return m.E2ListCoachingModule;
            });
          }
        }, {
          path: 'e3-detail-coaching/:idcoaching',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | e3-detail-coaching-e3-detail-coaching-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("e3-detail-coaching-e3-detail-coaching-module")]).then(__webpack_require__.bind(null,
            /*! ./e3-detail-coaching/e3-detail-coaching.module */
            "./src/app/home-page/content/e3-detail-coaching/e3-detail-coaching.module.ts")).then(function (m) {
              return m.E3DetailCoachingModule;
            });
          }
        }, {
          path: 'e4-checkout-coaching/:idcoaching/:idpackage',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | e4-checkout-coaching-e4-checkout-coaching-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("e4-checkout-coaching-e4-checkout-coaching-module")]).then(__webpack_require__.bind(null,
            /*! ./e4-checkout-coaching/e4-checkout-coaching.module */
            "./src/app/home-page/content/e4-checkout-coaching/e4-checkout-coaching.module.ts")).then(function (m) {
              return m.E4CheckoutCoachingModule;
            });
          }
        }, {
          path: 'f1-company',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | f1-company-f1-company-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("f1-company-f1-company-module")]).then(__webpack_require__.bind(null,
            /*! ./f1-company/f1-company.module */
            "./src/app/home-page/content/f1-company/f1-company.module.ts")).then(function (m) {
              return m.F1CompanyModule;
            });
          }
        }, {
          path: 'f2-login-company',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | f2-login-company-f2-login-company-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("f2-login-company-f2-login-company-module")]).then(__webpack_require__.bind(null,
            /*! ./f2-login-company/f2-login-company.module */
            "./src/app/home-page/content/f2-login-company/f2-login-company.module.ts")).then(function (m) {
              return m.F2LoginCompanyModule;
            });
          }
        }, {
          path: 'f3-register-company',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | f3-register-company-f3-register-company-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("f3-register-company-f3-register-company-module")]).then(__webpack_require__.bind(null,
            /*! ./f3-register-company/f3-register-company.module */
            "./src/app/home-page/content/f3-register-company/f3-register-company.module.ts")).then(function (m) {
              return m.F3RegisterCompanyModule;
            });
          }
        }, {
          path: 'f4-login-candidate',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | f4-login-candidate-f4-login-candidate-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("f4-login-candidate-f4-login-candidate-module")]).then(__webpack_require__.bind(null,
            /*! ./f4-login-candidate/f4-login-candidate.module */
            "./src/app/home-page/content/f4-login-candidate/f4-login-candidate.module.ts")).then(function (m) {
              return m.F4LoginCandidateModule;
            });
          }
        }, {
          path: 'f5-register-candidate',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | f5-register-candidate-f5-register-candidate-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("f5-register-candidate-f5-register-candidate-module")]).then(__webpack_require__.bind(null,
            /*! ./f5-register-candidate/f5-register-candidate.module */
            "./src/app/home-page/content/f5-register-candidate/f5-register-candidate.module.ts")).then(function (m) {
              return m.F5RegisterCandidateModule;
            });
          }
        }, {
          path: 'g1-contact',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | g1-contact-g1-contact-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("g1-contact-g1-contact-module")]).then(__webpack_require__.bind(null,
            /*! ./g1-contact/g1-contact.module */
            "./src/app/home-page/content/g1-contact/g1-contact.module.ts")).then(function (m) {
              return m.G1ContactModule;
            });
          }
        }, {
          path: 'h1-thank-you',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | h1-thank-you-h1-thank-you-module */
            [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("h1-thank-you-h1-thank-you-module")]).then(__webpack_require__.bind(null,
            /*! ./h1-thank-you/h1-thank-you.module */
            "./src/app/home-page/content/h1-thank-you/h1-thank-you.module.ts")).then(function (m) {
              return m.H1ThankYouModule;
            });
          }
        }]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentModule, {
        declarations: [_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"]],
        imports: [_nguniversal_common__WEBPACK_IMPORTED_MODULE_4__["TransferHttpCacheModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"]],
          imports: [_nguniversal_common__WEBPACK_IMPORTED_MODULE_4__["TransferHttpCacheModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
            path: '',
            component: _content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"],
            children: [{
              path: '',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | a1-home-a1-home-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("a1-home-a1-home-module")]).then(__webpack_require__.bind(null,
                /*! ./a1-home/a1-home.module */
                "./src/app/home-page/content/a1-home/a1-home.module.ts")).then(function (m) {
                  return m.A1HomeModule;
                });
              }
            }, {
              path: 'a1-home',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | a1-home-a1-home-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("a1-home-a1-home-module")]).then(__webpack_require__.bind(null,
                /*! ./a1-home/a1-home.module */
                "./src/app/home-page/content/a1-home/a1-home.module.ts")).then(function (m) {
                  return m.A1HomeModule;
                });
              }
            }, {
              path: 'b1-list-work/:career/:city/:salary/:exp/:typeofwork/:sex/:keyword',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | b1-list-work-b1-list-work-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("b1-list-work-b1-list-work-module")]).then(__webpack_require__.bind(null,
                /*! ./b1-list-work/b1-list-work.module */
                "./src/app/home-page/content/b1-list-work/b1-list-work.module.ts")).then(function (m) {
                  return m.B1ListWorkModule;
                });
              }
            }, {
              path: 'b2-detail-work/:idjob',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | b2-detail-work-b2-detail-work-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("b2-detail-work-b2-detail-work-module")]).then(__webpack_require__.bind(null,
                /*! ./b2-detail-work/b2-detail-work.module */
                "./src/app/home-page/content/b2-detail-work/b2-detail-work.module.ts")).then(function (m) {
                  return m.B2DetailWorkModule;
                });
              }
            }, {
              path: 'c1-list-candidate/:career/:city/:salary/:exp/:typeofwork/:sex/:keyword',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | c1-list-candidate-c1-list-candidate-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("c1-list-candidate-c1-list-candidate-module")]).then(__webpack_require__.bind(null,
                /*! ./c1-list-candidate/c1-list-candidate.module */
                "./src/app/home-page/content/c1-list-candidate/c1-list-candidate.module.ts")).then(function (m) {
                  return m.C1ListCandidateModule;
                });
              }
            }, {
              path: 'c2-detail-candidate/:idcandidate',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | c2-detail-candidate-c2-detail-candidate-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("c2-detail-candidate-c2-detail-candidate-module")]).then(__webpack_require__.bind(null,
                /*! ./c2-detail-candidate/c2-detail-candidate.module */
                "./src/app/home-page/content/c2-detail-candidate/c2-detail-candidate.module.ts")).then(function (m) {
                  return m.C2DetailCandidateModule;
                });
              }
            }, {
              path: 'd1-list-company/:career/:city/:keyword',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | d1-list-company-d1-list-company-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("d1-list-company-d1-list-company-module")]).then(__webpack_require__.bind(null,
                /*! ./d1-list-company/d1-list-company.module */
                "./src/app/home-page/content/d1-list-company/d1-list-company.module.ts")).then(function (m) {
                  return m.D1ListCompanyModule;
                });
              }
            }, {
              path: 'd2-detail-company/:idcompany',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | d2-detail-company-d2-detail-company-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("d2-detail-company-d2-detail-company-module")]).then(__webpack_require__.bind(null,
                /*! ./d2-detail-company/d2-detail-company.module */
                "./src/app/home-page/content/d2-detail-company/d2-detail-company.module.ts")).then(function (m) {
                  return m.D2DetailCompanyModule;
                });
              }
            }, {
              path: 'e1-coaching',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | e1-coaching-e1-coaching-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("e1-coaching-e1-coaching-module")]).then(__webpack_require__.bind(null,
                /*! ./e1-coaching/e1-coaching.module */
                "./src/app/home-page/content/e1-coaching/e1-coaching.module.ts")).then(function (m) {
                  return m.E1CoachingModule;
                });
              }
            }, {
              path: 'e2-list-coaching',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | e2-list-coaching-e2-list-coaching-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("e2-list-coaching-e2-list-coaching-module")]).then(__webpack_require__.bind(null,
                /*! ./e2-list-coaching/e2-list-coaching.module */
                "./src/app/home-page/content/e2-list-coaching/e2-list-coaching.module.ts")).then(function (m) {
                  return m.E2ListCoachingModule;
                });
              }
            }, {
              path: 'e3-detail-coaching/:idcoaching',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | e3-detail-coaching-e3-detail-coaching-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("e3-detail-coaching-e3-detail-coaching-module")]).then(__webpack_require__.bind(null,
                /*! ./e3-detail-coaching/e3-detail-coaching.module */
                "./src/app/home-page/content/e3-detail-coaching/e3-detail-coaching.module.ts")).then(function (m) {
                  return m.E3DetailCoachingModule;
                });
              }
            }, {
              path: 'e4-checkout-coaching/:idcoaching/:idpackage',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | e4-checkout-coaching-e4-checkout-coaching-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("e4-checkout-coaching-e4-checkout-coaching-module")]).then(__webpack_require__.bind(null,
                /*! ./e4-checkout-coaching/e4-checkout-coaching.module */
                "./src/app/home-page/content/e4-checkout-coaching/e4-checkout-coaching.module.ts")).then(function (m) {
                  return m.E4CheckoutCoachingModule;
                });
              }
            }, {
              path: 'f1-company',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | f1-company-f1-company-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("f1-company-f1-company-module")]).then(__webpack_require__.bind(null,
                /*! ./f1-company/f1-company.module */
                "./src/app/home-page/content/f1-company/f1-company.module.ts")).then(function (m) {
                  return m.F1CompanyModule;
                });
              }
            }, {
              path: 'f2-login-company',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | f2-login-company-f2-login-company-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("f2-login-company-f2-login-company-module")]).then(__webpack_require__.bind(null,
                /*! ./f2-login-company/f2-login-company.module */
                "./src/app/home-page/content/f2-login-company/f2-login-company.module.ts")).then(function (m) {
                  return m.F2LoginCompanyModule;
                });
              }
            }, {
              path: 'f3-register-company',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | f3-register-company-f3-register-company-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("f3-register-company-f3-register-company-module")]).then(__webpack_require__.bind(null,
                /*! ./f3-register-company/f3-register-company.module */
                "./src/app/home-page/content/f3-register-company/f3-register-company.module.ts")).then(function (m) {
                  return m.F3RegisterCompanyModule;
                });
              }
            }, {
              path: 'f4-login-candidate',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | f4-login-candidate-f4-login-candidate-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("f4-login-candidate-f4-login-candidate-module")]).then(__webpack_require__.bind(null,
                /*! ./f4-login-candidate/f4-login-candidate.module */
                "./src/app/home-page/content/f4-login-candidate/f4-login-candidate.module.ts")).then(function (m) {
                  return m.F4LoginCandidateModule;
                });
              }
            }, {
              path: 'f5-register-candidate',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | f5-register-candidate-f5-register-candidate-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("f5-register-candidate-f5-register-candidate-module")]).then(__webpack_require__.bind(null,
                /*! ./f5-register-candidate/f5-register-candidate.module */
                "./src/app/home-page/content/f5-register-candidate/f5-register-candidate.module.ts")).then(function (m) {
                  return m.F5RegisterCandidateModule;
                });
              }
            }, {
              path: 'g1-contact',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | g1-contact-g1-contact-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("g1-contact-g1-contact-module")]).then(__webpack_require__.bind(null,
                /*! ./g1-contact/g1-contact.module */
                "./src/app/home-page/content/g1-contact/g1-contact.module.ts")).then(function (m) {
                  return m.G1ContactModule;
                });
              }
            }, {
              path: 'h1-thank-you',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | h1-thank-you-h1-thank-you-module */
                [__webpack_require__.e("default~a1-home-a1-home-module~b1-list-work-b1-list-work-module~b2-detail-work-b2-detail-work-module~53965d9c"), __webpack_require__.e("h1-thank-you-h1-thank-you-module")]).then(__webpack_require__.bind(null,
                /*! ./h1-thank-you/h1-thank-you.module */
                "./src/app/home-page/content/h1-thank-you/h1-thank-you.module.ts")).then(function (m) {
                  return m.H1ThankYouModule;
                });
              }
            }]
          }])],
          providers: [_common_api_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]],
          entryComponents: []
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=content-content-module-es5.js.map