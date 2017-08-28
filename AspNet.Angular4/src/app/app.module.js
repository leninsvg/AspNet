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
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var person_component_1 = require("./component/person/person.component");
var employee_component_1 = require("./component/employee/employee.component");
var home_component_1 = require("./component/home/home.component");
var contact_component_1 = require("./component/contact/contact.component");
var car_component_1 = require("./component/car/car.component");
var template_component_1 = require("./component/template/template.component");
var children_component_1 = require("./component/children/children.component");
var converter_pipe_1 = require("./pipes/converter.pipe"); // Pipes
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
            app_routing_1.routing,
            http_1.HttpModule
        ],
        //Importacion de componentes
        declarations: [
            app_component_1.AppComponent,
            person_component_1.PersonComponent,
            employee_component_1.EmployeeComponent,
            home_component_1.HomeComponent,
            contact_component_1.ContactComponent,
            converter_pipe_1.ConverterPipe,
            car_component_1.CarComponent,
            template_component_1.TemplateComponent,
            children_component_1.ChildrenComponent
        ],
        providers: [
            app_routing_1.appRoutingProviders
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map