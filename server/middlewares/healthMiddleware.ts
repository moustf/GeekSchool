import { Response, NextFunction } from 'express';
import { studentParentRelationQuery } from '../queries';
import { CustomError } from '../utils';

const healthMiddleware = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id, role } = req.user;
    const { studentId } = req.params;
    const data = await studentParentRelationQuery(id, studentId);
    const isRelated = data[0]?.getDataValue('id');
    const userId = data[0]?.getDataValue('user_id');
    switch (true) {
      case role === 'teacher':
        next();
        break;
      case role === 'student' && studentId === userId:
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

export default healthMiddleware;
