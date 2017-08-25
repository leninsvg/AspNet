"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); //Libreria que sirve para el doble data binding
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var person_component_1 = require("./component/person/person.component");
var employee_component_1 = require("./component/employee/employee.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        //Importaciones de librerias
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.routing
        ],
        //Importacion de componentes
        declarations: [
            app_component_1.AppComponent,
            person_component_1.PersonComponent,
            employee_component_1.EmployeeComponent
        ],
        providers: [
            app_routing_1.appRoutingProviders
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map