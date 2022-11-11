import { Class } from '../../models';

const getTeacherClassesQuery = (teacherId: string) => (
  Class.findAll({
    raw: true,
    where: {
      teacher_id: teacherId,
    },
  })
);

export default getTeacherClassesQuery;
