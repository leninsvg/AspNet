import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-template',
    templateUrl: './template.component.html'
})
/** template component*/
export class TemplateComponent implements OnInit
{
    public title: string;
    public administrator: boolean;
    public externalInfo: string;
    public identity: any;
    /** template ctor */
    constructor() {
        this.title = 'Platillas Angular4';
        this.administrator = true;
        this.externalInfo = 'Lenin Samaniego';
        this.identity = {
            id: 1,
            web: 'leningsv',
            thematic: 'desarrollo web'
        };
    }

    /** Called by Angular after template component initialized */
    ngOnInit(): void {
    }

    changeAdministrator() {
        this.administrator = !this.administrator;
    }
}