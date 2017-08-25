export class Employee {
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
    constructor(
        public firstName: string,
        public age: number,
        public position: string,
        public contracted: boolean
    ){}
}