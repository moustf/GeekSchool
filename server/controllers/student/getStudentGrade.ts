import { Response, NextFunction } from 'express';
import { studentGradesQuery } from '../../queries';

const getStudentGrade = async (req: any, res: Response, next:NextFunction) => {
  try {
    const { studentId } = req.params;
    const data:any = await studentGradesQuery(studentId);
    res.json({ msg: 'students grades', data });
  } catch (error) {
    next(error);
  }
};

export default getStudentGrade;
