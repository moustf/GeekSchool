import { Request, Response, NextFunction } from 'express';
import { getReportsQuery } from '../../queries';

const getReports = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { studentId } = req.params;
    const data = await getReportsQuery(studentId);
    res.json({ msg: 'getting all reports successfully', data });
  } catch (error) {
    next(error);
  }
};

export default getReports;
