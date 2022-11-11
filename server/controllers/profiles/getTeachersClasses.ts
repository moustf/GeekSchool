import { Request, Response, NextFunction } from 'express';
import { getTeacherClassesQuery } from '../../queries';

const getTeachersClasses = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { teacherId } = req.params;
    const data = await getTeacherClassesQuery(teacherId);
    res.json({ msg: 'getting all classes successfully', data });
  } catch (error) {
    next(error);
  }
};

export default getTeachersClasses;
