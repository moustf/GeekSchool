import { Response, NextFunction } from 'express';
import { studentParentRelationQuery } from '../queries';
import { CustomError } from '../utils';

const studentRelatedToParent = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id, role } = req.user;
    const { studentId } = req.params;
    const { data }:any = await studentParentRelationQuery(id, studentId);
    const isRelated = data.length;

    switch (role) {
      case role === 'student':
        throw new CustomError(401, 'you are not allowed to see your reports');

      case role === 'teacher':
        next();
        break;
      case role === 'parent' && isRelated:
        next();
        break;
      default:
        throw new CustomError(401, 'Unauthenticated');
    }
  } catch (error) {
    next(error);
  }
};

export default studentRelatedToParent;
