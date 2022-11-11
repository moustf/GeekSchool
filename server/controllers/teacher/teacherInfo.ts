import { Response, NextFunction } from 'express';
import { teacherInfoQuery } from '../../queries';

const teacherInfo = async (req: any, res: Response, next:NextFunction) => {
  try {
    const { id } = req.user;
    const data: any = await teacherInfoQuery(id);
    res.json({ msg: 'Teacher info', data });
  } catch (error) {
    next(error);
  }
};

export default teacherInfo;
