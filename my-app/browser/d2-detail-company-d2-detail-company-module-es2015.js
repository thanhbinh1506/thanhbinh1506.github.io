(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["d2-detail-company-d2-detail-company-module"],{

/***/ "./src/app/home-page/content/d2-detail-company/d2-detail-company.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/home-page/content/d2-detail-company/d2-detail-company.component.ts ***!
  \************************************************************************************/
/*! exports provided: D2DetailCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D2DetailCompanyComponent", function() { return D2DetailCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_api_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/api-service/api.service */ "./src/app/common/api-service/api.service.ts");




class D2DetailCompanyComponent {
    constructor(activatedRoute, api) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        /** for table */
        this.subscription = [];
        this.company = [];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(param => {
            console.log(param['idcompany']);
            this.selectedId = param['idcompany'];
        });
        this.onUpdadeNumberViewCompany();
        this.onLoadDetailCompany();
        // <div [innerHTML]="theHtmlString"></div>
    }
    /**
     * onUpdadeNumberViewCompany
     */
    onUpdadeNumberViewCompany() {
        const param = { "companyid": this.selectedId };
        this.api.excuteAllByWhat(param, '65').subscribe(data => {
        });
    }
    onLoadDetailCompany() {
        const param = { "companyid": this.selectedId };
        this.subscription.push(this.api.excuteAllByWhat(param, '68').subscribe(data => {
            if (data.length > 0) {
                this.company = data[0];
            }
        }));
    }
}
D2DetailCompanyComponent.ɵfac = function D2DetailCompanyComponent_Factory(t) { return new (t || D2DetailCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_api_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
D2DetailCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: D2DetailCompanyComponent, selectors: [["app-d2-detail-company"]], decls: 114, vars: 1, consts: [[1, "container"], [1, "header", "text-center", "pt-3"], ["href", "", 1, "thumb", "d-block"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "title"], [1, "desc", "text-left"], [1, "statistical"], [1, "row"], [1, "col-md-3", "col-6"], [1, "statistical-item", "text-center"], [1, "fa", "fa-cogs"], [1, "fa", "fa-users"], [1, "fa", "fa-building"], [1, "fa", "fa-star"], [1, "video", "text-center"], ["width", "80%", "height", "400", "src", "https://www.youtube.com/embed/omOA-BywI24", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "staffs"], [1, "title", "text-center"], [1, "staff"], ["src", "https://i.pinimg.com/originals/ba/ef/8c/baef8c84567c3ebadce92439a04bd387.jpg", "alt", ""], [1, "name"], [1, "position"], [1, "desc"], [1, "intro"], [1, "row", "no-gutters"], [1, "col-md-6"], [1, "thumb"], ["src", "https://pilbox.themuse.com/image.jpg?fmt=jpeg&w=900&h=900&q=90&mode=clip&pos=center&prog=1&url=https%3A%2F%2Fassets.themuse.com%2Fuploaded%2Fcompanies%2F979%2Fimage_modules%2F21838%2Fc76f10ed-bb39-4b07-ab94-2b7aef02dbd9.jpg", "alt", "", 1, "img-fluid"], [1, "desc-info"], [1, "row", "no-gutters", "mt-3"]], template: function D2DetailCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " V\u00EC m\u1ED9t cu\u1ED9c s\u1ED1ng t\u1ED1t \u0111\u1EB9p h\u01A1n cho ng\u01B0\u1EDDi Vi\u1EC7t ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ti\u1EC1n th\u00E2n c\u1EE7a Vingroup l\u00E0 T\u1EADp \u0111o\u00E0n Technocom, th\u00E0nh l\u1EADp n\u0103m 1993 t\u1EA1i Ucraina.\u0110\u1EBFn th\u00E1ng 1/2012, C\u00F4ng ty CP Vincom v\u00E0 C\u00F4ng ty CP Vinpearl s\u00E1p nh\u1EADp, ch\u00EDnh th\u1EE9c ho\u1EA1t \u0111\u1ED9ng d\u01B0\u1EDBi m\u00F4 h\u00ECnh T\u1EADp \u0111o\u00E0n v\u1EDBi t\u00EAn g\u1ECDi T\u1EADp \u0111o\u00E0n Vingroup \u2013 C\u00F4ng ty CP T\u1EADp \u0111o\u00E0n ho\u1EA1t \u0111\u1ED9ng trong 3 l\u0129nh v\u1EF1c kinh doanh c\u1ED1t l\u00F5i, bao g\u1ED3m: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2013 C\u00F4ng ngh\u1EC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u2013 C\u00F4ng nghi\u1EC7p ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u2013 Th\u01B0\u01A1ng m\u1EA1i D\u1ECBch v\u1EE5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " V\u1EDBi mong mu\u1ED1n \u0111em \u0111\u1EBFn cho th\u1ECB tr\u01B0\u1EDDng nh\u1EEFng s\u1EA3n ph\u1EA9m \u2013 d\u1ECBch v\u1EE5 theo ti\u00EAu chu\u1EA9n qu\u1ED1c t\u1EBF v\u00E0 nh\u1EEFng tr\u1EA3i nghi\u1EC7m ho\u00E0n to\u00E0n m\u1EDBi v\u1EC1 phong c\u00E1ch s\u1ED1ng hi\u1EC7n \u0111\u1EA1i, \u1EDF b\u1EA5t c\u1EE9 l\u0129nh v\u1EF1c n\u00E0o Vingroup c\u0169ng ch\u1EE9ng t\u1ECF vai tr\u00F2 ti\u00EAn phong, d\u1EABn d\u1EAFt s\u1EF1 thay \u0111\u1ED5i xu h\u01B0\u1EDBng ti\u00EAu d\u00F9ng. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "1993");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Operating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "+50,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "+1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Branches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "4.98/5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "iframe", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Nh\u00E2n Vi\u00EAn T\u1EA1i Vin-Group ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Diego L.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Manager Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Diego assists the store manager with day-to-day operations while working to develop the roles of his associates through hands-on sales coaching.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Diego L.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Manager Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Diego assists the store manager with day-to-day operations while working to develop the roles of his associates through hands-on sales coaching.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Diego L.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Manager Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Diego assists the store manager with day-to-day operations while working to develop the roles of his associates through hands-on sales coaching.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Diego L.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Manager Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Diego assists the store manager with day-to-day operations while working to develop the roles of his associates through hands-on sales coaching.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u0110\u1ED9i Ng\u0169 Nh\u00E2n S\u1EF1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam ipsa sint quae iure minus cumque minima, quaerat ullam eligendi alias? Ea excepturi voluptate quibusdam accusantium magnam voluptas aut reprehenderit incidunt distinctio praesentium vel, molestiae mollitia dolorum fuga quis dolores provident. Magni facere magnam maxime, eum culpa consequuntur deserunt. Voluptatem sit quam repellat, quas esse delectus enim perspiciatis, commodi dolorum voluptatum aspernatur corporis expedita perferendis labore iusto corrupti accusamus autem id nesciunt officiis eaque doloremque! A minima facilis consequuntur quidem sunt labore mollitia ut nihil? Debitis quod, et explicabo impedit magni maxime esse eaque fuga exercitationem sequi, voluptate, doloremque ex!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u0110\u1ED9i Ng\u0169 Nh\u00E2n S\u1EF1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam ipsa sint quae iure minus cumque minima, quaerat ullam eligendi alias? Ea excepturi voluptate quibusdam accusantium magnam voluptas aut reprehenderit incidunt distinctio praesentium vel, molestiae mollitia dolorum fuga quis dolores provident. Magni facere magnam maxime, eum culpa consequuntur deserunt. Voluptatem sit quam repellat, quas esse delectus enim perspiciatis, commodi dolorum voluptatum aspernatur corporis expedita perferendis labore iusto corrupti accusamus autem id nesciunt officiis eaque doloremque! A minima facilis consequuntur quidem sunt labore mollitia ut nihil? Debitis quod, et explicabo impedit magni maxime esse eaque fuga exercitationem sequi, voluptate, doloremque ex!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.company.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".header[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.header[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 179px;\n  height: 109px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 26px;\n  color: #333;\n  margin-bottom: 20px;\n}\n.statistical[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.statistical[_ngcontent-%COMP%]   .statistical-item[_ngcontent-%COMP%] {\n  padding: 25px 25px 25px 25px;\n  background-color: white;\n  box-shadow: 0 1px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-transition: box-shadow 0.3s, background-color 0.3s, color 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n  transition: box-shadow 0.3s, background-color 0.3s, color 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, color 0.3s, opacity 0.3s;\n  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, color 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n}\n@media (max-width: 575px) {\n  .statistical[_ngcontent-%COMP%]   .statistical-item[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n.statistical[_ngcontent-%COMP%]   .statistical-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.1);\n  -webkit-transform: translateY(-6px);\n          transform: translateY(-6px);\n  -webkit-transition: box-shadow 0.3s, background-color 0.3s, color 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n  transition: box-shadow 0.3s, background-color 0.3s, color 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, color 0.3s, opacity 0.3s;\n  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, color 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n}\n.statistical[_ngcontent-%COMP%]   .statistical-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 200%;\n  color: #22924c;\n}\n.statistical[_ngcontent-%COMP%]   .statistical-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 200%;\n  color: #22924c;\n  margin-bottom: 0px;\n}\n.statistical[_ngcontent-%COMP%]   .statistical-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #333;\n}\n.staffs[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 25px;\n  margin-top: 20px;\n  margin-bottom: 25px;\n}\n.staffs[_ngcontent-%COMP%]   .staff[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.staffs[_ngcontent-%COMP%]   .staff[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.staffs[_ngcontent-%COMP%]   .staff[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 21px;\n  color: #333;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n.staffs[_ngcontent-%COMP%]   .staff[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  margin: 0;\n}\n.staffs[_ngcontent-%COMP%]   .staff[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #999;\n  margin-top: 0px;\n}\n.intro[_ngcontent-%COMP%] {\n  background-color: #f2f0f0;\n  padding-bottom: 30px;\n}\n.intro[_ngcontent-%COMP%]   .desc-info[_ngcontent-%COMP%] {\n  padding: 20px 40px 0px 40px;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2NvbnRlbnQvZDItZGV0YWlsLWNvbXBhbnkvRTpcXGZlLXVzZXItam9icy9zcmNcXGFwcFxcaG9tZS1wYWdlXFxjb250ZW50XFxkMi1kZXRhaWwtY29tcGFueVxcZDItZGV0YWlsLWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9jb250ZW50L2QyLWRldGFpbC1jb21wYW55L2QyLWRldGFpbC1jb21wYW55LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7QUNBUjtBRENRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDQ1o7QURFSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0FSO0FER0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURDSTtFQUNJLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2RUFBQTtFQUNBLDRHQUFBO0VBQUEsb0dBQUE7RUFBQSw0RkFBQTtFQUFBLG9IQUFBO0FDQ1I7QURBUTtFQUxKO0lBTVEsbUJBQUE7RUNHVjtBQUNGO0FERlE7RUFDSSwyRUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSw0R0FBQTtFQUFBLG9HQUFBO0VBQUEsNEZBQUE7RUFBQSxvSEFBQTtBQ0laO0FERlE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0laO0FERlE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDSVo7QURGUTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0laO0FEQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0FDRVI7QUREUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDR1o7QUREUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNHWjtBRERRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ0daO0FERFE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNHWjtBREVBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQUk7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvY29udGVudC9kMi1kZXRhaWwtY29tcGFueS9kMi1kZXRhaWwtY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgLnRodW1iIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE3OXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwOXB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxufVxyXG4uc3RhdGlzdGljYWwge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAuc3RhdGlzdGljYWwtaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAyNXB4IDI1cHggMjVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzLCBjb2xvciAwLjNzLCBvcGFjaXR5IDAuM3M7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzLCBjb2xvciAwLjNzLCBvcGFjaXR5IDAuM3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwMCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjI5MjRjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjAwJTtcclxuICAgICAgICAgICAgY29sb3I6ICMyMjkyNGM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnN0YWZmcyB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuICAgIC5zdGFmZiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvc2l0aW9uIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXNjIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmludHJvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MCwgMjQwKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgLmRlc2MtaW5mbyB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCA0MHB4IDBweCA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcbn1cclxuIiwiLmhlYWRlciAudGh1bWIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZGVyIC50aHVtYiBpbWcge1xuICB3aWR0aDogMTc5cHg7XG4gIGhlaWdodDogMTA5cHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uaGVhZGVyIC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zdGF0aXN0aWNhbCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc3RhdGlzdGljYWwgLnN0YXRpc3RpY2FsLWl0ZW0ge1xuICBwYWRkaW5nOiAyNXB4IDI1cHggMjVweCAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcywgY29sb3IgMC4zcywgb3BhY2l0eSAwLjNzO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5zdGF0aXN0aWNhbCAuc3RhdGlzdGljYWwtaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuLnN0YXRpc3RpY2FsIC5zdGF0aXN0aWNhbC1pdGVtOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcywgY29sb3IgMC4zcywgb3BhY2l0eSAwLjNzO1xufVxuLnN0YXRpc3RpY2FsIC5zdGF0aXN0aWNhbC1pdGVtIGkge1xuICBmb250LXNpemU6IDIwMCU7XG4gIGNvbG9yOiAjMjI5MjRjO1xufVxuLnN0YXRpc3RpY2FsIC5zdGF0aXN0aWNhbC1pdGVtIGgzIHtcbiAgZm9udC1zaXplOiAyMDAlO1xuICBjb2xvcjogIzIyOTI0YztcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnN0YXRpc3RpY2FsIC5zdGF0aXN0aWNhbC1pdGVtIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5zdGFmZnMgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnN0YWZmcyAuc3RhZmYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3RhZmZzIC5zdGFmZiBpbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uc3RhZmZzIC5zdGFmZiAubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnN0YWZmcyAuc3RhZmYgLnBvc2l0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDA7XG59XG4uc3RhZmZzIC5zdGFmZiAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM5OTk7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmludHJvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjBmMDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4uaW50cm8gLmRlc2MtaW5mbyB7XG4gIHBhZGRpbmc6IDIwcHggNDBweCAwcHggNDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](D2DetailCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-d2-detail-company',
                templateUrl: './d2-detail-company.component.html',
                styleUrls: ['./d2-detail-company.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_common_api_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home-page/content/d2-detail-company/d2-detail-company.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home-page/content/d2-detail-company/d2-detail-company.module.ts ***!
  \*********************************************************************************/
/*! exports provided: D2DetailCompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D2DetailCompanyModule", function() { return D2DetailCompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nguniversal/common */ "./node_modules/@nguniversal/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _d2_detail_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./d2-detail-company.component */ "./src/app/home-page/content/d2-detail-company/d2-detail-company.component.ts");








class D2DetailCompanyModule {
}
D2DetailCompanyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: D2DetailCompanyModule });
D2DetailCompanyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function D2DetailCompanyModule_Factory(t) { return new (t || D2DetailCompanyModule)(); }, imports: [[
            _nguniversal_common__WEBPACK_IMPORTED_MODULE_2__["TransferHttpCacheModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _d2_detail_company_component__WEBPACK_IMPORTED_MODULE_5__["D2DetailCompanyComponent"],
                    children: []
                }
            ]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](D2DetailCompanyModule, { declarations: [_d2_detail_company_component__WEBPACK_IMPORTED_MODULE_5__["D2DetailCompanyComponent"]], imports: [_nguniversal_common__WEBPACK_IMPORTED_MODULE_2__["TransferHttpCacheModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](D2DetailCompanyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_d2_detail_company_component__WEBPACK_IMPORTED_MODULE_5__["D2DetailCompanyComponent"]],
                imports: [
                    _nguniversal_common__WEBPACK_IMPORTED_MODULE_2__["TransferHttpCacheModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _d2_detail_company_component__WEBPACK_IMPORTED_MODULE_5__["D2DetailCompanyComponent"],
                            children: []
                        }
                    ]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=d2-detail-company-d2-detail-company-module-es2015.js.map