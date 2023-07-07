/* creating object with interface in ts */
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

/* interface inheritance */
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17

/* functions in interfaces */
const printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
};

interface printTeacherFunction {
  printTeacher: (firstName: string, lastName: string) => string;
}

/* writing a class in typescript */

interface StudentClassInterface {
  _firstName: string;
  _lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  _firstName: string;
  _lastName: string;

  constructor(firstName: string, lastName: string) {
    (this._firstName = firstName), (this._lastName = lastName);
  }

  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this._firstName;
  }
}
