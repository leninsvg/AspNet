var person = (function () {
    //Constructor
    function person(age, firstName, lastName) {
        this.fullName = firstName + ' ' + lastName;
        this.firtsName = firstName;
        this.lastName = lastName;
        this.age = age;
        if (age >= 18) {
            this.adult = true;
        }
    }
    ;
    //Funciones
    person.prototype.validateDocument = function (document, documentType) {
        // Inicializacion atributo inicial
        var documentValid = false;
        if (documentType == 'CEDULA' && document.length == 10) {
            documentValid = true;
            return documentValid;
        }
    };
    return person;
}());
//# sourceMappingURL=person.js.map