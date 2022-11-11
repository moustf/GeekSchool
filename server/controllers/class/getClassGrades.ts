import { NextFunction, Request, Response } from 'express';
import { getClassGradesQuery } from '../../queries';

const getClassGrades = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;
    const data = await getClassGradesQuery(classId);

    res.status(200).json({ msg: 'success', data });
  } catch (error) {
    next(error);
  }
};

export default getClassGrades;
