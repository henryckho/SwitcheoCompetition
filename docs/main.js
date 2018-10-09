(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <h2><span class=\"switcheo-text\">Switcheo</span> Contract Wallet</h2>\r\n        </div>\r\n    </div>\r\n    <sc-contract (loadLogin)=\"loadLogin()\" (changeContract)=\"changeContract()\"></sc-contract>\r\n    <sc-login *ngIf=\"loadLoginComponent\" (loadWallet)=\"loadWallet()\" (logoutWallet)=\"logoutWallet()\"></sc-login>\r\n    <sc-wallet *ngIf=\"loadWalletComponent\"></sc-wallet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet.service */ "./src/app/wallet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(walletService) {
        this.walletService = walletService;
        this.title = 'Switcheo Competition';
        this.loadLoginComponent = false;
        this.loadWalletComponent = false;
    }
    AppComponent.prototype.loadLogin = function () {
        this.loadLoginComponent = true;
        this.loadWalletComponent = false;
    };
    AppComponent.prototype.changeContract = function () {
        this.loadLoginComponent = false;
        this.logoutWallet();
    };
    AppComponent.prototype.loadWallet = function () {
        this.loadWalletComponent = true;
    };
    AppComponent.prototype.logoutWallet = function () {
        this.walletService.logout();
        this.loadWalletComponent = false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_wallet_service__WEBPACK_IMPORTED_MODULE_1__["WalletService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    MAINNET_URL: "https://api.switcheo.network/v2",
    TESTNET_URL: "https://test-api.switcheo.network/v2",
    IMG_DIR: "https://henryckho.github.io/NeoBlockXp/img/",
    LOGIN_ERROR_MESSAGE: "Failed to login. Please make sure your private key is valid.",
    REFRESH_WALLET_MESSAGE: "You can only refresh contract balance once every minute",
    WITHDRAW_INVALID_AMOUNT_MESSAGE: "Attempting to withdraw an invalid amount"
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sc_login_sc_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sc-login/sc-login.component */ "./src/app/sc-login/sc-login.component.ts");
/* harmony import */ var _sc_wallet_sc_wallet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sc-wallet/sc-wallet.component */ "./src/app/sc-wallet/sc-wallet.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _sc_contract_sc_contract_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sc-contract/sc-contract.component */ "./src/app/sc-contract/sc-contract.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _sc_login_sc_login_component__WEBPACK_IMPORTED_MODULE_4__["SCLoginComponent"],
                _sc_wallet_sc_wallet_component__WEBPACK_IMPORTED_MODULE_5__["SCWalletComponent"],
                _sc_contract_sc_contract_component__WEBPACK_IMPORTED_MODULE_7__["SCContractComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/enum/ContractVersion.ts":
/*!*****************************************!*\
  !*** ./src/app/enum/ContractVersion.ts ***!
  \*****************************************/
/*! exports provided: ContractVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractVersion", function() { return ContractVersion; });
var ContractVersion;
(function (ContractVersion) {
    ContractVersion[ContractVersion["V1"] = 0] = "V1";
    ContractVersion[ContractVersion["V1_5"] = 1] = "V1_5";
    ContractVersion[ContractVersion["V2"] = 2] = "V2";
})(ContractVersion || (ContractVersion = {}));


/***/ }),

/***/ "./src/app/enum/DeploymentType.ts":
/*!****************************************!*\
  !*** ./src/app/enum/DeploymentType.ts ***!
  \****************************************/
/*! exports provided: DeploymentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentType", function() { return DeploymentType; });
var DeploymentType;
(function (DeploymentType) {
    DeploymentType[DeploymentType["Testnet"] = 0] = "Testnet";
    DeploymentType[DeploymentType["Mainnet"] = 1] = "Mainnet";
})(DeploymentType || (DeploymentType = {}));


/***/ }),

/***/ "./src/app/sc-contract/sc-contract.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sc-contract/sc-contract.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge {\r\n    margin-right: 5px; \r\n}"

/***/ }),

