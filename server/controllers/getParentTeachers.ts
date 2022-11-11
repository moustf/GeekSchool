import { Response, NextFunction } from 'express';
import { getParentTeachersQuery } from '../queries';

const getParentTeachers = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;
    const data = await getParentTeachersQuery(id);
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

export default getParentTeachers;
