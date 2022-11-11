import { NextFunction, Response } from 'express';
import { getClassQuestionsQuery } from '../../queries';

const getClassQuestions = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;
    const { page } = req.query;
    const { count, rows } = await getClassQuestionsQuery(classId, page);

    res.json({ msg: 'success', data: rows, count });
  } catch (error) {
    next(error);
  }
};

export default getClassQuestions;
