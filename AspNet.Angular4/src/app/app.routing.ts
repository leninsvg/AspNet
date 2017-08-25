import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importacion Componentes
import { EmployeeComponent } from './component/employee/employee.component';
import { PersonComponent } from './component/person/person.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'contact/:idContact', component: ContactComponent },//Paso de parametro
    { path: 'employee', component: EmployeeComponent },
    { path: 'person', component: PersonComponent},
    { path: '**', redirectTo: '/home'} //Carga cuando se introduce otra ruta
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(
    appRoutes
    //,{ enableTracing: true } // <-- debugging purposes only
);