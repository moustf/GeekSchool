import { Response, NextFunction } from 'express';
import { getStudentTestsQuery } from '../../queries';

const getStudentTests = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const data:any = await getStudentTestsQuery(studentId);
    res.json({ msg: 'The student tests', data });
  } catch (error) {
    next(error);
  }
};
export default getStudentTests;
