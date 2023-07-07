/* interface implementation */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
};

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
/* 
-- should print
teacher
Director
Dirtect
*/

const isDirector = (employee: any) => {
  if (employee instanceof Director) {
    return true;
  }
  return false;
};

const executeWork = (employee: Director | Teacher): void => {
  if (employee instanceof Director) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
};

executeWork(createEmployee(200));
executeWork(createEmployee(1000));
/* -- should log
Getting to work
Getting to director tasks
*/

/* String literal types */
type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
};

console.log(teachClass('Math'));
console.log(teachClass('History'));
/* 
-- should log
Teaching Math
Teaching History
*/
