const student = {
  name : "Raj",
  age : 21,
  degree : "BCA",
}

const employee = {
  ...student,
  age : 22,
}

console.log(student);
console.log(employee);