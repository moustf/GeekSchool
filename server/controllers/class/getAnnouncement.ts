import { Request, Response, NextFunction } from 'express';
import { getAnnouncementQuery } from '../../queries';

const getAnnouncement = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { classId } = req.params;
    const data:any = await getAnnouncementQuery(classId);
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

export default getAnnouncement;