/***/ "./src/app/sc-contract/sc-contract.component.html":
/*!********************************************************!*\
  !*** ./src/app/sc-contract/sc-contract.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <b class=\"text-info\">Step 1: Select Switcheo contract</b>\r\n    </div>\r\n    <div class=\"col-12\">\r\n        <span class=\"badge badge-pill badge-light\">!</span><span class=\"text-white\">This is defaulted to Mainnet v2 upon start up</span>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col\">\r\n        <div class=\"form-row justify-content-center\">\r\n            <div class=\"col-auto\">\r\n                <select class=\"custom-select custom-select-sm\" [(ngModel)]=\"deploymentType\" [disabled]=\"selectedContract\">\r\n                    <option value=\"0\">Testnet</option>\r\n                    <option value=\"1\">Mainnet</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-auto\">\r\n                <select class=\"custom-select custom-select-sm\" [(ngModel)]=\"contractVersion\" [disabled]=\"selectedContract\">\r\n                    <option value=\"0\">v1</option>\r\n                    <option value=\"1\">v1.5</option>\r\n                    <option value=\"2\">v2</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-auto\" *ngIf=\"selectedContract\">\r\n                <button class=\"btn btn-danger btn-sm\" (click)=\"editContract()\">\r\n                    Edit\r\n                </button>\r\n            </div>\r\n            <div class=\"col-auto\" *ngIf=\"!selectedContract\">\r\n                <button class=\"btn btn-success btn-sm\" (click)=\"selectContract()\">\r\n                    Submit\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sc-contract/sc-contract.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sc-contract/sc-contract.component.ts ***!
  \******************************************************/
/*! exports provided: SCContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCContractComponent", function() { return SCContractComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _switcheo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switcheo.service */ "./src/app/switcheo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SCContractComponent = /** @class */ (function () {
    function SCContractComponent(switcheoService) {
        this.switcheoService = switcheoService;
        this.loadLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeContract = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deploymentType = "1";
        this.contractVersion = "2";
        this.selectedContract = false;
    }
    SCContractComponent.prototype.ngOnInit = function () {
        this.selectContract();
    };
    SCContractComponent.prototype.editContract = function () {
        this.selectedContract = false;
        this.changeContract.emit();
    };
    SCContractComponent.prototype.selectContract = function () {
        var _this = this;
        this.selectedContract = true;
        var deploymentType = parseInt(this.deploymentType);
        var contractVersion = parseInt(this.contractVersion);
        this.switcheoService.selectContract(deploymentType, contractVersion)
            .subscribe(function (_) { return _this.loadLogin.emit(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SCContractComponent.prototype, "loadLogin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SCContractComponent.prototype, "changeContract", void 0);
    SCContractComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sc-contract',
            template: __webpack_require__(/*! ./sc-contract.component.html */ "./src/app/sc-contract/sc-contract.component.html"),
            styles: [__webpack_require__(/*! ./sc-contract.component.css */ "./src/app/sc-contract/sc-contract.component.css")]
        }),
        __metadata("design:paramtypes", [_switcheo_service__WEBPACK_IMPORTED_MODULE_1__["SwitcheoService"]])
    ], SCContractComponent);
    return SCContractComponent;
}());



/***/ }),

/***/ "./src/app/sc-login/sc-login.component.css":
/*!*************************************************!*\
  !*** ./src/app/sc-login/sc-login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge {\r\n    margin-right: 5px; \r\n}"

/***/ }),

/***/ "./src/app/sc-login/sc-login.component.html":
/*!**************************************************!*\
  !*** ./src/app/sc-login/sc-login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <b class=\"text-info\">Step 2: Enter your NEO address or private key</b>\r\n    </div>\r\n    <div class=\"col-12\">\r\n        <span class=\"badge badge-pill badge-light\">!</span><span class=\"text-white\">Your keys never leave the browser</span>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-12\" *ngIf=\"!loggedIntoWallet\">\r\n        <div class=\"form-row justify-content-center\">\r\n            <div class=\"col-12 col-md-6\">\r\n                <input type=\"password\" class=\"form-control form-control-sm text-center\" [(ngModel)]=\"key\" placeholder=\"Address or Private Key\" />\r\n            </div>\r\n            <div class=\"col-auto\">\r\n                <button class=\"btn btn-success btn-sm\" (click)=\"loginToWallet()\" [disabled]=\"!key\">Login</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"row justify-content-center\" *ngIf=\"errorMessage\">\r\n            <div class=\"col-12 col-md-auto\">\r\n                <div class=\"alert alert-danger\" role=\"alert\">\r\n                    <span>{{errorMessage}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"loggedIntoWallet\">\r\n        <div class=\"form-row justify-content-center\">\r\n            <div class=\"col-12 col-md-6\">\r\n                <input type=\"text\" class=\"form-control form-control-sm text-center\" [(ngModel)]=\"address\" readonly />\r\n            </div>\r\n            <div class=\"col-auto\">\r\n                <button class=\"btn btn-danger btn-sm\" (click)=\"logoutOfWallet()\">Logout</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sc-login/sc-login.component.ts":
/*!************************************************!*\
  !*** ./src/app/sc-login/sc-login.component.ts ***!
  \************************************************/
