import { Response, NextFunction } from 'express';
import { studentParentRelationQuery } from '../queries';
import { CustomError } from '../utils';

const studentAndParentAndTeacher = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id, role } = req.user;
    const { studentId } = req.params;
    const data: any = await studentParentRelationQuery(id, studentId);

    if (role === 'student' || role === 'teacher') next();
    else if (role === 'parent') {
      if (data.length) next();
      else { throw new CustomError(401, 'Unauthenticated'); }
    } else { throw new CustomError(401, 'Unauthenticated'); }
  } catch (error) {
    next(error);
  }
};

export default studentAndParentAndTeacher;
