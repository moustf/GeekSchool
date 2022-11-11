import { Request, Response, NextFunction } from 'express';
import { getClassFeedbackQuery } from '../../queries';

const getFeedback = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;

    const data = await getClassFeedbackQuery(classId);

    res.json({ msg: 'The data is sent successfully!', data });
  } catch (err) {
    next(err);
  }
};

export default getFeedback;
