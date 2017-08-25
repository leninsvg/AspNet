"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = (function () {
    /*
    public firstName: string;
    public age: number;
    constructor(firstName: string, age: number) {
        this.firstName = firstName;
        this.age = age;
    }*/
    /**
     * Inicializa los atributos, y a su vez se instancian.
     * @param firstName
     * @param age
     * @param position
     * @param contracted
     */
    function Employee(firstName, age, position, contracted) {
        this.firstName = firstName;
        this.age = age;
        this.position = position;
        this.contracted = contracted;
    }
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map