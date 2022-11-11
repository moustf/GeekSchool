import { Request, Response, NextFunction } from 'express';
import { putStudentHealthQuery } from '../../queries';

const putStudentHealth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const { body } = req;
    const data = await putStudentHealthQuery({ studentId, body });
    res.json({ data: data[1][0], msg: 'Health was updated' });
  } catch (error) {
    next(error);
  }
};

export default putStudentHealth;
