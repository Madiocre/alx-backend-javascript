interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Eso',
  lastName: 'Cranium',
  age: 27,
  location: 'Mongolia'
}

const student2: Student = {
  firstName: 'Percy',
  lastName: 'Jackson',
  age: 28,
  location: 'Atlantes'
}

const studentList: Array<Student> = [student1, student2];


