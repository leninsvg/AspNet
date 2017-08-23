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
var PersonComponent = (function () {
    /*Contructor es el primer elemento u objeto que se lanza en una clase, inicializa la clase,
    con this accedemos a las variables que contenga la clase.
    Por estandares en el constructor se tiene que inicializar las variables*/
    function PersonComponent() {
        this.firstName = 'lenin';
        this.age = 28;
    }
    /**
     * Metodo que es lanzado luego del contructor, llama los metods y funcionalidades,
     */
    PersonComponent.prototype.ngOnInit = function () {
        this.changeFirstName();
        //Variables y alcance
        //let tiene valor dentro del bloque
        var a = 8;
        var b = 15;
        if (a === 8) {
            var a_1 = 3;
            var b = 88;
            console.log('En el If', a_1);
        }
        console.log('Fuera del If', a);
    };
    //Declaracion de Funciones
    PersonComponent.prototype.changeFirstName = function () {
        this.firstName = 'Lenin Samaniego';
    };
    return PersonComponent;
}());
PersonComponent = __decorate([
    core_1.Component({
        selector: 'myPerson',
        templateUrl: './person.component.html'
    }),
    __metadata("design:paramtypes", [])
], PersonComponent);
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map