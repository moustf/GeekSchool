import {
  AssignmentStudent, User, Student,
} from '../../models';

const getStudentTasksQuery = (assignmentId:string, isSubmitted:any) => AssignmentStudent.findAll({
  raw: true,
  nest: false,
  attributes: { exclude: ['createdAt', 'updatedAt', 'grade'] },
  where: { assignment_id: assignmentId, is_submitted: isSubmitted },
  include: [
    {
      model: Student,
      attributes: {
        exclude: ['id', 'createdAt', 'updatedAt', 'user_id', 'parent_id', 'User.id'],
      },
      include: [{
        model: User,
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'password', 'id', 'mobile', 'location', 'email'],
        },
      }],
    },
  ],

});

export default getStudentTasksQuery;
