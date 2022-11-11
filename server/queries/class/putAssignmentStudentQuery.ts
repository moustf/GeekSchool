import { Op } from 'sequelize';
import { AssignmentStudent } from '../../models';

const putAssignmentStudentQuery = (
  assignmentId:string,
  isSubmitted:string,
  materialLink:string,
  studentId:string,
) => AssignmentStudent.update({ is_submitted: isSubmitted, material_link: materialLink }, {
  where: {
    [Op.and]: {
      student_id: studentId,
      assignment_id: assignmentId,
    },

  },
  returning: ['is_submitted', 'material_link'],
});

export default putAssignmentStudentQuery;
