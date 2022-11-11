import { Request, Response, NextFunction } from 'express';
import { updateGradPayloadValidate } from '../../utils/validation';
import { putAssignmentTeacherQuery } from '../../queries/class';
import { CustomError } from '../../utils';

const putAssignmentTeacher = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { assignmentId } = req.params;
    const { grade, studentId } = req.body;

    await updateGradPayloadValidate({ grade, studentId });

    const [, data]:any = await putAssignmentTeacherQuery(assignmentId, grade, studentId);
    res.status(204).json({ data, msg: 'updating successfully' });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new CustomError(400, 'Wrong data is inserted!'));
    }
    next(error);
  }
};

export default putAssignmentTeacher;
