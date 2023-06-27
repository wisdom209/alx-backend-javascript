export default function iterateThroughObject(reportWithIterator) {
  let employeeString = '';

  reportWithIterator.forEach((v, i) => {
    if (i !== reportWithIterator.length - 1) {
      employeeString += `${v} | `;
    } else {
      employeeString += v;
    }
  });
  return employeeString;
}
