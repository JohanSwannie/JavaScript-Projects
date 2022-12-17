function getStudents(classroom) {
  let {
    supportTeacher,
    classList
  } = classroom;
  let teacher, teachingAssistant, students;

  if (supportTeacher) {
    [teacher, teachingAssistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

const solution1 = document.querySelector('.solution1');

solution1.innerHTML = `${getStudents({
    supportTeacher: false,
    classList: ['Freddy', 'Carl', 'Luke', 'Joe', 'Julie', 'Mary', 'Andrew', 'Brendan', 'Paul', 'Graham', 'Chris']
  })}`;

const solution2 = document.querySelector('.solution2');

solution2.innerHTML = `${getStudents({
    supportTeacher: true,
    classList: ['Freddy', 'Carl', 'Luke', 'Joe', 'Julie', 'Mary', 'Andrew', 'Brendan', 'Paul', 'Graham', 'Chris']
  })}`;
