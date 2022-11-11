import { Response, NextFunction } from 'express';

import { CustomError } from '../utils';

const parentAuth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { role } = req.user;
    if (role !== 'parent') {
      throw new CustomError(401, 'Unauthenticated');
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

export default parentAuth;
