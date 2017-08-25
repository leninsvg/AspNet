//Importacion que permite inyectar codigo en otros lados
import { Injectable } from '@angular/core';

@Injectable()
export class ClothingService {
    public listClothing: Array<string>;
    constructor() {
        this.listClothing = ['Camisa', 'Camiseta'];
    }
    testService(clothingName:string) {
        return clothingName;
    }
    //forza la devolucion con un tipo de dato explicito.
    addClothing(clothingName: string):Array<string> {
        this.listClothing.push(clothingName);
        return this.getClothing();
    }
    getClothing() {
        return this.listClothing;
    }
    deleteClothing(index:number) {
        this.listClothing.splice(index, 1);
        return this.getClothing();
    }
}