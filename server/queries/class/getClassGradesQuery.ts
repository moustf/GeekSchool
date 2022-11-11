import {
  TestStudent, Test, Student, User, Assignment, AssignmentStudent, ClassStudent,
} from '../../models';

const getClassGradesQuery = (classId: string) => ClassStudent.findAll({
  where: {
    class_id: classId,
  },
  attributes: ['id'],
  include: [{
    model: Student,
    attributes: ['id'],
    include: [
      {
        model: TestStudent,
        attributes: ['grade', 'student_id'],
        include: [{
          model: Test,
          attributes: ['title', 'class_id'],
          where: {
            class_id: classId,
          },
        }],
      },
      {
        model: AssignmentStudent,
        attributes: ['grade'],
        include: [{
          model: Assignment,
          attributes: ['title', 'class_id'],
          where: {
            class_id: classId,
          },
        }],
      },
      {
        model: User,
        attributes: ['name', 'img'],
      },
    ],
  }],
});

export default getClassGradesQuery;
