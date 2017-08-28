import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'app-children',
    templateUrl:'./children.component.html'
})
export class ChildrenComponent implements OnInit {
    @Input() propertyA: any;
    @Input('auxProperty') propertyB: String;

    constructor() {
        //No imprime nada debido a que el construtor es llamado antes que se instancie los valores
        console.log(this.propertyA);
        console.log(this.propertyB);
    }
    ngOnInit() {
        //Imprime los valores instanciados
        console.log(this.propertyA);
        console.log(this.propertyB);
    }
}