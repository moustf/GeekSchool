import { Response, NextFunction } from 'express';
import { getParentStudentQuery } from '../../queries';

const getParentStudent = async (req:any, res:Response, next:NextFunction) => {
  try {
    const { id } = req.user;
    const data = await getParentStudentQuery(id);
    res.json({ msg: 'getting all student successfully', data });
  } catch (error) {
    next(error);
  }
};

export default getParentStudent;
