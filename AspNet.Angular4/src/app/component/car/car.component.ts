import { Component, OnInit } from '@angular/core';

import { Car } from '../../model/car';

import { RequestService } from '../../services/request.service';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    providers: [
        RequestService
    ]
})
/** car component*/
export class CarComponent implements OnInit
{
    public car: Car;
    public listCar: Array<Car>;
    public listUser: Array<any>;
    //public listUser;
    /** car ctor */
    constructor(
        private _requestService: RequestService
    ) {
        this.car = new Car('', '', '', 0.00);
        this.listCar = [
            new Car('auto', 'green', 'toyota', 10000),
            new Car('camioneta', 'red', 'toyota', 20000)
        ];
    }

    /** Called by Angular after car component initialized */
    ngOnInit(): void {
        //Recojer el resultado de una funcion asincronica
        this._requestService.getUser().subscribe(
            result => {
                this.listUser = result;
                if (!this.listUser)
                {
                    console.log('Sin Articulos');
                }
            }, error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            });
        console.log(this._requestService.getTest());
    }

    onSubmit(formCar:any) {
        this.listCar.push(this.car);
        this.car = new Car('', '', '', 0.00);
        formCar.reset();
    }
}