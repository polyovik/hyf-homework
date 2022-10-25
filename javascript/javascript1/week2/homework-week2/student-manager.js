const class07Students = [];
function addStudentToClass(studentName) {
  if (class07Students.length <= 5 || studentName == 'Queen') {
    class07Students.push(studentName);
    if (class07Students.includes(studentName)) {
      return `Student ${studentName} is already in the class`;
    } 
  } else {
    return `Cannot add more students to class 07. ${studentName} is already in the class.`;
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

console.log(addStudentToClass('Alice'));
console.log(addStudentToClass('John'));
console.log(addStudentToClass('Alex'));
console.log(addStudentToClass('Taja'));
console.log(addStudentToClass('Thomas'));
console.log(addStudentToClass('Mac'));
console.log(addStudentToClass('Queen'));
console.log(addStudentToClass('Kate'));
console.log(addStudentToClass('Kate'));
console.log(addStudentToClass('David'));
console.log(addStudentToClass('Mac'));
console.log(class07Students);
console.log(getNumberOfStudents());
