export default function createIteratorObject(report) {
  let newArray = [];

  Object.keys(report.allEmployees).forEach((v) => {
    newArray = [...newArray, ...report.allEmployees[v]];
  });
  return newArray;
}
