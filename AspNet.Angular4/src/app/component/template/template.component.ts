import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-template',
    templateUrl: './template.component.html'
})
/** template component*/
export class TemplateComponent implements OnInit
{
    public title: string;
    public administrator: boolean;
    /** template ctor */
    constructor() {
        this.title = 'Platillas Angular4';
        this.administrator = true;
    }

    /** Called by Angular after template component initialized */
    ngOnInit(): void { }

    changeAdministrator() {
        this.administrator = !this.administrator;
    }
}