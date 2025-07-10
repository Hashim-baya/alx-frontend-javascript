interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number; // Optional property
    [key: string]: any; // Index signature for additional properties
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);

  interface Directors extends Teacher {
    numberOfReports: number;
  }

  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  }

  console.log(director1);

  interface printTeacher {
    (firstName: string, lastName: string): string;
  }

  const printTeacherFunction: printTeacher = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
  }

    console.log(printTeacherFunction(director1.firstName, director1.lastName));