import { Student, Teacher, Parent } from '../../models';

// eslint-disable-next-line consistent-return
const getUserIdFromTableQuery = (role: string, id: number) => {
  if (role === 'teacher') return Teacher.findOne({ where: { user_id: id } });
  if (role === 'student') return Student.findOne({ where: { user_id: id } });
  if (role === 'parent') return Parent.findOne({ where: { user_id: id } });
};

export default getUserIdFromTableQuery;
