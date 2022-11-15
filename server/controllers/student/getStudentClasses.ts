import { Response, NextFunction } from 'express';
import { getStudentClassesQuery } from '../../queries';
import { CustomError } from '../../utils';

const getStudentClasses = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;

    const studentClasses = await getStudentClassesQuery(Number(studentId) || 0);

    if (studentClasses.length === 0) {
      throw new CustomError(404, 'The user id you searched with have no classes!');
    }

    res.json({ msg: 'The student classes have been returned successfully!', data: studentClasses });
  } catch (error) {
    next(error);
  }
};

export default getStudentClasses;
