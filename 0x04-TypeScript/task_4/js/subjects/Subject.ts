/// <reference path='./index.ts' />
namespace Subjects {
    export class Subject  {
        teacher: Teacher;

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}