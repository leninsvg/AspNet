"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router"); //Para el paso de parametros desde una url
var ContactComponent = (function () {
    //Configuracion del constructor para el uso de parametros.
    function ContactComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.title = 'Contact';
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Funciones de Flecha: Funcionamieto similar a las funciones de callback
        this._route.params.forEach(function (params) {
            _this.param = params.idContact;
            console.log(params.idContact);
        });
    };
    ContactComponent.prototype.redirect = function () {
        this._router.navigate(['/contact', 'parametro 1']);
    };
    ContactComponent.prototype.redirectHome = function () {
        this._router.navigate(['/Home']);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map