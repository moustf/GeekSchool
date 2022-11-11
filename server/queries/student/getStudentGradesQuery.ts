import {
  TestStudent, Test, Class, ClassStudent, Assignment, AssignmentStudent,
} from '../../models';

const studentGradesQuery = (id: number) => ClassStudent
  .findAll({
    attributes: ['class_id', 'id'],
    where: { student_id: id },
    include: [{
      model: Class,
      attributes: ['id', 'name'],
      include: [{
        model: Test,
        attributes: ['title', 'id'],
        include: [{
          model: TestStudent,
          where: { student_id: id },
          attributes: ['grade', 'id'],
        }],
      },
      {
        model: Assignment,
        attributes: ['title', 'id'],
        include: [{
          model: AssignmentStudent,
          where: { student_id: id },
          attributes: ['id', 'grade'],
        }],
      },
      ],
    }],
  });
export default studentGradesQuery;
