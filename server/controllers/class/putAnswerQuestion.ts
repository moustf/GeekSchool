import { NextFunction, Response } from 'express';
import { putAnswerQuestionQuery } from '../../queries';
import { CustomError, putAnswerQuestionValidate } from '../../utils';

const putAnswerQuestion = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { classId, questionId } = req.params;
    const { answer } = req.body;

    await putAnswerQuestionValidate({ classId, questionId, answer });

    const data = await putAnswerQuestionQuery({ classId, questionId, answer });
    if (!data[0]) throw new CustomError(400, 'bad request');
    res.send({ msg: 'answer was update', answer: data[1][0].getDataValue('answer') });
  } catch (error) {
    if (error.name === 'ValidationError') next(new CustomError(400, 'answer is required'));

    next(error);
  }
};

export default putAnswerQuestion;
