import {
  Student, ClassStudent, Class, Teacher, User,
} from '../models';

const getParentTeachersQuery = (parentId: string) => Student.findAll({
  raw: true,
  nest: false,
  where: { user_id: parentId },

  attributes: {
    exclude: ['createdAt', 'updatedAt', 'user_id', 'parent_id'],
    include: [
      'ClassStudents.Class.Teacher.User.id' as 'id',
      'ClassStudents.Class.Teacher.User.name' as 'name',
      'ClassStudents.Class.Teacher.User.mobile' as 'mobile',
      'ClassStudents.Class.Teacher.User.email' as 'email',
      'ClassStudents.Class.Teacher.User.img' as 'img',
      'ClassStudents.Class.Teacher.User.location' as 'location',
      'ClassStudents.Class.Teacher.User.role' as 'role',
    ],
  },
  include: [{
    model: ClassStudent,
    attributes: [],
    include: [{
      model: Class,
      attributes: [],
      include: [{
        model: Teacher,
        attributes: [],
        include: [{
          model: User,
          attributes: [],
        }],
      }],
    }],
  }],
});

export default getParentTeachersQuery;
