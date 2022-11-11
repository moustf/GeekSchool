import { AssignmentStudent, Assignment } from '../../models';

const studentAssignmentQuery = async (id : number, classId : string) => AssignmentStudent
  .findAll({
    attributes: ['id', 'is_submitted', 'material_link',
      'grade', 'assignment_id', 'student_id',
      'Assignment.title' as 'title',
      'Assignment.description' as 'description',
      'Assignment.class_id' as 'class_id',
      'Assignment.createdAt'],
    raw: true,
    nest: false,
    where: {
      student_id: id,
    },
    include: [{
      model: Assignment,
      as: 'Assignment',
      attributes: [],
      where: { class_id: classId },
    }],

  });

export default studentAssignmentQuery;
