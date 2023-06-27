export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      let x = 0;
      for (const employee in employeesList) {
        if (employee) {
          x += 1;
        }
      }
      return x;
    },
  };
}
