export default function getListStudentIds(studentArray) {
  if (!Array.isArray(studentArray)) {
    return [];
  }
  const idArray = studentArray.map((value) => value.id);
  return idArray;
}
