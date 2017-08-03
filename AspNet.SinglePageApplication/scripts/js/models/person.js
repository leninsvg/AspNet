var person = (function () {
    function person() {
    }
    //Constructor
    person.prototype.person = function (age, firstName, lastName) {
        this.fullName = firstName + ' ' + lastName;
        this.firtsName = firstName;
        this.lastName = lastName;
        this.age = age;
    };
    ;
    return person;
}());
//# sourceMappingURL=person.js.map