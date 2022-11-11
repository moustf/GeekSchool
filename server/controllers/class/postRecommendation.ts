import { Request, Response, NextFunction } from 'express';
import { postRecommendationQuery } from '../../queries';
import { recommendationValidation, CustomError } from '../../utils';

const postRecommendation = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { classId } = req.params;
    const { description, materialLink } = req.body;
    await recommendationValidation({ classId, description, materialLink });
    await postRecommendationQuery(Number(classId), description, materialLink);
    res.status(201);
    res.json({ msg: 'add recommenation successfully' });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new CustomError(400, 'Bad inserted data'));
    }
    next(error);
  }
};

export default postRecommendation;
