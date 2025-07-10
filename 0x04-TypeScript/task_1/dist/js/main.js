var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacherFunction = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
console.log(printTeacherFunction(director1.firstName, director1.lastName));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var studentInstance = new StudentClass('John', 'Doe');
console.log(studentInstance.workOnHomework());
console.log(studentInstance.displayName());
//# sourceMappingURL=main.js.map