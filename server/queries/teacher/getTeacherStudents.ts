import {
  Class, ClassStudent, Student, User,
} from '../../models';

const getTeacherStudentsQuery = (teacherId: number) => Class.findAll({
  raw: true,
  nest: false,
  attributes: ['teacher_id', 'ClassStudents.student_id', 'ClassStudents.Student.User.img', 'ClassStudents.Student.User.name', 'ClassStudents.Student.User.email'],
  where: {
    teacher_id: teacherId,
  },
  include: [{
    model: ClassStudent,
    attributes: [],
    include: [{
      model: Student,
      attributes: [],
      include: [{
        model: User,
        attributes: [],
      }],
    }],
  }],
});

export default getTeacherStudentsQuery;
