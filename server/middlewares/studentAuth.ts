import { Response, NextFunction } from 'express';

import { CustomError } from '../utils';

const studentAuth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const role = req.user?.role;

    if (role !== 'student') {
      throw new CustomError(401, 'Unauthenticated!');
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

export default studentAuth;
