import { Response, NextFunction } from 'express';
import { getTeacherScheduleQuery } from '../../queries';

const getTeacherSchedule = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;
    const data = await getTeacherScheduleQuery(id);
    res.json({ data, msg: 'successfully' });
  } catch (error) {
    next(error);
  }
};

export default getTeacherSchedule;