/*! exports provided: SCLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCLoginComponent", function() { return SCLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wallet.service */ "./src/app/wallet.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SCLoginComponent = /** @class */ (function () {
    function SCLoginComponent(walletService) {
        this.walletService = walletService;
        this.loadWallet = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.logoutWallet = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loggedIntoWallet = false;
        this.address = "";
        this.key = "";
        this.errorMessage = "";
    }
    SCLoginComponent.prototype.loginToWallet = function () {
        this.loggedIntoWallet = this.walletService.login(this.key);
        if (this.loggedIntoWallet) {
            this.errorMessage = "";
            this.address = this.walletService.getAddress();
            this.loadWallet.emit();
        }
        else {
            this.errorMessage = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].LOGIN_ERROR_MESSAGE;
        }
    };
    SCLoginComponent.prototype.logoutOfWallet = function () {
        this.loggedIntoWallet = false;
        this.address = "";
        this.key = "";
        this.walletService.logout();
        this.logoutWallet.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SCLoginComponent.prototype, "loadWallet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SCLoginComponent.prototype, "logoutWallet", void 0);
    SCLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sc-login',
            template: __webpack_require__(/*! ./sc-login.component.html */ "./src/app/sc-login/sc-login.component.html"),
            styles: [__webpack_require__(/*! ./sc-login.component.css */ "./src/app/sc-login/sc-login.component.css")]
        }),
        __metadata("design:paramtypes", [_wallet_service__WEBPACK_IMPORTED_MODULE_1__["WalletService"]])
    ], SCLoginComponent);
    return SCLoginComponent;
}());



/***/ }),

/***/ "./src/app/sc-wallet/sc-wallet.component.css":
/*!***************************************************!*\
  !*** ./src/app/sc-wallet/sc-wallet.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".token-img {\r\n    border-radius: 25px;\r\n    border: 1px solid white;\r\n    padding: 5px;\r\n    background-color: white;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.asset-list {\r\n    border: 1px solid white;\r\n    margin-top: 10px;\r\n    padding-bottom: 10px;\r\n    background-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.input-withdraw {\r\n    min-width: 150px;\r\n}"

/***/ }),

