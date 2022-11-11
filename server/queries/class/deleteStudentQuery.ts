import { Op } from 'sequelize';
import { ClassStudent } from '../../models';

const deleteStudentFromClassQuery = (classId: string, studentId: string) => ClassStudent.destroy({
  where: {
    [Op.and]: {
      student_id: studentId,
      class_id: classId,
    },
  },
});

export default deleteStudentFromClassQuery;
