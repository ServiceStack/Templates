webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* Options:
Date: 2017-01-01 12:00:00
Version: 4
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:61322/

//GlobalNamespace:
ExportAsTypes: True
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion:
//AddDescriptionAsComments: True
//IncludeTypes:
//ExcludeTypes:
//DefaultImports:
*/
Object.defineProperty(exports, "__esModule", { value: true });
var HelloResponse = (function () {
    function HelloResponse() {
    }
    return HelloResponse;
}());
exports.HelloResponse = HelloResponse;
// @Route("/hello")
// @Route("/hello/{Name}")
var Hello = (function () {
    function Hello() {
    }
    Hello.prototype.createResponse = function () { return new HelloResponse(); };
    Hello.prototype.getTypeName = function () { return "Hello"; };
    return Hello;
}());
exports.Hello = Hello;


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var platform_browser_1 = __webpack_require__(17);
var forms_1 = __webpack_require__(54);
var http_1 = __webpack_require__(47);
var router_1 = __webpack_require__(19);
var app_component_1 = __webpack_require__(99);
var header_1 = __webpack_require__(107);
var footer_1 = __webpack_require__(106);
var app_module_1 = __webpack_require__(52);
var utils_1 = __webpack_require__(53);
var routes = [
    { path: '', redirectTo: 'main/0', pathMatch: 'full' },
];
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            utils_1.MDL,
            app_component_1.AppComponent,
            header_1.HeaderComponent,
            footer_1.FooterComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(routes),
            app_module_1.AppModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], MainModule);
exports.MainModule = MainModule;


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(53);
var dtos_1 = __webpack_require__(100);
var HelloComponent = (function () {
    function HelloComponent(cdref) {
        this.cdref = cdref;
    }
    HelloComponent.prototype.ngOnInit = function () {
        this.nameChanged(this.name);
    };
    HelloComponent.prototype.nameChanged = function (name) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, r;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!name) return [3 /*break*/, 2];
                        req = new dtos_1.Hello();
                        req.name = name;
                        return [4 /*yield*/, utils_1.client.get(req)];
                    case 1:
                        r = _a.sent();
                        this.result = r.result;
                        return [3 /*break*/, 3];
                    case 2:
                        this.result = '';
                        _a.label = 3;
                    case 3:
                        this.cdref.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HelloComponent;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], HelloComponent.prototype, "name", void 0);
HelloComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'hello',
        template: __webpack_require__(111),
        styles: [__webpack_require__(112)]
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], HelloComponent);
exports.HelloComponent = HelloComponent;


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var router_1 = __webpack_require__(19);
var HomeComponent = (function () {
    function HomeComponent(route) {
        this.route = route;
        this.heading = "Home";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (x) { return _this.name = x.name; });
    };
    return HomeComponent;
}());
HomeComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'home',
        template: "\n        <section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\n            <header class=\"section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white\">\n                <i class=\"material-icons\">play_circle_filled</i>\n            </header>\n\n            <div class=\"mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\n\n                <hello [name]=\"name\"></hello> \n\n                <div class=\"mdl-card__actions\">\n                    <a href=\"http://docs.servicestack.net/typescript-add-servicestack-reference\" class=\"mdl-button\">More info on TypeScript ServiceStack Reference</a>\n                </div>\n            </div>\n        </section>\n    "
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var ProductsComponent = (function () {
    function ProductsComponent() {
        this.heading = "Products";
    }
    return ProductsComponent;
}());
ProductsComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'products',
        template: "\n        <section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\n            <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\n                <div class=\"mdl-card__supporting-text mdl-grid mdl-grid--no-spacing\">\n                <h4 class=\"mdl-cell mdl-cell--12-col\">{{heading}}</h4>\n                <div class=\"section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone\">\n                    <div class=\"section__circle-container__circle mdl-color--primary\"></div>\n                </div>\n                <div class=\"section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone\">\n                    <h5>Lorem ipsum dolor sit amet</h5>\n                    Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href=\"#\">proident minim</a>.\n                </div>\n                <div class=\"section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone\">\n                    <div class=\"section__circle-container__circle mdl-color--primary\"></div>\n                </div>\n                <div class=\"section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone\">\n                    <h5>Lorem ipsum dolor sit amet</h5>\n                    Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href=\"#\">proident minim</a>.\n                </div>\n                <div class=\"section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone\">\n                    <div class=\"section__circle-container__circle mdl-color--primary\"></div>\n                </div>\n                <div class=\"section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone\">\n                    <h5>Lorem ipsum dolor sit amet</h5>\n                    Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href=\"#\">proident minim</a>.\n                </div>\n                </div>\n                <div class=\"mdl-card__actions\">\n                <a href=\"#\" class=\"mdl-button\">Read our features</a>\n                </div>\n            </div>\n        </section>\n    ",
        styles: [__webpack_require__(113)]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;


/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var TechnologyComponent = (function () {
    function TechnologyComponent() {
        this.heading = "Technology";
    }
    return TechnologyComponent;
}());
TechnologyComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'technology',
        template: "\n        <section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\n            <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\n                <div class=\"mdl-card__supporting-text\">\n                    <h4>{{heading}}</h4>\n                    Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. \n                    Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse. \n                    Pariatur occaecat nisi laboris tempor laboris eiusmod qui id Lorem esse commodo in. \n                    Exercitation aute dolore deserunt culpa consequat elit labore incididunt elit anim.\n                </div>\n                <div class=\"mdl-card__actions\">\n                    <a href=\"#\" class=\"mdl-button\">Read our features</a>\n                </div>\n            </div>\n        </section>\n    "
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TechnologyComponent);
exports.TechnologyComponent = TechnologyComponent;


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-footer',
        template: "\n        <section class=\"section--footer mdl-grid\"></section>\n        <footer class=\"mdl-mega-footer\">\n            <div class=\"mdl-mega-footer--middle-section\">\n                <div class=\"mdl-mega-footer--drop-down-section\">\n                    <input class=\"mdl-mega-footer--heading-checkbox\" type=\"checkbox\" checked>\n                    <h1 class=\"mdl-mega-footer--heading\">Features</h1>\n                    <ul class=\"mdl-mega-footer--link-list\">\n                        <li><a href=\"#\">About</a></li>\n                        <li><a href=\"#\">Terms</a></li>\n                        <li><a href=\"#\">Partners</a></li>\n                        <li><a href=\"#\">Updates</a></li>\n                    </ul>\n                </div>\n                <div class=\"mdl-mega-footer--drop-down-section\">\n                    <input class=\"mdl-mega-footer--heading-checkbox\" type=\"checkbox\" checked>\n                    <h1 class=\"mdl-mega-footer--heading\">Details</h1>\n                    <ul class=\"mdl-mega-footer--link-list\">\n                        <li><a href=\"#\">Spec</a></li>\n                        <li><a href=\"#\">Tools</a></li>\n                        <li><a href=\"#\">Resources</a></li>\n                    </ul>\n                </div>\n                <div class=\"mdl-mega-footer--drop-down-section\">\n                    <input class=\"mdl-mega-footer--heading-checkbox\" type=\"checkbox\" checked>\n                    <h1 class=\"mdl-mega-footer--heading\">Technology</h1>\n                    <ul class=\"mdl-mega-footer--link-list\">\n                        <li><a href=\"#\">How it works</a></li>\n                        <li><a href=\"#\">Patterns</a></li>\n                        <li><a href=\"#\">Usage</a></li>\n                        <li><a href=\"#\">Products</a></li>\n                        <li><a href=\"#\">Contracts</a></li>\n                    </ul>\n                </div>\n                <div class=\"mdl-mega-footer--drop-down-section\">\n                    <input class=\"mdl-mega-footer--heading-checkbox\" type=\"checkbox\" checked>\n                    <h1 class=\"mdl-mega-footer--heading\">FAQ</h1>\n                    <ul class=\"mdl-mega-footer--link-list\">\n                        <li><a href=\"#\">Questions</a></li>\n                        <li><a href=\"#\">Answers</a></li>\n                        <li><a href=\"#\">Contact us</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"mdl-mega-footer--bottom-section\">\n                <div class=\"mdl-logo\">\n                    More Information\n                </div>\n                <ul class=\"mdl-mega-footer--link-list\">\n                    <li><a href=\"https://github.com/ServiceStack/ServiceStackVS\">ServiceStack VS.NET Templates</a></li>\n                </ul>\n            </div>\n        </footer>\n    "
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var router_1 = __webpack_require__(19);
var app_module_1 = __webpack_require__(52);
var HeaderComponent = (function () {
    function HeaderComponent(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'Angular4App1';
        this.routes = app_module_1.routes.filter(function (val) { return val.path != ''; });
    }
    HeaderComponent.prototype.isActive = function (path) {
        return this.router.url.substring(1) === path;
    };
    return HeaderComponent;
}());
HeaderComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-header',
        template: "\n        <header class=\"mdl-layout__header mdl-layout__header--scroll mdl-color--primary\">\n            <div class=\"mdl-layout--large-screen-only mdl-layout__header-row\"></div>\n            <div class=\"mdl-layout--large-screen-only mdl-layout__header-row\">\n                <h3>{{title}}</h3>\n            </div>\n            <div class=\"mdl-layout--large-screen-only mdl-layout__header-row\"></div>\n            <div class=\"mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark\">\n\n                <span *ngFor=\"let route of routes\">\n                    <a *ngIf=\"route.data\" class=\"mdl-layout__tab\" [class.is-active]=\"isActive(route.path)\"\n                        routerLink=\"{{route.path}}\">{{route.data.title}}</a>\n                </span>\n\n                <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent\" id=\"add\">\n                    <i class=\"material-icons\" role=\"presentation\">add</i>\n                    <span class=\"visuallyhidden\">Add</span>\n                </button>\n            </div>\n        </header>\n    "
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ 108:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.png";

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-card__supporting-text\">\n    <h4>Welcome</h4>\n\n    Ajax request using ServiceStack's TypeScript JsonServiceClient and Typed DTOs:\n\n    <div class=\"mdl-textfield mdl-js-textfield\" style=\"width:auto\">\n\n        <input type=\"text\" class=\"mdl-textfield__input\" id=\"Name\"\n               placeholder=\"Type your name\" autocomplete=\"off\"\n               [(ngModel)]=\"name\"\n               (ngModelChange)=\"nameChanged($event)\" />\n\n        <span class=\"result\">{{result}}</span>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

module.exports = "input[type=text] {\n  display: inline-block;\n  width: auto;\n  margin: 0 10px 0 0; }\n\n.result {\n  font-size: 20px;\n  color: #7a1ea1; }\n"

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

module.exports = "div {\n  background: #3e2280;\n  color: #fff; }\n\na {\n  color: #ff73a3; }\n"

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

/**
 * material-design-lite - Material Design Components in CSS, JS and HTML
 * @version v1.3.0
 * @license Apache-2.0
 * @copyright 2015 Google, Inc.
 * @link https://github.com/google/material-design-lite
 */
!function(){"use strict";function e(e,t){if(e){if(t.element_.classList.contains(t.CssClasses_.MDL_JS_RIPPLE_EFFECT)){var s=document.createElement("span");s.classList.add(t.CssClasses_.MDL_RIPPLE_CONTAINER),s.classList.add(t.CssClasses_.MDL_JS_RIPPLE_EFFECT);var i=document.createElement("span");i.classList.add(t.CssClasses_.MDL_RIPPLE),s.appendChild(i),e.appendChild(s)}e.addEventListener("click",function(s){if("#"===e.getAttribute("href").charAt(0)){s.preventDefault();var i=e.href.split("#")[1],n=t.element_.querySelector("#"+i);t.resetTabState_(),t.resetPanelState_(),e.classList.add(t.CssClasses_.ACTIVE_CLASS),n.classList.add(t.CssClasses_.ACTIVE_CLASS)}})}}function t(e,t,s,i){function n(){var n=e.href.split("#")[1],a=i.content_.querySelector("#"+n);i.resetTabState_(t),i.resetPanelState_(s),e.classList.add(i.CssClasses_.IS_ACTIVE),a.classList.add(i.CssClasses_.IS_ACTIVE)}if(i.tabBar_.classList.contains(i.CssClasses_.JS_RIPPLE_EFFECT)){var a=document.createElement("span");a.classList.add(i.CssClasses_.RIPPLE_CONTAINER),a.classList.add(i.CssClasses_.JS_RIPPLE_EFFECT);var l=document.createElement("span");l.classList.add(i.CssClasses_.RIPPLE),a.appendChild(l),e.appendChild(a)}i.tabBar_.classList.contains(i.CssClasses_.TAB_MANUAL_SWITCH)||e.addEventListener("click",function(t){"#"===e.getAttribute("href").charAt(0)&&(t.preventDefault(),n())}),e.show=n}var s={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};s=function(){function e(e,t){for(var s=0;s<c.length;s++)if(c[s].className===e)return"undefined"!=typeof t&&(c[s]=t),c[s];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,s){var i=t(e);return i.indexOf(s)!==-1}function i(e,t,s){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:s});var i=document.createEvent("Events");return i.initEvent(e,t,s),i}function n(t,s){if("undefined"==typeof t&&"undefined"==typeof s)for(var i=0;i<c.length;i++)n(c[i].className,c[i].cssClass);else{var l=t;if("undefined"==typeof s){var o=e(l);o&&(s=o.cssClass)}for(var r=document.querySelectorAll("."+s),_=0;_<r.length;_++)a(r[_],l)}}function a(n,a){if(!("object"==typeof n&&n instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var l=i("mdl-componentupgrading",!0,!0);if(n.dispatchEvent(l),!l.defaultPrevented){var o=t(n),r=[];if(a)s(n,a)||r.push(e(a));else{var _=n.classList;c.forEach(function(e){_.contains(e.cssClass)&&r.indexOf(e)===-1&&!s(n,e.className)&&r.push(e)})}for(var d,h=0,u=r.length;h<u;h++){if(d=r[h],!d)throw new Error("Unable to find a registered component for the given class.");o.push(d.className),n.setAttribute("data-upgraded",o.join(","));var E=new d.classConstructor(n);E[C]=d,p.push(E);for(var m=0,L=d.callbacks.length;m<L;m++)d.callbacks[m](n);d.widget&&(n[d.className]=E);var I=i("mdl-componentupgraded",!0,!1);n.dispatchEvent(I)}}}function l(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var t,s=0,i=e.length;s<i;s++)t=e[s],t instanceof HTMLElement&&(a(t),t.children.length>0&&l(t.children))}function o(t){var s="undefined"==typeof t.widget&&"undefined"==typeof t.widget,i=!0;s||(i=t.widget||t.widget);var n={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:i,callbacks:[]};if(c.forEach(function(e){if(e.cssClass===n.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===n.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(C))throw new Error("MDL component classes must not have "+C+" defined as a property.");var a=e(t.classAsString,n);a||c.push(n)}function r(t,s){var i=e(t);i&&i.callbacks.push(s)}function _(){for(var e=0;e<c.length;e++)n(c[e].className)}function d(e){if(e){var t=p.indexOf(e);p.splice(t,1);var s=e.element_.getAttribute("data-upgraded").split(","),n=s.indexOf(e[C].classAsString);s.splice(n,1),e.element_.setAttribute("data-upgraded",s.join(","));var a=i("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}function h(e){var t=function(e){p.filter(function(t){return t.element_===e}).forEach(d)};if(e instanceof Array||e instanceof NodeList)for(var s=0;s<e.length;s++)t(e[s]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var c=[],p=[],C="mdlComponentConfigInternal_";return{upgradeDom:n,upgradeElement:a,upgradeElements:l,upgradeAllRegistered:_,registerUpgradedCallback:r,register:o,downgradeElements:h}}(),s.ComponentConfigPublic,s.ComponentConfig,s.Component,s.upgradeDom=s.upgradeDom,s.upgradeElement=s.upgradeElement,s.upgradeElements=s.upgradeElements,s.upgradeAllRegistered=s.upgradeAllRegistered,s.registerUpgradedCallback=s.registerUpgradedCallback,s.register=s.register,s.downgradeElements=s.downgradeElements,window.componentHandler=s,window.componentHandler=s,window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),s.upgradeAllRegistered()):(s.upgradeElement=function(){},s.register=function(){})}),Date.now||(Date.now=function(){return(new Date).getTime()},Date.now=Date.now);for(var i=["webkit","moz"],n=0;n<i.length&&!window.requestAnimationFrame;++n){var a=i[n];window.requestAnimationFrame=window[a+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a+"CancelAnimationFrame"]||window[a+"CancelRequestAnimationFrame"],window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var l=0;window.requestAnimationFrame=function(e){var t=Date.now(),s=Math.max(l+16,t);return setTimeout(function(){e(l=s)},s-t)},window.cancelAnimationFrame=clearTimeout,window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame}var o=function(e){this.element_=e,this.init()};window.MaterialButton=o,o.prototype.Constant_={},o.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},o.prototype.blurHandler_=function(e){e&&this.element_.blur()},o.prototype.disable=function(){this.element_.disabled=!0},o.prototype.disable=o.prototype.disable,o.prototype.enable=function(){this.element_.disabled=!1},o.prototype.enable=o.prototype.enable,o.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},s.register({constructor:o,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0});var r=function(e){this.element_=e,this.init()};window.MaterialCheckbox=r,r.prototype.Constant_={TINY_TIMEOUT:.001},r.prototype.CssClasses_={INPUT:"mdl-checkbox__input",BOX_OUTLINE:"mdl-checkbox__box-outline",FOCUS_HELPER:"mdl-checkbox__focus-helper",TICK_OUTLINE:"mdl-checkbox__tick-outline",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-checkbox__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded"},r.prototype.onChange_=function(e){this.updateClasses_()},r.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},r.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},r.prototype.onMouseUp_=function(e){this.blur_()},r.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},r.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},r.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},r.prototype.checkToggleState=r.prototype.checkToggleState,r.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},r.prototype.checkDisabled=r.prototype.checkDisabled,r.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},r.prototype.disable=r.prototype.disable,r.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},r.prototype.enable=r.prototype.enable,r.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},r.prototype.check=r.prototype.check,r.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},r.prototype.uncheck=r.prototype.uncheck,r.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("span");e.classList.add(this.CssClasses_.BOX_OUTLINE);var t=document.createElement("span");t.classList.add(this.CssClasses_.FOCUS_HELPER);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.TICK_OUTLINE),e.appendChild(s),this.element_.appendChild(t),this.element_.appendChild(e),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementMouseUp),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:r,classAsString:"MaterialCheckbox",cssClass:"mdl-js-checkbox",widget:!0});var _=function(e){this.element_=e,this.init()};window.MaterialIconToggle=_,_.prototype.Constant_={TINY_TIMEOUT:.001},_.prototype.CssClasses_={INPUT:"mdl-icon-toggle__input",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-icon-toggle__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},_.prototype.onChange_=function(e){this.updateClasses_()},_.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},_.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},_.prototype.onMouseUp_=function(e){this.blur_()},_.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},_.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},_.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},_.prototype.checkToggleState=_.prototype.checkToggleState,_.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},_.prototype.checkDisabled=_.prototype.checkDisabled,_.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},_.prototype.disable=_.prototype.disable,_.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},_.prototype.enable=_.prototype.enable,_.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},_.prototype.check=_.prototype.check,_.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},_.prototype.uncheck=_.prototype.uncheck,_.prototype.init=function(){if(this.element_){if(this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(e),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementOnMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementOnMouseUp),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},s.register({constructor:_,classAsString:"MaterialIconToggle",cssClass:"mdl-js-icon-toggle",widget:!0});var d=function(e){this.element_=e,this.init()};window.MaterialMenu=d,d.prototype.Constant_={TRANSITION_DURATION_SECONDS:.3,TRANSITION_DURATION_FRACTION:.8,CLOSE_TIMEOUT:150},d.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32,UP_ARROW:38,DOWN_ARROW:40},d.prototype.CssClasses_={CONTAINER:"mdl-menu__container",OUTLINE:"mdl-menu__outline",ITEM:"mdl-menu__item",ITEM_RIPPLE_CONTAINER:"mdl-menu__item-ripple-container",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_UPGRADED:"is-upgraded",IS_VISIBLE:"is-visible",IS_ANIMATING:"is-animating",BOTTOM_LEFT:"mdl-menu--bottom-left",BOTTOM_RIGHT:"mdl-menu--bottom-right",TOP_LEFT:"mdl-menu--top-left",TOP_RIGHT:"mdl-menu--top-right",UNALIGNED:"mdl-menu--unaligned"},d.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),this.container_=e;var t=document.createElement("div");t.classList.add(this.CssClasses_.OUTLINE),this.outline_=t,e.insertBefore(t,this.element_);var s=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for"),i=null;s&&(i=document.getElementById(s),i&&(this.forElement_=i,i.addEventListener("click",this.handleForClick_.bind(this)),i.addEventListener("keydown",this.handleForKeyboardEvent_.bind(this))));var n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM);this.boundItemKeydown_=this.handleItemKeyboardEvent_.bind(this),this.boundItemClick_=this.handleItemClick_.bind(this);for(var a=0;a<n.length;a++)n[a].addEventListener("click",this.boundItemClick_),n[a].tabIndex="-1",n[a].addEventListener("keydown",this.boundItemKeydown_);if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))for(this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),a=0;a<n.length;a++){var l=n[a],o=document.createElement("span");o.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);var r=document.createElement("span");r.classList.add(this.CssClasses_.RIPPLE),o.appendChild(r),l.appendChild(o),l.classList.add(this.CssClasses_.RIPPLE_EFFECT)}this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT),this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT),this.element_.classList.contains(this.CssClasses_.TOP_LEFT)&&this.outline_.classList.add(this.CssClasses_.TOP_LEFT),this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)&&this.outline_.classList.add(this.CssClasses_.TOP_RIGHT),this.element_.classList.contains(this.CssClasses_.UNALIGNED)&&this.outline_.classList.add(this.CssClasses_.UNALIGNED),e.classList.add(this.CssClasses_.IS_UPGRADED)}},d.prototype.handleForClick_=function(e){if(this.element_&&this.forElement_){var t=this.forElement_.getBoundingClientRect(),s=this.forElement_.parentElement.getBoundingClientRect();this.element_.classList.contains(this.CssClasses_.UNALIGNED)||(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"):this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.bottom=s.bottom-t.top+"px"):this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.bottom=s.bottom-t.top+"px"):(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"))}this.toggle(e)},d.prototype.handleForKeyboardEvent_=function(e){if(this.element_&&this.container_&&this.forElement_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)&&(e.keyCode===this.Keycodes_.UP_ARROW?(e.preventDefault(),t[t.length-1].focus()):e.keyCode===this.Keycodes_.DOWN_ARROW&&(e.preventDefault(),t[0].focus()))}},d.prototype.handleItemKeyboardEvent_=function(e){if(this.element_&&this.container_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");if(t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){var s=Array.prototype.slice.call(t).indexOf(e.target);if(e.keyCode===this.Keycodes_.UP_ARROW)e.preventDefault(),s>0?t[s-1].focus():t[t.length-1].focus();else if(e.keyCode===this.Keycodes_.DOWN_ARROW)e.preventDefault(),t.length>s+1?t[s+1].focus():t[0].focus();else if(e.keyCode===this.Keycodes_.SPACE||e.keyCode===this.Keycodes_.ENTER){e.preventDefault();var i=new MouseEvent("mousedown");e.target.dispatchEvent(i),i=new MouseEvent("mouseup"),e.target.dispatchEvent(i),e.target.click()}else e.keyCode===this.Keycodes_.ESCAPE&&(e.preventDefault(),this.hide())}}},d.prototype.handleItemClick_=function(e){e.target.hasAttribute("disabled")?e.stopPropagation():(this.closing_=!0,window.setTimeout(function(e){this.hide(),this.closing_=!1}.bind(this),this.Constant_.CLOSE_TIMEOUT))},d.prototype.applyClip_=function(e,t){this.element_.classList.contains(this.CssClasses_.UNALIGNED)?this.element_.style.clip="":this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?this.element_.style.clip="rect(0 "+t+"px 0 "+t+"px)":this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?this.element_.style.clip="rect("+e+"px 0 "+e+"px 0)":this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?this.element_.style.clip="rect("+e+"px "+t+"px "+e+"px "+t+"px)":this.element_.style.clip=""},d.prototype.removeAnimationEndListener_=function(e){e.target.classList.remove(d.prototype.CssClasses_.IS_ANIMATING)},d.prototype.addAnimationEndListener_=function(){this.element_.addEventListener("transitionend",this.removeAnimationEndListener_),this.element_.addEventListener("webkitTransitionEnd",this.removeAnimationEndListener_)},d.prototype.show=function(e){if(this.element_&&this.container_&&this.outline_){var t=this.element_.getBoundingClientRect().height,s=this.element_.getBoundingClientRect().width;this.container_.style.width=s+"px",this.container_.style.height=t+"px",this.outline_.style.width=s+"px",this.outline_.style.height=t+"px";for(var i=this.Constant_.TRANSITION_DURATION_SECONDS*this.Constant_.TRANSITION_DURATION_FRACTION,n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),a=0;a<n.length;a++){var l=null;l=this.element_.classList.contains(this.CssClasses_.TOP_LEFT)||this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(t-n[a].offsetTop-n[a].offsetHeight)/t*i+"s":n[a].offsetTop/t*i+"s",n[a].style.transitionDelay=l}this.applyClip_(t,s),window.requestAnimationFrame(function(){this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.element_.style.clip="rect(0 "+s+"px "+t+"px 0)",this.container_.classList.add(this.CssClasses_.IS_VISIBLE)}.bind(this)),this.addAnimationEndListener_();var o=function(t){t===e||this.closing_||t.target.parentNode===this.element_||(document.removeEventListener("click",o),this.hide())}.bind(this);document.addEventListener("click",o)}},d.prototype.show=d.prototype.show,d.prototype.hide=function(){if(this.element_&&this.container_&&this.outline_){for(var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),t=0;t<e.length;t++)e[t].style.removeProperty("transition-delay");var s=this.element_.getBoundingClientRect(),i=s.height,n=s.width;this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.applyClip_(i,n),this.container_.classList.remove(this.CssClasses_.IS_VISIBLE),this.addAnimationEndListener_()}},d.prototype.hide=d.prototype.hide,d.prototype.toggle=function(e){this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)?this.hide():this.show(e)},d.prototype.toggle=d.prototype.toggle,s.register({constructor:d,classAsString:"MaterialMenu",cssClass:"mdl-js-menu",widget:!0});var h=function(e){this.element_=e,this.init()};window.MaterialProgress=h,h.prototype.Constant_={},h.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},h.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},h.prototype.setProgress=h.prototype.setProgress,h.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},h.prototype.setBuffer=h.prototype.setBuffer,h.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,e=document.createElement("div"),e.className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,e=document.createElement("div"),e.className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},s.register({constructor:h,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0});var c=function(e){this.element_=e,this.init()};window.MaterialRadio=c,c.prototype.Constant_={TINY_TIMEOUT:.001},c.prototype.CssClasses_={IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded",JS_RADIO:"mdl-js-radio",RADIO_BTN:"mdl-radio__button",RADIO_OUTER_CIRCLE:"mdl-radio__outer-circle",RADIO_INNER_CIRCLE:"mdl-radio__inner-circle",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-radio__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple"},c.prototype.onChange_=function(e){for(var t=document.getElementsByClassName(this.CssClasses_.JS_RADIO),s=0;s<t.length;s++){var i=t[s].querySelector("."+this.CssClasses_.RADIO_BTN);i.getAttribute("name")===this.btnElement_.getAttribute("name")&&"undefined"!=typeof t[s].MaterialRadio&&t[s].MaterialRadio.updateClasses_()}},c.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},c.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},c.prototype.onMouseup_=function(e){this.blur_()},c.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},c.prototype.blur_=function(){window.setTimeout(function(){this.btnElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},c.prototype.checkDisabled=function(){this.btnElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},c.prototype.checkDisabled=c.prototype.checkDisabled,c.prototype.checkToggleState=function(){this.btnElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},c.prototype.checkToggleState=c.prototype.checkToggleState,c.prototype.disable=function(){this.btnElement_.disabled=!0,this.updateClasses_()},c.prototype.disable=c.prototype.disable,c.prototype.enable=function(){this.btnElement_.disabled=!1,this.updateClasses_()},c.prototype.enable=c.prototype.enable,c.prototype.check=function(){this.btnElement_.checked=!0,this.onChange_(null)},c.prototype.check=c.prototype.check,c.prototype.uncheck=function(){this.btnElement_.checked=!1,this.onChange_(null)},c.prototype.uncheck=c.prototype.uncheck,c.prototype.init=function(){if(this.element_){this.btnElement_=this.element_.querySelector("."+this.CssClasses_.RADIO_BTN),this.boundChangeHandler_=this.onChange_.bind(this),this.boundFocusHandler_=this.onChange_.bind(this),this.boundBlurHandler_=this.onBlur_.bind(this),this.boundMouseUpHandler_=this.onMouseup_.bind(this);var e=document.createElement("span");e.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);var t=document.createElement("span");t.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE),this.element_.appendChild(e),this.element_.appendChild(t);var s;if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),s=document.createElement("span"),s.classList.add(this.CssClasses_.RIPPLE_CONTAINER),s.classList.add(this.CssClasses_.RIPPLE_EFFECT),s.classList.add(this.CssClasses_.RIPPLE_CENTER),s.addEventListener("mouseup",this.boundMouseUpHandler_);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),s.appendChild(i),this.element_.appendChild(s)}this.btnElement_.addEventListener("change",this.boundChangeHandler_),this.btnElement_.addEventListener("focus",this.boundFocusHandler_),this.btnElement_.addEventListener("blur",this.boundBlurHandler_),this.element_.addEventListener("mouseup",this.boundMouseUpHandler_),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:c,classAsString:"MaterialRadio",cssClass:"mdl-js-radio",widget:!0});var p=function(e){this.element_=e,this.isIE_=window.navigator.msPointerEnabled,this.init()};window.MaterialSlider=p,p.prototype.Constant_={},p.prototype.CssClasses_={IE_CONTAINER:"mdl-slider__ie-container",SLIDER_CONTAINER:"mdl-slider__container",BACKGROUND_FLEX:"mdl-slider__background-flex",BACKGROUND_LOWER:"mdl-slider__background-lower",BACKGROUND_UPPER:"mdl-slider__background-upper",IS_LOWEST_VALUE:"is-lowest-value",IS_UPGRADED:"is-upgraded"},p.prototype.onInput_=function(e){this.updateValueStyles_()},p.prototype.onChange_=function(e){this.updateValueStyles_()},p.prototype.onMouseUp_=function(e){e.target.blur()},p.prototype.onContainerMouseDown_=function(e){if(e.target===this.element_.parentElement){e.preventDefault();var t=new MouseEvent("mousedown",{target:e.target,buttons:e.buttons,clientX:e.clientX,clientY:this.element_.getBoundingClientRect().y});this.element_.dispatchEvent(t)}},p.prototype.updateValueStyles_=function(){var e=(this.element_.value-this.element_.min)/(this.element_.max-this.element_.min);0===e?this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE):this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE),this.isIE_||(this.backgroundLower_.style.flex=e,this.backgroundLower_.style.webkitFlex=e,this.backgroundUpper_.style.flex=1-e,this.backgroundUpper_.style.webkitFlex=1-e)},p.prototype.disable=function(){this.element_.disabled=!0},p.prototype.disable=p.prototype.disable,p.prototype.enable=function(){this.element_.disabled=!1},p.prototype.enable=p.prototype.enable,p.prototype.change=function(e){"undefined"!=typeof e&&(this.element_.value=e),this.updateValueStyles_()},p.prototype.change=p.prototype.change,p.prototype.init=function(){if(this.element_){if(this.isIE_){var e=document.createElement("div");e.classList.add(this.CssClasses_.IE_CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_)}else{var t=document.createElement("div");t.classList.add(this.CssClasses_.SLIDER_CONTAINER),this.element_.parentElement.insertBefore(t,this.element_),this.element_.parentElement.removeChild(this.element_),t.appendChild(this.element_);var s=document.createElement("div");s.classList.add(this.CssClasses_.BACKGROUND_FLEX),t.appendChild(s),this.backgroundLower_=document.createElement("div"),this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER),s.appendChild(this.backgroundLower_),this.backgroundUpper_=document.createElement("div"),this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER),s.appendChild(this.backgroundUpper_)}this.boundInputHandler=this.onInput_.bind(this),this.boundChangeHandler=this.onChange_.bind(this),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.boundContainerMouseDownHandler=this.onContainerMouseDown_.bind(this),this.element_.addEventListener("input",this.boundInputHandler),this.element_.addEventListener("change",this.boundChangeHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.element_.parentElement.addEventListener("mousedown",this.boundContainerMouseDownHandler),this.updateValueStyles_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:p,classAsString:"MaterialSlider",cssClass:"mdl-js-slider",widget:!0});var C=function(e){if(this.element_=e,this.textElement_=this.element_.querySelector("."+this.cssClasses_.MESSAGE),this.actionElement_=this.element_.querySelector("."+this.cssClasses_.ACTION),!this.textElement_)throw new Error("There must be a message element for a snackbar.");if(!this.actionElement_)throw new Error("There must be an action element for a snackbar.");this.active=!1,this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.queuedNotifications_=[],this.setActionHidden_(!0)};window.MaterialSnackbar=C,C.prototype.Constant_={ANIMATION_LENGTH:250},C.prototype.cssClasses_={SNACKBAR:"mdl-snackbar",MESSAGE:"mdl-snackbar__text",ACTION:"mdl-snackbar__action",ACTIVE:"mdl-snackbar--active"},C.prototype.displaySnackbar_=function(){this.element_.setAttribute("aria-hidden","true"),
this.actionHandler_&&(this.actionElement_.textContent=this.actionText_,this.actionElement_.addEventListener("click",this.actionHandler_),this.setActionHidden_(!1)),this.textElement_.textContent=this.message_,this.element_.classList.add(this.cssClasses_.ACTIVE),this.element_.setAttribute("aria-hidden","false"),setTimeout(this.cleanup_.bind(this),this.timeout_)},C.prototype.showSnackbar=function(e){if(void 0===e)throw new Error("Please provide a data object with at least a message to display.");if(void 0===e.message)throw new Error("Please provide a message to be displayed.");if(e.actionHandler&&!e.actionText)throw new Error("Please provide action text with the handler.");this.active?this.queuedNotifications_.push(e):(this.active=!0,this.message_=e.message,e.timeout?this.timeout_=e.timeout:this.timeout_=2750,e.actionHandler&&(this.actionHandler_=e.actionHandler),e.actionText&&(this.actionText_=e.actionText),this.displaySnackbar_())},C.prototype.showSnackbar=C.prototype.showSnackbar,C.prototype.checkQueue_=function(){this.queuedNotifications_.length>0&&this.showSnackbar(this.queuedNotifications_.shift())},C.prototype.cleanup_=function(){this.element_.classList.remove(this.cssClasses_.ACTIVE),setTimeout(function(){this.element_.setAttribute("aria-hidden","true"),this.textElement_.textContent="",Boolean(this.actionElement_.getAttribute("aria-hidden"))||(this.setActionHidden_(!0),this.actionElement_.textContent="",this.actionElement_.removeEventListener("click",this.actionHandler_)),this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.active=!1,this.checkQueue_()}.bind(this),this.Constant_.ANIMATION_LENGTH)},C.prototype.setActionHidden_=function(e){e?this.actionElement_.setAttribute("aria-hidden","true"):this.actionElement_.removeAttribute("aria-hidden")},s.register({constructor:C,classAsString:"MaterialSnackbar",cssClass:"mdl-js-snackbar",widget:!0});var u=function(e){this.element_=e,this.init()};window.MaterialSpinner=u,u.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},u.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},u.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var s=document.createElement("div");s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),s.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var a=[s,i,n],l=0;l<a.length;l++){var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),a[l].appendChild(o)}t.appendChild(s),t.appendChild(i),t.appendChild(n),this.element_.appendChild(t)},u.prototype.createLayer=u.prototype.createLayer,u.prototype.stop=function(){this.element_.classList.remove("is-active")},u.prototype.stop=u.prototype.stop,u.prototype.start=function(){this.element_.classList.add("is-active")},u.prototype.start=u.prototype.start,u.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},s.register({constructor:u,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0});var E=function(e){this.element_=e,this.init()};window.MaterialSwitch=E,E.prototype.Constant_={TINY_TIMEOUT:.001},E.prototype.CssClasses_={INPUT:"mdl-switch__input",TRACK:"mdl-switch__track",THUMB:"mdl-switch__thumb",FOCUS_HELPER:"mdl-switch__focus-helper",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-switch__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},E.prototype.onChange_=function(e){this.updateClasses_()},E.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},E.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},E.prototype.onMouseUp_=function(e){this.blur_()},E.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},E.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},E.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},E.prototype.checkDisabled=E.prototype.checkDisabled,E.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},E.prototype.checkToggleState=E.prototype.checkToggleState,E.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},E.prototype.disable=E.prototype.disable,E.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},E.prototype.enable=E.prototype.enable,E.prototype.on=function(){this.inputElement_.checked=!0,this.updateClasses_()},E.prototype.on=E.prototype.on,E.prototype.off=function(){this.inputElement_.checked=!1,this.updateClasses_()},E.prototype.off=E.prototype.off,E.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("div");e.classList.add(this.CssClasses_.TRACK);var t=document.createElement("div");t.classList.add(this.CssClasses_.THUMB);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.FOCUS_HELPER),t.appendChild(s),this.element_.appendChild(e),this.element_.appendChild(t),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.rippleContainerElement_.addEventListener("mouseup",this.boundMouseUpHandler);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundChangeHandler=this.onChange_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.inputElement_.addEventListener("change",this.boundChangeHandler),this.inputElement_.addEventListener("focus",this.boundFocusHandler),this.inputElement_.addEventListener("blur",this.boundBlurHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},s.register({constructor:E,classAsString:"MaterialSwitch",cssClass:"mdl-js-switch",widget:!0});var m=function(e){this.element_=e,this.init()};window.MaterialTabs=m,m.prototype.Constant_={},m.prototype.CssClasses_={TAB_CLASS:"mdl-tabs__tab",PANEL_CLASS:"mdl-tabs__panel",ACTIVE_CLASS:"is-active",UPGRADED_CLASS:"is-upgraded",MDL_JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",MDL_RIPPLE_CONTAINER:"mdl-tabs__ripple-container",MDL_RIPPLE:"mdl-ripple",MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events"},m.prototype.initTabs_=function(){this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)&&this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS),this.tabs_=this.element_.querySelectorAll("."+this.CssClasses_.TAB_CLASS),this.panels_=this.element_.querySelectorAll("."+this.CssClasses_.PANEL_CLASS);for(var t=0;t<this.tabs_.length;t++)new e(this.tabs_[t],this);this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS)},m.prototype.resetTabState_=function(){for(var e=0;e<this.tabs_.length;e++)this.tabs_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},m.prototype.resetPanelState_=function(){for(var e=0;e<this.panels_.length;e++)this.panels_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},m.prototype.init=function(){this.element_&&this.initTabs_()},s.register({constructor:m,classAsString:"MaterialTabs",cssClass:"mdl-js-tabs"});var L=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()};window.MaterialTextfield=L,L.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},L.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},L.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},L.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},L.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},L.prototype.onReset_=function(e){this.updateClasses_()},L.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},L.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},L.prototype.checkDisabled=L.prototype.checkDisabled,L.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},L.prototype.checkFocus=L.prototype.checkFocus,L.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},L.prototype.checkValidity=L.prototype.checkValidity,L.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},L.prototype.checkDirty=L.prototype.checkDirty,L.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},L.prototype.disable=L.prototype.disable,L.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},L.prototype.enable=L.prototype.enable,L.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},L.prototype.change=L.prototype.change,L.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},s.register({constructor:L,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0});var I=function(e){this.element_=e,this.init()};window.MaterialTooltip=I,I.prototype.Constant_={},I.prototype.CssClasses_={IS_ACTIVE:"is-active",BOTTOM:"mdl-tooltip--bottom",LEFT:"mdl-tooltip--left",RIGHT:"mdl-tooltip--right",TOP:"mdl-tooltip--top"},I.prototype.handleMouseEnter_=function(e){var t=e.target.getBoundingClientRect(),s=t.left+t.width/2,i=t.top+t.height/2,n=-1*(this.element_.offsetWidth/2),a=-1*(this.element_.offsetHeight/2);this.element_.classList.contains(this.CssClasses_.LEFT)||this.element_.classList.contains(this.CssClasses_.RIGHT)?(s=t.width/2,i+a<0?(this.element_.style.top="0",this.element_.style.marginTop="0"):(this.element_.style.top=i+"px",this.element_.style.marginTop=a+"px")):s+n<0?(this.element_.style.left="0",this.element_.style.marginLeft="0"):(this.element_.style.left=s+"px",this.element_.style.marginLeft=n+"px"),this.element_.classList.contains(this.CssClasses_.TOP)?this.element_.style.top=t.top-this.element_.offsetHeight-10+"px":this.element_.classList.contains(this.CssClasses_.RIGHT)?this.element_.style.left=t.left+t.width+10+"px":this.element_.classList.contains(this.CssClasses_.LEFT)?this.element_.style.left=t.left-this.element_.offsetWidth-10+"px":this.element_.style.top=t.top+t.height+10+"px",this.element_.classList.add(this.CssClasses_.IS_ACTIVE)},I.prototype.hideTooltip_=function(){this.element_.classList.remove(this.CssClasses_.IS_ACTIVE)},I.prototype.init=function(){if(this.element_){var e=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for");e&&(this.forElement_=document.getElementById(e)),this.forElement_&&(this.forElement_.hasAttribute("tabindex")||this.forElement_.setAttribute("tabindex","0"),this.boundMouseEnterHandler=this.handleMouseEnter_.bind(this),this.boundMouseLeaveAndScrollHandler=this.hideTooltip_.bind(this),this.forElement_.addEventListener("mouseenter",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("touchend",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("mouseleave",this.boundMouseLeaveAndScrollHandler,!1),window.addEventListener("scroll",this.boundMouseLeaveAndScrollHandler,!0),window.addEventListener("touchstart",this.boundMouseLeaveAndScrollHandler))}},s.register({constructor:I,classAsString:"MaterialTooltip",cssClass:"mdl-tooltip"});var f=function(e){this.element_=e,this.init()};window.MaterialLayout=f,f.prototype.Constant_={MAX_WIDTH:"(max-width: 1024px)",TAB_SCROLL_PIXELS:100,RESIZE_TIMEOUT:100,MENU_ICON:"&#xE5D2;",CHEVRON_LEFT:"chevron_left",CHEVRON_RIGHT:"chevron_right"},f.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32},f.prototype.Mode_={STANDARD:0,SEAMED:1,WATERFALL:2,SCROLL:3},f.prototype.CssClasses_={CONTAINER:"mdl-layout__container",HEADER:"mdl-layout__header",DRAWER:"mdl-layout__drawer",CONTENT:"mdl-layout__content",DRAWER_BTN:"mdl-layout__drawer-button",ICON:"material-icons",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-layout__tab-ripple-container",RIPPLE:"mdl-ripple",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",HEADER_SEAMED:"mdl-layout__header--seamed",HEADER_WATERFALL:"mdl-layout__header--waterfall",HEADER_SCROLL:"mdl-layout__header--scroll",FIXED_HEADER:"mdl-layout--fixed-header",OBFUSCATOR:"mdl-layout__obfuscator",TAB_BAR:"mdl-layout__tab-bar",TAB_CONTAINER:"mdl-layout__tab-bar-container",TAB:"mdl-layout__tab",TAB_BAR_BUTTON:"mdl-layout__tab-bar-button",TAB_BAR_LEFT_BUTTON:"mdl-layout__tab-bar-left-button",TAB_BAR_RIGHT_BUTTON:"mdl-layout__tab-bar-right-button",TAB_MANUAL_SWITCH:"mdl-layout__tab-manual-switch",PANEL:"mdl-layout__tab-panel",HAS_DRAWER:"has-drawer",HAS_TABS:"has-tabs",HAS_SCROLLING_HEADER:"has-scrolling-header",CASTING_SHADOW:"is-casting-shadow",IS_COMPACT:"is-compact",IS_SMALL_SCREEN:"is-small-screen",IS_DRAWER_OPEN:"is-visible",IS_ACTIVE:"is-active",IS_UPGRADED:"is-upgraded",IS_ANIMATING:"is-animating",ON_LARGE_SCREEN:"mdl-layout--large-screen-only",ON_SMALL_SCREEN:"mdl-layout--small-screen-only"},f.prototype.contentScrollHandler_=function(){if(!this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)){var e=!this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN)||this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);this.content_.scrollTop>0&&!this.header_.classList.contains(this.CssClasses_.IS_COMPACT)?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.header_.classList.add(this.CssClasses_.IS_COMPACT),e&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING)):this.content_.scrollTop<=0&&this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.header_.classList.remove(this.CssClasses_.IS_COMPACT),e&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING))}},f.prototype.keyboardEventHandler_=function(e){e.keyCode===this.Keycodes_.ESCAPE&&this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)&&this.toggleDrawer()},f.prototype.screenSizeHandler_=function(){this.screenSizeMediaQuery_.matches?this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN):(this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN),this.drawer_&&(this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN)))},f.prototype.drawerToggleHandler_=function(e){if(e&&"keydown"===e.type){if(e.keyCode!==this.Keycodes_.SPACE&&e.keyCode!==this.Keycodes_.ENTER)return;e.preventDefault()}this.toggleDrawer()},f.prototype.headerTransitionEndHandler_=function(){this.header_.classList.remove(this.CssClasses_.IS_ANIMATING)},f.prototype.headerClickHandler_=function(){this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING))},f.prototype.resetTabState_=function(e){for(var t=0;t<e.length;t++)e[t].classList.remove(this.CssClasses_.IS_ACTIVE)},f.prototype.resetPanelState_=function(e){for(var t=0;t<e.length;t++)e[t].classList.remove(this.CssClasses_.IS_ACTIVE)},f.prototype.toggleDrawer=function(){var e=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)?(this.drawer_.setAttribute("aria-hidden","false"),e.setAttribute("aria-expanded","true")):(this.drawer_.setAttribute("aria-hidden","true"),e.setAttribute("aria-expanded","false"))},f.prototype.toggleDrawer=f.prototype.toggleDrawer,f.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER);var s=this.element_.querySelector(":focus");this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),s&&s.focus();for(var i=this.element_.childNodes,n=i.length,a=0;a<n;a++){var l=i[a];l.classList&&l.classList.contains(this.CssClasses_.HEADER)&&(this.header_=l),l.classList&&l.classList.contains(this.CssClasses_.DRAWER)&&(this.drawer_=l),l.classList&&l.classList.contains(this.CssClasses_.CONTENT)&&(this.content_=l)}window.addEventListener("pageshow",function(e){e.persisted&&(this.element_.style.overflowY="hidden",requestAnimationFrame(function(){this.element_.style.overflowY=""}.bind(this)))}.bind(this),!1),this.header_&&(this.tabBar_=this.header_.querySelector("."+this.CssClasses_.TAB_BAR));var o=this.Mode_.STANDARD;if(this.header_&&(this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)?o=this.Mode_.SEAMED:this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)?(o=this.Mode_.WATERFALL,this.header_.addEventListener("transitionend",this.headerTransitionEndHandler_.bind(this)),this.header_.addEventListener("click",this.headerClickHandler_.bind(this))):this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)&&(o=this.Mode_.SCROLL,e.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)),o===this.Mode_.STANDARD?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)):o===this.Mode_.SEAMED||o===this.Mode_.SCROLL?(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)):o===this.Mode_.WATERFALL&&(this.content_.addEventListener("scroll",this.contentScrollHandler_.bind(this)),this.contentScrollHandler_())),this.drawer_){var r=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);if(!r){r=document.createElement("div"),r.setAttribute("aria-expanded","false"),r.setAttribute("role","button"),r.setAttribute("tabindex","0"),r.classList.add(this.CssClasses_.DRAWER_BTN);var _=document.createElement("i");_.classList.add(this.CssClasses_.ICON),_.innerHTML=this.Constant_.MENU_ICON,r.appendChild(_)}this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)?r.classList.add(this.CssClasses_.ON_LARGE_SCREEN):this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)&&r.classList.add(this.CssClasses_.ON_SMALL_SCREEN),r.addEventListener("click",this.drawerToggleHandler_.bind(this)),r.addEventListener("keydown",this.drawerToggleHandler_.bind(this)),this.element_.classList.add(this.CssClasses_.HAS_DRAWER),this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)?this.header_.insertBefore(r,this.header_.firstChild):this.element_.insertBefore(r,this.content_);var d=document.createElement("div");d.classList.add(this.CssClasses_.OBFUSCATOR),this.element_.appendChild(d),d.addEventListener("click",this.drawerToggleHandler_.bind(this)),this.obfuscator_=d,this.drawer_.addEventListener("keydown",this.keyboardEventHandler_.bind(this)),this.drawer_.setAttribute("aria-hidden","true")}if(this.screenSizeMediaQuery_=window.matchMedia(this.Constant_.MAX_WIDTH),this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)),this.screenSizeHandler_(),this.header_&&this.tabBar_){this.element_.classList.add(this.CssClasses_.HAS_TABS);var h=document.createElement("div");h.classList.add(this.CssClasses_.TAB_CONTAINER),this.header_.insertBefore(h,this.tabBar_),this.header_.removeChild(this.tabBar_);var c=document.createElement("div");c.classList.add(this.CssClasses_.TAB_BAR_BUTTON),c.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);var p=document.createElement("i");p.classList.add(this.CssClasses_.ICON),p.textContent=this.Constant_.CHEVRON_LEFT,c.appendChild(p),c.addEventListener("click",function(){this.tabBar_.scrollLeft-=this.Constant_.TAB_SCROLL_PIXELS}.bind(this));var C=document.createElement("div");C.classList.add(this.CssClasses_.TAB_BAR_BUTTON),C.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);var u=document.createElement("i");u.classList.add(this.CssClasses_.ICON),u.textContent=this.Constant_.CHEVRON_RIGHT,C.appendChild(u),C.addEventListener("click",function(){this.tabBar_.scrollLeft+=this.Constant_.TAB_SCROLL_PIXELS}.bind(this)),h.appendChild(c),h.appendChild(this.tabBar_),h.appendChild(C);var E=function(){this.tabBar_.scrollLeft>0?c.classList.add(this.CssClasses_.IS_ACTIVE):c.classList.remove(this.CssClasses_.IS_ACTIVE),this.tabBar_.scrollLeft<this.tabBar_.scrollWidth-this.tabBar_.offsetWidth?C.classList.add(this.CssClasses_.IS_ACTIVE):C.classList.remove(this.CssClasses_.IS_ACTIVE)}.bind(this);this.tabBar_.addEventListener("scroll",E),E();var m=function(){this.resizeTimeoutId_&&clearTimeout(this.resizeTimeoutId_),this.resizeTimeoutId_=setTimeout(function(){E(),this.resizeTimeoutId_=null}.bind(this),this.Constant_.RESIZE_TIMEOUT)}.bind(this);window.addEventListener("resize",m),this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)&&this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);for(var L=this.tabBar_.querySelectorAll("."+this.CssClasses_.TAB),I=this.content_.querySelectorAll("."+this.CssClasses_.PANEL),f=0;f<L.length;f++)new t(L[f],L,I,this)}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},window.MaterialLayoutTab=t,s.register({constructor:f,classAsString:"MaterialLayout",cssClass:"mdl-js-layout"});var b=function(e){this.element_=e,this.init()};window.MaterialDataTable=b,b.prototype.Constant_={},b.prototype.CssClasses_={DATA_TABLE:"mdl-data-table",SELECTABLE:"mdl-data-table--selectable",SELECT_ELEMENT:"mdl-data-table__select",IS_SELECTED:"is-selected",IS_UPGRADED:"is-upgraded"},b.prototype.selectRow_=function(e,t,s){return t?function(){e.checked?t.classList.add(this.CssClasses_.IS_SELECTED):t.classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):s?function(){var t,i;if(e.checked)for(t=0;t<s.length;t++)i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.check(),s[t].classList.add(this.CssClasses_.IS_SELECTED);else for(t=0;t<s.length;t++)i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.uncheck(),s[t].classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):void 0},b.prototype.createCheckbox_=function(e,t){var i=document.createElement("label"),n=["mdl-checkbox","mdl-js-checkbox","mdl-js-ripple-effect",this.CssClasses_.SELECT_ELEMENT];i.className=n.join(" ");var a=document.createElement("input");return a.type="checkbox",a.classList.add("mdl-checkbox__input"),e?(a.checked=e.classList.contains(this.CssClasses_.IS_SELECTED),a.addEventListener("change",this.selectRow_(a,e))):t&&a.addEventListener("change",this.selectRow_(a,null,t)),i.appendChild(a),s.upgradeElement(i,"MaterialCheckbox"),i},b.prototype.init=function(){if(this.element_){var e=this.element_.querySelector("th"),t=Array.prototype.slice.call(this.element_.querySelectorAll("tbody tr")),s=Array.prototype.slice.call(this.element_.querySelectorAll("tfoot tr")),i=t.concat(s);if(this.element_.classList.contains(this.CssClasses_.SELECTABLE)){var n=document.createElement("th"),a=this.createCheckbox_(null,i);n.appendChild(a),e.parentElement.insertBefore(n,e);for(var l=0;l<i.length;l++){var o=i[l].querySelector("td");if(o){var r=document.createElement("td");if("TBODY"===i[l].parentNode.nodeName.toUpperCase()){var _=this.createCheckbox_(i[l]);r.appendChild(_)}i[l].insertBefore(r,o)}}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}}},s.register({constructor:b,classAsString:"MaterialDataTable",cssClass:"mdl-js-data-table"});var S=function(e){this.element_=e,this.init()};window.MaterialRipple=S,S.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},S.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},S.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===e.type&&(this.ignoringMouseDown_=!0);var s=this.getFrameCount();if(s>0)return;this.setFrameCount(1);var i,n,a=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)i=Math.round(a.width/2),n=Math.round(a.height/2);else{var l=void 0!==e.clientX?e.clientX:e.touches[0].clientX,o=void 0!==e.clientY?e.clientY:e.touches[0].clientY;i=Math.round(l-a.left),n=Math.round(o-a.top)}this.setRippleXY(i,n),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},S.prototype.upHandler_=function(e){e&&2!==e.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},S.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,t){this.x_=e,this.y_=t},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var s,i,n,a="translate("+this.x_+"px, "+this.y_+"px)";t?(i=this.Constant_.INITIAL_SCALE,n=this.Constant_.INITIAL_SIZE):(i=this.Constant_.FINAL_SCALE,n=this.rippleSize_+"px",e&&(a="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),s="translate(-50%, -50%) "+a+i,this.rippleElement_.style.webkitTransform=s,this.rippleElement_.style.msTransform=s,this.rippleElement_.style.transform=s,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},s.register({constructor:S,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}();


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var platform_browser_1 = __webpack_require__(17);
var forms_1 = __webpack_require__(54);
var router_1 = __webpack_require__(19);
var home_1 = __webpack_require__(103);
var hello_1 = __webpack_require__(102);
var products_1 = __webpack_require__(104);
var technology_1 = __webpack_require__(105);
exports.routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: home_1.HomeComponent, data: { title: 'Home', name: 'Angular4' } },
    { path: 'products', component: products_1.ProductsComponent, data: { title: 'Products' } },
    { path: 'technology', component: technology_1.TechnologyComponent, data: { title: 'Technology' } },
    { path: '**', redirectTo: 'home' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            home_1.HomeComponent,
            hello_1.HelloComponent,
            products_1.ProductsComponent,
            technology_1.TechnologyComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(exports.routes)
        ]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var servicestack_client_1 = __webpack_require__(50);
exports.client = new servicestack_client_1.JsonServiceClient(global.BaseUrl || '/');
var MDL = (function () {
    function MDL() {
    }
    MDL.prototype.ngAfterViewInit = function () {
        if (typeof componentHandler !== "undefined") {
            componentHandler.upgradeDom();
        }
    };
    return MDL;
}());
MDL = tslib_1.__decorate([
    core_1.Directive({
        selector: '[mdl]'
    })
], MDL);
exports.MDL = MDL;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return InternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return NgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return NgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return REQUIRED_VALIDATOR; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(17);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @license Angular v4.0.3
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */





/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class for control directives.
 *
 * Only used internally in the forms module.
 *
 * \@stable
 * @abstract
 */
var AbstractControlDirective = (function () {
    function AbstractControlDirective() {
    }
    Object.defineProperty(AbstractControlDirective.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { throw new Error('unimplemented'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.value : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.valid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.invalid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.pending : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.errors : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.pristine : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.dirty : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.touched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.untouched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.disabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.enabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.statusChanges : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.valueChanges : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} value
     * @return {?}
     */
    AbstractControlDirective.prototype.reset = function (value) {
        if (value === void 0) { value = undefined; }
        if (this.control)
            this.control.reset(value);
    };
    /**
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControlDirective.prototype.hasError = function (errorCode, path) {
        if (path === void 0) { path = null; }
        return this.control ? this.control.hasError(errorCode, path) : false;
    };
    /**
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControlDirective.prototype.getError = function (errorCode, path) {
        if (path === void 0) { path = null; }
        return this.control ? this.control.getError(errorCode, path) : null;
    };
    return AbstractControlDirective;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A directive that contains multiple {\@link NgControl}s.
 *
 * Only used by the forms module.
 *
 * \@stable
 */
var ControlContainer = (function (_super) {
    __extends(ControlContainer, _super);
    function ControlContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ControlContainer.prototype, "formDirective", {
        /**
         * Get the form to which this container belongs.
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "path", {
        /**
         * Get the path to this container.
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    return ControlContainer;
}(AbstractControlDirective));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __assign = (undefined && undefined.__assign) || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
    }
    return t;
};
/**
 * @param {?} value
 * @return {?}
 */
function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
/**
 * Providers for validators to be used for {\@link FormControl}s in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * ### Example
 *
 * {\@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
 * \@stable
 */
var NG_VALIDATORS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NgValidators');
/**
 * Providers for asynchronous validators to be used for {\@link FormControl}s
 * in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * See {\@link NG_VALIDATORS} for more details.
 *
 * \@stable
 */
var NG_ASYNC_VALIDATORS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NgAsyncValidators');
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/**
 * Provides a set of validators used by form controls.
 *
 * A validator is a function that processes a {\@link FormControl} or collection of
 * controls and returns a map of errors. A null map means that validation has passed.
 *
 * ### Example
 *
 * ```typescript
 * var loginControl = new FormControl("", Validators.required)
 * ```
 *
 * \@stable
 */
var Validators = (function () {
    function Validators() {
    }
    /**
     * Validator that requires controls to have a non-empty value.
     * @param {?} control
     * @return {?}
     */
    Validators.required = function (control) {
        return isEmptyInputValue(control.value) ? { 'required': true } : null;
    };
    /**
     * Validator that requires control value to be true.
     * @param {?} control
     * @return {?}
     */
    Validators.requiredTrue = function (control) {
        return control.value === true ? null : { 'required': true };
    };
    /**
     * Validator that performs email validation.
     * @param {?} control
     * @return {?}
     */
    Validators.email = function (control) {
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    };
    /**
     * Validator that requires controls to have a value of a minimum length.
     * @param {?} minLength
     * @return {?}
     */
    Validators.minLength = function (minLength) {
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ length = control.value ? control.value.length : 0;
            return length < minLength ?
                { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * Validator that requires controls to have a value of a maximum length.
     * @param {?} maxLength
     * @return {?}
     */
    Validators.maxLength = function (maxLength) {
        return function (control) {
            var /** @type {?} */ length = control.value ? control.value.length : 0;
            return length > maxLength ?
                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * Validator that requires a control to match a regex to its value.
     * @param {?} pattern
     * @return {?}
     */
    Validators.pattern = function (pattern) {
        if (!pattern)
            return Validators.nullValidator;
        var /** @type {?} */ regex;
        var /** @type {?} */ regexStr;
        if (typeof pattern === 'string') {
            regexStr = "^" + pattern + "$";
            regex = new RegExp(regexStr);
        }
        else {
            regexStr = pattern.toString();
            regex = pattern;
        }
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ value = control.value;
            return regex.test(value) ? null :
                { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
        };
    };
    /**
     * No-op validator.
     * @param {?} c
     * @return {?}
     */
    Validators.nullValidator = function (c) { return null; };
    /**
     * Compose multiple validators into a single function that returns the union
     * of the individual error maps.
     * @param {?} validators
     * @return {?}
     */
    Validators.compose = function (validators) {
        if (!validators)
            return null;
        var /** @type {?} */ presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        };
    };
    /**
     * @param {?} validators
     * @return {?}
     */
    Validators.composeAsync = function (validators) {
        if (!validators)
            return null;
        var /** @type {?} */ presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            var /** @type {?} */ observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin__["forkJoin"])(observables), _mergeErrors);
        };
    };
    return Validators;
}());
/**
 * @param {?} o
 * @return {?}
 */
function isPresent(o) {
    return o != null;
}
/**
 * @param {?} r
 * @return {?}
 */
function toObservable(r) {
    var /** @type {?} */ obs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisPromise"])(r) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__["fromPromise"])(r) : r;
    if (!(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisObservable"])(obs))) {
        throw new Error("Expected validator to return Promise or Observable.");
    }
    return obs;
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} arrayOfErrors
 * @return {?}
 */
function _mergeErrors(arrayOfErrors) {
    var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
        return errors != null ? __assign({}, res, errors) : res;
    }, {});
    return Object.keys(res).length === 0 ? null : res;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide a {\@link ControlValueAccessor} for form controls.
 *
 * See {\@link DefaultValueAccessor} for how to implement one.
 * \@stable
 */
var NG_VALUE_ACCESSOR = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NgValueAccessor');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CheckboxControlValueAccessor; }),
    multi: true,
};
/**
 * The accessor for writing a value and listening to changes on a checkbox input element.
 *
 *  ### Example
 *  ```
 *  <input type="checkbox" name="rememberLogin" ngModel>
 *  ```
 *
 *  \@stable
 */
var CheckboxControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function CheckboxControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return CheckboxControlValueAccessor;
}());
CheckboxControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                providers: [CHECKBOX_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
CheckboxControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DefaultValueAccessor; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 * @return {?}
 */
function _isAndroid() {
    var /** @type {?} */ userAgent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["ɵgetDOM"])() ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["ɵgetDOM"])().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * Turn this mode on if you want form directives to buffer IME input until compositionend
 * \@experimental
 */
var COMPOSITION_BUFFER_MODE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('CompositionEventMode');
/**
 * The default accessor for writing a value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="text" name="searchQuery" ngModel>
 *  ```
 *
 *  \@stable
 */
var DefaultValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _compositionMode
     */
    function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype.writeValue = function (value) {
        var /** @type {?} */ normalizedValue = value == null ? '' : value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this.onChange(value);
        }
    };
    /**
     * @return {?}
     */
    DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
    };
    return DefaultValueAccessor;
}());
DefaultValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                // TODO: vsavkin replace the above selector with the one below it once
                // https://github.com/angular/angular/issues/3011 is implemented
                // selector: '[ngModel],[formControl],[formControlName]',
                host: {
                    '(input)': '_handleInput($event.target.value)',
                    '(blur)': 'onTouched()',
                    '(compositionstart)': '_compositionStart()',
                    '(compositionend)': '_compositionEnd($event.target.value)'
                },
                providers: [DEFAULT_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
DefaultValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [COMPOSITION_BUFFER_MODE,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeValidator(validator) {
    if (((validator)).validate) {
        return function (c) { return ((validator)).validate(c); };
    }
    else {
        return (validator);
    }
}
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeAsyncValidator(validator) {
    if (((validator)).validate) {
        return function (c) { return ((validator)).validate(c); };
    }
    else {
        return (validator);
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NumberValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a number value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="number" [(ngModel)]="age">
 *  ```
 */
var NumberValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function NumberValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NumberValueAccessor.prototype.writeValue = function (value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        var /** @type {?} */ normalizedValue = value == null ? '' : value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return NumberValueAccessor;
}());
NumberValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [NUMBER_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
NumberValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @return {?}
 */
function unimplemented() {
    throw new Error('unimplemented');
}
/**
 * A base class that all control directive extend.
 * It binds a {\@link FormControl} object to a DOM element.
 *
 * Used internally by Angular forms.
 *
 * \@stable
 * @abstract
 */
var NgControl = (function (_super) {
    __extends(NgControl, _super);
    function NgControl() {
        var _this = _super.apply(this, arguments) || this;
        /**
         * \@internal
         */
        _this._parent = null;
        _this.name = null;
        _this.valueAccessor = null;
        /**
         * \@internal
         */
        _this._rawValidators = [];
        /**
         * \@internal
         */
        _this._rawAsyncValidators = [];
        return _this;
    }
    Object.defineProperty(NgControl.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return (unimplemented()); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgControl.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () { return (unimplemented()); },
        enumerable: true,
        configurable: true
    });
    /**
     * @abstract
     * @param {?} newValue
     * @return {?}
     */
    NgControl.prototype.viewToModelUpdate = function (newValue) { };
    return NgControl;
}(AbstractControlDirective));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RadioControlValueAccessor; }),
    multi: true
};
/**
 * Internal class used by Angular to uncheck radio buttons with the matching name.
 */
var RadioControlRegistry = (function () {
    function RadioControlRegistry() {
        this._accessors = [];
    }
    /**
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.add = function (control, accessor) {
        this._accessors.push([control, accessor]);
    };
    /**
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.remove = function (accessor) {
        for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    };
    /**
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.select = function (accessor) {
        var _this = this;
        this._accessors.forEach(function (c) {
            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
            }
        });
    };
    /**
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
        if (!controlPair[0].control)
            return false;
        return controlPair[0]._parent === accessor._control._parent &&
            controlPair[1].name === accessor.name;
    };
    return RadioControlRegistry;
}());
RadioControlRegistry.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
RadioControlRegistry.ctorParameters = function () { return []; };
/**
 * \@whatItDoes Writes radio control values and listens to radio control changes.
 *
 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
 * to keep the view synced with the {\@link FormControl} model.
 *
 * \@howToUse
 *
 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
 * value accessor will be active on any radio control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use radio buttons with form directives
 *
 * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
 * in the same group have the same `name` attribute.  Radio buttons with different `name`
 * attributes do not affect each other.
 *
 * {\@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
 *
 * When using radio buttons in a reactive form, radio buttons in the same group should have the
 * same `formControlName`. You can also add a `name` attribute, but it's optional.
 *
 * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 *  * **npm package**: `\@angular/forms`
 *
 *  \@stable
 */
var RadioControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _registry
     * @param {?} _injector
     */
    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype.ngOnInit = function () {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioControlValueAccessor.prototype.writeValue = function (value) {
        this._state = value === this.value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this._fn = fn;
        this.onChange = function () {
            fn(_this.value);
            _this._registry.select(_this);
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype._checkName = function () {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
        }
        if (!this.name && this.formControlName)
            this.name = this.formControlName;
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype._throwNameError = function () {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
    };
    return RadioControlValueAccessor;
}());
RadioControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                providers: [RADIO_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
RadioControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: RadioControlRegistry, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
]; };
RadioControlValueAccessor.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'formControlName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RangeValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a range value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="range" [(ngModel)]="age" >
 *  ```
 */
var RangeValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function RangeValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    RangeValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangeValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return RangeValueAccessor;
}());
RangeValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [RANGE_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
RangeValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SelectControlValueAccessor; }),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString(id, value) {
    if (id == null)
        return "" + value;
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId(valueString) {
    return valueString.split(':')[0];
}
/**
 * \@whatItDoes Writes values and listens to changes on a select element.
 *
 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
 * to keep the view synced with the {\@link FormControl} model.
 *
 * \@howToUse
 *
 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
 * value accessor will be active on any select control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use select controls with form directives
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * If your option values are simple strings, you can bind to the normal `value` property
 * on the option.  If your option values happen to be objects (and you'd like to save the
 * selection in your form as an object), use `ngValue` instead:
 *
 * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * In reactive forms, you'll also want to add your form directive (`formControlName` or
 * `formControl`) on the main `<select>` tag. Like in the former example, you have the
 * choice of binding to the  `value` or `ngValue` property on the select's options.
 *
 * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Caveat: Option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * Note: We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var SelectControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function SelectControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */
        this._optionMap = new Map();
        /**
         * \@internal
         */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
        /**
         * @param {?} fn
         * @return {?}
         */
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SelectControlValueAccessor.prototype.writeValue = function (value) {
        this.value = value;
        var /** @type {?} */ id = this._getOptionId(value);
        if (id == null) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
        }
        var /** @type {?} */ valueString = _buildValueString(id, value);
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (valueString) {
            _this.value = valueString;
            fn(_this._getOptionValue(valueString));
        };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * \@internal
     * @return {?}
     */
    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectControlValueAccessor.prototype._getOptionId = function (value) {
        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
            var id = _a[_i];
            if (this._compareWith(this._optionMap.get(id), value))
                return id;
        }
        return null;
    };
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var /** @type {?} */ id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    };
    return SelectControlValueAccessor;
}());
SelectControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                providers: [SELECT_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
SelectControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
SelectControlValueAccessor.propDecorators = {
    'compareWith': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * \@whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * \@howToUse
 *
 * See docs for {\@link SelectControlValueAccessor} for usage examples.
 *
 * \@stable
 */
var NgSelectOption = (function () {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    function NgSelectOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
            this.id = this._select._registerOption();
    }
    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._select == null)
                return;
            this._select._optionMap.set(this.id, value);
            this._setElementValue(_buildValueString(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectOption.prototype, "value", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._setElementValue(value);
            if (this._select)
                this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    NgSelectOption.prototype._setElementValue = function (value) {
        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
    };
    /**
     * @return {?}
     */
    NgSelectOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    return NgSelectOption;
}());
NgSelectOption.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'option' },] },
];
/**
 * @nocollapse
 */
NgSelectOption.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: SelectControlValueAccessor, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
]; };
NgSelectOption.propDecorators = {
    'ngValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngValue',] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['value',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SelectMultipleControlValueAccessor; }),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString$1(id, value) {
    if (id == null)
        return "" + value;
    if (typeof value === 'string')
        value = "'" + value + "'";
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId$1(valueString) {
    return valueString.split(':')[0];
}
/**
 * The accessor for writing a value and listening to changes on a select element.
 *
 *  ### Caveat: Options selection
 *
 * Angular uses object identity to select options. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select multiple>` supports `compareWith`
 * input. `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects options by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select multiple [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * \@stable
 */
var SelectMultipleControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */
        this._optionMap = new Map();
        /**
         * \@internal
         */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
        /**
         * @param {?} fn
         * @return {?}
         */
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
        var _this = this;
        this.value = value;
        var /** @type {?} */ optionSelectedStateSetter;
        if (Array.isArray(value)) {
            // convert values to ids
            var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
        }
        else {
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (_) {
            var /** @type {?} */ selected = [];
            if (_.hasOwnProperty('selectedOptions')) {
                var /** @type {?} */ options = _.selectedOptions;
                for (var /** @type {?} */ i = 0; i < options.length; i++) {
                    var /** @type {?} */ opt = options.item(i);
                    var /** @type {?} */ val = _this._getOptionValue(opt.value);
                    selected.push(val);
                }
            }
            else {
                var /** @type {?} */ options = (_.options);
                for (var /** @type {?} */ i = 0; i < options.length; i++) {
                    var /** @type {?} */ opt = options.item(i);
                    if (opt.selected) {
                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
            }
            _this.value = selected;
            fn(selected);
        };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
        var /** @type {?} */ id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
            var id = _a[_i];
            if (this._compareWith(this._optionMap.get(id)._value, value))
                return id;
        }
        return null;
    };
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var /** @type {?} */ id = _extractId$1(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
    };
    return SelectMultipleControlValueAccessor;
}());
SelectMultipleControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
SelectMultipleControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
SelectMultipleControlValueAccessor.propDecorators = {
    'compareWith': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * ### Example
 *
 * ```
 * <select multiple name="city" ngModel>
 *   <option *ngFor="let c of cities" [value]="c"></option>
 * </select>
 * ```
 */
var NgSelectMultipleOption = (function () {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    function NgSelectMultipleOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
            this.id = this._select._registerOption(this);
        }
    }
    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._select == null)
                return;
            this._value = value;
            this._setElementValue(_buildValueString$1(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._select) {
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            }
            else {
                this._setElementValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    NgSelectMultipleOption.prototype._setElementValue = function (value) {
        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
    };
    /**
     * \@internal
     * @param {?} selected
     * @return {?}
     */
    NgSelectMultipleOption.prototype._setSelected = function (selected) {
        this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
    };
    /**
     * @return {?}
     */
    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    return NgSelectMultipleOption;
}());
NgSelectMultipleOption.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'option' },] },
];
/**
 * @nocollapse
 */
NgSelectMultipleOption.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: SelectMultipleControlValueAccessor, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
]; };
NgSelectMultipleOption.propDecorators = {
    'ngValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngValue',] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['value',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} name
 * @param {?} parent
 * @return {?}
 */
function controlPath(name, parent) {
    return parent.path.concat([name]);
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpControl(control, dir) {
    if (!control)
        _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor)
        _throwError(dir, 'No value accessor for form control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    dir.valueAccessor.writeValue(control.value);
    // view -> model
    dir.valueAccessor.registerOnChange(function (newValue) {
        dir.viewToModelUpdate(newValue);
        control.markAsDirty();
        control.setValue(newValue, { emitModelToViewChange: false });
    });
    // touched
    dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
    control.registerOnChange(function (newValue, emitModelEvent) {
        // control -> view
        dir.valueAccessor.writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent)
            dir.viewToModelUpdate(newValue);
    });
    if (dir.valueAccessor.setDisabledState) {
        control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
    }
    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    dir._rawValidators.forEach(function (validator) {
        if (((validator)).registerOnValidatorChange)
            ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (((validator)).registerOnValidatorChange)
            ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
    });
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function cleanUpControl(control, dir) {
    dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
    dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    if (control)
        control._clearChangeFns();
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpFormContainer(control, dir) {
    if (control == null)
        _throwError(dir, 'Cannot find control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}
/**
 * @param {?} dir
 * @return {?}
 */
function _noControlError(dir) {
    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}
/**
 * @param {?} dir
 * @param {?} message
 * @return {?}
 */
function _throwError(dir, message) {
    var /** @type {?} */ messageEnd;
    if (dir.path.length > 1) {
        messageEnd = "path: '" + dir.path.join(' -> ') + "'";
    }
    else if (dir.path[0]) {
        messageEnd = "name: '" + dir.path + "'";
    }
    else {
        messageEnd = 'unspecified name attribute';
    }
    throw new Error(message + " " + messageEnd);
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeValidators(validators) {
    return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeAsyncValidators(validators) {
    return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
        null;
}
/**
 * @param {?} changes
 * @param {?} viewModel
 * @return {?}
 */
function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model'))
        return false;
    var /** @type {?} */ change = changes['model'];
    if (change.isFirstChange())
        return true;
    return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵlooseIdentical"])(viewModel, change.currentValue);
}
var BUILTIN_ACCESSORS = [
    CheckboxControlValueAccessor,
    RangeValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
];
/**
 * @param {?} valueAccessor
 * @return {?}
 */
function isBuiltInAccessor(valueAccessor) {
    return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
}
/**
 * @param {?} dir
 * @param {?} valueAccessors
 * @return {?}
 */
function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors)
        return null;
    var /** @type {?} */ defaultAccessor;
    var /** @type {?} */ builtinAccessor;
    var /** @type {?} */ customAccessor;
    valueAccessors.forEach(function (v) {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        }
        else if (isBuiltInAccessor(v)) {
            if (builtinAccessor)
                _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        }
        else {
            if (customAccessor)
                _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    });
    if (customAccessor)
        return customAccessor;
    if (builtinAccessor)
        return builtinAccessor;
    if (defaultAccessor)
        return defaultAccessor;
    _throwError(dir, 'No valid value accessor for form control with');
    return null;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This is a base class for code shared between {\@link NgModelGroup} and {\@link FormGroupName}.
 *
 * \@stable
 */
var AbstractFormGroupDirective = (function (_super) {
    __extends(AbstractFormGroupDirective, _super);
    function AbstractFormGroupDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AbstractFormGroupDirective.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormGroup(this);
    };
    /**
     * @return {?}
     */
    AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
        }
    };
    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
        /**
         * Get the {\@link FormGroup} backing this binding.
         * @return {?}
         */
        get: function () { return this.formDirective.getFormGroup(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
        /**
         * Get the path to this control group.
         * @return {?}
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
        /**
         * Get the {\@link Form} to which this group belongs.
         * @return {?}
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () { return composeAsyncValidators(this._asyncValidators); },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @return {?}
     */
    AbstractFormGroupDirective.prototype._checkParentType = function () { };
    return AbstractFormGroupDirective;
}(ControlContainer));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AbstractControlStatus = (function () {
    /**
     * @param {?} cd
     */
    function AbstractControlStatus(cd) {
        this._cd = cd;
    }
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.untouched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.touched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.pristine : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.dirty : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.valid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.invalid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.pending : false; },
        enumerable: true,
        configurable: true
    });
    return AbstractControlStatus;
}());
var ngControlStatusHost = {
    '[class.ng-untouched]': 'ngClassUntouched',
    '[class.ng-touched]': 'ngClassTouched',
    '[class.ng-pristine]': 'ngClassPristine',
    '[class.ng-dirty]': 'ngClassDirty',
    '[class.ng-valid]': 'ngClassValid',
    '[class.ng-invalid]': 'ngClassInvalid',
    '[class.ng-pending]': 'ngClassPending',
};
/**
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * \@stable
 */
var NgControlStatus = (function (_super) {
    __extends(NgControlStatus, _super);
    /**
     * @param {?} cd
     */
    function NgControlStatus(cd) {
        return _super.call(this, cd) || this;
    }
    return NgControlStatus;
}(AbstractControlStatus));
NgControlStatus.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
];
/**
 * @nocollapse
 */
NgControlStatus.ctorParameters = function () { return [
    { type: NgControl, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] },] },
]; };
/**
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * \@stable
 */
var NgControlStatusGroup = (function (_super) {
    __extends(NgControlStatusGroup, _super);
    /**
     * @param {?} cd
     */
    function NgControlStatusGroup(cd) {
        return _super.call(this, cd) || this;
    }
    return NgControlStatusGroup;
}(AbstractControlStatus));
NgControlStatusGroup.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                host: ngControlStatusHost
            },] },
];
/**
 * @nocollapse
 */
NgControlStatusGroup.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
 */
var VALID = 'VALID';
/**
 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
 */
var INVALID = 'INVALID';
/**
 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
 * errors are not yet available for the input value.
 */
var PENDING = 'PENDING';
/**
 * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
 * calculations of validity or value.
 */
var DISABLED = 'DISABLED';
/**
 * @param {?} control
 * @param {?} path
 * @param {?} delimiter
 * @return {?}
 */
function _find(control, path, delimiter) {
    if (path == null)
        return null;
    if (!(path instanceof Array)) {
        path = ((path)).split(delimiter);
    }
    if (path instanceof Array && (path.length === 0))
        return null;
    return ((path)).reduce(function (v, name) {
        if (v instanceof FormGroup) {
            return v.controls[name] || null;
        }
        if (v instanceof FormArray) {
            return v.at(/** @type {?} */ (name)) || null;
        }
        return null;
    }, control);
}
/**
 * @param {?} validator
 * @return {?}
 */
function coerceToValidator(validator) {
    return Array.isArray(validator) ? composeValidators(validator) : validator;
}
/**
 * @param {?} asyncValidator
 * @return {?}
 */
function coerceToAsyncValidator(asyncValidator) {
    return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
}
/**
 * \@whatItDoes This is the base class for {\@link FormControl}, {\@link FormGroup}, and
 * {\@link FormArray}.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * \@stable
 * @abstract
 */
var AbstractControl = (function () {
    /**
     * @param {?} validator
     * @param {?} asyncValidator
     */
    function AbstractControl(validator, asyncValidator) {
        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /**
         * \@internal
         */
        this._onCollectionChange = function () { };
        this._pristine = true;
        this._touched = false;
        /**
         * \@internal
         */
        this._onDisabledChange = [];
    }
    Object.defineProperty(AbstractControl.prototype, "value", {
        /**
         * The value of the control.
         * @return {?}
         */
        get: function () { return this._value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "parent", {
        /**
         * The parent control.
         * @return {?}
         */
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "status", {
        /**
         * The validation status of the control. There are four possible
         * validation statuses:
         *
         * * **VALID**:  control has passed all validation checks
         * * **INVALID**: control has failed at least one validation check
         * * **PENDING**: control is in the midst of conducting a validation check
         * * **DISABLED**: control is exempt from validation checks
         *
         * These statuses are mutually exclusive, so a control cannot be
         * both valid AND invalid or invalid AND disabled.
         * @return {?}
         */
        get: function () { return this._status; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valid", {
        /**
         * A control is `valid` when its `status === VALID`.
         *
         * In order to have this status, the control must have passed all its
         * validation checks.
         * @return {?}
         */
        get: function () { return this._status === VALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "invalid", {
        /**
         * A control is `invalid` when its `status === INVALID`.
         *
         * In order to have this status, the control must have failed
         * at least one of its validation checks.
         * @return {?}
         */
        get: function () { return this._status === INVALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pending", {
        /**
         * A control is `pending` when its `status === PENDING`.
         *
         * In order to have this status, the control must be in the
         * middle of conducting a validation check.
         * @return {?}
         */
        get: function () { return this._status == PENDING; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "disabled", {
        /**
         * A control is `disabled` when its `status === DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         * @return {?}
         */
        get: function () { return this._status === DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "enabled", {
        /**
         * A control is `enabled` as long as its `status !== DISABLED`.
         *
         * In other words, it has a status of `VALID`, `INVALID`, or
         * `PENDING`.
         * @return {?}
         */
        get: function () { return this._status !== DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "errors", {
        /**
         * Returns any errors generated by failing validation. If there
         * are no errors, it will return null.
         * @return {?}
         */
        get: function () { return this._errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pristine", {
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         * @return {?}
         */
        get: function () { return this._pristine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "dirty", {
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         * @return {?}
         */
        get: function () { return !this.pristine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "touched", {
        /**
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         * @return {?}
         */
        get: function () { return this._touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "untouched", {
        /**
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         * @return {?}
         */
        get: function () { return !this._touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valueChanges", {
        /**
         * Emits an event every time the value of the control changes, in
         * the UI or programmatically.
         * @return {?}
         */
        get: function () { return this._valueChanges; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "statusChanges", {
        /**
         * Emits an event every time the validation status of the control
         * is re-calculated.
         * @return {?}
         */
        get: function () { return this._statusChanges; },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this will overwrite any existing sync validators.
     * @param {?} newValidator
     * @return {?}
     */
    AbstractControl.prototype.setValidators = function (newValidator) {
        this.validator = coerceToValidator(newValidator);
    };
    /**
     * Sets the async validators that are active on this control. Calling this
     * will overwrite any existing async validators.
     * @param {?} newValidator
     * @return {?}
     */
    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
        this.asyncValidator = coerceToAsyncValidator(newValidator);
    };
    /**
     * Empties out the sync validator list.
     * @return {?}
     */
    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
    /**
     * Empties out the async validator list.
     * @return {?}
     */
    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
    /**
     * Marks the control as `touched`.
     *
     * This will also mark all direct ancestors as `touched` to maintain
     * the model.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsTouched = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._touched = true;
        if (this._parent && !onlySelf) {
            this._parent.markAsTouched({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, it will also mark all children as `untouched`
     * to maintain the model, and re-calculate the `touched` status of all parent
     * controls.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsUntouched = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._touched = false;
        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
        if (this._parent && !onlySelf) {
            this._parent._updateTouched({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `dirty`.
     *
     * This will also mark all direct ancestors as `dirty` to maintain
     * the model.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsDirty = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._pristine = false;
        if (this._parent && !onlySelf) {
            this._parent.markAsDirty({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, it will also mark all children as `pristine`
     * to maintain the model, and re-calculate the `pristine` status of all parent
     * controls.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsPristine = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._pristine = true;
        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
        if (this._parent && !onlySelf) {
            this._parent._updatePristine({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `pending`.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsPending = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._status = PENDING;
        if (this._parent && !onlySelf) {
            this._parent.markAsPending({ onlySelf: onlySelf });
        }
    };
    /**
     * Disables the control. This means the control will be exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children will be disabled to maintain the model.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.disable = function (_a) {
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._status = DISABLED;
        this._errors = null;
        this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
        this._updateValue();
        if (emitEvent !== false) {
            this._valueChanges.emit(this._value);
            this._statusChanges.emit(this._status);
        }
        this._updateAncestors(onlySelf);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
    };
    /**
     * Enables the control. This means the control will be included in validation checks and
     * the aggregate value of its parent. Its status is re-calculated based on its value and
     * its validators.
     *
     * If the control has children, all children will be enabled.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.enable = function (_a) {
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._status = VALID;
        this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
        this._updateAncestors(onlySelf);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
    };
    /**
     * @param {?} onlySelf
     * @return {?}
     */
    AbstractControl.prototype._updateAncestors = function (onlySelf) {
        if (this._parent && !onlySelf) {
            this._parent.updateValueAndValidity();
            this._parent._updatePristine();
            this._parent._updateTouched();
        }
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
    /**
     * Sets the value of the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.setValue = function (value, options) { };
    /**
     * Patches the value of the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.patchValue = function (value, options) { };
    /**
     * Resets the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.reset = function (value, options) { };
    /**
     * Re-calculates the value and validation status of the control.
     *
     * By default, it will also update the value and validity of its ancestors.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.updateValueAndValidity = function (_a) {
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            this._errors = this._runValidator();
            this._status = this._calculateStatus();
            if (this._status === VALID || this._status === PENDING) {
                this._runAsyncValidator(emitEvent);
            }
        }
        if (emitEvent !== false) {
            this._valueChanges.emit(this._value);
            this._statusChanges.emit(this._status);
        }
        if (this._parent && !onlySelf) {
            this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        }
    };
    /**
     * \@internal
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype._updateTreeValidity = function (_a) {
        var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
        this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
    /**
     * @return {?}
     */
    AbstractControl.prototype._runValidator = function () {
        return this.validator ? this.validator(this) : null;
    };
    /**
     * @param {?} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
        var _this = this;
        if (this.asyncValidator) {
            this._status = PENDING;
            var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription =
                obs.subscribe(function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); });
        }
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._cancelExistingSubscription = function () {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    };
    /**
     * Sets errors on a form control.
     *
     * This is used when validations are run manually by the user, rather than automatically.
     *
     * Calling `setErrors` will also update the validity of the parent control.
     *
     * ### Example
     *
     * ```
     * const login = new FormControl("someLogin");
     * login.setErrors({
     *   "notUnique": true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({"notUnique": true});
     *
     * login.setValue("someOtherLogin");
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} __1
     * @return {?}
     */
    AbstractControl.prototype.setErrors = function (errors, _a) {
        var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
        this._errors = errors;
        this._updateControlsErrors(emitEvent !== false);
    };
    /**
     * Retrieves a child control given the control's name or path.
     *
     * Paths can be passed in as an array or a string delimited by a dot.
     *
     * To get a control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     * @param {?} path
     * @return {?}
     */
    AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns null or undefined.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControl.prototype.getError = function (errorCode, path) {
        if (path === void 0) { path = null; }
        var /** @type {?} */ control = path ? this.get(path) : this;
        return control && control._errors ? control._errors[errorCode] : null;
    };
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns false.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControl.prototype.hasError = function (errorCode, path) {
        if (path === void 0) { path = null; }
        return !!this.getError(errorCode, path);
    };
    Object.defineProperty(AbstractControl.prototype, "root", {
        /**
         * Retrieves the top-level ancestor of this control.
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ x = this;
            while (x._parent) {
                x = x._parent;
            }
            return x;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
        this._status = this._calculateStatus();
        if (emitEvent) {
            this._statusChanges.emit(this._status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    };
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._initObservables = function () {
        this._valueChanges = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._statusChanges = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._calculateStatus = function () {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this._errors)
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    AbstractControl.prototype._updateValue = function () { };
    /**
     * \@internal
     * @abstract
     * @param {?} cb
     * @return {?}
     */
    AbstractControl.prototype._forEachChild = function (cb) { };
    /**
     * \@internal
     * @abstract
     * @param {?} condition
     * @return {?}
     */
    AbstractControl.prototype._anyControls = function (condition) { };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    AbstractControl.prototype._allControlsDisabled = function () { };
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    AbstractControl.prototype._anyControlsHaveStatus = function (status) {
        return this._anyControls(function (control) { return control.status === status; });
    };
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._anyControlsDirty = function () {
        return this._anyControls(function (control) { return control.dirty; });
    };
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._anyControlsTouched = function () {
        return this._anyControls(function (control) { return control.touched; });
    };
    /**
     * \@internal
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype._updatePristine = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._pristine = !this._anyControlsDirty();
        if (this._parent && !onlySelf) {
            this._parent._updatePristine({ onlySelf: onlySelf });
        }
    };
    /**
     * \@internal
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype._updateTouched = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._touched = this._anyControlsTouched();
        if (this._parent && !onlySelf) {
            this._parent._updateTouched({ onlySelf: onlySelf });
        }
    };
    /**
     * \@internal
     * @param {?} formState
     * @return {?}
     */
    AbstractControl.prototype._isBoxedValue = function (formState) {
        return typeof formState === 'object' && formState !== null &&
            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    };
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
    return AbstractControl;
}());
/**
 * \@whatItDoes Tracks the value and validation status of an individual form control.
 *
 * It is one of the three fundamental building blocks of Angular forms, along with
 * {\@link FormGroup} and {\@link FormArray}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormControl}, you can pass in an initial value as the
 * first argument. Example:
 *
 * ```ts
 * const ctrl = new FormControl('some value');
 * console.log(ctrl.value);     // 'some value'
 * ```
 *
 * You can also initialize the control with a form state object on instantiation,
 * which includes both the value and whether or not the control is disabled.
 * You can't use the value key without the disabled key; both are required
 * to use this way of initialization.
 *
 * ```ts
 * const ctrl = new FormControl({value: 'n/a', disabled: true});
 * console.log(ctrl.value);     // 'n/a'
 * console.log(ctrl.status);   // 'DISABLED'
 * ```
 *
 * To include a sync validator (or an array of sync validators) with the control,
 * pass it in as the second argument. Async validators are also supported, but
 * have to be passed in separately as the third arg.
 *
 * ```ts
 * const ctrl = new FormControl('', Validators.required);
 * console.log(ctrl.value);     // ''
 * console.log(ctrl.status);   // 'INVALID'
 * ```
 *
 * See its superclass, {\@link AbstractControl}, for more properties and methods.
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormControl = (function (_super) {
    __extends(FormControl, _super);
    /**
     * @param {?=} formState
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormControl(formState, validator, asyncValidator) {
        if (formState === void 0) { formState = null; }
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        var _this = _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator)) || this;
        /**
         * \@internal
         */
        _this._onChange = [];
        _this._applyFormState(formState);
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        _this._initObservables();
        return _this;
    }
    /**
     * Set the value of the form control to `value`.
     *
     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
     * and not its parent component. This defaults to false.
     *
     * If `emitEvent` is `true`, this
     * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
     * to true (as it falls through to `updateValueAndValidity`).
     *
     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
     * specified.
     *
     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    FormControl.prototype.setValue = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
        this._value = value;
        if (this._onChange.length && emitModelToViewChange !== false) {
            this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange !== false); });
        }
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {\@link FormControl.setValue} at this level.
     * It exists for symmetry with {\@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
     * where it does behave differently.
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormControl.prototype.patchValue = function (value, options) {
        if (options === void 0) { options = {}; }
        this.setValue(value, options);
    };
    /**
     * Resets the form control. This means by default:
     *
     * * it is marked as `pristine`
     * * it is marked as `untouched`
     * * value is set to null
     *
     * You can also reset to a specific form state by passing through a standalone
     * value or a form state object that contains both a value and a disabled state
     * (these are the only two properties that cannot be calculated).
     *
     * Ex:
     *
     * ```ts
     * this.control.reset('Nancy');
     *
     * console.log(this.control.value);  // 'Nancy'
     * ```
     *
     * OR
     *
     * ```
     * this.control.reset({value: 'Nancy', disabled: true});
     *
     * console.log(this.control.value);  // 'Nancy'
     * console.log(this.control.status);  // 'DISABLED'
     * ```
     * @param {?=} formState
     * @param {?=} __1
     * @return {?}
     */
    FormControl.prototype.reset = function (formState, _a) {
        if (formState === void 0) { formState = null; }
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._applyFormState(formState);
        this.markAsPristine({ onlySelf: onlySelf });
        this.markAsUntouched({ onlySelf: onlySelf });
        this.setValue(this._value, { onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._updateValue = function () { };
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormControl.prototype._anyControls = function (condition) { return false; };
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
    /**
     * Register a listener for change events.
     * @param {?} fn
     * @return {?}
     */
    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._clearChangeFns = function () {
        this._onChange = [];
        this._onDisabledChange = [];
        this._onCollectionChange = function () { };
    };
    /**
     * Register a listener for disabled events.
     * @param {?} fn
     * @return {?}
     */
    FormControl.prototype.registerOnDisabledChange = function (fn) {
        this._onDisabledChange.push(fn);
    };
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormControl.prototype._forEachChild = function (cb) { };
    /**
     * @param {?} formState
     * @return {?}
     */
    FormControl.prototype._applyFormState = function (formState) {
        if (this._isBoxedValue(formState)) {
            this._value = formState.value;
            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            this._value = formState;
        }
    };
    return FormControl;
}(AbstractControl));
/**
 * \@whatItDoes Tracks the value and validity state of a group of {\@link FormControl}
 * instances.
 *
 * A `FormGroup` aggregates the values of each child {\@link FormControl} into one object,
 * with each control name as the key.  It calculates its status by reducing the statuses
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {\@link FormControl} and {\@link FormArray}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormGroup}, pass in a collection of child controls as the first
 * argument. The key for each child will be the name under which it is registered.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * You can also include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormGroup = (function (_super) {
    __extends(FormGroup, _super);
    /**
     * @param {?} controls
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormGroup(controls, validator, asyncValidator) {
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        var _this = _super.call(this, validator, asyncValidator) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update value or validity of the control, so for
     * most cases you'll want to use {\@link FormGroup.addControl} instead.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.registerControl = function (name, control) {
        if (this.controls[name])
            return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
    };
    /**
     * Add a control to this group.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.addControl = function (name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Remove a control from this group.
     * @param {?} name
     * @return {?}
     */
    FormGroup.prototype.removeControl = function (name) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Replace an existing control.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.setControl = function (name, control) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * It will return false for disabled controls. If you'd like to check for
     * existence in the group only, use {\@link AbstractControl.get} instead.
     * @param {?} controlName
     * @return {?}
     */
    FormGroup.prototype.contains = function (controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    };
    /**
     *  Sets the value of the {\@link FormGroup}. It accepts an object that matches
     *  the structure of the group, with control names as keys.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.setValue({first: 'Nancy', last: 'Drew'});
     *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     *
     *  ```
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    FormGroup.prototype.setValue = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._checkAllValuesPresent(value);
        Object.keys(value).forEach(function (name) {
            _this._throwIfControlMissing(name);
            _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: emitEvent });
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     *  Patches the value of the {\@link FormGroup}. It accepts an object with control
     *  names as keys, and will do its best to match the values to the correct controls
     *  in the group.
     *
     *  It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.patchValue({first: 'Nancy'});
     *  console.log(form.value);   // {first: 'Nancy', last: null}
     *
     *  ```
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    FormGroup.prototype.patchValue = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        Object.keys(value).forEach(function (name) {
            if (_this.controls[name]) {
                _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: emitEvent });
            }
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     * Resets the {\@link FormGroup}. This means by default:
     *
     * * The group and all descendants are marked `pristine`
     * * The group and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * can be a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * ### Example
     *
     * ```ts
     * this.form.reset({first: 'name', last: 'last name'});
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * - OR -
     *
     * ```
     * this.form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} __1
     * @return {?}
     */
    FormGroup.prototype.reset = function (value, _a) {
        if (value === void 0) { value = {}; }
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._forEachChild(function (control, name) {
            control.reset(value[name], { onlySelf: true, emitEvent: emitEvent });
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        this._updatePristine({ onlySelf: onlySelf });
        this._updateTouched({ onlySelf: onlySelf });
    };
    /**
     * The aggregate value of the {\@link FormGroup}, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the group.
     * @return {?}
     */
    FormGroup.prototype.getRawValue = function () {
        return this._reduceChildren({}, function (acc, control, name) {
            acc[name] = control instanceof FormControl ? control.value : ((control)).getRawValue();
            return acc;
        });
    };
    /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    FormGroup.prototype._throwIfControlMissing = function (name) {
        if (!Object.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: " + name + ".");
        }
    };
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormGroup.prototype._forEachChild = function (cb) {
        var _this = this;
        Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) {
            control.setParent(_this);
            control._registerOnCollectionChange(_this._onCollectionChange);
        });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormGroup.prototype._anyControls = function (condition) {
        var _this = this;
        var /** @type {?} */ res = false;
        this._forEachChild(function (control, name) {
            res = res || (_this.contains(name) && condition(control));
        });
        return res;
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._reduceValue = function () {
        var _this = this;
        return this._reduceChildren({}, function (acc, control, name) {
            if (control.enabled || _this.disabled) {
                acc[name] = control.value;
            }
            return acc;
        });
    };
    /**
     * \@internal
     * @param {?} initValue
     * @param {?} fn
     * @return {?}
     */
    FormGroup.prototype._reduceChildren = function (initValue, fn) {
        var /** @type {?} */ res = initValue;
        this._forEachChild(function (control, name) { res = fn(res, control, name); });
        return res;
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._allControlsDisabled = function () {
        for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
            var controlName = _a[_i];
            if (this.controls[controlName].enabled) {
                return false;
            }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    FormGroup.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, name) {
            if (value[name] === undefined) {
                throw new Error("Must supply a value for form control with name: '" + name + "'.");
            }
        });
    };
    return FormGroup;
}(AbstractControl));
/**
 * \@whatItDoes Tracks the value and validity state of an array of {\@link FormControl},
 * {\@link FormGroup} or {\@link FormArray} instances.
 *
 * A `FormArray` aggregates the values of each child {\@link FormControl} into an array.
 * It calculates its status by reducing the statuses of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {\@link FormControl} and {\@link FormGroup}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormArray}, pass in an array of child controls as the first
 * argument.
 *
 * ### Example
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * You can also include array-level validators as the second arg, or array-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ### Adding or removing controls
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that will result in strange and unexpected behavior such
 * as broken change detection.
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormArray = (function (_super) {
    __extends(FormArray, _super);
    /**
     * @param {?} controls
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormArray(controls, validator, asyncValidator) {
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        var _this = _super.call(this, validator, asyncValidator) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Get the {\@link AbstractControl} at the given `index` in the array.
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype.at = function (index) { return this.controls[index]; };
    /**
     * Insert a new {\@link AbstractControl} at the end of the array.
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.push = function (control) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Insert a new {\@link AbstractControl} at the given `index` in the array.
     * @param {?} index
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.insert = function (index, control) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Remove the control at the given `index` in the array.
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype.removeAt = function (index) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Replace an existing control.
     * @param {?} index
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.setControl = function (index, control) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        if (control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
        }
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    Object.defineProperty(FormArray.prototype, "length", {
        /**
         * Length of the control array.
         * @return {?}
         */
        get: function () { return this.controls.length; },
        enumerable: true,
        configurable: true
    });
    /**
     *  Sets the value of the {\@link FormArray}. It accepts an array that matches
     *  the structure of the control.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.setValue(['Nancy', 'Drew']);
     *  console.log(arr.value);   // ['Nancy', 'Drew']
     *  ```
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    FormArray.prototype.setValue = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._checkAllValuesPresent(value);
        value.forEach(function (newValue, index) {
            _this._throwIfControlMissing(index);
            _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: emitEvent });
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     *  Patches the value of the {\@link FormArray}. It accepts an array that matches the
     *  structure of the control, and will do its best to match the values to the correct
     *  controls in the group.
     *
     *  It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.patchValue(['Nancy']);
     *  console.log(arr.value);   // ['Nancy', null]
     *  ```
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    FormArray.prototype.patchValue = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        value.forEach(function (newValue, index) {
            if (_this.at(index)) {
                _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: emitEvent });
            }
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     * Resets the {\@link FormArray}. This means by default:
     *
     * * The array and all descendants are marked `pristine`
     * * The array and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state can be a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * ### Example
     *
     * ```ts
     * this.arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * - OR -
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} __1
     * @return {?}
     */
    FormArray.prototype.reset = function (value, _a) {
        if (value === void 0) { value = []; }
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._forEachChild(function (control, index) {
            control.reset(value[index], { onlySelf: true, emitEvent: emitEvent });
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        this._updatePristine({ onlySelf: onlySelf });
        this._updateTouched({ onlySelf: onlySelf });
    };
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the array.
     * @return {?}
     */
    FormArray.prototype.getRawValue = function () {
        return this.controls.map(function (control) {
            return control instanceof FormControl ? control.value : ((control)).getRawValue();
        });
    };
    /**
     * \@internal
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype._throwIfControlMissing = function (index) {
        if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.at(index)) {
            throw new Error("Cannot find form control at index " + index);
        }
    };
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormArray.prototype._forEachChild = function (cb) {
        this.controls.forEach(function (control, index) { cb(control, index); });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._updateValue = function () {
        var _this = this;
        this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
            .map(function (control) { return control.value; });
    };
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormArray.prototype._anyControls = function (condition) {
        return this.controls.some(function (control) { return control.enabled && condition(control); });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) { return _this._registerControl(control); });
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    FormArray.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, i) {
            if (value[i] === undefined) {
                throw new Error("Must supply a value for form control at index: " + i + ".");
            }
        });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._allControlsDisabled = function () {
        for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
            var control = _a[_i];
            if (control.enabled)
                return false;
        }
        return this.controls.length > 0 || this.disabled;
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype._registerControl = function (control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
    };
    return FormArray;
}(AbstractControl));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgForm; })
};
var resolvedPromise = Promise.resolve(null);
/**
 * \@whatItDoes Creates a top-level {\@link FormGroup} instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * \@howToUse
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You can export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * {\@link FormGroup} instance are duplicated on the directive itself, so a reference to it
 * will give you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, you'll want to use {\@link NgModel} with a
 * `name` attribute.  You can also use {\@link NgModelGroup} if you'd like to create
 * sub-groups within the form.
 *
 * You can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 *  \@stable
 */
var NgForm = (function (_super) {
    __extends(NgForm, _super);
    /**
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function NgForm(validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._submitted = false;
        _this.ngSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.form =
            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this;
    }
    Object.defineProperty(NgForm.prototype, "submitted", {
        /**
         * @return {?}
         */
        get: function () { return this._submitted; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "controls", {
        /**
         * @return {?}
         */
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.addControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            dir._control = (container.registerControl(dir.name, dir.control));
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({ emitEvent: false });
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.removeControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.addFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            var /** @type {?} */ group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({ emitEvent: false });
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.removeFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @param {?} value
     * @return {?}
     */
    NgForm.prototype.updateModel = function (dir, value) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ ctrl = (_this.form.get(dir.path));
            ctrl.setValue(value);
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgForm.prototype.onSubmit = function ($event) {
        this._submitted = true;
        this.ngSubmit.emit($event);
        return false;
    };
    /**
     * @return {?}
     */
    NgForm.prototype.onReset = function () { this.resetForm(); };
    /**
     * @param {?=} value
     * @return {?}
     */
    NgForm.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this._submitted = false;
    };
    /**
     * \@internal
     * @param {?} path
     * @return {?}
     */
    NgForm.prototype._findContainer = function (path) {
        path.pop();
        return path.length ? (this.form.get(path)) : this.form;
    };
    return NgForm;
}(ControlContainer));
NgForm.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
                providers: [formDirectiveProvider],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                outputs: ['ngSubmit'],
                exportAs: 'ngForm'
            },] },
];
/**
 * @nocollapse
 */
NgForm.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var FormErrorExamples = {
    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var TemplateDrivenErrors = (function () {
    function TemplateDrivenErrors() {
    }
    /**
     * @return {?}
     */
    TemplateDrivenErrors.modelParentException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.formGroupNameException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.missingNameException = function () {
        throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.modelGroupParentException = function () {
        throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    return TemplateDrivenErrors;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var modelGroupProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgModelGroup; })
};
/**
 * \@whatItDoes Creates and binds a {\@link FormGroup} instance to a DOM element.
 *
 * \@howToUse
 *
 * This directive can only be used as a child of {\@link NgForm} (or in other words,
 * within `<form>` tags).
 *
 * Use this directive if you'd like to create a sub-group within a form. This can
 * come in handy if you want to validate a sub-group of your form separately from
 * the rest of your form, or if some values in your domain model make more sense to
 * consume together in a nested object.
 *
 * Pass in the name you'd like this sub-group to have and it will become the key
 * for the sub-group in the form's full value. You can also export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 * \@stable
 */
var NgModelGroup = (function (_super) {
    __extends(NgModelGroup, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function NgModelGroup(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * \@internal
     * @return {?}
     */
    NgModelGroup.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
        }
    };
    return NgModelGroup;
}(AbstractFormGroupDirective));
NgModelGroup.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
];
/**
 * @nocollapse
 */
NgModelGroup.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
NgModelGroup.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModelGroup',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgModel; })
};
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */
var resolvedPromise$1 = Promise.resolve(null);
/**
 * \@whatItDoes Creates a {\@link FormControl} instance from a domain model and binds it
 * to a form control element.
 *
 * The {\@link FormControl} instance will track the value, user interaction, and
 * validation status of the control and keep the view synced with the model. If used
 * within a parent form, the directive will also register itself with the form as a child
 * control.
 *
 * \@howToUse
 *
 * This directive can be used by itself or as part of a larger form. All you need is the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional {\@link \@Input}. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class will set the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
 * the domain model in your class as well.
 *
 * If you wish to inspect the properties of the associated {\@link FormControl} (like
 * validity state), you can also export the directive into a local template variable using
 * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
 * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
 * will fall through to the control anyway, so you can access them directly. You can see a
 * full list of properties directly available in {\@link AbstractControlDirective}.
 *
 * The following is an example of a simple standalone control using `ngModel`:
 *
 * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * It's worth noting that in the context of a parent form, you often can skip one-way or
 * two-way binding because the parent form will sync the value for you. You can access
 * its properties by exporting it into a local template variable using `ngForm` (ex:
 * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * Take a look at an example of using `ngModel` within a form:
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * To see `ngModel` examples with different form control types, see:
 *
 * * Radio buttons: {\@link RadioControlValueAccessor}
 * * Selects: {\@link SelectControlValueAccessor}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: `FormsModule`
 *
 *  \@stable
 */
var NgModel = (function (_super) {
    __extends(NgModel, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function NgModel(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        /**
         * \@internal
         */
        _this._control = new FormControl();
        /**
         * \@internal
         */
        _this._registered = false;
        _this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgModel.prototype.ngOnChanges = function (changes) {
        this._checkForErrors();
        if (!this._registered)
            this._setUpControl();
        if ('isDisabled' in changes) {
            this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);
            this.viewModel = this.model;
        }
    };
    /**
     * @return {?}
     */
    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
    Object.defineProperty(NgModel.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this._control; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    NgModel.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    /**
     * @return {?}
     */
    NgModel.prototype._setUpControl = function () {
        this._isStandalone() ? this._setUpStandalone() :
            this.formDirective.addControl(this);
        this._registered = true;
    };
    /**
     * @return {?}
     */
    NgModel.prototype._isStandalone = function () {
        return !this._parent || (this.options && this.options.standalone);
    };
    /**
     * @return {?}
     */
    NgModel.prototype._setUpStandalone = function () {
        setUpControl(this._control, this);
        this._control.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkForErrors = function () {
        if (!this._isStandalone()) {
            this._checkParentType();
        }
        this._checkName();
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup) &&
            this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
        }
        else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
        }
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkName = function () {
        if (this.options && this.options.name)
            this.name = this.options.name;
        if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgModel.prototype._updateValue = function (value) {
        var _this = this;
        resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgModel.prototype._updateDisabled = function (changes) {
        var _this = this;
        var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
        var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
        resolvedPromise$1.then(function () {
            if (isDisabled && !_this.control.disabled) {
                _this.control.disable();
            }
            else if (!isDisabled && _this.control.disabled) {
                _this.control.enable();
            }
        });
    };
    return NgModel;
}(NgControl));
NgModel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[ngModel]:not([formControlName]):not([formControl])',
                providers: [formControlBinding],
                exportAs: 'ngModel'
            },] },
];
/**
 * @nocollapse
 */
NgModel.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
]; };
NgModel.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled',] },],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModel',] },],
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModelOptions',] },],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['ngModelChange',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ReactiveErrors = (function () {
    function ReactiveErrors() {
    }
    /**
     * @return {?}
     */
    ReactiveErrors.controlParentException = function () {
        throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.ngModelGroupException = function () {
        throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.missingFormException = function () {
        throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.groupParentException = function () {
        throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.arrayParentException = function () {
        throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.disabledAttrWarning = function () {
        console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
    };
    return ReactiveErrors;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding$1 = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormControlDirective; })
};
/**
 * \@whatItDoes Syncs a standalone {\@link FormControl} instance to a form control element.
 *
 * In other words, this directive ensures that any values written to the {\@link FormControl}
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * {\@link FormControl} instance (view -> model).
 *
 * \@howToUse
 *
 * Use this directive if you'd like to create and manage a {\@link FormControl} instance directly.
 * Simply create a {\@link FormControl}, save it to your component class, and pass it into the
 * {\@link FormControlDirective}.
 *
 * This directive is designed to be used as a standalone control.  Unlike {\@link FormControlName},
 * it does not require that your {\@link FormControl} instance be part of any parent
 * {\@link FormGroup}, and it won't be registered to any {\@link FormGroupDirective} that
 * exists above it.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormControl} instance. See a full list of available properties in
 * {\@link AbstractControl}.
 *
 * **Set the value**: You can pass in an initial value when instantiating the {\@link FormControl},
 * or you can set it programmatically later using {\@link AbstractControl.setValue} or
 * {\@link AbstractControl.patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
 * {\@link AbstractControl.statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 *  \@stable
 */
var FormControlDirective = (function (_super) {
    __extends(FormControlDirective, _super);
    /**
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function FormControlDirective(validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlDirective.prototype.ngOnChanges = function (changes) {
        if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);
            if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
            }
            this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this.form.setValue(this.model);
            this.viewModel = this.model;
        }
    };
    Object.defineProperty(FormControlDirective.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlDirective.prototype._isControlChanged = function (changes) {
        return changes.hasOwnProperty('form');
    };
    return FormControlDirective;
}(NgControl));
FormControlDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
];
/**
 * @nocollapse
 */
FormControlDirective.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
]; };
FormControlDirective.propDecorators = {
    'form': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formControl',] },],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModel',] },],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['ngModelChange',] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider$1 = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormGroupDirective; })
};
/**
 * \@whatItDoes Binds an existing {\@link FormGroup} to a DOM element.
 *
 * \@howToUse
 *
 * This directive accepts an existing {\@link FormGroup} instance. It will then use this
 * {\@link FormGroup} instance to match any child {\@link FormControl}, {\@link FormGroup},
 * and {\@link FormArray} instances to child {\@link FormControlName}, {\@link FormGroupName},
 * and {\@link FormArrayName} directives.
 *
 * **Set value**: You can set the form's initial value when instantiating the
 * {\@link FormGroup}, or you can set it programmatically later using the {\@link FormGroup}'s
 * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue} methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
 * to the {\@link FormGroup}'s {\@link AbstractControl.valueChanges} event.  You can also listen to
 * its {\@link AbstractControl.statusChanges} event to be notified when the validation status is
 * re-calculated.
 *
 * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: {\@link ReactiveFormsModule}
 *
 *  \@stable
 */
var FormGroupDirective = (function (_super) {
    __extends(FormGroupDirective, _super);
    /**
     * @param {?} _validators
     * @param {?} _asyncValidators
     */
    function FormGroupDirective(_validators, _asyncValidators) {
        var _this = _super.call(this) || this;
        _this._validators = _validators;
        _this._asyncValidators = _asyncValidators;
        _this._submitted = false;
        _this.directives = [];
        _this.form = null;
        _this.ngSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FormGroupDirective.prototype.ngOnChanges = function (changes) {
        this._checkFormPresent();
        if (changes.hasOwnProperty('form')) {
            this._updateValidators();
            this._updateDomValue();
            this._updateRegistrations();
        }
    };
    Object.defineProperty(FormGroupDirective.prototype, "submitted", {
        /**
         * @return {?}
         */
        get: function () { return this._submitted; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addControl = function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeControl = function (dir) { remove(this.directives, dir); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addFormGroup = function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addFormArray = function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeFormArray = function (dir) { };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getFormArray = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @param {?} value
     * @return {?}
     */
    FormGroupDirective.prototype.updateModel = function (dir, value) {
        var /** @type {?} */ ctrl = (this.form.get(dir.path));
        ctrl.setValue(value);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FormGroupDirective.prototype.onSubmit = function ($event) {
        this._submitted = true;
        this.ngSubmit.emit($event);
        return false;
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
    /**
     * @param {?=} value
     * @return {?}
     */
    FormGroupDirective.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this._submitted = false;
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroupDirective.prototype._updateDomValue = function () {
        var _this = this;
        this.directives.forEach(function (dir) {
            var /** @type {?} */ newCtrl = _this.form.get(dir.path);
            if (dir._control !== newCtrl) {
                cleanUpControl(dir._control, dir);
                if (newCtrl)
                    setUpControl(newCtrl, dir);
                dir._control = newCtrl;
            }
        });
        this.form._updateTreeValidity({ emitEvent: false });
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._updateRegistrations = function () {
        var _this = this;
        this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
        if (this._oldForm)
            this._oldForm._registerOnCollectionChange(function () { });
        this._oldForm = this.form;
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._updateValidators = function () {
        var /** @type {?} */ sync = composeValidators(this._validators);
        this.form.validator = Validators.compose([this.form.validator, sync]);
        var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
        this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._checkFormPresent = function () {
        if (!this.form) {
            ReactiveErrors.missingFormException();
        }
    };
    return FormGroupDirective;
}(ControlContainer));
FormGroupDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[formGroup]',
                providers: [formDirectiveProvider$1],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                exportAs: 'ngForm'
            },] },
];
/**
 * @nocollapse
 */
FormGroupDirective.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
FormGroupDirective.propDecorators = {
    'form': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formGroup',] },],
    'ngSubmit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * @template T
 * @param {?} list
 * @param {?} el
 * @return {?}
 */
function remove(list, el) {
    var /** @type {?} */ index = list.indexOf(el);
    if (index > -1) {
        list.splice(index, 1);
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormGroupName; })
};
/**
 * \@whatItDoes Syncs a nested {\@link FormGroup} to a DOM element.
 *
 * \@howToUse
 *
 * This directive can only be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested {\@link FormGroup} you want to link, and
 * will look for a {\@link FormGroup} registered with that name in the parent
 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
 *
 * Nested form groups can come in handy when you want to validate a sub-group of a
 * form separately from the rest or when you'd like to group the values of certain
 * controls into their own nested object.
 *
 * **Access the group**: You can access the associated {\@link FormGroup} using the
 * {\@link AbstractControl.get} method. Ex: `this.form.get('name')`.
 *
 * You can also access individual controls within the group using dot syntax.
 * Ex: `this.form.get('name.first')`
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormGroup}. See a full list of available properties in {\@link AbstractControl}.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the {\@link FormGroup}, or you can set it programmatically later using
 * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the group, you can
 * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
 * {\@link AbstractControl.statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 * \@stable
 */
var FormGroupName = (function (_super) {
    __extends(FormGroupName, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function FormGroupName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * \@internal
     * @return {?}
     */
    FormGroupName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
        }
    };
    return FormGroupName;
}(AbstractFormGroupDirective));
FormGroupName.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
];
/**
 * @nocollapse
 */
FormGroupName.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
FormGroupName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formGroupName',] },],
};
var formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormArrayName; })
};
/**
 * \@whatItDoes Syncs a nested {\@link FormArray} to a DOM element.
 *
 * \@howToUse
 *
 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested {\@link FormArray} you want to link, and
 * will look for a {\@link FormArray} registered with that name in the parent
 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
 *
 * Nested form arrays can come in handy when you have a group of form controls but
 * you're not sure how many there will be. Form arrays allow you to create new
 * form controls dynamically.
 *
 * **Access the array**: You can access the associated {\@link FormArray} using the
 * {\@link AbstractControl.get} method on the parent {\@link FormGroup}.
 * Ex: `this.form.get('cities')`.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormArray}. See a full list of available properties in {\@link AbstractControl}.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the {\@link FormArray}, or you can set the value programmatically later using the
 * {\@link FormArray}'s {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}
 * methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the array, you can
 * subscribe to the {\@link FormArray}'s {\@link AbstractControl.valueChanges} event.  You can also
 * listen to its {\@link AbstractControl.statusChanges} event to be notified when the validation
 * status is re-calculated.
 *
 * **Add new controls**: You can add new controls to the {\@link FormArray} dynamically by
 * calling its {\@link FormArray.push} method.
 *  Ex: `this.form.get('cities').push(new FormControl());`
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 * \@stable
 */
var FormArrayName = (function (_super) {
    __extends(FormArrayName, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function FormArrayName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * @return {?}
     */
    FormArrayName.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormArray(this);
    };
    /**
     * @return {?}
     */
    FormArrayName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormArray(this);
        }
    };
    Object.defineProperty(FormArrayName.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.formDirective.getFormArray(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () {
            return this._parent ? (this._parent.formDirective) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () { return composeAsyncValidators(this._asyncValidators); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormArrayName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
        }
    };
    return FormArrayName;
}(ControlContainer));
FormArrayName.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
];
/**
 * @nocollapse
 */
FormArrayName.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
FormArrayName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formArrayName',] },],
};
/**
 * @param {?} parent
 * @return {?}
 */
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
        !(parent instanceof FormArrayName);
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var controlNameBinding = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormControlName; })
};
/**
 * \@whatItDoes Syncs a {\@link FormControl} in an existing {\@link FormGroup} to a form control
 * element by name.
 *
 * In other words, this directive ensures that any values written to the {\@link FormControl}
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * {\@link FormControl} instance (view -> model).
 *
 * \@howToUse
 *
 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the {\@link FormControl} instance you want to
 * link, and will look for a {\@link FormControl} registered with that name in the
 * closest {\@link FormGroup} or {\@link FormArray} above it.
 *
 * **Access the control**: You can access the {\@link FormControl} associated with
 * this directive by using the {\@link AbstractControl.get} method.
 * Ex: `this.form.get('first');`
 *
 * **Get value**: the `value` property is always synced and available on the {\@link FormControl}.
 * See a full list of available properties in {\@link AbstractControl}.
 *
 *  **Set value**: You can set an initial value for the control when instantiating the
 *  {\@link FormControl}, or you can set it programmatically later using
 *  {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
 * {\@link AbstractControl.statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: {\@link RadioControlValueAccessor}
 * * Selects: {\@link SelectControlValueAccessor}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: {\@link ReactiveFormsModule}
 *
 *  \@stable
 */
var FormControlName = (function (_super) {
    __extends(FormControlName, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function FormControlName(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this._added = false;
        _this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    Object.defineProperty(FormControlName.prototype, "isDisabled", {
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlName.prototype.ngOnChanges = function (changes) {
        if (!this._added)
            this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
        }
    };
    /**
     * @return {?}
     */
    FormControlName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeControl(this);
        }
    };
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormControlName.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    Object.defineProperty(FormControlName.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this._control; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormControlName.prototype._checkParentType = function () {
        if (!(this._parent instanceof FormGroupName) &&
            this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
        }
        else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
            !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
        }
    };
    /**
     * @return {?}
     */
    FormControlName.prototype._setUpControl = function () {
        this._checkParentType();
        this._control = this.formDirective.addControl(this);
        if (this.control.disabled && this.valueAccessor.setDisabledState) {
            this.valueAccessor.setDisabledState(true);
        }
        this._added = true;
    };
    return FormControlName;
}(NgControl));
FormControlName.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
];
/**
 * @nocollapse
 */
FormControlName.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
]; };
FormControlName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formControlName',] },],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModel',] },],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['ngModelChange',] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RequiredValidator; }),
    multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CheckboxRequiredValidator; }),
    multi: true
};
/**
 * A Directive that adds the `required` validator to any controls marked with the
 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * \@stable
 */
var RequiredValidator = (function () {
    function RequiredValidator() {
    }
    Object.defineProperty(RequiredValidator.prototype, "required", {
        /**
         * @return {?}
         */
        get: function () { return this._required; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._required = value != null && value !== false && "" + value !== 'false';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    RequiredValidator.prototype.validate = function (c) {
        return this.required ? Validators.required(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    return RequiredValidator;
}());
RequiredValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                providers: [REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] },
];
/**
 * @nocollapse
 */
RequiredValidator.ctorParameters = function () { return []; };
RequiredValidator.propDecorators = {
    'required': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * \@experimental
 */
var CheckboxRequiredValidator = (function (_super) {
    __extends(CheckboxRequiredValidator, _super);
    function CheckboxRequiredValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    CheckboxRequiredValidator.prototype.validate = function (c) {
        return this.required ? Validators.requiredTrue(c) : null;
    };
    return CheckboxRequiredValidator;
}(RequiredValidator));
CheckboxRequiredValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                providers: [CHECKBOX_REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] },
];
/**
 * @nocollapse
 */
CheckboxRequiredValidator.ctorParameters = function () { return []; };
/**
 * Provider which adds {@link EmailValidator} to {@link NG_VALIDATORS}.
 */
var EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EmailValidator; }),
    multi: true
};
/**
 * A Directive that adds the `email` validator to controls marked with the
 * `email` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * \@experimental
 */
var EmailValidator = (function () {
    function EmailValidator() {
    }
    Object.defineProperty(EmailValidator.prototype, "email", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    EmailValidator.prototype.validate = function (c) {
        return this._enabled ? Validators.email(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    return EmailValidator;
}());
EmailValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                providers: [EMAIL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
EmailValidator.ctorParameters = function () { return []; };
EmailValidator.propDecorators = {
    'email': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='min'}
 */
var MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MinLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the {\@link MinLengthValidator} for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
 *
 * \@stable
 */
var MinLengthValidator = (function () {
    function MinLengthValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MinLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('minlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MinLengthValidator.prototype.validate = function (c) {
        return this.minlength == null ? null : this._validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    MinLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.minLength(parseInt(this.minlength, 10));
    };
    return MinLengthValidator;
}());
MinLengthValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                providers: [MIN_LENGTH_VALIDATOR],
                host: { '[attr.minlength]': 'minlength ? minlength : null' }
            },] },
];
/**
 * @nocollapse
 */
MinLengthValidator.ctorParameters = function () { return []; };
MinLengthValidator.propDecorators = {
    'minlength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='max'}
 */
var MAX_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MaxLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the {\@link MaxLengthValidator} for any `formControlName,
 * `formControl`,
 * or control with `ngModel` that also has a `maxlength` attribute.
 *
 * \@stable
 */
var MaxLengthValidator = (function () {
    function MaxLengthValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MaxLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('maxlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MaxLengthValidator.prototype.validate = function (c) {
        return this.maxlength != null ? this._validator(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    MaxLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
    };
    return MaxLengthValidator;
}());
MaxLengthValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                providers: [MAX_LENGTH_VALIDATOR],
                host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
            },] },
];
/**
 * @nocollapse
 */
MaxLengthValidator.ctorParameters = function () { return []; };
MaxLengthValidator.propDecorators = {
    'maxlength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var PATTERN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return PatternValidator; }),
    multi: true
};
/**
 * A Directive that adds the `pattern` validator to any controls marked with the
 * `pattern` attribute, via the {\@link NG_VALIDATORS} binding. Uses attribute value
 * as the regex to validate Control value against.  Follows pattern attribute
 * semantics; i.e. regex must match entire Control value.
 *
 * ### Example
 *
 * ```
 * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
 * ```
 * \@stable
 */
var PatternValidator = (function () {
    function PatternValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    PatternValidator.prototype.ngOnChanges = function (changes) {
        if ('pattern' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    PatternValidator.prototype.validate = function (c) { return this._validator(c); };
    /**
     * @param {?} fn
     * @return {?}
     */
    PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
    return PatternValidator;
}());
PatternValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                providers: [PATTERN_VALIDATOR],
                host: { '[attr.pattern]': 'pattern ? pattern : null' }
            },] },
];
/**
 * @nocollapse
 */
PatternValidator.ctorParameters = function () { return []; };
PatternValidator.propDecorators = {
    'pattern': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Creates an {\@link AbstractControl} from a user-specified configuration.
 *
 * It is essentially syntactic sugar that shortens the `new FormGroup()`,
 * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
 * forms.
 *
 * \@howToUse
 *
 * To use, inject `FormBuilder` into your component class. You can then call its methods
 * directly.
 *
 * {\@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
 *
 *  * **npm package**: `\@angular/forms`
 *
 *  * **NgModule**: {\@link ReactiveFormsModule}
 *
 * \@stable
 */
var FormBuilder = (function () {
    function FormBuilder() {
    }
    /**
     * Construct a new {\@link FormGroup} with the given map of configuration.
     * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
     *
     * See the {\@link FormGroup} constructor for more details.
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    FormBuilder.prototype.group = function (controlsConfig, extra) {
        if (extra === void 0) { extra = null; }
        var /** @type {?} */ controls = this._reduceControls(controlsConfig);
        var /** @type {?} */ validator = extra != null ? extra['validator'] : null;
        var /** @type {?} */ asyncValidator = extra != null ? extra['asyncValidator'] : null;
        return new FormGroup(controls, validator, asyncValidator);
    };
    /**
     * Construct a new {\@link FormControl} with the given `formState`,`validator`, and
     * `asyncValidator`.
     *
     * `formState` can either be a standalone value for the form control or an object
     * that contains both a value and a disabled status.
     *
     * @param {?} formState
     * @param {?=} validator
     * @param {?=} asyncValidator
     * @return {?}
     */
    FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        return new FormControl(formState, validator, asyncValidator);
    };
    /**
     * Construct a {\@link FormArray} from the given `controlsConfig` array of
     * configuration, with the given optional `validator` and `asyncValidator`.
     * @param {?} controlsConfig
     * @param {?=} validator
     * @param {?=} asyncValidator
     * @return {?}
     */
    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
        var _this = this;
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        var /** @type {?} */ controls = controlsConfig.map(function (c) { return _this._createControl(c); });
        return new FormArray(controls, validator, asyncValidator);
    };
    /**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */
    FormBuilder.prototype._reduceControls = function (controlsConfig) {
        var _this = this;
        var /** @type {?} */ controls = {};
        Object.keys(controlsConfig).forEach(function (controlName) {
            controls[controlName] = _this._createControl(controlsConfig[controlName]);
        });
        return controls;
    };
    /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    FormBuilder.prototype._createControl = function (controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else if (Array.isArray(controlConfig)) {
            var /** @type {?} */ value = controlConfig[0];
            var /** @type {?} */ validator = controlConfig.length > 1 ? controlConfig[1] : null;
            var /** @type {?} */ asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else {
            return this.control(controlConfig);
        }
    };
    return FormBuilder;
}());
FormBuilder.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
FormBuilder.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
/**
 * \@stable
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Version"]('4.0.3');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * \@experimental
 */
var NgNoValidate = (function () {
    function NgNoValidate() {
    }
    return NgNoValidate;
}());
NgNoValidate.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                host: { 'novalidate': '' },
            },] },
];
/**
 * @nocollapse
 */
NgNoValidate.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SHARED_FORM_DIRECTIVES = [
    NgNoValidate,
    NgSelectOption,
    NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    RangeValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator,
    CheckboxRequiredValidator,
    EmailValidator,
];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */
var InternalFormsSharedModule = (function () {
    function InternalFormsSharedModule() {
    }
    return InternalFormsSharedModule;
}());
InternalFormsSharedModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: SHARED_FORM_DIRECTIVES,
                exports: SHARED_FORM_DIRECTIVES,
            },] },
];
/**
 * @nocollapse
 */
InternalFormsSharedModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The ng module for forms.
 * \@stable
 */
var FormsModule = (function () {
    function FormsModule() {
    }
    return FormsModule;
}());
FormsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                providers: [RadioControlRegistry],
                exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
            },] },
];
/**
 * @nocollapse
 */
FormsModule.ctorParameters = function () { return []; };
/**
 * The ng module for reactive forms.
 * \@stable
 */
var ReactiveFormsModule = (function () {
    function ReactiveFormsModule() {
    }
    return ReactiveFormsModule;
}());
ReactiveFormsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                providers: [FormBuilder, RadioControlRegistry],
                exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
            },] },
];
/**
 * @nocollapse
 */
ReactiveFormsModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * This module is used for handling user input, by defining and building a {@link FormGroup} that
 * consists of {@link FormControl} objects, and mapping them onto the DOM. {@link FormControl}
 * objects can then be used to read information from the form DOM elements.
 *
 * Forms providers are not included in default providers; you must import these providers
 * explicitly.
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the forms package.
 */
// This file only reexports content of the `src` folder. Keep it that way.
/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(108);
__webpack_require__(109);
__webpack_require__(121);
__webpack_require__(51);
__webpack_require__(49);
var platform_browser_dynamic_1 = __webpack_require__(48);
var main_module_1 = __webpack_require__(101);
var core_1 = __webpack_require__(4);
if (false) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(main_module_1.MainModule).then(function (MODULE_REF) { if (false) {
    module["hot"]["accept"]();
    if (MODULE_REF.instance["hmrOnInit"]) {
        module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
        module["hot"]["apply"](function (status) { MODULE_REF.instance["hmrOnStatus"](status); });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
        module["hot"]["check"](function (err, outdatedModules) { MODULE_REF.instance["hmrOnCheck"](err, outdatedModules); });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
        module["hot"]["decline"](function (dependencies) { MODULE_REF.instance["hmrOnDecline"](dependencies); });
    }
    module["hot"]["dispose"](function (store) { MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store); MODULE_REF.destroy(); MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store); });
} return MODULE_REF; });


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var AppComponent = (function () {
    function AppComponent() {
        this.logoUrl = __webpack_require__(110);
        this.url = 'https://servicestack.net/vs-templates/AngularApp';
    }
    return AppComponent;
}());
AppComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n    <div mdl class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n\n        <app-header></app-header>\n\n        <main class=\"mdl-layout__content\">\n\n            <div class=\"mdl-layout__tab-panel is-active\" id=\"overview\">\n                <router-outlet></router-outlet>\n            </div>\n\n            <h4 style=\"text-align: center\">\n                <img [src]=\"logoUrl\" />\n                <a [href]=\"url\">Learn about this Angular4 VS.NET template</a>\n            </h4>\n\n            <app-footer></app-footer>\n\n        </main>\n    </div>\n    "
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ })

},[386]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZHRvcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBwL2hvbWUvaGVsbG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBwL2hvbWUvaG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBwL3RlY2hub2xvZ3kvdGVjaG5vbG9neS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2hlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLWRlc2lnbi1saXRlL2Rpc3QvbWF0ZXJpYWwuZGVlcF9wdXJwbGUtcGluay5taW4uY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAuY3NzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1nL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FwcC9ob21lL2hlbGxvLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBwL2hvbWUvaGVsbG8uY3NzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5zY3NzIiwid2VicGFjazovLy8uL34vdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovLy90YWJzLmpzIiwid2VicGFjazovLy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vL21kbENvbXBvbmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vL3JBRi5qcyIsIndlYnBhY2s6Ly8vYnV0dG9uLmpzIiwid2VicGFjazovLy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vaWNvbi10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vL21lbnUuanMiLCJ3ZWJwYWNrOi8vL3Byb2dyZXNzLmpzIiwid2VicGFjazovLy9yYWRpby5qcyIsIndlYnBhY2s6Ly8vc2xpZGVyLmpzIiwid2VicGFjazovLy9zbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vc3dpdGNoLmpzIiwid2VicGFjazovLy90ZXh0ZmllbGQuanMiLCJ3ZWJwYWNrOi8vL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vL2RhdGEtdGFibGUuanMiLCJ3ZWJwYWNrOi8vL3JpcHBsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWxzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9hYnN0cmFjdF9jb250cm9sX2RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvY29udHJvbF9jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy92YWxpZGF0b3JzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9jb250cm9sX3ZhbHVlX2FjY2Vzc29yLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9jaGVja2JveF92YWx1ZV9hY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvZGVmYXVsdF92YWx1ZV9hY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbm9ybWFsaXplX3ZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbnVtYmVyX3ZhbHVlX2FjY2Vzc29yLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19jb250cm9sLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yYWRpb19jb250cm9sX3ZhbHVlX2FjY2Vzc29yLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yYW5nZV92YWx1ZV9hY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvc2VsZWN0X2NvbnRyb2xfdmFsdWVfYWNjZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3NlbGVjdF9tdWx0aXBsZV9jb250cm9sX3ZhbHVlX2FjY2Vzc29yLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9zaGFyZWQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL2Fic3RyYWN0X2Zvcm1fZ3JvdXBfZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19jb250cm9sX3N0YXR1cy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL21vZGVsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19mb3JtLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9lcnJvcl9leGFtcGxlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvdGVtcGxhdGVfZHJpdmVuX2Vycm9ycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbmdfbW9kZWxfZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL25nX21vZGVsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yZWFjdGl2ZV9lcnJvcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX2RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX2RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9mb3JtX2J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy92ZXJzaW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19ub192YWxpZGF0ZV9kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZm9ybV9wcm92aWRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9mb3Jtcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvcHVibGljX2FwaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJNYXRlcmlhbFRhYiIsInRhYiIsImN0eCIsImVsZW1lbnRfIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJDc3NDbGFzc2VzXyIsIk1ETF9KU19SSVBQTEVfRUZGRUNUIiwicmlwcGxlQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwiTURMX1JJUFBMRV9DT05UQUlORVIiLCJyaXBwbGUiLCJNRExfUklQUExFIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImdldEF0dHJpYnV0ZSIsImNoYXJBdCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsInNwbGl0IiwicGFuZWwiLCJxdWVyeVNlbGVjdG9yIiwicmVzZXRUYWJTdGF0ZV8iLCJyZXNldFBhbmVsU3RhdGVfIiwiQUNUSVZFX0NMQVNTIiwiTWF0ZXJpYWxMYXlvdXRUYWIiLCJ0YWJzIiwicGFuZWxzIiwibGF5b3V0Iiwic2VsZWN0VGFiIiwiY29udGVudF8iLCJJU19BQ1RJVkUiLCJ0YWJCYXJfIiwiSlNfUklQUExFX0VGRkVDVCIsIlJJUFBMRV9DT05UQUlORVIiLCJSSVBQTEUiLCJUQUJfTUFOVUFMX1NXSVRDSCIsInNob3ciLCJjb21wb25lbnRIYW5kbGVyIiwidXBncmFkZURvbSIsIm9wdEpzQ2xhc3MiLCJvcHRDc3NDbGFzcyIsInVwZ3JhZGVFbGVtZW50IiwiZWxlbWVudCIsInVwZ3JhZGVFbGVtZW50cyIsImVsZW1lbnRzIiwidXBncmFkZUFsbFJlZ2lzdGVyZWQiLCJyZWdpc3RlclVwZ3JhZGVkQ2FsbGJhY2siLCJqc0NsYXNzIiwiY2FsbGJhY2siLCJyZWdpc3RlciIsImNvbmZpZyIsImRvd25ncmFkZUVsZW1lbnRzIiwibm9kZXMiLCJmaW5kUmVnaXN0ZXJlZENsYXNzXyIsIm5hbWUiLCJvcHRSZXBsYWNlIiwiaSIsInJlZ2lzdGVyZWRDb21wb25lbnRzXyIsImxlbmd0aCIsImNsYXNzTmFtZSIsImdldFVwZ3JhZGVkTGlzdE9mRWxlbWVudF8iLCJkYXRhVXBncmFkZWQiLCJpc0VsZW1lbnRVcGdyYWRlZF8iLCJ1cGdyYWRlZExpc3QiLCJpbmRleE9mIiwiY3JlYXRlRXZlbnRfIiwiZXZlbnRUeXBlIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJ3aW5kb3ciLCJDdXN0b21FdmVudCIsImV2IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJ1cGdyYWRlRG9tSW50ZXJuYWwiLCJjc3NDbGFzcyIsInJlZ2lzdGVyZWRDbGFzcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuIiwidXBncmFkZUVsZW1lbnRJbnRlcm5hbCIsIkVsZW1lbnQiLCJFcnJvciIsInVwZ3JhZGluZ0V2IiwiZGlzcGF0Y2hFdmVudCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjbGFzc2VzVG9VcGdyYWRlIiwicHVzaCIsImZvckVhY2giLCJjb21wb25lbnQiLCJzZXRBdHRyaWJ1dGUiLCJqb2luIiwiaW5zdGFuY2UiLCJjbGFzc0NvbnN0cnVjdG9yIiwiY29tcG9uZW50Q29uZmlnUHJvcGVydHlfIiwiY3JlYXRlZENvbXBvbmVudHNfIiwiaiIsIm0iLCJjYWxsYmFja3MiLCJ3aWRnZXQiLCJ1cGdyYWRlZEV2IiwidXBncmFkZUVsZW1lbnRzSW50ZXJuYWwiLCJBcnJheSIsImlzQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJIVE1MRWxlbWVudCIsImNoaWxkcmVuIiwicmVnaXN0ZXJJbnRlcm5hbCIsIndpZGdldE1pc3NpbmciLCJuZXdDb25maWciLCJjb25zdHJ1Y3RvciIsImNsYXNzQXNTdHJpbmciLCJpdGVtIiwiaGFzT3duUHJvcGVydHkiLCJmb3VuZCIsInJlZ2lzdGVyVXBncmFkZWRDYWxsYmFja0ludGVybmFsIiwicmVnQ2xhc3MiLCJ1cGdyYWRlQWxsUmVnaXN0ZXJlZEludGVybmFsIiwiZGVjb25zdHJ1Y3RDb21wb25lbnRJbnRlcm5hbCIsImNvbXBvbmVudEluZGV4Iiwic3BsaWNlIiwidXBncmFkZXMiLCJjb21wb25lbnRQbGFjZSIsImRvd25ncmFkZU5vZGVzSW50ZXJuYWwiLCJkb3duZ3JhZGVOb2RlIiwibm9kZSIsImZpbHRlciIsIk5vZGVMaXN0IiwiTm9kZSIsIkNvbXBvbmVudENvbmZpZ1B1YmxpYyIsIkNvbXBvbmVudENvbmZpZyIsIkNvbXBvbmVudCIsImRvY3VtZW50RWxlbWVudCIsIkRhdGUiLCJub3ciLCJnZXRUaW1lIiwidmVuZG9ycyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInZwIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibGFzdFRpbWUiLCJuZXh0VGltZSIsIk1hdGgiLCJtYXgiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiTWF0ZXJpYWxCdXR0b24iLCJ0aGlzIiwiaW5pdCIsIkNvbnN0YW50XyIsIlJJUFBMRV9FRkZFQ1QiLCJibHVySGFuZGxlcl8iLCJldmVudCIsImJsdXIiLCJkaXNhYmxlIiwiZGlzYWJsZWQiLCJlbmFibGUiLCJyaXBwbGVFbGVtZW50XyIsImJvdW5kUmlwcGxlQmx1ckhhbmRsZXIiLCJiaW5kIiwiYm91bmRCdXR0b25CbHVySGFuZGxlciIsIk1hdGVyaWFsQ2hlY2tib3giLCJUSU5ZX1RJTUVPVVQiLCJJTlBVVCIsIkJPWF9PVVRMSU5FIiwiRk9DVVNfSEVMUEVSIiwiVElDS19PVVRMSU5FIiwiUklQUExFX0lHTk9SRV9FVkVOVFMiLCJSSVBQTEVfQ0VOVEVSIiwiSVNfRk9DVVNFRCIsIklTX0RJU0FCTEVEIiwiSVNfQ0hFQ0tFRCIsIklTX1VQR1JBREVEIiwib25DaGFuZ2VfIiwidXBkYXRlQ2xhc3Nlc18iLCJvbkZvY3VzXyIsIm9uQmx1cl8iLCJyZW1vdmUiLCJvbk1vdXNlVXBfIiwiYmx1cl8iLCJjaGVja0Rpc2FibGVkIiwiY2hlY2tUb2dnbGVTdGF0ZSIsImlucHV0RWxlbWVudF8iLCJjaGVja2VkIiwiY2hlY2siLCJ1bmNoZWNrIiwiYm94T3V0bGluZSIsInRpY2tDb250YWluZXIiLCJ0aWNrT3V0bGluZSIsInJpcHBsZUNvbnRhaW5lckVsZW1lbnRfIiwiYm91bmRSaXBwbGVNb3VzZVVwIiwiYm91bmRJbnB1dE9uQ2hhbmdlIiwiYm91bmRJbnB1dE9uRm9jdXMiLCJib3VuZElucHV0T25CbHVyIiwiYm91bmRFbGVtZW50TW91c2VVcCIsIk1hdGVyaWFsSWNvblRvZ2dsZSIsImJvdW5kRWxlbWVudE9uTW91c2VVcCIsIk1hdGVyaWFsTWVudSIsIlRSQU5TSVRJT05fRFVSQVRJT05fU0VDT05EUyIsIlRSQU5TSVRJT05fRFVSQVRJT05fRlJBQ1RJT04iLCJDTE9TRV9USU1FT1VUIiwiS2V5Y29kZXNfIiwiRU5URVIiLCJFU0NBUEUiLCJTUEFDRSIsIlVQX0FSUk9XIiwiRE9XTl9BUlJPVyIsIkNPTlRBSU5FUiIsIk9VVExJTkUiLCJJVEVNIiwiSVRFTV9SSVBQTEVfQ09OVEFJTkVSIiwiSVNfVklTSUJMRSIsIklTX0FOSU1BVElORyIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJVTkFMSUdORUQiLCJjb250YWluZXIiLCJwYXJlbnRFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwicmVtb3ZlQ2hpbGQiLCJjb250YWluZXJfIiwib3V0bGluZSIsIm91dGxpbmVfIiwiZm9yRWxJZCIsImZvckVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JFbGVtZW50XyIsImhhbmRsZUZvckNsaWNrXyIsImhhbmRsZUZvcktleWJvYXJkRXZlbnRfIiwiaXRlbXMiLCJib3VuZEl0ZW1LZXlkb3duXyIsImhhbmRsZUl0ZW1LZXlib2FyZEV2ZW50XyIsImJvdW5kSXRlbUNsaWNrXyIsImhhbmRsZUl0ZW1DbGlja18iLCJ0YWJJbmRleCIsImV2dCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJmb3JSZWN0Iiwic3R5bGUiLCJyaWdodCIsInRvcCIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsImxlZnQiLCJvZmZzZXRMZWZ0IiwiYm90dG9tIiwidG9nZ2xlIiwia2V5Q29kZSIsImZvY3VzIiwiY3VycmVudEluZGV4IiwidGFyZ2V0IiwiTW91c2VFdmVudCIsImNsaWNrIiwiaGlkZSIsImhhc0F0dHJpYnV0ZSIsInN0b3BQcm9wYWdhdGlvbiIsImNsb3NpbmdfIiwiYXBwbHlDbGlwXyIsImhlaWdodCIsIndpZHRoIiwiY2xpcCIsInJlbW92ZUFuaW1hdGlvbkVuZExpc3RlbmVyXyIsImFkZEFuaW1hdGlvbkVuZExpc3RlbmVyXyIsInRyYW5zaXRpb25EdXJhdGlvbiIsIml0ZW1EZWxheSIsInRyYW5zaXRpb25EZWxheSIsInBhcmVudE5vZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlUHJvcGVydHkiLCJNYXRlcmlhbFByb2dyZXNzIiwiSU5ERVRFUk1JTkFURV9DTEFTUyIsInNldFByb2dyZXNzIiwicCIsInByb2dyZXNzYmFyXyIsInNldEJ1ZmZlciIsImJ1ZmZlcmJhcl8iLCJhdXhiYXJfIiwiZWwiLCJNYXRlcmlhbFJhZGlvIiwiSlNfUkFESU8iLCJSQURJT19CVE4iLCJSQURJT19PVVRFUl9DSVJDTEUiLCJSQURJT19JTk5FUl9DSVJDTEUiLCJyYWRpb3MiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYnV0dG9uIiwiYnRuRWxlbWVudF8iLCJvbk1vdXNldXBfIiwiYm91bmRDaGFuZ2VIYW5kbGVyXyIsImJvdW5kRm9jdXNIYW5kbGVyXyIsImJvdW5kQmx1ckhhbmRsZXJfIiwiYm91bmRNb3VzZVVwSGFuZGxlcl8iLCJvdXRlckNpcmNsZSIsImlubmVyQ2lyY2xlIiwiTWF0ZXJpYWxTbGlkZXIiLCJpc0lFXyIsIm1zUG9pbnRlckVuYWJsZWQiLCJJRV9DT05UQUlORVIiLCJTTElERVJfQ09OVEFJTkVSIiwiQkFDS0dST1VORF9GTEVYIiwiQkFDS0dST1VORF9MT1dFUiIsIkJBQ0tHUk9VTkRfVVBQRVIiLCJJU19MT1dFU1RfVkFMVUUiLCJvbklucHV0XyIsInVwZGF0ZVZhbHVlU3R5bGVzXyIsIm9uQ29udGFpbmVyTW91c2VEb3duXyIsIm5ld0V2ZW50IiwiYnV0dG9ucyIsImNsaWVudFgiLCJjbGllbnRZIiwieSIsImZyYWN0aW9uIiwidmFsdWUiLCJtaW4iLCJiYWNrZ3JvdW5kTG93ZXJfIiwiZmxleCIsIndlYmtpdEZsZXgiLCJiYWNrZ3JvdW5kVXBwZXJfIiwiY2hhbmdlIiwiY29udGFpbmVySUUiLCJiYWNrZ3JvdW5kRmxleCIsImJvdW5kSW5wdXRIYW5kbGVyIiwiYm91bmRDaGFuZ2VIYW5kbGVyIiwiYm91bmRNb3VzZVVwSGFuZGxlciIsImJvdW5kQ29udGFpbmVyTW91c2VEb3duSGFuZGxlciIsIk1hdGVyaWFsU25hY2tiYXIiLCJ0ZXh0RWxlbWVudF8iLCJjc3NDbGFzc2VzXyIsIk1FU1NBR0UiLCJhY3Rpb25FbGVtZW50XyIsIkFDVElPTiIsImFjdGl2ZSIsImFjdGlvbkhhbmRsZXJfIiwidW5kZWZpbmVkIiwibWVzc2FnZV8iLCJhY3Rpb25UZXh0XyIsInF1ZXVlZE5vdGlmaWNhdGlvbnNfIiwic2V0QWN0aW9uSGlkZGVuXyIsIkFOSU1BVElPTl9MRU5HVEgiLCJTTkFDS0JBUiIsIkFDVElWRSIsImRpc3BsYXlTbmFja2Jhcl8iLCJ0ZXh0Q29udGVudCIsImNsZWFudXBfIiwidGltZW91dF8iLCJzaG93U25hY2tiYXIiLCJkYXRhIiwiY2hlY2tRdWV1ZV8iLCJzaGlmdCIsIkJvb2xlYW4iLCJyZW1vdmVBdHRyaWJ1dGUiLCJNYXRlcmlhbFNwaW5uZXIiLCJNRExfU1BJTk5FUl9MQVlFUl9DT1VOVCIsIk1ETF9TUElOTkVSX0xBWUVSIiwiTURMX1NQSU5ORVJfQ0lSQ0xFX0NMSVBQRVIiLCJNRExfU1BJTk5FUl9DSVJDTEUiLCJNRExfU1BJTk5FUl9HQVBfUEFUQ0giLCJNRExfU1BJTk5FUl9MRUZUIiwiTURMX1NQSU5ORVJfUklHSFQiLCJjcmVhdGVMYXllciIsImluZGV4IiwibGF5ZXIiLCJsZWZ0Q2xpcHBlciIsImdhcFBhdGNoIiwicmlnaHRDbGlwcGVyIiwiY2lyY2xlT3duZXJzIiwiY2lyY2xlIiwic3RvcCIsInN0YXJ0IiwiTWF0ZXJpYWxTd2l0Y2giLCJUUkFDSyIsIlRIVU1CIiwib24iLCJvZmYiLCJ0cmFjayIsInRodW1iIiwiZm9jdXNIZWxwZXIiLCJib3VuZEZvY3VzSGFuZGxlciIsImJvdW5kQmx1ckhhbmRsZXIiLCJNYXRlcmlhbFRhYnMiLCJUQUJfQ0xBU1MiLCJQQU5FTF9DTEFTUyIsIlVQR1JBREVEX0NMQVNTIiwiTURMX0pTX1JJUFBMRV9FRkZFQ1RfSUdOT1JFX0VWRU5UUyIsImluaXRUYWJzXyIsInRhYnNfIiwicGFuZWxzXyIsImsiLCJNYXRlcmlhbFRleHRmaWVsZCIsIm1heFJvd3MiLCJOT19NQVhfUk9XUyIsIk1BWF9ST1dTX0FUVFJJQlVURSIsIkxBQkVMIiwiSVNfRElSVFkiLCJJU19JTlZBTElEIiwiSEFTX1BMQUNFSE9MREVSIiwib25LZXlEb3duXyIsImN1cnJlbnRSb3dDb3VudCIsIm9uUmVzZXRfIiwiY2hlY2tWYWxpZGl0eSIsImNoZWNrRGlydHkiLCJjaGVja0ZvY3VzIiwiaW5wdXRfIiwidmFsaWRpdHkiLCJ2YWxpZCIsImxhYmVsXyIsInBhcnNlSW50IiwiaXNOYU4iLCJib3VuZFVwZGF0ZUNsYXNzZXNIYW5kbGVyIiwiYm91bmRSZXNldEhhbmRsZXIiLCJib3VuZEtleURvd25IYW5kbGVyIiwiaW52YWxpZCIsIk1hdGVyaWFsVG9vbHRpcCIsIkJPVFRPTSIsIkxFRlQiLCJSSUdIVCIsIlRPUCIsImhhbmRsZU1vdXNlRW50ZXJfIiwicHJvcHMiLCJtYXJnaW5MZWZ0Iiwib2Zmc2V0V2lkdGgiLCJtYXJnaW5Ub3AiLCJoaWRlVG9vbHRpcF8iLCJib3VuZE1vdXNlRW50ZXJIYW5kbGVyIiwiYm91bmRNb3VzZUxlYXZlQW5kU2Nyb2xsSGFuZGxlciIsIk1hdGVyaWFsTGF5b3V0IiwiTUFYX1dJRFRIIiwiVEFCX1NDUk9MTF9QSVhFTFMiLCJSRVNJWkVfVElNRU9VVCIsIk1FTlVfSUNPTiIsIkNIRVZST05fTEVGVCIsIkNIRVZST05fUklHSFQiLCJNb2RlXyIsIlNUQU5EQVJEIiwiU0VBTUVEIiwiV0FURVJGQUxMIiwiU0NST0xMIiwiSEVBREVSIiwiRFJBV0VSIiwiQ09OVEVOVCIsIkRSQVdFUl9CVE4iLCJJQ09OIiwiSEVBREVSX1NFQU1FRCIsIkhFQURFUl9XQVRFUkZBTEwiLCJIRUFERVJfU0NST0xMIiwiRklYRURfSEVBREVSIiwiT0JGVVNDQVRPUiIsIlRBQl9CQVIiLCJUQUJfQ09OVEFJTkVSIiwiVEFCIiwiVEFCX0JBUl9CVVRUT04iLCJUQUJfQkFSX0xFRlRfQlVUVE9OIiwiVEFCX0JBUl9SSUdIVF9CVVRUT04iLCJQQU5FTCIsIkhBU19EUkFXRVIiLCJIQVNfVEFCUyIsIkhBU19TQ1JPTExJTkdfSEVBREVSIiwiQ0FTVElOR19TSEFET1ciLCJJU19DT01QQUNUIiwiSVNfU01BTExfU0NSRUVOIiwiSVNfRFJBV0VSX09QRU4iLCJPTl9MQVJHRV9TQ1JFRU4iLCJPTl9TTUFMTF9TQ1JFRU4iLCJjb250ZW50U2Nyb2xsSGFuZGxlcl8iLCJoZWFkZXJfIiwiaGVhZGVyVmlzaWJsZSIsInNjcm9sbFRvcCIsImtleWJvYXJkRXZlbnRIYW5kbGVyXyIsImRyYXdlcl8iLCJ0b2dnbGVEcmF3ZXIiLCJzY3JlZW5TaXplSGFuZGxlcl8iLCJzY3JlZW5TaXplTWVkaWFRdWVyeV8iLCJtYXRjaGVzIiwib2JmdXNjYXRvcl8iLCJkcmF3ZXJUb2dnbGVIYW5kbGVyXyIsInR5cGUiLCJoZWFkZXJUcmFuc2l0aW9uRW5kSGFuZGxlcl8iLCJoZWFkZXJDbGlja0hhbmRsZXJfIiwidGFiQmFyIiwiZHJhd2VyQnV0dG9uIiwiZm9jdXNlZEVsZW1lbnQiLCJkaXJlY3RDaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJudW1DaGlsZHJlbiIsImMiLCJjaGlsZCIsInBlcnNpc3RlZCIsIm92ZXJmbG93WSIsIm1vZGUiLCJkcmF3ZXJCdXR0b25JY29uIiwiaW5uZXJIVE1MIiwiZmlyc3RDaGlsZCIsIm9iZnVzY2F0b3IiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJ0YWJDb250YWluZXIiLCJsZWZ0QnV0dG9uIiwibGVmdEJ1dHRvbkljb24iLCJzY3JvbGxMZWZ0IiwicmlnaHRCdXR0b24iLCJyaWdodEJ1dHRvbkljb24iLCJ0YWJVcGRhdGVIYW5kbGVyIiwic2Nyb2xsV2lkdGgiLCJ3aW5kb3dSZXNpemVIYW5kbGVyIiwicmVzaXplVGltZW91dElkXyIsIk1hdGVyaWFsRGF0YVRhYmxlIiwiREFUQV9UQUJMRSIsIlNFTEVDVEFCTEUiLCJTRUxFQ1RfRUxFTUVOVCIsIklTX1NFTEVDVEVEIiwic2VsZWN0Um93XyIsImNoZWNrYm94Iiwicm93Iiwib3B0X3Jvd3MiLCJjcmVhdGVDaGVja2JveF8iLCJsYWJlbCIsImxhYmVsQ2xhc3NlcyIsImZpcnN0SGVhZGVyIiwiYm9keVJvd3MiLCJmb290Um93cyIsInJvd3MiLCJjb25jYXQiLCJ0aCIsImhlYWRlckNoZWNrYm94IiwiZmlyc3RDZWxsIiwidGQiLCJub2RlTmFtZSIsInRvVXBwZXJDYXNlIiwicm93Q2hlY2tib3giLCJNYXRlcmlhbFJpcHBsZSIsIklOSVRJQUxfU0NBTEUiLCJJTklUSUFMX1NJWkUiLCJJTklUSUFMX09QQUNJVFkiLCJGSU5BTF9PUEFDSVRZIiwiRklOQUxfU0NBTEUiLCJSSVBQTEVfRUZGRUNUX0lHTk9SRV9FVkVOVFMiLCJkb3duSGFuZGxlcl8iLCJib3VuZEhlaWdodCIsImJvdW5kV2lkdGgiLCJyaXBwbGVTaXplXyIsInNxcnQiLCJpZ25vcmluZ01vdXNlRG93bl8iLCJmcmFtZUNvdW50IiwiZ2V0RnJhbWVDb3VudCIsInNldEZyYW1lQ291bnQiLCJ4IiwiYm91bmQiLCJjdXJyZW50VGFyZ2V0Iiwicm91bmQiLCJ0b3VjaGVzIiwic2V0UmlwcGxlWFkiLCJzZXRSaXBwbGVTdHlsZXMiLCJhbmltRnJhbWVIYW5kbGVyIiwidXBIYW5kbGVyXyIsImRldGFpbCIsInJlY2VudGVyaW5nIiwiZnJhbWVDb3VudF8iLCJ4XyIsInlfIiwiYm91bmREb3duSGFuZGxlciIsImJvdW5kVXBIYW5kbGVyIiwiZkMiLCJnZXRSaXBwbGVFbGVtZW50IiwibmV3WCIsIm5ld1kiLCJ0cmFuc2Zvcm1TdHJpbmciLCJzY2FsZSIsInNpemUiLCJvZmZzZXQiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRyYW5zZm9ybSIsIkV4YW1wbGVzIiwicmVzb2x2ZWRQcm9taXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7O0FBTUY7SUFBQTtJQUVBLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUM7QUFGWSxzQ0FBYTtBQUkxQixtQkFBbUI7QUFDbkIsMEJBQTBCO0FBQzFCO0lBQUE7SUFLQSxDQUFDO0lBRkcsOEJBQWMsR0FBZCxjQUFtQixNQUFNLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEQsMkJBQVcsR0FBWCxjQUFnQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyQyxZQUFDO0FBQUQsQ0FBQztBQUxZLHNCQUFLOzs7Ozs7Ozs7Ozs7QUM1QmxCLG9DQUF5QztBQUN6QyxpREFBMEQ7QUFDMUQsc0NBQTZDO0FBQzdDLHFDQUEyQztBQUMzQyx1Q0FBdUQ7QUFFdkQsOENBQStDO0FBQy9DLHdDQUFrRDtBQUNsRCx3Q0FBa0Q7QUFDbEQsMkNBQXFEO0FBRXJELHNDQUFxQztBQUVyQyxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFF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QUMsZUFBZSxDQUFDLHdCQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxVQUFVLElBQU0sRUFBRSxDQUFDLENBQUMsS0FBYSxDQUFDLENBQUMsQ0FBQztJQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQVUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUFLLENBQUM7SUFBSyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFTLE1BQU0sSUFBWSxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQU8sQ0FBQyxDQUFDLENBQUM7SUFBSyxDQUFDO0lBQUssRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBUyxHQUFHLEVBQUUsZUFBZSxJQUFZLFVBQVUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQU8sQ0FBQyxDQUFDLENBQUM7SUFBSyxDQUFDO0lBQUssRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBUyxZQUFZLElBQVksVUFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFPLENBQUMsQ0FBQyxDQUFDO0lBQUssQ0FBQztJQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFTLEtBQUssSUFBVSxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBTyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUssQ0FBQyxDQUFDLENBQUM7QUFBRyxDQUFDLENBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNoQjdrQyxvQ0FBMEM7QUEwQjFDLElBQWEsWUFBWTtJQUlyQjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQU8sQ0FBQyxHQUF1QixDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxrREFBa0QsQ0FBQztJQUNsRSxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDO0FBUlksWUFBWTtJQXhCeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxva0JBb0JUO0tBQ0osQ0FBQzs7R0FDVyxZQUFZLENBUXhCO0FBUlksb0NBQVkiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE9wdGlvbnM6XG5EYXRlOiAyMDE3LTAxLTAxIDEyOjAwOjAwXG5WZXJzaW9uOiA0XG5UaXA6IFRvIG92ZXJyaWRlIGEgRFRPIG9wdGlvbiwgcmVtb3ZlIFwiLy9cIiBwcmVmaXggYmVmb3JlIHVwZGF0aW5nXG5CYXNlVXJsOiBodHRwOi8vbG9jYWxob3N0OjYxMzIyL1xuXG4vL0dsb2JhbE5hbWVzcGFjZTogXG5FeHBvcnRBc1R5cGVzOiBUcnVlXG4vL01ha2VQcm9wZXJ0aWVzT3B0aW9uYWw6IFRydWVcbi8vQWRkU2VydmljZVN0YWNrVHlwZXM6IFRydWVcbi8vQWRkUmVzcG9uc2VTdGF0dXM6IEZhbHNlXG4vL0FkZEltcGxpY2l0VmVyc2lvbjogXG4vL0FkZERlc2NyaXB0aW9uQXNDb21tZW50czogVHJ1ZVxuLy9JbmNsdWRlVHlwZXM6IFxuLy9FeGNsdWRlVHlwZXM6IFxuLy9EZWZhdWx0SW1wb3J0czogXG4qL1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJldHVybjxUPiB7XG59XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1Jlc3BvbnNlIHtcbiAgICByZXN1bHQ6IHN0cmluZztcbn1cblxuLy8gQFJvdXRlKFwiL2hlbGxvXCIpXG4vLyBAUm91dGUoXCIvaGVsbG8ve05hbWV9XCIpXG5leHBvcnQgY2xhc3MgSGVsbG8gaW1wbGVtZW50cyBJUmV0dXJuPEhlbGxvUmVzcG9uc2U+XG57XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNyZWF0ZVJlc3BvbnNlKCkgeyByZXR1cm4gbmV3IEhlbGxvUmVzcG9uc2UoKTsgfVxuICAgIGdldFR5cGVOYW1lKCkgeyByZXR1cm4gXCJIZWxsb1wiOyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vQGFuZ3VsYXJjbGFzcy9obXItbG9hZGVyIS4vc3JjL2R0b3MudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9oZWFkZXInO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvZm9vdGVyJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9hcHAvYXBwLm1vZHVsZSc7XG5cbmltcG9ydCB7IE1ETCB9IGZyb20gJy4vc2hhcmVkL3V0aWxzJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ21haW4vMCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBNREwsXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBGb290ZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXG4gICAgICAgIEFwcE1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1haW5Nb2R1bGUge1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9AYW5ndWxhcmNsYXNzL2htci1sb2FkZXIhLi9zcmMvbWFpbi5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzJztcbmltcG9ydCB7IEhlbGxvIH0gZnJvbSAnLi4vLi4vLi4vZHRvcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaGVsbG8nLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hlbGxvLmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2hlbGxvLmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBIZWxsb0NvbXBvbmVudCB7XG4gICAgcmVzdWx0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5uYW1lQ2hhbmdlZCh0aGlzLm5hbWUpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hbWVDaGFuZ2VkKG5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyBIZWxsbygpO1xuICAgICAgICAgICAgcmVxLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdmFyIHIgPSBhd2FpdCBjbGllbnQuZ2V0KHJlcSk7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHIucmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNkcmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L0Bhbmd1bGFyY2xhc3MvaG1yLWxvYWRlciEuL3NyYy9tb2R1bGVzL2FwcC9ob21lL2hlbGxvLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIZWxsb0NvbXBvbmVudCB9IGZyb20gJy4vaGVsbG8nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi0tY2VudGVyIG1kbC1ncmlkIG1kbC1ncmlkLS1uby1zcGFjaW5nIG1kbC1zaGFkb3ctLTJkcFwiPlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cInNlY3Rpb25fX3BsYXktYnRuIG1kbC1jZWxsIG1kbC1jZWxsLS0zLWNvbC1kZXNrdG9wIG1kbC1jZWxsLS0yLWNvbC10YWJsZXQgbWRsLWNlbGwtLTQtY29sLXBob25lIG1kbC1jb2xvci0tdGVhbC0xMDAgbWRsLWNvbG9yLXRleHQtLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnBsYXlfY2lyY2xlX2ZpbGxlZDwvaT5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmQgbWRsLWNlbGwgbWRsLWNlbGwtLTktY29sLWRlc2t0b3AgbWRsLWNlbGwtLTYtY29sLXRhYmxldCBtZGwtY2VsbC0tNC1jb2wtcGhvbmVcIj5cblxuICAgICAgICAgICAgICAgIDxoZWxsbyBbbmFtZV09XCJuYW1lXCI+PC9oZWxsbz4gXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9kb2NzLnNlcnZpY2VzdGFjay5uZXQvdHlwZXNjcmlwdC1hZGQtc2VydmljZXN0YWNrLXJlZmVyZW5jZVwiIGNsYXNzPVwibWRsLWJ1dHRvblwiPk1vcmUgaW5mbyBvbiBUeXBlU2NyaXB0IFNlcnZpY2VTdGFjayBSZWZlcmVuY2U8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGhlYWRpbmc6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgICAgIHRoaXMuaGVhZGluZyA9IFwiSG9tZVwiO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLmRhdGEuc3Vic2NyaWJlKHggPT4gdGhpcy5uYW1lID0geC5uYW1lKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L0Bhbmd1bGFyY2xhc3MvaG1yLWxvYWRlciEuL3NyYy9tb2R1bGVzL2FwcC9ob21lL2hvbWUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwcm9kdWN0cycsIFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi0tY2VudGVyIG1kbC1ncmlkIG1kbC1ncmlkLS1uby1zcGFjaW5nIG1kbC1zaGFkb3ctLTJkcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2xcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtZ3JpZCBtZGwtZ3JpZC0tbm8tc3BhY2luZ1wiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2xcIj57e2hlYWRpbmd9fTwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NpcmNsZS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTItY29sIG1kbC1jZWxsLS0xLWNvbC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lcl9fY2lyY2xlIG1kbC1jb2xvci0tcHJpbWFyeVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXh0IG1kbC1jZWxsIG1kbC1jZWxsLS0xMC1jb2wtZGVza3RvcCBtZGwtY2VsbC0tNi1jb2wtdGFibGV0IG1kbC1jZWxsLS0zLWNvbC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDU+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICBEb2xvcmUgZXggZGVzZXJ1bnQgYXV0ZSBmdWdpYXQgYXV0ZSBudWxsYSBlYSBzdW50IGFsaXF1YSBuaXNpIGN1cGlkYXRhdCBldS4gRHVpcyBudWxsYSB0ZW1wb3IgZG8gYXV0ZSBldCBlaXVzbW9kIHZlbGl0IGV4ZXJjaXRhdGlvbiBub3N0cnVkIHF1aXMgPGEgaHJlZj1cIiNcIj5wcm9pZGVudCBtaW5pbTwvYT4uXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NpcmNsZS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTItY29sIG1kbC1jZWxsLS0xLWNvbC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lcl9fY2lyY2xlIG1kbC1jb2xvci0tcHJpbWFyeVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXh0IG1kbC1jZWxsIG1kbC1jZWxsLS0xMC1jb2wtZGVza3RvcCBtZGwtY2VsbC0tNi1jb2wtdGFibGV0IG1kbC1jZWxsLS0zLWNvbC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDU+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICBEb2xvcmUgZXggZGVzZXJ1bnQgYXV0ZSBmdWdpYXQgYXV0ZSBudWxsYSBlYSBzdW50IGFsaXF1YSBuaXNpIGN1cGlkYXRhdCBldS4gRHVpcyBudWxsYSB0ZW1wb3IgZG8gYXV0ZSBldCBlaXVzbW9kIHZlbGl0IGV4ZXJjaXRhdGlvbiBub3N0cnVkIHF1aXMgPGEgaHJlZj1cIiNcIj5wcm9pZGVudCBtaW5pbTwvYT4uXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NpcmNsZS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTItY29sIG1kbC1jZWxsLS0xLWNvbC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lcl9fY2lyY2xlIG1kbC1jb2xvci0tcHJpbWFyeVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXh0IG1kbC1jZWxsIG1kbC1jZWxsLS0xMC1jb2wtZGVza3RvcCBtZGwtY2VsbC0tNi1jb2wtdGFibGV0IG1kbC1jZWxsLS0zLWNvbC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDU+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICBEb2xvcmUgZXggZGVzZXJ1bnQgYXV0ZSBmdWdpYXQgYXV0ZSBudWxsYSBlYSBzdW50IGFsaXF1YSBuaXNpIGN1cGlkYXRhdCBldS4gRHVpcyBudWxsYSB0ZW1wb3IgZG8gYXV0ZSBldCBlaXVzbW9kIHZlbGl0IGV4ZXJjaXRhdGlvbiBub3N0cnVkIHF1aXMgPGEgaHJlZj1cIiNcIj5wcm9pZGVudCBtaW5pbTwvYT4uXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1kbC1idXR0b25cIj5SZWFkIG91ciBmZWF0dXJlczwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3Byb2R1Y3RzLnNjc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNDb21wb25lbnQge1xuICAgIGhlYWRpbmc6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlYWRpbmcgPSBcIlByb2R1Y3RzXCI7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9AYW5ndWxhcmNsYXNzL2htci1sb2FkZXIhLi9zcmMvbW9kdWxlcy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0ZWNobm9sb2d5JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24tLWNlbnRlciBtZGwtZ3JpZCBtZGwtZ3JpZC0tbm8tc3BhY2luZyBtZGwtc2hhZG93LS0yZHBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZCBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0Pnt7aGVhZGluZ319PC9oND5cbiAgICAgICAgICAgICAgICAgICAgRG9sb3JlIGV4IGRlc2VydW50IGF1dGUgZnVnaWF0IGF1dGUgbnVsbGEgZWEgc3VudCBhbGlxdWEgbmlzaSBjdXBpZGF0YXQgZXUuIFxuICAgICAgICAgICAgICAgICAgICBOb3N0cnVkIGluIGxhYm9yaXMgbGFib3JlIG5pc2kgYW1ldCBkbyBkb2xvciBldSBmdWdpYXQgY29uc2VjdGV0dXIgZWxpdCBjaWxsdW0gZXNzZS4gXG4gICAgICAgICAgICAgICAgICAgIFBhcmlhdHVyIG9jY2FlY2F0IG5pc2kgbGFib3JpcyB0ZW1wb3IgbGFib3JpcyBlaXVzbW9kIHF1aSBpZCBMb3JlbSBlc3NlIGNvbW1vZG8gaW4uIFxuICAgICAgICAgICAgICAgICAgICBFeGVyY2l0YXRpb24gYXV0ZSBkb2xvcmUgZGVzZXJ1bnQgY3VscGEgY29uc2VxdWF0IGVsaXQgbGFib3JlIGluY2lkaWR1bnQgZWxpdCBhbmltLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWRsLWJ1dHRvblwiPlJlYWQgb3VyIGZlYXR1cmVzPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFRlY2hub2xvZ3lDb21wb25lbnQge1xuICAgIGhlYWRpbmc6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlYWRpbmcgPSBcIlRlY2hub2xvZ3lcIjtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L0Bhbmd1bGFyY2xhc3MvaG1yLWxvYWRlciEuL3NyYy9tb2R1bGVzL2FwcC90ZWNobm9sb2d5L3RlY2hub2xvZ3kudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZm9vdGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24tLWZvb3RlciBtZGwtZ3JpZFwiPjwvc2VjdGlvbj5cbiAgICAgICAgPGZvb3RlciBjbGFzcz1cIm1kbC1tZWdhLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tbWlkZGxlLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLW1lZ2EtZm9vdGVyLS1kcm9wLWRvd24tc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWhlYWRpbmctY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWhlYWRpbmdcIj5GZWF0dXJlczwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tbGluay1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BYm91dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+VGVybXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlBhcnRuZXJzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5VcGRhdGVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tZHJvcC1kb3duLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibWRsLW1lZ2EtZm9vdGVyLS1oZWFkaW5nLWNoZWNrYm94XCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWRsLW1lZ2EtZm9vdGVyLS1oZWFkaW5nXCI+RGV0YWlsczwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tbGluay1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TcGVjPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ub29sczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UmVzb3VyY2VzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tZHJvcC1kb3duLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibWRsLW1lZ2EtZm9vdGVyLS1oZWFkaW5nLWNoZWNrYm94XCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWRsLW1lZ2EtZm9vdGVyLS1oZWFkaW5nXCI+VGVjaG5vbG9neTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tbGluay1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ib3cgaXQgd29ya3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlBhdHRlcm5zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Vc2FnZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRyYWN0czwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWRyb3AtZG93bi1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0taGVhZGluZy1jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0taGVhZGluZ1wiPkZBUTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tbGluay1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5RdWVzdGlvbnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFuc3dlcnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3QgdXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tYm90dG9tLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgTW9yZSBJbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tbGluay1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1NlcnZpY2VTdGFjay9TZXJ2aWNlU3RhY2tWU1wiPlNlcnZpY2VTdGFjayBWUy5ORVQgVGVtcGxhdGVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9AYW5ndWxhcmNsYXNzL2htci1sb2FkZXIhLi9zcmMvc2hhcmVkL2Zvb3Rlci50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4uL21vZHVsZXMvYXBwL2FwcC5tb2R1bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtZGwtbGF5b3V0X19oZWFkZXIgbWRsLWxheW91dF9faGVhZGVyLS1zY3JvbGwgbWRsLWNvbG9yLS1wcmltYXJ5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dC0tbGFyZ2Utc2NyZWVuLW9ubHkgbWRsLWxheW91dF9faGVhZGVyLXJvd1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXQtLWxhcmdlLXNjcmVlbi1vbmx5IG1kbC1sYXlvdXRfX2hlYWRlci1yb3dcIj5cbiAgICAgICAgICAgICAgICA8aDM+e3t0aXRsZX19PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXQtLWxhcmdlLXNjcmVlbi1vbmx5IG1kbC1sYXlvdXRfX2hlYWRlci1yb3dcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0X190YWItYmFyIG1kbC1qcy1yaXBwbGUtZWZmZWN0IG1kbC1jb2xvci0tcHJpbWFyeS1kYXJrXCI+XG5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgcm91dGUgb2Ygcm91dGVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwicm91dGUuZGF0YVwiIGNsYXNzPVwibWRsLWxheW91dF9fdGFiXCIgW2NsYXNzLmlzLWFjdGl2ZV09XCJpc0FjdGl2ZShyb3V0ZS5wYXRoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rPVwie3tyb3V0ZS5wYXRofX1cIj57e3JvdXRlLmRhdGEudGl0bGV9fTwvYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLWZhYiBtZGwtanMtcmlwcGxlLWVmZmVjdCBtZGwtYnV0dG9uLS1jb2xvcmVkIG1kbC1zaGFkb3ctLTRkcCBtZGwtY29sb3ItLWFjY2VudFwiIGlkPVwiYWRkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+YWRkPC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5aGlkZGVuXCI+QWRkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcbiAgICB0aXRsZSA9ICdBbmd1bGFyNEFwcDEnO1xuICAgIHJvdXRlcyA9IHJvdXRlcy5maWx0ZXIoKHZhbCkgPT4gdmFsLnBhdGggIT0gJycpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgICBpc0FjdGl2ZShwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLnVybC5zdWJzdHJpbmcoMSkgPT09IHBhdGg7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9AYW5ndWxhcmNsYXNzL2htci1sb2FkZXIhLi9zcmMvc2hhcmVkL2hlYWRlci50cyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLWRlc2lnbi1saXRlL2Rpc3QvbWF0ZXJpYWwuZGVlcF9wdXJwbGUtcGluay5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xvZ28ucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2ltZy9sb2dvLnBuZ1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0XFxcIj5cXG4gICAgPGg0PldlbGNvbWU8L2g0PlxcblxcbiAgICBBamF4IHJlcXVlc3QgdXNpbmcgU2VydmljZVN0YWNrJ3MgVHlwZVNjcmlwdCBKc29uU2VydmljZUNsaWVudCBhbmQgVHlwZWQgRFRPczpcXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkXFxcIiBzdHlsZT1cXFwid2lkdGg6YXV0b1xcXCI+XFxuXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcIm1kbC10ZXh0ZmllbGRfX2lucHV0XFxcIiBpZD1cXFwiTmFtZVxcXCJcXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiVHlwZSB5b3VyIG5hbWVcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIlxcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJuYW1lXFxcIlxcbiAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cXFwibmFtZUNoYW5nZWQoJGV2ZW50KVxcXCIgLz5cXG5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJyZXN1bHRcXFwiPnt7cmVzdWx0fX08L3NwYW4+XFxuICAgIDwvZGl2PlxcblxcbjwvZGl2PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvYXBwL2hvbWUvaGVsbG8uaHRtbFxuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJpbnB1dFt0eXBlPXRleHRdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luOiAwIDEwcHggMCAwOyB9XFxuXFxuLnJlc3VsdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogIzdhMWVhMTsgfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9hcHAvaG9tZS9oZWxsby5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGl2IHtcXG4gIGJhY2tncm91bmQ6ICMzZTIyODA7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbmEge1xcbiAgY29sb3I6ICNmZjczYTM7IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLnRocm93KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgIH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlmIChvW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdHNsaWIvdHNsaWIuZXM2LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgVGFicyBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxUYWJzID0gZnVuY3Rpb24gTWF0ZXJpYWxUYWJzKGVsZW1lbnQpIHtcbiAgICAvLyBTdG9yZXMgdGhlIEhUTUwgZWxlbWVudC5cbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxUYWJzJ10gPSBNYXRlcmlhbFRhYnM7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRhYnMucHJvdG90eXBlLkNvbnN0YW50XyA9IHt9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBUQUJfQ0xBU1M6ICdtZGwtdGFic19fdGFiJyxcbiAgICBQQU5FTF9DTEFTUzogJ21kbC10YWJzX19wYW5lbCcsXG4gICAgQUNUSVZFX0NMQVNTOiAnaXMtYWN0aXZlJyxcbiAgICBVUEdSQURFRF9DTEFTUzogJ2lzLXVwZ3JhZGVkJyxcbiAgICBNRExfSlNfUklQUExFX0VGRkVDVDogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICBNRExfUklQUExFX0NPTlRBSU5FUjogJ21kbC10YWJzX19yaXBwbGUtY29udGFpbmVyJyxcbiAgICBNRExfUklQUExFOiAnbWRsLXJpcHBsZScsXG4gICAgTURMX0pTX1JJUFBMRV9FRkZFQ1RfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2xpY2tzIHRvIGEgdGFicyBjb21wb25lbnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRhYnMucHJvdG90eXBlLmluaXRUYWJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5NRExfSlNfUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX0pTX1JJUFBMRV9FRkZFQ1RfSUdOT1JFX0VWRU5UUyk7XG4gICAgfVxuICAgIC8vIFNlbGVjdCBlbGVtZW50IHRhYnMsIGRvY3VtZW50IHBhbmVsc1xuICAgIHRoaXMudGFic18gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5UQUJfQ0xBU1MpO1xuICAgIHRoaXMucGFuZWxzXyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLlBBTkVMX0NMQVNTKTtcbiAgICAvLyBDcmVhdGUgbmV3IHRhYnMgZm9yIGVhY2ggdGFiIGVsZW1lbnRcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGFic18ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmV3IE1hdGVyaWFsVGFiKHRoaXMudGFic19baV0sIHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5VUEdSQURFRF9DTEFTUyk7XG59O1xuLyoqXG4gICAqIFJlc2V0IHRhYiBzdGF0ZSwgZHJvcHBpbmcgYWN0aXZlIGNsYXNzZXNcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRhYnMucHJvdG90eXBlLnJlc2V0VGFiU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy50YWJzXy5sZW5ndGg7IGsrKykge1xuICAgICAgICB0aGlzLnRhYnNfW2tdLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5BQ1RJVkVfQ0xBU1MpO1xuICAgIH1cbn07XG4vKipcbiAgICogUmVzZXQgcGFuZWwgc3RhdGUsIGRyb3BpbmcgYWN0aXZlIGNsYXNzZXNcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRhYnMucHJvdG90eXBlLnJlc2V0UGFuZWxTdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnBhbmVsc18ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdGhpcy5wYW5lbHNfW2pdLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5BQ1RJVkVfQ0xBU1MpO1xuICAgIH1cbn07XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsVGFicy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB0aGlzLmluaXRUYWJzXygpO1xuICAgIH1cbn07XG4vKipcbiAgICogQ29uc3RydWN0b3IgZm9yIGFuIGluZGl2aWR1YWwgdGFiLlxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtFbGVtZW50fSB0YWIgVGhlIEhUTUwgZWxlbWVudCBmb3IgdGhlIHRhYi5cbiAgICogQHBhcmFtIHtNYXRlcmlhbFRhYnN9IGN0eCBUaGUgTWF0ZXJpYWxUYWJzIG9iamVjdCB0aGF0IG93bnMgdGhlIHRhYi5cbiAgICovXG5mdW5jdGlvbiBNYXRlcmlhbFRhYih0YWIsIGN0eCkge1xuICAgIGlmICh0YWIpIHtcbiAgICAgICAgaWYgKGN0eC5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnMoY3R4LkNzc0NsYXNzZXNfLk1ETF9KU19SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdmFyIHJpcHBsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGN0eC5Dc3NDbGFzc2VzXy5NRExfUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChjdHguQ3NzQ2xhc3Nlc18uTURMX0pTX1JJUFBMRV9FRkZFQ1QpO1xuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKGN0eC5Dc3NDbGFzc2VzXy5NRExfUklQUExFKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgdGFiLmFwcGVuZENoaWxkKHJpcHBsZUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICh0YWIuZ2V0QXR0cmlidXRlKCdocmVmJykuY2hhckF0KDApID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGhyZWYgPSB0YWIuaHJlZi5zcGxpdCgnIycpWzFdO1xuICAgICAgICAgICAgICAgIHZhciBwYW5lbCA9IGN0eC5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcjJyArIGhyZWYpO1xuICAgICAgICAgICAgICAgIGN0eC5yZXNldFRhYlN0YXRlXygpO1xuICAgICAgICAgICAgICAgIGN0eC5yZXNldFBhbmVsU3RhdGVfKCk7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoY3R4LkNzc0NsYXNzZXNfLkFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LmFkZChjdHguQ3NzQ2xhc3Nlc18uQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsVGFicyxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxUYWJzJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy10YWJzJ1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRhYnMuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgTGF5b3V0IE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxMYXlvdXQgPSBmdW5jdGlvbiBNYXRlcmlhbExheW91dChlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsTGF5b3V0J10gPSBNYXRlcmlhbExheW91dDtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5Db25zdGFudF8gPSB7XG4gICAgTUFYX1dJRFRIOiAnKG1heC13aWR0aDogMTAyNHB4KScsXG4gICAgVEFCX1NDUk9MTF9QSVhFTFM6IDEwMCxcbiAgICBSRVNJWkVfVElNRU9VVDogMTAwLFxuICAgIE1FTlVfSUNPTjogJyYjeEU1RDI7JyxcbiAgICBDSEVWUk9OX0xFRlQ6ICdjaGV2cm9uX2xlZnQnLFxuICAgIENIRVZST05fUklHSFQ6ICdjaGV2cm9uX3JpZ2h0J1xufTtcbi8qKlxuICAgKiBLZXljb2RlcywgZm9yIGNvZGUgcmVhZGFiaWxpdHkuXG4gICAqXG4gICAqIEBlbnVtIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLktleWNvZGVzXyA9IHtcbiAgICBFTlRFUjogMTMsXG4gICAgRVNDQVBFOiAyNyxcbiAgICBTUEFDRTogMzJcbn07XG4vKipcbiAgICogTW9kZXMuXG4gICAqXG4gICAqIEBlbnVtIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLk1vZGVfID0ge1xuICAgIFNUQU5EQVJEOiAwLFxuICAgIFNFQU1FRDogMSxcbiAgICBXQVRFUkZBTEw6IDIsXG4gICAgU0NST0xMOiAzXG59O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIENPTlRBSU5FUjogJ21kbC1sYXlvdXRfX2NvbnRhaW5lcicsXG4gICAgSEVBREVSOiAnbWRsLWxheW91dF9faGVhZGVyJyxcbiAgICBEUkFXRVI6ICdtZGwtbGF5b3V0X19kcmF3ZXInLFxuICAgIENPTlRFTlQ6ICdtZGwtbGF5b3V0X19jb250ZW50JyxcbiAgICBEUkFXRVJfQlROOiAnbWRsLWxheW91dF9fZHJhd2VyLWJ1dHRvbicsXG4gICAgSUNPTjogJ21hdGVyaWFsLWljb25zJyxcbiAgICBKU19SSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtbGF5b3V0X190YWItcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZScsXG4gICAgUklQUExFX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cycsXG4gICAgSEVBREVSX1NFQU1FRDogJ21kbC1sYXlvdXRfX2hlYWRlci0tc2VhbWVkJyxcbiAgICBIRUFERVJfV0FURVJGQUxMOiAnbWRsLWxheW91dF9faGVhZGVyLS13YXRlcmZhbGwnLFxuICAgIEhFQURFUl9TQ1JPTEw6ICdtZGwtbGF5b3V0X19oZWFkZXItLXNjcm9sbCcsXG4gICAgRklYRURfSEVBREVSOiAnbWRsLWxheW91dC0tZml4ZWQtaGVhZGVyJyxcbiAgICBPQkZVU0NBVE9SOiAnbWRsLWxheW91dF9fb2JmdXNjYXRvcicsXG4gICAgVEFCX0JBUjogJ21kbC1sYXlvdXRfX3RhYi1iYXInLFxuICAgIFRBQl9DT05UQUlORVI6ICdtZGwtbGF5b3V0X190YWItYmFyLWNvbnRhaW5lcicsXG4gICAgVEFCOiAnbWRsLWxheW91dF9fdGFiJyxcbiAgICBUQUJfQkFSX0JVVFRPTjogJ21kbC1sYXlvdXRfX3RhYi1iYXItYnV0dG9uJyxcbiAgICBUQUJfQkFSX0xFRlRfQlVUVE9OOiAnbWRsLWxheW91dF9fdGFiLWJhci1sZWZ0LWJ1dHRvbicsXG4gICAgVEFCX0JBUl9SSUdIVF9CVVRUT046ICdtZGwtbGF5b3V0X190YWItYmFyLXJpZ2h0LWJ1dHRvbicsXG4gICAgVEFCX01BTlVBTF9TV0lUQ0g6ICdtZGwtbGF5b3V0X190YWItbWFudWFsLXN3aXRjaCcsXG4gICAgUEFORUw6ICdtZGwtbGF5b3V0X190YWItcGFuZWwnLFxuICAgIEhBU19EUkFXRVI6ICdoYXMtZHJhd2VyJyxcbiAgICBIQVNfVEFCUzogJ2hhcy10YWJzJyxcbiAgICBIQVNfU0NST0xMSU5HX0hFQURFUjogJ2hhcy1zY3JvbGxpbmctaGVhZGVyJyxcbiAgICBDQVNUSU5HX1NIQURPVzogJ2lzLWNhc3Rpbmctc2hhZG93JyxcbiAgICBJU19DT01QQUNUOiAnaXMtY29tcGFjdCcsXG4gICAgSVNfU01BTExfU0NSRUVOOiAnaXMtc21hbGwtc2NyZWVuJyxcbiAgICBJU19EUkFXRVJfT1BFTjogJ2lzLXZpc2libGUnLFxuICAgIElTX0FDVElWRTogJ2lzLWFjdGl2ZScsXG4gICAgSVNfVVBHUkFERUQ6ICdpcy11cGdyYWRlZCcsXG4gICAgSVNfQU5JTUFUSU5HOiAnaXMtYW5pbWF0aW5nJyxcbiAgICBPTl9MQVJHRV9TQ1JFRU46ICdtZGwtbGF5b3V0LS1sYXJnZS1zY3JlZW4tb25seScsXG4gICAgT05fU01BTExfU0NSRUVOOiAnbWRsLWxheW91dC0tc21hbGwtc2NyZWVuLW9ubHknXG59O1xuLyoqXG4gICAqIEhhbmRsZXMgc2Nyb2xsaW5nIG9uIHRoZSBjb250ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5jb250ZW50U2Nyb2xsSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGhlYWRlclZpc2libGUgPSAhdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19TTUFMTF9TQ1JFRU4pIHx8IHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uRklYRURfSEVBREVSKTtcbiAgICBpZiAodGhpcy5jb250ZW50Xy5zY3JvbGxUb3AgPiAwICYmICF0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCkpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5DQVNUSU5HX1NIQURPVyk7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCk7XG4gICAgICAgIGlmIChoZWFkZXJWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udGVudF8uc2Nyb2xsVG9wIDw9IDAgJiYgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX0NPTVBBQ1QpKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uQ0FTVElOR19TSEFET1cpO1xuICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0NPTVBBQ1QpO1xuICAgICAgICBpZiAoaGVhZGVyVmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGVzIGEga2V5Ym9hcmQgZXZlbnQgb24gdGhlIGRyYXdlci5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5rZXlib2FyZEV2ZW50SGFuZGxlcl8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgLy8gT25seSByZWFjdCB3aGVuIHRoZSBkcmF3ZXIgaXMgb3Blbi5cbiAgICBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLkVTQ0FQRSAmJiB0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRFJBV0VSX09QRU4pKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRHJhd2VyKCk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGVzIGNoYW5nZXMgaW4gc2NyZWVuIHNpemUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLnNjcmVlblNpemVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zY3JlZW5TaXplTWVkaWFRdWVyeV8ubWF0Y2hlcykge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19TTUFMTF9TQ1JFRU4pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX1NNQUxMX1NDUkVFTik7XG4gICAgICAgIC8vIENvbGxhcHNlIGRyYXdlciAoaWYgYW55KSB3aGVuIG1vdmluZyB0byBhIGxhcmdlIHNjcmVlbiBzaXplLlxuICAgICAgICBpZiAodGhpcy5kcmF3ZXJfKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RSQVdFUl9PUEVOKTtcbiAgICAgICAgICAgIHRoaXMub2JmdXNjYXRvcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RSQVdFUl9PUEVOKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlcyBldmVudHMgb2YgZHJhd2VyIGJ1dHRvbi5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5kcmF3ZXJUb2dnbGVIYW5kbGVyXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoZXZ0ICYmIGV2dC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5TUEFDRSB8fCBldnQua2V5Q29kZSA9PT0gdGhpcy5LZXljb2Rlc18uRU5URVIpIHtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgc2Nyb2xsaW5nIGluIGRyYXdlciBuYXZcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcHJldmVudCBvdGhlciBrZXlzXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50b2dnbGVEcmF3ZXIoKTtcbn07XG4vKipcbiAgICogSGFuZGxlcyAodW4pc2V0dGluZyB0aGUgYGlzLWFuaW1hdGluZ2AgY2xhc3NcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuaGVhZGVyVHJhbnNpdGlvbkVuZEhhbmRsZXJfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbn07XG4vKipcbiAgICogSGFuZGxlcyBleHBhbmRpbmcgdGhlIGhlYWRlciBvbiBjbGlja1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5oZWFkZXJDbGlja0hhbmRsZXJfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCkpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19DT01QQUNUKTtcbiAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgIH1cbn07XG4vKipcbiAgICogUmVzZXQgdGFiIHN0YXRlLCBkcm9wcGluZyBhY3RpdmUgY2xhc3Nlc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5yZXNldFRhYlN0YXRlXyA9IGZ1bmN0aW9uICh0YWJCYXIpIHtcbiAgICBmb3IgKHZhciBrID0gMDsgayA8IHRhYkJhci5sZW5ndGg7IGsrKykge1xuICAgICAgICB0YWJCYXJba10uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBSZXNldCBwYW5lbCBzdGF0ZSwgZHJvcGluZyBhY3RpdmUgY2xhc3Nlc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5yZXNldFBhbmVsU3RhdGVfID0gZnVuY3Rpb24gKHBhbmVscykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFuZWxzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhbmVsc1tqXS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICB9XG59O1xuLyoqXG4gICogVG9nZ2xlIGRyYXdlciBzdGF0ZVxuICAqXG4gICogQHB1YmxpY1xuICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLnRvZ2dsZURyYXdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZHJhd2VyQnV0dG9uID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uRFJBV0VSX0JUTik7XG4gICAgdGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC50b2dnbGUodGhpcy5Dc3NDbGFzc2VzXy5JU19EUkFXRVJfT1BFTik7XG4gICAgdGhpcy5vYmZ1c2NhdG9yXy5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRFJBV0VSX09QRU4pO1xuICAgIC8vIFNldCBhY2Nlc3NpYmlsaXR5IHByb3BlcnRpZXMuXG4gICAgaWYgKHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19EUkFXRVJfT1BFTikpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJfLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgZHJhd2VyQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJfLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICBkcmF3ZXJCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgfVxufTtcbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZVsndG9nZ2xlRHJhd2VyJ10gPSBNYXRlcmlhbExheW91dC5wcm90b3R5cGUudG9nZ2xlRHJhd2VyO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQ09OVEFJTkVSKTtcbiAgICAgICAgdmFyIGZvY3VzZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCc6Zm9jdXMnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShjb250YWluZXIsIHRoaXMuZWxlbWVudF8pO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgaWYgKGZvY3VzZWRFbGVtZW50KSB7XG4gICAgICAgICAgICBmb2N1c2VkRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkaXJlY3RDaGlsZHJlbiA9IHRoaXMuZWxlbWVudF8uY2hpbGROb2RlcztcbiAgICAgICAgdmFyIG51bUNoaWxkcmVuID0gZGlyZWN0Q2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IG51bUNoaWxkcmVuOyBjKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGRpcmVjdENoaWxkcmVuW2NdO1xuICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdCAmJiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5IRUFERVIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJfID0gY2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0ICYmIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkRSQVdFUikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdlcl8gPSBjaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QgJiYgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uQ09OVEVOVCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRfID0gY2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VzaG93JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnBlcnNpc3RlZCkge1xuICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFnZSBpcyBsb2FkZWQgZnJvbSBiYWNrL2ZvcndhcmQgY2FjaGVcbiAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHJlcGFpbnQgdG8gbGV0IGxheW91dCBzY3JvbGwgaW4gc2FmYXJpXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLm92ZXJmbG93WSA9ICcnO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJfKSB7XG4gICAgICAgICAgICB0aGlzLnRhYkJhcl8gPSB0aGlzLmhlYWRlcl8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLlRBQl9CQVIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtb2RlID0gdGhpcy5Nb2RlXy5TVEFOREFSRDtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyXykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5IRUFERVJfU0VBTUVEKSkge1xuICAgICAgICAgICAgICAgIG1vZGUgPSB0aGlzLk1vZGVfLlNFQU1FRDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkhFQURFUl9XQVRFUkZBTEwpKSB7XG4gICAgICAgICAgICAgICAgbW9kZSA9IHRoaXMuTW9kZV8uV0FURVJGQUxMO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyXy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5oZWFkZXJUcmFuc2l0aW9uRW5kSGFuZGxlcl8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oZWFkZXJDbGlja0hhbmRsZXJfLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSEVBREVSX1NDUk9MTCkpIHtcbiAgICAgICAgICAgICAgICBtb2RlID0gdGhpcy5Nb2RlXy5TQ1JPTEw7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5IQVNfU0NST0xMSU5HX0hFQURFUik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gdGhpcy5Nb2RlXy5TVEFOREFSRCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQ0FTVElOR19TSEFET1cpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYkJhcl8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJCYXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5DQVNUSU5HX1NIQURPVyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSB0aGlzLk1vZGVfLlNFQU1FRCB8fCBtb2RlID09PSB0aGlzLk1vZGVfLlNDUk9MTCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uQ0FTVElOR19TSEFET1cpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYkJhcl8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJCYXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5DQVNUSU5HX1NIQURPVyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSB0aGlzLk1vZGVfLldBVEVSRkFMTCkge1xuICAgICAgICAgICAgICAgIC8vIEFkZCBhbmQgcmVtb3ZlIHNoYWRvd3MgZGVwZW5kaW5nIG9uIHNjcm9sbCBwb3NpdGlvbi5cbiAgICAgICAgICAgICAgICAvLyBBbHNvIGFkZC9yZW1vdmUgYXV4aWxpYXJ5IGNsYXNzIGZvciBzdHlsaW5nIG9mIHRoZSBjb21wYWN0IHZlcnNpb24gb2ZcbiAgICAgICAgICAgICAgICAvLyB0aGUgaGVhZGVyLlxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudF8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jb250ZW50U2Nyb2xsSGFuZGxlcl8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50U2Nyb2xsSGFuZGxlcl8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgZHJhd2VyIHRvZ2dsaW5nIGJ1dHRvbiB0byBvdXIgbGF5b3V0LCBpZiB3ZSBoYXZlIGFuIG9wZW5hYmxlIGRyYXdlci5cbiAgICAgICAgaWYgKHRoaXMuZHJhd2VyXykge1xuICAgICAgICAgICAgdmFyIGRyYXdlckJ1dHRvbiA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLkRSQVdFUl9CVE4pO1xuICAgICAgICAgICAgaWYgKCFkcmF3ZXJCdXR0b24pIHtcbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b24uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5EUkFXRVJfQlROKTtcbiAgICAgICAgICAgICAgICB2YXIgZHJhd2VyQnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JQ09OKTtcbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b25JY29uLmlubmVySFRNTCA9IHRoaXMuQ29uc3RhbnRfLk1FTlVfSUNPTjtcbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b24uYXBwZW5kQ2hpbGQoZHJhd2VyQnV0dG9uSWNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLk9OX0xBUkdFX1NDUkVFTikpIHtcbiAgICAgICAgICAgICAgICAvL0lmIGRyYXdlciBoYXMgT05fTEFSR0VfU0NSRUVOIGNsYXNzIHRoZW4gYWRkIGl0IHRvIHRoZSBkcmF3ZXIgdG9nZ2xlIGJ1dHRvbiBhcyB3ZWxsLlxuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uT05fTEFSR0VfU0NSRUVOKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLk9OX1NNQUxMX1NDUkVFTikpIHtcbiAgICAgICAgICAgICAgICAvL0lmIGRyYXdlciBoYXMgT05fU01BTExfU0NSRUVOIGNsYXNzIHRoZW4gYWRkIGl0IHRvIHRoZSBkcmF3ZXIgdG9nZ2xlIGJ1dHRvbiBhcyB3ZWxsLlxuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uT05fU01BTExfU0NSRUVOKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyYXdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZHJhd2VyVG9nZ2xlSGFuZGxlcl8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBkcmF3ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuZHJhd2VyVG9nZ2xlSGFuZGxlcl8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAvLyBBZGQgYSBjbGFzcyBpZiB0aGUgbGF5b3V0IGhhcyBhIGRyYXdlciwgZm9yIGFsdGVyaW5nIHRoZSBsZWZ0IHBhZGRpbmcuXG4gICAgICAgICAgICAvLyBBZGRzIHRoZSBIQVNfRFJBV0VSIHRvIHRoZSBlbGVtZW50cyBzaW5jZSB0aGlzLmhlYWRlcl8gbWF5IG9yIG1heVxuICAgICAgICAgICAgLy8gbm90IGJlIHByZXNlbnQuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5IQVNfRFJBV0VSKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBmaXhlZCBoZWFkZXIsIGFkZCB0aGUgYnV0dG9uIHRvIHRoZSBoZWFkZXIgcmF0aGVyIHRoYW5cbiAgICAgICAgICAgIC8vIHRoZSBsYXlvdXQuXG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5GSVhFRF9IRUFERVIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmluc2VydEJlZm9yZShkcmF3ZXJCdXR0b24sIHRoaXMuaGVhZGVyXy5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5pbnNlcnRCZWZvcmUoZHJhd2VyQnV0dG9uLCB0aGlzLmNvbnRlbnRfKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvYmZ1c2NhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBvYmZ1c2NhdG9yLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5PQkZVU0NBVE9SKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQob2JmdXNjYXRvcik7XG4gICAgICAgICAgICBvYmZ1c2NhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kcmF3ZXJUb2dnbGVIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMub2JmdXNjYXRvcl8gPSBvYmZ1c2NhdG9yO1xuICAgICAgICAgICAgdGhpcy5kcmF3ZXJfLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleWJvYXJkRXZlbnRIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBLZWVwIGFuIGV5ZSBvbiBzY3JlZW4gc2l6ZSwgYW5kIGFkZC9yZW1vdmUgYXV4aWxpYXJ5IGNsYXNzIGZvciBzdHlsaW5nXG4gICAgICAgIC8vIG9mIHNtYWxsIHNjcmVlbnMuXG4gICAgICAgIHRoaXMuc2NyZWVuU2l6ZU1lZGlhUXVlcnlfID0gd2luZG93Lm1hdGNoTWVkaWEodGhpcy5Db25zdGFudF8uTUFYX1dJRFRIKTtcbiAgICAgICAgdGhpcy5zY3JlZW5TaXplTWVkaWFRdWVyeV8uYWRkTGlzdGVuZXIodGhpcy5zY3JlZW5TaXplSGFuZGxlcl8uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc2NyZWVuU2l6ZUhhbmRsZXJfKCk7XG4gICAgICAgIC8vIEluaXRpYWxpemUgdGFicywgaWYgYW55LlxuICAgICAgICBpZiAodGhpcy5oZWFkZXJfICYmIHRoaXMudGFiQmFyXykge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSEFTX1RBQlMpO1xuICAgICAgICAgICAgdmFyIHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UQUJfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyXy5pbnNlcnRCZWZvcmUodGFiQ29udGFpbmVyLCB0aGlzLnRhYkJhcl8pO1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJfLnJlbW92ZUNoaWxkKHRoaXMudGFiQmFyXyk7XG4gICAgICAgICAgICB2YXIgbGVmdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGVmdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVEFCX0JBUl9CVVRUT04pO1xuICAgICAgICAgICAgbGVmdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVEFCX0JBUl9MRUZUX0JVVFRPTik7XG4gICAgICAgICAgICB2YXIgbGVmdEJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICBsZWZ0QnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSUNPTik7XG4gICAgICAgICAgICBsZWZ0QnV0dG9uSWNvbi50ZXh0Q29udGVudCA9IHRoaXMuQ29uc3RhbnRfLkNIRVZST05fTEVGVDtcbiAgICAgICAgICAgIGxlZnRCdXR0b24uYXBwZW5kQ2hpbGQobGVmdEJ1dHRvbkljb24pO1xuICAgICAgICAgICAgbGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkJhcl8uc2Nyb2xsTGVmdCAtPSB0aGlzLkNvbnN0YW50Xy5UQUJfU0NST0xMX1BJWEVMUztcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB2YXIgcmlnaHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJpZ2h0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UQUJfQkFSX0JVVFRPTik7XG4gICAgICAgICAgICByaWdodEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVEFCX0JBUl9SSUdIVF9CVVRUT04pO1xuICAgICAgICAgICAgdmFyIHJpZ2h0QnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIHJpZ2h0QnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSUNPTik7XG4gICAgICAgICAgICByaWdodEJ1dHRvbkljb24udGV4dENvbnRlbnQgPSB0aGlzLkNvbnN0YW50Xy5DSEVWUk9OX1JJR0hUO1xuICAgICAgICAgICAgcmlnaHRCdXR0b24uYXBwZW5kQ2hpbGQocmlnaHRCdXR0b25JY29uKTtcbiAgICAgICAgICAgIHJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiQmFyXy5zY3JvbGxMZWZ0ICs9IHRoaXMuQ29uc3RhbnRfLlRBQl9TQ1JPTExfUElYRUxTO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0QnV0dG9uKTtcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRhYkJhcl8pO1xuICAgICAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0QnV0dG9uKTtcbiAgICAgICAgICAgIC8vIEFkZCBhbmQgcmVtb3ZlIHRhYiBidXR0b25zIGRlcGVuZGluZyBvbiBzY3JvbGwgcG9zaXRpb24gYW5kIHRvdGFsXG4gICAgICAgICAgICAvLyB3aW5kb3cgc2l6ZS5cbiAgICAgICAgICAgIHZhciB0YWJVcGRhdGVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYkJhcl8uc2Nyb2xsTGVmdCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJCYXJfLnNjcm9sbExlZnQgPCB0aGlzLnRhYkJhcl8uc2Nyb2xsV2lkdGggLSB0aGlzLnRhYkJhcl8ub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy50YWJCYXJfLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRhYlVwZGF0ZUhhbmRsZXIpO1xuICAgICAgICAgICAgdGFiVXBkYXRlSGFuZGxlcigpO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRhYnMgd2hlbiB0aGUgd2luZG93IHJlc2l6ZXMuXG4gICAgICAgICAgICB2YXIgd2luZG93UmVzaXplSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBVc2UgdGltZW91dHMgdG8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgaGFwcGVuIHRvbyBvZnRlbi5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNpemVUaW1lb3V0SWRfKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXRJZF8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZVRpbWVvdXRJZF8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFiVXBkYXRlSGFuZGxlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZVRpbWVvdXRJZF8gPSBudWxsO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcy5Db25zdGFudF8uUkVTSVpFX1RJTUVPVVQpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHdpbmRvd1Jlc2l6ZUhhbmRsZXIpO1xuICAgICAgICAgICAgaWYgKHRoaXMudGFiQmFyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5KU19SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiQmFyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0lHTk9SRV9FVkVOVFMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2VsZWN0IGVsZW1lbnQgdGFicywgZG9jdW1lbnQgcGFuZWxzXG4gICAgICAgICAgICB2YXIgdGFicyA9IHRoaXMudGFiQmFyXy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uVEFCKTtcbiAgICAgICAgICAgIHZhciBwYW5lbHMgPSB0aGlzLmNvbnRlbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5QQU5FTCk7XG4gICAgICAgICAgICAvLyBDcmVhdGUgbmV3IHRhYnMgZm9yIGVhY2ggdGFiIGVsZW1lbnRcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG5ldyBNYXRlcmlhbExheW91dFRhYih0YWJzW2ldLCB0YWJzLCBwYW5lbHMsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1VQR1JBREVEKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBhbiBpbmRpdmlkdWFsIHRhYi5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhYiBUaGUgSFRNTCBlbGVtZW50IGZvciB0aGUgdGFiLlxuICAgKiBAcGFyYW0geyFBcnJheTxIVE1MRWxlbWVudD59IHRhYnMgQXJyYXkgd2l0aCBIVE1MIGVsZW1lbnRzIGZvciBhbGwgdGFicy5cbiAgICogQHBhcmFtIHshQXJyYXk8SFRNTEVsZW1lbnQ+fSBwYW5lbHMgQXJyYXkgd2l0aCBIVE1MIGVsZW1lbnRzIGZvciBhbGwgcGFuZWxzLlxuICAgKiBAcGFyYW0ge01hdGVyaWFsTGF5b3V0fSBsYXlvdXQgVGhlIE1hdGVyaWFsTGF5b3V0IG9iamVjdCB0aGF0IG93bnMgdGhlIHRhYi5cbiAgICovXG5mdW5jdGlvbiBNYXRlcmlhbExheW91dFRhYih0YWIsIHRhYnMsIHBhbmVscywgbGF5b3V0KSB7XG4gICAgLyoqXG4gICAgICogQXV4aWxpYXJ5IG1ldGhvZCB0byBwcm9ncmFtbWF0aWNhbGx5IHNlbGVjdCBhIHRhYiBpbiB0aGUgVUkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2VsZWN0VGFiKCkge1xuICAgICAgICB2YXIgaHJlZiA9IHRhYi5ocmVmLnNwbGl0KCcjJylbMV07XG4gICAgICAgIHZhciBwYW5lbCA9IGxheW91dC5jb250ZW50Xy5xdWVyeVNlbGVjdG9yKCcjJyArIGhyZWYpO1xuICAgICAgICBsYXlvdXQucmVzZXRUYWJTdGF0ZV8odGFicyk7XG4gICAgICAgIGxheW91dC5yZXNldFBhbmVsU3RhdGVfKHBhbmVscyk7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKGxheW91dC5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKGxheW91dC5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgIH1cbiAgICBpZiAobGF5b3V0LnRhYkJhcl8uY2xhc3NMaXN0LmNvbnRhaW5zKGxheW91dC5Dc3NDbGFzc2VzXy5KU19SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICB2YXIgcmlwcGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChsYXlvdXQuQ3NzQ2xhc3Nlc18uUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGxheW91dC5Dc3NDbGFzc2VzXy5KU19SSVBQTEVfRUZGRUNUKTtcbiAgICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQobGF5b3V0LkNzc0NsYXNzZXNfLlJJUFBMRSk7XG4gICAgICAgIHJpcHBsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICB0YWIuYXBwZW5kQ2hpbGQocmlwcGxlQ29udGFpbmVyKTtcbiAgICB9XG4gICAgaWYgKCFsYXlvdXQudGFiQmFyXy5jbGFzc0xpc3QuY29udGFpbnMobGF5b3V0LkNzc0NsYXNzZXNfLlRBQl9NQU5VQUxfU1dJVENIKSkge1xuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHRhYi5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RUYWIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRhYi5zaG93ID0gc2VsZWN0VGFiO1xufVxud2luZG93WydNYXRlcmlhbExheW91dFRhYiddID0gTWF0ZXJpYWxMYXlvdXRUYWI7XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxMYXlvdXQsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsTGF5b3V0JyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1sYXlvdXQnXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGF5b3V0LmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQSBjb21wb25lbnQgaGFuZGxlciBpbnRlcmZhY2UgdXNpbmcgdGhlIHJldmVhbGluZyBtb2R1bGUgZGVzaWduIHBhdHRlcm4uXG4gKiBNb3JlIGRldGFpbHMgb24gdGhpcyBkZXNpZ24gcGF0dGVybiBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICpcbiAqIEBhdXRob3IgSmFzb24gTWF5ZXMuXG4gKi9cbi8qIGV4cG9ydGVkIGNvbXBvbmVudEhhbmRsZXIgKi9cblxuLy8gUHJlLWRlZmluaW5nIHRoZSBjb21wb25lbnRIYW5kbGVyIGludGVyZmFjZSwgZm9yIGNsb3N1cmUgZG9jdW1lbnRhdGlvbiBhbmRcbi8vIHN0YXRpYyB2ZXJpZmljYXRpb24uXG52YXIgY29tcG9uZW50SGFuZGxlciA9IHtcbiAgLyoqXG4gICAqIFNlYXJjaGVzIGV4aXN0aW5nIERPTSBmb3IgZWxlbWVudHMgb2Ygb3VyIGNvbXBvbmVudCB0eXBlIGFuZCB1cGdyYWRlcyB0aGVtXG4gICAqIGlmIHRoZXkgaGF2ZSBub3QgYWxyZWFkeSBiZWVuIHVwZ3JhZGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdEpzQ2xhc3MgdGhlIHByb2dyYW1hdGljIG5hbWUgb2YgdGhlIGVsZW1lbnQgY2xhc3Mgd2VcbiAgICogbmVlZCB0byBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0Q3NzQ2xhc3MgdGhlIG5hbWUgb2YgdGhlIENTUyBjbGFzcyBlbGVtZW50cyBvZiB0aGlzXG4gICAqIHR5cGUgd2lsbCBoYXZlLlxuICAgKi9cbiAgdXBncmFkZURvbTogZnVuY3Rpb24ob3B0SnNDbGFzcywgb3B0Q3NzQ2xhc3MpIHt9LFxuICAvKipcbiAgICogVXBncmFkZXMgYSBzcGVjaWZpYyBlbGVtZW50IHJhdGhlciB0aGFuIGFsbCBpbiB0aGUgRE9NLlxuICAgKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHdlIHdpc2ggdG8gdXBncmFkZS5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRKc0NsYXNzIE9wdGlvbmFsIG5hbWUgb2YgdGhlIGNsYXNzIHdlIHdhbnQgdG8gdXBncmFkZVxuICAgKiB0aGUgZWxlbWVudCB0by5cbiAgICovXG4gIHVwZ3JhZGVFbGVtZW50OiBmdW5jdGlvbihlbGVtZW50LCBvcHRKc0NsYXNzKSB7fSxcbiAgLyoqXG4gICAqIFVwZ3JhZGVzIGEgc3BlY2lmaWMgbGlzdCBvZiBlbGVtZW50cyByYXRoZXIgdGhhbiBhbGwgaW4gdGhlIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHshRWxlbWVudHwhQXJyYXk8IUVsZW1lbnQ+fCFOb2RlTGlzdHwhSFRNTENvbGxlY3Rpb259IGVsZW1lbnRzXG4gICAqIFRoZSBlbGVtZW50cyB3ZSB3aXNoIHRvIHVwZ3JhZGUuXG4gICAqL1xuICB1cGdyYWRlRWxlbWVudHM6IGZ1bmN0aW9uKGVsZW1lbnRzKSB7fSxcbiAgLyoqXG4gICAqIFVwZ3JhZGVzIGFsbCByZWdpc3RlcmVkIGNvbXBvbmVudHMgZm91bmQgaW4gdGhlIGN1cnJlbnQgRE9NLiBUaGlzIGlzXG4gICAqIGF1dG9tYXRpY2FsbHkgY2FsbGVkIG9uIHdpbmRvdyBsb2FkLlxuICAgKi9cbiAgdXBncmFkZUFsbFJlZ2lzdGVyZWQ6IGZ1bmN0aW9uKCkge30sXG4gIC8qKlxuICAgKiBBbGxvd3MgdXNlciB0byBiZSBhbGVydGVkIHRvIGFueSB1cGdyYWRlcyB0aGF0IGFyZSBwZXJmb3JtZWQgZm9yIGEgZ2l2ZW5cbiAgICogY29tcG9uZW50IHR5cGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGpzQ2xhc3MgVGhlIGNsYXNzIG5hbWUgb2YgdGhlIE1ETCBjb21wb25lbnQgd2Ugd2lzaFxuICAgKiB0byBob29rIGludG8gZm9yIGFueSB1cGdyYWRlcyBwZXJmb3JtZWQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUhUTUxFbGVtZW50KX0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgdXBvbiBhblxuICAgKiB1cGdyYWRlLiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBleHBlY3QgMSBwYXJhbWV0ZXIgLSB0aGUgSFRNTEVsZW1lbnQgd2hpY2hcbiAgICogZ290IHVwZ3JhZGVkLlxuICAgKi9cbiAgcmVnaXN0ZXJVcGdyYWRlZENhbGxiYWNrOiBmdW5jdGlvbihqc0NsYXNzLCBjYWxsYmFjaykge30sXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjbGFzcyBmb3IgZnV0dXJlIHVzZSBhbmQgYXR0ZW1wdHMgdG8gdXBncmFkZSBleGlzdGluZyBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7Y29tcG9uZW50SGFuZGxlci5Db21wb25lbnRDb25maWdQdWJsaWN9IGNvbmZpZyB0aGUgcmVnaXN0cmF0aW9uIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIHJlZ2lzdGVyOiBmdW5jdGlvbihjb25maWcpIHt9LFxuICAvKipcbiAgICogRG93bmdyYWRlIGVpdGhlciBhIGdpdmVuIG5vZGUsIGFuIGFycmF5IG9mIG5vZGVzLCBvciBhIE5vZGVMaXN0LlxuICAgKlxuICAgKiBAcGFyYW0geyFOb2RlfCFBcnJheTwhTm9kZT58IU5vZGVMaXN0fSBub2Rlc1xuICAgKi9cbiAgZG93bmdyYWRlRWxlbWVudHM6IGZ1bmN0aW9uKG5vZGVzKSB7fVxufTtcblxuY29tcG9uZW50SGFuZGxlciA9IChmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKiBAdHlwZSB7IUFycmF5PGNvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50Q29uZmlnPn0gKi9cbiAgdmFyIHJlZ2lzdGVyZWRDb21wb25lbnRzXyA9IFtdO1xuXG4gIC8qKiBAdHlwZSB7IUFycmF5PGNvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50Pn0gKi9cbiAgdmFyIGNyZWF0ZWRDb21wb25lbnRzXyA9IFtdO1xuXG4gIHZhciBjb21wb25lbnRDb25maWdQcm9wZXJ0eV8gPSAnbWRsQ29tcG9uZW50Q29uZmlnSW50ZXJuYWxfJztcblxuICAvKipcbiAgICogU2VhcmNoZXMgcmVnaXN0ZXJlZCBjb21wb25lbnRzIGZvciBhIGNsYXNzIHdlIGFyZSBpbnRlcmVzdGVkIGluIHVzaW5nLlxuICAgKiBPcHRpb25hbGx5IHJlcGxhY2VzIGEgbWF0Y2ggd2l0aCBwYXNzZWQgb2JqZWN0IGlmIHNwZWNpZmllZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgYSBjbGFzcyB3ZSB3YW50IHRvIHVzZS5cbiAgICogQHBhcmFtIHtjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZz19IG9wdFJlcGxhY2UgT3B0aW9uYWwgb2JqZWN0IHRvIHJlcGxhY2UgbWF0Y2ggd2l0aC5cbiAgICogQHJldHVybiB7IU9iamVjdHxib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gZmluZFJlZ2lzdGVyZWRDbGFzc18obmFtZSwgb3B0UmVwbGFjZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZENvbXBvbmVudHNfLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVnaXN0ZXJlZENvbXBvbmVudHNfW2ldLmNsYXNzTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIG9wdFJlcGxhY2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHNfW2ldID0gb3B0UmVwbGFjZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJlZENvbXBvbmVudHNfW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgY2xhc3NOYW1lcyBvZiB0aGUgdXBncmFkZWQgY2xhc3NlcyBvbiB0aGUgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBmZXRjaCBkYXRhIGZyb20uXG4gICAqIEByZXR1cm4geyFBcnJheTxzdHJpbmc+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VXBncmFkZWRMaXN0T2ZFbGVtZW50XyhlbGVtZW50KSB7XG4gICAgdmFyIGRhdGFVcGdyYWRlZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXVwZ3JhZGVkJyk7XG4gICAgLy8gVXNlIGBbJyddYCBhcyBkZWZhdWx0IHZhbHVlIHRvIGNvbmZvcm0gdGhlIGAsbmFtZSxuYW1lLi4uYCBzdHlsZS5cbiAgICByZXR1cm4gZGF0YVVwZ3JhZGVkID09PSBudWxsID8gWycnXSA6IGRhdGFVcGdyYWRlZC5zcGxpdCgnLCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIHVwZ3JhZGVkIGZvciB0aGUgZ2l2ZW5cbiAgICogY2xhc3MuXG4gICAqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgd2Ugd2FudCB0byBjaGVjay5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGpzQ2xhc3MgVGhlIGNsYXNzIHRvIGNoZWNrIGZvci5cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBpc0VsZW1lbnRVcGdyYWRlZF8oZWxlbWVudCwganNDbGFzcykge1xuICAgIHZhciB1cGdyYWRlZExpc3QgPSBnZXRVcGdyYWRlZExpc3RPZkVsZW1lbnRfKGVsZW1lbnQpO1xuICAgIHJldHVybiB1cGdyYWRlZExpc3QuaW5kZXhPZihqc0NsYXNzKSAhPT0gLTE7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGV2ZW50IG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBUaGUgdHlwZSBuYW1lIG9mIHRoZSBldmVudC5cbiAgICogQHBhcmFtIHtib29sZWFufSBidWJibGVzIFdoZXRoZXIgdGhlIGV2ZW50IHNob3VsZCBidWJibGUgdXAgdGhlIERPTS5cbiAgICogQHBhcmFtIHtib29sZWFufSBjYW5jZWxhYmxlIFdoZXRoZXIgdGhlIGV2ZW50IGNhbiBiZSBjYW5jZWxlZC5cbiAgICogQHJldHVybnMgeyFFdmVudH1cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50XyhldmVudFR5cGUsIGJ1YmJsZXMsIGNhbmNlbGFibGUpIHtcbiAgICBpZiAoJ0N1c3RvbUV2ZW50JyBpbiB3aW5kb3cgJiYgdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG5ldyBDdXN0b21FdmVudChldmVudFR5cGUsIHtcbiAgICAgICAgYnViYmxlczogYnViYmxlcyxcbiAgICAgICAgY2FuY2VsYWJsZTogY2FuY2VsYWJsZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudHMnKTtcbiAgICAgIGV2LmluaXRFdmVudChldmVudFR5cGUsIGJ1YmJsZXMsIGNhbmNlbGFibGUpO1xuICAgICAgcmV0dXJuIGV2O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBleGlzdGluZyBET00gZm9yIGVsZW1lbnRzIG9mIG91ciBjb21wb25lbnQgdHlwZSBhbmQgdXBncmFkZXMgdGhlbVxuICAgKiBpZiB0aGV5IGhhdmUgbm90IGFscmVhZHkgYmVlbiB1cGdyYWRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRKc0NsYXNzIHRoZSBwcm9ncmFtYXRpYyBuYW1lIG9mIHRoZSBlbGVtZW50IGNsYXNzIHdlXG4gICAqIG5lZWQgdG8gY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdENzc0NsYXNzIHRoZSBuYW1lIG9mIHRoZSBDU1MgY2xhc3MgZWxlbWVudHMgb2YgdGhpc1xuICAgKiB0eXBlIHdpbGwgaGF2ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHVwZ3JhZGVEb21JbnRlcm5hbChvcHRKc0NsYXNzLCBvcHRDc3NDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygb3B0SnNDbGFzcyA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIG9wdENzc0NsYXNzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkQ29tcG9uZW50c18ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdXBncmFkZURvbUludGVybmFsKHJlZ2lzdGVyZWRDb21wb25lbnRzX1tpXS5jbGFzc05hbWUsXG4gICAgICAgICAgICByZWdpc3RlcmVkQ29tcG9uZW50c19baV0uY3NzQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIganNDbGFzcyA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAob3B0SnNDbGFzcyk7XG4gICAgICBpZiAodHlwZW9mIG9wdENzc0NsYXNzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgcmVnaXN0ZXJlZENsYXNzID0gZmluZFJlZ2lzdGVyZWRDbGFzc18oanNDbGFzcyk7XG4gICAgICAgIGlmIChyZWdpc3RlcmVkQ2xhc3MpIHtcbiAgICAgICAgICBvcHRDc3NDbGFzcyA9IHJlZ2lzdGVyZWRDbGFzcy5jc3NDbGFzcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIG9wdENzc0NsYXNzKTtcbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZWxlbWVudHMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgdXBncmFkZUVsZW1lbnRJbnRlcm5hbChlbGVtZW50c1tuXSwganNDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZ3JhZGVzIGEgc3BlY2lmaWMgZWxlbWVudCByYXRoZXIgdGhhbiBhbGwgaW4gdGhlIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB3ZSB3aXNoIHRvIHVwZ3JhZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0SnNDbGFzcyBPcHRpb25hbCBuYW1lIG9mIHRoZSBjbGFzcyB3ZSB3YW50IHRvIHVwZ3JhZGVcbiAgICogdGhlIGVsZW1lbnQgdG8uXG4gICAqL1xuICBmdW5jdGlvbiB1cGdyYWRlRWxlbWVudEludGVybmFsKGVsZW1lbnQsIG9wdEpzQ2xhc3MpIHtcbiAgICAvLyBWZXJpZnkgYXJndW1lbnQgdHlwZS5cbiAgICBpZiAoISh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgcHJvdmlkZWQgdG8gdXBncmFkZSBNREwgZWxlbWVudC4nKTtcbiAgICB9XG4gICAgLy8gQWxsb3cgdXBncmFkZSB0byBiZSBjYW5jZWxlZCBieSBjYW5jZWxpbmcgZW1pdHRlZCBldmVudC5cbiAgICB2YXIgdXBncmFkaW5nRXYgPSBjcmVhdGVFdmVudF8oJ21kbC1jb21wb25lbnR1cGdyYWRpbmcnLCB0cnVlLCB0cnVlKTtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQodXBncmFkaW5nRXYpO1xuICAgIGlmICh1cGdyYWRpbmdFdi5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHVwZ3JhZGVkTGlzdCA9IGdldFVwZ3JhZGVkTGlzdE9mRWxlbWVudF8oZWxlbWVudCk7XG4gICAgdmFyIGNsYXNzZXNUb1VwZ3JhZGUgPSBbXTtcbiAgICAvLyBJZiBqc0NsYXNzIGlzIG5vdCBwcm92aWRlZCBzY2FuIHRoZSByZWdpc3RlcmVkIGNvbXBvbmVudHMgdG8gZmluZCB0aGVcbiAgICAvLyBvbmVzIG1hdGNoaW5nIHRoZSBlbGVtZW50J3MgQ1NTIGNsYXNzTGlzdC5cbiAgICBpZiAoIW9wdEpzQ2xhc3MpIHtcbiAgICAgIHZhciBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzXy5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBvbmVudCkge1xuICAgICAgICAvLyBNYXRjaCBDU1MgJiBOb3QgdG8gYmUgdXBncmFkZWQgJiBOb3QgdXBncmFkZWQuXG4gICAgICAgIGlmIChjbGFzc0xpc3QuY29udGFpbnMoY29tcG9uZW50LmNzc0NsYXNzKSAmJlxuICAgICAgICAgICAgY2xhc3Nlc1RvVXBncmFkZS5pbmRleE9mKGNvbXBvbmVudCkgPT09IC0xICYmXG4gICAgICAgICAgICAhaXNFbGVtZW50VXBncmFkZWRfKGVsZW1lbnQsIGNvbXBvbmVudC5jbGFzc05hbWUpKSB7XG4gICAgICAgICAgY2xhc3Nlc1RvVXBncmFkZS5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIWlzRWxlbWVudFVwZ3JhZGVkXyhlbGVtZW50LCBvcHRKc0NsYXNzKSkge1xuICAgICAgY2xhc3Nlc1RvVXBncmFkZS5wdXNoKGZpbmRSZWdpc3RlcmVkQ2xhc3NfKG9wdEpzQ2xhc3MpKTtcbiAgICB9XG5cbiAgICAvLyBVcGdyYWRlIHRoZSBlbGVtZW50IGZvciBlYWNoIGNsYXNzZXMuXG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBjbGFzc2VzVG9VcGdyYWRlLmxlbmd0aCwgcmVnaXN0ZXJlZENsYXNzOyBpIDwgbjsgaSsrKSB7XG4gICAgICByZWdpc3RlcmVkQ2xhc3MgPSBjbGFzc2VzVG9VcGdyYWRlW2ldO1xuICAgICAgaWYgKHJlZ2lzdGVyZWRDbGFzcykge1xuICAgICAgICAvLyBNYXJrIGVsZW1lbnQgYXMgdXBncmFkZWQuXG4gICAgICAgIHVwZ3JhZGVkTGlzdC5wdXNoKHJlZ2lzdGVyZWRDbGFzcy5jbGFzc05hbWUpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS11cGdyYWRlZCcsIHVwZ3JhZGVkTGlzdC5qb2luKCcsJykpO1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgcmVnaXN0ZXJlZENsYXNzLmNsYXNzQ29uc3RydWN0b3IoZWxlbWVudCk7XG4gICAgICAgIGluc3RhbmNlW2NvbXBvbmVudENvbmZpZ1Byb3BlcnR5X10gPSByZWdpc3RlcmVkQ2xhc3M7XG4gICAgICAgIGNyZWF0ZWRDb21wb25lbnRzXy5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgLy8gQ2FsbCBhbnkgY2FsbGJhY2tzIHRoZSB1c2VyIGhhcyByZWdpc3RlcmVkIHdpdGggdGhpcyBjb21wb25lbnQgdHlwZS5cbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIG0gPSByZWdpc3RlcmVkQ2xhc3MuY2FsbGJhY2tzLmxlbmd0aDsgaiA8IG07IGorKykge1xuICAgICAgICAgIHJlZ2lzdGVyZWRDbGFzcy5jYWxsYmFja3Nbal0oZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVnaXN0ZXJlZENsYXNzLndpZGdldCkge1xuICAgICAgICAgIC8vIEFzc2lnbiBwZXIgZWxlbWVudCBpbnN0YW5jZSBmb3IgY29udHJvbCBvdmVyIEFQSVxuICAgICAgICAgIGVsZW1lbnRbcmVnaXN0ZXJlZENsYXNzLmNsYXNzTmFtZV0gPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdVbmFibGUgdG8gZmluZCBhIHJlZ2lzdGVyZWQgY29tcG9uZW50IGZvciB0aGUgZ2l2ZW4gY2xhc3MuJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciB1cGdyYWRlZEV2ID0gY3JlYXRlRXZlbnRfKCdtZGwtY29tcG9uZW50dXBncmFkZWQnLCB0cnVlLCBmYWxzZSk7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQodXBncmFkZWRFdik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZ3JhZGVzIGEgc3BlY2lmaWMgbGlzdCBvZiBlbGVtZW50cyByYXRoZXIgdGhhbiBhbGwgaW4gdGhlIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHshRWxlbWVudHwhQXJyYXk8IUVsZW1lbnQ+fCFOb2RlTGlzdHwhSFRNTENvbGxlY3Rpb259IGVsZW1lbnRzXG4gICAqIFRoZSBlbGVtZW50cyB3ZSB3aXNoIHRvIHVwZ3JhZGUuXG4gICAqL1xuICBmdW5jdGlvbiB1cGdyYWRlRWxlbWVudHNJbnRlcm5hbChlbGVtZW50cykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50cykpIHtcbiAgICAgIGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudHMgPSBbZWxlbWVudHNdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cyk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBuID0gZWxlbWVudHMubGVuZ3RoLCBlbGVtZW50OyBpIDwgbjsgaSsrKSB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHVwZ3JhZGVFbGVtZW50SW50ZXJuYWwoZWxlbWVudCk7XG4gICAgICAgIGlmIChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB1cGdyYWRlRWxlbWVudHNJbnRlcm5hbChlbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjbGFzcyBmb3IgZnV0dXJlIHVzZSBhbmQgYXR0ZW1wdHMgdG8gdXBncmFkZSBleGlzdGluZyBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7Y29tcG9uZW50SGFuZGxlci5Db21wb25lbnRDb25maWdQdWJsaWN9IGNvbmZpZ1xuICAgKi9cbiAgZnVuY3Rpb24gcmVnaXN0ZXJJbnRlcm5hbChjb25maWcpIHtcbiAgICAvLyBJbiBvcmRlciB0byBzdXBwb3J0IGJvdGggQ2xvc3VyZS1jb21waWxlZCBhbmQgdW5jb21waWxlZCBjb2RlIGFjY2Vzc2luZ1xuICAgIC8vIHRoaXMgbWV0aG9kLCB3ZSBuZWVkIHRvIGFsbG93IGZvciBib3RoIHRoZSBkb3QgYW5kIGFycmF5IHN5bnRheCBmb3JcbiAgICAvLyBwcm9wZXJ0eSBhY2Nlc3MuIFlvdSdsbCB0aGVyZWZvcmUgc2VlIHRoZSBgZm9vLmJhciB8fCBmb29bJ2JhciddYFxuICAgIC8vIHBhdHRlcm4gcmVwZWF0ZWQgYWNyb3NzIHRoaXMgbWV0aG9kLlxuICAgIHZhciB3aWRnZXRNaXNzaW5nID0gKHR5cGVvZiBjb25maWcud2lkZ2V0ID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB0eXBlb2YgY29uZmlnWyd3aWRnZXQnXSA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIHZhciB3aWRnZXQgPSB0cnVlO1xuXG4gICAgaWYgKCF3aWRnZXRNaXNzaW5nKSB7XG4gICAgICB3aWRnZXQgPSBjb25maWcud2lkZ2V0IHx8IGNvbmZpZ1snd2lkZ2V0J107XG4gICAgfVxuXG4gICAgdmFyIG5ld0NvbmZpZyA9IC8qKiBAdHlwZSB7Y29tcG9uZW50SGFuZGxlci5Db21wb25lbnRDb25maWd9ICovICh7XG4gICAgICBjbGFzc0NvbnN0cnVjdG9yOiBjb25maWcuY29uc3RydWN0b3IgfHwgY29uZmlnWydjb25zdHJ1Y3RvciddLFxuICAgICAgY2xhc3NOYW1lOiBjb25maWcuY2xhc3NBc1N0cmluZyB8fCBjb25maWdbJ2NsYXNzQXNTdHJpbmcnXSxcbiAgICAgIGNzc0NsYXNzOiBjb25maWcuY3NzQ2xhc3MgfHwgY29uZmlnWydjc3NDbGFzcyddLFxuICAgICAgd2lkZ2V0OiB3aWRnZXQsXG4gICAgICBjYWxsYmFja3M6IFtdXG4gICAgfSk7XG5cbiAgICByZWdpc3RlcmVkQ29tcG9uZW50c18uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5jc3NDbGFzcyA9PT0gbmV3Q29uZmlnLmNzc0NsYXNzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHByb3ZpZGVkIGNzc0NsYXNzIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZDogJyArIGl0ZW0uY3NzQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0uY2xhc3NOYW1lID09PSBuZXdDb25maWcuY2xhc3NOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHByb3ZpZGVkIGNsYXNzTmFtZSBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb25maWcuY29uc3RydWN0b3IucHJvdG90eXBlXG4gICAgICAgIC5oYXNPd25Qcm9wZXJ0eShjb21wb25lbnRDb25maWdQcm9wZXJ0eV8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ01ETCBjb21wb25lbnQgY2xhc3NlcyBtdXN0IG5vdCBoYXZlICcgKyBjb21wb25lbnRDb25maWdQcm9wZXJ0eV8gK1xuICAgICAgICAgICcgZGVmaW5lZCBhcyBhIHByb3BlcnR5LicpO1xuICAgIH1cblxuICAgIHZhciBmb3VuZCA9IGZpbmRSZWdpc3RlcmVkQ2xhc3NfKGNvbmZpZy5jbGFzc0FzU3RyaW5nLCBuZXdDb25maWcpO1xuXG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHNfLnB1c2gobmV3Q29uZmlnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHVzZXIgdG8gYmUgYWxlcnRlZCB0byBhbnkgdXBncmFkZXMgdGhhdCBhcmUgcGVyZm9ybWVkIGZvciBhIGdpdmVuXG4gICAqIGNvbXBvbmVudCB0eXBlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBqc0NsYXNzIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBNREwgY29tcG9uZW50IHdlIHdpc2hcbiAgICogdG8gaG9vayBpbnRvIGZvciBhbnkgdXBncmFkZXMgcGVyZm9ybWVkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFIVE1MRWxlbWVudCl9IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBjYWxsIHVwb24gYW5cbiAgICogdXBncmFkZS4gVGhpcyBmdW5jdGlvbiBzaG91bGQgZXhwZWN0IDEgcGFyYW1ldGVyIC0gdGhlIEhUTUxFbGVtZW50IHdoaWNoXG4gICAqIGdvdCB1cGdyYWRlZC5cbiAgICovXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyVXBncmFkZWRDYWxsYmFja0ludGVybmFsKGpzQ2xhc3MsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlZ0NsYXNzID0gZmluZFJlZ2lzdGVyZWRDbGFzc18oanNDbGFzcyk7XG4gICAgaWYgKHJlZ0NsYXNzKSB7XG4gICAgICByZWdDbGFzcy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZ3JhZGVzIGFsbCByZWdpc3RlcmVkIGNvbXBvbmVudHMgZm91bmQgaW4gdGhlIGN1cnJlbnQgRE9NLiBUaGlzIGlzXG4gICAqIGF1dG9tYXRpY2FsbHkgY2FsbGVkIG9uIHdpbmRvdyBsb2FkLlxuICAgKi9cbiAgZnVuY3Rpb24gdXBncmFkZUFsbFJlZ2lzdGVyZWRJbnRlcm5hbCgpIHtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IHJlZ2lzdGVyZWRDb21wb25lbnRzXy5sZW5ndGg7IG4rKykge1xuICAgICAgdXBncmFkZURvbUludGVybmFsKHJlZ2lzdGVyZWRDb21wb25lbnRzX1tuXS5jbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IGZvciB0aGUgZG93bmdyYWRlIG1ldGhvZC5cbiAgICogRXhlY3V0ZSBpZiBmb3VuZC5cbiAgICogUmVtb3ZlIGNvbXBvbmVudCBmcm9tIGNyZWF0ZWRDb21wb25lbnRzIGxpc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7P2NvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50fSBjb21wb25lbnRcbiAgICovXG4gIGZ1bmN0aW9uIGRlY29uc3RydWN0Q29tcG9uZW50SW50ZXJuYWwoY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgdmFyIGNvbXBvbmVudEluZGV4ID0gY3JlYXRlZENvbXBvbmVudHNfLmluZGV4T2YoY29tcG9uZW50KTtcbiAgICAgIGNyZWF0ZWRDb21wb25lbnRzXy5zcGxpY2UoY29tcG9uZW50SW5kZXgsIDEpO1xuXG4gICAgICB2YXIgdXBncmFkZXMgPSBjb21wb25lbnQuZWxlbWVudF8uZ2V0QXR0cmlidXRlKCdkYXRhLXVwZ3JhZGVkJykuc3BsaXQoJywnKTtcbiAgICAgIHZhciBjb21wb25lbnRQbGFjZSA9IHVwZ3JhZGVzLmluZGV4T2YoY29tcG9uZW50W2NvbXBvbmVudENvbmZpZ1Byb3BlcnR5X10uY2xhc3NBc1N0cmluZyk7XG4gICAgICB1cGdyYWRlcy5zcGxpY2UoY29tcG9uZW50UGxhY2UsIDEpO1xuICAgICAgY29tcG9uZW50LmVsZW1lbnRfLnNldEF0dHJpYnV0ZSgnZGF0YS11cGdyYWRlZCcsIHVwZ3JhZGVzLmpvaW4oJywnKSk7XG5cbiAgICAgIHZhciBldiA9IGNyZWF0ZUV2ZW50XygnbWRsLWNvbXBvbmVudGRvd25ncmFkZWQnLCB0cnVlLCBmYWxzZSk7XG4gICAgICBjb21wb25lbnQuZWxlbWVudF8uZGlzcGF0Y2hFdmVudChldik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERvd25ncmFkZSBlaXRoZXIgYSBnaXZlbiBub2RlLCBhbiBhcnJheSBvZiBub2Rlcywgb3IgYSBOb2RlTGlzdC5cbiAgICpcbiAgICogQHBhcmFtIHshTm9kZXwhQXJyYXk8IU5vZGU+fCFOb2RlTGlzdH0gbm9kZXNcbiAgICovXG4gIGZ1bmN0aW9uIGRvd25ncmFkZU5vZGVzSW50ZXJuYWwobm9kZXMpIHtcbiAgICAvKipcbiAgICAgKiBBdXhpbGlhcnkgZnVuY3Rpb24gdG8gZG93bmdyYWRlIGEgc2luZ2xlIG5vZGUuXG4gICAgICogQHBhcmFtICB7IU5vZGV9IG5vZGUgdGhlIG5vZGUgdG8gYmUgZG93bmdyYWRlZFxuICAgICAqL1xuICAgIHZhciBkb3duZ3JhZGVOb2RlID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgY3JlYXRlZENvbXBvbmVudHNfLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmVsZW1lbnRfID09PSBub2RlO1xuICAgICAgfSkuZm9yRWFjaChkZWNvbnN0cnVjdENvbXBvbmVudEludGVybmFsKTtcbiAgICB9O1xuICAgIGlmIChub2RlcyBpbnN0YW5jZW9mIEFycmF5IHx8IG5vZGVzIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbm9kZXMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgZG93bmdyYWRlTm9kZShub2Rlc1tuXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlcyBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIGRvd25ncmFkZU5vZGUobm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgcHJvdmlkZWQgdG8gZG93bmdyYWRlIE1ETCBub2Rlcy4nKTtcbiAgICB9XG4gIH1cblxuICAvLyBOb3cgcmV0dXJuIHRoZSBmdW5jdGlvbnMgdGhhdCBzaG91bGQgYmUgbWFkZSBwdWJsaWMgd2l0aCB0aGVpciBwdWJsaWNseVxuICAvLyBmYWNpbmcgbmFtZXMuLi5cbiAgcmV0dXJuIHtcbiAgICB1cGdyYWRlRG9tOiB1cGdyYWRlRG9tSW50ZXJuYWwsXG4gICAgdXBncmFkZUVsZW1lbnQ6IHVwZ3JhZGVFbGVtZW50SW50ZXJuYWwsXG4gICAgdXBncmFkZUVsZW1lbnRzOiB1cGdyYWRlRWxlbWVudHNJbnRlcm5hbCxcbiAgICB1cGdyYWRlQWxsUmVnaXN0ZXJlZDogdXBncmFkZUFsbFJlZ2lzdGVyZWRJbnRlcm5hbCxcbiAgICByZWdpc3RlclVwZ3JhZGVkQ2FsbGJhY2s6IHJlZ2lzdGVyVXBncmFkZWRDYWxsYmFja0ludGVybmFsLFxuICAgIHJlZ2lzdGVyOiByZWdpc3RlckludGVybmFsLFxuICAgIGRvd25ncmFkZUVsZW1lbnRzOiBkb3duZ3JhZGVOb2Rlc0ludGVybmFsXG4gIH07XG59KSgpO1xuXG4vKipcbiAqIERlc2NyaWJlcyB0aGUgdHlwZSBvZiBhIHJlZ2lzdGVyZWQgY29tcG9uZW50IHR5cGUgbWFuYWdlZCBieVxuICogY29tcG9uZW50SGFuZGxlci4gUHJvdmlkZWQgZm9yIGJlbmVmaXQgb2YgdGhlIENsb3N1cmUgY29tcGlsZXIuXG4gKlxuICogQHR5cGVkZWYge3tcbiAqICAgY29uc3RydWN0b3I6IEZ1bmN0aW9uLFxuICogICBjbGFzc0FzU3RyaW5nOiBzdHJpbmcsXG4gKiAgIGNzc0NsYXNzOiBzdHJpbmcsXG4gKiAgIHdpZGdldDogKHN0cmluZ3xib29sZWFufHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmNvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50Q29uZmlnUHVibGljOyAgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbi8qKlxuICogRGVzY3JpYmVzIHRoZSB0eXBlIG9mIGEgcmVnaXN0ZXJlZCBjb21wb25lbnQgdHlwZSBtYW5hZ2VkIGJ5XG4gKiBjb21wb25lbnRIYW5kbGVyLiBQcm92aWRlZCBmb3IgYmVuZWZpdCBvZiB0aGUgQ2xvc3VyZSBjb21waWxlci5cbiAqXG4gKiBAdHlwZWRlZiB7e1xuICogICBjb25zdHJ1Y3RvcjogIUZ1bmN0aW9uLFxuICogICBjbGFzc05hbWU6IHN0cmluZyxcbiAqICAgY3NzQ2xhc3M6IHN0cmluZyxcbiAqICAgd2lkZ2V0OiAoc3RyaW5nfGJvb2xlYW4pLFxuICogICBjYWxsYmFja3M6ICFBcnJheTxmdW5jdGlvbighSFRNTEVsZW1lbnQpPlxuICogfX1cbiAqL1xuY29tcG9uZW50SGFuZGxlci5Db21wb25lbnRDb25maWc7ICAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxuLyoqXG4gKiBDcmVhdGVkIGNvbXBvbmVudCAoaS5lLiwgdXBncmFkZWQgZWxlbWVudCkgdHlwZSBhcyBtYW5hZ2VkIGJ5XG4gKiBjb21wb25lbnRIYW5kbGVyLiBQcm92aWRlZCBmb3IgYmVuZWZpdCBvZiB0aGUgQ2xvc3VyZSBjb21waWxlci5cbiAqXG4gKiBAdHlwZWRlZiB7e1xuICogICBlbGVtZW50XzogIUhUTUxFbGVtZW50LFxuICogICBjbGFzc05hbWU6IHN0cmluZyxcbiAqICAgY2xhc3NBc1N0cmluZzogc3RyaW5nLFxuICogICBjc3NDbGFzczogc3RyaW5nLFxuICogICB3aWRnZXQ6IHN0cmluZ1xuICogfX1cbiAqL1xuY29tcG9uZW50SGFuZGxlci5Db21wb25lbnQ7ICAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxuLy8gRXhwb3J0IGFsbCBzeW1ib2xzLCBmb3IgdGhlIGJlbmVmaXQgb2YgQ2xvc3VyZSBjb21waWxlci5cbi8vIE5vIGVmZmVjdCBvbiB1bmNvbXBpbGVkIGNvZGUuXG5jb21wb25lbnRIYW5kbGVyWyd1cGdyYWRlRG9tJ10gPSBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVEb207XG5jb21wb25lbnRIYW5kbGVyWyd1cGdyYWRlRWxlbWVudCddID0gY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudDtcbmNvbXBvbmVudEhhbmRsZXJbJ3VwZ3JhZGVFbGVtZW50cyddID0gY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudHM7XG5jb21wb25lbnRIYW5kbGVyWyd1cGdyYWRlQWxsUmVnaXN0ZXJlZCddID1cbiAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVBbGxSZWdpc3RlcmVkO1xuY29tcG9uZW50SGFuZGxlclsncmVnaXN0ZXJVcGdyYWRlZENhbGxiYWNrJ10gPVxuICAgIGNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXJVcGdyYWRlZENhbGxiYWNrO1xuY29tcG9uZW50SGFuZGxlclsncmVnaXN0ZXInXSA9IGNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXI7XG5jb21wb25lbnRIYW5kbGVyWydkb3duZ3JhZGVFbGVtZW50cyddID0gY29tcG9uZW50SGFuZGxlci5kb3duZ3JhZGVFbGVtZW50cztcbndpbmRvdy5jb21wb25lbnRIYW5kbGVyID0gY29tcG9uZW50SGFuZGxlcjtcbndpbmRvd1snY29tcG9uZW50SGFuZGxlciddID0gY29tcG9uZW50SGFuZGxlcjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIFwiQ3V0dGluZyB0aGUgbXVzdGFyZFwiIHRlc3QuIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBmZWF0dXJlc1xuICAgKiB0ZXN0ZWQsIGFkZHMgYSBtZGwtanMgY2xhc3MgdG8gdGhlIDxodG1sPiBlbGVtZW50LiBJdCB0aGVuIHVwZ3JhZGVzIGFsbCBNRExcbiAgICogY29tcG9uZW50cyByZXF1aXJpbmcgSmF2YVNjcmlwdC5cbiAgICovXG4gIGlmICgnY2xhc3NMaXN0JyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSAmJlxuICAgICAgJ3F1ZXJ5U2VsZWN0b3InIGluIGRvY3VtZW50ICYmXG4gICAgICAnYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93ICYmIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21kbC1qcycpO1xuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUFsbFJlZ2lzdGVyZWQoKTtcbiAgfSBlbHNlIHtcbiAgICAvKipcbiAgICAgKiBEdW1teSBmdW5jdGlvbiB0byBhdm9pZCBKUyBlcnJvcnMuXG4gICAgICovXG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudCA9IGZ1bmN0aW9uKCkge307XG4gICAgLyoqXG4gICAgICogRHVtbXkgZnVuY3Rpb24gdG8gYXZvaWQgSlMgZXJyb3JzLlxuICAgICAqL1xuICAgIGNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIgPSBmdW5jdGlvbigpIHt9O1xuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtZGxDb21wb25lbnRIYW5kbGVyLmpzIiwiLy8gU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vZGFyaXVzL3JlcXVlc3RBbmltYXRpb25GcmFtZS9ibG9iL21hc3Rlci9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanNcbi8vIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvMTU3OTY3MSB3aGljaCBkZXJpdmVkIGZyb21cbi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLlxuLy8gRml4ZXMgZnJvbSBQYXVsIElyaXNoLCBUaW5vIFppamRlbCwgQW5kcmV3IE1hbywgS2xlbWVuIFNsYXZpxI0sIERhcml1cyBCYWNvblxuLy8gTUlUIGxpY2Vuc2VcbmlmICghRGF0ZS5ub3cpIHtcbiAgICAvKipcbiAgICAgKiBEYXRlLm5vdyBwb2x5ZmlsbC5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBjdXJyZW50IERhdGVcbiAgICAgKi9cbiAgICBEYXRlLm5vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH07XG4gICAgRGF0ZVsnbm93J10gPSBEYXRlLm5vdztcbn1cbnZhciB2ZW5kb3JzID0gW1xuICAgICd3ZWJraXQnLFxuICAgICdtb3onXG5dO1xuZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKytpKSB7XG4gICAgdmFyIHZwID0gdmVuZG9yc1tpXTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZwICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2cCArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8IHdpbmRvd1t2cCArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICB3aW5kb3dbJ3JlcXVlc3RBbmltYXRpb25GcmFtZSddID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICB3aW5kb3dbJ2NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG59XG5pZiAoL2lQKGFkfGhvbmV8b2QpLipPUyA2Ly50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSB8fCAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAhd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgdmFyIGxhc3RUaW1lID0gMDtcbiAgICAvKipcbiAgICAgKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwuXG4gICAgICogQHBhcmFtICB7IUZ1bmN0aW9ufSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICovXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIG5leHRUaW1lID0gTWF0aC5tYXgobGFzdFRpbWUgKyAxNiwgbm93KTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobGFzdFRpbWUgPSBuZXh0VGltZSk7XG4gICAgICAgIH0sIG5leHRUaW1lIC0gbm93KTtcbiAgICB9O1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNsZWFyVGltZW91dDtcbiAgICB3aW5kb3dbJ3JlcXVlc3RBbmltYXRpb25GcmFtZSddID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICB3aW5kb3dbJ2NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJBRi5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBCdXR0b24gTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsQnV0dG9uID0gZnVuY3Rpb24gTWF0ZXJpYWxCdXR0b24oZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbEJ1dHRvbiddID0gTWF0ZXJpYWxCdXR0b247XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuQ29uc3RhbnRfID0ge307XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgUklQUExFX0VGRkVDVDogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLWJ1dHRvbl9fcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZSdcbn07XG4vKipcbiAgICogSGFuZGxlIGJsdXIgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLmJsdXJIYW5kbGVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmJsdXIoKTtcbiAgICB9XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogRGlzYWJsZSBidXR0b24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmRpc2FibGVkID0gdHJ1ZTtcbn07XG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGVbJ2Rpc2FibGUnXSA9IE1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5kaXNhYmxlO1xuLyoqXG4gICAqIEVuYWJsZSBidXR0b24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uZGlzYWJsZWQgPSBmYWxzZTtcbn07XG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLmVuYWJsZTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgIHZhciByaXBwbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DT05UQUlORVIpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50XyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRSk7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yaXBwbGVFbGVtZW50Xyk7XG4gICAgICAgICAgICB0aGlzLmJvdW5kUmlwcGxlQmx1ckhhbmRsZXIgPSB0aGlzLmJsdXJIYW5kbGVyXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFJpcHBsZUJsdXJIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQocmlwcGxlQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvdW5kQnV0dG9uQmx1ckhhbmRsZXIgPSB0aGlzLmJsdXJIYW5kbGVyXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kQnV0dG9uQmx1ckhhbmRsZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmJvdW5kQnV0dG9uQmx1ckhhbmRsZXIpO1xuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxCdXR0b24sXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsQnV0dG9uJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1idXR0b24nLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGJ1dHRvbi5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBDaGVja2JveCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsQ2hlY2tib3ggPSBmdW5jdGlvbiBNYXRlcmlhbENoZWNrYm94KGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxDaGVja2JveCddID0gTWF0ZXJpYWxDaGVja2JveDtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLkNvbnN0YW50XyA9IHsgVElOWV9USU1FT1VUOiAwLjAwMSB9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgSU5QVVQ6ICdtZGwtY2hlY2tib3hfX2lucHV0JyxcbiAgICBCT1hfT1VUTElORTogJ21kbC1jaGVja2JveF9fYm94LW91dGxpbmUnLFxuICAgIEZPQ1VTX0hFTFBFUjogJ21kbC1jaGVja2JveF9fZm9jdXMtaGVscGVyJyxcbiAgICBUSUNLX09VVExJTkU6ICdtZGwtY2hlY2tib3hfX3RpY2stb3V0bGluZScsXG4gICAgUklQUExFX0VGRkVDVDogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICBSSVBQTEVfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJyxcbiAgICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLWNoZWNrYm94X19yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEVfQ0VOVEVSOiAnbWRsLXJpcHBsZS0tY2VudGVyJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICBJU19GT0NVU0VEOiAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfQ0hFQ0tFRDogJ2lzLWNoZWNrZWQnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2Ugb2Ygc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLm9uQ2hhbmdlXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGZvY3VzIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLm9uRm9jdXNfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBsb3N0IGZvY3VzIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNldXAuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLm9uTW91c2VVcF8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmJsdXJfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBjbGFzcyB1cGRhdGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2hlY2tEaXNhYmxlZCgpO1xuICAgIHRoaXMuY2hlY2tUb2dnbGVTdGF0ZSgpO1xufTtcbi8qKlxuICAgKiBBZGQgYmx1ci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5ibHVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IHdoeSB0aGVyZSdzIGEgZm9jdXMgZXZlbnQgYmVpbmcgZmlyZWQgYWZ0ZXIgb3VyIGJsdXIsXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gYXZvaWQgdGhpcyBoYWNrLlxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmJsdXIoKTtcbiAgICB9LmJpbmQodGhpcyksIHRoaXMuQ29uc3RhbnRfLlRJTllfVElNRU9VVCk7XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogQ2hlY2sgdGhlIGlucHV0cyB0b2dnbGUgc3RhdGUgYW5kIHVwZGF0ZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlWydjaGVja1RvZ2dsZVN0YXRlJ10gPSBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlO1xuLyoqXG4gICAqIENoZWNrIHRoZSBpbnB1dHMgZGlzYWJsZWQgc3RhdGUgYW5kIHVwZGF0ZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlWydjaGVja0Rpc2FibGVkJ10gPSBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5jaGVja0Rpc2FibGVkO1xuLyoqXG4gICAqIERpc2FibGUgY2hlY2tib3guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlWydkaXNhYmxlJ10gPSBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5kaXNhYmxlO1xuLyoqXG4gICAqIEVuYWJsZSBjaGVja2JveC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIENoZWNrIGNoZWNrYm94LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZVsnY2hlY2snXSA9IE1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmNoZWNrO1xuLyoqXG4gICAqIFVuY2hlY2sgY2hlY2tib3guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS51bmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlWyd1bmNoZWNrJ10gPSBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS51bmNoZWNrO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLklOUFVUKTtcbiAgICAgICAgdmFyIGJveE91dGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGJveE91dGxpbmUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJPWF9PVVRMSU5FKTtcbiAgICAgICAgdmFyIHRpY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRpY2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkZPQ1VTX0hFTFBFUik7XG4gICAgICAgIHZhciB0aWNrT3V0bGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGlja091dGxpbmUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRJQ0tfT1VUTElORSk7XG4gICAgICAgIGJveE91dGxpbmUuYXBwZW5kQ2hpbGQodGlja091dGxpbmUpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHRpY2tDb250YWluZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGJveE91dGxpbmUpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0lHTk9SRV9FVkVOVFMpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50XyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DT05UQUlORVIpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ0VOVEVSKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRSaXBwbGVNb3VzZVVwID0gdGhpcy5vbk1vdXNlVXBfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kUmlwcGxlTW91c2VVcCk7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvdW5kSW5wdXRPbkNoYW5nZSA9IHRoaXMub25DaGFuZ2VfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRJbnB1dE9uRm9jdXMgPSB0aGlzLm9uRm9jdXNfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRJbnB1dE9uQmx1ciA9IHRoaXMub25CbHVyXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kRWxlbWVudE1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRJbnB1dE9uQ2hhbmdlKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZElucHV0T25Gb2N1cyk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5ib3VuZElucHV0T25CbHVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZEVsZW1lbnRNb3VzZVVwKTtcbiAgICAgICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbENoZWNrYm94LFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbENoZWNrYm94JyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1jaGVja2JveCcsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2hlY2tib3guanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgaWNvbiB0b2dnbGUgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbEljb25Ub2dnbGUgPSBmdW5jdGlvbiBNYXRlcmlhbEljb25Ub2dnbGUoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbEljb25Ub2dnbGUnXSA9IE1hdGVyaWFsSWNvblRvZ2dsZTtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuQ29uc3RhbnRfID0geyBUSU5ZX1RJTUVPVVQ6IDAuMDAxIH07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIElOUFVUOiAnbWRsLWljb24tdG9nZ2xlX19pbnB1dCcsXG4gICAgSlNfUklQUExFX0VGRkVDVDogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICBSSVBQTEVfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJyxcbiAgICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLWljb24tdG9nZ2xlX19yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEVfQ0VOVEVSOiAnbWRsLXJpcHBsZS0tY2VudGVyJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICBJU19GT0NVU0VEOiAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfQ0hFQ0tFRDogJ2lzLWNoZWNrZWQnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2Ugb2Ygc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUub25DaGFuZ2VfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgZm9jdXMgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5vbkZvY3VzXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbG9zdCBmb2N1cyBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNldXAuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUub25Nb3VzZVVwXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuYmx1cl8oKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGNsYXNzIHVwZGF0ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS51cGRhdGVDbGFzc2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNoZWNrRGlzYWJsZWQoKTtcbiAgICB0aGlzLmNoZWNrVG9nZ2xlU3RhdGUoKTtcbn07XG4vKipcbiAgICogQWRkIGJsdXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5ibHVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IHdoeSB0aGVyZSdzIGEgZm9jdXMgZXZlbnQgYmVpbmcgZmlyZWQgYWZ0ZXIgb3VyIGJsdXIsXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gYXZvaWQgdGhpcyBoYWNrLlxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmJsdXIoKTtcbiAgICB9LmJpbmQodGhpcyksIHRoaXMuQ29uc3RhbnRfLlRJTllfVElNRU9VVCk7XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogQ2hlY2sgdGhlIGlucHV0cyB0b2dnbGUgc3RhdGUgYW5kIHVwZGF0ZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZVsnY2hlY2tUb2dnbGVTdGF0ZSddID0gTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlO1xuLyoqXG4gICAqIENoZWNrIHRoZSBpbnB1dHMgZGlzYWJsZWQgc3RhdGUgYW5kIHVwZGF0ZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5jaGVja0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZVsnY2hlY2tEaXNhYmxlZCddID0gTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5jaGVja0Rpc2FibGVkO1xuLyoqXG4gICAqIERpc2FibGUgaWNvbiB0b2dnbGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5kaXNhYmxlO1xuLyoqXG4gICAqIEVuYWJsZSBpY29uIHRvZ2dsZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlWydlbmFibGUnXSA9IE1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIENoZWNrIGljb24gdG9nZ2xlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGVbJ2NoZWNrJ10gPSBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmNoZWNrO1xuLyoqXG4gICAqIFVuY2hlY2sgaWNvbiB0b2dnbGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLnVuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZVsndW5jaGVjayddID0gTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS51bmNoZWNrO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSU5QVVQpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5KU19SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0lHTk9SRV9FVkVOVFMpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50XyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DT05UQUlORVIpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSlNfUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ0VOVEVSKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRSaXBwbGVNb3VzZVVwID0gdGhpcy5vbk1vdXNlVXBfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kUmlwcGxlTW91c2VVcCk7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvdW5kSW5wdXRPbkNoYW5nZSA9IHRoaXMub25DaGFuZ2VfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRJbnB1dE9uRm9jdXMgPSB0aGlzLm9uRm9jdXNfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRJbnB1dE9uQmx1ciA9IHRoaXMub25CbHVyXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kRWxlbWVudE9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5ib3VuZElucHV0T25DaGFuZ2UpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmJvdW5kSW5wdXRPbkZvY3VzKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kSW5wdXRPbkJsdXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kRWxlbWVudE9uTW91c2VVcCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKCdpcy11cGdyYWRlZCcpO1xuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxJY29uVG9nZ2xlLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbEljb25Ub2dnbGUnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLWljb24tdG9nZ2xlJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpY29uLXRvZ2dsZS5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBkcm9wZG93biBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsTWVudSA9IGZ1bmN0aW9uIE1hdGVyaWFsTWVudShlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsTWVudSddID0gTWF0ZXJpYWxNZW51O1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5Db25zdGFudF8gPSB7XG4gICAgLy8gVG90YWwgZHVyYXRpb24gb2YgdGhlIG1lbnUgYW5pbWF0aW9uLlxuICAgIFRSQU5TSVRJT05fRFVSQVRJT05fU0VDT05EUzogMC4zLFxuICAgIC8vIFRoZSBmcmFjdGlvbiBvZiB0aGUgdG90YWwgZHVyYXRpb24gd2Ugd2FudCB0byB1c2UgZm9yIG1lbnUgaXRlbSBhbmltYXRpb25zLlxuICAgIFRSQU5TSVRJT05fRFVSQVRJT05fRlJBQ1RJT046IDAuOCxcbiAgICAvLyBIb3cgbG9uZyB0aGUgbWVudSBzdGF5cyBvcGVuIGFmdGVyIGNob29zaW5nIGFuIG9wdGlvbiAoc28gdGhlIHVzZXIgY2FuIHNlZVxuICAgIC8vIHRoZSByaXBwbGUpLlxuICAgIENMT1NFX1RJTUVPVVQ6IDE1MFxufTtcbi8qKlxuICAgKiBLZXljb2RlcywgZm9yIGNvZGUgcmVhZGFiaWxpdHkuXG4gICAqXG4gICAqIEBlbnVtIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5LZXljb2Rlc18gPSB7XG4gICAgRU5URVI6IDEzLFxuICAgIEVTQ0FQRTogMjcsXG4gICAgU1BBQ0U6IDMyLFxuICAgIFVQX0FSUk9XOiAzOCxcbiAgICBET1dOX0FSUk9XOiA0MFxufTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgQ09OVEFJTkVSOiAnbWRsLW1lbnVfX2NvbnRhaW5lcicsXG4gICAgT1VUTElORTogJ21kbC1tZW51X19vdXRsaW5lJyxcbiAgICBJVEVNOiAnbWRsLW1lbnVfX2l0ZW0nLFxuICAgIElURU1fUklQUExFX0NPTlRBSU5FUjogJ21kbC1tZW51X19pdGVtLXJpcHBsZS1jb250YWluZXInLFxuICAgIFJJUFBMRV9FRkZFQ1Q6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgUklQUExFX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cycsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZScsXG4gICAgLy8gU3RhdHVzZXNcbiAgICBJU19VUEdSQURFRDogJ2lzLXVwZ3JhZGVkJyxcbiAgICBJU19WSVNJQkxFOiAnaXMtdmlzaWJsZScsXG4gICAgSVNfQU5JTUFUSU5HOiAnaXMtYW5pbWF0aW5nJyxcbiAgICAvLyBBbGlnbm1lbnQgb3B0aW9uc1xuICAgIEJPVFRPTV9MRUZUOiAnbWRsLW1lbnUtLWJvdHRvbS1sZWZ0JyxcbiAgICAvLyBUaGlzIGlzIHRoZSBkZWZhdWx0LlxuICAgIEJPVFRPTV9SSUdIVDogJ21kbC1tZW51LS1ib3R0b20tcmlnaHQnLFxuICAgIFRPUF9MRUZUOiAnbWRsLW1lbnUtLXRvcC1sZWZ0JyxcbiAgICBUT1BfUklHSFQ6ICdtZGwtbWVudS0tdG9wLXJpZ2h0JyxcbiAgICBVTkFMSUdORUQ6ICdtZGwtbWVudS0tdW5hbGlnbmVkJ1xufTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIHRoZSBtZW51LlxuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQ09OVEFJTkVSKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShjb250YWluZXIsIHRoaXMuZWxlbWVudF8pO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJfID0gY29udGFpbmVyO1xuICAgICAgICAvLyBDcmVhdGUgb3V0bGluZSBmb3IgdGhlIG1lbnUgKHNoYWRvdyBhbmQgYmFja2dyb3VuZCkuXG4gICAgICAgIHZhciBvdXRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG91dGxpbmUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk9VVExJTkUpO1xuICAgICAgICB0aGlzLm91dGxpbmVfID0gb3V0bGluZTtcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShvdXRsaW5lLCB0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgLy8gRmluZCB0aGUgXCJmb3JcIiBlbGVtZW50IGFuZCBiaW5kIGV2ZW50cyB0byBpdC5cbiAgICAgICAgdmFyIGZvckVsSWQgPSB0aGlzLmVsZW1lbnRfLmdldEF0dHJpYnV0ZSgnZm9yJykgfHwgdGhpcy5lbGVtZW50Xy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWRsLWZvcicpO1xuICAgICAgICB2YXIgZm9yRWwgPSBudWxsO1xuICAgICAgICBpZiAoZm9yRWxJZCkge1xuICAgICAgICAgICAgZm9yRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JFbElkKTtcbiAgICAgICAgICAgIGlmIChmb3JFbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9yRWxlbWVudF8gPSBmb3JFbDtcbiAgICAgICAgICAgICAgICBmb3JFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRm9yQ2xpY2tfLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGZvckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUZvcktleWJvYXJkRXZlbnRfLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLklURU0pO1xuICAgICAgICB0aGlzLmJvdW5kSXRlbUtleWRvd25fID0gdGhpcy5oYW5kbGVJdGVtS2V5Ym9hcmRFdmVudF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZEl0ZW1DbGlja18gPSB0aGlzLmhhbmRsZUl0ZW1DbGlja18uYmluZCh0aGlzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gZWFjaCBtZW51IGl0ZW0uXG4gICAgICAgICAgICBpdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRJdGVtQ2xpY2tfKTtcbiAgICAgICAgICAgIC8vIEFkZCBhIHRhYiBpbmRleCB0byBlYWNoIG1lbnUgaXRlbS5cbiAgICAgICAgICAgIGl0ZW1zW2ldLnRhYkluZGV4ID0gJy0xJztcbiAgICAgICAgICAgIC8vIEFkZCBhIGtleWJvYXJkIGxpc3RlbmVyIHRvIGVhY2ggbWVudSBpdGVtLlxuICAgICAgICAgICAgaXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuYm91bmRJdGVtS2V5ZG93bl8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCByaXBwbGUgY2xhc3NlcyB0byBlYWNoIGl0ZW0sIGlmIHRoZSB1c2VyIGhhcyBlbmFibGVkIHJpcHBsZXMuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfSUdOT1JFX0VWRU5UUyk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIHZhciByaXBwbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JVEVNX1JJUFBMRV9DT05UQUlORVIpO1xuICAgICAgICAgICAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQocmlwcGxlQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBDb3B5IGFsaWdubWVudCBjbGFzc2VzIHRvIHRoZSBjb250YWluZXIsIHNvIHRoZSBvdXRsaW5lIGNhbiB1c2UgdGhlbS5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uQk9UVE9NX0xFRlQpKSB7XG4gICAgICAgICAgICB0aGlzLm91dGxpbmVfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5CT1RUT01fTEVGVCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uQk9UVE9NX1JJR0hUKSkge1xuICAgICAgICAgICAgdGhpcy5vdXRsaW5lXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQk9UVE9NX1JJR0hUKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1BfTEVGVCkpIHtcbiAgICAgICAgICAgIHRoaXMub3V0bGluZV8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRPUF9MRUZUKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1BfUklHSFQpKSB7XG4gICAgICAgICAgICB0aGlzLm91dGxpbmVfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UT1BfUklHSFQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlVOQUxJR05FRCkpIHtcbiAgICAgICAgICAgIHRoaXMub3V0bGluZV8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlVOQUxJR05FRCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGVzIGEgY2xpY2sgb24gdGhlIFwiZm9yXCIgZWxlbWVudCwgYnkgcG9zaXRpb25pbmcgdGhlIG1lbnUgYW5kIHRoZW5cbiAgICogdG9nZ2xpbmcgaXQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmhhbmRsZUZvckNsaWNrXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50XyAmJiB0aGlzLmZvckVsZW1lbnRfKSB7XG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5mb3JFbGVtZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGZvclJlY3QgPSB0aGlzLmZvckVsZW1lbnRfLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlVOQUxJR05FRCkpIHtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9SSUdIVCkpIHtcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIGJlbG93IHRoZSBcImZvclwiIGVsZW1lbnQsIGFsaWduZWQgdG8gaXRzIHJpZ2h0LlxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLnJpZ2h0ID0gZm9yUmVjdC5yaWdodCAtIHJlY3QucmlnaHQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLnRvcCA9IHRoaXMuZm9yRWxlbWVudF8ub2Zmc2V0VG9wICsgdGhpcy5mb3JFbGVtZW50Xy5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX0xFRlQpKSB7XG4gICAgICAgICAgICAvLyBQb3NpdGlvbiBhYm92ZSB0aGUgXCJmb3JcIiBlbGVtZW50LCBhbGlnbmVkIHRvIGl0cyBsZWZ0LlxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLmxlZnQgPSB0aGlzLmZvckVsZW1lbnRfLm9mZnNldExlZnQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLmJvdHRvbSA9IGZvclJlY3QuYm90dG9tIC0gcmVjdC50b3AgKyAncHgnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX1JJR0hUKSkge1xuICAgICAgICAgICAgLy8gUG9zaXRpb24gYWJvdmUgdGhlIFwiZm9yXCIgZWxlbWVudCwgYWxpZ25lZCB0byBpdHMgcmlnaHQuXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUucmlnaHQgPSBmb3JSZWN0LnJpZ2h0IC0gcmVjdC5yaWdodCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUuYm90dG9tID0gZm9yUmVjdC5ib3R0b20gLSByZWN0LnRvcCArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEZWZhdWx0OiBwb3NpdGlvbiBiZWxvdyB0aGUgXCJmb3JcIiBlbGVtZW50LCBhbGlnbmVkIHRvIGl0cyBsZWZ0LlxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLmxlZnQgPSB0aGlzLmZvckVsZW1lbnRfLm9mZnNldExlZnQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLnRvcCA9IHRoaXMuZm9yRWxlbWVudF8ub2Zmc2V0VG9wICsgdGhpcy5mb3JFbGVtZW50Xy5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlKGV2dCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgYSBrZXlib2FyZCBldmVudCBvbiB0aGUgXCJmb3JcIiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5oYW5kbGVGb3JLZXlib2FyZEV2ZW50XyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50XyAmJiB0aGlzLmNvbnRhaW5lcl8gJiYgdGhpcy5mb3JFbGVtZW50Xykge1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JVEVNICsgJzpub3QoW2Rpc2FibGVkXSknKTtcbiAgICAgICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDAgJiYgdGhpcy5jb250YWluZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX1ZJU0lCTEUpKSB7XG4gICAgICAgICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLlVQX0FSUk9XKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLkRPV05fQVJST1cpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpdGVtc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGVzIGEga2V5Ym9hcmQgZXZlbnQgb24gYW4gaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuaGFuZGxlSXRlbUtleWJvYXJkRXZlbnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfICYmIHRoaXMuY29udGFpbmVyXykge1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JVEVNICsgJzpub3QoW2Rpc2FibGVkXSknKTtcbiAgICAgICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDAgJiYgdGhpcy5jb250YWluZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX1ZJU0lCTEUpKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaXRlbXMpLmluZGV4T2YoZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLlVQX0FSUk9XKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbY3VycmVudEluZGV4IC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpdGVtcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLkRPV05fQVJST1cpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gY3VycmVudEluZGV4ICsgMSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtc1tjdXJyZW50SW5kZXggKyAxXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChldnQua2V5Q29kZSA9PT0gdGhpcy5LZXljb2Rlc18uU1BBQ0UgfHwgZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLkVOVEVSKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgLy8gU2VuZCBtb3VzZWRvd24gYW5kIG1vdXNldXAgdG8gdHJpZ2dlciByaXBwbGUuXG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgTW91c2VFdmVudCgnbW91c2Vkb3duJyk7XG4gICAgICAgICAgICAgICAgZXZ0LnRhcmdldC5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICAgICAgICAgIGUgPSBuZXcgTW91c2VFdmVudCgnbW91c2V1cCcpO1xuICAgICAgICAgICAgICAgIGV2dC50YXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgICAgICAgICAvLyBTZW5kIGNsaWNrLlxuICAgICAgICAgICAgICAgIGV2dC50YXJnZXQuY2xpY2soKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLkVTQ0FQRSkge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGVzIGEgY2xpY2sgZXZlbnQgb24gYW4gaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuaGFuZGxlSXRlbUNsaWNrXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoZXZ0LnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdhaXQgc29tZSB0aW1lIGJlZm9yZSBjbG9zaW5nIG1lbnUsIHNvIHRoZSB1c2VyIGNhbiBzZWUgdGhlIHJpcHBsZS5cbiAgICAgICAgdGhpcy5jbG9zaW5nXyA9IHRydWU7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5jbG9zaW5nXyA9IGZhbHNlO1xuICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMuQ29uc3RhbnRfLkNMT1NFX1RJTUVPVVQpO1xuICAgIH1cbn07XG4vKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgaW5pdGlhbCBjbGlwIChmb3Igb3BlbmluZyB0aGUgbWVudSkgb3IgZmluYWwgY2xpcCAoZm9yIGNsb3NpbmdcbiAgICogaXQpLCBhbmQgYXBwbGllcyBpdC4gVGhpcyBhbGxvd3MgdXMgdG8gYW5pbWF0ZSBmcm9tIG9yIHRvIHRoZSBjb3JyZWN0IHBvaW50LFxuICAgKiB0aGF0IGlzLCB0aGUgcG9pbnQgaXQncyBhbGlnbmVkIHRvIGluIHRoZSBcImZvclwiIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIHRoZSBjbGlwIHJlY3RhbmdsZVxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggV2lkdGggb2YgdGhlIGNsaXAgcmVjdGFuZ2xlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5hcHBseUNsaXBfID0gZnVuY3Rpb24gKGhlaWdodCwgd2lkdGgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5VTkFMSUdORUQpKSB7XG4gICAgICAgIC8vIERvIG5vdCBjbGlwLlxuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAnJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uQk9UVE9NX1JJR0hUKSkge1xuICAgICAgICAvLyBDbGlwIHRvIHRoZSB0b3AgcmlnaHQgY29ybmVyIG9mIHRoZSBtZW51LlxuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAncmVjdCgwICcgKyB3aWR0aCArICdweCAnICsgJzAgJyArIHdpZHRoICsgJ3B4KSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9MRUZUKSkge1xuICAgICAgICAvLyBDbGlwIHRvIHRoZSBib3R0b20gbGVmdCBjb3JuZXIgb2YgdGhlIG1lbnUuXG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUuY2xpcCA9ICdyZWN0KCcgKyBoZWlnaHQgKyAncHggMCAnICsgaGVpZ2h0ICsgJ3B4IDApJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX1JJR0hUKSkge1xuICAgICAgICAvLyBDbGlwIHRvIHRoZSBib3R0b20gcmlnaHQgY29ybmVyIG9mIHRoZSBtZW51LlxuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAncmVjdCgnICsgaGVpZ2h0ICsgJ3B4ICcgKyB3aWR0aCArICdweCAnICsgaGVpZ2h0ICsgJ3B4ICcgKyB3aWR0aCArICdweCknO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERlZmF1bHQ6IGRvIG5vdCBjbGlwIChzYW1lIGFzIGNsaXBwaW5nIHRvIHRoZSB0b3AgbGVmdCBjb3JuZXIpLlxuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAnJztcbiAgICB9XG59O1xuLyoqXG4gICAqIENsZWFudXAgZnVuY3Rpb24gdG8gcmVtb3ZlIGFuaW1hdGlvbiBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUucmVtb3ZlQW5pbWF0aW9uRW5kTGlzdGVuZXJfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShNYXRlcmlhbE1lbnUucHJvdG90eXBlLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG59O1xuLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gY2xlYW4gdXAgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBlbmRzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuYWRkQW5pbWF0aW9uRW5kTGlzdGVuZXJfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMucmVtb3ZlQW5pbWF0aW9uRW5kTGlzdGVuZXJfKTtcbiAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCB0aGlzLnJlbW92ZUFuaW1hdGlvbkVuZExpc3RlbmVyXyk7XG59O1xuLyoqXG4gICAqIERpc3BsYXlzIHRoZSBtZW51LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfICYmIHRoaXMuY29udGFpbmVyXyAmJiB0aGlzLm91dGxpbmVfKSB7XG4gICAgICAgIC8vIE1lYXN1cmUgdGhlIGlubmVyIGVsZW1lbnQuXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmVsZW1lbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5lbGVtZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgLy8gQXBwbHkgdGhlIGlubmVyIGVsZW1lbnQncyBzaXplIHRvIHRoZSBjb250YWluZXIgYW5kIG91dGxpbmUuXG4gICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgICAgIHRoaXMub3V0bGluZV8uc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgIHRoaXMub3V0bGluZV8uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRoaXMuQ29uc3RhbnRfLlRSQU5TSVRJT05fRFVSQVRJT05fU0VDT05EUyAqIHRoaXMuQ29uc3RhbnRfLlRSQU5TSVRJT05fRFVSQVRJT05fRlJBQ1RJT047XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0cmFuc2l0aW9uIGRlbGF5cyBmb3IgaW5kaXZpZHVhbCBtZW51IGl0ZW1zLCBzbyB0aGF0IHRoZXkgZmFkZVxuICAgICAgICAvLyBpbiBvbmUgYXQgYSB0aW1lLlxuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JVEVNKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW1EZWxheSA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1BfTEVGVCkgfHwgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1BfUklHSFQpKSB7XG4gICAgICAgICAgICAgICAgaXRlbURlbGF5ID0gKGhlaWdodCAtIGl0ZW1zW2ldLm9mZnNldFRvcCAtIGl0ZW1zW2ldLm9mZnNldEhlaWdodCkgLyBoZWlnaHQgKiB0cmFuc2l0aW9uRHVyYXRpb24gKyAncyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW1EZWxheSA9IGl0ZW1zW2ldLm9mZnNldFRvcCAvIGhlaWdodCAqIHRyYW5zaXRpb25EdXJhdGlvbiArICdzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW1zW2ldLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGl0ZW1EZWxheTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBseSB0aGUgaW5pdGlhbCBjbGlwIHRvIHRoZSB0ZXh0IGJlZm9yZSB3ZSBzdGFydCBhbmltYXRpbmcuXG4gICAgICAgIHRoaXMuYXBwbHlDbGlwXyhoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgLy8gV2FpdCBmb3IgdGhlIG5leHQgZnJhbWUsIHR1cm4gb24gYW5pbWF0aW9uLCBhbmQgYXBwbHkgdGhlIGZpbmFsIGNsaXAuXG4gICAgICAgIC8vIEFsc28gbWFrZSBpdCB2aXNpYmxlLiBUaGlzIHRyaWdnZXJzIHRoZSB0cmFuc2l0aW9ucy5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID0gJ3JlY3QoMCAnICsgd2lkdGggKyAncHggJyArIGhlaWdodCArICdweCAwKSc7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1ZJU0lCTEUpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAvLyBDbGVhbiB1cCBhZnRlciB0aGUgYW5pbWF0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAgICB0aGlzLmFkZEFuaW1hdGlvbkVuZExpc3RlbmVyXygpO1xuICAgICAgICAvLyBBZGQgYSBjbGljayBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnQsIHRvIGNsb3NlIHRoZSBtZW51LlxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBkb2N1bWVudCBpcyBwcm9jZXNzaW5nIHRoZSBzYW1lIGV2ZW50IHRoYXRcbiAgICAgICAgICAgIC8vIGRpc3BsYXllZCB0aGUgbWVudSBpbiB0aGUgZmlyc3QgcGxhY2UuIElmIHNvLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgLy8gQWxzbyBjaGVjayB0byBzZWUgaWYgdGhlIG1lbnUgaXMgaW4gdGhlIHByb2Nlc3Mgb2YgY2xvc2luZyBpdHNlbGYsIGFuZFxuICAgICAgICAgICAgLy8gZG8gbm90aGluZyBpbiB0aGF0IGNhc2UuXG4gICAgICAgICAgICAvLyBBbHNvIGNoZWNrIGlmIHRoZSBjbGlja2VkIGVsZW1lbnQgaXMgYSBtZW51IGl0ZW1cbiAgICAgICAgICAgIC8vIGlmIHNvLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgaWYgKGUgIT09IGV2dCAmJiAhdGhpcy5jbG9zaW5nXyAmJiBlLnRhcmdldC5wYXJlbnROb2RlICE9PSB0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjayk7XG4gICAgfVxufTtcbk1hdGVyaWFsTWVudS5wcm90b3R5cGVbJ3Nob3cnXSA9IE1hdGVyaWFsTWVudS5wcm90b3R5cGUuc2hvdztcbi8qKlxuICAgKiBIaWRlcyB0aGUgbWVudS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50XyAmJiB0aGlzLmNvbnRhaW5lcl8gJiYgdGhpcy5vdXRsaW5lXykge1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JVEVNKTtcbiAgICAgICAgLy8gUmVtb3ZlIGFsbCB0cmFuc2l0aW9uIGRlbGF5czsgbWVudSBpdGVtcyBmYWRlIG91dCBjb25jdXJyZW50bHkuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW1zW2ldLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWRlbGF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWVhc3VyZSB0aGUgaW5uZXIgZWxlbWVudC5cbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmVsZW1lbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgICAgIC8vIFR1cm4gb24gYW5pbWF0aW9uLCBhbmQgYXBwbHkgdGhlIGZpbmFsIGNsaXAuIEFsc28gbWFrZSBpbnZpc2libGUuXG4gICAgICAgIC8vIFRoaXMgdHJpZ2dlcnMgdGhlIHRyYW5zaXRpb25zLlxuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgICAgICB0aGlzLmFwcGx5Q2xpcF8oaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSk7XG4gICAgICAgIC8vIENsZWFuIHVwIGFmdGVyIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGUuXG4gICAgICAgIHRoaXMuYWRkQW5pbWF0aW9uRW5kTGlzdGVuZXJfKCk7XG4gICAgfVxufTtcbk1hdGVyaWFsTWVudS5wcm90b3R5cGVbJ2hpZGUnXSA9IE1hdGVyaWFsTWVudS5wcm90b3R5cGUuaGlkZTtcbi8qKlxuICAgKiBEaXNwbGF5cyBvciBoaWRlcyB0aGUgbWVudSwgZGVwZW5kaW5nIG9uIGN1cnJlbnQgc3RhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX1ZJU0lCTEUpKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvdyhldnQpO1xuICAgIH1cbn07XG5NYXRlcmlhbE1lbnUucHJvdG90eXBlWyd0b2dnbGUnXSA9IE1hdGVyaWFsTWVudS5wcm90b3R5cGUudG9nZ2xlO1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsTWVudSxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxNZW51JyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1tZW51JyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtZW51LmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFByb2dyZXNzIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxQcm9ncmVzcyA9IGZ1bmN0aW9uIE1hdGVyaWFsUHJvZ3Jlc3MoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFByb2dyZXNzJ10gPSBNYXRlcmlhbFByb2dyZXNzO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUuQ29uc3RhbnRfID0ge307XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHsgSU5ERVRFUk1JTkFURV9DTEFTUzogJ21kbC1wcm9ncmVzc19faW5kZXRlcm1pbmF0ZScgfTtcbi8qKlxuICAgKiBTZXQgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHByb2dyZXNzYmFyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcCBQZXJjZW50YWdlIG9mIHRoZSBwcm9ncmVzcyAoMC0xMDApXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5zZXRQcm9ncmVzcyA9IGZ1bmN0aW9uIChwKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSU5ERVRFUk1JTkFURV9DTEFTUykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByb2dyZXNzYmFyXy5zdHlsZS53aWR0aCA9IHAgKyAnJSc7XG59O1xuTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGVbJ3NldFByb2dyZXNzJ10gPSBNYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5zZXRQcm9ncmVzcztcbi8qKlxuICAgKiBTZXQgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIGJ1ZmZlci5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHAgUGVyY2VudGFnZSBvZiB0aGUgYnVmZmVyICgwLTEwMClcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLnNldEJ1ZmZlciA9IGZ1bmN0aW9uIChwKSB7XG4gICAgdGhpcy5idWZmZXJiYXJfLnN0eWxlLndpZHRoID0gcCArICclJztcbiAgICB0aGlzLmF1eGJhcl8uc3R5bGUud2lkdGggPSAxMDAgLSBwICsgJyUnO1xufTtcbk1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlWydzZXRCdWZmZXInXSA9IE1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLnNldEJ1ZmZlcjtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3Byb2dyZXNzYmFyIGJhciBiYXIxJztcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NiYXJfID0gZWw7XG4gICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9ICdidWZmZXJiYXIgYmFyIGJhcjInO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5idWZmZXJiYXJfID0gZWw7XG4gICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9ICdhdXhiYXIgYmFyIGJhcjMnO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5hdXhiYXJfID0gZWw7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NiYXJfLnN0eWxlLndpZHRoID0gJzAlJztcbiAgICAgICAgdGhpcy5idWZmZXJiYXJfLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICB0aGlzLmF1eGJhcl8uc3R5bGUud2lkdGggPSAnMCUnO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQoJ2lzLXVwZ3JhZGVkJyk7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFByb2dyZXNzLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFByb2dyZXNzJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1wcm9ncmVzcycsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHJvZ3Jlc3MuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgUmFkaW8gTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFJhZGlvID0gZnVuY3Rpb24gTWF0ZXJpYWxSYWRpbyhlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsUmFkaW8nXSA9IE1hdGVyaWFsUmFkaW87XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5Db25zdGFudF8gPSB7IFRJTllfVElNRU9VVDogMC4wMDEgfTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIElTX0ZPQ1VTRUQ6ICdpcy1mb2N1c2VkJyxcbiAgICBJU19ESVNBQkxFRDogJ2lzLWRpc2FibGVkJyxcbiAgICBJU19DSEVDS0VEOiAnaXMtY2hlY2tlZCcsXG4gICAgSVNfVVBHUkFERUQ6ICdpcy11cGdyYWRlZCcsXG4gICAgSlNfUkFESU86ICdtZGwtanMtcmFkaW8nLFxuICAgIFJBRElPX0JUTjogJ21kbC1yYWRpb19fYnV0dG9uJyxcbiAgICBSQURJT19PVVRFUl9DSVJDTEU6ICdtZGwtcmFkaW9fX291dGVyLWNpcmNsZScsXG4gICAgUkFESU9fSU5ORVJfQ0lSQ0xFOiAnbWRsLXJhZGlvX19pbm5lci1jaXJjbGUnLFxuICAgIFJJUFBMRV9FRkZFQ1Q6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgUklQUExFX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cycsXG4gICAgUklQUExFX0NPTlRBSU5FUjogJ21kbC1yYWRpb19fcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgUklQUExFX0NFTlRFUjogJ21kbC1yaXBwbGUtLWNlbnRlcicsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZSdcbn07XG4vKipcbiAgICogSGFuZGxlIGNoYW5nZSBvZiBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUub25DaGFuZ2VfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gU2luY2Ugb3RoZXIgcmFkaW8gYnV0dG9ucyBkb24ndCBnZXQgY2hhbmdlIGV2ZW50cywgd2UgbmVlZCB0byBsb29rIGZvclxuICAgIC8vIHRoZW0gdG8gdXBkYXRlIHRoZWlyIGNsYXNzZXMuXG4gICAgdmFyIHJhZGlvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5Dc3NDbGFzc2VzXy5KU19SQURJTyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByYWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGJ1dHRvbiA9IHJhZGlvc1tpXS5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uUkFESU9fQlROKTtcbiAgICAgICAgLy8gRGlmZmVyZW50IG5hbWUgPT0gZGlmZmVyZW50IGdyb3VwLCBzbyBubyBwb2ludCB1cGRhdGluZyB0aG9zZS5cbiAgICAgICAgaWYgKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ25hbWUnKSA9PT0gdGhpcy5idG5FbGVtZW50Xy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByYWRpb3NbaV1bJ01hdGVyaWFsUmFkaW8nXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByYWRpb3NbaV1bJ01hdGVyaWFsUmFkaW8nXS51cGRhdGVDbGFzc2VzXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGUgZm9jdXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLm9uRm9jdXNfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBsb3N0IGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5vbkJsdXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZXVwLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5vbk1vdXNldXBfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5ibHVyXygpO1xufTtcbi8qKlxuICAgKiBVcGRhdGUgY2xhc3Nlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS51cGRhdGVDbGFzc2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNoZWNrRGlzYWJsZWQoKTtcbiAgICB0aGlzLmNoZWNrVG9nZ2xlU3RhdGUoKTtcbn07XG4vKipcbiAgICogQWRkIGJsdXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuYmx1cl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETzogZmlndXJlIG91dCB3aHkgdGhlcmUncyBhIGZvY3VzIGV2ZW50IGJlaW5nIGZpcmVkIGFmdGVyIG91ciBibHVyLFxuICAgIC8vIHNvIHRoYXQgd2UgY2FuIGF2b2lkIHRoaXMgaGFjay5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYnRuRWxlbWVudF8uYmx1cigpO1xuICAgIH0uYmluZCh0aGlzKSwgdGhpcy5Db25zdGFudF8uVElOWV9USU1FT1VUKTtcbn07XG4vLyBQdWJsaWMgbWV0aG9kcy5cbi8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50cyBkaXNhYmxlZCBzdGF0ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuYnRuRWxlbWVudF8uZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGVbJ2NoZWNrRGlzYWJsZWQnXSA9IE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQ7XG4vKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudHMgdG9nZ2xlZCBzdGF0ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmNoZWNrVG9nZ2xlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuYnRuRWxlbWVudF8uY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGVbJ2NoZWNrVG9nZ2xlU3RhdGUnXSA9IE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmNoZWNrVG9nZ2xlU3RhdGU7XG4vKipcbiAgICogRGlzYWJsZSByYWRpby5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5idG5FbGVtZW50Xy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlWydkaXNhYmxlJ10gPSBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5kaXNhYmxlO1xuLyoqXG4gICAqIEVuYWJsZSByYWRpby5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJ0bkVsZW1lbnRfLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlWydlbmFibGUnXSA9IE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmVuYWJsZTtcbi8qKlxuICAgKiBDaGVjayByYWRpby5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYnRuRWxlbWVudF8uY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5vbkNoYW5nZV8obnVsbCk7XG59O1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGVbJ2NoZWNrJ10gPSBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5jaGVjaztcbi8qKlxuICAgKiBVbmNoZWNrIHJhZGlvLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUudW5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJ0bkVsZW1lbnRfLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9uQ2hhbmdlXyhudWxsKTtcbn07XG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZVsndW5jaGVjayddID0gTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUudW5jaGVjaztcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB0aGlzLmJ0bkVsZW1lbnRfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uUkFESU9fQlROKTtcbiAgICAgICAgdGhpcy5ib3VuZENoYW5nZUhhbmRsZXJfID0gdGhpcy5vbkNoYW5nZV8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZEZvY3VzSGFuZGxlcl8gPSB0aGlzLm9uQ2hhbmdlXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kQmx1ckhhbmRsZXJfID0gdGhpcy5vbkJsdXJfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlcl8gPSB0aGlzLm9uTW91c2V1cF8uYmluZCh0aGlzKTtcbiAgICAgICAgdmFyIG91dGVyQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBvdXRlckNpcmNsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUkFESU9fT1VURVJfQ0lSQ0xFKTtcbiAgICAgICAgdmFyIGlubmVyQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpbm5lckNpcmNsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUkFESU9fSU5ORVJfQ0lSQ0xFKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChvdXRlckNpcmNsZSk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQoaW5uZXJDaXJjbGUpO1xuICAgICAgICB2YXIgcmlwcGxlQ29udGFpbmVyO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0lHTk9SRV9FVkVOVFMpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DRU5URVIpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXJfKTtcbiAgICAgICAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRSk7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuYXBwZW5kQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQocmlwcGxlQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ0bkVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRDaGFuZ2VIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYnRuRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmJvdW5kRm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYnRuRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRCbHVySGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXJfKTtcbiAgICAgICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFJhZGlvLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFJhZGlvJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1yYWRpbycsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmFkaW8uanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgU2xpZGVyIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxTbGlkZXIgPSBmdW5jdGlvbiBNYXRlcmlhbFNsaWRlcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gQnJvd3NlciBmZWF0dXJlIGRldGVjdGlvbi5cbiAgICB0aGlzLmlzSUVfID0gd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkO1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFNsaWRlciddID0gTWF0ZXJpYWxTbGlkZXI7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuQ29uc3RhbnRfID0ge307XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgSUVfQ09OVEFJTkVSOiAnbWRsLXNsaWRlcl9faWUtY29udGFpbmVyJyxcbiAgICBTTElERVJfQ09OVEFJTkVSOiAnbWRsLXNsaWRlcl9fY29udGFpbmVyJyxcbiAgICBCQUNLR1JPVU5EX0ZMRVg6ICdtZGwtc2xpZGVyX19iYWNrZ3JvdW5kLWZsZXgnLFxuICAgIEJBQ0tHUk9VTkRfTE9XRVI6ICdtZGwtc2xpZGVyX19iYWNrZ3JvdW5kLWxvd2VyJyxcbiAgICBCQUNLR1JPVU5EX1VQUEVSOiAnbWRsLXNsaWRlcl9fYmFja2dyb3VuZC11cHBlcicsXG4gICAgSVNfTE9XRVNUX1ZBTFVFOiAnaXMtbG93ZXN0LXZhbHVlJyxcbiAgICBJU19VUEdSQURFRDogJ2lzLXVwZ3JhZGVkJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgaW5wdXQgb24gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLm9uSW5wdXRfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy51cGRhdGVWYWx1ZVN0eWxlc18oKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGNoYW5nZSBvbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUub25DaGFuZ2VfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy51cGRhdGVWYWx1ZVN0eWxlc18oKTtcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNldXAgb24gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLm9uTW91c2VVcF8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQuYmx1cigpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2Vkb3duIG9uIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKiBUaGlzIGhhbmRsZXIgaXMgcHVycG9zZSBpcyB0byBub3QgcmVxdWlyZSB0aGUgdXNlIHRvIGNsaWNrXG4gICAqIGV4YWN0bHkgb24gdGhlIDJweCBzbGlkZXIgZWxlbWVudCwgYXMgRmlyZUZveCBzZWVtcyB0byBiZSB2ZXJ5XG4gICAqIHN0cmljdCBhYm91dCB0aGlzLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICogQHN1cHByZXNzIHttaXNzaW5nUHJvcGVydGllc31cbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUub25Db250YWluZXJNb3VzZURvd25fID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gSWYgdGhpcyBjbGljayBpcyBub3Qgb24gdGhlIHBhcmVudCBlbGVtZW50IChidXQgcmF0aGVyIHNvbWUgY2hpbGQpXG4gICAgLy8gaWdub3JlLiBJdCBtYXkgc3RpbGwgYnViYmxlIHVwLlxuICAgIGlmIChldmVudC50YXJnZXQgIT09IHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIERpc2NhcmQgdGhlIG9yaWdpbmFsIGV2ZW50IGFuZCBjcmVhdGUgYSBuZXcgZXZlbnQgdGhhdFxuICAgIC8vIGlzIG9uIHRoZSBzbGlkZXIgZWxlbWVudC5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBuZXdFdmVudCA9IG5ldyBNb3VzZUV2ZW50KCdtb3VzZWRvd24nLCB7XG4gICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICBidXR0b25zOiBldmVudC5idXR0b25zLFxuICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgICBjbGllbnRZOiB0aGlzLmVsZW1lbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnlcbiAgICB9KTtcbiAgICB0aGlzLmVsZW1lbnRfLmRpc3BhdGNoRXZlbnQobmV3RXZlbnQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgdXBkYXRpbmcgb2YgdmFsdWVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS51cGRhdGVWYWx1ZVN0eWxlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ2FsY3VsYXRlIGFuZCBhcHBseSBwZXJjZW50YWdlcyB0byBkaXYgc3RydWN0dXJlIGJlaGluZCBzbGlkZXIuXG4gICAgdmFyIGZyYWN0aW9uID0gKHRoaXMuZWxlbWVudF8udmFsdWUgLSB0aGlzLmVsZW1lbnRfLm1pbikgLyAodGhpcy5lbGVtZW50Xy5tYXggLSB0aGlzLmVsZW1lbnRfLm1pbik7XG4gICAgaWYgKGZyYWN0aW9uID09PSAwKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0xPV0VTVF9WQUxVRSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfTE9XRVNUX1ZBTFVFKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzSUVfKSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZExvd2VyXy5zdHlsZS5mbGV4ID0gZnJhY3Rpb247XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZExvd2VyXy5zdHlsZS53ZWJraXRGbGV4ID0gZnJhY3Rpb247XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFVwcGVyXy5zdHlsZS5mbGV4ID0gMSAtIGZyYWN0aW9uO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRVcHBlcl8uc3R5bGUud2Via2l0RmxleCA9IDEgLSBmcmFjdGlvbjtcbiAgICB9XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogRGlzYWJsZSBzbGlkZXIuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmRpc2FibGVkID0gdHJ1ZTtcbn07XG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGVbJ2Rpc2FibGUnXSA9IE1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5kaXNhYmxlO1xuLyoqXG4gICAqIEVuYWJsZSBzbGlkZXIuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uZGlzYWJsZWQgPSBmYWxzZTtcbn07XG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLmVuYWJsZTtcbi8qKlxuICAgKiBVcGRhdGUgc2xpZGVyIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIHZhbHVlIHRvIHdoaWNoIHRvIHNldCB0aGUgY29udHJvbCAob3B0aW9uYWwpLlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLmNoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8udmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVWYWx1ZVN0eWxlc18oKTtcbn07XG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGVbJ2NoYW5nZSddID0gTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLmNoYW5nZTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNJRV8pIHtcbiAgICAgICAgICAgIC8vIFNpbmNlIHdlIG5lZWQgdG8gc3BlY2lmeSBhIHZlcnkgbGFyZ2UgaGVpZ2h0IGluIElFIGR1ZSB0b1xuICAgICAgICAgICAgLy8gaW1wbGVtZW50YXRpb24gbGltaXRhdGlvbnMsIHdlIGFkZCBhIHBhcmVudCBoZXJlIHRoYXQgdHJpbXMgaXQgZG93biB0b1xuICAgICAgICAgICAgLy8gYSByZWFzb25hYmxlIHNpemUuXG4gICAgICAgICAgICB2YXIgY29udGFpbmVySUUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRhaW5lcklFLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JRV9DT05UQUlORVIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShjb250YWluZXJJRSwgdGhpcy5lbGVtZW50Xyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50Xyk7XG4gICAgICAgICAgICBjb250YWluZXJJRS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZvciBub24tSUUgYnJvd3NlcnMsIHdlIG5lZWQgYSBkaXYgc3RydWN0dXJlIHRoYXQgc2l0cyBiZWhpbmQgdGhlXG4gICAgICAgICAgICAvLyBzbGlkZXIgYW5kIGFsbG93cyB1cyB0byBzdHlsZSB0aGUgbGVmdCBhbmQgcmlnaHQgc2lkZXMgb2YgaXQgd2l0aFxuICAgICAgICAgICAgLy8gZGlmZmVyZW50IGNvbG9ycy5cbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uU0xJREVSX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgdGhpcy5lbGVtZW50Xyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50Xyk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50Xyk7XG4gICAgICAgICAgICB2YXIgYmFja2dyb3VuZEZsZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmRGbGV4LmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5CQUNLR1JPVU5EX0ZMRVgpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tncm91bmRGbGV4KTtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZExvd2VyXyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTG93ZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5CQUNLR1JPVU5EX0xPV0VSKTtcbiAgICAgICAgICAgIGJhY2tncm91bmRGbGV4LmFwcGVuZENoaWxkKHRoaXMuYmFja2dyb3VuZExvd2VyXyk7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRVcHBlcl8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFVwcGVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQkFDS0dST1VORF9VUFBFUik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmxleC5hcHBlbmRDaGlsZCh0aGlzLmJhY2tncm91bmRVcHBlcl8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm91bmRJbnB1dEhhbmRsZXIgPSB0aGlzLm9uSW5wdXRfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRDaGFuZ2VIYW5kbGVyID0gdGhpcy5vbkNoYW5nZV8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyID0gdGhpcy5vbk1vdXNlVXBfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRDb250YWluZXJNb3VzZURvd25IYW5kbGVyID0gdGhpcy5vbkNvbnRhaW5lck1vdXNlRG93bl8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuYm91bmRJbnB1dEhhbmRsZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRDaGFuZ2VIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuYm91bmRDb250YWluZXJNb3VzZURvd25IYW5kbGVyKTtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZVN0eWxlc18oKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxTbGlkZXIsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsU2xpZGVyJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1zbGlkZXInLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNsaWRlci5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFNuYWNrYmFyIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxTbmFja2JhciA9IGZ1bmN0aW9uIE1hdGVyaWFsU25hY2tiYXIoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIHRoaXMudGV4dEVsZW1lbnRfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuY3NzQ2xhc3Nlc18uTUVTU0FHRSk7XG4gICAgdGhpcy5hY3Rpb25FbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLmNzc0NsYXNzZXNfLkFDVElPTik7XG4gICAgaWYgKCF0aGlzLnRleHRFbGVtZW50Xykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIG11c3QgYmUgYSBtZXNzYWdlIGVsZW1lbnQgZm9yIGEgc25hY2tiYXIuJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5hY3Rpb25FbGVtZW50Xykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIG11c3QgYmUgYW4gYWN0aW9uIGVsZW1lbnQgZm9yIGEgc25hY2tiYXIuJyk7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5hY3Rpb25IYW5kbGVyXyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VfID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aW9uVGV4dF8gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5xdWV1ZWROb3RpZmljYXRpb25zXyA9IFtdO1xuICAgIHRoaXMuc2V0QWN0aW9uSGlkZGVuXyh0cnVlKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsU25hY2tiYXInXSA9IE1hdGVyaWFsU25hY2tiYXI7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZS5Db25zdGFudF8gPSB7XG4gICAgLy8gVGhlIGR1cmF0aW9uIG9mIHRoZSBzbmFja2JhciBzaG93L2hpZGUgYW5pbWF0aW9uLCBpbiBtcy5cbiAgICBBTklNQVRJT05fTEVOR1RIOiAyNTBcbn07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZS5jc3NDbGFzc2VzXyA9IHtcbiAgICBTTkFDS0JBUjogJ21kbC1zbmFja2JhcicsXG4gICAgTUVTU0FHRTogJ21kbC1zbmFja2Jhcl9fdGV4dCcsXG4gICAgQUNUSU9OOiAnbWRsLXNuYWNrYmFyX19hY3Rpb24nLFxuICAgIEFDVElWRTogJ21kbC1zbmFja2Jhci0tYWN0aXZlJ1xufTtcbi8qKlxuICAgKiBEaXNwbGF5IHRoZSBzbmFja2Jhci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZS5kaXNwbGF5U25hY2tiYXJfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgaWYgKHRoaXMuYWN0aW9uSGFuZGxlcl8pIHtcbiAgICAgICAgdGhpcy5hY3Rpb25FbGVtZW50Xy50ZXh0Q29udGVudCA9IHRoaXMuYWN0aW9uVGV4dF87XG4gICAgICAgIHRoaXMuYWN0aW9uRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFjdGlvbkhhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5zZXRBY3Rpb25IaWRkZW5fKGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy50ZXh0RWxlbWVudF8udGV4dENvbnRlbnQgPSB0aGlzLm1lc3NhZ2VfO1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLmNzc0NsYXNzZXNfLkFDVElWRSk7XG4gICAgdGhpcy5lbGVtZW50Xy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgc2V0VGltZW91dCh0aGlzLmNsZWFudXBfLmJpbmQodGhpcyksIHRoaXMudGltZW91dF8pO1xufTtcbi8qKlxuICAgKiBTaG93IHRoZSBzbmFja2Jhci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgZm9yIHRoZSBub3RpZmljYXRpb24uXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZS5zaG93U25hY2tiYXIgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBhIGRhdGEgb2JqZWN0IHdpdGggYXQgbGVhc3QgYSBtZXNzYWdlIHRvIGRpc3BsYXkuJyk7XG4gICAgfVxuICAgIGlmIChkYXRhWydtZXNzYWdlJ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgbWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQuJyk7XG4gICAgfVxuICAgIGlmIChkYXRhWydhY3Rpb25IYW5kbGVyJ10gJiYgIWRhdGFbJ2FjdGlvblRleHQnXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGFjdGlvbiB0ZXh0IHdpdGggdGhlIGhhbmRsZXIuJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnF1ZXVlZE5vdGlmaWNhdGlvbnNfLnB1c2goZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm1lc3NhZ2VfID0gZGF0YVsnbWVzc2FnZSddO1xuICAgICAgICBpZiAoZGF0YVsndGltZW91dCddKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRfID0gZGF0YVsndGltZW91dCddO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0XyA9IDI3NTA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGFbJ2FjdGlvbkhhbmRsZXInXSkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25IYW5kbGVyXyA9IGRhdGFbJ2FjdGlvbkhhbmRsZXInXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVsnYWN0aW9uVGV4dCddKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvblRleHRfID0gZGF0YVsnYWN0aW9uVGV4dCddO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzcGxheVNuYWNrYmFyXygpO1xuICAgIH1cbn07XG5NYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZVsnc2hvd1NuYWNrYmFyJ10gPSBNYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZS5zaG93U25hY2tiYXI7XG4vKipcbiAgICogQ2hlY2sgaWYgdGhlIHF1ZXVlIGhhcyBpdGVtcyB3aXRoaW4gaXQuXG4gICAqIElmIGl0IGRvZXMsIGRpc3BsYXkgdGhlIG5leHQgZW50cnkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuY2hlY2tRdWV1ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucXVldWVkTm90aWZpY2F0aW9uc18ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnNob3dTbmFja2Jhcih0aGlzLnF1ZXVlZE5vdGlmaWNhdGlvbnNfLnNoaWZ0KCkpO1xuICAgIH1cbn07XG4vKipcbiAgICogQ2xlYW51cCB0aGUgc25hY2tiYXIgZXZlbnQgbGlzdGVuZXJzIGFuZCBhY2Nlc3NpYmxpdHkgYXR0cmlidXRlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZS5jbGVhbnVwXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jc3NDbGFzc2VzXy5BQ1RJVkUpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICB0aGlzLnRleHRFbGVtZW50Xy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBpZiAoIUJvb2xlYW4odGhpcy5hY3Rpb25FbGVtZW50Xy5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpKSB7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGlvbkhpZGRlbl8odHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbkVsZW1lbnRfLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbkVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY3Rpb25IYW5kbGVyXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3Rpb25IYW5kbGVyXyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5tZXNzYWdlXyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5hY3Rpb25UZXh0XyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGVja1F1ZXVlXygpO1xuICAgIH0uYmluZCh0aGlzKSwgdGhpcy5Db25zdGFudF8uQU5JTUFUSU9OX0xFTkdUSCk7XG59O1xuLyoqXG4gICAqIFNldCB0aGUgYWN0aW9uIGhhbmRsZXIgaGlkZGVuIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuc2V0QWN0aW9uSGlkZGVuXyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFjdGlvbkVsZW1lbnRfLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aW9uRWxlbWVudF8ucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxTbmFja2JhcixcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxTbmFja2JhcicsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtc25hY2tiYXInLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNuYWNrYmFyLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFNwaW5uZXIgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbnZhciBNYXRlcmlhbFNwaW5uZXIgPSBmdW5jdGlvbiBNYXRlcmlhbFNwaW5uZXIoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFNwaW5uZXInXSA9IE1hdGVyaWFsU3Bpbm5lcjtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuQ29uc3RhbnRfID0geyBNRExfU1BJTk5FUl9MQVlFUl9DT1VOVDogNCB9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBNRExfU1BJTk5FUl9MQVlFUjogJ21kbC1zcGlubmVyX19sYXllcicsXG4gICAgTURMX1NQSU5ORVJfQ0lSQ0xFX0NMSVBQRVI6ICdtZGwtc3Bpbm5lcl9fY2lyY2xlLWNsaXBwZXInLFxuICAgIE1ETF9TUElOTkVSX0NJUkNMRTogJ21kbC1zcGlubmVyX19jaXJjbGUnLFxuICAgIE1ETF9TUElOTkVSX0dBUF9QQVRDSDogJ21kbC1zcGlubmVyX19nYXAtcGF0Y2gnLFxuICAgIE1ETF9TUElOTkVSX0xFRlQ6ICdtZGwtc3Bpbm5lcl9fbGVmdCcsXG4gICAgTURMX1NQSU5ORVJfUklHSFQ6ICdtZGwtc3Bpbm5lcl9fcmlnaHQnXG59O1xuLyoqXG4gICAqIEF1eGlsaWFyeSBtZXRob2QgdG8gY3JlYXRlIGEgc3Bpbm5lciBsYXllci5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IG9mIHRoZSBsYXllciB0byBiZSBjcmVhdGVkLlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5jcmVhdGVMYXllciA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHZhciBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9MQVlFUik7XG4gICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0xBWUVSICsgJy0nICsgaW5kZXgpO1xuICAgIHZhciBsZWZ0Q2xpcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRDbGlwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9DSVJDTEVfQ0xJUFBFUik7XG4gICAgbGVmdENsaXBwZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0xFRlQpO1xuICAgIHZhciBnYXBQYXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhcFBhdGNoLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9HQVBfUEFUQ0gpO1xuICAgIHZhciByaWdodENsaXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodENsaXBwZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0NJUkNMRV9DTElQUEVSKTtcbiAgICByaWdodENsaXBwZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX1JJR0hUKTtcbiAgICB2YXIgY2lyY2xlT3duZXJzID0gW1xuICAgICAgICBsZWZ0Q2xpcHBlcixcbiAgICAgICAgZ2FwUGF0Y2gsXG4gICAgICAgIHJpZ2h0Q2xpcHBlclxuICAgIF07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXJjbGVPd25lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0NJUkNMRSk7XG4gICAgICAgIGNpcmNsZU93bmVyc1tpXS5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgIH1cbiAgICBsYXllci5hcHBlbmRDaGlsZChsZWZ0Q2xpcHBlcik7XG4gICAgbGF5ZXIuYXBwZW5kQ2hpbGQoZ2FwUGF0Y2gpO1xuICAgIGxheWVyLmFwcGVuZENoaWxkKHJpZ2h0Q2xpcHBlcik7XG4gICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChsYXllcik7XG59O1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZVsnY3JlYXRlTGF5ZXInXSA9IE1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuY3JlYXRlTGF5ZXI7XG4vKipcbiAgICogU3RvcHMgdGhlIHNwaW5uZXIgYW5pbWF0aW9uLlxuICAgKiBQdWJsaWMgbWV0aG9kIGZvciB1c2VycyB3aG8gbmVlZCB0byBzdG9wIHRoZSBzcGlubmVyIGZvciBhbnkgcmVhc29uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG59O1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZVsnc3RvcCddID0gTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5zdG9wO1xuLyoqXG4gICAqIFN0YXJ0cyB0aGUgc3Bpbm5lciBhbmltYXRpb24uXG4gICAqIFB1YmxpYyBtZXRob2QgZm9yIHVzZXJzIHdobyBuZWVkIHRvIG1hbnVhbGx5IHN0YXJ0IHRoZSBzcGlubmVyIGZvciBhbnkgcmVhc29uXG4gICAqIChpbnN0ZWFkIG9mIGp1c3QgYWRkaW5nIHRoZSAnaXMtYWN0aXZlJyBjbGFzcyB0byB0aGVpciBtYXJrdXApLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xufTtcbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGVbJ3N0YXJ0J10gPSBNYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLnN0YXJ0O1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gdGhpcy5Db25zdGFudF8uTURMX1NQSU5ORVJfTEFZRVJfQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVMYXllcihpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQoJ2lzLXVwZ3JhZGVkJyk7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFNwaW5uZXIsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsU3Bpbm5lcicsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtc3Bpbm5lcicsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3Bpbm5lci5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBDaGVja2JveCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsU3dpdGNoID0gZnVuY3Rpb24gTWF0ZXJpYWxTd2l0Y2goZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFN3aXRjaCddID0gTWF0ZXJpYWxTd2l0Y2g7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuQ29uc3RhbnRfID0geyBUSU5ZX1RJTUVPVVQ6IDAuMDAxIH07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgSU5QVVQ6ICdtZGwtc3dpdGNoX19pbnB1dCcsXG4gICAgVFJBQ0s6ICdtZGwtc3dpdGNoX190cmFjaycsXG4gICAgVEhVTUI6ICdtZGwtc3dpdGNoX190aHVtYicsXG4gICAgRk9DVVNfSEVMUEVSOiAnbWRsLXN3aXRjaF9fZm9jdXMtaGVscGVyJyxcbiAgICBSSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnLFxuICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtc3dpdGNoX19yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEVfQ0VOVEVSOiAnbWRsLXJpcHBsZS0tY2VudGVyJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICBJU19GT0NVU0VEOiAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfQ0hFQ0tFRDogJ2lzLWNoZWNrZWQnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2Ugb2Ygc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbkNoYW5nZV8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBmb2N1cyBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub25Gb2N1c18gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGxvc3QgZm9jdXMgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNldXAuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbk1vdXNlVXBfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5ibHVyXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2xhc3MgdXBkYXRlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUudXBkYXRlQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XG4gICAgdGhpcy5jaGVja1RvZ2dsZVN0YXRlKCk7XG59O1xuLyoqXG4gICAqIEFkZCBibHVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5ibHVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IHdoeSB0aGVyZSdzIGEgZm9jdXMgZXZlbnQgYmVpbmcgZmlyZWQgYWZ0ZXIgb3VyIGJsdXIsXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gYXZvaWQgdGhpcyBoYWNrLlxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmJsdXIoKTtcbiAgICB9LmJpbmQodGhpcyksIHRoaXMuQ29uc3RhbnRfLlRJTllfVElNRU9VVCk7XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudHMgZGlzYWJsZWQgc3RhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnY2hlY2tEaXNhYmxlZCddID0gTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQ7XG4vKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudHMgdG9nZ2xlZCBzdGF0ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlWydjaGVja1RvZ2dsZVN0YXRlJ10gPSBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZTtcbi8qKlxuICAgKiBEaXNhYmxlIHN3aXRjaC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIHN3aXRjaC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnZW5hYmxlJ10gPSBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIEFjdGl2YXRlIHN3aXRjaC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnb24nXSA9IE1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbjtcbi8qKlxuICAgKiBEZWFjdGl2YXRlIHN3aXRjaC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlWydvZmYnXSA9IE1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vZmY7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLklOUFVUKTtcbiAgICAgICAgdmFyIHRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRyYWNrLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UUkFDSyk7XG4gICAgICAgIHZhciB0aHVtYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aHVtYi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVEhVTUIpO1xuICAgICAgICB2YXIgZm9jdXNIZWxwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGZvY3VzSGVscGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5GT0NVU19IRUxQRVIpO1xuICAgICAgICB0aHVtYi5hcHBlbmRDaGlsZChmb2N1c0hlbHBlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQodHJhY2spO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHRodW1iKTtcbiAgICAgICAgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyID0gdGhpcy5vbk1vdXNlVXBfLmJpbmQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfSUdOT1JFX0VWRU5UUyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DRU5URVIpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyKTtcbiAgICAgICAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRSk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmFwcGVuZENoaWxkKHJpcHBsZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm91bmRDaGFuZ2VIYW5kbGVyID0gdGhpcy5vbkNoYW5nZV8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZEZvY3VzSGFuZGxlciA9IHRoaXMub25Gb2N1c18uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZEJsdXJIYW5kbGVyID0gdGhpcy5vbkJsdXJfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuYm91bmRGb2N1c0hhbmRsZXIpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRCbHVySGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlcik7XG4gICAgICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKCdpcy11cGdyYWRlZCcpO1xuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxTd2l0Y2gsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsU3dpdGNoJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1zd2l0Y2gnLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHN3aXRjaC5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBUZXh0ZmllbGQgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFRleHRmaWVsZCA9IGZ1bmN0aW9uIE1hdGVyaWFsVGV4dGZpZWxkKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICB0aGlzLm1heFJvd3MgPSB0aGlzLkNvbnN0YW50Xy5OT19NQVhfUk9XUztcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxUZXh0ZmllbGQnXSA9IE1hdGVyaWFsVGV4dGZpZWxkO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLkNvbnN0YW50XyA9IHtcbiAgICBOT19NQVhfUk9XUzogLTEsXG4gICAgTUFYX1JPV1NfQVRUUklCVVRFOiAnbWF4cm93cydcbn07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgTEFCRUw6ICdtZGwtdGV4dGZpZWxkX19sYWJlbCcsXG4gICAgSU5QVVQ6ICdtZGwtdGV4dGZpZWxkX19pbnB1dCcsXG4gICAgSVNfRElSVFk6ICdpcy1kaXJ0eScsXG4gICAgSVNfRk9DVVNFRDogJ2lzLWZvY3VzZWQnLFxuICAgIElTX0RJU0FCTEVEOiAnaXMtZGlzYWJsZWQnLFxuICAgIElTX0lOVkFMSUQ6ICdpcy1pbnZhbGlkJyxcbiAgICBJU19VUEdSQURFRDogJ2lzLXVwZ3JhZGVkJyxcbiAgICBIQVNfUExBQ0VIT0xERVI6ICdoYXMtcGxhY2Vob2xkZXInXG59O1xuLyoqXG4gICAqIEhhbmRsZSBpbnB1dCBiZWluZyBlbnRlcmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUub25LZXlEb3duXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBjdXJyZW50Um93Q291bnQgPSBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoJ1xcbicpLmxlbmd0aDtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRSb3dDb3VudCA+PSB0aGlzLm1heFJvd3MpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gICAqIEhhbmRsZSBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLm9uRm9jdXNfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBsb3N0IGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUub25CbHVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgcmVzZXQgZXZlbnQgZnJvbSBvdXQgc2lkZS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLm9uUmVzZXRfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2xhc3MgdXBkYXRlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUudXBkYXRlQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XG4gICAgdGhpcy5jaGVja1ZhbGlkaXR5KCk7XG4gICAgdGhpcy5jaGVja0RpcnR5KCk7XG4gICAgdGhpcy5jaGVja0ZvY3VzKCk7XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogQ2hlY2sgdGhlIGRpc2FibGVkIHN0YXRlIGFuZCB1cGRhdGUgZmllbGQgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dF8uZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlWydjaGVja0Rpc2FibGVkJ10gPSBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZDtcbi8qKlxuICAqIENoZWNrIHRoZSBmb2N1cyBzdGF0ZSBhbmQgdXBkYXRlIGZpZWxkIGFjY29yZGluZ2x5LlxuICAqXG4gICogQHB1YmxpY1xuICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoZWNrRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKEJvb2xlYW4odGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCc6Zm9jdXMnKSkpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZVsnY2hlY2tGb2N1cyddID0gTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoZWNrRm9jdXM7XG4vKipcbiAgICogQ2hlY2sgdGhlIHZhbGlkaXR5IHN0YXRlIGFuZCB1cGRhdGUgZmllbGQgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tWYWxpZGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dF8udmFsaWRpdHkpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRfLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19JTlZBTElEKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0lOVkFMSUQpO1xuICAgICAgICB9XG4gICAgfVxufTtcbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZVsnY2hlY2tWYWxpZGl0eSddID0gTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoZWNrVmFsaWRpdHk7XG4vKipcbiAgICogQ2hlY2sgdGhlIGRpcnR5IHN0YXRlIGFuZCB1cGRhdGUgZmllbGQgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tEaXJ0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dF8udmFsdWUgJiYgdGhpcy5pbnB1dF8udmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVJUWSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElSVFkpO1xuICAgIH1cbn07XG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGVbJ2NoZWNrRGlydHknXSA9IE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGVja0RpcnR5O1xuLyoqXG4gICAqIERpc2FibGUgdGV4dCBmaWVsZC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRfLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlWydkaXNhYmxlJ10gPSBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuZGlzYWJsZTtcbi8qKlxuICAgKiBFbmFibGUgdGV4dCBmaWVsZC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dF8uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlWydlbmFibGUnXSA9IE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5lbmFibGU7XG4vKipcbiAgICogVXBkYXRlIHRleHQgZmllbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gd2hpY2ggdG8gc2V0IHRoZSBjb250cm9sIChvcHRpb25hbCkuXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdGhpcy5pbnB1dF8udmFsdWUgPSB2YWx1ZSB8fCAnJztcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlWydjaGFuZ2UnXSA9IE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGFuZ2U7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMubGFiZWxfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uTEFCRUwpO1xuICAgICAgICB0aGlzLmlucHV0XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLklOUFVUKTtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRfKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dF8uaGFzQXR0cmlidXRlKHRoaXMuQ29uc3RhbnRfLk1BWF9ST1dTX0FUVFJJQlVURSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1heFJvd3MgPSBwYXJzZUludCh0aGlzLmlucHV0Xy5nZXRBdHRyaWJ1dGUodGhpcy5Db25zdGFudF8uTUFYX1JPV1NfQVRUUklCVVRFKSwgMTApO1xuICAgICAgICAgICAgICAgIGlmIChpc05hTih0aGlzLm1heFJvd3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4Um93cyA9IHRoaXMuQ29uc3RhbnRfLk5PX01BWF9ST1dTO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0Xy5oYXNBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5IQVNfUExBQ0VIT0xERVIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ib3VuZFVwZGF0ZUNsYXNzZXNIYW5kbGVyID0gdGhpcy51cGRhdGVDbGFzc2VzXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ib3VuZEZvY3VzSGFuZGxlciA9IHRoaXMub25Gb2N1c18uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRCbHVySGFuZGxlciA9IHRoaXMub25CbHVyXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ib3VuZFJlc2V0SGFuZGxlciA9IHRoaXMub25SZXNldF8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRfLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5ib3VuZFVwZGF0ZUNsYXNzZXNIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZEZvY3VzSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmlucHV0Xy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5ib3VuZEJsdXJIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRfLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgdGhpcy5ib3VuZFJlc2V0SGFuZGxlcik7XG4gICAgICAgICAgICBpZiAodGhpcy5tYXhSb3dzICE9PSB0aGlzLkNvbnN0YW50Xy5OT19NQVhfUk9XUykge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgc2hvdWxkIGhhbmRsZSBwYXN0aW5nIG11bHRpIGxpbmUgdGV4dC5cbiAgICAgICAgICAgICAgICAvLyBDdXJyZW50bHkgZG9lc24ndC5cbiAgICAgICAgICAgICAgICB0aGlzLmJvdW5kS2V5RG93bkhhbmRsZXIgPSB0aGlzLm9uS2V5RG93bl8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0Xy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5ib3VuZEtleURvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbnZhbGlkID0gdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19JTlZBTElEKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1VQR1JBREVEKTtcbiAgICAgICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfSU5WQUxJRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dF8uaGFzQXR0cmlidXRlKCdhdXRvZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxUZXh0ZmllbGQsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsVGV4dGZpZWxkJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy10ZXh0ZmllbGQnLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRleHRmaWVsZC5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBUb29sdGlwIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxUb29sdGlwID0gZnVuY3Rpb24gTWF0ZXJpYWxUb29sdGlwKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxUb29sdGlwJ10gPSBNYXRlcmlhbFRvb2x0aXA7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRvb2x0aXAucHJvdG90eXBlLkNvbnN0YW50XyA9IHt9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUb29sdGlwLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBJU19BQ1RJVkU6ICdpcy1hY3RpdmUnLFxuICAgIEJPVFRPTTogJ21kbC10b29sdGlwLS1ib3R0b20nLFxuICAgIExFRlQ6ICdtZGwtdG9vbHRpcC0tbGVmdCcsXG4gICAgUklHSFQ6ICdtZGwtdG9vbHRpcC0tcmlnaHQnLFxuICAgIFRPUDogJ21kbC10b29sdGlwLS10b3AnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZWVudGVyIGZvciB0b29sdGlwLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRvb2x0aXAucHJvdG90eXBlLmhhbmRsZU1vdXNlRW50ZXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHByb3BzID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBsZWZ0ID0gcHJvcHMubGVmdCArIHByb3BzLndpZHRoIC8gMjtcbiAgICB2YXIgdG9wID0gcHJvcHMudG9wICsgcHJvcHMuaGVpZ2h0IC8gMjtcbiAgICB2YXIgbWFyZ2luTGVmdCA9IC0xICogKHRoaXMuZWxlbWVudF8ub2Zmc2V0V2lkdGggLyAyKTtcbiAgICB2YXIgbWFyZ2luVG9wID0gLTEgKiAodGhpcy5lbGVtZW50Xy5vZmZzZXRIZWlnaHQgLyAyKTtcbiAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5MRUZUKSB8fCB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlJJR0hUKSkge1xuICAgICAgICBsZWZ0ID0gcHJvcHMud2lkdGggLyAyO1xuICAgICAgICBpZiAodG9wICsgbWFyZ2luVG9wIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLm1hcmdpblRvcCA9ICcwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUudG9wID0gdG9wICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubWFyZ2luVG9wID0gbWFyZ2luVG9wICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChsZWZ0ICsgbWFyZ2luTGVmdCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubWFyZ2luTGVmdCA9ICcwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLnRvcCA9IHByb3BzLnRvcCAtIHRoaXMuZWxlbWVudF8ub2Zmc2V0SGVpZ2h0IC0gMTAgKyAncHgnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSUdIVCkpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5sZWZ0ID0gcHJvcHMubGVmdCArIHByb3BzLndpZHRoICsgMTAgKyAncHgnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5MRUZUKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmxlZnQgPSBwcm9wcy5sZWZ0IC0gdGhpcy5lbGVtZW50Xy5vZmZzZXRXaWR0aCAtIDEwICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLnRvcCA9IHByb3BzLnRvcCArIHByb3BzLmhlaWdodCArIDEwICsgJ3B4JztcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbn07XG4vKipcbiAgICogSGlkZSB0b29sdGlwIG9uIG1vdXNlbGVhdmUgb3Igc2Nyb2xsXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUb29sdGlwLnByb3RvdHlwZS5oaWRlVG9vbHRpcF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbn07XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsVG9vbHRpcC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB2YXIgZm9yRWxJZCA9IHRoaXMuZWxlbWVudF8uZ2V0QXR0cmlidXRlKCdmb3InKSB8fCB0aGlzLmVsZW1lbnRfLmdldEF0dHJpYnV0ZSgnZGF0YS1tZGwtZm9yJyk7XG4gICAgICAgIGlmIChmb3JFbElkKSB7XG4gICAgICAgICAgICB0aGlzLmZvckVsZW1lbnRfID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9yRWxJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZm9yRWxlbWVudF8pIHtcbiAgICAgICAgICAgIC8vIEl0J3MgbGVmdCBoZXJlIGJlY2F1c2UgaXQgcHJldmVudHMgYWNjaWRlbnRhbCB0ZXh0IHNlbGVjdGlvbiBvbiBBbmRyb2lkXG4gICAgICAgICAgICBpZiAoIXRoaXMuZm9yRWxlbWVudF8uaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JFbGVtZW50Xy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm91bmRNb3VzZUVudGVySGFuZGxlciA9IHRoaXMuaGFuZGxlTW91c2VFbnRlcl8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRNb3VzZUxlYXZlQW5kU2Nyb2xsSGFuZGxlciA9IHRoaXMuaGlkZVRvb2x0aXBfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmZvckVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmJvdW5kTW91c2VFbnRlckhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuZm9yRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmJvdW5kTW91c2VFbnRlckhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuZm9yRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuYm91bmRNb3VzZUxlYXZlQW5kU2Nyb2xsSGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuYm91bmRNb3VzZUxlYXZlQW5kU2Nyb2xsSGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuYm91bmRNb3VzZUxlYXZlQW5kU2Nyb2xsSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsVG9vbHRpcCxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxUb29sdGlwJyxcbiAgICBjc3NDbGFzczogJ21kbC10b29sdGlwJ1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRvb2x0aXAuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgRGF0YSBUYWJsZSBDYXJkIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbERhdGFUYWJsZSA9IGZ1bmN0aW9uIE1hdGVyaWFsRGF0YVRhYmxlKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxEYXRhVGFibGUnXSA9IE1hdGVyaWFsRGF0YVRhYmxlO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxEYXRhVGFibGUucHJvdG90eXBlLkNvbnN0YW50XyA9IHt9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxEYXRhVGFibGUucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIERBVEFfVEFCTEU6ICdtZGwtZGF0YS10YWJsZScsXG4gICAgU0VMRUNUQUJMRTogJ21kbC1kYXRhLXRhYmxlLS1zZWxlY3RhYmxlJyxcbiAgICBTRUxFQ1RfRUxFTUVOVDogJ21kbC1kYXRhLXRhYmxlX19zZWxlY3QnLFxuICAgIElTX1NFTEVDVEVEOiAnaXMtc2VsZWN0ZWQnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnXG59O1xuLyoqXG4gICAqIEdlbmVyYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdG9nZ2xlcyB0aGUgc2VsZWN0aW9uIHN0YXRlIG9mIGFcbiAgICogc2luZ2xlIHJvdyAob3IgbXVsdGlwbGUgcm93cykuXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gY2hlY2tib3ggQ2hlY2tib3ggdGhhdCB0b2dnbGVzIHRoZSBzZWxlY3Rpb24gc3RhdGUuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcm93IFJvdyB0byB0b2dnbGUgd2hlbiBjaGVja2JveCBjaGFuZ2VzLlxuICAgKiBAcGFyYW0geyhBcnJheTxPYmplY3Q+fE5vZGVMaXN0KT19IG9wdF9yb3dzIFJvd3MgdG8gdG9nZ2xlIHdoZW4gY2hlY2tib3ggY2hhbmdlcy5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbERhdGFUYWJsZS5wcm90b3R5cGUuc2VsZWN0Um93XyA9IGZ1bmN0aW9uIChjaGVja2JveCwgcm93LCBvcHRfcm93cykge1xuICAgIGlmIChyb3cpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19TRUxFQ1RFRCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU0VMRUNURUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGlmIChvcHRfcm93cykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgZWw7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBvcHRfcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBlbCA9IG9wdF9yb3dzW2ldLnF1ZXJ5U2VsZWN0b3IoJ3RkJykucXVlcnlTZWxlY3RvcignLm1kbC1jaGVja2JveCcpO1xuICAgICAgICAgICAgICAgICAgICBlbFsnTWF0ZXJpYWxDaGVja2JveCddLmNoZWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIG9wdF9yb3dzW2ldLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19TRUxFQ1RFRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb3B0X3Jvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZWwgPSBvcHRfcm93c1tpXS5xdWVyeVNlbGVjdG9yKCd0ZCcpLnF1ZXJ5U2VsZWN0b3IoJy5tZGwtY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxbJ01hdGVyaWFsQ2hlY2tib3gnXS51bmNoZWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIG9wdF9yb3dzW2ldLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19TRUxFQ1RFRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBDcmVhdGVzIGEgY2hlY2tib3ggZm9yIGEgc2luZ2xlIG9yIG9yIG11bHRpcGxlIHJvd3MgYW5kIGhvb2tzIHVwIHRoZVxuICAgKiBldmVudCBoYW5kbGluZy5cbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSByb3cgUm93IHRvIHRvZ2dsZSB3aGVuIGNoZWNrYm94IGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7KEFycmF5PE9iamVjdD58Tm9kZUxpc3QpPX0gb3B0X3Jvd3MgUm93cyB0byB0b2dnbGUgd2hlbiBjaGVja2JveCBjaGFuZ2VzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsRGF0YVRhYmxlLnByb3RvdHlwZS5jcmVhdGVDaGVja2JveF8gPSBmdW5jdGlvbiAocm93LCBvcHRfcm93cykge1xuICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdmFyIGxhYmVsQ2xhc3NlcyA9IFtcbiAgICAgICAgJ21kbC1jaGVja2JveCcsXG4gICAgICAgICdtZGwtanMtY2hlY2tib3gnLFxuICAgICAgICAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgICAgICB0aGlzLkNzc0NsYXNzZXNfLlNFTEVDVF9FTEVNRU5UXG4gICAgXTtcbiAgICBsYWJlbC5jbGFzc05hbWUgPSBsYWJlbENsYXNzZXMuam9pbignICcpO1xuICAgIHZhciBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnbWRsLWNoZWNrYm94X19pbnB1dCcpO1xuICAgIGlmIChyb3cpIHtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHJvdy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19TRUxFQ1RFRCk7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuc2VsZWN0Um93XyhjaGVja2JveCwgcm93KSk7XG4gICAgfSBlbHNlIGlmIChvcHRfcm93cykge1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnNlbGVjdFJvd18oY2hlY2tib3gsIG51bGwsIG9wdF9yb3dzKSk7XG4gICAgfVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KGxhYmVsLCAnTWF0ZXJpYWxDaGVja2JveCcpO1xuICAgIHJldHVybiBsYWJlbDtcbn07XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsRGF0YVRhYmxlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHZhciBmaXJzdEhlYWRlciA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcigndGgnKTtcbiAgICAgICAgdmFyIGJvZHlSb3dzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpKTtcbiAgICAgICAgdmFyIGZvb3RSb3dzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCd0Zm9vdCB0cicpKTtcbiAgICAgICAgdmFyIHJvd3MgPSBib2R5Um93cy5jb25jYXQoZm9vdFJvd3MpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5TRUxFQ1RBQkxFKSkge1xuICAgICAgICAgICAgdmFyIHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIHZhciBoZWFkZXJDaGVja2JveCA9IHRoaXMuY3JlYXRlQ2hlY2tib3hfKG51bGwsIHJvd3MpO1xuICAgICAgICAgICAgdGguYXBwZW5kQ2hpbGQoaGVhZGVyQ2hlY2tib3gpO1xuICAgICAgICAgICAgZmlyc3RIZWFkZXIucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGgsIGZpcnN0SGVhZGVyKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBmaXJzdENlbGwgPSByb3dzW2ldLnF1ZXJ5U2VsZWN0b3IoJ3RkJyk7XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0Q2VsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocm93c1tpXS5wYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdUQk9EWScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3dDaGVja2JveCA9IHRoaXMuY3JlYXRlQ2hlY2tib3hfKHJvd3NbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGQuYXBwZW5kQ2hpbGQocm93Q2hlY2tib3gpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvd3NbaV0uaW5zZXJ0QmVmb3JlKHRkLCBmaXJzdENlbGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1VQR1JBREVEKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxEYXRhVGFibGUsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsRGF0YVRhYmxlJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1kYXRhLXRhYmxlJ1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRhdGEtdGFibGUuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgUmlwcGxlIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxSaXBwbGUgPSBmdW5jdGlvbiBNYXRlcmlhbFJpcHBsZShlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsUmlwcGxlJ10gPSBNYXRlcmlhbFJpcHBsZTtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmlwcGxlLnByb3RvdHlwZS5Db25zdGFudF8gPSB7XG4gICAgSU5JVElBTF9TQ0FMRTogJ3NjYWxlKDAuMDAwMSwgMC4wMDAxKScsXG4gICAgSU5JVElBTF9TSVpFOiAnMXB4JyxcbiAgICBJTklUSUFMX09QQUNJVFk6ICcwLjQnLFxuICAgIEZJTkFMX09QQUNJVFk6ICcwJyxcbiAgICBGSU5BTF9TQ0FMRTogJydcbn07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJpcHBsZS5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgUklQUExFX0NFTlRFUjogJ21kbC1yaXBwbGUtLWNlbnRlcicsXG4gICAgUklQUExFX0VGRkVDVF9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnLFxuICAgIFJJUFBMRTogJ21kbC1yaXBwbGUnLFxuICAgIElTX0FOSU1BVElORzogJ2lzLWFuaW1hdGluZycsXG4gICAgSVNfVklTSUJMRTogJ2lzLXZpc2libGUnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZSAvIGZpbmdlciBkb3duIG9uIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmlwcGxlLnByb3RvdHlwZS5kb3duSGFuZGxlcl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUud2lkdGggJiYgIXRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUuaGVpZ2h0KSB7XG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5lbGVtZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5ib3VuZEhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kV2lkdGggPSByZWN0LndpZHRoO1xuICAgICAgICB0aGlzLnJpcHBsZVNpemVfID0gTWF0aC5zcXJ0KHJlY3Qud2lkdGggKiByZWN0LndpZHRoICsgcmVjdC5oZWlnaHQgKiByZWN0LmhlaWdodCkgKiAyICsgMjtcbiAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5zdHlsZS53aWR0aCA9IHRoaXMucmlwcGxlU2l6ZV8gKyAncHgnO1xuICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLmhlaWdodCA9IHRoaXMucmlwcGxlU2l6ZV8gKyAncHgnO1xuICAgIH1cbiAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKTtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgdGhpcy5pZ25vcmluZ01vdXNlRG93bl8pIHtcbiAgICAgICAgdGhpcy5pZ25vcmluZ01vdXNlRG93bl8gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgICAgICB0aGlzLmlnbm9yaW5nTW91c2VEb3duXyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZyYW1lQ291bnQgPSB0aGlzLmdldEZyYW1lQ291bnQoKTtcbiAgICAgICAgaWYgKGZyYW1lQ291bnQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRGcmFtZUNvdW50KDEpO1xuICAgICAgICB2YXIgYm91bmQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgeDtcbiAgICAgICAgdmFyIHk7XG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGFyZSBoYW5kbGluZyBhIGtleWJvYXJkIGNsaWNrLlxuICAgICAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICAgICAgICB4ID0gTWF0aC5yb3VuZChib3VuZC53aWR0aCAvIDIpO1xuICAgICAgICAgICAgeSA9IE1hdGgucm91bmQoYm91bmQuaGVpZ2h0IC8gMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgY2xpZW50WCA9IGV2ZW50LmNsaWVudFggIT09IHVuZGVmaW5lZCA/IGV2ZW50LmNsaWVudFggOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICB2YXIgY2xpZW50WSA9IGV2ZW50LmNsaWVudFkgIT09IHVuZGVmaW5lZCA/IGV2ZW50LmNsaWVudFkgOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICB4ID0gTWF0aC5yb3VuZChjbGllbnRYIC0gYm91bmQubGVmdCk7XG4gICAgICAgICAgICB5ID0gTWF0aC5yb3VuZChjbGllbnRZIC0gYm91bmQudG9wKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFJpcHBsZVhZKHgsIHkpO1xuICAgICAgICB0aGlzLnNldFJpcHBsZVN0eWxlcyh0cnVlKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1GcmFtZUhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2UgLyBmaW5nZXIgdXAgb24gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLnVwSGFuZGxlcl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBEb24ndCBmaXJlIGZvciB0aGUgYXJ0aWZpY2lhbCBcIm1vdXNldXBcIiBnZW5lcmF0ZWQgYnkgYSBkb3VibGUtY2xpY2suXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LmRldGFpbCAhPT0gMikge1xuICAgICAgICAvLyBBbGxvdyBhIHJlcGFpbnQgdG8gb2NjdXIgYmVmb3JlIHJlbW92aW5nIHRoaXMgY2xhc3MsIHNvIHRoZSBhbmltYXRpb25cbiAgICAgICAgLy8gc2hvd3MgZm9yIHRhcCBldmVudHMsIHdoaWNoIHNlZW0gdG8gdHJpZ2dlciBhIG1vdXNldXAgdG9vIHNvb24gYWZ0ZXJcbiAgICAgICAgLy8gbW91c2Vkb3duLlxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAwKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFJpcHBsZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB2YXIgcmVjZW50ZXJpbmcgPSB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DRU5URVIpO1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVF9JR05PUkVfRVZFTlRTKSkge1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRSk7XG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnRfID0gMDtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlU2l6ZV8gPSAwO1xuICAgICAgICAgICAgdGhpcy54XyA9IDA7XG4gICAgICAgICAgICB0aGlzLnlfID0gMDtcbiAgICAgICAgICAgIC8vIFRvdWNoIHN0YXJ0IHByb2R1Y2VzIGEgY29tcGF0IG1vdXNlIGRvd24gZXZlbnQsIHdoaWNoIHdvdWxkIGNhdXNlIGFcbiAgICAgICAgICAgIC8vIHNlY29uZCByaXBwbGVzLiBUbyBhdm9pZCB0aGF0LCB3ZSB1c2UgdGhpcyBwcm9wZXJ0eSB0byBpZ25vcmUgdGhlIGZpcnN0XG4gICAgICAgICAgICAvLyBtb3VzZSBkb3duIGFmdGVyIGEgdG91Y2ggc3RhcnQuXG4gICAgICAgICAgICB0aGlzLmlnbm9yaW5nTW91c2VEb3duXyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3VuZERvd25IYW5kbGVyID0gdGhpcy5kb3duSGFuZGxlcl8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5ib3VuZERvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuYm91bmREb3duSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmJvdW5kVXBIYW5kbGVyID0gdGhpcy51cEhhbmRsZXJfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kVXBIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuYm91bmRVcEhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuYm91bmRVcEhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5ib3VuZFVwSGFuZGxlcik7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICogR2V0dGVyIGZvciBmcmFtZUNvdW50Xy5cbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgZnJhbWUgY291bnQuXG4gICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5nZXRGcmFtZUNvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZyYW1lQ291bnRfO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgKiBTZXR0ZXIgZm9yIGZyYW1lQ291bnRfLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gZkMgdGhlIGZyYW1lIGNvdW50LlxuICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuc2V0RnJhbWVDb3VudCA9IGZ1bmN0aW9uIChmQykge1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudF8gPSBmQztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICogR2V0dGVyIGZvciByaXBwbGVFbGVtZW50Xy5cbiAgICAgICAgICogQHJldHVybiB7RWxlbWVudH0gdGhlIHJpcHBsZSBlbGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuZ2V0UmlwcGxlRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yaXBwbGVFbGVtZW50XztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgcmlwcGxlIFggYW5kIFkgY29vcmRpbmF0ZXMuXG4gICAgICAgICAqIEBwYXJhbSAge251bWJlcn0gbmV3WCB0aGUgbmV3IFggY29vcmRpbmF0ZVxuICAgICAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IG5ld1kgdGhlIG5ldyBZIGNvb3JkaW5hdGVcbiAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnNldFJpcHBsZVhZID0gZnVuY3Rpb24gKG5ld1gsIG5ld1kpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhfID0gbmV3WDtcbiAgICAgICAgICAgICAgICB0aGlzLnlfID0gbmV3WTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgcmlwcGxlIHN0eWxlcy5cbiAgICAgICAgICogQHBhcmFtICB7Ym9vbGVhbn0gc3RhcnQgd2hldGhlciBvciBub3QgdGhpcyBpcyB0aGUgc3RhcnQgZnJhbWUuXG4gICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5zZXRSaXBwbGVTdHlsZXMgPSBmdW5jdGlvbiAoc3RhcnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yaXBwbGVFbGVtZW50XyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNmb3JtU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzaXplO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gJ3RyYW5zbGF0ZSgnICsgdGhpcy54XyArICdweCwgJyArIHRoaXMueV8gKyAncHgpJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IHRoaXMuQ29uc3RhbnRfLklOSVRJQUxfU0NBTEU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplID0gdGhpcy5Db25zdGFudF8uSU5JVElBTF9TSVpFO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSB0aGlzLkNvbnN0YW50Xy5GSU5BTF9TQ0FMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgPSB0aGlzLnJpcHBsZVNpemVfICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNlbnRlcmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9ICd0cmFuc2xhdGUoJyArIHRoaXMuYm91bmRXaWR0aCAvIDIgKyAncHgsICcgKyB0aGlzLmJvdW5kSGVpZ2h0IC8gMiArICdweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgJyArIG9mZnNldCArIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXMgYW4gYW5pbWF0aW9uIGZyYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuYW5pbUZyYW1lSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZUNvdW50Xy0tID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbUZyYW1lSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFJpcHBsZVN0eWxlcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxSaXBwbGUsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsUmlwcGxlJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICB3aWRnZXQ6IGZhbHNlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmlwcGxlLmpzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUnO1xuaW1wb3J0IHsgSGVsbG9Db21wb25lbnQgfSBmcm9tICcuL2hvbWUvaGVsbG8nO1xuaW1wb3J0IHsgUHJvZHVjdHNDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3RzL3Byb2R1Y3RzJztcbmltcG9ydCB7IFRlY2hub2xvZ3lDb21wb25lbnQgfSBmcm9tICcuL3RlY2hub2xvZ3kvdGVjaG5vbG9neSc7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICByZWRpcmVjdFRvOiAnL2hvbWUnLFxuICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICAgIH0sXG4gICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgZGF0YTogeyB0aXRsZTogJ0hvbWUnLCBuYW1lOiAnQW5ndWxhcjQnIH0gfSxcbiAgICB7IHBhdGg6ICdwcm9kdWN0cycsIGNvbXBvbmVudDogUHJvZHVjdHNDb21wb25lbnQsIGRhdGE6IHsgdGl0bGU6ICdQcm9kdWN0cycgfSB9LFxuICAgIHsgcGF0aDogJ3RlY2hub2xvZ3knLCBjb21wb25lbnQ6IFRlY2hub2xvZ3lDb21wb25lbnQsIGRhdGE6IHsgdGl0bGU6ICdUZWNobm9sb2d5JyB9IH0sXG4gICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIEhlbGxvQ29tcG9uZW50LFxuICAgICAgICBQcm9kdWN0c0NvbXBvbmVudCxcbiAgICAgICAgVGVjaG5vbG9neUNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L0Bhbmd1bGFyY2xhc3MvaG1yLWxvYWRlciEuL3NyYy9tb2R1bGVzL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKc29uU2VydmljZUNsaWVudCB9IGZyb20gJ3NlcnZpY2VzdGFjay1jbGllbnQnO1xuXG5kZWNsYXJlIHZhciBnbG9iYWw7IC8vcG9wdWxhdGVkIGZyb20gcGFja2FnZS5qc29uL2thcm1hL2dsb2JhbHNcblxuZXhwb3J0IHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoZ2xvYmFsLkJhc2VVcmwgfHwgJy8nKTtcblxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1ttZGxdJ1xufSlcbmV4cG9ydCBjbGFzcyBNREwgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50SGFuZGxlciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRG9tKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L0Bhbmd1bGFyY2xhc3MvaG1yLWxvYWRlciEuL3NyYy9zaGFyZWQvdXRpbHMudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2x9IGZyb20gJy4uL21vZGVsJztcbmltcG9ydCB7VmFsaWRhdGlvbkVycm9yc30gZnJvbSAnLi92YWxpZGF0b3JzJztcbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgY29udHJvbCBkaXJlY3RpdmVzLlxuICogXG4gKiBPbmx5IHVzZWQgaW50ZXJuYWxseSBpbiB0aGUgZm9ybXMgbW9kdWxlLlxuICogXG4gKiBcXEBzdGFibGVcbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlIHtcbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGNvbnRyb2woKTogQWJzdHJhY3RDb250cm9sIHsgdGhyb3cgbmV3IEVycm9yKCd1bmltcGxlbWVudGVkJyk7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wudmFsdWUgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB2YWxpZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC52YWxpZCA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGludmFsaWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuaW52YWxpZCA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHBlbmRpbmcoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wucGVuZGluZyA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGVycm9ycygpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmVycm9ycyA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHByaXN0aW5lKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnByaXN0aW5lIDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgZGlydHkoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuZGlydHkgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB0b3VjaGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnRvdWNoZWQgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB1bnRvdWNoZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wudW50b3VjaGVkIDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuZGlzYWJsZWQgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBlbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmVuYWJsZWQgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBzdGF0dXNDaGFuZ2VzKCk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuc3RhdHVzQ2hhbmdlcyA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHZhbHVlQ2hhbmdlcygpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcyA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHBhdGgoKTogc3RyaW5nW10geyByZXR1cm4gbnVsbDsgfVxuLyoqXG4gKiBAcGFyYW0gez89fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xucmVzZXQodmFsdWU6IGFueSA9IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRyb2wpIHRoaXMuY29udHJvbC5yZXNldCh2YWx1ZSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBlcnJvckNvZGVcbiAqIEBwYXJhbSB7Pz19IHBhdGhcbiAqIEByZXR1cm4gez99XG4gKi9cbmhhc0Vycm9yKGVycm9yQ29kZTogc3RyaW5nLCBwYXRoOiBzdHJpbmdbXSA9IG51bGwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmhhc0Vycm9yKGVycm9yQ29kZSwgcGF0aCkgOiBmYWxzZTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGVycm9yQ29kZVxuICogQHBhcmFtIHs/PX0gcGF0aFxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0RXJyb3IoZXJyb3JDb2RlOiBzdHJpbmcsIHBhdGg6IHN0cmluZ1tdID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5nZXRFcnJvcihlcnJvckNvZGUsIHBhdGgpIDogbnVsbDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL2Fic3RyYWN0X2NvbnRyb2xfZGlyZWN0aXZlLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7QWJzdHJhY3RDb250cm9sRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0X2NvbnRyb2xfZGlyZWN0aXZlJztcbmltcG9ydCB7Rm9ybX0gZnJvbSAnLi9mb3JtX2ludGVyZmFjZSc7XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgY29udGFpbnMgbXVsdGlwbGUge1xcQGxpbmsgTmdDb250cm9sfXMuXG4gKiBcbiAqIE9ubHkgdXNlZCBieSB0aGUgZm9ybXMgbW9kdWxlLlxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRyb2xDb250YWluZXIgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUge1xuICBuYW1lOiBzdHJpbmc7XG4vKipcbiAqIEdldCB0aGUgZm9ybSB0byB3aGljaCB0aGlzIGNvbnRhaW5lciBiZWxvbmdzLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGZvcm1EaXJlY3RpdmUoKTogRm9ybSB7IHJldHVybiBudWxsOyB9XG4vKipcbiAqIEdldCB0aGUgcGF0aCB0byB0aGlzIGNvbnRhaW5lci5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBwYXRoKCk6IHN0cmluZ1tdIHsgcmV0dXJuIG51bGw7IH1cbn1cblxuZnVuY3Rpb24gQ29udHJvbENvbnRhaW5lcl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuQ29udHJvbENvbnRhaW5lci5wcm90b3R5cGUubmFtZTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL2NvbnRyb2xfY29udGFpbmVyLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7SW5qZWN0aW9uVG9rZW4sIMm1aXNPYnNlcnZhYmxlIGFzIGlzT2JzZXJ2YWJsZSwgybVpc1Byb21pc2UgYXMgaXNQcm9taXNlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7Zm9ya0pvaW59IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9mb3JrSm9pbic7XG5pbXBvcnQge2Zyb21Qcm9taXNlfSBmcm9tICdyeGpzL29ic2VydmFibGUvZnJvbVByb21pc2UnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7QXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sfSBmcm9tICcuL21vZGVsJztcbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gaXNFbXB0eUlucHV0VmFsdWUodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAvLyB3ZSBkb24ndCBjaGVjayBmb3Igc3RyaW5nIGhlcmUgc28gaXQgYWxzbyB3b3JrcyB3aXRoIGFycmF5c1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XG59XG4vKipcbiAqIFByb3ZpZGVycyBmb3IgdmFsaWRhdG9ycyB0byBiZSB1c2VkIGZvciB7XFxAbGluayBGb3JtQ29udHJvbH1zIGluIGEgZm9ybS5cbiAqIFxuICogUHJvdmlkZSB0aGlzIHVzaW5nIGBtdWx0aTogdHJ1ZWAgdG8gYWRkIHZhbGlkYXRvcnMuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIHtcXEBleGFtcGxlIGNvcmUvZm9ybXMvdHMvbmdfdmFsaWRhdG9ycy9uZ192YWxpZGF0b3JzLnRzIHJlZ2lvbj0nbmdfdmFsaWRhdG9ycyd9XG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNvbnN0IE5HX1ZBTElEQVRPUlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48QXJyYXk8VmFsaWRhdG9yfEZ1bmN0aW9uPj4oJ05nVmFsaWRhdG9ycycpO1xuLyoqXG4gKiBQcm92aWRlcnMgZm9yIGFzeW5jaHJvbm91cyB2YWxpZGF0b3JzIHRvIGJlIHVzZWQgZm9yIHtcXEBsaW5rIEZvcm1Db250cm9sfXNcbiAqIGluIGEgZm9ybS5cbiAqIFxuICogUHJvdmlkZSB0aGlzIHVzaW5nIGBtdWx0aTogdHJ1ZWAgdG8gYWRkIHZhbGlkYXRvcnMuXG4gKiBcbiAqIFNlZSB7XFxAbGluayBOR19WQUxJREFUT1JTfSBmb3IgbW9yZSBkZXRhaWxzLlxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNvbnN0IE5HX0FTWU5DX1ZBTElEQVRPUlMgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjxBcnJheTxWYWxpZGF0b3J8RnVuY3Rpb24+PignTmdBc3luY1ZhbGlkYXRvcnMnKTtcblxuY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBFTUFJTF9SRUdFWFAgPVxuICAgIC9eKD89LnsxLDI1NH0kKSg/PS57MSw2NH1AKVstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSsoXFwuWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKykqQFtBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8oXFwuW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPykqJC87XG4vKipcbiAqIFByb3ZpZGVzIGEgc2V0IG9mIHZhbGlkYXRvcnMgdXNlZCBieSBmb3JtIGNvbnRyb2xzLlxuICogXG4gKiBBIHZhbGlkYXRvciBpcyBhIGZ1bmN0aW9uIHRoYXQgcHJvY2Vzc2VzIGEge1xcQGxpbmsgRm9ybUNvbnRyb2x9IG9yIGNvbGxlY3Rpb24gb2ZcbiAqIGNvbnRyb2xzIGFuZCByZXR1cm5zIGEgbWFwIG9mIGVycm9ycy4gQSBudWxsIG1hcCBtZWFucyB0aGF0IHZhbGlkYXRpb24gaGFzIHBhc3NlZC5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICogYGBgdHlwZXNjcmlwdFxuICogdmFyIGxvZ2luQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuICogYGBgXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9ycyB7XG4vKipcbiAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSBub24tZW1wdHkgdmFsdWUuXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyByZXF1aXJlZChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwge1xuICAgIHJldHVybiBpc0VtcHR5SW5wdXRWYWx1ZShjb250cm9sLnZhbHVlKSA/IHsncmVxdWlyZWQnOiB0cnVlfSA6IG51bGw7XG4gIH1cbi8qKlxuICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbCB2YWx1ZSB0byBiZSB0cnVlLlxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgcmVxdWlyZWRUcnVlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7XG4gICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgPT09IHRydWUgPyBudWxsIDogeydyZXF1aXJlZCc6IHRydWV9O1xuICB9XG4vKipcbiAqIFZhbGlkYXRvciB0aGF0IHBlcmZvcm1zIGVtYWlsIHZhbGlkYXRpb24uXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBlbWFpbChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwge1xuICAgIHJldHVybiBFTUFJTF9SRUdFWFAudGVzdChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7J2VtYWlsJzogdHJ1ZX07XG4gIH1cbi8qKlxuICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIHZhbHVlIG9mIGEgbWluaW11bSBsZW5ndGguXG4gKiBAcGFyYW0gez99IG1pbkxlbmd0aFxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIG1pbkxlbmd0aChtaW5MZW5ndGg6IG51bWJlcik6IFZhbGlkYXRvckZuIHtcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICAgIGlmIChpc0VtcHR5SW5wdXRWYWx1ZShjb250cm9sLnZhbHVlKSkge1xuICAgICAgICByZXR1cm4gbnVsbDsgIC8vIGRvbid0IHZhbGlkYXRlIGVtcHR5IHZhbHVlcyB0byBhbGxvdyBvcHRpb25hbCBjb250cm9sc1xuICAgICAgfVxuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBsZW5ndGg6IG51bWJlciA9IGNvbnRyb2wudmFsdWUgPyBjb250cm9sLnZhbHVlLmxlbmd0aCA6IDA7XG4gICAgICByZXR1cm4gbGVuZ3RoIDwgbWluTGVuZ3RoID9cbiAgICAgICAgICB7J21pbmxlbmd0aCc6IHsncmVxdWlyZWRMZW5ndGgnOiBtaW5MZW5ndGgsICdhY3R1YWxMZW5ndGgnOiBsZW5ndGh9fSA6XG4gICAgICAgICAgbnVsbDtcbiAgICB9O1xuICB9XG4vKipcbiAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSB2YWx1ZSBvZiBhIG1heGltdW0gbGVuZ3RoLlxuICogQHBhcmFtIHs/fSBtYXhMZW5ndGhcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBtYXhMZW5ndGgobWF4TGVuZ3RoOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGxlbmd0aDogbnVtYmVyID0gY29udHJvbC52YWx1ZSA/IGNvbnRyb2wudmFsdWUubGVuZ3RoIDogMDtcbiAgICAgIHJldHVybiBsZW5ndGggPiBtYXhMZW5ndGggP1xuICAgICAgICAgIHsnbWF4bGVuZ3RoJzogeydyZXF1aXJlZExlbmd0aCc6IG1heExlbmd0aCwgJ2FjdHVhbExlbmd0aCc6IGxlbmd0aH19IDpcbiAgICAgICAgICBudWxsO1xuICAgIH07XG4gIH1cbi8qKlxuICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgYSBjb250cm9sIHRvIG1hdGNoIGEgcmVnZXggdG8gaXRzIHZhbHVlLlxuICogQHBhcmFtIHs/fSBwYXR0ZXJuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgcGF0dGVybihwYXR0ZXJuOiBzdHJpbmd8UmVnRXhwKTogVmFsaWRhdG9yRm4ge1xuICAgIGlmICghcGF0dGVybikgcmV0dXJuIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcjtcbiAgICBsZXQgLyoqIEB0eXBlIHs/fSAqLyByZWdleDogUmVnRXhwO1xuICAgIGxldCAvKiogQHR5cGUgez99ICovIHJlZ2V4U3RyOiBzdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJykge1xuICAgICAgcmVnZXhTdHIgPSBgXiR7cGF0dGVybn0kYDtcbiAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChyZWdleFN0cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZ2V4U3RyID0gcGF0dGVybi50b1N0cmluZygpO1xuICAgICAgcmVnZXggPSBwYXR0ZXJuO1xuICAgIH1cbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICAgIGlmIChpc0VtcHR5SW5wdXRWYWx1ZShjb250cm9sLnZhbHVlKSkge1xuICAgICAgICByZXR1cm4gbnVsbDsgIC8vIGRvbid0IHZhbGlkYXRlIGVtcHR5IHZhbHVlcyB0byBhbGxvdyBvcHRpb25hbCBjb250cm9sc1xuICAgICAgfVxuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZTogc3RyaW5nID0gY29udHJvbC52YWx1ZTtcbiAgICAgIHJldHVybiByZWdleC50ZXN0KHZhbHVlKSA/IG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydwYXR0ZXJuJzogeydyZXF1aXJlZFBhdHRlcm4nOiByZWdleFN0ciwgJ2FjdHVhbFZhbHVlJzogdmFsdWV9fTtcbiAgICB9O1xuICB9XG4vKipcbiAqIE5vLW9wIHZhbGlkYXRvci5cbiAqIEBwYXJhbSB7P30gY1xuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIG51bGxWYWxpZGF0b3IoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9yc3xudWxsIHsgcmV0dXJuIG51bGw7IH1cbi8qKlxuICogQ29tcG9zZSBtdWx0aXBsZSB2YWxpZGF0b3JzIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB1bmlvblxuICogb2YgdGhlIGluZGl2aWR1YWwgZXJyb3IgbWFwcy5cbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIGNvbXBvc2UodmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSk6IFZhbGlkYXRvckZuIHtcbiAgICBpZiAoIXZhbGlkYXRvcnMpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gcHJlc2VudFZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLmZpbHRlcihpc1ByZXNlbnQpO1xuICAgIGlmIChwcmVzZW50VmFsaWRhdG9ycy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgICByZXR1cm4gX21lcmdlRXJyb3JzKF9leGVjdXRlVmFsaWRhdG9ycyhjb250cm9sLCBwcmVzZW50VmFsaWRhdG9ycykpO1xuICAgIH07XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgY29tcG9zZUFzeW5jKHZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXSk6IEFzeW5jVmFsaWRhdG9yRm4ge1xuICAgIGlmICghdmFsaWRhdG9ycykgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBwcmVzZW50VmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMuZmlsdGVyKGlzUHJlc2VudCk7XG4gICAgaWYgKHByZXNlbnRWYWxpZGF0b3JzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiBmdW5jdGlvbihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gb2JzZXJ2YWJsZXMgPSBfZXhlY3V0ZUFzeW5jVmFsaWRhdG9ycyhjb250cm9sLCBwcmVzZW50VmFsaWRhdG9ycykubWFwKHRvT2JzZXJ2YWJsZSk7XG4gICAgICByZXR1cm4gbWFwLmNhbGwoZm9ya0pvaW4ob2JzZXJ2YWJsZXMpLCBfbWVyZ2VFcnJvcnMpO1xuICAgIH07XG4gIH1cbn1cbi8qKlxuICogQHBhcmFtIHs/fSBvXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBpc1ByZXNlbnQobzogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBvICE9IG51bGw7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gclxuICogQHJldHVybiB7P31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvT2JzZXJ2YWJsZShyOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICBjb25zdCAvKiogQHR5cGUgez99ICovIG9icyA9IGlzUHJvbWlzZShyKSA/IGZyb21Qcm9taXNlKHIpIDogcjtcbiAgaWYgKCEoaXNPYnNlcnZhYmxlKG9icykpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCB2YWxpZGF0b3IgdG8gcmV0dXJuIFByb21pc2Ugb3IgT2JzZXJ2YWJsZS5gKTtcbiAgfVxuICByZXR1cm4gb2JzO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX2V4ZWN1dGVWYWxpZGF0b3JzKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSk6IGFueVtdIHtcbiAgcmV0dXJuIHZhbGlkYXRvcnMubWFwKHYgPT4gdihjb250cm9sKSk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfZXhlY3V0ZUFzeW5jVmFsaWRhdG9ycyhjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIHZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXSk6IGFueVtdIHtcbiAgcmV0dXJuIHZhbGlkYXRvcnMubWFwKHYgPT4gdihjb250cm9sKSk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gYXJyYXlPZkVycm9yc1xuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX21lcmdlRXJyb3JzKGFycmF5T2ZFcnJvcnM6IFZhbGlkYXRpb25FcnJvcnNbXSk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7XG4gIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gcmVzOiB7W2tleTogc3RyaW5nXTogYW55fSA9XG4gICAgICBhcnJheU9mRXJyb3JzLnJlZHVjZSgocmVzOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCwgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCkgPT4ge1xuICAgICAgICByZXR1cm4gZXJyb3JzICE9IG51bGwgPyB7Li4ucmVzLCAuLi5lcnJvcnN9IDogcmVzO1xuICAgICAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmtleXMocmVzKS5sZW5ndGggPT09IDAgPyBudWxsIDogcmVzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy92YWxpZGF0b3JzLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEEgYnJpZGdlIGJldHdlZW4gYSBjb250cm9sIGFuZCBhIG5hdGl2ZSBlbGVtZW50LlxuICpcbiAqIEEgYENvbnRyb2xWYWx1ZUFjY2Vzc29yYCBhYnN0cmFjdHMgdGhlIG9wZXJhdGlvbnMgb2Ygd3JpdGluZyBhIG5ldyB2YWx1ZSB0byBhXG4gKiBET00gZWxlbWVudCByZXByZXNlbnRpbmcgYW4gaW5wdXQgY29udHJvbC5cbiAqXG4gKiBQbGVhc2Ugc2VlIHtAbGluayBEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHN0YWJsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLyoqXG4gICAqIFdyaXRlIGEgbmV3IHZhbHVlIHRvIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgcmVjZWl2ZXMgYSBjaGFuZ2UgZXZlbnQuXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHJlY2VpdmVzIGEgdG91Y2ggZXZlbnQuXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZDtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCBzdGF0dXMgY2hhbmdlcyB0byBvciBmcm9tIFwiRElTQUJMRURcIi5cbiAgICogRGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSwgaXQgd2lsbCBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYXBwcm9wcmlhdGUgRE9NIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkXG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZDtcbn1cbi8qKlxuICogVXNlZCB0byBwcm92aWRlIGEge1xcQGxpbmsgQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZvciBmb3JtIGNvbnRyb2xzLlxuICogXG4gKiBTZWUge1xcQGxpbmsgRGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZvciBob3cgdG8gaW1wbGVtZW50IG9uZS5cbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY29uc3QgTkdfVkFMVUVfQUNDRVNTT1IgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29udHJvbFZhbHVlQWNjZXNzb3I+KCdOZ1ZhbHVlQWNjZXNzb3InKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9jb250cm9sX3ZhbHVlX2FjY2Vzc29yLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlciwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICcuL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvciksXG4gIG11bHRpOiB0cnVlLFxufTtcbi8qKlxuICogVGhlIGFjY2Vzc29yIGZvciB3cml0aW5nIGEgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIG9uIGEgY2hlY2tib3ggaW5wdXQgZWxlbWVudC5cbiAqIFxuICogICMjIyBFeGFtcGxlXG4gKiAgYGBgXG4gKiAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZW1lbWJlckxvZ2luXCIgbmdNb2RlbD5cbiAqICBgYGBcbiAqIFxuICogIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG4vKipcbiAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gKiBAcGFyYW0gez99IF9lbGVtZW50UmVmXG4gKi9cbmNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcixcbnByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbndyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjaGVja2VkJywgdmFsdWUpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHt9KTogdm9pZCB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOlxuICAgICAgJ2lucHV0W3R5cGU9Y2hlY2tib3hdW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbdHlwZT1jaGVja2JveF1bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9Y2hlY2tib3hdW25nTW9kZWxdJyxcbiAgaG9zdDogeycoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LmNoZWNrZWQpJywgJyhibHVyKSc6ICdvblRvdWNoZWQoKSd9LFxuICBwcm92aWRlcnM6IFtDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUl1cbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogUmVuZGVyZXIsIH0sXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG59XG5cbmZ1bmN0aW9uIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3JfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkNoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5DaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUub25DaGFuZ2U7XG4vKiogQHR5cGUgez99ICovXG5DaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5vblRvdWNoZWQ7XG4vKiogQHR5cGUgez99ICovXG5DaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fcmVuZGVyZXI7XG4vKiogQHR5cGUgez99ICovXG5DaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fZWxlbWVudFJlZjtcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvY2hlY2tib3hfdmFsdWVfYWNjZXNzb3IudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBSZW5kZXJlciwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge8m1Z2V0RE9NIGFzIGdldERPTX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnLi9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gREVGQVVMVF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGVmYXVsdFZhbHVlQWNjZXNzb3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogV2UgbXVzdCBjaGVjayB3aGV0aGVyIHRoZSBhZ2VudCBpcyBBbmRyb2lkIGJlY2F1c2UgY29tcG9zaXRpb24gZXZlbnRzXG4gKiBiZWhhdmUgZGlmZmVyZW50bHkgYmV0d2VlbiBpT1MgYW5kIEFuZHJvaWQuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfaXNBbmRyb2lkKCk6IGJvb2xlYW4ge1xuICBjb25zdCAvKiogQHR5cGUgez99ICovIHVzZXJBZ2VudCA9IGdldERPTSgpID8gZ2V0RE9NKCkuZ2V0VXNlckFnZW50KCkgOiAnJztcbiAgcmV0dXJuIC9hbmRyb2lkIChcXGQrKS8udGVzdCh1c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG59XG4vKipcbiAqIFR1cm4gdGhpcyBtb2RlIG9uIGlmIHlvdSB3YW50IGZvcm0gZGlyZWN0aXZlcyB0byBidWZmZXIgSU1FIGlucHV0IHVudGlsIGNvbXBvc2l0aW9uZW5kXG4gKiBcXEBleHBlcmltZW50YWxcbiAqL1xuZXhwb3J0IGNvbnN0IENPTVBPU0lUSU9OX0JVRkZFUl9NT0RFID0gbmV3IEluamVjdGlvblRva2VuPGJvb2xlYW4+KCdDb21wb3NpdGlvbkV2ZW50TW9kZScpO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBhY2Nlc3NvciBmb3Igd3JpdGluZyBhIHZhbHVlIGFuZCBsaXN0ZW5pbmcgdG8gY2hhbmdlcyB0aGF0IGlzIHVzZWQgYnkgdGhlXG4gKiB7XFxAbGluayBOZ01vZGVsfSwge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfSBkaXJlY3RpdmVzLlxuICogXG4gKiAgIyMjIEV4YW1wbGVcbiAqICBgYGBcbiAqICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoUXVlcnlcIiBuZ01vZGVsPlxuICogIGBgYFxuICogXG4gKiAgXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZhdWx0VmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5wcml2YXRlIF9jb21wb3NpbmcgPSBmYWxzZTtcbi8qKlxuICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAqIEBwYXJhbSB7P30gX2NvbXBvc2l0aW9uTW9kZVxuICovXG5jb25zdHJ1Y3RvcihcbnByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcixcbnByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5wcml2YXRlIF9jb21wb3NpdGlvbk1vZGU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fY29tcG9zaXRpb25Nb2RlID09IG51bGwpIHtcbiAgICAgIHRoaXMuX2NvbXBvc2l0aW9uTW9kZSA9ICFfaXNBbmRyb2lkKCk7XG4gICAgfVxuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbndyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gbm9ybWFsaXplZFZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgbm9ybWFsaXplZFZhbHVlKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICogQHJldHVybiB7P31cbiAqL1xuc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuX2hhbmRsZUlucHV0KHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbXBvc2l0aW9uTW9kZSB8fCAodGhpcy5fY29tcG9zaXRpb25Nb2RlICYmICF0aGlzLl9jb21wb3NpbmcpKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuX2NvbXBvc2l0aW9uU3RhcnQoKTogdm9pZCB7IHRoaXMuX2NvbXBvc2luZyA9IHRydWU7IH1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuX2NvbXBvc2l0aW9uRW5kKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9jb21wb3NpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9jb21wb3NpdGlvbk1vZGUgJiYgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6XG4gICAgICAnaW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSlbZm9ybUNvbnRyb2xOYW1lXSx0ZXh0YXJlYVtmb3JtQ29udHJvbE5hbWVdLGlucHV0Om5vdChbdHlwZT1jaGVja2JveF0pW2Zvcm1Db250cm9sXSx0ZXh0YXJlYVtmb3JtQ29udHJvbF0saW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSlbbmdNb2RlbF0sdGV4dGFyZWFbbmdNb2RlbF0sW25nRGVmYXVsdENvbnRyb2xdJyxcbiAgLy8gVE9ETzogdnNhdmtpbiByZXBsYWNlIHRoZSBhYm92ZSBzZWxlY3RvciB3aXRoIHRoZSBvbmUgYmVsb3cgaXQgb25jZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8zMDExIGlzIGltcGxlbWVudGVkXG4gIC8vIHNlbGVjdG9yOiAnW25nTW9kZWxdLFtmb3JtQ29udHJvbF0sW2Zvcm1Db250cm9sTmFtZV0nLFxuICBob3N0OiB7XG4gICAgJyhpbnB1dCknOiAnX2hhbmRsZUlucHV0KCRldmVudC50YXJnZXQudmFsdWUpJyxcbiAgICAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyxcbiAgICAnKGNvbXBvc2l0aW9uc3RhcnQpJzogJ19jb21wb3NpdGlvblN0YXJ0KCknLFxuICAgICcoY29tcG9zaXRpb25lbmQpJzogJ19jb21wb3NpdGlvbkVuZCgkZXZlbnQudGFyZ2V0LnZhbHVlKSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbREVGQVVMVF9WQUxVRV9BQ0NFU1NPUl1cbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogUmVuZGVyZXIsIH0sXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbnt0eXBlOiB1bmRlZmluZWQsIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbQ09NUE9TSVRJT05fQlVGRkVSX01PREUsIF0gfSwgXX0sXG5dO1xufVxuXG5mdW5jdGlvbiBEZWZhdWx0VmFsdWVBY2Nlc3Nvcl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuRGVmYXVsdFZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5EZWZhdWx0VmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbkRlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5vbkNoYW5nZTtcbi8qKiBAdHlwZSB7P30gKi9cbkRlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5vblRvdWNoZWQ7XG4vKipcbiAqIFdoZXRoZXIgdGhlIHVzZXIgaXMgY3JlYXRpbmcgYSBjb21wb3NpdGlvbiBzdHJpbmcgKElNRSBldmVudHMpLlxuICogQHR5cGUgez99XG4gKi9cbkRlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fY29tcG9zaW5nO1xuLyoqIEB0eXBlIHs/fSAqL1xuRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9yZW5kZXJlcjtcbi8qKiBAdHlwZSB7P30gKi9cbkRlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fZWxlbWVudFJlZjtcbi8qKiBAdHlwZSB7P30gKi9cbkRlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fY29tcG9zaXRpb25Nb2RlO1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9kZWZhdWx0X3ZhbHVlX2FjY2Vzc29yLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7QWJzdHJhY3RDb250cm9sfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yLCBBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZufSBmcm9tICcuL3ZhbGlkYXRvcnMnO1xuLyoqXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvclxuICogQHJldHVybiB7P31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbGlkYXRvcih2YWxpZGF0b3I6IFZhbGlkYXRvckZuIHwgVmFsaWRhdG9yKTogVmFsaWRhdG9yRm4ge1xuICBpZiAoKCAvKiogQHR5cGUgez99ICovKCg8VmFsaWRhdG9yPnZhbGlkYXRvcikpKS52YWxpZGF0ZSkge1xuICAgIHJldHVybiAoYzogQWJzdHJhY3RDb250cm9sKSA9PiAoIC8qKiBAdHlwZSB7P30gKi8oKDxWYWxpZGF0b3I+dmFsaWRhdG9yKSkpLnZhbGlkYXRlKGMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiogQHR5cGUgez99ICovKCggPFZhbGlkYXRvckZuPnZhbGlkYXRvcikpO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yXG4gKiBAcmV0dXJuIHs/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQXN5bmNWYWxpZGF0b3IodmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZuIHwgQXN5bmNWYWxpZGF0b3IpOlxuICAgIEFzeW5jVmFsaWRhdG9yRm4ge1xuICBpZiAoKCAvKiogQHR5cGUgez99ICovKCg8QXN5bmNWYWxpZGF0b3I+dmFsaWRhdG9yKSkpLnZhbGlkYXRlKSB7XG4gICAgcmV0dXJuIChjOiBBYnN0cmFjdENvbnRyb2wpID0+ICggLyoqIEB0eXBlIHs/fSAqLygoPEFzeW5jVmFsaWRhdG9yPnZhbGlkYXRvcikpKS52YWxpZGF0ZShjKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHs/fSAqLygoIDxBc3luY1ZhbGlkYXRvckZuPnZhbGlkYXRvcikpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbm9ybWFsaXplX3ZhbGlkYXRvci50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnLi9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gTlVNQkVSX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOdW1iZXJWYWx1ZUFjY2Vzc29yKSxcbiAgbXVsdGk6IHRydWVcbn07XG4vKipcbiAqIFRoZSBhY2Nlc3NvciBmb3Igd3JpdGluZyBhIG51bWJlciB2YWx1ZSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgdGhhdCBpcyB1c2VkIGJ5IHRoZVxuICoge1xcQGxpbmsgTmdNb2RlbH0sIHtcXEBsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfSwgYW5kIHtcXEBsaW5rIEZvcm1Db250cm9sTmFtZX0gZGlyZWN0aXZlcy5cbiAqIFxuICogICMjIyBFeGFtcGxlXG4gKiAgYGBgXG4gKiAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cImFnZVwiPlxuICogIGBgYFxuICovXG5leHBvcnQgY2xhc3MgTnVtYmVyVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG4vKipcbiAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gKiBAcGFyYW0gez99IF9lbGVtZW50UmVmXG4gKi9cbmNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcixcbnByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbndyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIC8vIFRoZSB2YWx1ZSBuZWVkcyB0byBiZSBub3JtYWxpemVkIGZvciBJRTksIG90aGVyd2lzZSBpdCBpcyBzZXQgdG8gJ251bGwnIHdoZW4gbnVsbFxuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gbm9ybWFsaXplZFZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgbm9ybWFsaXplZFZhbHVlKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9ICh2YWx1ZSkgPT4geyBmbih2YWx1ZSA9PSAnJyA/IG51bGwgOiBwYXJzZUZsb2F0KHZhbHVlKSk7IH07XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOlxuICAgICAgJ2lucHV0W3R5cGU9bnVtYmVyXVtmb3JtQ29udHJvbE5hbWVdLGlucHV0W3R5cGU9bnVtYmVyXVtmb3JtQ29udHJvbF0saW5wdXRbdHlwZT1udW1iZXJdW25nTW9kZWxdJyxcbiAgaG9zdDoge1xuICAgICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXG4gICAgJyhpbnB1dCknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLFxuICAgICcoYmx1ciknOiAnb25Ub3VjaGVkKCknXG4gIH0sXG4gIHByb3ZpZGVyczogW05VTUJFUl9WQUxVRV9BQ0NFU1NPUl1cbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogUmVuZGVyZXIsIH0sXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG59XG5cbmZ1bmN0aW9uIE51bWJlclZhbHVlQWNjZXNzb3JfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbk51bWJlclZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5OdW1iZXJWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuTnVtYmVyVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUub25DaGFuZ2U7XG4vKiogQHR5cGUgez99ICovXG5OdW1iZXJWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5vblRvdWNoZWQ7XG4vKiogQHR5cGUgez99ICovXG5OdW1iZXJWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fcmVuZGVyZXI7XG4vKiogQHR5cGUgez99ICovXG5OdW1iZXJWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fZWxlbWVudFJlZjtcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbnVtYmVyX3ZhbHVlX2FjY2Vzc29yLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cblxuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3RfY29udHJvbF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtDb250cm9sQ29udGFpbmVyfSBmcm9tICcuL2NvbnRyb2xfY29udGFpbmVyJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yLCBBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZufSBmcm9tICcuL3ZhbGlkYXRvcnMnO1xuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiB1bmltcGxlbWVudGVkKCk6IGFueSB7XG4gIHRocm93IG5ldyBFcnJvcigndW5pbXBsZW1lbnRlZCcpO1xufVxuLyoqXG4gKiBBIGJhc2UgY2xhc3MgdGhhdCBhbGwgY29udHJvbCBkaXJlY3RpdmUgZXh0ZW5kLlxuICogSXQgYmluZHMgYSB7XFxAbGluayBGb3JtQ29udHJvbH0gb2JqZWN0IHRvIGEgRE9NIGVsZW1lbnQuXG4gKiBcbiAqIFVzZWQgaW50ZXJuYWxseSBieSBBbmd1bGFyIGZvcm1zLlxuICogXG4gKiBcXEBzdGFibGVcbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmdDb250cm9sIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlIHtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX3BhcmVudDogQ29udHJvbENvbnRhaW5lciA9IG51bGw7XG4gIG5hbWU6IHN0cmluZyA9IG51bGw7XG4gIHZhbHVlQWNjZXNzb3I6IENvbnRyb2xWYWx1ZUFjY2Vzc29yID0gbnVsbDtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX3Jhd1ZhbGlkYXRvcnM6IEFycmF5PFZhbGlkYXRvcnxWYWxpZGF0b3JGbj4gPSBbXTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX3Jhd0FzeW5jVmFsaWRhdG9yczogQXJyYXk8QXN5bmNWYWxpZGF0b3J8QXN5bmNWYWxpZGF0b3JGbj4gPSBbXTtcbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7IHJldHVybiAvKiogQHR5cGUgez99ICovKCggPFZhbGlkYXRvckZuPnVuaW1wbGVtZW50ZWQoKSkpOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBhc3luY1ZhbGlkYXRvcigpOiBBc3luY1ZhbGlkYXRvckZuIHsgcmV0dXJuIC8qKiBAdHlwZSB7P30gKi8oKCA8QXN5bmNWYWxpZGF0b3JGbj51bmltcGxlbWVudGVkKCkpKTsgfVxuLyoqXG4gKiBAYWJzdHJhY3RcbiAqIEBwYXJhbSB7P30gbmV3VmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnZpZXdUb01vZGVsVXBkYXRlKG5ld1ZhbHVlOiBhbnkpIHt9XG59XG5cbmZ1bmN0aW9uIE5nQ29udHJvbF90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbk5nQ29udHJvbC5wcm90b3R5cGUuX3BhcmVudDtcbi8qKiBAdHlwZSB7P30gKi9cbk5nQ29udHJvbC5wcm90b3R5cGUubmFtZTtcbi8qKiBAdHlwZSB7P30gKi9cbk5nQ29udHJvbC5wcm90b3R5cGUudmFsdWVBY2Nlc3Nvcjtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5OZ0NvbnRyb2wucHJvdG90eXBlLl9yYXdWYWxpZGF0b3JzO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbk5nQ29udHJvbC5wcm90b3R5cGUuX3Jhd0FzeW5jVmFsaWRhdG9ycztcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL25nX2NvbnRyb2wudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJy4vY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge05nQ29udHJvbH0gZnJvbSAnLi9uZ19jb250cm9sJztcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gUkFESU9fVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogSW50ZXJuYWwgY2xhc3MgdXNlZCBieSBBbmd1bGFyIHRvIHVuY2hlY2sgcmFkaW8gYnV0dG9ucyB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLlxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9Db250cm9sUmVnaXN0cnkge1xucHJpdmF0ZSBfYWNjZXNzb3JzOiBhbnlbXSA9IFtdO1xuLyoqXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEBwYXJhbSB7P30gYWNjZXNzb3JcbiAqIEByZXR1cm4gez99XG4gKi9cbmFkZChjb250cm9sOiBOZ0NvbnRyb2wsIGFjY2Vzc29yOiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yKSB7XG4gICAgdGhpcy5fYWNjZXNzb3JzLnB1c2goW2NvbnRyb2wsIGFjY2Vzc29yXSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBhY2Nlc3NvclxuICogQHJldHVybiB7P31cbiAqL1xucmVtb3ZlKGFjY2Vzc29yOiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yKSB7XG4gICAgZm9yIChsZXQgLyoqIEB0eXBlIHs/fSAqLyBpID0gdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICBpZiAodGhpcy5fYWNjZXNzb3JzW2ldWzFdID09PSBhY2Nlc3Nvcikge1xuICAgICAgICB0aGlzLl9hY2Nlc3NvcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gYWNjZXNzb3JcbiAqIEByZXR1cm4gez99XG4gKi9cbnNlbGVjdChhY2Nlc3NvcjogUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcikge1xuICAgIHRoaXMuX2FjY2Vzc29ycy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBpZiAodGhpcy5faXNTYW1lR3JvdXAoYywgYWNjZXNzb3IpICYmIGNbMV0gIT09IGFjY2Vzc29yKSB7XG4gICAgICAgIGNbMV0uZmlyZVVuY2hlY2soYWNjZXNzb3IudmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gY29udHJvbFBhaXJcbiAqIEBwYXJhbSB7P30gYWNjZXNzb3JcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2lzU2FtZUdyb3VwKFxuICAgICAgY29udHJvbFBhaXI6IFtOZ0NvbnRyb2wsIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3JdLFxuICAgICAgYWNjZXNzb3I6IFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IpOiBib29sZWFuIHtcbiAgICBpZiAoIWNvbnRyb2xQYWlyWzBdLmNvbnRyb2wpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gY29udHJvbFBhaXJbMF0uX3BhcmVudCA9PT0gYWNjZXNzb3IuX2NvbnRyb2wuX3BhcmVudCAmJlxuICAgICAgICBjb250cm9sUGFpclsxXS5uYW1lID09PSBhY2Nlc3Nvci5uYW1lO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbn1cblxuZnVuY3Rpb24gUmFkaW9Db250cm9sUmVnaXN0cnlfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cblJhZGlvQ29udHJvbFJlZ2lzdHJ5LmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuUmFkaW9Db250cm9sUmVnaXN0cnkuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5SYWRpb0NvbnRyb2xSZWdpc3RyeS5wcm90b3R5cGUuX2FjY2Vzc29ycztcbn1cblxuLyoqXG4gKiBcXEB3aGF0SXREb2VzIFdyaXRlcyByYWRpbyBjb250cm9sIHZhbHVlcyBhbmQgbGlzdGVucyB0byByYWRpbyBjb250cm9sIGNoYW5nZXMuXG4gKiBcbiAqIFVzZWQgYnkge1xcQGxpbmsgTmdNb2RlbH0sIHtcXEBsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfSwgYW5kIHtcXEBsaW5rIEZvcm1Db250cm9sTmFtZX1cbiAqIHRvIGtlZXAgdGhlIHZpZXcgc3luY2VkIHdpdGggdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfSBtb2RlbC5cbiAqIFxuICogXFxAaG93VG9Vc2UgXG4gKiBcbiAqIElmIHlvdSBoYXZlIGltcG9ydGVkIHRoZSB7XFxAbGluayBGb3Jtc01vZHVsZX0gb3IgdGhlIHtcXEBsaW5rIFJlYWN0aXZlRm9ybXNNb2R1bGV9LCB0aGlzXG4gKiB2YWx1ZSBhY2Nlc3NvciB3aWxsIGJlIGFjdGl2ZSBvbiBhbnkgcmFkaW8gY29udHJvbCB0aGF0IGhhcyBhIGZvcm0gZGlyZWN0aXZlLiBZb3UgZG9cbiAqICoqbm90KiogbmVlZCB0byBhZGQgYSBzcGVjaWFsIHNlbGVjdG9yIHRvIGFjdGl2YXRlIGl0LlxuICogXG4gKiAjIyMgSG93IHRvIHVzZSByYWRpbyBidXR0b25zIHdpdGggZm9ybSBkaXJlY3RpdmVzXG4gKiBcbiAqIFRvIHVzZSByYWRpbyBidXR0b25zIGluIGEgdGVtcGxhdGUtZHJpdmVuIGZvcm0sIHlvdSdsbCB3YW50IHRvIGVuc3VyZSB0aGF0IHJhZGlvIGJ1dHRvbnNcbiAqIGluIHRoZSBzYW1lIGdyb3VwIGhhdmUgdGhlIHNhbWUgYG5hbWVgIGF0dHJpYnV0ZS4gIFJhZGlvIGJ1dHRvbnMgd2l0aCBkaWZmZXJlbnQgYG5hbWVgXG4gKiBhdHRyaWJ1dGVzIGRvIG5vdCBhZmZlY3QgZWFjaCBvdGhlci5cbiAqIFxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvcmFkaW9CdXR0b25zL3JhZGlvX2J1dHRvbl9leGFtcGxlLnRzIHJlZ2lvbj0nVGVtcGxhdGVEcml2ZW4nfVxuICogXG4gKiBXaGVuIHVzaW5nIHJhZGlvIGJ1dHRvbnMgaW4gYSByZWFjdGl2ZSBmb3JtLCByYWRpbyBidXR0b25zIGluIHRoZSBzYW1lIGdyb3VwIHNob3VsZCBoYXZlIHRoZVxuICogc2FtZSBgZm9ybUNvbnRyb2xOYW1lYC4gWW91IGNhbiBhbHNvIGFkZCBhIGBuYW1lYCBhdHRyaWJ1dGUsIGJ1dCBpdCdzIG9wdGlvbmFsLlxuICogXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9yZWFjdGl2ZVJhZGlvQnV0dG9ucy9yZWFjdGl2ZV9yYWRpb19idXR0b25fZXhhbXBsZS50cyByZWdpb249J1JlYWN0aXZlJ31cbiAqIFxuICogICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqIFxuICogIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICAgIE9uRGVzdHJveSwgT25Jbml0IHtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX3N0YXRlOiBib29sZWFuO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fY29udHJvbDogTmdDb250cm9sO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fZm46IEZ1bmN0aW9uO1xuICBvbkNoYW5nZSA9ICgpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgbmFtZTogc3RyaW5nO1xuICAgZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmc7XG4gICB2YWx1ZTogYW55O1xuLyoqXG4gKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICogQHBhcmFtIHs/fSBfcmVnaXN0cnlcbiAqIEBwYXJhbSB7P30gX2luamVjdG9yXG4gKi9cbmNvbnN0cnVjdG9yKFxucHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyLFxucHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbnByaXZhdGUgX3JlZ2lzdHJ5OiBSYWRpb0NvbnRyb2xSZWdpc3RyeSxcbnByaXZhdGUgX2luamVjdG9yOiBJbmplY3Rvcikge31cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xubmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fY29udHJvbCA9IHRoaXMuX2luamVjdG9yLmdldChOZ0NvbnRyb2wpO1xuICAgIHRoaXMuX2NoZWNrTmFtZSgpO1xuICAgIHRoaXMuX3JlZ2lzdHJ5LmFkZCh0aGlzLl9jb250cm9sLCB0aGlzKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uRGVzdHJveSgpOiB2b2lkIHsgdGhpcy5fcmVnaXN0cnkucmVtb3ZlKHRoaXMpOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbndyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXRlID0gdmFsdWUgPT09IHRoaXMudmFsdWU7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NoZWNrZWQnLCB0aGlzLl9zdGF0ZSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9mbiA9IGZuO1xuICAgIHRoaXMub25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBmbih0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMuX3JlZ2lzdHJ5LnNlbGVjdCh0aGlzKTtcbiAgICB9O1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbmZpcmVVbmNoZWNrKHZhbHVlOiBhbnkpOiB2b2lkIHsgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2NoZWNrTmFtZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uYW1lICYmIHRoaXMuZm9ybUNvbnRyb2xOYW1lICYmIHRoaXMubmFtZSAhPT0gdGhpcy5mb3JtQ29udHJvbE5hbWUpIHtcbiAgICAgIHRoaXMuX3Rocm93TmFtZUVycm9yKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5uYW1lICYmIHRoaXMuZm9ybUNvbnRyb2xOYW1lKSB0aGlzLm5hbWUgPSB0aGlzLmZvcm1Db250cm9sTmFtZTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF90aHJvd05hbWVFcnJvcigpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgSWYgeW91IGRlZmluZSBib3RoIGEgbmFtZSBhbmQgYSBmb3JtQ29udHJvbE5hbWUgYXR0cmlidXRlIG9uIHlvdXIgcmFkaW8gYnV0dG9uLCB0aGVpciB2YWx1ZXNcbiAgICAgIG11c3QgbWF0Y2guIEV4OiA8aW5wdXQgdHlwZT1cInJhZGlvXCIgZm9ybUNvbnRyb2xOYW1lPVwiZm9vZFwiIG5hbWU9XCJmb29kXCI+XG4gICAgYCk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6XG4gICAgICAnaW5wdXRbdHlwZT1yYWRpb11bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPXJhZGlvXVtmb3JtQ29udHJvbF0saW5wdXRbdHlwZT1yYWRpb11bbmdNb2RlbF0nLFxuICBob3N0OiB7JyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJ30sXG4gIHByb3ZpZGVyczogW1JBRElPX1ZBTFVFX0FDQ0VTU09SXVxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBSZW5kZXJlciwgfSxcbnt0eXBlOiBFbGVtZW50UmVmLCB9LFxue3R5cGU6IFJhZGlvQ29udHJvbFJlZ2lzdHJ5LCB9LFxue3R5cGU6IEluamVjdG9yLCB9LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nbmFtZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidmb3JtQ29udHJvbE5hbWUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4ndmFsdWUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cblJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvcERlY29yYXRvcnM7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX3N0YXRlO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cblJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9jb250cm9sO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cblJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9mbjtcbi8qKiBAdHlwZSB7P30gKi9cblJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm9uQ2hhbmdlO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUub25Ub3VjaGVkO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUubmFtZTtcbi8qKiBAdHlwZSB7P30gKi9cblJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLmZvcm1Db250cm9sTmFtZTtcbi8qKiBAdHlwZSB7P30gKi9cblJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnZhbHVlO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX3JlbmRlcmVyO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2VsZW1lbnRSZWY7XG4vKiogQHR5cGUgez99ICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fcmVnaXN0cnk7XG4vKiogQHR5cGUgez99ICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5faW5qZWN0b3I7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3JhZGlvX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3IudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFByb3ZpZGVyLCBSZW5kZXJlciwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICcuL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBSQU5HRV9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYW5nZVZhbHVlQWNjZXNzb3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogVGhlIGFjY2Vzc29yIGZvciB3cml0aW5nIGEgcmFuZ2UgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIHRoYXQgaXMgdXNlZCBieSB0aGVcbiAqIHtcXEBsaW5rIE5nTW9kZWx9LCB7XFxAbGluayBGb3JtQ29udHJvbERpcmVjdGl2ZX0sIGFuZCB7XFxAbGluayBGb3JtQ29udHJvbE5hbWV9IGRpcmVjdGl2ZXMuXG4gKiBcbiAqICAjIyMgRXhhbXBsZVxuICogIGBgYFxuICogIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBbKG5nTW9kZWwpXT1cImFnZVwiID5cbiAqICBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIFJhbmdlVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG4vKipcbiAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gKiBAcGFyYW0gez99IF9lbGVtZW50UmVmXG4gKi9cbmNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcixcbnByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbndyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9ICh2YWx1ZSkgPT4geyBmbih2YWx1ZSA9PSAnJyA/IG51bGwgOiBwYXJzZUZsb2F0KHZhbHVlKSk7IH07XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOlxuICAgICAgJ2lucHV0W3R5cGU9cmFuZ2VdW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbdHlwZT1yYW5nZV1bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9cmFuZ2VdW25nTW9kZWxdJyxcbiAgaG9zdDoge1xuICAgICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXG4gICAgJyhpbnB1dCknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLFxuICAgICcoYmx1ciknOiAnb25Ub3VjaGVkKCknXG4gIH0sXG4gIHByb3ZpZGVyczogW1JBTkdFX1ZBTFVFX0FDQ0VTU09SXVxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBSZW5kZXJlciwgfSxcbnt0eXBlOiBFbGVtZW50UmVmLCB9LFxuXTtcbn1cblxuZnVuY3Rpb24gUmFuZ2VWYWx1ZUFjY2Vzc29yX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5SYW5nZVZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5SYW5nZVZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5SYW5nZVZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm9uQ2hhbmdlO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFuZ2VWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5vblRvdWNoZWQ7XG4vKiogQHR5cGUgez99ICovXG5SYW5nZVZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9yZW5kZXJlcjtcbi8qKiBAdHlwZSB7P30gKi9cblJhbmdlVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2VsZW1lbnRSZWY7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3JhbmdlX3ZhbHVlX2FjY2Vzc29yLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBJbnB1dCwgT25EZXN0cm95LCBPcHRpb25hbCwgUHJvdmlkZXIsIFJlbmRlcmVyLCBmb3J3YXJkUmVmLCDJtWxvb3NlSWRlbnRpY2FsIGFzIGxvb3NlSWRlbnRpY2FsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICcuL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBTRUxFQ1RfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogQHBhcmFtIHs/fSBpZFxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX2J1aWxkVmFsdWVTdHJpbmcoaWQ6IHN0cmluZywgdmFsdWU6IGFueSk6IHN0cmluZyB7XG4gIGlmIChpZCA9PSBudWxsKSByZXR1cm4gYCR7dmFsdWV9YDtcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHZhbHVlID0gJ09iamVjdCc7XG4gIHJldHVybiBgJHtpZH06ICR7dmFsdWV9YC5zbGljZSgwLCA1MCk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVTdHJpbmdcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9leHRyYWN0SWQodmFsdWVTdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZVN0cmluZy5zcGxpdCgnOicpWzBdO1xufVxuLyoqXG4gKiBcXEB3aGF0SXREb2VzIFdyaXRlcyB2YWx1ZXMgYW5kIGxpc3RlbnMgdG8gY2hhbmdlcyBvbiBhIHNlbGVjdCBlbGVtZW50LlxuICogXG4gKiBVc2VkIGJ5IHtcXEBsaW5rIE5nTW9kZWx9LCB7XFxAbGluayBGb3JtQ29udHJvbERpcmVjdGl2ZX0sIGFuZCB7XFxAbGluayBGb3JtQ29udHJvbE5hbWV9XG4gKiB0byBrZWVwIHRoZSB2aWV3IHN5bmNlZCB3aXRoIHRoZSB7XFxAbGluayBGb3JtQ29udHJvbH0gbW9kZWwuXG4gKiBcbiAqIFxcQGhvd1RvVXNlIFxuICogXG4gKiBJZiB5b3UgaGF2ZSBpbXBvcnRlZCB0aGUge1xcQGxpbmsgRm9ybXNNb2R1bGV9IG9yIHRoZSB7XFxAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfSwgdGhpc1xuICogdmFsdWUgYWNjZXNzb3Igd2lsbCBiZSBhY3RpdmUgb24gYW55IHNlbGVjdCBjb250cm9sIHRoYXQgaGFzIGEgZm9ybSBkaXJlY3RpdmUuIFlvdSBkb1xuICogKipub3QqKiBuZWVkIHRvIGFkZCBhIHNwZWNpYWwgc2VsZWN0b3IgdG8gYWN0aXZhdGUgaXQuXG4gKiBcbiAqICMjIyBIb3cgdG8gdXNlIHNlbGVjdCBjb250cm9scyB3aXRoIGZvcm0gZGlyZWN0aXZlc1xuICogXG4gKiBUbyB1c2UgYSBzZWxlY3QgaW4gYSB0ZW1wbGF0ZS1kcml2ZW4gZm9ybSwgc2ltcGx5IGFkZCBhbiBgbmdNb2RlbGAgYW5kIGEgYG5hbWVgXG4gKiBhdHRyaWJ1dGUgdG8gdGhlIG1haW4gYDxzZWxlY3Q+YCB0YWcuXG4gKiBcbiAqIElmIHlvdXIgb3B0aW9uIHZhbHVlcyBhcmUgc2ltcGxlIHN0cmluZ3MsIHlvdSBjYW4gYmluZCB0byB0aGUgbm9ybWFsIGB2YWx1ZWAgcHJvcGVydHlcbiAqIG9uIHRoZSBvcHRpb24uICBJZiB5b3VyIG9wdGlvbiB2YWx1ZXMgaGFwcGVuIHRvIGJlIG9iamVjdHMgKGFuZCB5b3UnZCBsaWtlIHRvIHNhdmUgdGhlXG4gKiBzZWxlY3Rpb24gaW4geW91ciBmb3JtIGFzIGFuIG9iamVjdCksIHVzZSBgbmdWYWx1ZWAgaW5zdGVhZDpcbiAqIFxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2VsZWN0Q29udHJvbC9zZWxlY3RfY29udHJvbF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqIFxuICogSW4gcmVhY3RpdmUgZm9ybXMsIHlvdSdsbCBhbHNvIHdhbnQgdG8gYWRkIHlvdXIgZm9ybSBkaXJlY3RpdmUgKGBmb3JtQ29udHJvbE5hbWVgIG9yXG4gKiBgZm9ybUNvbnRyb2xgKSBvbiB0aGUgbWFpbiBgPHNlbGVjdD5gIHRhZy4gTGlrZSBpbiB0aGUgZm9ybWVyIGV4YW1wbGUsIHlvdSBoYXZlIHRoZVxuICogY2hvaWNlIG9mIGJpbmRpbmcgdG8gdGhlICBgdmFsdWVgIG9yIGBuZ1ZhbHVlYCBwcm9wZXJ0eSBvbiB0aGUgc2VsZWN0J3Mgb3B0aW9ucy5cbiAqIFxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvcmVhY3RpdmVTZWxlY3RDb250cm9sL3JlYWN0aXZlX3NlbGVjdF9jb250cm9sX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICogXG4gKiAjIyMgQ2F2ZWF0OiBPcHRpb24gc2VsZWN0aW9uXG4gKiBcbiAqIEFuZ3VsYXIgdXNlcyBvYmplY3QgaWRlbnRpdHkgdG8gc2VsZWN0IG9wdGlvbi4gSXQncyBwb3NzaWJsZSBmb3IgdGhlIGlkZW50aXRpZXMgb2YgaXRlbXNcbiAqIHRvIGNoYW5nZSB3aGlsZSB0aGUgZGF0YSBkb2VzIG5vdC4gVGhpcyBjYW4gaGFwcGVuLCBmb3IgZXhhbXBsZSwgaWYgdGhlIGl0ZW1zIGFyZSBwcm9kdWNlZFxuICogZnJvbSBhbiBSUEMgdG8gdGhlIHNlcnZlciwgYW5kIHRoYXQgUlBDIGlzIHJlLXJ1bi4gRXZlbiBpZiB0aGUgZGF0YSBoYXNuJ3QgY2hhbmdlZCwgdGhlXG4gKiBzZWNvbmQgcmVzcG9uc2Ugd2lsbCBwcm9kdWNlIG9iamVjdHMgd2l0aCBkaWZmZXJlbnQgaWRlbnRpdGllcy5cbiAqIFxuICogVG8gY3VzdG9taXplIHRoZSBkZWZhdWx0IG9wdGlvbiBjb21wYXJpc29uIGFsZ29yaXRobSwgYDxzZWxlY3Q+YCBzdXBwb3J0cyBgY29tcGFyZVdpdGhgIGlucHV0LlxuICogYGNvbXBhcmVXaXRoYCB0YWtlcyBhICoqZnVuY3Rpb24qKiB3aGljaCBoYXMgdHdvIGFyZ3VtZW50czogYG9wdGlvbjFgIGFuZCBgb3B0aW9uMmAuXG4gKiBJZiBgY29tcGFyZVdpdGhgIGlzIGdpdmVuLCBBbmd1bGFyIHNlbGVjdHMgb3B0aW9uIGJ5IHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uLlxuICogXG4gKiAjIyMjIFN5bnRheFxuICogXG4gKiBgYGBcbiAqIDxzZWxlY3QgW2NvbXBhcmVXaXRoXT1cImNvbXBhcmVGblwiICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkQ291bnRyaWVzXCI+XG4gKiAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgY291bnRyeSBvZiBjb3VudHJpZXNcIiBbbmdWYWx1ZV09XCJjb3VudHJ5XCI+XG4gKiAgICAgICAgIHt7Y291bnRyeS5uYW1lfX1cbiAqICAgICA8L29wdGlvbj5cbiAqIDwvc2VsZWN0PlxuICogXG4gKiBjb21wYXJlRm4oYzE6IENvdW50cnksIGMyOiBDb3VudHJ5KTogYm9vbGVhbiB7XG4gKiAgICAgcmV0dXJuIGMxICYmIGMyID8gYzEuaWQgPT09IGMyLmlkIDogYzEgPT09IGMyO1xuICogfVxuICogYGBgXG4gKiBcbiAqIE5vdGU6IFdlIGxpc3RlbiB0byB0aGUgJ2NoYW5nZScgZXZlbnQgYmVjYXVzZSAnaW5wdXQnIGV2ZW50cyBhcmVuJ3QgZmlyZWRcbiAqIGZvciBzZWxlY3RzIGluIEZpcmVmb3ggYW5kIElFOlxuICogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTAyNDM1MFxuICogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvNDY2MDA0NS9cbiAqIFxuICogKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICB2YWx1ZTogYW55O1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fb3B0aW9uTWFwOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX2lkQ291bnRlcjogbnVtYmVyID0gMDtcblxuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xuc2V0IGNvbXBhcmVXaXRoKGZuOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgY29tcGFyZVdpdGggbXVzdCBiZSBhIGZ1bmN0aW9uLCBidXQgcmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShmbil9YCk7XG4gICAgfVxuICAgIHRoaXMuX2NvbXBhcmVXaXRoID0gZm47XG4gIH1cbnByaXZhdGUgX2NvbXBhcmVXaXRoOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbiA9IGxvb3NlSWRlbnRpY2FsO1xuLyoqXG4gKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICovXG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIsXG5wcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG53cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBpZDogc3RyaW5nID0gdGhpcy5fZ2V0T3B0aW9uSWQodmFsdWUpO1xuICAgIGlmIChpZCA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnc2VsZWN0ZWRJbmRleCcsIC0xKTtcbiAgICB9XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZVN0cmluZyA9IF9idWlsZFZhbHVlU3RyaW5nKGlkLCB2YWx1ZSk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWVTdHJpbmcpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gKHZhbHVlU3RyaW5nOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVN0cmluZztcbiAgICAgIGZuKHRoaXMuX2dldE9wdGlvblZhbHVlKHZhbHVlU3RyaW5nKSk7XG4gICAgfTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cbi8qKlxuICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX3JlZ2lzdGVyT3B0aW9uKCk6IHN0cmluZyB7IHJldHVybiAodGhpcy5faWRDb3VudGVyKyspLnRvU3RyaW5nKCk7IH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbl9nZXRPcHRpb25JZCh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBmb3IgKGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gaWQgb2YgQXJyYXkuZnJvbSh0aGlzLl9vcHRpb25NYXAua2V5cygpKSkge1xuICAgICAgaWYgKHRoaXMuX2NvbXBhcmVXaXRoKHRoaXMuX29wdGlvbk1hcC5nZXQoaWQpLCB2YWx1ZSkpIHJldHVybiBpZDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gdmFsdWVTdHJpbmdcbiAqIEByZXR1cm4gez99XG4gKi9cbl9nZXRPcHRpb25WYWx1ZSh2YWx1ZVN0cmluZzogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGlkOiBzdHJpbmcgPSBfZXh0cmFjdElkKHZhbHVlU3RyaW5nKTtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uTWFwLmhhcyhpZCkgPyB0aGlzLl9vcHRpb25NYXAuZ2V0KGlkKSA6IHZhbHVlU3RyaW5nO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOlxuICAgICAgJ3NlbGVjdDpub3QoW211bHRpcGxlXSlbZm9ybUNvbnRyb2xOYW1lXSxzZWxlY3Q6bm90KFttdWx0aXBsZV0pW2Zvcm1Db250cm9sXSxzZWxlY3Q6bm90KFttdWx0aXBsZV0pW25nTW9kZWxdJyxcbiAgaG9zdDogeycoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsICcoYmx1ciknOiAnb25Ub3VjaGVkKCknfSxcbiAgcHJvdmlkZXJzOiBbU0VMRUNUX1ZBTFVFX0FDQ0VTU09SXVxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBSZW5kZXJlciwgfSxcbnt0eXBlOiBFbGVtZW50UmVmLCB9LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nY29tcGFyZVdpdGgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5TZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3BEZWNvcmF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnZhbHVlO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cblNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fb3B0aW9uTWFwO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cblNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5faWRDb3VudGVyO1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm9uQ2hhbmdlO1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm9uVG91Y2hlZDtcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fY29tcGFyZVdpdGg7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX3JlbmRlcmVyO1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9lbGVtZW50UmVmO1xufVxuXG4vKipcbiAqIFxcQHdoYXRJdERvZXMgTWFya3MgYDxvcHRpb24+YCBhcyBkeW5hbWljLCBzbyBBbmd1bGFyIGNhbiBiZSBub3RpZmllZCB3aGVuIG9wdGlvbnMgY2hhbmdlLlxuICogXG4gKiBcXEBob3dUb1VzZSBcbiAqIFxuICogU2VlIGRvY3MgZm9yIHtcXEBsaW5rIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmb3IgdXNhZ2UgZXhhbXBsZXMuXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgTmdTZWxlY3RPcHRpb24gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBpZDogc3RyaW5nO1xuLyoqXG4gKiBAcGFyYW0gez99IF9lbGVtZW50XG4gKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICogQHBhcmFtIHs/fSBfc2VsZWN0XG4gKi9cbmNvbnN0cnVjdG9yKFxucHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbnByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcixcbnByaXZhdGUgX3NlbGVjdDogU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IpIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0KSB0aGlzLmlkID0gdGhpcy5fc2VsZWN0Ll9yZWdpc3Rlck9wdGlvbigpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldCBuZ1ZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0ID09IG51bGwpIHJldHVybjtcbiAgICB0aGlzLl9zZWxlY3QuX29wdGlvbk1hcC5zZXQodGhpcy5pZCwgdmFsdWUpO1xuICAgIHRoaXMuX3NldEVsZW1lbnRWYWx1ZShfYnVpbGRWYWx1ZVN0cmluZyh0aGlzLmlkLCB2YWx1ZSkpO1xuICAgIHRoaXMuX3NlbGVjdC53cml0ZVZhbHVlKHRoaXMuX3NlbGVjdC52YWx1ZSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUodmFsdWUpO1xuICAgIGlmICh0aGlzLl9zZWxlY3QpIHRoaXMuX3NlbGVjdC53cml0ZVZhbHVlKHRoaXMuX3NlbGVjdC52YWx1ZSk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbl9zZXRFbGVtZW50VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbHVlKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0KSB7XG4gICAgICB0aGlzLl9zZWxlY3QuX29wdGlvbk1hcC5kZWxldGUodGhpcy5pZCk7XG4gICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgIH1cbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe3NlbGVjdG9yOiAnb3B0aW9uJ30sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbnt0eXBlOiBSZW5kZXJlciwgfSxcbnt0eXBlOiBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvciwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBIb3N0IH0sIF19LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nbmdWYWx1ZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ25nVmFsdWUnLCBdIH0sXSxcbid2YWx1ZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ3ZhbHVlJywgXSB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBOZ1NlbGVjdE9wdGlvbl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdTZWxlY3RPcHRpb24uZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5OZ1NlbGVjdE9wdGlvbi5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbk5nU2VsZWN0T3B0aW9uLnByb3BEZWNvcmF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdTZWxlY3RPcHRpb24ucHJvdG90eXBlLmlkO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdTZWxlY3RPcHRpb24ucHJvdG90eXBlLl9lbGVtZW50O1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdTZWxlY3RPcHRpb24ucHJvdG90eXBlLl9yZW5kZXJlcjtcbi8qKiBAdHlwZSB7P30gKi9cbk5nU2VsZWN0T3B0aW9uLnByb3RvdHlwZS5fc2VsZWN0O1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9zZWxlY3RfY29udHJvbF92YWx1ZV9hY2Nlc3Nvci50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSW5wdXQsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFByb3ZpZGVyLCBSZW5kZXJlciwgZm9yd2FyZFJlZiwgybVsb29zZUlkZW50aWNhbCBhcyBsb29zZUlkZW50aWNhbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnLi9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gU0VMRUNUX01VTFRJUExFX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogQHBhcmFtIHs/fSBpZFxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX2J1aWxkVmFsdWVTdHJpbmcoaWQ6IHN0cmluZywgdmFsdWU6IGFueSk6IHN0cmluZyB7XG4gIGlmIChpZCA9PSBudWxsKSByZXR1cm4gYCR7dmFsdWV9YDtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gYCcke3ZhbHVlfSdgO1xuICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgdmFsdWUgPSAnT2JqZWN0JztcbiAgcmV0dXJuIGAke2lkfTogJHt2YWx1ZX1gLnNsaWNlKDAsIDUwKTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVN0cmluZ1xuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX2V4dHJhY3RJZCh2YWx1ZVN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlU3RyaW5nLnNwbGl0KCc6JylbMF07XG59XG5cbi8qKiBNb2NrIGludGVyZmFjZSBmb3IgSFRNTCBPcHRpb25zICovXG5pbnRlcmZhY2UgSFRNTE9wdGlvbiB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHNlbGVjdGVkOiBib29sZWFuO1xufVxuLyoqXG4gKiBNb2NrIGludGVyZmFjZSBmb3IgSFRNTENvbGxlY3Rpb25cbiAqIEBhYnN0cmFjdFxuICovXG5hYnN0cmFjdCBjbGFzcyBIVE1MQ29sbGVjdGlvbiB7XG4gIGxlbmd0aDogbnVtYmVyO1xuLyoqXG4gKiBAYWJzdHJhY3RcbiAqIEBwYXJhbSB7P30gX1xuICogQHJldHVybiB7P31cbiAqL1xuaXRlbShfOiBudW1iZXIpIHt9XG59XG5cbmZ1bmN0aW9uIEhUTUxDb2xsZWN0aW9uX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUubGVuZ3RoO1xufVxuXG4vKipcbiAqIFRoZSBhY2Nlc3NvciBmb3Igd3JpdGluZyBhIHZhbHVlIGFuZCBsaXN0ZW5pbmcgdG8gY2hhbmdlcyBvbiBhIHNlbGVjdCBlbGVtZW50LlxuICogXG4gKiAgIyMjIENhdmVhdDogT3B0aW9ucyBzZWxlY3Rpb25cbiAqIFxuICogQW5ndWxhciB1c2VzIG9iamVjdCBpZGVudGl0eSB0byBzZWxlY3Qgb3B0aW9ucy4gSXQncyBwb3NzaWJsZSBmb3IgdGhlIGlkZW50aXRpZXMgb2YgaXRlbXNcbiAqIHRvIGNoYW5nZSB3aGlsZSB0aGUgZGF0YSBkb2VzIG5vdC4gVGhpcyBjYW4gaGFwcGVuLCBmb3IgZXhhbXBsZSwgaWYgdGhlIGl0ZW1zIGFyZSBwcm9kdWNlZFxuICogZnJvbSBhbiBSUEMgdG8gdGhlIHNlcnZlciwgYW5kIHRoYXQgUlBDIGlzIHJlLXJ1bi4gRXZlbiBpZiB0aGUgZGF0YSBoYXNuJ3QgY2hhbmdlZCwgdGhlXG4gKiBzZWNvbmQgcmVzcG9uc2Ugd2lsbCBwcm9kdWNlIG9iamVjdHMgd2l0aCBkaWZmZXJlbnQgaWRlbnRpdGllcy5cbiAqIFxuICogVG8gY3VzdG9taXplIHRoZSBkZWZhdWx0IG9wdGlvbiBjb21wYXJpc29uIGFsZ29yaXRobSwgYDxzZWxlY3QgbXVsdGlwbGU+YCBzdXBwb3J0cyBgY29tcGFyZVdpdGhgXG4gKiBpbnB1dC4gYGNvbXBhcmVXaXRoYCB0YWtlcyBhICoqZnVuY3Rpb24qKiB3aGljaCBoYXMgdHdvIGFyZ3VtZW50czogYG9wdGlvbjFgIGFuZCBgb3B0aW9uMmAuXG4gKiBJZiBgY29tcGFyZVdpdGhgIGlzIGdpdmVuLCBBbmd1bGFyIHNlbGVjdHMgb3B0aW9ucyBieSB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbi5cbiAqIFxuICogIyMjIyBTeW50YXhcbiAqIFxuICogYGBgXG4gKiA8c2VsZWN0IG11bHRpcGxlIFtjb21wYXJlV2l0aF09XCJjb21wYXJlRm5cIiAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZENvdW50cmllc1wiPlxuICogICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGNvdW50cnkgb2YgY291bnRyaWVzXCIgW25nVmFsdWVdPVwiY291bnRyeVwiPlxuICogICAgICAgICB7e2NvdW50cnkubmFtZX19XG4gKiAgICAgPC9vcHRpb24+XG4gKiA8L3NlbGVjdD5cbiAqIFxuICogY29tcGFyZUZuKGMxOiBDb3VudHJ5LCBjMjogQ291bnRyeSk6IGJvb2xlYW4ge1xuICogICAgIHJldHVybiBjMSAmJiBjMiA/IGMxLmlkID09PSBjMi5pZCA6IGMxID09PSBjMjtcbiAqIH1cbiAqIGBgYFxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHZhbHVlOiBhbnk7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9vcHRpb25NYXA6IE1hcDxzdHJpbmcsIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24+ID0gbmV3IE1hcDxzdHJpbmcsIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24+KCk7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9pZENvdW50ZXI6IG51bWJlciA9IDA7XG5cbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnNldCBjb21wYXJlV2l0aChmbjogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGNvbXBhcmVXaXRoIG11c3QgYmUgYSBmdW5jdGlvbiwgYnV0IHJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoZm4pfWApO1xuICAgIH1cbiAgICB0aGlzLl9jb21wYXJlV2l0aCA9IGZuO1xuICB9XG5wcml2YXRlIF9jb21wYXJlV2l0aDogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW4gPSBsb29zZUlkZW50aWNhbDtcbi8qKlxuICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAqL1xuY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyLFxucHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xud3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIGxldCAvKiogQHR5cGUgez99ICovIG9wdGlvblNlbGVjdGVkU3RhdGVTZXR0ZXI6IChvcHQ6IE5nU2VsZWN0TXVsdGlwbGVPcHRpb24sIG86IGFueSkgPT4gdm9pZDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIC8vIGNvbnZlcnQgdmFsdWVzIHRvIGlkc1xuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBpZHMgPSB2YWx1ZS5tYXAoKHYpID0+IHRoaXMuX2dldE9wdGlvbklkKHYpKTtcbiAgICAgIG9wdGlvblNlbGVjdGVkU3RhdGVTZXR0ZXIgPSAob3B0LCBvKSA9PiB7IG9wdC5fc2V0U2VsZWN0ZWQoaWRzLmluZGV4T2Yoby50b1N0cmluZygpKSA+IC0xKTsgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uU2VsZWN0ZWRTdGF0ZVNldHRlciA9IChvcHQsIG8pID0+IHsgb3B0Ll9zZXRTZWxlY3RlZChmYWxzZSk7IH07XG4gICAgfVxuICAgIHRoaXMuX29wdGlvbk1hcC5mb3JFYWNoKG9wdGlvblNlbGVjdGVkU3RhdGVTZXR0ZXIpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gKF86IGFueSkgPT4ge1xuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBzZWxlY3RlZDogQXJyYXk8YW55PiA9IFtdO1xuICAgICAgaWYgKF8uaGFzT3duUHJvcGVydHkoJ3NlbGVjdGVkT3B0aW9ucycpKSB7XG4gICAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gb3B0aW9uczogSFRNTENvbGxlY3Rpb24gPSBfLnNlbGVjdGVkT3B0aW9ucztcbiAgICAgICAgZm9yIChsZXQgLyoqIEB0eXBlIHs/fSAqLyBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIG9wdDogYW55ID0gb3B0aW9ucy5pdGVtKGkpO1xuICAgICAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gdmFsOiBhbnkgPSB0aGlzLl9nZXRPcHRpb25WYWx1ZShvcHQudmFsdWUpO1xuICAgICAgICAgIHNlbGVjdGVkLnB1c2godmFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gRGVncmFkZSBvbiBJRVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gb3B0aW9uczogSFRNTENvbGxlY3Rpb24gPSAvKiogQHR5cGUgez99ICovKCggPEhUTUxDb2xsZWN0aW9uPl8ub3B0aW9ucykpO1xuICAgICAgICBmb3IgKGxldCAvKiogQHR5cGUgez99ICovIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gb3B0OiBIVE1MT3B0aW9uID0gb3B0aW9ucy5pdGVtKGkpO1xuICAgICAgICAgIGlmIChvcHQuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gdmFsOiBhbnkgPSB0aGlzLl9nZXRPcHRpb25WYWx1ZShvcHQudmFsdWUpO1xuICAgICAgICAgICAgc2VsZWN0ZWQucHVzaCh2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkO1xuICAgICAgZm4oc2VsZWN0ZWQpO1xuICAgIH07XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICogQHJldHVybiB7P31cbiAqL1xuc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbl9yZWdpc3Rlck9wdGlvbih2YWx1ZTogTmdTZWxlY3RNdWx0aXBsZU9wdGlvbik6IHN0cmluZyB7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBpZDogc3RyaW5nID0gKHRoaXMuX2lkQ291bnRlcisrKS50b1N0cmluZygpO1xuICAgIHRoaXMuX29wdGlvbk1hcC5zZXQoaWQsIHZhbHVlKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbl9nZXRPcHRpb25JZCh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBmb3IgKGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gaWQgb2YgQXJyYXkuZnJvbSh0aGlzLl9vcHRpb25NYXAua2V5cygpKSkge1xuICAgICAgaWYgKHRoaXMuX2NvbXBhcmVXaXRoKHRoaXMuX29wdGlvbk1hcC5nZXQoaWQpLl92YWx1ZSwgdmFsdWUpKSByZXR1cm4gaWQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IHZhbHVlU3RyaW5nXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fZ2V0T3B0aW9uVmFsdWUodmFsdWVTdHJpbmc6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBpZDogc3RyaW5nID0gX2V4dHJhY3RJZCh2YWx1ZVN0cmluZyk7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbk1hcC5oYXMoaWQpID8gdGhpcy5fb3B0aW9uTWFwLmdldChpZCkuX3ZhbHVlIDogdmFsdWVTdHJpbmc7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6XG4gICAgICAnc2VsZWN0W211bHRpcGxlXVtmb3JtQ29udHJvbE5hbWVdLHNlbGVjdFttdWx0aXBsZV1bZm9ybUNvbnRyb2xdLHNlbGVjdFttdWx0aXBsZV1bbmdNb2RlbF0nLFxuICBob3N0OiB7JyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQpJywgJyhibHVyKSc6ICdvblRvdWNoZWQoKSd9LFxuICBwcm92aWRlcnM6IFtTRUxFQ1RfTVVMVElQTEVfVkFMVUVfQUNDRVNTT1JdXG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IFJlbmRlcmVyLCB9LFxue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidjb21wYXJlV2l0aCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3JfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5TZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm9wRGVjb3JhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnZhbHVlO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cblNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9vcHRpb25NYXA7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2lkQ291bnRlcjtcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm9uQ2hhbmdlO1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUub25Ub3VjaGVkO1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2NvbXBhcmVXaXRoO1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX3JlbmRlcmVyO1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2VsZW1lbnRSZWY7XG59XG5cbi8qKlxuICogTWFya3MgYDxvcHRpb24+YCBhcyBkeW5hbWljLCBzbyBBbmd1bGFyIGNhbiBiZSBub3RpZmllZCB3aGVuIG9wdGlvbnMgY2hhbmdlLlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiBgYGBcbiAqIDxzZWxlY3QgbXVsdGlwbGUgbmFtZT1cImNpdHlcIiBuZ01vZGVsPlxuICogICA8b3B0aW9uICpuZ0Zvcj1cImxldCBjIG9mIGNpdGllc1wiIFt2YWx1ZV09XCJjXCI+PC9vcHRpb24+XG4gKiA8L3NlbGVjdD5cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGlkOiBzdHJpbmc7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl92YWx1ZTogYW55O1xuLyoqXG4gKiBAcGFyYW0gez99IF9lbGVtZW50XG4gKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICogQHBhcmFtIHs/fSBfc2VsZWN0XG4gKi9cbmNvbnN0cnVjdG9yKFxucHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbnByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcixcbnByaXZhdGUgX3NlbGVjdDogU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvcikge1xuICAgIGlmICh0aGlzLl9zZWxlY3QpIHtcbiAgICAgIHRoaXMuaWQgPSB0aGlzLl9zZWxlY3QuX3JlZ2lzdGVyT3B0aW9uKHRoaXMpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXQgbmdWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdCA9PSBudWxsKSByZXR1cm47XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUoX2J1aWxkVmFsdWVTdHJpbmcodGhpcy5pZCwgdmFsdWUpKTtcbiAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3NldEVsZW1lbnRWYWx1ZShfYnVpbGRWYWx1ZVN0cmluZyh0aGlzLmlkLCB2YWx1ZSkpO1xuICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0RWxlbWVudFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbl9zZXRFbGVtZW50VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbHVlKTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBzZWxlY3RlZFxuICogQHJldHVybiB7P31cbiAqL1xuX3NldFNlbGVjdGVkKHNlbGVjdGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zZWxlY3QpIHtcbiAgICAgIHRoaXMuX3NlbGVjdC5fb3B0aW9uTWFwLmRlbGV0ZSh0aGlzLmlkKTtcbiAgICAgIHRoaXMuX3NlbGVjdC53cml0ZVZhbHVlKHRoaXMuX3NlbGVjdC52YWx1ZSk7XG4gICAgfVxuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7c2VsZWN0b3I6ICdvcHRpb24nfSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBFbGVtZW50UmVmLCB9LFxue3R5cGU6IFJlbmRlcmVyLCB9LFxue3R5cGU6IFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IsIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogSG9zdCB9LCBdfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ25nVmFsdWUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyduZ1ZhbHVlJywgXSB9LF0sXG4ndmFsdWUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyd2YWx1ZScsIF0gfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gTmdTZWxlY3RNdWx0aXBsZU9wdGlvbl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbk5nU2VsZWN0TXVsdGlwbGVPcHRpb24uY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5OZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3BEZWNvcmF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5wcm90b3R5cGUuaWQ7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5wcm90b3R5cGUuX3ZhbHVlO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5wcm90b3R5cGUuX2VsZW1lbnQ7XG4vKiogQHR5cGUgez99ICovXG5OZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZS5fcmVuZGVyZXI7XG4vKiogQHR5cGUgez99ICovXG5OZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZS5fc2VsZWN0O1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9zZWxlY3RfbXVsdGlwbGVfY29udHJvbF92YWx1ZV9hY2Nlc3Nvci50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge8m1bG9vc2VJZGVudGljYWwgYXMgbG9vc2VJZGVudGljYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQXJyYXksIEZvcm1Db250cm9sLCBGb3JtR3JvdXB9IGZyb20gJy4uL21vZGVsJztcbmltcG9ydCB7VmFsaWRhdG9yc30gZnJvbSAnLi4vdmFsaWRhdG9ycyc7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbERpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdF9jb250cm9sX2RpcmVjdGl2ZSc7XG5pbXBvcnQge0Fic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0X2Zvcm1fZ3JvdXBfZGlyZWN0aXZlJztcbmltcG9ydCB7Q2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9jaGVja2JveF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge0NvbnRyb2xDb250YWluZXJ9IGZyb20gJy4vY29udHJvbF9jb250YWluZXInO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGVmYXVsdF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge05nQ29udHJvbH0gZnJvbSAnLi9uZ19jb250cm9sJztcbmltcG9ydCB7bm9ybWFsaXplQXN5bmNWYWxpZGF0b3IsIG5vcm1hbGl6ZVZhbGlkYXRvcn0gZnJvbSAnLi9ub3JtYWxpemVfdmFsaWRhdG9yJztcbmltcG9ydCB7TnVtYmVyVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9udW1iZXJfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL3JhZGlvX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtSYW5nZVZhbHVlQWNjZXNzb3J9IGZyb20gJy4vcmFuZ2VfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtGb3JtQXJyYXlOYW1lfSBmcm9tICcuL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9ncm91cF9uYW1lJztcbmltcG9ydCB7U2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vc2VsZWN0X2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL3NlbGVjdF9tdWx0aXBsZV9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7QXN5bmNWYWxpZGF0b3IsIEFzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRvciwgVmFsaWRhdG9yRm59IGZyb20gJy4vdmFsaWRhdG9ycyc7XG4vKipcbiAqIEBwYXJhbSB7P30gbmFtZVxuICogQHBhcmFtIHs/fSBwYXJlbnRcbiAqIEByZXR1cm4gez99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb250cm9sUGF0aChuYW1lOiBzdHJpbmcsIHBhcmVudDogQ29udHJvbENvbnRhaW5lcik6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIFsuLi5wYXJlbnQucGF0aCwgbmFtZV07XG59XG4vKipcbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRVcENvbnRyb2woY29udHJvbDogRm9ybUNvbnRyb2wsIGRpcjogTmdDb250cm9sKTogdm9pZCB7XG4gIGlmICghY29udHJvbCkgX3Rocm93RXJyb3IoZGlyLCAnQ2Fubm90IGZpbmQgY29udHJvbCB3aXRoJyk7XG4gIGlmICghZGlyLnZhbHVlQWNjZXNzb3IpIF90aHJvd0Vycm9yKGRpciwgJ05vIHZhbHVlIGFjY2Vzc29yIGZvciBmb3JtIGNvbnRyb2wgd2l0aCcpO1xuXG4gIGNvbnRyb2wudmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlKFtjb250cm9sLnZhbGlkYXRvciwgZGlyLnZhbGlkYXRvcl0pO1xuICBjb250cm9sLmFzeW5jVmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlQXN5bmMoW2NvbnRyb2wuYXN5bmNWYWxpZGF0b3IsIGRpci5hc3luY1ZhbGlkYXRvcl0pO1xuICBkaXIudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKGNvbnRyb2wudmFsdWUpO1xuXG4gIC8vIHZpZXcgLT4gbW9kZWxcbiAgZGlyLnZhbHVlQWNjZXNzb3IucmVnaXN0ZXJPbkNoYW5nZSgobmV3VmFsdWU6IGFueSkgPT4ge1xuICAgIGRpci52aWV3VG9Nb2RlbFVwZGF0ZShuZXdWYWx1ZSk7XG4gICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIGNvbnRyb2wuc2V0VmFsdWUobmV3VmFsdWUsIHtlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U6IGZhbHNlfSk7XG4gIH0pO1xuXG4gIC8vIHRvdWNoZWRcbiAgZGlyLnZhbHVlQWNjZXNzb3IucmVnaXN0ZXJPblRvdWNoZWQoKCkgPT4gY29udHJvbC5tYXJrQXNUb3VjaGVkKCkpO1xuXG4gIGNvbnRyb2wucmVnaXN0ZXJPbkNoYW5nZSgobmV3VmFsdWU6IGFueSwgZW1pdE1vZGVsRXZlbnQ6IGJvb2xlYW4pID0+IHtcbiAgICAvLyBjb250cm9sIC0+IHZpZXdcbiAgICBkaXIudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKG5ld1ZhbHVlKTtcblxuICAgIC8vIGNvbnRyb2wgLT4gbmdNb2RlbFxuICAgIGlmIChlbWl0TW9kZWxFdmVudCkgZGlyLnZpZXdUb01vZGVsVXBkYXRlKG5ld1ZhbHVlKTtcbiAgfSk7XG5cbiAgaWYgKGRpci52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUpIHtcbiAgICBjb250cm9sLnJlZ2lzdGVyT25EaXNhYmxlZENoYW5nZShcbiAgICAgICAgKGlzRGlzYWJsZWQ6IGJvb2xlYW4pID0+IHsgZGlyLnZhbHVlQWNjZXNzb3Iuc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkKTsgfSk7XG4gIH1cblxuICAvLyByZS1ydW4gdmFsaWRhdGlvbiB3aGVuIHZhbGlkYXRvciBiaW5kaW5nIGNoYW5nZXMsIGUuZy4gbWlubGVuZ3RoPTMgLT4gbWlubGVuZ3RoPTRcbiAgZGlyLl9yYXdWYWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcjogVmFsaWRhdG9yIHwgVmFsaWRhdG9yRm4pID0+IHtcbiAgICBpZiAoKCAvKiogQHR5cGUgez99ICovKCg8VmFsaWRhdG9yPnZhbGlkYXRvcikpKS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKVxuICAgICAgKCAvKiogQHR5cGUgez99ICovKCg8VmFsaWRhdG9yPnZhbGlkYXRvcikpKS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKCgpID0+IGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpKTtcbiAgfSk7XG5cbiAgZGlyLl9yYXdBc3luY1ZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvciB8IEFzeW5jVmFsaWRhdG9yRm4pID0+IHtcbiAgICBpZiAoKCAvKiogQHR5cGUgez99ICovKCg8VmFsaWRhdG9yPnZhbGlkYXRvcikpKS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKVxuICAgICAgKCAvKiogQHR5cGUgez99ICovKCg8VmFsaWRhdG9yPnZhbGlkYXRvcikpKS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKCgpID0+IGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpKTtcbiAgfSk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhblVwQ29udHJvbChjb250cm9sOiBGb3JtQ29udHJvbCwgZGlyOiBOZ0NvbnRyb2wpIHtcbiAgZGlyLnZhbHVlQWNjZXNzb3IucmVnaXN0ZXJPbkNoYW5nZSgoKSA9PiBfbm9Db250cm9sRXJyb3IoZGlyKSk7XG4gIGRpci52YWx1ZUFjY2Vzc29yLnJlZ2lzdGVyT25Ub3VjaGVkKCgpID0+IF9ub0NvbnRyb2xFcnJvcihkaXIpKTtcblxuICBkaXIuX3Jhd1ZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yOiBhbnkpID0+IHtcbiAgICBpZiAodmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UpIHtcbiAgICAgIHZhbGlkYXRvci5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKG51bGwpO1xuICAgIH1cbiAgfSk7XG5cbiAgZGlyLl9yYXdBc3luY1ZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yOiBhbnkpID0+IHtcbiAgICBpZiAodmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UpIHtcbiAgICAgIHZhbGlkYXRvci5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKG51bGwpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGNvbnRyb2wpIGNvbnRyb2wuX2NsZWFyQ2hhbmdlRm5zKCk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRVcEZvcm1Db250YWluZXIoXG4gICAgY29udHJvbDogRm9ybUdyb3VwIHwgRm9ybUFycmF5LCBkaXI6IEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlIHwgRm9ybUFycmF5TmFtZSkge1xuICBpZiAoY29udHJvbCA9PSBudWxsKSBfdGhyb3dFcnJvcihkaXIsICdDYW5ub3QgZmluZCBjb250cm9sIHdpdGgnKTtcbiAgY29udHJvbC52YWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2UoW2NvbnRyb2wudmFsaWRhdG9yLCBkaXIudmFsaWRhdG9yXSk7XG4gIGNvbnRyb2wuYXN5bmNWYWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyhbY29udHJvbC5hc3luY1ZhbGlkYXRvciwgZGlyLmFzeW5jVmFsaWRhdG9yXSk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfbm9Db250cm9sRXJyb3IoZGlyOiBOZ0NvbnRyb2wpIHtcbiAgcmV0dXJuIF90aHJvd0Vycm9yKGRpciwgJ1RoZXJlIGlzIG5vIEZvcm1Db250cm9sIGluc3RhbmNlIGF0dGFjaGVkIHRvIGZvcm0gY29udHJvbCBlbGVtZW50IHdpdGgnKTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEBwYXJhbSB7P30gbWVzc2FnZVxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX3Rocm93RXJyb3IoZGlyOiBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICBsZXQgLyoqIEB0eXBlIHs/fSAqLyBtZXNzYWdlRW5kOiBzdHJpbmc7XG4gIGlmIChkaXIucGF0aC5sZW5ndGggPiAxKSB7XG4gICAgbWVzc2FnZUVuZCA9IGBwYXRoOiAnJHtkaXIucGF0aC5qb2luKCcgLT4gJyl9J2A7XG4gIH0gZWxzZSBpZiAoZGlyLnBhdGhbMF0pIHtcbiAgICBtZXNzYWdlRW5kID0gYG5hbWU6ICcke2Rpci5wYXRofSdgO1xuICB9IGVsc2Uge1xuICAgIG1lc3NhZ2VFbmQgPSAndW5zcGVjaWZpZWQgbmFtZSBhdHRyaWJ1dGUnO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgJHttZXNzYWdlfSAke21lc3NhZ2VFbmR9YCk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICogQHJldHVybiB7P31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VWYWxpZGF0b3JzKHZhbGlkYXRvcnM6IEFycmF5PFZhbGlkYXRvcnxGdW5jdGlvbj4pOiBWYWxpZGF0b3JGbiB7XG4gIHJldHVybiB2YWxpZGF0b3JzICE9IG51bGwgPyBWYWxpZGF0b3JzLmNvbXBvc2UodmFsaWRhdG9ycy5tYXAobm9ybWFsaXplVmFsaWRhdG9yKSkgOiBudWxsO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEByZXR1cm4gez99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHZhbGlkYXRvcnM6IEFycmF5PFZhbGlkYXRvcnxGdW5jdGlvbj4pOiBBc3luY1ZhbGlkYXRvckZuIHtcbiAgcmV0dXJuIHZhbGlkYXRvcnMgIT0gbnVsbCA/IFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jKHZhbGlkYXRvcnMubWFwKG5vcm1hbGl6ZUFzeW5jVmFsaWRhdG9yKSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gKiBAcGFyYW0gez99IHZpZXdNb2RlbFxuICogQHJldHVybiB7P31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9LCB2aWV3TW9kZWw6IGFueSk6IGJvb2xlYW4ge1xuICBpZiAoIWNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ21vZGVsJykpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjaGFuZ2UgPSBjaGFuZ2VzWydtb2RlbCddO1xuXG4gIGlmIChjaGFuZ2UuaXNGaXJzdENoYW5nZSgpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuICFsb29zZUlkZW50aWNhbCh2aWV3TW9kZWwsIGNoYW5nZS5jdXJyZW50VmFsdWUpO1xufVxuXG5jb25zdCAvKiogQHR5cGUgez99ICovIEJVSUxUSU5fQUNDRVNTT1JTID0gW1xuICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBSYW5nZVZhbHVlQWNjZXNzb3IsXG4gIE51bWJlclZhbHVlQWNjZXNzb3IsXG4gIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuXTtcbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZUFjY2Vzc29yXG4gKiBAcmV0dXJuIHs/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCdWlsdEluQWNjZXNzb3IodmFsdWVBY2Nlc3NvcjogQ29udHJvbFZhbHVlQWNjZXNzb3IpOiBib29sZWFuIHtcbiAgcmV0dXJuIEJVSUxUSU5fQUNDRVNTT1JTLnNvbWUoYSA9PiB2YWx1ZUFjY2Vzc29yLmNvbnN0cnVjdG9yID09PSBhKTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEBwYXJhbSB7P30gdmFsdWVBY2Nlc3NvcnNcbiAqIEByZXR1cm4gez99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RWYWx1ZUFjY2Vzc29yKFxuICAgIGRpcjogTmdDb250cm9sLCB2YWx1ZUFjY2Vzc29yczogQ29udHJvbFZhbHVlQWNjZXNzb3JbXSk6IENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgaWYgKCF2YWx1ZUFjY2Vzc29ycykgcmV0dXJuIG51bGw7XG5cbiAgbGV0IC8qKiBAdHlwZSB7P30gKi8gZGVmYXVsdEFjY2Vzc29yOiBDb250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgbGV0IC8qKiBAdHlwZSB7P30gKi8gYnVpbHRpbkFjY2Vzc29yOiBDb250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgbGV0IC8qKiBAdHlwZSB7P30gKi8gY3VzdG9tQWNjZXNzb3I6IENvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuICB2YWx1ZUFjY2Vzc29ycy5mb3JFYWNoKCh2OiBDb250cm9sVmFsdWVBY2Nlc3NvcikgPT4ge1xuICAgIGlmICh2LmNvbnN0cnVjdG9yID09PSBEZWZhdWx0VmFsdWVBY2Nlc3Nvcikge1xuICAgICAgZGVmYXVsdEFjY2Vzc29yID0gdjtcblxuICAgIH0gZWxzZSBpZiAoaXNCdWlsdEluQWNjZXNzb3IodikpIHtcbiAgICAgIGlmIChidWlsdGluQWNjZXNzb3IpXG4gICAgICAgIF90aHJvd0Vycm9yKGRpciwgJ01vcmUgdGhhbiBvbmUgYnVpbHQtaW4gdmFsdWUgYWNjZXNzb3IgbWF0Y2hlcyBmb3JtIGNvbnRyb2wgd2l0aCcpO1xuICAgICAgYnVpbHRpbkFjY2Vzc29yID0gdjtcblxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY3VzdG9tQWNjZXNzb3IpXG4gICAgICAgIF90aHJvd0Vycm9yKGRpciwgJ01vcmUgdGhhbiBvbmUgY3VzdG9tIHZhbHVlIGFjY2Vzc29yIG1hdGNoZXMgZm9ybSBjb250cm9sIHdpdGgnKTtcbiAgICAgIGN1c3RvbUFjY2Vzc29yID0gdjtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChjdXN0b21BY2Nlc3NvcikgcmV0dXJuIGN1c3RvbUFjY2Vzc29yO1xuICBpZiAoYnVpbHRpbkFjY2Vzc29yKSByZXR1cm4gYnVpbHRpbkFjY2Vzc29yO1xuICBpZiAoZGVmYXVsdEFjY2Vzc29yKSByZXR1cm4gZGVmYXVsdEFjY2Vzc29yO1xuXG4gIF90aHJvd0Vycm9yKGRpciwgJ05vIHZhbGlkIHZhbHVlIGFjY2Vzc29yIGZvciBmb3JtIGNvbnRyb2wgd2l0aCcpO1xuICByZXR1cm4gbnVsbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9zaGFyZWQudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICcuLi9tb2RlbCc7XG5cbmltcG9ydCB7Q29udHJvbENvbnRhaW5lcn0gZnJvbSAnLi9jb250cm9sX2NvbnRhaW5lcic7XG5pbXBvcnQge0Zvcm19IGZyb20gJy4vZm9ybV9pbnRlcmZhY2UnO1xuaW1wb3J0IHtjb21wb3NlQXN5bmNWYWxpZGF0b3JzLCBjb21wb3NlVmFsaWRhdG9ycywgY29udHJvbFBhdGh9IGZyb20gJy4vc2hhcmVkJztcbmltcG9ydCB7QXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdG9yRm59IGZyb20gJy4vdmFsaWRhdG9ycyc7XG4vKipcbiAqIFRoaXMgaXMgYSBiYXNlIGNsYXNzIGZvciBjb2RlIHNoYXJlZCBiZXR3ZWVuIHtcXEBsaW5rIE5nTW9kZWxHcm91cH0gYW5kIHtcXEBsaW5rIEZvcm1Hcm91cE5hbWV9LlxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX3BhcmVudDogQ29udHJvbENvbnRhaW5lcjtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX3ZhbGlkYXRvcnM6IGFueVtdO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fYXN5bmNWYWxpZGF0b3JzOiBhbnlbXTtcbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xubmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fY2hlY2tQYXJlbnRUeXBlKCk7XG4gICAgdGhpcy5mb3JtRGlyZWN0aXZlLmFkZEZvcm1Hcm91cCh0aGlzKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtRGlyZWN0aXZlKSB7XG4gICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlRm9ybUdyb3VwKHRoaXMpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBHZXQgdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0gYmFja2luZyB0aGlzIGJpbmRpbmcuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgY29udHJvbCgpOiBGb3JtR3JvdXAgeyByZXR1cm4gdGhpcy5mb3JtRGlyZWN0aXZlLmdldEZvcm1Hcm91cCh0aGlzKTsgfVxuLyoqXG4gKiBHZXQgdGhlIHBhdGggdG8gdGhpcyBjb250cm9sIGdyb3VwLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHBhdGgoKTogc3RyaW5nW10geyByZXR1cm4gY29udHJvbFBhdGgodGhpcy5uYW1lLCB0aGlzLl9wYXJlbnQpOyB9XG4vKipcbiAqIEdldCB0aGUge1xcQGxpbmsgRm9ybX0gdG8gd2hpY2ggdGhpcyBncm91cCBiZWxvbmdzLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGZvcm1EaXJlY3RpdmUoKTogRm9ybSB7IHJldHVybiB0aGlzLl9wYXJlbnQgPyB0aGlzLl9wYXJlbnQuZm9ybURpcmVjdGl2ZSA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl92YWxpZGF0b3JzKTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgYXN5bmNWYWxpZGF0b3IoKTogQXN5bmNWYWxpZGF0b3JGbiB7IHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX2FzeW5jVmFsaWRhdG9ycyk7IH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl9jaGVja1BhcmVudFR5cGUoKTogdm9pZCB7fVxufVxuXG5mdW5jdGlvbiBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZV90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbkFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fcGFyZW50O1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbkFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fdmFsaWRhdG9ycztcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5BYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX2FzeW5jVmFsaWRhdG9ycztcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL2Fic3RyYWN0X2Zvcm1fZ3JvdXBfZGlyZWN0aXZlLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBTZWxmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3RfY29udHJvbF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtDb250cm9sQ29udGFpbmVyfSBmcm9tICcuL2NvbnRyb2xfY29udGFpbmVyJztcbmltcG9ydCB7TmdDb250cm9sfSBmcm9tICcuL25nX2NvbnRyb2wnO1xuZXhwb3J0IGNsYXNzIEFic3RyYWN0Q29udHJvbFN0YXR1cyB7XG5wcml2YXRlIF9jZDogQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlO1xuLyoqXG4gKiBAcGFyYW0gez99IGNkXG4gKi9cbmNvbnN0cnVjdG9yKGNkOiBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUpIHsgdGhpcy5fY2QgPSBjZDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgbmdDbGFzc1VudG91Y2hlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLnVudG91Y2hlZCA6IGZhbHNlOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBuZ0NsYXNzVG91Y2hlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLnRvdWNoZWQgOiBmYWxzZTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgbmdDbGFzc1ByaXN0aW5lKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wucHJpc3RpbmUgOiBmYWxzZTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgbmdDbGFzc0RpcnR5KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wuZGlydHkgOiBmYWxzZTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgbmdDbGFzc1ZhbGlkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wudmFsaWQgOiBmYWxzZTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgbmdDbGFzc0ludmFsaWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC5pbnZhbGlkIDogZmFsc2U7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IG5nQ2xhc3NQZW5kaW5nKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wucGVuZGluZyA6IGZhbHNlOyB9XG59XG5cbmZ1bmN0aW9uIEFic3RyYWN0Q29udHJvbFN0YXR1c190c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZS5fY2Q7XG59XG5cblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gbmdDb250cm9sU3RhdHVzSG9zdCA9IHtcbiAgJ1tjbGFzcy5uZy11bnRvdWNoZWRdJzogJ25nQ2xhc3NVbnRvdWNoZWQnLFxuICAnW2NsYXNzLm5nLXRvdWNoZWRdJzogJ25nQ2xhc3NUb3VjaGVkJyxcbiAgJ1tjbGFzcy5uZy1wcmlzdGluZV0nOiAnbmdDbGFzc1ByaXN0aW5lJyxcbiAgJ1tjbGFzcy5uZy1kaXJ0eV0nOiAnbmdDbGFzc0RpcnR5JyxcbiAgJ1tjbGFzcy5uZy12YWxpZF0nOiAnbmdDbGFzc1ZhbGlkJyxcbiAgJ1tjbGFzcy5uZy1pbnZhbGlkXSc6ICduZ0NsYXNzSW52YWxpZCcsXG4gICdbY2xhc3MubmctcGVuZGluZ10nOiAnbmdDbGFzc1BlbmRpbmcnLFxufTtcbi8qKlxuICogRGlyZWN0aXZlIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byBBbmd1bGFyIGZvcm0gY29udHJvbHMgdGhhdCBzZXRzIENTUyBjbGFzc2VzXG4gKiBiYXNlZCBvbiBjb250cm9sIHN0YXR1cyAodmFsaWQvaW52YWxpZC9kaXJ0eS9ldGMpLlxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIE5nQ29udHJvbFN0YXR1cyBleHRlbmRzIEFic3RyYWN0Q29udHJvbFN0YXR1cyB7XG4vKipcbiAqIEBwYXJhbSB7P30gY2RcbiAqL1xuY29uc3RydWN0b3IoIGNkOiBOZ0NvbnRyb2wpIHsgc3VwZXIoY2QpOyB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7c2VsZWN0b3I6ICdbZm9ybUNvbnRyb2xOYW1lXSxbbmdNb2RlbF0sW2Zvcm1Db250cm9sXScsIGhvc3Q6IG5nQ29udHJvbFN0YXR1c0hvc3R9LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IE5nQ29udHJvbCwgZGVjb3JhdG9yczogW3sgdHlwZTogU2VsZiB9LCBdfSxcbl07XG59XG5cbmZ1bmN0aW9uIE5nQ29udHJvbFN0YXR1c190c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdDb250cm9sU3RhdHVzLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuTmdDb250cm9sU3RhdHVzLmN0b3JQYXJhbWV0ZXJzO1xufVxuXG4vKipcbiAqIERpcmVjdGl2ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gQW5ndWxhciBmb3JtIGdyb3VwcyB0aGF0IHNldHMgQ1NTIGNsYXNzZXNcbiAqIGJhc2VkIG9uIGNvbnRyb2wgc3RhdHVzICh2YWxpZC9pbnZhbGlkL2RpcnR5L2V0YykuXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgTmdDb250cm9sU3RhdHVzR3JvdXAgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xTdGF0dXMge1xuLyoqXG4gKiBAcGFyYW0gez99IGNkXG4gKi9cbmNvbnN0cnVjdG9yKCBjZDogQ29udHJvbENvbnRhaW5lcikgeyBzdXBlcihjZCk7IH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6XG4gICAgICAnW2Zvcm1Hcm91cE5hbWVdLFtmb3JtQXJyYXlOYW1lXSxbbmdNb2RlbEdyb3VwXSxbZm9ybUdyb3VwXSxmb3JtOm5vdChbbmdOb0Zvcm1dKSxbbmdGb3JtXScsXG4gIGhvc3Q6IG5nQ29udHJvbFN0YXR1c0hvc3Rcbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogU2VsZiB9LCBdfSxcbl07XG59XG5cbmZ1bmN0aW9uIE5nQ29udHJvbFN0YXR1c0dyb3VwX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5OZ0NvbnRyb2xTdGF0dXNHcm91cC5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbk5nQ29udHJvbFN0YXR1c0dyb3VwLmN0b3JQYXJhbWV0ZXJzO1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19jb250cm9sX3N0YXR1cy50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge2NvbXBvc2VBc3luY1ZhbGlkYXRvcnMsIGNvbXBvc2VWYWxpZGF0b3JzfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2hhcmVkJztcbmltcG9ydCB7QXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm59IGZyb20gJy4vZGlyZWN0aXZlcy92YWxpZGF0b3JzJztcbmltcG9ydCB7dG9PYnNlcnZhYmxlfSBmcm9tICcuL3ZhbGlkYXRvcnMnO1xuXG4vKipcbiAqIEluZGljYXRlcyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgdmFsaWQsIGkuZS4gdGhhdCBubyBlcnJvcnMgZXhpc3QgaW4gdGhlIGlucHV0IHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBWQUxJRCA9ICdWQUxJRCc7XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyBpbnZhbGlkLCBpLmUuIHRoYXQgYW4gZXJyb3IgZXhpc3RzIGluIHRoZSBpbnB1dCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gSU5WQUxJRCA9ICdJTlZBTElEJztcblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBhIEZvcm1Db250cm9sIGlzIHBlbmRpbmcsIGkuZS4gdGhhdCBhc3luYyB2YWxpZGF0aW9uIGlzIG9jY3VycmluZyBhbmRcbiAqIGVycm9ycyBhcmUgbm90IHlldCBhdmFpbGFibGUgZm9yIHRoZSBpbnB1dCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gUEVORElORyA9ICdQRU5ESU5HJztcblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBhIEZvcm1Db250cm9sIGlzIGRpc2FibGVkLCBpLmUuIHRoYXQgdGhlIGNvbnRyb2wgaXMgZXhlbXB0IGZyb20gYW5jZXN0b3JcbiAqIGNhbGN1bGF0aW9ucyBvZiB2YWxpZGl0eSBvciB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gRElTQUJMRUQgPSAnRElTQUJMRUQnO1xuLyoqXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEBwYXJhbSB7P30gcGF0aFxuICogQHBhcmFtIHs/fSBkZWxpbWl0ZXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9maW5kKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgcGF0aDogQXJyYXk8c3RyaW5nfG51bWJlcj58IHN0cmluZywgZGVsaW1pdGVyOiBzdHJpbmcpIHtcbiAgaWYgKHBhdGggPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKCEocGF0aCBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgIHBhdGggPSAoIC8qKiBAdHlwZSB7P30gKi8oKDxzdHJpbmc+cGF0aCkpKS5zcGxpdChkZWxpbWl0ZXIpO1xuICB9XG4gIGlmIChwYXRoIGluc3RhbmNlb2YgQXJyYXkgJiYgKHBhdGgubGVuZ3RoID09PSAwKSkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuICggLyoqIEB0eXBlIHs/fSAqLygoPEFycmF5PHN0cmluZ3xudW1iZXI+PnBhdGgpKSkucmVkdWNlKCh2LCBuYW1lKSA9PiB7XG4gICAgaWYgKHYgaW5zdGFuY2VvZiBGb3JtR3JvdXApIHtcbiAgICAgIHJldHVybiB2LmNvbnRyb2xzW25hbWVdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHYgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgIHJldHVybiB2LmF0KCAvKiogQHR5cGUgez99ICovKCg8bnVtYmVyPm5hbWUpKSkgfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgY29udHJvbCk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBjb2VyY2VUb1ZhbGlkYXRvcih2YWxpZGF0b3I6IFZhbGlkYXRvckZuIHwgVmFsaWRhdG9yRm5bXSk6IFZhbGlkYXRvckZuIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsaWRhdG9yKSA/IGNvbXBvc2VWYWxpZGF0b3JzKHZhbGlkYXRvcikgOiB2YWxpZGF0b3I7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIGNvZXJjZVRvQXN5bmNWYWxpZGF0b3IoYXN5bmNWYWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yRm4gfCBBc3luY1ZhbGlkYXRvckZuW10pOlxuICAgIEFzeW5jVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhc3luY1ZhbGlkYXRvcikgPyBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKGFzeW5jVmFsaWRhdG9yKSA6IGFzeW5jVmFsaWRhdG9yO1xufVxuLyoqXG4gKiBcXEB3aGF0SXREb2VzIFRoaXMgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIHtcXEBsaW5rIEZvcm1Db250cm9sfSwge1xcQGxpbmsgRm9ybUdyb3VwfSwgYW5kXG4gKiB7XFxAbGluayBGb3JtQXJyYXl9LlxuICogXG4gKiBJdCBwcm92aWRlcyBzb21lIG9mIHRoZSBzaGFyZWQgYmVoYXZpb3IgdGhhdCBhbGwgY29udHJvbHMgYW5kIGdyb3VwcyBvZiBjb250cm9scyBoYXZlLCBsaWtlXG4gKiBydW5uaW5nIHZhbGlkYXRvcnMsIGNhbGN1bGF0aW5nIHN0YXR1cywgYW5kIHJlc2V0dGluZyBzdGF0ZS4gSXQgYWxzbyBkZWZpbmVzIHRoZSBwcm9wZXJ0aWVzXG4gKiB0aGF0IGFyZSBzaGFyZWQgYmV0d2VlbiBhbGwgc3ViLWNsYXNzZXMsIGxpa2UgYHZhbHVlYCwgYHZhbGlkYCwgYW5kIGBkaXJ0eWAuIEl0IHNob3VsZG4ndCBiZVxuICogaW5zdGFudGlhdGVkIGRpcmVjdGx5LlxuICogXG4gKiBcXEBzdGFibGVcbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RDb250cm9sIHtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX3ZhbHVlOiBhbnk7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9vbkNvbGxlY3Rpb25DaGFuZ2UgPSAoKSA9PiB7fTtcbnByaXZhdGUgX3ZhbHVlQ2hhbmdlczogRXZlbnRFbWl0dGVyPGFueT47XG5wcml2YXRlIF9zdGF0dXNDaGFuZ2VzOiBFdmVudEVtaXR0ZXI8YW55PjtcbnByaXZhdGUgX3N0YXR1czogc3RyaW5nO1xucHJpdmF0ZSBfZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzfG51bGw7XG5wcml2YXRlIF9wcmlzdGluZTogYm9vbGVhbiA9IHRydWU7XG5wcml2YXRlIF90b3VjaGVkOiBib29sZWFuID0gZmFsc2U7XG5wcml2YXRlIF9wYXJlbnQ6IEZvcm1Hcm91cHxGb3JtQXJyYXk7XG5wcml2YXRlIF9hc3luY1ZhbGlkYXRpb25TdWJzY3JpcHRpb246IGFueTtcbi8qKlxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JcbiAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JcbiAqL1xuY29uc3RydWN0b3IocHVibGljIHZhbGlkYXRvcjogVmFsaWRhdG9yRm4sXG5wdWJsaWMgYXN5bmNWYWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yRm4pIHt9XG4vKipcbiAqIFRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbC5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cbi8qKlxuICogVGhlIHBhcmVudCBjb250cm9sLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHBhcmVudCgpOiBGb3JtR3JvdXB8Rm9ybUFycmF5IHsgcmV0dXJuIHRoaXMuX3BhcmVudDsgfVxuLyoqXG4gKiBUaGUgdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIGNvbnRyb2wuIFRoZXJlIGFyZSBmb3VyIHBvc3NpYmxlXG4gKiB2YWxpZGF0aW9uIHN0YXR1c2VzOlxuICogXG4gKiAqICoqVkFMSUQqKjogIGNvbnRyb2wgaGFzIHBhc3NlZCBhbGwgdmFsaWRhdGlvbiBjaGVja3NcbiAqICogKipJTlZBTElEKio6IGNvbnRyb2wgaGFzIGZhaWxlZCBhdCBsZWFzdCBvbmUgdmFsaWRhdGlvbiBjaGVja1xuICogKiAqKlBFTkRJTkcqKjogY29udHJvbCBpcyBpbiB0aGUgbWlkc3Qgb2YgY29uZHVjdGluZyBhIHZhbGlkYXRpb24gY2hlY2tcbiAqICogKipESVNBQkxFRCoqOiBjb250cm9sIGlzIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzXG4gKiBcbiAqIFRoZXNlIHN0YXR1c2VzIGFyZSBtdXR1YWxseSBleGNsdXNpdmUsIHNvIGEgY29udHJvbCBjYW5ub3QgYmVcbiAqIGJvdGggdmFsaWQgQU5EIGludmFsaWQgb3IgaW52YWxpZCBBTkQgZGlzYWJsZWQuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgc3RhdHVzKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9zdGF0dXM7IH1cbi8qKlxuICogQSBjb250cm9sIGlzIGB2YWxpZGAgd2hlbiBpdHMgYHN0YXR1cyA9PT0gVkFMSURgLlxuICogXG4gKiBJbiBvcmRlciB0byBoYXZlIHRoaXMgc3RhdHVzLCB0aGUgY29udHJvbCBtdXN0IGhhdmUgcGFzc2VkIGFsbCBpdHNcbiAqIHZhbGlkYXRpb24gY2hlY2tzLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHZhbGlkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc3RhdHVzID09PSBWQUxJRDsgfVxuLyoqXG4gKiBBIGNvbnRyb2wgaXMgYGludmFsaWRgIHdoZW4gaXRzIGBzdGF0dXMgPT09IElOVkFMSURgLlxuICogXG4gKiBJbiBvcmRlciB0byBoYXZlIHRoaXMgc3RhdHVzLCB0aGUgY29udHJvbCBtdXN0IGhhdmUgZmFpbGVkXG4gKiBhdCBsZWFzdCBvbmUgb2YgaXRzIHZhbGlkYXRpb24gY2hlY2tzLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGludmFsaWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9zdGF0dXMgPT09IElOVkFMSUQ7IH1cbi8qKlxuICogQSBjb250cm9sIGlzIGBwZW5kaW5nYCB3aGVuIGl0cyBgc3RhdHVzID09PSBQRU5ESU5HYC5cbiAqIFxuICogSW4gb3JkZXIgdG8gaGF2ZSB0aGlzIHN0YXR1cywgdGhlIGNvbnRyb2wgbXVzdCBiZSBpbiB0aGVcbiAqIG1pZGRsZSBvZiBjb25kdWN0aW5nIGEgdmFsaWRhdGlvbiBjaGVjay5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBwZW5kaW5nKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc3RhdHVzID09IFBFTkRJTkc7IH1cbi8qKlxuICogQSBjb250cm9sIGlzIGBkaXNhYmxlZGAgd2hlbiBpdHMgYHN0YXR1cyA9PT0gRElTQUJMRURgLlxuICogXG4gKiBEaXNhYmxlZCBjb250cm9scyBhcmUgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3MgYW5kXG4gKiBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgdGhlaXIgYW5jZXN0b3JcbiAqIGNvbnRyb2xzLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc3RhdHVzID09PSBESVNBQkxFRDsgfVxuLyoqXG4gKiBBIGNvbnRyb2wgaXMgYGVuYWJsZWRgIGFzIGxvbmcgYXMgaXRzIGBzdGF0dXMgIT09IERJU0FCTEVEYC5cbiAqIFxuICogSW4gb3RoZXIgd29yZHMsIGl0IGhhcyBhIHN0YXR1cyBvZiBgVkFMSURgLCBgSU5WQUxJRGAsIG9yXG4gKiBgUEVORElOR2AuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgZW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyAhPT0gRElTQUJMRUQ7IH1cbi8qKlxuICogUmV0dXJucyBhbnkgZXJyb3JzIGdlbmVyYXRlZCBieSBmYWlsaW5nIHZhbGlkYXRpb24uIElmIHRoZXJlXG4gKiBhcmUgbm8gZXJyb3JzLCBpdCB3aWxsIHJldHVybiBudWxsLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGVycm9ycygpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwgeyByZXR1cm4gdGhpcy5fZXJyb3JzOyB9XG4vKipcbiAqIEEgY29udHJvbCBpcyBgcHJpc3RpbmVgIGlmIHRoZSB1c2VyIGhhcyBub3QgeWV0IGNoYW5nZWRcbiAqIHRoZSB2YWx1ZSBpbiB0aGUgVUkuXG4gKiBcbiAqIE5vdGUgdGhhdCBwcm9ncmFtbWF0aWMgY2hhbmdlcyB0byBhIGNvbnRyb2wncyB2YWx1ZSB3aWxsXG4gKiAqbm90KiBtYXJrIGl0IGRpcnR5LlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHByaXN0aW5lKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fcHJpc3RpbmU7IH1cbi8qKlxuICogQSBjb250cm9sIGlzIGBkaXJ0eWAgaWYgdGhlIHVzZXIgaGFzIGNoYW5nZWQgdGhlIHZhbHVlXG4gKiBpbiB0aGUgVUkuXG4gKiBcbiAqIE5vdGUgdGhhdCBwcm9ncmFtbWF0aWMgY2hhbmdlcyB0byBhIGNvbnRyb2wncyB2YWx1ZSB3aWxsXG4gKiAqbm90KiBtYXJrIGl0IGRpcnR5LlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGRpcnR5KCk6IGJvb2xlYW4geyByZXR1cm4gIXRoaXMucHJpc3RpbmU7IH1cbi8qKlxuICogQSBjb250cm9sIGlzIG1hcmtlZCBgdG91Y2hlZGAgb25jZSB0aGUgdXNlciBoYXMgdHJpZ2dlcmVkXG4gKiBhIGBibHVyYCBldmVudCBvbiBpdC5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB0b3VjaGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fdG91Y2hlZDsgfVxuLyoqXG4gKiBBIGNvbnRyb2wgaXMgYHVudG91Y2hlZGAgaWYgdGhlIHVzZXIgaGFzIG5vdCB5ZXQgdHJpZ2dlcmVkXG4gKiBhIGBibHVyYCBldmVudCBvbiBpdC5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB1bnRvdWNoZWQoKTogYm9vbGVhbiB7IHJldHVybiAhdGhpcy5fdG91Y2hlZDsgfVxuLyoqXG4gKiBFbWl0cyBhbiBldmVudCBldmVyeSB0aW1lIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VzLCBpblxuICogdGhlIFVJIG9yIHByb2dyYW1tYXRpY2FsbHkuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdmFsdWVDaGFuZ2VzKCk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB0aGlzLl92YWx1ZUNoYW5nZXM7IH1cbi8qKlxuICogRW1pdHMgYW4gZXZlbnQgZXZlcnkgdGltZSB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIGNvbnRyb2xcbiAqIGlzIHJlLWNhbGN1bGF0ZWQuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgc3RhdHVzQ2hhbmdlcygpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gdGhpcy5fc3RhdHVzQ2hhbmdlczsgfVxuLyoqXG4gKiBTZXRzIHRoZSBzeW5jaHJvbm91cyB2YWxpZGF0b3JzIHRoYXQgYXJlIGFjdGl2ZSBvbiB0aGlzIGNvbnRyb2wuICBDYWxsaW5nXG4gKiB0aGlzIHdpbGwgb3ZlcndyaXRlIGFueSBleGlzdGluZyBzeW5jIHZhbGlkYXRvcnMuXG4gKiBAcGFyYW0gez99IG5ld1ZhbGlkYXRvclxuICogQHJldHVybiB7P31cbiAqL1xuc2V0VmFsaWRhdG9ycyhuZXdWYWxpZGF0b3I6IFZhbGlkYXRvckZufFZhbGlkYXRvckZuW10pOiB2b2lkIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IGNvZXJjZVRvVmFsaWRhdG9yKG5ld1ZhbGlkYXRvcik7XG4gIH1cbi8qKlxuICogU2V0cyB0aGUgYXN5bmMgdmFsaWRhdG9ycyB0aGF0IGFyZSBhY3RpdmUgb24gdGhpcyBjb250cm9sLiBDYWxsaW5nIHRoaXNcbiAqIHdpbGwgb3ZlcndyaXRlIGFueSBleGlzdGluZyBhc3luYyB2YWxpZGF0b3JzLlxuICogQHBhcmFtIHs/fSBuZXdWYWxpZGF0b3JcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldEFzeW5jVmFsaWRhdG9ycyhuZXdWYWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yRm58QXN5bmNWYWxpZGF0b3JGbltdKTogdm9pZCB7XG4gICAgdGhpcy5hc3luY1ZhbGlkYXRvciA9IGNvZXJjZVRvQXN5bmNWYWxpZGF0b3IobmV3VmFsaWRhdG9yKTtcbiAgfVxuLyoqXG4gKiBFbXB0aWVzIG91dCB0aGUgc3luYyB2YWxpZGF0b3IgbGlzdC5cbiAqIEByZXR1cm4gez99XG4gKi9cbmNsZWFyVmFsaWRhdG9ycygpOiB2b2lkIHsgdGhpcy52YWxpZGF0b3IgPSBudWxsOyB9XG4vKipcbiAqIEVtcHRpZXMgb3V0IHRoZSBhc3luYyB2YWxpZGF0b3IgbGlzdC5cbiAqIEByZXR1cm4gez99XG4gKi9cbmNsZWFyQXN5bmNWYWxpZGF0b3JzKCk6IHZvaWQgeyB0aGlzLmFzeW5jVmFsaWRhdG9yID0gbnVsbDsgfVxuLyoqXG4gKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgdG91Y2hlZGAuXG4gKiBcbiAqIFRoaXMgd2lsbCBhbHNvIG1hcmsgYWxsIGRpcmVjdCBhbmNlc3RvcnMgYXMgYHRvdWNoZWRgIHRvIG1haW50YWluXG4gKiB0aGUgbW9kZWwuXG4gKiBAcGFyYW0gez89fSBfXzBcbiAqIEByZXR1cm4gez99XG4gKi9cbm1hcmtBc1RvdWNoZWQoe29ubHlTZWxmfToge29ubHlTZWxmPzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX3RvdWNoZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5tYXJrQXNUb3VjaGVkKHtvbmx5U2VsZn0pO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgdW50b3VjaGVkYC5cbiAqIFxuICogSWYgdGhlIGNvbnRyb2wgaGFzIGFueSBjaGlsZHJlbiwgaXQgd2lsbCBhbHNvIG1hcmsgYWxsIGNoaWxkcmVuIGFzIGB1bnRvdWNoZWRgXG4gKiB0byBtYWludGFpbiB0aGUgbW9kZWwsIGFuZCByZS1jYWxjdWxhdGUgdGhlIGB0b3VjaGVkYCBzdGF0dXMgb2YgYWxsIHBhcmVudFxuICogY29udHJvbHMuXG4gKiBAcGFyYW0gez89fSBfXzBcbiAqIEByZXR1cm4gez99XG4gKi9cbm1hcmtBc1VudG91Y2hlZCh7b25seVNlbGZ9OiB7b25seVNlbGY/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fdG91Y2hlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKFxuICAgICAgICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7IGNvbnRyb2wubWFya0FzVW50b3VjaGVkKHtvbmx5U2VsZjogdHJ1ZX0pOyB9KTtcblxuICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVRvdWNoZWQoe29ubHlTZWxmfSk7XG4gICAgfVxuICB9XG4vKipcbiAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGBkaXJ0eWAuXG4gKiBcbiAqIFRoaXMgd2lsbCBhbHNvIG1hcmsgYWxsIGRpcmVjdCBhbmNlc3RvcnMgYXMgYGRpcnR5YCB0byBtYWludGFpblxuICogdGhlIG1vZGVsLlxuICogQHBhcmFtIHs/PX0gX18wXG4gKiBAcmV0dXJuIHs/fVxuICovXG5tYXJrQXNEaXJ0eSh7b25seVNlbGZ9OiB7b25seVNlbGY/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fcHJpc3RpbmUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICB0aGlzLl9wYXJlbnQubWFya0FzRGlydHkoe29ubHlTZWxmfSk7XG4gICAgfVxuICB9XG4vKipcbiAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGBwcmlzdGluZWAuXG4gKiBcbiAqIElmIHRoZSBjb250cm9sIGhhcyBhbnkgY2hpbGRyZW4sIGl0IHdpbGwgYWxzbyBtYXJrIGFsbCBjaGlsZHJlbiBhcyBgcHJpc3RpbmVgXG4gKiB0byBtYWludGFpbiB0aGUgbW9kZWwsIGFuZCByZS1jYWxjdWxhdGUgdGhlIGBwcmlzdGluZWAgc3RhdHVzIG9mIGFsbCBwYXJlbnRcbiAqIGNvbnRyb2xzLlxuICogQHBhcmFtIHs/PX0gX18wXG4gKiBAcmV0dXJuIHs/fVxuICovXG5tYXJrQXNQcmlzdGluZSh7b25seVNlbGZ9OiB7b25seVNlbGY/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fcHJpc3RpbmUgPSB0cnVlO1xuXG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IHsgY29udHJvbC5tYXJrQXNQcmlzdGluZSh7b25seVNlbGY6IHRydWV9KTsgfSk7XG5cbiAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVQcmlzdGluZSh7b25seVNlbGZ9KTtcbiAgICB9XG4gIH1cbi8qKlxuICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYHBlbmRpbmdgLlxuICogQHBhcmFtIHs/PX0gX18wXG4gKiBAcmV0dXJuIHs/fVxuICovXG5tYXJrQXNQZW5kaW5nKHtvbmx5U2VsZn06IHtvbmx5U2VsZj86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9zdGF0dXMgPSBQRU5ESU5HO1xuXG4gICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5tYXJrQXNQZW5kaW5nKHtvbmx5U2VsZn0pO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBEaXNhYmxlcyB0aGUgY29udHJvbC4gVGhpcyBtZWFucyB0aGUgY29udHJvbCB3aWxsIGJlIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzIGFuZFxuICogZXhjbHVkZWQgZnJvbSB0aGUgYWdncmVnYXRlIHZhbHVlIG9mIGFueSBwYXJlbnQuIEl0cyBzdGF0dXMgaXMgYERJU0FCTEVEYC5cbiAqIFxuICogSWYgdGhlIGNvbnRyb2wgaGFzIGNoaWxkcmVuLCBhbGwgY2hpbGRyZW4gd2lsbCBiZSBkaXNhYmxlZCB0byBtYWludGFpbiB0aGUgbW9kZWwuXG4gKiBAcGFyYW0gez89fSBfXzBcbiAqIEByZXR1cm4gez99XG4gKi9cbmRpc2FibGUoe29ubHlTZWxmLCBlbWl0RXZlbnR9OiB7b25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fc3RhdHVzID0gRElTQUJMRUQ7XG4gICAgdGhpcy5fZXJyb3JzID0gbnVsbDtcbiAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4geyBjb250cm9sLmRpc2FibGUoe29ubHlTZWxmOiB0cnVlfSk7IH0pO1xuICAgIHRoaXMuX3VwZGF0ZVZhbHVlKCk7XG5cbiAgICBpZiAoZW1pdEV2ZW50ICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VzLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgdGhpcy5fc3RhdHVzQ2hhbmdlcy5lbWl0KHRoaXMuX3N0YXR1cyk7XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlQW5jZXN0b3JzKG9ubHlTZWxmKTtcbiAgICB0aGlzLl9vbkRpc2FibGVkQ2hhbmdlLmZvckVhY2goKGNoYW5nZUZuKSA9PiBjaGFuZ2VGbih0cnVlKSk7XG4gIH1cbi8qKlxuICogRW5hYmxlcyB0aGUgY29udHJvbC4gVGhpcyBtZWFucyB0aGUgY29udHJvbCB3aWxsIGJlIGluY2x1ZGVkIGluIHZhbGlkYXRpb24gY2hlY2tzIGFuZFxuICogdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiBpdHMgcGFyZW50LiBJdHMgc3RhdHVzIGlzIHJlLWNhbGN1bGF0ZWQgYmFzZWQgb24gaXRzIHZhbHVlIGFuZFxuICogaXRzIHZhbGlkYXRvcnMuXG4gKiBcbiAqIElmIHRoZSBjb250cm9sIGhhcyBjaGlsZHJlbiwgYWxsIGNoaWxkcmVuIHdpbGwgYmUgZW5hYmxlZC5cbiAqIEBwYXJhbSB7Pz19IF9fMFxuICogQHJldHVybiB7P31cbiAqL1xuZW5hYmxlKHtvbmx5U2VsZiwgZW1pdEV2ZW50fToge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXR1cyA9IFZBTElEO1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7IGNvbnRyb2wuZW5hYmxlKHtvbmx5U2VsZjogdHJ1ZX0pOyB9KTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnR9KTtcblxuICAgIHRoaXMuX3VwZGF0ZUFuY2VzdG9ycyhvbmx5U2VsZik7XG4gICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZS5mb3JFYWNoKChjaGFuZ2VGbikgPT4gY2hhbmdlRm4oZmFsc2UpKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IG9ubHlTZWxmXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF91cGRhdGVBbmNlc3RvcnMob25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgdGhpcy5fcGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlUHJpc3RpbmUoKTtcbiAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IHBhcmVudFxuICogQHJldHVybiB7P31cbiAqL1xuc2V0UGFyZW50KHBhcmVudDogRm9ybUdyb3VwfEZvcm1BcnJheSk6IHZvaWQgeyB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7IH1cbi8qKlxuICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wuIEFic3RyYWN0IG1ldGhvZCAoaW1wbGVtZW50ZWQgaW4gc3ViLWNsYXNzZXMpLlxuICogQGFic3RyYWN0XG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcGFyYW0gez89fSBvcHRpb25zXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXRWYWx1ZSh2YWx1ZTogYW55LCBvcHRpb25zPzogT2JqZWN0KSB7fVxuLyoqXG4gKiBQYXRjaGVzIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbC4gQWJzdHJhY3QgbWV0aG9kIChpbXBsZW1lbnRlZCBpbiBzdWItY2xhc3NlcykuXG4gKiBAYWJzdHJhY3RcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAqIEByZXR1cm4gez99XG4gKi9cbnBhdGNoVmFsdWUodmFsdWU6IGFueSwgb3B0aW9ucz86IE9iamVjdCkge31cbi8qKlxuICogUmVzZXRzIHRoZSBjb250cm9sLiBBYnN0cmFjdCBtZXRob2QgKGltcGxlbWVudGVkIGluIHN1Yi1jbGFzc2VzKS5cbiAqIEBhYnN0cmFjdFxuICogQHBhcmFtIHs/PX0gdmFsdWVcbiAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlc2V0KHZhbHVlPzogYW55LCBvcHRpb25zPzogT2JqZWN0KSB7fVxuLyoqXG4gKiBSZS1jYWxjdWxhdGVzIHRoZSB2YWx1ZSBhbmQgdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIGNvbnRyb2wuXG4gKiBcbiAqIEJ5IGRlZmF1bHQsIGl0IHdpbGwgYWxzbyB1cGRhdGUgdGhlIHZhbHVlIGFuZCB2YWxpZGl0eSBvZiBpdHMgYW5jZXN0b3JzLlxuICogQHBhcmFtIHs/PX0gX18wXG4gKiBAcmV0dXJuIHs/fVxuICovXG51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZiwgZW1pdEV2ZW50fToge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6XG4gICAgICB2b2lkIHtcbiAgICB0aGlzLl9zZXRJbml0aWFsU3RhdHVzKCk7XG4gICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcblxuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMuX2NhbmNlbEV4aXN0aW5nU3Vic2NyaXB0aW9uKCk7XG4gICAgICB0aGlzLl9lcnJvcnMgPSB0aGlzLl9ydW5WYWxpZGF0b3IoKTtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IHRoaXMuX2NhbGN1bGF0ZVN0YXR1cygpO1xuXG4gICAgICBpZiAodGhpcy5fc3RhdHVzID09PSBWQUxJRCB8fCB0aGlzLl9zdGF0dXMgPT09IFBFTkRJTkcpIHtcbiAgICAgICAgdGhpcy5fcnVuQXN5bmNWYWxpZGF0b3IoZW1pdEV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW1pdEV2ZW50ICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VzLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgdGhpcy5fc3RhdHVzQ2hhbmdlcy5lbWl0KHRoaXMuX3N0YXR1cyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgIHRoaXMuX3BhcmVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZiwgZW1pdEV2ZW50fSk7XG4gICAgfVxuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez89fSBfXzBcbiAqIEByZXR1cm4gez99XG4gKi9cbl91cGRhdGVUcmVlVmFsaWRpdHkoe2VtaXRFdmVudH06IHtlbWl0RXZlbnQ/OiBib29sZWFufSA9IHtlbWl0RXZlbnQ6IHRydWV9KSB7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjdHJsOiBBYnN0cmFjdENvbnRyb2wpID0+IGN0cmwuX3VwZGF0ZVRyZWVWYWxpZGl0eSh7ZW1pdEV2ZW50fSkpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudH0pO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX3NldEluaXRpYWxTdGF0dXMoKSB7IHRoaXMuX3N0YXR1cyA9IHRoaXMuX2FsbENvbnRyb2xzRGlzYWJsZWQoKSA/IERJU0FCTEVEIDogVkFMSUQ7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfcnVuVmFsaWRhdG9yKCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yID8gdGhpcy52YWxpZGF0b3IodGhpcykgOiBudWxsO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZW1pdEV2ZW50XG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9ydW5Bc3luY1ZhbGlkYXRvcihlbWl0RXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hc3luY1ZhbGlkYXRvcikge1xuICAgICAgdGhpcy5fc3RhdHVzID0gUEVORElORztcbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gb2JzID0gdG9PYnNlcnZhYmxlKHRoaXMuYXN5bmNWYWxpZGF0b3IodGhpcykpO1xuICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uID1cbiAgICAgICAgICBvYnMuc3Vic2NyaWJlKChlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsKSA9PiB0aGlzLnNldEVycm9ycyhlcnJvcnMsIHtlbWl0RXZlbnR9KSk7XG4gICAgfVxuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2NhbmNlbEV4aXN0aW5nU3Vic2NyaXB0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hc3luY1ZhbGlkYXRpb25TdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBTZXRzIGVycm9ycyBvbiBhIGZvcm0gY29udHJvbC5cbiAqIFxuICogVGhpcyBpcyB1c2VkIHdoZW4gdmFsaWRhdGlvbnMgYXJlIHJ1biBtYW51YWxseSBieSB0aGUgdXNlciwgcmF0aGVyIHRoYW4gYXV0b21hdGljYWxseS5cbiAqIFxuICogQ2FsbGluZyBgc2V0RXJyb3JzYCB3aWxsIGFsc28gdXBkYXRlIHRoZSB2YWxpZGl0eSBvZiB0aGUgcGFyZW50IGNvbnRyb2wuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIGBgYFxuICogY29uc3QgbG9naW4gPSBuZXcgRm9ybUNvbnRyb2woXCJzb21lTG9naW5cIik7XG4gKiBsb2dpbi5zZXRFcnJvcnMoe1xuICogICBcIm5vdFVuaXF1ZVwiOiB0cnVlXG4gKiB9KTtcbiAqIFxuICogZXhwZWN0KGxvZ2luLnZhbGlkKS50b0VxdWFsKGZhbHNlKTtcbiAqIGV4cGVjdChsb2dpbi5lcnJvcnMpLnRvRXF1YWwoe1wibm90VW5pcXVlXCI6IHRydWV9KTtcbiAqIFxuICogbG9naW4uc2V0VmFsdWUoXCJzb21lT3RoZXJMb2dpblwiKTtcbiAqIFxuICogZXhwZWN0KGxvZ2luLnZhbGlkKS50b0VxdWFsKHRydWUpO1xuICogYGBgXG4gKiBAcGFyYW0gez99IGVycm9yc1xuICogQHBhcmFtIHs/PX0gX18xXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXRFcnJvcnMoZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwsIHtlbWl0RXZlbnR9OiB7ZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycyA9IGVycm9ycztcbiAgICB0aGlzLl91cGRhdGVDb250cm9sc0Vycm9ycyhlbWl0RXZlbnQgIT09IGZhbHNlKTtcbiAgfVxuLyoqXG4gKiBSZXRyaWV2ZXMgYSBjaGlsZCBjb250cm9sIGdpdmVuIHRoZSBjb250cm9sJ3MgbmFtZSBvciBwYXRoLlxuICogXG4gKiBQYXRocyBjYW4gYmUgcGFzc2VkIGluIGFzIGFuIGFycmF5IG9yIGEgc3RyaW5nIGRlbGltaXRlZCBieSBhIGRvdC5cbiAqIFxuICogVG8gZ2V0IGEgY29udHJvbCBuZXN0ZWQgd2l0aGluIGEgYHBlcnNvbmAgc3ViLWdyb3VwOlxuICogXG4gKiAqIGB0aGlzLmZvcm0uZ2V0KCdwZXJzb24ubmFtZScpO2BcbiAqIFxuICogLU9SLVxuICogXG4gKiAqIGB0aGlzLmZvcm0uZ2V0KFsncGVyc29uJywgJ25hbWUnXSk7YFxuICogQHBhcmFtIHs/fSBwYXRoXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQocGF0aDogQXJyYXk8c3RyaW5nfG51bWJlcj58c3RyaW5nKTogQWJzdHJhY3RDb250cm9sIHsgcmV0dXJuIF9maW5kKHRoaXMsIHBhdGgsICcuJyk7IH1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBjb250cm9sIHdpdGggdGhlIGdpdmVuIHBhdGggaGFzIHRoZSBlcnJvciBzcGVjaWZpZWQuIE90aGVyd2lzZVxuICogcmV0dXJucyBudWxsIG9yIHVuZGVmaW5lZC5cbiAqIFxuICogSWYgbm8gcGF0aCBpcyBnaXZlbiwgaXQgY2hlY2tzIGZvciB0aGUgZXJyb3Igb24gdGhlIHByZXNlbnQgY29udHJvbC5cbiAqIEBwYXJhbSB7P30gZXJyb3JDb2RlXG4gKiBAcGFyYW0gez89fSBwYXRoXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXRFcnJvcihlcnJvckNvZGU6IHN0cmluZywgcGF0aDogc3RyaW5nW10gPSBudWxsKTogYW55IHtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGNvbnRyb2wgPSBwYXRoID8gdGhpcy5nZXQocGF0aCkgOiB0aGlzO1xuICAgIHJldHVybiBjb250cm9sICYmIGNvbnRyb2wuX2Vycm9ycyA/IGNvbnRyb2wuX2Vycm9yc1tlcnJvckNvZGVdIDogbnVsbDtcbiAgfVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbnRyb2wgd2l0aCB0aGUgZ2l2ZW4gcGF0aCBoYXMgdGhlIGVycm9yIHNwZWNpZmllZC4gT3RoZXJ3aXNlXG4gKiByZXR1cm5zIGZhbHNlLlxuICogXG4gKiBJZiBubyBwYXRoIGlzIGdpdmVuLCBpdCBjaGVja3MgZm9yIHRoZSBlcnJvciBvbiB0aGUgcHJlc2VudCBjb250cm9sLlxuICogQHBhcmFtIHs/fSBlcnJvckNvZGVcbiAqIEBwYXJhbSB7Pz19IHBhdGhcbiAqIEByZXR1cm4gez99XG4gKi9cbmhhc0Vycm9yKGVycm9yQ29kZTogc3RyaW5nLCBwYXRoOiBzdHJpbmdbXSA9IG51bGwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmdldEVycm9yKGVycm9yQ29kZSwgcGF0aCk7XG4gIH1cbi8qKlxuICogUmV0cmlldmVzIHRoZSB0b3AtbGV2ZWwgYW5jZXN0b3Igb2YgdGhpcyBjb250cm9sLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHJvb3QoKTogQWJzdHJhY3RDb250cm9sIHtcbiAgICBsZXQgLyoqIEB0eXBlIHs/fSAqLyB4OiBBYnN0cmFjdENvbnRyb2wgPSB0aGlzO1xuXG4gICAgd2hpbGUgKHguX3BhcmVudCkge1xuICAgICAgeCA9IHguX3BhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4geDtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBlbWl0RXZlbnRcbiAqIEByZXR1cm4gez99XG4gKi9cbl91cGRhdGVDb250cm9sc0Vycm9ycyhlbWl0RXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9zdGF0dXMgPSB0aGlzLl9jYWxjdWxhdGVTdGF0dXMoKTtcblxuICAgIGlmIChlbWl0RXZlbnQpIHtcbiAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMuZW1pdCh0aGlzLl9zdGF0dXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlQ29udHJvbHNFcnJvcnMoZW1pdEV2ZW50KTtcbiAgICB9XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl9pbml0T2JzZXJ2YWJsZXMoKSB7XG4gICAgdGhpcy5fdmFsdWVDaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfY2FsY3VsYXRlU3RhdHVzKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX2FsbENvbnRyb2xzRGlzYWJsZWQoKSkgcmV0dXJuIERJU0FCTEVEO1xuICAgIGlmICh0aGlzLl9lcnJvcnMpIHJldHVybiBJTlZBTElEO1xuICAgIGlmICh0aGlzLl9hbnlDb250cm9sc0hhdmVTdGF0dXMoUEVORElORykpIHJldHVybiBQRU5ESU5HO1xuICAgIGlmICh0aGlzLl9hbnlDb250cm9sc0hhdmVTdGF0dXMoSU5WQUxJRCkpIHJldHVybiBJTlZBTElEO1xuICAgIHJldHVybiBWQUxJRDtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQGFic3RyYWN0XG4gKiBAcmV0dXJuIHs/fVxuICovXG5fdXBkYXRlVmFsdWUoKSB7fVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQGFic3RyYWN0XG4gKiBAcGFyYW0gez99IGNiXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fZm9yRWFjaENoaWxkKGNiOiBGdW5jdGlvbikge31cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBhYnN0cmFjdFxuICogQHBhcmFtIHs/fSBjb25kaXRpb25cbiAqIEByZXR1cm4gez99XG4gKi9cbl9hbnlDb250cm9scyhjb25kaXRpb246IEZ1bmN0aW9uKSB7fVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQGFic3RyYWN0XG4gKiBAcmV0dXJuIHs/fVxuICovXG5fYWxsQ29udHJvbHNEaXNhYmxlZCgpIHt9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IHN0YXR1c1xuICogQHJldHVybiB7P31cbiAqL1xuX2FueUNvbnRyb2xzSGF2ZVN0YXR1cyhzdGF0dXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbnlDb250cm9scygoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiBjb250cm9sLnN0YXR1cyA9PT0gc3RhdHVzKTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX2FueUNvbnRyb2xzRGlydHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FueUNvbnRyb2xzKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IGNvbnRyb2wuZGlydHkpO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fYW55Q29udHJvbHNUb3VjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbnlDb250cm9scygoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiBjb250cm9sLnRvdWNoZWQpO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez89fSBfXzBcbiAqIEByZXR1cm4gez99XG4gKi9cbl91cGRhdGVQcmlzdGluZSh7b25seVNlbGZ9OiB7b25seVNlbGY/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fcHJpc3RpbmUgPSAhdGhpcy5fYW55Q29udHJvbHNEaXJ0eSgpO1xuXG4gICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlUHJpc3RpbmUoe29ubHlTZWxmfSk7XG4gICAgfVxuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez89fSBfXzBcbiAqIEByZXR1cm4gez99XG4gKi9cbl91cGRhdGVUb3VjaGVkKHtvbmx5U2VsZn06IHtvbmx5U2VsZj86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLl90b3VjaGVkID0gdGhpcy5fYW55Q29udHJvbHNUb3VjaGVkKCk7XG5cbiAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVUb3VjaGVkKHtvbmx5U2VsZn0pO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fb25EaXNhYmxlZENoYW5nZTogRnVuY3Rpb25bXSA9IFtdO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBmb3JtU3RhdGVcbiAqIEByZXR1cm4gez99XG4gKi9cbl9pc0JveGVkVmFsdWUoZm9ybVN0YXRlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIGZvcm1TdGF0ZSA9PT0gJ29iamVjdCcgJiYgZm9ybVN0YXRlICE9PSBudWxsICYmXG4gICAgICAgIE9iamVjdC5rZXlzKGZvcm1TdGF0ZSkubGVuZ3RoID09PSAyICYmICd2YWx1ZScgaW4gZm9ybVN0YXRlICYmICdkaXNhYmxlZCcgaW4gZm9ybVN0YXRlO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlID0gZm47IH1cbn1cblxuZnVuY3Rpb24gQWJzdHJhY3RDb250cm9sX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fdmFsdWU7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fb25Db2xsZWN0aW9uQ2hhbmdlO1xuLyoqIEB0eXBlIHs/fSAqL1xuQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fdmFsdWVDaGFuZ2VzO1xuLyoqIEB0eXBlIHs/fSAqL1xuQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fc3RhdHVzQ2hhbmdlcztcbi8qKiBAdHlwZSB7P30gKi9cbkFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3N0YXR1cztcbi8qKiBAdHlwZSB7P30gKi9cbkFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2Vycm9ycztcbi8qKiBAdHlwZSB7P30gKi9cbkFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3ByaXN0aW5lO1xuLyoqIEB0eXBlIHs/fSAqL1xuQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fdG91Y2hlZDtcbi8qKiBAdHlwZSB7P30gKi9cbkFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3BhcmVudDtcbi8qKiBAdHlwZSB7P30gKi9cbkFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbjtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5BYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9vbkRpc2FibGVkQ2hhbmdlO1xuLyoqIEB0eXBlIHs/fSAqL1xuQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS52YWxpZGF0b3I7XG4vKiogQHR5cGUgez99ICovXG5BYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmFzeW5jVmFsaWRhdG9yO1xufVxuXG4vKipcbiAqIFxcQHdoYXRJdERvZXMgVHJhY2tzIHRoZSB2YWx1ZSBhbmQgdmFsaWRhdGlvbiBzdGF0dXMgb2YgYW4gaW5kaXZpZHVhbCBmb3JtIGNvbnRyb2wuXG4gKiBcbiAqIEl0IGlzIG9uZSBvZiB0aGUgdGhyZWUgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2tzIG9mIEFuZ3VsYXIgZm9ybXMsIGFsb25nIHdpdGhcbiAqIHtcXEBsaW5rIEZvcm1Hcm91cH0gYW5kIHtcXEBsaW5rIEZvcm1BcnJheX0uXG4gKiBcbiAqIFxcQGhvd1RvVXNlIFxuICogXG4gKiBXaGVuIGluc3RhbnRpYXRpbmcgYSB7XFxAbGluayBGb3JtQ29udHJvbH0sIHlvdSBjYW4gcGFzcyBpbiBhbiBpbml0aWFsIHZhbHVlIGFzIHRoZVxuICogZmlyc3QgYXJndW1lbnQuIEV4YW1wbGU6XG4gKiBcbiAqIGBgYHRzXG4gKiBjb25zdCBjdHJsID0gbmV3IEZvcm1Db250cm9sKCdzb21lIHZhbHVlJyk7XG4gKiBjb25zb2xlLmxvZyhjdHJsLnZhbHVlKTsgICAgIC8vICdzb21lIHZhbHVlJ1xuICogYGBgXG4gKiBcbiAqIFlvdSBjYW4gYWxzbyBpbml0aWFsaXplIHRoZSBjb250cm9sIHdpdGggYSBmb3JtIHN0YXRlIG9iamVjdCBvbiBpbnN0YW50aWF0aW9uLFxuICogd2hpY2ggaW5jbHVkZXMgYm90aCB0aGUgdmFsdWUgYW5kIHdoZXRoZXIgb3Igbm90IHRoZSBjb250cm9sIGlzIGRpc2FibGVkLlxuICogWW91IGNhbid0IHVzZSB0aGUgdmFsdWUga2V5IHdpdGhvdXQgdGhlIGRpc2FibGVkIGtleTsgYm90aCBhcmUgcmVxdWlyZWRcbiAqIHRvIHVzZSB0aGlzIHdheSBvZiBpbml0aWFsaXphdGlvbi5cbiAqIFxuICogYGBgdHNcbiAqIGNvbnN0IGN0cmwgPSBuZXcgRm9ybUNvbnRyb2woe3ZhbHVlOiAnbi9hJywgZGlzYWJsZWQ6IHRydWV9KTtcbiAqIGNvbnNvbGUubG9nKGN0cmwudmFsdWUpOyAgICAgLy8gJ24vYSdcbiAqIGNvbnNvbGUubG9nKGN0cmwuc3RhdHVzKTsgICAvLyAnRElTQUJMRUQnXG4gKiBgYGBcbiAqIFxuICogVG8gaW5jbHVkZSBhIHN5bmMgdmFsaWRhdG9yIChvciBhbiBhcnJheSBvZiBzeW5jIHZhbGlkYXRvcnMpIHdpdGggdGhlIGNvbnRyb2wsXG4gKiBwYXNzIGl0IGluIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIEFzeW5jIHZhbGlkYXRvcnMgYXJlIGFsc28gc3VwcG9ydGVkLCBidXRcbiAqIGhhdmUgdG8gYmUgcGFzc2VkIGluIHNlcGFyYXRlbHkgYXMgdGhlIHRoaXJkIGFyZy5cbiAqIFxuICogYGBgdHNcbiAqIGNvbnN0IGN0cmwgPSBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICogY29uc29sZS5sb2coY3RybC52YWx1ZSk7ICAgICAvLyAnJ1xuICogY29uc29sZS5sb2coY3RybC5zdGF0dXMpOyAgIC8vICdJTlZBTElEJ1xuICogYGBgXG4gKiBcbiAqIFNlZSBpdHMgc3VwZXJjbGFzcywge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfSwgZm9yIG1vcmUgcHJvcGVydGllcyBhbmQgbWV0aG9kcy5cbiAqIFxuICogKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sIHtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX29uQ2hhbmdlOiBGdW5jdGlvbltdID0gW107XG4vKipcbiAqIEBwYXJhbSB7Pz19IGZvcm1TdGF0ZVxuICogQHBhcmFtIHs/PX0gdmFsaWRhdG9yXG4gKiBAcGFyYW0gez89fSBhc3luY1ZhbGlkYXRvclxuICovXG5jb25zdHJ1Y3RvcihcbiAgICAgIGZvcm1TdGF0ZTogYW55ID0gbnVsbCwgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbnxWYWxpZGF0b3JGbltdID0gbnVsbCxcbiAgICAgIGFzeW5jVmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZufEFzeW5jVmFsaWRhdG9yRm5bXSA9IG51bGwpIHtcbiAgICBzdXBlcihjb2VyY2VUb1ZhbGlkYXRvcih2YWxpZGF0b3IpLCBjb2VyY2VUb0FzeW5jVmFsaWRhdG9yKGFzeW5jVmFsaWRhdG9yKSk7XG4gICAgdGhpcy5fYXBwbHlGb3JtU3RhdGUoZm9ybVN0YXRlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gICAgdGhpcy5faW5pdE9ic2VydmFibGVzKCk7XG4gIH1cbi8qKlxuICogU2V0IHRoZSB2YWx1ZSBvZiB0aGUgZm9ybSBjb250cm9sIHRvIGB2YWx1ZWAuXG4gKiBcbiAqIElmIGBvbmx5U2VsZmAgaXMgYHRydWVgLCB0aGlzIGNoYW5nZSB3aWxsIG9ubHkgYWZmZWN0IHRoZSB2YWxpZGF0aW9uIG9mIHRoaXMgYEZvcm1Db250cm9sYFxuICogYW5kIG5vdCBpdHMgcGFyZW50IGNvbXBvbmVudC4gVGhpcyBkZWZhdWx0cyB0byBmYWxzZS5cbiAqIFxuICogSWYgYGVtaXRFdmVudGAgaXMgYHRydWVgLCB0aGlzXG4gKiBjaGFuZ2Ugd2lsbCBjYXVzZSBhIGB2YWx1ZUNoYW5nZXNgIGV2ZW50IG9uIHRoZSBgRm9ybUNvbnRyb2xgIHRvIGJlIGVtaXR0ZWQuIFRoaXMgZGVmYXVsdHNcbiAqIHRvIHRydWUgKGFzIGl0IGZhbGxzIHRocm91Z2ggdG8gYHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHlgKS5cbiAqIFxuICogSWYgYGVtaXRNb2RlbFRvVmlld0NoYW5nZWAgaXMgYHRydWVgLCB0aGUgdmlldyB3aWxsIGJlIG5vdGlmaWVkIGFib3V0IHRoZSBuZXcgdmFsdWVcbiAqIHZpYSBhbiBgb25DaGFuZ2VgIGV2ZW50LiBUaGlzIGlzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIGlmIGBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2VgIGlzIG5vdFxuICogc3BlY2lmaWVkLlxuICogXG4gKiBJZiBgZW1pdFZpZXdUb01vZGVsQ2hhbmdlYCBpcyBgdHJ1ZWAsIGFuIG5nTW9kZWxDaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCB0byB1cGRhdGUgdGhlXG4gKiBtb2RlbC4gIFRoaXMgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3IgaWYgYGVtaXRWaWV3VG9Nb2RlbENoYW5nZWAgaXMgbm90IHNwZWNpZmllZC5cbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEBwYXJhbSB7Pz19IF9fMVxuICogQHJldHVybiB7P31cbiAqL1xuc2V0VmFsdWUodmFsdWU6IGFueSwge29ubHlTZWxmLCBlbWl0RXZlbnQsIGVtaXRNb2RlbFRvVmlld0NoYW5nZSwgZW1pdFZpZXdUb01vZGVsQ2hhbmdlfToge1xuICAgIG9ubHlTZWxmPzogYm9vbGVhbixcbiAgICBlbWl0RXZlbnQ/OiBib29sZWFuLFxuICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW4sXG4gICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlPzogYm9vbGVhblxuICB9ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9vbkNoYW5nZS5sZW5ndGggJiYgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5fb25DaGFuZ2UuZm9yRWFjaCgoY2hhbmdlRm4pID0+IGNoYW5nZUZuKHRoaXMuX3ZhbHVlLCBlbWl0Vmlld1RvTW9kZWxDaGFuZ2UgIT09IGZhbHNlKSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGYsIGVtaXRFdmVudH0pO1xuICB9XG4vKipcbiAqIFBhdGNoZXMgdGhlIHZhbHVlIG9mIGEgY29udHJvbC5cbiAqIFxuICogVGhpcyBmdW5jdGlvbiBpcyBmdW5jdGlvbmFsbHkgdGhlIHNhbWUgYXMge1xcQGxpbmsgRm9ybUNvbnRyb2wuc2V0VmFsdWV9IGF0IHRoaXMgbGV2ZWwuXG4gKiBJdCBleGlzdHMgZm9yIHN5bW1ldHJ5IHdpdGgge1xcQGxpbmsgRm9ybUdyb3VwLnBhdGNoVmFsdWV9IG9uIGBGb3JtR3JvdXBzYCBhbmQgYEZvcm1BcnJheXNgLFxuICogd2hlcmUgaXQgZG9lcyBiZWhhdmUgZGlmZmVyZW50bHkuXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcGFyYW0gez89fSBvcHRpb25zXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wYXRjaFZhbHVlKHZhbHVlOiBhbnksIG9wdGlvbnM6IHtcbiAgICBvbmx5U2VsZj86IGJvb2xlYW4sXG4gICAgZW1pdEV2ZW50PzogYm9vbGVhbixcbiAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U/OiBib29sZWFuLFxuICAgIGVtaXRWaWV3VG9Nb2RlbENoYW5nZT86IGJvb2xlYW5cbiAgfSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cbi8qKlxuICogUmVzZXRzIHRoZSBmb3JtIGNvbnRyb2wuIFRoaXMgbWVhbnMgYnkgZGVmYXVsdDpcbiAqIFxuICogKiBpdCBpcyBtYXJrZWQgYXMgYHByaXN0aW5lYFxuICogKiBpdCBpcyBtYXJrZWQgYXMgYHVudG91Y2hlZGBcbiAqICogdmFsdWUgaXMgc2V0IHRvIG51bGxcbiAqIFxuICogWW91IGNhbiBhbHNvIHJlc2V0IHRvIGEgc3BlY2lmaWMgZm9ybSBzdGF0ZSBieSBwYXNzaW5nIHRocm91Z2ggYSBzdGFuZGFsb25lXG4gKiB2YWx1ZSBvciBhIGZvcm0gc3RhdGUgb2JqZWN0IHRoYXQgY29udGFpbnMgYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkIHN0YXRlXG4gKiAodGhlc2UgYXJlIHRoZSBvbmx5IHR3byBwcm9wZXJ0aWVzIHRoYXQgY2Fubm90IGJlIGNhbGN1bGF0ZWQpLlxuICogXG4gKiBFeDpcbiAqIFxuICogYGBgdHNcbiAqIHRoaXMuY29udHJvbC5yZXNldCgnTmFuY3knKTtcbiAqIFxuICogY29uc29sZS5sb2codGhpcy5jb250cm9sLnZhbHVlKTsgIC8vICdOYW5jeSdcbiAqIGBgYFxuICogXG4gKiBPUlxuICogXG4gKiBgYGBcbiAqIHRoaXMuY29udHJvbC5yZXNldCh7dmFsdWU6ICdOYW5jeScsIGRpc2FibGVkOiB0cnVlfSk7XG4gKiBcbiAqIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbC52YWx1ZSk7ICAvLyAnTmFuY3knXG4gKiBjb25zb2xlLmxvZyh0aGlzLmNvbnRyb2wuc3RhdHVzKTsgIC8vICdESVNBQkxFRCdcbiAqIGBgYFxuICogQHBhcmFtIHs/PX0gZm9ybVN0YXRlXG4gKiBAcGFyYW0gez89fSBfXzFcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlc2V0KGZvcm1TdGF0ZTogYW55ID0gbnVsbCwge29ubHlTZWxmLCBlbWl0RXZlbnR9OiB7b25seVNlbGY/OiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXRFdmVudD86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9hcHBseUZvcm1TdGF0ZShmb3JtU3RhdGUpO1xuICAgIHRoaXMubWFya0FzUHJpc3RpbmUoe29ubHlTZWxmfSk7XG4gICAgdGhpcy5tYXJrQXNVbnRvdWNoZWQoe29ubHlTZWxmfSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLl92YWx1ZSwge29ubHlTZWxmLCBlbWl0RXZlbnR9KTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX3VwZGF0ZVZhbHVlKCkge31cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gY29uZGl0aW9uXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fYW55Q29udHJvbHMoY29uZGl0aW9uOiBGdW5jdGlvbik6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl9hbGxDb250cm9sc0Rpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5kaXNhYmxlZDsgfVxuLyoqXG4gKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZvciBjaGFuZ2UgZXZlbnRzLlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHsgdGhpcy5fb25DaGFuZ2UucHVzaChmbik7IH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl9jbGVhckNoYW5nZUZucygpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IFtdO1xuICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UgPSBbXTtcbiAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UgPSAoKSA9PiB7fTtcbiAgfVxuLyoqXG4gKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZvciBkaXNhYmxlZCBldmVudHMuXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uRGlzYWJsZWRDaGFuZ2UoZm46IChpc0Rpc2FibGVkOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZS5wdXNoKGZuKTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBjYlxuICogQHJldHVybiB7P31cbiAqL1xuX2ZvckVhY2hDaGlsZChjYjogRnVuY3Rpb24pOiB2b2lkIHt9XG4vKipcbiAqIEBwYXJhbSB7P30gZm9ybVN0YXRlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9hcHBseUZvcm1TdGF0ZShmb3JtU3RhdGU6IGFueSkge1xuICAgIGlmICh0aGlzLl9pc0JveGVkVmFsdWUoZm9ybVN0YXRlKSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBmb3JtU3RhdGUudmFsdWU7XG4gICAgICBmb3JtU3RhdGUuZGlzYWJsZWQgPyB0aGlzLmRpc2FibGUoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlfSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmFibGUoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybVN0YXRlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBGb3JtQ29udHJvbF90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbkZvcm1Db250cm9sLnByb3RvdHlwZS5fb25DaGFuZ2U7XG59XG5cbi8qKlxuICogXFxAd2hhdEl0RG9lcyBUcmFja3MgdGhlIHZhbHVlIGFuZCB2YWxpZGl0eSBzdGF0ZSBvZiBhIGdyb3VwIG9mIHtcXEBsaW5rIEZvcm1Db250cm9sfVxuICogaW5zdGFuY2VzLlxuICogXG4gKiBBIGBGb3JtR3JvdXBgIGFnZ3JlZ2F0ZXMgdGhlIHZhbHVlcyBvZiBlYWNoIGNoaWxkIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnRvIG9uZSBvYmplY3QsXG4gKiB3aXRoIGVhY2ggY29udHJvbCBuYW1lIGFzIHRoZSBrZXkuICBJdCBjYWxjdWxhdGVzIGl0cyBzdGF0dXMgYnkgcmVkdWNpbmcgdGhlIHN0YXR1c2VzXG4gKiBvZiBpdHMgY2hpbGRyZW4uIEZvciBleGFtcGxlLCBpZiBvbmUgb2YgdGhlIGNvbnRyb2xzIGluIGEgZ3JvdXAgaXMgaW52YWxpZCwgdGhlIGVudGlyZVxuICogZ3JvdXAgYmVjb21lcyBpbnZhbGlkLlxuICogXG4gKiBgRm9ybUdyb3VwYCBpcyBvbmUgb2YgdGhlIHRocmVlIGZ1bmRhbWVudGFsIGJ1aWxkaW5nIGJsb2NrcyB1c2VkIHRvIGRlZmluZSBmb3JtcyBpbiBBbmd1bGFyLFxuICogYWxvbmcgd2l0aCB7XFxAbGluayBGb3JtQ29udHJvbH0gYW5kIHtcXEBsaW5rIEZvcm1BcnJheX0uXG4gKiBcbiAqIFxcQGhvd1RvVXNlIFxuICogXG4gKiBXaGVuIGluc3RhbnRpYXRpbmcgYSB7XFxAbGluayBGb3JtR3JvdXB9LCBwYXNzIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZCBjb250cm9scyBhcyB0aGUgZmlyc3RcbiAqIGFyZ3VtZW50LiBUaGUga2V5IGZvciBlYWNoIGNoaWxkIHdpbGwgYmUgdGhlIG5hbWUgdW5kZXIgd2hpY2ggaXQgaXMgcmVnaXN0ZXJlZC5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICogYGBgXG4gKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gKiAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woJ05hbmN5JywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMikpLFxuICogICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woJ0RyZXcnKSxcbiAqIH0pO1xuICogXG4gKiBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6ICdOYW5jeScsIGxhc3Q7ICdEcmV3J31cbiAqIGNvbnNvbGUubG9nKGZvcm0uc3RhdHVzKTsgIC8vICdWQUxJRCdcbiAqIGBgYFxuICogXG4gKiBZb3UgY2FuIGFsc28gaW5jbHVkZSBncm91cC1sZXZlbCB2YWxpZGF0b3JzIGFzIHRoZSBzZWNvbmQgYXJnLCBvciBncm91cC1sZXZlbCBhc3luY1xuICogdmFsaWRhdG9ycyBhcyB0aGUgdGhpcmQgYXJnLiBUaGVzZSBjb21lIGluIGhhbmR5IHdoZW4geW91IHdhbnQgdG8gcGVyZm9ybSB2YWxpZGF0aW9uXG4gKiB0aGF0IGNvbnNpZGVycyB0aGUgdmFsdWUgb2YgbW9yZSB0aGFuIG9uZSBjaGlsZCBjb250cm9sLlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiBgYGBcbiAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAqICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMikpLFxuICogICBwYXNzd29yZENvbmZpcm06IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMikpLFxuICogfSwgcGFzc3dvcmRNYXRjaFZhbGlkYXRvcik7XG4gKiBcbiAqIFxuICogZnVuY3Rpb24gcGFzc3dvcmRNYXRjaFZhbGlkYXRvcihnOiBGb3JtR3JvdXApIHtcbiAqICAgIHJldHVybiBnLmdldCgncGFzc3dvcmQnKS52YWx1ZSA9PT0gZy5nZXQoJ3Bhc3N3b3JkQ29uZmlybScpLnZhbHVlXG4gKiAgICAgICA/IG51bGwgOiB7J21pc21hdGNoJzogdHJ1ZX07XG4gKiB9XG4gKiBgYGBcbiAqIFxuICogKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cCBleHRlbmRzIEFic3RyYWN0Q29udHJvbCB7XG4vKipcbiAqIEBwYXJhbSB7P30gY29udHJvbHNcbiAqIEBwYXJhbSB7Pz19IHZhbGlkYXRvclxuICogQHBhcmFtIHs/PX0gYXN5bmNWYWxpZGF0b3JcbiAqL1xuY29uc3RydWN0b3IoXG5wdWJsaWMgY29udHJvbHM6IHtba2V5OiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2x9LCB2YWxpZGF0b3I6IFZhbGlkYXRvckZuID0gbnVsbCxcbiAgICAgIGFzeW5jVmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZuID0gbnVsbCkge1xuICAgIHN1cGVyKHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgIHRoaXMuX2luaXRPYnNlcnZhYmxlcygpO1xuICAgIHRoaXMuX3NldFVwQ29udHJvbHMoKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gIH1cbi8qKlxuICogUmVnaXN0ZXJzIGEgY29udHJvbCB3aXRoIHRoZSBncm91cCdzIGxpc3Qgb2YgY29udHJvbHMuXG4gKiBcbiAqIFRoaXMgbWV0aG9kIGRvZXMgbm90IHVwZGF0ZSB2YWx1ZSBvciB2YWxpZGl0eSBvZiB0aGUgY29udHJvbCwgc28gZm9yXG4gKiBtb3N0IGNhc2VzIHlvdSdsbCB3YW50IHRvIHVzZSB7XFxAbGluayBGb3JtR3JvdXAuYWRkQ29udHJvbH0gaW5zdGVhZC5cbiAqIEBwYXJhbSB7P30gbmFtZVxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3RlckNvbnRyb2wobmFtZTogc3RyaW5nLCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBBYnN0cmFjdENvbnRyb2wge1xuICAgIGlmICh0aGlzLmNvbnRyb2xzW25hbWVdKSByZXR1cm4gdGhpcy5jb250cm9sc1tuYW1lXTtcbiAgICB0aGlzLmNvbnRyb2xzW25hbWVdID0gY29udHJvbDtcbiAgICBjb250cm9sLnNldFBhcmVudCh0aGlzKTtcbiAgICBjb250cm9sLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSh0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UpO1xuICAgIHJldHVybiBjb250cm9sO1xuICB9XG4vKipcbiAqIEFkZCBhIGNvbnRyb2wgdG8gdGhpcyBncm91cC5cbiAqIEBwYXJhbSB7P30gbmFtZVxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcmV0dXJuIHs/fVxuICovXG5hZGRDb250cm9sKG5hbWU6IHN0cmluZywgY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogdm9pZCB7XG4gICAgdGhpcy5yZWdpc3RlckNvbnRyb2wobmFtZSwgY29udHJvbCk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cbi8qKlxuICogUmVtb3ZlIGEgY29udHJvbCBmcm9tIHRoaXMgZ3JvdXAuXG4gKiBAcGFyYW0gez99IG5hbWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlbW92ZUNvbnRyb2wobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbHNbbmFtZV0pIHRoaXMuY29udHJvbHNbbmFtZV0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKCgpID0+IHt9KTtcbiAgICBkZWxldGUgKHRoaXMuY29udHJvbHNbbmFtZV0pO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICB9XG4vKipcbiAqIFJlcGxhY2UgYW4gZXhpc3RpbmcgY29udHJvbC5cbiAqIEBwYXJhbSB7P30gbmFtZVxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXRDb250cm9sKG5hbWU6IHN0cmluZywgY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbHNbbmFtZV0pIHRoaXMuY29udHJvbHNbbmFtZV0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKCgpID0+IHt9KTtcbiAgICBkZWxldGUgKHRoaXMuY29udHJvbHNbbmFtZV0pO1xuICAgIGlmIChjb250cm9sKSB0aGlzLnJlZ2lzdGVyQ29udHJvbChuYW1lLCBjb250cm9sKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgfVxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZXJlIGlzIGFuIGVuYWJsZWQgY29udHJvbCB3aXRoIHRoZSBnaXZlbiBuYW1lIGluIHRoZSBncm91cC5cbiAqIFxuICogSXQgd2lsbCByZXR1cm4gZmFsc2UgZm9yIGRpc2FibGVkIGNvbnRyb2xzLiBJZiB5b3UnZCBsaWtlIHRvIGNoZWNrIGZvclxuICogZXhpc3RlbmNlIGluIHRoZSBncm91cCBvbmx5LCB1c2Uge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLmdldH0gaW5zdGVhZC5cbiAqIEBwYXJhbSB7P30gY29udHJvbE5hbWVcbiAqIEByZXR1cm4gez99XG4gKi9cbmNvbnRhaW5zKGNvbnRyb2xOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9scy5oYXNPd25Qcm9wZXJ0eShjb250cm9sTmFtZSkgJiYgdGhpcy5jb250cm9sc1tjb250cm9sTmFtZV0uZW5hYmxlZDtcbiAgfVxuLyoqXG4gKiAgU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0uIEl0IGFjY2VwdHMgYW4gb2JqZWN0IHRoYXQgbWF0Y2hlc1xuICogIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGdyb3VwLCB3aXRoIGNvbnRyb2wgbmFtZXMgYXMga2V5cy5cbiAqIFxuICogVGhpcyBtZXRob2QgcGVyZm9ybXMgc3RyaWN0IGNoZWNrcywgc28gaXQgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB5b3UgdHJ5XG4gKiB0byBzZXQgdGhlIHZhbHVlIG9mIGEgY29udHJvbCB0aGF0IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgeW91IGV4Y2x1ZGUgdGhlXG4gKiB2YWx1ZSBvZiBhIGNvbnRyb2wuXG4gKiBcbiAqICAjIyMgRXhhbXBsZVxuICogXG4gKiAgYGBgXG4gKiAgY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICogICAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woKSxcbiAqICAgICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woKVxuICogIH0pO1xuICogIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogbnVsbCwgbGFzdDogbnVsbH1cbiAqIFxuICogIGZvcm0uc2V0VmFsdWUoe2ZpcnN0OiAnTmFuY3knLCBsYXN0OiAnRHJldyd9KTtcbiAqICBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6ICdOYW5jeScsIGxhc3Q6ICdEcmV3J31cbiAqIFxuICogIGBgYFxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHBhcmFtIHs/PX0gX18xXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXRWYWx1ZShcbiAgICAgIHZhbHVlOiB7W2tleTogc3RyaW5nXTogYW55fSxcbiAgICAgIHtvbmx5U2VsZiwgZW1pdEV2ZW50fToge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX2NoZWNrQWxsVmFsdWVzUHJlc2VudCh2YWx1ZSk7XG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICB0aGlzLl90aHJvd0lmQ29udHJvbE1pc3NpbmcobmFtZSk7XG4gICAgICB0aGlzLmNvbnRyb2xzW25hbWVdLnNldFZhbHVlKHZhbHVlW25hbWVdLCB7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudH0pO1xuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGYsIGVtaXRFdmVudH0pO1xuICB9XG4vKipcbiAqICBQYXRjaGVzIHRoZSB2YWx1ZSBvZiB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfS4gSXQgYWNjZXB0cyBhbiBvYmplY3Qgd2l0aCBjb250cm9sXG4gKiAgbmFtZXMgYXMga2V5cywgYW5kIHdpbGwgZG8gaXRzIGJlc3QgdG8gbWF0Y2ggdGhlIHZhbHVlcyB0byB0aGUgY29ycmVjdCBjb250cm9sc1xuICogIGluIHRoZSBncm91cC5cbiAqIFxuICogIEl0IGFjY2VwdHMgYm90aCBzdXBlci1zZXRzIGFuZCBzdWItc2V0cyBvZiB0aGUgZ3JvdXAgd2l0aG91dCB0aHJvd2luZyBhbiBlcnJvci5cbiAqIFxuICogICMjIyBFeGFtcGxlXG4gKiBcbiAqICBgYGBcbiAqICBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gKiAgICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgpLFxuICogICAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgpXG4gKiAgfSk7XG4gKiAgY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiBudWxsLCBsYXN0OiBudWxsfVxuICogXG4gKiAgZm9ybS5wYXRjaFZhbHVlKHtmaXJzdDogJ05hbmN5J30pO1xuICogIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogJ05hbmN5JywgbGFzdDogbnVsbH1cbiAqIFxuICogIGBgYFxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHBhcmFtIHs/PX0gX18xXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wYXRjaFZhbHVlKFxuICAgICAgdmFsdWU6IHtba2V5OiBzdHJpbmddOiBhbnl9LFxuICAgICAge29ubHlTZWxmLCBlbWl0RXZlbnR9OiB7b25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBpZiAodGhpcy5jb250cm9sc1tuYW1lXSkge1xuICAgICAgICB0aGlzLmNvbnRyb2xzW25hbWVdLnBhdGNoVmFsdWUodmFsdWVbbmFtZV0sIHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50fSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZiwgZW1pdEV2ZW50fSk7XG4gIH1cbi8qKlxuICogUmVzZXRzIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9LiBUaGlzIG1lYW5zIGJ5IGRlZmF1bHQ6XG4gKiBcbiAqICogVGhlIGdyb3VwIGFuZCBhbGwgZGVzY2VuZGFudHMgYXJlIG1hcmtlZCBgcHJpc3RpbmVgXG4gKiAqIFRoZSBncm91cCBhbmQgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHVudG91Y2hlZGBcbiAqICogVGhlIHZhbHVlIG9mIGFsbCBkZXNjZW5kYW50cyB3aWxsIGJlIG51bGwgb3IgbnVsbCBtYXBzXG4gKiBcbiAqIFlvdSBjYW4gYWxzbyByZXNldCB0byBhIHNwZWNpZmljIGZvcm0gc3RhdGUgYnkgcGFzc2luZyBpbiBhIG1hcCBvZiBzdGF0ZXNcbiAqIHRoYXQgbWF0Y2hlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgZm9ybSwgd2l0aCBjb250cm9sIG5hbWVzIGFzIGtleXMuIFRoZSBzdGF0ZVxuICogY2FuIGJlIGEgc3RhbmRhbG9uZSB2YWx1ZSBvciBhIGZvcm0gc3RhdGUgb2JqZWN0IHdpdGggYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkXG4gKiBzdGF0dXMuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIGBgYHRzXG4gKiB0aGlzLmZvcm0ucmVzZXQoe2ZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfSk7XG4gKiBcbiAqIGNvbnNvbGUubG9nKHRoaXMuZm9ybS52YWx1ZSk7ICAvLyB7Zmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9XG4gKiBgYGBcbiAqIFxuICogLSBPUiAtXG4gKiBcbiAqIGBgYFxuICogdGhpcy5mb3JtLnJlc2V0KHtcbiAqICAgZmlyc3Q6IHt2YWx1ZTogJ25hbWUnLCBkaXNhYmxlZDogdHJ1ZX0sXG4gKiAgIGxhc3Q6ICdsYXN0J1xuICogfSk7XG4gKiBcbiAqIGNvbnNvbGUubG9nKHRoaXMuZm9ybS52YWx1ZSk7ICAvLyB7Zmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9XG4gKiBjb25zb2xlLmxvZyh0aGlzLmZvcm0uZ2V0KCdmaXJzdCcpLnN0YXR1cyk7ICAvLyAnRElTQUJMRUQnXG4gKiBgYGBcbiAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gKiBAcGFyYW0gez89fSBfXzFcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlc2V0KHZhbHVlOiBhbnkgPSB7fSwge29ubHlTZWxmLCBlbWl0RXZlbnR9OiB7b25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFufSA9IHt9KTpcbiAgICAgIHZvaWQge1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnRyb2wucmVzZXQodmFsdWVbbmFtZV0sIHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50fSk7XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZiwgZW1pdEV2ZW50fSk7XG4gICAgdGhpcy5fdXBkYXRlUHJpc3RpbmUoe29ubHlTZWxmfSk7XG4gICAgdGhpcy5fdXBkYXRlVG91Y2hlZCh7b25seVNlbGZ9KTtcbiAgfVxuLyoqXG4gKiBUaGUgYWdncmVnYXRlIHZhbHVlIG9mIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9LCBpbmNsdWRpbmcgYW55IGRpc2FibGVkIGNvbnRyb2xzLlxuICogXG4gKiBJZiB5b3UnZCBsaWtlIHRvIGluY2x1ZGUgYWxsIHZhbHVlcyByZWdhcmRsZXNzIG9mIGRpc2FibGVkIHN0YXR1cywgdXNlIHRoaXMgbWV0aG9kLlxuICogT3RoZXJ3aXNlLCB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyB0aGUgYmVzdCB3YXkgdG8gZ2V0IHRoZSB2YWx1ZSBvZiB0aGUgZ3JvdXAuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXRSYXdWYWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9yZWR1Y2VDaGlsZHJlbihcbiAgICAgICAge30sIChhY2M6IHtbazogc3RyaW5nXTogQWJzdHJhY3RDb250cm9sfSwgY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBhY2NbbmFtZV0gPSBjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgPyBjb250cm9sLnZhbHVlIDogKCAvKiogQHR5cGUgez99ICovKCg8YW55PmNvbnRyb2wpKSkuZ2V0UmF3VmFsdWUoKTtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9KTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBuYW1lXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fdGhyb3dJZkNvbnRyb2xNaXNzaW5nKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghT2JqZWN0LmtleXModGhpcy5jb250cm9scykubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgICBUaGVyZSBhcmUgbm8gZm9ybSBjb250cm9scyByZWdpc3RlcmVkIHdpdGggdGhpcyBncm91cCB5ZXQuICBJZiB5b3UncmUgdXNpbmcgbmdNb2RlbCxcbiAgICAgICAgeW91IG1heSB3YW50IHRvIGNoZWNrIG5leHQgdGljayAoZS5nLiB1c2Ugc2V0VGltZW91dCkuXG4gICAgICBgKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNvbnRyb2xzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIGZvcm0gY29udHJvbCB3aXRoIG5hbWU6ICR7bmFtZX0uYCk7XG4gICAgfVxuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IGNiXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fZm9yRWFjaENoaWxkKGNiOiAodjogYW55LCBrOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2xzKS5mb3JFYWNoKGsgPT4gY2IodGhpcy5jb250cm9sc1trXSwgaykpO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fc2V0VXBDb250cm9scygpOiB2b2lkIHtcbiAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4ge1xuICAgICAgY29udHJvbC5zZXRQYXJlbnQodGhpcyk7XG4gICAgICBjb250cm9sLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSh0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UpO1xuICAgIH0pO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fdXBkYXRlVmFsdWUoKTogdm9pZCB7IHRoaXMuX3ZhbHVlID0gdGhpcy5fcmVkdWNlVmFsdWUoKTsgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBjb25kaXRpb25cbiAqIEByZXR1cm4gez99XG4gKi9cbl9hbnlDb250cm9scyhjb25kaXRpb246IEZ1bmN0aW9uKTogYm9vbGVhbiB7XG4gICAgbGV0IC8qKiBAdHlwZSB7P30gKi8gcmVzID0gZmFsc2U7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgcmVzID0gcmVzIHx8ICh0aGlzLmNvbnRhaW5zKG5hbWUpICYmIGNvbmRpdGlvbihjb250cm9sKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX3JlZHVjZVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWR1Y2VDaGlsZHJlbihcbiAgICAgICAge30sIChhY2M6IHtbazogc3RyaW5nXTogQWJzdHJhY3RDb250cm9sfSwgY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBpZiAoY29udHJvbC5lbmFibGVkIHx8IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGFjY1tuYW1lXSA9IGNvbnRyb2wudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0pO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IGluaXRWYWx1ZVxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xuX3JlZHVjZUNoaWxkcmVuKGluaXRWYWx1ZTogYW55LCBmbjogRnVuY3Rpb24pIHtcbiAgICBsZXQgLyoqIEB0eXBlIHs/fSAqLyByZXMgPSBpbml0VmFsdWU7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKFxuICAgICAgICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBuYW1lOiBzdHJpbmcpID0+IHsgcmVzID0gZm4ocmVzLCBjb250cm9sLCBuYW1lKTsgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX2FsbENvbnRyb2xzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgZm9yIChjb25zdCAvKiogQHR5cGUgez99ICovIGNvbnRyb2xOYW1lIG9mIE9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpKSB7XG4gICAgICBpZiAodGhpcy5jb250cm9sc1tjb250cm9sTmFtZV0uZW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2xzKS5sZW5ndGggPiAwIHx8IHRoaXMuZGlzYWJsZWQ7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbl9jaGVja0FsbFZhbHVlc1ByZXNlbnQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh2YWx1ZVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVzdCBzdXBwbHkgYSB2YWx1ZSBmb3IgZm9ybSBjb250cm9sIHdpdGggbmFtZTogJyR7bmFtZX0nLmApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIEZvcm1Hcm91cF90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUdyb3VwLnByb3RvdHlwZS5jb250cm9scztcbn1cblxuLyoqXG4gKiBcXEB3aGF0SXREb2VzIFRyYWNrcyB0aGUgdmFsdWUgYW5kIHZhbGlkaXR5IHN0YXRlIG9mIGFuIGFycmF5IG9mIHtcXEBsaW5rIEZvcm1Db250cm9sfSxcbiAqIHtcXEBsaW5rIEZvcm1Hcm91cH0gb3Ige1xcQGxpbmsgRm9ybUFycmF5fSBpbnN0YW5jZXMuXG4gKiBcbiAqIEEgYEZvcm1BcnJheWAgYWdncmVnYXRlcyB0aGUgdmFsdWVzIG9mIGVhY2ggY2hpbGQge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGludG8gYW4gYXJyYXkuXG4gKiBJdCBjYWxjdWxhdGVzIGl0cyBzdGF0dXMgYnkgcmVkdWNpbmcgdGhlIHN0YXR1c2VzIG9mIGl0cyBjaGlsZHJlbi4gRm9yIGV4YW1wbGUsIGlmIG9uZSBvZlxuICogdGhlIGNvbnRyb2xzIGluIGEgYEZvcm1BcnJheWAgaXMgaW52YWxpZCwgdGhlIGVudGlyZSBhcnJheSBiZWNvbWVzIGludmFsaWQuXG4gKiBcbiAqIGBGb3JtQXJyYXlgIGlzIG9uZSBvZiB0aGUgdGhyZWUgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2tzIHVzZWQgdG8gZGVmaW5lIGZvcm1zIGluIEFuZ3VsYXIsXG4gKiBhbG9uZyB3aXRoIHtcXEBsaW5rIEZvcm1Db250cm9sfSBhbmQge1xcQGxpbmsgRm9ybUdyb3VwfS5cbiAqIFxuICogXFxAaG93VG9Vc2UgXG4gKiBcbiAqIFdoZW4gaW5zdGFudGlhdGluZyBhIHtcXEBsaW5rIEZvcm1BcnJheX0sIHBhc3MgaW4gYW4gYXJyYXkgb2YgY2hpbGQgY29udHJvbHMgYXMgdGhlIGZpcnN0XG4gKiBhcmd1bWVudC5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICogYGBgXG4gKiBjb25zdCBhcnIgPSBuZXcgRm9ybUFycmF5KFtcbiAqICAgbmV3IEZvcm1Db250cm9sKCdOYW5jeScsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAqICAgbmV3IEZvcm1Db250cm9sKCdEcmV3JyksXG4gKiBdKTtcbiAqIFxuICogY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbJ05hbmN5JywgJ0RyZXcnXVxuICogY29uc29sZS5sb2coYXJyLnN0YXR1cyk7ICAvLyAnVkFMSUQnXG4gKiBgYGBcbiAqIFxuICogWW91IGNhbiBhbHNvIGluY2x1ZGUgYXJyYXktbGV2ZWwgdmFsaWRhdG9ycyBhcyB0aGUgc2Vjb25kIGFyZywgb3IgYXJyYXktbGV2ZWwgYXN5bmNcbiAqIHZhbGlkYXRvcnMgYXMgdGhlIHRoaXJkIGFyZy4gVGhlc2UgY29tZSBpbiBoYW5keSB3aGVuIHlvdSB3YW50IHRvIHBlcmZvcm0gdmFsaWRhdGlvblxuICogdGhhdCBjb25zaWRlcnMgdGhlIHZhbHVlIG9mIG1vcmUgdGhhbiBvbmUgY2hpbGQgY29udHJvbC5cbiAqIFxuICogIyMjIEFkZGluZyBvciByZW1vdmluZyBjb250cm9sc1xuICogXG4gKiBUbyBjaGFuZ2UgdGhlIGNvbnRyb2xzIGluIHRoZSBhcnJheSwgdXNlIHRoZSBgcHVzaGAsIGBpbnNlcnRgLCBvciBgcmVtb3ZlQXRgIG1ldGhvZHNcbiAqIGluIGBGb3JtQXJyYXlgIGl0c2VsZi4gVGhlc2UgbWV0aG9kcyBlbnN1cmUgdGhlIGNvbnRyb2xzIGFyZSBwcm9wZXJseSB0cmFja2VkIGluIHRoZVxuICogZm9ybSdzIGhpZXJhcmNoeS4gRG8gbm90IG1vZGlmeSB0aGUgYXJyYXkgb2YgYEFic3RyYWN0Q29udHJvbGBzIHVzZWQgdG8gaW5zdGFudGlhdGVcbiAqIHRoZSBgRm9ybUFycmF5YCBkaXJlY3RseSwgYXMgdGhhdCB3aWxsIHJlc3VsdCBpbiBzdHJhbmdlIGFuZCB1bmV4cGVjdGVkIGJlaGF2aW9yIHN1Y2hcbiAqIGFzIGJyb2tlbiBjaGFuZ2UgZGV0ZWN0aW9uLlxuICogXG4gKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgRm9ybUFycmF5IGV4dGVuZHMgQWJzdHJhY3RDb250cm9sIHtcbi8qKlxuICogQHBhcmFtIHs/fSBjb250cm9sc1xuICogQHBhcmFtIHs/PX0gdmFsaWRhdG9yXG4gKiBAcGFyYW0gez89fSBhc3luY1ZhbGlkYXRvclxuICovXG5jb25zdHJ1Y3RvcihcbnB1YmxpYyBjb250cm9sczogQWJzdHJhY3RDb250cm9sW10sIHZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSBudWxsLFxuICAgICAgYXN5bmNWYWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yRm4gPSBudWxsKSB7XG4gICAgc3VwZXIodmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcik7XG4gICAgdGhpcy5faW5pdE9ic2VydmFibGVzKCk7XG4gICAgdGhpcy5fc2V0VXBDb250cm9scygpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2V9KTtcbiAgfVxuLyoqXG4gKiBHZXQgdGhlIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0gYXQgdGhlIGdpdmVuIGBpbmRleGAgaW4gdGhlIGFycmF5LlxuICogQHBhcmFtIHs/fSBpbmRleFxuICogQHJldHVybiB7P31cbiAqL1xuYXQoaW5kZXg6IG51bWJlcik6IEFic3RyYWN0Q29udHJvbCB7IHJldHVybiB0aGlzLmNvbnRyb2xzW2luZGV4XTsgfVxuLyoqXG4gKiBJbnNlcnQgYSBuZXcge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfSBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHJldHVybiB7P31cbiAqL1xucHVzaChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICB9XG4vKipcbiAqIEluc2VydCBhIG5ldyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9IGF0IHRoZSBnaXZlbiBgaW5kZXhgIGluIHRoZSBhcnJheS5cbiAqIEBwYXJhbSB7P30gaW5kZXhcbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHJldHVybiB7P31cbiAqL1xuaW5zZXJ0KGluZGV4OiBudW1iZXIsIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbHMuc3BsaWNlKGluZGV4LCAwLCBjb250cm9sKTtcblxuICAgIHRoaXMuX3JlZ2lzdGVyQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgfVxuLyoqXG4gKiBSZW1vdmUgdGhlIGNvbnRyb2wgYXQgdGhlIGdpdmVuIGBpbmRleGAgaW4gdGhlIGFycmF5LlxuICogQHBhcmFtIHs/fSBpbmRleFxuICogQHJldHVybiB7P31cbiAqL1xucmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRyb2xzW2luZGV4XSkgdGhpcy5jb250cm9sc1tpbmRleF0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKCgpID0+IHt9KTtcbiAgICB0aGlzLmNvbnRyb2xzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cbi8qKlxuICogUmVwbGFjZSBhbiBleGlzdGluZyBjb250cm9sLlxuICogQHBhcmFtIHs/fSBpbmRleFxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXRDb250cm9sKGluZGV4OiBudW1iZXIsIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRyb2xzW2luZGV4XSkgdGhpcy5jb250cm9sc1tpbmRleF0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKCgpID0+IHt9KTtcbiAgICB0aGlzLmNvbnRyb2xzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgdGhpcy5jb250cm9scy5zcGxpY2UoaW5kZXgsIDAsIGNvbnRyb2wpO1xuICAgICAgdGhpcy5fcmVnaXN0ZXJDb250cm9sKGNvbnRyb2wpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICB9XG4vKipcbiAqIExlbmd0aCBvZiB0aGUgY29udHJvbCBhcnJheS5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBsZW5ndGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuY29udHJvbHMubGVuZ3RoOyB9XG4vKipcbiAqICBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUge1xcQGxpbmsgRm9ybUFycmF5fS4gSXQgYWNjZXB0cyBhbiBhcnJheSB0aGF0IG1hdGNoZXNcbiAqICB0aGUgc3RydWN0dXJlIG9mIHRoZSBjb250cm9sLlxuICogXG4gKiBUaGlzIG1ldGhvZCBwZXJmb3JtcyBzdHJpY3QgY2hlY2tzLCBzbyBpdCB3aWxsIHRocm93IGFuIGVycm9yIGlmIHlvdSB0cnlcbiAqIHRvIHNldCB0aGUgdmFsdWUgb2YgYSBjb250cm9sIHRoYXQgZG9lc24ndCBleGlzdCBvciBpZiB5b3UgZXhjbHVkZSB0aGVcbiAqIHZhbHVlIG9mIGEgY29udHJvbC5cbiAqIFxuICogICMjIyBFeGFtcGxlXG4gKiBcbiAqICBgYGBcbiAqICBjb25zdCBhcnIgPSBuZXcgRm9ybUFycmF5KFtcbiAqICAgICBuZXcgRm9ybUNvbnRyb2woKSxcbiAqICAgICBuZXcgRm9ybUNvbnRyb2woKVxuICogIF0pO1xuICogIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gW251bGwsIG51bGxdXG4gKiBcbiAqICBhcnIuc2V0VmFsdWUoWydOYW5jeScsICdEcmV3J10pO1xuICogIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gWydOYW5jeScsICdEcmV3J11cbiAqICBgYGBcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEBwYXJhbSB7Pz19IF9fMVxuICogQHJldHVybiB7P31cbiAqL1xuc2V0VmFsdWUodmFsdWU6IGFueVtdLCB7b25seVNlbGYsIGVtaXRFdmVudH06IHtvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW59ID0ge30pOlxuICAgICAgdm9pZCB7XG4gICAgdGhpcy5fY2hlY2tBbGxWYWx1ZXNQcmVzZW50KHZhbHVlKTtcbiAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLl90aHJvd0lmQ29udHJvbE1pc3NpbmcoaW5kZXgpO1xuICAgICAgdGhpcy5hdChpbmRleCkuc2V0VmFsdWUobmV3VmFsdWUsIHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50fSk7XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZiwgZW1pdEV2ZW50fSk7XG4gIH1cbi8qKlxuICogIFBhdGNoZXMgdGhlIHZhbHVlIG9mIHRoZSB7XFxAbGluayBGb3JtQXJyYXl9LiBJdCBhY2NlcHRzIGFuIGFycmF5IHRoYXQgbWF0Y2hlcyB0aGVcbiAqICBzdHJ1Y3R1cmUgb2YgdGhlIGNvbnRyb2wsIGFuZCB3aWxsIGRvIGl0cyBiZXN0IHRvIG1hdGNoIHRoZSB2YWx1ZXMgdG8gdGhlIGNvcnJlY3RcbiAqICBjb250cm9scyBpbiB0aGUgZ3JvdXAuXG4gKiBcbiAqICBJdCBhY2NlcHRzIGJvdGggc3VwZXItc2V0cyBhbmQgc3ViLXNldHMgb2YgdGhlIGFycmF5IHdpdGhvdXQgdGhyb3dpbmcgYW4gZXJyb3IuXG4gKiBcbiAqICAjIyMgRXhhbXBsZVxuICogXG4gKiAgYGBgXG4gKiAgY29uc3QgYXJyID0gbmV3IEZvcm1BcnJheShbXG4gKiAgICAgbmV3IEZvcm1Db250cm9sKCksXG4gKiAgICAgbmV3IEZvcm1Db250cm9sKClcbiAqICBdKTtcbiAqICBjb25zb2xlLmxvZyhhcnIudmFsdWUpOyAgIC8vIFtudWxsLCBudWxsXVxuICogXG4gKiAgYXJyLnBhdGNoVmFsdWUoWydOYW5jeSddKTtcbiAqICBjb25zb2xlLmxvZyhhcnIudmFsdWUpOyAgIC8vIFsnTmFuY3knLCBudWxsXVxuICogIGBgYFxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHBhcmFtIHs/PX0gX18xXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wYXRjaFZhbHVlKHZhbHVlOiBhbnlbXSwge29ubHlTZWxmLCBlbWl0RXZlbnR9OiB7b25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFufSA9IHt9KTpcbiAgICAgIHZvaWQge1xuICAgIHZhbHVlLmZvckVhY2goKG5ld1ZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLmF0KGluZGV4KSkge1xuICAgICAgICB0aGlzLmF0KGluZGV4KS5wYXRjaFZhbHVlKG5ld1ZhbHVlLCB7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGYsIGVtaXRFdmVudH0pO1xuICB9XG4vKipcbiAqIFJlc2V0cyB0aGUge1xcQGxpbmsgRm9ybUFycmF5fS4gVGhpcyBtZWFucyBieSBkZWZhdWx0OlxuICogXG4gKiAqIFRoZSBhcnJheSBhbmQgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHByaXN0aW5lYFxuICogKiBUaGUgYXJyYXkgYW5kIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGB1bnRvdWNoZWRgXG4gKiAqIFRoZSB2YWx1ZSBvZiBhbGwgZGVzY2VuZGFudHMgd2lsbCBiZSBudWxsIG9yIG51bGwgbWFwc1xuICogXG4gKiBZb3UgY2FuIGFsc28gcmVzZXQgdG8gYSBzcGVjaWZpYyBmb3JtIHN0YXRlIGJ5IHBhc3NpbmcgaW4gYW4gYXJyYXkgb2Ygc3RhdGVzXG4gKiB0aGF0IG1hdGNoZXMgdGhlIHN0cnVjdHVyZSBvZiB0aGUgY29udHJvbC4gVGhlIHN0YXRlIGNhbiBiZSBhIHN0YW5kYWxvbmUgdmFsdWVcbiAqIG9yIGEgZm9ybSBzdGF0ZSBvYmplY3Qgd2l0aCBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWQgc3RhdHVzLlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiBgYGB0c1xuICogdGhpcy5hcnIucmVzZXQoWyduYW1lJywgJ2xhc3QgbmFtZSddKTtcbiAqIFxuICogY29uc29sZS5sb2codGhpcy5hcnIudmFsdWUpOyAgLy8gWyduYW1lJywgJ2xhc3QgbmFtZSddXG4gKiBgYGBcbiAqIFxuICogLSBPUiAtXG4gKiBcbiAqIGBgYFxuICogdGhpcy5hcnIucmVzZXQoW1xuICogICB7dmFsdWU6ICduYW1lJywgZGlzYWJsZWQ6IHRydWV9LFxuICogICAnbGFzdCdcbiAqIF0pO1xuICogXG4gKiBjb25zb2xlLmxvZyh0aGlzLmFyci52YWx1ZSk7ICAvLyBbJ25hbWUnLCAnbGFzdCBuYW1lJ11cbiAqIGNvbnNvbGUubG9nKHRoaXMuYXJyLmdldCgwKS5zdGF0dXMpOyAgLy8gJ0RJU0FCTEVEJ1xuICogYGBgXG4gKiBAcGFyYW0gez89fSB2YWx1ZVxuICogQHBhcmFtIHs/PX0gX18xXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZXNldCh2YWx1ZTogYW55ID0gW10sIHtvbmx5U2VsZiwgZW1pdEV2ZW50fToge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6XG4gICAgICB2b2lkIHtcbiAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgY29udHJvbC5yZXNldCh2YWx1ZVtpbmRleF0sIHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50fSk7XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZiwgZW1pdEV2ZW50fSk7XG4gICAgdGhpcy5fdXBkYXRlUHJpc3RpbmUoe29ubHlTZWxmfSk7XG4gICAgdGhpcy5fdXBkYXRlVG91Y2hlZCh7b25seVNlbGZ9KTtcbiAgfVxuLyoqXG4gKiBUaGUgYWdncmVnYXRlIHZhbHVlIG9mIHRoZSBhcnJheSwgaW5jbHVkaW5nIGFueSBkaXNhYmxlZCBjb250cm9scy5cbiAqIFxuICogSWYgeW91J2QgbGlrZSB0byBpbmNsdWRlIGFsbCB2YWx1ZXMgcmVnYXJkbGVzcyBvZiBkaXNhYmxlZCBzdGF0dXMsIHVzZSB0aGlzIG1ldGhvZC5cbiAqIE90aGVyd2lzZSwgdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgdGhlIGJlc3Qgd2F5IHRvIGdldCB0aGUgdmFsdWUgb2YgdGhlIGFycmF5LlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0UmF3VmFsdWUoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLm1hcCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgICByZXR1cm4gY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sID8gY29udHJvbC52YWx1ZSA6ICggLyoqIEB0eXBlIHs/fSAqLygoPGFueT5jb250cm9sKSkpLmdldFJhd1ZhbHVlKCk7XG4gICAgfSk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gaW5kZXhcbiAqIEByZXR1cm4gez99XG4gKi9cbl90aHJvd0lmQ29udHJvbE1pc3NpbmcoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb250cm9scy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAgICAgIFRoZXJlIGFyZSBubyBmb3JtIGNvbnRyb2xzIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGFycmF5IHlldC4gIElmIHlvdSdyZSB1c2luZyBuZ01vZGVsLFxuICAgICAgICB5b3UgbWF5IHdhbnQgdG8gY2hlY2sgbmV4dCB0aWNrIChlLmcuIHVzZSBzZXRUaW1lb3V0KS5cbiAgICAgIGApO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuYXQoaW5kZXgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIGZvcm0gY29udHJvbCBhdCBpbmRleCAke2luZGV4fWApO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBjYlxuICogQHJldHVybiB7P31cbiAqL1xuX2ZvckVhY2hDaGlsZChjYjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgaW5kZXg6IG51bWJlcikgPT4geyBjYihjb250cm9sLCBpbmRleCk7IH0pO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fdXBkYXRlVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLmNvbnRyb2xzLmZpbHRlcigoY29udHJvbCkgPT4gY29udHJvbC5lbmFibGVkIHx8IHRoaXMuZGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY29udHJvbCkgPT4gY29udHJvbC52YWx1ZSk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gY29uZGl0aW9uXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fYW55Q29udHJvbHMoY29uZGl0aW9uOiBGdW5jdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLnNvbWUoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4gY29udHJvbC5lbmFibGVkICYmIGNvbmRpdGlvbihjb250cm9sKSk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl9zZXRVcENvbnRyb2xzKCk6IHZvaWQge1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB0aGlzLl9yZWdpc3RlckNvbnRyb2woY29udHJvbCkpO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fY2hlY2tBbGxWYWx1ZXNQcmVzZW50KHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodmFsdWVbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11c3Qgc3VwcGx5IGEgdmFsdWUgZm9yIGZvcm0gY29udHJvbCBhdCBpbmRleDogJHtpfS5gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX2FsbENvbnRyb2xzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgZm9yIChjb25zdCAvKiogQHR5cGUgez99ICovIGNvbnRyb2wgb2YgdGhpcy5jb250cm9scykge1xuICAgICAgaWYgKGNvbnRyb2wuZW5hYmxlZCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250cm9scy5sZW5ndGggPiAwIHx8IHRoaXMuZGlzYWJsZWQ7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9yZWdpc3RlckNvbnRyb2woY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgY29udHJvbC5zZXRQYXJlbnQodGhpcyk7XG4gICAgY29udHJvbC5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UodGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBGb3JtQXJyYXlfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1BcnJheS5wcm90b3R5cGUuY29udHJvbHM7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvbW9kZWwudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPcHRpb25hbCwgU2VsZiwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQge05HX0FTWU5DX1ZBTElEQVRPUlMsIE5HX1ZBTElEQVRPUlN9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuXG5pbXBvcnQge0NvbnRyb2xDb250YWluZXJ9IGZyb20gJy4vY29udHJvbF9jb250YWluZXInO1xuaW1wb3J0IHtGb3JtfSBmcm9tICcuL2Zvcm1faW50ZXJmYWNlJztcbmltcG9ydCB7TmdDb250cm9sfSBmcm9tICcuL25nX2NvbnRyb2wnO1xuaW1wb3J0IHtOZ01vZGVsfSBmcm9tICcuL25nX21vZGVsJztcbmltcG9ydCB7TmdNb2RlbEdyb3VwfSBmcm9tICcuL25nX21vZGVsX2dyb3VwJztcbmltcG9ydCB7Y29tcG9zZUFzeW5jVmFsaWRhdG9ycywgY29tcG9zZVZhbGlkYXRvcnMsIHNldFVwQ29udHJvbCwgc2V0VXBGb3JtQ29udGFpbmVyfSBmcm9tICcuL3NoYXJlZCc7XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIGZvcm1EaXJlY3RpdmVQcm92aWRlcjogYW55ID0ge1xuICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ0Zvcm0pXG59O1xuXG5jb25zdCAvKiogQHR5cGUgez99ICovIHJlc29sdmVkUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShudWxsKTtcbi8qKlxuICogXFxAd2hhdEl0RG9lcyBDcmVhdGVzIGEgdG9wLWxldmVsIHtcXEBsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UgYW5kIGJpbmRzIGl0IHRvIGEgZm9ybVxuICogdG8gdHJhY2sgYWdncmVnYXRlIGZvcm0gdmFsdWUgYW5kIHZhbGlkYXRpb24gc3RhdHVzLlxuICogXG4gKiBcXEBob3dUb1VzZSBcbiAqIFxuICogQXMgc29vbiBhcyB5b3UgaW1wb3J0IHRoZSBgRm9ybXNNb2R1bGVgLCB0aGlzIGRpcmVjdGl2ZSBiZWNvbWVzIGFjdGl2ZSBieSBkZWZhdWx0IG9uXG4gKiBhbGwgYDxmb3JtPmAgdGFncy4gIFlvdSBkb24ndCBuZWVkIHRvIGFkZCBhIHNwZWNpYWwgc2VsZWN0b3IuXG4gKiBcbiAqIFlvdSBjYW4gZXhwb3J0IHRoZSBkaXJlY3RpdmUgaW50byBhIGxvY2FsIHRlbXBsYXRlIHZhcmlhYmxlIHVzaW5nIGBuZ0Zvcm1gIGFzIHRoZSBrZXlcbiAqIChleDogYCNteUZvcm09XCJuZ0Zvcm1cImApLiBUaGlzIGlzIG9wdGlvbmFsLCBidXQgdXNlZnVsLiAgTWFueSBwcm9wZXJ0aWVzIGZyb20gdGhlIHVuZGVybHlpbmdcbiAqIHtcXEBsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UgYXJlIGR1cGxpY2F0ZWQgb24gdGhlIGRpcmVjdGl2ZSBpdHNlbGYsIHNvIGEgcmVmZXJlbmNlIHRvIGl0XG4gKiB3aWxsIGdpdmUgeW91IGFjY2VzcyB0byB0aGUgYWdncmVnYXRlIHZhbHVlIGFuZCB2YWxpZGl0eSBzdGF0dXMgb2YgdGhlIGZvcm0sIGFzIHdlbGwgYXNcbiAqIHVzZXIgaW50ZXJhY3Rpb24gcHJvcGVydGllcyBsaWtlIGBkaXJ0eWAgYW5kIGB0b3VjaGVkYC5cbiAqIFxuICogVG8gcmVnaXN0ZXIgY2hpbGQgY29udHJvbHMgd2l0aCB0aGUgZm9ybSwgeW91J2xsIHdhbnQgdG8gdXNlIHtcXEBsaW5rIE5nTW9kZWx9IHdpdGggYVxuICogYG5hbWVgIGF0dHJpYnV0ZS4gIFlvdSBjYW4gYWxzbyB1c2Uge1xcQGxpbmsgTmdNb2RlbEdyb3VwfSBpZiB5b3UnZCBsaWtlIHRvIGNyZWF0ZVxuICogc3ViLWdyb3VwcyB3aXRoaW4gdGhlIGZvcm0uXG4gKiBcbiAqIFlvdSBjYW4gbGlzdGVuIHRvIHRoZSBkaXJlY3RpdmUncyBgbmdTdWJtaXRgIGV2ZW50IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHVzZXIgaGFzXG4gKiB0cmlnZ2VyZWQgYSBmb3JtIHN1Ym1pc3Npb24uIFRoZSBgbmdTdWJtaXRgIGV2ZW50IHdpbGwgYmUgZW1pdHRlZCB3aXRoIHRoZSBvcmlnaW5hbCBmb3JtXG4gKiBzdWJtaXNzaW9uIGV2ZW50LlxuICogXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtL3NpbXBsZV9mb3JtX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICogXG4gKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKiBcbiAqICogKipOZ01vZHVsZSoqOiBgRm9ybXNNb2R1bGVgXG4gKiBcbiAqICBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIE5nRm9ybSBleHRlbmRzIENvbnRyb2xDb250YWluZXIgaW1wbGVtZW50cyBGb3JtIHtcbnByaXZhdGUgX3N1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgbmdTdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAqL1xuY29uc3RydWN0b3IoXG4gICAgICAgICB2YWxpZGF0b3JzOiBhbnlbXSxcbiAgICAgICAgIGFzeW5jVmFsaWRhdG9yczogYW55W10pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZm9ybSA9XG4gICAgICAgIG5ldyBGb3JtR3JvdXAoe30sIGNvbXBvc2VWYWxpZGF0b3JzKHZhbGlkYXRvcnMpLCBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKGFzeW5jVmFsaWRhdG9ycykpO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBzdWJtaXR0ZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9zdWJtaXR0ZWQ7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGZvcm1EaXJlY3RpdmUoKTogRm9ybSB7IHJldHVybiB0aGlzOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBjb250cm9sKCk6IEZvcm1Hcm91cCB7IHJldHVybiB0aGlzLmZvcm07IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHBhdGgoKTogc3RyaW5nW10geyByZXR1cm4gW107IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGNvbnRyb2xzKCk6IHtba2V5OiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2x9IHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sczsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xuYWRkQ29udHJvbChkaXI6IE5nTW9kZWwpOiB2b2lkIHtcbiAgICByZXNvbHZlZFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGNvbnRhaW5lciA9IHRoaXMuX2ZpbmRDb250YWluZXIoZGlyLnBhdGgpO1xuICAgICAgZGlyLl9jb250cm9sID0gLyoqIEB0eXBlIHs/fSAqLygoIDxGb3JtQ29udHJvbD5jb250YWluZXIucmVnaXN0ZXJDb250cm9sKGRpci5uYW1lLCBkaXIuY29udHJvbCkpKTtcbiAgICAgIHNldFVwQ29udHJvbChkaXIuY29udHJvbCwgZGlyKTtcbiAgICAgIGRpci5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe2VtaXRFdmVudDogZmFsc2V9KTtcbiAgICB9KTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0Q29udHJvbChkaXI6IE5nTW9kZWwpOiBGb3JtQ29udHJvbCB7IHJldHVybiAvKiogQHR5cGUgez99ICovKCggPEZvcm1Db250cm9sPnRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKSk7IH1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlbW92ZUNvbnRyb2woZGlyOiBOZ01vZGVsKTogdm9pZCB7XG4gICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjb250YWluZXIgPSB0aGlzLl9maW5kQ29udGFpbmVyKGRpci5wYXRoKTtcbiAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNvbnRyb2woZGlyLm5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5hZGRGb3JtR3JvdXAoZGlyOiBOZ01vZGVsR3JvdXApOiB2b2lkIHtcbiAgICByZXNvbHZlZFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGNvbnRhaW5lciA9IHRoaXMuX2ZpbmRDb250YWluZXIoZGlyLnBhdGgpO1xuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBncm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgICAgc2V0VXBGb3JtQ29udGFpbmVyKGdyb3VwLCBkaXIpO1xuICAgICAgY29udGFpbmVyLnJlZ2lzdGVyQ29udHJvbChkaXIubmFtZSwgZ3JvdXApO1xuICAgICAgZ3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7ZW1pdEV2ZW50OiBmYWxzZX0pO1xuICAgIH0pO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZW1vdmVGb3JtR3JvdXAoZGlyOiBOZ01vZGVsR3JvdXApOiB2b2lkIHtcbiAgICByZXNvbHZlZFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGNvbnRhaW5lciA9IHRoaXMuX2ZpbmRDb250YWluZXIoZGlyLnBhdGgpO1xuICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ29udHJvbChkaXIubmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldEZvcm1Hcm91cChkaXI6IE5nTW9kZWxHcm91cCk6IEZvcm1Hcm91cCB7IHJldHVybiAvKiogQHR5cGUgez99ICovKCggPEZvcm1Hcm91cD50aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSkpOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG51cGRhdGVNb2RlbChkaXI6IE5nQ29udHJvbCwgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY3RybCA9IC8qKiBAdHlwZSB7P30gKi8oKCA8Rm9ybUNvbnRyb2w+dGhpcy5mb3JtLmdldChkaXIucGF0aCkpKTtcbiAgICAgIGN0cmwuc2V0VmFsdWUodmFsdWUpO1xuICAgIH0pO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldFZhbHVlKHZhbHVlOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHZvaWQgeyB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gJGV2ZW50XG4gKiBAcmV0dXJuIHs/fVxuICovXG5vblN1Ym1pdCgkZXZlbnQ6IEV2ZW50KTogYm9vbGVhbiB7XG4gICAgdGhpcy5fc3VibWl0dGVkID0gdHJ1ZTtcbiAgICB0aGlzLm5nU3VibWl0LmVtaXQoJGV2ZW50KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xub25SZXNldCgpOiB2b2lkIHsgdGhpcy5yZXNldEZvcm0oKTsgfVxuLyoqXG4gKiBAcGFyYW0gez89fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xucmVzZXRGb3JtKHZhbHVlOiBhbnkgPSB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0ucmVzZXQodmFsdWUpO1xuICAgIHRoaXMuX3N1Ym1pdHRlZCA9IGZhbHNlO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IHBhdGhcbiAqIEByZXR1cm4gez99XG4gKi9cbl9maW5kQ29udGFpbmVyKHBhdGg6IHN0cmluZ1tdKTogRm9ybUdyb3VwIHtcbiAgICBwYXRoLnBvcCgpO1xuICAgIHJldHVybiBwYXRoLmxlbmd0aCA/IC8qKiBAdHlwZSB7P30gKi8oKCA8Rm9ybUdyb3VwPnRoaXMuZm9ybS5nZXQocGF0aCkpKSA6IHRoaXMuZm9ybTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjogJ2Zvcm06bm90KFtuZ05vRm9ybV0pOm5vdChbZm9ybUdyb3VwXSksbmdGb3JtLFtuZ0Zvcm1dJyxcbiAgcHJvdmlkZXJzOiBbZm9ybURpcmVjdGl2ZVByb3ZpZGVyXSxcbiAgaG9zdDogeycoc3VibWl0KSc6ICdvblN1Ym1pdCgkZXZlbnQpJywgJyhyZXNldCknOiAnb25SZXNldCgpJ30sXG4gIG91dHB1dHM6IFsnbmdTdWJtaXQnXSxcbiAgZXhwb3J0QXM6ICduZ0Zvcm0nXG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLCBdIH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLCBdIH0sIF19LFxuXTtcbn1cblxuZnVuY3Rpb24gTmdGb3JtX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5OZ0Zvcm0uZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5OZ0Zvcm0uY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5OZ0Zvcm0ucHJvdG90eXBlLl9zdWJtaXR0ZWQ7XG4vKiogQHR5cGUgez99ICovXG5OZ0Zvcm0ucHJvdG90eXBlLmZvcm07XG4vKiogQHR5cGUgez99ICovXG5OZ0Zvcm0ucHJvdG90eXBlLm5nU3VibWl0O1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19mb3JtLnRzIiwiXG4vKipcbiAqIEBsaWNlbnNlIFxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmV4cG9ydCBjb25zdCBGb3JtRXJyb3JFeGFtcGxlcyA9IHtcbiAgZm9ybUNvbnRyb2xOYW1lOiBgXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cIm15R3JvdXBcIj5cbiAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdE5hbWVcIj5cbiAgICA8L2Rpdj5cblxuICAgIEluIHlvdXIgY2xhc3M6XG5cbiAgICB0aGlzLm15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICBmaXJzdE5hbWU6IG5ldyBGb3JtQ29udHJvbCgpXG4gICAgfSk7YCxcblxuICBmb3JtR3JvdXBOYW1lOiBgXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cIm15R3JvdXBcIj5cbiAgICAgICA8ZGl2IGZvcm1Hcm91cE5hbWU9XCJwZXJzb25cIj5cbiAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3ROYW1lXCI+XG4gICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICBJbiB5b3VyIGNsYXNzOlxuXG4gICAgdGhpcy5teUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgcGVyc29uOiBuZXcgRm9ybUdyb3VwKHsgZmlyc3ROYW1lOiBuZXcgRm9ybUNvbnRyb2woKSB9KVxuICAgIH0pO2AsXG5cbiAgZm9ybUFycmF5TmFtZTogYFxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJteUdyb3VwXCI+XG4gICAgICA8ZGl2IGZvcm1BcnJheU5hbWU9XCJjaXRpZXNcIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY2l0eSBvZiBjaXR5QXJyYXkuY29udHJvbHM7IGluZGV4IGFzIGlcIj5cbiAgICAgICAgICA8aW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XCJpXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICBJbiB5b3VyIGNsYXNzOlxuXG4gICAgdGhpcy5jaXR5QXJyYXkgPSBuZXcgRm9ybUFycmF5KFtuZXcgRm9ybUNvbnRyb2woJ1NGJyldKTtcbiAgICB0aGlzLm15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIGNpdGllczogdGhpcy5jaXR5QXJyYXlcbiAgICB9KTtgLFxuXG4gIG5nTW9kZWxHcm91cDogYFxuICAgIDxmb3JtPlxuICAgICAgIDxkaXYgbmdNb2RlbEdyb3VwPVwicGVyc29uXCI+XG4gICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwicGVyc29uLm5hbWVcIiBuYW1lPVwiZmlyc3ROYW1lXCI+XG4gICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPmAsXG5cbiAgbmdNb2RlbFdpdGhGb3JtR3JvdXA6IGBcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwibXlHcm91cFwiPlxuICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdE5hbWVcIj5cbiAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJzaG93TW9yZUNvbnRyb2xzXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgIDwvZGl2PlxuICBgXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL2Vycm9yX2V4YW1wbGVzLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7Rm9ybUVycm9yRXhhbXBsZXMgYXMgRXhhbXBsZXN9IGZyb20gJy4vZXJyb3JfZXhhbXBsZXMnO1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRHJpdmVuRXJyb3JzIHtcbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIG1vZGVsUGFyZW50RXhjZXB0aW9uKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAgICBuZ01vZGVsIGNhbm5vdCBiZSB1c2VkIHRvIHJlZ2lzdGVyIGZvcm0gY29udHJvbHMgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgVHJ5IHVzaW5nXG4gICAgICBmb3JtR3JvdXAncyBwYXJ0bmVyIGRpcmVjdGl2ZSBcImZvcm1Db250cm9sTmFtZVwiIGluc3RlYWQuICBFeGFtcGxlOlxuXG4gICAgICAke0V4YW1wbGVzLmZvcm1Db250cm9sTmFtZX1cblxuICAgICAgT3IsIGlmIHlvdSdkIGxpa2UgdG8gYXZvaWQgcmVnaXN0ZXJpbmcgdGhpcyBmb3JtIGNvbnRyb2wsIGluZGljYXRlIHRoYXQgaXQncyBzdGFuZGFsb25lIGluIG5nTW9kZWxPcHRpb25zOlxuXG4gICAgICBFeGFtcGxlOlxuXG4gICAgICAke0V4YW1wbGVzLm5nTW9kZWxXaXRoRm9ybUdyb3VwfWApO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBmb3JtR3JvdXBOYW1lRXhjZXB0aW9uKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAgICBuZ01vZGVsIGNhbm5vdCBiZSB1c2VkIHRvIHJlZ2lzdGVyIGZvcm0gY29udHJvbHMgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXBOYW1lIG9yIGZvcm1BcnJheU5hbWUgZGlyZWN0aXZlLlxuXG4gICAgICBPcHRpb24gMTogVXNlIGZvcm1Db250cm9sTmFtZSBpbnN0ZWFkIG9mIG5nTW9kZWwgKHJlYWN0aXZlIHN0cmF0ZWd5KTpcblxuICAgICAgJHtFeGFtcGxlcy5mb3JtR3JvdXBOYW1lfVxuXG4gICAgICBPcHRpb24gMjogIFVwZGF0ZSBuZ01vZGVsJ3MgcGFyZW50IGJlIG5nTW9kZWxHcm91cCAodGVtcGxhdGUtZHJpdmVuIHN0cmF0ZWd5KTpcblxuICAgICAgJHtFeGFtcGxlcy5uZ01vZGVsR3JvdXB9YCk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIG1pc3NpbmdOYW1lRXhjZXB0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYElmIG5nTW9kZWwgaXMgdXNlZCB3aXRoaW4gYSBmb3JtIHRhZywgZWl0aGVyIHRoZSBuYW1lIGF0dHJpYnV0ZSBtdXN0IGJlIHNldCBvciB0aGUgZm9ybVxuICAgICAgY29udHJvbCBtdXN0IGJlIGRlZmluZWQgYXMgJ3N0YW5kYWxvbmUnIGluIG5nTW9kZWxPcHRpb25zLlxuXG4gICAgICBFeGFtcGxlIDE6IDxpbnB1dCBbKG5nTW9kZWwpXT1cInBlcnNvbi5maXJzdE5hbWVcIiBuYW1lPVwiZmlyc3RcIj5cbiAgICAgIEV4YW1wbGUgMjogPGlucHV0IFsobmdNb2RlbCldPVwicGVyc29uLmZpcnN0TmFtZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5gKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgbW9kZWxHcm91cFBhcmVudEV4Y2VwdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgbmdNb2RlbEdyb3VwIGNhbm5vdCBiZSB1c2VkIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS5cblxuICAgICAgT3B0aW9uIDE6IFVzZSBmb3JtR3JvdXBOYW1lIGluc3RlYWQgb2YgbmdNb2RlbEdyb3VwIChyZWFjdGl2ZSBzdHJhdGVneSk6XG5cbiAgICAgICR7RXhhbXBsZXMuZm9ybUdyb3VwTmFtZX1cblxuICAgICAgT3B0aW9uIDI6ICBVc2UgYSByZWd1bGFyIGZvcm0gdGFnIGluc3RlYWQgb2YgdGhlIGZvcm1Hcm91cCBkaXJlY3RpdmUgKHRlbXBsYXRlLWRyaXZlbiBzdHJhdGVneSk6XG5cbiAgICAgICR7RXhhbXBsZXMubmdNb2RlbEdyb3VwfWApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvdGVtcGxhdGVfZHJpdmVuX2Vycm9ycy50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgSG9zdCwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsLCBTZWxmLCBTa2lwU2VsZiwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7TkdfQVNZTkNfVkFMSURBVE9SUywgTkdfVkFMSURBVE9SU30gZnJvbSAnLi4vdmFsaWRhdG9ycyc7XG5cbmltcG9ydCB7QWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3RfZm9ybV9ncm91cF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtDb250cm9sQ29udGFpbmVyfSBmcm9tICcuL2NvbnRyb2xfY29udGFpbmVyJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICcuL25nX2Zvcm0nO1xuaW1wb3J0IHtUZW1wbGF0ZURyaXZlbkVycm9yc30gZnJvbSAnLi90ZW1wbGF0ZV9kcml2ZW5fZXJyb3JzJztcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gbW9kZWxHcm91cFByb3ZpZGVyOiBhbnkgPSB7XG4gIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nTW9kZWxHcm91cClcbn07XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgQ3JlYXRlcyBhbmQgYmluZHMgYSB7XFxAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIHRvIGEgRE9NIGVsZW1lbnQuXG4gKiBcbiAqIFxcQGhvd1RvVXNlIFxuICogXG4gKiBUaGlzIGRpcmVjdGl2ZSBjYW4gb25seSBiZSB1c2VkIGFzIGEgY2hpbGQgb2Yge1xcQGxpbmsgTmdGb3JtfSAob3IgaW4gb3RoZXIgd29yZHMsXG4gKiB3aXRoaW4gYDxmb3JtPmAgdGFncykuXG4gKiBcbiAqIFVzZSB0aGlzIGRpcmVjdGl2ZSBpZiB5b3UnZCBsaWtlIHRvIGNyZWF0ZSBhIHN1Yi1ncm91cCB3aXRoaW4gYSBmb3JtLiBUaGlzIGNhblxuICogY29tZSBpbiBoYW5keSBpZiB5b3Ugd2FudCB0byB2YWxpZGF0ZSBhIHN1Yi1ncm91cCBvZiB5b3VyIGZvcm0gc2VwYXJhdGVseSBmcm9tXG4gKiB0aGUgcmVzdCBvZiB5b3VyIGZvcm0sIG9yIGlmIHNvbWUgdmFsdWVzIGluIHlvdXIgZG9tYWluIG1vZGVsIG1ha2UgbW9yZSBzZW5zZSB0b1xuICogY29uc3VtZSB0b2dldGhlciBpbiBhIG5lc3RlZCBvYmplY3QuXG4gKiBcbiAqIFBhc3MgaW4gdGhlIG5hbWUgeW91J2QgbGlrZSB0aGlzIHN1Yi1ncm91cCB0byBoYXZlIGFuZCBpdCB3aWxsIGJlY29tZSB0aGUga2V5XG4gKiBmb3IgdGhlIHN1Yi1ncm91cCBpbiB0aGUgZm9ybSdzIGZ1bGwgdmFsdWUuIFlvdSBjYW4gYWxzbyBleHBvcnQgdGhlIGRpcmVjdGl2ZSBpbnRvXG4gKiBhIGxvY2FsIHRlbXBsYXRlIHZhcmlhYmxlIHVzaW5nIGBuZ01vZGVsR3JvdXBgIChleDogYCNteUdyb3VwPVwibmdNb2RlbEdyb3VwXCJgKS5cbiAqIFxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvbmdNb2RlbEdyb3VwL25nX21vZGVsX2dyb3VwX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICogXG4gKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKiBcbiAqICogKipOZ01vZHVsZSoqOiBgRm9ybXNNb2R1bGVgXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgTmdNb2RlbEdyb3VwIGV4dGVuZHMgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICBuYW1lOiBzdHJpbmc7XG4vKipcbiAqIEBwYXJhbSB7P30gcGFyZW50XG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gKi9cbmNvbnN0cnVjdG9yKFxuICAgICAgICBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIsXG4gICAgICAgICB2YWxpZGF0b3JzOiBhbnlbXSxcbiAgICAgICAgIGFzeW5jVmFsaWRhdG9yczogYW55W10pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLl92YWxpZGF0b3JzID0gdmFsaWRhdG9ycztcbiAgICB0aGlzLl9hc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnM7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl9jaGVja1BhcmVudFR5cGUoKTogdm9pZCB7XG4gICAgaWYgKCEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgTmdNb2RlbEdyb3VwKSAmJiAhKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIE5nRm9ybSkpIHtcbiAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLm1vZGVsR3JvdXBQYXJlbnRFeGNlcHRpb24oKTtcbiAgICB9XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tzZWxlY3RvcjogJ1tuZ01vZGVsR3JvdXBdJywgcHJvdmlkZXJzOiBbbW9kZWxHcm91cFByb3ZpZGVyXSwgZXhwb3J0QXM6ICduZ01vZGVsR3JvdXAnfSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBIb3N0IH0sIHsgdHlwZTogU2tpcFNlbGYgfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbiduYW1lJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnbmdNb2RlbEdyb3VwJywgXSB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBOZ01vZGVsR3JvdXBfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbk5nTW9kZWxHcm91cC5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbk5nTW9kZWxHcm91cC5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbk5nTW9kZWxHcm91cC5wcm9wRGVjb3JhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cbk5nTW9kZWxHcm91cC5wcm90b3R5cGUubmFtZTtcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbmdfbW9kZWxfZ3JvdXAudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdCwgSW5qZWN0LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBPdXRwdXQsIFNlbGYsIFNpbXBsZUNoYW5nZXMsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQge05HX0FTWU5DX1ZBTElEQVRPUlMsIE5HX1ZBTElEQVRPUlN9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuXG5pbXBvcnQge0Fic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0X2Zvcm1fZ3JvdXBfZGlyZWN0aXZlJztcbmltcG9ydCB7Q29udHJvbENvbnRhaW5lcn0gZnJvbSAnLi9jb250cm9sX2NvbnRhaW5lcic7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnLi9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7TmdDb250cm9sfSBmcm9tICcuL25nX2NvbnRyb2wnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJy4vbmdfZm9ybSc7XG5pbXBvcnQge05nTW9kZWxHcm91cH0gZnJvbSAnLi9uZ19tb2RlbF9ncm91cCc7XG5pbXBvcnQge2NvbXBvc2VBc3luY1ZhbGlkYXRvcnMsIGNvbXBvc2VWYWxpZGF0b3JzLCBjb250cm9sUGF0aCwgaXNQcm9wZXJ0eVVwZGF0ZWQsIHNlbGVjdFZhbHVlQWNjZXNzb3IsIHNldFVwQ29udHJvbH0gZnJvbSAnLi9zaGFyZWQnO1xuaW1wb3J0IHtUZW1wbGF0ZURyaXZlbkVycm9yc30gZnJvbSAnLi90ZW1wbGF0ZV9kcml2ZW5fZXJyb3JzJztcbmltcG9ydCB7QXN5bmNWYWxpZGF0b3IsIEFzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRvciwgVmFsaWRhdG9yRm59IGZyb20gJy4vdmFsaWRhdG9ycyc7XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIGZvcm1Db250cm9sQmluZGluZzogYW55ID0ge1xuICBwcm92aWRlOiBOZ0NvbnRyb2wsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nTW9kZWwpXG59O1xuXG4vKipcbiAqIGBuZ01vZGVsYCBmb3JjZXMgYW4gYWRkaXRpb25hbCBjaGFuZ2UgZGV0ZWN0aW9uIHJ1biB3aGVuIGl0cyBpbnB1dHMgY2hhbmdlOlxuICogRS5nLjpcbiAqIGBgYFxuICogPGRpdj57e215TW9kZWwudmFsaWR9fTwvZGl2PlxuICogPGlucHV0IFsobmdNb2RlbCldPVwibXlWYWx1ZVwiICNteU1vZGVsPVwibmdNb2RlbFwiPlxuICogYGBgXG4gKiBJLmUuIGBuZ01vZGVsYCBjYW4gZXhwb3J0IGl0c2VsZiBvbiB0aGUgZWxlbWVudCBhbmQgdGhlbiBiZSB1c2VkIGluIHRoZSB0ZW1wbGF0ZS5cbiAqIE5vcm1hbGx5LCB0aGlzIHdvdWxkIHJlc3VsdCBpbiBleHByZXNzaW9ucyBiZWZvcmUgdGhlIGBpbnB1dGAgdGhhdCB1c2UgdGhlIGV4cG9ydGVkIGRpcmVjdGl2ZVxuICogdG8gaGF2ZSBhbmQgb2xkIHZhbHVlIGFzIHRoZXkgaGF2ZSBiZWVuXG4gKiBkaXJ0eSBjaGVja2VkIGJlZm9yZS4gQXMgdGhpcyBpcyBhIHZlcnkgY29tbW9uIGNhc2UgZm9yIGBuZ01vZGVsYCwgd2UgYWRkZWQgdGhpcyBzZWNvbmQgY2hhbmdlXG4gKiBkZXRlY3Rpb24gcnVuLlxuICpcbiAqIE5vdGVzOlxuICogLSB0aGlzIGlzIGp1c3Qgb25lIGV4dHJhIHJ1biBubyBtYXR0ZXIgaG93IG1hbnkgYG5nTW9kZWxgIGhhdmUgYmVlbiBjaGFuZ2VkLlxuICogLSB0aGlzIGlzIGEgZ2VuZXJhbCBwcm9ibGVtIHdoZW4gdXNpbmcgYGV4cG9ydEFzYCBmb3IgZGlyZWN0aXZlcyFcbiAqL1xuY29uc3QgLyoqIEB0eXBlIHs/fSAqLyByZXNvbHZlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgQ3JlYXRlcyBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSBmcm9tIGEgZG9tYWluIG1vZGVsIGFuZCBiaW5kcyBpdFxuICogdG8gYSBmb3JtIGNvbnRyb2wgZWxlbWVudC5cbiAqIFxuICogVGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSB3aWxsIHRyYWNrIHRoZSB2YWx1ZSwgdXNlciBpbnRlcmFjdGlvbiwgYW5kXG4gKiB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbCBhbmQga2VlcCB0aGUgdmlldyBzeW5jZWQgd2l0aCB0aGUgbW9kZWwuIElmIHVzZWRcbiAqIHdpdGhpbiBhIHBhcmVudCBmb3JtLCB0aGUgZGlyZWN0aXZlIHdpbGwgYWxzbyByZWdpc3RlciBpdHNlbGYgd2l0aCB0aGUgZm9ybSBhcyBhIGNoaWxkXG4gKiBjb250cm9sLlxuICogXG4gKiBcXEBob3dUb1VzZSBcbiAqIFxuICogVGhpcyBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgYnkgaXRzZWxmIG9yIGFzIHBhcnQgb2YgYSBsYXJnZXIgZm9ybS4gQWxsIHlvdSBuZWVkIGlzIHRoZVxuICogYG5nTW9kZWxgIHNlbGVjdG9yIHRvIGFjdGl2YXRlIGl0LlxuICogXG4gKiBJdCBhY2NlcHRzIGEgZG9tYWluIG1vZGVsIGFzIGFuIG9wdGlvbmFsIHtcXEBsaW5rIFxcQElucHV0fS4gSWYgeW91IGhhdmUgYSBvbmUtd2F5IGJpbmRpbmdcbiAqIHRvIGBuZ01vZGVsYCB3aXRoIGBbXWAgc3ludGF4LCBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdGhlIGRvbWFpbiBtb2RlbCBpbiB0aGUgY29tcG9uZW50XG4gKiBjbGFzcyB3aWxsIHNldCB0aGUgdmFsdWUgaW4gdGhlIHZpZXcuIElmIHlvdSBoYXZlIGEgdHdvLXdheSBiaW5kaW5nIHdpdGggYFsoKV1gIHN5bnRheFxuICogKGFsc28ga25vd24gYXMgJ2JhbmFuYS1ib3ggc3ludGF4JyksIHRoZSB2YWx1ZSBpbiB0aGUgVUkgd2lsbCBhbHdheXMgYmUgc3luY2VkIGJhY2sgdG9cbiAqIHRoZSBkb21haW4gbW9kZWwgaW4geW91ciBjbGFzcyBhcyB3ZWxsLlxuICogXG4gKiBJZiB5b3Ugd2lzaCB0byBpbnNwZWN0IHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBhc3NvY2lhdGVkIHtcXEBsaW5rIEZvcm1Db250cm9sfSAobGlrZVxuICogdmFsaWRpdHkgc3RhdGUpLCB5b3UgY2FuIGFsc28gZXhwb3J0IHRoZSBkaXJlY3RpdmUgaW50byBhIGxvY2FsIHRlbXBsYXRlIHZhcmlhYmxlIHVzaW5nXG4gKiBgbmdNb2RlbGAgYXMgdGhlIGtleSAoZXg6IGAjbXlWYXI9XCJuZ01vZGVsXCJgKS4gWW91IGNhbiB0aGVuIGFjY2VzcyB0aGUgY29udHJvbCB1c2luZyB0aGVcbiAqIGRpcmVjdGl2ZSdzIGBjb250cm9sYCBwcm9wZXJ0eSwgYnV0IG1vc3QgcHJvcGVydGllcyB5b3UnbGwgbmVlZCAobGlrZSBgdmFsaWRgIGFuZCBgZGlydHlgKVxuICogd2lsbCBmYWxsIHRocm91Z2ggdG8gdGhlIGNvbnRyb2wgYW55d2F5LCBzbyB5b3UgY2FuIGFjY2VzcyB0aGVtIGRpcmVjdGx5LiBZb3UgY2FuIHNlZSBhXG4gKiBmdWxsIGxpc3Qgb2YgcHJvcGVydGllcyBkaXJlY3RseSBhdmFpbGFibGUgaW4ge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlfS5cbiAqIFxuICogVGhlIGZvbGxvd2luZyBpcyBhbiBleGFtcGxlIG9mIGEgc2ltcGxlIHN0YW5kYWxvbmUgY29udHJvbCB1c2luZyBgbmdNb2RlbGA6XG4gKiBcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3NpbXBsZU5nTW9kZWwvc2ltcGxlX25nX21vZGVsX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICogXG4gKiBXaGVuIHVzaW5nIHRoZSBgbmdNb2RlbGAgd2l0aGluIGA8Zm9ybT5gIHRhZ3MsIHlvdSdsbCBhbHNvIG5lZWQgdG8gc3VwcGx5IGEgYG5hbWVgIGF0dHJpYnV0ZVxuICogc28gdGhhdCB0aGUgY29udHJvbCBjYW4gYmUgcmVnaXN0ZXJlZCB3aXRoIHRoZSBwYXJlbnQgZm9ybSB1bmRlciB0aGF0IG5hbWUuXG4gKiBcbiAqIEl0J3Mgd29ydGggbm90aW5nIHRoYXQgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJlbnQgZm9ybSwgeW91IG9mdGVuIGNhbiBza2lwIG9uZS13YXkgb3JcbiAqIHR3by13YXkgYmluZGluZyBiZWNhdXNlIHRoZSBwYXJlbnQgZm9ybSB3aWxsIHN5bmMgdGhlIHZhbHVlIGZvciB5b3UuIFlvdSBjYW4gYWNjZXNzXG4gKiBpdHMgcHJvcGVydGllcyBieSBleHBvcnRpbmcgaXQgaW50byBhIGxvY2FsIHRlbXBsYXRlIHZhcmlhYmxlIHVzaW5nIGBuZ0Zvcm1gIChleDpcbiAqIGAjZj1cIm5nRm9ybVwiYCkuIFRoZW4geW91IGNhbiBwYXNzIGl0IHdoZXJlIGl0IG5lZWRzIHRvIGdvIG9uIHN1Ym1pdC5cbiAqIFxuICogSWYgeW91IGRvIG5lZWQgdG8gcG9wdWxhdGUgaW5pdGlhbCB2YWx1ZXMgaW50byB5b3VyIGZvcm0sIHVzaW5nIGEgb25lLXdheSBiaW5kaW5nIGZvclxuICogYG5nTW9kZWxgIHRlbmRzIHRvIGJlIHN1ZmZpY2llbnQgYXMgbG9uZyBhcyB5b3UgdXNlIHRoZSBleHBvcnRlZCBmb3JtJ3MgdmFsdWUgcmF0aGVyXG4gKiB0aGFuIHRoZSBkb21haW4gbW9kZWwncyB2YWx1ZSBvbiBzdWJtaXQuXG4gKiBcbiAqIFRha2UgYSBsb29rIGF0IGFuIGV4YW1wbGUgb2YgdXNpbmcgYG5nTW9kZWxgIHdpdGhpbiBhIGZvcm06XG4gKiBcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3NpbXBsZUZvcm0vc2ltcGxlX2Zvcm1fZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gKiBcbiAqIFRvIHNlZSBgbmdNb2RlbGAgZXhhbXBsZXMgd2l0aCBkaWZmZXJlbnQgZm9ybSBjb250cm9sIHR5cGVzLCBzZWU6XG4gKiBcbiAqICogUmFkaW8gYnV0dG9uczoge1xcQGxpbmsgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcn1cbiAqICogU2VsZWN0czoge1xcQGxpbmsgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3J9XG4gKiBcbiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKiBcbiAqICoqTmdNb2R1bGUqKjogYEZvcm1zTW9kdWxlYFxuICogXG4gKiAgXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ01vZGVsIGV4dGVuZHMgTmdDb250cm9sIGltcGxlbWVudHMgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSB7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9jb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9yZWdpc3RlcmVkID0gZmFsc2U7XG4gIHZpZXdNb2RlbDogYW55O1xuXG4gICBuYW1lOiBzdHJpbmc7XG4gICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAgbW9kZWw6IGFueTtcbiAgIG9wdGlvbnM6IHtuYW1lPzogc3RyaW5nLCBzdGFuZGFsb25lPzogYm9vbGVhbn07XG5cbiAgIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbi8qKlxuICogQHBhcmFtIHs/fSBwYXJlbnRcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAqIEBwYXJhbSB7P30gdmFsdWVBY2Nlc3NvcnNcbiAqL1xuY29uc3RydWN0b3IoICBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIsXG4gICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IEFycmF5PFZhbGlkYXRvcnxWYWxpZGF0b3JGbj4sXG4gICAgICAgICAgICAgICAgIGFzeW5jVmFsaWRhdG9yczogQXJyYXk8QXN5bmNWYWxpZGF0b3J8QXN5bmNWYWxpZGF0b3JGbj4sXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHZhbHVlQWNjZXNzb3JzOiBDb250cm9sVmFsdWVBY2Nlc3NvcltdKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmF3VmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMgfHwgW107XG4gICAgICAgICAgICAgICAgdGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVBY2Nlc3NvciA9IHNlbGVjdFZhbHVlQWNjZXNzb3IodGhpcywgdmFsdWVBY2Nlc3NvcnMpO1xuICAgICAgICAgICAgICB9XG4vKipcbiAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICogQHJldHVybiB7P31cbiAqL1xubmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrRm9yRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9yZWdpc3RlcmVkKSB0aGlzLl9zZXRVcENvbnRyb2woKTtcbiAgICAgICAgICAgICAgICBpZiAoJ2lzRGlzYWJsZWQnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURpc2FibGVkKGNoYW5nZXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzLCB0aGlzLnZpZXdNb2RlbCkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlKHRoaXMubW9kZWwpO1xuICAgICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwgPSB0aGlzLm1vZGVsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uRGVzdHJveSgpOiB2b2lkIHsgdGhpcy5mb3JtRGlyZWN0aXZlICYmIHRoaXMuZm9ybURpcmVjdGl2ZS5yZW1vdmVDb250cm9sKHRoaXMpOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBjb250cm9sKCk6IEZvcm1Db250cm9sIHsgcmV0dXJuIHRoaXMuX2NvbnRyb2w7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHBhdGgoKTogc3RyaW5nW10ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQgPyBjb250cm9sUGF0aCh0aGlzLm5hbWUsIHRoaXMuX3BhcmVudCkgOiBbdGhpcy5uYW1lXTtcbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgZm9ybURpcmVjdGl2ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fcGFyZW50ID8gdGhpcy5fcGFyZW50LmZvcm1EaXJlY3RpdmUgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4geyByZXR1cm4gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fcmF3VmFsaWRhdG9ycyk7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGFzeW5jVmFsaWRhdG9yKCk6IEFzeW5jVmFsaWRhdG9yRm4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyk7XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHBhcmFtIHs/fSBuZXdWYWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xudmlld1RvTW9kZWxVcGRhdGUobmV3VmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdChuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfc2V0VXBDb250cm9sKCk6IHZvaWQge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzU3RhbmRhbG9uZSgpID8gdGhpcy5fc2V0VXBTdGFuZGFsb25lKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLmFkZENvbnRyb2wodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfaXNTdGFuZGFsb25lKCk6IGJvb2xlYW4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5fcGFyZW50IHx8ICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLnN0YW5kYWxvbmUpO1xuICAgICAgICAgICAgICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX3NldFVwU3RhbmRhbG9uZSgpOiB2b2lkIHtcbiAgICAgICAgICAgICAgICBzZXRVcENvbnRyb2wodGhpcy5fY29udHJvbCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfY2hlY2tGb3JFcnJvcnMoKTogdm9pZCB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pc1N0YW5kYWxvbmUoKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tQYXJlbnRUeXBlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrTmFtZSgpO1xuICAgICAgICAgICAgICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2NoZWNrUGFyZW50VHlwZSgpOiB2b2lkIHtcbiAgICAgICAgICAgICAgICBpZiAoISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ01vZGVsR3JvdXApICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5mb3JtR3JvdXBOYW1lRXhjZXB0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ01vZGVsR3JvdXApICYmICEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgTmdGb3JtKSkge1xuICAgICAgICAgICAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMubW9kZWxQYXJlbnRFeGNlcHRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfY2hlY2tOYW1lKCk6IHZvaWQge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLm5hbWUpIHRoaXMubmFtZSA9IHRoaXMub3B0aW9ucy5uYW1lO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pc1N0YW5kYWxvbmUoKSAmJiAhdGhpcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5taXNzaW5nTmFtZUV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF91cGRhdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHsgdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlLCB7ZW1pdFZpZXdUb01vZGVsQ2hhbmdlOiBmYWxzZX0pOyB9KTtcbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGNoYW5nZXNcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX3VwZGF0ZURpc2FibGVkKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGRpc2FibGVkVmFsdWUgPSBjaGFuZ2VzWydpc0Rpc2FibGVkJ10uY3VycmVudFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBpc0Rpc2FibGVkID1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRWYWx1ZSA9PT0gJycgfHwgKGRpc2FibGVkVmFsdWUgJiYgZGlzYWJsZWRWYWx1ZSAhPT0gJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlZFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoaXNEaXNhYmxlZCAmJiAhdGhpcy5jb250cm9sLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC5kaXNhYmxlKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpc0Rpc2FibGVkICYmIHRoaXMuY29udHJvbC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdbbmdNb2RlbF06bm90KFtmb3JtQ29udHJvbE5hbWVdKTpub3QoW2Zvcm1Db250cm9sXSknLFxuICBwcm92aWRlcnM6IFtmb3JtQ29udHJvbEJpbmRpbmddLFxuICBleHBvcnRBczogJ25nTW9kZWwnXG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogSG9zdCB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUywgXSB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUywgXSB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfVkFMVUVfQUNDRVNTT1IsIF0gfSwgXX0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbiduYW1lJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2lzRGlzYWJsZWQnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydkaXNhYmxlZCcsIF0gfSxdLFxuJ21vZGVsJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnbmdNb2RlbCcsIF0gfSxdLFxuJ29wdGlvbnMnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyduZ01vZGVsT3B0aW9ucycsIF0gfSxdLFxuJ3VwZGF0ZSc6IFt7IHR5cGU6IE91dHB1dCwgYXJnczogWyduZ01vZGVsQ2hhbmdlJywgXSB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBOZ01vZGVsX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5OZ01vZGVsLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuTmdNb2RlbC5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbk5nTW9kZWwucHJvcERlY29yYXRvcnM7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuTmdNb2RlbC5wcm90b3R5cGUuX2NvbnRyb2w7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuTmdNb2RlbC5wcm90b3R5cGUuX3JlZ2lzdGVyZWQ7XG4vKiogQHR5cGUgez99ICovXG5OZ01vZGVsLnByb3RvdHlwZS52aWV3TW9kZWw7XG4vKiogQHR5cGUgez99ICovXG5OZ01vZGVsLnByb3RvdHlwZS5uYW1lO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdNb2RlbC5wcm90b3R5cGUuaXNEaXNhYmxlZDtcbi8qKiBAdHlwZSB7P30gKi9cbk5nTW9kZWwucHJvdG90eXBlLm1vZGVsO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdNb2RlbC5wcm90b3R5cGUub3B0aW9ucztcbi8qKiBAdHlwZSB7P30gKi9cbk5nTW9kZWwucHJvdG90eXBlLnVwZGF0ZTtcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbmdfbW9kZWwudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuXG5pbXBvcnQge0Zvcm1FcnJvckV4YW1wbGVzIGFzIEV4YW1wbGVzfSBmcm9tICcuL2Vycm9yX2V4YW1wbGVzJztcbmV4cG9ydCBjbGFzcyBSZWFjdGl2ZUVycm9ycyB7XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBjb250cm9sUGFyZW50RXhjZXB0aW9uKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYGZvcm1Db250cm9sTmFtZSBtdXN0IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgWW91J2xsIHdhbnQgdG8gYWRkIGEgZm9ybUdyb3VwXG4gICAgICAgZGlyZWN0aXZlIGFuZCBwYXNzIGl0IGFuIGV4aXN0aW5nIEZvcm1Hcm91cCBpbnN0YW5jZSAoeW91IGNhbiBjcmVhdGUgb25lIGluIHlvdXIgY2xhc3MpLlxuXG4gICAgICBFeGFtcGxlOlxuXG4gICAgICAke0V4YW1wbGVzLmZvcm1Db250cm9sTmFtZX1gKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgbmdNb2RlbEdyb3VwRXhjZXB0aW9uKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYGZvcm1Db250cm9sTmFtZSBjYW5ub3QgYmUgdXNlZCB3aXRoIGFuIG5nTW9kZWxHcm91cCBwYXJlbnQuIEl0IGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHBhcmVudHNcbiAgICAgICB0aGF0IGFsc28gaGF2ZSBhIFwiZm9ybVwiIHByZWZpeDogZm9ybUdyb3VwTmFtZSwgZm9ybUFycmF5TmFtZSwgb3IgZm9ybUdyb3VwLlxuXG4gICAgICAgT3B0aW9uIDE6ICBVcGRhdGUgdGhlIHBhcmVudCB0byBiZSBmb3JtR3JvdXBOYW1lIChyZWFjdGl2ZSBmb3JtIHN0cmF0ZWd5KVxuXG4gICAgICAgICR7RXhhbXBsZXMuZm9ybUdyb3VwTmFtZX1cblxuICAgICAgICBPcHRpb24gMjogVXNlIG5nTW9kZWwgaW5zdGVhZCBvZiBmb3JtQ29udHJvbE5hbWUgKHRlbXBsYXRlLWRyaXZlbiBzdHJhdGVneSlcblxuICAgICAgICAke0V4YW1wbGVzLm5nTW9kZWxHcm91cH1gKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgbWlzc2luZ0Zvcm1FeGNlcHRpb24oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBmb3JtR3JvdXAgZXhwZWN0cyBhIEZvcm1Hcm91cCBpbnN0YW5jZS4gUGxlYXNlIHBhc3Mgb25lIGluLlxuXG4gICAgICAgRXhhbXBsZTpcblxuICAgICAgICR7RXhhbXBsZXMuZm9ybUNvbnRyb2xOYW1lfWApO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBncm91cFBhcmVudEV4Y2VwdGlvbigpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBmb3JtR3JvdXBOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcbiAgICAgIGRpcmVjdGl2ZSBhbmQgcGFzcyBpdCBhbiBleGlzdGluZyBGb3JtR3JvdXAgaW5zdGFuY2UgKHlvdSBjYW4gY3JlYXRlIG9uZSBpbiB5b3VyIGNsYXNzKS5cblxuICAgICAgRXhhbXBsZTpcblxuICAgICAgJHtFeGFtcGxlcy5mb3JtR3JvdXBOYW1lfWApO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBhcnJheVBhcmVudEV4Y2VwdGlvbigpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBmb3JtQXJyYXlOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcbiAgICAgICBkaXJlY3RpdmUgYW5kIHBhc3MgaXQgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIGluc3RhbmNlICh5b3UgY2FuIGNyZWF0ZSBvbmUgaW4geW91ciBjbGFzcykuXG5cbiAgICAgICAgRXhhbXBsZTpcblxuICAgICAgICAke0V4YW1wbGVzLmZvcm1BcnJheU5hbWV9YCk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIGRpc2FibGVkQXR0cldhcm5pbmcoKTogdm9pZCB7XG4gICAgY29uc29sZS53YXJuKGBcbiAgICAgIEl0IGxvb2tzIGxpa2UgeW91J3JlIHVzaW5nIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgd2l0aCBhIHJlYWN0aXZlIGZvcm0gZGlyZWN0aXZlLiBJZiB5b3Ugc2V0IGRpc2FibGVkIHRvIHRydWVcbiAgICAgIHdoZW4geW91IHNldCB1cCB0aGlzIGNvbnRyb2wgaW4geW91ciBjb21wb25lbnQgY2xhc3MsIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgd2lsbCBhY3R1YWxseSBiZSBzZXQgaW4gdGhlIERPTSBmb3JcbiAgICAgIHlvdS4gV2UgcmVjb21tZW5kIHVzaW5nIHRoaXMgYXBwcm9hY2ggdG8gYXZvaWQgJ2NoYW5nZWQgYWZ0ZXIgY2hlY2tlZCcgZXJyb3JzLlxuICAgICAgIFxuICAgICAgRXhhbXBsZTogXG4gICAgICBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woe3ZhbHVlOiAnTmFuY3knLCBkaXNhYmxlZDogdHJ1ZX0sIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woJ0RyZXcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuICAgICAgfSk7XG4gICAgYCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yZWFjdGl2ZV9lcnJvcnMudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT25DaGFuZ2VzLCBPcHRpb25hbCwgT3V0cHV0LCBTZWxmLCBTaW1wbGVDaGFuZ2VzLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuaW1wb3J0IHtOR19BU1lOQ19WQUxJREFUT1JTLCBOR19WQUxJREFUT1JTfSBmcm9tICcuLi8uLi92YWxpZGF0b3JzJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICcuLi9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7TmdDb250cm9sfSBmcm9tICcuLi9uZ19jb250cm9sJztcbmltcG9ydCB7UmVhY3RpdmVFcnJvcnN9IGZyb20gJy4uL3JlYWN0aXZlX2Vycm9ycyc7XG5pbXBvcnQge2NvbXBvc2VBc3luY1ZhbGlkYXRvcnMsIGNvbXBvc2VWYWxpZGF0b3JzLCBpc1Byb3BlcnR5VXBkYXRlZCwgc2VsZWN0VmFsdWVBY2Nlc3Nvciwgc2V0VXBDb250cm9sfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvciwgQXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi4vdmFsaWRhdG9ycyc7XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIGZvcm1Db250cm9sQmluZGluZzogYW55ID0ge1xuICBwcm92aWRlOiBOZ0NvbnRyb2wsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZvcm1Db250cm9sRGlyZWN0aXZlKVxufTtcbi8qKlxuICogXFxAd2hhdEl0RG9lcyBTeW5jcyBhIHN0YW5kYWxvbmUge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlIHRvIGEgZm9ybSBjb250cm9sIGVsZW1lbnQuXG4gKiBcbiAqIEluIG90aGVyIHdvcmRzLCB0aGlzIGRpcmVjdGl2ZSBlbnN1cmVzIHRoYXQgYW55IHZhbHVlcyB3cml0dGVuIHRvIHRoZSB7XFxAbGluayBGb3JtQ29udHJvbH1cbiAqIGluc3RhbmNlIHByb2dyYW1tYXRpY2FsbHkgd2lsbCBiZSB3cml0dGVuIHRvIHRoZSBET00gZWxlbWVudCAobW9kZWwgLT4gdmlldykuIENvbnZlcnNlbHksXG4gKiBhbnkgdmFsdWVzIHdyaXR0ZW4gdG8gdGhlIERPTSBlbGVtZW50IHRocm91Z2ggdXNlciBpbnB1dCB3aWxsIGJlIHJlZmxlY3RlZCBpbiB0aGVcbiAqIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSAodmlldyAtPiBtb2RlbCkuXG4gKiBcbiAqIFxcQGhvd1RvVXNlIFxuICogXG4gKiBVc2UgdGhpcyBkaXJlY3RpdmUgaWYgeW91J2QgbGlrZSB0byBjcmVhdGUgYW5kIG1hbmFnZSBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSBkaXJlY3RseS5cbiAqIFNpbXBseSBjcmVhdGUgYSB7XFxAbGluayBGb3JtQ29udHJvbH0sIHNhdmUgaXQgdG8geW91ciBjb21wb25lbnQgY2xhc3MsIGFuZCBwYXNzIGl0IGludG8gdGhlXG4gKiB7XFxAbGluayBGb3JtQ29udHJvbERpcmVjdGl2ZX0uXG4gKiBcbiAqIFRoaXMgZGlyZWN0aXZlIGlzIGRlc2lnbmVkIHRvIGJlIHVzZWQgYXMgYSBzdGFuZGFsb25lIGNvbnRyb2wuICBVbmxpa2Uge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfSxcbiAqIGl0IGRvZXMgbm90IHJlcXVpcmUgdGhhdCB5b3VyIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSBiZSBwYXJ0IG9mIGFueSBwYXJlbnRcbiAqIHtcXEBsaW5rIEZvcm1Hcm91cH0sIGFuZCBpdCB3b24ndCBiZSByZWdpc3RlcmVkIHRvIGFueSB7XFxAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9IHRoYXRcbiAqIGV4aXN0cyBhYm92ZSBpdC5cbiAqIFxuICogKipHZXQgdGhlIHZhbHVlKio6IHRoZSBgdmFsdWVgIHByb3BlcnR5IGlzIGFsd2F5cyBzeW5jZWQgYW5kIGF2YWlsYWJsZSBvbiB0aGVcbiAqIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZS4gU2VlIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBwcm9wZXJ0aWVzIGluXG4gKiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9LlxuICogXG4gKiAqKlNldCB0aGUgdmFsdWUqKjogWW91IGNhbiBwYXNzIGluIGFuIGluaXRpYWwgdmFsdWUgd2hlbiBpbnN0YW50aWF0aW5nIHRoZSB7XFxAbGluayBGb3JtQ29udHJvbH0sXG4gKiBvciB5b3UgY2FuIHNldCBpdCBwcm9ncmFtbWF0aWNhbGx5IGxhdGVyIHVzaW5nIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zZXRWYWx1ZX0gb3JcbiAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5wYXRjaFZhbHVlfS5cbiAqIFxuICogKipMaXN0ZW4gdG8gdmFsdWUqKjogSWYgeW91IHdhbnQgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLCB5b3UgY2FuXG4gKiBzdWJzY3JpYmUgdG8gdGhlIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnN0YXR1c0NoYW5nZXN9IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb24gc3RhdHVzIGlzXG4gKiByZS1jYWxjdWxhdGVkLlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtQ29udHJvbC9zaW1wbGVfZm9ybV9jb250cm9sX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICogXG4gKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKiBcbiAqICogKipOZ01vZHVsZSoqOiBgUmVhY3RpdmVGb3Jtc01vZHVsZWBcbiAqIFxuICogIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xEaXJlY3RpdmUgZXh0ZW5kcyBOZ0NvbnRyb2wgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICB2aWV3TW9kZWw6IGFueTtcblxuICAgZm9ybTogRm9ybUNvbnRyb2w7XG4gICBtb2RlbDogYW55O1xuICAgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuLyoqXG4gKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldCBpc0Rpc2FibGVkKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHsgUmVhY3RpdmVFcnJvcnMuZGlzYWJsZWRBdHRyV2FybmluZygpOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAqIEBwYXJhbSB7P30gdmFsdWVBY2Nlc3NvcnNcbiAqL1xuY29uc3RydWN0b3IoICAgdmFsaWRhdG9yczogQXJyYXk8VmFsaWRhdG9yfFZhbGlkYXRvckZuPixcbiAgICAgICAgICAgICAgICAgYXN5bmNWYWxpZGF0b3JzOiBBcnJheTxBc3luY1ZhbGlkYXRvcnxBc3luY1ZhbGlkYXRvckZuPixcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgdmFsdWVBY2Nlc3NvcnM6IENvbnRyb2xWYWx1ZUFjY2Vzc29yW10pIHtcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jhd1ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlQWNjZXNzb3IgPSBzZWxlY3RWYWx1ZUFjY2Vzc29yKHRoaXMsIHZhbHVlQWNjZXNzb3JzKTtcbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGNoYW5nZXNcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNDb250cm9sQ2hhbmdlZChjaGFuZ2VzKSkge1xuICAgICAgICAgICAgICAgICAgc2V0VXBDb250cm9sKHRoaXMuZm9ybSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250cm9sLmRpc2FibGVkICYmIHRoaXMudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe2VtaXRFdmVudDogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHRoaXMudmlld01vZGVsKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKHRoaXMubW9kZWwpO1xuICAgICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwgPSB0aGlzLm1vZGVsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcGF0aCgpOiBzdHJpbmdbXSB7IHJldHVybiBbXTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHsgcmV0dXJuIGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3Jhd1ZhbGlkYXRvcnMpOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBhc3luY1ZhbGlkYXRvcigpOiBBc3luY1ZhbGlkYXRvckZuIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBjb250cm9sKCk6IEZvcm1Db250cm9sIHsgcmV0dXJuIHRoaXMuZm9ybTsgfVxuLyoqXG4gKiBAcGFyYW0gez99IG5ld1ZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG52aWV3VG9Nb2RlbFVwZGF0ZShuZXdWYWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGNoYW5nZXNcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2lzQ29udHJvbENoYW5nZWQoY2hhbmdlczoge1trZXk6IHN0cmluZ106IGFueX0pOiBib29sZWFuIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZm9ybScpO1xuICAgICAgICAgICAgICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7c2VsZWN0b3I6ICdbZm9ybUNvbnRyb2xdJywgcHJvdmlkZXJzOiBbZm9ybUNvbnRyb2xCaW5kaW5nXSwgZXhwb3J0QXM6ICduZ0Zvcm0nfSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUywgXSB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUywgXSB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfVkFMVUVfQUNDRVNTT1IsIF0gfSwgXX0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidmb3JtJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnZm9ybUNvbnRyb2wnLCBdIH0sXSxcbidtb2RlbCc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ25nTW9kZWwnLCBdIH0sXSxcbid1cGRhdGUnOiBbeyB0eXBlOiBPdXRwdXQsIGFyZ3M6IFsnbmdNb2RlbENoYW5nZScsIF0gfSxdLFxuJ2lzRGlzYWJsZWQnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydkaXNhYmxlZCcsIF0gfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gRm9ybUNvbnRyb2xEaXJlY3RpdmVfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Db250cm9sRGlyZWN0aXZlLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuRm9ybUNvbnRyb2xEaXJlY3RpdmUuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQ29udHJvbERpcmVjdGl2ZS5wcm9wRGVjb3JhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZS52aWV3TW9kZWw7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUuZm9ybTtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZS5tb2RlbDtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZS51cGRhdGU7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX2RpcmVjdGl2ZS50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIE9wdGlvbmFsLCBPdXRwdXQsIFNlbGYsIFNpbXBsZUNoYW5nZXMsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQXJyYXksIEZvcm1Db250cm9sLCBGb3JtR3JvdXB9IGZyb20gJy4uLy4uL21vZGVsJztcbmltcG9ydCB7TkdfQVNZTkNfVkFMSURBVE9SUywgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yc30gZnJvbSAnLi4vLi4vdmFsaWRhdG9ycyc7XG5pbXBvcnQge0NvbnRyb2xDb250YWluZXJ9IGZyb20gJy4uL2NvbnRyb2xfY29udGFpbmVyJztcbmltcG9ydCB7Rm9ybX0gZnJvbSAnLi4vZm9ybV9pbnRlcmZhY2UnO1xuaW1wb3J0IHtSZWFjdGl2ZUVycm9yc30gZnJvbSAnLi4vcmVhY3RpdmVfZXJyb3JzJztcbmltcG9ydCB7Y2xlYW5VcENvbnRyb2wsIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnMsIGNvbXBvc2VWYWxpZGF0b3JzLCBzZXRVcENvbnRyb2wsIHNldFVwRm9ybUNvbnRhaW5lcn0gZnJvbSAnLi4vc2hhcmVkJztcblxuaW1wb3J0IHtGb3JtQ29udHJvbE5hbWV9IGZyb20gJy4vZm9ybV9jb250cm9sX25hbWUnO1xuaW1wb3J0IHtGb3JtQXJyYXlOYW1lLCBGb3JtR3JvdXBOYW1lfSBmcm9tICcuL2Zvcm1fZ3JvdXBfbmFtZSc7XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIGZvcm1EaXJlY3RpdmVQcm92aWRlcjogYW55ID0ge1xuICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGb3JtR3JvdXBEaXJlY3RpdmUpXG59O1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIEJpbmRzIGFuIGV4aXN0aW5nIHtcXEBsaW5rIEZvcm1Hcm91cH0gdG8gYSBET00gZWxlbWVudC5cbiAqIFxuICogXFxAaG93VG9Vc2UgXG4gKiBcbiAqIFRoaXMgZGlyZWN0aXZlIGFjY2VwdHMgYW4gZXhpc3Rpbmcge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZS4gSXQgd2lsbCB0aGVuIHVzZSB0aGlzXG4gKiB7XFxAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIHRvIG1hdGNoIGFueSBjaGlsZCB7XFxAbGluayBGb3JtQ29udHJvbH0sIHtcXEBsaW5rIEZvcm1Hcm91cH0sXG4gKiBhbmQge1xcQGxpbmsgRm9ybUFycmF5fSBpbnN0YW5jZXMgdG8gY2hpbGQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfSwge1xcQGxpbmsgRm9ybUdyb3VwTmFtZX0sXG4gKiBhbmQge1xcQGxpbmsgRm9ybUFycmF5TmFtZX0gZGlyZWN0aXZlcy5cbiAqIFxuICogKipTZXQgdmFsdWUqKjogWW91IGNhbiBzZXQgdGhlIGZvcm0ncyBpbml0aWFsIHZhbHVlIHdoZW4gaW5zdGFudGlhdGluZyB0aGVcbiAqIHtcXEBsaW5rIEZvcm1Hcm91cH0sIG9yIHlvdSBjYW4gc2V0IGl0IHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmcgdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0nc1xuICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnNldFZhbHVlfSBvciB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX0gbWV0aG9kcy5cbiAqIFxuICogKipMaXN0ZW4gdG8gdmFsdWUqKjogSWYgeW91IHdhbnQgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHZhbHVlIG9mIHRoZSBmb3JtLCB5b3UgY2FuIHN1YnNjcmliZVxuICogdG8gdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0ncyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wudmFsdWVDaGFuZ2VzfSBldmVudC4gIFlvdSBjYW4gYWxzbyBsaXN0ZW4gdG9cbiAqIGl0cyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzQ2hhbmdlc30gZXZlbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgaXNcbiAqIHJlLWNhbGN1bGF0ZWQuXG4gKiBcbiAqIEZ1cnRoZXJtb3JlLCB5b3UgY2FuIGxpc3RlbiB0byB0aGUgZGlyZWN0aXZlJ3MgYG5nU3VibWl0YCBldmVudCB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB1c2VyIGhhc1xuICogdHJpZ2dlcmVkIGEgZm9ybSBzdWJtaXNzaW9uLiBUaGUgYG5nU3VibWl0YCBldmVudCB3aWxsIGJlIGVtaXR0ZWQgd2l0aCB0aGUgb3JpZ2luYWwgZm9ybVxuICogc3VibWlzc2lvbiBldmVudC5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICogSW4gdGhpcyBleGFtcGxlLCB3ZSBjcmVhdGUgZm9ybSBjb250cm9scyBmb3IgZmlyc3QgbmFtZSBhbmQgbGFzdCBuYW1lLlxuICogXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtR3JvdXAvc2ltcGxlX2Zvcm1fZ3JvdXBfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gKiBcbiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKiBcbiAqICoqTmdNb2R1bGUqKjoge1xcQGxpbmsgUmVhY3RpdmVGb3Jtc01vZHVsZX1cbiAqIFxuICogIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwRGlyZWN0aXZlIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciBpbXBsZW1lbnRzIEZvcm0sXG4gICAgT25DaGFuZ2VzIHtcbnByaXZhdGUgX3N1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xucHJpdmF0ZSBfb2xkRm9ybTogRm9ybUdyb3VwO1xuICBkaXJlY3RpdmVzOiBGb3JtQ29udHJvbE5hbWVbXSA9IFtdO1xuXG4gICBmb3JtOiBGb3JtR3JvdXAgPSBudWxsO1xuICAgbmdTdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4vKipcbiAqIEBwYXJhbSB7P30gX3ZhbGlkYXRvcnNcbiAqIEBwYXJhbSB7P30gX2FzeW5jVmFsaWRhdG9yc1xuICovXG5jb25zdHJ1Y3RvcihcbnByaXZhdGUgX3ZhbGlkYXRvcnM6IGFueVtdLFxucHJpdmF0ZSBfYXN5bmNWYWxpZGF0b3JzOiBhbnlbXSkge1xuICAgIHN1cGVyKCk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5fY2hlY2tGb3JtUHJlc2VudCgpO1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdmb3JtJykpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVZhbGlkYXRvcnMoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZURvbVZhbHVlKCk7XG4gICAgICB0aGlzLl91cGRhdGVSZWdpc3RyYXRpb25zKCk7XG4gICAgfVxuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBzdWJtaXR0ZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9zdWJtaXR0ZWQ7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGZvcm1EaXJlY3RpdmUoKTogRm9ybSB7IHJldHVybiB0aGlzOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBjb250cm9sKCk6IEZvcm1Hcm91cCB7IHJldHVybiB0aGlzLmZvcm07IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHBhdGgoKTogc3RyaW5nW10geyByZXR1cm4gW107IH1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmFkZENvbnRyb2woZGlyOiBGb3JtQ29udHJvbE5hbWUpOiBGb3JtQ29udHJvbCB7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjdHJsOiBhbnkgPSB0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKTtcbiAgICBzZXRVcENvbnRyb2woY3RybCwgZGlyKTtcbiAgICBjdHJsLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe2VtaXRFdmVudDogZmFsc2V9KTtcbiAgICB0aGlzLmRpcmVjdGl2ZXMucHVzaChkaXIpO1xuICAgIHJldHVybiBjdHJsO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXRDb250cm9sKGRpcjogRm9ybUNvbnRyb2xOYW1lKTogRm9ybUNvbnRyb2wgeyByZXR1cm4gLyoqIEB0eXBlIHs/fSAqLygoIDxGb3JtQ29udHJvbD50aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSkpOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZW1vdmVDb250cm9sKGRpcjogRm9ybUNvbnRyb2xOYW1lKTogdm9pZCB7IHJlbW92ZSh0aGlzLmRpcmVjdGl2ZXMsIGRpcik7IH1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmFkZEZvcm1Hcm91cChkaXI6IEZvcm1Hcm91cE5hbWUpOiB2b2lkIHtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGN0cmw6IGFueSA9IHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpO1xuICAgIHNldFVwRm9ybUNvbnRhaW5lcihjdHJsLCBkaXIpO1xuICAgIGN0cmwudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7ZW1pdEV2ZW50OiBmYWxzZX0pO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZW1vdmVGb3JtR3JvdXAoZGlyOiBGb3JtR3JvdXBOYW1lKTogdm9pZCB7fVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0Rm9ybUdyb3VwKGRpcjogRm9ybUdyb3VwTmFtZSk6IEZvcm1Hcm91cCB7IHJldHVybiAvKiogQHR5cGUgez99ICovKCggPEZvcm1Hcm91cD50aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSkpOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5hZGRGb3JtQXJyYXkoZGlyOiBGb3JtQXJyYXlOYW1lKTogdm9pZCB7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjdHJsOiBhbnkgPSB0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKTtcbiAgICBzZXRVcEZvcm1Db250YWluZXIoY3RybCwgZGlyKTtcbiAgICBjdHJsLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe2VtaXRFdmVudDogZmFsc2V9KTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xucmVtb3ZlRm9ybUFycmF5KGRpcjogRm9ybUFycmF5TmFtZSk6IHZvaWQge31cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldEZvcm1BcnJheShkaXI6IEZvcm1BcnJheU5hbWUpOiBGb3JtQXJyYXkgeyByZXR1cm4gLyoqIEB0eXBlIHs/fSAqLygoIDxGb3JtQXJyYXk+dGhpcy5mb3JtLmdldChkaXIucGF0aCkpKTsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xudXBkYXRlTW9kZWwoZGlyOiBGb3JtQ29udHJvbE5hbWUsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGN0cmzCoCA9IC8qKiBAdHlwZSB7P30gKi8oKCA8Rm9ybUNvbnRyb2w+dGhpcy5mb3JtLmdldChkaXIucGF0aCkpKTtcbiAgICBjdHJsLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99ICRldmVudFxuICogQHJldHVybiB7P31cbiAqL1xub25TdWJtaXQoJGV2ZW50OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuX3N1Ym1pdHRlZCA9IHRydWU7XG4gICAgdGhpcy5uZ1N1Ym1pdC5lbWl0KCRldmVudCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbm9uUmVzZXQoKTogdm9pZCB7IHRoaXMucmVzZXRGb3JtKCk7IH1cbi8qKlxuICogQHBhcmFtIHs/PX0gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlc2V0Rm9ybSh2YWx1ZTogYW55ID0gdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtLnJlc2V0KHZhbHVlKTtcbiAgICB0aGlzLl9zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX3VwZGF0ZURvbVZhbHVlKCkge1xuICAgIHRoaXMuZGlyZWN0aXZlcy5mb3JFYWNoKGRpciA9PiB7XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIG5ld0N0cmw6IGFueSA9IHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpO1xuICAgICAgaWYgKGRpci5fY29udHJvbCAhPT0gbmV3Q3RybCkge1xuICAgICAgICBjbGVhblVwQ29udHJvbChkaXIuX2NvbnRyb2wsIGRpcik7XG4gICAgICAgIGlmIChuZXdDdHJsKSBzZXRVcENvbnRyb2wobmV3Q3RybCwgZGlyKTtcbiAgICAgICAgZGlyLl9jb250cm9sID0gbmV3Q3RybDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZm9ybS5fdXBkYXRlVHJlZVZhbGlkaXR5KHtlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfdXBkYXRlUmVnaXN0cmF0aW9ucygpIHtcbiAgICB0aGlzLmZvcm0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKCgpID0+IHRoaXMuX3VwZGF0ZURvbVZhbHVlKCkpO1xuICAgIGlmICh0aGlzLl9vbGRGb3JtKSB0aGlzLl9vbGRGb3JtLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSgoKSA9PiB7fSk7XG4gICAgdGhpcy5fb2xkRm9ybSA9IHRoaXMuZm9ybTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF91cGRhdGVWYWxpZGF0b3JzKCkge1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gc3luYyA9IGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3ZhbGlkYXRvcnMpO1xuICAgIHRoaXMuZm9ybS52YWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2UoW3RoaXMuZm9ybS52YWxpZGF0b3IsIHN5bmNdKTtcblxuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gYXN5bmMgPSBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX2FzeW5jVmFsaWRhdG9ycyk7XG4gICAgdGhpcy5mb3JtLmFzeW5jVmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlQXN5bmMoW3RoaXMuZm9ybS5hc3luY1ZhbGlkYXRvciwgYXN5bmNdKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9jaGVja0Zvcm1QcmVzZW50KCkge1xuICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICBSZWFjdGl2ZUVycm9ycy5taXNzaW5nRm9ybUV4Y2VwdGlvbigpO1xuICAgIH1cbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjogJ1tmb3JtR3JvdXBdJyxcbiAgcHJvdmlkZXJzOiBbZm9ybURpcmVjdGl2ZVByb3ZpZGVyXSxcbiAgaG9zdDogeycoc3VibWl0KSc6ICdvblN1Ym1pdCgkZXZlbnQpJywgJyhyZXNldCknOiAnb25SZXNldCgpJ30sXG4gIGV4cG9ydEFzOiAnbmdGb3JtJ1xufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUywgXSB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUywgXSB9LCBdfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ2Zvcm0nOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydmb3JtR3JvdXAnLCBdIH0sXSxcbiduZ1N1Ym1pdCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBGb3JtR3JvdXBEaXJlY3RpdmVfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Hcm91cERpcmVjdGl2ZS5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbkZvcm1Hcm91cERpcmVjdGl2ZS5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Hcm91cERpcmVjdGl2ZS5wcm9wRGVjb3JhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX3N1Ym1pdHRlZDtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX29sZEZvcm07XG4vKiogQHR5cGUgez99ICovXG5Gb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLmRpcmVjdGl2ZXM7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLmZvcm07XG4vKiogQHR5cGUgez99ICovXG5Gb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLm5nU3VibWl0O1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fdmFsaWRhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX2FzeW5jVmFsaWRhdG9ycztcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHs/fSBsaXN0XG4gKiBAcGFyYW0gez99IGVsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiByZW1vdmU8VD4obGlzdDogVFtdLCBlbDogVCk6IHZvaWQge1xuICBjb25zdCAvKiogQHR5cGUgez99ICovIGluZGV4ID0gbGlzdC5pbmRleE9mKGVsKTtcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9ncm91cF9kaXJlY3RpdmUudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3QsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgU2VsZiwgU2tpcFNlbGYsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Zvcm1BcnJheX0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuaW1wb3J0IHtOR19BU1lOQ19WQUxJREFUT1JTLCBOR19WQUxJREFUT1JTfSBmcm9tICcuLi8uLi92YWxpZGF0b3JzJztcbmltcG9ydCB7QWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmV9IGZyb20gJy4uL2Fic3RyYWN0X2Zvcm1fZ3JvdXBfZGlyZWN0aXZlJztcbmltcG9ydCB7Q29udHJvbENvbnRhaW5lcn0gZnJvbSAnLi4vY29udHJvbF9jb250YWluZXInO1xuaW1wb3J0IHtSZWFjdGl2ZUVycm9yc30gZnJvbSAnLi4vcmVhY3RpdmVfZXJyb3JzJztcbmltcG9ydCB7Y29tcG9zZUFzeW5jVmFsaWRhdG9ycywgY29tcG9zZVZhbGlkYXRvcnMsIGNvbnRyb2xQYXRofSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi4vdmFsaWRhdG9ycyc7XG5cbmltcG9ydCB7Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuL2Zvcm1fZ3JvdXBfZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gZm9ybUdyb3VwTmFtZVByb3ZpZGVyOiBhbnkgPSB7XG4gIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZvcm1Hcm91cE5hbWUpXG59O1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIFN5bmNzIGEgbmVzdGVkIHtcXEBsaW5rIEZvcm1Hcm91cH0gdG8gYSBET00gZWxlbWVudC5cbiAqIFxuICogXFxAaG93VG9Vc2UgXG4gKiBcbiAqIFRoaXMgZGlyZWN0aXZlIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBhIHBhcmVudCB7XFxAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9IChzZWxlY3RvcjpcbiAqIGBbZm9ybUdyb3VwXWApLlxuICogXG4gKiBJdCBhY2NlcHRzIHRoZSBzdHJpbmcgbmFtZSBvZiB0aGUgbmVzdGVkIHtcXEBsaW5rIEZvcm1Hcm91cH0geW91IHdhbnQgdG8gbGluaywgYW5kXG4gKiB3aWxsIGxvb2sgZm9yIGEge1xcQGxpbmsgRm9ybUdyb3VwfSByZWdpc3RlcmVkIHdpdGggdGhhdCBuYW1lIGluIHRoZSBwYXJlbnRcbiAqIHtcXEBsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UgeW91IHBhc3NlZCBpbnRvIHtcXEBsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0uXG4gKiBcbiAqIE5lc3RlZCBmb3JtIGdyb3VwcyBjYW4gY29tZSBpbiBoYW5keSB3aGVuIHlvdSB3YW50IHRvIHZhbGlkYXRlIGEgc3ViLWdyb3VwIG9mIGFcbiAqIGZvcm0gc2VwYXJhdGVseSBmcm9tIHRoZSByZXN0IG9yIHdoZW4geW91J2QgbGlrZSB0byBncm91cCB0aGUgdmFsdWVzIG9mIGNlcnRhaW5cbiAqIGNvbnRyb2xzIGludG8gdGhlaXIgb3duIG5lc3RlZCBvYmplY3QuXG4gKiBcbiAqICoqQWNjZXNzIHRoZSBncm91cCoqOiBZb3UgY2FuIGFjY2VzcyB0aGUgYXNzb2NpYXRlZCB7XFxAbGluayBGb3JtR3JvdXB9IHVzaW5nIHRoZVxuICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLmdldH0gbWV0aG9kLiBFeDogYHRoaXMuZm9ybS5nZXQoJ25hbWUnKWAuXG4gKiBcbiAqIFlvdSBjYW4gYWxzbyBhY2Nlc3MgaW5kaXZpZHVhbCBjb250cm9scyB3aXRoaW4gdGhlIGdyb3VwIHVzaW5nIGRvdCBzeW50YXguXG4gKiBFeDogYHRoaXMuZm9ybS5nZXQoJ25hbWUuZmlyc3QnKWBcbiAqIFxuICogKipHZXQgdGhlIHZhbHVlKio6IHRoZSBgdmFsdWVgIHByb3BlcnR5IGlzIGFsd2F5cyBzeW5jZWQgYW5kIGF2YWlsYWJsZSBvbiB0aGVcbiAqIHtcXEBsaW5rIEZvcm1Hcm91cH0uIFNlZSBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgcHJvcGVydGllcyBpbiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9LlxuICogXG4gKiAqKlNldCB0aGUgdmFsdWUqKjogWW91IGNhbiBzZXQgYW4gaW5pdGlhbCB2YWx1ZSBmb3IgZWFjaCBjaGlsZCBjb250cm9sIHdoZW4gaW5zdGFudGlhdGluZ1xuICogdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0sIG9yIHlvdSBjYW4gc2V0IGl0IHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmdcbiAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zZXRWYWx1ZX0gb3Ige1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnBhdGNoVmFsdWV9LlxuICogXG4gKiAqKkxpc3RlbiB0byB2YWx1ZSoqOiBJZiB5b3Ugd2FudCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIGdyb3VwLCB5b3UgY2FuXG4gKiBzdWJzY3JpYmUgdG8gdGhlIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnN0YXR1c0NoYW5nZXN9IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb24gc3RhdHVzIGlzXG4gKiByZS1jYWxjdWxhdGVkLlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9uZXN0ZWRGb3JtR3JvdXAvbmVzdGVkX2Zvcm1fZ3JvdXBfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gKiBcbiAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqIFxuICogKiAqKk5nTW9kdWxlKio6IGBSZWFjdGl2ZUZvcm1zTW9kdWxlYFxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cE5hbWUgZXh0ZW5kcyBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgIG5hbWU6IHN0cmluZztcbi8qKlxuICogQHBhcmFtIHs/fSBwYXJlbnRcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAqL1xuY29uc3RydWN0b3IoXG4gICAgICAgICBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIsXG4gICAgICAgICB2YWxpZGF0b3JzOiBhbnlbXSxcbiAgICAgICAgIGFzeW5jVmFsaWRhdG9yczogYW55W10pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLl92YWxpZGF0b3JzID0gdmFsaWRhdG9ycztcbiAgICB0aGlzLl9hc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnM7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl9jaGVja1BhcmVudFR5cGUoKTogdm9pZCB7XG4gICAgaWYgKF9oYXNJbnZhbGlkUGFyZW50KHRoaXMuX3BhcmVudCkpIHtcbiAgICAgIFJlYWN0aXZlRXJyb3JzLmdyb3VwUGFyZW50RXhjZXB0aW9uKCk7XG4gICAgfVxuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7c2VsZWN0b3I6ICdbZm9ybUdyb3VwTmFtZV0nLCBwcm92aWRlcnM6IFtmb3JtR3JvdXBOYW1lUHJvdmlkZXJdfSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IEhvc3QgfSwgeyB0eXBlOiBTa2lwU2VsZiB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUywgXSB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUywgXSB9LCBdfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ25hbWUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydmb3JtR3JvdXBOYW1lJywgXSB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBGb3JtR3JvdXBOYW1lX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtR3JvdXBOYW1lLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuRm9ybUdyb3VwTmFtZS5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Hcm91cE5hbWUucHJvcERlY29yYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtR3JvdXBOYW1lLnByb3RvdHlwZS5uYW1lO1xufVxuXG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIGZvcm1BcnJheU5hbWVQcm92aWRlcjogYW55ID0ge1xuICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGb3JtQXJyYXlOYW1lKVxufTtcbi8qKlxuICogXFxAd2hhdEl0RG9lcyBTeW5jcyBhIG5lc3RlZCB7XFxAbGluayBGb3JtQXJyYXl9IHRvIGEgRE9NIGVsZW1lbnQuXG4gKiBcbiAqIFxcQGhvd1RvVXNlIFxuICogXG4gKiBUaGlzIGRpcmVjdGl2ZSBpcyBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggYSBwYXJlbnQge1xcQGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfSAoc2VsZWN0b3I6XG4gKiBgW2Zvcm1Hcm91cF1gKS5cbiAqIFxuICogSXQgYWNjZXB0cyB0aGUgc3RyaW5nIG5hbWUgb2YgdGhlIG5lc3RlZCB7XFxAbGluayBGb3JtQXJyYXl9IHlvdSB3YW50IHRvIGxpbmssIGFuZFxuICogd2lsbCBsb29rIGZvciBhIHtcXEBsaW5rIEZvcm1BcnJheX0gcmVnaXN0ZXJlZCB3aXRoIHRoYXQgbmFtZSBpbiB0aGUgcGFyZW50XG4gKiB7XFxAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIHlvdSBwYXNzZWQgaW50byB7XFxAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9LlxuICogXG4gKiBOZXN0ZWQgZm9ybSBhcnJheXMgY2FuIGNvbWUgaW4gaGFuZHkgd2hlbiB5b3UgaGF2ZSBhIGdyb3VwIG9mIGZvcm0gY29udHJvbHMgYnV0XG4gKiB5b3UncmUgbm90IHN1cmUgaG93IG1hbnkgdGhlcmUgd2lsbCBiZS4gRm9ybSBhcnJheXMgYWxsb3cgeW91IHRvIGNyZWF0ZSBuZXdcbiAqIGZvcm0gY29udHJvbHMgZHluYW1pY2FsbHkuXG4gKiBcbiAqICoqQWNjZXNzIHRoZSBhcnJheSoqOiBZb3UgY2FuIGFjY2VzcyB0aGUgYXNzb2NpYXRlZCB7XFxAbGluayBGb3JtQXJyYXl9IHVzaW5nIHRoZVxuICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLmdldH0gbWV0aG9kIG9uIHRoZSBwYXJlbnQge1xcQGxpbmsgRm9ybUdyb3VwfS5cbiAqIEV4OiBgdGhpcy5mb3JtLmdldCgnY2l0aWVzJylgLlxuICogXG4gKiAqKkdldCB0aGUgdmFsdWUqKjogdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgYWx3YXlzIHN5bmNlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZVxuICoge1xcQGxpbmsgRm9ybUFycmF5fS4gU2VlIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBwcm9wZXJ0aWVzIGluIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0uXG4gKiBcbiAqICoqU2V0IHRoZSB2YWx1ZSoqOiBZb3UgY2FuIHNldCBhbiBpbml0aWFsIHZhbHVlIGZvciBlYWNoIGNoaWxkIGNvbnRyb2wgd2hlbiBpbnN0YW50aWF0aW5nXG4gKiB0aGUge1xcQGxpbmsgRm9ybUFycmF5fSwgb3IgeW91IGNhbiBzZXQgdGhlIHZhbHVlIHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmcgdGhlXG4gKiB7XFxAbGluayBGb3JtQXJyYXl9J3Mge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnNldFZhbHVlfSBvciB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX1cbiAqIG1ldGhvZHMuXG4gKiBcbiAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgYXJyYXksIHlvdSBjYW5cbiAqIHN1YnNjcmliZSB0byB0aGUge1xcQGxpbmsgRm9ybUFycmF5fSdzIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvXG4gKiBsaXN0ZW4gdG8gaXRzIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXNDaGFuZ2VzfSBldmVudCB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB2YWxpZGF0aW9uXG4gKiBzdGF0dXMgaXMgcmUtY2FsY3VsYXRlZC5cbiAqIFxuICogKipBZGQgbmV3IGNvbnRyb2xzKio6IFlvdSBjYW4gYWRkIG5ldyBjb250cm9scyB0byB0aGUge1xcQGxpbmsgRm9ybUFycmF5fSBkeW5hbWljYWxseSBieVxuICogY2FsbGluZyBpdHMge1xcQGxpbmsgRm9ybUFycmF5LnB1c2h9IG1ldGhvZC5cbiAqICBFeDogYHRoaXMuZm9ybS5nZXQoJ2NpdGllcycpLnB1c2gobmV3IEZvcm1Db250cm9sKCkpO2BcbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvbmVzdGVkRm9ybUFycmF5L25lc3RlZF9mb3JtX2FycmF5X2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICogXG4gKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKiBcbiAqICogKipOZ01vZHVsZSoqOiBgUmVhY3RpdmVGb3Jtc01vZHVsZWBcbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtQXJyYXlOYW1lIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX3BhcmVudDogQ29udHJvbENvbnRhaW5lcjtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX3ZhbGlkYXRvcnM6IGFueVtdO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fYXN5bmNWYWxpZGF0b3JzOiBhbnlbXTtcblxuICAgbmFtZTogc3RyaW5nO1xuLyoqXG4gKiBAcGFyYW0gez99IHBhcmVudFxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICovXG5jb25zdHJ1Y3RvcihcbiAgICAgICAgIHBhcmVudDogQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgIHZhbGlkYXRvcnM6IGFueVtdLFxuICAgICAgICAgYXN5bmNWYWxpZGF0b3JzOiBhbnlbXSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuX3ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzO1xuICAgIHRoaXMuX2FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycztcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGVja1BhcmVudFR5cGUoKTtcbiAgICB0aGlzLmZvcm1EaXJlY3RpdmUuYWRkRm9ybUFycmF5KHRoaXMpO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZvcm1EaXJlY3RpdmUpIHtcbiAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZW1vdmVGb3JtQXJyYXkodGhpcyk7XG4gICAgfVxuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBjb250cm9sKCk6IEZvcm1BcnJheSB7IHJldHVybiB0aGlzLmZvcm1EaXJlY3RpdmUuZ2V0Rm9ybUFycmF5KHRoaXMpOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBmb3JtRGlyZWN0aXZlKCk6IEZvcm1Hcm91cERpcmVjdGl2ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudCA/IC8qKiBAdHlwZSB7P30gKi8oKCA8Rm9ybUdyb3VwRGlyZWN0aXZlPnRoaXMuX3BhcmVudC5mb3JtRGlyZWN0aXZlKSkgOiBudWxsO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBwYXRoKCk6IHN0cmluZ1tdIHsgcmV0dXJuIGNvbnRyb2xQYXRoKHRoaXMubmFtZSwgdGhpcy5fcGFyZW50KTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHsgcmV0dXJuIGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3ZhbGlkYXRvcnMpOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBhc3luY1ZhbGlkYXRvcigpOiBBc3luY1ZhbGlkYXRvckZuIHsgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fYXN5bmNWYWxpZGF0b3JzKTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9jaGVja1BhcmVudFR5cGUoKTogdm9pZCB7XG4gICAgaWYgKF9oYXNJbnZhbGlkUGFyZW50KHRoaXMuX3BhcmVudCkpIHtcbiAgICAgIFJlYWN0aXZlRXJyb3JzLmFycmF5UGFyZW50RXhjZXB0aW9uKCk7XG4gICAgfVxuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7c2VsZWN0b3I6ICdbZm9ybUFycmF5TmFtZV0nLCBwcm92aWRlcnM6IFtmb3JtQXJyYXlOYW1lUHJvdmlkZXJdfSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IEhvc3QgfSwgeyB0eXBlOiBTa2lwU2VsZiB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUywgXSB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUywgXSB9LCBdfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ25hbWUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydmb3JtQXJyYXlOYW1lJywgXSB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBGb3JtQXJyYXlOYW1lX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQXJyYXlOYW1lLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuRm9ybUFycmF5TmFtZS5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1BcnJheU5hbWUucHJvcERlY29yYXRvcnM7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuRm9ybUFycmF5TmFtZS5wcm90b3R5cGUuX3BhcmVudDtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5Gb3JtQXJyYXlOYW1lLnByb3RvdHlwZS5fdmFsaWRhdG9ycztcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5Gb3JtQXJyYXlOYW1lLnByb3RvdHlwZS5fYXN5bmNWYWxpZGF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUFycmF5TmFtZS5wcm90b3R5cGUubmFtZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gez99IHBhcmVudFxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX2hhc0ludmFsaWRQYXJlbnQocGFyZW50OiBDb250cm9sQ29udGFpbmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAhKHBhcmVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cE5hbWUpICYmICEocGFyZW50IGluc3RhbmNlb2YgRm9ybUdyb3VwRGlyZWN0aXZlKSAmJlxuICAgICAgIShwYXJlbnQgaW5zdGFuY2VvZiBGb3JtQXJyYXlOYW1lKTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9ncm91cF9uYW1lLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3QsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPcHRpb25hbCwgT3V0cHV0LCBTZWxmLCBTaW1wbGVDaGFuZ2VzLCBTa2lwU2VsZiwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJy4uLy4uL21vZGVsJztcbmltcG9ydCB7TkdfQVNZTkNfVkFMSURBVE9SUywgTkdfVkFMSURBVE9SU30gZnJvbSAnLi4vLi4vdmFsaWRhdG9ycyc7XG5pbXBvcnQge0Fic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuLi9hYnN0cmFjdF9mb3JtX2dyb3VwX2RpcmVjdGl2ZSc7XG5pbXBvcnQge0NvbnRyb2xDb250YWluZXJ9IGZyb20gJy4uL2NvbnRyb2xfY29udGFpbmVyJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICcuLi9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7TmdDb250cm9sfSBmcm9tICcuLi9uZ19jb250cm9sJztcbmltcG9ydCB7UmVhY3RpdmVFcnJvcnN9IGZyb20gJy4uL3JlYWN0aXZlX2Vycm9ycyc7XG5pbXBvcnQge2NvbXBvc2VBc3luY1ZhbGlkYXRvcnMsIGNvbXBvc2VWYWxpZGF0b3JzLCBjb250cm9sUGF0aCwgaXNQcm9wZXJ0eVVwZGF0ZWQsIHNlbGVjdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yLCBBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZufSBmcm9tICcuLi92YWxpZGF0b3JzJztcblxuaW1wb3J0IHtGb3JtR3JvdXBEaXJlY3RpdmV9IGZyb20gJy4vZm9ybV9ncm91cF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtGb3JtQXJyYXlOYW1lLCBGb3JtR3JvdXBOYW1lfSBmcm9tICcuL2Zvcm1fZ3JvdXBfbmFtZSc7XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIGNvbnRyb2xOYW1lQmluZGluZzogYW55ID0ge1xuICBwcm92aWRlOiBOZ0NvbnRyb2wsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZvcm1Db250cm9sTmFtZSlcbn07XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgU3luY3MgYSB7XFxAbGluayBGb3JtQ29udHJvbH0gaW4gYW4gZXhpc3Rpbmcge1xcQGxpbmsgRm9ybUdyb3VwfSB0byBhIGZvcm0gY29udHJvbFxuICogZWxlbWVudCBieSBuYW1lLlxuICogXG4gKiBJbiBvdGhlciB3b3JkcywgdGhpcyBkaXJlY3RpdmUgZW5zdXJlcyB0aGF0IGFueSB2YWx1ZXMgd3JpdHRlbiB0byB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9XG4gKiBpbnN0YW5jZSBwcm9ncmFtbWF0aWNhbGx5IHdpbGwgYmUgd3JpdHRlbiB0byB0aGUgRE9NIGVsZW1lbnQgKG1vZGVsIC0+IHZpZXcpLiBDb252ZXJzZWx5LFxuICogYW55IHZhbHVlcyB3cml0dGVuIHRvIHRoZSBET00gZWxlbWVudCB0aHJvdWdoIHVzZXIgaW5wdXQgd2lsbCBiZSByZWZsZWN0ZWQgaW4gdGhlXG4gKiB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgKHZpZXcgLT4gbW9kZWwpLlxuICogXG4gKiBcXEBob3dUb1VzZSBcbiAqIFxuICogVGhpcyBkaXJlY3RpdmUgaXMgZGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIGEgcGFyZW50IHtcXEBsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0gKHNlbGVjdG9yOlxuICogYFtmb3JtR3JvdXBdYCkuXG4gKiBcbiAqIEl0IGFjY2VwdHMgdGhlIHN0cmluZyBuYW1lIG9mIHRoZSB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgeW91IHdhbnQgdG9cbiAqIGxpbmssIGFuZCB3aWxsIGxvb2sgZm9yIGEge1xcQGxpbmsgRm9ybUNvbnRyb2x9IHJlZ2lzdGVyZWQgd2l0aCB0aGF0IG5hbWUgaW4gdGhlXG4gKiBjbG9zZXN0IHtcXEBsaW5rIEZvcm1Hcm91cH0gb3Ige1xcQGxpbmsgRm9ybUFycmF5fSBhYm92ZSBpdC5cbiAqIFxuICogKipBY2Nlc3MgdGhlIGNvbnRyb2wqKjogWW91IGNhbiBhY2Nlc3MgdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfSBhc3NvY2lhdGVkIHdpdGhcbiAqIHRoaXMgZGlyZWN0aXZlIGJ5IHVzaW5nIHRoZSB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuZ2V0fSBtZXRob2QuXG4gKiBFeDogYHRoaXMuZm9ybS5nZXQoJ2ZpcnN0Jyk7YFxuICogXG4gKiAqKkdldCB2YWx1ZSoqOiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyBhbHdheXMgc3luY2VkIGFuZCBhdmFpbGFibGUgb24gdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfS5cbiAqIFNlZSBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgcHJvcGVydGllcyBpbiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9LlxuICogXG4gKiAgKipTZXQgdmFsdWUqKjogWW91IGNhbiBzZXQgYW4gaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIGNvbnRyb2wgd2hlbiBpbnN0YW50aWF0aW5nIHRoZVxuICogIHtcXEBsaW5rIEZvcm1Db250cm9sfSwgb3IgeW91IGNhbiBzZXQgaXQgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZ1xuICogIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zZXRWYWx1ZX0gb3Ige1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnBhdGNoVmFsdWV9LlxuICogXG4gKiAqKkxpc3RlbiB0byB2YWx1ZSoqOiBJZiB5b3Ugd2FudCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wsIHlvdSBjYW5cbiAqIHN1YnNjcmliZSB0byB0aGUge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnZhbHVlQ2hhbmdlc30gZXZlbnQuICBZb3UgY2FuIGFsc28gbGlzdGVuIHRvXG4gKiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzQ2hhbmdlc30gdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgaXNcbiAqIHJlLWNhbGN1bGF0ZWQuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIEluIHRoaXMgZXhhbXBsZSwgd2UgY3JlYXRlIGZvcm0gY29udHJvbHMgZm9yIGZpcnN0IG5hbWUgYW5kIGxhc3QgbmFtZS5cbiAqIFxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybUdyb3VwL3NpbXBsZV9mb3JtX2dyb3VwX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICogXG4gKiBUbyBzZWUgYGZvcm1Db250cm9sTmFtZWAgZXhhbXBsZXMgd2l0aCBkaWZmZXJlbnQgZm9ybSBjb250cm9sIHR5cGVzLCBzZWU6XG4gKiBcbiAqICogUmFkaW8gYnV0dG9uczoge1xcQGxpbmsgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcn1cbiAqICogU2VsZWN0czoge1xcQGxpbmsgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3J9XG4gKiBcbiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKiBcbiAqICoqTmdNb2R1bGUqKjoge1xcQGxpbmsgUmVhY3RpdmVGb3Jtc01vZHVsZX1cbiAqIFxuICogIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xOYW1lIGV4dGVuZHMgTmdDb250cm9sIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xucHJpdmF0ZSBfYWRkZWQgPSBmYWxzZTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xudmlld01vZGVsOiBhbnk7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9jb250cm9sOiBGb3JtQ29udHJvbDtcblxuICAgbmFtZTogc3RyaW5nO1xuXG4gIC8vIFRPRE8oa2FyYSk6ICBSZXBsYWNlIG5nTW9kZWwgd2l0aCByZWFjdGl2ZSBBUElcbiAgIG1vZGVsOiBhbnk7XG4gICB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4vKipcbiAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICogQHJldHVybiB7P31cbiAqL1xuc2V0IGlzRGlzYWJsZWQoaXNEaXNhYmxlZDogYm9vbGVhbikgeyBSZWFjdGl2ZUVycm9ycy5kaXNhYmxlZEF0dHJXYXJuaW5nKCk7IH1cbi8qKlxuICogQHBhcmFtIHs/fSBwYXJlbnRcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAqIEBwYXJhbSB7P30gdmFsdWVBY2Nlc3NvcnNcbiAqL1xuY29uc3RydWN0b3IoXG4gICAgICAgICBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIsXG4gICAgICAgICB2YWxpZGF0b3JzOiBBcnJheTxWYWxpZGF0b3J8VmFsaWRhdG9yRm4+LFxuICAgICAgICAgYXN5bmNWYWxpZGF0b3JzOlxuICAgICAgICAgIEFycmF5PEFzeW5jVmFsaWRhdG9yfEFzeW5jVmFsaWRhdG9yRm4+LFxuICAgICAgICAgdmFsdWVBY2Nlc3NvcnM6IENvbnRyb2xWYWx1ZUFjY2Vzc29yW10pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLl9yYXdWYWxpZGF0b3JzID0gdmFsaWRhdG9ycyB8fCBbXTtcbiAgICB0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnMgfHwgW107XG4gICAgdGhpcy52YWx1ZUFjY2Vzc29yID0gc2VsZWN0VmFsdWVBY2Nlc3Nvcih0aGlzLCB2YWx1ZUFjY2Vzc29ycyk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLl9hZGRlZCkgdGhpcy5fc2V0VXBDb250cm9sKCk7XG4gICAgaWYgKGlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHRoaXMudmlld01vZGVsKSkge1xuICAgICAgdGhpcy52aWV3TW9kZWwgPSB0aGlzLm1vZGVsO1xuICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnVwZGF0ZU1vZGVsKHRoaXMsIHRoaXMubW9kZWwpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtRGlyZWN0aXZlKSB7XG4gICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlQ29udHJvbCh0aGlzKTtcbiAgICB9XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBuZXdWYWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xudmlld1RvTW9kZWxVcGRhdGUobmV3VmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmlld01vZGVsID0gbmV3VmFsdWU7XG4gICAgdGhpcy51cGRhdGUuZW1pdChuZXdWYWx1ZSk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHBhdGgoKTogc3RyaW5nW10geyByZXR1cm4gY29udHJvbFBhdGgodGhpcy5uYW1lLCB0aGlzLl9wYXJlbnQpOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBmb3JtRGlyZWN0aXZlKCk6IGFueSB7IHJldHVybiB0aGlzLl9wYXJlbnQgPyB0aGlzLl9wYXJlbnQuZm9ybURpcmVjdGl2ZSA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl9yYXdWYWxpZGF0b3JzKTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgYXN5bmNWYWxpZGF0b3IoKTogQXN5bmNWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgY29udHJvbCgpOiBGb3JtQ29udHJvbCB7IHJldHVybiB0aGlzLl9jb250cm9sOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2NoZWNrUGFyZW50VHlwZSgpOiB2b2lkIHtcbiAgICBpZiAoISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBOYW1lKSAmJlxuICAgICAgICB0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgICAgUmVhY3RpdmVFcnJvcnMubmdNb2RlbEdyb3VwRXhjZXB0aW9uKCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBOYW1lKSAmJiAhKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cERpcmVjdGl2ZSkgJiZcbiAgICAgICAgISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBGb3JtQXJyYXlOYW1lKSkge1xuICAgICAgUmVhY3RpdmVFcnJvcnMuY29udHJvbFBhcmVudEV4Y2VwdGlvbigpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9zZXRVcENvbnRyb2woKSB7XG4gICAgdGhpcy5fY2hlY2tQYXJlbnRUeXBlKCk7XG4gICAgdGhpcy5fY29udHJvbCA9IHRoaXMuZm9ybURpcmVjdGl2ZS5hZGRDb250cm9sKHRoaXMpO1xuICAgIGlmICh0aGlzLmNvbnRyb2wuZGlzYWJsZWQgJiYgdGhpcy52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUpIHtcbiAgICAgIHRoaXMudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKHRydWUpO1xuICAgIH1cbiAgICB0aGlzLl9hZGRlZCA9IHRydWU7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tzZWxlY3RvcjogJ1tmb3JtQ29udHJvbE5hbWVdJywgcHJvdmlkZXJzOiBbY29udHJvbE5hbWVCaW5kaW5nXX0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBIb3N0IH0sIHsgdHlwZTogU2tpcFNlbGYgfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX1ZBTFVFX0FDQ0VTU09SLCBdIH0sIF19LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nbmFtZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2Zvcm1Db250cm9sTmFtZScsIF0gfSxdLFxuJ21vZGVsJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnbmdNb2RlbCcsIF0gfSxdLFxuJ3VwZGF0ZSc6IFt7IHR5cGU6IE91dHB1dCwgYXJnczogWyduZ01vZGVsQ2hhbmdlJywgXSB9LF0sXG4naXNEaXNhYmxlZCc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2Rpc2FibGVkJywgXSB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBGb3JtQ29udHJvbE5hbWVfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Db250cm9sTmFtZS5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbkZvcm1Db250cm9sTmFtZS5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Db250cm9sTmFtZS5wcm9wRGVjb3JhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUuX2FkZGVkO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbkZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUudmlld01vZGVsO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbkZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUuX2NvbnRyb2w7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLm5hbWU7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLm1vZGVsO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS51cGRhdGU7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX25hbWUudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIFByb3ZpZGVyLCBTaW1wbGVDaGFuZ2VzLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQge05HX1ZBTElEQVRPUlMsIFZhbGlkYXRvcnN9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuXG4vKiogQGV4cGVyaW1lbnRhbCAqL1xuZXhwb3J0IHR5cGUgVmFsaWRhdGlvbkVycm9ycyA9IHtcbiAgW2tleTogc3RyaW5nXTogYW55XG59O1xuXG4vKipcbiAqIEFuIGludGVyZmFjZSB0aGF0IGNhbiBiZSBpbXBsZW1lbnRlZCBieSBjbGFzc2VzIHRoYXQgY2FuIGFjdCBhcyB2YWxpZGF0b3JzLlxuICpcbiAqICMjIFVzYWdlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQERpcmVjdGl2ZSh7XG4gKiAgIHNlbGVjdG9yOiAnW2N1c3RvbS12YWxpZGF0b3JdJyxcbiAqICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBDdXN0b21WYWxpZGF0b3JEaXJlY3RpdmUsIG11bHRpOiB0cnVlfV1cbiAqIH0pXG4gKiBjbGFzcyBDdXN0b21WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICogICB2YWxpZGF0ZShjOiBDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICogICAgIHJldHVybiB7XCJjdXN0b21cIjogdHJ1ZX07XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBzdGFibGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0b3Ige1xuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGw7XG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2U/KGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcbn1cblxuLyoqIEBleHBlcmltZW50YWwgKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXN5bmNWYWxpZGF0b3IgZXh0ZW5kcyBWYWxpZGF0b3Ige1xuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBQcm9taXNlPFZhbGlkYXRpb25FcnJvcnN8bnVsbD58T2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzfG51bGw+O1xufVxuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBSRVFVSVJFRF9WQUxJREFUT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSZXF1aXJlZFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBDSEVDS0JPWF9SRVFVSVJFRF9WQUxJREFUT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG4vKipcbiAqIEEgRGlyZWN0aXZlIHRoYXQgYWRkcyB0aGUgYHJlcXVpcmVkYCB2YWxpZGF0b3IgdG8gYW55IGNvbnRyb2xzIG1hcmtlZCB3aXRoIHRoZVxuICogYHJlcXVpcmVkYCBhdHRyaWJ1dGUsIHZpYSB0aGUge1xcQGxpbmsgTkdfVkFMSURBVE9SU30gYmluZGluZy5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICogYGBgXG4gKiA8aW5wdXQgbmFtZT1cImZ1bGxOYW1lXCIgbmdNb2RlbCByZXF1aXJlZD5cbiAqIGBgYFxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIFJlcXVpcmVkVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbnByaXZhdGUgX3JlcXVpcmVkOiBib29sZWFuO1xucHJpdmF0ZSBfb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCByZXF1aXJlZCgpOiBib29sZWFufHN0cmluZyB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW58c3RyaW5nKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSBmYWxzZSAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xuICAgIGlmICh0aGlzLl9vbkNoYW5nZSkgdGhpcy5fb25DaGFuZ2UoKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGNcbiAqIEByZXR1cm4gez99XG4gKi9cbnZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZWQgPyBWYWxpZGF0b3JzLnJlcXVpcmVkKGMpIDogbnVsbDtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6XG4gICAgICAnOm5vdChbdHlwZT1jaGVja2JveF0pW3JlcXVpcmVkXVtmb3JtQ29udHJvbE5hbWVdLDpub3QoW3R5cGU9Y2hlY2tib3hdKVtyZXF1aXJlZF1bZm9ybUNvbnRyb2xdLDpub3QoW3R5cGU9Y2hlY2tib3hdKVtyZXF1aXJlZF1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtSRVFVSVJFRF9WQUxJREFUT1JdLFxuICBob3N0OiB7J1thdHRyLnJlcXVpcmVkXSc6ICdyZXF1aXJlZCA/IFwiXCIgOiBudWxsJ31cbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidyZXF1aXJlZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIFJlcXVpcmVkVmFsaWRhdG9yX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5SZXF1aXJlZFZhbGlkYXRvci5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cblJlcXVpcmVkVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmVxdWlyZWRWYWxpZGF0b3IucHJvcERlY29yYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5SZXF1aXJlZFZhbGlkYXRvci5wcm90b3R5cGUuX3JlcXVpcmVkO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmVxdWlyZWRWYWxpZGF0b3IucHJvdG90eXBlLl9vbkNoYW5nZTtcbn1cblxuLyoqXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGFkZHMgdGhlIGByZXF1aXJlZGAgdmFsaWRhdG9yIHRvIGNoZWNrYm94IGNvbnRyb2xzIG1hcmtlZCB3aXRoIHRoZVxuICogYHJlcXVpcmVkYCBhdHRyaWJ1dGUsIHZpYSB0aGUge1xcQGxpbmsgTkdfVkFMSURBVE9SU30gYmluZGluZy5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICogYGBgXG4gKiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFjdGl2ZVwiIG5nTW9kZWwgcmVxdWlyZWQ+XG4gKiBgYGBcbiAqIFxuICogXFxAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBjbGFzcyBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yIGV4dGVuZHMgUmVxdWlyZWRWYWxpZGF0b3Ige1xuLyoqXG4gKiBAcGFyYW0gez99IGNcbiAqIEByZXR1cm4gez99XG4gKi9cbnZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZWQgPyBWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZShjKSA6IG51bGw7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6XG4gICAgICAnaW5wdXRbdHlwZT1jaGVja2JveF1bcmVxdWlyZWRdW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbdHlwZT1jaGVja2JveF1bcmVxdWlyZWRdW2Zvcm1Db250cm9sXSxpbnB1dFt0eXBlPWNoZWNrYm94XVtyZXF1aXJlZF1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtDSEVDS0JPWF9SRVFVSVJFRF9WQUxJREFUT1JdLFxuICBob3N0OiB7J1thdHRyLnJlcXVpcmVkXSc6ICdyZXF1aXJlZCA/IFwiXCIgOiBudWxsJ31cbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5mdW5jdGlvbiBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5DaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvci5jdG9yUGFyYW1ldGVycztcbn1cblxuXG4vKipcbiAqIFByb3ZpZGVyIHdoaWNoIGFkZHMge0BsaW5rIEVtYWlsVmFsaWRhdG9yfSB0byB7QGxpbmsgTkdfVkFMSURBVE9SU30uXG4gKi9cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIEVNQUlMX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFbWFpbFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGFkZHMgdGhlIGBlbWFpbGAgdmFsaWRhdG9yIHRvIGNvbnRyb2xzIG1hcmtlZCB3aXRoIHRoZVxuICogYGVtYWlsYCBhdHRyaWJ1dGUsIHZpYSB0aGUge1xcQGxpbmsgTkdfVkFMSURBVE9SU30gYmluZGluZy5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICogYGBgXG4gKiA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgbmdNb2RlbCBlbWFpbD5cbiAqIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBuZ01vZGVsIGVtYWlsPVwidHJ1ZVwiPlxuICogPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIG5nTW9kZWwgW2VtYWlsXT1cInRydWVcIj5cbiAqIGBgYFxuICogXG4gKiBcXEBleHBlcmltZW50YWxcbiAqL1xuZXhwb3J0IGNsYXNzIEVtYWlsVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbnByaXZhdGUgX2VuYWJsZWQ6IGJvb2xlYW47XG5wcml2YXRlIF9vbkNoYW5nZTogKCkgPT4gdm9pZDtcbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuc2V0IGVtYWlsKHZhbHVlOiBib29sZWFufHN0cmluZykge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcbiAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHRoaXMuX29uQ2hhbmdlKCk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBjXG4gKiBAcmV0dXJuIHs/fVxuICovXG52YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkID8gVmFsaWRhdG9ycy5lbWFpbChjKSA6IG51bGw7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnW2VtYWlsXVtmb3JtQ29udHJvbE5hbWVdLFtlbWFpbF1bZm9ybUNvbnRyb2xdLFtlbWFpbF1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtFTUFJTF9WQUxJREFUT1JdXG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nZW1haWwnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBFbWFpbFZhbGlkYXRvcl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuRW1haWxWYWxpZGF0b3IuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5FbWFpbFZhbGlkYXRvci5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbkVtYWlsVmFsaWRhdG9yLnByb3BEZWNvcmF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuRW1haWxWYWxpZGF0b3IucHJvdG90eXBlLl9lbmFibGVkO1xuLyoqIEB0eXBlIHs/fSAqL1xuRW1haWxWYWxpZGF0b3IucHJvdG90eXBlLl9vbkNoYW5nZTtcbn1cblxuXG4vKipcbiAqIEBzdGFibGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0b3JGbiB7IChjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGw7IH1cblxuLyoqXG4gKiBAc3RhYmxlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXN5bmNWYWxpZGF0b3JGbiB7XG4gIChjOiBBYnN0cmFjdENvbnRyb2wpOiBQcm9taXNlPFZhbGlkYXRpb25FcnJvcnN8bnVsbD58T2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzfG51bGw+O1xufVxuXG4vKipcbiAqIFByb3ZpZGVyIHdoaWNoIGFkZHMge0BsaW5rIE1pbkxlbmd0aFZhbGlkYXRvcn0gdG8ge0BsaW5rIE5HX1ZBTElEQVRPUlN9LlxuICpcbiAqICMjIEV4YW1wbGU6XG4gKlxuICoge0BleGFtcGxlIGNvbW1vbi9mb3Jtcy90cy92YWxpZGF0b3JzL3ZhbGlkYXRvcnMudHMgcmVnaW9uPSdtaW4nfVxuICovXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBNSU5fTEVOR1RIX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNaW5MZW5ndGhWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogQSBkaXJlY3RpdmUgd2hpY2ggaW5zdGFsbHMgdGhlIHtcXEBsaW5rIE1pbkxlbmd0aFZhbGlkYXRvcn0gZm9yIGFueSBgZm9ybUNvbnRyb2xOYW1lYCxcbiAqIGBmb3JtQ29udHJvbGAsIG9yIGNvbnRyb2wgd2l0aCBgbmdNb2RlbGAgdGhhdCBhbHNvIGhhcyBhIGBtaW5sZW5ndGhgIGF0dHJpYnV0ZS5cbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBNaW5MZW5ndGhWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsXG4gICAgT25DaGFuZ2VzIHtcbnByaXZhdGUgX3ZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG5wcml2YXRlIF9vbkNoYW5nZTogKCkgPT4gdm9pZDtcblxuICAgbWlubGVuZ3RoOiBzdHJpbmc7XG4vKipcbiAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICogQHJldHVybiB7P31cbiAqL1xubmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICgnbWlubGVuZ3RoJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgIGlmICh0aGlzLl9vbkNoYW5nZSkgdGhpcy5fb25DaGFuZ2UoKTtcbiAgICB9XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBjXG4gKiBAcmV0dXJuIHs/fVxuICovXG52YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwge1xuICAgIHJldHVybiB0aGlzLm1pbmxlbmd0aCA9PSBudWxsID8gbnVsbCA6IHRoaXMuX3ZhbGlkYXRvcihjKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfY3JlYXRlVmFsaWRhdG9yKCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbGlkYXRvciA9IFZhbGlkYXRvcnMubWluTGVuZ3RoKHBhcnNlSW50KHRoaXMubWlubGVuZ3RoLCAxMCkpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnW21pbmxlbmd0aF1bZm9ybUNvbnRyb2xOYW1lXSxbbWlubGVuZ3RoXVtmb3JtQ29udHJvbF0sW21pbmxlbmd0aF1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtNSU5fTEVOR1RIX1ZBTElEQVRPUl0sXG4gIGhvc3Q6IHsnW2F0dHIubWlubGVuZ3RoXSc6ICdtaW5sZW5ndGggPyBtaW5sZW5ndGggOiBudWxsJ31cbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidtaW5sZW5ndGgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBNaW5MZW5ndGhWYWxpZGF0b3JfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbk1pbkxlbmd0aFZhbGlkYXRvci5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbk1pbkxlbmd0aFZhbGlkYXRvci5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbk1pbkxlbmd0aFZhbGlkYXRvci5wcm9wRGVjb3JhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cbk1pbkxlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRvcjtcbi8qKiBAdHlwZSB7P30gKi9cbk1pbkxlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUuX29uQ2hhbmdlO1xuLyoqIEB0eXBlIHs/fSAqL1xuTWluTGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5taW5sZW5ndGg7XG59XG5cblxuLyoqXG4gKiBQcm92aWRlciB3aGljaCBhZGRzIHtAbGluayBNYXhMZW5ndGhWYWxpZGF0b3J9IHRvIHtAbGluayBOR19WQUxJREFUT1JTfS5cbiAqXG4gKiAjIyBFeGFtcGxlOlxuICpcbiAqIHtAZXhhbXBsZSBjb21tb24vZm9ybXMvdHMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIHJlZ2lvbj0nbWF4J31cbiAqL1xuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gTUFYX0xFTkdUSF9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF4TGVuZ3RoVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG4vKipcbiAqIEEgZGlyZWN0aXZlIHdoaWNoIGluc3RhbGxzIHRoZSB7XFxAbGluayBNYXhMZW5ndGhWYWxpZGF0b3J9IGZvciBhbnkgYGZvcm1Db250cm9sTmFtZSxcbiAqIGBmb3JtQ29udHJvbGAsXG4gKiBvciBjb250cm9sIHdpdGggYG5nTW9kZWxgIHRoYXQgYWxzbyBoYXMgYSBgbWF4bGVuZ3RoYCBhdHRyaWJ1dGUuXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgTWF4TGVuZ3RoVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLFxuICAgIE9uQ2hhbmdlcyB7XG5wcml2YXRlIF92YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xucHJpdmF0ZSBfb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG5cbiAgIG1heGxlbmd0aDogc3RyaW5nO1xuLyoqXG4gKiBAcGFyYW0gez99IGNoYW5nZXNcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoJ21heGxlbmd0aCcgaW4gY2hhbmdlcykge1xuICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgfVxuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gY1xuICogQHJldHVybiB7P31cbiAqL1xudmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9yc3xudWxsIHtcbiAgICByZXR1cm4gdGhpcy5tYXhsZW5ndGggIT0gbnVsbCA/IHRoaXMuX3ZhbGlkYXRvcihjKSA6IG51bGw7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2NyZWF0ZVZhbGlkYXRvcigpOiB2b2lkIHtcbiAgICB0aGlzLl92YWxpZGF0b3IgPSBWYWxpZGF0b3JzLm1heExlbmd0aChwYXJzZUludCh0aGlzLm1heGxlbmd0aCwgMTApKTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjogJ1ttYXhsZW5ndGhdW2Zvcm1Db250cm9sTmFtZV0sW21heGxlbmd0aF1bZm9ybUNvbnRyb2xdLFttYXhsZW5ndGhdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbTUFYX0xFTkdUSF9WQUxJREFUT1JdLFxuICBob3N0OiB7J1thdHRyLm1heGxlbmd0aF0nOiAnbWF4bGVuZ3RoID8gbWF4bGVuZ3RoIDogbnVsbCd9XG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nbWF4bGVuZ3RoJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gTWF4TGVuZ3RoVmFsaWRhdG9yX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5NYXhMZW5ndGhWYWxpZGF0b3IuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5NYXhMZW5ndGhWYWxpZGF0b3IuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5NYXhMZW5ndGhWYWxpZGF0b3IucHJvcERlY29yYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5NYXhMZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLl92YWxpZGF0b3I7XG4vKiogQHR5cGUgez99ICovXG5NYXhMZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLl9vbkNoYW5nZTtcbi8qKiBAdHlwZSB7P30gKi9cbk1heExlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUubWF4bGVuZ3RoO1xufVxuXG5cblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gUEFUVEVSTl9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUGF0dGVyblZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGFkZHMgdGhlIGBwYXR0ZXJuYCB2YWxpZGF0b3IgdG8gYW55IGNvbnRyb2xzIG1hcmtlZCB3aXRoIHRoZVxuICogYHBhdHRlcm5gIGF0dHJpYnV0ZSwgdmlhIHRoZSB7XFxAbGluayBOR19WQUxJREFUT1JTfSBiaW5kaW5nLiBVc2VzIGF0dHJpYnV0ZSB2YWx1ZVxuICogYXMgdGhlIHJlZ2V4IHRvIHZhbGlkYXRlIENvbnRyb2wgdmFsdWUgYWdhaW5zdC4gIEZvbGxvd3MgcGF0dGVybiBhdHRyaWJ1dGVcbiAqIHNlbWFudGljczsgaS5lLiByZWdleCBtdXN0IG1hdGNoIGVudGlyZSBDb250cm9sIHZhbHVlLlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiBgYGBcbiAqIDxpbnB1dCBbbmFtZV09XCJmdWxsTmFtZVwiIHBhdHRlcm49XCJbYS16QS1aIF0qXCIgbmdNb2RlbD5cbiAqIGBgYFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXR0ZXJuVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLFxuICAgIE9uQ2hhbmdlcyB7XG5wcml2YXRlIF92YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xucHJpdmF0ZSBfb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG5cbiAgIHBhdHRlcm46IHN0cmluZ3xSZWdFeHA7XG4vKipcbiAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICogQHJldHVybiB7P31cbiAqL1xubmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICgncGF0dGVybicgaW4gY2hhbmdlcykge1xuICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgfVxuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gY1xuICogQHJldHVybiB7P31cbiAqL1xudmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9yc3xudWxsIHsgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvcihjKTsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfY3JlYXRlVmFsaWRhdG9yKCk6IHZvaWQgeyB0aGlzLl92YWxpZGF0b3IgPSBWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5wYXR0ZXJuKTsgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjogJ1twYXR0ZXJuXVtmb3JtQ29udHJvbE5hbWVdLFtwYXR0ZXJuXVtmb3JtQ29udHJvbF0sW3BhdHRlcm5dW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbUEFUVEVSTl9WQUxJREFUT1JdLFxuICBob3N0OiB7J1thdHRyLnBhdHRlcm5dJzogJ3BhdHRlcm4gPyBwYXR0ZXJuIDogbnVsbCd9XG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4ncGF0dGVybic6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIFBhdHRlcm5WYWxpZGF0b3JfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cblBhdHRlcm5WYWxpZGF0b3IuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5QYXR0ZXJuVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuUGF0dGVyblZhbGlkYXRvci5wcm9wRGVjb3JhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cblBhdHRlcm5WYWxpZGF0b3IucHJvdG90eXBlLl92YWxpZGF0b3I7XG4vKiogQHR5cGUgez99ICovXG5QYXR0ZXJuVmFsaWRhdG9yLnByb3RvdHlwZS5fb25DaGFuZ2U7XG4vKiogQHR5cGUgez99ICovXG5QYXR0ZXJuVmFsaWRhdG9yLnByb3RvdHlwZS5wYXR0ZXJuO1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy92YWxpZGF0b3JzLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdG9yRm59IGZyb20gJy4vZGlyZWN0aXZlcy92YWxpZGF0b3JzJztcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sLCBGb3JtQXJyYXksIEZvcm1Db250cm9sLCBGb3JtR3JvdXB9IGZyb20gJy4vbW9kZWwnO1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIENyZWF0ZXMgYW4ge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfSBmcm9tIGEgdXNlci1zcGVjaWZpZWQgY29uZmlndXJhdGlvbi5cbiAqIFxuICogSXQgaXMgZXNzZW50aWFsbHkgc3ludGFjdGljIHN1Z2FyIHRoYXQgc2hvcnRlbnMgdGhlIGBuZXcgRm9ybUdyb3VwKClgLFxuICogYG5ldyBGb3JtQ29udHJvbCgpYCwgYW5kIGBuZXcgRm9ybUFycmF5KClgIGJvaWxlcnBsYXRlIHRoYXQgY2FuIGJ1aWxkIHVwIGluIGxhcmdlclxuICogZm9ybXMuXG4gKiBcbiAqIFxcQGhvd1RvVXNlIFxuICogXG4gKiBUbyB1c2UsIGluamVjdCBgRm9ybUJ1aWxkZXJgIGludG8geW91ciBjb21wb25lbnQgY2xhc3MuIFlvdSBjYW4gdGhlbiBjYWxsIGl0cyBtZXRob2RzXG4gKiBkaXJlY3RseS5cbiAqIFxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvZm9ybUJ1aWxkZXIvZm9ybV9idWlsZGVyX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICogXG4gKiAgKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICogXG4gKiAgKiAqKk5nTW9kdWxlKio6IHtcXEBsaW5rIFJlYWN0aXZlRm9ybXNNb2R1bGV9XG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgRm9ybUJ1aWxkZXIge1xuLyoqXG4gKiBDb25zdHJ1Y3QgYSBuZXcge1xcQGxpbmsgRm9ybUdyb3VwfSB3aXRoIHRoZSBnaXZlbiBtYXAgb2YgY29uZmlndXJhdGlvbi5cbiAqIFZhbGlkIGtleXMgZm9yIHRoZSBgZXh0cmFgIHBhcmFtZXRlciBtYXAgYXJlIGB2YWxpZGF0b3JgIGFuZCBgYXN5bmNWYWxpZGF0b3JgLlxuICogXG4gKiBTZWUgdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0gY29uc3RydWN0b3IgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7P30gY29udHJvbHNDb25maWdcbiAqIEBwYXJhbSB7Pz19IGV4dHJhXG4gKiBAcmV0dXJuIHs/fVxuICovXG5ncm91cChjb250cm9sc0NvbmZpZzoge1trZXk6IHN0cmluZ106IGFueX0sIGV4dHJhOiB7W2tleTogc3RyaW5nXTogYW55fSA9IG51bGwpOiBGb3JtR3JvdXAge1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY29udHJvbHMgPSB0aGlzLl9yZWR1Y2VDb250cm9scyhjb250cm9sc0NvbmZpZyk7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyB2YWxpZGF0b3I6IFZhbGlkYXRvckZuID0gZXh0cmEgIT0gbnVsbCA/IGV4dHJhWyd2YWxpZGF0b3InXSA6IG51bGw7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBhc3luY1ZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3JGbiA9IGV4dHJhICE9IG51bGwgPyBleHRyYVsnYXN5bmNWYWxpZGF0b3InXSA6IG51bGw7XG4gICAgcmV0dXJuIG5ldyBGb3JtR3JvdXAoY29udHJvbHMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICB9XG4vKipcbiAqIENvbnN0cnVjdCBhIG5ldyB7XFxAbGluayBGb3JtQ29udHJvbH0gd2l0aCB0aGUgZ2l2ZW4gYGZvcm1TdGF0ZWAsYHZhbGlkYXRvcmAsIGFuZFxuICogYGFzeW5jVmFsaWRhdG9yYC5cbiAqIFxuICogYGZvcm1TdGF0ZWAgY2FuIGVpdGhlciBiZSBhIHN0YW5kYWxvbmUgdmFsdWUgZm9yIHRoZSBmb3JtIGNvbnRyb2wgb3IgYW4gb2JqZWN0XG4gKiB0aGF0IGNvbnRhaW5zIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZCBzdGF0dXMuXG4gKiBcbiAqIEBwYXJhbSB7P30gZm9ybVN0YXRlXG4gKiBAcGFyYW0gez89fSB2YWxpZGF0b3JcbiAqIEBwYXJhbSB7Pz19IGFzeW5jVmFsaWRhdG9yXG4gKiBAcmV0dXJuIHs/fVxuICovXG5jb250cm9sKFxuICAgICAgZm9ybVN0YXRlOiBPYmplY3QsIHZhbGlkYXRvcjogVmFsaWRhdG9yRm58VmFsaWRhdG9yRm5bXSA9IG51bGwsXG4gICAgICBhc3luY1ZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3JGbnxBc3luY1ZhbGlkYXRvckZuW10gPSBudWxsKTogRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiBuZXcgRm9ybUNvbnRyb2woZm9ybVN0YXRlLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgfVxuLyoqXG4gKiBDb25zdHJ1Y3QgYSB7XFxAbGluayBGb3JtQXJyYXl9IGZyb20gdGhlIGdpdmVuIGBjb250cm9sc0NvbmZpZ2AgYXJyYXkgb2ZcbiAqIGNvbmZpZ3VyYXRpb24sIHdpdGggdGhlIGdpdmVuIG9wdGlvbmFsIGB2YWxpZGF0b3JgIGFuZCBgYXN5bmNWYWxpZGF0b3JgLlxuICogQHBhcmFtIHs/fSBjb250cm9sc0NvbmZpZ1xuICogQHBhcmFtIHs/PX0gdmFsaWRhdG9yXG4gKiBAcGFyYW0gez89fSBhc3luY1ZhbGlkYXRvclxuICogQHJldHVybiB7P31cbiAqL1xuYXJyYXkoXG4gICAgICBjb250cm9sc0NvbmZpZzogYW55W10sIHZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSBudWxsLFxuICAgICAgYXN5bmNWYWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yRm4gPSBudWxsKTogRm9ybUFycmF5IHtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGNvbnRyb2xzID0gY29udHJvbHNDb25maWcubWFwKGMgPT4gdGhpcy5fY3JlYXRlQ29udHJvbChjKSk7XG4gICAgcmV0dXJuIG5ldyBGb3JtQXJyYXkoY29udHJvbHMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IGNvbnRyb2xzQ29uZmlnXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fcmVkdWNlQ29udHJvbHMoY29udHJvbHNDb25maWc6IHtbazogc3RyaW5nXTogYW55fSk6IHtba2V5OiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2x9IHtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGNvbnRyb2xzOiB7W2tleTogc3RyaW5nXTogQWJzdHJhY3RDb250cm9sfSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGNvbnRyb2xzQ29uZmlnKS5mb3JFYWNoKGNvbnRyb2xOYW1lID0+IHtcbiAgICAgIGNvbnRyb2xzW2NvbnRyb2xOYW1lXSA9IHRoaXMuX2NyZWF0ZUNvbnRyb2woY29udHJvbHNDb25maWdbY29udHJvbE5hbWVdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29udHJvbHM7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gY29udHJvbENvbmZpZ1xuICogQHJldHVybiB7P31cbiAqL1xuX2NyZWF0ZUNvbnRyb2woY29udHJvbENvbmZpZzogYW55KTogQWJzdHJhY3RDb250cm9sIHtcbiAgICBpZiAoY29udHJvbENvbmZpZyBpbnN0YW5jZW9mIEZvcm1Db250cm9sIHx8IGNvbnRyb2xDb25maWcgaW5zdGFuY2VvZiBGb3JtR3JvdXAgfHxcbiAgICAgICAgY29udHJvbENvbmZpZyBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xuICAgICAgcmV0dXJuIGNvbnRyb2xDb25maWc7XG5cbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29udHJvbENvbmZpZykpIHtcbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gdmFsdWUgPSBjb250cm9sQ29uZmlnWzBdO1xuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyB2YWxpZGF0b3I6IFZhbGlkYXRvckZuID0gY29udHJvbENvbmZpZy5sZW5ndGggPiAxID8gY29udHJvbENvbmZpZ1sxXSA6IG51bGw7XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGFzeW5jVmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZuID0gY29udHJvbENvbmZpZy5sZW5ndGggPiAyID8gY29udHJvbENvbmZpZ1syXSA6IG51bGw7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sKHZhbHVlLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgIH1cbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogSW5qZWN0YWJsZSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG59XG5cbmZ1bmN0aW9uIEZvcm1CdWlsZGVyX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQnVpbGRlci5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbkZvcm1CdWlsZGVyLmN0b3JQYXJhbWV0ZXJzO1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZm9ybV9idWlsZGVyLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogRW50cnkgcG9pbnQgZm9yIGFsbCBwdWJsaWMgQVBJcyBvZiB0aGUgY29tbW9uIHBhY2thZ2UuXG4gKi9cblxuXG5pbXBvcnQge1ZlcnNpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBuZXcgVmVyc2lvbignNC4wLjMnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvdmVyc2lvbi50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgQWRkcyBgbm92YWxpZGF0ZWAgYXR0cmlidXRlIHRvIGFsbCBmb3JtcyBieSBkZWZhdWx0LlxuICogXG4gKiBgbm92YWxpZGF0ZWAgaXMgdXNlZCB0byBkaXNhYmxlIGJyb3dzZXIncyBuYXRpdmUgZm9ybSB2YWxpZGF0aW9uLlxuICogXG4gKiBJZiB5b3Ugd2FudCB0byB1c2UgbmF0aXZlIHZhbGlkYXRpb24gd2l0aCBBbmd1bGFyIGZvcm1zLCBqdXN0IGFkZCBgbmdOYXRpdmVWYWxpZGF0ZWAgYXR0cmlidXRlOlxuICogXG4gKiBgYGBcbiAqIDxmb3JtIG5nTmF0aXZlVmFsaWRhdGU+PC9mb3JtPlxuICogYGBgXG4gKiBcbiAqIFxcQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgY2xhc3MgTmdOb1ZhbGlkYXRlIHtcbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdmb3JtOm5vdChbbmdOb0Zvcm1dKTpub3QoW25nTmF0aXZlVmFsaWRhdGVdKScsXG4gIGhvc3Q6IHsnbm92YWxpZGF0ZSc6ICcnfSxcbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5mdW5jdGlvbiBOZ05vVmFsaWRhdGVfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbk5nTm9WYWxpZGF0ZS5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbk5nTm9WYWxpZGF0ZS5jdG9yUGFyYW1ldGVycztcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbmdfbm9fdmFsaWRhdGVfZGlyZWN0aXZlLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7TmdNb2R1bGUsIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0NoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9jaGVja2JveF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGVmYXVsdF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge05nQ29udHJvbFN0YXR1cywgTmdDb250cm9sU3RhdHVzR3JvdXB9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19jb250cm9sX3N0YXR1cyc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2Zvcm0nO1xuaW1wb3J0IHtOZ01vZGVsfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfbW9kZWwnO1xuaW1wb3J0IHtOZ01vZGVsR3JvdXB9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19tb2RlbF9ncm91cCc7XG5pbXBvcnQge05nTm9WYWxpZGF0ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX25vX3ZhbGlkYXRlX2RpcmVjdGl2ZSc7XG5pbXBvcnQge051bWJlclZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9udW1iZXJfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmFkaW9fY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge1JhbmdlVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3JhbmdlX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7Rm9ybUNvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fY29udHJvbF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbE5hbWV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fY29udHJvbF9uYW1lJztcbmltcG9ydCB7Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX2RpcmVjdGl2ZSc7XG5pbXBvcnQge0Zvcm1BcnJheU5hbWUsIEZvcm1Hcm91cE5hbWV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fZ3JvdXBfbmFtZSc7XG5pbXBvcnQge05nU2VsZWN0T3B0aW9uLCBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlbGVjdF9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7TmdTZWxlY3RNdWx0aXBsZU9wdGlvbiwgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlbGVjdF9tdWx0aXBsZV9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7Q2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvciwgRW1haWxWYWxpZGF0b3IsIE1heExlbmd0aFZhbGlkYXRvciwgTWluTGVuZ3RoVmFsaWRhdG9yLCBQYXR0ZXJuVmFsaWRhdG9yLCBSZXF1aXJlZFZhbGlkYXRvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMnO1xuXG5leHBvcnQge0NoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9jaGVja2JveF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGVmYXVsdF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge05nQ29udHJvbH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2NvbnRyb2wnO1xuZXhwb3J0IHtOZ0NvbnRyb2xTdGF0dXMsIE5nQ29udHJvbFN0YXR1c0dyb3VwfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfY29udHJvbF9zdGF0dXMnO1xuZXhwb3J0IHtOZ0Zvcm19IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19mb3JtJztcbmV4cG9ydCB7TmdNb2RlbH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX21vZGVsJztcbmV4cG9ydCB7TmdNb2RlbEdyb3VwfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfbW9kZWxfZ3JvdXAnO1xuZXhwb3J0IHtOdW1iZXJWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvbnVtYmVyX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7UmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3JhZGlvX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtSYW5nZVZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9yYW5nZV92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge0Zvcm1Db250cm9sRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2NvbnRyb2xfZGlyZWN0aXZlJztcbmV4cG9ydCB7Rm9ybUNvbnRyb2xOYW1lfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2NvbnRyb2xfbmFtZSc7XG5leHBvcnQge0Zvcm1Hcm91cERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9ncm91cF9kaXJlY3RpdmUnO1xuZXhwb3J0IHtGb3JtQXJyYXlOYW1lLCBGb3JtR3JvdXBOYW1lfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX25hbWUnO1xuZXhwb3J0IHtOZ1NlbGVjdE9wdGlvbiwgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9zZWxlY3RfY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge05nU2VsZWN0TXVsdGlwbGVPcHRpb24sIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9zZWxlY3RfbXVsdGlwbGVfY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIFNIQVJFRF9GT1JNX0RJUkVDVElWRVM6IFR5cGU8YW55PltdID0gW1xuICBOZ05vVmFsaWRhdGUsXG4gIE5nU2VsZWN0T3B0aW9uLFxuICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLFxuICBEZWZhdWx0VmFsdWVBY2Nlc3NvcixcbiAgTnVtYmVyVmFsdWVBY2Nlc3NvcixcbiAgUmFuZ2VWYWx1ZUFjY2Vzc29yLFxuICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTmdDb250cm9sU3RhdHVzLFxuICBOZ0NvbnRyb2xTdGF0dXNHcm91cCxcbiAgUmVxdWlyZWRWYWxpZGF0b3IsXG4gIE1pbkxlbmd0aFZhbGlkYXRvcixcbiAgTWF4TGVuZ3RoVmFsaWRhdG9yLFxuICBQYXR0ZXJuVmFsaWRhdG9yLFxuICBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLFxuICBFbWFpbFZhbGlkYXRvcixcbl07XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIFRFTVBMQVRFX0RSSVZFTl9ESVJFQ1RJVkVTOiBUeXBlPGFueT5bXSA9IFtOZ01vZGVsLCBOZ01vZGVsR3JvdXAsIE5nRm9ybV07XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIFJFQUNUSVZFX0RSSVZFTl9ESVJFQ1RJVkVTOiBUeXBlPGFueT5bXSA9XG4gICAgW0Zvcm1Db250cm9sRGlyZWN0aXZlLCBGb3JtR3JvdXBEaXJlY3RpdmUsIEZvcm1Db250cm9sTmFtZSwgRm9ybUdyb3VwTmFtZSwgRm9ybUFycmF5TmFtZV07XG4vKipcbiAqIEludGVybmFsIG1vZHVsZSB1c2VkIGZvciBzaGFyaW5nIGRpcmVjdGl2ZXMgYmV0d2VlbiBGb3Jtc01vZHVsZSBhbmQgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICovXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZSB7XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgZGVjbGFyYXRpb25zOiBTSEFSRURfRk9STV9ESVJFQ1RJVkVTLFxuICBleHBvcnRzOiBTSEFSRURfRk9STV9ESVJFQ1RJVkVTLFxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG59XG5cbmZ1bmN0aW9uIEludGVybmFsRm9ybXNTaGFyZWRNb2R1bGVfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5JbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlLmN0b3JQYXJhbWV0ZXJzO1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlLCBSRUFDVElWRV9EUklWRU5fRElSRUNUSVZFUywgVEVNUExBVEVfRFJJVkVOX0RJUkVDVElWRVN9IGZyb20gJy4vZGlyZWN0aXZlcyc7XG5pbXBvcnQge1JhZGlvQ29udHJvbFJlZ2lzdHJ5fSBmcm9tICcuL2RpcmVjdGl2ZXMvcmFkaW9fY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge0Zvcm1CdWlsZGVyfSBmcm9tICcuL2Zvcm1fYnVpbGRlcic7XG4vKipcbiAqIFRoZSBuZyBtb2R1bGUgZm9yIGZvcm1zLlxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3Jtc01vZHVsZSB7XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgZGVjbGFyYXRpb25zOiBURU1QTEFURV9EUklWRU5fRElSRUNUSVZFUyxcbiAgcHJvdmlkZXJzOiBbUmFkaW9Db250cm9sUmVnaXN0cnldLFxuICBleHBvcnRzOiBbSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZSwgVEVNUExBVEVfRFJJVkVOX0RJUkVDVElWRVNdXG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbn1cblxuZnVuY3Rpb24gRm9ybXNNb2R1bGVfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1zTW9kdWxlLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuRm9ybXNNb2R1bGUuY3RvclBhcmFtZXRlcnM7XG59XG5cbi8qKlxuICogVGhlIG5nIG1vZHVsZSBmb3IgcmVhY3RpdmUgZm9ybXMuXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIFJlYWN0aXZlRm9ybXNNb2R1bGUge1xuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7XG4gIGRlY2xhcmF0aW9uczogW1JFQUNUSVZFX0RSSVZFTl9ESVJFQ1RJVkVTXSxcbiAgcHJvdmlkZXJzOiBbRm9ybUJ1aWxkZXIsIFJhZGlvQ29udHJvbFJlZ2lzdHJ5XSxcbiAgZXhwb3J0czogW0ludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUsIFJFQUNUSVZFX0RSSVZFTl9ESVJFQ1RJVkVTXVxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG59XG5cbmZ1bmN0aW9uIFJlYWN0aXZlRm9ybXNNb2R1bGVfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cblJlYWN0aXZlRm9ybXNNb2R1bGUuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5SZWFjdGl2ZUZvcm1zTW9kdWxlLmN0b3JQYXJhbWV0ZXJzO1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZm9ybV9wcm92aWRlcnMudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIG1vZHVsZSBpcyB1c2VkIGZvciBoYW5kbGluZyB1c2VyIGlucHV0LCBieSBkZWZpbmluZyBhbmQgYnVpbGRpbmcgYSB7QGxpbmsgRm9ybUdyb3VwfSB0aGF0XG4gKiBjb25zaXN0cyBvZiB7QGxpbmsgRm9ybUNvbnRyb2x9IG9iamVjdHMsIGFuZCBtYXBwaW5nIHRoZW0gb250byB0aGUgRE9NLiB7QGxpbmsgRm9ybUNvbnRyb2x9XG4gKiBvYmplY3RzIGNhbiB0aGVuIGJlIHVzZWQgdG8gcmVhZCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBmb3JtIERPTSBlbGVtZW50cy5cbiAqXG4gKiBGb3JtcyBwcm92aWRlcnMgYXJlIG5vdCBpbmNsdWRlZCBpbiBkZWZhdWx0IHByb3ZpZGVyczsgeW91IG11c3QgaW1wb3J0IHRoZXNlIHByb3ZpZGVyc1xuICogZXhwbGljaXRseS5cbiAqL1xuXG5cbmV4cG9ydCB7QWJzdHJhY3RDb250cm9sRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvYWJzdHJhY3RfY29udHJvbF9kaXJlY3RpdmUnO1xuZXhwb3J0IHtBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL2Fic3RyYWN0X2Zvcm1fZ3JvdXBfZGlyZWN0aXZlJztcbmV4cG9ydCB7Q2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2NoZWNrYm94X3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7Q29udHJvbENvbnRhaW5lcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbnRyb2xfY29udGFpbmVyJztcbmV4cG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge0NPTVBPU0lUSU9OX0JVRkZFUl9NT0RFLCBEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2RlZmF1bHRfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtGb3JtfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybV9pbnRlcmZhY2UnO1xuZXhwb3J0IHtOZ0NvbnRyb2x9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19jb250cm9sJztcbmV4cG9ydCB7TmdDb250cm9sU3RhdHVzLCBOZ0NvbnRyb2xTdGF0dXNHcm91cH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2NvbnRyb2xfc3RhdHVzJztcbmV4cG9ydCB7TmdGb3JtfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfZm9ybSc7XG5leHBvcnQge05nTW9kZWx9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19tb2RlbCc7XG5leHBvcnQge05nTW9kZWxHcm91cH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX21vZGVsX2dyb3VwJztcbmV4cG9ydCB7UmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3JhZGlvX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtGb3JtQ29udHJvbERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX2RpcmVjdGl2ZSc7XG5leHBvcnQge0Zvcm1Db250cm9sTmFtZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX25hbWUnO1xuZXhwb3J0IHtGb3JtR3JvdXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fZ3JvdXBfZGlyZWN0aXZlJztcbmV4cG9ydCB7Rm9ybUFycmF5TmFtZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9ncm91cF9uYW1lJztcbmV4cG9ydCB7Rm9ybUdyb3VwTmFtZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9ncm91cF9uYW1lJztcbmV4cG9ydCB7TmdTZWxlY3RPcHRpb24sIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0X2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0X211bHRpcGxlX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtBc3luY1ZhbGlkYXRvciwgQXN5bmNWYWxpZGF0b3JGbiwgQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvciwgRW1haWxWYWxpZGF0b3IsIE1heExlbmd0aFZhbGlkYXRvciwgTWluTGVuZ3RoVmFsaWRhdG9yLCBQYXR0ZXJuVmFsaWRhdG9yLCBSZXF1aXJlZFZhbGlkYXRvciwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMnO1xuZXhwb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSAnLi9mb3JtX2J1aWxkZXInO1xuZXhwb3J0IHtBYnN0cmFjdENvbnRyb2wsIEZvcm1BcnJheSwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQge05HX0FTWU5DX1ZBTElEQVRPUlMsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvcnN9IGZyb20gJy4vdmFsaWRhdG9ycyc7XG5leHBvcnQge1ZFUlNJT059IGZyb20gJy4vdmVyc2lvbic7XG5cbmV4cG9ydCB7Rm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnLi9mb3JtX3Byb3ZpZGVycyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2Zvcm1zLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogRW50cnkgcG9pbnQgZm9yIGFsbCBwdWJsaWMgQVBJcyBvZiB0aGUgZm9ybXMgcGFja2FnZS5cbiAqL1xuZXhwb3J0IHtBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUsQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUsQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcixDb250cm9sQ29udGFpbmVyLENvbnRyb2xWYWx1ZUFjY2Vzc29yLE5HX1ZBTFVFX0FDQ0VTU09SLENPTVBPU0lUSU9OX0JVRkZFUl9NT0RFLERlZmF1bHRWYWx1ZUFjY2Vzc29yLEZvcm0sTmdDb250cm9sLE5nQ29udHJvbFN0YXR1cyxOZ0NvbnRyb2xTdGF0dXNHcm91cCxOZ0Zvcm0sTmdNb2RlbCxOZ01vZGVsR3JvdXAsUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvcixGb3JtQ29udHJvbERpcmVjdGl2ZSxGb3JtQ29udHJvbE5hbWUsRm9ybUdyb3VwRGlyZWN0aXZlLEZvcm1BcnJheU5hbWUsRm9ybUdyb3VwTmFtZSxOZ1NlbGVjdE9wdGlvbixTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcixTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLEFzeW5jVmFsaWRhdG9yLEFzeW5jVmFsaWRhdG9yRm4sQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvcixFbWFpbFZhbGlkYXRvcixNYXhMZW5ndGhWYWxpZGF0b3IsTWluTGVuZ3RoVmFsaWRhdG9yLFBhdHRlcm5WYWxpZGF0b3IsUmVxdWlyZWRWYWxpZGF0b3IsVmFsaWRhdGlvbkVycm9ycyxWYWxpZGF0b3IsVmFsaWRhdG9yRm4sRm9ybUJ1aWxkZXIsQWJzdHJhY3RDb250cm9sLEZvcm1BcnJheSxGb3JtQ29udHJvbCxGb3JtR3JvdXAsTkdfQVNZTkNfVkFMSURBVE9SUyxOR19WQUxJREFUT1JTLFZhbGlkYXRvcnMsVkVSU0lPTixGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICcuL3NyYy9mb3Jtcyc7XG5cbi8vIFRoaXMgZmlsZSBvbmx5IHJlZXhwb3J0cyBjb250ZW50IG9mIHRoZSBgc3JjYCBmb2xkZXIuIEtlZXAgaXQgdGhhdCB3YXkuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvcHVibGljX2FwaS50cyIsImltcG9ydCBcIm1hdGVyaWFsLWRlc2lnbi1saXRlL2Rpc3QvbWF0ZXJpYWwuZGVlcF9wdXJwbGUtcGluay5taW4uY3NzXCI7XG5pbXBvcnQgXCIuL2FwcC5jc3NcIjtcbmltcG9ydCBcIm1hdGVyaWFsLWRlc2lnbi1saXRlL21hdGVyaWFsLm1pbi5qc1wiO1xuXG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcblxuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5cbmltcG9ydCB7IE1haW5Nb2R1bGUgfSBmcm9tICcuL21haW4ubW9kdWxlJztcblxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGVuYWJsZVByb2RNb2RlKCk7XG59XG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoTWFpbk1vZHVsZSkudGhlbihmdW5jdGlvbihNT0RVTEVfUkVGKSB7ICAgaWYgKG1vZHVsZVtcImhvdFwiXSkgeyAgICAgbW9kdWxlW1wiaG90XCJdW1wiYWNjZXB0XCJdKCk7ICAgICAgICAgIGlmIChNT0RVTEVfUkVGLmluc3RhbmNlW1wiaG1yT25Jbml0XCJdKSB7ICAgICAgIG1vZHVsZVtcImhvdFwiXVtcImRhdGFcIl0gJiYgTU9EVUxFX1JFRi5pbnN0YW5jZVtcImhtck9uSW5pdFwiXShtb2R1bGVbXCJob3RcIl1bXCJkYXRhXCJdKTsgICAgIH0gICAgIGlmIChNT0RVTEVfUkVGLmluc3RhbmNlW1wiaG1yT25TdGF0dXNcIl0pIHsgICAgICAgbW9kdWxlW1wiaG90XCJdW1wiYXBwbHlcIl0oZnVuY3Rpb24oc3RhdHVzKSB7ICAgICAgICAgTU9EVUxFX1JFRi5pbnN0YW5jZVtcImhtck9uU3RhdHVzXCJdKHN0YXR1cyk7ICAgICAgIH0pOyAgICAgfSAgICAgaWYgKE1PRFVMRV9SRUYuaW5zdGFuY2VbXCJobXJPbkNoZWNrXCJdKSB7ICAgICAgIG1vZHVsZVtcImhvdFwiXVtcImNoZWNrXCJdKGZ1bmN0aW9uKGVyciwgb3V0ZGF0ZWRNb2R1bGVzKSB7ICAgICAgICAgTU9EVUxFX1JFRi5pbnN0YW5jZVtcImhtck9uQ2hlY2tcIl0oZXJyLCBvdXRkYXRlZE1vZHVsZXMpOyAgICAgICB9KTsgICAgIH0gICAgIGlmIChNT0RVTEVfUkVGLmluc3RhbmNlW1wiaG1yT25EZWNsaW5lXCJdKSB7ICAgICAgIG1vZHVsZVtcImhvdFwiXVtcImRlY2xpbmVcIl0oZnVuY3Rpb24oZGVwZW5kZW5jaWVzKSB7ICAgICAgICAgTU9EVUxFX1JFRi5pbnN0YW5jZVtcImhtck9uRGVjbGluZVwiXShkZXBlbmRlbmNpZXMpOyAgICAgICB9KTsgICAgIH0gICAgIG1vZHVsZVtcImhvdFwiXVtcImRpc3Bvc2VcIl0oZnVuY3Rpb24oc3RvcmUpIHsgICAgICAgTU9EVUxFX1JFRi5pbnN0YW5jZVtcImhtck9uRGVzdHJveVwiXSAmJiBNT0RVTEVfUkVGLmluc3RhbmNlW1wiaG1yT25EZXN0cm95XCJdKHN0b3JlKTsgICAgICAgTU9EVUxFX1JFRi5kZXN0cm95KCk7ICAgICAgIE1PRFVMRV9SRUYuaW5zdGFuY2VbXCJobXJBZnRlckRlc3Ryb3lcIl0gJiYgTU9EVUxFX1JFRi5pbnN0YW5jZVtcImhtckFmdGVyRGVzdHJveVwiXShzdG9yZSk7ICAgICB9KTsgICB9ICAgcmV0dXJuIE1PRFVMRV9SRUY7IH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L0Bhbmd1bGFyY2xhc3MvaG1yLWxvYWRlciEuL3NyYy9tYWluLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBtZGwgY2xhc3M9XCJtZGwtbGF5b3V0IG1kbC1qcy1sYXlvdXQgbWRsLWxheW91dC0tZml4ZWQtaGVhZGVyXCI+XG5cbiAgICAgICAgPGFwcC1oZWFkZXI+PC9hcHAtaGVhZGVyPlxuXG4gICAgICAgIDxtYWluIGNsYXNzPVwibWRsLWxheW91dF9fY29udGVudFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dF9fdGFiLXBhbmVsIGlzLWFjdGl2ZVwiIGlkPVwib3ZlcnZpZXdcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGg0IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cImxvZ29VcmxcIiAvPlxuICAgICAgICAgICAgICAgIDxhIFtocmVmXT1cInVybFwiPkxlYXJuIGFib3V0IHRoaXMgQW5ndWxhcjQgVlMuTkVUIHRlbXBsYXRlPC9hPlxuICAgICAgICAgICAgPC9oND5cblxuICAgICAgICAgICAgPGFwcC1mb290ZXI+PC9hcHAtZm9vdGVyPlxuXG4gICAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgbG9nb1VybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubG9nb1VybCA9IHJlcXVpcmUoXCIuL2Fzc2V0cy9pbWcvbG9nby5wbmdcIik7XG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vc2VydmljZXN0YWNrLm5ldC92cy10ZW1wbGF0ZXMvQW5ndWxhckFwcCc7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L0Bhbmd1bGFyY2xhc3MvaG1yLWxvYWRlciEuL3NyYy9hcHAuY29tcG9uZW50LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==