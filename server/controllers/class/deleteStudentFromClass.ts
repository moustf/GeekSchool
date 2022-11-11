import { Request, Response, NextFunction } from 'express';
import { deleteStudentFromClassQuery } from '../../queries';
import { deleteStudentFromClassValidation, CustomError } from '../../utils';

const deleteStudentFromClass = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;
    const { studentId } = req.body;

    await deleteStudentFromClassValidation({ classId, studentId });

    await deleteStudentFromClassQuery(classId, studentId);

    res.json({ msg: 'The student deleted successfully!' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(new CustomError(400, 'Wrong data is inserted!'));
    } else next(err);
  }
};

export default deleteStudentFromClass;
