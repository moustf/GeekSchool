import {
  ClassStudent, Teacher, Class, Assignment, Test, User,
} from '../../models';

const getStudentClassesQuery = (studentId: number) => Class.findAll({
  attributes: ['id', 'name'],
  include: [
    {
      model: ClassStudent,
      attributes: ['id'],
      where: {
        student_id: studentId,
      },
    },
    {
      model: Teacher,
      attributes: ['id'],
      include: [{
        model: User,
        attributes: ['id', 'name'],
      }],
    },
    {
      model: Assignment,
      attributes: ['id', 'title', 'createdAt'],
      order: [
        ['createdAt', 'DESC'],
      ],
      limit: 3,
    },
    {
      model: Test,
      attributes: ['id', 'title', 'date'],
      order: [
        ['date', 'DESC'],
      ],
      limit: 3,
    },
  ],
});

export default getStudentClassesQuery;
