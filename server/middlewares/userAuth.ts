import { Response, NextFunction } from 'express';

import { CustomError, verifyToken } from '../utils';

const userAuth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      throw new CustomError(401, 'Unauthenticated'); // ? Token is invalid.
    }

    const user = await verifyToken(token);

    req.user = user;
    next();
  } catch (error) {
    next(new CustomError(401, 'Unauthenticated'));
  }
};

export default userAuth;
