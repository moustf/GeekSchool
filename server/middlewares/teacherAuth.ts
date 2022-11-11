import { Response, NextFunction } from 'express';

import { CustomError } from '../utils';

const teacherAuth = (req: any, res: Response, next: NextFunction) => {
  try {
    const { user } = req;

    if (user.role === 'teacher') {
      next();
    } else {
      throw new CustomError(401, 'Unauthenticated');
    }
  } catch (error) {
    next(error);
  }
};

export default teacherAuth;
