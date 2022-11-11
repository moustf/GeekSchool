import { Request, Response, NextFunction } from 'express';
import { getStudentHealthsQuery } from '../../queries';

const getStudentHealth = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { studentId } = req.params;
    const data = await getStudentHealthsQuery(studentId);
    res.json({ msg: 'getting all health status successfully', data });
  } catch (error) {
    next(error);
  }
};

export default getStudentHealth;
