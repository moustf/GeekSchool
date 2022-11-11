import { Request, Response, NextFunction } from 'express';
import { postQuestionQuery } from '../../queries/class';
import { CustomError, postQuestionValidate } from '../../utils';

const postQuestion = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { classId } = req.params;
    const { question } = req.body;

    await postQuestionValidate({ classId, question });
    const isData = await postQuestionQuery({ classId, question });

    const data = {
      id: isData.getDataValue('id'),
      question: isData.getDataValue('question'),
      createdAt: isData.getDataValue('createdAt'),
    };

    res.status(201).json({ msg: 'added question successfully', data });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new CustomError(400, 'question is required'));
    } else {
      next(error);
    }
  }
};

export default postQuestion;
