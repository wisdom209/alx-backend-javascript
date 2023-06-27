export default function guardrail(mathFunction) {
  let queueArr;
  let newArray = [];

  try {
    queueArr = mathFunction();
    newArray = [...newArray, queueArr, 'Guardrail was processed'];
  } catch (error) {
    newArray = [
      ...newArray,
      `Error: ${error.message}`,
      'Guardrail was processed',
    ];
  }
  return newArray;
}