/***/ "./src/app/sc-wallet/sc-wallet.component.html":
/*!****************************************************!*\
  !*** ./src/app/sc-wallet/sc-wallet.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <button class=\"btn btn-info btn-sm\" (click)=\"refreshBalance()\">Refresh</button>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"!isLoading\">\r\n    <div class=\"row justify-content-center\" *ngIf=\"refreshMessage\">\r\n        <div class=\"col-12 col-md-auto\">\r\n            <div class=\"alert alert-danger\" role=\"alert\">\r\n                <span>{{refreshMessage}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-12 col-md-6\" *ngIf=\"assetListLockedWallet.length > 0\">\r\n            <div class=\"asset-list\">\r\n                <div>\r\n                    <b class=\"switcheo-text\">Locked in trades</b>\r\n                </div>\r\n                <div class=\"row justify-content-center\" *ngFor=\"let key of assetListLockedWallet\">\r\n                    <div class=\"col-12 col-md-auto\">\r\n                        <img class=\"token-img\" src=\"{{imgDir}}/{{key}}.png\" (error)=\"handleImgError($event);\" />\r\n                        <br/>\r\n                        <b>{{key}}</b>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <b>{{lockedWalletBalance[key].displayBalance}}</b>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6\" *ngIf=\"assetListContractWallet.length > 0\">\r\n            <div class=\"asset-list\">\r\n                <div>\r\n                    <b class=\"switcheo-text\">Contract Balance</b>\r\n                </div>\r\n                <div class=\"row justify-content-center\" *ngFor=\"let key of assetListContractWallet\">\r\n                    <div class=\"col-12 col-md-auto\">\r\n                        <img class=\"token-img\" src=\"{{imgDir}}/{{key}}.png\" (error)=\"handleImgError($event);\" />\r\n                        <br/>\r\n                        <b>{{key}}</b>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12 text-lg-left\">\r\n                                <a *ngIf=\"canAccessPrivateKey\" href=\"javascript:void(0);\" (click)=\"contractWalletBalance[key].withdrawAmount = contractWalletBalance[key].displayBalance\">{{contractWalletBalance[key].displayBalance}}</a>\r\n                                <span *ngIf=\"!canAccessPrivateKey\" >{{contractWalletBalance[key].displayBalance}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row justify-content-center\" *ngIf=\"canAccessPrivateKey\">\r\n                            <div class=\"col\">\r\n                                <input class=\"form-control form-control-sm text-center input-withdraw\"\r\n                                        type=\"number\"\r\n                                        (input)=\"handleInputWithdraw($event, key)\"\r\n                                        [(ngModel)]=\"contractWalletBalance[key].withdrawAmount\"\r\n                                        min=\"0\"\r\n                                        max=\"{{contractWalletBalance[key].displayBalance}}\"\r\n                                        step=\"{{contractWalletBalance[key].withdrawInputSteps}}\" />\r\n                            </div>\r\n                            <div class=\"col-auto\">\r\n                                <button class=\"btn btn-success btn-sm\" (click)=\"withdraw('neo', key)\" [disabled]=\"contractWalletBalance[key].isWithdrawDisabled\">Withdraw</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-11 col-md-auto\" *ngIf=\"contractWalletBalance[key].errorMessage\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <div class=\"alert alert-danger\" role=\"alert\">\r\n                                    <span>{{contractWalletBalance[key].errorMessage}}</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sc-wallet/sc-wallet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sc-wallet/sc-wallet.component.ts ***!
  \**************************************************/
