webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* Options:
Date: 2017-01-01 12:00:00
Version: 4
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:61040/

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
        this.title = 'Angular4App';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZHRvcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBwL2hvbWUvaGVsbG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBwL2hvbWUvaG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBwL3RlY2hub2xvZ3kvdGVjaG5vbG9neS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2hlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLWRlc2lnbi1saXRlL2Rpc3QvbWF0ZXJpYWwuZGVlcF9wdXJwbGUtcGluay5taW4uY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAuY3NzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1nL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FwcC9ob21lL2hlbGxvLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBwL2hvbWUvaGVsbG8uY3NzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5zY3NzIiwid2VicGFjazovLy8uL34vdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovLy90YWJzLmpzIiwid2VicGFjazovLy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vL21kbENvbXBvbmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vL3JBRi5qcyIsIndlYnBhY2s6Ly8vYnV0dG9uLmpzIiwid2VicGFjazovLy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vaWNvbi10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vL21lbnUuanMiLCJ3ZWJwYWNrOi8vL3Byb2dyZXNzLmpzIiwid2VicGFjazovLy9yYWRpby5qcyIsIndlYnBhY2s6Ly8vc2xpZGVyLmpzIiwid2VicGFjazovLy9zbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vc3dpdGNoLmpzIiwid2VicGFjazovLy90ZXh0ZmllbGQuanMiLCJ3ZWJwYWNrOi8vL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vL2RhdGEtdGFibGUuanMiLCJ3ZWJwYWNrOi8vL3JpcHBsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWxzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9hYnN0cmFjdF9jb250cm9sX2RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvY29udHJvbF9jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy92YWxpZGF0b3JzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9jb250cm9sX3ZhbHVlX2FjY2Vzc29yLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9jaGVja2JveF92YWx1ZV9hY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvZGVmYXVsdF92YWx1ZV9hY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbm9ybWFsaXplX3ZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbnVtYmVyX3ZhbHVlX2FjY2Vzc29yLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19jb250cm9sLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yYWRpb19jb250cm9sX3ZhbHVlX2FjY2Vzc29yLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yYW5nZV92YWx1ZV9hY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvc2VsZWN0X2NvbnRyb2xfdmFsdWVfYWNjZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3NlbGVjdF9tdWx0aXBsZV9jb250cm9sX3ZhbHVlX2FjY2Vzc29yLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9zaGFyZWQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL2Fic3RyYWN0X2Zvcm1fZ3JvdXBfZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19jb250cm9sX3N0YXR1cy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL21vZGVsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19mb3JtLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9lcnJvcl9leGFtcGxlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvdGVtcGxhdGVfZHJpdmVuX2Vycm9ycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbmdfbW9kZWxfZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL25nX21vZGVsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yZWFjdGl2ZV9lcnJvcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX2RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX2RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9mb3JtX2J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy92ZXJzaW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19ub192YWxpZGF0ZV9kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZm9ybV9wcm92aWRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9mb3Jtcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvcHVibGljX2FwaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJNYXRlcmlhbFRhYiIsInRhYiIsImN0eCIsImVsZW1lbnRfIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJDc3NDbGFzc2VzXyIsIk1ETF9KU19SSVBQTEVfRUZGRUNUIiwicmlwcGxlQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwiTURMX1JJUFBMRV9DT05UQUlORVIiLCJyaXBwbGUiLCJNRExfUklQUExFIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImdldEF0dHJpYnV0ZSIsImNoYXJBdCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsInNwbGl0IiwicGFuZWwiLCJxdWVyeVNlbGVjdG9yIiwicmVzZXRUYWJTdGF0ZV8iLCJyZXNldFBhbmVsU3RhdGVfIiwiQUNUSVZFX0NMQVNTIiwiTWF0ZXJpYWxMYXlvdXRUYWIiLCJ0YWJzIiwicGFuZWxzIiwibGF5b3V0Iiwic2VsZWN0VGFiIiwiY29udGVudF8iLCJJU19BQ1RJVkUiLCJ0YWJCYXJfIiwiSlNfUklQUExFX0VGRkVDVCIsIlJJUFBMRV9DT05UQUlORVIiLCJSSVBQTEUiLCJUQUJfTUFOVUFMX1NXSVRDSCIsInNob3ciLCJjb21wb25lbnRIYW5kbGVyIiwidXBncmFkZURvbSIsIm9wdEpzQ2xhc3MiLCJvcHRDc3NDbGFzcyIsInVwZ3JhZGVFbGVtZW50IiwiZWxlbWVudCIsInVwZ3JhZGVFbGVtZW50cyIsImVsZW1lbnRzIiwidXBncmFkZUFsbFJlZ2lzdGVyZWQiLCJyZWdpc3RlclVwZ3JhZGVkQ2FsbGJhY2siLCJqc0NsYXNzIiwiY2FsbGJhY2siLCJyZWdpc3RlciIsImNvbmZpZyIsImRvd25ncmFkZUVsZW1lbnRzIiwibm9kZXMiLCJmaW5kUmVnaXN0ZXJlZENsYXNzXyIsIm5hbWUiLCJvcHRSZXBsYWNlIiwiaSIsInJlZ2lzdGVyZWRDb21wb25lbnRzXyIsImxlbmd0aCIsImNsYXNzTmFtZSIsImdldFVwZ3JhZGVkTGlzdE9mRWxlbWVudF8iLCJkYXRhVXBncmFkZWQiLCJpc0VsZW1lbnRVcGdyYWRlZF8iLCJ1cGdyYWRlZExpc3QiLCJpbmRleE9mIiwiY3JlYXRlRXZlbnRfIiwiZXZlbnRUeXBlIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJ3aW5kb3ciLCJDdXN0b21FdmVudCIsImV2IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJ1cGdyYWRlRG9tSW50ZXJuYWwiLCJjc3NDbGFzcyIsInJlZ2lzdGVyZWRDbGFzcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuIiwidXBncmFkZUVsZW1lbnRJbnRlcm5hbCIsIkVsZW1lbnQiLCJFcnJvciIsInVwZ3JhZGluZ0V2IiwiZGlzcGF0Y2hFdmVudCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjbGFzc2VzVG9VcGdyYWRlIiwicHVzaCIsImZvckVhY2giLCJjb21wb25lbnQiLCJzZXRBdHRyaWJ1dGUiLCJqb2luIiwiaW5zdGFuY2UiLCJjbGFzc0NvbnN0cnVjdG9yIiwiY29tcG9uZW50Q29uZmlnUHJvcGVydHlfIiwiY3JlYXRlZENvbXBvbmVudHNfIiwiaiIsIm0iLCJjYWxsYmFja3MiLCJ3aWRnZXQiLCJ1cGdyYWRlZEV2IiwidXBncmFkZUVsZW1lbnRzSW50ZXJuYWwiLCJBcnJheSIsImlzQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJIVE1MRWxlbWVudCIsImNoaWxkcmVuIiwicmVnaXN0ZXJJbnRlcm5hbCIsIndpZGdldE1pc3NpbmciLCJuZXdDb25maWciLCJjb25zdHJ1Y3RvciIsImNsYXNzQXNTdHJpbmciLCJpdGVtIiwiaGFzT3duUHJvcGVydHkiLCJmb3VuZCIsInJlZ2lzdGVyVXBncmFkZWRDYWxsYmFja0ludGVybmFsIiwicmVnQ2xhc3MiLCJ1cGdyYWRlQWxsUmVnaXN0ZXJlZEludGVybmFsIiwiZGVjb25zdHJ1Y3RDb21wb25lbnRJbnRlcm5hbCIsImNvbXBvbmVudEluZGV4Iiwic3BsaWNlIiwidXBncmFkZXMiLCJjb21wb25lbnRQbGFjZSIsImRvd25ncmFkZU5vZGVzSW50ZXJuYWwiLCJkb3duZ3JhZGVOb2RlIiwibm9kZSIsImZpbHRlciIsIk5vZGVMaXN0IiwiTm9kZSIsIkNvbXBvbmVudENvbmZpZ1B1YmxpYyIsIkNvbXBvbmVudENvbmZpZyIsIkNvbXBvbmVudCIsImRvY3VtZW50RWxlbWVudCIsIkRhdGUiLCJub3ciLCJnZXRUaW1lIiwidmVuZG9ycyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInZwIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibGFzdFRpbWUiLCJuZXh0VGltZSIsIk1hdGgiLCJtYXgiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiTWF0ZXJpYWxCdXR0b24iLCJ0aGlzIiwiaW5pdCIsIkNvbnN0YW50XyIsIlJJUFBMRV9FRkZFQ1QiLCJibHVySGFuZGxlcl8iLCJldmVudCIsImJsdXIiLCJkaXNhYmxlIiwiZGlzYWJsZWQiLCJlbmFibGUiLCJyaXBwbGVFbGVtZW50XyIsImJvdW5kUmlwcGxlQmx1ckhhbmRsZXIiLCJiaW5kIiwiYm91bmRCdXR0b25CbHVySGFuZGxlciIsIk1hdGVyaWFsQ2hlY2tib3giLCJUSU5ZX1RJTUVPVVQiLCJJTlBVVCIsIkJPWF9PVVRMSU5FIiwiRk9DVVNfSEVMUEVSIiwiVElDS19PVVRMSU5FIiwiUklQUExFX0lHTk9SRV9FVkVOVFMiLCJSSVBQTEVfQ0VOVEVSIiwiSVNfRk9DVVNFRCIsIklTX0RJU0FCTEVEIiwiSVNfQ0hFQ0tFRCIsIklTX1VQR1JBREVEIiwib25DaGFuZ2VfIiwidXBkYXRlQ2xhc3Nlc18iLCJvbkZvY3VzXyIsIm9uQmx1cl8iLCJyZW1vdmUiLCJvbk1vdXNlVXBfIiwiYmx1cl8iLCJjaGVja0Rpc2FibGVkIiwiY2hlY2tUb2dnbGVTdGF0ZSIsImlucHV0RWxlbWVudF8iLCJjaGVja2VkIiwiY2hlY2siLCJ1bmNoZWNrIiwiYm94T3V0bGluZSIsInRpY2tDb250YWluZXIiLCJ0aWNrT3V0bGluZSIsInJpcHBsZUNvbnRhaW5lckVsZW1lbnRfIiwiYm91bmRSaXBwbGVNb3VzZVVwIiwiYm91bmRJbnB1dE9uQ2hhbmdlIiwiYm91bmRJbnB1dE9uRm9jdXMiLCJib3VuZElucHV0T25CbHVyIiwiYm91bmRFbGVtZW50TW91c2VVcCIsIk1hdGVyaWFsSWNvblRvZ2dsZSIsImJvdW5kRWxlbWVudE9uTW91c2VVcCIsIk1hdGVyaWFsTWVudSIsIlRSQU5TSVRJT05fRFVSQVRJT05fU0VDT05EUyIsIlRSQU5TSVRJT05fRFVSQVRJT05fRlJBQ1RJT04iLCJDTE9TRV9USU1FT1VUIiwiS2V5Y29kZXNfIiwiRU5URVIiLCJFU0NBUEUiLCJTUEFDRSIsIlVQX0FSUk9XIiwiRE9XTl9BUlJPVyIsIkNPTlRBSU5FUiIsIk9VVExJTkUiLCJJVEVNIiwiSVRFTV9SSVBQTEVfQ09OVEFJTkVSIiwiSVNfVklTSUJMRSIsIklTX0FOSU1BVElORyIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJVTkFMSUdORUQiLCJjb250YWluZXIiLCJwYXJlbnRFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwicmVtb3ZlQ2hpbGQiLCJjb250YWluZXJfIiwib3V0bGluZSIsIm91dGxpbmVfIiwiZm9yRWxJZCIsImZvckVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JFbGVtZW50XyIsImhhbmRsZUZvckNsaWNrXyIsImhhbmRsZUZvcktleWJvYXJkRXZlbnRfIiwiaXRlbXMiLCJib3VuZEl0ZW1LZXlkb3duXyIsImhhbmRsZUl0ZW1LZXlib2FyZEV2ZW50XyIsImJvdW5kSXRlbUNsaWNrXyIsImhhbmRsZUl0ZW1DbGlja18iLCJ0YWJJbmRleCIsImV2dCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJmb3JSZWN0Iiwic3R5bGUiLCJyaWdodCIsInRvcCIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsImxlZnQiLCJvZmZzZXRMZWZ0IiwiYm90dG9tIiwidG9nZ2xlIiwia2V5Q29kZSIsImZvY3VzIiwiY3VycmVudEluZGV4IiwidGFyZ2V0IiwiTW91c2VFdmVudCIsImNsaWNrIiwiaGlkZSIsImhhc0F0dHJpYnV0ZSIsInN0b3BQcm9wYWdhdGlvbiIsImNsb3NpbmdfIiwiYXBwbHlDbGlwXyIsImhlaWdodCIsIndpZHRoIiwiY2xpcCIsInJlbW92ZUFuaW1hdGlvbkVuZExpc3RlbmVyXyIsImFkZEFuaW1hdGlvbkVuZExpc3RlbmVyXyIsInRyYW5zaXRpb25EdXJhdGlvbiIsIml0ZW1EZWxheSIsInRyYW5zaXRpb25EZWxheSIsInBhcmVudE5vZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlUHJvcGVydHkiLCJNYXRlcmlhbFByb2dyZXNzIiwiSU5ERVRFUk1JTkFURV9DTEFTUyIsInNldFByb2dyZXNzIiwicCIsInByb2dyZXNzYmFyXyIsInNldEJ1ZmZlciIsImJ1ZmZlcmJhcl8iLCJhdXhiYXJfIiwiZWwiLCJNYXRlcmlhbFJhZGlvIiwiSlNfUkFESU8iLCJSQURJT19CVE4iLCJSQURJT19PVVRFUl9DSVJDTEUiLCJSQURJT19JTk5FUl9DSVJDTEUiLCJyYWRpb3MiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYnV0dG9uIiwiYnRuRWxlbWVudF8iLCJvbk1vdXNldXBfIiwiYm91bmRDaGFuZ2VIYW5kbGVyXyIsImJvdW5kRm9jdXNIYW5kbGVyXyIsImJvdW5kQmx1ckhhbmRsZXJfIiwiYm91bmRNb3VzZVVwSGFuZGxlcl8iLCJvdXRlckNpcmNsZSIsImlubmVyQ2lyY2xlIiwiTWF0ZXJpYWxTbGlkZXIiLCJpc0lFXyIsIm1zUG9pbnRlckVuYWJsZWQiLCJJRV9DT05UQUlORVIiLCJTTElERVJfQ09OVEFJTkVSIiwiQkFDS0dST1VORF9GTEVYIiwiQkFDS0dST1VORF9MT1dFUiIsIkJBQ0tHUk9VTkRfVVBQRVIiLCJJU19MT1dFU1RfVkFMVUUiLCJvbklucHV0XyIsInVwZGF0ZVZhbHVlU3R5bGVzXyIsIm9uQ29udGFpbmVyTW91c2VEb3duXyIsIm5ld0V2ZW50IiwiYnV0dG9ucyIsImNsaWVudFgiLCJjbGllbnRZIiwieSIsImZyYWN0aW9uIiwidmFsdWUiLCJtaW4iLCJiYWNrZ3JvdW5kTG93ZXJfIiwiZmxleCIsIndlYmtpdEZsZXgiLCJiYWNrZ3JvdW5kVXBwZXJfIiwiY2hhbmdlIiwiY29udGFpbmVySUUiLCJiYWNrZ3JvdW5kRmxleCIsImJvdW5kSW5wdXRIYW5kbGVyIiwiYm91bmRDaGFuZ2VIYW5kbGVyIiwiYm91bmRNb3VzZVVwSGFuZGxlciIsImJvdW5kQ29udGFpbmVyTW91c2VEb3duSGFuZGxlciIsIk1hdGVyaWFsU25hY2tiYXIiLCJ0ZXh0RWxlbWVudF8iLCJjc3NDbGFzc2VzXyIsIk1FU1NBR0UiLCJhY3Rpb25FbGVtZW50XyIsIkFDVElPTiIsImFjdGl2ZSIsImFjdGlvbkhhbmRsZXJfIiwidW5kZWZpbmVkIiwibWVzc2FnZV8iLCJhY3Rpb25UZXh0XyIsInF1ZXVlZE5vdGlmaWNhdGlvbnNfIiwic2V0QWN0aW9uSGlkZGVuXyIsIkFOSU1BVElPTl9MRU5HVEgiLCJTTkFDS0JBUiIsIkFDVElWRSIsImRpc3BsYXlTbmFja2Jhcl8iLCJ0ZXh0Q29udGVudCIsImNsZWFudXBfIiwidGltZW91dF8iLCJzaG93U25hY2tiYXIiLCJkYXRhIiwiY2hlY2tRdWV1ZV8iLCJzaGlmdCIsIkJvb2xlYW4iLCJyZW1vdmVBdHRyaWJ1dGUiLCJNYXRlcmlhbFNwaW5uZXIiLCJNRExfU1BJTk5FUl9MQVlFUl9DT1VOVCIsIk1ETF9TUElOTkVSX0xBWUVSIiwiTURMX1NQSU5ORVJfQ0lSQ0xFX0NMSVBQRVIiLCJNRExfU1BJTk5FUl9DSVJDTEUiLCJNRExfU1BJTk5FUl9HQVBfUEFUQ0giLCJNRExfU1BJTk5FUl9MRUZUIiwiTURMX1NQSU5ORVJfUklHSFQiLCJjcmVhdGVMYXllciIsImluZGV4IiwibGF5ZXIiLCJsZWZ0Q2xpcHBlciIsImdhcFBhdGNoIiwicmlnaHRDbGlwcGVyIiwiY2lyY2xlT3duZXJzIiwiY2lyY2xlIiwic3RvcCIsInN0YXJ0IiwiTWF0ZXJpYWxTd2l0Y2giLCJUUkFDSyIsIlRIVU1CIiwib24iLCJvZmYiLCJ0cmFjayIsInRodW1iIiwiZm9jdXNIZWxwZXIiLCJib3VuZEZvY3VzSGFuZGxlciIsImJvdW5kQmx1ckhhbmRsZXIiLCJNYXRlcmlhbFRhYnMiLCJUQUJfQ0xBU1MiLCJQQU5FTF9DTEFTUyIsIlVQR1JBREVEX0NMQVNTIiwiTURMX0pTX1JJUFBMRV9FRkZFQ1RfSUdOT1JFX0VWRU5UUyIsImluaXRUYWJzXyIsInRhYnNfIiwicGFuZWxzXyIsImsiLCJNYXRlcmlhbFRleHRmaWVsZCIsIm1heFJvd3MiLCJOT19NQVhfUk9XUyIsIk1BWF9ST1dTX0FUVFJJQlVURSIsIkxBQkVMIiwiSVNfRElSVFkiLCJJU19JTlZBTElEIiwiSEFTX1BMQUNFSE9MREVSIiwib25LZXlEb3duXyIsImN1cnJlbnRSb3dDb3VudCIsIm9uUmVzZXRfIiwiY2hlY2tWYWxpZGl0eSIsImNoZWNrRGlydHkiLCJjaGVja0ZvY3VzIiwiaW5wdXRfIiwidmFsaWRpdHkiLCJ2YWxpZCIsImxhYmVsXyIsInBhcnNlSW50IiwiaXNOYU4iLCJib3VuZFVwZGF0ZUNsYXNzZXNIYW5kbGVyIiwiYm91bmRSZXNldEhhbmRsZXIiLCJib3VuZEtleURvd25IYW5kbGVyIiwiaW52YWxpZCIsIk1hdGVyaWFsVG9vbHRpcCIsIkJPVFRPTSIsIkxFRlQiLCJSSUdIVCIsIlRPUCIsImhhbmRsZU1vdXNlRW50ZXJfIiwicHJvcHMiLCJtYXJnaW5MZWZ0Iiwib2Zmc2V0V2lkdGgiLCJtYXJnaW5Ub3AiLCJoaWRlVG9vbHRpcF8iLCJib3VuZE1vdXNlRW50ZXJIYW5kbGVyIiwiYm91bmRNb3VzZUxlYXZlQW5kU2Nyb2xsSGFuZGxlciIsIk1hdGVyaWFsTGF5b3V0IiwiTUFYX1dJRFRIIiwiVEFCX1NDUk9MTF9QSVhFTFMiLCJSRVNJWkVfVElNRU9VVCIsIk1FTlVfSUNPTiIsIkNIRVZST05fTEVGVCIsIkNIRVZST05fUklHSFQiLCJNb2RlXyIsIlNUQU5EQVJEIiwiU0VBTUVEIiwiV0FURVJGQUxMIiwiU0NST0xMIiwiSEVBREVSIiwiRFJBV0VSIiwiQ09OVEVOVCIsIkRSQVdFUl9CVE4iLCJJQ09OIiwiSEVBREVSX1NFQU1FRCIsIkhFQURFUl9XQVRFUkZBTEwiLCJIRUFERVJfU0NST0xMIiwiRklYRURfSEVBREVSIiwiT0JGVVNDQVRPUiIsIlRBQl9CQVIiLCJUQUJfQ09OVEFJTkVSIiwiVEFCIiwiVEFCX0JBUl9CVVRUT04iLCJUQUJfQkFSX0xFRlRfQlVUVE9OIiwiVEFCX0JBUl9SSUdIVF9CVVRUT04iLCJQQU5FTCIsIkhBU19EUkFXRVIiLCJIQVNfVEFCUyIsIkhBU19TQ1JPTExJTkdfSEVBREVSIiwiQ0FTVElOR19TSEFET1ciLCJJU19DT01QQUNUIiwiSVNfU01BTExfU0NSRUVOIiwiSVNfRFJBV0VSX09QRU4iLCJPTl9MQVJHRV9TQ1JFRU4iLCJPTl9TTUFMTF9TQ1JFRU4iLCJjb250ZW50U2Nyb2xsSGFuZGxlcl8iLCJoZWFkZXJfIiwiaGVhZGVyVmlzaWJsZSIsInNjcm9sbFRvcCIsImtleWJvYXJkRXZlbnRIYW5kbGVyXyIsImRyYXdlcl8iLCJ0b2dnbGVEcmF3ZXIiLCJzY3JlZW5TaXplSGFuZGxlcl8iLCJzY3JlZW5TaXplTWVkaWFRdWVyeV8iLCJtYXRjaGVzIiwib2JmdXNjYXRvcl8iLCJkcmF3ZXJUb2dnbGVIYW5kbGVyXyIsInR5cGUiLCJoZWFkZXJUcmFuc2l0aW9uRW5kSGFuZGxlcl8iLCJoZWFkZXJDbGlja0hhbmRsZXJfIiwidGFiQmFyIiwiZHJhd2VyQnV0dG9uIiwiZm9jdXNlZEVsZW1lbnQiLCJkaXJlY3RDaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJudW1DaGlsZHJlbiIsImMiLCJjaGlsZCIsInBlcnNpc3RlZCIsIm92ZXJmbG93WSIsIm1vZGUiLCJkcmF3ZXJCdXR0b25JY29uIiwiaW5uZXJIVE1MIiwiZmlyc3RDaGlsZCIsIm9iZnVzY2F0b3IiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJ0YWJDb250YWluZXIiLCJsZWZ0QnV0dG9uIiwibGVmdEJ1dHRvbkljb24iLCJzY3JvbGxMZWZ0IiwicmlnaHRCdXR0b24iLCJyaWdodEJ1dHRvbkljb24iLCJ0YWJVcGRhdGVIYW5kbGVyIiwic2Nyb2xsV2lkdGgiLCJ3aW5kb3dSZXNpemVIYW5kbGVyIiwicmVzaXplVGltZW91dElkXyIsIk1hdGVyaWFsRGF0YVRhYmxlIiwiREFUQV9UQUJMRSIsIlNFTEVDVEFCTEUiLCJTRUxFQ1RfRUxFTUVOVCIsIklTX1NFTEVDVEVEIiwic2VsZWN0Um93XyIsImNoZWNrYm94Iiwicm93Iiwib3B0X3Jvd3MiLCJjcmVhdGVDaGVja2JveF8iLCJsYWJlbCIsImxhYmVsQ2xhc3NlcyIsImZpcnN0SGVhZGVyIiwiYm9keVJvd3MiLCJmb290Um93cyIsInJvd3MiLCJjb25jYXQiLCJ0aCIsImhlYWRlckNoZWNrYm94IiwiZmlyc3RDZWxsIiwidGQiLCJub2RlTmFtZSIsInRvVXBwZXJDYXNlIiwicm93Q2hlY2tib3giLCJNYXRlcmlhbFJpcHBsZSIsIklOSVRJQUxfU0NBTEUiLCJJTklUSUFMX1NJWkUiLCJJTklUSUFMX09QQUNJVFkiLCJGSU5BTF9PUEFDSVRZIiwiRklOQUxfU0NBTEUiLCJSSVBQTEVfRUZGRUNUX0lHTk9SRV9FVkVOVFMiLCJkb3duSGFuZGxlcl8iLCJib3VuZEhlaWdodCIsImJvdW5kV2lkdGgiLCJyaXBwbGVTaXplXyIsInNxcnQiLCJpZ25vcmluZ01vdXNlRG93bl8iLCJmcmFtZUNvdW50IiwiZ2V0RnJhbWVDb3VudCIsInNldEZyYW1lQ291bnQiLCJ4IiwiYm91bmQiLCJjdXJyZW50VGFyZ2V0Iiwicm91bmQiLCJ0b3VjaGVzIiwic2V0UmlwcGxlWFkiLCJzZXRSaXBwbGVTdHlsZXMiLCJhbmltRnJhbWVIYW5kbGVyIiwidXBIYW5kbGVyXyIsImRldGFpbCIsInJlY2VudGVyaW5nIiwiZnJhbWVDb3VudF8iLCJ4XyIsInlfIiwiYm91bmREb3duSGFuZGxlciIsImJvdW5kVXBIYW5kbGVyIiwiZkMiLCJnZXRSaXBwbGVFbGVtZW50IiwibmV3WCIsIm5ld1kiLCJ0cmFuc2Zvcm1TdHJpbmciLCJzY2FsZSIsInNpemUiLCJvZmZzZXQiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRyYW5zZm9ybSIsIkV4YW1wbGVzIiwicmVzb2x2ZWRQcm9taXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7O0FBTUY7SUFBQTtJQUVBLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUM7QUFGWSxzQ0FBYTtBQUkxQixtQkFBbUI7QUFDbkIsMEJBQTBCO0FBQzFCO0lBQUE7SUFLQSxDQUFDO0lBRkcsOEJBQWMsR0FBZCxjQUFtQixNQUFNLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEQsMkJBQVcsR0FBWCxjQUFnQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyQyxZQUFDO0FBQUQsQ0FBQztBQUxZLHNCQUFLOzs7Ozs7Ozs7Ozs7QUM1QmxCLG9DQUF5QztBQUN6QyxpREFBMEQ7QUFDMUQsc0NBQTZDO0FBQzdDLHFDQUEyQztBQUMzQyx1Q0FBdUQ7QUFFdkQsOENBQStDO0FBQy9DLHdDQUFrRDtBQUNsRCx3Q0FBa0Q7QUFDbEQsMkNBQXFEO0FBRXJELHNDQUFxQztBQUVyQyxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFF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QUMsZUFBZSxDQUFDLHdCQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxVQUFVLElBQU0sRUFBRSxDQUFDLENBQUMsS0FBYSxDQUFDLENBQUMsQ0FBQztJQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQVUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUFLLENBQUM7SUFBSyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFTLE1BQU0sSUFBWSxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQU8sQ0FBQyxDQUFDLENBQUM7SUFBSyxDQUFDO0lBQUssRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBUyxHQUFHLEVBQUUsZUFBZSxJQUFZLFVBQVUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQU8sQ0FBQyxDQUFDLENBQUM7SUFBSyxDQUFDO0lBQUssRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBUyxZQUFZLElBQVksVUFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFPLENBQUMsQ0FBQyxDQUFDO0lBQUssQ0FBQztJQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFTLEtBQUssSUFBVSxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBTyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUssQ0FBQyxDQUFDLENBQUM7QUFBRyxDQUFDLENBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNoQjdrQyxvQ0FBMEM7QUEwQjFDLElBQWEsWUFBWTtJQUlyQjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQU8sQ0FBQyxHQUF1QixDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxrREFBa0QsQ0FBQztJQUNsRSxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDO0FBUlksWUFBWTtJQXhCeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxva0JBb0JUO0tBQ0osQ0FBQzs7R0FDVyxZQUFZLENBUXhCO0FBUlksb0NBQVkiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE9wdGlvbnM6XG5EYXRlOiAyMDE3LTAxLTAxIDEyOjAwOjAwXG5WZXJzaW9uOiA0XG5UaXA6IFRvIG92ZXJyaWRlIGEgRFRPIG9wdGlvbiwgcmVtb3ZlIFwiLy9cIiBwcmVmaXggYmVmb3JlIHVwZGF0aW5nXG5CYXNlVXJsOiBodHRwOi8vbG9jYWxob3N0OjYxMDQwL1xuXG4vL0dsb2JhbE5hbWVzcGFjZTogXG5FeHBvcnRBc1R5cGVzOiBUcnVlXG4vL01ha2VQcm9wZXJ0aWVzT3B0aW9uYWw6IFRydWVcbi8vQWRkU2VydmljZVN0YWNrVHlwZXM6IFRydWVcbi8vQWRkUmVzcG9uc2VTdGF0dXM6IEZhbHNlXG4vL0FkZEltcGxpY2l0VmVyc2lvbjogXG4vL0FkZERlc2NyaXB0aW9uQXNDb21tZW50czogVHJ1ZVxuLy9JbmNsdWRlVHlwZXM6IFxuLy9FeGNsdWRlVHlwZXM6IFxuLy9EZWZhdWx0SW1wb3J0czogXG4qL1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJldHVybjxUPiB7XG59XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1Jlc3BvbnNlIHtcbiAgICByZXN1bHQ6IHN0cmluZztcbn1cblxuLy8gQFJvdXRlKFwiL2hlbGxvXCIpXG4vLyBAUm91dGUoXCIvaGVsbG8ve05hbWV9XCIpXG5leHBvcnQgY2xhc3MgSGVsbG8gaW1wbGVtZW50cyBJUmV0dXJuPEhlbGxvUmVzcG9uc2U+XG57XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNyZWF0ZVJlc3BvbnNlKCkgeyByZXR1cm4gbmV3IEhlbGxvUmVzcG9uc2UoKTsgfVxuICAgIGdldFR5cGVOYW1lKCkgeyByZXR1cm4gXCJIZWxsb1wiOyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vQGFuZ3VsYXJjbGFzcy9obXItbG9hZGVyIS4vc3JjL2R0b3MudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9oZWFkZXInO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvZm9vdGVyJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9hcHAvYXBwLm1vZHVsZSc7XG5cbmltcG9ydCB7IE1ETCB9IGZyb20gJy4vc2hhcmVkL3V0aWxzJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ21haW4vMCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBNREwsXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBGb290ZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXG4gICAgICAgIEFwcE1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1haW5Nb2R1bGUge1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9AYW5ndWxhcmNsYXNzL2htci1sb2FkZXIhLi9zcmMvbWFpbi5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzJztcbmltcG9ydCB7IEhlbGxvIH0gZnJvbSAnLi4vLi4vLi4vZHRvcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaGVsbG8nLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hlbGxvLmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2hlbGxvLmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBIZWxsb0NvbXBvbmVudCB7XG4gICAgcmVzdWx0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5uYW1lQ2hhbmdlZCh0aGlzLm5hbWUpO1xuICAgIH1cblxuICAgIGFzeW5jIG5hbWVDaGFuZ2VkKG5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyBIZWxsbygpO1xuICAgICAgICAgICAgcmVxLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdmFyIHIgPSBhd2FpdCBjbGllbnQuZ2V0KHJlcSk7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHIucmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNkcmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L0Bhbmd1bGFyY2xhc3MvaG1yLWxvYWRlciEuL3NyYy9tb2R1bGVzL2FwcC9ob21lL2hlbGxvLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIZWxsb0NvbXBvbmVudCB9IGZyb20gJy4vaGVsbG8nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi0tY2VudGVyIG1kbC1ncmlkIG1kbC1ncmlkLS1uby1zcGFjaW5nIG1kbC1zaGFkb3ctLTJkcFwiPlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cInNlY3Rpb25fX3BsYXktYnRuIG1kbC1jZWxsIG1kbC1jZWxsLS0zLWNvbC1kZXNrdG9wIG1kbC1jZWxsLS0yLWNvbC10YWJsZXQgbWRsLWNlbGwtLTQtY29sLXBob25lIG1kbC1jb2xvci0tdGVhbC0xMDAgbWRsLWNvbG9yLXRleHQtLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnBsYXlfY2lyY2xlX2ZpbGxlZDwvaT5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmQgbWRsLWNlbGwgbWRsLWNlbGwtLTktY29sLWRlc2t0b3AgbWRsLWNlbGwtLTYtY29sLXRhYmxldCBtZGwtY2VsbC0tNC1jb2wtcGhvbmVcIj5cblxuICAgICAgICAgICAgICAgIDxoZWxsbyBbbmFtZV09XCJuYW1lXCI+PC9oZWxsbz4gXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9kb2NzLnNlcnZpY2VzdGFjay5uZXQvdHlwZXNjcmlwdC1hZGQtc2VydmljZXN0YWNrLXJlZmVyZW5jZVwiIGNsYXNzPVwibWRsLWJ1dHRvblwiPk1vcmUgaW5mbyBvbiBUeXBlU2NyaXB0IFNlcnZpY2VTdGFjayBSZWZlcmVuY2U8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGhlYWRpbmc6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgICAgIHRoaXMuaGVhZGluZyA9IFwiSG9tZVwiO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLmRhdGEuc3Vic2NyaWJlKHggPT4gdGhpcy5uYW1lID0geC5uYW1lKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L0Bhbmd1bGFyY2xhc3MvaG1yLWxvYWRlciEuL3NyYy9tb2R1bGVzL2FwcC9ob21lL2hvbWUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwcm9kdWN0cycsIFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi0tY2VudGVyIG1kbC1ncmlkIG1kbC1ncmlkLS1uby1zcGFjaW5nIG1kbC1zaGFkb3ctLTJkcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2xcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtZ3JpZCBtZGwtZ3JpZC0tbm8tc3BhY2luZ1wiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2xcIj57e2hlYWRpbmd9fTwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NpcmNsZS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTItY29sIG1kbC1jZWxsLS0xLWNvbC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lcl9fY2lyY2xlIG1kbC1jb2xvci0tcHJpbWFyeVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXh0IG1kbC1jZWxsIG1kbC1jZWxsLS0xMC1jb2wtZGVza3RvcCBtZGwtY2VsbC0tNi1jb2wtdGFibGV0IG1kbC1jZWxsLS0zLWNvbC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDU+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICBEb2xvcmUgZXggZGVzZXJ1bnQgYXV0ZSBmdWdpYXQgYXV0ZSBudWxsYSBlYSBzdW50IGFsaXF1YSBuaXNpIGN1cGlkYXRhdCBldS4gRHVpcyBudWxsYSB0ZW1wb3IgZG8gYXV0ZSBldCBlaXVzbW9kIHZlbGl0IGV4ZXJjaXRhdGlvbiBub3N0cnVkIHF1aXMgPGEgaHJlZj1cIiNcIj5wcm9pZGVudCBtaW5pbTwvYT4uXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NpcmNsZS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTItY29sIG1kbC1jZWxsLS0xLWNvbC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lcl9fY2lyY2xlIG1kbC1jb2xvci0tcHJpbWFyeVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXh0IG1kbC1jZWxsIG1kbC1jZWxsLS0xMC1jb2wtZGVza3RvcCBtZGwtY2VsbC0tNi1jb2wtdGFibGV0IG1kbC1jZWxsLS0zLWNvbC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDU+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICBEb2xvcmUgZXggZGVzZXJ1bnQgYXV0ZSBmdWdpYXQgYXV0ZSBudWxsYSBlYSBzdW50IGFsaXF1YSBuaXNpIGN1cGlkYXRhdCBldS4gRHVpcyBudWxsYSB0ZW1wb3IgZG8gYXV0ZSBldCBlaXVzbW9kIHZlbGl0IGV4ZXJjaXRhdGlvbiBub3N0cnVkIHF1aXMgPGEgaHJlZj1cIiNcIj5wcm9pZGVudCBtaW5pbTwvYT4uXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NpcmNsZS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTItY29sIG1kbC1jZWxsLS0xLWNvbC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lcl9fY2lyY2xlIG1kbC1jb2xvci0tcHJpbWFyeVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXh0IG1kbC1jZWxsIG1kbC1jZWxsLS0xMC1jb2wtZGVza3RvcCBtZGwtY2VsbC0tNi1jb2wtdGFibGV0IG1kbC1jZWxsLS0zLWNvbC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDU+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICBEb2xvcmUgZXggZGVzZXJ1bnQgYXV0ZSBmdWdpYXQgYXV0ZSBudWxsYSBlYSBzdW50IGFsaXF1YSBuaXNpIGN1cGlkYXRhdCBldS4gRHVpcyBudWxsYSB0ZW1wb3IgZG8gYXV0ZSBldCBlaXVzbW9kIHZlbGl0IGV4ZXJjaXRhdGlvbiBub3N0cnVkIHF1aXMgPGEgaHJlZj1cIiNcIj5wcm9pZGVudCBtaW5pbTwvYT4uXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1kbC1idXR0b25cIj5SZWFkIG91ciBmZWF0dXJlczwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3Byb2R1Y3RzLnNjc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNDb21wb25lbnQge1xuICAgIGhlYWRpbmc6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlYWRpbmcgPSBcIlByb2R1Y3RzXCI7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9AYW5ndWxhcmNsYXNzL2htci1sb2FkZXIhLi9zcmMvbW9kdWxlcy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0ZWNobm9sb2d5JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24tLWNlbnRlciBtZGwtZ3JpZCBtZGwtZ3JpZC0tbm8tc3BhY2luZyBtZGwtc2hhZG93LS0yZHBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZCBtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0Pnt7aGVhZGluZ319PC9oND5cbiAgICAgICAgICAgICAgICAgICAgRG9sb3JlIGV4IGRlc2VydW50IGF1dGUgZnVnaWF0IGF1dGUgbnVsbGEgZWEgc3VudCBhbGlxdWEgbmlzaSBjdXBpZGF0YXQgZXUuIFxuICAgICAgICAgICAgICAgICAgICBOb3N0cnVkIGluIGxhYm9yaXMgbGFib3JlIG5pc2kgYW1ldCBkbyBkb2xvciBldSBmdWdpYXQgY29uc2VjdGV0dXIgZWxpdCBjaWxsdW0gZXNzZS4gXG4gICAgICAgICAgICAgICAgICAgIFBhcmlhdHVyIG9jY2FlY2F0IG5pc2kgbGFib3JpcyB0ZW1wb3IgbGFib3JpcyBlaXVzbW9kIHF1aSBpZCBMb3JlbSBlc3NlIGNvbW1vZG8gaW4uIFxuICAgICAgICAgICAgICAgICAgICBFeGVyY2l0YXRpb24gYXV0ZSBkb2xvcmUgZGVzZXJ1bnQgY3VscGEgY29uc2VxdWF0IGVsaXQgbGFib3JlIGluY2lkaWR1bnQgZWxpdCBhbmltLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWRsLWJ1dHRvblwiPlJlYWQgb3VyIGZlYXR1cmVzPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFRlY2hub2xvZ3lDb21wb25lbnQge1xuICAgIGhlYWRpbmc6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlYWRpbmcgPSBcIlRlY2hub2xvZ3lcIjtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L0Bhbmd1bGFyY2xhc3MvaG1yLWxvYWRlciEuL3NyYy9tb2R1bGVzL2FwcC90ZWNobm9sb2d5L3RlY2hub2xvZ3kudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZm9vdGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24tLWZvb3RlciBtZGwtZ3JpZFwiPjwvc2VjdGlvbj5cbiAgICAgICAgPGZvb3RlciBjbGFzcz1cIm1kbC1tZWdhLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tbWlkZGxlLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLW1lZ2EtZm9vdGVyLS1kcm9wLWRvd24tc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWhlYWRpbmctY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWhlYWRpbmdcIj5GZWF0dXJlczwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tbGluay1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BYm91dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+VGVybXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlBhcnRuZXJzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5VcGRhdGVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tZHJvcC1kb3duLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibWRsLW1lZ2EtZm9vdGVyLS1oZWFkaW5nLWNoZWNrYm94XCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWRsLW1lZ2EtZm9vdGVyLS1oZWFkaW5nXCI+RGV0YWlsczwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tbGluay1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TcGVjPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ub29sczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UmVzb3VyY2VzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tZHJvcC1kb3duLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibWRsLW1lZ2EtZm9vdGVyLS1oZWFkaW5nLWNoZWNrYm94XCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWRsLW1lZ2EtZm9vdGVyLS1oZWFkaW5nXCI+VGVjaG5vbG9neTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tbGluay1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ib3cgaXQgd29ya3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlBhdHRlcm5zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Vc2FnZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRyYWN0czwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWRyb3AtZG93bi1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0taGVhZGluZy1jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0taGVhZGluZ1wiPkZBUTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tbGluay1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5RdWVzdGlvbnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFuc3dlcnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3QgdXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tYm90dG9tLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgTW9yZSBJbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tbGluay1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1NlcnZpY2VTdGFjay9TZXJ2aWNlU3RhY2tWU1wiPlNlcnZpY2VTdGFjayBWUy5ORVQgVGVtcGxhdGVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9AYW5ndWxhcmNsYXNzL2htci1sb2FkZXIhLi9zcmMvc2hhcmVkL2Zvb3Rlci50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4uL21vZHVsZXMvYXBwL2FwcC5tb2R1bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtZGwtbGF5b3V0X19oZWFkZXIgbWRsLWxheW91dF9faGVhZGVyLS1zY3JvbGwgbWRsLWNvbG9yLS1wcmltYXJ5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dC0tbGFyZ2Utc2NyZWVuLW9ubHkgbWRsLWxheW91dF9faGVhZGVyLXJvd1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXQtLWxhcmdlLXNjcmVlbi1vbmx5IG1kbC1sYXlvdXRfX2hlYWRlci1yb3dcIj5cbiAgICAgICAgICAgICAgICA8aDM+e3t0aXRsZX19PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXQtLWxhcmdlLXNjcmVlbi1vbmx5IG1kbC1sYXlvdXRfX2hlYWRlci1yb3dcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0X190YWItYmFyIG1kbC1qcy1yaXBwbGUtZWZmZWN0IG1kbC1jb2xvci0tcHJpbWFyeS1kYXJrXCI+XG5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgcm91dGUgb2Ygcm91dGVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwicm91dGUuZGF0YVwiIGNsYXNzPVwibWRsLWxheW91dF9fdGFiXCIgW2NsYXNzLmlzLWFjdGl2ZV09XCJpc0FjdGl2ZShyb3V0ZS5wYXRoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rPVwie3tyb3V0ZS5wYXRofX1cIj57e3JvdXRlLmRhdGEudGl0bGV9fTwvYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLWZhYiBtZGwtanMtcmlwcGxlLWVmZmVjdCBtZGwtYnV0dG9uLS1jb2xvcmVkIG1kbC1zaGFkb3ctLTRkcCBtZGwtY29sb3ItLWFjY2VudFwiIGlkPVwiYWRkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+YWRkPC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5aGlkZGVuXCI+QWRkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcbiAgICB0aXRsZSA9ICdBbmd1bGFyNEFwcCc7XG4gICAgcm91dGVzID0gcm91dGVzLmZpbHRlcigodmFsKSA9PiB2YWwucGF0aCAhPSAnJyk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICAgIGlzQWN0aXZlKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIudXJsLnN1YnN0cmluZygxKSA9PT0gcGF0aDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L0Bhbmd1bGFyY2xhc3MvaG1yLWxvYWRlciEuL3NyYy9zaGFyZWQvaGVhZGVyLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtZGVzaWduLWxpdGUvZGlzdC9tYXRlcmlhbC5kZWVwX3B1cnBsZS1waW5rLm1pbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbG9nby5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvaW1nL2xvZ28ucG5nXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHRcXFwiPlxcbiAgICA8aDQ+V2VsY29tZTwvaDQ+XFxuXFxuICAgIEFqYXggcmVxdWVzdCB1c2luZyBTZXJ2aWNlU3RhY2sncyBUeXBlU2NyaXB0IEpzb25TZXJ2aWNlQ2xpZW50IGFuZCBUeXBlZCBEVE9zOlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGRcXFwiIHN0eWxlPVxcXCJ3aWR0aDphdXRvXFxcIj5cXG5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwibWRsLXRleHRmaWVsZF9faW5wdXRcXFwiIGlkPVxcXCJOYW1lXFxcIlxcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJUeXBlIHlvdXIgbmFtZVxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiXFxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcIm5hbWVcXFwiXFxuICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVxcXCJuYW1lQ2hhbmdlZCgkZXZlbnQpXFxcIiAvPlxcblxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInJlc3VsdFxcXCI+e3tyZXN1bHR9fTwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuXFxuPC9kaXY+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9hcHAvaG9tZS9oZWxsby5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImlucHV0W3R5cGU9dGV4dF0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW46IDAgMTBweCAwIDA7IH1cXG5cXG4ucmVzdWx0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjN2ExZWExOyB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2FwcC9ob21lL2hlbGxvLmNzc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXYge1xcbiAgYmFja2dyb3VuZDogIzNlMjI4MDtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuYSB7XFxuICBjb2xvcjogI2ZmNzNhMzsgfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IudGhyb3codmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyAgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaWYgKG9bbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH07IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl07XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90c2xpYi90c2xpYi5lczYuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBUYWJzIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFRhYnMgPSBmdW5jdGlvbiBNYXRlcmlhbFRhYnMoZWxlbWVudCkge1xuICAgIC8vIFN0b3JlcyB0aGUgSFRNTCBlbGVtZW50LlxuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFRhYnMnXSA9IE1hdGVyaWFsVGFicztcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGFicy5wcm90b3R5cGUuQ29uc3RhbnRfID0ge307XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRhYnMucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIFRBQl9DTEFTUzogJ21kbC10YWJzX190YWInLFxuICAgIFBBTkVMX0NMQVNTOiAnbWRsLXRhYnNfX3BhbmVsJyxcbiAgICBBQ1RJVkVfQ0xBU1M6ICdpcy1hY3RpdmUnLFxuICAgIFVQR1JBREVEX0NMQVNTOiAnaXMtdXBncmFkZWQnLFxuICAgIE1ETF9KU19SSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIE1ETF9SSVBQTEVfQ09OVEFJTkVSOiAnbWRsLXRhYnNfX3JpcHBsZS1jb250YWluZXInLFxuICAgIE1ETF9SSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICBNRExfSlNfUklQUExFX0VGRkVDVF9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBjbGlja3MgdG8gYSB0YWJzIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGFicy5wcm90b3R5cGUuaW5pdFRhYnNfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLk1ETF9KU19SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfSlNfUklQUExFX0VGRkVDVF9JR05PUkVfRVZFTlRTKTtcbiAgICB9XG4gICAgLy8gU2VsZWN0IGVsZW1lbnQgdGFicywgZG9jdW1lbnQgcGFuZWxzXG4gICAgdGhpcy50YWJzXyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLlRBQl9DTEFTUyk7XG4gICAgdGhpcy5wYW5lbHNfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uUEFORUxfQ0xBU1MpO1xuICAgIC8vIENyZWF0ZSBuZXcgdGFicyBmb3IgZWFjaCB0YWIgZWxlbWVudFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50YWJzXy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXcgTWF0ZXJpYWxUYWIodGhpcy50YWJzX1tpXSwgdGhpcyk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlVQR1JBREVEX0NMQVNTKTtcbn07XG4vKipcbiAgICogUmVzZXQgdGFiIHN0YXRlLCBkcm9wcGluZyBhY3RpdmUgY2xhc3Nlc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGFicy5wcm90b3R5cGUucmVzZXRUYWJTdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLnRhYnNfLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHRoaXMudGFic19ba10uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLkFDVElWRV9DTEFTUyk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBSZXNldCBwYW5lbCBzdGF0ZSwgZHJvcGluZyBhY3RpdmUgY2xhc3Nlc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGFicy5wcm90b3R5cGUucmVzZXRQYW5lbFN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMucGFuZWxzXy5sZW5ndGg7IGorKykge1xuICAgICAgICB0aGlzLnBhbmVsc19bal0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLkFDVElWRV9DTEFTUyk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMuaW5pdFRhYnNfKCk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgYW4gaW5kaXZpZHVhbCB0YWIuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhYiBUaGUgSFRNTCBlbGVtZW50IGZvciB0aGUgdGFiLlxuICAgKiBAcGFyYW0ge01hdGVyaWFsVGFic30gY3R4IFRoZSBNYXRlcmlhbFRhYnMgb2JqZWN0IHRoYXQgb3ducyB0aGUgdGFiLlxuICAgKi9cbmZ1bmN0aW9uIE1hdGVyaWFsVGFiKHRhYiwgY3R4KSB7XG4gICAgaWYgKHRhYikge1xuICAgICAgICBpZiAoY3R4LmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyhjdHguQ3NzQ2xhc3Nlc18uTURMX0pTX1JJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgICAgICB2YXIgcmlwcGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY3R4LkNzc0NsYXNzZXNfLk1ETF9SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGN0eC5Dc3NDbGFzc2VzXy5NRExfSlNfUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQoY3R4LkNzc0NsYXNzZXNfLk1ETF9SSVBQTEUpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpcHBsZSk7XG4gICAgICAgICAgICB0YWIuYXBwZW5kQ2hpbGQocmlwcGxlQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHRhYi5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IHRhYi5ocmVmLnNwbGl0KCcjJylbMV07XG4gICAgICAgICAgICAgICAgdmFyIHBhbmVsID0gY3R4LmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJyMnICsgaHJlZik7XG4gICAgICAgICAgICAgICAgY3R4LnJlc2V0VGFiU3RhdGVfKCk7XG4gICAgICAgICAgICAgICAgY3R4LnJlc2V0UGFuZWxTdGF0ZV8oKTtcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZChjdHguQ3NzQ2xhc3Nlc18uQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKGN0eC5Dc3NDbGFzc2VzXy5BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxUYWJzLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFRhYnMnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXRhYnMnXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGFicy5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBMYXlvdXQgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbExheW91dCA9IGZ1bmN0aW9uIE1hdGVyaWFsTGF5b3V0KGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxMYXlvdXQnXSA9IE1hdGVyaWFsTGF5b3V0O1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLkNvbnN0YW50XyA9IHtcbiAgICBNQVhfV0lEVEg6ICcobWF4LXdpZHRoOiAxMDI0cHgpJyxcbiAgICBUQUJfU0NST0xMX1BJWEVMUzogMTAwLFxuICAgIFJFU0laRV9USU1FT1VUOiAxMDAsXG4gICAgTUVOVV9JQ09OOiAnJiN4RTVEMjsnLFxuICAgIENIRVZST05fTEVGVDogJ2NoZXZyb25fbGVmdCcsXG4gICAgQ0hFVlJPTl9SSUdIVDogJ2NoZXZyb25fcmlnaHQnXG59O1xuLyoqXG4gICAqIEtleWNvZGVzLCBmb3IgY29kZSByZWFkYWJpbGl0eS5cbiAgICpcbiAgICogQGVudW0ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuS2V5Y29kZXNfID0ge1xuICAgIEVOVEVSOiAxMyxcbiAgICBFU0NBUEU6IDI3LFxuICAgIFNQQUNFOiAzMlxufTtcbi8qKlxuICAgKiBNb2Rlcy5cbiAgICpcbiAgICogQGVudW0ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuTW9kZV8gPSB7XG4gICAgU1RBTkRBUkQ6IDAsXG4gICAgU0VBTUVEOiAxLFxuICAgIFdBVEVSRkFMTDogMixcbiAgICBTQ1JPTEw6IDNcbn07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgQ09OVEFJTkVSOiAnbWRsLWxheW91dF9fY29udGFpbmVyJyxcbiAgICBIRUFERVI6ICdtZGwtbGF5b3V0X19oZWFkZXInLFxuICAgIERSQVdFUjogJ21kbC1sYXlvdXRfX2RyYXdlcicsXG4gICAgQ09OVEVOVDogJ21kbC1sYXlvdXRfX2NvbnRlbnQnLFxuICAgIERSQVdFUl9CVE46ICdtZGwtbGF5b3V0X19kcmF3ZXItYnV0dG9uJyxcbiAgICBJQ09OOiAnbWF0ZXJpYWwtaWNvbnMnLFxuICAgIEpTX1JJUFBMRV9FRkZFQ1Q6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgUklQUExFX0NPTlRBSU5FUjogJ21kbC1sYXlvdXRfX3RhYi1yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICBSSVBQTEVfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJyxcbiAgICBIRUFERVJfU0VBTUVEOiAnbWRsLWxheW91dF9faGVhZGVyLS1zZWFtZWQnLFxuICAgIEhFQURFUl9XQVRFUkZBTEw6ICdtZGwtbGF5b3V0X19oZWFkZXItLXdhdGVyZmFsbCcsXG4gICAgSEVBREVSX1NDUk9MTDogJ21kbC1sYXlvdXRfX2hlYWRlci0tc2Nyb2xsJyxcbiAgICBGSVhFRF9IRUFERVI6ICdtZGwtbGF5b3V0LS1maXhlZC1oZWFkZXInLFxuICAgIE9CRlVTQ0FUT1I6ICdtZGwtbGF5b3V0X19vYmZ1c2NhdG9yJyxcbiAgICBUQUJfQkFSOiAnbWRsLWxheW91dF9fdGFiLWJhcicsXG4gICAgVEFCX0NPTlRBSU5FUjogJ21kbC1sYXlvdXRfX3RhYi1iYXItY29udGFpbmVyJyxcbiAgICBUQUI6ICdtZGwtbGF5b3V0X190YWInLFxuICAgIFRBQl9CQVJfQlVUVE9OOiAnbWRsLWxheW91dF9fdGFiLWJhci1idXR0b24nLFxuICAgIFRBQl9CQVJfTEVGVF9CVVRUT046ICdtZGwtbGF5b3V0X190YWItYmFyLWxlZnQtYnV0dG9uJyxcbiAgICBUQUJfQkFSX1JJR0hUX0JVVFRPTjogJ21kbC1sYXlvdXRfX3RhYi1iYXItcmlnaHQtYnV0dG9uJyxcbiAgICBUQUJfTUFOVUFMX1NXSVRDSDogJ21kbC1sYXlvdXRfX3RhYi1tYW51YWwtc3dpdGNoJyxcbiAgICBQQU5FTDogJ21kbC1sYXlvdXRfX3RhYi1wYW5lbCcsXG4gICAgSEFTX0RSQVdFUjogJ2hhcy1kcmF3ZXInLFxuICAgIEhBU19UQUJTOiAnaGFzLXRhYnMnLFxuICAgIEhBU19TQ1JPTExJTkdfSEVBREVSOiAnaGFzLXNjcm9sbGluZy1oZWFkZXInLFxuICAgIENBU1RJTkdfU0hBRE9XOiAnaXMtY2FzdGluZy1zaGFkb3cnLFxuICAgIElTX0NPTVBBQ1Q6ICdpcy1jb21wYWN0JyxcbiAgICBJU19TTUFMTF9TQ1JFRU46ICdpcy1zbWFsbC1zY3JlZW4nLFxuICAgIElTX0RSQVdFUl9PUEVOOiAnaXMtdmlzaWJsZScsXG4gICAgSVNfQUNUSVZFOiAnaXMtYWN0aXZlJyxcbiAgICBJU19VUEdSQURFRDogJ2lzLXVwZ3JhZGVkJyxcbiAgICBJU19BTklNQVRJTkc6ICdpcy1hbmltYXRpbmcnLFxuICAgIE9OX0xBUkdFX1NDUkVFTjogJ21kbC1sYXlvdXQtLWxhcmdlLXNjcmVlbi1vbmx5JyxcbiAgICBPTl9TTUFMTF9TQ1JFRU46ICdtZGwtbGF5b3V0LS1zbWFsbC1zY3JlZW4tb25seSdcbn07XG4vKipcbiAgICogSGFuZGxlcyBzY3JvbGxpbmcgb24gdGhlIGNvbnRlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLmNvbnRlbnRTY3JvbGxIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaGVhZGVyVmlzaWJsZSA9ICF0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX1NNQUxMX1NDUkVFTikgfHwgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5GSVhFRF9IRUFERVIpO1xuICAgIGlmICh0aGlzLmNvbnRlbnRfLnNjcm9sbFRvcCA+IDAgJiYgIXRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19DT01QQUNUKSkge1xuICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkNBU1RJTkdfU0hBRE9XKTtcbiAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19DT01QQUNUKTtcbiAgICAgICAgaWYgKGhlYWRlclZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZW50Xy5zY3JvbGxUb3AgPD0gMCAmJiB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCkpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5DQVNUSU5HX1NIQURPVyk7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCk7XG4gICAgICAgIGlmIChoZWFkZXJWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgYSBrZXlib2FyZCBldmVudCBvbiB0aGUgZHJhd2VyLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLmtleWJvYXJkRXZlbnRIYW5kbGVyXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAvLyBPbmx5IHJlYWN0IHdoZW4gdGhlIGRyYXdlciBpcyBvcGVuLlxuICAgIGlmIChldnQua2V5Q29kZSA9PT0gdGhpcy5LZXljb2Rlc18uRVNDQVBFICYmIHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19EUkFXRVJfT1BFTikpIHtcbiAgICAgICAgdGhpcy50b2dnbGVEcmF3ZXIoKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgY2hhbmdlcyBpbiBzY3JlZW4gc2l6ZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuc2NyZWVuU2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnNjcmVlblNpemVNZWRpYVF1ZXJ5Xy5tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1NNQUxMX1NDUkVFTik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU01BTExfU0NSRUVOKTtcbiAgICAgICAgLy8gQ29sbGFwc2UgZHJhd2VyIChpZiBhbnkpIHdoZW4gbW92aW5nIHRvIGEgbGFyZ2Ugc2NyZWVuIHNpemUuXG4gICAgICAgIGlmICh0aGlzLmRyYXdlcl8pIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRFJBV0VSX09QRU4pO1xuICAgICAgICAgICAgdGhpcy5vYmZ1c2NhdG9yXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRFJBV0VSX09QRU4pO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGVzIGV2ZW50cyBvZiBkcmF3ZXIgYnV0dG9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLmRyYXdlclRvZ2dsZUhhbmRsZXJfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmIChldnQgJiYgZXZ0LnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLlNQQUNFIHx8IGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5FTlRFUikge1xuICAgICAgICAgICAgLy8gcHJldmVudCBzY3JvbGxpbmcgaW4gZHJhd2VyIG5hdlxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IG90aGVyIGtleXNcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZURyYXdlcigpO1xufTtcbi8qKlxuICAgKiBIYW5kbGVzICh1bilzZXR0aW5nIHRoZSBgaXMtYW5pbWF0aW5nYCBjbGFzc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5oZWFkZXJUcmFuc2l0aW9uRW5kSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xufTtcbi8qKlxuICAgKiBIYW5kbGVzIGV4cGFuZGluZyB0aGUgaGVhZGVyIG9uIGNsaWNrXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLmhlYWRlckNsaWNrSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19DT01QQUNUKSkge1xuICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0NPTVBBQ1QpO1xuICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBSZXNldCB0YWIgc3RhdGUsIGRyb3BwaW5nIGFjdGl2ZSBjbGFzc2VzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLnJlc2V0VGFiU3RhdGVfID0gZnVuY3Rpb24gKHRhYkJhcikge1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGFiQmFyLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHRhYkJhcltrXS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIFJlc2V0IHBhbmVsIHN0YXRlLCBkcm9waW5nIGFjdGl2ZSBjbGFzc2VzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLnJlc2V0UGFuZWxTdGF0ZV8gPSBmdW5jdGlvbiAocGFuZWxzKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYW5lbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFuZWxzW2pdLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgIH1cbn07XG4vKipcbiAgKiBUb2dnbGUgZHJhd2VyIHN0YXRlXG4gICpcbiAgKiBAcHVibGljXG4gICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUudG9nZ2xlRHJhd2VyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkcmF3ZXJCdXR0b24gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5EUkFXRVJfQlROKTtcbiAgICB0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RSQVdFUl9PUEVOKTtcbiAgICB0aGlzLm9iZnVzY2F0b3JfLmNsYXNzTGlzdC50b2dnbGUodGhpcy5Dc3NDbGFzc2VzXy5JU19EUkFXRVJfT1BFTik7XG4gICAgLy8gU2V0IGFjY2Vzc2liaWxpdHkgcHJvcGVydGllcy5cbiAgICBpZiAodGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX0RSQVdFUl9PUEVOKSkge1xuICAgICAgICB0aGlzLmRyYXdlcl8uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICBkcmF3ZXJCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYXdlcl8uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIGRyYXdlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlWyd0b2dnbGVEcmF3ZXInXSA9IE1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS50b2dnbGVEcmF3ZXI7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5DT05UQUlORVIpO1xuICAgICAgICB2YXIgZm9jdXNlZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJzpmb2N1cycpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgdGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICBpZiAoZm9jdXNlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGZvY3VzZWRFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpcmVjdENoaWxkcmVuID0gdGhpcy5lbGVtZW50Xy5jaGlsZE5vZGVzO1xuICAgICAgICB2YXIgbnVtQ2hpbGRyZW4gPSBkaXJlY3RDaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgbnVtQ2hpbGRyZW47IGMrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gZGlyZWN0Q2hpbGRyZW5bY107XG4gICAgICAgICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0ICYmIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkhFQURFUikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcl8gPSBjaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QgJiYgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uRFJBV0VSKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2VyXyA9IGNoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdCAmJiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5DT05URU5UKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudF8gPSBjaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZXNob3cnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUucGVyc2lzdGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gd2hlbiBwYWdlIGlzIGxvYWRlZCBmcm9tIGJhY2svZm9yd2FyZCBjYWNoZVxuICAgICAgICAgICAgICAgIC8vIHRyaWdnZXIgcmVwYWludCB0byBsZXQgbGF5b3V0IHNjcm9sbCBpbiBzYWZhcmlcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUub3ZlcmZsb3dZID0gJyc7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlcl8pIHtcbiAgICAgICAgICAgIHRoaXMudGFiQmFyXyA9IHRoaXMuaGVhZGVyXy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uVEFCX0JBUik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1vZGUgPSB0aGlzLk1vZGVfLlNUQU5EQVJEO1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJfKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkhFQURFUl9TRUFNRUQpKSB7XG4gICAgICAgICAgICAgICAgbW9kZSA9IHRoaXMuTW9kZV8uU0VBTUVEO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSEVBREVSX1dBVEVSRkFMTCkpIHtcbiAgICAgICAgICAgICAgICBtb2RlID0gdGhpcy5Nb2RlXy5XQVRFUkZBTEw7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmhlYWRlclRyYW5zaXRpb25FbmRIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcl8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhlYWRlckNsaWNrSGFuZGxlcl8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5IRUFERVJfU0NST0xMKSkge1xuICAgICAgICAgICAgICAgIG1vZGUgPSB0aGlzLk1vZGVfLlNDUk9MTDtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkhBU19TQ1JPTExJTkdfSEVBREVSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb2RlID09PSB0aGlzLk1vZGVfLlNUQU5EQVJEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5DQVNUSU5HX1NIQURPVyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiQmFyXykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYkJhcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkNBU1RJTkdfU0hBRE9XKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IHRoaXMuTW9kZV8uU0VBTUVEIHx8IG1vZGUgPT09IHRoaXMuTW9kZV8uU0NST0xMKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5DQVNUSU5HX1NIQURPVyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiQmFyXykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYkJhcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLkNBU1RJTkdfU0hBRE9XKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IHRoaXMuTW9kZV8uV0FURVJGQUxMKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGFuZCByZW1vdmUgc2hhZG93cyBkZXBlbmRpbmcgb24gc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAgICAgICAgICAgIC8vIEFsc28gYWRkL3JlbW92ZSBhdXhpbGlhcnkgY2xhc3MgZm9yIHN0eWxpbmcgb2YgdGhlIGNvbXBhY3QgdmVyc2lvbiBvZlxuICAgICAgICAgICAgICAgIC8vIHRoZSBoZWFkZXIuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Xy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNvbnRlbnRTY3JvbGxIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRTY3JvbGxIYW5kbGVyXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBkcmF3ZXIgdG9nZ2xpbmcgYnV0dG9uIHRvIG91ciBsYXlvdXQsIGlmIHdlIGhhdmUgYW4gb3BlbmFibGUgZHJhd2VyLlxuICAgICAgICBpZiAodGhpcy5kcmF3ZXJfKSB7XG4gICAgICAgICAgICB2YXIgZHJhd2VyQnV0dG9uID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uRFJBV0VSX0JUTik7XG4gICAgICAgICAgICBpZiAoIWRyYXdlckJ1dHRvbikge1xuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b24uc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkRSQVdFUl9CVE4pO1xuICAgICAgICAgICAgICAgIHZhciBkcmF3ZXJCdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklDT04pO1xuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbkljb24uaW5uZXJIVE1MID0gdGhpcy5Db25zdGFudF8uTUVOVV9JQ09OO1xuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbi5hcHBlbmRDaGlsZChkcmF3ZXJCdXR0b25JY29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uT05fTEFSR0VfU0NSRUVOKSkge1xuICAgICAgICAgICAgICAgIC8vSWYgZHJhd2VyIGhhcyBPTl9MQVJHRV9TQ1JFRU4gY2xhc3MgdGhlbiBhZGQgaXQgdG8gdGhlIGRyYXdlciB0b2dnbGUgYnV0dG9uIGFzIHdlbGwuXG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5PTl9MQVJHRV9TQ1JFRU4pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uT05fU01BTExfU0NSRUVOKSkge1xuICAgICAgICAgICAgICAgIC8vSWYgZHJhd2VyIGhhcyBPTl9TTUFMTF9TQ1JFRU4gY2xhc3MgdGhlbiBhZGQgaXQgdG8gdGhlIGRyYXdlciB0b2dnbGUgYnV0dG9uIGFzIHdlbGwuXG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5PTl9TTUFMTF9TQ1JFRU4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJhd2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kcmF3ZXJUb2dnbGVIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIGRyYXdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5kcmF3ZXJUb2dnbGVIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIC8vIEFkZCBhIGNsYXNzIGlmIHRoZSBsYXlvdXQgaGFzIGEgZHJhd2VyLCBmb3IgYWx0ZXJpbmcgdGhlIGxlZnQgcGFkZGluZy5cbiAgICAgICAgICAgIC8vIEFkZHMgdGhlIEhBU19EUkFXRVIgdG8gdGhlIGVsZW1lbnRzIHNpbmNlIHRoaXMuaGVhZGVyXyBtYXkgb3IgbWF5XG4gICAgICAgICAgICAvLyBub3QgYmUgcHJlc2VudC5cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkhBU19EUkFXRVIpO1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGZpeGVkIGhlYWRlciwgYWRkIHRoZSBidXR0b24gdG8gdGhlIGhlYWRlciByYXRoZXIgdGhhblxuICAgICAgICAgICAgLy8gdGhlIGxheW91dC5cbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkZJWEVEX0hFQURFUikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcl8uaW5zZXJ0QmVmb3JlKGRyYXdlckJ1dHRvbiwgdGhpcy5oZWFkZXJfLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmluc2VydEJlZm9yZShkcmF3ZXJCdXR0b24sIHRoaXMuY29udGVudF8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9iZnVzY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG9iZnVzY2F0b3IuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk9CRlVTQ0FUT1IpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChvYmZ1c2NhdG9yKTtcbiAgICAgICAgICAgIG9iZnVzY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRyYXdlclRvZ2dsZUhhbmRsZXJfLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5vYmZ1c2NhdG9yXyA9IG9iZnVzY2F0b3I7XG4gICAgICAgICAgICB0aGlzLmRyYXdlcl8uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5Ym9hcmRFdmVudEhhbmRsZXJfLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5kcmF3ZXJfLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEtlZXAgYW4gZXllIG9uIHNjcmVlbiBzaXplLCBhbmQgYWRkL3JlbW92ZSBhdXhpbGlhcnkgY2xhc3MgZm9yIHN0eWxpbmdcbiAgICAgICAgLy8gb2Ygc21hbGwgc2NyZWVucy5cbiAgICAgICAgdGhpcy5zY3JlZW5TaXplTWVkaWFRdWVyeV8gPSB3aW5kb3cubWF0Y2hNZWRpYSh0aGlzLkNvbnN0YW50Xy5NQVhfV0lEVEgpO1xuICAgICAgICB0aGlzLnNjcmVlblNpemVNZWRpYVF1ZXJ5Xy5hZGRMaXN0ZW5lcih0aGlzLnNjcmVlblNpemVIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5zY3JlZW5TaXplSGFuZGxlcl8oKTtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0YWJzLCBpZiBhbnkuXG4gICAgICAgIGlmICh0aGlzLmhlYWRlcl8gJiYgdGhpcy50YWJCYXJfKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5IQVNfVEFCUyk7XG4gICAgICAgICAgICB2YXIgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRBQl9DT05UQUlORVIpO1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmluc2VydEJlZm9yZSh0YWJDb250YWluZXIsIHRoaXMudGFiQmFyXyk7XG4gICAgICAgICAgICB0aGlzLmhlYWRlcl8ucmVtb3ZlQ2hpbGQodGhpcy50YWJCYXJfKTtcbiAgICAgICAgICAgIHZhciBsZWZ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZWZ0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UQUJfQkFSX0JVVFRPTik7XG4gICAgICAgICAgICBsZWZ0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UQUJfQkFSX0xFRlRfQlVUVE9OKTtcbiAgICAgICAgICAgIHZhciBsZWZ0QnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIGxlZnRCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JQ09OKTtcbiAgICAgICAgICAgIGxlZnRCdXR0b25JY29uLnRleHRDb250ZW50ID0gdGhpcy5Db25zdGFudF8uQ0hFVlJPTl9MRUZUO1xuICAgICAgICAgICAgbGVmdEJ1dHRvbi5hcHBlbmRDaGlsZChsZWZ0QnV0dG9uSWNvbik7XG4gICAgICAgICAgICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiQmFyXy5zY3JvbGxMZWZ0IC09IHRoaXMuQ29uc3RhbnRfLlRBQl9TQ1JPTExfUElYRUxTO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHZhciByaWdodEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmlnaHRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRBQl9CQVJfQlVUVE9OKTtcbiAgICAgICAgICAgIHJpZ2h0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UQUJfQkFSX1JJR0hUX0JVVFRPTik7XG4gICAgICAgICAgICB2YXIgcmlnaHRCdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgcmlnaHRCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JQ09OKTtcbiAgICAgICAgICAgIHJpZ2h0QnV0dG9uSWNvbi50ZXh0Q29udGVudCA9IHRoaXMuQ29uc3RhbnRfLkNIRVZST05fUklHSFQ7XG4gICAgICAgICAgICByaWdodEJ1dHRvbi5hcHBlbmRDaGlsZChyaWdodEJ1dHRvbkljb24pO1xuICAgICAgICAgICAgcmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJCYXJfLnNjcm9sbExlZnQgKz0gdGhpcy5Db25zdGFudF8uVEFCX1NDUk9MTF9QSVhFTFM7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRCdXR0b24pO1xuICAgICAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGFiQmFyXyk7XG4gICAgICAgICAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRCdXR0b24pO1xuICAgICAgICAgICAgLy8gQWRkIGFuZCByZW1vdmUgdGFiIGJ1dHRvbnMgZGVwZW5kaW5nIG9uIHNjcm9sbCBwb3NpdGlvbiBhbmQgdG90YWxcbiAgICAgICAgICAgIC8vIHdpbmRvdyBzaXplLlxuICAgICAgICAgICAgdmFyIHRhYlVwZGF0ZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiQmFyXy5zY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYkJhcl8uc2Nyb2xsTGVmdCA8IHRoaXMudGFiQmFyXy5zY3JvbGxXaWR0aCAtIHRoaXMudGFiQmFyXy5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICByaWdodEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByaWdodEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnRhYkJhcl8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGFiVXBkYXRlSGFuZGxlcik7XG4gICAgICAgICAgICB0YWJVcGRhdGVIYW5kbGVyKCk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGFicyB3aGVuIHRoZSB3aW5kb3cgcmVzaXplcy5cbiAgICAgICAgICAgIHZhciB3aW5kb3dSZXNpemVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIFVzZSB0aW1lb3V0cyB0byBtYWtlIHN1cmUgaXQgZG9lc24ndCBoYXBwZW4gdG9vIG9mdGVuLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc2l6ZVRpbWVvdXRJZF8pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dElkXyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplVGltZW91dElkXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0YWJVcGRhdGVIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzaXplVGltZW91dElkXyA9IG51bGw7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCB0aGlzLkNvbnN0YW50Xy5SRVNJWkVfVElNRU9VVCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgd2luZG93UmVzaXplSGFuZGxlcik7XG4gICAgICAgICAgICBpZiAodGhpcy50YWJCYXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkpTX1JJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJCYXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfSUdOT1JFX0VWRU5UUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZWxlY3QgZWxlbWVudCB0YWJzLCBkb2N1bWVudCBwYW5lbHNcbiAgICAgICAgICAgIHZhciB0YWJzID0gdGhpcy50YWJCYXJfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5UQUIpO1xuICAgICAgICAgICAgdmFyIHBhbmVscyA9IHRoaXMuY29udGVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLlBBTkVMKTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgdGFicyBmb3IgZWFjaCB0YWIgZWxlbWVudFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmV3IE1hdGVyaWFsTGF5b3V0VGFiKHRhYnNbaV0sIHRhYnMsIHBhbmVscywgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICAgIH1cbn07XG4vKipcbiAgICogQ29uc3RydWN0b3IgZm9yIGFuIGluZGl2aWR1YWwgdGFiLlxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFiIFRoZSBIVE1MIGVsZW1lbnQgZm9yIHRoZSB0YWIuXG4gICAqIEBwYXJhbSB7IUFycmF5PEhUTUxFbGVtZW50Pn0gdGFicyBBcnJheSB3aXRoIEhUTUwgZWxlbWVudHMgZm9yIGFsbCB0YWJzLlxuICAgKiBAcGFyYW0geyFBcnJheTxIVE1MRWxlbWVudD59IHBhbmVscyBBcnJheSB3aXRoIEhUTUwgZWxlbWVudHMgZm9yIGFsbCBwYW5lbHMuXG4gICAqIEBwYXJhbSB7TWF0ZXJpYWxMYXlvdXR9IGxheW91dCBUaGUgTWF0ZXJpYWxMYXlvdXQgb2JqZWN0IHRoYXQgb3ducyB0aGUgdGFiLlxuICAgKi9cbmZ1bmN0aW9uIE1hdGVyaWFsTGF5b3V0VGFiKHRhYiwgdGFicywgcGFuZWxzLCBsYXlvdXQpIHtcbiAgICAvKipcbiAgICAgKiBBdXhpbGlhcnkgbWV0aG9kIHRvIHByb2dyYW1tYXRpY2FsbHkgc2VsZWN0IGEgdGFiIGluIHRoZSBVSS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZWxlY3RUYWIoKSB7XG4gICAgICAgIHZhciBocmVmID0gdGFiLmhyZWYuc3BsaXQoJyMnKVsxXTtcbiAgICAgICAgdmFyIHBhbmVsID0gbGF5b3V0LmNvbnRlbnRfLnF1ZXJ5U2VsZWN0b3IoJyMnICsgaHJlZik7XG4gICAgICAgIGxheW91dC5yZXNldFRhYlN0YXRlXyh0YWJzKTtcbiAgICAgICAgbGF5b3V0LnJlc2V0UGFuZWxTdGF0ZV8ocGFuZWxzKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQobGF5b3V0LkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQobGF5b3V0LkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgfVxuICAgIGlmIChsYXlvdXQudGFiQmFyXy5jbGFzc0xpc3QuY29udGFpbnMobGF5b3V0LkNzc0NsYXNzZXNfLkpTX1JJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgIHZhciByaXBwbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGxheW91dC5Dc3NDbGFzc2VzXy5SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgcmlwcGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQobGF5b3V0LkNzc0NsYXNzZXNfLkpTX1JJUFBMRV9FRkZFQ1QpO1xuICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICByaXBwbGUuY2xhc3NMaXN0LmFkZChsYXlvdXQuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgcmlwcGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpcHBsZSk7XG4gICAgICAgIHRhYi5hcHBlbmRDaGlsZChyaXBwbGVDb250YWluZXIpO1xuICAgIH1cbiAgICBpZiAoIWxheW91dC50YWJCYXJfLmNsYXNzTGlzdC5jb250YWlucyhsYXlvdXQuQ3NzQ2xhc3Nlc18uVEFCX01BTlVBTF9TV0lUQ0gpKSB7XG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAodGFiLmdldEF0dHJpYnV0ZSgnaHJlZicpLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNlbGVjdFRhYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGFiLnNob3cgPSBzZWxlY3RUYWI7XG59XG53aW5kb3dbJ01hdGVyaWFsTGF5b3V0VGFiJ10gPSBNYXRlcmlhbExheW91dFRhYjtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbExheW91dCxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxMYXlvdXQnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLWxheW91dCdcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsYXlvdXQuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBBIGNvbXBvbmVudCBoYW5kbGVyIGludGVyZmFjZSB1c2luZyB0aGUgcmV2ZWFsaW5nIG1vZHVsZSBkZXNpZ24gcGF0dGVybi5cbiAqIE1vcmUgZGV0YWlscyBvbiB0aGlzIGRlc2lnbiBwYXR0ZXJuIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gKlxuICogQGF1dGhvciBKYXNvbiBNYXllcy5cbiAqL1xuLyogZXhwb3J0ZWQgY29tcG9uZW50SGFuZGxlciAqL1xuXG4vLyBQcmUtZGVmaW5pbmcgdGhlIGNvbXBvbmVudEhhbmRsZXIgaW50ZXJmYWNlLCBmb3IgY2xvc3VyZSBkb2N1bWVudGF0aW9uIGFuZFxuLy8gc3RhdGljIHZlcmlmaWNhdGlvbi5cbnZhciBjb21wb25lbnRIYW5kbGVyID0ge1xuICAvKipcbiAgICogU2VhcmNoZXMgZXhpc3RpbmcgRE9NIGZvciBlbGVtZW50cyBvZiBvdXIgY29tcG9uZW50IHR5cGUgYW5kIHVwZ3JhZGVzIHRoZW1cbiAgICogaWYgdGhleSBoYXZlIG5vdCBhbHJlYWR5IGJlZW4gdXBncmFkZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0SnNDbGFzcyB0aGUgcHJvZ3JhbWF0aWMgbmFtZSBvZiB0aGUgZWxlbWVudCBjbGFzcyB3ZVxuICAgKiBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZi5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRDc3NDbGFzcyB0aGUgbmFtZSBvZiB0aGUgQ1NTIGNsYXNzIGVsZW1lbnRzIG9mIHRoaXNcbiAgICogdHlwZSB3aWxsIGhhdmUuXG4gICAqL1xuICB1cGdyYWRlRG9tOiBmdW5jdGlvbihvcHRKc0NsYXNzLCBvcHRDc3NDbGFzcykge30sXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhIHNwZWNpZmljIGVsZW1lbnQgcmF0aGVyIHRoYW4gYWxsIGluIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgd2Ugd2lzaCB0byB1cGdyYWRlLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdEpzQ2xhc3MgT3B0aW9uYWwgbmFtZSBvZiB0aGUgY2xhc3Mgd2Ugd2FudCB0byB1cGdyYWRlXG4gICAqIHRoZSBlbGVtZW50IHRvLlxuICAgKi9cbiAgdXBncmFkZUVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdEpzQ2xhc3MpIHt9LFxuICAvKipcbiAgICogVXBncmFkZXMgYSBzcGVjaWZpYyBsaXN0IG9mIGVsZW1lbnRzIHJhdGhlciB0aGFuIGFsbCBpbiB0aGUgRE9NLlxuICAgKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fCFBcnJheTwhRWxlbWVudD58IU5vZGVMaXN0fCFIVE1MQ29sbGVjdGlvbn0gZWxlbWVudHNcbiAgICogVGhlIGVsZW1lbnRzIHdlIHdpc2ggdG8gdXBncmFkZS5cbiAgICovXG4gIHVwZ3JhZGVFbGVtZW50czogZnVuY3Rpb24oZWxlbWVudHMpIHt9LFxuICAvKipcbiAgICogVXBncmFkZXMgYWxsIHJlZ2lzdGVyZWQgY29tcG9uZW50cyBmb3VuZCBpbiB0aGUgY3VycmVudCBET00uIFRoaXMgaXNcbiAgICogYXV0b21hdGljYWxseSBjYWxsZWQgb24gd2luZG93IGxvYWQuXG4gICAqL1xuICB1cGdyYWRlQWxsUmVnaXN0ZXJlZDogZnVuY3Rpb24oKSB7fSxcbiAgLyoqXG4gICAqIEFsbG93cyB1c2VyIHRvIGJlIGFsZXJ0ZWQgdG8gYW55IHVwZ3JhZGVzIHRoYXQgYXJlIHBlcmZvcm1lZCBmb3IgYSBnaXZlblxuICAgKiBjb21wb25lbnQgdHlwZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ganNDbGFzcyBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgTURMIGNvbXBvbmVudCB3ZSB3aXNoXG4gICAqIHRvIGhvb2sgaW50byBmb3IgYW55IHVwZ3JhZGVzIHBlcmZvcm1lZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbighSFRNTEVsZW1lbnQpfSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY2FsbCB1cG9uIGFuXG4gICAqIHVwZ3JhZGUuIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGV4cGVjdCAxIHBhcmFtZXRlciAtIHRoZSBIVE1MRWxlbWVudCB3aGljaFxuICAgKiBnb3QgdXBncmFkZWQuXG4gICAqL1xuICByZWdpc3RlclVwZ3JhZGVkQ2FsbGJhY2s6IGZ1bmN0aW9uKGpzQ2xhc3MsIGNhbGxiYWNrKSB7fSxcbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNsYXNzIGZvciBmdXR1cmUgdXNlIGFuZCBhdHRlbXB0cyB0byB1cGdyYWRlIGV4aXN0aW5nIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHtjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZ1B1YmxpY30gY29uZmlnIHRoZSByZWdpc3RyYXRpb24gY29uZmlndXJhdGlvblxuICAgKi9cbiAgcmVnaXN0ZXI6IGZ1bmN0aW9uKGNvbmZpZykge30sXG4gIC8qKlxuICAgKiBEb3duZ3JhZGUgZWl0aGVyIGEgZ2l2ZW4gbm9kZSwgYW4gYXJyYXkgb2Ygbm9kZXMsIG9yIGEgTm9kZUxpc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7IU5vZGV8IUFycmF5PCFOb2RlPnwhTm9kZUxpc3R9IG5vZGVzXG4gICAqL1xuICBkb3duZ3JhZGVFbGVtZW50czogZnVuY3Rpb24obm9kZXMpIHt9XG59O1xuXG5jb21wb25lbnRIYW5kbGVyID0gKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqIEB0eXBlIHshQXJyYXk8Y29tcG9uZW50SGFuZGxlci5Db21wb25lbnRDb25maWc+fSAqL1xuICB2YXIgcmVnaXN0ZXJlZENvbXBvbmVudHNfID0gW107XG5cbiAgLyoqIEB0eXBlIHshQXJyYXk8Y29tcG9uZW50SGFuZGxlci5Db21wb25lbnQ+fSAqL1xuICB2YXIgY3JlYXRlZENvbXBvbmVudHNfID0gW107XG5cbiAgdmFyIGNvbXBvbmVudENvbmZpZ1Byb3BlcnR5XyA9ICdtZGxDb21wb25lbnRDb25maWdJbnRlcm5hbF8nO1xuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyByZWdpc3RlcmVkIGNvbXBvbmVudHMgZm9yIGEgY2xhc3Mgd2UgYXJlIGludGVyZXN0ZWQgaW4gdXNpbmcuXG4gICAqIE9wdGlvbmFsbHkgcmVwbGFjZXMgYSBtYXRjaCB3aXRoIHBhc3NlZCBvYmplY3QgaWYgc3BlY2lmaWVkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiBhIGNsYXNzIHdlIHdhbnQgdG8gdXNlLlxuICAgKiBAcGFyYW0ge2NvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50Q29uZmlnPX0gb3B0UmVwbGFjZSBPcHRpb25hbCBvYmplY3QgdG8gcmVwbGFjZSBtYXRjaCB3aXRoLlxuICAgKiBAcmV0dXJuIHshT2JqZWN0fGJvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBmaW5kUmVnaXN0ZXJlZENsYXNzXyhuYW1lLCBvcHRSZXBsYWNlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkQ29tcG9uZW50c18ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWdpc3RlcmVkQ29tcG9uZW50c19baV0uY2xhc3NOYW1lID09PSBuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0UmVwbGFjZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZWdpc3RlcmVkQ29tcG9uZW50c19baV0gPSBvcHRSZXBsYWNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWdpc3RlcmVkQ29tcG9uZW50c19baV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBjbGFzc05hbWVzIG9mIHRoZSB1cGdyYWRlZCBjbGFzc2VzIG9uIHRoZSBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIGZldGNoIGRhdGEgZnJvbS5cbiAgICogQHJldHVybiB7IUFycmF5PHN0cmluZz59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBnZXRVcGdyYWRlZExpc3RPZkVsZW1lbnRfKGVsZW1lbnQpIHtcbiAgICB2YXIgZGF0YVVwZ3JhZGVkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXBncmFkZWQnKTtcbiAgICAvLyBVc2UgYFsnJ11gIGFzIGRlZmF1bHQgdmFsdWUgdG8gY29uZm9ybSB0aGUgYCxuYW1lLG5hbWUuLi5gIHN0eWxlLlxuICAgIHJldHVybiBkYXRhVXBncmFkZWQgPT09IG51bGwgPyBbJyddIDogZGF0YVVwZ3JhZGVkLnNwbGl0KCcsJyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gdXBncmFkZWQgZm9yIHRoZSBnaXZlblxuICAgKiBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB3ZSB3YW50IHRvIGNoZWNrLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ganNDbGFzcyBUaGUgY2xhc3MgdG8gY2hlY2sgZm9yLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIGlzRWxlbWVudFVwZ3JhZGVkXyhlbGVtZW50LCBqc0NsYXNzKSB7XG4gICAgdmFyIHVwZ3JhZGVkTGlzdCA9IGdldFVwZ3JhZGVkTGlzdE9mRWxlbWVudF8oZWxlbWVudCk7XG4gICAgcmV0dXJuIHVwZ3JhZGVkTGlzdC5pbmRleE9mKGpzQ2xhc3MpICE9PSAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gZXZlbnQgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIFRoZSB0eXBlIG5hbWUgb2YgdGhlIGV2ZW50LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJ1YmJsZXMgV2hldGhlciB0aGUgZXZlbnQgc2hvdWxkIGJ1YmJsZSB1cCB0aGUgRE9NLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNhbmNlbGFibGUgV2hldGhlciB0aGUgZXZlbnQgY2FuIGJlIGNhbmNlbGVkLlxuICAgKiBAcmV0dXJucyB7IUV2ZW50fVxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlRXZlbnRfKGV2ZW50VHlwZSwgYnViYmxlcywgY2FuY2VsYWJsZSkge1xuICAgIGlmICgnQ3VzdG9tRXZlbnQnIGluIHdpbmRvdyAmJiB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbmV3IEN1c3RvbUV2ZW50KGV2ZW50VHlwZSwge1xuICAgICAgICBidWJibGVzOiBidWJibGVzLFxuICAgICAgICBjYW5jZWxhYmxlOiBjYW5jZWxhYmxlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50cycpO1xuICAgICAgZXYuaW5pdEV2ZW50KGV2ZW50VHlwZSwgYnViYmxlcywgY2FuY2VsYWJsZSk7XG4gICAgICByZXR1cm4gZXY7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGV4aXN0aW5nIERPTSBmb3IgZWxlbWVudHMgb2Ygb3VyIGNvbXBvbmVudCB0eXBlIGFuZCB1cGdyYWRlcyB0aGVtXG4gICAqIGlmIHRoZXkgaGF2ZSBub3QgYWxyZWFkeSBiZWVuIHVwZ3JhZGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdEpzQ2xhc3MgdGhlIHByb2dyYW1hdGljIG5hbWUgb2YgdGhlIGVsZW1lbnQgY2xhc3Mgd2VcbiAgICogbmVlZCB0byBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0Q3NzQ2xhc3MgdGhlIG5hbWUgb2YgdGhlIENTUyBjbGFzcyBlbGVtZW50cyBvZiB0aGlzXG4gICAqIHR5cGUgd2lsbCBoYXZlLlxuICAgKi9cbiAgZnVuY3Rpb24gdXBncmFkZURvbUludGVybmFsKG9wdEpzQ2xhc3MsIG9wdENzc0NsYXNzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRKc0NsYXNzID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB0eXBlb2Ygb3B0Q3NzQ2xhc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRDb21wb25lbnRzXy5sZW5ndGg7IGkrKykge1xuICAgICAgICB1cGdyYWRlRG9tSW50ZXJuYWwocmVnaXN0ZXJlZENvbXBvbmVudHNfW2ldLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzX1tpXS5jc3NDbGFzcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBqc0NsYXNzID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChvcHRKc0NsYXNzKTtcbiAgICAgIGlmICh0eXBlb2Ygb3B0Q3NzQ2xhc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciByZWdpc3RlcmVkQ2xhc3MgPSBmaW5kUmVnaXN0ZXJlZENsYXNzXyhqc0NsYXNzKTtcbiAgICAgICAgaWYgKHJlZ2lzdGVyZWRDbGFzcykge1xuICAgICAgICAgIG9wdENzc0NsYXNzID0gcmVnaXN0ZXJlZENsYXNzLmNzc0NsYXNzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgb3B0Q3NzQ2xhc3MpO1xuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBlbGVtZW50cy5sZW5ndGg7IG4rKykge1xuICAgICAgICB1cGdyYWRlRWxlbWVudEludGVybmFsKGVsZW1lbnRzW25dLCBqc0NsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBncmFkZXMgYSBzcGVjaWZpYyBlbGVtZW50IHJhdGhlciB0aGFuIGFsbCBpbiB0aGUgRE9NLlxuICAgKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHdlIHdpc2ggdG8gdXBncmFkZS5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRKc0NsYXNzIE9wdGlvbmFsIG5hbWUgb2YgdGhlIGNsYXNzIHdlIHdhbnQgdG8gdXBncmFkZVxuICAgKiB0aGUgZWxlbWVudCB0by5cbiAgICovXG4gIGZ1bmN0aW9uIHVwZ3JhZGVFbGVtZW50SW50ZXJuYWwoZWxlbWVudCwgb3B0SnNDbGFzcykge1xuICAgIC8vIFZlcmlmeSBhcmd1bWVudCB0eXBlLlxuICAgIGlmICghKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0JyAmJiBlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBwcm92aWRlZCB0byB1cGdyYWRlIE1ETCBlbGVtZW50LicpO1xuICAgIH1cbiAgICAvLyBBbGxvdyB1cGdyYWRlIHRvIGJlIGNhbmNlbGVkIGJ5IGNhbmNlbGluZyBlbWl0dGVkIGV2ZW50LlxuICAgIHZhciB1cGdyYWRpbmdFdiA9IGNyZWF0ZUV2ZW50XygnbWRsLWNvbXBvbmVudHVwZ3JhZGluZycsIHRydWUsIHRydWUpO1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudCh1cGdyYWRpbmdFdik7XG4gICAgaWYgKHVwZ3JhZGluZ0V2LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdXBncmFkZWRMaXN0ID0gZ2V0VXBncmFkZWRMaXN0T2ZFbGVtZW50XyhlbGVtZW50KTtcbiAgICB2YXIgY2xhc3Nlc1RvVXBncmFkZSA9IFtdO1xuICAgIC8vIElmIGpzQ2xhc3MgaXMgbm90IHByb3ZpZGVkIHNjYW4gdGhlIHJlZ2lzdGVyZWQgY29tcG9uZW50cyB0byBmaW5kIHRoZVxuICAgIC8vIG9uZXMgbWF0Y2hpbmcgdGhlIGVsZW1lbnQncyBDU1MgY2xhc3NMaXN0LlxuICAgIGlmICghb3B0SnNDbGFzcykge1xuICAgICAgdmFyIGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHNfLmZvckVhY2goZnVuY3Rpb24oY29tcG9uZW50KSB7XG4gICAgICAgIC8vIE1hdGNoIENTUyAmIE5vdCB0byBiZSB1cGdyYWRlZCAmIE5vdCB1cGdyYWRlZC5cbiAgICAgICAgaWYgKGNsYXNzTGlzdC5jb250YWlucyhjb21wb25lbnQuY3NzQ2xhc3MpICYmXG4gICAgICAgICAgICBjbGFzc2VzVG9VcGdyYWRlLmluZGV4T2YoY29tcG9uZW50KSA9PT0gLTEgJiZcbiAgICAgICAgICAgICFpc0VsZW1lbnRVcGdyYWRlZF8oZWxlbWVudCwgY29tcG9uZW50LmNsYXNzTmFtZSkpIHtcbiAgICAgICAgICBjbGFzc2VzVG9VcGdyYWRlLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghaXNFbGVtZW50VXBncmFkZWRfKGVsZW1lbnQsIG9wdEpzQ2xhc3MpKSB7XG4gICAgICBjbGFzc2VzVG9VcGdyYWRlLnB1c2goZmluZFJlZ2lzdGVyZWRDbGFzc18ob3B0SnNDbGFzcykpO1xuICAgIH1cblxuICAgIC8vIFVwZ3JhZGUgdGhlIGVsZW1lbnQgZm9yIGVhY2ggY2xhc3Nlcy5cbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IGNsYXNzZXNUb1VwZ3JhZGUubGVuZ3RoLCByZWdpc3RlcmVkQ2xhc3M7IGkgPCBuOyBpKyspIHtcbiAgICAgIHJlZ2lzdGVyZWRDbGFzcyA9IGNsYXNzZXNUb1VwZ3JhZGVbaV07XG4gICAgICBpZiAocmVnaXN0ZXJlZENsYXNzKSB7XG4gICAgICAgIC8vIE1hcmsgZWxlbWVudCBhcyB1cGdyYWRlZC5cbiAgICAgICAgdXBncmFkZWRMaXN0LnB1c2gocmVnaXN0ZXJlZENsYXNzLmNsYXNzTmFtZSk7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXVwZ3JhZGVkJywgdXBncmFkZWRMaXN0LmpvaW4oJywnKSk7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyByZWdpc3RlcmVkQ2xhc3MuY2xhc3NDb25zdHJ1Y3RvcihlbGVtZW50KTtcbiAgICAgICAgaW5zdGFuY2VbY29tcG9uZW50Q29uZmlnUHJvcGVydHlfXSA9IHJlZ2lzdGVyZWRDbGFzcztcbiAgICAgICAgY3JlYXRlZENvbXBvbmVudHNfLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICAvLyBDYWxsIGFueSBjYWxsYmFja3MgdGhlIHVzZXIgaGFzIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGNvbXBvbmVudCB0eXBlLlxuICAgICAgICBmb3IgKHZhciBqID0gMCwgbSA9IHJlZ2lzdGVyZWRDbGFzcy5jYWxsYmFja3MubGVuZ3RoOyBqIDwgbTsgaisrKSB7XG4gICAgICAgICAgcmVnaXN0ZXJlZENsYXNzLmNhbGxiYWNrc1tqXShlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWdpc3RlcmVkQ2xhc3Mud2lkZ2V0KSB7XG4gICAgICAgICAgLy8gQXNzaWduIHBlciBlbGVtZW50IGluc3RhbmNlIGZvciBjb250cm9sIG92ZXIgQVBJXG4gICAgICAgICAgZWxlbWVudFtyZWdpc3RlcmVkQ2xhc3MuY2xhc3NOYW1lXSA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1VuYWJsZSB0byBmaW5kIGEgcmVnaXN0ZXJlZCBjb21wb25lbnQgZm9yIHRoZSBnaXZlbiBjbGFzcy4nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHVwZ3JhZGVkRXYgPSBjcmVhdGVFdmVudF8oJ21kbC1jb21wb25lbnR1cGdyYWRlZCcsIHRydWUsIGZhbHNlKTtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudCh1cGdyYWRlZEV2KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBncmFkZXMgYSBzcGVjaWZpYyBsaXN0IG9mIGVsZW1lbnRzIHJhdGhlciB0aGFuIGFsbCBpbiB0aGUgRE9NLlxuICAgKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fCFBcnJheTwhRWxlbWVudD58IU5vZGVMaXN0fCFIVE1MQ29sbGVjdGlvbn0gZWxlbWVudHNcbiAgICogVGhlIGVsZW1lbnRzIHdlIHdpc2ggdG8gdXBncmFkZS5cbiAgICovXG4gIGZ1bmN0aW9uIHVwZ3JhZGVFbGVtZW50c0ludGVybmFsKGVsZW1lbnRzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnRzKSkge1xuICAgICAgaWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICBlbGVtZW50cyA9IFtlbGVtZW50c107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZW1lbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBlbGVtZW50cy5sZW5ndGgsIGVsZW1lbnQ7IGkgPCBuOyBpKyspIHtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdXBncmFkZUVsZW1lbnRJbnRlcm5hbChlbGVtZW50KTtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHVwZ3JhZGVFbGVtZW50c0ludGVybmFsKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNsYXNzIGZvciBmdXR1cmUgdXNlIGFuZCBhdHRlbXB0cyB0byB1cGdyYWRlIGV4aXN0aW5nIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHtjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZ1B1YmxpY30gY29uZmlnXG4gICAqL1xuICBmdW5jdGlvbiByZWdpc3RlckludGVybmFsKGNvbmZpZykge1xuICAgIC8vIEluIG9yZGVyIHRvIHN1cHBvcnQgYm90aCBDbG9zdXJlLWNvbXBpbGVkIGFuZCB1bmNvbXBpbGVkIGNvZGUgYWNjZXNzaW5nXG4gICAgLy8gdGhpcyBtZXRob2QsIHdlIG5lZWQgdG8gYWxsb3cgZm9yIGJvdGggdGhlIGRvdCBhbmQgYXJyYXkgc3ludGF4IGZvclxuICAgIC8vIHByb3BlcnR5IGFjY2Vzcy4gWW91J2xsIHRoZXJlZm9yZSBzZWUgdGhlIGBmb28uYmFyIHx8IGZvb1snYmFyJ11gXG4gICAgLy8gcGF0dGVybiByZXBlYXRlZCBhY3Jvc3MgdGhpcyBtZXRob2QuXG4gICAgdmFyIHdpZGdldE1pc3NpbmcgPSAodHlwZW9mIGNvbmZpZy53aWRnZXQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHR5cGVvZiBjb25maWdbJ3dpZGdldCddID09PSAndW5kZWZpbmVkJyk7XG4gICAgdmFyIHdpZGdldCA9IHRydWU7XG5cbiAgICBpZiAoIXdpZGdldE1pc3NpbmcpIHtcbiAgICAgIHdpZGdldCA9IGNvbmZpZy53aWRnZXQgfHwgY29uZmlnWyd3aWRnZXQnXTtcbiAgICB9XG5cbiAgICB2YXIgbmV3Q29uZmlnID0gLyoqIEB0eXBlIHtjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZ30gKi8gKHtcbiAgICAgIGNsYXNzQ29uc3RydWN0b3I6IGNvbmZpZy5jb25zdHJ1Y3RvciB8fCBjb25maWdbJ2NvbnN0cnVjdG9yJ10sXG4gICAgICBjbGFzc05hbWU6IGNvbmZpZy5jbGFzc0FzU3RyaW5nIHx8IGNvbmZpZ1snY2xhc3NBc1N0cmluZyddLFxuICAgICAgY3NzQ2xhc3M6IGNvbmZpZy5jc3NDbGFzcyB8fCBjb25maWdbJ2Nzc0NsYXNzJ10sXG4gICAgICB3aWRnZXQ6IHdpZGdldCxcbiAgICAgIGNhbGxiYWNrczogW11cbiAgICB9KTtcblxuICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzXy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLmNzc0NsYXNzID09PSBuZXdDb25maWcuY3NzQ2xhc3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcHJvdmlkZWQgY3NzQ2xhc3MgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkOiAnICsgaXRlbS5jc3NDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5jbGFzc05hbWUgPT09IG5ld0NvbmZpZy5jbGFzc05hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcHJvdmlkZWQgY2xhc3NOYW1lIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbmZpZy5jb25zdHJ1Y3Rvci5wcm90b3R5cGVcbiAgICAgICAgLmhhc093blByb3BlcnR5KGNvbXBvbmVudENvbmZpZ1Byb3BlcnR5XykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnTURMIGNvbXBvbmVudCBjbGFzc2VzIG11c3Qgbm90IGhhdmUgJyArIGNvbXBvbmVudENvbmZpZ1Byb3BlcnR5XyArXG4gICAgICAgICAgJyBkZWZpbmVkIGFzIGEgcHJvcGVydHkuJyk7XG4gICAgfVxuXG4gICAgdmFyIGZvdW5kID0gZmluZFJlZ2lzdGVyZWRDbGFzc18oY29uZmlnLmNsYXNzQXNTdHJpbmcsIG5ld0NvbmZpZyk7XG5cbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICByZWdpc3RlcmVkQ29tcG9uZW50c18ucHVzaChuZXdDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdXNlciB0byBiZSBhbGVydGVkIHRvIGFueSB1cGdyYWRlcyB0aGF0IGFyZSBwZXJmb3JtZWQgZm9yIGEgZ2l2ZW5cbiAgICogY29tcG9uZW50IHR5cGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGpzQ2xhc3MgVGhlIGNsYXNzIG5hbWUgb2YgdGhlIE1ETCBjb21wb25lbnQgd2Ugd2lzaFxuICAgKiB0byBob29rIGludG8gZm9yIGFueSB1cGdyYWRlcyBwZXJmb3JtZWQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUhUTUxFbGVtZW50KX0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgdXBvbiBhblxuICAgKiB1cGdyYWRlLiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBleHBlY3QgMSBwYXJhbWV0ZXIgLSB0aGUgSFRNTEVsZW1lbnQgd2hpY2hcbiAgICogZ290IHVwZ3JhZGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVnaXN0ZXJVcGdyYWRlZENhbGxiYWNrSW50ZXJuYWwoanNDbGFzcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVnQ2xhc3MgPSBmaW5kUmVnaXN0ZXJlZENsYXNzXyhqc0NsYXNzKTtcbiAgICBpZiAocmVnQ2xhc3MpIHtcbiAgICAgIHJlZ0NsYXNzLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBncmFkZXMgYWxsIHJlZ2lzdGVyZWQgY29tcG9uZW50cyBmb3VuZCBpbiB0aGUgY3VycmVudCBET00uIFRoaXMgaXNcbiAgICogYXV0b21hdGljYWxseSBjYWxsZWQgb24gd2luZG93IGxvYWQuXG4gICAqL1xuICBmdW5jdGlvbiB1cGdyYWRlQWxsUmVnaXN0ZXJlZEludGVybmFsKCkge1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgcmVnaXN0ZXJlZENvbXBvbmVudHNfLmxlbmd0aDsgbisrKSB7XG4gICAgICB1cGdyYWRlRG9tSW50ZXJuYWwocmVnaXN0ZXJlZENvbXBvbmVudHNfW25dLmNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgZm9yIHRoZSBkb3duZ3JhZGUgbWV0aG9kLlxuICAgKiBFeGVjdXRlIGlmIGZvdW5kLlxuICAgKiBSZW1vdmUgY29tcG9uZW50IGZyb20gY3JlYXRlZENvbXBvbmVudHMgbGlzdC5cbiAgICpcbiAgICogQHBhcmFtIHs/Y29tcG9uZW50SGFuZGxlci5Db21wb25lbnR9IGNvbXBvbmVudFxuICAgKi9cbiAgZnVuY3Rpb24gZGVjb25zdHJ1Y3RDb21wb25lbnRJbnRlcm5hbChjb21wb25lbnQpIHtcbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICB2YXIgY29tcG9uZW50SW5kZXggPSBjcmVhdGVkQ29tcG9uZW50c18uaW5kZXhPZihjb21wb25lbnQpO1xuICAgICAgY3JlYXRlZENvbXBvbmVudHNfLnNwbGljZShjb21wb25lbnRJbmRleCwgMSk7XG5cbiAgICAgIHZhciB1cGdyYWRlcyA9IGNvbXBvbmVudC5lbGVtZW50Xy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXBncmFkZWQnKS5zcGxpdCgnLCcpO1xuICAgICAgdmFyIGNvbXBvbmVudFBsYWNlID0gdXBncmFkZXMuaW5kZXhPZihjb21wb25lbnRbY29tcG9uZW50Q29uZmlnUHJvcGVydHlfXS5jbGFzc0FzU3RyaW5nKTtcbiAgICAgIHVwZ3JhZGVzLnNwbGljZShjb21wb25lbnRQbGFjZSwgMSk7XG4gICAgICBjb21wb25lbnQuZWxlbWVudF8uc2V0QXR0cmlidXRlKCdkYXRhLXVwZ3JhZGVkJywgdXBncmFkZXMuam9pbignLCcpKTtcblxuICAgICAgdmFyIGV2ID0gY3JlYXRlRXZlbnRfKCdtZGwtY29tcG9uZW50ZG93bmdyYWRlZCcsIHRydWUsIGZhbHNlKTtcbiAgICAgIGNvbXBvbmVudC5lbGVtZW50Xy5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRG93bmdyYWRlIGVpdGhlciBhIGdpdmVuIG5vZGUsIGFuIGFycmF5IG9mIG5vZGVzLCBvciBhIE5vZGVMaXN0LlxuICAgKlxuICAgKiBAcGFyYW0geyFOb2RlfCFBcnJheTwhTm9kZT58IU5vZGVMaXN0fSBub2Rlc1xuICAgKi9cbiAgZnVuY3Rpb24gZG93bmdyYWRlTm9kZXNJbnRlcm5hbChub2Rlcykge1xuICAgIC8qKlxuICAgICAqIEF1eGlsaWFyeSBmdW5jdGlvbiB0byBkb3duZ3JhZGUgYSBzaW5nbGUgbm9kZS5cbiAgICAgKiBAcGFyYW0gIHshTm9kZX0gbm9kZSB0aGUgbm9kZSB0byBiZSBkb3duZ3JhZGVkXG4gICAgICovXG4gICAgdmFyIGRvd25ncmFkZU5vZGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgICBjcmVhdGVkQ29tcG9uZW50c18uZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uZWxlbWVudF8gPT09IG5vZGU7XG4gICAgICB9KS5mb3JFYWNoKGRlY29uc3RydWN0Q29tcG9uZW50SW50ZXJuYWwpO1xuICAgIH07XG4gICAgaWYgKG5vZGVzIGluc3RhbmNlb2YgQXJyYXkgfHwgbm9kZXMgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBub2Rlcy5sZW5ndGg7IG4rKykge1xuICAgICAgICBkb3duZ3JhZGVOb2RlKG5vZGVzW25dKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGVzIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgZG93bmdyYWRlTm9kZShub2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBwcm92aWRlZCB0byBkb3duZ3JhZGUgTURMIG5vZGVzLicpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5vdyByZXR1cm4gdGhlIGZ1bmN0aW9ucyB0aGF0IHNob3VsZCBiZSBtYWRlIHB1YmxpYyB3aXRoIHRoZWlyIHB1YmxpY2x5XG4gIC8vIGZhY2luZyBuYW1lcy4uLlxuICByZXR1cm4ge1xuICAgIHVwZ3JhZGVEb206IHVwZ3JhZGVEb21JbnRlcm5hbCxcbiAgICB1cGdyYWRlRWxlbWVudDogdXBncmFkZUVsZW1lbnRJbnRlcm5hbCxcbiAgICB1cGdyYWRlRWxlbWVudHM6IHVwZ3JhZGVFbGVtZW50c0ludGVybmFsLFxuICAgIHVwZ3JhZGVBbGxSZWdpc3RlcmVkOiB1cGdyYWRlQWxsUmVnaXN0ZXJlZEludGVybmFsLFxuICAgIHJlZ2lzdGVyVXBncmFkZWRDYWxsYmFjazogcmVnaXN0ZXJVcGdyYWRlZENhbGxiYWNrSW50ZXJuYWwsXG4gICAgcmVnaXN0ZXI6IHJlZ2lzdGVySW50ZXJuYWwsXG4gICAgZG93bmdyYWRlRWxlbWVudHM6IGRvd25ncmFkZU5vZGVzSW50ZXJuYWxcbiAgfTtcbn0pKCk7XG5cbi8qKlxuICogRGVzY3JpYmVzIHRoZSB0eXBlIG9mIGEgcmVnaXN0ZXJlZCBjb21wb25lbnQgdHlwZSBtYW5hZ2VkIGJ5XG4gKiBjb21wb25lbnRIYW5kbGVyLiBQcm92aWRlZCBmb3IgYmVuZWZpdCBvZiB0aGUgQ2xvc3VyZSBjb21waWxlci5cbiAqXG4gKiBAdHlwZWRlZiB7e1xuICogICBjb25zdHJ1Y3RvcjogRnVuY3Rpb24sXG4gKiAgIGNsYXNzQXNTdHJpbmc6IHN0cmluZyxcbiAqICAgY3NzQ2xhc3M6IHN0cmluZyxcbiAqICAgd2lkZ2V0OiAoc3RyaW5nfGJvb2xlYW58dW5kZWZpbmVkKVxuICogfX1cbiAqL1xuY29tcG9uZW50SGFuZGxlci5Db21wb25lbnRDb25maWdQdWJsaWM7ICAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxuLyoqXG4gKiBEZXNjcmliZXMgdGhlIHR5cGUgb2YgYSByZWdpc3RlcmVkIGNvbXBvbmVudCB0eXBlIG1hbmFnZWQgYnlcbiAqIGNvbXBvbmVudEhhbmRsZXIuIFByb3ZpZGVkIGZvciBiZW5lZml0IG9mIHRoZSBDbG9zdXJlIGNvbXBpbGVyLlxuICpcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGNvbnN0cnVjdG9yOiAhRnVuY3Rpb24sXG4gKiAgIGNsYXNzTmFtZTogc3RyaW5nLFxuICogICBjc3NDbGFzczogc3RyaW5nLFxuICogICB3aWRnZXQ6IChzdHJpbmd8Ym9vbGVhbiksXG4gKiAgIGNhbGxiYWNrczogIUFycmF5PGZ1bmN0aW9uKCFIVE1MRWxlbWVudCk+XG4gKiB9fVxuICovXG5jb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZzsgIC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG4vKipcbiAqIENyZWF0ZWQgY29tcG9uZW50IChpLmUuLCB1cGdyYWRlZCBlbGVtZW50KSB0eXBlIGFzIG1hbmFnZWQgYnlcbiAqIGNvbXBvbmVudEhhbmRsZXIuIFByb3ZpZGVkIGZvciBiZW5lZml0IG9mIHRoZSBDbG9zdXJlIGNvbXBpbGVyLlxuICpcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGVsZW1lbnRfOiAhSFRNTEVsZW1lbnQsXG4gKiAgIGNsYXNzTmFtZTogc3RyaW5nLFxuICogICBjbGFzc0FzU3RyaW5nOiBzdHJpbmcsXG4gKiAgIGNzc0NsYXNzOiBzdHJpbmcsXG4gKiAgIHdpZGdldDogc3RyaW5nXG4gKiB9fVxuICovXG5jb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudDsgIC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG4vLyBFeHBvcnQgYWxsIHN5bWJvbHMsIGZvciB0aGUgYmVuZWZpdCBvZiBDbG9zdXJlIGNvbXBpbGVyLlxuLy8gTm8gZWZmZWN0IG9uIHVuY29tcGlsZWQgY29kZS5cbmNvbXBvbmVudEhhbmRsZXJbJ3VwZ3JhZGVEb20nXSA9IGNvbXBvbmVudEhhbmRsZXIudXBncmFkZURvbTtcbmNvbXBvbmVudEhhbmRsZXJbJ3VwZ3JhZGVFbGVtZW50J10gPSBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50O1xuY29tcG9uZW50SGFuZGxlclsndXBncmFkZUVsZW1lbnRzJ10gPSBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50cztcbmNvbXBvbmVudEhhbmRsZXJbJ3VwZ3JhZGVBbGxSZWdpc3RlcmVkJ10gPVxuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUFsbFJlZ2lzdGVyZWQ7XG5jb21wb25lbnRIYW5kbGVyWydyZWdpc3RlclVwZ3JhZGVkQ2FsbGJhY2snXSA9XG4gICAgY29tcG9uZW50SGFuZGxlci5yZWdpc3RlclVwZ3JhZGVkQ2FsbGJhY2s7XG5jb21wb25lbnRIYW5kbGVyWydyZWdpc3RlciddID0gY29tcG9uZW50SGFuZGxlci5yZWdpc3RlcjtcbmNvbXBvbmVudEhhbmRsZXJbJ2Rvd25ncmFkZUVsZW1lbnRzJ10gPSBjb21wb25lbnRIYW5kbGVyLmRvd25ncmFkZUVsZW1lbnRzO1xud2luZG93LmNvbXBvbmVudEhhbmRsZXIgPSBjb21wb25lbnRIYW5kbGVyO1xud2luZG93Wydjb21wb25lbnRIYW5kbGVyJ10gPSBjb21wb25lbnRIYW5kbGVyO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgXCJDdXR0aW5nIHRoZSBtdXN0YXJkXCIgdGVzdC4gSWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhlIGZlYXR1cmVzXG4gICAqIHRlc3RlZCwgYWRkcyBhIG1kbC1qcyBjbGFzcyB0byB0aGUgPGh0bWw+IGVsZW1lbnQuIEl0IHRoZW4gdXBncmFkZXMgYWxsIE1ETFxuICAgKiBjb21wb25lbnRzIHJlcXVpcmluZyBKYXZhU2NyaXB0LlxuICAgKi9cbiAgaWYgKCdjbGFzc0xpc3QnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpICYmXG4gICAgICAncXVlcnlTZWxlY3RvcicgaW4gZG9jdW1lbnQgJiZcbiAgICAgICdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cgJiYgQXJyYXkucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWRsLWpzJyk7XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlQWxsUmVnaXN0ZXJlZCgpO1xuICB9IGVsc2Uge1xuICAgIC8qKlxuICAgICAqIER1bW15IGZ1bmN0aW9uIHRvIGF2b2lkIEpTIGVycm9ycy5cbiAgICAgKi9cbiAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50ID0gZnVuY3Rpb24oKSB7fTtcbiAgICAvKipcbiAgICAgKiBEdW1teSBmdW5jdGlvbiB0byBhdm9pZCBKUyBlcnJvcnMuXG4gICAgICovXG4gICAgY29tcG9uZW50SGFuZGxlci5yZWdpc3RlciA9IGZ1bmN0aW9uKCkge307XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1kbENvbXBvbmVudEhhbmRsZXIuanMiLCIvLyBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJpdXMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lL2Jsb2IvbWFzdGVyL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qc1xuLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xNTc5NjcxIHdoaWNoIGRlcml2ZWQgZnJvbVxuLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuXG4vLyBGaXhlcyBmcm9tIFBhdWwgSXJpc2gsIFRpbm8gWmlqZGVsLCBBbmRyZXcgTWFvLCBLbGVtZW4gU2xhdmnEjSwgRGFyaXVzIEJhY29uXG4vLyBNSVQgbGljZW5zZVxuaWYgKCFEYXRlLm5vdykge1xuICAgIC8qKlxuICAgICAqIERhdGUubm93IHBvbHlmaWxsLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGN1cnJlbnQgRGF0ZVxuICAgICAqL1xuICAgIERhdGUubm93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfTtcbiAgICBEYXRlWydub3cnXSA9IERhdGUubm93O1xufVxudmFyIHZlbmRvcnMgPSBbXG4gICAgJ3dlYmtpdCcsXG4gICAgJ21veidcbl07XG5mb3IgKHZhciBpID0gMDsgaSA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK2kpIHtcbiAgICB2YXIgdnAgPSB2ZW5kb3JzW2ldO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdnAgKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZwICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHwgd2luZG93W3ZwICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgIHdpbmRvd1sncmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgIHdpbmRvd1snY2FuY2VsQW5pbWF0aW9uRnJhbWUnXSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTtcbn1cbmlmICgvaVAoYWR8aG9uZXxvZCkuKk9TIDYvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIC8qKlxuICAgICAqIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbC5cbiAgICAgKiBAcGFyYW0gIHshRnVuY3Rpb259IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgbmV4dFRpbWUgPSBNYXRoLm1heChsYXN0VGltZSArIDE2LCBub3cpO1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhsYXN0VGltZSA9IG5leHRUaW1lKTtcbiAgICAgICAgfSwgbmV4dFRpbWUgLSBub3cpO1xuICAgIH07XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2xlYXJUaW1lb3V0O1xuICAgIHdpbmRvd1sncmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgIHdpbmRvd1snY2FuY2VsQW5pbWF0aW9uRnJhbWUnXSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gckFGLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIEJ1dHRvbiBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxCdXR0b24gPSBmdW5jdGlvbiBNYXRlcmlhbEJ1dHRvbihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsQnV0dG9uJ10gPSBNYXRlcmlhbEJ1dHRvbjtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5Db25zdGFudF8gPSB7fTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBSSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtYnV0dG9uX19yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgYmx1ciBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuYmx1ckhhbmRsZXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYmx1cigpO1xuICAgIH1cbn07XG4vLyBQdWJsaWMgbWV0aG9kcy5cbi8qKlxuICAgKiBEaXNhYmxlIGJ1dHRvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xufTtcbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIGJ1dHRvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xufTtcbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZVsnZW5hYmxlJ10gPSBNYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdmFyIHJpcHBsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJpcHBsZUVsZW1lbnRfKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRSaXBwbGVCbHVySGFuZGxlciA9IHRoaXMuYmx1ckhhbmRsZXJfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kUmlwcGxlQmx1ckhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChyaXBwbGVDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm91bmRCdXR0b25CbHVySGFuZGxlciA9IHRoaXMuYmx1ckhhbmRsZXJfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRCdXR0b25CbHVySGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuYm91bmRCdXR0b25CbHVySGFuZGxlcik7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbEJ1dHRvbixcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxCdXR0b24nLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLWJ1dHRvbicsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYnV0dG9uLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIENoZWNrYm94IE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxDaGVja2JveCA9IGZ1bmN0aW9uIE1hdGVyaWFsQ2hlY2tib3goZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbENoZWNrYm94J10gPSBNYXRlcmlhbENoZWNrYm94O1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuQ29uc3RhbnRfID0geyBUSU5ZX1RJTUVPVVQ6IDAuMDAxIH07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBJTlBVVDogJ21kbC1jaGVja2JveF9faW5wdXQnLFxuICAgIEJPWF9PVVRMSU5FOiAnbWRsLWNoZWNrYm94X19ib3gtb3V0bGluZScsXG4gICAgRk9DVVNfSEVMUEVSOiAnbWRsLWNoZWNrYm94X19mb2N1cy1oZWxwZXInLFxuICAgIFRJQ0tfT1VUTElORTogJ21kbC1jaGVja2JveF9fdGljay1vdXRsaW5lJyxcbiAgICBSSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnLFxuICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtY2hlY2tib3hfX3JpcHBsZS1jb250YWluZXInLFxuICAgIFJJUFBMRV9DRU5URVI6ICdtZGwtcmlwcGxlLS1jZW50ZXInLFxuICAgIFJJUFBMRTogJ21kbC1yaXBwbGUnLFxuICAgIElTX0ZPQ1VTRUQ6ICdpcy1mb2N1c2VkJyxcbiAgICBJU19ESVNBQkxFRDogJ2lzLWRpc2FibGVkJyxcbiAgICBJU19DSEVDS0VEOiAnaXMtY2hlY2tlZCcsXG4gICAgSVNfVVBHUkFERUQ6ICdpcy11cGdyYWRlZCdcbn07XG4vKipcbiAgICogSGFuZGxlIGNoYW5nZSBvZiBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUub25DaGFuZ2VfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgZm9jdXMgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUub25Gb2N1c18gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGxvc3QgZm9jdXMgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUub25CbHVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2V1cC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUub25Nb3VzZVVwXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuYmx1cl8oKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGNsYXNzIHVwZGF0ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUudXBkYXRlQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XG4gICAgdGhpcy5jaGVja1RvZ2dsZVN0YXRlKCk7XG59O1xuLyoqXG4gICAqIEFkZCBibHVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmJsdXJfID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgd2h5IHRoZXJlJ3MgYSBmb2N1cyBldmVudCBiZWluZyBmaXJlZCBhZnRlciBvdXIgYmx1cixcbiAgICAvLyBzbyB0aGF0IHdlIGNhbiBhdm9pZCB0aGlzIGhhY2suXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYmx1cigpO1xuICAgIH0uYmluZCh0aGlzKSwgdGhpcy5Db25zdGFudF8uVElOWV9USU1FT1VUKTtcbn07XG4vLyBQdWJsaWMgbWV0aG9kcy5cbi8qKlxuICAgKiBDaGVjayB0aGUgaW5wdXRzIHRvZ2dsZSBzdGF0ZSBhbmQgdXBkYXRlIGRpc3BsYXkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGVbJ2NoZWNrVG9nZ2xlU3RhdGUnXSA9IE1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmNoZWNrVG9nZ2xlU3RhdGU7XG4vKipcbiAgICogQ2hlY2sgdGhlIGlucHV0cyBkaXNhYmxlZCBzdGF0ZSBhbmQgdXBkYXRlIGRpc3BsYXkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5jaGVja0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGVbJ2NoZWNrRGlzYWJsZWQnXSA9IE1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQ7XG4vKipcbiAgICogRGlzYWJsZSBjaGVja2JveC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGVbJ2Rpc2FibGUnXSA9IE1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIGNoZWNrYm94LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZVsnZW5hYmxlJ10gPSBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5lbmFibGU7XG4vKipcbiAgICogQ2hlY2sgY2hlY2tib3guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlWydjaGVjayddID0gTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuY2hlY2s7XG4vKipcbiAgICogVW5jaGVjayBjaGVja2JveC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLnVuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGVbJ3VuY2hlY2snXSA9IE1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLnVuY2hlY2s7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSU5QVVQpO1xuICAgICAgICB2YXIgYm94T3V0bGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgYm94T3V0bGluZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQk9YX09VVExJTkUpO1xuICAgICAgICB2YXIgdGlja0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGlja0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uRk9DVVNfSEVMUEVSKTtcbiAgICAgICAgdmFyIHRpY2tPdXRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aWNrT3V0bGluZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVElDS19PVVRMSU5FKTtcbiAgICAgICAgYm94T3V0bGluZS5hcHBlbmRDaGlsZCh0aWNrT3V0bGluZSk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQodGlja0NvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQoYm94T3V0bGluZSk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfSUdOT1JFX0VWRU5UUyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DRU5URVIpO1xuICAgICAgICAgICAgdGhpcy5ib3VuZFJpcHBsZU1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcF8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRSaXBwbGVNb3VzZVVwKTtcbiAgICAgICAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRSk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmFwcGVuZENoaWxkKHJpcHBsZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm91bmRJbnB1dE9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZV8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZElucHV0T25Gb2N1cyA9IHRoaXMub25Gb2N1c18uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZElucHV0T25CbHVyID0gdGhpcy5vbkJsdXJfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRFbGVtZW50TW91c2VVcCA9IHRoaXMub25Nb3VzZVVwXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5ib3VuZElucHV0T25DaGFuZ2UpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmJvdW5kSW5wdXRPbkZvY3VzKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kSW5wdXRPbkJsdXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kRWxlbWVudE1vdXNlVXApO1xuICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1VQR1JBREVEKTtcbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsQ2hlY2tib3gsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsQ2hlY2tib3gnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLWNoZWNrYm94JyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjaGVja2JveC5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBpY29uIHRvZ2dsZSBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsSWNvblRvZ2dsZSA9IGZ1bmN0aW9uIE1hdGVyaWFsSWNvblRvZ2dsZShlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsSWNvblRvZ2dsZSddID0gTWF0ZXJpYWxJY29uVG9nZ2xlO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5Db25zdGFudF8gPSB7IFRJTllfVElNRU9VVDogMC4wMDEgfTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgSU5QVVQ6ICdtZGwtaWNvbi10b2dnbGVfX2lucHV0JyxcbiAgICBKU19SSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnLFxuICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtaWNvbi10b2dnbGVfX3JpcHBsZS1jb250YWluZXInLFxuICAgIFJJUFBMRV9DRU5URVI6ICdtZGwtcmlwcGxlLS1jZW50ZXInLFxuICAgIFJJUFBMRTogJ21kbC1yaXBwbGUnLFxuICAgIElTX0ZPQ1VTRUQ6ICdpcy1mb2N1c2VkJyxcbiAgICBJU19ESVNBQkxFRDogJ2lzLWRpc2FibGVkJyxcbiAgICBJU19DSEVDS0VEOiAnaXMtY2hlY2tlZCdcbn07XG4vKipcbiAgICogSGFuZGxlIGNoYW5nZSBvZiBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5vbkNoYW5nZV8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBmb2N1cyBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLm9uRm9jdXNfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBsb3N0IGZvY3VzIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUub25CbHVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2V1cC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5vbk1vdXNlVXBfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5ibHVyXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2xhc3MgdXBkYXRlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2hlY2tEaXNhYmxlZCgpO1xuICAgIHRoaXMuY2hlY2tUb2dnbGVTdGF0ZSgpO1xufTtcbi8qKlxuICAgKiBBZGQgYmx1ci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmJsdXJfID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgd2h5IHRoZXJlJ3MgYSBmb2N1cyBldmVudCBiZWluZyBmaXJlZCBhZnRlciBvdXIgYmx1cixcbiAgICAvLyBzbyB0aGF0IHdlIGNhbiBhdm9pZCB0aGlzIGhhY2suXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYmx1cigpO1xuICAgIH0uYmluZCh0aGlzKSwgdGhpcy5Db25zdGFudF8uVElOWV9USU1FT1VUKTtcbn07XG4vLyBQdWJsaWMgbWV0aG9kcy5cbi8qKlxuICAgKiBDaGVjayB0aGUgaW5wdXRzIHRvZ2dsZSBzdGF0ZSBhbmQgdXBkYXRlIGRpc3BsYXkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmNoZWNrVG9nZ2xlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlWydjaGVja1RvZ2dsZVN0YXRlJ10gPSBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmNoZWNrVG9nZ2xlU3RhdGU7XG4vKipcbiAgICogQ2hlY2sgdGhlIGlucHV0cyBkaXNhYmxlZCBzdGF0ZSBhbmQgdXBkYXRlIGRpc3BsYXkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlWydjaGVja0Rpc2FibGVkJ10gPSBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQ7XG4vKipcbiAgICogRGlzYWJsZSBpY29uIHRvZ2dsZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlWydkaXNhYmxlJ10gPSBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIGljb24gdG9nZ2xlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5lbmFibGU7XG4vKipcbiAgICogQ2hlY2sgaWNvbiB0b2dnbGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZVsnY2hlY2snXSA9IE1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuY2hlY2s7XG4vKipcbiAgICogVW5jaGVjayBpY29uIHRvZ2dsZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUudW5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlWyd1bmNoZWNrJ10gPSBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLnVuY2hlY2s7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JTlBVVCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkpTX1JJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfSUdOT1JFX0VWRU5UUyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5KU19SSVBQTEVfRUZGRUNUKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DRU5URVIpO1xuICAgICAgICAgICAgdGhpcy5ib3VuZFJpcHBsZU1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcF8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRSaXBwbGVNb3VzZVVwKTtcbiAgICAgICAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRSk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmFwcGVuZENoaWxkKHJpcHBsZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm91bmRJbnB1dE9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZV8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZElucHV0T25Gb2N1cyA9IHRoaXMub25Gb2N1c18uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZElucHV0T25CbHVyID0gdGhpcy5vbkJsdXJfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRFbGVtZW50T25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXBfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kSW5wdXRPbkNoYW5nZSk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuYm91bmRJbnB1dE9uRm9jdXMpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRJbnB1dE9uQmx1cik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRFbGVtZW50T25Nb3VzZVVwKTtcbiAgICAgICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQoJ2lzLXVwZ3JhZGVkJyk7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbEljb25Ub2dnbGUsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsSWNvblRvZ2dsZScsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtaWNvbi10b2dnbGUnLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGljb24tdG9nZ2xlLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIGRyb3Bkb3duIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxNZW51ID0gZnVuY3Rpb24gTWF0ZXJpYWxNZW51KGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxNZW51J10gPSBNYXRlcmlhbE1lbnU7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLkNvbnN0YW50XyA9IHtcbiAgICAvLyBUb3RhbCBkdXJhdGlvbiBvZiB0aGUgbWVudSBhbmltYXRpb24uXG4gICAgVFJBTlNJVElPTl9EVVJBVElPTl9TRUNPTkRTOiAwLjMsXG4gICAgLy8gVGhlIGZyYWN0aW9uIG9mIHRoZSB0b3RhbCBkdXJhdGlvbiB3ZSB3YW50IHRvIHVzZSBmb3IgbWVudSBpdGVtIGFuaW1hdGlvbnMuXG4gICAgVFJBTlNJVElPTl9EVVJBVElPTl9GUkFDVElPTjogMC44LFxuICAgIC8vIEhvdyBsb25nIHRoZSBtZW51IHN0YXlzIG9wZW4gYWZ0ZXIgY2hvb3NpbmcgYW4gb3B0aW9uIChzbyB0aGUgdXNlciBjYW4gc2VlXG4gICAgLy8gdGhlIHJpcHBsZSkuXG4gICAgQ0xPU0VfVElNRU9VVDogMTUwXG59O1xuLyoqXG4gICAqIEtleWNvZGVzLCBmb3IgY29kZSByZWFkYWJpbGl0eS5cbiAgICpcbiAgICogQGVudW0ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLktleWNvZGVzXyA9IHtcbiAgICBFTlRFUjogMTMsXG4gICAgRVNDQVBFOiAyNyxcbiAgICBTUEFDRTogMzIsXG4gICAgVVBfQVJST1c6IDM4LFxuICAgIERPV05fQVJST1c6IDQwXG59O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBDT05UQUlORVI6ICdtZGwtbWVudV9fY29udGFpbmVyJyxcbiAgICBPVVRMSU5FOiAnbWRsLW1lbnVfX291dGxpbmUnLFxuICAgIElURU06ICdtZGwtbWVudV9faXRlbScsXG4gICAgSVRFTV9SSVBQTEVfQ09OVEFJTkVSOiAnbWRsLW1lbnVfX2l0ZW0tcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgUklQUExFX0VGRkVDVDogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICBSSVBQTEVfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICAvLyBTdGF0dXNlc1xuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnLFxuICAgIElTX1ZJU0lCTEU6ICdpcy12aXNpYmxlJyxcbiAgICBJU19BTklNQVRJTkc6ICdpcy1hbmltYXRpbmcnLFxuICAgIC8vIEFsaWdubWVudCBvcHRpb25zXG4gICAgQk9UVE9NX0xFRlQ6ICdtZGwtbWVudS0tYm90dG9tLWxlZnQnLFxuICAgIC8vIFRoaXMgaXMgdGhlIGRlZmF1bHQuXG4gICAgQk9UVE9NX1JJR0hUOiAnbWRsLW1lbnUtLWJvdHRvbS1yaWdodCcsXG4gICAgVE9QX0xFRlQ6ICdtZGwtbWVudS0tdG9wLWxlZnQnLFxuICAgIFRPUF9SSUdIVDogJ21kbC1tZW51LS10b3AtcmlnaHQnLFxuICAgIFVOQUxJR05FRDogJ21kbC1tZW51LS11bmFsaWduZWQnXG59O1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgLy8gQ3JlYXRlIGNvbnRhaW5lciBmb3IgdGhlIG1lbnUuXG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5DT05UQUlORVIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgdGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICB0aGlzLmNvbnRhaW5lcl8gPSBjb250YWluZXI7XG4gICAgICAgIC8vIENyZWF0ZSBvdXRsaW5lIGZvciB0aGUgbWVudSAoc2hhZG93IGFuZCBiYWNrZ3JvdW5kKS5cbiAgICAgICAgdmFyIG91dGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3V0bGluZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uT1VUTElORSk7XG4gICAgICAgIHRoaXMub3V0bGluZV8gPSBvdXRsaW5lO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKG91dGxpbmUsIHRoaXMuZWxlbWVudF8pO1xuICAgICAgICAvLyBGaW5kIHRoZSBcImZvclwiIGVsZW1lbnQgYW5kIGJpbmQgZXZlbnRzIHRvIGl0LlxuICAgICAgICB2YXIgZm9yRWxJZCA9IHRoaXMuZWxlbWVudF8uZ2V0QXR0cmlidXRlKCdmb3InKSB8fCB0aGlzLmVsZW1lbnRfLmdldEF0dHJpYnV0ZSgnZGF0YS1tZGwtZm9yJyk7XG4gICAgICAgIHZhciBmb3JFbCA9IG51bGw7XG4gICAgICAgIGlmIChmb3JFbElkKSB7XG4gICAgICAgICAgICBmb3JFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvckVsSWQpO1xuICAgICAgICAgICAgaWYgKGZvckVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JFbGVtZW50XyA9IGZvckVsO1xuICAgICAgICAgICAgICAgIGZvckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVGb3JDbGlja18uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZm9yRWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlRm9yS2V5Ym9hcmRFdmVudF8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTSk7XG4gICAgICAgIHRoaXMuYm91bmRJdGVtS2V5ZG93bl8gPSB0aGlzLmhhbmRsZUl0ZW1LZXlib2FyZEV2ZW50Xy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kSXRlbUNsaWNrXyA9IHRoaXMuaGFuZGxlSXRlbUNsaWNrXy5iaW5kKHRoaXMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byBlYWNoIG1lbnUgaXRlbS5cbiAgICAgICAgICAgIGl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZEl0ZW1DbGlja18pO1xuICAgICAgICAgICAgLy8gQWRkIGEgdGFiIGluZGV4IHRvIGVhY2ggbWVudSBpdGVtLlxuICAgICAgICAgICAgaXRlbXNbaV0udGFiSW5kZXggPSAnLTEnO1xuICAgICAgICAgICAgLy8gQWRkIGEga2V5Ym9hcmQgbGlzdGVuZXIgdG8gZWFjaCBtZW51IGl0ZW0uXG4gICAgICAgICAgICBpdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5ib3VuZEl0ZW1LZXlkb3duXyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIHJpcHBsZSBjbGFzc2VzIHRvIGVhY2ggaXRlbSwgaWYgdGhlIHVzZXIgaGFzIGVuYWJsZWQgcmlwcGxlcy5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9JR05PUkVfRVZFTlRTKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHJpcHBsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklURU1fUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRSk7XG4gICAgICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpcHBsZSk7XG4gICAgICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChyaXBwbGVDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENvcHkgYWxpZ25tZW50IGNsYXNzZXMgdG8gdGhlIGNvbnRhaW5lciwgc28gdGhlIG91dGxpbmUgY2FuIHVzZSB0aGVtLlxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5CT1RUT01fTEVGVCkpIHtcbiAgICAgICAgICAgIHRoaXMub3V0bGluZV8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9MRUZUKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5CT1RUT01fUklHSFQpKSB7XG4gICAgICAgICAgICB0aGlzLm91dGxpbmVfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5CT1RUT01fUklHSFQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9MRUZUKSkge1xuICAgICAgICAgICAgdGhpcy5vdXRsaW5lXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX0xFRlQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9SSUdIVCkpIHtcbiAgICAgICAgICAgIHRoaXMub3V0bGluZV8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRPUF9SSUdIVCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVU5BTElHTkVEKSkge1xuICAgICAgICAgICAgdGhpcy5vdXRsaW5lXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVU5BTElHTkVEKTtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1VQR1JBREVEKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgYSBjbGljayBvbiB0aGUgXCJmb3JcIiBlbGVtZW50LCBieSBwb3NpdGlvbmluZyB0aGUgbWVudSBhbmQgdGhlblxuICAgKiB0b2dnbGluZyBpdC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuaGFuZGxlRm9yQ2xpY2tfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfICYmIHRoaXMuZm9yRWxlbWVudF8pIHtcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmZvckVsZW1lbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgZm9yUmVjdCA9IHRoaXMuZm9yRWxlbWVudF8ucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVU5BTElHTkVEKSkge1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uQk9UVE9NX1JJR0hUKSkge1xuICAgICAgICAgICAgLy8gUG9zaXRpb24gYmVsb3cgdGhlIFwiZm9yXCIgZWxlbWVudCwgYWxpZ25lZCB0byBpdHMgcmlnaHQuXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUucmlnaHQgPSBmb3JSZWN0LnJpZ2h0IC0gcmVjdC5yaWdodCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUudG9wID0gdGhpcy5mb3JFbGVtZW50Xy5vZmZzZXRUb3AgKyB0aGlzLmZvckVsZW1lbnRfLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1BfTEVGVCkpIHtcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIGFib3ZlIHRoZSBcImZvclwiIGVsZW1lbnQsIGFsaWduZWQgdG8gaXRzIGxlZnQuXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUubGVmdCA9IHRoaXMuZm9yRWxlbWVudF8ub2Zmc2V0TGVmdCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUuYm90dG9tID0gZm9yUmVjdC5ib3R0b20gLSByZWN0LnRvcCArICdweCc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1BfUklHSFQpKSB7XG4gICAgICAgICAgICAvLyBQb3NpdGlvbiBhYm92ZSB0aGUgXCJmb3JcIiBlbGVtZW50LCBhbGlnbmVkIHRvIGl0cyByaWdodC5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5yaWdodCA9IGZvclJlY3QucmlnaHQgLSByZWN0LnJpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5ib3R0b20gPSBmb3JSZWN0LmJvdHRvbSAtIHJlY3QudG9wICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIERlZmF1bHQ6IHBvc2l0aW9uIGJlbG93IHRoZSBcImZvclwiIGVsZW1lbnQsIGFsaWduZWQgdG8gaXRzIGxlZnQuXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUubGVmdCA9IHRoaXMuZm9yRWxlbWVudF8ub2Zmc2V0TGVmdCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUudG9wID0gdGhpcy5mb3JFbGVtZW50Xy5vZmZzZXRUb3AgKyB0aGlzLmZvckVsZW1lbnRfLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50b2dnbGUoZXZ0KTtcbn07XG4vKipcbiAgICogSGFuZGxlcyBhIGtleWJvYXJkIGV2ZW50IG9uIHRoZSBcImZvclwiIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmhhbmRsZUZvcktleWJvYXJkRXZlbnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfICYmIHRoaXMuY29udGFpbmVyXyAmJiB0aGlzLmZvckVsZW1lbnRfKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLklURU0gKyAnOm5vdChbZGlzYWJsZWRdKScpO1xuICAgICAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCAmJiB0aGlzLmNvbnRhaW5lcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSkpIHtcbiAgICAgICAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gdGhpcy5LZXljb2Rlc18uVVBfQVJST1cpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpdGVtc1tpdGVtcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldnQua2V5Q29kZSA9PT0gdGhpcy5LZXljb2Rlc18uRE9XTl9BUlJPVykge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGl0ZW1zWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgYSBrZXlib2FyZCBldmVudCBvbiBhbiBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5oYW5kbGVJdGVtS2V5Ym9hcmRFdmVudF8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8gJiYgdGhpcy5jb250YWluZXJfKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLklURU0gKyAnOm5vdChbZGlzYWJsZWRdKScpO1xuICAgICAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCAmJiB0aGlzLmNvbnRhaW5lcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSkpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpdGVtcykuaW5kZXhPZihldnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gdGhpcy5LZXljb2Rlc18uVVBfQVJST1cpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtc1tjdXJyZW50SW5kZXggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChldnQua2V5Q29kZSA9PT0gdGhpcy5LZXljb2Rlc18uRE9XTl9BUlJPVykge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiBjdXJyZW50SW5kZXggKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2N1cnJlbnRJbmRleCArIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5TUEFDRSB8fCBldnQua2V5Q29kZSA9PT0gdGhpcy5LZXljb2Rlc18uRU5URVIpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAvLyBTZW5kIG1vdXNlZG93biBhbmQgbW91c2V1cCB0byB0cmlnZ2VyIHJpcHBsZS5cbiAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBNb3VzZUV2ZW50KCdtb3VzZWRvd24nKTtcbiAgICAgICAgICAgICAgICBldnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgZSA9IG5ldyBNb3VzZUV2ZW50KCdtb3VzZXVwJyk7XG4gICAgICAgICAgICAgICAgZXZ0LnRhcmdldC5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICAgICAgICAgIC8vIFNlbmQgY2xpY2suXG4gICAgICAgICAgICAgICAgZXZ0LnRhcmdldC5jbGljaygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldnQua2V5Q29kZSA9PT0gdGhpcy5LZXljb2Rlc18uRVNDQVBFKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgYSBjbGljayBldmVudCBvbiBhbiBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5oYW5kbGVJdGVtQ2xpY2tfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmIChldnQudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gV2FpdCBzb21lIHRpbWUgYmVmb3JlIGNsb3NpbmcgbWVudSwgc28gdGhlIHVzZXIgY2FuIHNlZSB0aGUgcmlwcGxlLlxuICAgICAgICB0aGlzLmNsb3NpbmdfID0gdHJ1ZTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NpbmdfID0gZmFsc2U7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcy5Db25zdGFudF8uQ0xPU0VfVElNRU9VVCk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBpbml0aWFsIGNsaXAgKGZvciBvcGVuaW5nIHRoZSBtZW51KSBvciBmaW5hbCBjbGlwIChmb3IgY2xvc2luZ1xuICAgKiBpdCksIGFuZCBhcHBsaWVzIGl0LiBUaGlzIGFsbG93cyB1cyB0byBhbmltYXRlIGZyb20gb3IgdG8gdGhlIGNvcnJlY3QgcG9pbnQsXG4gICAqIHRoYXQgaXMsIHRoZSBwb2ludCBpdCdzIGFsaWduZWQgdG8gaW4gdGhlIFwiZm9yXCIgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgdGhlIGNsaXAgcmVjdGFuZ2xlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBXaWR0aCBvZiB0aGUgY2xpcCByZWN0YW5nbGVcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmFwcGx5Q2xpcF8gPSBmdW5jdGlvbiAoaGVpZ2h0LCB3aWR0aCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlVOQUxJR05FRCkpIHtcbiAgICAgICAgLy8gRG8gbm90IGNsaXAuXG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUuY2xpcCA9ICcnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5CT1RUT01fUklHSFQpKSB7XG4gICAgICAgIC8vIENsaXAgdG8gdGhlIHRvcCByaWdodCBjb3JuZXIgb2YgdGhlIG1lbnUuXG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUuY2xpcCA9ICdyZWN0KDAgJyArIHdpZHRoICsgJ3B4ICcgKyAnMCAnICsgd2lkdGggKyAncHgpJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX0xFRlQpKSB7XG4gICAgICAgIC8vIENsaXAgdG8gdGhlIGJvdHRvbSBsZWZ0IGNvcm5lciBvZiB0aGUgbWVudS5cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID0gJ3JlY3QoJyArIGhlaWdodCArICdweCAwICcgKyBoZWlnaHQgKyAncHggMCknO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1BfUklHSFQpKSB7XG4gICAgICAgIC8vIENsaXAgdG8gdGhlIGJvdHRvbSByaWdodCBjb3JuZXIgb2YgdGhlIG1lbnUuXG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUuY2xpcCA9ICdyZWN0KCcgKyBoZWlnaHQgKyAncHggJyArIHdpZHRoICsgJ3B4ICcgKyBoZWlnaHQgKyAncHggJyArIHdpZHRoICsgJ3B4KSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRGVmYXVsdDogZG8gbm90IGNsaXAgKHNhbWUgYXMgY2xpcHBpbmcgdG8gdGhlIHRvcCBsZWZ0IGNvcm5lcikuXG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUuY2xpcCA9ICcnO1xuICAgIH1cbn07XG4vKipcbiAgICogQ2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgYW5pbWF0aW9uIGxpc3RlbmVycy5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5yZW1vdmVBbmltYXRpb25FbmRMaXN0ZW5lcl8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKE1hdGVyaWFsTWVudS5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbn07XG4vKipcbiAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBjbGVhbiB1cCBhZnRlciB0aGUgYW5pbWF0aW9uIGVuZHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5hZGRBbmltYXRpb25FbmRMaXN0ZW5lcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5yZW1vdmVBbmltYXRpb25FbmRMaXN0ZW5lcl8pO1xuICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHRoaXMucmVtb3ZlQW5pbWF0aW9uRW5kTGlzdGVuZXJfKTtcbn07XG4vKipcbiAgICogRGlzcGxheXMgdGhlIG1lbnUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8gJiYgdGhpcy5jb250YWluZXJfICYmIHRoaXMub3V0bGluZV8pIHtcbiAgICAgICAgLy8gTWVhc3VyZSB0aGUgaW5uZXIgZWxlbWVudC5cbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuZWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmVsZW1lbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICAvLyBBcHBseSB0aGUgaW5uZXIgZWxlbWVudCdzIHNpemUgdG8gdGhlIGNvbnRhaW5lciBhbmQgb3V0bGluZS5cbiAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5vdXRsaW5lXy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgdGhpcy5vdXRsaW5lXy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5Db25zdGFudF8uVFJBTlNJVElPTl9EVVJBVElPTl9TRUNPTkRTICogdGhpcy5Db25zdGFudF8uVFJBTlNJVElPTl9EVVJBVElPTl9GUkFDVElPTjtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRyYW5zaXRpb24gZGVsYXlzIGZvciBpbmRpdmlkdWFsIG1lbnUgaXRlbXMsIHNvIHRoYXQgdGhleSBmYWRlXG4gICAgICAgIC8vIGluIG9uZSBhdCBhIHRpbWUuXG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLklURU0pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbURlbGF5ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9MRUZUKSB8fCB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9SSUdIVCkpIHtcbiAgICAgICAgICAgICAgICBpdGVtRGVsYXkgPSAoaGVpZ2h0IC0gaXRlbXNbaV0ub2Zmc2V0VG9wIC0gaXRlbXNbaV0ub2Zmc2V0SGVpZ2h0KSAvIGhlaWdodCAqIHRyYW5zaXRpb25EdXJhdGlvbiArICdzJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbURlbGF5ID0gaXRlbXNbaV0ub2Zmc2V0VG9wIC8gaGVpZ2h0ICogdHJhbnNpdGlvbkR1cmF0aW9uICsgJ3MnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbXNbaV0uc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gaXRlbURlbGF5O1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGx5IHRoZSBpbml0aWFsIGNsaXAgdG8gdGhlIHRleHQgYmVmb3JlIHdlIHN0YXJ0IGFuaW1hdGluZy5cbiAgICAgICAgdGhpcy5hcHBseUNsaXBfKGhlaWdodCwgd2lkdGgpO1xuICAgICAgICAvLyBXYWl0IGZvciB0aGUgbmV4dCBmcmFtZSwgdHVybiBvbiBhbmltYXRpb24sIGFuZCBhcHBseSB0aGUgZmluYWwgY2xpcC5cbiAgICAgICAgLy8gQWxzbyBtYWtlIGl0IHZpc2libGUuIFRoaXMgdHJpZ2dlcnMgdGhlIHRyYW5zaXRpb25zLlxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAncmVjdCgwICcgKyB3aWR0aCArICdweCAnICsgaGVpZ2h0ICsgJ3B4IDApJztcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIENsZWFuIHVwIGFmdGVyIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGUuXG4gICAgICAgIHRoaXMuYWRkQW5pbWF0aW9uRW5kTGlzdGVuZXJfKCk7XG4gICAgICAgIC8vIEFkZCBhIGNsaWNrIGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudCwgdG8gY2xvc2UgdGhlIG1lbnUuXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIGRvY3VtZW50IGlzIHByb2Nlc3NpbmcgdGhlIHNhbWUgZXZlbnQgdGhhdFxuICAgICAgICAgICAgLy8gZGlzcGxheWVkIHRoZSBtZW51IGluIHRoZSBmaXJzdCBwbGFjZS4gSWYgc28sIGRvIG5vdGhpbmcuXG4gICAgICAgICAgICAvLyBBbHNvIGNoZWNrIHRvIHNlZSBpZiB0aGUgbWVudSBpcyBpbiB0aGUgcHJvY2VzcyBvZiBjbG9zaW5nIGl0c2VsZiwgYW5kXG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nIGluIHRoYXQgY2FzZS5cbiAgICAgICAgICAgIC8vIEFsc28gY2hlY2sgaWYgdGhlIGNsaWNrZWQgZWxlbWVudCBpcyBhIG1lbnUgaXRlbVxuICAgICAgICAgICAgLy8gaWYgc28sIGRvIG5vdGhpbmcuXG4gICAgICAgICAgICBpZiAoZSAhPT0gZXZ0ICYmICF0aGlzLmNsb3NpbmdfICYmIGUudGFyZ2V0LnBhcmVudE5vZGUgIT09IHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZVsnc2hvdyddID0gTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5zaG93O1xuLyoqXG4gICAqIEhpZGVzIHRoZSBtZW51LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfICYmIHRoaXMuY29udGFpbmVyXyAmJiB0aGlzLm91dGxpbmVfKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLklURU0pO1xuICAgICAgICAvLyBSZW1vdmUgYWxsIHRyYW5zaXRpb24gZGVsYXlzOyBtZW51IGl0ZW1zIGZhZGUgb3V0IGNvbmN1cnJlbnRseS5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXRlbXNbaV0uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZGVsYXknKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNZWFzdXJlIHRoZSBpbm5lciBlbGVtZW50LlxuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuZWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBoZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgICAgdmFyIHdpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgLy8gVHVybiBvbiBhbmltYXRpb24sIGFuZCBhcHBseSB0aGUgZmluYWwgY2xpcC4gQWxzbyBtYWtlIGludmlzaWJsZS5cbiAgICAgICAgLy8gVGhpcyB0cmlnZ2VycyB0aGUgdHJhbnNpdGlvbnMuXG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgICAgIHRoaXMuYXBwbHlDbGlwXyhoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgICAgdGhpcy5hZGRBbmltYXRpb25FbmRMaXN0ZW5lcl8oKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZVsnaGlkZSddID0gTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5oaWRlO1xuLyoqXG4gICAqIERpc3BsYXlzIG9yIGhpZGVzIHRoZSBtZW51LCBkZXBlbmRpbmcgb24gY3VycmVudCBzdGF0ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSkpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93KGV2dCk7XG4gICAgfVxufTtcbk1hdGVyaWFsTWVudS5wcm90b3R5cGVbJ3RvZ2dsZSddID0gTWF0ZXJpYWxNZW51LnByb3RvdHlwZS50b2dnbGU7XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxNZW51LFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbE1lbnUnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLW1lbnUnLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1lbnUuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgUHJvZ3Jlc3MgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFByb2dyZXNzID0gZnVuY3Rpb24gTWF0ZXJpYWxQcm9ncmVzcyhlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsUHJvZ3Jlc3MnXSA9IE1hdGVyaWFsUHJvZ3Jlc3M7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5Db25zdGFudF8gPSB7fTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLkNzc0NsYXNzZXNfID0geyBJTkRFVEVSTUlOQVRFX0NMQVNTOiAnbWRsLXByb2dyZXNzX19pbmRldGVybWluYXRlJyB9O1xuLyoqXG4gICAqIFNldCB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgcHJvZ3Jlc3NiYXIuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwIFBlcmNlbnRhZ2Ugb2YgdGhlIHByb2dyZXNzICgwLTEwMClcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLnNldFByb2dyZXNzID0gZnVuY3Rpb24gKHApIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JTkRFVEVSTUlOQVRFX0NMQVNTKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJvZ3Jlc3NiYXJfLnN0eWxlLndpZHRoID0gcCArICclJztcbn07XG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZVsnc2V0UHJvZ3Jlc3MnXSA9IE1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLnNldFByb2dyZXNzO1xuLyoqXG4gICAqIFNldCB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgYnVmZmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcCBQZXJjZW50YWdlIG9mIHRoZSBidWZmZXIgKDAtMTAwKVxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUuc2V0QnVmZmVyID0gZnVuY3Rpb24gKHApIHtcbiAgICB0aGlzLmJ1ZmZlcmJhcl8uc3R5bGUud2lkdGggPSBwICsgJyUnO1xuICAgIHRoaXMuYXV4YmFyXy5zdHlsZS53aWR0aCA9IDEwMCAtIHAgKyAnJSc7XG59O1xuTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGVbJ3NldEJ1ZmZlciddID0gTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUuc2V0QnVmZmVyO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbC5jbGFzc05hbWUgPSAncHJvZ3Jlc3NiYXIgYmFyIGJhcjEnO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2Jhcl8gPSBlbDtcbiAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gJ2J1ZmZlcmJhciBiYXIgYmFyMic7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB0aGlzLmJ1ZmZlcmJhcl8gPSBlbDtcbiAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gJ2F1eGJhciBiYXIgYmFyMyc7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB0aGlzLmF1eGJhcl8gPSBlbDtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2Jhcl8uc3R5bGUud2lkdGggPSAnMCUnO1xuICAgICAgICB0aGlzLmJ1ZmZlcmJhcl8uc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuYXV4YmFyXy5zdHlsZS53aWR0aCA9ICcwJSc7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCgnaXMtdXBncmFkZWQnKTtcbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsUHJvZ3Jlc3MsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsUHJvZ3Jlc3MnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXByb2dyZXNzJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwcm9ncmVzcy5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBSYWRpbyBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsUmFkaW8gPSBmdW5jdGlvbiBNYXRlcmlhbFJhZGlvKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxSYWRpbyddID0gTWF0ZXJpYWxSYWRpbztcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLkNvbnN0YW50XyA9IHsgVElOWV9USU1FT1VUOiAwLjAwMSB9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgSVNfRk9DVVNFRDogJ2lzLWZvY3VzZWQnLFxuICAgIElTX0RJU0FCTEVEOiAnaXMtZGlzYWJsZWQnLFxuICAgIElTX0NIRUNLRUQ6ICdpcy1jaGVja2VkJyxcbiAgICBJU19VUEdSQURFRDogJ2lzLXVwZ3JhZGVkJyxcbiAgICBKU19SQURJTzogJ21kbC1qcy1yYWRpbycsXG4gICAgUkFESU9fQlROOiAnbWRsLXJhZGlvX19idXR0b24nLFxuICAgIFJBRElPX09VVEVSX0NJUkNMRTogJ21kbC1yYWRpb19fb3V0ZXItY2lyY2xlJyxcbiAgICBSQURJT19JTk5FUl9DSVJDTEU6ICdtZGwtcmFkaW9fX2lubmVyLWNpcmNsZScsXG4gICAgUklQUExFX0VGRkVDVDogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICBSSVBQTEVfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJyxcbiAgICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLXJhZGlvX19yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEVfQ0VOVEVSOiAnbWRsLXJpcHBsZS0tY2VudGVyJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2hhbmdlIG9mIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5vbkNoYW5nZV8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBTaW5jZSBvdGhlciByYWRpbyBidXR0b25zIGRvbid0IGdldCBjaGFuZ2UgZXZlbnRzLCB3ZSBuZWVkIHRvIGxvb2sgZm9yXG4gICAgLy8gdGhlbSB0byB1cGRhdGUgdGhlaXIgY2xhc3Nlcy5cbiAgICB2YXIgcmFkaW9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLkNzc0NsYXNzZXNfLkpTX1JBRElPKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYnV0dG9uID0gcmFkaW9zW2ldLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5SQURJT19CVE4pO1xuICAgICAgICAvLyBEaWZmZXJlbnQgbmFtZSA9PSBkaWZmZXJlbnQgZ3JvdXAsIHNvIG5vIHBvaW50IHVwZGF0aW5nIHRob3NlLlxuICAgICAgICBpZiAoYnV0dG9uLmdldEF0dHJpYnV0ZSgnbmFtZScpID09PSB0aGlzLmJ0bkVsZW1lbnRfLmdldEF0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJhZGlvc1tpXVsnTWF0ZXJpYWxSYWRpbyddICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJhZGlvc1tpXVsnTWF0ZXJpYWxSYWRpbyddLnVwZGF0ZUNsYXNzZXNfKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gICAqIEhhbmRsZSBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUub25Gb2N1c18gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGxvc3QgZm9jdXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNldXAuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLm9uTW91c2V1cF8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmJsdXJfKCk7XG59O1xuLyoqXG4gICAqIFVwZGF0ZSBjbGFzc2VzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2hlY2tEaXNhYmxlZCgpO1xuICAgIHRoaXMuY2hlY2tUb2dnbGVTdGF0ZSgpO1xufTtcbi8qKlxuICAgKiBBZGQgYmx1ci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5ibHVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IHdoeSB0aGVyZSdzIGEgZm9jdXMgZXZlbnQgYmVpbmcgZmlyZWQgYWZ0ZXIgb3VyIGJsdXIsXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gYXZvaWQgdGhpcyBoYWNrLlxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5idG5FbGVtZW50Xy5ibHVyKCk7XG4gICAgfS5iaW5kKHRoaXMpLCB0aGlzLkNvbnN0YW50Xy5USU5ZX1RJTUVPVVQpO1xufTtcbi8vIFB1YmxpYyBtZXRob2RzLlxuLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnRzIGRpc2FibGVkIHN0YXRlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5idG5FbGVtZW50Xy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZVsnY2hlY2tEaXNhYmxlZCddID0gTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZDtcbi8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50cyB0b2dnbGVkIHN0YXRlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5idG5FbGVtZW50Xy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZVsnY2hlY2tUb2dnbGVTdGF0ZSddID0gTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZTtcbi8qKlxuICAgKiBEaXNhYmxlIHJhZGlvLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJ0bkVsZW1lbnRfLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGVbJ2Rpc2FibGUnXSA9IE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIHJhZGlvLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYnRuRWxlbWVudF8uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIENoZWNrIHJhZGlvLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5idG5FbGVtZW50Xy5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlXyhudWxsKTtcbn07XG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZVsnY2hlY2snXSA9IE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmNoZWNrO1xuLyoqXG4gICAqIFVuY2hlY2sgcmFkaW8uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS51bmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYnRuRWxlbWVudF8uY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMub25DaGFuZ2VfKG51bGwpO1xufTtcbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlWyd1bmNoZWNrJ10gPSBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS51bmNoZWNrO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMuYnRuRWxlbWVudF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5SQURJT19CVE4pO1xuICAgICAgICB0aGlzLmJvdW5kQ2hhbmdlSGFuZGxlcl8gPSB0aGlzLm9uQ2hhbmdlXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kRm9jdXNIYW5kbGVyXyA9IHRoaXMub25DaGFuZ2VfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRCbHVySGFuZGxlcl8gPSB0aGlzLm9uQmx1cl8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyXyA9IHRoaXMub25Nb3VzZXVwXy5iaW5kKHRoaXMpO1xuICAgICAgICB2YXIgb3V0ZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG91dGVyQ2lyY2xlLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SQURJT19PVVRFUl9DSVJDTEUpO1xuICAgICAgICB2YXIgaW5uZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGlubmVyQ2lyY2xlLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SQURJT19JTk5FUl9DSVJDTEUpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKG91dGVyQ2lyY2xlKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChpbm5lckNpcmNsZSk7XG4gICAgICAgIHZhciByaXBwbGVDb250YWluZXI7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfSUdOT1JFX0VWRU5UUyk7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DT05UQUlORVIpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NFTlRFUik7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlcl8pO1xuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChyaXBwbGVDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnRuRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5ib3VuZENoYW5nZUhhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5idG5FbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuYm91bmRGb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5idG5FbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5ib3VuZEJsdXJIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1VQR1JBREVEKTtcbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsUmFkaW8sXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsUmFkaW8nLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXJhZGlvJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByYWRpby5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBTbGlkZXIgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFNsaWRlciA9IGZ1bmN0aW9uIE1hdGVyaWFsU2xpZGVyKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBCcm93c2VyIGZlYXR1cmUgZGV0ZWN0aW9uLlxuICAgIHRoaXMuaXNJRV8gPSB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsU2xpZGVyJ10gPSBNYXRlcmlhbFNsaWRlcjtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5Db25zdGFudF8gPSB7fTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBJRV9DT05UQUlORVI6ICdtZGwtc2xpZGVyX19pZS1jb250YWluZXInLFxuICAgIFNMSURFUl9DT05UQUlORVI6ICdtZGwtc2xpZGVyX19jb250YWluZXInLFxuICAgIEJBQ0tHUk9VTkRfRkxFWDogJ21kbC1zbGlkZXJfX2JhY2tncm91bmQtZmxleCcsXG4gICAgQkFDS0dST1VORF9MT1dFUjogJ21kbC1zbGlkZXJfX2JhY2tncm91bmQtbG93ZXInLFxuICAgIEJBQ0tHUk9VTkRfVVBQRVI6ICdtZGwtc2xpZGVyX19iYWNrZ3JvdW5kLXVwcGVyJyxcbiAgICBJU19MT1dFU1RfVkFMVUU6ICdpcy1sb3dlc3QtdmFsdWUnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBpbnB1dCBvbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUub25JbnB1dF8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlU3R5bGVzXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2hhbmdlIG9uIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5vbkNoYW5nZV8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlU3R5bGVzXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2V1cCBvbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUub25Nb3VzZVVwXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnRhcmdldC5ibHVyKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZWRvd24gb24gY29udGFpbmVyIGVsZW1lbnQuXG4gICAqIFRoaXMgaGFuZGxlciBpcyBwdXJwb3NlIGlzIHRvIG5vdCByZXF1aXJlIHRoZSB1c2UgdG8gY2xpY2tcbiAgICogZXhhY3RseSBvbiB0aGUgMnB4IHNsaWRlciBlbGVtZW50LCBhcyBGaXJlRm94IHNlZW1zIHRvIGJlIHZlcnlcbiAgICogc3RyaWN0IGFib3V0IHRoaXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3VwcHJlc3Mge21pc3NpbmdQcm9wZXJ0aWVzfVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5vbkNvbnRhaW5lck1vdXNlRG93bl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBJZiB0aGlzIGNsaWNrIGlzIG5vdCBvbiB0aGUgcGFyZW50IGVsZW1lbnQgKGJ1dCByYXRoZXIgc29tZSBjaGlsZClcbiAgICAvLyBpZ25vcmUuIEl0IG1heSBzdGlsbCBidWJibGUgdXAuXG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gRGlzY2FyZCB0aGUgb3JpZ2luYWwgZXZlbnQgYW5kIGNyZWF0ZSBhIG5ldyBldmVudCB0aGF0XG4gICAgLy8gaXMgb24gdGhlIHNsaWRlciBlbGVtZW50LlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIG5ld0V2ZW50ID0gbmV3IE1vdXNlRXZlbnQoJ21vdXNlZG93bicsIHtcbiAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgIGJ1dHRvbnM6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIGNsaWVudFk6IHRoaXMuZWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueVxuICAgIH0pO1xuICAgIHRoaXMuZWxlbWVudF8uZGlzcGF0Y2hFdmVudChuZXdFdmVudCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSB1cGRhdGluZyBvZiB2YWx1ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLnVwZGF0ZVZhbHVlU3R5bGVzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDYWxjdWxhdGUgYW5kIGFwcGx5IHBlcmNlbnRhZ2VzIHRvIGRpdiBzdHJ1Y3R1cmUgYmVoaW5kIHNsaWRlci5cbiAgICB2YXIgZnJhY3Rpb24gPSAodGhpcy5lbGVtZW50Xy52YWx1ZSAtIHRoaXMuZWxlbWVudF8ubWluKSAvICh0aGlzLmVsZW1lbnRfLm1heCAtIHRoaXMuZWxlbWVudF8ubWluKTtcbiAgICBpZiAoZnJhY3Rpb24gPT09IDApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfTE9XRVNUX1ZBTFVFKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19MT1dFU1RfVkFMVUUpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNJRV8pIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTG93ZXJfLnN0eWxlLmZsZXggPSBmcmFjdGlvbjtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTG93ZXJfLnN0eWxlLndlYmtpdEZsZXggPSBmcmFjdGlvbjtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVXBwZXJfLnN0eWxlLmZsZXggPSAxIC0gZnJhY3Rpb247XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFVwcGVyXy5zdHlsZS53ZWJraXRGbGV4ID0gMSAtIGZyYWN0aW9uO1xuICAgIH1cbn07XG4vLyBQdWJsaWMgbWV0aG9kcy5cbi8qKlxuICAgKiBEaXNhYmxlIHNsaWRlci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xufTtcbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIHNsaWRlci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xufTtcbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZVsnZW5hYmxlJ10gPSBNYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIFVwZGF0ZSBzbGlkZXIgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgdmFsdWUgdG8gd2hpY2ggdG8gc2V0IHRoZSBjb250cm9sIChvcHRpb25hbCkuXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuY2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVZhbHVlU3R5bGVzXygpO1xufTtcbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZVsnY2hhbmdlJ10gPSBNYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuY2hhbmdlO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICBpZiAodGhpcy5pc0lFXykge1xuICAgICAgICAgICAgLy8gU2luY2Ugd2UgbmVlZCB0byBzcGVjaWZ5IGEgdmVyeSBsYXJnZSBoZWlnaHQgaW4gSUUgZHVlIHRvXG4gICAgICAgICAgICAvLyBpbXBsZW1lbnRhdGlvbiBsaW1pdGF0aW9ucywgd2UgYWRkIGEgcGFyZW50IGhlcmUgdGhhdCB0cmltcyBpdCBkb3duIHRvXG4gICAgICAgICAgICAvLyBhIHJlYXNvbmFibGUgc2l6ZS5cbiAgICAgICAgICAgIHZhciBjb250YWluZXJJRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGFpbmVySUUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lcklFLCB0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgICAgIGNvbnRhaW5lcklFLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRm9yIG5vbi1JRSBicm93c2Vycywgd2UgbmVlZCBhIGRpdiBzdHJ1Y3R1cmUgdGhhdCBzaXRzIGJlaGluZCB0aGVcbiAgICAgICAgICAgIC8vIHNsaWRlciBhbmQgYWxsb3dzIHVzIHRvIHN0eWxlIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlcyBvZiBpdCB3aXRoXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgY29sb3JzLlxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5TTElERVJfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCB0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kRmxleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmFja2dyb3VuZEZsZXguY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJBQ0tHUk9VTkRfRkxFWCk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEZsZXgpO1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTG93ZXJfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRMb3dlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJBQ0tHUk9VTkRfTE9XRVIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZEZsZXguYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kTG93ZXJfKTtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFVwcGVyXyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVXBwZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5CQUNLR1JPVU5EX1VQUEVSKTtcbiAgICAgICAgICAgIGJhY2tncm91bmRGbGV4LmFwcGVuZENoaWxkKHRoaXMuYmFja2dyb3VuZFVwcGVyXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib3VuZElucHV0SGFuZGxlciA9IHRoaXMub25JbnB1dF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZENoYW5nZUhhbmRsZXIgPSB0aGlzLm9uQ2hhbmdlXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXIgPSB0aGlzLm9uTW91c2VVcF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZENvbnRhaW5lck1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLm9uQ29udGFpbmVyTW91c2VEb3duXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5ib3VuZElucHV0SGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5ib3VuZENoYW5nZUhhbmRsZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5ib3VuZENvbnRhaW5lck1vdXNlRG93bkhhbmRsZXIpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlU3R5bGVzXygpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFNsaWRlcixcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxTbGlkZXInLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXNsaWRlcicsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2xpZGVyLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgU25hY2tiYXIgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFNuYWNrYmFyID0gZnVuY3Rpb24gTWF0ZXJpYWxTbmFja2JhcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgdGhpcy50ZXh0RWxlbWVudF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5jc3NDbGFzc2VzXy5NRVNTQUdFKTtcbiAgICB0aGlzLmFjdGlvbkVsZW1lbnRfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuY3NzQ2xhc3Nlc18uQUNUSU9OKTtcbiAgICBpZiAoIXRoaXMudGV4dEVsZW1lbnRfKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgbXVzdCBiZSBhIG1lc3NhZ2UgZWxlbWVudCBmb3IgYSBzbmFja2Jhci4nKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmFjdGlvbkVsZW1lbnRfKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgbXVzdCBiZSBhbiBhY3Rpb24gZWxlbWVudCBmb3IgYSBzbmFja2Jhci4nKTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGlvbkhhbmRsZXJfID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZV8gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3Rpb25UZXh0XyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnF1ZXVlZE5vdGlmaWNhdGlvbnNfID0gW107XG4gICAgdGhpcy5zZXRBY3Rpb25IaWRkZW5fKHRydWUpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxTbmFja2JhciddID0gTWF0ZXJpYWxTbmFja2Jhcjtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU25hY2tiYXIucHJvdG90eXBlLkNvbnN0YW50XyA9IHtcbiAgICAvLyBUaGUgZHVyYXRpb24gb2YgdGhlIHNuYWNrYmFyIHNob3cvaGlkZSBhbmltYXRpb24sIGluIG1zLlxuICAgIEFOSU1BVElPTl9MRU5HVEg6IDI1MFxufTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU25hY2tiYXIucHJvdG90eXBlLmNzc0NsYXNzZXNfID0ge1xuICAgIFNOQUNLQkFSOiAnbWRsLXNuYWNrYmFyJyxcbiAgICBNRVNTQUdFOiAnbWRsLXNuYWNrYmFyX190ZXh0JyxcbiAgICBBQ1RJT046ICdtZGwtc25hY2tiYXJfX2FjdGlvbicsXG4gICAgQUNUSVZFOiAnbWRsLXNuYWNrYmFyLS1hY3RpdmUnXG59O1xuLyoqXG4gICAqIERpc3BsYXkgdGhlIHNuYWNrYmFyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU25hY2tiYXIucHJvdG90eXBlLmRpc3BsYXlTbmFja2Jhcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBpZiAodGhpcy5hY3Rpb25IYW5kbGVyXykge1xuICAgICAgICB0aGlzLmFjdGlvbkVsZW1lbnRfLnRleHRDb250ZW50ID0gdGhpcy5hY3Rpb25UZXh0XztcbiAgICAgICAgdGhpcy5hY3Rpb25FbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWN0aW9uSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLnNldEFjdGlvbkhpZGRlbl8oZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLnRleHRFbGVtZW50Xy50ZXh0Q29udGVudCA9IHRoaXMubWVzc2FnZV87XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuY3NzQ2xhc3Nlc18uQUNUSVZFKTtcbiAgICB0aGlzLmVsZW1lbnRfLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICBzZXRUaW1lb3V0KHRoaXMuY2xlYW51cF8uYmluZCh0aGlzKSwgdGhpcy50aW1lb3V0Xyk7XG59O1xuLyoqXG4gICAqIFNob3cgdGhlIHNuYWNrYmFyLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSBmb3IgdGhlIG5vdGlmaWNhdGlvbi5cbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU25hY2tiYXIucHJvdG90eXBlLnNob3dTbmFja2JhciA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgZGF0YSBvYmplY3Qgd2l0aCBhdCBsZWFzdCBhIG1lc3NhZ2UgdG8gZGlzcGxheS4nKTtcbiAgICB9XG4gICAgaWYgKGRhdGFbJ21lc3NhZ2UnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYSBtZXNzYWdlIHRvIGJlIGRpc3BsYXllZC4nKTtcbiAgICB9XG4gICAgaWYgKGRhdGFbJ2FjdGlvbkhhbmRsZXInXSAmJiAhZGF0YVsnYWN0aW9uVGV4dCddKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYWN0aW9uIHRleHQgd2l0aCB0aGUgaGFuZGxlci4nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMucXVldWVkTm90aWZpY2F0aW9uc18ucHVzaChkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubWVzc2FnZV8gPSBkYXRhWydtZXNzYWdlJ107XG4gICAgICAgIGlmIChkYXRhWyd0aW1lb3V0J10pIHtcbiAgICAgICAgICAgIHRoaXMudGltZW91dF8gPSBkYXRhWyd0aW1lb3V0J107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRfID0gMjc1MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVsnYWN0aW9uSGFuZGxlciddKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbkhhbmRsZXJfID0gZGF0YVsnYWN0aW9uSGFuZGxlciddO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhWydhY3Rpb25UZXh0J10pIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uVGV4dF8gPSBkYXRhWydhY3Rpb25UZXh0J107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNwbGF5U25hY2tiYXJfKCk7XG4gICAgfVxufTtcbk1hdGVyaWFsU25hY2tiYXIucHJvdG90eXBlWydzaG93U25hY2tiYXInXSA9IE1hdGVyaWFsU25hY2tiYXIucHJvdG90eXBlLnNob3dTbmFja2Jhcjtcbi8qKlxuICAgKiBDaGVjayBpZiB0aGUgcXVldWUgaGFzIGl0ZW1zIHdpdGhpbiBpdC5cbiAgICogSWYgaXQgZG9lcywgZGlzcGxheSB0aGUgbmV4dCBlbnRyeS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZS5jaGVja1F1ZXVlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5xdWV1ZWROb3RpZmljYXRpb25zXy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2hvd1NuYWNrYmFyKHRoaXMucXVldWVkTm90aWZpY2F0aW9uc18uc2hpZnQoKSk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBDbGVhbnVwIHRoZSBzbmFja2JhciBldmVudCBsaXN0ZW5lcnMgYW5kIGFjY2Vzc2libGl0eSBhdHRyaWJ1dGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU25hY2tiYXIucHJvdG90eXBlLmNsZWFudXBfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNzc0NsYXNzZXNfLkFDVElWRSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIHRoaXMudGV4dEVsZW1lbnRfLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGlmICghQm9vbGVhbih0aGlzLmFjdGlvbkVsZW1lbnRfLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9uSGlkZGVuXyh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uRWxlbWVudF8udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uRWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFjdGlvbkhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGlvbkhhbmRsZXJfID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1lc3NhZ2VfID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmFjdGlvblRleHRfID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoZWNrUXVldWVfKCk7XG4gICAgfS5iaW5kKHRoaXMpLCB0aGlzLkNvbnN0YW50Xy5BTklNQVRJT05fTEVOR1RIKTtcbn07XG4vKipcbiAgICogU2V0IHRoZSBhY3Rpb24gaGFuZGxlciBoaWRkZW4gc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZS5zZXRBY3Rpb25IaWRkZW5fID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uRWxlbWVudF8uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3Rpb25FbGVtZW50Xy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFNuYWNrYmFyLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFNuYWNrYmFyJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1zbmFja2JhcicsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc25hY2tiYXIuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgU3Bpbm5lciBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xudmFyIE1hdGVyaWFsU3Bpbm5lciA9IGZ1bmN0aW9uIE1hdGVyaWFsU3Bpbm5lcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsU3Bpbm5lciddID0gTWF0ZXJpYWxTcGlubmVyO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5Db25zdGFudF8gPSB7IE1ETF9TUElOTkVSX0xBWUVSX0NPVU5UOiA0IH07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIE1ETF9TUElOTkVSX0xBWUVSOiAnbWRsLXNwaW5uZXJfX2xheWVyJyxcbiAgICBNRExfU1BJTk5FUl9DSVJDTEVfQ0xJUFBFUjogJ21kbC1zcGlubmVyX19jaXJjbGUtY2xpcHBlcicsXG4gICAgTURMX1NQSU5ORVJfQ0lSQ0xFOiAnbWRsLXNwaW5uZXJfX2NpcmNsZScsXG4gICAgTURMX1NQSU5ORVJfR0FQX1BBVENIOiAnbWRsLXNwaW5uZXJfX2dhcC1wYXRjaCcsXG4gICAgTURMX1NQSU5ORVJfTEVGVDogJ21kbC1zcGlubmVyX19sZWZ0JyxcbiAgICBNRExfU1BJTk5FUl9SSUdIVDogJ21kbC1zcGlubmVyX19yaWdodCdcbn07XG4vKipcbiAgICogQXV4aWxpYXJ5IG1ldGhvZCB0byBjcmVhdGUgYSBzcGlubmVyIGxheWVyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggb2YgdGhlIGxheWVyIHRvIGJlIGNyZWF0ZWQuXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLmNyZWF0ZUxheWVyID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgdmFyIGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0xBWUVSKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX1NQSU5ORVJfTEFZRVIgKyAnLScgKyBpbmRleCk7XG4gICAgdmFyIGxlZnRDbGlwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdENsaXBwZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0NJUkNMRV9DTElQUEVSKTtcbiAgICBsZWZ0Q2xpcHBlci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX1NQSU5ORVJfTEVGVCk7XG4gICAgdmFyIGdhcFBhdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FwUGF0Y2guY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0dBUF9QQVRDSCk7XG4gICAgdmFyIHJpZ2h0Q2xpcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0Q2xpcHBlci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX1NQSU5ORVJfQ0lSQ0xFX0NMSVBQRVIpO1xuICAgIHJpZ2h0Q2xpcHBlci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX1NQSU5ORVJfUklHSFQpO1xuICAgIHZhciBjaXJjbGVPd25lcnMgPSBbXG4gICAgICAgIGxlZnRDbGlwcGVyLFxuICAgICAgICBnYXBQYXRjaCxcbiAgICAgICAgcmlnaHRDbGlwcGVyXG4gICAgXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpcmNsZU93bmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX1NQSU5ORVJfQ0lSQ0xFKTtcbiAgICAgICAgY2lyY2xlT3duZXJzW2ldLmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgfVxuICAgIGxheWVyLmFwcGVuZENoaWxkKGxlZnRDbGlwcGVyKTtcbiAgICBsYXllci5hcHBlbmRDaGlsZChnYXBQYXRjaCk7XG4gICAgbGF5ZXIuYXBwZW5kQ2hpbGQocmlnaHRDbGlwcGVyKTtcbiAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGxheWVyKTtcbn07XG5NYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlWydjcmVhdGVMYXllciddID0gTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5jcmVhdGVMYXllcjtcbi8qKlxuICAgKiBTdG9wcyB0aGUgc3Bpbm5lciBhbmltYXRpb24uXG4gICAqIFB1YmxpYyBtZXRob2QgZm9yIHVzZXJzIHdobyBuZWVkIHRvIHN0b3AgdGhlIHNwaW5uZXIgZm9yIGFueSByZWFzb24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbn07XG5NYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlWydzdG9wJ10gPSBNYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLnN0b3A7XG4vKipcbiAgICogU3RhcnRzIHRoZSBzcGlubmVyIGFuaW1hdGlvbi5cbiAgICogUHVibGljIG1ldGhvZCBmb3IgdXNlcnMgd2hvIG5lZWQgdG8gbWFudWFsbHkgc3RhcnQgdGhlIHNwaW5uZXIgZm9yIGFueSByZWFzb25cbiAgICogKGluc3RlYWQgb2YganVzdCBhZGRpbmcgdGhlICdpcy1hY3RpdmUnIGNsYXNzIHRvIHRoZWlyIG1hcmt1cCkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG59O1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZVsnc3RhcnQnXSA9IE1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuc3RhcnQ7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB0aGlzLkNvbnN0YW50Xy5NRExfU1BJTk5FUl9MQVlFUl9DT1VOVDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUxheWVyKGkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCgnaXMtdXBncmFkZWQnKTtcbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsU3Bpbm5lcixcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxTcGlubmVyJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1zcGlubmVyJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcGlubmVyLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIENoZWNrYm94IE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxTd2l0Y2ggPSBmdW5jdGlvbiBNYXRlcmlhbFN3aXRjaChlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsU3dpdGNoJ10gPSBNYXRlcmlhbFN3aXRjaDtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5Db25zdGFudF8gPSB7IFRJTllfVElNRU9VVDogMC4wMDEgfTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBJTlBVVDogJ21kbC1zd2l0Y2hfX2lucHV0JyxcbiAgICBUUkFDSzogJ21kbC1zd2l0Y2hfX3RyYWNrJyxcbiAgICBUSFVNQjogJ21kbC1zd2l0Y2hfX3RodW1iJyxcbiAgICBGT0NVU19IRUxQRVI6ICdtZGwtc3dpdGNoX19mb2N1cy1oZWxwZXInLFxuICAgIFJJUFBMRV9FRkZFQ1Q6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgUklQUExFX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cycsXG4gICAgUklQUExFX0NPTlRBSU5FUjogJ21kbC1zd2l0Y2hfX3JpcHBsZS1jb250YWluZXInLFxuICAgIFJJUFBMRV9DRU5URVI6ICdtZGwtcmlwcGxlLS1jZW50ZXInLFxuICAgIFJJUFBMRTogJ21kbC1yaXBwbGUnLFxuICAgIElTX0ZPQ1VTRUQ6ICdpcy1mb2N1c2VkJyxcbiAgICBJU19ESVNBQkxFRDogJ2lzLWRpc2FibGVkJyxcbiAgICBJU19DSEVDS0VEOiAnaXMtY2hlY2tlZCdcbn07XG4vKipcbiAgICogSGFuZGxlIGNoYW5nZSBvZiBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLm9uQ2hhbmdlXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGZvY3VzIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbkZvY3VzXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbG9zdCBmb2N1cyBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub25CbHVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2V1cC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLm9uTW91c2VVcF8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmJsdXJfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBjbGFzcyB1cGRhdGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS51cGRhdGVDbGFzc2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNoZWNrRGlzYWJsZWQoKTtcbiAgICB0aGlzLmNoZWNrVG9nZ2xlU3RhdGUoKTtcbn07XG4vKipcbiAgICogQWRkIGJsdXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmJsdXJfID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgd2h5IHRoZXJlJ3MgYSBmb2N1cyBldmVudCBiZWluZyBmaXJlZCBhZnRlciBvdXIgYmx1cixcbiAgICAvLyBzbyB0aGF0IHdlIGNhbiBhdm9pZCB0aGlzIGhhY2suXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYmx1cigpO1xuICAgIH0uYmluZCh0aGlzKSwgdGhpcy5Db25zdGFudF8uVElOWV9USU1FT1VUKTtcbn07XG4vLyBQdWJsaWMgbWV0aG9kcy5cbi8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50cyBkaXNhYmxlZCBzdGF0ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5jaGVja0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlWydjaGVja0Rpc2FibGVkJ10gPSBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZDtcbi8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50cyB0b2dnbGVkIHN0YXRlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmNoZWNrVG9nZ2xlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGVbJ2NoZWNrVG9nZ2xlU3RhdGUnXSA9IE1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlO1xuLyoqXG4gICAqIERpc2FibGUgc3dpdGNoLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlWydkaXNhYmxlJ10gPSBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuZGlzYWJsZTtcbi8qKlxuICAgKiBFbmFibGUgc3dpdGNoLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlWydlbmFibGUnXSA9IE1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5lbmFibGU7XG4vKipcbiAgICogQWN0aXZhdGUgc3dpdGNoLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlWydvbiddID0gTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLm9uO1xuLyoqXG4gICAqIERlYWN0aXZhdGUgc3dpdGNoLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGVbJ29mZiddID0gTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLm9mZjtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSU5QVVQpO1xuICAgICAgICB2YXIgdHJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdHJhY2suY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRSQUNLKTtcbiAgICAgICAgdmFyIHRodW1iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRodW1iLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5USFVNQik7XG4gICAgICAgIHZhciBmb2N1c0hlbHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZm9jdXNIZWxwZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkZPQ1VTX0hFTFBFUik7XG4gICAgICAgIHRodW1iLmFwcGVuZENoaWxkKGZvY3VzSGVscGVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0cmFjayk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQodGh1bWIpO1xuICAgICAgICB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXIgPSB0aGlzLm9uTW91c2VVcF8uYmluZCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9JR05PUkVfRVZFTlRTKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1QpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NFTlRFUik7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXIpO1xuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uYXBwZW5kQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQodGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib3VuZENoYW5nZUhhbmRsZXIgPSB0aGlzLm9uQ2hhbmdlXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kRm9jdXNIYW5kbGVyID0gdGhpcy5vbkZvY3VzXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kQmx1ckhhbmRsZXIgPSB0aGlzLm9uQmx1cl8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRDaGFuZ2VIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZEZvY3VzSGFuZGxlcik7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5ib3VuZEJsdXJIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyKTtcbiAgICAgICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQoJ2lzLXVwZ3JhZGVkJyk7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFN3aXRjaCxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxTd2l0Y2gnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXN3aXRjaCcsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3dpdGNoLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFRleHRmaWVsZCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsVGV4dGZpZWxkID0gZnVuY3Rpb24gTWF0ZXJpYWxUZXh0ZmllbGQoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIHRoaXMubWF4Um93cyA9IHRoaXMuQ29uc3RhbnRfLk5PX01BWF9ST1dTO1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFRleHRmaWVsZCddID0gTWF0ZXJpYWxUZXh0ZmllbGQ7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuQ29uc3RhbnRfID0ge1xuICAgIE5PX01BWF9ST1dTOiAtMSxcbiAgICBNQVhfUk9XU19BVFRSSUJVVEU6ICdtYXhyb3dzJ1xufTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBMQUJFTDogJ21kbC10ZXh0ZmllbGRfX2xhYmVsJyxcbiAgICBJTlBVVDogJ21kbC10ZXh0ZmllbGRfX2lucHV0JyxcbiAgICBJU19ESVJUWTogJ2lzLWRpcnR5JyxcbiAgICBJU19GT0NVU0VEOiAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfSU5WQUxJRDogJ2lzLWludmFsaWQnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnLFxuICAgIEhBU19QTEFDRUhPTERFUjogJ2hhcy1wbGFjZWhvbGRlcidcbn07XG4vKipcbiAgICogSGFuZGxlIGlucHV0IGJlaW5nIGVudGVyZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5vbktleURvd25fID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGN1cnJlbnRSb3dDb3VudCA9IGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdCgnXFxuJykubGVuZ3RoO1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBpZiAoY3VycmVudFJvd0NvdW50ID49IHRoaXMubWF4Um93cykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlIGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUub25Gb2N1c18gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGxvc3QgZm9jdXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5vbkJsdXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSByZXNldCBldmVudCBmcm9tIG91dCBzaWRlLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUub25SZXNldF8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBjbGFzcyB1cGRhdGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS51cGRhdGVDbGFzc2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNoZWNrRGlzYWJsZWQoKTtcbiAgICB0aGlzLmNoZWNrVmFsaWRpdHkoKTtcbiAgICB0aGlzLmNoZWNrRGlydHkoKTtcbiAgICB0aGlzLmNoZWNrRm9jdXMoKTtcbn07XG4vLyBQdWJsaWMgbWV0aG9kcy5cbi8qKlxuICAgKiBDaGVjayB0aGUgZGlzYWJsZWQgc3RhdGUgYW5kIHVwZGF0ZSBmaWVsZCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGVja0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0Xy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGVbJ2NoZWNrRGlzYWJsZWQnXSA9IE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGVja0Rpc2FibGVkO1xuLyoqXG4gICogQ2hlY2sgdGhlIGZvY3VzIHN0YXRlIGFuZCB1cGRhdGUgZmllbGQgYWNjb3JkaW5nbHkuXG4gICpcbiAgKiBAcHVibGljXG4gICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoQm9vbGVhbih0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJzpmb2N1cycpKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlWydjaGVja0ZvY3VzJ10gPSBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tGb2N1cztcbi8qKlxuICAgKiBDaGVjayB0aGUgdmFsaWRpdHkgc3RhdGUgYW5kIHVwZGF0ZSBmaWVsZCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGVja1ZhbGlkaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0Xy52YWxpZGl0eSkge1xuICAgICAgICBpZiAodGhpcy5pbnB1dF8udmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0lOVkFMSUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfSU5WQUxJRCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlWydjaGVja1ZhbGlkaXR5J10gPSBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tWYWxpZGl0eTtcbi8qKlxuICAgKiBDaGVjayB0aGUgZGlydHkgc3RhdGUgYW5kIHVwZGF0ZSBmaWVsZCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGVja0RpcnR5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0Xy52YWx1ZSAmJiB0aGlzLmlucHV0Xy52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJUlRZKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVJUWSk7XG4gICAgfVxufTtcbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZVsnY2hlY2tEaXJ0eSddID0gTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoZWNrRGlydHk7XG4vKipcbiAgICogRGlzYWJsZSB0ZXh0IGZpZWxkLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dF8uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGVbJ2Rpc2FibGUnXSA9IE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5kaXNhYmxlO1xuLyoqXG4gICAqIEVuYWJsZSB0ZXh0IGZpZWxkLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0Xy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmVuYWJsZTtcbi8qKlxuICAgKiBVcGRhdGUgdGV4dCBmaWVsZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byB3aGljaCB0byBzZXQgdGhlIGNvbnRyb2wgKG9wdGlvbmFsKS5cbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB0aGlzLmlucHV0Xy52YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGVbJ2NoYW5nZSddID0gTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoYW5nZTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5sYWJlbF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5MQUJFTCk7XG4gICAgICAgIHRoaXMuaW5wdXRfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSU5QVVQpO1xuICAgICAgICBpZiAodGhpcy5pbnB1dF8pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0Xy5oYXNBdHRyaWJ1dGUodGhpcy5Db25zdGFudF8uTUFYX1JPV1NfQVRUUklCVVRFKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF4Um93cyA9IHBhcnNlSW50KHRoaXMuaW5wdXRfLmdldEF0dHJpYnV0ZSh0aGlzLkNvbnN0YW50Xy5NQVhfUk9XU19BVFRSSUJVVEUpLCAxMCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKHRoaXMubWF4Um93cykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhSb3dzID0gdGhpcy5Db25zdGFudF8uTk9fTUFYX1JPV1M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRfLmhhc0F0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkhBU19QTEFDRUhPTERFUik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJvdW5kVXBkYXRlQ2xhc3Nlc0hhbmRsZXIgPSB0aGlzLnVwZGF0ZUNsYXNzZXNfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmJvdW5kRm9jdXNIYW5kbGVyID0gdGhpcy5vbkZvY3VzXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ib3VuZEJsdXJIYW5kbGVyID0gdGhpcy5vbkJsdXJfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmJvdW5kUmVzZXRIYW5kbGVyID0gdGhpcy5vblJlc2V0Xy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmJvdW5kVXBkYXRlQ2xhc3Nlc0hhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmJvdW5kRm9jdXNIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRfLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kQmx1ckhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCB0aGlzLmJvdW5kUmVzZXRIYW5kbGVyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1heFJvd3MgIT09IHRoaXMuQ29uc3RhbnRfLk5PX01BWF9ST1dTKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBzaG91bGQgaGFuZGxlIHBhc3RpbmcgbXVsdGkgbGluZSB0ZXh0LlxuICAgICAgICAgICAgICAgIC8vIEN1cnJlbnRseSBkb2Vzbid0LlxuICAgICAgICAgICAgICAgIHRoaXMuYm91bmRLZXlEb3duSGFuZGxlciA9IHRoaXMub25LZXlEb3duXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRfLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvdW5kS2V5RG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGludmFsaWQgPSB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX0lOVkFMSUQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICAgICAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19JTlZBTElEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0Xy5oYXNBdHRyaWJ1dGUoJ2F1dG9mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFRleHRmaWVsZCxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxUZXh0ZmllbGQnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXRleHRmaWVsZCcsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGV4dGZpZWxkLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFRvb2x0aXAgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFRvb2x0aXAgPSBmdW5jdGlvbiBNYXRlcmlhbFRvb2x0aXAoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFRvb2x0aXAnXSA9IE1hdGVyaWFsVG9vbHRpcDtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVG9vbHRpcC5wcm90b3R5cGUuQ29uc3RhbnRfID0ge307XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRvb2x0aXAucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIElTX0FDVElWRTogJ2lzLWFjdGl2ZScsXG4gICAgQk9UVE9NOiAnbWRsLXRvb2x0aXAtLWJvdHRvbScsXG4gICAgTEVGVDogJ21kbC10b29sdGlwLS1sZWZ0JyxcbiAgICBSSUdIVDogJ21kbC10b29sdGlwLS1yaWdodCcsXG4gICAgVE9QOiAnbWRsLXRvb2x0aXAtLXRvcCdcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNlZW50ZXIgZm9yIHRvb2x0aXAuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVG9vbHRpcC5wcm90b3R5cGUuaGFuZGxlTW91c2VFbnRlcl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgcHJvcHMgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGxlZnQgPSBwcm9wcy5sZWZ0ICsgcHJvcHMud2lkdGggLyAyO1xuICAgIHZhciB0b3AgPSBwcm9wcy50b3AgKyBwcm9wcy5oZWlnaHQgLyAyO1xuICAgIHZhciBtYXJnaW5MZWZ0ID0gLTEgKiAodGhpcy5lbGVtZW50Xy5vZmZzZXRXaWR0aCAvIDIpO1xuICAgIHZhciBtYXJnaW5Ub3AgPSAtMSAqICh0aGlzLmVsZW1lbnRfLm9mZnNldEhlaWdodCAvIDIpO1xuICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkxFRlQpIHx8IHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uUklHSFQpKSB7XG4gICAgICAgIGxlZnQgPSBwcm9wcy53aWR0aCAvIDI7XG4gICAgICAgIGlmICh0b3AgKyBtYXJnaW5Ub3AgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubWFyZ2luVG9wID0gJzAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3AgKyAncHgnO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGxlZnQgKyBtYXJnaW5MZWZ0IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5tYXJnaW5MZWZ0ID0gJzAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1ApKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUudG9wID0gcHJvcHMudG9wIC0gdGhpcy5lbGVtZW50Xy5vZmZzZXRIZWlnaHQgLSAxMCArICdweCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlJJR0hUKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmxlZnQgPSBwcm9wcy5sZWZ0ICsgcHJvcHMud2lkdGggKyAxMCArICdweCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkxFRlQpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubGVmdCA9IHByb3BzLmxlZnQgLSB0aGlzLmVsZW1lbnRfLm9mZnNldFdpZHRoIC0gMTAgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUudG9wID0gcHJvcHMudG9wICsgcHJvcHMuaGVpZ2h0ICsgMTAgKyAncHgnO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xufTtcbi8qKlxuICAgKiBIaWRlIHRvb2x0aXAgb24gbW91c2VsZWF2ZSBvciBzY3JvbGxcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRvb2x0aXAucHJvdG90eXBlLmhpZGVUb29sdGlwXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xufTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxUb29sdGlwLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHZhciBmb3JFbElkID0gdGhpcy5lbGVtZW50Xy5nZXRBdHRyaWJ1dGUoJ2ZvcicpIHx8IHRoaXMuZWxlbWVudF8uZ2V0QXR0cmlidXRlKCdkYXRhLW1kbC1mb3InKTtcbiAgICAgICAgaWYgKGZvckVsSWQpIHtcbiAgICAgICAgICAgIHRoaXMuZm9yRWxlbWVudF8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JFbElkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mb3JFbGVtZW50Xykge1xuICAgICAgICAgICAgLy8gSXQncyBsZWZ0IGhlcmUgYmVjYXVzZSBpdCBwcmV2ZW50cyBhY2NpZGVudGFsIHRleHQgc2VsZWN0aW9uIG9uIEFuZHJvaWRcbiAgICAgICAgICAgIGlmICghdGhpcy5mb3JFbGVtZW50Xy5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvckVsZW1lbnRfLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ib3VuZE1vdXNlRW50ZXJIYW5kbGVyID0gdGhpcy5oYW5kbGVNb3VzZUVudGVyXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ib3VuZE1vdXNlTGVhdmVBbmRTY3JvbGxIYW5kbGVyID0gdGhpcy5oaWRlVG9vbHRpcF8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZm9yRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuYm91bmRNb3VzZUVudGVySGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5mb3JFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuYm91bmRNb3VzZUVudGVySGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5mb3JFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5ib3VuZE1vdXNlTGVhdmVBbmRTY3JvbGxIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5ib3VuZE1vdXNlTGVhdmVBbmRTY3JvbGxIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5ib3VuZE1vdXNlTGVhdmVBbmRTY3JvbGxIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxUb29sdGlwLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFRvb2x0aXAnLFxuICAgIGNzc0NsYXNzOiAnbWRsLXRvb2x0aXAnXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdG9vbHRpcC5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBEYXRhIFRhYmxlIENhcmQgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsRGF0YVRhYmxlID0gZnVuY3Rpb24gTWF0ZXJpYWxEYXRhVGFibGUoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbERhdGFUYWJsZSddID0gTWF0ZXJpYWxEYXRhVGFibGU7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbERhdGFUYWJsZS5wcm90b3R5cGUuQ29uc3RhbnRfID0ge307XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbERhdGFUYWJsZS5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgREFUQV9UQUJMRTogJ21kbC1kYXRhLXRhYmxlJyxcbiAgICBTRUxFQ1RBQkxFOiAnbWRsLWRhdGEtdGFibGUtLXNlbGVjdGFibGUnLFxuICAgIFNFTEVDVF9FTEVNRU5UOiAnbWRsLWRhdGEtdGFibGVfX3NlbGVjdCcsXG4gICAgSVNfU0VMRUNURUQ6ICdpcy1zZWxlY3RlZCcsXG4gICAgSVNfVVBHUkFERUQ6ICdpcy11cGdyYWRlZCdcbn07XG4vKipcbiAgICogR2VuZXJhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0b2dnbGVzIHRoZSBzZWxlY3Rpb24gc3RhdGUgb2YgYVxuICAgKiBzaW5nbGUgcm93IChvciBtdWx0aXBsZSByb3dzKS5cbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBjaGVja2JveCBDaGVja2JveCB0aGF0IHRvZ2dsZXMgdGhlIHNlbGVjdGlvbiBzdGF0ZS5cbiAgICogQHBhcmFtIHtFbGVtZW50fSByb3cgUm93IHRvIHRvZ2dsZSB3aGVuIGNoZWNrYm94IGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7KEFycmF5PE9iamVjdD58Tm9kZUxpc3QpPX0gb3B0X3Jvd3MgUm93cyB0byB0b2dnbGUgd2hlbiBjaGVja2JveCBjaGFuZ2VzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsRGF0YVRhYmxlLnByb3RvdHlwZS5zZWxlY3RSb3dfID0gZnVuY3Rpb24gKGNoZWNrYm94LCByb3csIG9wdF9yb3dzKSB7XG4gICAgaWYgKHJvdykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1NFTEVDVEVEKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19TRUxFQ1RFRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdF9yb3dzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciBlbDtcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG9wdF9yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsID0gb3B0X3Jvd3NbaV0ucXVlcnlTZWxlY3RvcigndGQnKS5xdWVyeVNlbGVjdG9yKCcubWRsLWNoZWNrYm94Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVsWydNYXRlcmlhbENoZWNrYm94J10uY2hlY2soKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0X3Jvd3NbaV0uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1NFTEVDVEVEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBvcHRfcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBlbCA9IG9wdF9yb3dzW2ldLnF1ZXJ5U2VsZWN0b3IoJ3RkJykucXVlcnlTZWxlY3RvcignLm1kbC1jaGVja2JveCcpO1xuICAgICAgICAgICAgICAgICAgICBlbFsnTWF0ZXJpYWxDaGVja2JveCddLnVuY2hlY2soKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0X3Jvd3NbaV0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX1NFTEVDVEVEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIENyZWF0ZXMgYSBjaGVja2JveCBmb3IgYSBzaW5nbGUgb3Igb3IgbXVsdGlwbGUgcm93cyBhbmQgaG9va3MgdXAgdGhlXG4gICAqIGV2ZW50IGhhbmRsaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHJvdyBSb3cgdG8gdG9nZ2xlIHdoZW4gY2hlY2tib3ggY2hhbmdlcy5cbiAgICogQHBhcmFtIHsoQXJyYXk8T2JqZWN0PnxOb2RlTGlzdCk9fSBvcHRfcm93cyBSb3dzIHRvIHRvZ2dsZSB3aGVuIGNoZWNrYm94IGNoYW5nZXMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxEYXRhVGFibGUucHJvdG90eXBlLmNyZWF0ZUNoZWNrYm94XyA9IGZ1bmN0aW9uIChyb3csIG9wdF9yb3dzKSB7XG4gICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB2YXIgbGFiZWxDbGFzc2VzID0gW1xuICAgICAgICAnbWRsLWNoZWNrYm94JyxcbiAgICAgICAgJ21kbC1qcy1jaGVja2JveCcsXG4gICAgICAgICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgICAgIHRoaXMuQ3NzQ2xhc3Nlc18uU0VMRUNUX0VMRU1FTlRcbiAgICBdO1xuICAgIGxhYmVsLmNsYXNzTmFtZSA9IGxhYmVsQ2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgdmFyIGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdtZGwtY2hlY2tib3hfX2lucHV0Jyk7XG4gICAgaWYgKHJvdykge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gcm93LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX1NFTEVDVEVEKTtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5zZWxlY3RSb3dfKGNoZWNrYm94LCByb3cpKTtcbiAgICB9IGVsc2UgaWYgKG9wdF9yb3dzKSB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuc2VsZWN0Um93XyhjaGVja2JveCwgbnVsbCwgb3B0X3Jvd3MpKTtcbiAgICB9XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQobGFiZWwsICdNYXRlcmlhbENoZWNrYm94Jyk7XG4gICAgcmV0dXJuIGxhYmVsO1xufTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxEYXRhVGFibGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdmFyIGZpcnN0SGVhZGVyID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCd0aCcpO1xuICAgICAgICB2YXIgYm9keVJvd3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRyJykpO1xuICAgICAgICB2YXIgZm9vdFJvd3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rmb290IHRyJykpO1xuICAgICAgICB2YXIgcm93cyA9IGJvZHlSb3dzLmNvbmNhdChmb290Um93cyk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlNFTEVDVEFCTEUpKSB7XG4gICAgICAgICAgICB2YXIgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgdmFyIGhlYWRlckNoZWNrYm94ID0gdGhpcy5jcmVhdGVDaGVja2JveF8obnVsbCwgcm93cyk7XG4gICAgICAgICAgICB0aC5hcHBlbmRDaGlsZChoZWFkZXJDaGVja2JveCk7XG4gICAgICAgICAgICBmaXJzdEhlYWRlci5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSh0aCwgZmlyc3RIZWFkZXIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0Q2VsbCA9IHJvd3NbaV0ucXVlcnlTZWxlY3RvcigndGQnKTtcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RDZWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3dzW2ldLnBhcmVudE5vZGUubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1RCT0RZJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvd0NoZWNrYm94ID0gdGhpcy5jcmVhdGVDaGVja2JveF8ocm93c1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZC5hcHBlbmRDaGlsZChyb3dDaGVja2JveCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm93c1tpXS5pbnNlcnRCZWZvcmUodGQsIGZpcnN0Q2VsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbERhdGFUYWJsZSxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxEYXRhVGFibGUnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLWRhdGEtdGFibGUnXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGF0YS10YWJsZS5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBSaXBwbGUgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFJpcHBsZSA9IGZ1bmN0aW9uIE1hdGVyaWFsUmlwcGxlKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxSaXBwbGUnXSA9IE1hdGVyaWFsUmlwcGxlO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLkNvbnN0YW50XyA9IHtcbiAgICBJTklUSUFMX1NDQUxFOiAnc2NhbGUoMC4wMDAxLCAwLjAwMDEpJyxcbiAgICBJTklUSUFMX1NJWkU6ICcxcHgnLFxuICAgIElOSVRJQUxfT1BBQ0lUWTogJzAuNCcsXG4gICAgRklOQUxfT1BBQ0lUWTogJzAnLFxuICAgIEZJTkFMX1NDQUxFOiAnJ1xufTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmlwcGxlLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBSSVBQTEVfQ0VOVEVSOiAnbWRsLXJpcHBsZS0tY2VudGVyJyxcbiAgICBSSVBQTEVfRUZGRUNUX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cycsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZScsXG4gICAgSVNfQU5JTUFUSU5HOiAnaXMtYW5pbWF0aW5nJyxcbiAgICBJU19WSVNJQkxFOiAnaXMtdmlzaWJsZSdcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNlIC8gZmluZ2VyIGRvd24gb24gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLmRvd25IYW5kbGVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICghdGhpcy5yaXBwbGVFbGVtZW50Xy5zdHlsZS53aWR0aCAmJiAhdGhpcy5yaXBwbGVFbGVtZW50Xy5zdHlsZS5oZWlnaHQpIHtcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmVsZW1lbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLmJvdW5kSGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRXaWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgICAgIHRoaXMucmlwcGxlU2l6ZV8gPSBNYXRoLnNxcnQocmVjdC53aWR0aCAqIHJlY3Qud2lkdGggKyByZWN0LmhlaWdodCAqIHJlY3QuaGVpZ2h0KSAqIDIgKyAyO1xuICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLndpZHRoID0gdGhpcy5yaXBwbGVTaXplXyArICdweCc7XG4gICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUuaGVpZ2h0ID0gdGhpcy5yaXBwbGVTaXplXyArICdweCc7XG4gICAgfVxuICAgIHRoaXMucmlwcGxlRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1ZJU0lCTEUpO1xuICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiB0aGlzLmlnbm9yaW5nTW91c2VEb3duXykge1xuICAgICAgICB0aGlzLmlnbm9yaW5nTW91c2VEb3duXyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgICAgIHRoaXMuaWdub3JpbmdNb3VzZURvd25fID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZnJhbWVDb3VudCA9IHRoaXMuZ2V0RnJhbWVDb3VudCgpO1xuICAgICAgICBpZiAoZnJhbWVDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEZyYW1lQ291bnQoMSk7XG4gICAgICAgIHZhciBib3VuZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciB4O1xuICAgICAgICB2YXIgeTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgYXJlIGhhbmRsaW5nIGEga2V5Ym9hcmQgY2xpY2suXG4gICAgICAgIGlmIChldmVudC5jbGllbnRYID09PSAwICYmIGV2ZW50LmNsaWVudFkgPT09IDApIHtcbiAgICAgICAgICAgIHggPSBNYXRoLnJvdW5kKGJvdW5kLndpZHRoIC8gMik7XG4gICAgICAgICAgICB5ID0gTWF0aC5yb3VuZChib3VuZC5oZWlnaHQgLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjbGllbnRYID0gZXZlbnQuY2xpZW50WCAhPT0gdW5kZWZpbmVkID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIHZhciBjbGllbnRZID0gZXZlbnQuY2xpZW50WSAhPT0gdW5kZWZpbmVkID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIHggPSBNYXRoLnJvdW5kKGNsaWVudFggLSBib3VuZC5sZWZ0KTtcbiAgICAgICAgICAgIHkgPSBNYXRoLnJvdW5kKGNsaWVudFkgLSBib3VuZC50b3ApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0UmlwcGxlWFkoeCwgeSk7XG4gICAgICAgIHRoaXMuc2V0UmlwcGxlU3R5bGVzKHRydWUpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbUZyYW1lSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZSAvIGZpbmdlciB1cCBvbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJpcHBsZS5wcm90b3R5cGUudXBIYW5kbGVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIERvbid0IGZpcmUgZm9yIHRoZSBhcnRpZmljaWFsIFwibW91c2V1cFwiIGdlbmVyYXRlZCBieSBhIGRvdWJsZS1jbGljay5cbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZGV0YWlsICE9PSAyKSB7XG4gICAgICAgIC8vIEFsbG93IGEgcmVwYWludCB0byBvY2N1ciBiZWZvcmUgcmVtb3ZpbmcgdGhpcyBjbGFzcywgc28gdGhlIGFuaW1hdGlvblxuICAgICAgICAvLyBzaG93cyBmb3IgdGFwIGV2ZW50cywgd2hpY2ggc2VlbSB0byB0cmlnZ2VyIGEgbW91c2V1cCB0b28gc29vbiBhZnRlclxuICAgICAgICAvLyBtb3VzZWRvd24uXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX1ZJU0lCTEUpO1xuICAgICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgIH1cbn07XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsUmlwcGxlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHZhciByZWNlbnRlcmluZyA9IHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NFTlRFUik7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUX0lHTk9SRV9FVkVOVFMpKSB7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudF8gPSAwO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVTaXplXyA9IDA7XG4gICAgICAgICAgICB0aGlzLnhfID0gMDtcbiAgICAgICAgICAgIHRoaXMueV8gPSAwO1xuICAgICAgICAgICAgLy8gVG91Y2ggc3RhcnQgcHJvZHVjZXMgYSBjb21wYXQgbW91c2UgZG93biBldmVudCwgd2hpY2ggd291bGQgY2F1c2UgYVxuICAgICAgICAgICAgLy8gc2Vjb25kIHJpcHBsZXMuIFRvIGF2b2lkIHRoYXQsIHdlIHVzZSB0aGlzIHByb3BlcnR5IHRvIGlnbm9yZSB0aGUgZmlyc3RcbiAgICAgICAgICAgIC8vIG1vdXNlIGRvd24gYWZ0ZXIgYSB0b3VjaCBzdGFydC5cbiAgICAgICAgICAgIHRoaXMuaWdub3JpbmdNb3VzZURvd25fID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJvdW5kRG93bkhhbmRsZXIgPSB0aGlzLmRvd25IYW5kbGVyXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmJvdW5kRG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5ib3VuZERvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRVcEhhbmRsZXIgPSB0aGlzLnVwSGFuZGxlcl8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRVcEhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5ib3VuZFVwSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5ib3VuZFVwSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kVXBIYW5kbGVyKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgKiBHZXR0ZXIgZm9yIGZyYW1lQ291bnRfLlxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBmcmFtZSBjb3VudC5cbiAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmdldEZyYW1lQ291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJhbWVDb3VudF87XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHRlciBmb3IgZnJhbWVDb3VudF8uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmQyB0aGUgZnJhbWUgY291bnQuXG4gICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5zZXRGcmFtZUNvdW50ID0gZnVuY3Rpb24gKGZDKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZUNvdW50XyA9IGZDO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgKiBHZXR0ZXIgZm9yIHJpcHBsZUVsZW1lbnRfLlxuICAgICAgICAgKiBAcmV0dXJuIHtFbGVtZW50fSB0aGUgcmlwcGxlIGVsZW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5nZXRSaXBwbGVFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJpcHBsZUVsZW1lbnRfO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSByaXBwbGUgWCBhbmQgWSBjb29yZGluYXRlcy5cbiAgICAgICAgICogQHBhcmFtICB7bnVtYmVyfSBuZXdYIHRoZSBuZXcgWCBjb29yZGluYXRlXG4gICAgICAgICAqIEBwYXJhbSAge251bWJlcn0gbmV3WSB0aGUgbmV3IFkgY29vcmRpbmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuc2V0UmlwcGxlWFkgPSBmdW5jdGlvbiAobmV3WCwgbmV3WSkge1xuICAgICAgICAgICAgICAgIHRoaXMueF8gPSBuZXdYO1xuICAgICAgICAgICAgICAgIHRoaXMueV8gPSBuZXdZO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSByaXBwbGUgc3R5bGVzLlxuICAgICAgICAgKiBAcGFyYW0gIHtib29sZWFufSBzdGFydCB3aGV0aGVyIG9yIG5vdCB0aGlzIGlzIHRoZSBzdGFydCBmcmFtZS5cbiAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnNldFJpcHBsZVN0eWxlcyA9IGZ1bmN0aW9uIChzdGFydCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpcHBsZUVsZW1lbnRfICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNpemU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAndHJhbnNsYXRlKCcgKyB0aGlzLnhfICsgJ3B4LCAnICsgdGhpcy55XyArICdweCknO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlID0gdGhpcy5Db25zdGFudF8uSU5JVElBTF9TQ0FMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgPSB0aGlzLkNvbnN0YW50Xy5JTklUSUFMX1NJWkU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IHRoaXMuQ29uc3RhbnRfLkZJTkFMX1NDQUxFO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHRoaXMucmlwcGxlU2l6ZV8gKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY2VudGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gJ3RyYW5zbGF0ZSgnICsgdGhpcy5ib3VuZFdpZHRoIC8gMiArICdweCwgJyArIHRoaXMuYm91bmRIZWlnaHQgLyAyICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nID0gJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSAnICsgb2Zmc2V0ICsgc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlcyBhbiBhbmltYXRpb24gZnJhbWUuXG4gICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5hbmltRnJhbWVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lQ291bnRfLS0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltRnJhbWVIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UmlwcGxlU3R5bGVzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFJpcHBsZSxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxSaXBwbGUnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIHdpZGdldDogZmFsc2Vcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByaXBwbGUuanMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZSc7XG5pbXBvcnQgeyBIZWxsb0NvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9oZWxsbyc7XG5pbXBvcnQgeyBQcm9kdWN0c0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdHMvcHJvZHVjdHMnO1xuaW1wb3J0IHsgVGVjaG5vbG9neUNvbXBvbmVudCB9IGZyb20gJy4vdGVjaG5vbG9neS90ZWNobm9sb2d5JztcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIHJlZGlyZWN0VG86ICcvaG9tZScsXG4gICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnXG4gICAgfSxcbiAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBkYXRhOiB7IHRpdGxlOiAnSG9tZScsIG5hbWU6ICdBbmd1bGFyNCcgfSB9LFxuICAgIHsgcGF0aDogJ3Byb2R1Y3RzJywgY29tcG9uZW50OiBQcm9kdWN0c0NvbXBvbmVudCwgZGF0YTogeyB0aXRsZTogJ1Byb2R1Y3RzJyB9IH0sXG4gICAgeyBwYXRoOiAndGVjaG5vbG9neScsIGNvbXBvbmVudDogVGVjaG5vbG9neUNvbXBvbmVudCwgZGF0YTogeyB0aXRsZTogJ1RlY2hub2xvZ3knIH0gfSxcbiAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdob21lJyB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgSGVsbG9Db21wb25lbnQsXG4gICAgICAgIFByb2R1Y3RzQ29tcG9uZW50LFxuICAgICAgICBUZWNobm9sb2d5Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vQGFuZ3VsYXJjbGFzcy9obXItbG9hZGVyIS4vc3JjL21vZHVsZXMvYXBwL2FwcC5tb2R1bGUudHMiLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpzb25TZXJ2aWNlQ2xpZW50IH0gZnJvbSAnc2VydmljZXN0YWNrLWNsaWVudCc7XG5cbmRlY2xhcmUgdmFyIGdsb2JhbDsgLy9wb3B1bGF0ZWQgZnJvbSBwYWNrYWdlLmpzb24va2FybWEvZ2xvYmFsc1xuXG5leHBvcnQgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChnbG9iYWwuQmFzZVVybCB8fCAnLycpO1xuXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW21kbF0nXG59KVxuZXhwb3J0IGNsYXNzIE1ETCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRIYW5kbGVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVEb20oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vQGFuZ3VsYXJjbGFzcy9obXItbG9hZGVyIS4vc3JjL3NoYXJlZC91dGlscy50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHtWYWxpZGF0aW9uRXJyb3JzfSBmcm9tICcuL3ZhbGlkYXRvcnMnO1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBjb250cm9sIGRpcmVjdGl2ZXMuXG4gKiBcbiAqIE9ubHkgdXNlZCBpbnRlcm5hbGx5IGluIHRoZSBmb3JtcyBtb2R1bGUuXG4gKiBcbiAqIFxcQHN0YWJsZVxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUge1xuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgY29udHJvbCgpOiBBYnN0cmFjdENvbnRyb2wgeyB0aHJvdyBuZXcgRXJyb3IoJ3VuaW1wbGVtZW50ZWQnKTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC52YWx1ZSA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHZhbGlkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnZhbGlkIDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgaW52YWxpZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5pbnZhbGlkIDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcGVuZGluZygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5wZW5kaW5nIDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgZXJyb3JzKCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuZXJyb3JzIDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcHJpc3RpbmUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wucHJpc3RpbmUgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBkaXJ0eSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5kaXJ0eSA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wudG91Y2hlZCA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHVudG91Y2hlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC51bnRvdWNoZWQgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5kaXNhYmxlZCA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuZW5hYmxlZCA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHN0YXR1c0NoYW5nZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5zdGF0dXNDaGFuZ2VzIDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdmFsdWVDaGFuZ2VzKCk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzIDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcGF0aCgpOiBzdHJpbmdbXSB7IHJldHVybiBudWxsOyB9XG4vKipcbiAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZXNldCh2YWx1ZTogYW55ID0gdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbCkgdGhpcy5jb250cm9sLnJlc2V0KHZhbHVlKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGVycm9yQ29kZVxuICogQHBhcmFtIHs/PX0gcGF0aFxuICogQHJldHVybiB7P31cbiAqL1xuaGFzRXJyb3IoZXJyb3JDb2RlOiBzdHJpbmcsIHBhdGg6IHN0cmluZ1tdID0gbnVsbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuaGFzRXJyb3IoZXJyb3JDb2RlLCBwYXRoKSA6IGZhbHNlO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZXJyb3JDb2RlXG4gKiBAcGFyYW0gez89fSBwYXRoXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXRFcnJvcihlcnJvckNvZGU6IHN0cmluZywgcGF0aDogc3RyaW5nW10gPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmdldEVycm9yKGVycm9yQ29kZSwgcGF0aCkgOiBudWxsO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvYWJzdHJhY3RfY29udHJvbF9kaXJlY3RpdmUudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3RfY29udHJvbF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtGb3JtfSBmcm9tICcuL2Zvcm1faW50ZXJmYWNlJztcbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBjb250YWlucyBtdWx0aXBsZSB7XFxAbGluayBOZ0NvbnRyb2x9cy5cbiAqIFxuICogT25seSB1c2VkIGJ5IHRoZSBmb3JtcyBtb2R1bGUuXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbnRhaW5lciBleHRlbmRzIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSB7XG4gIG5hbWU6IHN0cmluZztcbi8qKlxuICogR2V0IHRoZSBmb3JtIHRvIHdoaWNoIHRoaXMgY29udGFpbmVyIGJlbG9uZ3MuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgZm9ybURpcmVjdGl2ZSgpOiBGb3JtIHsgcmV0dXJuIG51bGw7IH1cbi8qKlxuICogR2V0IHRoZSBwYXRoIHRvIHRoaXMgY29udGFpbmVyLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHBhdGgoKTogc3RyaW5nW10geyByZXR1cm4gbnVsbDsgfVxufVxuXG5mdW5jdGlvbiBDb250cm9sQ29udGFpbmVyX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5Db250cm9sQ29udGFpbmVyLnByb3RvdHlwZS5uYW1lO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvY29udHJvbF9jb250YWluZXIudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbiwgybVpc09ic2VydmFibGUgYXMgaXNPYnNlcnZhYmxlLCDJtWlzUHJvbWlzZSBhcyBpc1Byb21pc2V9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtmb3JrSm9pbn0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL2ZvcmtKb2luJztcbmltcG9ydCB7ZnJvbVByb21pc2V9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZSc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZufSBmcm9tICcuL2RpcmVjdGl2ZXMvdmFsaWRhdG9ycyc7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2x9IGZyb20gJy4vbW9kZWwnO1xuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBpc0VtcHR5SW5wdXRWYWx1ZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gIC8vIHdlIGRvbid0IGNoZWNrIGZvciBzdHJpbmcgaGVyZSBzbyBpdCBhbHNvIHdvcmtzIHdpdGggYXJyYXlzXG4gIHJldHVybiB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcbn1cbi8qKlxuICogUHJvdmlkZXJzIGZvciB2YWxpZGF0b3JzIHRvIGJlIHVzZWQgZm9yIHtcXEBsaW5rIEZvcm1Db250cm9sfXMgaW4gYSBmb3JtLlxuICogXG4gKiBQcm92aWRlIHRoaXMgdXNpbmcgYG11bHRpOiB0cnVlYCB0byBhZGQgdmFsaWRhdG9ycy5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICoge1xcQGV4YW1wbGUgY29yZS9mb3Jtcy90cy9uZ192YWxpZGF0b3JzL25nX3ZhbGlkYXRvcnMudHMgcmVnaW9uPSduZ192YWxpZGF0b3JzJ31cbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY29uc3QgTkdfVkFMSURBVE9SUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBcnJheTxWYWxpZGF0b3J8RnVuY3Rpb24+PignTmdWYWxpZGF0b3JzJyk7XG4vKipcbiAqIFByb3ZpZGVycyBmb3IgYXN5bmNocm9ub3VzIHZhbGlkYXRvcnMgdG8gYmUgdXNlZCBmb3Ige1xcQGxpbmsgRm9ybUNvbnRyb2x9c1xuICogaW4gYSBmb3JtLlxuICogXG4gKiBQcm92aWRlIHRoaXMgdXNpbmcgYG11bHRpOiB0cnVlYCB0byBhZGQgdmFsaWRhdG9ycy5cbiAqIFxuICogU2VlIHtcXEBsaW5rIE5HX1ZBTElEQVRPUlN9IGZvciBtb3JlIGRldGFpbHMuXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY29uc3QgTkdfQVNZTkNfVkFMSURBVE9SUyA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPEFycmF5PFZhbGlkYXRvcnxGdW5jdGlvbj4+KCdOZ0FzeW5jVmFsaWRhdG9ycycpO1xuXG5jb25zdCAvKiogQHR5cGUgez99ICovIEVNQUlMX1JFR0VYUCA9XG4gICAgL14oPz0uezEsMjU0fSQpKD89LnsxLDY0fUApWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKyhcXC5bLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKSpAW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPyhcXC5bQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KSokLztcbi8qKlxuICogUHJvdmlkZXMgYSBzZXQgb2YgdmFsaWRhdG9ycyB1c2VkIGJ5IGZvcm0gY29udHJvbHMuXG4gKiBcbiAqIEEgdmFsaWRhdG9yIGlzIGEgZnVuY3Rpb24gdGhhdCBwcm9jZXNzZXMgYSB7XFxAbGluayBGb3JtQ29udHJvbH0gb3IgY29sbGVjdGlvbiBvZlxuICogY29udHJvbHMgYW5kIHJldHVybnMgYSBtYXAgb2YgZXJyb3JzLiBBIG51bGwgbWFwIG1lYW5zIHRoYXQgdmFsaWRhdGlvbiBoYXMgcGFzc2VkLlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB2YXIgbG9naW5Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gKiBgYGBcbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JzIHtcbi8qKlxuICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIG5vbi1lbXB0eSB2YWx1ZS5cbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIHJlcXVpcmVkKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7XG4gICAgcmV0dXJuIGlzRW1wdHlJbnB1dFZhbHVlKGNvbnRyb2wudmFsdWUpID8geydyZXF1aXJlZCc6IHRydWV9IDogbnVsbDtcbiAgfVxuLyoqXG4gKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9sIHZhbHVlIHRvIGJlIHRydWUuXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyByZXF1aXJlZFRydWUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9yc3xudWxsIHtcbiAgICByZXR1cm4gY29udHJvbC52YWx1ZSA9PT0gdHJ1ZSA/IG51bGwgOiB7J3JlcXVpcmVkJzogdHJ1ZX07XG4gIH1cbi8qKlxuICogVmFsaWRhdG9yIHRoYXQgcGVyZm9ybXMgZW1haWwgdmFsaWRhdGlvbi5cbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIGVtYWlsKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7XG4gICAgcmV0dXJuIEVNQUlMX1JFR0VYUC50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsnZW1haWwnOiB0cnVlfTtcbiAgfVxuLyoqXG4gKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgb2YgYSBtaW5pbXVtIGxlbmd0aC5cbiAqIEBwYXJhbSB7P30gbWluTGVuZ3RoXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgbWluTGVuZ3RoKG1pbkxlbmd0aDogbnVtYmVyKTogVmFsaWRhdG9yRm4ge1xuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgICAgaWYgKGlzRW1wdHlJbnB1dFZhbHVlKGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBudWxsOyAgLy8gZG9uJ3QgdmFsaWRhdGUgZW1wdHkgdmFsdWVzIHRvIGFsbG93IG9wdGlvbmFsIGNvbnRyb2xzXG4gICAgICB9XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGxlbmd0aDogbnVtYmVyID0gY29udHJvbC52YWx1ZSA/IGNvbnRyb2wudmFsdWUubGVuZ3RoIDogMDtcbiAgICAgIHJldHVybiBsZW5ndGggPCBtaW5MZW5ndGggP1xuICAgICAgICAgIHsnbWlubGVuZ3RoJzogeydyZXF1aXJlZExlbmd0aCc6IG1pbkxlbmd0aCwgJ2FjdHVhbExlbmd0aCc6IGxlbmd0aH19IDpcbiAgICAgICAgICBudWxsO1xuICAgIH07XG4gIH1cbi8qKlxuICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIHZhbHVlIG9mIGEgbWF4aW11bSBsZW5ndGguXG4gKiBAcGFyYW0gez99IG1heExlbmd0aFxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIG1heExlbmd0aChtYXhMZW5ndGg6IG51bWJlcik6IFZhbGlkYXRvckZuIHtcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gbGVuZ3RoOiBudW1iZXIgPSBjb250cm9sLnZhbHVlID8gY29udHJvbC52YWx1ZS5sZW5ndGggOiAwO1xuICAgICAgcmV0dXJuIGxlbmd0aCA+IG1heExlbmd0aCA/XG4gICAgICAgICAgeydtYXhsZW5ndGgnOiB7J3JlcXVpcmVkTGVuZ3RoJzogbWF4TGVuZ3RoLCAnYWN0dWFsTGVuZ3RoJzogbGVuZ3RofX0gOlxuICAgICAgICAgIG51bGw7XG4gICAgfTtcbiAgfVxuLyoqXG4gKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBhIGNvbnRyb2wgdG8gbWF0Y2ggYSByZWdleCB0byBpdHMgdmFsdWUuXG4gKiBAcGFyYW0gez99IHBhdHRlcm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBwYXR0ZXJuKHBhdHRlcm46IHN0cmluZ3xSZWdFeHApOiBWYWxpZGF0b3JGbiB7XG4gICAgaWYgKCFwYXR0ZXJuKSByZXR1cm4gVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yO1xuICAgIGxldCAvKiogQHR5cGUgez99ICovIHJlZ2V4OiBSZWdFeHA7XG4gICAgbGV0IC8qKiBAdHlwZSB7P30gKi8gcmVnZXhTdHI6IHN0cmluZztcbiAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZWdleFN0ciA9IGBeJHtwYXR0ZXJufSRgO1xuICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKHJlZ2V4U3RyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVnZXhTdHIgPSBwYXR0ZXJuLnRvU3RyaW5nKCk7XG4gICAgICByZWdleCA9IHBhdHRlcm47XG4gICAgfVxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgICAgaWYgKGlzRW1wdHlJbnB1dFZhbHVlKGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBudWxsOyAgLy8gZG9uJ3QgdmFsaWRhdGUgZW1wdHkgdmFsdWVzIHRvIGFsbG93IG9wdGlvbmFsIGNvbnRyb2xzXG4gICAgICB9XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIHZhbHVlOiBzdHJpbmcgPSBjb250cm9sLnZhbHVlO1xuICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QodmFsdWUpID8gbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J3BhdHRlcm4nOiB7J3JlcXVpcmVkUGF0dGVybic6IHJlZ2V4U3RyLCAnYWN0dWFsVmFsdWUnOiB2YWx1ZX19O1xuICAgIH07XG4gIH1cbi8qKlxuICogTm8tb3AgdmFsaWRhdG9yLlxuICogQHBhcmFtIHs/fSBjXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgbnVsbFZhbGlkYXRvcihjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwgeyByZXR1cm4gbnVsbDsgfVxuLyoqXG4gKiBDb21wb3NlIG11bHRpcGxlIHZhbGlkYXRvcnMgaW50byBhIHNpbmdsZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHVuaW9uXG4gKiBvZiB0aGUgaW5kaXZpZHVhbCBlcnJvciBtYXBzLlxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgY29tcG9zZSh2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdKTogVmFsaWRhdG9yRm4ge1xuICAgIGlmICghdmFsaWRhdG9ycykgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBwcmVzZW50VmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMuZmlsdGVyKGlzUHJlc2VudCk7XG4gICAgaWYgKHByZXNlbnRWYWxpZGF0b3JzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiBmdW5jdGlvbihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICAgIHJldHVybiBfbWVyZ2VFcnJvcnMoX2V4ZWN1dGVWYWxpZGF0b3JzKGNvbnRyb2wsIHByZXNlbnRWYWxpZGF0b3JzKSk7XG4gICAgfTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBjb21wb3NlQXN5bmModmFsaWRhdG9yczogQXN5bmNWYWxpZGF0b3JGbltdKTogQXN5bmNWYWxpZGF0b3JGbiB7XG4gICAgaWYgKCF2YWxpZGF0b3JzKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIHByZXNlbnRWYWxpZGF0b3JzID0gdmFsaWRhdG9ycy5maWx0ZXIoaXNQcmVzZW50KTtcbiAgICBpZiAocHJlc2VudFZhbGlkYXRvcnMubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBvYnNlcnZhYmxlcyA9IF9leGVjdXRlQXN5bmNWYWxpZGF0b3JzKGNvbnRyb2wsIHByZXNlbnRWYWxpZGF0b3JzKS5tYXAodG9PYnNlcnZhYmxlKTtcbiAgICAgIHJldHVybiBtYXAuY2FsbChmb3JrSm9pbihvYnNlcnZhYmxlcyksIF9tZXJnZUVycm9ycyk7XG4gICAgfTtcbiAgfVxufVxuLyoqXG4gKiBAcGFyYW0gez99IG9cbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIGlzUHJlc2VudChvOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIG8gIT0gbnVsbDtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSByXG4gKiBAcmV0dXJuIHs/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9PYnNlcnZhYmxlKHI6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gb2JzID0gaXNQcm9taXNlKHIpID8gZnJvbVByb21pc2UocikgOiByO1xuICBpZiAoIShpc09ic2VydmFibGUob2JzKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIHZhbGlkYXRvciB0byByZXR1cm4gUHJvbWlzZSBvciBPYnNlcnZhYmxlLmApO1xuICB9XG4gIHJldHVybiBvYnM7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfZXhlY3V0ZVZhbGlkYXRvcnMoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdKTogYW55W10ge1xuICByZXR1cm4gdmFsaWRhdG9ycy5tYXAodiA9PiB2KGNvbnRyb2wpKTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9leGVjdXRlQXN5bmNWYWxpZGF0b3JzKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgdmFsaWRhdG9yczogQXN5bmNWYWxpZGF0b3JGbltdKTogYW55W10ge1xuICByZXR1cm4gdmFsaWRhdG9ycy5tYXAodiA9PiB2KGNvbnRyb2wpKTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBhcnJheU9mRXJyb3JzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfbWVyZ2VFcnJvcnMoYXJyYXlPZkVycm9yczogVmFsaWRhdGlvbkVycm9yc1tdKTogVmFsaWRhdGlvbkVycm9yc3xudWxsIHtcbiAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyByZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID1cbiAgICAgIGFycmF5T2ZFcnJvcnMucmVkdWNlKChyZXM6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsLCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsKSA9PiB7XG4gICAgICAgIHJldHVybiBlcnJvcnMgIT0gbnVsbCA/IHsuLi5yZXMsIC4uLmVycm9yc30gOiByZXM7XG4gICAgICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhyZXMpLmxlbmd0aCA9PT0gMCA/IG51bGwgOiByZXM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL3ZhbGlkYXRvcnMudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSBicmlkZ2UgYmV0d2VlbiBhIGNvbnRyb2wgYW5kIGEgbmF0aXZlIGVsZW1lbnQuXG4gKlxuICogQSBgQ29udHJvbFZhbHVlQWNjZXNzb3JgIGFic3RyYWN0cyB0aGUgb3BlcmF0aW9ucyBvZiB3cml0aW5nIGEgbmV3IHZhbHVlIHRvIGFcbiAqIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyBhbiBpbnB1dCBjb250cm9sLlxuICpcbiAqIFBsZWFzZSBzZWUge0BsaW5rIERlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAc3RhYmxlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvKipcbiAgICogV3JpdGUgYSBuZXcgdmFsdWUgdG8gdGhlIGVsZW1lbnQuXG4gICAqL1xuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZDtcblxuICAvKipcbiAgICogU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIGNoYW5nZSBldmVudC5cbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgcmVjZWl2ZXMgYSB0b3VjaCBldmVudC5cbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHN0YXR1cyBjaGFuZ2VzIHRvIG9yIGZyb20gXCJESVNBQkxFRFwiLlxuICAgKiBEZXBlbmRpbmcgb24gdGhlIHZhbHVlLCBpdCB3aWxsIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBhcHByb3ByaWF0ZSBET00gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIGlzRGlzYWJsZWRcbiAgICovXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xufVxuLyoqXG4gKiBVc2VkIHRvIHByb3ZpZGUgYSB7XFxAbGluayBDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZm9yIGZvcm0gY29udHJvbHMuXG4gKiBcbiAqIFNlZSB7XFxAbGluayBEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZm9yIGhvdyB0byBpbXBsZW1lbnQgb25lLlxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjb25zdCBOR19WQUxVRV9BQ0NFU1NPUiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb250cm9sVmFsdWVBY2Nlc3Nvcj4oJ05nVmFsdWVBY2Nlc3NvcicpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3IudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJy4vY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIENIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yKSxcbiAgbXVsdGk6IHRydWUsXG59O1xuLyoqXG4gKiBUaGUgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSB2YWx1ZSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgb24gYSBjaGVja2JveCBpbnB1dCBlbGVtZW50LlxuICogXG4gKiAgIyMjIEV4YW1wbGVcbiAqICBgYGBcbiAqICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlbWVtYmVyTG9naW5cIiBuZ01vZGVsPlxuICogIGBgYFxuICogXG4gKiAgXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcbi8qKlxuICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAqL1xuY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyLFxucHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xud3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NoZWNrZWQnLCB2YWx1ZSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4ge30pOiB2b2lkIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICogQHJldHVybiB7P31cbiAqL1xuc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6XG4gICAgICAnaW5wdXRbdHlwZT1jaGVja2JveF1bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPWNoZWNrYm94XVtmb3JtQ29udHJvbF0saW5wdXRbdHlwZT1jaGVja2JveF1bbmdNb2RlbF0nLFxuICBob3N0OiB7JyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQuY2hlY2tlZCknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJ30sXG4gIHByb3ZpZGVyczogW0NIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SXVxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBSZW5kZXJlciwgfSxcbnt0eXBlOiBFbGVtZW50UmVmLCB9LFxuXTtcbn1cblxuZnVuY3Rpb24gQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvcl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbkNoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5DaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5vbkNoYW5nZTtcbi8qKiBAdHlwZSB7P30gKi9cbkNoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm9uVG91Y2hlZDtcbi8qKiBAdHlwZSB7P30gKi9cbkNoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9yZW5kZXJlcjtcbi8qKiBAdHlwZSB7P30gKi9cbkNoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9lbGVtZW50UmVmO1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9jaGVja2JveF92YWx1ZV9hY2Nlc3Nvci50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFJlbmRlcmVyLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ybVnZXRET00gYXMgZ2V0RE9NfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICcuL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBERUZBVUxUX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEZWZhdWx0VmFsdWVBY2Nlc3NvciksXG4gIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBXZSBtdXN0IGNoZWNrIHdoZXRoZXIgdGhlIGFnZW50IGlzIEFuZHJvaWQgYmVjYXVzZSBjb21wb3NpdGlvbiBldmVudHNcbiAqIGJlaGF2ZSBkaWZmZXJlbnRseSBiZXR3ZWVuIGlPUyBhbmQgQW5kcm9pZC5cbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9pc0FuZHJvaWQoKTogYm9vbGVhbiB7XG4gIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gdXNlckFnZW50ID0gZ2V0RE9NKCkgPyBnZXRET00oKS5nZXRVc2VyQWdlbnQoKSA6ICcnO1xuICByZXR1cm4gL2FuZHJvaWQgKFxcZCspLy50ZXN0KHVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcbn1cbi8qKlxuICogVHVybiB0aGlzIG1vZGUgb24gaWYgeW91IHdhbnQgZm9ybSBkaXJlY3RpdmVzIHRvIGJ1ZmZlciBJTUUgaW5wdXQgdW50aWwgY29tcG9zaXRpb25lbmRcbiAqIFxcQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgY29uc3QgQ09NUE9TSVRJT05fQlVGRkVSX01PREUgPSBuZXcgSW5qZWN0aW9uVG9rZW48Ym9vbGVhbj4oJ0NvbXBvc2l0aW9uRXZlbnRNb2RlJyk7XG4vKipcbiAqIFRoZSBkZWZhdWx0IGFjY2Vzc29yIGZvciB3cml0aW5nIGEgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIHRoYXQgaXMgdXNlZCBieSB0aGVcbiAqIHtcXEBsaW5rIE5nTW9kZWx9LCB7XFxAbGluayBGb3JtQ29udHJvbERpcmVjdGl2ZX0sIGFuZCB7XFxAbGluayBGb3JtQ29udHJvbE5hbWV9IGRpcmVjdGl2ZXMuXG4gKiBcbiAqICAjIyMgRXhhbXBsZVxuICogIGBgYFxuICogIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hRdWVyeVwiIG5nTW9kZWw+XG4gKiAgYGBgXG4gKiBcbiAqICBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIERlZmF1bHRWYWx1ZUFjY2Vzc29yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcbnByaXZhdGUgX2NvbXBvc2luZyA9IGZhbHNlO1xuLyoqXG4gKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICogQHBhcmFtIHs/fSBfY29tcG9zaXRpb25Nb2RlXG4gKi9cbmNvbnN0cnVjdG9yKFxucHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyLFxucHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbnByaXZhdGUgX2NvbXBvc2l0aW9uTW9kZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9jb21wb3NpdGlvbk1vZGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5fY29tcG9zaXRpb25Nb2RlID0gIV9pc0FuZHJvaWQoKTtcbiAgICB9XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xud3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBub3JtYWxpemVkVmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBub3JtYWxpemVkVmFsdWUpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cbi8qKlxuICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5faGFuZGxlSW5wdXQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fY29tcG9zaXRpb25Nb2RlIHx8ICh0aGlzLl9jb21wb3NpdGlvbk1vZGUgJiYgIXRoaXMuX2NvbXBvc2luZykpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fY29tcG9zaXRpb25TdGFydCgpOiB2b2lkIHsgdGhpcy5fY29tcG9zaW5nID0gdHJ1ZTsgfVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fY29tcG9zaXRpb25FbmQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX2NvbXBvc2luZyA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbXBvc2l0aW9uTW9kZSAmJiB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjpcbiAgICAgICdpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKVtmb3JtQ29udHJvbE5hbWVdLHRleHRhcmVhW2Zvcm1Db250cm9sTmFtZV0saW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSlbZm9ybUNvbnRyb2xdLHRleHRhcmVhW2Zvcm1Db250cm9sXSxpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKVtuZ01vZGVsXSx0ZXh0YXJlYVtuZ01vZGVsXSxbbmdEZWZhdWx0Q29udHJvbF0nLFxuICAvLyBUT0RPOiB2c2F2a2luIHJlcGxhY2UgdGhlIGFib3ZlIHNlbGVjdG9yIHdpdGggdGhlIG9uZSBiZWxvdyBpdCBvbmNlXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzMwMTEgaXMgaW1wbGVtZW50ZWRcbiAgLy8gc2VsZWN0b3I6ICdbbmdNb2RlbF0sW2Zvcm1Db250cm9sXSxbZm9ybUNvbnRyb2xOYW1lXScsXG4gIGhvc3Q6IHtcbiAgICAnKGlucHV0KSc6ICdfaGFuZGxlSW5wdXQoJGV2ZW50LnRhcmdldC52YWx1ZSknLFxuICAgICcoYmx1ciknOiAnb25Ub3VjaGVkKCknLFxuICAgICcoY29tcG9zaXRpb25zdGFydCknOiAnX2NvbXBvc2l0aW9uU3RhcnQoKScsXG4gICAgJyhjb21wb3NpdGlvbmVuZCknOiAnX2NvbXBvc2l0aW9uRW5kKCRldmVudC50YXJnZXQudmFsdWUpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtERUZBVUxUX1ZBTFVFX0FDQ0VTU09SXVxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBSZW5kZXJlciwgfSxcbnt0eXBlOiBFbGVtZW50UmVmLCB9LFxue3R5cGU6IHVuZGVmaW5lZCwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtDT01QT1NJVElPTl9CVUZGRVJfTU9ERSwgXSB9LCBdfSxcbl07XG59XG5cbmZ1bmN0aW9uIERlZmF1bHRWYWx1ZUFjY2Vzc29yX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5EZWZhdWx0VmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbkRlZmF1bHRWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm9uQ2hhbmdlO1xuLyoqIEB0eXBlIHs/fSAqL1xuRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm9uVG91Y2hlZDtcbi8qKlxuICogV2hldGhlciB0aGUgdXNlciBpcyBjcmVhdGluZyBhIGNvbXBvc2l0aW9uIHN0cmluZyAoSU1FIGV2ZW50cykuXG4gKiBAdHlwZSB7P31cbiAqL1xuRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9jb21wb3Npbmc7XG4vKiogQHR5cGUgez99ICovXG5EZWZhdWx0VmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX3JlbmRlcmVyO1xuLyoqIEB0eXBlIHs/fSAqL1xuRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9lbGVtZW50UmVmO1xuLyoqIEB0eXBlIHs/fSAqL1xuRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9jb21wb3NpdGlvbk1vZGU7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL2RlZmF1bHRfdmFsdWVfYWNjZXNzb3IudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2x9IGZyb20gJy4uL21vZGVsJztcbmltcG9ydCB7QXN5bmNWYWxpZGF0b3IsIEFzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRvciwgVmFsaWRhdG9yRm59IGZyb20gJy4vdmFsaWRhdG9ycyc7XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yXG4gKiBAcmV0dXJuIHs/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVmFsaWRhdG9yKHZhbGlkYXRvcjogVmFsaWRhdG9yRm4gfCBWYWxpZGF0b3IpOiBWYWxpZGF0b3JGbiB7XG4gIGlmICgoIC8qKiBAdHlwZSB7P30gKi8oKDxWYWxpZGF0b3I+dmFsaWRhdG9yKSkpLnZhbGlkYXRlKSB7XG4gICAgcmV0dXJuIChjOiBBYnN0cmFjdENvbnRyb2wpID0+ICggLyoqIEB0eXBlIHs/fSAqLygoPFZhbGlkYXRvcj52YWxpZGF0b3IpKSkudmFsaWRhdGUoYyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7P30gKi8oKCA8VmFsaWRhdG9yRm4+dmFsaWRhdG9yKSk7XG4gIH1cbn1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JcbiAqIEByZXR1cm4gez99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBc3luY1ZhbGlkYXRvcih2YWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yRm4gfCBBc3luY1ZhbGlkYXRvcik6XG4gICAgQXN5bmNWYWxpZGF0b3JGbiB7XG4gIGlmICgoIC8qKiBAdHlwZSB7P30gKi8oKDxBc3luY1ZhbGlkYXRvcj52YWxpZGF0b3IpKSkudmFsaWRhdGUpIHtcbiAgICByZXR1cm4gKGM6IEFic3RyYWN0Q29udHJvbCkgPT4gKCAvKiogQHR5cGUgez99ICovKCg8QXN5bmNWYWxpZGF0b3I+dmFsaWRhdG9yKSkpLnZhbGlkYXRlKGMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiogQHR5cGUgez99ICovKCggPEFzeW5jVmFsaWRhdG9yRm4+dmFsaWRhdG9yKSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9ub3JtYWxpemVfdmFsaWRhdG9yLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlciwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICcuL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBOVU1CRVJfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE51bWJlclZhbHVlQWNjZXNzb3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogVGhlIGFjY2Vzc29yIGZvciB3cml0aW5nIGEgbnVtYmVyIHZhbHVlIGFuZCBsaXN0ZW5pbmcgdG8gY2hhbmdlcyB0aGF0IGlzIHVzZWQgYnkgdGhlXG4gKiB7XFxAbGluayBOZ01vZGVsfSwge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfSBkaXJlY3RpdmVzLlxuICogXG4gKiAgIyMjIEV4YW1wbGVcbiAqICBgYGBcbiAqICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwiYWdlXCI+XG4gKiAgYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBOdW1iZXJWYWx1ZUFjY2Vzc29yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcbi8qKlxuICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAqL1xuY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyLFxucHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xud3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gVGhlIHZhbHVlIG5lZWRzIHRvIGJlIG5vcm1hbGl6ZWQgZm9yIElFOSwgb3RoZXJ3aXNlIGl0IGlzIHNldCB0byAnbnVsbCcgd2hlbiBudWxsXG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBub3JtYWxpemVkVmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBub3JtYWxpemVkVmFsdWUpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gKHZhbHVlKSA9PiB7IGZuKHZhbHVlID09ICcnID8gbnVsbCA6IHBhcnNlRmxvYXQodmFsdWUpKTsgfTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICogQHJldHVybiB7P31cbiAqL1xuc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6XG4gICAgICAnaW5wdXRbdHlwZT1udW1iZXJdW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbdHlwZT1udW1iZXJdW2Zvcm1Db250cm9sXSxpbnB1dFt0eXBlPW51bWJlcl1bbmdNb2RlbF0nLFxuICBob3N0OiB7XG4gICAgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJyxcbiAgICAnKGlucHV0KSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXG4gICAgJyhibHVyKSc6ICdvblRvdWNoZWQoKSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbTlVNQkVSX1ZBTFVFX0FDQ0VTU09SXVxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBSZW5kZXJlciwgfSxcbnt0eXBlOiBFbGVtZW50UmVmLCB9LFxuXTtcbn1cblxuZnVuY3Rpb24gTnVtYmVyVmFsdWVBY2Nlc3Nvcl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuTnVtYmVyVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbk51bWJlclZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5OdW1iZXJWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5vbkNoYW5nZTtcbi8qKiBAdHlwZSB7P30gKi9cbk51bWJlclZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm9uVG91Y2hlZDtcbi8qKiBAdHlwZSB7P30gKi9cbk51bWJlclZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9yZW5kZXJlcjtcbi8qKiBAdHlwZSB7P30gKi9cbk51bWJlclZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9lbGVtZW50UmVmO1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9udW1iZXJfdmFsdWVfYWNjZXNzb3IudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuXG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbERpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdF9jb250cm9sX2RpcmVjdGl2ZSc7XG5pbXBvcnQge0NvbnRyb2xDb250YWluZXJ9IGZyb20gJy4vY29udHJvbF9jb250YWluZXInO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7QXN5bmNWYWxpZGF0b3IsIEFzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRvciwgVmFsaWRhdG9yRm59IGZyb20gJy4vdmFsaWRhdG9ycyc7XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIHVuaW1wbGVtZW50ZWQoKTogYW55IHtcbiAgdGhyb3cgbmV3IEVycm9yKCd1bmltcGxlbWVudGVkJyk7XG59XG4vKipcbiAqIEEgYmFzZSBjbGFzcyB0aGF0IGFsbCBjb250cm9sIGRpcmVjdGl2ZSBleHRlbmQuXG4gKiBJdCBiaW5kcyBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSBvYmplY3QgdG8gYSBET00gZWxlbWVudC5cbiAqIFxuICogVXNlZCBpbnRlcm5hbGx5IGJ5IEFuZ3VsYXIgZm9ybXMuXG4gKiBcbiAqIFxcQHN0YWJsZVxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ0NvbnRyb2wgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUge1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fcGFyZW50OiBDb250cm9sQ29udGFpbmVyID0gbnVsbDtcbiAgbmFtZTogc3RyaW5nID0gbnVsbDtcbiAgdmFsdWVBY2Nlc3NvcjogQ29udHJvbFZhbHVlQWNjZXNzb3IgPSBudWxsO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fcmF3VmFsaWRhdG9yczogQXJyYXk8VmFsaWRhdG9yfFZhbGlkYXRvckZuPiA9IFtdO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fcmF3QXN5bmNWYWxpZGF0b3JzOiBBcnJheTxBc3luY1ZhbGlkYXRvcnxBc3luY1ZhbGlkYXRvckZuPiA9IFtdO1xuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHsgcmV0dXJuIC8qKiBAdHlwZSB7P30gKi8oKCA8VmFsaWRhdG9yRm4+dW5pbXBsZW1lbnRlZCgpKSk7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGFzeW5jVmFsaWRhdG9yKCk6IEFzeW5jVmFsaWRhdG9yRm4geyByZXR1cm4gLyoqIEB0eXBlIHs/fSAqLygoIDxBc3luY1ZhbGlkYXRvckZuPnVuaW1wbGVtZW50ZWQoKSkpOyB9XG4vKipcbiAqIEBhYnN0cmFjdFxuICogQHBhcmFtIHs/fSBuZXdWYWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xudmlld1RvTW9kZWxVcGRhdGUobmV3VmFsdWU6IGFueSkge31cbn1cblxuZnVuY3Rpb24gTmdDb250cm9sX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuTmdDb250cm9sLnByb3RvdHlwZS5fcGFyZW50O1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdDb250cm9sLnByb3RvdHlwZS5uYW1lO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdDb250cm9sLnByb3RvdHlwZS52YWx1ZUFjY2Vzc29yO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbk5nQ29udHJvbC5wcm90b3R5cGUuX3Jhd1ZhbGlkYXRvcnM7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuTmdDb250cm9sLnByb3RvdHlwZS5fcmF3QXN5bmNWYWxpZGF0b3JzO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbmdfY29udHJvbC50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnLi9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7TmdDb250cm9sfSBmcm9tICcuL25nX2NvbnRyb2wnO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBSQURJT19WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvciksXG4gIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBJbnRlcm5hbCBjbGFzcyB1c2VkIGJ5IEFuZ3VsYXIgdG8gdW5jaGVjayByYWRpbyBidXR0b25zIHdpdGggdGhlIG1hdGNoaW5nIG5hbWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBSYWRpb0NvbnRyb2xSZWdpc3RyeSB7XG5wcml2YXRlIF9hY2Nlc3NvcnM6IGFueVtdID0gW107XG4vKipcbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHBhcmFtIHs/fSBhY2Nlc3NvclxuICogQHJldHVybiB7P31cbiAqL1xuYWRkKGNvbnRyb2w6IE5nQ29udHJvbCwgYWNjZXNzb3I6IFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IpIHtcbiAgICB0aGlzLl9hY2Nlc3NvcnMucHVzaChbY29udHJvbCwgYWNjZXNzb3JdKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGFjY2Vzc29yXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZW1vdmUoYWNjZXNzb3I6IFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IpIHtcbiAgICBmb3IgKGxldCAvKiogQHR5cGUgez99ICovIGkgPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIGlmICh0aGlzLl9hY2Nlc3NvcnNbaV1bMV0gPT09IGFjY2Vzc29yKSB7XG4gICAgICAgIHRoaXMuX2FjY2Vzc29ycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBhY2Nlc3NvclxuICogQHJldHVybiB7P31cbiAqL1xuc2VsZWN0KGFjY2Vzc29yOiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yKSB7XG4gICAgdGhpcy5fYWNjZXNzb3JzLmZvckVhY2goKGMpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc1NhbWVHcm91cChjLCBhY2Nlc3NvcikgJiYgY1sxXSAhPT0gYWNjZXNzb3IpIHtcbiAgICAgICAgY1sxXS5maXJlVW5jaGVjayhhY2Nlc3Nvci52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBjb250cm9sUGFpclxuICogQHBhcmFtIHs/fSBhY2Nlc3NvclxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfaXNTYW1lR3JvdXAoXG4gICAgICBjb250cm9sUGFpcjogW05nQ29udHJvbCwgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcl0sXG4gICAgICBhY2Nlc3NvcjogUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcik6IGJvb2xlYW4ge1xuICAgIGlmICghY29udHJvbFBhaXJbMF0uY29udHJvbCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBjb250cm9sUGFpclswXS5fcGFyZW50ID09PSBhY2Nlc3Nvci5fY29udHJvbC5fcGFyZW50ICYmXG4gICAgICAgIGNvbnRyb2xQYWlyWzFdLm5hbWUgPT09IGFjY2Vzc29yLm5hbWU7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5mdW5jdGlvbiBSYWRpb0NvbnRyb2xSZWdpc3RyeV90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFkaW9Db250cm9sUmVnaXN0cnkuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5SYWRpb0NvbnRyb2xSZWdpc3RyeS5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cblJhZGlvQ29udHJvbFJlZ2lzdHJ5LnByb3RvdHlwZS5fYWNjZXNzb3JzO1xufVxuXG4vKipcbiAqIFxcQHdoYXRJdERvZXMgV3JpdGVzIHJhZGlvIGNvbnRyb2wgdmFsdWVzIGFuZCBsaXN0ZW5zIHRvIHJhZGlvIGNvbnRyb2wgY2hhbmdlcy5cbiAqIFxuICogVXNlZCBieSB7XFxAbGluayBOZ01vZGVsfSwge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfVxuICogdG8ga2VlcCB0aGUgdmlldyBzeW5jZWQgd2l0aCB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9IG1vZGVsLlxuICogXG4gKiBcXEBob3dUb1VzZSBcbiAqIFxuICogSWYgeW91IGhhdmUgaW1wb3J0ZWQgdGhlIHtcXEBsaW5rIEZvcm1zTW9kdWxlfSBvciB0aGUge1xcQGxpbmsgUmVhY3RpdmVGb3Jtc01vZHVsZX0sIHRoaXNcbiAqIHZhbHVlIGFjY2Vzc29yIHdpbGwgYmUgYWN0aXZlIG9uIGFueSByYWRpbyBjb250cm9sIHRoYXQgaGFzIGEgZm9ybSBkaXJlY3RpdmUuIFlvdSBkb1xuICogKipub3QqKiBuZWVkIHRvIGFkZCBhIHNwZWNpYWwgc2VsZWN0b3IgdG8gYWN0aXZhdGUgaXQuXG4gKiBcbiAqICMjIyBIb3cgdG8gdXNlIHJhZGlvIGJ1dHRvbnMgd2l0aCBmb3JtIGRpcmVjdGl2ZXNcbiAqIFxuICogVG8gdXNlIHJhZGlvIGJ1dHRvbnMgaW4gYSB0ZW1wbGF0ZS1kcml2ZW4gZm9ybSwgeW91J2xsIHdhbnQgdG8gZW5zdXJlIHRoYXQgcmFkaW8gYnV0dG9uc1xuICogaW4gdGhlIHNhbWUgZ3JvdXAgaGF2ZSB0aGUgc2FtZSBgbmFtZWAgYXR0cmlidXRlLiAgUmFkaW8gYnV0dG9ucyB3aXRoIGRpZmZlcmVudCBgbmFtZWBcbiAqIGF0dHJpYnV0ZXMgZG8gbm90IGFmZmVjdCBlYWNoIG90aGVyLlxuICogXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9yYWRpb0J1dHRvbnMvcmFkaW9fYnV0dG9uX2V4YW1wbGUudHMgcmVnaW9uPSdUZW1wbGF0ZURyaXZlbid9XG4gKiBcbiAqIFdoZW4gdXNpbmcgcmFkaW8gYnV0dG9ucyBpbiBhIHJlYWN0aXZlIGZvcm0sIHJhZGlvIGJ1dHRvbnMgaW4gdGhlIHNhbWUgZ3JvdXAgc2hvdWxkIGhhdmUgdGhlXG4gKiBzYW1lIGBmb3JtQ29udHJvbE5hbWVgLiBZb3UgY2FuIGFsc28gYWRkIGEgYG5hbWVgIGF0dHJpYnV0ZSwgYnV0IGl0J3Mgb3B0aW9uYWwuXG4gKiBcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3JlYWN0aXZlUmFkaW9CdXR0b25zL3JlYWN0aXZlX3JhZGlvX2J1dHRvbl9leGFtcGxlLnRzIHJlZ2lvbj0nUmVhY3RpdmUnfVxuICogXG4gKiAgKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICogXG4gKiAgXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgT25EZXN0cm95LCBPbkluaXQge1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fc3RhdGU6IGJvb2xlYW47XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9jb250cm9sOiBOZ0NvbnRyb2w7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9mbjogRnVuY3Rpb247XG4gIG9uQ2hhbmdlID0gKCkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gICBuYW1lOiBzdHJpbmc7XG4gICBmb3JtQ29udHJvbE5hbWU6IHN0cmluZztcbiAgIHZhbHVlOiBhbnk7XG4vKipcbiAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gKiBAcGFyYW0gez99IF9lbGVtZW50UmVmXG4gKiBAcGFyYW0gez99IF9yZWdpc3RyeVxuICogQHBhcmFtIHs/fSBfaW5qZWN0b3JcbiAqL1xuY29uc3RydWN0b3IoXG5wcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIsXG5wcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxucHJpdmF0ZSBfcmVnaXN0cnk6IFJhZGlvQ29udHJvbFJlZ2lzdHJ5LFxucHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250cm9sID0gdGhpcy5faW5qZWN0b3IuZ2V0KE5nQ29udHJvbCk7XG4gICAgdGhpcy5fY2hlY2tOYW1lKCk7XG4gICAgdGhpcy5fcmVnaXN0cnkuYWRkKHRoaXMuX2NvbnRyb2wsIHRoaXMpO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25EZXN0cm95KCk6IHZvaWQgeyB0aGlzLl9yZWdpc3RyeS5yZW1vdmUodGhpcyk7IH1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xud3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fc3RhdGUgPSB2YWx1ZSA9PT0gdGhpcy52YWx1ZTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2hlY2tlZCcsIHRoaXMuX3N0YXRlKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5vbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGZuKHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5fcmVnaXN0cnkuc2VsZWN0KHRoaXMpO1xuICAgIH07XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuZmlyZVVuY2hlY2sodmFsdWU6IGFueSk6IHZvaWQgeyB0aGlzLndyaXRlVmFsdWUodmFsdWUpOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICogQHJldHVybiB7P31cbiAqL1xuc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfY2hlY2tOYW1lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5hbWUgJiYgdGhpcy5mb3JtQ29udHJvbE5hbWUgJiYgdGhpcy5uYW1lICE9PSB0aGlzLmZvcm1Db250cm9sTmFtZSkge1xuICAgICAgdGhpcy5fdGhyb3dOYW1lRXJyb3IoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm5hbWUgJiYgdGhpcy5mb3JtQ29udHJvbE5hbWUpIHRoaXMubmFtZSA9IHRoaXMuZm9ybUNvbnRyb2xOYW1lO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX3Rocm93TmFtZUVycm9yKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAgICBJZiB5b3UgZGVmaW5lIGJvdGggYSBuYW1lIGFuZCBhIGZvcm1Db250cm9sTmFtZSBhdHRyaWJ1dGUgb24geW91ciByYWRpbyBidXR0b24sIHRoZWlyIHZhbHVlc1xuICAgICAgbXVzdCBtYXRjaC4gRXg6IDxpbnB1dCB0eXBlPVwicmFkaW9cIiBmb3JtQ29udHJvbE5hbWU9XCJmb29kXCIgbmFtZT1cImZvb2RcIj5cbiAgICBgKTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjpcbiAgICAgICdpbnB1dFt0eXBlPXJhZGlvXVtmb3JtQ29udHJvbE5hbWVdLGlucHV0W3R5cGU9cmFkaW9dW2Zvcm1Db250cm9sXSxpbnB1dFt0eXBlPXJhZGlvXVtuZ01vZGVsXScsXG4gIGhvc3Q6IHsnKGNoYW5nZSknOiAnb25DaGFuZ2UoKScsICcoYmx1ciknOiAnb25Ub3VjaGVkKCknfSxcbiAgcHJvdmlkZXJzOiBbUkFESU9fVkFMVUVfQUNDRVNTT1JdXG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IFJlbmRlcmVyLCB9LFxue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG57dHlwZTogUmFkaW9Db250cm9sUmVnaXN0cnksIH0sXG57dHlwZTogSW5qZWN0b3IsIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbiduYW1lJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2Zvcm1Db250cm9sTmFtZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbid2YWx1ZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3JfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cblJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm9wRGVjb3JhdG9ycztcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fc3RhdGU7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2NvbnRyb2w7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2ZuO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUub25DaGFuZ2U7XG4vKiogQHR5cGUgez99ICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5vblRvdWNoZWQ7XG4vKiogQHR5cGUgez99ICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5uYW1lO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuZm9ybUNvbnRyb2xOYW1lO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUudmFsdWU7XG4vKiogQHR5cGUgez99ICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fcmVuZGVyZXI7XG4vKiogQHR5cGUgez99ICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fZWxlbWVudFJlZjtcbi8qKiBAdHlwZSB7P30gKi9cblJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9yZWdpc3RyeTtcbi8qKiBAdHlwZSB7P30gKi9cblJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9pbmplY3Rvcjtcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmFkaW9fY29udHJvbF92YWx1ZV9hY2Nlc3Nvci50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUHJvdmlkZXIsIFJlbmRlcmVyLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJy4vY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIFJBTkdFX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhbmdlVmFsdWVBY2Nlc3NvciksXG4gIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBUaGUgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSByYW5nZSB2YWx1ZSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgdGhhdCBpcyB1c2VkIGJ5IHRoZVxuICoge1xcQGxpbmsgTmdNb2RlbH0sIHtcXEBsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfSwgYW5kIHtcXEBsaW5rIEZvcm1Db250cm9sTmFtZX0gZGlyZWN0aXZlcy5cbiAqIFxuICogICMjIyBFeGFtcGxlXG4gKiAgYGBgXG4gKiAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIFsobmdNb2RlbCldPVwiYWdlXCIgPlxuICogIGBgYFxuICovXG5leHBvcnQgY2xhc3MgUmFuZ2VWYWx1ZUFjY2Vzc29yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcbi8qKlxuICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAqL1xuY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyLFxucHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xud3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgcGFyc2VGbG9hdCh2YWx1ZSkpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gKHZhbHVlKSA9PiB7IGZuKHZhbHVlID09ICcnID8gbnVsbCA6IHBhcnNlRmxvYXQodmFsdWUpKTsgfTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICogQHJldHVybiB7P31cbiAqL1xuc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6XG4gICAgICAnaW5wdXRbdHlwZT1yYW5nZV1bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPXJhbmdlXVtmb3JtQ29udHJvbF0saW5wdXRbdHlwZT1yYW5nZV1bbmdNb2RlbF0nLFxuICBob3N0OiB7XG4gICAgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJyxcbiAgICAnKGlucHV0KSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXG4gICAgJyhibHVyKSc6ICdvblRvdWNoZWQoKSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbUkFOR0VfVkFMVUVfQUNDRVNTT1JdXG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IFJlbmRlcmVyLCB9LFxue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG5dO1xufVxuXG5mdW5jdGlvbiBSYW5nZVZhbHVlQWNjZXNzb3JfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cblJhbmdlVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cblJhbmdlVmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cblJhbmdlVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUub25DaGFuZ2U7XG4vKiogQHR5cGUgez99ICovXG5SYW5nZVZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm9uVG91Y2hlZDtcbi8qKiBAdHlwZSB7P30gKi9cblJhbmdlVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX3JlbmRlcmVyO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFuZ2VWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fZWxlbWVudFJlZjtcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmFuZ2VfdmFsdWVfYWNjZXNzb3IudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3QsIElucHV0LCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBQcm92aWRlciwgUmVuZGVyZXIsIGZvcndhcmRSZWYsIMm1bG9vc2VJZGVudGljYWwgYXMgbG9vc2VJZGVudGljYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJy4vY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIFNFTEVDVF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvciksXG4gIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBAcGFyYW0gez99IGlkXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfYnVpbGRWYWx1ZVN0cmluZyhpZDogc3RyaW5nLCB2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgaWYgKGlkID09IG51bGwpIHJldHVybiBgJHt2YWx1ZX1gO1xuICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgdmFsdWUgPSAnT2JqZWN0JztcbiAgcmV0dXJuIGAke2lkfTogJHt2YWx1ZX1gLnNsaWNlKDAsIDUwKTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVN0cmluZ1xuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX2V4dHJhY3RJZCh2YWx1ZVN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlU3RyaW5nLnNwbGl0KCc6JylbMF07XG59XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgV3JpdGVzIHZhbHVlcyBhbmQgbGlzdGVucyB0byBjaGFuZ2VzIG9uIGEgc2VsZWN0IGVsZW1lbnQuXG4gKiBcbiAqIFVzZWQgYnkge1xcQGxpbmsgTmdNb2RlbH0sIHtcXEBsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfSwgYW5kIHtcXEBsaW5rIEZvcm1Db250cm9sTmFtZX1cbiAqIHRvIGtlZXAgdGhlIHZpZXcgc3luY2VkIHdpdGggdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfSBtb2RlbC5cbiAqIFxuICogXFxAaG93VG9Vc2UgXG4gKiBcbiAqIElmIHlvdSBoYXZlIGltcG9ydGVkIHRoZSB7XFxAbGluayBGb3Jtc01vZHVsZX0gb3IgdGhlIHtcXEBsaW5rIFJlYWN0aXZlRm9ybXNNb2R1bGV9LCB0aGlzXG4gKiB2YWx1ZSBhY2Nlc3NvciB3aWxsIGJlIGFjdGl2ZSBvbiBhbnkgc2VsZWN0IGNvbnRyb2wgdGhhdCBoYXMgYSBmb3JtIGRpcmVjdGl2ZS4gWW91IGRvXG4gKiAqKm5vdCoqIG5lZWQgdG8gYWRkIGEgc3BlY2lhbCBzZWxlY3RvciB0byBhY3RpdmF0ZSBpdC5cbiAqIFxuICogIyMjIEhvdyB0byB1c2Ugc2VsZWN0IGNvbnRyb2xzIHdpdGggZm9ybSBkaXJlY3RpdmVzXG4gKiBcbiAqIFRvIHVzZSBhIHNlbGVjdCBpbiBhIHRlbXBsYXRlLWRyaXZlbiBmb3JtLCBzaW1wbHkgYWRkIGFuIGBuZ01vZGVsYCBhbmQgYSBgbmFtZWBcbiAqIGF0dHJpYnV0ZSB0byB0aGUgbWFpbiBgPHNlbGVjdD5gIHRhZy5cbiAqIFxuICogSWYgeW91ciBvcHRpb24gdmFsdWVzIGFyZSBzaW1wbGUgc3RyaW5ncywgeW91IGNhbiBiaW5kIHRvIHRoZSBub3JtYWwgYHZhbHVlYCBwcm9wZXJ0eVxuICogb24gdGhlIG9wdGlvbi4gIElmIHlvdXIgb3B0aW9uIHZhbHVlcyBoYXBwZW4gdG8gYmUgb2JqZWN0cyAoYW5kIHlvdSdkIGxpa2UgdG8gc2F2ZSB0aGVcbiAqIHNlbGVjdGlvbiBpbiB5b3VyIGZvcm0gYXMgYW4gb2JqZWN0KSwgdXNlIGBuZ1ZhbHVlYCBpbnN0ZWFkOlxuICogXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9zZWxlY3RDb250cm9sL3NlbGVjdF9jb250cm9sX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICogXG4gKiBJbiByZWFjdGl2ZSBmb3JtcywgeW91J2xsIGFsc28gd2FudCB0byBhZGQgeW91ciBmb3JtIGRpcmVjdGl2ZSAoYGZvcm1Db250cm9sTmFtZWAgb3JcbiAqIGBmb3JtQ29udHJvbGApIG9uIHRoZSBtYWluIGA8c2VsZWN0PmAgdGFnLiBMaWtlIGluIHRoZSBmb3JtZXIgZXhhbXBsZSwgeW91IGhhdmUgdGhlXG4gKiBjaG9pY2Ugb2YgYmluZGluZyB0byB0aGUgIGB2YWx1ZWAgb3IgYG5nVmFsdWVgIHByb3BlcnR5IG9uIHRoZSBzZWxlY3QncyBvcHRpb25zLlxuICogXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9yZWFjdGl2ZVNlbGVjdENvbnRyb2wvcmVhY3RpdmVfc2VsZWN0X2NvbnRyb2xfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gKiBcbiAqICMjIyBDYXZlYXQ6IE9wdGlvbiBzZWxlY3Rpb25cbiAqIFxuICogQW5ndWxhciB1c2VzIG9iamVjdCBpZGVudGl0eSB0byBzZWxlY3Qgb3B0aW9uLiBJdCdzIHBvc3NpYmxlIGZvciB0aGUgaWRlbnRpdGllcyBvZiBpdGVtc1xuICogdG8gY2hhbmdlIHdoaWxlIHRoZSBkYXRhIGRvZXMgbm90LiBUaGlzIGNhbiBoYXBwZW4sIGZvciBleGFtcGxlLCBpZiB0aGUgaXRlbXMgYXJlIHByb2R1Y2VkXG4gKiBmcm9tIGFuIFJQQyB0byB0aGUgc2VydmVyLCBhbmQgdGhhdCBSUEMgaXMgcmUtcnVuLiBFdmVuIGlmIHRoZSBkYXRhIGhhc24ndCBjaGFuZ2VkLCB0aGVcbiAqIHNlY29uZCByZXNwb25zZSB3aWxsIHByb2R1Y2Ugb2JqZWN0cyB3aXRoIGRpZmZlcmVudCBpZGVudGl0aWVzLlxuICogXG4gKiBUbyBjdXN0b21pemUgdGhlIGRlZmF1bHQgb3B0aW9uIGNvbXBhcmlzb24gYWxnb3JpdGhtLCBgPHNlbGVjdD5gIHN1cHBvcnRzIGBjb21wYXJlV2l0aGAgaW5wdXQuXG4gKiBgY29tcGFyZVdpdGhgIHRha2VzIGEgKipmdW5jdGlvbioqIHdoaWNoIGhhcyB0d28gYXJndW1lbnRzOiBgb3B0aW9uMWAgYW5kIGBvcHRpb24yYC5cbiAqIElmIGBjb21wYXJlV2l0aGAgaXMgZ2l2ZW4sIEFuZ3VsYXIgc2VsZWN0cyBvcHRpb24gYnkgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24uXG4gKiBcbiAqICMjIyMgU3ludGF4XG4gKiBcbiAqIGBgYFxuICogPHNlbGVjdCBbY29tcGFyZVdpdGhdPVwiY29tcGFyZUZuXCIgIFsobmdNb2RlbCldPVwic2VsZWN0ZWRDb3VudHJpZXNcIj5cbiAqICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBjb3VudHJ5IG9mIGNvdW50cmllc1wiIFtuZ1ZhbHVlXT1cImNvdW50cnlcIj5cbiAqICAgICAgICAge3tjb3VudHJ5Lm5hbWV9fVxuICogICAgIDwvb3B0aW9uPlxuICogPC9zZWxlY3Q+XG4gKiBcbiAqIGNvbXBhcmVGbihjMTogQ291bnRyeSwgYzI6IENvdW50cnkpOiBib29sZWFuIHtcbiAqICAgICByZXR1cm4gYzEgJiYgYzIgPyBjMS5pZCA9PT0gYzIuaWQgOiBjMSA9PT0gYzI7XG4gKiB9XG4gKiBgYGBcbiAqIFxuICogTm90ZTogV2UgbGlzdGVuIHRvIHRoZSAnY2hhbmdlJyBldmVudCBiZWNhdXNlICdpbnB1dCcgZXZlbnRzIGFyZW4ndCBmaXJlZFxuICogZm9yIHNlbGVjdHMgaW4gRmlyZWZveCBhbmQgSUU6XG4gKiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMDI0MzUwXG4gKiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy80NjYwMDQ1L1xuICogXG4gKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHZhbHVlOiBhbnk7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9vcHRpb25NYXA6IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5faWRDb3VudGVyOiBudW1iZXIgPSAwO1xuXG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXQgY29tcGFyZVdpdGgoZm46IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBjb21wYXJlV2l0aCBtdXN0IGJlIGEgZnVuY3Rpb24sIGJ1dCByZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KGZuKX1gKTtcbiAgICB9XG4gICAgdGhpcy5fY29tcGFyZVdpdGggPSBmbjtcbiAgfVxucHJpdmF0ZSBfY29tcGFyZVdpdGg6IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuID0gbG9vc2VJZGVudGljYWw7XG4vKipcbiAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gKiBAcGFyYW0gez99IF9lbGVtZW50UmVmXG4gKi9cbmNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcixcbnByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbndyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGlkOiBzdHJpbmcgPSB0aGlzLl9nZXRPcHRpb25JZCh2YWx1ZSk7XG4gICAgaWYgKGlkID09IG51bGwpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzZWxlY3RlZEluZGV4JywgLTEpO1xuICAgIH1cbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIHZhbHVlU3RyaW5nID0gX2J1aWxkVmFsdWVTdHJpbmcoaWQsIHZhbHVlKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB2YWx1ZVN0cmluZyk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSAodmFsdWVTdHJpbmc6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlU3RyaW5nO1xuICAgICAgZm4odGhpcy5fZ2V0T3B0aW9uVmFsdWUodmFsdWVTdHJpbmcpKTtcbiAgICB9O1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fcmVnaXN0ZXJPcHRpb24oKTogc3RyaW5nIHsgcmV0dXJuICh0aGlzLl9pZENvdW50ZXIrKykudG9TdHJpbmcoKTsgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuX2dldE9wdGlvbklkKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGZvciAoY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBpZCBvZiBBcnJheS5mcm9tKHRoaXMuX29wdGlvbk1hcC5rZXlzKCkpKSB7XG4gICAgICBpZiAodGhpcy5fY29tcGFyZVdpdGgodGhpcy5fb3B0aW9uTWFwLmdldChpZCksIHZhbHVlKSkgcmV0dXJuIGlkO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSB2YWx1ZVN0cmluZ1xuICogQHJldHVybiB7P31cbiAqL1xuX2dldE9wdGlvblZhbHVlKHZhbHVlU3RyaW5nOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gaWQ6IHN0cmluZyA9IF9leHRyYWN0SWQodmFsdWVTdHJpbmcpO1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25NYXAuaGFzKGlkKSA/IHRoaXMuX29wdGlvbk1hcC5nZXQoaWQpIDogdmFsdWVTdHJpbmc7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6XG4gICAgICAnc2VsZWN0Om5vdChbbXVsdGlwbGVdKVtmb3JtQ29udHJvbE5hbWVdLHNlbGVjdDpub3QoW211bHRpcGxlXSlbZm9ybUNvbnRyb2xdLHNlbGVjdDpub3QoW211bHRpcGxlXSlbbmdNb2RlbF0nLFxuICBob3N0OiB7JyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJywgJyhibHVyKSc6ICdvblRvdWNoZWQoKSd9LFxuICBwcm92aWRlcnM6IFtTRUxFQ1RfVkFMVUVfQUNDRVNTT1JdXG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IFJlbmRlcmVyLCB9LFxue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidjb21wYXJlV2l0aCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cblNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvcERlY29yYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUudmFsdWU7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9vcHRpb25NYXA7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9pZENvdW50ZXI7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUub25DaGFuZ2U7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUub25Ub3VjaGVkO1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9jb21wYXJlV2l0aDtcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fcmVuZGVyZXI7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2VsZW1lbnRSZWY7XG59XG5cbi8qKlxuICogXFxAd2hhdEl0RG9lcyBNYXJrcyBgPG9wdGlvbj5gIGFzIGR5bmFtaWMsIHNvIEFuZ3VsYXIgY2FuIGJlIG5vdGlmaWVkIHdoZW4gb3B0aW9ucyBjaGFuZ2UuXG4gKiBcbiAqIFxcQGhvd1RvVXNlIFxuICogXG4gKiBTZWUgZG9jcyBmb3Ige1xcQGxpbmsgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZvciB1c2FnZSBleGFtcGxlcy5cbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ1NlbGVjdE9wdGlvbiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGlkOiBzdHJpbmc7XG4vKipcbiAqIEBwYXJhbSB7P30gX2VsZW1lbnRcbiAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gKiBAcGFyYW0gez99IF9zZWxlY3RcbiAqL1xuY29uc3RydWN0b3IoXG5wcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxucHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyLFxucHJpdmF0ZSBfc2VsZWN0OiBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcikge1xuICAgIGlmICh0aGlzLl9zZWxlY3QpIHRoaXMuaWQgPSB0aGlzLl9zZWxlY3QuX3JlZ2lzdGVyT3B0aW9uKCk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuc2V0IG5nVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLl9zZWxlY3QgPT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMuX3NlbGVjdC5fb3B0aW9uTWFwLnNldCh0aGlzLmlkLCB2YWx1ZSk7XG4gICAgdGhpcy5fc2V0RWxlbWVudFZhbHVlKF9idWlsZFZhbHVlU3RyaW5nKHRoaXMuaWQsIHZhbHVlKSk7XG4gICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3NldEVsZW1lbnRWYWx1ZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX3NlbGVjdCkgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuX3NldEVsZW1lbnRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWUpO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zZWxlY3QpIHtcbiAgICAgIHRoaXMuX3NlbGVjdC5fb3B0aW9uTWFwLmRlbGV0ZSh0aGlzLmlkKTtcbiAgICAgIHRoaXMuX3NlbGVjdC53cml0ZVZhbHVlKHRoaXMuX3NlbGVjdC52YWx1ZSk7XG4gICAgfVxuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7c2VsZWN0b3I6ICdvcHRpb24nfSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBFbGVtZW50UmVmLCB9LFxue3R5cGU6IFJlbmRlcmVyLCB9LFxue3R5cGU6IFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IEhvc3QgfSwgXX0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbiduZ1ZhbHVlJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnbmdWYWx1ZScsIF0gfSxdLFxuJ3ZhbHVlJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsndmFsdWUnLCBdIH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIE5nU2VsZWN0T3B0aW9uX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5OZ1NlbGVjdE9wdGlvbi5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbk5nU2VsZWN0T3B0aW9uLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdTZWxlY3RPcHRpb24ucHJvcERlY29yYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5OZ1NlbGVjdE9wdGlvbi5wcm90b3R5cGUuaWQ7XG4vKiogQHR5cGUgez99ICovXG5OZ1NlbGVjdE9wdGlvbi5wcm90b3R5cGUuX2VsZW1lbnQ7XG4vKiogQHR5cGUgez99ICovXG5OZ1NlbGVjdE9wdGlvbi5wcm90b3R5cGUuX3JlbmRlcmVyO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdTZWxlY3RPcHRpb24ucHJvdG90eXBlLl9zZWxlY3Q7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3NlbGVjdF9jb250cm9sX3ZhbHVlX2FjY2Vzc29yLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBJbnB1dCwgT25EZXN0cm95LCBPcHRpb25hbCwgUHJvdmlkZXIsIFJlbmRlcmVyLCBmb3J3YXJkUmVmLCDJtWxvb3NlSWRlbnRpY2FsIGFzIGxvb3NlSWRlbnRpY2FsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICcuL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBTRUxFQ1RfTVVMVElQTEVfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvciksXG4gIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBAcGFyYW0gez99IGlkXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfYnVpbGRWYWx1ZVN0cmluZyhpZDogc3RyaW5nLCB2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgaWYgKGlkID09IG51bGwpIHJldHVybiBgJHt2YWx1ZX1gO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgdmFsdWUgPSBgJyR7dmFsdWV9J2A7XG4gIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB2YWx1ZSA9ICdPYmplY3QnO1xuICByZXR1cm4gYCR7aWR9OiAke3ZhbHVlfWAuc2xpY2UoMCwgNTApO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlU3RyaW5nXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfZXh0cmFjdElkKHZhbHVlU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWVTdHJpbmcuc3BsaXQoJzonKVswXTtcbn1cblxuLyoqIE1vY2sgaW50ZXJmYWNlIGZvciBIVE1MIE9wdGlvbnMgKi9cbmludGVyZmFjZSBIVE1MT3B0aW9uIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG4vKipcbiAqIE1vY2sgaW50ZXJmYWNlIGZvciBIVE1MQ29sbGVjdGlvblxuICogQGFic3RyYWN0XG4gKi9cbmFic3RyYWN0IGNsYXNzIEhUTUxDb2xsZWN0aW9uIHtcbiAgbGVuZ3RoOiBudW1iZXI7XG4vKipcbiAqIEBhYnN0cmFjdFxuICogQHBhcmFtIHs/fSBfXG4gKiBAcmV0dXJuIHs/fVxuICovXG5pdGVtKF86IG51bWJlcikge31cbn1cblxuZnVuY3Rpb24gSFRNTENvbGxlY3Rpb25fdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5sZW5ndGg7XG59XG5cbi8qKlxuICogVGhlIGFjY2Vzc29yIGZvciB3cml0aW5nIGEgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIG9uIGEgc2VsZWN0IGVsZW1lbnQuXG4gKiBcbiAqICAjIyMgQ2F2ZWF0OiBPcHRpb25zIHNlbGVjdGlvblxuICogXG4gKiBBbmd1bGFyIHVzZXMgb2JqZWN0IGlkZW50aXR5IHRvIHNlbGVjdCBvcHRpb25zLiBJdCdzIHBvc3NpYmxlIGZvciB0aGUgaWRlbnRpdGllcyBvZiBpdGVtc1xuICogdG8gY2hhbmdlIHdoaWxlIHRoZSBkYXRhIGRvZXMgbm90LiBUaGlzIGNhbiBoYXBwZW4sIGZvciBleGFtcGxlLCBpZiB0aGUgaXRlbXMgYXJlIHByb2R1Y2VkXG4gKiBmcm9tIGFuIFJQQyB0byB0aGUgc2VydmVyLCBhbmQgdGhhdCBSUEMgaXMgcmUtcnVuLiBFdmVuIGlmIHRoZSBkYXRhIGhhc24ndCBjaGFuZ2VkLCB0aGVcbiAqIHNlY29uZCByZXNwb25zZSB3aWxsIHByb2R1Y2Ugb2JqZWN0cyB3aXRoIGRpZmZlcmVudCBpZGVudGl0aWVzLlxuICogXG4gKiBUbyBjdXN0b21pemUgdGhlIGRlZmF1bHQgb3B0aW9uIGNvbXBhcmlzb24gYWxnb3JpdGhtLCBgPHNlbGVjdCBtdWx0aXBsZT5gIHN1cHBvcnRzIGBjb21wYXJlV2l0aGBcbiAqIGlucHV0LiBgY29tcGFyZVdpdGhgIHRha2VzIGEgKipmdW5jdGlvbioqIHdoaWNoIGhhcyB0d28gYXJndW1lbnRzOiBgb3B0aW9uMWAgYW5kIGBvcHRpb24yYC5cbiAqIElmIGBjb21wYXJlV2l0aGAgaXMgZ2l2ZW4sIEFuZ3VsYXIgc2VsZWN0cyBvcHRpb25zIGJ5IHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uLlxuICogXG4gKiAjIyMjIFN5bnRheFxuICogXG4gKiBgYGBcbiAqIDxzZWxlY3QgbXVsdGlwbGUgW2NvbXBhcmVXaXRoXT1cImNvbXBhcmVGblwiICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkQ291bnRyaWVzXCI+XG4gKiAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgY291bnRyeSBvZiBjb3VudHJpZXNcIiBbbmdWYWx1ZV09XCJjb3VudHJ5XCI+XG4gKiAgICAgICAgIHt7Y291bnRyeS5uYW1lfX1cbiAqICAgICA8L29wdGlvbj5cbiAqIDwvc2VsZWN0PlxuICogXG4gKiBjb21wYXJlRm4oYzE6IENvdW50cnksIGMyOiBDb3VudHJ5KTogYm9vbGVhbiB7XG4gKiAgICAgcmV0dXJuIGMxICYmIGMyID8gYzEuaWQgPT09IGMyLmlkIDogYzEgPT09IGMyO1xuICogfVxuICogYGBgXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgdmFsdWU6IGFueTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX29wdGlvbk1hcDogTWFwPHN0cmluZywgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbj4gPSBuZXcgTWFwPHN0cmluZywgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbj4oKTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX2lkQ291bnRlcjogbnVtYmVyID0gMDtcblxuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xuc2V0IGNvbXBhcmVXaXRoKGZuOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgY29tcGFyZVdpdGggbXVzdCBiZSBhIGZ1bmN0aW9uLCBidXQgcmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShmbil9YCk7XG4gICAgfVxuICAgIHRoaXMuX2NvbXBhcmVXaXRoID0gZm47XG4gIH1cbnByaXZhdGUgX2NvbXBhcmVXaXRoOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbiA9IGxvb3NlSWRlbnRpY2FsO1xuLyoqXG4gKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICovXG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIsXG5wcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG53cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgbGV0IC8qKiBAdHlwZSB7P30gKi8gb3B0aW9uU2VsZWN0ZWRTdGF0ZVNldHRlcjogKG9wdDogTmdTZWxlY3RNdWx0aXBsZU9wdGlvbiwgbzogYW55KSA9PiB2b2lkO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgLy8gY29udmVydCB2YWx1ZXMgdG8gaWRzXG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGlkcyA9IHZhbHVlLm1hcCgodikgPT4gdGhpcy5fZ2V0T3B0aW9uSWQodikpO1xuICAgICAgb3B0aW9uU2VsZWN0ZWRTdGF0ZVNldHRlciA9IChvcHQsIG8pID0+IHsgb3B0Ll9zZXRTZWxlY3RlZChpZHMuaW5kZXhPZihvLnRvU3RyaW5nKCkpID4gLTEpOyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25TZWxlY3RlZFN0YXRlU2V0dGVyID0gKG9wdCwgbykgPT4geyBvcHQuX3NldFNlbGVjdGVkKGZhbHNlKTsgfTtcbiAgICB9XG4gICAgdGhpcy5fb3B0aW9uTWFwLmZvckVhY2gob3B0aW9uU2VsZWN0ZWRTdGF0ZVNldHRlcik7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSAoXzogYW55KSA9PiB7XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIHNlbGVjdGVkOiBBcnJheTxhbnk+ID0gW107XG4gICAgICBpZiAoXy5oYXNPd25Qcm9wZXJ0eSgnc2VsZWN0ZWRPcHRpb25zJykpIHtcbiAgICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBvcHRpb25zOiBIVE1MQ29sbGVjdGlvbiA9IF8uc2VsZWN0ZWRPcHRpb25zO1xuICAgICAgICBmb3IgKGxldCAvKiogQHR5cGUgez99ICovIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gb3B0OiBhbnkgPSBvcHRpb25zLml0ZW0oaSk7XG4gICAgICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyB2YWw6IGFueSA9IHRoaXMuX2dldE9wdGlvblZhbHVlKG9wdC52YWx1ZSk7XG4gICAgICAgICAgc2VsZWN0ZWQucHVzaCh2YWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBEZWdyYWRlIG9uIElFXG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBvcHRpb25zOiBIVE1MQ29sbGVjdGlvbiA9IC8qKiBAdHlwZSB7P30gKi8oKCA8SFRNTENvbGxlY3Rpb24+Xy5vcHRpb25zKSk7XG4gICAgICAgIGZvciAobGV0IC8qKiBAdHlwZSB7P30gKi8gaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBvcHQ6IEhUTUxPcHRpb24gPSBvcHRpb25zLml0ZW0oaSk7XG4gICAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyB2YWw6IGFueSA9IHRoaXMuX2dldE9wdGlvblZhbHVlKG9wdC52YWx1ZSk7XG4gICAgICAgICAgICBzZWxlY3RlZC5wdXNoKHZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlID0gc2VsZWN0ZWQ7XG4gICAgICBmbihzZWxlY3RlZCk7XG4gICAgfTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cbi8qKlxuICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuX3JlZ2lzdGVyT3B0aW9uKHZhbHVlOiBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uKTogc3RyaW5nIHtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGlkOiBzdHJpbmcgPSAodGhpcy5faWRDb3VudGVyKyspLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5fb3B0aW9uTWFwLnNldChpZCwgdmFsdWUpO1xuICAgIHJldHVybiBpZDtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuX2dldE9wdGlvbklkKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGZvciAoY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBpZCBvZiBBcnJheS5mcm9tKHRoaXMuX29wdGlvbk1hcC5rZXlzKCkpKSB7XG4gICAgICBpZiAodGhpcy5fY29tcGFyZVdpdGgodGhpcy5fb3B0aW9uTWFwLmdldChpZCkuX3ZhbHVlLCB2YWx1ZSkpIHJldHVybiBpZDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gdmFsdWVTdHJpbmdcbiAqIEByZXR1cm4gez99XG4gKi9cbl9nZXRPcHRpb25WYWx1ZSh2YWx1ZVN0cmluZzogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGlkOiBzdHJpbmcgPSBfZXh0cmFjdElkKHZhbHVlU3RyaW5nKTtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uTWFwLmhhcyhpZCkgPyB0aGlzLl9vcHRpb25NYXAuZ2V0KGlkKS5fdmFsdWUgOiB2YWx1ZVN0cmluZztcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjpcbiAgICAgICdzZWxlY3RbbXVsdGlwbGVdW2Zvcm1Db250cm9sTmFtZV0sc2VsZWN0W211bHRpcGxlXVtmb3JtQ29udHJvbF0sc2VsZWN0W211bHRpcGxlXVtuZ01vZGVsXScsXG4gIGhvc3Q6IHsnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldCknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJ30sXG4gIHByb3ZpZGVyczogW1NFTEVDVF9NVUxUSVBMRV9WQUxVRV9BQ0NFU1NPUl1cbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogUmVuZGVyZXIsIH0sXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ2NvbXBhcmVXaXRoJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvcl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cblNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3BEZWNvcmF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUudmFsdWU7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX29wdGlvbk1hcDtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5TZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5faWRDb3VudGVyO1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUub25DaGFuZ2U7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5vblRvdWNoZWQ7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fY29tcGFyZVdpdGg7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fcmVuZGVyZXI7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fZWxlbWVudFJlZjtcbn1cblxuLyoqXG4gKiBNYXJrcyBgPG9wdGlvbj5gIGFzIGR5bmFtaWMsIHNvIEFuZ3VsYXIgY2FuIGJlIG5vdGlmaWVkIHdoZW4gb3B0aW9ucyBjaGFuZ2UuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIGBgYFxuICogPHNlbGVjdCBtdWx0aXBsZSBuYW1lPVwiY2l0eVwiIG5nTW9kZWw+XG4gKiAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGMgb2YgY2l0aWVzXCIgW3ZhbHVlXT1cImNcIj48L29wdGlvbj5cbiAqIDwvc2VsZWN0PlxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgaWQ6IHN0cmluZztcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX3ZhbHVlOiBhbnk7XG4vKipcbiAqIEBwYXJhbSB7P30gX2VsZW1lbnRcbiAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gKiBAcGFyYW0gez99IF9zZWxlY3RcbiAqL1xuY29uc3RydWN0b3IoXG5wcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxucHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyLFxucHJpdmF0ZSBfc2VsZWN0OiBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yKSB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdCkge1xuICAgICAgdGhpcy5pZCA9IHRoaXMuX3NlbGVjdC5fcmVnaXN0ZXJPcHRpb24odGhpcyk7XG4gICAgfVxuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldCBuZ1ZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0ID09IG51bGwpIHJldHVybjtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX3NldEVsZW1lbnRWYWx1ZShfYnVpbGRWYWx1ZVN0cmluZyh0aGlzLmlkLCB2YWx1ZSkpO1xuICAgIHRoaXMuX3NlbGVjdC53cml0ZVZhbHVlKHRoaXMuX3NlbGVjdC52YWx1ZSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0KSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fc2V0RWxlbWVudFZhbHVlKF9idWlsZFZhbHVlU3RyaW5nKHRoaXMuaWQsIHZhbHVlKSk7XG4gICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuX3NldEVsZW1lbnRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWUpO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IHNlbGVjdGVkXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fc2V0U2VsZWN0ZWQoc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xubmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdCkge1xuICAgICAgdGhpcy5fc2VsZWN0Ll9vcHRpb25NYXAuZGVsZXRlKHRoaXMuaWQpO1xuICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICB9XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tzZWxlY3RvcjogJ29wdGlvbid9LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG57dHlwZTogUmVuZGVyZXIsIH0sXG57dHlwZTogU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvciwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBIb3N0IH0sIF19LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nbmdWYWx1ZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ25nVmFsdWUnLCBdIH0sXSxcbid2YWx1ZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ3ZhbHVlJywgXSB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5OZ1NlbGVjdE11bHRpcGxlT3B0aW9uLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbk5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvcERlY29yYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5OZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZS5pZDtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5OZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZS5fdmFsdWU7XG4vKiogQHR5cGUgez99ICovXG5OZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZS5fZWxlbWVudDtcbi8qKiBAdHlwZSB7P30gKi9cbk5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLl9yZW5kZXJlcjtcbi8qKiBAdHlwZSB7P30gKi9cbk5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLl9zZWxlY3Q7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3NlbGVjdF9tdWx0aXBsZV9jb250cm9sX3ZhbHVlX2FjY2Vzc29yLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7ybVsb29zZUlkZW50aWNhbCBhcyBsb29zZUlkZW50aWNhbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1BcnJheSwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHtWYWxpZGF0b3JzfSBmcm9tICcuLi92YWxpZGF0b3JzJztcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0X2NvbnRyb2xfZGlyZWN0aXZlJztcbmltcG9ydCB7QWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3RfZm9ybV9ncm91cF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2NoZWNrYm94X3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7Q29udHJvbENvbnRhaW5lcn0gZnJvbSAnLi9jb250cm9sX2NvbnRhaW5lcic7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kZWZhdWx0X3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7TmdDb250cm9sfSBmcm9tICcuL25nX2NvbnRyb2wnO1xuaW1wb3J0IHtub3JtYWxpemVBc3luY1ZhbGlkYXRvciwgbm9ybWFsaXplVmFsaWRhdG9yfSBmcm9tICcuL25vcm1hbGl6ZV92YWxpZGF0b3InO1xuaW1wb3J0IHtOdW1iZXJWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL251bWJlcl92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge1JhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vcmFkaW9fY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge1JhbmdlVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9yYW5nZV92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge0Zvcm1BcnJheU5hbWV9IGZyb20gJy4vcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX25hbWUnO1xuaW1wb3J0IHtTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9zZWxlY3RfY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge1NlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vc2VsZWN0X211bHRpcGxlX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvciwgQXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi92YWxpZGF0b3JzJztcbi8qKlxuICogQHBhcmFtIHs/fSBuYW1lXG4gKiBAcGFyYW0gez99IHBhcmVudFxuICogQHJldHVybiB7P31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyb2xQYXRoKG5hbWU6IHN0cmluZywgcGFyZW50OiBDb250cm9sQ29udGFpbmVyKTogc3RyaW5nW10ge1xuICByZXR1cm4gWy4uLnBhcmVudC5wYXRoLCBuYW1lXTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFVwQ29udHJvbChjb250cm9sOiBGb3JtQ29udHJvbCwgZGlyOiBOZ0NvbnRyb2wpOiB2b2lkIHtcbiAgaWYgKCFjb250cm9sKSBfdGhyb3dFcnJvcihkaXIsICdDYW5ub3QgZmluZCBjb250cm9sIHdpdGgnKTtcbiAgaWYgKCFkaXIudmFsdWVBY2Nlc3NvcikgX3Rocm93RXJyb3IoZGlyLCAnTm8gdmFsdWUgYWNjZXNzb3IgZm9yIGZvcm0gY29udHJvbCB3aXRoJyk7XG5cbiAgY29udHJvbC52YWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2UoW2NvbnRyb2wudmFsaWRhdG9yLCBkaXIudmFsaWRhdG9yXSk7XG4gIGNvbnRyb2wuYXN5bmNWYWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyhbY29udHJvbC5hc3luY1ZhbGlkYXRvciwgZGlyLmFzeW5jVmFsaWRhdG9yXSk7XG4gIGRpci52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUoY29udHJvbC52YWx1ZSk7XG5cbiAgLy8gdmlldyAtPiBtb2RlbFxuICBkaXIudmFsdWVBY2Nlc3Nvci5yZWdpc3Rlck9uQ2hhbmdlKChuZXdWYWx1ZTogYW55KSA9PiB7XG4gICAgZGlyLnZpZXdUb01vZGVsVXBkYXRlKG5ld1ZhbHVlKTtcbiAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgY29udHJvbC5zZXRWYWx1ZShuZXdWYWx1ZSwge2VtaXRNb2RlbFRvVmlld0NoYW5nZTogZmFsc2V9KTtcbiAgfSk7XG5cbiAgLy8gdG91Y2hlZFxuICBkaXIudmFsdWVBY2Nlc3Nvci5yZWdpc3Rlck9uVG91Y2hlZCgoKSA9PiBjb250cm9sLm1hcmtBc1RvdWNoZWQoKSk7XG5cbiAgY29udHJvbC5yZWdpc3Rlck9uQ2hhbmdlKChuZXdWYWx1ZTogYW55LCBlbWl0TW9kZWxFdmVudDogYm9vbGVhbikgPT4ge1xuICAgIC8vIGNvbnRyb2wgLT4gdmlld1xuICAgIGRpci52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUobmV3VmFsdWUpO1xuXG4gICAgLy8gY29udHJvbCAtPiBuZ01vZGVsXG4gICAgaWYgKGVtaXRNb2RlbEV2ZW50KSBkaXIudmlld1RvTW9kZWxVcGRhdGUobmV3VmFsdWUpO1xuICB9KTtcblxuICBpZiAoZGlyLnZhbHVlQWNjZXNzb3Iuc2V0RGlzYWJsZWRTdGF0ZSkge1xuICAgIGNvbnRyb2wucmVnaXN0ZXJPbkRpc2FibGVkQ2hhbmdlKFxuICAgICAgICAoaXNEaXNhYmxlZDogYm9vbGVhbikgPT4geyBkaXIudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQpOyB9KTtcbiAgfVxuXG4gIC8vIHJlLXJ1biB2YWxpZGF0aW9uIHdoZW4gdmFsaWRhdG9yIGJpbmRpbmcgY2hhbmdlcywgZS5nLiBtaW5sZW5ndGg9MyAtPiBtaW5sZW5ndGg9NFxuICBkaXIuX3Jhd1ZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yOiBWYWxpZGF0b3IgfCBWYWxpZGF0b3JGbikgPT4ge1xuICAgIGlmICgoIC8qKiBAdHlwZSB7P30gKi8oKDxWYWxpZGF0b3I+dmFsaWRhdG9yKSkpLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UpXG4gICAgICAoIC8qKiBAdHlwZSB7P30gKi8oKDxWYWxpZGF0b3I+dmFsaWRhdG9yKSkpLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoKCkgPT4gY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCkpO1xuICB9KTtcblxuICBkaXIuX3Jhd0FzeW5jVmFsaWRhdG9ycy5mb3JFYWNoKCh2YWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yIHwgQXN5bmNWYWxpZGF0b3JGbikgPT4ge1xuICAgIGlmICgoIC8qKiBAdHlwZSB7P30gKi8oKDxWYWxpZGF0b3I+dmFsaWRhdG9yKSkpLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UpXG4gICAgICAoIC8qKiBAdHlwZSB7P30gKi8oKDxWYWxpZGF0b3I+dmFsaWRhdG9yKSkpLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoKCkgPT4gY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCkpO1xuICB9KTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuVXBDb250cm9sKGNvbnRyb2w6IEZvcm1Db250cm9sLCBkaXI6IE5nQ29udHJvbCkge1xuICBkaXIudmFsdWVBY2Nlc3Nvci5yZWdpc3Rlck9uQ2hhbmdlKCgpID0+IF9ub0NvbnRyb2xFcnJvcihkaXIpKTtcbiAgZGlyLnZhbHVlQWNjZXNzb3IucmVnaXN0ZXJPblRvdWNoZWQoKCkgPT4gX25vQ29udHJvbEVycm9yKGRpcikpO1xuXG4gIGRpci5fcmF3VmFsaWRhdG9ycy5mb3JFYWNoKCh2YWxpZGF0b3I6IGFueSkgPT4ge1xuICAgIGlmICh2YWxpZGF0b3IucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSkge1xuICAgICAgdmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UobnVsbCk7XG4gICAgfVxuICB9KTtcblxuICBkaXIuX3Jhd0FzeW5jVmFsaWRhdG9ycy5mb3JFYWNoKCh2YWxpZGF0b3I6IGFueSkgPT4ge1xuICAgIGlmICh2YWxpZGF0b3IucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSkge1xuICAgICAgdmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UobnVsbCk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoY29udHJvbCkgY29udHJvbC5fY2xlYXJDaGFuZ2VGbnMoKTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFVwRm9ybUNvbnRhaW5lcihcbiAgICBjb250cm9sOiBGb3JtR3JvdXAgfCBGb3JtQXJyYXksIGRpcjogQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUgfCBGb3JtQXJyYXlOYW1lKSB7XG4gIGlmIChjb250cm9sID09IG51bGwpIF90aHJvd0Vycm9yKGRpciwgJ0Nhbm5vdCBmaW5kIGNvbnRyb2wgd2l0aCcpO1xuICBjb250cm9sLnZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZShbY29udHJvbC52YWxpZGF0b3IsIGRpci52YWxpZGF0b3JdKTtcbiAgY29udHJvbC5hc3luY1ZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jKFtjb250cm9sLmFzeW5jVmFsaWRhdG9yLCBkaXIuYXN5bmNWYWxpZGF0b3JdKTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9ub0NvbnRyb2xFcnJvcihkaXI6IE5nQ29udHJvbCkge1xuICByZXR1cm4gX3Rocm93RXJyb3IoZGlyLCAnVGhlcmUgaXMgbm8gRm9ybUNvbnRyb2wgaW5zdGFuY2UgYXR0YWNoZWQgdG8gZm9ybSBjb250cm9sIGVsZW1lbnQgd2l0aCcpO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHBhcmFtIHs/fSBtZXNzYWdlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfdGhyb3dFcnJvcihkaXI6IEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gIGxldCAvKiogQHR5cGUgez99ICovIG1lc3NhZ2VFbmQ6IHN0cmluZztcbiAgaWYgKGRpci5wYXRoLmxlbmd0aCA+IDEpIHtcbiAgICBtZXNzYWdlRW5kID0gYHBhdGg6ICcke2Rpci5wYXRoLmpvaW4oJyAtPiAnKX0nYDtcbiAgfSBlbHNlIGlmIChkaXIucGF0aFswXSkge1xuICAgIG1lc3NhZ2VFbmQgPSBgbmFtZTogJyR7ZGlyLnBhdGh9J2A7XG4gIH0gZWxzZSB7XG4gICAgbWVzc2FnZUVuZCA9ICd1bnNwZWNpZmllZCBuYW1lIGF0dHJpYnV0ZSc7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGAke21lc3NhZ2V9ICR7bWVzc2FnZUVuZH1gKTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZVZhbGlkYXRvcnModmFsaWRhdG9yczogQXJyYXk8VmFsaWRhdG9yfEZ1bmN0aW9uPik6IFZhbGlkYXRvckZuIHtcbiAgcmV0dXJuIHZhbGlkYXRvcnMgIT0gbnVsbCA/IFZhbGlkYXRvcnMuY29tcG9zZSh2YWxpZGF0b3JzLm1hcChub3JtYWxpemVWYWxpZGF0b3IpKSA6IG51bGw7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICogQHJldHVybiB7P31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModmFsaWRhdG9yczogQXJyYXk8VmFsaWRhdG9yfEZ1bmN0aW9uPik6IEFzeW5jVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gdmFsaWRhdG9ycyAhPSBudWxsID8gVmFsaWRhdG9ycy5jb21wb3NlQXN5bmModmFsaWRhdG9ycy5tYXAobm9ybWFsaXplQXN5bmNWYWxpZGF0b3IpKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGNoYW5nZXNcbiAqIEBwYXJhbSB7P30gdmlld01vZGVsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlczoge1trZXk6IHN0cmluZ106IGFueX0sIHZpZXdNb2RlbDogYW55KTogYm9vbGVhbiB7XG4gIGlmICghY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbW9kZWwnKSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCAvKiogQHR5cGUgez99ICovIGNoYW5nZSA9IGNoYW5nZXNbJ21vZGVsJ107XG5cbiAgaWYgKGNoYW5nZS5pc0ZpcnN0Q2hhbmdlKCkpIHJldHVybiB0cnVlO1xuICByZXR1cm4gIWxvb3NlSWRlbnRpY2FsKHZpZXdNb2RlbCwgY2hhbmdlLmN1cnJlbnRWYWx1ZSk7XG59XG5cbmNvbnN0IC8qKiBAdHlwZSB7P30gKi8gQlVJTFRJTl9BQ0NFU1NPUlMgPSBbXG4gIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIFJhbmdlVmFsdWVBY2Nlc3NvcixcbiAgTnVtYmVyVmFsdWVBY2Nlc3NvcixcbiAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IsXG5dO1xuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlQWNjZXNzb3JcbiAqIEByZXR1cm4gez99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0J1aWx0SW5BY2Nlc3Nvcih2YWx1ZUFjY2Vzc29yOiBDb250cm9sVmFsdWVBY2Nlc3Nvcik6IGJvb2xlYW4ge1xuICByZXR1cm4gQlVJTFRJTl9BQ0NFU1NPUlMuc29tZShhID0+IHZhbHVlQWNjZXNzb3IuY29uc3RydWN0b3IgPT09IGEpO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHBhcmFtIHs/fSB2YWx1ZUFjY2Vzc29yc1xuICogQHJldHVybiB7P31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFZhbHVlQWNjZXNzb3IoXG4gICAgZGlyOiBOZ0NvbnRyb2wsIHZhbHVlQWNjZXNzb3JzOiBDb250cm9sVmFsdWVBY2Nlc3NvcltdKTogQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBpZiAoIXZhbHVlQWNjZXNzb3JzKSByZXR1cm4gbnVsbDtcblxuICBsZXQgLyoqIEB0eXBlIHs/fSAqLyBkZWZhdWx0QWNjZXNzb3I6IENvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuICBsZXQgLyoqIEB0eXBlIHs/fSAqLyBidWlsdGluQWNjZXNzb3I6IENvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuICBsZXQgLyoqIEB0eXBlIHs/fSAqLyBjdXN0b21BY2Nlc3NvcjogQ29udHJvbFZhbHVlQWNjZXNzb3I7XG4gIHZhbHVlQWNjZXNzb3JzLmZvckVhY2goKHY6IENvbnRyb2xWYWx1ZUFjY2Vzc29yKSA9PiB7XG4gICAgaWYgKHYuY29uc3RydWN0b3IgPT09IERlZmF1bHRWYWx1ZUFjY2Vzc29yKSB7XG4gICAgICBkZWZhdWx0QWNjZXNzb3IgPSB2O1xuXG4gICAgfSBlbHNlIGlmIChpc0J1aWx0SW5BY2Nlc3Nvcih2KSkge1xuICAgICAgaWYgKGJ1aWx0aW5BY2Nlc3NvcilcbiAgICAgICAgX3Rocm93RXJyb3IoZGlyLCAnTW9yZSB0aGFuIG9uZSBidWlsdC1pbiB2YWx1ZSBhY2Nlc3NvciBtYXRjaGVzIGZvcm0gY29udHJvbCB3aXRoJyk7XG4gICAgICBidWlsdGluQWNjZXNzb3IgPSB2O1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXN0b21BY2Nlc3NvcilcbiAgICAgICAgX3Rocm93RXJyb3IoZGlyLCAnTW9yZSB0aGFuIG9uZSBjdXN0b20gdmFsdWUgYWNjZXNzb3IgbWF0Y2hlcyBmb3JtIGNvbnRyb2wgd2l0aCcpO1xuICAgICAgY3VzdG9tQWNjZXNzb3IgPSB2O1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGN1c3RvbUFjY2Vzc29yKSByZXR1cm4gY3VzdG9tQWNjZXNzb3I7XG4gIGlmIChidWlsdGluQWNjZXNzb3IpIHJldHVybiBidWlsdGluQWNjZXNzb3I7XG4gIGlmIChkZWZhdWx0QWNjZXNzb3IpIHJldHVybiBkZWZhdWx0QWNjZXNzb3I7XG5cbiAgX3Rocm93RXJyb3IoZGlyLCAnTm8gdmFsaWQgdmFsdWUgYWNjZXNzb3IgZm9yIGZvcm0gY29udHJvbCB3aXRoJyk7XG4gIHJldHVybiBudWxsO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3NoYXJlZC50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge09uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJy4uL21vZGVsJztcblxuaW1wb3J0IHtDb250cm9sQ29udGFpbmVyfSBmcm9tICcuL2NvbnRyb2xfY29udGFpbmVyJztcbmltcG9ydCB7Rm9ybX0gZnJvbSAnLi9mb3JtX2ludGVyZmFjZSc7XG5pbXBvcnQge2NvbXBvc2VBc3luY1ZhbGlkYXRvcnMsIGNvbXBvc2VWYWxpZGF0b3JzLCBjb250cm9sUGF0aH0gZnJvbSAnLi9zaGFyZWQnO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi92YWxpZGF0b3JzJztcbi8qKlxuICogVGhpcyBpcyBhIGJhc2UgY2xhc3MgZm9yIGNvZGUgc2hhcmVkIGJldHdlZW4ge1xcQGxpbmsgTmdNb2RlbEdyb3VwfSBhbmQge1xcQGxpbmsgRm9ybUdyb3VwTmFtZX0uXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fcGFyZW50OiBDb250cm9sQ29udGFpbmVyO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fdmFsaWRhdG9yczogYW55W107XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9hc3luY1ZhbGlkYXRvcnM6IGFueVtdO1xuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGVja1BhcmVudFR5cGUoKTtcbiAgICB0aGlzLmZvcm1EaXJlY3RpdmUuYWRkRm9ybUdyb3VwKHRoaXMpO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZvcm1EaXJlY3RpdmUpIHtcbiAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZW1vdmVGb3JtR3JvdXAodGhpcyk7XG4gICAgfVxuICB9XG4vKipcbiAqIEdldCB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfSBiYWNraW5nIHRoaXMgYmluZGluZy5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBjb250cm9sKCk6IEZvcm1Hcm91cCB7IHJldHVybiB0aGlzLmZvcm1EaXJlY3RpdmUuZ2V0Rm9ybUdyb3VwKHRoaXMpOyB9XG4vKipcbiAqIEdldCB0aGUgcGF0aCB0byB0aGlzIGNvbnRyb2wgZ3JvdXAuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcGF0aCgpOiBzdHJpbmdbXSB7IHJldHVybiBjb250cm9sUGF0aCh0aGlzLm5hbWUsIHRoaXMuX3BhcmVudCk7IH1cbi8qKlxuICogR2V0IHRoZSB7XFxAbGluayBGb3JtfSB0byB3aGljaCB0aGlzIGdyb3VwIGJlbG9uZ3MuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgZm9ybURpcmVjdGl2ZSgpOiBGb3JtIHsgcmV0dXJuIHRoaXMuX3BhcmVudCA/IHRoaXMuX3BhcmVudC5mb3JtRGlyZWN0aXZlIDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHsgcmV0dXJuIGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3ZhbGlkYXRvcnMpOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBhc3luY1ZhbGlkYXRvcigpOiBBc3luY1ZhbGlkYXRvckZuIHsgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fYXN5bmNWYWxpZGF0b3JzKTsgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX2NoZWNrUGFyZW50VHlwZSgpOiB2b2lkIHt9XG59XG5cbmZ1bmN0aW9uIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl9wYXJlbnQ7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl92YWxpZGF0b3JzO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbkFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fYXN5bmNWYWxpZGF0b3JzO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvYWJzdHJhY3RfZm9ybV9ncm91cF9kaXJlY3RpdmUudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIFNlbGZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbERpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdF9jb250cm9sX2RpcmVjdGl2ZSc7XG5pbXBvcnQge0NvbnRyb2xDb250YWluZXJ9IGZyb20gJy4vY29udHJvbF9jb250YWluZXInO1xuaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gJy4vbmdfY29udHJvbCc7XG5leHBvcnQgY2xhc3MgQWJzdHJhY3RDb250cm9sU3RhdHVzIHtcbnByaXZhdGUgX2NkOiBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmU7XG4vKipcbiAqIEBwYXJhbSB7P30gY2RcbiAqL1xuY29uc3RydWN0b3IoY2Q6IEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSkgeyB0aGlzLl9jZCA9IGNkOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBuZ0NsYXNzVW50b3VjaGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wudW50b3VjaGVkIDogZmFsc2U7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IG5nQ2xhc3NUb3VjaGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wudG91Y2hlZCA6IGZhbHNlOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBuZ0NsYXNzUHJpc3RpbmUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC5wcmlzdGluZSA6IGZhbHNlOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBuZ0NsYXNzRGlydHkoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC5kaXJ0eSA6IGZhbHNlOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBuZ0NsYXNzVmFsaWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC52YWxpZCA6IGZhbHNlOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBuZ0NsYXNzSW52YWxpZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLmludmFsaWQgOiBmYWxzZTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgbmdDbGFzc1BlbmRpbmcoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC5wZW5kaW5nIDogZmFsc2U7IH1cbn1cblxuZnVuY3Rpb24gQWJzdHJhY3RDb250cm9sU3RhdHVzX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5BYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLl9jZDtcbn1cblxuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBuZ0NvbnRyb2xTdGF0dXNIb3N0ID0ge1xuICAnW2NsYXNzLm5nLXVudG91Y2hlZF0nOiAnbmdDbGFzc1VudG91Y2hlZCcsXG4gICdbY2xhc3MubmctdG91Y2hlZF0nOiAnbmdDbGFzc1RvdWNoZWQnLFxuICAnW2NsYXNzLm5nLXByaXN0aW5lXSc6ICduZ0NsYXNzUHJpc3RpbmUnLFxuICAnW2NsYXNzLm5nLWRpcnR5XSc6ICduZ0NsYXNzRGlydHknLFxuICAnW2NsYXNzLm5nLXZhbGlkXSc6ICduZ0NsYXNzVmFsaWQnLFxuICAnW2NsYXNzLm5nLWludmFsaWRdJzogJ25nQ2xhc3NJbnZhbGlkJyxcbiAgJ1tjbGFzcy5uZy1wZW5kaW5nXSc6ICduZ0NsYXNzUGVuZGluZycsXG59O1xuLyoqXG4gKiBEaXJlY3RpdmUgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIEFuZ3VsYXIgZm9ybSBjb250cm9scyB0aGF0IHNldHMgQ1NTIGNsYXNzZXNcbiAqIGJhc2VkIG9uIGNvbnRyb2wgc3RhdHVzICh2YWxpZC9pbnZhbGlkL2RpcnR5L2V0YykuXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgTmdDb250cm9sU3RhdHVzIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sU3RhdHVzIHtcbi8qKlxuICogQHBhcmFtIHs/fSBjZFxuICovXG5jb25zdHJ1Y3RvciggY2Q6IE5nQ29udHJvbCkgeyBzdXBlcihjZCk7IH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tzZWxlY3RvcjogJ1tmb3JtQ29udHJvbE5hbWVdLFtuZ01vZGVsXSxbZm9ybUNvbnRyb2xdJywgaG9zdDogbmdDb250cm9sU3RhdHVzSG9zdH0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogTmdDb250cm9sLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBTZWxmIH0sIF19LFxuXTtcbn1cblxuZnVuY3Rpb24gTmdDb250cm9sU3RhdHVzX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5OZ0NvbnRyb2xTdGF0dXMuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5OZ0NvbnRyb2xTdGF0dXMuY3RvclBhcmFtZXRlcnM7XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byBBbmd1bGFyIGZvcm0gZ3JvdXBzIHRoYXQgc2V0cyBDU1MgY2xhc3Nlc1xuICogYmFzZWQgb24gY29udHJvbCBzdGF0dXMgKHZhbGlkL2ludmFsaWQvZGlydHkvZXRjKS5cbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ0NvbnRyb2xTdGF0dXNHcm91cCBleHRlbmRzIEFic3RyYWN0Q29udHJvbFN0YXR1cyB7XG4vKipcbiAqIEBwYXJhbSB7P30gY2RcbiAqL1xuY29uc3RydWN0b3IoIGNkOiBDb250cm9sQ29udGFpbmVyKSB7IHN1cGVyKGNkKTsgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjpcbiAgICAgICdbZm9ybUdyb3VwTmFtZV0sW2Zvcm1BcnJheU5hbWVdLFtuZ01vZGVsR3JvdXBdLFtmb3JtR3JvdXBdLGZvcm06bm90KFtuZ05vRm9ybV0pLFtuZ0Zvcm1dJyxcbiAgaG9zdDogbmdDb250cm9sU3RhdHVzSG9zdFxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBTZWxmIH0sIF19LFxuXTtcbn1cblxuZnVuY3Rpb24gTmdDb250cm9sU3RhdHVzR3JvdXBfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbk5nQ29udHJvbFN0YXR1c0dyb3VwLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuTmdDb250cm9sU3RhdHVzR3JvdXAuY3RvclBhcmFtZXRlcnM7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL25nX2NvbnRyb2xfc3RhdHVzLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7Y29tcG9zZUFzeW5jVmFsaWRhdG9ycywgY29tcG9zZVZhbGlkYXRvcnN9IGZyb20gJy4vZGlyZWN0aXZlcy9zaGFyZWQnO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHt0b09ic2VydmFibGV9IGZyb20gJy4vdmFsaWRhdG9ycyc7XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyB2YWxpZCwgaS5lLiB0aGF0IG5vIGVycm9ycyBleGlzdCBpbiB0aGUgaW5wdXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIFZBTElEID0gJ1ZBTElEJztcblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBhIEZvcm1Db250cm9sIGlzIGludmFsaWQsIGkuZS4gdGhhdCBhbiBlcnJvciBleGlzdHMgaW4gdGhlIGlucHV0IHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBJTlZBTElEID0gJ0lOVkFMSUQnO1xuXG4vKipcbiAqIEluZGljYXRlcyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgcGVuZGluZywgaS5lLiB0aGF0IGFzeW5jIHZhbGlkYXRpb24gaXMgb2NjdXJyaW5nIGFuZFxuICogZXJyb3JzIGFyZSBub3QgeWV0IGF2YWlsYWJsZSBmb3IgdGhlIGlucHV0IHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBQRU5ESU5HID0gJ1BFTkRJTkcnO1xuXG4vKipcbiAqIEluZGljYXRlcyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgZGlzYWJsZWQsIGkuZS4gdGhhdCB0aGUgY29udHJvbCBpcyBleGVtcHQgZnJvbSBhbmNlc3RvclxuICogY2FsY3VsYXRpb25zIG9mIHZhbGlkaXR5IG9yIHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBESVNBQkxFRCA9ICdESVNBQkxFRCc7XG4vKipcbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHBhcmFtIHs/fSBwYXRoXG4gKiBAcGFyYW0gez99IGRlbGltaXRlclxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX2ZpbmQoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBwYXRoOiBBcnJheTxzdHJpbmd8bnVtYmVyPnwgc3RyaW5nLCBkZWxpbWl0ZXI6IHN0cmluZykge1xuICBpZiAocGF0aCA9PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICBpZiAoIShwYXRoIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgcGF0aCA9ICggLyoqIEB0eXBlIHs/fSAqLygoPHN0cmluZz5wYXRoKSkpLnNwbGl0KGRlbGltaXRlcik7XG4gIH1cbiAgaWYgKHBhdGggaW5zdGFuY2VvZiBBcnJheSAmJiAocGF0aC5sZW5ndGggPT09IDApKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKCAvKiogQHR5cGUgez99ICovKCg8QXJyYXk8c3RyaW5nfG51bWJlcj4+cGF0aCkpKS5yZWR1Y2UoKHYsIG5hbWUpID0+IHtcbiAgICBpZiAodiBpbnN0YW5jZW9mIEZvcm1Hcm91cCkge1xuICAgICAgcmV0dXJuIHYuY29udHJvbHNbbmFtZV0gfHwgbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodiBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xuICAgICAgcmV0dXJuIHYuYXQoIC8qKiBAdHlwZSB7P30gKi8oKDxudW1iZXI+bmFtZSkpKSB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9LCBjb250cm9sKTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIGNvZXJjZVRvVmFsaWRhdG9yKHZhbGlkYXRvcjogVmFsaWRhdG9yRm4gfCBWYWxpZGF0b3JGbltdKTogVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWxpZGF0b3IpID8gY29tcG9zZVZhbGlkYXRvcnModmFsaWRhdG9yKSA6IHZhbGlkYXRvcjtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvclxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gY29lcmNlVG9Bc3luY1ZhbGlkYXRvcihhc3luY1ZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3JGbiB8IEFzeW5jVmFsaWRhdG9yRm5bXSk6XG4gICAgQXN5bmNWYWxpZGF0b3JGbiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFzeW5jVmFsaWRhdG9yKSA/IGNvbXBvc2VBc3luY1ZhbGlkYXRvcnMoYXN5bmNWYWxpZGF0b3IpIDogYXN5bmNWYWxpZGF0b3I7XG59XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgVGhpcyBpcyB0aGUgYmFzZSBjbGFzcyBmb3Ige1xcQGxpbmsgRm9ybUNvbnRyb2x9LCB7XFxAbGluayBGb3JtR3JvdXB9LCBhbmRcbiAqIHtcXEBsaW5rIEZvcm1BcnJheX0uXG4gKiBcbiAqIEl0IHByb3ZpZGVzIHNvbWUgb2YgdGhlIHNoYXJlZCBiZWhhdmlvciB0aGF0IGFsbCBjb250cm9scyBhbmQgZ3JvdXBzIG9mIGNvbnRyb2xzIGhhdmUsIGxpa2VcbiAqIHJ1bm5pbmcgdmFsaWRhdG9ycywgY2FsY3VsYXRpbmcgc3RhdHVzLCBhbmQgcmVzZXR0aW5nIHN0YXRlLiBJdCBhbHNvIGRlZmluZXMgdGhlIHByb3BlcnRpZXNcbiAqIHRoYXQgYXJlIHNoYXJlZCBiZXR3ZWVuIGFsbCBzdWItY2xhc3NlcywgbGlrZSBgdmFsdWVgLCBgdmFsaWRgLCBhbmQgYGRpcnR5YC4gSXQgc2hvdWxkbid0IGJlXG4gKiBpbnN0YW50aWF0ZWQgZGlyZWN0bHkuXG4gKiBcbiAqIFxcQHN0YWJsZVxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdENvbnRyb2wge1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fdmFsdWU6IGFueTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX29uQ29sbGVjdGlvbkNoYW5nZSA9ICgpID0+IHt9O1xucHJpdmF0ZSBfdmFsdWVDaGFuZ2VzOiBFdmVudEVtaXR0ZXI8YW55PjtcbnByaXZhdGUgX3N0YXR1c0NoYW5nZXM6IEV2ZW50RW1pdHRlcjxhbnk+O1xucHJpdmF0ZSBfc3RhdHVzOiBzdHJpbmc7XG5wcml2YXRlIF9lcnJvcnM6IFZhbGlkYXRpb25FcnJvcnN8bnVsbDtcbnByaXZhdGUgX3ByaXN0aW5lOiBib29sZWFuID0gdHJ1ZTtcbnByaXZhdGUgX3RvdWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbnByaXZhdGUgX3BhcmVudDogRm9ybUdyb3VwfEZvcm1BcnJheTtcbnByaXZhdGUgX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbjogYW55O1xuLyoqXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvclxuICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvclxuICovXG5jb25zdHJ1Y3RvcihwdWJsaWMgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbixcbnB1YmxpYyBhc3luY1ZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3JGbikge31cbi8qKlxuICogVGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuLyoqXG4gKiBUaGUgcGFyZW50IGNvbnRyb2wuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcGFyZW50KCk6IEZvcm1Hcm91cHxGb3JtQXJyYXkgeyByZXR1cm4gdGhpcy5fcGFyZW50OyB9XG4vKipcbiAqIFRoZSB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbC4gVGhlcmUgYXJlIGZvdXIgcG9zc2libGVcbiAqIHZhbGlkYXRpb24gc3RhdHVzZXM6XG4gKiBcbiAqICogKipWQUxJRCoqOiAgY29udHJvbCBoYXMgcGFzc2VkIGFsbCB2YWxpZGF0aW9uIGNoZWNrc1xuICogKiAqKklOVkFMSUQqKjogY29udHJvbCBoYXMgZmFpbGVkIGF0IGxlYXN0IG9uZSB2YWxpZGF0aW9uIGNoZWNrXG4gKiAqICoqUEVORElORyoqOiBjb250cm9sIGlzIGluIHRoZSBtaWRzdCBvZiBjb25kdWN0aW5nIGEgdmFsaWRhdGlvbiBjaGVja1xuICogKiAqKkRJU0FCTEVEKio6IGNvbnRyb2wgaXMgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3NcbiAqIFxuICogVGhlc2Ugc3RhdHVzZXMgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSwgc28gYSBjb250cm9sIGNhbm5vdCBiZVxuICogYm90aCB2YWxpZCBBTkQgaW52YWxpZCBvciBpbnZhbGlkIEFORCBkaXNhYmxlZC5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBzdGF0dXMoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3N0YXR1czsgfVxuLyoqXG4gKiBBIGNvbnRyb2wgaXMgYHZhbGlkYCB3aGVuIGl0cyBgc3RhdHVzID09PSBWQUxJRGAuXG4gKiBcbiAqIEluIG9yZGVyIHRvIGhhdmUgdGhpcyBzdGF0dXMsIHRoZSBjb250cm9sIG11c3QgaGF2ZSBwYXNzZWQgYWxsIGl0c1xuICogdmFsaWRhdGlvbiBjaGVja3MuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdmFsaWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9zdGF0dXMgPT09IFZBTElEOyB9XG4vKipcbiAqIEEgY29udHJvbCBpcyBgaW52YWxpZGAgd2hlbiBpdHMgYHN0YXR1cyA9PT0gSU5WQUxJRGAuXG4gKiBcbiAqIEluIG9yZGVyIHRvIGhhdmUgdGhpcyBzdGF0dXMsIHRoZSBjb250cm9sIG11c3QgaGF2ZSBmYWlsZWRcbiAqIGF0IGxlYXN0IG9uZSBvZiBpdHMgdmFsaWRhdGlvbiBjaGVja3MuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgaW52YWxpZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PT0gSU5WQUxJRDsgfVxuLyoqXG4gKiBBIGNvbnRyb2wgaXMgYHBlbmRpbmdgIHdoZW4gaXRzIGBzdGF0dXMgPT09IFBFTkRJTkdgLlxuICogXG4gKiBJbiBvcmRlciB0byBoYXZlIHRoaXMgc3RhdHVzLCB0aGUgY29udHJvbCBtdXN0IGJlIGluIHRoZVxuICogbWlkZGxlIG9mIGNvbmR1Y3RpbmcgYSB2YWxpZGF0aW9uIGNoZWNrLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHBlbmRpbmcoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9zdGF0dXMgPT0gUEVORElORzsgfVxuLyoqXG4gKiBBIGNvbnRyb2wgaXMgYGRpc2FibGVkYCB3aGVuIGl0cyBgc3RhdHVzID09PSBESVNBQkxFRGAuXG4gKiBcbiAqIERpc2FibGVkIGNvbnRyb2xzIGFyZSBleGVtcHQgZnJvbSB2YWxpZGF0aW9uIGNoZWNrcyBhbmRcbiAqIGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiB0aGVpciBhbmNlc3RvclxuICogY29udHJvbHMuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9zdGF0dXMgPT09IERJU0FCTEVEOyB9XG4vKipcbiAqIEEgY29udHJvbCBpcyBgZW5hYmxlZGAgYXMgbG9uZyBhcyBpdHMgYHN0YXR1cyAhPT0gRElTQUJMRURgLlxuICogXG4gKiBJbiBvdGhlciB3b3JkcywgaXQgaGFzIGEgc3RhdHVzIG9mIGBWQUxJRGAsIGBJTlZBTElEYCwgb3JcbiAqIGBQRU5ESU5HYC5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBlbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc3RhdHVzICE9PSBESVNBQkxFRDsgfVxuLyoqXG4gKiBSZXR1cm5zIGFueSBlcnJvcnMgZ2VuZXJhdGVkIGJ5IGZhaWxpbmcgdmFsaWRhdGlvbi4gSWYgdGhlcmVcbiAqIGFyZSBubyBlcnJvcnMsIGl0IHdpbGwgcmV0dXJuIG51bGwuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgZXJyb3JzKCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7IHJldHVybiB0aGlzLl9lcnJvcnM7IH1cbi8qKlxuICogQSBjb250cm9sIGlzIGBwcmlzdGluZWAgaWYgdGhlIHVzZXIgaGFzIG5vdCB5ZXQgY2hhbmdlZFxuICogdGhlIHZhbHVlIGluIHRoZSBVSS5cbiAqIFxuICogTm90ZSB0aGF0IHByb2dyYW1tYXRpYyBjaGFuZ2VzIHRvIGEgY29udHJvbCdzIHZhbHVlIHdpbGxcbiAqICpub3QqIG1hcmsgaXQgZGlydHkuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcHJpc3RpbmUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9wcmlzdGluZTsgfVxuLyoqXG4gKiBBIGNvbnRyb2wgaXMgYGRpcnR5YCBpZiB0aGUgdXNlciBoYXMgY2hhbmdlZCB0aGUgdmFsdWVcbiAqIGluIHRoZSBVSS5cbiAqIFxuICogTm90ZSB0aGF0IHByb2dyYW1tYXRpYyBjaGFuZ2VzIHRvIGEgY29udHJvbCdzIHZhbHVlIHdpbGxcbiAqICpub3QqIG1hcmsgaXQgZGlydHkuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgZGlydHkoKTogYm9vbGVhbiB7IHJldHVybiAhdGhpcy5wcmlzdGluZTsgfVxuLyoqXG4gKiBBIGNvbnRyb2wgaXMgbWFya2VkIGB0b3VjaGVkYCBvbmNlIHRoZSB1c2VyIGhhcyB0cmlnZ2VyZWRcbiAqIGEgYGJsdXJgIGV2ZW50IG9uIGl0LlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl90b3VjaGVkOyB9XG4vKipcbiAqIEEgY29udHJvbCBpcyBgdW50b3VjaGVkYCBpZiB0aGUgdXNlciBoYXMgbm90IHlldCB0cmlnZ2VyZWRcbiAqIGEgYGJsdXJgIGV2ZW50IG9uIGl0LlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHVudG91Y2hlZCgpOiBib29sZWFuIHsgcmV0dXJuICF0aGlzLl90b3VjaGVkOyB9XG4vKipcbiAqIEVtaXRzIGFuIGV2ZW50IGV2ZXJ5IHRpbWUgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sIGNoYW5nZXMsIGluXG4gKiB0aGUgVUkgb3IgcHJvZ3JhbW1hdGljYWxseS5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB2YWx1ZUNoYW5nZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIHRoaXMuX3ZhbHVlQ2hhbmdlczsgfVxuLyoqXG4gKiBFbWl0cyBhbiBldmVudCBldmVyeSB0aW1lIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbFxuICogaXMgcmUtY2FsY3VsYXRlZC5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBzdGF0dXNDaGFuZ2VzKCk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB0aGlzLl9zdGF0dXNDaGFuZ2VzOyB9XG4vKipcbiAqIFNldHMgdGhlIHN5bmNocm9ub3VzIHZhbGlkYXRvcnMgdGhhdCBhcmUgYWN0aXZlIG9uIHRoaXMgY29udHJvbC4gIENhbGxpbmdcbiAqIHRoaXMgd2lsbCBvdmVyd3JpdGUgYW55IGV4aXN0aW5nIHN5bmMgdmFsaWRhdG9ycy5cbiAqIEBwYXJhbSB7P30gbmV3VmFsaWRhdG9yXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXRWYWxpZGF0b3JzKG5ld1ZhbGlkYXRvcjogVmFsaWRhdG9yRm58VmFsaWRhdG9yRm5bXSk6IHZvaWQge1xuICAgIHRoaXMudmFsaWRhdG9yID0gY29lcmNlVG9WYWxpZGF0b3IobmV3VmFsaWRhdG9yKTtcbiAgfVxuLyoqXG4gKiBTZXRzIHRoZSBhc3luYyB2YWxpZGF0b3JzIHRoYXQgYXJlIGFjdGl2ZSBvbiB0aGlzIGNvbnRyb2wuIENhbGxpbmcgdGhpc1xuICogd2lsbCBvdmVyd3JpdGUgYW55IGV4aXN0aW5nIGFzeW5jIHZhbGlkYXRvcnMuXG4gKiBAcGFyYW0gez99IG5ld1ZhbGlkYXRvclxuICogQHJldHVybiB7P31cbiAqL1xuc2V0QXN5bmNWYWxpZGF0b3JzKG5ld1ZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3JGbnxBc3luY1ZhbGlkYXRvckZuW10pOiB2b2lkIHtcbiAgICB0aGlzLmFzeW5jVmFsaWRhdG9yID0gY29lcmNlVG9Bc3luY1ZhbGlkYXRvcihuZXdWYWxpZGF0b3IpO1xuICB9XG4vKipcbiAqIEVtcHRpZXMgb3V0IHRoZSBzeW5jIHZhbGlkYXRvciBsaXN0LlxuICogQHJldHVybiB7P31cbiAqL1xuY2xlYXJWYWxpZGF0b3JzKCk6IHZvaWQgeyB0aGlzLnZhbGlkYXRvciA9IG51bGw7IH1cbi8qKlxuICogRW1wdGllcyBvdXQgdGhlIGFzeW5jIHZhbGlkYXRvciBsaXN0LlxuICogQHJldHVybiB7P31cbiAqL1xuY2xlYXJBc3luY1ZhbGlkYXRvcnMoKTogdm9pZCB7IHRoaXMuYXN5bmNWYWxpZGF0b3IgPSBudWxsOyB9XG4vKipcbiAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGB0b3VjaGVkYC5cbiAqIFxuICogVGhpcyB3aWxsIGFsc28gbWFyayBhbGwgZGlyZWN0IGFuY2VzdG9ycyBhcyBgdG91Y2hlZGAgdG8gbWFpbnRhaW5cbiAqIHRoZSBtb2RlbC5cbiAqIEBwYXJhbSB7Pz19IF9fMFxuICogQHJldHVybiB7P31cbiAqL1xubWFya0FzVG91Y2hlZCh7b25seVNlbGZ9OiB7b25seVNlbGY/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fdG91Y2hlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgdGhpcy5fcGFyZW50Lm1hcmtBc1RvdWNoZWQoe29ubHlTZWxmfSk7XG4gICAgfVxuICB9XG4vKipcbiAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGB1bnRvdWNoZWRgLlxuICogXG4gKiBJZiB0aGUgY29udHJvbCBoYXMgYW55IGNoaWxkcmVuLCBpdCB3aWxsIGFsc28gbWFyayBhbGwgY2hpbGRyZW4gYXMgYHVudG91Y2hlZGBcbiAqIHRvIG1haW50YWluIHRoZSBtb2RlbCwgYW5kIHJlLWNhbGN1bGF0ZSB0aGUgYHRvdWNoZWRgIHN0YXR1cyBvZiBhbGwgcGFyZW50XG4gKiBjb250cm9scy5cbiAqIEBwYXJhbSB7Pz19IF9fMFxuICogQHJldHVybiB7P31cbiAqL1xubWFya0FzVW50b3VjaGVkKHtvbmx5U2VsZn06IHtvbmx5U2VsZj86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLl90b3VjaGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoXG4gICAgICAgIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IHsgY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoe29ubHlTZWxmOiB0cnVlfSk7IH0pO1xuXG4gICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlVG91Y2hlZCh7b25seVNlbGZ9KTtcbiAgICB9XG4gIH1cbi8qKlxuICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYGRpcnR5YC5cbiAqIFxuICogVGhpcyB3aWxsIGFsc28gbWFyayBhbGwgZGlyZWN0IGFuY2VzdG9ycyBhcyBgZGlydHlgIHRvIG1haW50YWluXG4gKiB0aGUgbW9kZWwuXG4gKiBAcGFyYW0gez89fSBfXzBcbiAqIEByZXR1cm4gez99XG4gKi9cbm1hcmtBc0RpcnR5KHtvbmx5U2VsZn06IHtvbmx5U2VsZj86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9wcmlzdGluZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5tYXJrQXNEaXJ0eSh7b25seVNlbGZ9KTtcbiAgICB9XG4gIH1cbi8qKlxuICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYHByaXN0aW5lYC5cbiAqIFxuICogSWYgdGhlIGNvbnRyb2wgaGFzIGFueSBjaGlsZHJlbiwgaXQgd2lsbCBhbHNvIG1hcmsgYWxsIGNoaWxkcmVuIGFzIGBwcmlzdGluZWBcbiAqIHRvIG1haW50YWluIHRoZSBtb2RlbCwgYW5kIHJlLWNhbGN1bGF0ZSB0aGUgYHByaXN0aW5lYCBzdGF0dXMgb2YgYWxsIHBhcmVudFxuICogY29udHJvbHMuXG4gKiBAcGFyYW0gez89fSBfXzBcbiAqIEByZXR1cm4gez99XG4gKi9cbm1hcmtBc1ByaXN0aW5lKHtvbmx5U2VsZn06IHtvbmx5U2VsZj86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9wcmlzdGluZSA9IHRydWU7XG5cbiAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4geyBjb250cm9sLm1hcmtBc1ByaXN0aW5lKHtvbmx5U2VsZjogdHJ1ZX0pOyB9KTtcblxuICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVByaXN0aW5lKHtvbmx5U2VsZn0pO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgcGVuZGluZ2AuXG4gKiBAcGFyYW0gez89fSBfXzBcbiAqIEByZXR1cm4gez99XG4gKi9cbm1hcmtBc1BlbmRpbmcoe29ubHlTZWxmfToge29ubHlTZWxmPzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXR1cyA9IFBFTkRJTkc7XG5cbiAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgdGhpcy5fcGFyZW50Lm1hcmtBc1BlbmRpbmcoe29ubHlTZWxmfSk7XG4gICAgfVxuICB9XG4vKipcbiAqIERpc2FibGVzIHRoZSBjb250cm9sLiBUaGlzIG1lYW5zIHRoZSBjb250cm9sIHdpbGwgYmUgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3MgYW5kXG4gKiBleGNsdWRlZCBmcm9tIHRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgYW55IHBhcmVudC4gSXRzIHN0YXR1cyBpcyBgRElTQUJMRURgLlxuICogXG4gKiBJZiB0aGUgY29udHJvbCBoYXMgY2hpbGRyZW4sIGFsbCBjaGlsZHJlbiB3aWxsIGJlIGRpc2FibGVkIHRvIG1haW50YWluIHRoZSBtb2RlbC5cbiAqIEBwYXJhbSB7Pz19IF9fMFxuICogQHJldHVybiB7P31cbiAqL1xuZGlzYWJsZSh7b25seVNlbGYsIGVtaXRFdmVudH06IHtvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9zdGF0dXMgPSBESVNBQkxFRDtcbiAgICB0aGlzLl9lcnJvcnMgPSBudWxsO1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7IGNvbnRyb2wuZGlzYWJsZSh7b25seVNlbGY6IHRydWV9KTsgfSk7XG4gICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcblxuICAgIGlmIChlbWl0RXZlbnQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl92YWx1ZUNoYW5nZXMuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgICB0aGlzLl9zdGF0dXNDaGFuZ2VzLmVtaXQodGhpcy5fc3RhdHVzKTtcbiAgICB9XG5cbiAgICB0aGlzLl91cGRhdGVBbmNlc3RvcnMob25seVNlbGYpO1xuICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UuZm9yRWFjaCgoY2hhbmdlRm4pID0+IGNoYW5nZUZuKHRydWUpKTtcbiAgfVxuLyoqXG4gKiBFbmFibGVzIHRoZSBjb250cm9sLiBUaGlzIG1lYW5zIHRoZSBjb250cm9sIHdpbGwgYmUgaW5jbHVkZWQgaW4gdmFsaWRhdGlvbiBjaGVja3MgYW5kXG4gKiB0aGUgYWdncmVnYXRlIHZhbHVlIG9mIGl0cyBwYXJlbnQuIEl0cyBzdGF0dXMgaXMgcmUtY2FsY3VsYXRlZCBiYXNlZCBvbiBpdHMgdmFsdWUgYW5kXG4gKiBpdHMgdmFsaWRhdG9ycy5cbiAqIFxuICogSWYgdGhlIGNvbnRyb2wgaGFzIGNoaWxkcmVuLCBhbGwgY2hpbGRyZW4gd2lsbCBiZSBlbmFibGVkLlxuICogQHBhcmFtIHs/PX0gX18wXG4gKiBAcmV0dXJuIHs/fVxuICovXG5lbmFibGUoe29ubHlTZWxmLCBlbWl0RXZlbnR9OiB7b25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fc3RhdHVzID0gVkFMSUQ7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IHsgY29udHJvbC5lbmFibGUoe29ubHlTZWxmOiB0cnVlfSk7IH0pO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudH0pO1xuXG4gICAgdGhpcy5fdXBkYXRlQW5jZXN0b3JzKG9ubHlTZWxmKTtcbiAgICB0aGlzLl9vbkRpc2FibGVkQ2hhbmdlLmZvckVhY2goKGNoYW5nZUZuKSA9PiBjaGFuZ2VGbihmYWxzZSkpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gb25seVNlbGZcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX3VwZGF0ZUFuY2VzdG9ycyhvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICB0aGlzLl9wYXJlbnQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVQcmlzdGluZSgpO1xuICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVUb3VjaGVkKCk7XG4gICAgfVxuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gcGFyZW50XG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXRQYXJlbnQocGFyZW50OiBGb3JtR3JvdXB8Rm9ybUFycmF5KTogdm9pZCB7IHRoaXMuX3BhcmVudCA9IHBhcmVudDsgfVxuLyoqXG4gKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbC4gQWJzdHJhY3QgbWV0aG9kIChpbXBsZW1lbnRlZCBpbiBzdWItY2xhc3NlcykuXG4gKiBAYWJzdHJhY3RcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldFZhbHVlKHZhbHVlOiBhbnksIG9wdGlvbnM/OiBPYmplY3QpIHt9XG4vKipcbiAqIFBhdGNoZXMgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLiBBYnN0cmFjdCBtZXRob2QgKGltcGxlbWVudGVkIGluIHN1Yi1jbGFzc2VzKS5cbiAqIEBhYnN0cmFjdFxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICogQHJldHVybiB7P31cbiAqL1xucGF0Y2hWYWx1ZSh2YWx1ZTogYW55LCBvcHRpb25zPzogT2JqZWN0KSB7fVxuLyoqXG4gKiBSZXNldHMgdGhlIGNvbnRyb2wuIEFic3RyYWN0IG1ldGhvZCAoaW1wbGVtZW50ZWQgaW4gc3ViLWNsYXNzZXMpLlxuICogQGFic3RyYWN0XG4gKiBAcGFyYW0gez89fSB2YWx1ZVxuICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICogQHJldHVybiB7P31cbiAqL1xucmVzZXQodmFsdWU/OiBhbnksIG9wdGlvbnM/OiBPYmplY3QpIHt9XG4vKipcbiAqIFJlLWNhbGN1bGF0ZXMgdGhlIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbC5cbiAqIFxuICogQnkgZGVmYXVsdCwgaXQgd2lsbCBhbHNvIHVwZGF0ZSB0aGUgdmFsdWUgYW5kIHZhbGlkaXR5IG9mIGl0cyBhbmNlc3RvcnMuXG4gKiBAcGFyYW0gez89fSBfXzBcbiAqIEByZXR1cm4gez99XG4gKi9cbnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmLCBlbWl0RXZlbnR9OiB7b25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFufSA9IHt9KTpcbiAgICAgIHZvaWQge1xuICAgIHRoaXMuX3NldEluaXRpYWxTdGF0dXMoKTtcbiAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xuXG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgdGhpcy5fY2FuY2VsRXhpc3RpbmdTdWJzY3JpcHRpb24oKTtcbiAgICAgIHRoaXMuX2Vycm9ycyA9IHRoaXMuX3J1blZhbGlkYXRvcigpO1xuICAgICAgdGhpcy5fc3RhdHVzID0gdGhpcy5fY2FsY3VsYXRlU3RhdHVzKCk7XG5cbiAgICAgIGlmICh0aGlzLl9zdGF0dXMgPT09IFZBTElEIHx8IHRoaXMuX3N0YXR1cyA9PT0gUEVORElORykge1xuICAgICAgICB0aGlzLl9ydW5Bc3luY1ZhbGlkYXRvcihlbWl0RXZlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbWl0RXZlbnQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl92YWx1ZUNoYW5nZXMuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgICB0aGlzLl9zdGF0dXNDaGFuZ2VzLmVtaXQodGhpcy5fc3RhdHVzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgdGhpcy5fcGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmLCBlbWl0RXZlbnR9KTtcbiAgICB9XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7Pz19IF9fMFxuICogQHJldHVybiB7P31cbiAqL1xuX3VwZGF0ZVRyZWVWYWxpZGl0eSh7ZW1pdEV2ZW50fToge2VtaXRFdmVudD86IGJvb2xlYW59ID0ge2VtaXRFdmVudDogdHJ1ZX0pIHtcbiAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoKGN0cmw6IEFic3RyYWN0Q29udHJvbCkgPT4gY3RybC5fdXBkYXRlVHJlZVZhbGlkaXR5KHtlbWl0RXZlbnR9KSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50fSk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfc2V0SW5pdGlhbFN0YXR1cygpIHsgdGhpcy5fc3RhdHVzID0gdGhpcy5fYWxsQ29udHJvbHNEaXNhYmxlZCgpID8gRElTQUJMRUQgOiBWQUxJRDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9ydW5WYWxpZGF0b3IoKTogVmFsaWRhdGlvbkVycm9yc3xudWxsIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IgPyB0aGlzLnZhbGlkYXRvcih0aGlzKSA6IG51bGw7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBlbWl0RXZlbnRcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX3J1bkFzeW5jVmFsaWRhdG9yKGVtaXRFdmVudDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmFzeW5jVmFsaWRhdG9yKSB7XG4gICAgICB0aGlzLl9zdGF0dXMgPSBQRU5ESU5HO1xuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBvYnMgPSB0b09ic2VydmFibGUodGhpcy5hc3luY1ZhbGlkYXRvcih0aGlzKSk7XG4gICAgICB0aGlzLl9hc3luY1ZhbGlkYXRpb25TdWJzY3JpcHRpb24gPVxuICAgICAgICAgIG9icy5zdWJzY3JpYmUoKGVycm9yczogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpID0+IHRoaXMuc2V0RXJyb3JzKGVycm9ycywge2VtaXRFdmVudH0pKTtcbiAgICB9XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfY2FuY2VsRXhpc3RpbmdTdWJzY3JpcHRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4vKipcbiAqIFNldHMgZXJyb3JzIG9uIGEgZm9ybSBjb250cm9sLlxuICogXG4gKiBUaGlzIGlzIHVzZWQgd2hlbiB2YWxpZGF0aW9ucyBhcmUgcnVuIG1hbnVhbGx5IGJ5IHRoZSB1c2VyLCByYXRoZXIgdGhhbiBhdXRvbWF0aWNhbGx5LlxuICogXG4gKiBDYWxsaW5nIGBzZXRFcnJvcnNgIHdpbGwgYWxzbyB1cGRhdGUgdGhlIHZhbGlkaXR5IG9mIHRoZSBwYXJlbnQgY29udHJvbC5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICogYGBgXG4gKiBjb25zdCBsb2dpbiA9IG5ldyBGb3JtQ29udHJvbChcInNvbWVMb2dpblwiKTtcbiAqIGxvZ2luLnNldEVycm9ycyh7XG4gKiAgIFwibm90VW5pcXVlXCI6IHRydWVcbiAqIH0pO1xuICogXG4gKiBleHBlY3QobG9naW4udmFsaWQpLnRvRXF1YWwoZmFsc2UpO1xuICogZXhwZWN0KGxvZ2luLmVycm9ycykudG9FcXVhbCh7XCJub3RVbmlxdWVcIjogdHJ1ZX0pO1xuICogXG4gKiBsb2dpbi5zZXRWYWx1ZShcInNvbWVPdGhlckxvZ2luXCIpO1xuICogXG4gKiBleHBlY3QobG9naW4udmFsaWQpLnRvRXF1YWwodHJ1ZSk7XG4gKiBgYGBcbiAqIEBwYXJhbSB7P30gZXJyb3JzXG4gKiBAcGFyYW0gez89fSBfXzFcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldEVycm9ycyhlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCwge2VtaXRFdmVudH06IHtlbWl0RXZlbnQ/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMuX3VwZGF0ZUNvbnRyb2xzRXJyb3JzKGVtaXRFdmVudCAhPT0gZmFsc2UpO1xuICB9XG4vKipcbiAqIFJldHJpZXZlcyBhIGNoaWxkIGNvbnRyb2wgZ2l2ZW4gdGhlIGNvbnRyb2wncyBuYW1lIG9yIHBhdGguXG4gKiBcbiAqIFBhdGhzIGNhbiBiZSBwYXNzZWQgaW4gYXMgYW4gYXJyYXkgb3IgYSBzdHJpbmcgZGVsaW1pdGVkIGJ5IGEgZG90LlxuICogXG4gKiBUbyBnZXQgYSBjb250cm9sIG5lc3RlZCB3aXRoaW4gYSBgcGVyc29uYCBzdWItZ3JvdXA6XG4gKiBcbiAqICogYHRoaXMuZm9ybS5nZXQoJ3BlcnNvbi5uYW1lJyk7YFxuICogXG4gKiAtT1ItXG4gKiBcbiAqICogYHRoaXMuZm9ybS5nZXQoWydwZXJzb24nLCAnbmFtZSddKTtgXG4gKiBAcGFyYW0gez99IHBhdGhcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldChwYXRoOiBBcnJheTxzdHJpbmd8bnVtYmVyPnxzdHJpbmcpOiBBYnN0cmFjdENvbnRyb2wgeyByZXR1cm4gX2ZpbmQodGhpcywgcGF0aCwgJy4nKTsgfVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbnRyb2wgd2l0aCB0aGUgZ2l2ZW4gcGF0aCBoYXMgdGhlIGVycm9yIHNwZWNpZmllZC4gT3RoZXJ3aXNlXG4gKiByZXR1cm5zIG51bGwgb3IgdW5kZWZpbmVkLlxuICogXG4gKiBJZiBubyBwYXRoIGlzIGdpdmVuLCBpdCBjaGVja3MgZm9yIHRoZSBlcnJvciBvbiB0aGUgcHJlc2VudCBjb250cm9sLlxuICogQHBhcmFtIHs/fSBlcnJvckNvZGVcbiAqIEBwYXJhbSB7Pz19IHBhdGhcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldEVycm9yKGVycm9yQ29kZTogc3RyaW5nLCBwYXRoOiBzdHJpbmdbXSA9IG51bGwpOiBhbnkge1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY29udHJvbCA9IHBhdGggPyB0aGlzLmdldChwYXRoKSA6IHRoaXM7XG4gICAgcmV0dXJuIGNvbnRyb2wgJiYgY29udHJvbC5fZXJyb3JzID8gY29udHJvbC5fZXJyb3JzW2Vycm9yQ29kZV0gOiBudWxsO1xuICB9XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY29udHJvbCB3aXRoIHRoZSBnaXZlbiBwYXRoIGhhcyB0aGUgZXJyb3Igc3BlY2lmaWVkLiBPdGhlcndpc2VcbiAqIHJldHVybnMgZmFsc2UuXG4gKiBcbiAqIElmIG5vIHBhdGggaXMgZ2l2ZW4sIGl0IGNoZWNrcyBmb3IgdGhlIGVycm9yIG9uIHRoZSBwcmVzZW50IGNvbnRyb2wuXG4gKiBAcGFyYW0gez99IGVycm9yQ29kZVxuICogQHBhcmFtIHs/PX0gcGF0aFxuICogQHJldHVybiB7P31cbiAqL1xuaGFzRXJyb3IoZXJyb3JDb2RlOiBzdHJpbmcsIHBhdGg6IHN0cmluZ1tdID0gbnVsbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0RXJyb3IoZXJyb3JDb2RlLCBwYXRoKTtcbiAgfVxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHRvcC1sZXZlbCBhbmNlc3RvciBvZiB0aGlzIGNvbnRyb2wuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcm9vdCgpOiBBYnN0cmFjdENvbnRyb2wge1xuICAgIGxldCAvKiogQHR5cGUgez99ICovIHg6IEFic3RyYWN0Q29udHJvbCA9IHRoaXM7XG5cbiAgICB3aGlsZSAoeC5fcGFyZW50KSB7XG4gICAgICB4ID0geC5fcGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiB4O1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IGVtaXRFdmVudFxuICogQHJldHVybiB7P31cbiAqL1xuX3VwZGF0ZUNvbnRyb2xzRXJyb3JzKGVtaXRFdmVudDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3N0YXR1cyA9IHRoaXMuX2NhbGN1bGF0ZVN0YXR1cygpO1xuXG4gICAgaWYgKGVtaXRFdmVudCkge1xuICAgICAgdGhpcy5fc3RhdHVzQ2hhbmdlcy5lbWl0KHRoaXMuX3N0YXR1cyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVDb250cm9sc0Vycm9ycyhlbWl0RXZlbnQpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX2luaXRPYnNlcnZhYmxlcygpIHtcbiAgICB0aGlzLl92YWx1ZUNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5fc3RhdHVzQ2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9jYWxjdWxhdGVTdGF0dXMoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5fYWxsQ29udHJvbHNEaXNhYmxlZCgpKSByZXR1cm4gRElTQUJMRUQ7XG4gICAgaWYgKHRoaXMuX2Vycm9ycykgcmV0dXJuIElOVkFMSUQ7XG4gICAgaWYgKHRoaXMuX2FueUNvbnRyb2xzSGF2ZVN0YXR1cyhQRU5ESU5HKSkgcmV0dXJuIFBFTkRJTkc7XG4gICAgaWYgKHRoaXMuX2FueUNvbnRyb2xzSGF2ZVN0YXR1cyhJTlZBTElEKSkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIFZBTElEO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAYWJzdHJhY3RcbiAqIEByZXR1cm4gez99XG4gKi9cbl91cGRhdGVWYWx1ZSgpIHt9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAYWJzdHJhY3RcbiAqIEBwYXJhbSB7P30gY2JcbiAqIEByZXR1cm4gez99XG4gKi9cbl9mb3JFYWNoQ2hpbGQoY2I6IEZ1bmN0aW9uKSB7fVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQGFic3RyYWN0XG4gKiBAcGFyYW0gez99IGNvbmRpdGlvblxuICogQHJldHVybiB7P31cbiAqL1xuX2FueUNvbnRyb2xzKGNvbmRpdGlvbjogRnVuY3Rpb24pIHt9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAYWJzdHJhY3RcbiAqIEByZXR1cm4gez99XG4gKi9cbl9hbGxDb250cm9sc0Rpc2FibGVkKCkge31cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gc3RhdHVzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fYW55Q29udHJvbHNIYXZlU3RhdHVzKHN0YXR1czogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FueUNvbnRyb2xzKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IGNvbnRyb2wuc3RhdHVzID09PSBzdGF0dXMpO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fYW55Q29udHJvbHNEaXJ0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYW55Q29udHJvbHMoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4gY29udHJvbC5kaXJ0eSk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl9hbnlDb250cm9sc1RvdWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FueUNvbnRyb2xzKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IGNvbnRyb2wudG91Y2hlZCk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7Pz19IF9fMFxuICogQHJldHVybiB7P31cbiAqL1xuX3VwZGF0ZVByaXN0aW5lKHtvbmx5U2VsZn06IHtvbmx5U2VsZj86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9wcmlzdGluZSA9ICF0aGlzLl9hbnlDb250cm9sc0RpcnR5KCk7XG5cbiAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVQcmlzdGluZSh7b25seVNlbGZ9KTtcbiAgICB9XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7Pz19IF9fMFxuICogQHJldHVybiB7P31cbiAqL1xuX3VwZGF0ZVRvdWNoZWQoe29ubHlTZWxmfToge29ubHlTZWxmPzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX3RvdWNoZWQgPSB0aGlzLl9hbnlDb250cm9sc1RvdWNoZWQoKTtcblxuICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVRvdWNoZWQoe29ubHlTZWxmfSk7XG4gICAgfVxuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9vbkRpc2FibGVkQ2hhbmdlOiBGdW5jdGlvbltdID0gW107XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IGZvcm1TdGF0ZVxuICogQHJldHVybiB7P31cbiAqL1xuX2lzQm94ZWRWYWx1ZShmb3JtU3RhdGU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgZm9ybVN0YXRlID09PSAnb2JqZWN0JyAmJiBmb3JtU3RhdGUgIT09IG51bGwgJiZcbiAgICAgICAgT2JqZWN0LmtleXMoZm9ybVN0YXRlKS5sZW5ndGggPT09IDIgJiYgJ3ZhbHVlJyBpbiBmb3JtU3RhdGUgJiYgJ2Rpc2FibGVkJyBpbiBmb3JtU3RhdGU7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UgPSBmbjsgfVxufVxuXG5mdW5jdGlvbiBBYnN0cmFjdENvbnRyb2xfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5BYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl92YWx1ZTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5BYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9vbkNvbGxlY3Rpb25DaGFuZ2U7XG4vKiogQHR5cGUgez99ICovXG5BYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl92YWx1ZUNoYW5nZXM7XG4vKiogQHR5cGUgez99ICovXG5BYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9zdGF0dXNDaGFuZ2VzO1xuLyoqIEB0eXBlIHs/fSAqL1xuQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fc3RhdHVzO1xuLyoqIEB0eXBlIHs/fSAqL1xuQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fZXJyb3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fcHJpc3RpbmU7XG4vKiogQHR5cGUgez99ICovXG5BYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl90b3VjaGVkO1xuLyoqIEB0eXBlIHs/fSAqL1xuQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fcGFyZW50O1xuLyoqIEB0eXBlIHs/fSAqL1xuQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbkFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX29uRGlzYWJsZWRDaGFuZ2U7XG4vKiogQHR5cGUgez99ICovXG5BYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnZhbGlkYXRvcjtcbi8qKiBAdHlwZSB7P30gKi9cbkFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuYXN5bmNWYWxpZGF0b3I7XG59XG5cbi8qKlxuICogXFxAd2hhdEl0RG9lcyBUcmFja3MgdGhlIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXR1cyBvZiBhbiBpbmRpdmlkdWFsIGZvcm0gY29udHJvbC5cbiAqIFxuICogSXQgaXMgb25lIG9mIHRoZSB0aHJlZSBmdW5kYW1lbnRhbCBidWlsZGluZyBibG9ja3Mgb2YgQW5ndWxhciBmb3JtcywgYWxvbmcgd2l0aFxuICoge1xcQGxpbmsgRm9ybUdyb3VwfSBhbmQge1xcQGxpbmsgRm9ybUFycmF5fS5cbiAqIFxuICogXFxAaG93VG9Vc2UgXG4gKiBcbiAqIFdoZW4gaW5zdGFudGlhdGluZyBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSwgeW91IGNhbiBwYXNzIGluIGFuIGluaXRpYWwgdmFsdWUgYXMgdGhlXG4gKiBmaXJzdCBhcmd1bWVudC4gRXhhbXBsZTpcbiAqIFxuICogYGBgdHNcbiAqIGNvbnN0IGN0cmwgPSBuZXcgRm9ybUNvbnRyb2woJ3NvbWUgdmFsdWUnKTtcbiAqIGNvbnNvbGUubG9nKGN0cmwudmFsdWUpOyAgICAgLy8gJ3NvbWUgdmFsdWUnXG4gKiBgYGBcbiAqIFxuICogWW91IGNhbiBhbHNvIGluaXRpYWxpemUgdGhlIGNvbnRyb2wgd2l0aCBhIGZvcm0gc3RhdGUgb2JqZWN0IG9uIGluc3RhbnRpYXRpb24sXG4gKiB3aGljaCBpbmNsdWRlcyBib3RoIHRoZSB2YWx1ZSBhbmQgd2hldGhlciBvciBub3QgdGhlIGNvbnRyb2wgaXMgZGlzYWJsZWQuXG4gKiBZb3UgY2FuJ3QgdXNlIHRoZSB2YWx1ZSBrZXkgd2l0aG91dCB0aGUgZGlzYWJsZWQga2V5OyBib3RoIGFyZSByZXF1aXJlZFxuICogdG8gdXNlIHRoaXMgd2F5IG9mIGluaXRpYWxpemF0aW9uLlxuICogXG4gKiBgYGB0c1xuICogY29uc3QgY3RybCA9IG5ldyBGb3JtQ29udHJvbCh7dmFsdWU6ICduL2EnLCBkaXNhYmxlZDogdHJ1ZX0pO1xuICogY29uc29sZS5sb2coY3RybC52YWx1ZSk7ICAgICAvLyAnbi9hJ1xuICogY29uc29sZS5sb2coY3RybC5zdGF0dXMpOyAgIC8vICdESVNBQkxFRCdcbiAqIGBgYFxuICogXG4gKiBUbyBpbmNsdWRlIGEgc3luYyB2YWxpZGF0b3IgKG9yIGFuIGFycmF5IG9mIHN5bmMgdmFsaWRhdG9ycykgd2l0aCB0aGUgY29udHJvbCxcbiAqIHBhc3MgaXQgaW4gYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gQXN5bmMgdmFsaWRhdG9ycyBhcmUgYWxzbyBzdXBwb3J0ZWQsIGJ1dFxuICogaGF2ZSB0byBiZSBwYXNzZWQgaW4gc2VwYXJhdGVseSBhcyB0aGUgdGhpcmQgYXJnLlxuICogXG4gKiBgYGB0c1xuICogY29uc3QgY3RybCA9IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gKiBjb25zb2xlLmxvZyhjdHJsLnZhbHVlKTsgICAgIC8vICcnXG4gKiBjb25zb2xlLmxvZyhjdHJsLnN0YXR1cyk7ICAgLy8gJ0lOVkFMSUQnXG4gKiBgYGBcbiAqIFxuICogU2VlIGl0cyBzdXBlcmNsYXNzLCB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9LCBmb3IgbW9yZSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICogXG4gKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2wgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2wge1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fb25DaGFuZ2U6IEZ1bmN0aW9uW10gPSBbXTtcbi8qKlxuICogQHBhcmFtIHs/PX0gZm9ybVN0YXRlXG4gKiBAcGFyYW0gez89fSB2YWxpZGF0b3JcbiAqIEBwYXJhbSB7Pz19IGFzeW5jVmFsaWRhdG9yXG4gKi9cbmNvbnN0cnVjdG9yKFxuICAgICAgZm9ybVN0YXRlOiBhbnkgPSBudWxsLCB2YWxpZGF0b3I6IFZhbGlkYXRvckZufFZhbGlkYXRvckZuW10gPSBudWxsLFxuICAgICAgYXN5bmNWYWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yRm58QXN5bmNWYWxpZGF0b3JGbltdID0gbnVsbCkge1xuICAgIHN1cGVyKGNvZXJjZVRvVmFsaWRhdG9yKHZhbGlkYXRvciksIGNvZXJjZVRvQXN5bmNWYWxpZGF0b3IoYXN5bmNWYWxpZGF0b3IpKTtcbiAgICB0aGlzLl9hcHBseUZvcm1TdGF0ZShmb3JtU3RhdGUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2V9KTtcbiAgICB0aGlzLl9pbml0T2JzZXJ2YWJsZXMoKTtcbiAgfVxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlIG9mIHRoZSBmb3JtIGNvbnRyb2wgdG8gYHZhbHVlYC5cbiAqIFxuICogSWYgYG9ubHlTZWxmYCBpcyBgdHJ1ZWAsIHRoaXMgY2hhbmdlIHdpbGwgb25seSBhZmZlY3QgdGhlIHZhbGlkYXRpb24gb2YgdGhpcyBgRm9ybUNvbnRyb2xgXG4gKiBhbmQgbm90IGl0cyBwYXJlbnQgY29tcG9uZW50LiBUaGlzIGRlZmF1bHRzIHRvIGZhbHNlLlxuICogXG4gKiBJZiBgZW1pdEV2ZW50YCBpcyBgdHJ1ZWAsIHRoaXNcbiAqIGNoYW5nZSB3aWxsIGNhdXNlIGEgYHZhbHVlQ2hhbmdlc2AgZXZlbnQgb24gdGhlIGBGb3JtQ29udHJvbGAgdG8gYmUgZW1pdHRlZC4gVGhpcyBkZWZhdWx0c1xuICogdG8gdHJ1ZSAoYXMgaXQgZmFsbHMgdGhyb3VnaCB0byBgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eWApLlxuICogXG4gKiBJZiBgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlYCBpcyBgdHJ1ZWAsIHRoZSB2aWV3IHdpbGwgYmUgbm90aWZpZWQgYWJvdXQgdGhlIG5ldyB2YWx1ZVxuICogdmlhIGFuIGBvbkNoYW5nZWAgZXZlbnQuIFRoaXMgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3IgaWYgYGVtaXRNb2RlbFRvVmlld0NoYW5nZWAgaXMgbm90XG4gKiBzcGVjaWZpZWQuXG4gKiBcbiAqIElmIGBlbWl0Vmlld1RvTW9kZWxDaGFuZ2VgIGlzIGB0cnVlYCwgYW4gbmdNb2RlbENoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIHRvIHVwZGF0ZSB0aGVcbiAqIG1vZGVsLiAgVGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBpZiBgZW1pdFZpZXdUb01vZGVsQ2hhbmdlYCBpcyBub3Qgc3BlY2lmaWVkLlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHBhcmFtIHs/PX0gX18xXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXRWYWx1ZSh2YWx1ZTogYW55LCB7b25seVNlbGYsIGVtaXRFdmVudCwgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlLCBlbWl0Vmlld1RvTW9kZWxDaGFuZ2V9OiB7XG4gICAgb25seVNlbGY/OiBib29sZWFuLFxuICAgIGVtaXRFdmVudD86IGJvb2xlYW4sXG4gICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlPzogYm9vbGVhbixcbiAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuXG4gIH0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX29uQ2hhbmdlLmxlbmd0aCAmJiBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZS5mb3JFYWNoKChjaGFuZ2VGbikgPT4gY2hhbmdlRm4odGhpcy5fdmFsdWUsIGVtaXRWaWV3VG9Nb2RlbENoYW5nZSAhPT0gZmFsc2UpKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZiwgZW1pdEV2ZW50fSk7XG4gIH1cbi8qKlxuICogUGF0Y2hlcyB0aGUgdmFsdWUgb2YgYSBjb250cm9sLlxuICogXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGZ1bmN0aW9uYWxseSB0aGUgc2FtZSBhcyB7XFxAbGluayBGb3JtQ29udHJvbC5zZXRWYWx1ZX0gYXQgdGhpcyBsZXZlbC5cbiAqIEl0IGV4aXN0cyBmb3Igc3ltbWV0cnkgd2l0aCB7XFxAbGluayBGb3JtR3JvdXAucGF0Y2hWYWx1ZX0gb24gYEZvcm1Hcm91cHNgIGFuZCBgRm9ybUFycmF5c2AsXG4gKiB3aGVyZSBpdCBkb2VzIGJlaGF2ZSBkaWZmZXJlbnRseS5cbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAqIEByZXR1cm4gez99XG4gKi9cbnBhdGNoVmFsdWUodmFsdWU6IGFueSwgb3B0aW9uczoge1xuICAgIG9ubHlTZWxmPzogYm9vbGVhbixcbiAgICBlbWl0RXZlbnQ/OiBib29sZWFuLFxuICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW4sXG4gICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlPzogYm9vbGVhblxuICB9ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCBvcHRpb25zKTtcbiAgfVxuLyoqXG4gKiBSZXNldHMgdGhlIGZvcm0gY29udHJvbC4gVGhpcyBtZWFucyBieSBkZWZhdWx0OlxuICogXG4gKiAqIGl0IGlzIG1hcmtlZCBhcyBgcHJpc3RpbmVgXG4gKiAqIGl0IGlzIG1hcmtlZCBhcyBgdW50b3VjaGVkYFxuICogKiB2YWx1ZSBpcyBzZXQgdG8gbnVsbFxuICogXG4gKiBZb3UgY2FuIGFsc28gcmVzZXQgdG8gYSBzcGVjaWZpYyBmb3JtIHN0YXRlIGJ5IHBhc3NpbmcgdGhyb3VnaCBhIHN0YW5kYWxvbmVcbiAqIHZhbHVlIG9yIGEgZm9ybSBzdGF0ZSBvYmplY3QgdGhhdCBjb250YWlucyBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWQgc3RhdGVcbiAqICh0aGVzZSBhcmUgdGhlIG9ubHkgdHdvIHByb3BlcnRpZXMgdGhhdCBjYW5ub3QgYmUgY2FsY3VsYXRlZCkuXG4gKiBcbiAqIEV4OlxuICogXG4gKiBgYGB0c1xuICogdGhpcy5jb250cm9sLnJlc2V0KCdOYW5jeScpO1xuICogXG4gKiBjb25zb2xlLmxvZyh0aGlzLmNvbnRyb2wudmFsdWUpOyAgLy8gJ05hbmN5J1xuICogYGBgXG4gKiBcbiAqIE9SXG4gKiBcbiAqIGBgYFxuICogdGhpcy5jb250cm9sLnJlc2V0KHt2YWx1ZTogJ05hbmN5JywgZGlzYWJsZWQ6IHRydWV9KTtcbiAqIFxuICogY29uc29sZS5sb2codGhpcy5jb250cm9sLnZhbHVlKTsgIC8vICdOYW5jeSdcbiAqIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbC5zdGF0dXMpOyAgLy8gJ0RJU0FCTEVEJ1xuICogYGBgXG4gKiBAcGFyYW0gez89fSBmb3JtU3RhdGVcbiAqIEBwYXJhbSB7Pz19IF9fMVxuICogQHJldHVybiB7P31cbiAqL1xucmVzZXQoZm9ybVN0YXRlOiBhbnkgPSBudWxsLCB7b25seVNlbGYsIGVtaXRFdmVudH06IHtvbmx5U2VsZj86IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX2FwcGx5Rm9ybVN0YXRlKGZvcm1TdGF0ZSk7XG4gICAgdGhpcy5tYXJrQXNQcmlzdGluZSh7b25seVNlbGZ9KTtcbiAgICB0aGlzLm1hcmtBc1VudG91Y2hlZCh7b25seVNlbGZ9KTtcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuX3ZhbHVlLCB7b25seVNlbGYsIGVtaXRFdmVudH0pO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fdXBkYXRlVmFsdWUoKSB7fVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBjb25kaXRpb25cbiAqIEByZXR1cm4gez99XG4gKi9cbl9hbnlDb250cm9scyhjb25kaXRpb246IEZ1bmN0aW9uKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX2FsbENvbnRyb2xzRGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmRpc2FibGVkOyB9XG4vKipcbiAqIFJlZ2lzdGVyIGEgbGlzdGVuZXIgZm9yIGNoYW5nZSBldmVudHMuXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQgeyB0aGlzLl9vbkNoYW5nZS5wdXNoKGZuKTsgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX2NsZWFyQ2hhbmdlRm5zKCk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gW107XG4gICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZSA9IFtdO1xuICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSA9ICgpID0+IHt9O1xuICB9XG4vKipcbiAqIFJlZ2lzdGVyIGEgbGlzdGVuZXIgZm9yIGRpc2FibGVkIGV2ZW50cy5cbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25EaXNhYmxlZENoYW5nZShmbjogKGlzRGlzYWJsZWQ6IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkRpc2FibGVkQ2hhbmdlLnB1c2goZm4pO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IGNiXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fZm9yRWFjaENoaWxkKGNiOiBGdW5jdGlvbik6IHZvaWQge31cbi8qKlxuICogQHBhcmFtIHs/fSBmb3JtU3RhdGVcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2FwcGx5Rm9ybVN0YXRlKGZvcm1TdGF0ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuX2lzQm94ZWRWYWx1ZShmb3JtU3RhdGUpKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IGZvcm1TdGF0ZS52YWx1ZTtcbiAgICAgIGZvcm1TdGF0ZS5kaXNhYmxlZCA/IHRoaXMuZGlzYWJsZSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2V9KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2V9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdmFsdWUgPSBmb3JtU3RhdGU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIEZvcm1Db250cm9sX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuRm9ybUNvbnRyb2wucHJvdG90eXBlLl9vbkNoYW5nZTtcbn1cblxuLyoqXG4gKiBcXEB3aGF0SXREb2VzIFRyYWNrcyB0aGUgdmFsdWUgYW5kIHZhbGlkaXR5IHN0YXRlIG9mIGEgZ3JvdXAgb2Yge1xcQGxpbmsgRm9ybUNvbnRyb2x9XG4gKiBpbnN0YW5jZXMuXG4gKiBcbiAqIEEgYEZvcm1Hcm91cGAgYWdncmVnYXRlcyB0aGUgdmFsdWVzIG9mIGVhY2ggY2hpbGQge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGludG8gb25lIG9iamVjdCxcbiAqIHdpdGggZWFjaCBjb250cm9sIG5hbWUgYXMgdGhlIGtleS4gIEl0IGNhbGN1bGF0ZXMgaXRzIHN0YXR1cyBieSByZWR1Y2luZyB0aGUgc3RhdHVzZXNcbiAqIG9mIGl0cyBjaGlsZHJlbi4gRm9yIGV4YW1wbGUsIGlmIG9uZSBvZiB0aGUgY29udHJvbHMgaW4gYSBncm91cCBpcyBpbnZhbGlkLCB0aGUgZW50aXJlXG4gKiBncm91cCBiZWNvbWVzIGludmFsaWQuXG4gKiBcbiAqIGBGb3JtR3JvdXBgIGlzIG9uZSBvZiB0aGUgdGhyZWUgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2tzIHVzZWQgdG8gZGVmaW5lIGZvcm1zIGluIEFuZ3VsYXIsXG4gKiBhbG9uZyB3aXRoIHtcXEBsaW5rIEZvcm1Db250cm9sfSBhbmQge1xcQGxpbmsgRm9ybUFycmF5fS5cbiAqIFxuICogXFxAaG93VG9Vc2UgXG4gKiBcbiAqIFdoZW4gaW5zdGFudGlhdGluZyBhIHtcXEBsaW5rIEZvcm1Hcm91cH0sIHBhc3MgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkIGNvbnRyb2xzIGFzIHRoZSBmaXJzdFxuICogYXJndW1lbnQuIFRoZSBrZXkgZm9yIGVhY2ggY2hpbGQgd2lsbCBiZSB0aGUgbmFtZSB1bmRlciB3aGljaCBpdCBpcyByZWdpc3RlcmVkLlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiBgYGBcbiAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAqICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgnTmFuY3knLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSksXG4gKiAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgnRHJldycpLFxuICogfSk7XG4gKiBcbiAqIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogJ05hbmN5JywgbGFzdDsgJ0RyZXcnfVxuICogY29uc29sZS5sb2coZm9ybS5zdGF0dXMpOyAgLy8gJ1ZBTElEJ1xuICogYGBgXG4gKiBcbiAqIFlvdSBjYW4gYWxzbyBpbmNsdWRlIGdyb3VwLWxldmVsIHZhbGlkYXRvcnMgYXMgdGhlIHNlY29uZCBhcmcsIG9yIGdyb3VwLWxldmVsIGFzeW5jXG4gKiB2YWxpZGF0b3JzIGFzIHRoZSB0aGlyZCBhcmcuIFRoZXNlIGNvbWUgaW4gaGFuZHkgd2hlbiB5b3Ugd2FudCB0byBwZXJmb3JtIHZhbGlkYXRpb25cbiAqIHRoYXQgY29uc2lkZXJzIHRoZSB2YWx1ZSBvZiBtb3JlIHRoYW4gb25lIGNoaWxkIGNvbnRyb2wuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIGBgYFxuICogY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICogICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSksXG4gKiAgIHBhc3N3b3JkQ29uZmlybTogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSksXG4gKiB9LCBwYXNzd29yZE1hdGNoVmFsaWRhdG9yKTtcbiAqIFxuICogXG4gKiBmdW5jdGlvbiBwYXNzd29yZE1hdGNoVmFsaWRhdG9yKGc6IEZvcm1Hcm91cCkge1xuICogICAgcmV0dXJuIGcuZ2V0KCdwYXNzd29yZCcpLnZhbHVlID09PSBnLmdldCgncGFzc3dvcmRDb25maXJtJykudmFsdWVcbiAqICAgICAgID8gbnVsbCA6IHsnbWlzbWF0Y2gnOiB0cnVlfTtcbiAqIH1cbiAqIGBgYFxuICogXG4gKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sIHtcbi8qKlxuICogQHBhcmFtIHs/fSBjb250cm9sc1xuICogQHBhcmFtIHs/PX0gdmFsaWRhdG9yXG4gKiBAcGFyYW0gez89fSBhc3luY1ZhbGlkYXRvclxuICovXG5jb25zdHJ1Y3RvcihcbnB1YmxpYyBjb250cm9sczoge1trZXk6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbH0sIHZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSBudWxsLFxuICAgICAgYXN5bmNWYWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yRm4gPSBudWxsKSB7XG4gICAgc3VwZXIodmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcik7XG4gICAgdGhpcy5faW5pdE9ic2VydmFibGVzKCk7XG4gICAgdGhpcy5fc2V0VXBDb250cm9scygpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2V9KTtcbiAgfVxuLyoqXG4gKiBSZWdpc3RlcnMgYSBjb250cm9sIHdpdGggdGhlIGdyb3VwJ3MgbGlzdCBvZiBjb250cm9scy5cbiAqIFxuICogVGhpcyBtZXRob2QgZG9lcyBub3QgdXBkYXRlIHZhbHVlIG9yIHZhbGlkaXR5IG9mIHRoZSBjb250cm9sLCBzbyBmb3JcbiAqIG1vc3QgY2FzZXMgeW91J2xsIHdhbnQgdG8gdXNlIHtcXEBsaW5rIEZvcm1Hcm91cC5hZGRDb250cm9sfSBpbnN0ZWFkLlxuICogQHBhcmFtIHs/fSBuYW1lXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyQ29udHJvbChuYW1lOiBzdHJpbmcsIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IEFic3RyYWN0Q29udHJvbCB7XG4gICAgaWYgKHRoaXMuY29udHJvbHNbbmFtZV0pIHJldHVybiB0aGlzLmNvbnRyb2xzW25hbWVdO1xuICAgIHRoaXMuY29udHJvbHNbbmFtZV0gPSBjb250cm9sO1xuICAgIGNvbnRyb2wuc2V0UGFyZW50KHRoaXMpO1xuICAgIGNvbnRyb2wuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSk7XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cbi8qKlxuICogQWRkIGEgY29udHJvbCB0byB0aGlzIGdyb3VwLlxuICogQHBhcmFtIHs/fSBuYW1lXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEByZXR1cm4gez99XG4gKi9cbmFkZENvbnRyb2wobmFtZTogc3RyaW5nLCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyQ29udHJvbChuYW1lLCBjb250cm9sKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgfVxuLyoqXG4gKiBSZW1vdmUgYSBjb250cm9sIGZyb20gdGhpcyBncm91cC5cbiAqIEBwYXJhbSB7P30gbmFtZVxuICogQHJldHVybiB7P31cbiAqL1xucmVtb3ZlQ29udHJvbChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb250cm9sc1tuYW1lXSkgdGhpcy5jb250cm9sc1tuYW1lXS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoKCkgPT4ge30pO1xuICAgIGRlbGV0ZSAodGhpcy5jb250cm9sc1tuYW1lXSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cbi8qKlxuICogUmVwbGFjZSBhbiBleGlzdGluZyBjb250cm9sLlxuICogQHBhcmFtIHs/fSBuYW1lXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldENvbnRyb2wobmFtZTogc3RyaW5nLCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb250cm9sc1tuYW1lXSkgdGhpcy5jb250cm9sc1tuYW1lXS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoKCkgPT4ge30pO1xuICAgIGRlbGV0ZSAodGhpcy5jb250cm9sc1tuYW1lXSk7XG4gICAgaWYgKGNvbnRyb2wpIHRoaXMucmVnaXN0ZXJDb250cm9sKG5hbWUsIGNvbnRyb2wpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICB9XG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlcmUgaXMgYW4gZW5hYmxlZCBjb250cm9sIHdpdGggdGhlIGdpdmVuIG5hbWUgaW4gdGhlIGdyb3VwLlxuICogXG4gKiBJdCB3aWxsIHJldHVybiBmYWxzZSBmb3IgZGlzYWJsZWQgY29udHJvbHMuIElmIHlvdSdkIGxpa2UgdG8gY2hlY2sgZm9yXG4gKiBleGlzdGVuY2UgaW4gdGhlIGdyb3VwIG9ubHksIHVzZSB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuZ2V0fSBpbnN0ZWFkLlxuICogQHBhcmFtIHs/fSBjb250cm9sTmFtZVxuICogQHJldHVybiB7P31cbiAqL1xuY29udGFpbnMoY29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmhhc093blByb3BlcnR5KGNvbnRyb2xOYW1lKSAmJiB0aGlzLmNvbnRyb2xzW2NvbnRyb2xOYW1lXS5lbmFibGVkO1xuICB9XG4vKipcbiAqICBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfS4gSXQgYWNjZXB0cyBhbiBvYmplY3QgdGhhdCBtYXRjaGVzXG4gKiAgdGhlIHN0cnVjdHVyZSBvZiB0aGUgZ3JvdXAsIHdpdGggY29udHJvbCBuYW1lcyBhcyBrZXlzLlxuICogXG4gKiBUaGlzIG1ldGhvZCBwZXJmb3JtcyBzdHJpY3QgY2hlY2tzLCBzbyBpdCB3aWxsIHRocm93IGFuIGVycm9yIGlmIHlvdSB0cnlcbiAqIHRvIHNldCB0aGUgdmFsdWUgb2YgYSBjb250cm9sIHRoYXQgZG9lc24ndCBleGlzdCBvciBpZiB5b3UgZXhjbHVkZSB0aGVcbiAqIHZhbHVlIG9mIGEgY29udHJvbC5cbiAqIFxuICogICMjIyBFeGFtcGxlXG4gKiBcbiAqICBgYGBcbiAqICBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gKiAgICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgpLFxuICogICAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgpXG4gKiAgfSk7XG4gKiAgY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiBudWxsLCBsYXN0OiBudWxsfVxuICogXG4gKiAgZm9ybS5zZXRWYWx1ZSh7Zmlyc3Q6ICdOYW5jeScsIGxhc3Q6ICdEcmV3J30pO1xuICogIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogJ05hbmN5JywgbGFzdDogJ0RyZXcnfVxuICogXG4gKiAgYGBgXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcGFyYW0gez89fSBfXzFcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldFZhbHVlKFxuICAgICAgdmFsdWU6IHtba2V5OiBzdHJpbmddOiBhbnl9LFxuICAgICAge29ubHlTZWxmLCBlbWl0RXZlbnR9OiB7b25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fY2hlY2tBbGxWYWx1ZXNQcmVzZW50KHZhbHVlKTtcbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMuX3Rocm93SWZDb250cm9sTWlzc2luZyhuYW1lKTtcbiAgICAgIHRoaXMuY29udHJvbHNbbmFtZV0uc2V0VmFsdWUodmFsdWVbbmFtZV0sIHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50fSk7XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZiwgZW1pdEV2ZW50fSk7XG4gIH1cbi8qKlxuICogIFBhdGNoZXMgdGhlIHZhbHVlIG9mIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9LiBJdCBhY2NlcHRzIGFuIG9iamVjdCB3aXRoIGNvbnRyb2xcbiAqICBuYW1lcyBhcyBrZXlzLCBhbmQgd2lsbCBkbyBpdHMgYmVzdCB0byBtYXRjaCB0aGUgdmFsdWVzIHRvIHRoZSBjb3JyZWN0IGNvbnRyb2xzXG4gKiAgaW4gdGhlIGdyb3VwLlxuICogXG4gKiAgSXQgYWNjZXB0cyBib3RoIHN1cGVyLXNldHMgYW5kIHN1Yi1zZXRzIG9mIHRoZSBncm91cCB3aXRob3V0IHRocm93aW5nIGFuIGVycm9yLlxuICogXG4gKiAgIyMjIEV4YW1wbGVcbiAqIFxuICogIGBgYFxuICogIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAqICAgICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCksXG4gKiAgICAgbGFzdDogbmV3IEZvcm1Db250cm9sKClcbiAqICB9KTtcbiAqICBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6IG51bGwsIGxhc3Q6IG51bGx9XG4gKiBcbiAqICBmb3JtLnBhdGNoVmFsdWUoe2ZpcnN0OiAnTmFuY3knfSk7XG4gKiAgY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiAnTmFuY3knLCBsYXN0OiBudWxsfVxuICogXG4gKiAgYGBgXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcGFyYW0gez89fSBfXzFcbiAqIEByZXR1cm4gez99XG4gKi9cbnBhdGNoVmFsdWUoXG4gICAgICB2YWx1ZToge1trZXk6IHN0cmluZ106IGFueX0sXG4gICAgICB7b25seVNlbGYsIGVtaXRFdmVudH06IHtvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbnRyb2xzW25hbWVdKSB7XG4gICAgICAgIHRoaXMuY29udHJvbHNbbmFtZV0ucGF0Y2hWYWx1ZSh2YWx1ZVtuYW1lXSwge29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnR9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmLCBlbWl0RXZlbnR9KTtcbiAgfVxuLyoqXG4gKiBSZXNldHMgdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0uIFRoaXMgbWVhbnMgYnkgZGVmYXVsdDpcbiAqIFxuICogKiBUaGUgZ3JvdXAgYW5kIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGBwcmlzdGluZWBcbiAqICogVGhlIGdyb3VwIGFuZCBhbGwgZGVzY2VuZGFudHMgYXJlIG1hcmtlZCBgdW50b3VjaGVkYFxuICogKiBUaGUgdmFsdWUgb2YgYWxsIGRlc2NlbmRhbnRzIHdpbGwgYmUgbnVsbCBvciBudWxsIG1hcHNcbiAqIFxuICogWW91IGNhbiBhbHNvIHJlc2V0IHRvIGEgc3BlY2lmaWMgZm9ybSBzdGF0ZSBieSBwYXNzaW5nIGluIGEgbWFwIG9mIHN0YXRlc1xuICogdGhhdCBtYXRjaGVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBmb3JtLCB3aXRoIGNvbnRyb2wgbmFtZXMgYXMga2V5cy4gVGhlIHN0YXRlXG4gKiBjYW4gYmUgYSBzdGFuZGFsb25lIHZhbHVlIG9yIGEgZm9ybSBzdGF0ZSBvYmplY3Qgd2l0aCBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWRcbiAqIHN0YXR1cy5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICogYGBgdHNcbiAqIHRoaXMuZm9ybS5yZXNldCh7Zmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9KTtcbiAqIFxuICogY29uc29sZS5sb2codGhpcy5mb3JtLnZhbHVlKTsgIC8vIHtmaXJzdDogJ25hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJ31cbiAqIGBgYFxuICogXG4gKiAtIE9SIC1cbiAqIFxuICogYGBgXG4gKiB0aGlzLmZvcm0ucmVzZXQoe1xuICogICBmaXJzdDoge3ZhbHVlOiAnbmFtZScsIGRpc2FibGVkOiB0cnVlfSxcbiAqICAgbGFzdDogJ2xhc3QnXG4gKiB9KTtcbiAqIFxuICogY29uc29sZS5sb2codGhpcy5mb3JtLnZhbHVlKTsgIC8vIHtmaXJzdDogJ25hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJ31cbiAqIGNvbnNvbGUubG9nKHRoaXMuZm9ybS5nZXQoJ2ZpcnN0Jykuc3RhdHVzKTsgIC8vICdESVNBQkxFRCdcbiAqIGBgYFxuICogQHBhcmFtIHs/PX0gdmFsdWVcbiAqIEBwYXJhbSB7Pz19IF9fMVxuICogQHJldHVybiB7P31cbiAqL1xucmVzZXQodmFsdWU6IGFueSA9IHt9LCB7b25seVNlbGYsIGVtaXRFdmVudH06IHtvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW59ID0ge30pOlxuICAgICAgdm9pZCB7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29udHJvbC5yZXNldCh2YWx1ZVtuYW1lXSwge29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnR9KTtcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmLCBlbWl0RXZlbnR9KTtcbiAgICB0aGlzLl91cGRhdGVQcmlzdGluZSh7b25seVNlbGZ9KTtcbiAgICB0aGlzLl91cGRhdGVUb3VjaGVkKHtvbmx5U2VsZn0pO1xuICB9XG4vKipcbiAqIFRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0sIGluY2x1ZGluZyBhbnkgZGlzYWJsZWQgY29udHJvbHMuXG4gKiBcbiAqIElmIHlvdSdkIGxpa2UgdG8gaW5jbHVkZSBhbGwgdmFsdWVzIHJlZ2FyZGxlc3Mgb2YgZGlzYWJsZWQgc3RhdHVzLCB1c2UgdGhpcyBtZXRob2QuXG4gKiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIHByb3BlcnR5IGlzIHRoZSBiZXN0IHdheSB0byBnZXQgdGhlIHZhbHVlIG9mIHRoZSBncm91cC5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldFJhd1ZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZHVjZUNoaWxkcmVuKFxuICAgICAgICB7fSwgKGFjYzoge1trOiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2x9LCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGFjY1tuYW1lXSA9IGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCA/IGNvbnRyb2wudmFsdWUgOiAoIC8qKiBAdHlwZSB7P30gKi8oKDxhbnk+Y29udHJvbCkpKS5nZXRSYXdWYWx1ZSgpO1xuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0pO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IG5hbWVcbiAqIEByZXR1cm4gez99XG4gKi9cbl90aHJvd0lmQ29udHJvbE1pc3NpbmcobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2xzKS5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAgICAgIFRoZXJlIGFyZSBubyBmb3JtIGNvbnRyb2xzIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGdyb3VwIHlldC4gIElmIHlvdSdyZSB1c2luZyBuZ01vZGVsLFxuICAgICAgICB5b3UgbWF5IHdhbnQgdG8gY2hlY2sgbmV4dCB0aWNrIChlLmcuIHVzZSBzZXRUaW1lb3V0KS5cbiAgICAgIGApO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29udHJvbHNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgZm9ybSBjb250cm9sIHdpdGggbmFtZTogJHtuYW1lfS5gKTtcbiAgICB9XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gY2JcbiAqIEByZXR1cm4gez99XG4gKi9cbl9mb3JFYWNoQ2hpbGQoY2I6ICh2OiBhbnksIGs6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpLmZvckVhY2goayA9PiBjYih0aGlzLmNvbnRyb2xzW2tdLCBrKSk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl9zZXRVcENvbnRyb2xzKCk6IHZvaWQge1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgICBjb250cm9sLnNldFBhcmVudCh0aGlzKTtcbiAgICAgIGNvbnRyb2wuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSk7XG4gICAgfSk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl91cGRhdGVWYWx1ZSgpOiB2b2lkIHsgdGhpcy5fdmFsdWUgPSB0aGlzLl9yZWR1Y2VWYWx1ZSgpOyB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IGNvbmRpdGlvblxuICogQHJldHVybiB7P31cbiAqL1xuX2FueUNvbnRyb2xzKGNvbmRpdGlvbjogRnVuY3Rpb24pOiBib29sZWFuIHtcbiAgICBsZXQgLyoqIEB0eXBlIHs/fSAqLyByZXMgPSBmYWxzZTtcbiAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICByZXMgPSByZXMgfHwgKHRoaXMuY29udGFpbnMobmFtZSkgJiYgY29uZGl0aW9uKGNvbnRyb2wpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fcmVkdWNlVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZHVjZUNoaWxkcmVuKFxuICAgICAgICB7fSwgKGFjYzoge1trOiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2x9LCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGlmIChjb250cm9sLmVuYWJsZWQgfHwgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgYWNjW25hbWVdID0gY29udHJvbC52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gaW5pdFZhbHVlXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fcmVkdWNlQ2hpbGRyZW4oaW5pdFZhbHVlOiBhbnksIGZuOiBGdW5jdGlvbikge1xuICAgIGxldCAvKiogQHR5cGUgez99ICovIHJlcyA9IGluaXRWYWx1ZTtcbiAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoXG4gICAgICAgIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIG5hbWU6IHN0cmluZykgPT4geyByZXMgPSBmbihyZXMsIGNvbnRyb2wsIG5hbWUpOyB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fYWxsQ29udHJvbHNEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBmb3IgKGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY29udHJvbE5hbWUgb2YgT2JqZWN0LmtleXModGhpcy5jb250cm9scykpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRyb2xzW2NvbnRyb2xOYW1lXS5lbmFibGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpLmxlbmd0aCA+IDAgfHwgdGhpcy5kaXNhYmxlZDtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuX2NoZWNrQWxsVmFsdWVzUHJlc2VudCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHZhbHVlW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdXN0IHN1cHBseSBhIHZhbHVlIGZvciBmb3JtIGNvbnRyb2wgd2l0aCBuYW1lOiAnJHtuYW1lfScuYCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gRm9ybUdyb3VwX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtR3JvdXAucHJvdG90eXBlLmNvbnRyb2xzO1xufVxuXG4vKipcbiAqIFxcQHdoYXRJdERvZXMgVHJhY2tzIHRoZSB2YWx1ZSBhbmQgdmFsaWRpdHkgc3RhdGUgb2YgYW4gYXJyYXkgb2Yge1xcQGxpbmsgRm9ybUNvbnRyb2x9LFxuICoge1xcQGxpbmsgRm9ybUdyb3VwfSBvciB7XFxAbGluayBGb3JtQXJyYXl9IGluc3RhbmNlcy5cbiAqIFxuICogQSBgRm9ybUFycmF5YCBhZ2dyZWdhdGVzIHRoZSB2YWx1ZXMgb2YgZWFjaCBjaGlsZCB7XFxAbGluayBGb3JtQ29udHJvbH0gaW50byBhbiBhcnJheS5cbiAqIEl0IGNhbGN1bGF0ZXMgaXRzIHN0YXR1cyBieSByZWR1Y2luZyB0aGUgc3RhdHVzZXMgb2YgaXRzIGNoaWxkcmVuLiBGb3IgZXhhbXBsZSwgaWYgb25lIG9mXG4gKiB0aGUgY29udHJvbHMgaW4gYSBgRm9ybUFycmF5YCBpcyBpbnZhbGlkLCB0aGUgZW50aXJlIGFycmF5IGJlY29tZXMgaW52YWxpZC5cbiAqIFxuICogYEZvcm1BcnJheWAgaXMgb25lIG9mIHRoZSB0aHJlZSBmdW5kYW1lbnRhbCBidWlsZGluZyBibG9ja3MgdXNlZCB0byBkZWZpbmUgZm9ybXMgaW4gQW5ndWxhcixcbiAqIGFsb25nIHdpdGgge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGFuZCB7XFxAbGluayBGb3JtR3JvdXB9LlxuICogXG4gKiBcXEBob3dUb1VzZSBcbiAqIFxuICogV2hlbiBpbnN0YW50aWF0aW5nIGEge1xcQGxpbmsgRm9ybUFycmF5fSwgcGFzcyBpbiBhbiBhcnJheSBvZiBjaGlsZCBjb250cm9scyBhcyB0aGUgZmlyc3RcbiAqIGFyZ3VtZW50LlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiBgYGBcbiAqIGNvbnN0IGFyciA9IG5ldyBGb3JtQXJyYXkoW1xuICogICBuZXcgRm9ybUNvbnRyb2woJ05hbmN5JywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMikpLFxuICogICBuZXcgRm9ybUNvbnRyb2woJ0RyZXcnKSxcbiAqIF0pO1xuICogXG4gKiBjb25zb2xlLmxvZyhhcnIudmFsdWUpOyAgIC8vIFsnTmFuY3knLCAnRHJldyddXG4gKiBjb25zb2xlLmxvZyhhcnIuc3RhdHVzKTsgIC8vICdWQUxJRCdcbiAqIGBgYFxuICogXG4gKiBZb3UgY2FuIGFsc28gaW5jbHVkZSBhcnJheS1sZXZlbCB2YWxpZGF0b3JzIGFzIHRoZSBzZWNvbmQgYXJnLCBvciBhcnJheS1sZXZlbCBhc3luY1xuICogdmFsaWRhdG9ycyBhcyB0aGUgdGhpcmQgYXJnLiBUaGVzZSBjb21lIGluIGhhbmR5IHdoZW4geW91IHdhbnQgdG8gcGVyZm9ybSB2YWxpZGF0aW9uXG4gKiB0aGF0IGNvbnNpZGVycyB0aGUgdmFsdWUgb2YgbW9yZSB0aGFuIG9uZSBjaGlsZCBjb250cm9sLlxuICogXG4gKiAjIyMgQWRkaW5nIG9yIHJlbW92aW5nIGNvbnRyb2xzXG4gKiBcbiAqIFRvIGNoYW5nZSB0aGUgY29udHJvbHMgaW4gdGhlIGFycmF5LCB1c2UgdGhlIGBwdXNoYCwgYGluc2VydGAsIG9yIGByZW1vdmVBdGAgbWV0aG9kc1xuICogaW4gYEZvcm1BcnJheWAgaXRzZWxmLiBUaGVzZSBtZXRob2RzIGVuc3VyZSB0aGUgY29udHJvbHMgYXJlIHByb3Blcmx5IHRyYWNrZWQgaW4gdGhlXG4gKiBmb3JtJ3MgaGllcmFyY2h5LiBEbyBub3QgbW9kaWZ5IHRoZSBhcnJheSBvZiBgQWJzdHJhY3RDb250cm9sYHMgdXNlZCB0byBpbnN0YW50aWF0ZVxuICogdGhlIGBGb3JtQXJyYXlgIGRpcmVjdGx5LCBhcyB0aGF0IHdpbGwgcmVzdWx0IGluIHN0cmFuZ2UgYW5kIHVuZXhwZWN0ZWQgYmVoYXZpb3Igc3VjaFxuICogYXMgYnJva2VuIGNoYW5nZSBkZXRlY3Rpb24uXG4gKiBcbiAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtQXJyYXkgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2wge1xuLyoqXG4gKiBAcGFyYW0gez99IGNvbnRyb2xzXG4gKiBAcGFyYW0gez89fSB2YWxpZGF0b3JcbiAqIEBwYXJhbSB7Pz19IGFzeW5jVmFsaWRhdG9yXG4gKi9cbmNvbnN0cnVjdG9yKFxucHVibGljIGNvbnRyb2xzOiBBYnN0cmFjdENvbnRyb2xbXSwgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IG51bGwsXG4gICAgICBhc3luY1ZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3JGbiA9IG51bGwpIHtcbiAgICBzdXBlcih2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgICB0aGlzLl9pbml0T2JzZXJ2YWJsZXMoKTtcbiAgICB0aGlzLl9zZXRVcENvbnRyb2xzKCk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZX0pO1xuICB9XG4vKipcbiAqIEdldCB0aGUge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfSBhdCB0aGUgZ2l2ZW4gYGluZGV4YCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gez99IGluZGV4XG4gKiBAcmV0dXJuIHs/fVxuICovXG5hdChpbmRleDogbnVtYmVyKTogQWJzdHJhY3RDb250cm9sIHsgcmV0dXJuIHRoaXMuY29udHJvbHNbaW5kZXhdOyB9XG4vKipcbiAqIEluc2VydCBhIG5ldyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9IGF0IHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wdXNoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICB0aGlzLl9yZWdpc3RlckNvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cbi8qKlxuICogSW5zZXJ0IGEgbmV3IHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0gYXQgdGhlIGdpdmVuIGBpbmRleGAgaW4gdGhlIGFycmF5LlxuICogQHBhcmFtIHs/fSBpbmRleFxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcmV0dXJuIHs/fVxuICovXG5pbnNlcnQoaW5kZXg6IG51bWJlciwgY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9scy5zcGxpY2UoaW5kZXgsIDAsIGNvbnRyb2wpO1xuXG4gICAgdGhpcy5fcmVnaXN0ZXJDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICB9XG4vKipcbiAqIFJlbW92ZSB0aGUgY29udHJvbCBhdCB0aGUgZ2l2ZW4gYGluZGV4YCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gez99IGluZGV4XG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZW1vdmVBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbHNbaW5kZXhdKSB0aGlzLmNvbnRyb2xzW2luZGV4XS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoKCkgPT4ge30pO1xuICAgIHRoaXMuY29udHJvbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgfVxuLyoqXG4gKiBSZXBsYWNlIGFuIGV4aXN0aW5nIGNvbnRyb2wuXG4gKiBAcGFyYW0gez99IGluZGV4XG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldENvbnRyb2woaW5kZXg6IG51bWJlciwgY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbHNbaW5kZXhdKSB0aGlzLmNvbnRyb2xzW2luZGV4XS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoKCkgPT4ge30pO1xuICAgIHRoaXMuY29udHJvbHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIGlmIChjb250cm9sKSB7XG4gICAgICB0aGlzLmNvbnRyb2xzLnNwbGljZShpbmRleCwgMCwgY29udHJvbCk7XG4gICAgICB0aGlzLl9yZWdpc3RlckNvbnRyb2woY29udHJvbCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cbi8qKlxuICogTGVuZ3RoIG9mIHRoZSBjb250cm9sIGFycmF5LlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGxlbmd0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5jb250cm9scy5sZW5ndGg7IH1cbi8qKlxuICogIFNldHMgdGhlIHZhbHVlIG9mIHRoZSB7XFxAbGluayBGb3JtQXJyYXl9LiBJdCBhY2NlcHRzIGFuIGFycmF5IHRoYXQgbWF0Y2hlc1xuICogIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGNvbnRyb2wuXG4gKiBcbiAqIFRoaXMgbWV0aG9kIHBlcmZvcm1zIHN0cmljdCBjaGVja3MsIHNvIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgeW91IHRyeVxuICogdG8gc2V0IHRoZSB2YWx1ZSBvZiBhIGNvbnRyb2wgdGhhdCBkb2Vzbid0IGV4aXN0IG9yIGlmIHlvdSBleGNsdWRlIHRoZVxuICogdmFsdWUgb2YgYSBjb250cm9sLlxuICogXG4gKiAgIyMjIEV4YW1wbGVcbiAqIFxuICogIGBgYFxuICogIGNvbnN0IGFyciA9IG5ldyBGb3JtQXJyYXkoW1xuICogICAgIG5ldyBGb3JtQ29udHJvbCgpLFxuICogICAgIG5ldyBGb3JtQ29udHJvbCgpXG4gKiAgXSk7XG4gKiAgY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbbnVsbCwgbnVsbF1cbiAqIFxuICogIGFyci5zZXRWYWx1ZShbJ05hbmN5JywgJ0RyZXcnXSk7XG4gKiAgY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbJ05hbmN5JywgJ0RyZXcnXVxuICogIGBgYFxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHBhcmFtIHs/PX0gX18xXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXRWYWx1ZSh2YWx1ZTogYW55W10sIHtvbmx5U2VsZiwgZW1pdEV2ZW50fToge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6XG4gICAgICB2b2lkIHtcbiAgICB0aGlzLl9jaGVja0FsbFZhbHVlc1ByZXNlbnQodmFsdWUpO1xuICAgIHZhbHVlLmZvckVhY2goKG5ld1ZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuX3Rocm93SWZDb250cm9sTWlzc2luZyhpbmRleCk7XG4gICAgICB0aGlzLmF0KGluZGV4KS5zZXRWYWx1ZShuZXdWYWx1ZSwge29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnR9KTtcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmLCBlbWl0RXZlbnR9KTtcbiAgfVxuLyoqXG4gKiAgUGF0Y2hlcyB0aGUgdmFsdWUgb2YgdGhlIHtcXEBsaW5rIEZvcm1BcnJheX0uIEl0IGFjY2VwdHMgYW4gYXJyYXkgdGhhdCBtYXRjaGVzIHRoZVxuICogIHN0cnVjdHVyZSBvZiB0aGUgY29udHJvbCwgYW5kIHdpbGwgZG8gaXRzIGJlc3QgdG8gbWF0Y2ggdGhlIHZhbHVlcyB0byB0aGUgY29ycmVjdFxuICogIGNvbnRyb2xzIGluIHRoZSBncm91cC5cbiAqIFxuICogIEl0IGFjY2VwdHMgYm90aCBzdXBlci1zZXRzIGFuZCBzdWItc2V0cyBvZiB0aGUgYXJyYXkgd2l0aG91dCB0aHJvd2luZyBhbiBlcnJvci5cbiAqIFxuICogICMjIyBFeGFtcGxlXG4gKiBcbiAqICBgYGBcbiAqICBjb25zdCBhcnIgPSBuZXcgRm9ybUFycmF5KFtcbiAqICAgICBuZXcgRm9ybUNvbnRyb2woKSxcbiAqICAgICBuZXcgRm9ybUNvbnRyb2woKVxuICogIF0pO1xuICogIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gW251bGwsIG51bGxdXG4gKiBcbiAqICBhcnIucGF0Y2hWYWx1ZShbJ05hbmN5J10pO1xuICogIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gWydOYW5jeScsIG51bGxdXG4gKiAgYGBgXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcGFyYW0gez89fSBfXzFcbiAqIEByZXR1cm4gez99XG4gKi9cbnBhdGNoVmFsdWUodmFsdWU6IGFueVtdLCB7b25seVNlbGYsIGVtaXRFdmVudH06IHtvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW59ID0ge30pOlxuICAgICAgdm9pZCB7XG4gICAgdmFsdWUuZm9yRWFjaCgobmV3VmFsdWU6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuYXQoaW5kZXgpKSB7XG4gICAgICAgIHRoaXMuYXQoaW5kZXgpLnBhdGNoVmFsdWUobmV3VmFsdWUsIHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50fSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZiwgZW1pdEV2ZW50fSk7XG4gIH1cbi8qKlxuICogUmVzZXRzIHRoZSB7XFxAbGluayBGb3JtQXJyYXl9LiBUaGlzIG1lYW5zIGJ5IGRlZmF1bHQ6XG4gKiBcbiAqICogVGhlIGFycmF5IGFuZCBhbGwgZGVzY2VuZGFudHMgYXJlIG1hcmtlZCBgcHJpc3RpbmVgXG4gKiAqIFRoZSBhcnJheSBhbmQgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHVudG91Y2hlZGBcbiAqICogVGhlIHZhbHVlIG9mIGFsbCBkZXNjZW5kYW50cyB3aWxsIGJlIG51bGwgb3IgbnVsbCBtYXBzXG4gKiBcbiAqIFlvdSBjYW4gYWxzbyByZXNldCB0byBhIHNwZWNpZmljIGZvcm0gc3RhdGUgYnkgcGFzc2luZyBpbiBhbiBhcnJheSBvZiBzdGF0ZXNcbiAqIHRoYXQgbWF0Y2hlcyB0aGUgc3RydWN0dXJlIG9mIHRoZSBjb250cm9sLiBUaGUgc3RhdGUgY2FuIGJlIGEgc3RhbmRhbG9uZSB2YWx1ZVxuICogb3IgYSBmb3JtIHN0YXRlIG9iamVjdCB3aXRoIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZCBzdGF0dXMuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIGBgYHRzXG4gKiB0aGlzLmFyci5yZXNldChbJ25hbWUnLCAnbGFzdCBuYW1lJ10pO1xuICogXG4gKiBjb25zb2xlLmxvZyh0aGlzLmFyci52YWx1ZSk7ICAvLyBbJ25hbWUnLCAnbGFzdCBuYW1lJ11cbiAqIGBgYFxuICogXG4gKiAtIE9SIC1cbiAqIFxuICogYGBgXG4gKiB0aGlzLmFyci5yZXNldChbXG4gKiAgIHt2YWx1ZTogJ25hbWUnLCBkaXNhYmxlZDogdHJ1ZX0sXG4gKiAgICdsYXN0J1xuICogXSk7XG4gKiBcbiAqIGNvbnNvbGUubG9nKHRoaXMuYXJyLnZhbHVlKTsgIC8vIFsnbmFtZScsICdsYXN0IG5hbWUnXVxuICogY29uc29sZS5sb2codGhpcy5hcnIuZ2V0KDApLnN0YXR1cyk7ICAvLyAnRElTQUJMRUQnXG4gKiBgYGBcbiAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gKiBAcGFyYW0gez89fSBfXzFcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlc2V0KHZhbHVlOiBhbnkgPSBbXSwge29ubHlTZWxmLCBlbWl0RXZlbnR9OiB7b25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFufSA9IHt9KTpcbiAgICAgIHZvaWQge1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBjb250cm9sLnJlc2V0KHZhbHVlW2luZGV4XSwge29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnR9KTtcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmLCBlbWl0RXZlbnR9KTtcbiAgICB0aGlzLl91cGRhdGVQcmlzdGluZSh7b25seVNlbGZ9KTtcbiAgICB0aGlzLl91cGRhdGVUb3VjaGVkKHtvbmx5U2VsZn0pO1xuICB9XG4vKipcbiAqIFRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgdGhlIGFycmF5LCBpbmNsdWRpbmcgYW55IGRpc2FibGVkIGNvbnRyb2xzLlxuICogXG4gKiBJZiB5b3UnZCBsaWtlIHRvIGluY2x1ZGUgYWxsIHZhbHVlcyByZWdhcmRsZXNzIG9mIGRpc2FibGVkIHN0YXR1cywgdXNlIHRoaXMgbWV0aG9kLlxuICogT3RoZXJ3aXNlLCB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyB0aGUgYmVzdCB3YXkgdG8gZ2V0IHRoZSB2YWx1ZSBvZiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXRSYXdWYWx1ZSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbHMubWFwKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IHtcbiAgICAgIHJldHVybiBjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgPyBjb250cm9sLnZhbHVlIDogKCAvKiogQHR5cGUgez99ICovKCg8YW55PmNvbnRyb2wpKSkuZ2V0UmF3VmFsdWUoKTtcbiAgICB9KTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBpbmRleFxuICogQHJldHVybiB7P31cbiAqL1xuX3Rocm93SWZDb250cm9sTWlzc2luZyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbnRyb2xzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcbiAgICAgICAgVGhlcmUgYXJlIG5vIGZvcm0gY29udHJvbHMgcmVnaXN0ZXJlZCB3aXRoIHRoaXMgYXJyYXkgeWV0LiAgSWYgeW91J3JlIHVzaW5nIG5nTW9kZWwsXG4gICAgICAgIHlvdSBtYXkgd2FudCB0byBjaGVjayBuZXh0IHRpY2sgKGUuZy4gdXNlIHNldFRpbWVvdXQpLlxuICAgICAgYCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5hdChpbmRleCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgZm9ybSBjb250cm9sIGF0IGluZGV4ICR7aW5kZXh9YCk7XG4gICAgfVxuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IGNiXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fZm9yRWFjaENoaWxkKGNiOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBpbmRleDogbnVtYmVyKSA9PiB7IGNiKGNvbnRyb2wsIGluZGV4KTsgfSk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl91cGRhdGVWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuY29udHJvbHMuZmlsdGVyKChjb250cm9sKSA9PiBjb250cm9sLmVuYWJsZWQgfHwgdGhpcy5kaXNhYmxlZClcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKChjb250cm9sKSA9PiBjb250cm9sLnZhbHVlKTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBjb25kaXRpb25cbiAqIEByZXR1cm4gez99XG4gKi9cbl9hbnlDb250cm9scyhjb25kaXRpb246IEZ1bmN0aW9uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbHMuc29tZSgoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiBjb250cm9sLmVuYWJsZWQgJiYgY29uZGl0aW9uKGNvbnRyb2wpKTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX3NldFVwQ29udHJvbHMoKTogdm9pZCB7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IHRoaXMuX3JlZ2lzdGVyQ29udHJvbChjb250cm9sKSk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbl9jaGVja0FsbFZhbHVlc1ByZXNlbnQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBpOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh2YWx1ZVtpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVzdCBzdXBwbHkgYSB2YWx1ZSBmb3IgZm9ybSBjb250cm9sIGF0IGluZGV4OiAke2l9LmApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fYWxsQ29udHJvbHNEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBmb3IgKGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY29udHJvbCBvZiB0aGlzLmNvbnRyb2xzKSB7XG4gICAgICBpZiAoY29udHJvbC5lbmFibGVkKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmxlbmd0aCA+IDAgfHwgdGhpcy5kaXNhYmxlZDtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX3JlZ2lzdGVyQ29udHJvbChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICBjb250cm9sLnNldFBhcmVudCh0aGlzKTtcbiAgICBjb250cm9sLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSh0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIEZvcm1BcnJheV90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUFycmF5LnByb3RvdHlwZS5jb250cm9scztcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9tb2RlbC50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE9wdGlvbmFsLCBTZWxmLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sLCBGb3JtR3JvdXB9IGZyb20gJy4uL21vZGVsJztcbmltcG9ydCB7TkdfQVNZTkNfVkFMSURBVE9SUywgTkdfVkFMSURBVE9SU30gZnJvbSAnLi4vdmFsaWRhdG9ycyc7XG5cbmltcG9ydCB7Q29udHJvbENvbnRhaW5lcn0gZnJvbSAnLi9jb250cm9sX2NvbnRhaW5lcic7XG5pbXBvcnQge0Zvcm19IGZyb20gJy4vZm9ybV9pbnRlcmZhY2UnO1xuaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gJy4vbmdfY29udHJvbCc7XG5pbXBvcnQge05nTW9kZWx9IGZyb20gJy4vbmdfbW9kZWwnO1xuaW1wb3J0IHtOZ01vZGVsR3JvdXB9IGZyb20gJy4vbmdfbW9kZWxfZ3JvdXAnO1xuaW1wb3J0IHtjb21wb3NlQXN5bmNWYWxpZGF0b3JzLCBjb21wb3NlVmFsaWRhdG9ycywgc2V0VXBDb250cm9sLCBzZXRVcEZvcm1Db250YWluZXJ9IGZyb20gJy4vc2hhcmVkJztcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gZm9ybURpcmVjdGl2ZVByb3ZpZGVyOiBhbnkgPSB7XG4gIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nRm9ybSlcbn07XG5cbmNvbnN0IC8qKiBAdHlwZSB7P30gKi8gcmVzb2x2ZWRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIENyZWF0ZXMgYSB0b3AtbGV2ZWwge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSBhbmQgYmluZHMgaXQgdG8gYSBmb3JtXG4gKiB0byB0cmFjayBhZ2dyZWdhdGUgZm9ybSB2YWx1ZSBhbmQgdmFsaWRhdGlvbiBzdGF0dXMuXG4gKiBcbiAqIFxcQGhvd1RvVXNlIFxuICogXG4gKiBBcyBzb29uIGFzIHlvdSBpbXBvcnQgdGhlIGBGb3Jtc01vZHVsZWAsIHRoaXMgZGlyZWN0aXZlIGJlY29tZXMgYWN0aXZlIGJ5IGRlZmF1bHQgb25cbiAqIGFsbCBgPGZvcm0+YCB0YWdzLiAgWW91IGRvbid0IG5lZWQgdG8gYWRkIGEgc3BlY2lhbCBzZWxlY3Rvci5cbiAqIFxuICogWW91IGNhbiBleHBvcnQgdGhlIGRpcmVjdGl2ZSBpbnRvIGEgbG9jYWwgdGVtcGxhdGUgdmFyaWFibGUgdXNpbmcgYG5nRm9ybWAgYXMgdGhlIGtleVxuICogKGV4OiBgI215Rm9ybT1cIm5nRm9ybVwiYCkuIFRoaXMgaXMgb3B0aW9uYWwsIGJ1dCB1c2VmdWwuICBNYW55IHByb3BlcnRpZXMgZnJvbSB0aGUgdW5kZXJseWluZ1xuICoge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSBhcmUgZHVwbGljYXRlZCBvbiB0aGUgZGlyZWN0aXZlIGl0c2VsZiwgc28gYSByZWZlcmVuY2UgdG8gaXRcbiAqIHdpbGwgZ2l2ZSB5b3UgYWNjZXNzIHRvIHRoZSBhZ2dyZWdhdGUgdmFsdWUgYW5kIHZhbGlkaXR5IHN0YXR1cyBvZiB0aGUgZm9ybSwgYXMgd2VsbCBhc1xuICogdXNlciBpbnRlcmFjdGlvbiBwcm9wZXJ0aWVzIGxpa2UgYGRpcnR5YCBhbmQgYHRvdWNoZWRgLlxuICogXG4gKiBUbyByZWdpc3RlciBjaGlsZCBjb250cm9scyB3aXRoIHRoZSBmb3JtLCB5b3UnbGwgd2FudCB0byB1c2Uge1xcQGxpbmsgTmdNb2RlbH0gd2l0aCBhXG4gKiBgbmFtZWAgYXR0cmlidXRlLiAgWW91IGNhbiBhbHNvIHVzZSB7XFxAbGluayBOZ01vZGVsR3JvdXB9IGlmIHlvdSdkIGxpa2UgdG8gY3JlYXRlXG4gKiBzdWItZ3JvdXBzIHdpdGhpbiB0aGUgZm9ybS5cbiAqIFxuICogWW91IGNhbiBsaXN0ZW4gdG8gdGhlIGRpcmVjdGl2ZSdzIGBuZ1N1Ym1pdGAgZXZlbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdXNlciBoYXNcbiAqIHRyaWdnZXJlZCBhIGZvcm0gc3VibWlzc2lvbi4gVGhlIGBuZ1N1Ym1pdGAgZXZlbnQgd2lsbCBiZSBlbWl0dGVkIHdpdGggdGhlIG9yaWdpbmFsIGZvcm1cbiAqIHN1Ym1pc3Npb24gZXZlbnQuXG4gKiBcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3NpbXBsZUZvcm0vc2ltcGxlX2Zvcm1fZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gKiBcbiAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqIFxuICogKiAqKk5nTW9kdWxlKio6IGBGb3Jtc01vZHVsZWBcbiAqIFxuICogIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgTmdGb3JtIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciBpbXBsZW1lbnRzIEZvcm0ge1xucHJpdmF0ZSBfc3VibWl0dGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZm9ybTogRm9ybUdyb3VwO1xuICBuZ1N1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbi8qKlxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICovXG5jb25zdHJ1Y3RvcihcbiAgICAgICAgIHZhbGlkYXRvcnM6IGFueVtdLFxuICAgICAgICAgYXN5bmNWYWxpZGF0b3JzOiBhbnlbXSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mb3JtID1cbiAgICAgICAgbmV3IEZvcm1Hcm91cCh7fSwgY29tcG9zZVZhbGlkYXRvcnModmFsaWRhdG9ycyksIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnMoYXN5bmNWYWxpZGF0b3JzKSk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHN1Ym1pdHRlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3N1Ym1pdHRlZDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgZm9ybURpcmVjdGl2ZSgpOiBGb3JtIHsgcmV0dXJuIHRoaXM7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGNvbnRyb2woKTogRm9ybUdyb3VwIHsgcmV0dXJuIHRoaXMuZm9ybTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcGF0aCgpOiBzdHJpbmdbXSB7IHJldHVybiBbXTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgY29udHJvbHMoKToge1trZXk6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbH0geyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5hZGRDb250cm9sKGRpcjogTmdNb2RlbCk6IHZvaWQge1xuICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY29udGFpbmVyID0gdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICBkaXIuX2NvbnRyb2wgPSAvKiogQHR5cGUgez99ICovKCggPEZvcm1Db250cm9sPmNvbnRhaW5lci5yZWdpc3RlckNvbnRyb2woZGlyLm5hbWUsIGRpci5jb250cm9sKSkpO1xuICAgICAgc2V0VXBDb250cm9sKGRpci5jb250cm9sLCBkaXIpO1xuICAgICAgZGlyLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7ZW1pdEV2ZW50OiBmYWxzZX0pO1xuICAgIH0pO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXRDb250cm9sKGRpcjogTmdNb2RlbCk6IEZvcm1Db250cm9sIHsgcmV0dXJuIC8qKiBAdHlwZSB7P30gKi8oKCA8Rm9ybUNvbnRyb2w+dGhpcy5mb3JtLmdldChkaXIucGF0aCkpKTsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xucmVtb3ZlQ29udHJvbChkaXI6IE5nTW9kZWwpOiB2b2lkIHtcbiAgICByZXNvbHZlZFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGNvbnRhaW5lciA9IHRoaXMuX2ZpbmRDb250YWluZXIoZGlyLnBhdGgpO1xuICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ29udHJvbChkaXIubmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmFkZEZvcm1Hcm91cChkaXI6IE5nTW9kZWxHcm91cCk6IHZvaWQge1xuICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY29udGFpbmVyID0gdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XG4gICAgICBzZXRVcEZvcm1Db250YWluZXIoZ3JvdXAsIGRpcik7XG4gICAgICBjb250YWluZXIucmVnaXN0ZXJDb250cm9sKGRpci5uYW1lLCBncm91cCk7XG4gICAgICBncm91cC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gICAgfSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlbW92ZUZvcm1Hcm91cChkaXI6IE5nTW9kZWxHcm91cCk6IHZvaWQge1xuICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY29udGFpbmVyID0gdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDb250cm9sKGRpci5uYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0Rm9ybUdyb3VwKGRpcjogTmdNb2RlbEdyb3VwKTogRm9ybUdyb3VwIHsgcmV0dXJuIC8qKiBAdHlwZSB7P30gKi8oKCA8Rm9ybUdyb3VwPnRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKSk7IH1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnVwZGF0ZU1vZGVsKGRpcjogTmdDb250cm9sLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjdHJsID0gLyoqIEB0eXBlIHs/fSAqLygoIDxGb3JtQ29udHJvbD50aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSkpO1xuICAgICAgY3RybC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuc2V0VmFsdWUodmFsdWU6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogdm9pZCB7IHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7IH1cbi8qKlxuICogQHBhcmFtIHs/fSAkZXZlbnRcbiAqIEByZXR1cm4gez99XG4gKi9cbm9uU3VibWl0KCRldmVudDogRXZlbnQpOiBib29sZWFuIHtcbiAgICB0aGlzLl9zdWJtaXR0ZWQgPSB0cnVlO1xuICAgIHRoaXMubmdTdWJtaXQuZW1pdCgkZXZlbnQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5vblJlc2V0KCk6IHZvaWQgeyB0aGlzLnJlc2V0Rm9ybSgpOyB9XG4vKipcbiAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZXNldEZvcm0odmFsdWU6IGFueSA9IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybS5yZXNldCh2YWx1ZSk7XG4gICAgdGhpcy5fc3VibWl0dGVkID0gZmFsc2U7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gcGF0aFxuICogQHJldHVybiB7P31cbiAqL1xuX2ZpbmRDb250YWluZXIocGF0aDogc3RyaW5nW10pOiBGb3JtR3JvdXAge1xuICAgIHBhdGgucG9wKCk7XG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoID8gLyoqIEB0eXBlIHs/fSAqLygoIDxGb3JtR3JvdXA+dGhpcy5mb3JtLmdldChwYXRoKSkpIDogdGhpcy5mb3JtO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnZm9ybTpub3QoW25nTm9Gb3JtXSk6bm90KFtmb3JtR3JvdXBdKSxuZ0Zvcm0sW25nRm9ybV0nLFxuICBwcm92aWRlcnM6IFtmb3JtRGlyZWN0aXZlUHJvdmlkZXJdLFxuICBob3N0OiB7JyhzdWJtaXQpJzogJ29uU3VibWl0KCRldmVudCknLCAnKHJlc2V0KSc6ICdvblJlc2V0KCknfSxcbiAgb3V0cHV0czogWyduZ1N1Ym1pdCddLFxuICBleHBvcnRBczogJ25nRm9ybSdcbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG5dO1xufVxuXG5mdW5jdGlvbiBOZ0Zvcm1fdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbk5nRm9ybS5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbk5nRm9ybS5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbk5nRm9ybS5wcm90b3R5cGUuX3N1Ym1pdHRlZDtcbi8qKiBAdHlwZSB7P30gKi9cbk5nRm9ybS5wcm90b3R5cGUuZm9ybTtcbi8qKiBAdHlwZSB7P30gKi9cbk5nRm9ybS5wcm90b3R5cGUubmdTdWJtaXQ7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL25nX2Zvcm0udHMiLCJcbi8qKlxuICogQGxpY2Vuc2UgXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuZXhwb3J0IGNvbnN0IEZvcm1FcnJvckV4YW1wbGVzID0ge1xuICBmb3JtQ29udHJvbE5hbWU6IGBcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwibXlHcm91cFwiPlxuICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cImZpcnN0TmFtZVwiPlxuICAgIDwvZGl2PlxuXG4gICAgSW4geW91ciBjbGFzczpcblxuICAgIHRoaXMubXlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgIGZpcnN0TmFtZTogbmV3IEZvcm1Db250cm9sKClcbiAgICB9KTtgLFxuXG4gIGZvcm1Hcm91cE5hbWU6IGBcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwibXlHcm91cFwiPlxuICAgICAgIDxkaXYgZm9ybUdyb3VwTmFtZT1cInBlcnNvblwiPlxuICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdE5hbWVcIj5cbiAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIEluIHlvdXIgY2xhc3M6XG5cbiAgICB0aGlzLm15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICBwZXJzb246IG5ldyBGb3JtR3JvdXAoeyBmaXJzdE5hbWU6IG5ldyBGb3JtQ29udHJvbCgpIH0pXG4gICAgfSk7YCxcblxuICBmb3JtQXJyYXlOYW1lOiBgXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cIm15R3JvdXBcIj5cbiAgICAgIDxkaXYgZm9ybUFycmF5TmFtZT1cImNpdGllc1wiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjaXR5IG9mIGNpdHlBcnJheS5jb250cm9sczsgaW5kZXggYXMgaVwiPlxuICAgICAgICAgIDxpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cImlcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIEluIHlvdXIgY2xhc3M6XG5cbiAgICB0aGlzLmNpdHlBcnJheSA9IG5ldyBGb3JtQXJyYXkoW25ldyBGb3JtQ29udHJvbCgnU0YnKV0pO1xuICAgIHRoaXMubXlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgY2l0aWVzOiB0aGlzLmNpdHlBcnJheVxuICAgIH0pO2AsXG5cbiAgbmdNb2RlbEdyb3VwOiBgXG4gICAgPGZvcm0+XG4gICAgICAgPGRpdiBuZ01vZGVsR3JvdXA9XCJwZXJzb25cIj5cbiAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJwZXJzb24ubmFtZVwiIG5hbWU9XCJmaXJzdE5hbWVcIj5cbiAgICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+YCxcblxuICBuZ01vZGVsV2l0aEZvcm1Hcm91cDogYFxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJteUdyb3VwXCI+XG4gICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cImZpcnN0TmFtZVwiPlxuICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cInNob3dNb3JlQ29udHJvbHNcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgPC9kaXY+XG4gIGBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvZXJyb3JfZXhhbXBsZXMudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtGb3JtRXJyb3JFeGFtcGxlcyBhcyBFeGFtcGxlc30gZnJvbSAnLi9lcnJvcl9leGFtcGxlcyc7XG5leHBvcnQgY2xhc3MgVGVtcGxhdGVEcml2ZW5FcnJvcnMge1xuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgbW9kZWxQYXJlbnRFeGNlcHRpb24oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcbiAgICAgIG5nTW9kZWwgY2Fubm90IGJlIHVzZWQgdG8gcmVnaXN0ZXIgZm9ybSBjb250cm9scyB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBUcnkgdXNpbmdcbiAgICAgIGZvcm1Hcm91cCdzIHBhcnRuZXIgZGlyZWN0aXZlIFwiZm9ybUNvbnRyb2xOYW1lXCIgaW5zdGVhZC4gIEV4YW1wbGU6XG5cbiAgICAgICR7RXhhbXBsZXMuZm9ybUNvbnRyb2xOYW1lfVxuXG4gICAgICBPciwgaWYgeW91J2QgbGlrZSB0byBhdm9pZCByZWdpc3RlcmluZyB0aGlzIGZvcm0gY29udHJvbCwgaW5kaWNhdGUgdGhhdCBpdCdzIHN0YW5kYWxvbmUgaW4gbmdNb2RlbE9wdGlvbnM6XG5cbiAgICAgIEV4YW1wbGU6XG5cbiAgICAgICR7RXhhbXBsZXMubmdNb2RlbFdpdGhGb3JtR3JvdXB9YCk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIGZvcm1Hcm91cE5hbWVFeGNlcHRpb24oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcbiAgICAgIG5nTW9kZWwgY2Fubm90IGJlIHVzZWQgdG8gcmVnaXN0ZXIgZm9ybSBjb250cm9scyB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cE5hbWUgb3IgZm9ybUFycmF5TmFtZSBkaXJlY3RpdmUuXG5cbiAgICAgIE9wdGlvbiAxOiBVc2UgZm9ybUNvbnRyb2xOYW1lIGluc3RlYWQgb2YgbmdNb2RlbCAocmVhY3RpdmUgc3RyYXRlZ3kpOlxuXG4gICAgICAke0V4YW1wbGVzLmZvcm1Hcm91cE5hbWV9XG5cbiAgICAgIE9wdGlvbiAyOiAgVXBkYXRlIG5nTW9kZWwncyBwYXJlbnQgYmUgbmdNb2RlbEdyb3VwICh0ZW1wbGF0ZS1kcml2ZW4gc3RyYXRlZ3kpOlxuXG4gICAgICAke0V4YW1wbGVzLm5nTW9kZWxHcm91cH1gKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgbWlzc2luZ05hbWVFeGNlcHRpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSWYgbmdNb2RlbCBpcyB1c2VkIHdpdGhpbiBhIGZvcm0gdGFnLCBlaXRoZXIgdGhlIG5hbWUgYXR0cmlidXRlIG11c3QgYmUgc2V0IG9yIHRoZSBmb3JtXG4gICAgICBjb250cm9sIG11c3QgYmUgZGVmaW5lZCBhcyAnc3RhbmRhbG9uZScgaW4gbmdNb2RlbE9wdGlvbnMuXG5cbiAgICAgIEV4YW1wbGUgMTogPGlucHV0IFsobmdNb2RlbCldPVwicGVyc29uLmZpcnN0TmFtZVwiIG5hbWU9XCJmaXJzdFwiPlxuICAgICAgRXhhbXBsZSAyOiA8aW5wdXQgWyhuZ01vZGVsKV09XCJwZXJzb24uZmlyc3ROYW1lXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPmApO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBtb2RlbEdyb3VwUGFyZW50RXhjZXB0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAgICBuZ01vZGVsR3JvdXAgY2Fubm90IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLlxuXG4gICAgICBPcHRpb24gMTogVXNlIGZvcm1Hcm91cE5hbWUgaW5zdGVhZCBvZiBuZ01vZGVsR3JvdXAgKHJlYWN0aXZlIHN0cmF0ZWd5KTpcblxuICAgICAgJHtFeGFtcGxlcy5mb3JtR3JvdXBOYW1lfVxuXG4gICAgICBPcHRpb24gMjogIFVzZSBhIHJlZ3VsYXIgZm9ybSB0YWcgaW5zdGVhZCBvZiB0aGUgZm9ybUdyb3VwIGRpcmVjdGl2ZSAodGVtcGxhdGUtZHJpdmVuIHN0cmF0ZWd5KTpcblxuICAgICAgJHtFeGFtcGxlcy5uZ01vZGVsR3JvdXB9YCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy90ZW1wbGF0ZV9kcml2ZW5fZXJyb3JzLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBIb3N0LCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFNlbGYsIFNraXBTZWxmLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtOR19BU1lOQ19WQUxJREFUT1JTLCBOR19WQUxJREFUT1JTfSBmcm9tICcuLi92YWxpZGF0b3JzJztcblxuaW1wb3J0IHtBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdF9mb3JtX2dyb3VwX2RpcmVjdGl2ZSc7XG5pbXBvcnQge0NvbnRyb2xDb250YWluZXJ9IGZyb20gJy4vY29udHJvbF9jb250YWluZXInO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJy4vbmdfZm9ybSc7XG5pbXBvcnQge1RlbXBsYXRlRHJpdmVuRXJyb3JzfSBmcm9tICcuL3RlbXBsYXRlX2RyaXZlbl9lcnJvcnMnO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBtb2RlbEdyb3VwUHJvdmlkZXI6IGFueSA9IHtcbiAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdNb2RlbEdyb3VwKVxufTtcbi8qKlxuICogXFxAd2hhdEl0RG9lcyBDcmVhdGVzIGFuZCBiaW5kcyBhIHtcXEBsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UgdG8gYSBET00gZWxlbWVudC5cbiAqIFxuICogXFxAaG93VG9Vc2UgXG4gKiBcbiAqIFRoaXMgZGlyZWN0aXZlIGNhbiBvbmx5IGJlIHVzZWQgYXMgYSBjaGlsZCBvZiB7XFxAbGluayBOZ0Zvcm19IChvciBpbiBvdGhlciB3b3JkcyxcbiAqIHdpdGhpbiBgPGZvcm0+YCB0YWdzKS5cbiAqIFxuICogVXNlIHRoaXMgZGlyZWN0aXZlIGlmIHlvdSdkIGxpa2UgdG8gY3JlYXRlIGEgc3ViLWdyb3VwIHdpdGhpbiBhIGZvcm0uIFRoaXMgY2FuXG4gKiBjb21lIGluIGhhbmR5IGlmIHlvdSB3YW50IHRvIHZhbGlkYXRlIGEgc3ViLWdyb3VwIG9mIHlvdXIgZm9ybSBzZXBhcmF0ZWx5IGZyb21cbiAqIHRoZSByZXN0IG9mIHlvdXIgZm9ybSwgb3IgaWYgc29tZSB2YWx1ZXMgaW4geW91ciBkb21haW4gbW9kZWwgbWFrZSBtb3JlIHNlbnNlIHRvXG4gKiBjb25zdW1lIHRvZ2V0aGVyIGluIGEgbmVzdGVkIG9iamVjdC5cbiAqIFxuICogUGFzcyBpbiB0aGUgbmFtZSB5b3UnZCBsaWtlIHRoaXMgc3ViLWdyb3VwIHRvIGhhdmUgYW5kIGl0IHdpbGwgYmVjb21lIHRoZSBrZXlcbiAqIGZvciB0aGUgc3ViLWdyb3VwIGluIHRoZSBmb3JtJ3MgZnVsbCB2YWx1ZS4gWW91IGNhbiBhbHNvIGV4cG9ydCB0aGUgZGlyZWN0aXZlIGludG9cbiAqIGEgbG9jYWwgdGVtcGxhdGUgdmFyaWFibGUgdXNpbmcgYG5nTW9kZWxHcm91cGAgKGV4OiBgI215R3JvdXA9XCJuZ01vZGVsR3JvdXBcImApLlxuICogXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9uZ01vZGVsR3JvdXAvbmdfbW9kZWxfZ3JvdXBfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gKiBcbiAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqIFxuICogKiAqKk5nTW9kdWxlKio6IGBGb3Jtc01vZHVsZWBcbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ01vZGVsR3JvdXAgZXh0ZW5kcyBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgIG5hbWU6IHN0cmluZztcbi8qKlxuICogQHBhcmFtIHs/fSBwYXJlbnRcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAqL1xuY29uc3RydWN0b3IoXG4gICAgICAgIHBhcmVudDogQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgIHZhbGlkYXRvcnM6IGFueVtdLFxuICAgICAgICAgYXN5bmNWYWxpZGF0b3JzOiBhbnlbXSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuX3ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzO1xuICAgIHRoaXMuX2FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycztcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX2NoZWNrUGFyZW50VHlwZSgpOiB2b2lkIHtcbiAgICBpZiAoISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ01vZGVsR3JvdXApICYmICEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgTmdGb3JtKSkge1xuICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMubW9kZWxHcm91cFBhcmVudEV4Y2VwdGlvbigpO1xuICAgIH1cbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe3NlbGVjdG9yOiAnW25nTW9kZWxHcm91cF0nLCBwcm92aWRlcnM6IFttb2RlbEdyb3VwUHJvdmlkZXJdLCBleHBvcnRBczogJ25nTW9kZWxHcm91cCd9LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IEhvc3QgfSwgeyB0eXBlOiBTa2lwU2VsZiB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUywgXSB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUywgXSB9LCBdfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ25hbWUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyduZ01vZGVsR3JvdXAnLCBdIH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIE5nTW9kZWxHcm91cF90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdNb2RlbEdyb3VwLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuTmdNb2RlbEdyb3VwLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdNb2RlbEdyb3VwLnByb3BEZWNvcmF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdNb2RlbEdyb3VwLnByb3RvdHlwZS5uYW1lO1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19tb2RlbF9ncm91cC50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0LCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3B0aW9uYWwsIE91dHB1dCwgU2VsZiwgU2ltcGxlQ2hhbmdlcywgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJy4uL21vZGVsJztcbmltcG9ydCB7TkdfQVNZTkNfVkFMSURBVE9SUywgTkdfVkFMSURBVE9SU30gZnJvbSAnLi4vdmFsaWRhdG9ycyc7XG5cbmltcG9ydCB7QWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3RfZm9ybV9ncm91cF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtDb250cm9sQ29udGFpbmVyfSBmcm9tICcuL2NvbnRyb2xfY29udGFpbmVyJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICcuL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gJy4vbmdfY29udHJvbCc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnLi9uZ19mb3JtJztcbmltcG9ydCB7TmdNb2RlbEdyb3VwfSBmcm9tICcuL25nX21vZGVsX2dyb3VwJztcbmltcG9ydCB7Y29tcG9zZUFzeW5jVmFsaWRhdG9ycywgY29tcG9zZVZhbGlkYXRvcnMsIGNvbnRyb2xQYXRoLCBpc1Byb3BlcnR5VXBkYXRlZCwgc2VsZWN0VmFsdWVBY2Nlc3Nvciwgc2V0VXBDb250cm9sfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQge1RlbXBsYXRlRHJpdmVuRXJyb3JzfSBmcm9tICcuL3RlbXBsYXRlX2RyaXZlbl9lcnJvcnMnO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvciwgQXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi92YWxpZGF0b3JzJztcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gZm9ybUNvbnRyb2xCaW5kaW5nOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5nQ29udHJvbCxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdNb2RlbClcbn07XG5cbi8qKlxuICogYG5nTW9kZWxgIGZvcmNlcyBhbiBhZGRpdGlvbmFsIGNoYW5nZSBkZXRlY3Rpb24gcnVuIHdoZW4gaXRzIGlucHV0cyBjaGFuZ2U6XG4gKiBFLmcuOlxuICogYGBgXG4gKiA8ZGl2Pnt7bXlNb2RlbC52YWxpZH19PC9kaXY+XG4gKiA8aW5wdXQgWyhuZ01vZGVsKV09XCJteVZhbHVlXCIgI215TW9kZWw9XCJuZ01vZGVsXCI+XG4gKiBgYGBcbiAqIEkuZS4gYG5nTW9kZWxgIGNhbiBleHBvcnQgaXRzZWxmIG9uIHRoZSBlbGVtZW50IGFuZCB0aGVuIGJlIHVzZWQgaW4gdGhlIHRlbXBsYXRlLlxuICogTm9ybWFsbHksIHRoaXMgd291bGQgcmVzdWx0IGluIGV4cHJlc3Npb25zIGJlZm9yZSB0aGUgYGlucHV0YCB0aGF0IHVzZSB0aGUgZXhwb3J0ZWQgZGlyZWN0aXZlXG4gKiB0byBoYXZlIGFuZCBvbGQgdmFsdWUgYXMgdGhleSBoYXZlIGJlZW5cbiAqIGRpcnR5IGNoZWNrZWQgYmVmb3JlLiBBcyB0aGlzIGlzIGEgdmVyeSBjb21tb24gY2FzZSBmb3IgYG5nTW9kZWxgLCB3ZSBhZGRlZCB0aGlzIHNlY29uZCBjaGFuZ2VcbiAqIGRldGVjdGlvbiBydW4uXG4gKlxuICogTm90ZXM6XG4gKiAtIHRoaXMgaXMganVzdCBvbmUgZXh0cmEgcnVuIG5vIG1hdHRlciBob3cgbWFueSBgbmdNb2RlbGAgaGF2ZSBiZWVuIGNoYW5nZWQuXG4gKiAtIHRoaXMgaXMgYSBnZW5lcmFsIHByb2JsZW0gd2hlbiB1c2luZyBgZXhwb3J0QXNgIGZvciBkaXJlY3RpdmVzIVxuICovXG5jb25zdCAvKiogQHR5cGUgez99ICovIHJlc29sdmVkUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShudWxsKTtcbi8qKlxuICogXFxAd2hhdEl0RG9lcyBDcmVhdGVzIGEge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlIGZyb20gYSBkb21haW4gbW9kZWwgYW5kIGJpbmRzIGl0XG4gKiB0byBhIGZvcm0gY29udHJvbCBlbGVtZW50LlxuICogXG4gKiBUaGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlIHdpbGwgdHJhY2sgdGhlIHZhbHVlLCB1c2VyIGludGVyYWN0aW9uLCBhbmRcbiAqIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBjb250cm9sIGFuZCBrZWVwIHRoZSB2aWV3IHN5bmNlZCB3aXRoIHRoZSBtb2RlbC4gSWYgdXNlZFxuICogd2l0aGluIGEgcGFyZW50IGZvcm0sIHRoZSBkaXJlY3RpdmUgd2lsbCBhbHNvIHJlZ2lzdGVyIGl0c2VsZiB3aXRoIHRoZSBmb3JtIGFzIGEgY2hpbGRcbiAqIGNvbnRyb2wuXG4gKiBcbiAqIFxcQGhvd1RvVXNlIFxuICogXG4gKiBUaGlzIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCBieSBpdHNlbGYgb3IgYXMgcGFydCBvZiBhIGxhcmdlciBmb3JtLiBBbGwgeW91IG5lZWQgaXMgdGhlXG4gKiBgbmdNb2RlbGAgc2VsZWN0b3IgdG8gYWN0aXZhdGUgaXQuXG4gKiBcbiAqIEl0IGFjY2VwdHMgYSBkb21haW4gbW9kZWwgYXMgYW4gb3B0aW9uYWwge1xcQGxpbmsgXFxASW5wdXR9LiBJZiB5b3UgaGF2ZSBhIG9uZS13YXkgYmluZGluZ1xuICogdG8gYG5nTW9kZWxgIHdpdGggYFtdYCBzeW50YXgsIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGUgZG9tYWluIG1vZGVsIGluIHRoZSBjb21wb25lbnRcbiAqIGNsYXNzIHdpbGwgc2V0IHRoZSB2YWx1ZSBpbiB0aGUgdmlldy4gSWYgeW91IGhhdmUgYSB0d28td2F5IGJpbmRpbmcgd2l0aCBgWygpXWAgc3ludGF4XG4gKiAoYWxzbyBrbm93biBhcyAnYmFuYW5hLWJveCBzeW50YXgnKSwgdGhlIHZhbHVlIGluIHRoZSBVSSB3aWxsIGFsd2F5cyBiZSBzeW5jZWQgYmFjayB0b1xuICogdGhlIGRvbWFpbiBtb2RlbCBpbiB5b3VyIGNsYXNzIGFzIHdlbGwuXG4gKiBcbiAqIElmIHlvdSB3aXNoIHRvIGluc3BlY3QgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGFzc29jaWF0ZWQge1xcQGxpbmsgRm9ybUNvbnRyb2x9IChsaWtlXG4gKiB2YWxpZGl0eSBzdGF0ZSksIHlvdSBjYW4gYWxzbyBleHBvcnQgdGhlIGRpcmVjdGl2ZSBpbnRvIGEgbG9jYWwgdGVtcGxhdGUgdmFyaWFibGUgdXNpbmdcbiAqIGBuZ01vZGVsYCBhcyB0aGUga2V5IChleDogYCNteVZhcj1cIm5nTW9kZWxcImApLiBZb3UgY2FuIHRoZW4gYWNjZXNzIHRoZSBjb250cm9sIHVzaW5nIHRoZVxuICogZGlyZWN0aXZlJ3MgYGNvbnRyb2xgIHByb3BlcnR5LCBidXQgbW9zdCBwcm9wZXJ0aWVzIHlvdSdsbCBuZWVkIChsaWtlIGB2YWxpZGAgYW5kIGBkaXJ0eWApXG4gKiB3aWxsIGZhbGwgdGhyb3VnaCB0byB0aGUgY29udHJvbCBhbnl3YXksIHNvIHlvdSBjYW4gYWNjZXNzIHRoZW0gZGlyZWN0bHkuIFlvdSBjYW4gc2VlIGFcbiAqIGZ1bGwgbGlzdCBvZiBwcm9wZXJ0aWVzIGRpcmVjdGx5IGF2YWlsYWJsZSBpbiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmV9LlxuICogXG4gKiBUaGUgZm9sbG93aW5nIGlzIGFuIGV4YW1wbGUgb2YgYSBzaW1wbGUgc3RhbmRhbG9uZSBjb250cm9sIHVzaW5nIGBuZ01vZGVsYDpcbiAqIFxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlTmdNb2RlbC9zaW1wbGVfbmdfbW9kZWxfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gKiBcbiAqIFdoZW4gdXNpbmcgdGhlIGBuZ01vZGVsYCB3aXRoaW4gYDxmb3JtPmAgdGFncywgeW91J2xsIGFsc28gbmVlZCB0byBzdXBwbHkgYSBgbmFtZWAgYXR0cmlidXRlXG4gKiBzbyB0aGF0IHRoZSBjb250cm9sIGNhbiBiZSByZWdpc3RlcmVkIHdpdGggdGhlIHBhcmVudCBmb3JtIHVuZGVyIHRoYXQgbmFtZS5cbiAqIFxuICogSXQncyB3b3J0aCBub3RpbmcgdGhhdCBpbiB0aGUgY29udGV4dCBvZiBhIHBhcmVudCBmb3JtLCB5b3Ugb2Z0ZW4gY2FuIHNraXAgb25lLXdheSBvclxuICogdHdvLXdheSBiaW5kaW5nIGJlY2F1c2UgdGhlIHBhcmVudCBmb3JtIHdpbGwgc3luYyB0aGUgdmFsdWUgZm9yIHlvdS4gWW91IGNhbiBhY2Nlc3NcbiAqIGl0cyBwcm9wZXJ0aWVzIGJ5IGV4cG9ydGluZyBpdCBpbnRvIGEgbG9jYWwgdGVtcGxhdGUgdmFyaWFibGUgdXNpbmcgYG5nRm9ybWAgKGV4OlxuICogYCNmPVwibmdGb3JtXCJgKS4gVGhlbiB5b3UgY2FuIHBhc3MgaXQgd2hlcmUgaXQgbmVlZHMgdG8gZ28gb24gc3VibWl0LlxuICogXG4gKiBJZiB5b3UgZG8gbmVlZCB0byBwb3B1bGF0ZSBpbml0aWFsIHZhbHVlcyBpbnRvIHlvdXIgZm9ybSwgdXNpbmcgYSBvbmUtd2F5IGJpbmRpbmcgZm9yXG4gKiBgbmdNb2RlbGAgdGVuZHMgdG8gYmUgc3VmZmljaWVudCBhcyBsb25nIGFzIHlvdSB1c2UgdGhlIGV4cG9ydGVkIGZvcm0ncyB2YWx1ZSByYXRoZXJcbiAqIHRoYW4gdGhlIGRvbWFpbiBtb2RlbCdzIHZhbHVlIG9uIHN1Ym1pdC5cbiAqIFxuICogVGFrZSBhIGxvb2sgYXQgYW4gZXhhbXBsZSBvZiB1c2luZyBgbmdNb2RlbGAgd2l0aGluIGEgZm9ybTpcbiAqIFxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybS9zaW1wbGVfZm9ybV9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqIFxuICogVG8gc2VlIGBuZ01vZGVsYCBleGFtcGxlcyB3aXRoIGRpZmZlcmVudCBmb3JtIGNvbnRyb2wgdHlwZXMsIHNlZTpcbiAqIFxuICogKiBSYWRpbyBidXR0b25zOiB7XFxAbGluayBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yfVxuICogKiBTZWxlY3RzOiB7XFxAbGluayBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn1cbiAqIFxuICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqIFxuICogKipOZ01vZHVsZSoqOiBgRm9ybXNNb2R1bGVgXG4gKiBcbiAqICBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIE5nTW9kZWwgZXh0ZW5kcyBOZ0NvbnRyb2wgaW1wbGVtZW50cyBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95IHtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX2NvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX3JlZ2lzdGVyZWQgPSBmYWxzZTtcbiAgdmlld01vZGVsOiBhbnk7XG5cbiAgIG5hbWU6IHN0cmluZztcbiAgIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBtb2RlbDogYW55O1xuICAgb3B0aW9uczoge25hbWU/OiBzdHJpbmcsIHN0YW5kYWxvbmU/OiBib29sZWFufTtcblxuICAgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuLyoqXG4gKiBAcGFyYW0gez99IHBhcmVudFxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICogQHBhcmFtIHs/fSB2YWx1ZUFjY2Vzc29yc1xuICovXG5jb25zdHJ1Y3RvciggIHBhcmVudDogQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczogQXJyYXk8VmFsaWRhdG9yfFZhbGlkYXRvckZuPixcbiAgICAgICAgICAgICAgICAgYXN5bmNWYWxpZGF0b3JzOiBBcnJheTxBc3luY1ZhbGlkYXRvcnxBc3luY1ZhbGlkYXRvckZuPixcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgdmFsdWVBY2Nlc3NvcnM6IENvbnRyb2xWYWx1ZUFjY2Vzc29yW10pIHtcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICB0aGlzLl9yYXdWYWxpZGF0b3JzID0gdmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnMgfHwgW107XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yID0gc2VsZWN0VmFsdWVBY2Nlc3Nvcih0aGlzLCB2YWx1ZUFjY2Vzc29ycyk7XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tGb3JFcnJvcnMoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3JlZ2lzdGVyZWQpIHRoaXMuX3NldFVwQ29udHJvbCgpO1xuICAgICAgICAgICAgICAgIGlmICgnaXNEaXNhYmxlZCcgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRGlzYWJsZWQoY2hhbmdlcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHRoaXMudmlld01vZGVsKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWUodGhpcy5tb2RlbCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IHRoaXMubW9kZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25EZXN0cm95KCk6IHZvaWQgeyB0aGlzLmZvcm1EaXJlY3RpdmUgJiYgdGhpcy5mb3JtRGlyZWN0aXZlLnJlbW92ZUNvbnRyb2wodGhpcyk7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGNvbnRyb2woKTogRm9ybUNvbnRyb2wgeyByZXR1cm4gdGhpcy5fY29udHJvbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcGF0aCgpOiBzdHJpbmdbXSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudCA/IGNvbnRyb2xQYXRoKHRoaXMubmFtZSwgdGhpcy5fcGFyZW50KSA6IFt0aGlzLm5hbWVdO1xuICAgICAgICAgICAgICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBmb3JtRGlyZWN0aXZlKCk6IGFueSB7IHJldHVybiB0aGlzLl9wYXJlbnQgPyB0aGlzLl9wYXJlbnQuZm9ybURpcmVjdGl2ZSA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl9yYXdWYWxpZGF0b3JzKTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgYXN5bmNWYWxpZGF0b3IoKTogQXN5bmNWYWxpZGF0b3JGbiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzKTtcbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcGFyYW0gez99IG5ld1ZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG52aWV3VG9Nb2RlbFVwZGF0ZShuZXdWYWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9zZXRVcENvbnRyb2woKTogdm9pZCB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNTdGFuZGFsb25lKCkgPyB0aGlzLl9zZXRVcFN0YW5kYWxvbmUoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUuYWRkQ29udHJvbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWdpc3RlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9pc1N0YW5kYWxvbmUoKTogYm9vbGVhbiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9wYXJlbnQgfHwgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuc3RhbmRhbG9uZSk7XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfc2V0VXBTdGFuZGFsb25lKCk6IHZvaWQge1xuICAgICAgICAgICAgICAgIHNldFVwQ29udHJvbCh0aGlzLl9jb250cm9sLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe2VtaXRFdmVudDogZmFsc2V9KTtcbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9jaGVja0ZvckVycm9ycygpOiB2b2lkIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lzU3RhbmRhbG9uZSgpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1BhcmVudFR5cGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tOYW1lKCk7XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfY2hlY2tQYXJlbnRUeXBlKCk6IHZvaWQge1xuICAgICAgICAgICAgICAgIGlmICghKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIE5nTW9kZWxHcm91cCkgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50IGluc3RhbmNlb2YgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLmZvcm1Hcm91cE5hbWVFeGNlcHRpb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIE5nTW9kZWxHcm91cCkgJiYgISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ0Zvcm0pKSB7XG4gICAgICAgICAgICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5tb2RlbFBhcmVudEV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9jaGVja05hbWUoKTogdm9pZCB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubmFtZSkgdGhpcy5uYW1lID0gdGhpcy5vcHRpb25zLm5hbWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lzU3RhbmRhbG9uZSgpICYmICF0aGlzLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLm1pc3NpbmdOYW1lRXhjZXB0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX3VwZGF0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZFByb21pc2UudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4geyB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUsIHtlbWl0Vmlld1RvTW9kZWxDaGFuZ2U6IGZhbHNlfSk7IH0pO1xuICAgICAgICAgICAgICB9XG4vKipcbiAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfdXBkYXRlRGlzYWJsZWQoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gZGlzYWJsZWRWYWx1ZSA9IGNoYW5nZXNbJ2lzRGlzYWJsZWQnXS5jdXJyZW50VmFsdWU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGlzRGlzYWJsZWQgPVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFZhbHVlID09PSAnJyB8fCAoZGlzYWJsZWRWYWx1ZSAmJiBkaXNhYmxlZFZhbHVlICE9PSAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChpc0Rpc2FibGVkICYmICF0aGlzLmNvbnRyb2wuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sLmRpc2FibGUoKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzRGlzYWJsZWQgJiYgdGhpcy5jb250cm9sLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjogJ1tuZ01vZGVsXTpub3QoW2Zvcm1Db250cm9sTmFtZV0pOm5vdChbZm9ybUNvbnRyb2xdKScsXG4gIHByb3ZpZGVyczogW2Zvcm1Db250cm9sQmluZGluZ10sXG4gIGV4cG9ydEFzOiAnbmdNb2RlbCdcbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBIb3N0IH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLCBdIH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLCBdIH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxVRV9BQ0NFU1NPUiwgXSB9LCBdfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ25hbWUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4naXNEaXNhYmxlZCc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2Rpc2FibGVkJywgXSB9LF0sXG4nbW9kZWwnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyduZ01vZGVsJywgXSB9LF0sXG4nb3B0aW9ucyc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ25nTW9kZWxPcHRpb25zJywgXSB9LF0sXG4ndXBkYXRlJzogW3sgdHlwZTogT3V0cHV0LCBhcmdzOiBbJ25nTW9kZWxDaGFuZ2UnLCBdIH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIE5nTW9kZWxfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbk5nTW9kZWwuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5OZ01vZGVsLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdNb2RlbC5wcm9wRGVjb3JhdG9ycztcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5OZ01vZGVsLnByb3RvdHlwZS5fY29udHJvbDtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5OZ01vZGVsLnByb3RvdHlwZS5fcmVnaXN0ZXJlZDtcbi8qKiBAdHlwZSB7P30gKi9cbk5nTW9kZWwucHJvdG90eXBlLnZpZXdNb2RlbDtcbi8qKiBAdHlwZSB7P30gKi9cbk5nTW9kZWwucHJvdG90eXBlLm5hbWU7XG4vKiogQHR5cGUgez99ICovXG5OZ01vZGVsLnByb3RvdHlwZS5pc0Rpc2FibGVkO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdNb2RlbC5wcm90b3R5cGUubW9kZWw7XG4vKiogQHR5cGUgez99ICovXG5OZ01vZGVsLnByb3RvdHlwZS5vcHRpb25zO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdNb2RlbC5wcm90b3R5cGUudXBkYXRlO1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19tb2RlbC50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5cbmltcG9ydCB7Rm9ybUVycm9yRXhhbXBsZXMgYXMgRXhhbXBsZXN9IGZyb20gJy4vZXJyb3JfZXhhbXBsZXMnO1xuZXhwb3J0IGNsYXNzIFJlYWN0aXZlRXJyb3JzIHtcbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIGNvbnRyb2xQYXJlbnRFeGNlcHRpb24oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgZm9ybUNvbnRyb2xOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcbiAgICAgICBkaXJlY3RpdmUgYW5kIHBhc3MgaXQgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIGluc3RhbmNlICh5b3UgY2FuIGNyZWF0ZSBvbmUgaW4geW91ciBjbGFzcykuXG5cbiAgICAgIEV4YW1wbGU6XG5cbiAgICAgICR7RXhhbXBsZXMuZm9ybUNvbnRyb2xOYW1lfWApO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBuZ01vZGVsR3JvdXBFeGNlcHRpb24oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgZm9ybUNvbnRyb2xOYW1lIGNhbm5vdCBiZSB1c2VkIHdpdGggYW4gbmdNb2RlbEdyb3VwIHBhcmVudC4gSXQgaXMgb25seSBjb21wYXRpYmxlIHdpdGggcGFyZW50c1xuICAgICAgIHRoYXQgYWxzbyBoYXZlIGEgXCJmb3JtXCIgcHJlZml4OiBmb3JtR3JvdXBOYW1lLCBmb3JtQXJyYXlOYW1lLCBvciBmb3JtR3JvdXAuXG5cbiAgICAgICBPcHRpb24gMTogIFVwZGF0ZSB0aGUgcGFyZW50IHRvIGJlIGZvcm1Hcm91cE5hbWUgKHJlYWN0aXZlIGZvcm0gc3RyYXRlZ3kpXG5cbiAgICAgICAgJHtFeGFtcGxlcy5mb3JtR3JvdXBOYW1lfVxuXG4gICAgICAgIE9wdGlvbiAyOiBVc2UgbmdNb2RlbCBpbnN0ZWFkIG9mIGZvcm1Db250cm9sTmFtZSAodGVtcGxhdGUtZHJpdmVuIHN0cmF0ZWd5KVxuXG4gICAgICAgICR7RXhhbXBsZXMubmdNb2RlbEdyb3VwfWApO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBtaXNzaW5nRm9ybUV4Y2VwdGlvbigpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGZvcm1Hcm91cCBleHBlY3RzIGEgRm9ybUdyb3VwIGluc3RhbmNlLiBQbGVhc2UgcGFzcyBvbmUgaW4uXG5cbiAgICAgICBFeGFtcGxlOlxuXG4gICAgICAgJHtFeGFtcGxlcy5mb3JtQ29udHJvbE5hbWV9YCk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIGdyb3VwUGFyZW50RXhjZXB0aW9uKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYGZvcm1Hcm91cE5hbWUgbXVzdCBiZSB1c2VkIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS4gIFlvdSdsbCB3YW50IHRvIGFkZCBhIGZvcm1Hcm91cFxuICAgICAgZGlyZWN0aXZlIGFuZCBwYXNzIGl0IGFuIGV4aXN0aW5nIEZvcm1Hcm91cCBpbnN0YW5jZSAoeW91IGNhbiBjcmVhdGUgb25lIGluIHlvdXIgY2xhc3MpLlxuXG4gICAgICBFeGFtcGxlOlxuXG4gICAgICAke0V4YW1wbGVzLmZvcm1Hcm91cE5hbWV9YCk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIGFycmF5UGFyZW50RXhjZXB0aW9uKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYGZvcm1BcnJheU5hbWUgbXVzdCBiZSB1c2VkIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS4gIFlvdSdsbCB3YW50IHRvIGFkZCBhIGZvcm1Hcm91cFxuICAgICAgIGRpcmVjdGl2ZSBhbmQgcGFzcyBpdCBhbiBleGlzdGluZyBGb3JtR3JvdXAgaW5zdGFuY2UgKHlvdSBjYW4gY3JlYXRlIG9uZSBpbiB5b3VyIGNsYXNzKS5cblxuICAgICAgICBFeGFtcGxlOlxuXG4gICAgICAgICR7RXhhbXBsZXMuZm9ybUFycmF5TmFtZX1gKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgZGlzYWJsZWRBdHRyV2FybmluZygpOiB2b2lkIHtcbiAgICBjb25zb2xlLndhcm4oYFxuICAgICAgSXQgbG9va3MgbGlrZSB5b3UncmUgdXNpbmcgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSB3aXRoIGEgcmVhY3RpdmUgZm9ybSBkaXJlY3RpdmUuIElmIHlvdSBzZXQgZGlzYWJsZWQgdG8gdHJ1ZVxuICAgICAgd2hlbiB5b3Ugc2V0IHVwIHRoaXMgY29udHJvbCBpbiB5b3VyIGNvbXBvbmVudCBjbGFzcywgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSB3aWxsIGFjdHVhbGx5IGJlIHNldCBpbiB0aGUgRE9NIGZvclxuICAgICAgeW91LiBXZSByZWNvbW1lbmQgdXNpbmcgdGhpcyBhcHByb2FjaCB0byBhdm9pZCAnY2hhbmdlZCBhZnRlciBjaGVja2VkJyBlcnJvcnMuXG4gICAgICAgXG4gICAgICBFeGFtcGxlOiBcbiAgICAgIGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCh7dmFsdWU6ICdOYW5jeScsIGRpc2FibGVkOiB0cnVlfSwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgnRHJldycsIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgICB9KTtcbiAgICBgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3JlYWN0aXZlX2Vycm9ycy50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIE9wdGlvbmFsLCBPdXRwdXQsIFNlbGYsIFNpbXBsZUNoYW5nZXMsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5pbXBvcnQge05HX0FTWU5DX1ZBTElEQVRPUlMsIE5HX1ZBTElEQVRPUlN9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJy4uL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gJy4uL25nX2NvbnRyb2wnO1xuaW1wb3J0IHtSZWFjdGl2ZUVycm9yc30gZnJvbSAnLi4vcmVhY3RpdmVfZXJyb3JzJztcbmltcG9ydCB7Y29tcG9zZUFzeW5jVmFsaWRhdG9ycywgY29tcG9zZVZhbGlkYXRvcnMsIGlzUHJvcGVydHlVcGRhdGVkLCBzZWxlY3RWYWx1ZUFjY2Vzc29yLCBzZXRVcENvbnRyb2x9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yLCBBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZufSBmcm9tICcuLi92YWxpZGF0b3JzJztcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gZm9ybUNvbnRyb2xCaW5kaW5nOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5nQ29udHJvbCxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybUNvbnRyb2xEaXJlY3RpdmUpXG59O1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIFN5bmNzIGEgc3RhbmRhbG9uZSB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgdG8gYSBmb3JtIGNvbnRyb2wgZWxlbWVudC5cbiAqIFxuICogSW4gb3RoZXIgd29yZHMsIHRoaXMgZGlyZWN0aXZlIGVuc3VyZXMgdGhhdCBhbnkgdmFsdWVzIHdyaXR0ZW4gdG8gdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfVxuICogaW5zdGFuY2UgcHJvZ3JhbW1hdGljYWxseSB3aWxsIGJlIHdyaXR0ZW4gdG8gdGhlIERPTSBlbGVtZW50IChtb2RlbCAtPiB2aWV3KS4gQ29udmVyc2VseSxcbiAqIGFueSB2YWx1ZXMgd3JpdHRlbiB0byB0aGUgRE9NIGVsZW1lbnQgdGhyb3VnaCB1c2VyIGlucHV0IHdpbGwgYmUgcmVmbGVjdGVkIGluIHRoZVxuICoge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlICh2aWV3IC0+IG1vZGVsKS5cbiAqIFxuICogXFxAaG93VG9Vc2UgXG4gKiBcbiAqIFVzZSB0aGlzIGRpcmVjdGl2ZSBpZiB5b3UnZCBsaWtlIHRvIGNyZWF0ZSBhbmQgbWFuYWdlIGEge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlIGRpcmVjdGx5LlxuICogU2ltcGx5IGNyZWF0ZSBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSwgc2F2ZSBpdCB0byB5b3VyIGNvbXBvbmVudCBjbGFzcywgYW5kIHBhc3MgaXQgaW50byB0aGVcbiAqIHtcXEBsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfS5cbiAqIFxuICogVGhpcyBkaXJlY3RpdmUgaXMgZGVzaWduZWQgdG8gYmUgdXNlZCBhcyBhIHN0YW5kYWxvbmUgY29udHJvbC4gIFVubGlrZSB7XFxAbGluayBGb3JtQ29udHJvbE5hbWV9LFxuICogaXQgZG9lcyBub3QgcmVxdWlyZSB0aGF0IHlvdXIge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlIGJlIHBhcnQgb2YgYW55IHBhcmVudFxuICoge1xcQGxpbmsgRm9ybUdyb3VwfSwgYW5kIGl0IHdvbid0IGJlIHJlZ2lzdGVyZWQgdG8gYW55IHtcXEBsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0gdGhhdFxuICogZXhpc3RzIGFib3ZlIGl0LlxuICogXG4gKiAqKkdldCB0aGUgdmFsdWUqKjogdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgYWx3YXlzIHN5bmNlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZVxuICoge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlLiBTZWUgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIHByb3BlcnRpZXMgaW5cbiAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0uXG4gKiBcbiAqICoqU2V0IHRoZSB2YWx1ZSoqOiBZb3UgY2FuIHBhc3MgaW4gYW4gaW5pdGlhbCB2YWx1ZSB3aGVuIGluc3RhbnRpYXRpbmcgdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfSxcbiAqIG9yIHlvdSBjYW4gc2V0IGl0IHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmcge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnNldFZhbHVlfSBvclxuICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnBhdGNoVmFsdWV9LlxuICogXG4gKiAqKkxpc3RlbiB0byB2YWx1ZSoqOiBJZiB5b3Ugd2FudCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wsIHlvdSBjYW5cbiAqIHN1YnNjcmliZSB0byB0aGUge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnZhbHVlQ2hhbmdlc30gZXZlbnQuICBZb3UgY2FuIGFsc28gbGlzdGVuIHRvXG4gKiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzQ2hhbmdlc30gdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgaXNcbiAqIHJlLWNhbGN1bGF0ZWQuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3NpbXBsZUZvcm1Db250cm9sL3NpbXBsZV9mb3JtX2NvbnRyb2xfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gKiBcbiAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqIFxuICogKiAqKk5nTW9kdWxlKio6IGBSZWFjdGl2ZUZvcm1zTW9kdWxlYFxuICogXG4gKiAgXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbERpcmVjdGl2ZSBleHRlbmRzIE5nQ29udHJvbCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHZpZXdNb2RlbDogYW55O1xuXG4gICBmb3JtOiBGb3JtQ29udHJvbDtcbiAgIG1vZGVsOiBhbnk7XG4gICB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4vKipcbiAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICogQHJldHVybiB7P31cbiAqL1xuc2V0IGlzRGlzYWJsZWQoaXNEaXNhYmxlZDogYm9vbGVhbikgeyBSZWFjdGl2ZUVycm9ycy5kaXNhYmxlZEF0dHJXYXJuaW5nKCk7IH1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICogQHBhcmFtIHs/fSB2YWx1ZUFjY2Vzc29yc1xuICovXG5jb25zdHJ1Y3RvciggICB2YWxpZGF0b3JzOiBBcnJheTxWYWxpZGF0b3J8VmFsaWRhdG9yRm4+LFxuICAgICAgICAgICAgICAgICBhc3luY1ZhbGlkYXRvcnM6IEFycmF5PEFzeW5jVmFsaWRhdG9yfEFzeW5jVmFsaWRhdG9yRm4+LFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB2YWx1ZUFjY2Vzc29yczogQ29udHJvbFZhbHVlQWNjZXNzb3JbXSkge1xuICAgICAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmF3VmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMgfHwgW107XG4gICAgICAgICAgICAgICAgdGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVBY2Nlc3NvciA9IHNlbGVjdFZhbHVlQWNjZXNzb3IodGhpcywgdmFsdWVBY2Nlc3NvcnMpO1xuICAgICAgICAgICAgICB9XG4vKipcbiAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICogQHJldHVybiB7P31cbiAqL1xubmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0NvbnRyb2xDaGFuZ2VkKGNoYW5nZXMpKSB7XG4gICAgICAgICAgICAgICAgICBzZXRVcENvbnRyb2wodGhpcy5mb3JtLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2wuZGlzYWJsZWQgJiYgdGhpcy52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0aGlzLmZvcm0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7ZW1pdEV2ZW50OiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdGhpcy52aWV3TW9kZWwpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uc2V0VmFsdWUodGhpcy5tb2RlbCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IHRoaXMubW9kZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBwYXRoKCk6IHN0cmluZ1tdIHsgcmV0dXJuIFtdOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4geyByZXR1cm4gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fcmF3VmFsaWRhdG9ycyk7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGFzeW5jVmFsaWRhdG9yKCk6IEFzeW5jVmFsaWRhdG9yRm4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyk7XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGNvbnRyb2woKTogRm9ybUNvbnRyb2wgeyByZXR1cm4gdGhpcy5mb3JtOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gbmV3VmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnZpZXdUb01vZGVsVXBkYXRlKG5ld1ZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlLmVtaXQobmV3VmFsdWUpO1xuICAgICAgICAgICAgICB9XG4vKipcbiAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfaXNDb250cm9sQ2hhbmdlZChjaGFuZ2VzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IGJvb2xlYW4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdmb3JtJyk7XG4gICAgICAgICAgICAgIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tzZWxlY3RvcjogJ1tmb3JtQ29udHJvbF0nLCBwcm92aWRlcnM6IFtmb3JtQ29udHJvbEJpbmRpbmddLCBleHBvcnRBczogJ25nRm9ybSd9LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLCBdIH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLCBdIH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxVRV9BQ0NFU1NPUiwgXSB9LCBdfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ2Zvcm0nOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydmb3JtQ29udHJvbCcsIF0gfSxdLFxuJ21vZGVsJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnbmdNb2RlbCcsIF0gfSxdLFxuJ3VwZGF0ZSc6IFt7IHR5cGU6IE91dHB1dCwgYXJnczogWyduZ01vZGVsQ2hhbmdlJywgXSB9LF0sXG4naXNEaXNhYmxlZCc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2Rpc2FibGVkJywgXSB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBGb3JtQ29udHJvbERpcmVjdGl2ZV90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUNvbnRyb2xEaXJlY3RpdmUuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5Gb3JtQ29udHJvbERpcmVjdGl2ZS5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Db250cm9sRGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLnZpZXdNb2RlbDtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZS5mb3JtO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLm1vZGVsO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLnVwZGF0ZTtcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2NvbnRyb2xfZGlyZWN0aXZlLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT3B0aW9uYWwsIE91dHB1dCwgU2VsZiwgU2ltcGxlQ2hhbmdlcywgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1BcnJheSwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuaW1wb3J0IHtOR19BU1lOQ19WQUxJREFUT1JTLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3JzfSBmcm9tICcuLi8uLi92YWxpZGF0b3JzJztcbmltcG9ydCB7Q29udHJvbENvbnRhaW5lcn0gZnJvbSAnLi4vY29udHJvbF9jb250YWluZXInO1xuaW1wb3J0IHtGb3JtfSBmcm9tICcuLi9mb3JtX2ludGVyZmFjZSc7XG5pbXBvcnQge1JlYWN0aXZlRXJyb3JzfSBmcm9tICcuLi9yZWFjdGl2ZV9lcnJvcnMnO1xuaW1wb3J0IHtjbGVhblVwQ29udHJvbCwgY29tcG9zZUFzeW5jVmFsaWRhdG9ycywgY29tcG9zZVZhbGlkYXRvcnMsIHNldFVwQ29udHJvbCwgc2V0VXBGb3JtQ29udGFpbmVyfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5pbXBvcnQge0Zvcm1Db250cm9sTmFtZX0gZnJvbSAnLi9mb3JtX2NvbnRyb2xfbmFtZSc7XG5pbXBvcnQge0Zvcm1BcnJheU5hbWUsIEZvcm1Hcm91cE5hbWV9IGZyb20gJy4vZm9ybV9ncm91cF9uYW1lJztcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gZm9ybURpcmVjdGl2ZVByb3ZpZGVyOiBhbnkgPSB7XG4gIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZvcm1Hcm91cERpcmVjdGl2ZSlcbn07XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgQmluZHMgYW4gZXhpc3Rpbmcge1xcQGxpbmsgRm9ybUdyb3VwfSB0byBhIERPTSBlbGVtZW50LlxuICogXG4gKiBcXEBob3dUb1VzZSBcbiAqIFxuICogVGhpcyBkaXJlY3RpdmUgYWNjZXB0cyBhbiBleGlzdGluZyB7XFxAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlLiBJdCB3aWxsIHRoZW4gdXNlIHRoaXNcbiAqIHtcXEBsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UgdG8gbWF0Y2ggYW55IGNoaWxkIHtcXEBsaW5rIEZvcm1Db250cm9sfSwge1xcQGxpbmsgRm9ybUdyb3VwfSxcbiAqIGFuZCB7XFxAbGluayBGb3JtQXJyYXl9IGluc3RhbmNlcyB0byBjaGlsZCB7XFxAbGluayBGb3JtQ29udHJvbE5hbWV9LCB7XFxAbGluayBGb3JtR3JvdXBOYW1lfSxcbiAqIGFuZCB7XFxAbGluayBGb3JtQXJyYXlOYW1lfSBkaXJlY3RpdmVzLlxuICogXG4gKiAqKlNldCB2YWx1ZSoqOiBZb3UgY2FuIHNldCB0aGUgZm9ybSdzIGluaXRpYWwgdmFsdWUgd2hlbiBpbnN0YW50aWF0aW5nIHRoZVxuICoge1xcQGxpbmsgRm9ybUdyb3VwfSwgb3IgeW91IGNhbiBzZXQgaXQgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZyB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfSdzXG4gKiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuc2V0VmFsdWV9IG9yIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5wYXRjaFZhbHVlfSBtZXRob2RzLlxuICogXG4gKiAqKkxpc3RlbiB0byB2YWx1ZSoqOiBJZiB5b3Ugd2FudCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIGZvcm0sIHlvdSBjYW4gc3Vic2NyaWJlXG4gKiB0byB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfSdzIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICogaXRzIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXNDaGFuZ2VzfSBldmVudCB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBpc1xuICogcmUtY2FsY3VsYXRlZC5cbiAqIFxuICogRnVydGhlcm1vcmUsIHlvdSBjYW4gbGlzdGVuIHRvIHRoZSBkaXJlY3RpdmUncyBgbmdTdWJtaXRgIGV2ZW50IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHVzZXIgaGFzXG4gKiB0cmlnZ2VyZWQgYSBmb3JtIHN1Ym1pc3Npb24uIFRoZSBgbmdTdWJtaXRgIGV2ZW50IHdpbGwgYmUgZW1pdHRlZCB3aXRoIHRoZSBvcmlnaW5hbCBmb3JtXG4gKiBzdWJtaXNzaW9uIGV2ZW50LlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiBJbiB0aGlzIGV4YW1wbGUsIHdlIGNyZWF0ZSBmb3JtIGNvbnRyb2xzIGZvciBmaXJzdCBuYW1lIGFuZCBsYXN0IG5hbWUuXG4gKiBcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3NpbXBsZUZvcm1Hcm91cC9zaW1wbGVfZm9ybV9ncm91cF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqIFxuICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqIFxuICogKipOZ01vZHVsZSoqOiB7XFxAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfVxuICogXG4gKiAgXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtR3JvdXBEaXJlY3RpdmUgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIGltcGxlbWVudHMgRm9ybSxcbiAgICBPbkNoYW5nZXMge1xucHJpdmF0ZSBfc3VibWl0dGVkOiBib29sZWFuID0gZmFsc2U7XG5wcml2YXRlIF9vbGRGb3JtOiBGb3JtR3JvdXA7XG4gIGRpcmVjdGl2ZXM6IEZvcm1Db250cm9sTmFtZVtdID0gW107XG5cbiAgIGZvcm06IEZvcm1Hcm91cCA9IG51bGw7XG4gICBuZ1N1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbi8qKlxuICogQHBhcmFtIHs/fSBfdmFsaWRhdG9yc1xuICogQHBhcmFtIHs/fSBfYXN5bmNWYWxpZGF0b3JzXG4gKi9cbmNvbnN0cnVjdG9yKFxucHJpdmF0ZSBfdmFsaWRhdG9yczogYW55W10sXG5wcml2YXRlIF9hc3luY1ZhbGlkYXRvcnM6IGFueVtdKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGNoYW5nZXNcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGVja0Zvcm1QcmVzZW50KCk7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Zvcm0nKSkge1xuICAgICAgdGhpcy5fdXBkYXRlVmFsaWRhdG9ycygpO1xuICAgICAgdGhpcy5fdXBkYXRlRG9tVmFsdWUoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVJlZ2lzdHJhdGlvbnMoKTtcbiAgICB9XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHN1Ym1pdHRlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3N1Ym1pdHRlZDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgZm9ybURpcmVjdGl2ZSgpOiBGb3JtIHsgcmV0dXJuIHRoaXM7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGNvbnRyb2woKTogRm9ybUdyb3VwIHsgcmV0dXJuIHRoaXMuZm9ybTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcGF0aCgpOiBzdHJpbmdbXSB7IHJldHVybiBbXTsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xuYWRkQ29udHJvbChkaXI6IEZvcm1Db250cm9sTmFtZSk6IEZvcm1Db250cm9sIHtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGN0cmw6IGFueSA9IHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpO1xuICAgIHNldFVwQ29udHJvbChjdHJsLCBkaXIpO1xuICAgIGN0cmwudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7ZW1pdEV2ZW50OiBmYWxzZX0pO1xuICAgIHRoaXMuZGlyZWN0aXZlcy5wdXNoKGRpcik7XG4gICAgcmV0dXJuIGN0cmw7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldENvbnRyb2woZGlyOiBGb3JtQ29udHJvbE5hbWUpOiBGb3JtQ29udHJvbCB7IHJldHVybiAvKiogQHR5cGUgez99ICovKCggPEZvcm1Db250cm9sPnRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKSk7IH1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlbW92ZUNvbnRyb2woZGlyOiBGb3JtQ29udHJvbE5hbWUpOiB2b2lkIHsgcmVtb3ZlKHRoaXMuZGlyZWN0aXZlcywgZGlyKTsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xuYWRkRm9ybUdyb3VwKGRpcjogRm9ybUdyb3VwTmFtZSk6IHZvaWQge1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY3RybDogYW55ID0gdGhpcy5mb3JtLmdldChkaXIucGF0aCk7XG4gICAgc2V0VXBGb3JtQ29udGFpbmVyKGN0cmwsIGRpcik7XG4gICAgY3RybC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlbW92ZUZvcm1Hcm91cChkaXI6IEZvcm1Hcm91cE5hbWUpOiB2b2lkIHt9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXRGb3JtR3JvdXAoZGlyOiBGb3JtR3JvdXBOYW1lKTogRm9ybUdyb3VwIHsgcmV0dXJuIC8qKiBAdHlwZSB7P30gKi8oKCA8Rm9ybUdyb3VwPnRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKSk7IH1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmFkZEZvcm1BcnJheShkaXI6IEZvcm1BcnJheU5hbWUpOiB2b2lkIHtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGN0cmw6IGFueSA9IHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpO1xuICAgIHNldFVwRm9ybUNvbnRhaW5lcihjdHJsLCBkaXIpO1xuICAgIGN0cmwudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7ZW1pdEV2ZW50OiBmYWxzZX0pO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZW1vdmVGb3JtQXJyYXkoZGlyOiBGb3JtQXJyYXlOYW1lKTogdm9pZCB7fVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0Rm9ybUFycmF5KGRpcjogRm9ybUFycmF5TmFtZSk6IEZvcm1BcnJheSB7IHJldHVybiAvKiogQHR5cGUgez99ICovKCggPEZvcm1BcnJheT50aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSkpOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG51cGRhdGVNb2RlbChkaXI6IEZvcm1Db250cm9sTmFtZSwgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY3RybMKgID0gLyoqIEB0eXBlIHs/fSAqLygoIDxGb3JtQ29udHJvbD50aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSkpO1xuICAgIGN0cmwuc2V0VmFsdWUodmFsdWUpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gJGV2ZW50XG4gKiBAcmV0dXJuIHs/fVxuICovXG5vblN1Ym1pdCgkZXZlbnQ6IEV2ZW50KTogYm9vbGVhbiB7XG4gICAgdGhpcy5fc3VibWl0dGVkID0gdHJ1ZTtcbiAgICB0aGlzLm5nU3VibWl0LmVtaXQoJGV2ZW50KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xub25SZXNldCgpOiB2b2lkIHsgdGhpcy5yZXNldEZvcm0oKTsgfVxuLyoqXG4gKiBAcGFyYW0gez89fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xucmVzZXRGb3JtKHZhbHVlOiBhbnkgPSB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0ucmVzZXQodmFsdWUpO1xuICAgIHRoaXMuX3N1Ym1pdHRlZCA9IGZhbHNlO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fdXBkYXRlRG9tVmFsdWUoKSB7XG4gICAgdGhpcy5kaXJlY3RpdmVzLmZvckVhY2goZGlyID0+IHtcbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gbmV3Q3RybDogYW55ID0gdGhpcy5mb3JtLmdldChkaXIucGF0aCk7XG4gICAgICBpZiAoZGlyLl9jb250cm9sICE9PSBuZXdDdHJsKSB7XG4gICAgICAgIGNsZWFuVXBDb250cm9sKGRpci5fY29udHJvbCwgZGlyKTtcbiAgICAgICAgaWYgKG5ld0N0cmwpIHNldFVwQ29udHJvbChuZXdDdHJsLCBkaXIpO1xuICAgICAgICBkaXIuX2NvbnRyb2wgPSBuZXdDdHJsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JtLl91cGRhdGVUcmVlVmFsaWRpdHkoe2VtaXRFdmVudDogZmFsc2V9KTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF91cGRhdGVSZWdpc3RyYXRpb25zKCkge1xuICAgIHRoaXMuZm9ybS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoKCkgPT4gdGhpcy5fdXBkYXRlRG9tVmFsdWUoKSk7XG4gICAgaWYgKHRoaXMuX29sZEZvcm0pIHRoaXMuX29sZEZvcm0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKCgpID0+IHt9KTtcbiAgICB0aGlzLl9vbGRGb3JtID0gdGhpcy5mb3JtO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX3VwZGF0ZVZhbGlkYXRvcnMoKSB7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBzeW5jID0gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fdmFsaWRhdG9ycyk7XG4gICAgdGhpcy5mb3JtLnZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZShbdGhpcy5mb3JtLnZhbGlkYXRvciwgc3luY10pO1xuXG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBhc3luYyA9IGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fYXN5bmNWYWxpZGF0b3JzKTtcbiAgICB0aGlzLmZvcm0uYXN5bmNWYWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyhbdGhpcy5mb3JtLmFzeW5jVmFsaWRhdG9yLCBhc3luY10pO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2NoZWNrRm9ybVByZXNlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgIFJlYWN0aXZlRXJyb3JzLm1pc3NpbmdGb3JtRXhjZXB0aW9uKCk7XG4gICAgfVxuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnW2Zvcm1Hcm91cF0nLFxuICBwcm92aWRlcnM6IFtmb3JtRGlyZWN0aXZlUHJvdmlkZXJdLFxuICBob3N0OiB7JyhzdWJtaXQpJzogJ29uU3VibWl0KCRldmVudCknLCAnKHJlc2V0KSc6ICdvblJlc2V0KCknfSxcbiAgZXhwb3J0QXM6ICduZ0Zvcm0nXG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLCBdIH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLCBdIH0sIF19LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nZm9ybSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2Zvcm1Hcm91cCcsIF0gfSxdLFxuJ25nU3VibWl0JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIEZvcm1Hcm91cERpcmVjdGl2ZV90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUdyb3VwRGlyZWN0aXZlLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuRm9ybUdyb3VwRGlyZWN0aXZlLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUdyb3VwRGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fc3VibWl0dGVkO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fb2xkRm9ybTtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuZGlyZWN0aXZlcztcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuZm9ybTtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUubmdTdWJtaXQ7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl92YWxpZGF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fYXN5bmNWYWxpZGF0b3JzO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0gez99IGxpc3RcbiAqIEBwYXJhbSB7P30gZWxcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZTxUPihsaXN0OiBUW10sIGVsOiBUKTogdm9pZCB7XG4gIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gaW5kZXggPSBsaXN0LmluZGV4T2YoZWwpO1xuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX2RpcmVjdGl2ZS50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgSG9zdCwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsLCBTZWxmLCBTa2lwU2VsZiwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Rm9ybUFycmF5fSBmcm9tICcuLi8uLi9tb2RlbCc7XG5pbXBvcnQge05HX0FTWU5DX1ZBTElEQVRPUlMsIE5HX1ZBTElEQVRPUlN9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHtBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZX0gZnJvbSAnLi4vYWJzdHJhY3RfZm9ybV9ncm91cF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtDb250cm9sQ29udGFpbmVyfSBmcm9tICcuLi9jb250cm9sX2NvbnRhaW5lcic7XG5pbXBvcnQge1JlYWN0aXZlRXJyb3JzfSBmcm9tICcuLi9yZWFjdGl2ZV9lcnJvcnMnO1xuaW1wb3J0IHtjb21wb3NlQXN5bmNWYWxpZGF0b3JzLCBjb21wb3NlVmFsaWRhdG9ycywgY29udHJvbFBhdGh9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRvckZufSBmcm9tICcuLi92YWxpZGF0b3JzJztcblxuaW1wb3J0IHtGb3JtR3JvdXBEaXJlY3RpdmV9IGZyb20gJy4vZm9ybV9ncm91cF9kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBmb3JtR3JvdXBOYW1lUHJvdmlkZXI6IGFueSA9IHtcbiAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybUdyb3VwTmFtZSlcbn07XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgU3luY3MgYSBuZXN0ZWQge1xcQGxpbmsgRm9ybUdyb3VwfSB0byBhIERPTSBlbGVtZW50LlxuICogXG4gKiBcXEBob3dUb1VzZSBcbiAqIFxuICogVGhpcyBkaXJlY3RpdmUgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIGEgcGFyZW50IHtcXEBsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0gKHNlbGVjdG9yOlxuICogYFtmb3JtR3JvdXBdYCkuXG4gKiBcbiAqIEl0IGFjY2VwdHMgdGhlIHN0cmluZyBuYW1lIG9mIHRoZSBuZXN0ZWQge1xcQGxpbmsgRm9ybUdyb3VwfSB5b3Ugd2FudCB0byBsaW5rLCBhbmRcbiAqIHdpbGwgbG9vayBmb3IgYSB7XFxAbGluayBGb3JtR3JvdXB9IHJlZ2lzdGVyZWQgd2l0aCB0aGF0IG5hbWUgaW4gdGhlIHBhcmVudFxuICoge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSB5b3UgcGFzc2VkIGludG8ge1xcQGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfS5cbiAqIFxuICogTmVzdGVkIGZvcm0gZ3JvdXBzIGNhbiBjb21lIGluIGhhbmR5IHdoZW4geW91IHdhbnQgdG8gdmFsaWRhdGUgYSBzdWItZ3JvdXAgb2YgYVxuICogZm9ybSBzZXBhcmF0ZWx5IGZyb20gdGhlIHJlc3Qgb3Igd2hlbiB5b3UnZCBsaWtlIHRvIGdyb3VwIHRoZSB2YWx1ZXMgb2YgY2VydGFpblxuICogY29udHJvbHMgaW50byB0aGVpciBvd24gbmVzdGVkIG9iamVjdC5cbiAqIFxuICogKipBY2Nlc3MgdGhlIGdyb3VwKio6IFlvdSBjYW4gYWNjZXNzIHRoZSBhc3NvY2lhdGVkIHtcXEBsaW5rIEZvcm1Hcm91cH0gdXNpbmcgdGhlXG4gKiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuZ2V0fSBtZXRob2QuIEV4OiBgdGhpcy5mb3JtLmdldCgnbmFtZScpYC5cbiAqIFxuICogWW91IGNhbiBhbHNvIGFjY2VzcyBpbmRpdmlkdWFsIGNvbnRyb2xzIHdpdGhpbiB0aGUgZ3JvdXAgdXNpbmcgZG90IHN5bnRheC5cbiAqIEV4OiBgdGhpcy5mb3JtLmdldCgnbmFtZS5maXJzdCcpYFxuICogXG4gKiAqKkdldCB0aGUgdmFsdWUqKjogdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgYWx3YXlzIHN5bmNlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZVxuICoge1xcQGxpbmsgRm9ybUdyb3VwfS4gU2VlIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBwcm9wZXJ0aWVzIGluIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0uXG4gKiBcbiAqICoqU2V0IHRoZSB2YWx1ZSoqOiBZb3UgY2FuIHNldCBhbiBpbml0aWFsIHZhbHVlIGZvciBlYWNoIGNoaWxkIGNvbnRyb2wgd2hlbiBpbnN0YW50aWF0aW5nXG4gKiB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfSwgb3IgeW91IGNhbiBzZXQgaXQgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZ1xuICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnNldFZhbHVlfSBvciB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX0uXG4gKiBcbiAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZ3JvdXAsIHlvdSBjYW5cbiAqIHN1YnNjcmliZSB0byB0aGUge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnZhbHVlQ2hhbmdlc30gZXZlbnQuICBZb3UgY2FuIGFsc28gbGlzdGVuIHRvXG4gKiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzQ2hhbmdlc30gdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgaXNcbiAqIHJlLWNhbGN1bGF0ZWQuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL25lc3RlZEZvcm1Hcm91cC9uZXN0ZWRfZm9ybV9ncm91cF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqIFxuICogKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICogXG4gKiAqICoqTmdNb2R1bGUqKjogYFJlYWN0aXZlRm9ybXNNb2R1bGVgXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwTmFtZSBleHRlbmRzIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgbmFtZTogc3RyaW5nO1xuLyoqXG4gKiBAcGFyYW0gez99IHBhcmVudFxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICovXG5jb25zdHJ1Y3RvcihcbiAgICAgICAgIHBhcmVudDogQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgIHZhbGlkYXRvcnM6IGFueVtdLFxuICAgICAgICAgYXN5bmNWYWxpZGF0b3JzOiBhbnlbXSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuX3ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzO1xuICAgIHRoaXMuX2FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycztcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX2NoZWNrUGFyZW50VHlwZSgpOiB2b2lkIHtcbiAgICBpZiAoX2hhc0ludmFsaWRQYXJlbnQodGhpcy5fcGFyZW50KSkge1xuICAgICAgUmVhY3RpdmVFcnJvcnMuZ3JvdXBQYXJlbnRFeGNlcHRpb24oKTtcbiAgICB9XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tzZWxlY3RvcjogJ1tmb3JtR3JvdXBOYW1lXScsIHByb3ZpZGVyczogW2Zvcm1Hcm91cE5hbWVQcm92aWRlcl19LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogSG9zdCB9LCB7IHR5cGU6IFNraXBTZWxmIH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLCBdIH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLCBdIH0sIF19LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nbmFtZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2Zvcm1Hcm91cE5hbWUnLCBdIH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIEZvcm1Hcm91cE5hbWVfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Hcm91cE5hbWUuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5Gb3JtR3JvdXBOYW1lLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUdyb3VwTmFtZS5wcm9wRGVjb3JhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Hcm91cE5hbWUucHJvdG90eXBlLm5hbWU7XG59XG5cblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gZm9ybUFycmF5TmFtZVByb3ZpZGVyOiBhbnkgPSB7XG4gIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZvcm1BcnJheU5hbWUpXG59O1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIFN5bmNzIGEgbmVzdGVkIHtcXEBsaW5rIEZvcm1BcnJheX0gdG8gYSBET00gZWxlbWVudC5cbiAqIFxuICogXFxAaG93VG9Vc2UgXG4gKiBcbiAqIFRoaXMgZGlyZWN0aXZlIGlzIGRlc2lnbmVkIHRvIGJlIHVzZWQgd2l0aCBhIHBhcmVudCB7XFxAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9IChzZWxlY3RvcjpcbiAqIGBbZm9ybUdyb3VwXWApLlxuICogXG4gKiBJdCBhY2NlcHRzIHRoZSBzdHJpbmcgbmFtZSBvZiB0aGUgbmVzdGVkIHtcXEBsaW5rIEZvcm1BcnJheX0geW91IHdhbnQgdG8gbGluaywgYW5kXG4gKiB3aWxsIGxvb2sgZm9yIGEge1xcQGxpbmsgRm9ybUFycmF5fSByZWdpc3RlcmVkIHdpdGggdGhhdCBuYW1lIGluIHRoZSBwYXJlbnRcbiAqIHtcXEBsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UgeW91IHBhc3NlZCBpbnRvIHtcXEBsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0uXG4gKiBcbiAqIE5lc3RlZCBmb3JtIGFycmF5cyBjYW4gY29tZSBpbiBoYW5keSB3aGVuIHlvdSBoYXZlIGEgZ3JvdXAgb2YgZm9ybSBjb250cm9scyBidXRcbiAqIHlvdSdyZSBub3Qgc3VyZSBob3cgbWFueSB0aGVyZSB3aWxsIGJlLiBGb3JtIGFycmF5cyBhbGxvdyB5b3UgdG8gY3JlYXRlIG5ld1xuICogZm9ybSBjb250cm9scyBkeW5hbWljYWxseS5cbiAqIFxuICogKipBY2Nlc3MgdGhlIGFycmF5Kio6IFlvdSBjYW4gYWNjZXNzIHRoZSBhc3NvY2lhdGVkIHtcXEBsaW5rIEZvcm1BcnJheX0gdXNpbmcgdGhlXG4gKiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuZ2V0fSBtZXRob2Qgb24gdGhlIHBhcmVudCB7XFxAbGluayBGb3JtR3JvdXB9LlxuICogRXg6IGB0aGlzLmZvcm0uZ2V0KCdjaXRpZXMnKWAuXG4gKiBcbiAqICoqR2V0IHRoZSB2YWx1ZSoqOiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyBhbHdheXMgc3luY2VkIGFuZCBhdmFpbGFibGUgb24gdGhlXG4gKiB7XFxAbGluayBGb3JtQXJyYXl9LiBTZWUgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIHByb3BlcnRpZXMgaW4ge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfS5cbiAqIFxuICogKipTZXQgdGhlIHZhbHVlKio6IFlvdSBjYW4gc2V0IGFuIGluaXRpYWwgdmFsdWUgZm9yIGVhY2ggY2hpbGQgY29udHJvbCB3aGVuIGluc3RhbnRpYXRpbmdcbiAqIHRoZSB7XFxAbGluayBGb3JtQXJyYXl9LCBvciB5b3UgY2FuIHNldCB0aGUgdmFsdWUgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZyB0aGVcbiAqIHtcXEBsaW5rIEZvcm1BcnJheX0ncyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuc2V0VmFsdWV9IG9yIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5wYXRjaFZhbHVlfVxuICogbWV0aG9kcy5cbiAqIFxuICogKipMaXN0ZW4gdG8gdmFsdWUqKjogSWYgeW91IHdhbnQgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHZhbHVlIG9mIHRoZSBhcnJheSwgeW91IGNhblxuICogc3Vic2NyaWJlIHRvIHRoZSB7XFxAbGluayBGb3JtQXJyYXl9J3Mge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnZhbHVlQ2hhbmdlc30gZXZlbnQuICBZb3UgY2FuIGFsc29cbiAqIGxpc3RlbiB0byBpdHMge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnN0YXR1c0NoYW5nZXN9IGV2ZW50IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb25cbiAqIHN0YXR1cyBpcyByZS1jYWxjdWxhdGVkLlxuICogXG4gKiAqKkFkZCBuZXcgY29udHJvbHMqKjogWW91IGNhbiBhZGQgbmV3IGNvbnRyb2xzIHRvIHRoZSB7XFxAbGluayBGb3JtQXJyYXl9IGR5bmFtaWNhbGx5IGJ5XG4gKiBjYWxsaW5nIGl0cyB7XFxAbGluayBGb3JtQXJyYXkucHVzaH0gbWV0aG9kLlxuICogIEV4OiBgdGhpcy5mb3JtLmdldCgnY2l0aWVzJykucHVzaChuZXcgRm9ybUNvbnRyb2woKSk7YFxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9uZXN0ZWRGb3JtQXJyYXkvbmVzdGVkX2Zvcm1fYXJyYXlfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gKiBcbiAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqIFxuICogKiAqKk5nTW9kdWxlKio6IGBSZWFjdGl2ZUZvcm1zTW9kdWxlYFxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIEZvcm1BcnJheU5hbWUgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fcGFyZW50OiBDb250cm9sQ29udGFpbmVyO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fdmFsaWRhdG9yczogYW55W107XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9hc3luY1ZhbGlkYXRvcnM6IGFueVtdO1xuXG4gICBuYW1lOiBzdHJpbmc7XG4vKipcbiAqIEBwYXJhbSB7P30gcGFyZW50XG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gKi9cbmNvbnN0cnVjdG9yKFxuICAgICAgICAgcGFyZW50OiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgdmFsaWRhdG9yczogYW55W10sXG4gICAgICAgICBhc3luY1ZhbGlkYXRvcnM6IGFueVtdKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5fdmFsaWRhdG9ycyA9IHZhbGlkYXRvcnM7XG4gICAgdGhpcy5fYXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2NoZWNrUGFyZW50VHlwZSgpO1xuICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5hZGRGb3JtQXJyYXkodGhpcyk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xubmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZm9ybURpcmVjdGl2ZSkge1xuICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlbW92ZUZvcm1BcnJheSh0aGlzKTtcbiAgICB9XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGNvbnRyb2woKTogRm9ybUFycmF5IHsgcmV0dXJuIHRoaXMuZm9ybURpcmVjdGl2ZS5nZXRGb3JtQXJyYXkodGhpcyk7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGZvcm1EaXJlY3RpdmUoKTogRm9ybUdyb3VwRGlyZWN0aXZlIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50ID8gLyoqIEB0eXBlIHs/fSAqLygoIDxGb3JtR3JvdXBEaXJlY3RpdmU+dGhpcy5fcGFyZW50LmZvcm1EaXJlY3RpdmUpKSA6IG51bGw7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHBhdGgoKTogc3RyaW5nW10geyByZXR1cm4gY29udHJvbFBhdGgodGhpcy5uYW1lLCB0aGlzLl9wYXJlbnQpOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4geyByZXR1cm4gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fdmFsaWRhdG9ycyk7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGFzeW5jVmFsaWRhdG9yKCk6IEFzeW5jVmFsaWRhdG9yRm4geyByZXR1cm4gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9hc3luY1ZhbGlkYXRvcnMpOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2NoZWNrUGFyZW50VHlwZSgpOiB2b2lkIHtcbiAgICBpZiAoX2hhc0ludmFsaWRQYXJlbnQodGhpcy5fcGFyZW50KSkge1xuICAgICAgUmVhY3RpdmVFcnJvcnMuYXJyYXlQYXJlbnRFeGNlcHRpb24oKTtcbiAgICB9XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tzZWxlY3RvcjogJ1tmb3JtQXJyYXlOYW1lXScsIHByb3ZpZGVyczogW2Zvcm1BcnJheU5hbWVQcm92aWRlcl19LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogSG9zdCB9LCB7IHR5cGU6IFNraXBTZWxmIH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLCBdIH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLCBdIH0sIF19LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nbmFtZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2Zvcm1BcnJheU5hbWUnLCBdIH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIEZvcm1BcnJheU5hbWVfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1BcnJheU5hbWUuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5Gb3JtQXJyYXlOYW1lLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUFycmF5TmFtZS5wcm9wRGVjb3JhdG9ycztcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5Gb3JtQXJyYXlOYW1lLnByb3RvdHlwZS5fcGFyZW50O1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbkZvcm1BcnJheU5hbWUucHJvdG90eXBlLl92YWxpZGF0b3JzO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbkZvcm1BcnJheU5hbWUucHJvdG90eXBlLl9hc3luY1ZhbGlkYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQXJyYXlOYW1lLnByb3RvdHlwZS5uYW1lO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7P30gcGFyZW50XG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfaGFzSW52YWxpZFBhcmVudChwYXJlbnQ6IENvbnRyb2xDb250YWluZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuICEocGFyZW50IGluc3RhbmNlb2YgRm9ybUdyb3VwTmFtZSkgJiYgIShwYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBEaXJlY3RpdmUpICYmXG4gICAgICAhKHBhcmVudCBpbnN0YW5jZW9mIEZvcm1BcnJheU5hbWUpO1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX25hbWUudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdCwgSW5qZWN0LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBPdXRwdXQsIFNlbGYsIFNpbXBsZUNoYW5nZXMsIFNraXBTZWxmLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuaW1wb3J0IHtOR19BU1lOQ19WQUxJREFUT1JTLCBOR19WQUxJREFUT1JTfSBmcm9tICcuLi8uLi92YWxpZGF0b3JzJztcbmltcG9ydCB7QWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmV9IGZyb20gJy4uL2Fic3RyYWN0X2Zvcm1fZ3JvdXBfZGlyZWN0aXZlJztcbmltcG9ydCB7Q29udHJvbENvbnRhaW5lcn0gZnJvbSAnLi4vY29udHJvbF9jb250YWluZXInO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJy4uL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gJy4uL25nX2NvbnRyb2wnO1xuaW1wb3J0IHtSZWFjdGl2ZUVycm9yc30gZnJvbSAnLi4vcmVhY3RpdmVfZXJyb3JzJztcbmltcG9ydCB7Y29tcG9zZUFzeW5jVmFsaWRhdG9ycywgY29tcG9zZVZhbGlkYXRvcnMsIGNvbnRyb2xQYXRoLCBpc1Byb3BlcnR5VXBkYXRlZCwgc2VsZWN0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCB7QXN5bmNWYWxpZGF0b3IsIEFzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRvciwgVmFsaWRhdG9yRm59IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuXG5pbXBvcnQge0Zvcm1Hcm91cERpcmVjdGl2ZX0gZnJvbSAnLi9mb3JtX2dyb3VwX2RpcmVjdGl2ZSc7XG5pbXBvcnQge0Zvcm1BcnJheU5hbWUsIEZvcm1Hcm91cE5hbWV9IGZyb20gJy4vZm9ybV9ncm91cF9uYW1lJztcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY29udHJvbE5hbWVCaW5kaW5nOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5nQ29udHJvbCxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybUNvbnRyb2xOYW1lKVxufTtcbi8qKlxuICogXFxAd2hhdEl0RG9lcyBTeW5jcyBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbiBhbiBleGlzdGluZyB7XFxAbGluayBGb3JtR3JvdXB9IHRvIGEgZm9ybSBjb250cm9sXG4gKiBlbGVtZW50IGJ5IG5hbWUuXG4gKiBcbiAqIEluIG90aGVyIHdvcmRzLCB0aGlzIGRpcmVjdGl2ZSBlbnN1cmVzIHRoYXQgYW55IHZhbHVlcyB3cml0dGVuIHRvIHRoZSB7XFxAbGluayBGb3JtQ29udHJvbH1cbiAqIGluc3RhbmNlIHByb2dyYW1tYXRpY2FsbHkgd2lsbCBiZSB3cml0dGVuIHRvIHRoZSBET00gZWxlbWVudCAobW9kZWwgLT4gdmlldykuIENvbnZlcnNlbHksXG4gKiBhbnkgdmFsdWVzIHdyaXR0ZW4gdG8gdGhlIERPTSBlbGVtZW50IHRocm91Z2ggdXNlciBpbnB1dCB3aWxsIGJlIHJlZmxlY3RlZCBpbiB0aGVcbiAqIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSAodmlldyAtPiBtb2RlbCkuXG4gKiBcbiAqIFxcQGhvd1RvVXNlIFxuICogXG4gKiBUaGlzIGRpcmVjdGl2ZSBpcyBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggYSBwYXJlbnQge1xcQGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfSAoc2VsZWN0b3I6XG4gKiBgW2Zvcm1Hcm91cF1gKS5cbiAqIFxuICogSXQgYWNjZXB0cyB0aGUgc3RyaW5nIG5hbWUgb2YgdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSB5b3Ugd2FudCB0b1xuICogbGluaywgYW5kIHdpbGwgbG9vayBmb3IgYSB7XFxAbGluayBGb3JtQ29udHJvbH0gcmVnaXN0ZXJlZCB3aXRoIHRoYXQgbmFtZSBpbiB0aGVcbiAqIGNsb3Nlc3Qge1xcQGxpbmsgRm9ybUdyb3VwfSBvciB7XFxAbGluayBGb3JtQXJyYXl9IGFib3ZlIGl0LlxuICogXG4gKiAqKkFjY2VzcyB0aGUgY29udHJvbCoqOiBZb3UgY2FuIGFjY2VzcyB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGFzc29jaWF0ZWQgd2l0aFxuICogdGhpcyBkaXJlY3RpdmUgYnkgdXNpbmcgdGhlIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5nZXR9IG1ldGhvZC5cbiAqIEV4OiBgdGhpcy5mb3JtLmdldCgnZmlyc3QnKTtgXG4gKiBcbiAqICoqR2V0IHZhbHVlKio6IHRoZSBgdmFsdWVgIHByb3BlcnR5IGlzIGFsd2F5cyBzeW5jZWQgYW5kIGF2YWlsYWJsZSBvbiB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9LlxuICogU2VlIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBwcm9wZXJ0aWVzIGluIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0uXG4gKiBcbiAqICAqKlNldCB2YWx1ZSoqOiBZb3UgY2FuIHNldCBhbiBpbml0aWFsIHZhbHVlIGZvciB0aGUgY29udHJvbCB3aGVuIGluc3RhbnRpYXRpbmcgdGhlXG4gKiAge1xcQGxpbmsgRm9ybUNvbnRyb2x9LCBvciB5b3UgY2FuIHNldCBpdCBwcm9ncmFtbWF0aWNhbGx5IGxhdGVyIHVzaW5nXG4gKiAge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnNldFZhbHVlfSBvciB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX0uXG4gKiBcbiAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCwgeW91IGNhblxuICogc3Vic2NyaWJlIHRvIHRoZSB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wudmFsdWVDaGFuZ2VzfSBldmVudC4gIFlvdSBjYW4gYWxzbyBsaXN0ZW4gdG9cbiAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXNDaGFuZ2VzfSB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBpc1xuICogcmUtY2FsY3VsYXRlZC5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICogSW4gdGhpcyBleGFtcGxlLCB3ZSBjcmVhdGUgZm9ybSBjb250cm9scyBmb3IgZmlyc3QgbmFtZSBhbmQgbGFzdCBuYW1lLlxuICogXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtR3JvdXAvc2ltcGxlX2Zvcm1fZ3JvdXBfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gKiBcbiAqIFRvIHNlZSBgZm9ybUNvbnRyb2xOYW1lYCBleGFtcGxlcyB3aXRoIGRpZmZlcmVudCBmb3JtIGNvbnRyb2wgdHlwZXMsIHNlZTpcbiAqIFxuICogKiBSYWRpbyBidXR0b25zOiB7XFxAbGluayBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yfVxuICogKiBTZWxlY3RzOiB7XFxAbGluayBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn1cbiAqIFxuICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqIFxuICogKipOZ01vZHVsZSoqOiB7XFxAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfVxuICogXG4gKiAgXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbE5hbWUgZXh0ZW5kcyBOZ0NvbnRyb2wgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5wcml2YXRlIF9hZGRlZCA9IGZhbHNlO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG52aWV3TW9kZWw6IGFueTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX2NvbnRyb2w6IEZvcm1Db250cm9sO1xuXG4gICBuYW1lOiBzdHJpbmc7XG5cbiAgLy8gVE9ETyhrYXJhKTogIFJlcGxhY2UgbmdNb2RlbCB3aXRoIHJlYWN0aXZlIEFQSVxuICAgbW9kZWw6IGFueTtcbiAgIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbi8qKlxuICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXQgaXNEaXNhYmxlZChpc0Rpc2FibGVkOiBib29sZWFuKSB7IFJlYWN0aXZlRXJyb3JzLmRpc2FibGVkQXR0cldhcm5pbmcoKTsgfVxuLyoqXG4gKiBAcGFyYW0gez99IHBhcmVudFxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICogQHBhcmFtIHs/fSB2YWx1ZUFjY2Vzc29yc1xuICovXG5jb25zdHJ1Y3RvcihcbiAgICAgICAgIHBhcmVudDogQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgIHZhbGlkYXRvcnM6IEFycmF5PFZhbGlkYXRvcnxWYWxpZGF0b3JGbj4sXG4gICAgICAgICBhc3luY1ZhbGlkYXRvcnM6XG4gICAgICAgICAgQXJyYXk8QXN5bmNWYWxpZGF0b3J8QXN5bmNWYWxpZGF0b3JGbj4sXG4gICAgICAgICB2YWx1ZUFjY2Vzc29yczogQ29udHJvbFZhbHVlQWNjZXNzb3JbXSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuX3Jhd1ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzIHx8IFtdO1xuICAgIHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycyB8fCBbXTtcbiAgICB0aGlzLnZhbHVlQWNjZXNzb3IgPSBzZWxlY3RWYWx1ZUFjY2Vzc29yKHRoaXMsIHZhbHVlQWNjZXNzb3JzKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGNoYW5nZXNcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuX2FkZGVkKSB0aGlzLl9zZXRVcENvbnRyb2woKTtcbiAgICBpZiAoaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdGhpcy52aWV3TW9kZWwpKSB7XG4gICAgICB0aGlzLnZpZXdNb2RlbCA9IHRoaXMubW9kZWw7XG4gICAgICB0aGlzLmZvcm1EaXJlY3RpdmUudXBkYXRlTW9kZWwodGhpcywgdGhpcy5tb2RlbCk7XG4gICAgfVxuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZvcm1EaXJlY3RpdmUpIHtcbiAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZW1vdmVDb250cm9sKHRoaXMpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IG5ld1ZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG52aWV3VG9Nb2RlbFVwZGF0ZShuZXdWYWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52aWV3TW9kZWwgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KG5ld1ZhbHVlKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcGF0aCgpOiBzdHJpbmdbXSB7IHJldHVybiBjb250cm9sUGF0aCh0aGlzLm5hbWUsIHRoaXMuX3BhcmVudCk7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGZvcm1EaXJlY3RpdmUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3BhcmVudCA/IHRoaXMuX3BhcmVudC5mb3JtRGlyZWN0aXZlIDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHsgcmV0dXJuIGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3Jhd1ZhbGlkYXRvcnMpOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBhc3luY1ZhbGlkYXRvcigpOiBBc3luY1ZhbGlkYXRvckZuIHtcbiAgICByZXR1cm4gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMpO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBjb250cm9sKCk6IEZvcm1Db250cm9sIHsgcmV0dXJuIHRoaXMuX2NvbnRyb2w7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfY2hlY2tQYXJlbnRUeXBlKCk6IHZvaWQge1xuICAgIGlmICghKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cE5hbWUpICYmXG4gICAgICAgIHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKSB7XG4gICAgICBSZWFjdGl2ZUVycm9ycy5uZ01vZGVsR3JvdXBFeGNlcHRpb24oKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICAhKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cE5hbWUpICYmICEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgRm9ybUdyb3VwRGlyZWN0aXZlKSAmJlxuICAgICAgICAhKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEZvcm1BcnJheU5hbWUpKSB7XG4gICAgICBSZWFjdGl2ZUVycm9ycy5jb250cm9sUGFyZW50RXhjZXB0aW9uKCk7XG4gICAgfVxuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX3NldFVwQ29udHJvbCgpIHtcbiAgICB0aGlzLl9jaGVja1BhcmVudFR5cGUoKTtcbiAgICB0aGlzLl9jb250cm9sID0gdGhpcy5mb3JtRGlyZWN0aXZlLmFkZENvbnRyb2wodGhpcyk7XG4gICAgaWYgKHRoaXMuY29udHJvbC5kaXNhYmxlZCAmJiB0aGlzLnZhbHVlQWNjZXNzb3Iuc2V0RGlzYWJsZWRTdGF0ZSkge1xuICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUodHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuX2FkZGVkID0gdHJ1ZTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe3NlbGVjdG9yOiAnW2Zvcm1Db250cm9sTmFtZV0nLCBwcm92aWRlcnM6IFtjb250cm9sTmFtZUJpbmRpbmddfSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IEhvc3QgfSwgeyB0eXBlOiBTa2lwU2VsZiB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUywgXSB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUywgXSB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfVkFMVUVfQUNDRVNTT1IsIF0gfSwgXX0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbiduYW1lJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnZm9ybUNvbnRyb2xOYW1lJywgXSB9LF0sXG4nbW9kZWwnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyduZ01vZGVsJywgXSB9LF0sXG4ndXBkYXRlJzogW3sgdHlwZTogT3V0cHV0LCBhcmdzOiBbJ25nTW9kZWxDaGFuZ2UnLCBdIH0sXSxcbidpc0Rpc2FibGVkJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnZGlzYWJsZWQnLCBdIH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIEZvcm1Db250cm9sTmFtZV90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUNvbnRyb2xOYW1lLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuRm9ybUNvbnRyb2xOYW1lLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUNvbnRyb2xOYW1lLnByb3BEZWNvcmF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS5fYWRkZWQ7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS52aWV3TW9kZWw7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS5fY29udHJvbDtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUubmFtZTtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUubW9kZWw7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLnVwZGF0ZTtcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2NvbnRyb2xfbmFtZS50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgUHJvdmlkZXIsIFNpbXBsZUNoYW5nZXMsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2x9IGZyb20gJy4uL21vZGVsJztcbmltcG9ydCB7TkdfVkFMSURBVE9SUywgVmFsaWRhdG9yc30gZnJvbSAnLi4vdmFsaWRhdG9ycyc7XG5cbi8qKiBAZXhwZXJpbWVudGFsICovXG5leHBvcnQgdHlwZSBWYWxpZGF0aW9uRXJyb3JzID0ge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbn07XG5cbi8qKlxuICogQW4gaW50ZXJmYWNlIHRoYXQgY2FuIGJlIGltcGxlbWVudGVkIGJ5IGNsYXNzZXMgdGhhdCBjYW4gYWN0IGFzIHZhbGlkYXRvcnMuXG4gKlxuICogIyMgVXNhZ2VcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBARGlyZWN0aXZlKHtcbiAqICAgc2VsZWN0b3I6ICdbY3VzdG9tLXZhbGlkYXRvcl0nLFxuICogICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IEN1c3RvbVZhbGlkYXRvckRpcmVjdGl2ZSwgbXVsdGk6IHRydWV9XVxuICogfSlcbiAqIGNsYXNzIEN1c3RvbVZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gKiAgIHZhbGlkYXRlKGM6IENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gKiAgICAgcmV0dXJuIHtcImN1c3RvbVwiOiB0cnVlfTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogQHN0YWJsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRvciB7XG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbDtcbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZT8oZm46ICgpID0+IHZvaWQpOiB2b2lkO1xufVxuXG4vKiogQGV4cGVyaW1lbnRhbCAqL1xuZXhwb3J0IGludGVyZmFjZSBBc3luY1ZhbGlkYXRvciBleHRlbmRzIFZhbGlkYXRvciB7XG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFByb21pc2U8VmFsaWRhdGlvbkVycm9yc3xudWxsPnxPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnN8bnVsbD47XG59XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIFJFUVVJUkVEX1ZBTElEQVRPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJlcXVpcmVkVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIENIRUNLQk9YX1JFUVVJUkVEX1ZBTElEQVRPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogQSBEaXJlY3RpdmUgdGhhdCBhZGRzIHRoZSBgcmVxdWlyZWRgIHZhbGlkYXRvciB0byBhbnkgY29udHJvbHMgbWFya2VkIHdpdGggdGhlXG4gKiBgcmVxdWlyZWRgIGF0dHJpYnV0ZSwgdmlhIHRoZSB7XFxAbGluayBOR19WQUxJREFUT1JTfSBiaW5kaW5nLlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiBgYGBcbiAqIDxpbnB1dCBuYW1lPVwiZnVsbE5hbWVcIiBuZ01vZGVsIHJlcXVpcmVkPlxuICogYGBgXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgUmVxdWlyZWRWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xucHJpdmF0ZSBfcmVxdWlyZWQ6IGJvb2xlYW47XG5wcml2YXRlIF9vbkNoYW5nZTogKCkgPT4gdm9pZDtcbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW58c3RyaW5nIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbnxzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IGZhbHNlICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG4gICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB0aGlzLl9vbkNoYW5nZSgpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gY1xuICogQHJldHVybiB7P31cbiAqL1xudmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9yc3xudWxsIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlZCA/IFZhbGlkYXRvcnMucmVxdWlyZWQoYykgOiBudWxsO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjpcbiAgICAgICc6bm90KFt0eXBlPWNoZWNrYm94XSlbcmVxdWlyZWRdW2Zvcm1Db250cm9sTmFtZV0sOm5vdChbdHlwZT1jaGVja2JveF0pW3JlcXVpcmVkXVtmb3JtQ29udHJvbF0sOm5vdChbdHlwZT1jaGVja2JveF0pW3JlcXVpcmVkXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW1JFUVVJUkVEX1ZBTElEQVRPUl0sXG4gIGhvc3Q6IHsnW2F0dHIucmVxdWlyZWRdJzogJ3JlcXVpcmVkID8gXCJcIiA6IG51bGwnfVxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ3JlcXVpcmVkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gUmVxdWlyZWRWYWxpZGF0b3JfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cblJlcXVpcmVkVmFsaWRhdG9yLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuUmVxdWlyZWRWYWxpZGF0b3IuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5SZXF1aXJlZFZhbGlkYXRvci5wcm9wRGVjb3JhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cblJlcXVpcmVkVmFsaWRhdG9yLnByb3RvdHlwZS5fcmVxdWlyZWQ7XG4vKiogQHR5cGUgez99ICovXG5SZXF1aXJlZFZhbGlkYXRvci5wcm90b3R5cGUuX29uQ2hhbmdlO1xufVxuXG4vKipcbiAqIEEgRGlyZWN0aXZlIHRoYXQgYWRkcyB0aGUgYHJlcXVpcmVkYCB2YWxpZGF0b3IgdG8gY2hlY2tib3ggY29udHJvbHMgbWFya2VkIHdpdGggdGhlXG4gKiBgcmVxdWlyZWRgIGF0dHJpYnV0ZSwgdmlhIHRoZSB7XFxAbGluayBOR19WQUxJREFUT1JTfSBiaW5kaW5nLlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiBgYGBcbiAqIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYWN0aXZlXCIgbmdNb2RlbCByZXF1aXJlZD5cbiAqIGBgYFxuICogXG4gKiBcXEBleHBlcmltZW50YWxcbiAqL1xuZXhwb3J0IGNsYXNzIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IgZXh0ZW5kcyBSZXF1aXJlZFZhbGlkYXRvciB7XG4vKipcbiAqIEBwYXJhbSB7P30gY1xuICogQHJldHVybiB7P31cbiAqL1xudmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9yc3xudWxsIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlZCA/IFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlKGMpIDogbnVsbDtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjpcbiAgICAgICdpbnB1dFt0eXBlPWNoZWNrYm94XVtyZXF1aXJlZF1bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPWNoZWNrYm94XVtyZXF1aXJlZF1bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9Y2hlY2tib3hdW3JlcXVpcmVkXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW0NIRUNLQk9YX1JFUVVJUkVEX1ZBTElEQVRPUl0sXG4gIGhvc3Q6IHsnW2F0dHIucmVxdWlyZWRdJzogJ3JlcXVpcmVkID8gXCJcIiA6IG51bGwnfVxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG59XG5cbmZ1bmN0aW9uIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3JfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkNoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5DaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzO1xufVxuXG5cbi8qKlxuICogUHJvdmlkZXIgd2hpY2ggYWRkcyB7QGxpbmsgRW1haWxWYWxpZGF0b3J9IHRvIHtAbGluayBOR19WQUxJREFUT1JTfS5cbiAqL1xuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gRU1BSUxfVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEVtYWlsVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG4vKipcbiAqIEEgRGlyZWN0aXZlIHRoYXQgYWRkcyB0aGUgYGVtYWlsYCB2YWxpZGF0b3IgdG8gY29udHJvbHMgbWFya2VkIHdpdGggdGhlXG4gKiBgZW1haWxgIGF0dHJpYnV0ZSwgdmlhIHRoZSB7XFxAbGluayBOR19WQUxJREFUT1JTfSBiaW5kaW5nLlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiBgYGBcbiAqIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBuZ01vZGVsIGVtYWlsPlxuICogPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIG5nTW9kZWwgZW1haWw9XCJ0cnVlXCI+XG4gKiA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgbmdNb2RlbCBbZW1haWxdPVwidHJ1ZVwiPlxuICogYGBgXG4gKiBcbiAqIFxcQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgY2xhc3MgRW1haWxWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xucHJpdmF0ZSBfZW5hYmxlZDogYm9vbGVhbjtcbnByaXZhdGUgX29uQ2hhbmdlOiAoKSA9PiB2b2lkO1xuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXQgZW1haWwodmFsdWU6IGJvb2xlYW58c3RyaW5nKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xuICAgIGlmICh0aGlzLl9vbkNoYW5nZSkgdGhpcy5fb25DaGFuZ2UoKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGNcbiAqIEByZXR1cm4gez99XG4gKi9cbnZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQgPyBWYWxpZGF0b3JzLmVtYWlsKGMpIDogbnVsbDtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdbZW1haWxdW2Zvcm1Db250cm9sTmFtZV0sW2VtYWlsXVtmb3JtQ29udHJvbF0sW2VtYWlsXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW0VNQUlMX1ZBTElEQVRPUl1cbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidlbWFpbCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIEVtYWlsVmFsaWRhdG9yX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5FbWFpbFZhbGlkYXRvci5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbkVtYWlsVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuRW1haWxWYWxpZGF0b3IucHJvcERlY29yYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5FbWFpbFZhbGlkYXRvci5wcm90b3R5cGUuX2VuYWJsZWQ7XG4vKiogQHR5cGUgez99ICovXG5FbWFpbFZhbGlkYXRvci5wcm90b3R5cGUuX29uQ2hhbmdlO1xufVxuXG5cbi8qKlxuICogQHN0YWJsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRvckZuIHsgKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbDsgfVxuXG4vKipcbiAqIEBzdGFibGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBc3luY1ZhbGlkYXRvckZuIHtcbiAgKGM6IEFic3RyYWN0Q29udHJvbCk6IFByb21pc2U8VmFsaWRhdGlvbkVycm9yc3xudWxsPnxPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnN8bnVsbD47XG59XG5cbi8qKlxuICogUHJvdmlkZXIgd2hpY2ggYWRkcyB7QGxpbmsgTWluTGVuZ3RoVmFsaWRhdG9yfSB0byB7QGxpbmsgTkdfVkFMSURBVE9SU30uXG4gKlxuICogIyMgRXhhbXBsZTpcbiAqXG4gKiB7QGV4YW1wbGUgY29tbW9uL2Zvcm1zL3RzL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyByZWdpb249J21pbid9XG4gKi9cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIE1JTl9MRU5HVEhfVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1pbkxlbmd0aFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBBIGRpcmVjdGl2ZSB3aGljaCBpbnN0YWxscyB0aGUge1xcQGxpbmsgTWluTGVuZ3RoVmFsaWRhdG9yfSBmb3IgYW55IGBmb3JtQ29udHJvbE5hbWVgLFxuICogYGZvcm1Db250cm9sYCwgb3IgY29udHJvbCB3aXRoIGBuZ01vZGVsYCB0aGF0IGFsc28gaGFzIGEgYG1pbmxlbmd0aGAgYXR0cmlidXRlLlxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIE1pbkxlbmd0aFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvcixcbiAgICBPbkNoYW5nZXMge1xucHJpdmF0ZSBfdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcbnByaXZhdGUgX29uQ2hhbmdlOiAoKSA9PiB2b2lkO1xuXG4gICBtaW5sZW5ndGg6IHN0cmluZztcbi8qKlxuICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCdtaW5sZW5ndGgnIGluIGNoYW5nZXMpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB0aGlzLl9vbkNoYW5nZSgpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGNcbiAqIEByZXR1cm4gez99XG4gKi9cbnZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubWlubGVuZ3RoID09IG51bGwgPyBudWxsIDogdGhpcy5fdmFsaWRhdG9yKGMpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9jcmVhdGVWYWxpZGF0b3IoKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsaWRhdG9yID0gVmFsaWRhdG9ycy5taW5MZW5ndGgocGFyc2VJbnQodGhpcy5taW5sZW5ndGgsIDEwKSk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdbbWlubGVuZ3RoXVtmb3JtQ29udHJvbE5hbWVdLFttaW5sZW5ndGhdW2Zvcm1Db250cm9sXSxbbWlubGVuZ3RoXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW01JTl9MRU5HVEhfVkFMSURBVE9SXSxcbiAgaG9zdDogeydbYXR0ci5taW5sZW5ndGhdJzogJ21pbmxlbmd0aCA/IG1pbmxlbmd0aCA6IG51bGwnfVxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ21pbmxlbmd0aCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIE1pbkxlbmd0aFZhbGlkYXRvcl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuTWluTGVuZ3RoVmFsaWRhdG9yLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuTWluTGVuZ3RoVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuTWluTGVuZ3RoVmFsaWRhdG9yLnByb3BEZWNvcmF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuTWluTGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5fdmFsaWRhdG9yO1xuLyoqIEB0eXBlIHs/fSAqL1xuTWluTGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5fb25DaGFuZ2U7XG4vKiogQHR5cGUgez99ICovXG5NaW5MZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLm1pbmxlbmd0aDtcbn1cblxuXG4vKipcbiAqIFByb3ZpZGVyIHdoaWNoIGFkZHMge0BsaW5rIE1heExlbmd0aFZhbGlkYXRvcn0gdG8ge0BsaW5rIE5HX1ZBTElEQVRPUlN9LlxuICpcbiAqICMjIEV4YW1wbGU6XG4gKlxuICoge0BleGFtcGxlIGNvbW1vbi9mb3Jtcy90cy92YWxpZGF0b3JzL3ZhbGlkYXRvcnMudHMgcmVnaW9uPSdtYXgnfVxuICovXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBNQVhfTEVOR1RIX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXhMZW5ndGhWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogQSBkaXJlY3RpdmUgd2hpY2ggaW5zdGFsbHMgdGhlIHtcXEBsaW5rIE1heExlbmd0aFZhbGlkYXRvcn0gZm9yIGFueSBgZm9ybUNvbnRyb2xOYW1lLFxuICogYGZvcm1Db250cm9sYCxcbiAqIG9yIGNvbnRyb2wgd2l0aCBgbmdNb2RlbGAgdGhhdCBhbHNvIGhhcyBhIGBtYXhsZW5ndGhgIGF0dHJpYnV0ZS5cbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXhMZW5ndGhWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsXG4gICAgT25DaGFuZ2VzIHtcbnByaXZhdGUgX3ZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG5wcml2YXRlIF9vbkNoYW5nZTogKCkgPT4gdm9pZDtcblxuICAgbWF4bGVuZ3RoOiBzdHJpbmc7XG4vKipcbiAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICogQHJldHVybiB7P31cbiAqL1xubmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICgnbWF4bGVuZ3RoJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgIGlmICh0aGlzLl9vbkNoYW5nZSkgdGhpcy5fb25DaGFuZ2UoKTtcbiAgICB9XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBjXG4gKiBAcmV0dXJuIHs/fVxuICovXG52YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwge1xuICAgIHJldHVybiB0aGlzLm1heGxlbmd0aCAhPSBudWxsID8gdGhpcy5fdmFsaWRhdG9yKGMpIDogbnVsbDtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfY3JlYXRlVmFsaWRhdG9yKCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbGlkYXRvciA9IFZhbGlkYXRvcnMubWF4TGVuZ3RoKHBhcnNlSW50KHRoaXMubWF4bGVuZ3RoLCAxMCkpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnW21heGxlbmd0aF1bZm9ybUNvbnRyb2xOYW1lXSxbbWF4bGVuZ3RoXVtmb3JtQ29udHJvbF0sW21heGxlbmd0aF1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtNQVhfTEVOR1RIX1ZBTElEQVRPUl0sXG4gIGhvc3Q6IHsnW2F0dHIubWF4bGVuZ3RoXSc6ICdtYXhsZW5ndGggPyBtYXhsZW5ndGggOiBudWxsJ31cbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidtYXhsZW5ndGgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBNYXhMZW5ndGhWYWxpZGF0b3JfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbk1heExlbmd0aFZhbGlkYXRvci5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbk1heExlbmd0aFZhbGlkYXRvci5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbk1heExlbmd0aFZhbGlkYXRvci5wcm9wRGVjb3JhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cbk1heExlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRvcjtcbi8qKiBAdHlwZSB7P30gKi9cbk1heExlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUuX29uQ2hhbmdlO1xuLyoqIEB0eXBlIHs/fSAqL1xuTWF4TGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5tYXhsZW5ndGg7XG59XG5cblxuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBQQVRURVJOX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQYXR0ZXJuVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG4vKipcbiAqIEEgRGlyZWN0aXZlIHRoYXQgYWRkcyB0aGUgYHBhdHRlcm5gIHZhbGlkYXRvciB0byBhbnkgY29udHJvbHMgbWFya2VkIHdpdGggdGhlXG4gKiBgcGF0dGVybmAgYXR0cmlidXRlLCB2aWEgdGhlIHtcXEBsaW5rIE5HX1ZBTElEQVRPUlN9IGJpbmRpbmcuIFVzZXMgYXR0cmlidXRlIHZhbHVlXG4gKiBhcyB0aGUgcmVnZXggdG8gdmFsaWRhdGUgQ29udHJvbCB2YWx1ZSBhZ2FpbnN0LiAgRm9sbG93cyBwYXR0ZXJuIGF0dHJpYnV0ZVxuICogc2VtYW50aWNzOyBpLmUuIHJlZ2V4IG11c3QgbWF0Y2ggZW50aXJlIENvbnRyb2wgdmFsdWUuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIGBgYFxuICogPGlucHV0IFtuYW1lXT1cImZ1bGxOYW1lXCIgcGF0dGVybj1cIlthLXpBLVogXSpcIiBuZ01vZGVsPlxuICogYGBgXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIFBhdHRlcm5WYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsXG4gICAgT25DaGFuZ2VzIHtcbnByaXZhdGUgX3ZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG5wcml2YXRlIF9vbkNoYW5nZTogKCkgPT4gdm9pZDtcblxuICAgcGF0dGVybjogc3RyaW5nfFJlZ0V4cDtcbi8qKlxuICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCdwYXR0ZXJuJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgIGlmICh0aGlzLl9vbkNoYW5nZSkgdGhpcy5fb25DaGFuZ2UoKTtcbiAgICB9XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBjXG4gKiBAcmV0dXJuIHs/fVxuICovXG52YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwgeyByZXR1cm4gdGhpcy5fdmFsaWRhdG9yKGMpOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9jcmVhdGVWYWxpZGF0b3IoKTogdm9pZCB7IHRoaXMuX3ZhbGlkYXRvciA9IFZhbGlkYXRvcnMucGF0dGVybih0aGlzLnBhdHRlcm4pOyB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnW3BhdHRlcm5dW2Zvcm1Db250cm9sTmFtZV0sW3BhdHRlcm5dW2Zvcm1Db250cm9sXSxbcGF0dGVybl1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtQQVRURVJOX1ZBTElEQVRPUl0sXG4gIGhvc3Q6IHsnW2F0dHIucGF0dGVybl0nOiAncGF0dGVybiA/IHBhdHRlcm4gOiBudWxsJ31cbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidwYXR0ZXJuJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gUGF0dGVyblZhbGlkYXRvcl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuUGF0dGVyblZhbGlkYXRvci5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cblBhdHRlcm5WYWxpZGF0b3IuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5QYXR0ZXJuVmFsaWRhdG9yLnByb3BEZWNvcmF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuUGF0dGVyblZhbGlkYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRvcjtcbi8qKiBAdHlwZSB7P30gKi9cblBhdHRlcm5WYWxpZGF0b3IucHJvdG90eXBlLl9vbkNoYW5nZTtcbi8qKiBAdHlwZSB7P30gKi9cblBhdHRlcm5WYWxpZGF0b3IucHJvdG90eXBlLnBhdHRlcm47XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIEZvcm1BcnJheSwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSAnLi9tb2RlbCc7XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgQ3JlYXRlcyBhbiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9IGZyb20gYSB1c2VyLXNwZWNpZmllZCBjb25maWd1cmF0aW9uLlxuICogXG4gKiBJdCBpcyBlc3NlbnRpYWxseSBzeW50YWN0aWMgc3VnYXIgdGhhdCBzaG9ydGVucyB0aGUgYG5ldyBGb3JtR3JvdXAoKWAsXG4gKiBgbmV3IEZvcm1Db250cm9sKClgLCBhbmQgYG5ldyBGb3JtQXJyYXkoKWAgYm9pbGVycGxhdGUgdGhhdCBjYW4gYnVpbGQgdXAgaW4gbGFyZ2VyXG4gKiBmb3Jtcy5cbiAqIFxuICogXFxAaG93VG9Vc2UgXG4gKiBcbiAqIFRvIHVzZSwgaW5qZWN0IGBGb3JtQnVpbGRlcmAgaW50byB5b3VyIGNvbXBvbmVudCBjbGFzcy4gWW91IGNhbiB0aGVuIGNhbGwgaXRzIG1ldGhvZHNcbiAqIGRpcmVjdGx5LlxuICogXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9mb3JtQnVpbGRlci9mb3JtX2J1aWxkZXJfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gKiBcbiAqICAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKiBcbiAqICAqICoqTmdNb2R1bGUqKjoge1xcQGxpbmsgUmVhY3RpdmVGb3Jtc01vZHVsZX1cbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtQnVpbGRlciB7XG4vKipcbiAqIENvbnN0cnVjdCBhIG5ldyB7XFxAbGluayBGb3JtR3JvdXB9IHdpdGggdGhlIGdpdmVuIG1hcCBvZiBjb25maWd1cmF0aW9uLlxuICogVmFsaWQga2V5cyBmb3IgdGhlIGBleHRyYWAgcGFyYW1ldGVyIG1hcCBhcmUgYHZhbGlkYXRvcmAgYW5kIGBhc3luY1ZhbGlkYXRvcmAuXG4gKiBcbiAqIFNlZSB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfSBjb25zdHJ1Y3RvciBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHs/fSBjb250cm9sc0NvbmZpZ1xuICogQHBhcmFtIHs/PX0gZXh0cmFcbiAqIEByZXR1cm4gez99XG4gKi9cbmdyb3VwKGNvbnRyb2xzQ29uZmlnOiB7W2tleTogc3RyaW5nXTogYW55fSwgZXh0cmE6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0gbnVsbCk6IEZvcm1Hcm91cCB7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9scyA9IHRoaXMuX3JlZHVjZUNvbnRyb2xzKGNvbnRyb2xzQ29uZmlnKTtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIHZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSBleHRyYSAhPSBudWxsID8gZXh0cmFbJ3ZhbGlkYXRvciddIDogbnVsbDtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGFzeW5jVmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZuID0gZXh0cmEgIT0gbnVsbCA/IGV4dHJhWydhc3luY1ZhbGlkYXRvciddIDogbnVsbDtcbiAgICByZXR1cm4gbmV3IEZvcm1Hcm91cChjb250cm9scywgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcik7XG4gIH1cbi8qKlxuICogQ29uc3RydWN0IGEgbmV3IHtcXEBsaW5rIEZvcm1Db250cm9sfSB3aXRoIHRoZSBnaXZlbiBgZm9ybVN0YXRlYCxgdmFsaWRhdG9yYCwgYW5kXG4gKiBgYXN5bmNWYWxpZGF0b3JgLlxuICogXG4gKiBgZm9ybVN0YXRlYCBjYW4gZWl0aGVyIGJlIGEgc3RhbmRhbG9uZSB2YWx1ZSBmb3IgdGhlIGZvcm0gY29udHJvbCBvciBhbiBvYmplY3RcbiAqIHRoYXQgY29udGFpbnMgYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkIHN0YXR1cy5cbiAqIFxuICogQHBhcmFtIHs/fSBmb3JtU3RhdGVcbiAqIEBwYXJhbSB7Pz19IHZhbGlkYXRvclxuICogQHBhcmFtIHs/PX0gYXN5bmNWYWxpZGF0b3JcbiAqIEByZXR1cm4gez99XG4gKi9cbmNvbnRyb2woXG4gICAgICBmb3JtU3RhdGU6IE9iamVjdCwgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbnxWYWxpZGF0b3JGbltdID0gbnVsbCxcbiAgICAgIGFzeW5jVmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZufEFzeW5jVmFsaWRhdG9yRm5bXSA9IG51bGwpOiBGb3JtQ29udHJvbCB7XG4gICAgcmV0dXJuIG5ldyBGb3JtQ29udHJvbChmb3JtU3RhdGUsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICB9XG4vKipcbiAqIENvbnN0cnVjdCBhIHtcXEBsaW5rIEZvcm1BcnJheX0gZnJvbSB0aGUgZ2l2ZW4gYGNvbnRyb2xzQ29uZmlnYCBhcnJheSBvZlxuICogY29uZmlndXJhdGlvbiwgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9uYWwgYHZhbGlkYXRvcmAgYW5kIGBhc3luY1ZhbGlkYXRvcmAuXG4gKiBAcGFyYW0gez99IGNvbnRyb2xzQ29uZmlnXG4gKiBAcGFyYW0gez89fSB2YWxpZGF0b3JcbiAqIEBwYXJhbSB7Pz19IGFzeW5jVmFsaWRhdG9yXG4gKiBAcmV0dXJuIHs/fVxuICovXG5hcnJheShcbiAgICAgIGNvbnRyb2xzQ29uZmlnOiBhbnlbXSwgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IG51bGwsXG4gICAgICBhc3luY1ZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3JGbiA9IG51bGwpOiBGb3JtQXJyYXkge1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY29udHJvbHMgPSBjb250cm9sc0NvbmZpZy5tYXAoYyA9PiB0aGlzLl9jcmVhdGVDb250cm9sKGMpKTtcbiAgICByZXR1cm4gbmV3IEZvcm1BcnJheShjb250cm9scywgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcik7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gY29udHJvbHNDb25maWdcbiAqIEByZXR1cm4gez99XG4gKi9cbl9yZWR1Y2VDb250cm9scyhjb250cm9sc0NvbmZpZzoge1trOiBzdHJpbmddOiBhbnl9KToge1trZXk6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbH0ge1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY29udHJvbHM6IHtba2V5OiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2x9ID0ge307XG4gICAgT2JqZWN0LmtleXMoY29udHJvbHNDb25maWcpLmZvckVhY2goY29udHJvbE5hbWUgPT4ge1xuICAgICAgY29udHJvbHNbY29udHJvbE5hbWVdID0gdGhpcy5fY3JlYXRlQ29udHJvbChjb250cm9sc0NvbmZpZ1tjb250cm9sTmFtZV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBjb250cm9scztcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBjb250cm9sQ29uZmlnXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fY3JlYXRlQ29udHJvbChjb250cm9sQ29uZmlnOiBhbnkpOiBBYnN0cmFjdENvbnRyb2wge1xuICAgIGlmIChjb250cm9sQ29uZmlnIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgfHwgY29udHJvbENvbmZpZyBpbnN0YW5jZW9mIEZvcm1Hcm91cCB8fFxuICAgICAgICBjb250cm9sQ29uZmlnIGluc3RhbmNlb2YgRm9ybUFycmF5KSB7XG4gICAgICByZXR1cm4gY29udHJvbENvbmZpZztcblxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250cm9sQ29uZmlnKSkge1xuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZSA9IGNvbnRyb2xDb25maWdbMF07XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIHZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSBjb250cm9sQ29uZmlnLmxlbmd0aCA+IDEgPyBjb250cm9sQ29uZmlnWzFdIDogbnVsbDtcbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gYXN5bmNWYWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yRm4gPSBjb250cm9sQ29uZmlnLmxlbmd0aCA+IDIgPyBjb250cm9sQ29uZmlnWzJdIDogbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wodmFsdWUsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgfVxuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbn1cblxuZnVuY3Rpb24gRm9ybUJ1aWxkZXJfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1CdWlsZGVyLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuRm9ybUJ1aWxkZXIuY3RvclBhcmFtZXRlcnM7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9mb3JtX2J1aWxkZXIudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBFbnRyeSBwb2ludCBmb3IgYWxsIHB1YmxpYyBBUElzIG9mIHRoZSBjb21tb24gcGFja2FnZS5cbiAqL1xuXG5cbmltcG9ydCB7VmVyc2lvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY29uc3QgVkVSU0lPTiA9IG5ldyBWZXJzaW9uKCc0LjAuMycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy92ZXJzaW9uLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuICogXFxAd2hhdEl0RG9lcyBBZGRzIGBub3ZhbGlkYXRlYCBhdHRyaWJ1dGUgdG8gYWxsIGZvcm1zIGJ5IGRlZmF1bHQuXG4gKiBcbiAqIGBub3ZhbGlkYXRlYCBpcyB1c2VkIHRvIGRpc2FibGUgYnJvd3NlcidzIG5hdGl2ZSBmb3JtIHZhbGlkYXRpb24uXG4gKiBcbiAqIElmIHlvdSB3YW50IHRvIHVzZSBuYXRpdmUgdmFsaWRhdGlvbiB3aXRoIEFuZ3VsYXIgZm9ybXMsIGp1c3QgYWRkIGBuZ05hdGl2ZVZhbGlkYXRlYCBhdHRyaWJ1dGU6XG4gKiBcbiAqIGBgYFxuICogPGZvcm0gbmdOYXRpdmVWYWxpZGF0ZT48L2Zvcm0+XG4gKiBgYGBcbiAqIFxuICogXFxAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ05vVmFsaWRhdGUge1xuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjogJ2Zvcm06bm90KFtuZ05vRm9ybV0pOm5vdChbbmdOYXRpdmVWYWxpZGF0ZV0pJyxcbiAgaG9zdDogeydub3ZhbGlkYXRlJzogJyd9LFxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG59XG5cbmZ1bmN0aW9uIE5nTm9WYWxpZGF0ZV90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdOb1ZhbGlkYXRlLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuTmdOb1ZhbGlkYXRlLmN0b3JQYXJhbWV0ZXJzO1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19ub192YWxpZGF0ZV9kaXJlY3RpdmUudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtOZ01vZHVsZSwgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Q2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2NoZWNrYm94X3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9kZWZhdWx0X3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7TmdDb250cm9sU3RhdHVzLCBOZ0NvbnRyb2xTdGF0dXNHcm91cH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2NvbnRyb2xfc3RhdHVzJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfZm9ybSc7XG5pbXBvcnQge05nTW9kZWx9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19tb2RlbCc7XG5pbXBvcnQge05nTW9kZWxHcm91cH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX21vZGVsX2dyb3VwJztcbmltcG9ydCB7TmdOb1ZhbGlkYXRlfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfbm9fdmFsaWRhdGVfZGlyZWN0aXZlJztcbmltcG9ydCB7TnVtYmVyVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL251bWJlcl92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge1JhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9yYWRpb19jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7UmFuZ2VWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmFuZ2VfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtGb3JtQ29udHJvbERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX2RpcmVjdGl2ZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sTmFtZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX25hbWUnO1xuaW1wb3J0IHtGb3JtR3JvdXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fZ3JvdXBfZGlyZWN0aXZlJztcbmltcG9ydCB7Rm9ybUFycmF5TmFtZSwgRm9ybUdyb3VwTmFtZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9ncm91cF9uYW1lJztcbmltcG9ydCB7TmdTZWxlY3RPcHRpb24sIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0X2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLCBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0X211bHRpcGxlX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLCBFbWFpbFZhbGlkYXRvciwgTWF4TGVuZ3RoVmFsaWRhdG9yLCBNaW5MZW5ndGhWYWxpZGF0b3IsIFBhdHRlcm5WYWxpZGF0b3IsIFJlcXVpcmVkVmFsaWRhdG9yfSBmcm9tICcuL2RpcmVjdGl2ZXMvdmFsaWRhdG9ycyc7XG5cbmV4cG9ydCB7Q2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2NoZWNrYm94X3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9kZWZhdWx0X3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7TmdDb250cm9sfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfY29udHJvbCc7XG5leHBvcnQge05nQ29udHJvbFN0YXR1cywgTmdDb250cm9sU3RhdHVzR3JvdXB9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19jb250cm9sX3N0YXR1cyc7XG5leHBvcnQge05nRm9ybX0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2Zvcm0nO1xuZXhwb3J0IHtOZ01vZGVsfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfbW9kZWwnO1xuZXhwb3J0IHtOZ01vZGVsR3JvdXB9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19tb2RlbF9ncm91cCc7XG5leHBvcnQge051bWJlclZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9udW1iZXJfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmFkaW9fY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge1JhbmdlVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3JhbmdlX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7Rm9ybUNvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fY29udHJvbF9kaXJlY3RpdmUnO1xuZXhwb3J0IHtGb3JtQ29udHJvbE5hbWV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fY29udHJvbF9uYW1lJztcbmV4cG9ydCB7Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX2RpcmVjdGl2ZSc7XG5leHBvcnQge0Zvcm1BcnJheU5hbWUsIEZvcm1Hcm91cE5hbWV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fZ3JvdXBfbmFtZSc7XG5leHBvcnQge05nU2VsZWN0T3B0aW9uLCBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlbGVjdF9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7TmdTZWxlY3RNdWx0aXBsZU9wdGlvbiwgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlbGVjdF9tdWx0aXBsZV9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gU0hBUkVEX0ZPUk1fRElSRUNUSVZFUzogVHlwZTxhbnk+W10gPSBbXG4gIE5nTm9WYWxpZGF0ZSxcbiAgTmdTZWxlY3RPcHRpb24sXG4gIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24sXG4gIERlZmF1bHRWYWx1ZUFjY2Vzc29yLFxuICBOdW1iZXJWYWx1ZUFjY2Vzc29yLFxuICBSYW5nZVZhbHVlQWNjZXNzb3IsXG4gIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOZ0NvbnRyb2xTdGF0dXMsXG4gIE5nQ29udHJvbFN0YXR1c0dyb3VwLFxuICBSZXF1aXJlZFZhbGlkYXRvcixcbiAgTWluTGVuZ3RoVmFsaWRhdG9yLFxuICBNYXhMZW5ndGhWYWxpZGF0b3IsXG4gIFBhdHRlcm5WYWxpZGF0b3IsXG4gIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IsXG4gIEVtYWlsVmFsaWRhdG9yLFxuXTtcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gVEVNUExBVEVfRFJJVkVOX0RJUkVDVElWRVM6IFR5cGU8YW55PltdID0gW05nTW9kZWwsIE5nTW9kZWxHcm91cCwgTmdGb3JtXTtcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gUkVBQ1RJVkVfRFJJVkVOX0RJUkVDVElWRVM6IFR5cGU8YW55PltdID1cbiAgICBbRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Hcm91cERpcmVjdGl2ZSwgRm9ybUNvbnRyb2xOYW1lLCBGb3JtR3JvdXBOYW1lLCBGb3JtQXJyYXlOYW1lXTtcbi8qKlxuICogSW50ZXJuYWwgbW9kdWxlIHVzZWQgZm9yIHNoYXJpbmcgZGlyZWN0aXZlcyBiZXR3ZWVuIEZvcm1zTW9kdWxlIGFuZCBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlIHtcbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICBkZWNsYXJhdGlvbnM6IFNIQVJFRF9GT1JNX0RJUkVDVElWRVMsXG4gIGV4cG9ydHM6IFNIQVJFRF9GT1JNX0RJUkVDVElWRVMsXG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbn1cblxuZnVuY3Rpb24gSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZV90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZS5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbkludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUuY3RvclBhcmFtZXRlcnM7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0ludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUsIFJFQUNUSVZFX0RSSVZFTl9ESVJFQ1RJVkVTLCBURU1QTEFURV9EUklWRU5fRElSRUNUSVZFU30gZnJvbSAnLi9kaXJlY3RpdmVzJztcbmltcG9ydCB7UmFkaW9Db250cm9sUmVnaXN0cnl9IGZyb20gJy4vZGlyZWN0aXZlcy9yYWRpb19jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXJ9IGZyb20gJy4vZm9ybV9idWlsZGVyJztcbi8qKlxuICogVGhlIG5nIG1vZHVsZSBmb3IgZm9ybXMuXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIEZvcm1zTW9kdWxlIHtcbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICBkZWNsYXJhdGlvbnM6IFRFTVBMQVRFX0RSSVZFTl9ESVJFQ1RJVkVTLFxuICBwcm92aWRlcnM6IFtSYWRpb0NvbnRyb2xSZWdpc3RyeV0sXG4gIGV4cG9ydHM6IFtJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlLCBURU1QTEFURV9EUklWRU5fRElSRUNUSVZFU11cbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5mdW5jdGlvbiBGb3Jtc01vZHVsZV90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybXNNb2R1bGUuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5Gb3Jtc01vZHVsZS5jdG9yUGFyYW1ldGVycztcbn1cblxuLyoqXG4gKiBUaGUgbmcgbW9kdWxlIGZvciByZWFjdGl2ZSBmb3Jtcy5cbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgUmVhY3RpdmVGb3Jtc01vZHVsZSB7XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgZGVjbGFyYXRpb25zOiBbUkVBQ1RJVkVfRFJJVkVOX0RJUkVDVElWRVNdLFxuICBwcm92aWRlcnM6IFtGb3JtQnVpbGRlciwgUmFkaW9Db250cm9sUmVnaXN0cnldLFxuICBleHBvcnRzOiBbSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZSwgUkVBQ1RJVkVfRFJJVkVOX0RJUkVDVElWRVNdXG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbn1cblxuZnVuY3Rpb24gUmVhY3RpdmVGb3Jtc01vZHVsZV90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuUmVhY3RpdmVGb3Jtc01vZHVsZS5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cblJlYWN0aXZlRm9ybXNNb2R1bGUuY3RvclBhcmFtZXRlcnM7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9mb3JtX3Byb3ZpZGVycy50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgbW9kdWxlIGlzIHVzZWQgZm9yIGhhbmRsaW5nIHVzZXIgaW5wdXQsIGJ5IGRlZmluaW5nIGFuZCBidWlsZGluZyBhIHtAbGluayBGb3JtR3JvdXB9IHRoYXRcbiAqIGNvbnNpc3RzIG9mIHtAbGluayBGb3JtQ29udHJvbH0gb2JqZWN0cywgYW5kIG1hcHBpbmcgdGhlbSBvbnRvIHRoZSBET00uIHtAbGluayBGb3JtQ29udHJvbH1cbiAqIG9iamVjdHMgY2FuIHRoZW4gYmUgdXNlZCB0byByZWFkIGluZm9ybWF0aW9uIGZyb20gdGhlIGZvcm0gRE9NIGVsZW1lbnRzLlxuICpcbiAqIEZvcm1zIHByb3ZpZGVycyBhcmUgbm90IGluY2x1ZGVkIGluIGRlZmF1bHQgcHJvdmlkZXJzOyB5b3UgbXVzdCBpbXBvcnQgdGhlc2UgcHJvdmlkZXJzXG4gKiBleHBsaWNpdGx5LlxuICovXG5cblxuZXhwb3J0IHtBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9hYnN0cmFjdF9jb250cm9sX2RpcmVjdGl2ZSc7XG5leHBvcnQge0Fic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvYWJzdHJhY3RfZm9ybV9ncm91cF9kaXJlY3RpdmUnO1xuZXhwb3J0IHtDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2hlY2tib3hfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtDb250cm9sQ29udGFpbmVyfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29udHJvbF9jb250YWluZXInO1xuZXhwb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJy4vZGlyZWN0aXZlcy9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7Q09NUE9TSVRJT05fQlVGRkVSX01PREUsIERlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGVmYXVsdF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge0Zvcm19IGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtX2ludGVyZmFjZSc7XG5leHBvcnQge05nQ29udHJvbH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2NvbnRyb2wnO1xuZXhwb3J0IHtOZ0NvbnRyb2xTdGF0dXMsIE5nQ29udHJvbFN0YXR1c0dyb3VwfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfY29udHJvbF9zdGF0dXMnO1xuZXhwb3J0IHtOZ0Zvcm19IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19mb3JtJztcbmV4cG9ydCB7TmdNb2RlbH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX21vZGVsJztcbmV4cG9ydCB7TmdNb2RlbEdyb3VwfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfbW9kZWxfZ3JvdXAnO1xuZXhwb3J0IHtSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmFkaW9fY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge0Zvcm1Db250cm9sRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2NvbnRyb2xfZGlyZWN0aXZlJztcbmV4cG9ydCB7Rm9ybUNvbnRyb2xOYW1lfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2NvbnRyb2xfbmFtZSc7XG5leHBvcnQge0Zvcm1Hcm91cERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9ncm91cF9kaXJlY3RpdmUnO1xuZXhwb3J0IHtGb3JtQXJyYXlOYW1lfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX25hbWUnO1xuZXhwb3J0IHtGb3JtR3JvdXBOYW1lfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX25hbWUnO1xuZXhwb3J0IHtOZ1NlbGVjdE9wdGlvbiwgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9zZWxlY3RfY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge1NlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9zZWxlY3RfbXVsdGlwbGVfY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge0FzeW5jVmFsaWRhdG9yLCBBc3luY1ZhbGlkYXRvckZuLCBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLCBFbWFpbFZhbGlkYXRvciwgTWF4TGVuZ3RoVmFsaWRhdG9yLCBNaW5MZW5ndGhWYWxpZGF0b3IsIFBhdHRlcm5WYWxpZGF0b3IsIFJlcXVpcmVkVmFsaWRhdG9yLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZufSBmcm9tICcuL2RpcmVjdGl2ZXMvdmFsaWRhdG9ycyc7XG5leHBvcnQge0Zvcm1CdWlsZGVyfSBmcm9tICcuL2Zvcm1fYnVpbGRlcic7XG5leHBvcnQge0Fic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5LCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwfSBmcm9tICcuL21vZGVsJztcbmV4cG9ydCB7TkdfQVNZTkNfVkFMSURBVE9SUywgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yc30gZnJvbSAnLi92YWxpZGF0b3JzJztcbmV4cG9ydCB7VkVSU0lPTn0gZnJvbSAnLi92ZXJzaW9uJztcblxuZXhwb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICcuL2Zvcm1fcHJvdmlkZXJzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZm9ybXMudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBFbnRyeSBwb2ludCBmb3IgYWxsIHB1YmxpYyBBUElzIG9mIHRoZSBmb3JtcyBwYWNrYWdlLlxuICovXG5leHBvcnQge0Fic3RyYWN0Q29udHJvbERpcmVjdGl2ZSxBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSxDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLENvbnRyb2xDb250YWluZXIsQ29udHJvbFZhbHVlQWNjZXNzb3IsTkdfVkFMVUVfQUNDRVNTT1IsQ09NUE9TSVRJT05fQlVGRkVSX01PREUsRGVmYXVsdFZhbHVlQWNjZXNzb3IsRm9ybSxOZ0NvbnRyb2wsTmdDb250cm9sU3RhdHVzLE5nQ29udHJvbFN0YXR1c0dyb3VwLE5nRm9ybSxOZ01vZGVsLE5nTW9kZWxHcm91cCxSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLEZvcm1Db250cm9sRGlyZWN0aXZlLEZvcm1Db250cm9sTmFtZSxGb3JtR3JvdXBEaXJlY3RpdmUsRm9ybUFycmF5TmFtZSxGb3JtR3JvdXBOYW1lLE5nU2VsZWN0T3B0aW9uLFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IsQXN5bmNWYWxpZGF0b3IsQXN5bmNWYWxpZGF0b3JGbixDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLEVtYWlsVmFsaWRhdG9yLE1heExlbmd0aFZhbGlkYXRvcixNaW5MZW5ndGhWYWxpZGF0b3IsUGF0dGVyblZhbGlkYXRvcixSZXF1aXJlZFZhbGlkYXRvcixWYWxpZGF0aW9uRXJyb3JzLFZhbGlkYXRvcixWYWxpZGF0b3JGbixGb3JtQnVpbGRlcixBYnN0cmFjdENvbnRyb2wsRm9ybUFycmF5LEZvcm1Db250cm9sLEZvcm1Hcm91cCxOR19BU1lOQ19WQUxJREFUT1JTLE5HX1ZBTElEQVRPUlMsVmFsaWRhdG9ycyxWRVJTSU9OLEZvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJy4vc3JjL2Zvcm1zJztcblxuLy8gVGhpcyBmaWxlIG9ubHkgcmVleHBvcnRzIGNvbnRlbnQgb2YgdGhlIGBzcmNgIGZvbGRlci4gS2VlcCBpdCB0aGF0IHdheS5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9wdWJsaWNfYXBpLnRzIiwiaW1wb3J0IFwibWF0ZXJpYWwtZGVzaWduLWxpdGUvZGlzdC9tYXRlcmlhbC5kZWVwX3B1cnBsZS1waW5rLm1pbi5jc3NcIjtcbmltcG9ydCBcIi4vYXBwLmNzc1wiO1xuaW1wb3J0IFwibWF0ZXJpYWwtZGVzaWduLWxpdGUvbWF0ZXJpYWwubWluLmpzXCI7XG5cbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcblxuaW1wb3J0IHsgTWFpbk1vZHVsZSB9IGZyb20gJy4vbWFpbi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgZW5hYmxlUHJvZE1vZGUoKTtcbn1cblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShNYWluTW9kdWxlKS50aGVuKGZ1bmN0aW9uKE1PRFVMRV9SRUYpIHsgICBpZiAobW9kdWxlW1wiaG90XCJdKSB7ICAgICBtb2R1bGVbXCJob3RcIl1bXCJhY2NlcHRcIl0oKTsgICAgICAgICAgaWYgKE1PRFVMRV9SRUYuaW5zdGFuY2VbXCJobXJPbkluaXRcIl0pIHsgICAgICAgbW9kdWxlW1wiaG90XCJdW1wiZGF0YVwiXSAmJiBNT0RVTEVfUkVGLmluc3RhbmNlW1wiaG1yT25Jbml0XCJdKG1vZHVsZVtcImhvdFwiXVtcImRhdGFcIl0pOyAgICAgfSAgICAgaWYgKE1PRFVMRV9SRUYuaW5zdGFuY2VbXCJobXJPblN0YXR1c1wiXSkgeyAgICAgICBtb2R1bGVbXCJob3RcIl1bXCJhcHBseVwiXShmdW5jdGlvbihzdGF0dXMpIHsgICAgICAgICBNT0RVTEVfUkVGLmluc3RhbmNlW1wiaG1yT25TdGF0dXNcIl0oc3RhdHVzKTsgICAgICAgfSk7ICAgICB9ICAgICBpZiAoTU9EVUxFX1JFRi5pbnN0YW5jZVtcImhtck9uQ2hlY2tcIl0pIHsgICAgICAgbW9kdWxlW1wiaG90XCJdW1wiY2hlY2tcIl0oZnVuY3Rpb24oZXJyLCBvdXRkYXRlZE1vZHVsZXMpIHsgICAgICAgICBNT0RVTEVfUkVGLmluc3RhbmNlW1wiaG1yT25DaGVja1wiXShlcnIsIG91dGRhdGVkTW9kdWxlcyk7ICAgICAgIH0pOyAgICAgfSAgICAgaWYgKE1PRFVMRV9SRUYuaW5zdGFuY2VbXCJobXJPbkRlY2xpbmVcIl0pIHsgICAgICAgbW9kdWxlW1wiaG90XCJdW1wiZGVjbGluZVwiXShmdW5jdGlvbihkZXBlbmRlbmNpZXMpIHsgICAgICAgICBNT0RVTEVfUkVGLmluc3RhbmNlW1wiaG1yT25EZWNsaW5lXCJdKGRlcGVuZGVuY2llcyk7ICAgICAgIH0pOyAgICAgfSAgICAgbW9kdWxlW1wiaG90XCJdW1wiZGlzcG9zZVwiXShmdW5jdGlvbihzdG9yZSkgeyAgICAgICBNT0RVTEVfUkVGLmluc3RhbmNlW1wiaG1yT25EZXN0cm95XCJdICYmIE1PRFVMRV9SRUYuaW5zdGFuY2VbXCJobXJPbkRlc3Ryb3lcIl0oc3RvcmUpOyAgICAgICBNT0RVTEVfUkVGLmRlc3Ryb3koKTsgICAgICAgTU9EVUxFX1JFRi5pbnN0YW5jZVtcImhtckFmdGVyRGVzdHJveVwiXSAmJiBNT0RVTEVfUkVGLmluc3RhbmNlW1wiaG1yQWZ0ZXJEZXN0cm95XCJdKHN0b3JlKTsgICAgIH0pOyAgIH0gICByZXR1cm4gTU9EVUxFX1JFRjsgfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vQGFuZ3VsYXJjbGFzcy9obXItbG9hZGVyIS4vc3JjL21haW4udHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IG1kbCBjbGFzcz1cIm1kbC1sYXlvdXQgbWRsLWpzLWxheW91dCBtZGwtbGF5b3V0LS1maXhlZC1oZWFkZXJcIj5cblxuICAgICAgICA8YXBwLWhlYWRlcj48L2FwcC1oZWFkZXI+XG5cbiAgICAgICAgPG1haW4gY2xhc3M9XCJtZGwtbGF5b3V0X19jb250ZW50XCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0X190YWItcGFuZWwgaXMtYWN0aXZlXCIgaWQ9XCJvdmVydmlld1wiPlxuICAgICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aDQgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwibG9nb1VybFwiIC8+XG4gICAgICAgICAgICAgICAgPGEgW2hyZWZdPVwidXJsXCI+TGVhcm4gYWJvdXQgdGhpcyBBbmd1bGFyNCBWUy5ORVQgdGVtcGxhdGU8L2E+XG4gICAgICAgICAgICA8L2g0PlxuXG4gICAgICAgICAgICA8YXBwLWZvb3Rlcj48L2FwcC1mb290ZXI+XG5cbiAgICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICB1cmw6IHN0cmluZztcbiAgICBsb2dvVXJsOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sb2dvVXJsID0gcmVxdWlyZShcIi4vYXNzZXRzL2ltZy9sb2dvLnBuZ1wiKTtcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cHM6Ly9zZXJ2aWNlc3RhY2submV0L3ZzLXRlbXBsYXRlcy9Bbmd1bGFyQXBwJztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vQGFuZ3VsYXJjbGFzcy9obXItbG9hZGVyIS4vc3JjL2FwcC5jb21wb25lbnQudHMiXSwic291cmNlUm9vdCI6IiJ9