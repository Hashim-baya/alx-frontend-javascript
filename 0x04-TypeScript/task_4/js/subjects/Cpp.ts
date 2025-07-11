namespace Subjects {
    export interface Teacher {
        experienceTeachingCpp?: number;
    }

    class Cpp extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingCpp === undefined || this.teacher.experienceTeachingCpp <= 0) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}