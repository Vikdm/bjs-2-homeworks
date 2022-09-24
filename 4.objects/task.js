function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...arrmarks) {
  for (let i = 0; i < arrmarks.length; i++) {
    this.addMark(arrmarks[i]);
  }
}

Student.prototype.getAverage = function () {
  const sum = this.marks.reduce((element, number) => element + number, 0);
  const sumAverage = sum / this.marks.length;
  return sumAverage;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.mark;

  this.excluded = reason;
};
