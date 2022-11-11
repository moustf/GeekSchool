import { Request, Response, NextFunction } from 'express';
import { postTestQuery } from '../../queries';
import { testValidation, CustomError } from '../../utils';

const postTest = async (req: Request, res:Response, next: NextFunction) => {
  try {
    const { classId } = req.params;
    const { title, notes, date } = req.body;
    await testValidation({
      classId, title, notes, date,
    });
    await postTestQuery(classId, title, notes, date);
    res.status(201).json({ msg: 'Test added successfully' });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new CustomError(400, 'Bad inserted data'));
    }
    next(error);
  }
};

export default postTest;
