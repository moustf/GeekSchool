import {
  User, Student, Teacher, Parent,
} from '../models';

const loginQuery = async (email: string): Promise<any> => {
  const user = await User.findOne({ where: { email } });
  const id = user?.dataValues?.id;
  const role = user?.dataValues?.role;

  if (role === 'student') {
    return Promise.all([user, Student.findOne({ where: { user_id: id } })]);
  }
  if (role === 'teacher') {
    return Promise.all([user, Teacher.findOne({ where: { user_id: id } })]);
  }
  if (role === 'parent') {
    return Promise.all([user, Parent.findOne({ where: { user_id: id } })]);
  }

  return true;
};

export default loginQuery;
