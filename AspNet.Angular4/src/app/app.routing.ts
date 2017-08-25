import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importacion Componentes
import { EmployeeComponent } from './component/employee/employee.component';
import { PersonComponent } from './component/person/person.component';

const appRoutes: Routes = [
    { path: '', component: EmployeeComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'person', component: PersonComponent},
    { path: '*', component:EmployeeComponent } //Carga cuando se introduce otra ruta
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);