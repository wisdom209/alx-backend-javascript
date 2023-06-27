export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      let x = 0;
      for (let employee in employeesList) {
        x++;
      }
      return x;
    },
  };
}
