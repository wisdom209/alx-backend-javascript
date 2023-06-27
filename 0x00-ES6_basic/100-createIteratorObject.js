export default function createIteratorObject(report) {
  let employeesArray = [];

  Object.keys(report.allEmployees).forEach((v) => {
    employeesArray = [...employeesArray, ...report.allEmployees[v]];
  });
  return employeesArray;
}
