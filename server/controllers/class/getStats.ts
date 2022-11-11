import { Request, Response, NextFunction } from 'express';
import { classStats } from '../../queries';

const getStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;

    const stats = await classStats(classId);

    const submitted = stats['0'][0];
    const notSubmitted = stats['1'][0];
    const studentsNum = stats['2'][0];
    const assignmentsNum = stats['3'][0];
    const questionsNum = stats['4'][0];

    res.json({
      msg: 'The data is sent successfully!',
      data: {
        submitted, notSubmitted, studentsNum, assignmentsNum, questionsNum,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default getStats;
