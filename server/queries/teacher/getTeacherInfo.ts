import { User, Teacher } from '../../models';

const teacherInfoQuery = async (teacherId: number) => Teacher
  .findAll({
    where: {
      id: teacherId,
    },
    attributes: [],
    include: {
      model: User,
    },
  });

export default teacherInfoQuery;
