import { Response, NextFunction } from 'express';
import { getStudentTasksQuery } from '../../queries';
import { CustomError } from '../../utils';

const getAllStudentWhoSubmitTasks = async (req:any, res:Response, next:NextFunction) => {
  try {
    const { assignmentId } = req.params;
    const { isSubmitted } = req.query;

    if (typeof Boolean(isSubmitted) !== 'boolean') {
      throw new CustomError(422, 'Unprocessable Entity');
    }
    const data:any = await getStudentTasksQuery(assignmentId, isSubmitted);
    res.json({ msg: 'getting all student successfully', data });
  } catch (error) {
    next(error);
  }
};

export default getAllStudentWhoSubmitTasks;
