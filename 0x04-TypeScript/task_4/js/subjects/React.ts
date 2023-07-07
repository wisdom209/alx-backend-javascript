interface Teacher {
  experienceTeachingReact?: number;
}

export default class React extends Subject {
  firstName: string;
  lastName: string;
  experienceTeachingReact?: number;

  constructor(
    firstName: string,
    lastName: string,
    experienceTeachingReact: number
  ) {
    super(firstName, lastName);
    this.experienceTeachingReact = experienceTeachingReact;
  }
  getRequirements(): string {
    return 'Here is the list of requirements for React';
  }
  getAvailableTeacher(): string {
    if (this.experienceTeachingReact === undefined) {
      return 'No available Teacher';
    }
    return `Available Teacher ${this.firstName}`;
  }
}
