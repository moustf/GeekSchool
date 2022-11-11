import { Op } from 'sequelize';
import { AssignmentStudent } from '../../models';

const putAssignmentTeacherQuery = (
  assignmentId:string,
  grade:string,
  studentId:string,
) => AssignmentStudent.update({ grade }, {
  where: {
    [Op.and]: {
      student_id: studentId,
      assignment_id: assignmentId,
    },

  },
  returning: ['grade'],
});

export default putAssignmentTeacherQuery;
