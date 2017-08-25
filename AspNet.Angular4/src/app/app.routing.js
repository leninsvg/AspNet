"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
//Importacion Componentes
var employee_component_1 = require("./component/employee/employee.component");
var person_component_1 = require("./component/person/person.component");
var appRoutes = [
    { path: '', component: employee_component_1.EmployeeComponent },
    { path: 'employee', component: employee_component_1.EmployeeComponent },
    { path: 'person', component: person_component_1.PersonComponent },
    { path: '*', component: employee_component_1.EmployeeComponent } //Carga cuando se introduce otra ruta
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map