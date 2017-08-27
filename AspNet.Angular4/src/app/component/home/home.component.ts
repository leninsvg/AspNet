import { Component, OnInit } from '@angular/core';

//Importacion capaS de servicios
import { ClothingService } from '../../services/clothing.service';

@Component({
    selector: 'myHome',
    templateUrl: './home.component.html',
    providers:[ ClothingService ] //Importacion de los servicios
})

export class HomeComponent implements OnInit {
    title: string;
    public listClothing: Array<string>;
    public insertClothing: string;
    public todayDate: Date;
    constructor(
        private _clothingService: ClothingService
    ) {
        this.title = 'Home';
        this.todayDate = new Date(2017,6,13);
       
    }
    ngOnInit() {
        this.listClothing = this._clothingService.getClothing();
        console.log(this.listClothing);
    }
    addClothing() {
        this.listClothing = this._clothingService.addClothing(this.insertClothing);
        this.insertClothing = null;
    }
    deleteClothing(index: number) {
        alert(index);
        this.listClothing = this._clothingService.deleteClothing(index);
    }
}