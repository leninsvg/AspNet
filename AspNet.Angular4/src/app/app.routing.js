"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
//Importacion Componentes
var employee_component_1 = require("./component/employee/employee.component");
var person_component_1 = require("./component/person/person.component");
var home_component_1 = require("./component/home/home.component");
var contact_component_1 = require("./component/contact/contact.component");
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'contact/:idContact', component: contact_component_1.ContactComponent },
    { path: 'employee', component: employee_component_1.EmployeeComponent },
    { path: 'person', component: person_component_1.PersonComponent },
    { path: '**', redirectTo: '/home' } //Carga cuando se introduce otra ruta
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes
//,{ enableTracing: true } // <-- debugging purposes only
);
//# sourceMappingURL=app.routing.js.map