import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //Libreria que sirve para el doble data binding
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { PersonComponent } from './component/person/person.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { CarComponent } from './component/car/car.component';
import { TemplateComponent } from './component/template/template.component';
import { ChildrenComponent } from './component/children/children.component';

import { ConverterPipe } from './pipes/converter.pipe';// Pipes

@NgModule({
    //Importaciones de librerias
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    //Importacion de componentes
    declarations: [
        AppComponent,
        PersonComponent,
        EmployeeComponent,
        HomeComponent,
        ContactComponent,
        ConverterPipe,
        CarComponent,
        TemplateComponent,
        ChildrenComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
