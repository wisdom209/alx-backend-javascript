interface Teacher {
  experienceTeachingC?: number;
}

export default class Cpp extends Subject {
  firstName: string;
  lastName: string;
  experienceTeachingC?: number;

  constructor(
    firstName: string,
    lastName: string,
    experienceTeachingC: number
  ) {
    super(firstName, lastName);
    this.experienceTeachingC = experienceTeachingC;
  }

  getRequirements(): string {
    return 'Here is the list of requirements for Cpp';
  }
  getAvailableTeacher() {
    if (this.experienceTeachingC === undefined) {
      return 'No available teacher';
    }
    return `Available Teacher ${this.firstName}`;
  }
}
