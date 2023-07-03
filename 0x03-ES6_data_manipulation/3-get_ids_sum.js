export default function getStudentIdsSum(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList.reduce((acc, current) => acc + current.id, 0);
}
