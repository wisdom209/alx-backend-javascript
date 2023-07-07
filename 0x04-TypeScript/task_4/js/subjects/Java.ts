interface Teacher {
  experienceTeachingJava?: number;
}

export default class Java extends Subject {
  firstName: string;
  lastName: string;
  experienceTeachingJava?: number;

  constructor(
    firstName: string,
    lastName: string,
    experienceTeachingJava: number
  ) {
    super(firstName, lastName);
    this.experienceTeachingJava = experienceTeachingJava;
  }
  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }
  getAvailableTeacher(): string {
    if (this.experienceTeachingJava === undefined) {
      return 'No available Teacher';
    }
    return `Available Teacher ${this.firstName}`;
  }
}
