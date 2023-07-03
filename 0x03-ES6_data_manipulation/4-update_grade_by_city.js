export default function updateStudentGradeByCity(studentList, city, gradeList) {
  if (!Array.isArray(studentList)) {
    return [];
  }

  const filteredStudentList = studentList.filter(
    (value) => value.location === city,
  );

  const filtergradeByCity = filteredStudentList.map((value) => {
    for (const gradeObj of gradeList) {
      if (value.id === gradeObj.studentId) {
        return { ...value, grade: gradeObj.grade };
      }
    }
    return { ...value, grade: 'N/A' };
  });

  return filtergradeByCity;
}
