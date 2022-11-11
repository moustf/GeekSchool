import { Student, User } from '../../models';

const getParentStudentQuery = (parentId: string) => (Student.findAll({
  raw: true,
  where: {
    parent_id: parentId,
  },
  attributes: ['user_id', 'User.name' as'name', 'User.img' as 'img', 'parent_id'],
  include: [{
    model: User,
    attributes: [],
  }],
}));

export default getParentStudentQuery;
