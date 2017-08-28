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
var ChildrenComponent = (function () {
    function ChildrenComponent() {
        //No imprime nada debido a que el construtor es llamado antes que se instancie los valores
        console.log(this.propertyA);
        console.log(this.propertyB);
    }
    ChildrenComponent.prototype.ngOnInit = function () {
        //Imprime los valores instanciados
        console.log(this.propertyA);
        console.log(this.propertyB);
    };
    return ChildrenComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChildrenComponent.prototype, "propertyA", void 0);
__decorate([
    core_1.Input('auxProperty'),
    __metadata("design:type", String)
], ChildrenComponent.prototype, "propertyB", void 0);
ChildrenComponent = __decorate([
    core_1.Component({
        selector: 'app-children',
        templateUrl: './children.component.html'
    }),
    __metadata("design:paramtypes", [])
], ChildrenComponent);
exports.ChildrenComponent = ChildrenComponent;
//# sourceMappingURL=children.component.js.map