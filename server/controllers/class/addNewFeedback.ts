import { Response, NextFunction } from 'express';
import { addNewFeedbackQuery } from '../../queries';
import {
  CustomError, addNewFeedbackValidation,
} from '../../utils';

const addNewFeedback = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;
    const { classId } = req.params;
    const { feedback } = req.body;

    await addNewFeedbackValidation({ id, classId, feedback });

    const addedFeedback = await addNewFeedbackQuery(id, classId, feedback);

    res.status(201).json({ msg: 'The feedback is added successfully!', data: addedFeedback });
  } catch (err) {
    if (err.name === 'ValidationError') next(new CustomError(400, 'Wrong data is inserted.'));
    else next(err);
  }
};

export default addNewFeedback;
