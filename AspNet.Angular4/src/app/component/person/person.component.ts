import { Component } from '@angular/core'
@Component({
    selector: 'myPerson',
    templateUrl: './person.component.html'
})
export class PersonComponent{
    firstName: string;
    age: number;
    //any permite el uso de cualquier tipo de dato: string, number, boolean, etc.
    topics: Array<any>;
    /*Contructor es el primer elemento u objeto que se lanza en una clase, inicializa la clase,
    con this accedemos a las variables que contenga la clase.
    Por estandares en el constructor se tiene que inicializar las variables*/
    constructor() {
        this.firstName = 'lenin';
        this.age = 28;
    }  
    /**
     * Metodo que es lanzado luego del contructor, llama los metods y funcionalidades, 
     */
    ngOnInit() {        
        this.changeFirstName();
        //Variables y alcance
        //let tiene valor dentro del bloque
        var a = 8;
        var b = 15;
        if (a === 8) {
            let a = 3;
            var b = 88;
            console.log('En el If',a)
        }
        console.log('Fuera del If', a)
    }           
    //Declaracion de Funciones
    changeFirstName() {
        this.firstName = 'Lenin Samaniego';
    } 
}