/// <reference path="./index.ts" />
namespace Subjects {

    export interface Teacher {
        experienceTeachingReact?: number;
    }
    export class React implements Teacher {
        experienceTeachingCpp?: number;
        experienceTeachingReact?: number;
        firstName: string;
        lastName: string;
        teacher: Teacher;

       
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeacher(): string {
          if(this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact <= 0) {
              return 'No available teacher';
          } else {
            return `Available Teacher : ${this.teacher.firstName}`
          }
        }
    }
}