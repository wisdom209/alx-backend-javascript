class Subject implements Subjects.Teacher {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  setTeacher(value: Subjects.Teacher) {
    this.firstName = value.firstName;
    this.lastName = value.lastName;
  }
}