/*! exports provided: SCWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCWalletComponent", function() { return SCWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _switcheo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switcheo.service */ "./src/app/switcheo.service.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wallet.service */ "./src/app/wallet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SCWalletComponent = /** @class */ (function () {
    function SCWalletComponent(switcheoService, utilityService, walletService) {
        this.switcheoService = switcheoService;
        this.utilityService = utilityService;
        this.walletService = walletService;
        this.isLoading = false;
        this.imgDir = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"].IMG_DIR;
        this.tokenList = {};
        this.assetListContractWallet = [];
        this.assetListLockedWallet = [];
        this.assetListConfirmingWallet = [];
        this.contractWalletBalance = {};
        this.lockedWalletBalance = {};
        this.confirmingWalletBalance = {};
        this.lastUpdatedBalance = null;
        this.refreshMessage = "";
        this.canAccessPrivateKey = false;
    }
    SCWalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canAccessPrivateKey = this.walletService.canAccessPrivateKey;
        this.switcheoService.getTokenList()
            .subscribe(function (tokenList) {
            _this.tokenList = tokenList;
            _this.isLoading = true;
            _this.resetWallet();
            _this.updateWalletBalances();
        });
    };
    SCWalletComponent.prototype.withdraw = function (blockchain, token) {
        var _this = this;
        var contractWallet = this.contractWalletBalance[token];
        if (contractWallet.withdrawAmount && !isNaN(contractWallet.withdrawAmount)) {
            var tokenAsset = this.tokenList[token];
            var withdrawAmount = this.utilityService.convertDisplayToBalance(contractWallet.withdrawAmount, tokenAsset.decimals);
            contractWallet.isWithdrawDisabled = true;
            this.switcheoService.withdrawTokens(blockchain, token, withdrawAmount)
                .subscribe(function (_) {
                _this.isLoading = true;
                _this.updateWalletBalances();
            }, function (err) {
                contractWallet.errorMessage = err.error.error;
                contractWallet.isWithdrawDisabled = false;
            });
        }
        else {
            contractWallet.errorMessage = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"].WITHDRAW_INVALID_AMOUNT_MESSAGE;
        }
    };
    SCWalletComponent.prototype.handleInputWithdraw = function (element, token) {
        var tokenAsset = this.tokenList[token];
        if (element.data == "-") {
            element.target.value = 0;
            return;
        }
        //Handle the length of the input text
        var fixedDecimalValue = Number(element.target.value).toFixed(tokenAsset.decimals);
        if (element.target.value.length > fixedDecimalValue.length) {
            element.target.value = fixedDecimalValue;
        }
        //Handle the value of the input
        var numberValue = Number(element.target.value);
        var walletBalance = this.contractWalletBalance[token];
        if (numberValue > Number(walletBalance.displayBalance)) {
            element.target.value = walletBalance.displayBalance;
        }
    };
    SCWalletComponent.prototype.handleImgError = function (element) {
        element.target.src = this.imgDir + "/empty.png";
    };
    SCWalletComponent.prototype.refreshBalance = function () {
        var millisecondsNow = new Date().getTime();
        var oneMinute = 60000;
        var refreshTimeElapsed = millisecondsNow - this.lastUpdatedBalance;
        if (refreshTimeElapsed > oneMinute) {
            this.isLoading = true;
            this.refreshMessage = "";
            this.updateWalletBalances();
        }
        else {
            this.refreshMessage = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"].REFRESH_WALLET_MESSAGE;
        }
    };
    SCWalletComponent.prototype.resetWallet = function () {
        this.assetListContractWallet = [];
        this.assetListLockedWallet = [];
        this.assetListConfirmingWallet = [];
        this.contractWalletBalance = {};
        this.lockedWalletBalance = {};
    };
    SCWalletComponent.prototype.updateWalletBalances = function () {
        var _this = this;
        this.switcheoService.getContractWalletBalance()
            .subscribe(function (walletBalance) {
            _this.lastUpdatedBalance = new Date().getTime();
            _this.buildWalletBalances(walletBalance);
            _this.isLoading = false;
        });
    };
    SCWalletComponent.prototype.buildWalletBalances = function (walletBalance) {
        for (var _i = 0, _a = Object.keys(this.tokenList); _i < _a.length; _i++) {
            var key = _a[_i];
            var assetDecimals = this.tokenList[key].decimals;
            this.removeAsset(key);
            var confirmedTokenBalance = walletBalance.confirmed[key];
            if (confirmedTokenBalance && Number(confirmedTokenBalance) > 0) {
                this.buildConfirmedWalletBalances(key, confirmedTokenBalance, assetDecimals);
            }
            var lockedTokenBalance = walletBalance.locked[key];
            if (lockedTokenBalance && Number(lockedTokenBalance) > 0) {
                this.buildLockedWalletBalances(key, lockedTokenBalance, assetDecimals);
            }
            var confirmingWalletTx = walletBalance.confirming[key];
            if (confirmingWalletTx && confirmingWalletTx.length > 0) {
                this.confirmingWalletBalance[key] = confirmingWalletTx;
                this.assetListConfirmingWallet.push(key);
            }
        }
    };
    SCWalletComponent.prototype.removeAsset = function (token) {
        var existingAssetContractWallet = this.assetListContractWallet.indexOf(token);
        var existingAssetLockedWallet = this.assetListLockedWallet.indexOf(token);
        var existingAssetConfirmingWallet = this.assetListConfirmingWallet.indexOf(token);
        if (existingAssetContractWallet > -1) {
            this.assetListContractWallet.splice(existingAssetContractWallet, 1);
        }
        if (existingAssetLockedWallet > -1) {
            this.assetListLockedWallet.splice(existingAssetLockedWallet, 1);
        }
        if (existingAssetConfirmingWallet > -1) {
            this.assetListConfirmingWallet.splice(existingAssetConfirmingWallet, 1);
        }
        delete this.contractWalletBalance[token];
        delete this.lockedWalletBalance[token];
    };
    SCWalletComponent.prototype.buildConfirmedWalletBalances = function (key, confirmedTokenBalance, assetDecimals) {
        var confirmedTokenWalletBalance = this.utilityService.removeLastDecimalFromBalance(confirmedTokenBalance);
        var confirmedTokenDisplayBalance = this.utilityService.convertBalanceToDisplay(confirmedTokenWalletBalance, assetDecimals);
        this.contractWalletBalance[key] = {
            walletBalance: confirmedTokenWalletBalance,
            displayBalance: confirmedTokenDisplayBalance,
            isWithdrawDisabled: false,
            withdrawInputSteps: this.utilityService.convertDecimalsForStepInput(assetDecimals)
        };
        this.assetListContractWallet.push(key);
    };
    SCWalletComponent.prototype.buildLockedWalletBalances = function (key, lockedTokenBalance, assetDecimals) {
        var lockedTokenWalletBalance = this.utilityService.removeLastDecimalFromBalance(lockedTokenBalance);
        var lockedTokenDisplayBalance = this.utilityService.convertBalanceToDisplay(lockedTokenWalletBalance, assetDecimals);
        this.lockedWalletBalance[key] = {
            walletBalance: lockedTokenWalletBalance,
            displayBalance: lockedTokenDisplayBalance
        };
        this.assetListLockedWallet.push(key);
    };
    SCWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sc-wallet',
            template: __webpack_require__(/*! ./sc-wallet.component.html */ "./src/app/sc-wallet/sc-wallet.component.html"),
            styles: [__webpack_require__(/*! ./sc-wallet.component.css */ "./src/app/sc-wallet/sc-wallet.component.css")]
        }),
        __metadata("design:paramtypes", [_switcheo_service__WEBPACK_IMPORTED_MODULE_1__["SwitcheoService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"],
            _wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"]])
    ], SCWalletComponent);
    return SCWalletComponent;
}());



