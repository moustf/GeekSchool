import { Response, NextFunction } from 'express';
import { studentAssignmentQuery, teacherAssignmentQuery } from '../../queries';

const getAssignments = async (req: any, res: Response, next:NextFunction) => {
  try {
    const { user } = req;
    const { classId } = req.params;

    if (user.role === 'student') {
      const data = await studentAssignmentQuery(user.id, classId);
      res.json({ msg: 'Student Assignments for this class', data });
    } else {
      const data = await teacherAssignmentQuery(classId);
      res.json({ msg: 'Teacher Assignments for this class', data });
    }
  } catch (error) {
    next(error);
  }
};

export default getAssignments;
