import {
  ClassStudent, Parent, Student, User,
} from '../../models';

const getClassStudentsQuery = (classId: string) => ClassStudent.findAll(
  {
    raw: true,
    // eslint-disable-next-line max-len
    attributes: ['Student.User.name' as 'name', 'Student.User.mobile' as 'MobileNum', 'Student.Parent.User.img' as 'img', 'student_id'],
    where: { class_id: classId },
    include: [{
      model: Student,
      attributes: [],
      include: [{
        model: User,
        attributes: [],
      },
      {
        model: Parent,
        attributes: [],

        include: [{
          model: User,
          attributes: ['name'],
        }],
      }],
    }],
  },
);

export default getClassStudentsQuery;