/***/ }),

/***/ "./src/app/switcheo.service.ts":
/*!*************************************!*\
  !*** ./src/app/switcheo.service.ts ***!
  \*************************************/
/*! exports provided: SwitcheoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitcheoService", function() { return SwitcheoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet.service */ "./src/app/wallet.service.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _enum_DeploymentType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enum/DeploymentType */ "./src/app/enum/DeploymentType.ts");
/* harmony import */ var _enum_ContractVersion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enum/ContractVersion */ "./src/app/enum/ContractVersion.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SwitcheoService = /** @class */ (function () {
    function SwitcheoService(http, utilityService, walletService) {
        this.http = http;
        this.utilityService = utilityService;
        this.walletService = walletService;
        this.switcheoEndpoint = "";
        this.contractHash = "";
        this.blockchain = "NEO";
    }
    SwitcheoService.prototype.setDeploymentType = function (deploymentType) {
        switch (deploymentType) {
            case _enum_DeploymentType__WEBPACK_IMPORTED_MODULE_6__["DeploymentType"].Mainnet:
                this.switcheoEndpoint = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"].MAINNET_URL;
                break;
            case _enum_DeploymentType__WEBPACK_IMPORTED_MODULE_6__["DeploymentType"].Testnet:
                this.switcheoEndpoint = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"].TESTNET_URL;
                break;
        }
    };
    SwitcheoService.prototype.selectContract = function (deploymentType, contractVersion) {
        var _this = this;
        this.setDeploymentType(deploymentType);
        return this.getContracts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (response) { return _this.contractHash = response[_this.blockchain][_enum_ContractVersion__WEBPACK_IMPORTED_MODULE_7__["ContractVersion"][contractVersion]]; }));
    };
    SwitcheoService.prototype.getTokenList = function () {
        return this.http.get(this.switcheoEndpoint + "/exchange/tokens");
    };
    SwitcheoService.prototype.getContractWalletBalance = function () {
        var scriptHashAddress = this.walletService.getScriptHash();
        return this.http.get(this.switcheoEndpoint + "/balances?addresses[]=" + scriptHashAddress + "&contract_hashes[]=" + this.contractHash);
    };
    SwitcheoService.prototype.withdrawTokens = function (blockchain, token, amount) {
        var _this = this;
        return this.createWithdrawTokens(blockchain, token, amount)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (response) { return _this.executeWithdrawToken(response.id); }));
    };
    SwitcheoService.prototype.getContracts = function () {
        return this.http.get(this.switcheoEndpoint + "/exchange/contracts");
    };
    SwitcheoService.prototype.createWithdrawTokens = function (blockchain, token, amount) {
        var address = this.walletService.getScriptHash();
        var params = {
            blockchain: blockchain,
            asset_id: token,
            amount: amount,
            contract_hash: this.contractHash,
            timestamp: this.utilityService.getTimestamp()
        };
        var signature = this.walletService.signParams(params);
        var apiParams = __assign({}, params, { address: address, signature: signature });
        return this.http.post(this.switcheoEndpoint + "/withdrawals", apiParams);
    };
    SwitcheoService.prototype.executeWithdrawToken = function (id) {
        var params = {
            id: id,
            timestamp: this.utilityService.getTimestamp()
        };
        var signature = this.walletService.signParams(params);
        var apiParams = __assign({}, params, { signature: signature });
        return this.http.post(this.switcheoEndpoint + "/withdrawals/" + id + "/broadcast", apiParams);
    };
    SwitcheoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
            _wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]])
    ], SwitcheoService);
    return SwitcheoService;
}());



