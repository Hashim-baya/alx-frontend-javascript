/// <reference path="./subjects/index.ts" />

const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

export const cTeacher : Subjects.Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingCpp: 10,
}

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