/// <reference path="./subjects/index.ts" />
var cpp = new Subjects.Cpp();
var java = new Subjects.Java();
var react = new Subjects.React();
export var cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingCpp: 10,
};
//Cpp Subject
console.log('C++');
cpp.setTeacher(cTeacher);
cpp.getRequirements();
console.log(cpp.getRequirements());
cpp.getAvailableTeacher();
console.log(cpp.getAvailableTeacher());
//Java Subject
console.log('Java');
java.setTeacher(cTeacher);
java.getAvailableTeacher(cTeacher);
console.log(java.getAvailableTeacher(cTeacher));
java.getRequirements();
console.log(java.getRequirements());
//# sourceMappingURL=main.js.map