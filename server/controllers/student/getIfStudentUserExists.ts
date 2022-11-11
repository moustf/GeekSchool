import { Request, Response, NextFunction } from 'express';
import { findUserByEmail } from '../../queries';
import { CustomError } from '../../utils';

const getIfStudentUserExists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;

    const data = await findUserByEmail(email);

    if (data === null || data.getDataValue('role') !== 'student') {
      res.status(404).json({ msg: 'The student user does not exist!' });
    } else res.json({ msg: 'The user does exist!', data });
  } catch (error) {
    next(new CustomError(500, 'Internal server error!'));
  }
};

export default getIfStudentUserExists;
