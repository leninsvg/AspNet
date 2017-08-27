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
var car_1 = require("../../model/car");
var request_service_1 = require("../../services/request.service");
var CarComponent = (function () {
    //public listUser;
    /** car ctor */
    function CarComponent(_requestService) {
        this._requestService = _requestService;
        this.car = new car_1.Car('', '', '', 0.00);
        this.listCar = [
            new car_1.Car('auto', 'green', 'toyota', 10000),
            new car_1.Car('camioneta', 'red', 'toyota', 20000)
        ];
    }
    /** Called by Angular after car component initialized */
    CarComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Recojer el resultado de una funcion asincronica
        this._requestService.getUser().subscribe(function (result) {
            _this.listUser = result;
            if (!_this.listUser) {
                console.log('Sin Articulos');
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
        console.log(this._requestService.getTest());
    };
    CarComponent.prototype.onSubmit = function (formCar) {
        this.listCar.push(this.car);
        this.car = new car_1.Car('', '', '', 0.00);
        formCar.reset();
    };
    return CarComponent;
}());
CarComponent = __decorate([
    core_1.Component({
        selector: 'app-car',
        templateUrl: './car.component.html',
        providers: [
            request_service_1.RequestService
        ]
    })
    /** car component*/
    ,
    __metadata("design:paramtypes", [request_service_1.RequestService])
], CarComponent);
exports.CarComponent = CarComponent;
//# sourceMappingURL=car.component.js.map