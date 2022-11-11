import { Request, Response, NextFunction } from 'express';
import { updateAssignmentPayloadValidate } from '../../utils/validation';
import { putAssignmentStudentQuery } from '../../queries/class';
import { CustomError } from '../../utils';

const putAssignmentStudent = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { assignmentId } = req.params;
    const { isSubmitted, materialLink, studentId } = req.body;

    await updateAssignmentPayloadValidate({
      assignmentId, isSubmitted, materialLink, studentId,
    });

    const [, data]:any = await putAssignmentStudentQuery(
      assignmentId,
      isSubmitted,
      materialLink,
      studentId,
    );
    res.status(204).json({ data, msg: 'updating successfully' });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new CustomError(400, 'Wrong data is inserted!'));
    }
    next(error);
  }
};

export default putAssignmentStudent;
