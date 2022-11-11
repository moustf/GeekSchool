import { AssignmentStudent, Assignment } from '../../models';

const teacherAssignmentQuery = async (classId : string) => AssignmentStudent
  .findAndCountAll({

    raw: true,
    nest: false,
    attributes: ['Assignment.id' as 'id', 'Assignment.title' as 'title',
    'Assignment.description' as 'description', 'Assignment.class_id' as 'class_id',
    'Assignment.createdAt', 'AssignmentStudent.is_submitted' as 'is_Submitted'],
    include: [{
      model: Assignment,
      attributes: [],
      where: { class_id: classId },
    }],
    group: ['Assignment.id', 'AssignmentStudent.assignment_id', 'AssignmentStudent.is_submitted'],

  });

export default teacherAssignmentQuery;
