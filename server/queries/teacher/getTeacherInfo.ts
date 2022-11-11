import { User } from '../../models';

const teacherInfoQuery = async (teacherId: number) => User
  .findAll({
    where: {
      id: teacherId,
    },
  });

export default teacherInfoQuery;
