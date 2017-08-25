
import { Component } from '@angular/core';
import { Employee } from '../../model/employee';

@Component({
    selector: 'myEmployee',
    templateUrl: './employee.component.html'
})

export class EmployeeComponent{
    public employee: Employee;
    public workers: Array<Employee>;
    public externalWorker: boolean;
    public color: string;
    public selectedColor: string;
    constructor() {
        this.employee = new Employee('Lenin', 28, 'Ingeniero Software', true);
        this.workers = [
            new Employee('Lenin', 28, 'Ingeniero Software', true),
            new Employee('bebe', 1, 'llorona', false),
            new Employee('hi', 22, 'Ama de casa', false),
        ]
        this.externalWorker = false;
        this.color = 'green';
        this.selectedColor = '#ccc';
    }

    ngOnInit() {        
        console.log(this.employee);
    }

    changeTypeWorker(value: boolean) {
        this.externalWorker = value;
    }
}