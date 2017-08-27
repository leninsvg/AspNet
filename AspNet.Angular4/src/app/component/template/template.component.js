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
var TemplateComponent = (function () {
    /** template ctor */
    function TemplateComponent() {
        this.title = 'Platillas Angular4';
        this.administrator = true;
    }
    /** Called by Angular after template component initialized */
    TemplateComponent.prototype.ngOnInit = function () { };
    TemplateComponent.prototype.changeAdministrator = function () {
        this.administrator = !this.administrator;
    };
    return TemplateComponent;
}());
TemplateComponent = __decorate([
    core_1.Component({
        selector: 'app-template',
        templateUrl: './template.component.html'
    })
    /** template component*/
    ,
    __metadata("design:paramtypes", [])
], TemplateComponent);
exports.TemplateComponent = TemplateComponent;
//# sourceMappingURL=template.component.js.map