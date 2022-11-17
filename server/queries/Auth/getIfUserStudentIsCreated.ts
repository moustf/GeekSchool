import { Student, User } from '../../models';

const getIfUserStudentIsCreated = (email: string) => (
  Student.findOne({
    attributes: ['id'],
    include: {
      model: User,
      attributes: [],
      where: {
        email,
      },
    },
  })
);

export default getIfUserStudentIsCreated;
