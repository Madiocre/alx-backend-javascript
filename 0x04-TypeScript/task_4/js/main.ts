import { Teacher } from 'subjects/Teacher';
import { React } from 'subjects/React';
import { Cpp } from 'subjects/Cpp';
import { Subject } from 'subjects/Subject';
import { Java } from 'subjects/Java';

export const CPP = 'C++';
export const JAVA = 'Java';
export const REACT = 'React';

export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
};

function logSubjectDetails(subject: string) {
  console.log(subject);
  console.log('Teacher:', cTeacher);
  console.log('Requirements:', cTeacher.getRequirements(subject));
  console.log('Available Teacher:', cTeacher.getAvailableTeacher(subject));
}

logSubjectDetails(CPP);
logSubjectDetails(JAVA);
logSubjectDetails(REACT);

