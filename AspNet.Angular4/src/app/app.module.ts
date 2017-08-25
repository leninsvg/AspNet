import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' //Libreria que sirve para el doble data binding
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { PersonComponent } from './component/person/person.component';
import { EmployeeComponent } from './component/employee/employee.component';

@NgModule({
    //Importaciones de librerias
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    //Importacion de componentes
    declarations: [
        AppComponent,
        PersonComponent,
        EmployeeComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
