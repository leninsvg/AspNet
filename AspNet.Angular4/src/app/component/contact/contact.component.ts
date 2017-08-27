import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; //Para el paso de parametros desde una url

@Component({
    selector: 'app-contact',
    templateUrl:'./contact.component.html'
})

export class ContactComponent {
    public title: string;
    public param: string;
    //Configuracion del constructor para el uso de parametros.
    constructor(
        private _route: ActivatedRoute,
        private _router:Router,
    ) {
        this.title = 'Contact';
    }

    ngOnInit() {
        //Funciones de Flecha: Funcionamieto similar a las funciones de callback
        this._route.params.forEach((params: Params) => {      
            this.param = params.idContact;      
            console.log(params.idContact);
        });
    }

    redirect() {
        this._router.navigate(['/contact','parametro 1']);
    }
    redirectHome() {
        this._router.navigate(['/Home']);
    }
}