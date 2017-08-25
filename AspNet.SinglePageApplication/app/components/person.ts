
    class person {
        //Constructor
        constructor(age:number, firstName:string, lastName: string) {
            this.fullName = firstName + ' ' + lastName;
            this.firtsName = firstName;
            this.lastName = lastName;
            this.age = age;
            if (age >= 18) {
                this.adult = true;
            }
        };
        //Atributos. Los atributos se inicializan sin ningun decorador inicial
        age: number;
        firtsName: string;
        lastName: string;
        fullName: string;
        adult: boolean;
        document: string;
        documentType: string;

        //Funciones
        validateDocument(document: string, documentType: string) {
            // Inicializacion atributo inicial
            let documentValid: boolean = false;
            if (documentType == 'CEDULA' && document.length == 10) {
                documentValid = true;
                return documentValid;
            }
        }
    }