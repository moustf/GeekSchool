import { NextFunction, Response } from 'express';
import { getClassStudentsQuery } from '../../queries';

const getClassStudents = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;
    const data = await getClassStudentsQuery(classId);
    res.json({ msg: 'success', data });
  } catch (error) {
    next(error);
  }
};

export default getClassStudents;
