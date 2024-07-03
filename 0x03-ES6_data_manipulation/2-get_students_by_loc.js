const getStudentsByLocation = (students, loc) => {
  return students.filter((student) => student.location === loc);
}

export default getStudentsByLocation;