/***/ }),

/***/ "./src/app/utility.service.ts":
/*!************************************!*\
  !*** ./src/app/utility.service.ts ***!
  \************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.prototype.getTimestamp = function () {
        return new Date().getTime();
    };
    UtilityService.prototype.removeLastDecimalFromBalance = function (balance) {
        return balance.substring(0, balance.lastIndexOf('.'));
    };
    UtilityService.prototype.convertBalanceToDisplay = function (balance, decimals) {
        return this.convertNumberToDecimal(parseInt(balance), decimals).toFixed(decimals);
    };
    UtilityService.prototype.convertDisplayToBalance = function (balance, decimals) {
        return parseFloat((balance * Math.pow(10, decimals)).toFixed(0));
    };
    UtilityService.prototype.convertDecimalsForStepInput = function (decimals) {
        if (decimals > 6) {
            decimals = 6;
        }
        return this.convertNumberToDecimal(1, decimals);
    };
    UtilityService.prototype.convertNumberToDecimal = function (number, decimals) {
        return number / Math.pow(10, decimals);
    };
    UtilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "./src/app/wallet.service.ts":
/*!***********************************!*\
  !*** ./src/app/wallet.service.ts ***!
  \***********************************/
/*! exports provided: WalletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletService", function() { return WalletService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cityofzion/neon-js */ "./node_modules/@cityofzion/neon-js/lib/browser.js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-stable-stringify */ "./node_modules/json-stable-stringify/index.js");
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WalletService = /** @class */ (function () {
    function WalletService() {
        this.loggedInWallet = null;
        this.canAccessPrivateKey = false;
    }
    WalletService.prototype.login = function (key) {
        this.loggedInWallet = null;
        if (key) {
            try {
                this.loggedInWallet = new _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_1__["wallet"].Account(key);
                this.canAccessPrivateKey = _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_1__["wallet"].isWIF(key);
            }
            catch (_a) { }
        }
        return this.loggedInWallet != null;
    };
    WalletService.prototype.logout = function () {
        this.loggedInWallet = null;
        this.canAccessPrivateKey = false;
    };
    WalletService.prototype.getAddress = function () {
        return this.loggedInWallet.address;
    };
    WalletService.prototype.getPrivateKey = function () {
        return this.loggedInWallet.privateKey;
    };
    WalletService.prototype.getScriptHash = function () {
        return this.loggedInWallet.scriptHash;
    };
    WalletService.prototype.signParams = function (reqParams) {
        var paramsString = json_stable_stringify__WEBPACK_IMPORTED_MODULE_2___default()(reqParams);
        var paramsHexString = _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_1__["u"].str2hexstring(paramsString);
        var lengthHex = (paramsHexString.length / 2).toString(16).padStart(2, '0');
        var serialisedTransaction = "010001f0" + lengthHex + paramsHexString + "0000";
        return this.signMessage(serialisedTransaction);
    };
    WalletService.prototype.signMessage = function (message) {
        var privateKey = this.getPrivateKey();
        return _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_1__["wallet"].generateSignature(message, privateKey);
    };
    WalletService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], WalletService);
    return WalletService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Dev\SwitcheoCompetition\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map