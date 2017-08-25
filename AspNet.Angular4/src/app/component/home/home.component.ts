import { Component } from '@angular/core';

@Component({
    selector: 'myHome',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    title: string;
    constructor() {
        this.title = 'Home';
    }
}