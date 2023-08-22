const fs = require('fs');

const countStudents = (path) => {
  try {
    const returnData = fs.readFileSync(path, 'utf-8');

    const data = returnData.toString().split('\n');

    const allStudents = data.filter((v, i) => i !== 0 && v.length !== 0);

    const csStudents = allStudents.filter((v) => v.toString().endsWith('CS')).map((v) => v.split(',')[0]);
    const sweStudents = allStudents.filter((v) => v.toString().endsWith('SWE')).map((v) => v.split(',')[0]);

    const NUMBER_OF_STUDENTS = allStudents.length;
    const numCsStudents = csStudents.length;
    const csStudentsList = csStudents.join(', ');
    const numSweStudents = sweStudents.length;
    const sweStudentsList = sweStudents.join(', ');

    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    console.log(`Number of students in CS: ${numCsStudents}. List: ${csStudentsList}`);
    console.log(`Number of students in SWE: ${numSweStudents}. List: ${sweStudentsList}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
