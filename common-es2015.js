(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/common/api-service/api.service.ts":
/*!***************************************************!*\
  !*** ./src/app/common/api-service/api.service.ts ***!
  \***************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cookie-service */ "./src/app/common/api-service/cookie-service.ts");
/* harmony import */ var _send_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-data.service */ "./src/app/common/api-service/send-data.service.ts");








// import { Security } from './security';
class ApiService {
    // protected se: Security = new Security();
    constructor(httpClient, toastrService, cookie, sendDataService) {
        this.httpClient = httpClient;
        this.toastrService = toastrService;
        this.cookie = cookie;
        this.sendDataService = sendDataService;
        this.url = '';
        this.getAllWhatUrl = '';
        this.audio = new Audio();
        this.language = 'vn';
        this.candidateId = '24';
        this.url = "http://localhost:8000/api/";
        this.url = "http://localhost/test/selectAllByWhat.php";
        this.url = "http://35.240.200.20/src/Controller/SelectAllByWhat.php";
        this.url = "http://hoctienganhphanxa.com/hoctienganhphanxa.com/hce/youngpinejobapi/Controller/SelectAllByWhatFE.php";
        // init data language
        if (this.cookie.getCookie('language') == null) {
            this.cookie.setCookie('language', 'vn');
        }
    }
    /**
     * get Language
     */
    getLanguage() {
        if (this.cookie.getCookie('language') != null) {
            this.language = this.cookie.getCookie('language');
        }
        return this.language;
    }
    /**
     *
     * @param param
     * @param what
     */
    excuteAllByWhat(param, what) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        param.what = what;
        this.getAllWhatUrl = this.url;
        // console.log('Param input', JSON.stringify(param));
        // decode
        // param = this.se.encode1(param);
        return this.httpClient.post(this.getAllWhatUrl, JSON.stringify(param), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response;
        }));
    }
    /**
     * convert To Data
     * @param data
     */
    convertToData(data) {
        data = JSON.parse(data + '');
        let result = [];
        data.forEach(item => {
            item.fields.id = item.pk;
            result.push(item.fields);
        });
        return result;
    }
    /**
     *
     * @param date
     */
    formatDate(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return date.getFullYear() + '-'
            + (month > 9 ? month : ('0' + month)) + '-'
            + (day > 9 ? day : ('0' + day));
    }
    /**
     *
     * @param param
     * @param what
     */
    excuteAllByWhatWithUrl(url, param, what) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token',
                'Access-Control-Allow-Origin': '*',
            })
        };
        this.getAllWhatUrl = this.url + what;
        console.log('Param input', JSON.stringify(param));
        return this.httpClient.post(url, JSON.stringify(param), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response.json()));
    }
    showError(mess) {
        this.toastrService.error('Pinks Ways!', mess, {
            timeOut: 1500,
            progressBar: true
        });
    }
    showSuccess(mess) {
        this.toastrService.success('Pinks Ways!', mess + '!', {
            timeOut: 1500,
            progressBar: true
        });
    }
    showWarning(mess) {
        this.toastrService.warning('Pinks Ways!', mess + '!', {
            timeOut: 1500,
            progressBar: true
        });
    }
    playSuccess() {
        this.audio = new Audio();
        this.audio.src = "../../assets/sounds/beep-02.wav";
        this.audio.load();
        this.audio.play();
    }
    playError() {
        this.audio = new Audio();
        this.audio.src = "../../assets/sounds/beep-05.wav";
        this.audio.load();
        this.audio.play();
    }
    /**
     * format Html Tag
     * @param content
     */
    formatHtmlTag(content) {
        let result;
        let dummyElem = document.createElement('DIV');
        dummyElem.innerHTML = content;
        document.body.appendChild(dummyElem);
        result = dummyElem.textContent;
        document.body.removeChild(dummyElem);
        return result;
    }
    /**
      * bỏ dấu tiếng việt để search
    */
    cleanAccents(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        // Combining Diacritical Marks
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // huyền, sắc, hỏi, ngã, nặng 
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // mũ â (ê), mũ ă, mũ ơ (ư)
        return str;
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CRUDCookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_send_data_service__WEBPACK_IMPORTED_MODULE_5__["SendDataService"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _cookie_service__WEBPACK_IMPORTED_MODULE_4__["CRUDCookieService"] }, { type: _send_data_service__WEBPACK_IMPORTED_MODULE_5__["SendDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/api-service/send-data.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/api-service/send-data.service.ts ***!
  \*********************************************************/
/*! exports provided: SendDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendDataService", function() { return SendDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class SendDataService {
    constructor() {
        this.sendData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sendDataLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.data$ = this.sendData.asObservable();
        this.language$ = this.sendDataLanguage.asObservable();
    }
    /**
     * set Data Send
     * @param data
     */
    setDataSend(data) {
        this.sendData.next(data);
    }
    /**
     * set Data Language
     * @param data
     */
    setDataLanguage(data) {
        this.sendDataLanguage.next(data);
    }
}
SendDataService.ɵfac = function SendDataService_Factory(t) { return new (t || SendDataService)(); };
SendDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SendDataService, factory: SendDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/common/core/login-cookie.ts":
/*!*********************************************!*\
  !*** ./src/app/common/core/login-cookie.ts ***!
  \*********************************************/
/*! exports provided: LoginCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCookie", function() { return LoginCookie; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
// import { CookieService } from 'ngx-cookie-service';


class LoginCookie {
    constructor() {
        this.accountLogin = '0';
    }
}
LoginCookie.ɵfac = function LoginCookie_Factory(t) { return new (t || LoginCookie)(); };
LoginCookie.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginCookie, factory: LoginCookie.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginCookie, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map