import { Request, Response, NextFunction } from 'express';
import { getTestsQuery } from '../../queries';

const getTests = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;

    const testsData = await getTestsQuery(classId);

    res.json({ msg: 'The data is sent successfully!', data: testsData });
  } catch (error) {
    next(error);
  }
};

export default getTests;
