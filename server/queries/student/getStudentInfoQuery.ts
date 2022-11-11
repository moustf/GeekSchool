import { Student, User } from '../../models';

const getStudentInfoQuery = (studentId: string | number) => User.findAll({
  raw: true,
  nest: false,
  attributes: ['id', 'User.name' as 'name', 'User.mobile' as 'mobile', 'User.email' as 'email', 'User.img' as 'image', 'User.location' as 'location', 'User.role' as 'role'],
  include: {
    model: Student,
    on: {
      user_id: studentId,
    },
    attributes: [],
  },
});

export default getStudentInfoQuery;
