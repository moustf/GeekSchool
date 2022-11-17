import { Response, NextFunction } from 'express';
import { studentParentRelationQuery } from '../queries';
import { CustomError } from '../utils';

const studentInfoMiddleware = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id, role } = req.user;
    const { studentId } = req.params;
    const data = await studentParentRelationQuery(id, studentId);
    const isRelated = data[0]?.getDataValue('id');

    switch (true) {
      case role === 'teacher':
        next();
        break;
      case role === 'student':
        next();
        break;
      case role === 'parent' && isRelated > 0:
        next();
        break;
      default:
        throw new CustomError(401, 'Unauthenticated');
    }
  } catch (error) {
    next(error);
  }
};

export default studentInfoMiddleware;
